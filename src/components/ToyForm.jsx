import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    toyName: "",
    toyImg: "",
    toyLikes: 0
  }

  handleSubmit(e){
    e.preventDefault()
    e.target.reset()

    let newToy = {
      name: this.state.toyName,
      image: this.state.toyImg,
      likes: this.state.toyLikes
    }

    let reqPackage = {}
      reqPackage.headers = {"Content-Type" : "application/json"}
      reqPackage.method = "POST"
      reqPackage.body = JSON.stringify(newToy)

    fetch("http://localhost:3000/toys", reqPackage)
      .then(res => res.json())
      .then(newToy => {
        this.props.addNewToy(newToy)
      })

  }

  render() {
    return (
      <div className="container">
        <form onSubmit={(e) => this.handleSubmit(e)} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={(e) => this.setState({toyName: e.target.value})} type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input onChange={(e) => this.setState({toyImg: e.target.value})} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
