import React, {Component} from 'react'

// Use only for wrapping component which can fails! Not for all code
// Class works for production mode only
class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }
  // react 16 feature method
  componentDidCatch = (error, info) => {
    this.setState({hasError: true, errorMessage: error})
  }

  render() {
    if (this.state.hasError) { // show custom message for production
      return <h1>Something went wrong</h1>
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary