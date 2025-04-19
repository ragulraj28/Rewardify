import { UploadIcon } from "../../../assets/icons/icon";

const UploadImage = ({image, setImage}) => {

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
          <div className="flex items-center gap-7 text-tertiary">
            {image ? 
              <figure className="h-25 max-w-25 w-full rounded-lg overflow-hidden">
                <img src={image} alt="Store Preview" className="h-full w-full object-cover" />
              </figure>
            :
              <label className="flex items-center justify-center border-2 border-dashed rounded-[20px] h-25 max-w-25 w-full cursor-pointer">
                <UploadIcon />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            }
            <div>
              {image ? 
                <p onClick={() => setImage(null)}>Remove Image</p> 
              :
                <>
                  <p className="mb-3 font-medium">Add Profile Image</p>
                  <p className="text-xs font-medium">Browse your Gallery or take a Picture from the phone Camera to upload</p>
                </>
              }
            </div>
          </div>
    </>
  );
};

export default UploadImage;
