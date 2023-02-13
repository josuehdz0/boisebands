import { raw } from "express"
import { fakeDb } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"

class BandsService{
  editBandById(bandId, bandData) {
    let foundBand = fakeDb.bands.find(b => b.id == bandId)

    if(!foundBand){
      throw new BadRequest('Bad Band Id')
    }

    if (!bandData.name || !bandData.piece){
      throw new BadRequest("Invalid Band Data")
    }

    foundBand.name = bandData.name
    foundBand.piece = bandData.piece

    return foundBand
  }


  createBand(rawBandData) {
    if (!rawBandData.name || !rawBandData.piece){
      throw new BadRequest("Invalid Band Data")
    }

    rawBandData.id = ('boiseband'+Math.floor(Math.random()*9876564))
    fakeDb.bands.push(rawBandData)
    return rawBandData
  } 
  getBandById(bandId) {
    const band = fakeDb.bands.find(b => b.id == bandId)

    if(!band){
      throw new BadRequest("Bad Band Id")
    }
    return band
  }
  getBands() {
    return fakeDb.bands
  }
  
}

export const bandsService = new BandsService()