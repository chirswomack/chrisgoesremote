import React from "react"

import "./index.css"

const Footer = () => (
  <footer className="footer">
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <p>
      <a
        href={ process.env.PHENOMIC_HOMEPAGE }
        className="phenomicReference"
      >
        { "Website generated with " }
        <span className="phenomicReferenceName">
          {  `<${ process.env.PHENOMIC_NAME} />` }
        </span>
      </a>
      <span className="phenomicReferenceName">
        <a
          href={ `/admin` }
          className="phenomicReference">
        Login to CMS
        </a>
      </span>
      <span className="phenomicReferenceName">
        <a
          href={ `https://www.mdwp.de` }
          className="phenomicReference">
        Netlify-CMS integration by mdwp
        </a>
      </span>
    </p>
  </footer>
)

export default Footer
