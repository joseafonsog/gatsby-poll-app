import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from "styled-components"

import Auth from "../containers/Auth"
import Header from "../components/Header/"
import { Container as BaseContainerStyles } from "../styledComponents/layout"

import "./index.css"
import { StaticQuery, graphql, withPrefix } from "gatsby"
import FirebaseContext from "../context/FirebaseContext"

const Container = styled(BaseContainerStyles)`
  padding-top: 0;
`

const TemplateWrapper = ({ children, ...props }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <FirebaseContext.Consumer>
        {firebase => (
          <Auth firebase={firebase}>
            {auth => (
              <div>
                <Helmet
                  title={data.site.siteMetadata.title}
                  meta={[
                    {
                      name: "description",
                      content: "Create polls for  stuf and things",
                    },
                    { name: "keywords", content: "polling, rating" },
                    { name: "msapplication-TileColor", content: "#08AEEA" },
                    { name: "theme-color", content: "#2AF598" },
                  ]}>
                  <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={withPrefix("/favicons/apple-touch-icon.png")}
                  />
                  <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href={withPrefix("/favicons/favicon-32x32.png")}
                  />
                  <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href={withPrefix("/favicons/favicon-16x16.png")}
                  />
                </Helmet>
                <Header
                  background="background-image: linear-gradient(116deg, #08AEEA 0%, #2AF598 100%)"
                  title={data.site.siteMetadata.title}
                  {...auth}
                />
                <Container>
                  {children({
                    ...props,
                    ...auth,
                    firebase,
                  })}
                </Container>
              </div>
            )}
          </Auth>
        )}
      </FirebaseContext.Consumer>
    )}
  />
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
}

export default TemplateWrapper
