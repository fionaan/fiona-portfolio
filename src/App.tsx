import Intro from "./components/Intro";
import OverlayGlow from "./components/OverlayGlow";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <OverlayGlow
        children={
          <>
            <Intro />
            <TechStack />
          </>
        }
      />
    </>
  );
}

export default App;
