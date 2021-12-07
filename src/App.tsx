import React from "react";

class App extends React.Component {
  render() {
    const helloWorld: string[] = ["Hello World"];
    return (
      <div>
        {helloWorld.map((hw) => (
          <h1>{hw}</h1>
        ))}
      </div>
    );
  }
}

export default App;
