/* eslint-disable react/prop-types, import/no-extraneous-dependencies */
import React from "react"
import FirebaseProvider from "./src/containers/FirebaseProvider"

export const wrapRootElement = ({ element }) => (
  <FirebaseProvider>{element}</FirebaseProvider>
)
