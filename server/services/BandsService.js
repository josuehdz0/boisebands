import { fakeDb } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"

class BandsService{
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