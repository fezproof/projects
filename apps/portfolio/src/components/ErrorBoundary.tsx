import React from "react";
import {
  Flex,
  IllustratedMessage,
  Heading,
  Content,
} from "@adobe/react-spectrum";

import Error from "@spectrum-icons/illustrations/Error";

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
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <IllustratedMessage>
            <Error />
            <Heading>Something went wrong.</Heading>
            <Content>{this.state.error && this.state.error.toString()}</Content>
          </IllustratedMessage>
        </Flex>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
