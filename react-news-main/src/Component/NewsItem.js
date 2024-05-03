import React, { Component } from "react";

export class NewsItem extends Component {


  render() {
    let { title, description,imageurl,newsUrl,author,date,source  } = this.props;
    return (
      <div className="my-2">
        <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left :'90%',zindex:'1'}}>
            {source}
            <span className="visually-hidden">unread messages</span></span>
          <img
            src={imageurl==null?"https://i.ytimg.com/vi/zdhCB3LpP9g/maxresdefault.jpg":imageurl}
            className="card-img-top"
            alt="cricket News"
          />
         
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {date} </small></p>
            <a href={newsUrl} target = "_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
              ReadMore
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
