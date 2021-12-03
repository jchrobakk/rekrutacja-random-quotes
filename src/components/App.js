import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previousQuote: null,
      quote: null,
    };
  }
  render() {
    return (
      <main>
        <p className="quote">
          {this.state.quote
            ? this.renderQuote(this.state.quote)
            : "Click Next to get random quote"}
        </p>
        <button className="previous">Previous</button>
        <button onClick={this.nextQuote} className="next">
          Next
        </button>
      </main>
    );
  }

  nextQuote = () => {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((resp) => resp.json())
      .then((data) => {
        const quote = data[Math.floor(Math.random() * data.length)];
        this.setState({ quote: quote });
      });
  };

  renderQuote = (quote) => {
    return (
      <div>
        <p className="quote__text">{quote.quote}</p>
        <p className="quote__author">{quote.author}</p>
      </div>
    );
  };
}

export default App;
