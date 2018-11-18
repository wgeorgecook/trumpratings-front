import React, { Component } from 'react';
import * as ApiData from './apiData.js';
import './Page.css';


class Page extends Component {

    state = {
        tweetInfo: []
    }

    componentDidMount() {
        ApiData.getAll()
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
                <h1>Tweet data below: </h1>
                <ul className="tweets">
                    { this.state.tweetInfo.map( (tweet, index) =>
                        <li key={index}>
                            <div>
                                {(tweet.approval) ? <span className='approval'>{ tweet.approval }</span> : <span className='approval'>No approval data</span>}
                                {(tweet.disapproval) ? <span className='disapproval'>{ tweet.disapproval }</span> : <span className='disapproval'>No disapproval data</span>}
                                <div className="tweetDate"> Posted on: { tweet.date_posted } </div>
                                <div className="tweetText"> {tweet.tweet_text } </div>
                                <div className='tweetUrl'>{ tweet.tweet_url }</div>
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
