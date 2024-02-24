import Warehouse from "./components/Warehouse/Warehouse";
import "./styles/global.scss";

function App() {
  return (
    <div className="app">
      <p>Hello</p>
      <Warehouse
        warehouse={"Warehouse"}
        address_line_1={"1"}
        address_line_2={"2"}
        contact={"us"}
        number={"123"}
        email={"123@today.tom"}
      />
    </div>
  );
}

export default App;
