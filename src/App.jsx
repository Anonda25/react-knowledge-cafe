import "./App.css";
import Blog from "./Component/Bolgs/Blog";
import Navber from "./Component/Navber/Navber";

function App() {
  return (
    <div className="w-11/12 mx-auto ">
      <Navber></Navber>
      <Blog></Blog>
    </div>
  );
}

export default App;
