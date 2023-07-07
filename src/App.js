import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function App() {
  return (
    <div className="flex w-1200 min-w-900 rounded-3xl overflow-hidden">
      <LeftSide/>
      <RightSide/>
    </div>
  );
}

export default App;
