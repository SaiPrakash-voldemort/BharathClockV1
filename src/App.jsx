import Bharath_App_Clock from "./components/Clock";
import Bharath_App_Slogan from "./components/ClockSlogan";
import Bharath_App_name from "./components/Name";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <center>
      <Bharath_App_name />
      <Bharath_App_Slogan />
      <Bharath_App_Clock />
    </center>
  );
}

export default App;
