import React from "react"
import { Row, Col, Container, Button, Jumbotron, Image } from "react-bootstrap"
import { MdPhone, MdPhoneIphone, MdEmail } from "react-icons/md"

import HouseDiagram from "../images/theHouse.svg"
import TopHouse from "../images/topHouse.svg"
import { GiFamilyHouse } from "react-icons/gi";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container>
      <Row>
        <Col>
          <Jumbotron
            style={{
              backgroundColor: "rgba(233,236,239, 0)",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: `0px`,
            }}
            id={"top"}
          >
            <p className="text-center">
              <Image
                src={TopHouse}
                style={{ maxWidth: `460px`, marginBottom: "40px"}}
                rounded
                className={"topHouse"}
              />
            </p>
            <p>
              Whether you are buying a new home, selling your existing one,
              making an investment, or having concerns/issues, RODI SERVICES
              will provide you with the most comprehensive, thorough and
              professional inspection and property management in the industry.
            </p>
            <p>
              <strong>RODI</strong> should be your <strong>FIRST</strong> and{" "}
              <strong>ONLY</strong> choice.
            </p>
            <p>
              If your property representative does not recommend Rodi Services
              LLC do they have your best interest in mind? We work for you and
              only you! We are not there to help sell you the property, but only
              to give our professional inspection/ evaluation for what is
              potentially your biggest investment you will ever make. At Rodi
              Services, we have a unique combination of experience, education
              and knowledge that will protect your investment and transaction.
            </p>
            <p className="text-center">
              <a href="tel:8452683150" className="link-no-style">
                <Button>
                  <MdPhone />
                  (845) 268-3150
                </Button>
              </a>
              <a href="tel:8458930043" className="link-no-style">
                <Button>
                  <MdPhoneIphone />
                  (845) 893-0043
                </Button>
              </a>
              <a href="mailto:yankeeipm@yahoo.com" className="link-no-style">
                <Button>
                  <MdEmail />
                  Email
                </Button>
              </a>
            </p>
          </Jumbotron>
          <Jumbotron
            id="services"
            style={{
              backgroundColor: "rgba(233,236,239, 0)",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h2>SERVICES</h2>
            <p className="text-center">
              <Image src={HouseDiagram} style={{ maxWidth: `500px` }} rounded />
            </p>

            <p>
              <strong>Residential Inspections</strong>
              <br />
              We offer a complete, detailed and comprehensive home inspection
              conducting a non-invasive visual evaluation of accessible areas of
              your home/building, which include: Foundations; crawl areas;
              grading, drainage; roofing; attic, ventilation and insulation;
              framing and structure; interior walls, floor; exterior siding,
              windows, door; decks, patios, walkways; fireplace, chimney;
              electrical system; HVAC; plumbing; water
            </p>

            <p>
              <strong>Pre-Listing Inspections</strong>
              <br />
              This service is for homeowners or building owners looking to sell.
              The pre-inspection can help identify deficiencies in a
              home/building prior to a buyer’s inspection. This will make it
              possible to correct issues that may reduce your home or buildings
              value before listing
            </p>

            <p>
              <strong>Commercial Inspections</strong>
              <br />
              We provide a detailed and comprehensive inspection of commercial
              properties by conducting an extensive visual examination of
              accessible components of the building. Our professional findings
              are reported in a thorough inspection report so that you may
              better weigh your risks.
            </p>

            <p>
              <strong>
                Wood-Destroying Organisms/Termites/Pests Inspection
              </strong>
              <br />
              RODI Services have performed over 5,000 inspections pertaining to
              wood destroying insects and structural pests. We are highly
              skilled to locate termites, carpenter ants, powder post beetles
              and wood borers. We provide you with detailed recommendations on
              the extent of the infestations. We also can provide a full pest
              inspection/ management that will include the evaluation of
              possible troublesome pests, such as rodents, bed bugs, roaches,
              fleas and pantry pests.
            </p>

            <p>
              <strong>
                Mold Inspections/Assessments indoor air quality testing
              </strong>
              <br />
              Mold can be an indoor air quality issue to you, your family or
              employees. Mold is a potential health issue and only a trained
              inspector can spot and expose mold issues within your home or
              building. We perform air quality and bulk sampling for most indoor
              air quality problems through a certified lab that brings you the
              most professional report in the industry. We are licensed and
              certified to perform mold assessment and inspections. Micro
              certified NYS licensed.
            </p>

            <h2>ADDITIONAL SERVICES</h2>
            <p>
              <strong>Structural Repairs</strong>
              <br />
              We provide service to perform structural management, repairs to
              termite, wood destroying damage, foundation cracks and failures;
              structural framing problems; flashing and water issues.
            </p>
            <p>
              <strong>Mold Remediation/Restoration</strong>
              <br />
              As licensed mold remediation contractor and licensed mold
              remediation supervisor we perform all mold remediation project
              management. We also perform management for restoration and cleanup
              protocols for Biohazards for large and small projects. Our
              detailed remediation protocol plans are detailed, accurate and
              properly get the job done right.
            </p>
            <p>
              <strong>Pest Management</strong>
              <br />
              We provide services for all pest management projects from
              consulting, inspecting to project management. Our management
              skills will detail and solve any pest problem with protection for
              your family and the environment in mind.
            </p>
          </Jumbotron>
          <Jumbotron
            style={{
              backgroundColor: "rgba(233,236,239, 0)",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "40px",
            }}
            className={"aboutUs"}
          >
            <h2 id="about">ABOUT</h2>
            <p>
              Mark Rodi is the licensed (home)inspector, NYS home inspection
              instructor, Mold inspector, Mold remediation supervisor, Pest
              inspector of Rodi Services. He has been in the business for over 3
              decades, having performed over 5,000 inspections from home to
              building, mold, termites, radon and pests. His experience began
              with performing home, pest, mold inspections for his father, Paul
              Rodi, P.E. and brother Bart Rodi, P.E., over 30 years ago.
            </p>
            <p>
              <strong>EDUCATION:</strong> Mark holds college degrees in Building
              Construction Engineering (BCET)/ Construction Management (CM):
              Associate/Bachelors (SUNY). He is licensed in Home Inspections,
              Termites, Mold, NYSDOS, NYSDEC, NYSDOL, with extensive experience
              and holds certificates from Perdue University in Wood Destroying
              Organisms, Urban Pest Management and Vector Disease Borne CDC,
              MICRO (mold inspection, consulting and remediation organization).
            </p>
          </Jumbotron>
          <AnchorLink to="/#top" title="Back to Top">
            <GiFamilyHouse
            className="rIcon"
            style={{fontSize: "3rem", textAlign: "center", width: "100%"}}
            />
          </AnchorLink>

        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
