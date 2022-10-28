import "./App.css";
import { lazy, Suspense } from "react";
const NavBar = lazy(() => import('./NavBar'))
const Main = lazy(() => import('./Main'));
var App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading NavBar...</div>}>
      <NavBar />
      </Suspense>
      <Suspense fallback={<div>Loading Main...</div>}>
      <Main />
      </Suspense>
    </div>
  );
};
export default App;
