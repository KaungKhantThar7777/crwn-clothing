import React, { Component } from "react";
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from "./error-boundary.styles";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(err, info) {
    console.log(err, info);
  }
  render() {
    if (this.state.hasError)
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>Sorry, the page is broken.</ErrorImageText>
        </ErrorImageOverlay>
      );

    return this.props.children;
  }
}
