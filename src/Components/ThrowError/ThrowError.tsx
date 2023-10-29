import React from "react";

class ThrowError extends React.Component {
  state = {
    error: false,
  };

  componentDidUpdate() {
    if (this.state.error) {
      throw new Error("My test error boundary");
    }
  }

  render(): React.ReactElement {
    return (
      <button
        onClick={() => {
          this.setState({ error: true });
        }}
      >
        Throw Error
      </button>
    );
  }
}

export default ThrowError;
