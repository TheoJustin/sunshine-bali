import { Cloudinary } from "@cloudinary/url-gen";

export const cld = new Cloudinary({ cloud: { cloudName: "djg4ybxvx" } });

export async function uploadImage(file, onLoading) {
    onLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "c9digoqw");
    
    // const response = await fetch(
    //     `https://api.cloudinary.com/v1_1/djg4ybxvx/image/upload`,
    //     {
    //         method: "POST",
    //         body: formData,
    //     }
    // );

    // if (response.ok) {
    //     const data = await response.json();
    //     onLoading(false);
    //     return data.secure_url;
    // } else {
    //     onLoading(false);
    //     throw new Error("Upload failed");
    // }
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/djg4ybxvx/image/upload`, // replace with your cloud_name
        formData
      );
      console.log(response.data);
      return response.data.secure_url;
    } catch (error) {
      console.error(error);
    }
}
