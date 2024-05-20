import mongoose from 'mongoose';

const iconSchema = new mongoose.Schema({
    dimension : {
        type: String,
        required: true
    },
    img : {
        imgData: Buffer,
        contentType: String
    }
});

export const Icon = mongoose.models.Icon || mongoose.model('Icon', iconSchema);



 