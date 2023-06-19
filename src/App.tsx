import { BrowserRouter } from "react-router-dom";
import "./App.css";
import PlayerProvider from "./context/ContextProvider";
import { PlayerRouter } from "./router/PlayerRouter";

function App() {
  return (
    <>
      <PlayerProvider>
        <BrowserRouter>
          <PlayerRouter />
        </BrowserRouter>
      </PlayerProvider>
    </>
  );
}

export default App;
