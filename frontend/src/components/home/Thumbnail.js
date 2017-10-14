import React from 'react'

const Thumbnail = ({post}) => {

  return (
    <div>
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <div className="caption">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p><a href="#" className="btn btn-primary" role="button">Edit</a> <a href="#" className="btn btn-default" role="button">Delete</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Thumbnail
