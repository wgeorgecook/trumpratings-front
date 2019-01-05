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
                <h1>Latest Tweets from @realDonaldTrump</h1>
                <h2>Polling data from <a href="https://news.gallup.com/poll/203198/presidential-approval-ratings-donald-trump.aspx">Gallup Polls</a></h2>
                <ul className="tweetMap">
                    { this.state.tweetInfo.map( (tweet, index) =>
                        <li key={index} className="tweetItem">
                            {(tweet.approval) ? <div className='approval'>{ tweet.approval }% approving</div> : <div className='approval'>No approval data</div>}
                            {(tweet.disapproval) ? <div className='disapproval'>{ tweet.disapproval }% disapproving</div> : <div className='disapproval'>No disapproval data</div>}
                            <TweetEmbed id={tweet.tweet_id} className="embededTweet"/>
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
