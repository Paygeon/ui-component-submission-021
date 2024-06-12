import mongoose from 'mongoose'


const secretKeySchema = new mongoose.Schema({
  umamiKey: {
    type: String,
    required: true,
    default: ''
  },
  beehiivKey: {
    type: String,
    required: true,
    default: ''
  }
})

const SecretKeys = mongoose.models.SecretKeys || mongoose.model('SecretKeys', secretKeySchema)

export default SecretKeys

