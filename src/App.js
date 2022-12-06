import Block from "./components/Block";
import 'normalize.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Block title="General Info" info={[["Name",["First Name", "Last Name"]], ["Year Of Birth", ["Kahapon Lang"]]]}/>
      <Block title="Educational Info" info={[["Secondary",["Input School",]], ["Tertiary", ["Input School"]]]}/>
      <Block title="Experience" info={[["Work", ["Work Input"]]]}/>
    </div>
  );
}

export default App;
