import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    dimension : {
        type: String,
        required: true
    },
    img : {
        imgData: Buffer,
        contentType: String
    }
});
 const Image = mongoose.models.Image || mongoose.model('Image', imageSchema);

 export default Image;

