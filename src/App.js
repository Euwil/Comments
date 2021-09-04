import React from 'react';
import axios from 'axios';

class CommentBox extends React.Component {
constructor (props) {
  super(props)
  this.state = {
    data: [],
    form: {
      name: '',
      comment: ''
    }
  }
  
}

componentDidMount() {
   fetch('https://jordan.ashton.fashion/api/goods/30/comments')
   .then((response) => response.json())
   .then(data => setData(data));
    const setData = (data) => {
      this.state.data.push(data)
      console.log(this.state.data);
    }
    /* if (localStorage.getItem('state')) {
      this.setState({ ...JSON.parse(localStorage.getItem('state')) })
    } */
  }

  addComment = () => {
    axios.post('https://jordan.ashton.fashion/api/goods/30/comments', 
    {name: this.state.form.name,
    text:this.state.form.comment,
  },)
    .then(function (response) {
      if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText))
      } return Promise.resolve(response)
    })
    .then(function(response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data);
    })
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {
    return (
      <div className="comment-box">
        <div>{this.state.data.data}</div>
        <form onSubmit={this.addComment} className="comment-form">
          <label>Имя: <input
            className= "name-input"
            type="text"
            value = {this.state.form.name}
            name="name"
            onChange={this.handleChange}
            required /></label>
          <label>Комментарий: <textarea
          className="comment-input"
            name="comment"
            dvalue={this.state.form.name}
            onChange={this.handleChange}
            required></textarea>
          </label>
          <button type="submit" onClick={this.addComment} className="submit-btn">Добавить комментарий</button>
        </form>
      </div>
    )
  }
}

export default CommentBox;