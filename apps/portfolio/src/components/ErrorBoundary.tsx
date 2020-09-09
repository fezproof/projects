import React from "react";

import Error from "@spectrum-icons/illustrations/Error";
import Centeriser from "./Centeriser";

interface ErrorBoundaryState {
  error: Error;
  errorInfo: any;
}

class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <Centeriser>
          <main>
            <Error />
            <h1>Something went wrong.</h1>
            <div>{this.state.error && this.state.error.toString()}</div>
          </main>
        </Centeriser>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
