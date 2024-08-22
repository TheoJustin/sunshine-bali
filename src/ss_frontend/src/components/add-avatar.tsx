import { useEffect, useRef, useState } from 'react';

export default function AddAvatar({ onChange, className, disabled, currentImg} : any) {
  const [image, setImage] = useState(currentImg);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    
    }
  };
  const handleImageChange = (files: FileList | null, ev: any) => {

    if (files && files.length > 0) {
      const file = files[0];

      const reader = new FileReader();
      console.log(file)
      reader.onload = (e) => {
        if (e.target?.result) {
          setImage(e.target.result.toString());
          onChange(file);

        }
      };
      reader.readAsDataURL(file);
      setImage(null);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="relative">
        <div className={`rounded-[50%] overflow-hidden relative border-gray-300 ${className}`} onClick={handleImageClick}>
          {image && <img src={image} alt="Profile Preview" className='object-cover w-full h-full'/>}
        </div>
        <input type="file"        
          onChange={(e) => {
              handleImageChange(e.target.files, e)
            }} 
            ref={fileInputRef}
            style={{ display: 'none' }}
          disabled={disabled}
        />
      </div>
    </div>
  );
};


