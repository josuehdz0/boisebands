import { bandsService } from "../services/BandsService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";

export class BandsController extends BaseController{
  constructor(){
    super('api/bands')

    this.router
      .get('', this.getBands)
      .get('/:bandId', this.getBandById)
      .post('', this.createBand)
      .put('/:bandId',this.editBandById)
  }

  getBands(req, res, next){
    try {
      let bands = bandsService.getBands()
      res.send(bands)
    } catch (error) {
      next(error)
    }
  }
  getBandById(req,res,next){
    try {
      let bandId = req.params.bandId
      logger.log(bandId)
      const band = bandsService.getBandById(bandId)
      res.send(band)
    } catch (error) {
      next(error)
    }
  }

  createBand(req,res,next){
    try {
      let rawBandData = req.body
      let newBand = bandsService.createBand(rawBandData)
      res.send(newBand)
    } catch (error) {
      next(error)
    }
  }

  editBandById(req,res,next){
    try {
      let bandData = req.body
      let bandId = req.params.bandId

      let updatedBand = bandsService.editBandById(bandId, bandData)
      res.send(updatedBand)
    } catch (error) {
      next(error)
    }
  }




}