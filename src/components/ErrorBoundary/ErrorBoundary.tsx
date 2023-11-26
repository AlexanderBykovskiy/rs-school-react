import React from "react";
import { typeProps, typeState } from "./ErrorBoundary.types";
import classes from "./ErrorBoundary.style.module.css";
import { font } from "@/styles/fonts";

class ErrorBoundary extends React.Component<typeProps, typeState> {
  constructor(props: typeProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div
          className={`${classes.wrapper}  ${font.className}`}
          data-testid="error-boundary-component"
        >
          <div className={classes.container}>
            <div className={classes.header}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes.headerIcon}
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 9v4"></path>
                <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z"></path>
                <path d="M12 16h.01"></path>
              </svg>
              <h2>Something went wrong.</h2>
            </div>

            <details>
              <summary className={classes.summary}>Show details</summary>
              <div className={classes.errorText}>
                <div>{this.state.error && this.state.error.toString()}</div>
                <div>{this.state.errorInfo.componentStack}</div>
              </div>
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
