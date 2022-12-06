import Block from "./components/Block";
import 'normalize.css';
import './App.css';
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isForPublish: false
    }
    this.readyForPublish = this.readyForPublish.bind(this);
  }

  readyForPublish() {
    this.setState({
      isForPublish: true
    });
  }

  render() {
    return ( (!this.state.isForPublish) ?
      (<div className="App">
        <Block title="General Info" info={[["Name",["First Name", "Last Name"]], ["Year Of Birth", ["Kahapon Lang"]]]} forPublish={this.isForPublish}/>
        <Block title="Educational Info" info={[["Secondary",["Input School",]], ["Tertiary", ["Input School"]]]} forPublish={this.isForPublish}/>
        <Block title="Experience" info={[["Work", ["Work Input"]]]} forPublish={this.isForPublish}/>
        <button onClick={this.readyForPublish}>Ready For Publish</button>
      </div>)
      :
      (<div className="App">
      <Block title="General Info" info={[["Name",["First Name", "Last Name"]], ["Year Of Birth", ["Kahapon Lang"]]]} forPublish={this.state.isForPublish}/>
      <Block title="Educational Info" info={[["Secondary",["Input School",]], ["Tertiary", ["Input School"]]]} forPublish={this.state.isForPublish}/>
      <Block title="Experience" info={[["Work", ["Work Input"]]]} forPublish={this.state.isForPublish}/>
    </div>)
    );
  }
}

export default App;
