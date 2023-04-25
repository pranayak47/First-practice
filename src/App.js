import logo from './logo.svg';
// import './App.css';
import Profile from './component/profilecard'

function App() {
  let src1 ="https://www.kindpng.com/picc/m/497-4973038_profile-picture-circle-png-transparent-png.png"
  let description1 = "'Lorem ipsum dolor sit amet, consectetur adipiscing elit."

  let src2 ="https://images.app.goo.gl/HQirbq8SgEEeiZUn6"
  let description2 ="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

  let src3 ="https://images.app.goo.gl/eH6pFdUsNypZvPMo7"
  let description3 ="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"


  return (
    <div className="App">
      <profile image ={src1} designation ="UI UX DEGINER" name ="Your Name" description ={description1} />
      <profile image ={src2} designation ="UI UX DEGINER" name ="Your Name" description ={description2} />
      <profile image ={src2} designation ="UI UX DEGINER" name ="Your Name" description ={description3} />
    </div>
  );
}

export default App;
