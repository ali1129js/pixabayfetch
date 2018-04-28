/**
 * @Author: Ali
 * @Date:   2018-04-26T20:06:29+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-04-28T15:28:08+02:00
 */
import React,{Component,Fragment} from 'react'






class Input extends Component {
  constructor(){
    super()
    this.state = {}
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e){
    const pixaBayApi = "https://pixabay.com/api/?key="
    const API_KEY = '8804245-155ed4ab1b84647eeb9fbf6ad'
    const searchTerm = encodeURIComponent(this.refs.input.value)
    const endpoint =pixaBayApi+API_KEY+"&q="+searchTerm
    console.log(endpoint)
    const fetchOption = {
      method:'GET'
    }
    e.preventDefault()
    fetch(endpoint, fetchOption)
    .then(d => d.json())
    .then(d => {
      this.setState({pixaBay:d})
    })
    .catch(err => {
      console.error(err);
    })

  }
  render(){
    return (
      <Fragment>
        <form
          className="form-group"
          onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Enter your search"
            ref='input'
            className="form-control"
          />
          <button type='submit' className="btn btn-success"> Search PixaBay </button>
        </form>
      </Fragment>
    )
  }
}
export default Input
/*
this.setState({
  term:this.refs.input.value
},() =>
this.props.handleInput({term:this.refs.input.value})
)
*/
