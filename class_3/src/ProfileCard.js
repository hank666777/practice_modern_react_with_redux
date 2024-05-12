export default function ProfileCard({title, handle, image, content}) {
  // let title = props.title;
  // let handle = props.handle;

  // using called destructuring
  // It is when we try to pull off a property
  //  from an object and create a variable
  //  with the same name at the same time
  // let { title, handle } = props
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="logo"/>
        </figure>
      </div>

      <div className="media-content">
        <p className="title is-4">{title}</p>
        <p className="subtitle is-6">{handle}</p>
      </div>

      <div className="content">
        {content}
      </div>

    </div>
  )
}