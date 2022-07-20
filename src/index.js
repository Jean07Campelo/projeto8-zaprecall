import ReactDOM from "react-dom";

import HomeScreen from "./HomeScreen";

function App() {
  return (
    <>
      <HomeScreen />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));