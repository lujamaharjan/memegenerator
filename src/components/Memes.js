import React, { Component } from "react";

class Memes extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
    this.handler = this.handler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    this.setState({ randomImg: randMemeImg });
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        console.log(memes);
        this.setState({ allMemeImgs: memes });
        console.log(this.state.allMemeImgs[0]);
      });
  }

  render() {
    return (
      <div className="bg-white">
        <form className="p-4" onSubmit={this.handleSubmit}>
          <label forhtml="topText">Top Text :</label>
          <input
            className="form-control"
            type="text"
            name="topText"
            id="topText"
            value={this.state.topText}
            onChange={this.handler}
          />
          <label forhtml="bottomText">Bottom Text :</label>
          <input
            className="form-control"
            type="text"
            name="bottomText"
            id="bottomText"
            value={this.state.bottomText}
            onChange={this.handler}
          />
          <br />
          <button className="btn btn-block btn-danger lead">Generate</button>
        </form>
        <br />

        <div className="thumbnail text-center">
          <img
            id="imgg"
            src={this.state.randomImg}
            alt=""
            className="mx-auto d-block"
          />

          <h1 className="text-white caption1">{this.state.topText}</h1>
          <h1 className="text-white caption2">{this.state.bottomText}</h1>
        </div>
      </div>
    );
  }
}

export default Memes;
