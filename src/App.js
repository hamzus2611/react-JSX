import './App.css';
import myWonderfulImage from "./imageInSrc.jpg"
import './style.css'

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1 className="red">BMW </h1>
        <br ></br>
        <img src={myWonderfulImage} alt="imageInSrc" /> 
        <br></br>
        <img src="imageInPublic.jpg" alt="imageInPublic" />
      </div>
      <video style={{width:"320",height:"240"}} src="myVideo.mp4" type="video/mp4" controls>
      </video>

    </div>
  );
}

export default App;
