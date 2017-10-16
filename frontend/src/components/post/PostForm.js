import React from 'react'

const PostForm = ({options, onChange, post, onSave}) => {

  return (
    <form>
      {/* Id should be an auto-generated number */}
      {/* timestamp should be Date.now() */}
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={post.title}
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label>Body</label>
        <input
          type="text"
          className="form-control"
          name="body"
          value={post.body}
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label>Author</label>
        <input
          type="text"
          className="form-control"
          name="author"
          value={post.author}
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          className="form-control"
          name="category"
          onChange={onChange}>
          <option value="">Select Category</option>
          {options.map((option) => {
            return <option key={option} value={option}>{option}</option>;
          })}
        </select>
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

export default PostForm
