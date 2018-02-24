import React, { PropTypes } from "react"
import { Link } from "phenomic"

import Button from "../../components/Button"

import "./index.css"

const PagePreview = ({ __url, title, date, description }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div className="wrapper">
      <Link to={ __url } className="title">
        { title }
      </Link>
      <div className="meta">
        {
          pageDate &&
            <time key={ pageDate.toISOString() }>
              { pageDate.toDateString() }
            </time>
        }
      </div>
      <div className="description">
        { description }
        { " " }
      </div>
      <Link to={ __url } className="readMore">
        <Button secondary>{ "Read More →" }</Button>
      </Link>
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
}

export default PagePreview
