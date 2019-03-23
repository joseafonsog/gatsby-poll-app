import React from "react"
import PropTypes from "prop-types"
import FirebaseContext from "../context/FirebaseContext"
import firebase from "../services/firebase"

class FirebaseProvider extends React.Component {
  // static propTypes = {
  //   children: PropTypes.element,
  //   firebase: PropTypes.object.isRequired,
  // }

  // static childContextTypes = {
  //   firebase: PropTypes.object,
  // }

  // getChildContext() {
  //   const { firebase } = this.props

  //   return {
  //     firebase,
  //   }
  // }

  render() {
    const { children } = this.props

    return (
      <FirebaseContext.Provider value={firebase}>
        {children}
      </FirebaseContext.Provider>
    )
  }
}

export default FirebaseProvider
