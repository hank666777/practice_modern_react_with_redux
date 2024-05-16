import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("clicked");
  }
  return (
    <div className="App">
      <div>
        <Button success rounded outline onClick={handleClick}>Click me!!</Button>
      </div>
      <div>
        <Button danger outline>Buy Now!</Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button primary rounded>Hide Ads!</Button>
      </div>
      <div>
        <Button secondary outline>Something!</Button>
      </div>
    </div>
  )
}

export default ButtonPage;