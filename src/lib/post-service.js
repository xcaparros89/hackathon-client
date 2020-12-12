import axios from "axios";

class Post {
  constructor() {
    this.posts = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  getAll = async() => {
    try {
        const allPosts = await this.posts.get('/posts')
        return allPosts.data
    } catch (error) {
        console.log(error)
    }
  }

  getPost = async(id) => {
    try {
        const thePost = await this.posts.get(`/posts/${id}`)
        console.log(thePost)
        return thePost.data
    } catch (error) {
        console.log(error)
    }
  }

  addComment = async(id) => {
    try {
        const thePost = await this.posts.post(`/posts/${id}/addComment`)
        return thePost.data
    } catch (error) {
        console.log(error)
    }
  }

  addFav = async(id) => {
    try {
        const thePost = await this.posts.post(`/posts/${id}/addToFav`)
        return thePost.data
    } catch (error) {
        console.log(error)
    }
  }

  deleteComment = async({id, commentId}) =>{
    try {
        const thePost = await this.posts.delete(`/posts/${id}/deleteComment/${commentId}`)
        return thePost.data
    } catch (error) {
        console.log(error)
    }
  }


}

const axiosRequestFunctions = new Post();

export default axiosRequestFunctions;
