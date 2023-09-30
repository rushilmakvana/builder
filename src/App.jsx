import "./App.css";
import Boxes from "./Components/Boxes";
import Choice from "./Components/Choice";
import Items from "./Components/Items";
import Sidebar from "./Components/Sidebar";
// import Box from "./Components/Box";

function App() {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="main">
          <div className="inner">
            <Boxes />
            <Choice />
          </div>
          <Items />
        </div>
      </div>
    </>
  );
}

export default App;
