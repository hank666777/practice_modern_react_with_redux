import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import SearchImages from "./api"
import {useState} from "react";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    console.log('Do a search with', term);
    let result = await SearchImages(term)
    setImages(result)
  }
  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </div>
  )
}

export default App;