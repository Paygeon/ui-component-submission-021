import mongoose from 'mongoose';

const websiteInformationSchema = new mongoose.Schema({
    heroHeader: {
        type: String,
        required: true
    },
    heroSubHeader: {
        type: String,
        required: true
    },
    breakerTopSubtext: {
        type: String,
        required: true
    },
    breakerHeader: {
        type: String,
        required: true
    },
    breakerSubHeader: {
        type: String,
        required: true
    },
    breakerContent: {
        type: String,
        required: true
    },
});

// Use the correct naming convention for the model
const WebsiteInformation = mongoose.models.WebsiteInformation || mongoose.model('WebsiteInformation', websiteInformationSchema);

export default WebsiteInformation;
