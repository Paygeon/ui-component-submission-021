import mongoose, { Schema } from 'mongoose';

const LogoSchema = new Schema({
    theme: {
        type: String,
        required: true,
    },
    img: {
        type : String,
        required: true,
    },
});


const Logo = mongoose.models.Logo || mongoose.model('Logo', LogoSchema);
export default Logo;
