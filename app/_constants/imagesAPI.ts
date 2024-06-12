import axios from "axios";

export async function ImagesFromAPI() {
    let ImagesFetched = {};

    const fetchLogos = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/logos");
            response.data.forEach((logo) => {
                if (logo.theme === "dark") {
                    ImagesFetched = { ...ImagesFetched, dark: logo.img };
                } else if (logo.theme === "light") {
                    ImagesFetched = { ...ImagesFetched, light: logo.img };
                }
            });
        } catch (error) {
            console.log(error.response.data);
        }
    };

    const fetchIcons = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/icons");
            response.data.forEach((icon) => {
                if (icon.size === "512") {
                    ImagesFetched = { ...ImagesFetched, "512": icon.img };
                } else if (icon.size === "128") {
                    ImagesFetched = { ...ImagesFetched, "128": icon.img };
                } else if (icon.size === "190") {
                    ImagesFetched = { ...ImagesFetched, "190": icon.img };
                } else if (icon.size === "svg") {
                    ImagesFetched = { ...ImagesFetched, "svg": icon.img };
                } else if (icon.size === "ico") {
                    ImagesFetched = { ...ImagesFetched, "ico": icon.img };
                }
            });
        } catch (error) {
            console.log(error.response.data);
        }
    };

    const fetchOpenGraphImages = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/images");
            response.data.forEach((image) => {
                if (image.size === "1080") {
                    ImagesFetched = { ...ImagesFetched, "1080": image.img };
                } else if (image.size === "1200") {
                    ImagesFetched = { ...ImagesFetched, "1200": image.img };
                } else if (image.size === "1600") {
                    ImagesFetched = { ...ImagesFetched, "1600": image.img };
                }
            });
        } catch (error) {
            console.log(error.response.data);
        }
    };

    await Promise.all([fetchLogos(), fetchIcons(), fetchOpenGraphImages()]);
    console.log(ImagesFetched);
    return ImagesFetched;
}
