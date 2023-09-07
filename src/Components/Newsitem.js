import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let{description,imageUrl,ReadMore,author,published}=this.props;
    return (
      <div>
        <div className="content">
            <div className="image">
                <img src={imageUrl} alt="" srcset="" height="200px" width="200px" />
            </div>
            <div className="news">
                <p>{description}</p>
            </div>
            <div className="author">
              <p>Author:{author}</p>
              <p>Published At:{published}</p>
            </div>
            <div className="button">
              <a href={ReadMore}>Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

