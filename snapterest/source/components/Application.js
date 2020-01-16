import React, {Component} from 'react';
import Stream from './Stream';
import Collection from './Collection';

class Application extends Component {
    state = {
        collectionTweets: {}
    };

    addTweetToCollection = (tweet) => {
        const {collectionTweets} = this.state;

        collectionTweets[tweet.id] = tweet;
        this.setState({
            collectionTweets: collectionTweets
        });
    };

    // (tweet) 가 파라미터이고, 이걸 가지고 향후에 어떤 로직이 돌아가는지가 => {} 에 정의되는 구조
    removeTweetFromCollection = (tweet) => {
        const {collectionTweets} = this.state;

        delete collectionTweets[tweet.id];

        this.setState({
            collectionTweets: collectionTweets
        });
    };

    removeAllTweetsFromCollection = () => {
        this.setState({
            collectionTweets: {}
        });
    };

    render() {
        const {
            addTweetToCollection,
            removeTweetFromCollection,
            removeAllTweetsFromCollection
        } = this;

        return (
            <div className={"container-fluid"}>
                <div className={row}>
                    <div className={"col-md-4 text-center"}>
                        <Stream onAddTweetToCollection = {addTweetToCollection}/>
                    </div>
                    <div className={"col-md-8"}>
                        <Collection
                            tweets = {this.state.collectionTweets}
                            onRemoveTweetFromCollection = {removeTweetFromCollection}
                            onRemovromCollection = {removeAllTweetsFromCollection}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Application;