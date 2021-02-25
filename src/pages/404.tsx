import React from "react"
import SEO from "../components/seo"
import "../pages/style.css"

import { Bold404, Container404, Desc404, Link404, Title404 } from "../styles/404"

const NotFoundPage = () => (
  <>
    <SEO title="404 Not Found" />
    <Container404>
      <Title404><Bold404>Page not found.</Bold404> That's all we know.</Title404>
      <Desc404>You can try <Link404 to="/">going Home</Link404>.</Desc404>
    </Container404>
  </>
)

export default NotFoundPage
