import React, { Component } from 'react';
import * as ApiData from './apiData.js';
import TweetEmbed from 'react-tweet-embed'
import './Page.css';


class Page extends Component {

    state = {
        tweetInfo: []
    }

    componentDidMount() {
        ApiData.getLatest()
        .then( tweetInfo => this.setState( { tweetInfo } ) )
    }

  render() {
    return (
      <div className="Page">
        { (this.state.tweetInfo.length === 0) ?
            <div className='top'>
                <h1> No tweet data available. </h1>
            </div> :
            <div id="tweetData">
                <h1>Latest tweets:</h1>
                <ul className="tweets">
                    { this.state.tweetInfo.map( (tweet, index) =>
                        <li key={index} className="tweet">
                            <div>
                                {(tweet.approval) ? <span className='approval'>Approval Rating: { tweet.approval }%</span> : <span className='approval'>No approval data</span>}
                                {(tweet.disapproval) ? <span className='disapproval'>Disapproval Rating: { tweet.disapproval }%</span> : <span className='disapproval'>No disapproval data</span>}
                                <div className="tweetDate"> Posted on: { tweet.date_posted } </div>
                                <div className="embdedTweet">
                                    <TweetEmbed id={tweet.tweet_id} />
                                </div>
                            </div>
                        </li>
                    )
                    }
                </ul>
            </div>
        }
      </div>
    );
  }
}

export default Page;
