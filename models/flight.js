import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String,
    required: true,
    enum: ['American', 'Delta', 'Frontier', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: {
    type: Number, 
    default: function() {
      return new Date().getFullYear()
    },
    min: 10,
    max: 9999
  },
  departs: Date
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}