import * as React from "react";
import HelloWorld from "./HelloWorld/Show";

class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld message="Hello World!" />
      </div>
    );
  }
}

export default App;
