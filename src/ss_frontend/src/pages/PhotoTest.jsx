import { uploadImage } from '../../../config/cloudinary'
import React, { useState } from 'react'
import profilePlaceholder from "../assets/logo/blankprofpic.png";

const PhotoTest = () => {
    const [image, setImage] = useState("");
    async function handleImageClick() {
        document.getElementById("fileInput").click();
    }
    const handleImage = async (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const validatedFileTypes = [
                "image/jpeg",
                "image/png",
                "image/jpg",
                "image/webp",
            ];

            if (validatedFileTypes.includes(file.type)) {
                try {
                    const url = await uploadImage(file, setImageLoading);
                    if (url) {
                        setImage(url);
                    } else {
                        throw new Error("Failed to upload image.");
                    }
                } catch (error) {
                    console.log(error);
                }
            } else {
                e.target.value = "";
            }
        }
    };
    return (
        <div

            onClick={() => {
                handleImageClick();
            }}
        >
            <input
                type="file"
                style={{ display: "none" }}
                id="fileInput"
                accept="image/*"
                onChange={(e) => {
                    handleImage(e);
                }}
            />
            <img
                id="profileImage"
                src={image === "" ? profilePlaceholder : image}
                alt="Upload a file"
                className="object-cover w-24 h-24 rounded-full"
            />
        </div>
    )
}

export default PhotoTest