import React, {Component} from 'react'
// Stateless version:
// const withClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedComponent {...props}/>
//     </div>
//   )
// }

// Statefull version:
// Class factory (function returns class on demand)
const withClass = (WrappedComponent, className) => {
  // some state
  return class extends Component { // anonymous class
    render() {
      return (
        <div className={className}>
          <WrappedComponent {...this.props}/>
        </div>
      )
    }
  }
}

export default withClass