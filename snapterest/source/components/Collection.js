import React, {Component} from 'react';
import ReactDOMServer from 'react-dom/server';
import CollectionControls from './CollectionControls';
import TweetList from './TweetList';
import Header from './Header';
import CollectionUtils from '../utils/CollectionUtils';
import CollectionStore from "../stores/CollectionStore";

ß

class Collection extends Component {
    state = {
        collectionTweets: CollectionStore.getCollectionTweets()
    };

    componentDidMount() {
        CollectionStore.addChangeListener(this.onCollectionChange);
    }

    componentWillUnmount() {
        CollectionStore.removeChangeLister(this.onCollectionChange);
    }

    onCollectionChange = () => {
        this.setState({
            collectionTweets: CollectionStore.getCollectionTweets()
        });
    };

    createHtmlMarkupStringOfTweetList = () => {
        const htmlString = ReactDOMServer.renderToStaticMarkup(
            <TweetList tweets={this.state.collectionTweets} />
        );

        const htmlMarkup = {
            html: htmlString
        };

        return JSON.stringify(htmlMarkup);
    };

    render() {
        const {collectionTweets} = this.state;
        const numberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweets);
        let htmlMarkup;

        if (numberOfTweetsInCollection > 0) {
            htmlMarkup = this.createHtmlMarkupStringOfTweetList();

            return (
                <div>
                    <CollectionControls
                        numberOfTweetsInCollection = {numberOfTweetsInCollection}
                        htmlMarkup = {htmlMarkup}
                    />

                    <TweetList
                        tweets={collectionTweets}
                    />
                </div>
            );
        }
        return <Header text = "Your Collection is Empty" />;
    }
}

export default Collection;
