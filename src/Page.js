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
                <h1>Latest Tweet Data</h1>
                <ul className="tweets">
                    { this.state.tweetInfo.map( (tweet, index) =>
                        <li key={index} className="tweet">
                            <div>
                                {(tweet.approval) ? <div className='approval'>Approval Rating: { tweet.approval }%</div> : <div className='approval'>No approval data</div>}
                                {(tweet.disapproval) ? <div className='disapproval'>Disapproval Rating: { tweet.disapproval }%</div> : <div className='disapproval'>No disapproval data</div>}
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
