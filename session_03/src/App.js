import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImages from "./images/alexa.png";
import CortanaImages from "./images/cortana.png";
import SiriImages from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <hr/>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImages}
                content="Alexa was created Amazon and helps you buy things."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImages}
                content="Cortana was made by Microsoft. Who knows what it does?"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImages}
                content="Siri was made by Apple and is being phased out."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App;