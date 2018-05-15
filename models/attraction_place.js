const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// create attraction place schema and model
const attractionPlaceSchema = new Schema({
  placeId: {
    type:Number,
    required:[true, 'Place ID field is required']
  },
  placeName: {
    type: String,
    required: [true, 'Name field is required']
  },
  engPlaceName: {
    type: String,
    required: [true, 'English name field is required']
  },
  mainImage: {
    type: String,
    required: [true, 'Main image field is required']
  },
  imageGallery: {
    type: [String],
    required: [true, 'Image gallery field is required']
  },
  placeType: {
    type: [String],
    required: [true, 'Place type field is required']
  },
  address: {
    type: [String],
    required: [true, 'Address field is required']
  },
  tel: {
    type: String
  },
  website: {
    type: String
  },
  description: {
    type: [String],
    required: [true, 'Description field is required']
  },
  workingTime: {
    type: String
  },
  itinerary: {
    type: String
  },
  carPark: {
    type: String
  },
  coordinates: {
    type:Object,
    required: [true, 'Coordinates field is required']
  },
  rate: {
    type: Number,
    required: [true, 'Rate field is required']
  },
  extraInfo: {
    type: [String]
  },
  comments: {
    type: [String]
  }
})

const AttractionPlace = mongoose.model('attractionPlace', attractionPlaceSchema)

module.exports = AttractionPlace