import Navbar from "./components/Navbar.js";
import InputForm from "./components/InputForm.js"
import "./App.css";

function App() {
  return (
    <>
    <div className="container">
      <Navbar branding="TextUtils" home ="Home" about="About Project" about_page="/"/>
      <InputForm heading="Add Text to Analyze" placeholder="Paste your text here..." heading2="Processed Text" placeholder2="Your Processed Text"/>
    </div>
    </>
  );
}

export default App;
