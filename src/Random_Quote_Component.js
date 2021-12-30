import React from "react";

const quotes = require('./quotes.json')
const colors = require('./colors.json')
  
  
  class QuoteMachine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        quote: "This is the default quote",
        author: "Default Author",
        color: "#B5D00E",
        tweet:"",
      };
      this.newQuote = this.newQuote.bind(this);
    }
    newQuote(event){
      const random = Math.floor(Math.random() * quotes.length);
      let currentQuote = quotes[random].quote;
      let currentAuthor = quotes[random].author;
      const randomColor = Math.floor(Math.random() * colors.length)
      this.setState({
        quote: currentQuote,
        author: currentAuthor,
        color: colors[randomColor],
        tweet: 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
      })

            
    }
    render() {
      return (
        <div className='app transition-bkg' style={{backgroundColor: this.state.color}}>
        <div id='quote-box' className='container-sm text-center p-3 mb-2 bg-dark text-white'>
          <h1 id='text' className='transition-cntnt' style={{color: this.state.color}}>{this.state.quote}</h1>
          <p id='author'>{this.state.author}</p>
            <div id='bottom-row'>
                <button style={{backgroundColor: this.state.color}} type="button" className="btn transition-bkg" id='new-quote' onClick={this.newQuote}>New Quote</button>
                <a id='tweet-quote' href={this.state.tweet} className='twitter-share-button' type="button" role="button"><i style={{color: this.state.color}} className="fab fa-twitter fa-3x transition-cntnt"></i></a>
            </div>
        </div>
        </div>
      );
    }
  }
  
export default QuoteMachine;