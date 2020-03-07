/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Navbar from "./navBar"

import ogImage from '../images/rodi-icon.png'
const siteOgImage = `https://www.rodiservice.com${ogImage}`

const Layout = ({ children, pageInfo }) => (
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
      <>
      <Helmet
          title={`Rodi Services LLC`}
          meta={[
            { name: 'description', content: 'Residential Inspections, Pre-Listing Inspections, Commercial Inspections, Wood-Destroying Organisms/Termites/Pests Inspection, Mold Inspections/Assessments indoor air quality testing & More!' },
            { name: 'keywords', content: 'home inspection, residential inspection,  commercial inspection, rodi, mark rodi' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content:'https://www.rodiservice.com' },
            { property: 'og:site_name', content:'Rodi Services LLC' },
            { property: 'og:title', content:'Rodi Services LLC' },
            { property: 'og:description', content:'Residential Inspections, Pre-Listing Inspections, Commercial Inspections, Wood-Destroying Organisms/Termites/Pests Inspection, Mold Inspections/Assessments indoor air quality testing & More!' },
            { property: 'og:image', content:`${siteOgImage}` },
            { property: 'og:image:secure_url', content:`${siteOgImage}` },
            { property: 'og:image:type', content:'image/png' },
            { property: 'og:image:width', content:'512' },
            { property: 'og:image:height', content:'512' },
            { property: 'og:image:alt', content:'rodiservice.com' },
          ]}
        />
        <Container fluid className="px-0 main">
          <Navbar pageInfo={pageInfo} />
          <Row noGutters>
            <Col>
              <Container className="mt-5">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <small>
                  &copy; {new Date().getFullYear()} Rodi Services, LLC
                </small>
              </footer>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout
