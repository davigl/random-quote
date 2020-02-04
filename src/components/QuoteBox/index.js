import React, { useEffect, useState } from "react";
import { random } from "../../utils";
import quotes from "../../mock/data.js";

import "./styles.scss";

const QuoteBox = () => {
  const [currentQuote, setCurrentQuote] = useState({});
  const [currentTweet, setCurrentTweet] = useState("");

  const newQuote = () => {
    const colors = [
      "#9b59b6",
      "#342224",
      "#f39c12",
      "#b8965f",
      "#4db8d6",
      "#b44dd6",
      "#e6dd63",
      "#e67f63"
    ];
    const randomColor = colors[Math.floor(random(0, colors.length - 1))];
    const randomQuote = quotes[Math.floor(random(0, quotes.length - 1))];
    const tweet = `https://twitter.com/intent/tweet?hashtags=quotes&text="${randomQuote.quote}" ${randomQuote.author}`;

    document.documentElement.style.setProperty("--background", randomColor);
    setCurrentQuote(randomQuote);
    setCurrentTweet(tweet);
  };

  useEffect(() => {
    newQuote();
  }, []);

  return (
    <main id="quote-box">
      <div id="text">
        <p>
          <i className="fa fa-quote-left"> </i> {currentQuote.quote}
        </p>
      </div>
      <div id="author">
        <p>- {currentQuote.author}</p>
      </div>
      <div id="medias">
        <a id="tweet-quote" href={currentTweet}>
          <i className="fa fa-twitter" />
        </a>

        <button id="new-quote" onClick={newQuote}>
          New Quote
        </button>
      </div>
    </main>
  );
};

export default QuoteBox;
