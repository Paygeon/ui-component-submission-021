import mongoose from 'mongoose';

const iconSchema = new mongoose.Schema({
    dimension : {
        type: String,
        required: true
    },
    img : {
        type : String,
        required: true
    }
});

export const Icon = mongoose.models.Icon || mongoose.model('Icon', iconSchema);



 