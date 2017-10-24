import React from 'react'

const CommentForm = ({onChange, comment, onSave}) => {

  return (
    <form>
      <div className="form-group">
        <label>Body</label>
        <input
          type="text"
          className="form-control"
          name="body"
          value={comment.body}
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label>Author</label>
        <input
          type="text"
          className="form-control"
          name="author"
          value={comment.author}
          onChange={onChange}
        />
      </div>

      <input
        type="submit"
        value="Save"
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  )
}

export default CommentForm
