import React, { useState } from 'react';
import './Quotes.css';
import useFetch from '../Customhook/useFetch';

const Quotes = () => {
    const { data: quotes, loading } = useFetch('https://type.fit/api/quotes');
    const [quote, setQuote] = useState({
        text: "Life is beautiful",
        author: "sourav vai",
    });

    const random = () => {
        if (quotes.length > 0) {
            const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
            setQuote(selectedQuote);
        }
    };

    return (
        <div id='Quote' className='container'>
            <div className="quote-title">Quotes:</div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <div className='quote'>{quote.text}</div>
                    <div>
                        <div className='line'></div>
                        <div className="bottom">
                            <div className="author">{quote.author.split(',')[0]}</div>
                            <div className="icons">
                               <button className="generate"> <i className="fa fa-refresh" onClick={random}></i></button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Quotes;
