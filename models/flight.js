import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: {type: Number, min: 0}
}, {
  timestamps: true
})

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
  departs: Date,
  tickets: [ticketSchema]
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}