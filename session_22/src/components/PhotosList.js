import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import PhotosListItem from "./PhotosListItem";
import Button from "./Button";
import Skeleton from "./Skeleton";

function PhotosList({ album }) {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  // console.log('fetch: ', data, 'error: ', error, 'isFetching: ', isFetching);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = (event) => {
    addPhoto(album)
  }

  let content;
  if (isFetching) {
    content = <Skeleton className="h-8 w-8" times={2}/>
  } else if (error) {
    content = <div>Error fetching photos...</div>
  } else {
    content = data.map(photo => {
      return <PhotosListItem key={photo.id} photo={photo} />
    })
  }
  return (
    <div>
      <div className="m-2 flex flex-row items-conter justify-between">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}></Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>

  )
}

export default PhotosList;