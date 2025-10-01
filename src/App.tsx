import Intro from "./components/Intro";
import OverlayGlow from "./components/OverlayGlow";
import TechStack from "./components/TechStack";
import Works from "./components/Works";

function App() {
  return (
    <>
      <OverlayGlow
        children={
          <>
            <Intro />
            <TechStack />
            <Works />
          </>
        }
      />
    </>
  );
}

export default App;
