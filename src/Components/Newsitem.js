import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let{description,imageUrl}=this.props;
    return (
      <div>
        <div className="content">
            <div className="image">
                <img src={imageUrl} alt="" srcset="" height="200px" width="200px" />
            </div>
            <div className="news">
                <p>{description}</p>
            </div>
        </div>
      </div>
    )
  }
}
