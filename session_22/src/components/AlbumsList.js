import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import Skeleton from "../components/Skeleton";
import Button from "../components/Button";
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  // console.log('fetch albums: ', data, error, isLoading)
  const [addAlbum, results] = useAddAlbumMutation();
  // results 的內容，{
  //    isError, isLoading, isSuccess, isUninitialized, originalArgs, status ...
  // }
  // console.log('results: ', results);
  const handleAddAlbum = () => {
    addAlbum(user);
  }

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={1} />
  } else if (error) {
    content = <div>Error loading albums.</div>
  } else {
    content = data.map(album => {
      return <AlbumsListItem key={album.id} album={album} />;
    })
  }

  return <div>
    <div className="m-2 flex flex-row items-center justify-between">
      <h3 className="text-lg font-bold">Albums for {user.name}</h3>
      <Button loading={results.isLoading} onClick={handleAddAlbum}>
        + Add Album
      </Button>
    </div>
    <div>{content}</div>
  </div>;
}

export default AlbumsList;
