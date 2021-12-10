import React from "react";

class HelloWorld extends React.Component {
  render() {
    const helloWorld: string[] = ["Hello World"];
    return (
      <div>
        {helloWorld.map((hello) => (
          <h1>{hello}</h1>
        ))}
      </div>
    );
  }
}

export default HelloWorld;
