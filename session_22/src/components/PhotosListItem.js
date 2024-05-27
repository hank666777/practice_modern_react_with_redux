import { GoTrash } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

function PhotosListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotoMutation()
  const handleRemovePhoto = () => {
    removePhoto(photo)
  }
  return (
    <div onClick={handleRemovePhoto} className="relative m-2">
      <img className="h-20 w-20" src={photo.url} alt="rendom pic" />
      <div className="absolute inset-0 flex items-start justify-start hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrash className="text-3xl"/>
      </div>
    </div>
  )
}

export default PhotosListItem;