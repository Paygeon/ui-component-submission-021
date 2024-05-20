import mongoose, { Schema } from 'mongoose';

const LogoSchema = new Schema({
    theme: {
        type: String,
        required: true,
        unique: true,
    },
    svg: {
        type : String,
        required: true,
    },
});


const Logo = mongoose.models.Logo || mongoose.model('Logo', LogoSchema);
export default Logo;
