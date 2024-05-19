import ImageShow from "./ImageShow";
import './ImageList.css';

function ImageList({ images }) {
  let renderImages = images.map((image, index) => (
    <div key={image.id} >
      <ImageShow image={image}/>
    </div>
  ))
    .sort((a, b) => a.name > b.name);
  return (
    <div>
      ImageList: {images.length}
      <br/>
      <div className="image-list">{renderImages}</div>
    </div>
  )
}

export default ImageList;