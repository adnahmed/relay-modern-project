import "./App.css";
import React, { ReactNode, startTransition, lazy, Suspense } from "react";

function App() {
  return (
    <div>
      <NavBar />
      <TitleBar />
      </div>
  );
}
function TitleBar() {

}
function NavBar() {
    return (<>
        <TitleBanner />
        <FarmImage />
    </>)
}
function TitleBar() {
    return (
    <>

    </>);
}

function TitleBanner() {
    return (<>Kauser's Farm</>);
}
function FarmImage() {
    return (<img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" alt="Farm Image"></img>)
}
export default App;


