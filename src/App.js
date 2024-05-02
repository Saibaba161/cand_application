import SelectGrouping from "./components/selectlists";
import FreeSolo from "./components/searchbar";


function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <div className="components">
      <SelectGrouping />
      <FreeSolo className="FreeSolo" />
      </div>
    </div>
  );
}

export default App;
