import * as React from "react";
import ShowHelloWorldStore from "./Store";

interface Props {
  message: string;
}

class HelloWorld extends React.Component<Props> {
  store = new ShowHelloWorldStore();
  componentDidMount() {
    this.store.load(this.props.message);
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default HelloWorld;
