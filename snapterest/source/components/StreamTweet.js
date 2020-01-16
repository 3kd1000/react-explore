import React, {Component} from 'react';
import Header from './Header';
import Tweet from './Tweet';

class StreamTweet extends Component {

    componentWillMount() {
        console.log('[Snapterest] StreamTweet: 1. Running componentWillMount()');

        this.setState({
            numberOfCharactersIsIncreasing: true,
            headerText: 'Latest public photo from Twitter'
        });

        window.snapterest = {
            numberOfReceivedTweets: 1,
            numberOfDisplayedTweets: 1
        };
    }

    componentDidMount = () => {
        console.log('[Snapterest] StreamTweet: 3. Running componentDidMount()');

        const componentDOMRepresentation = ReactDOM.findDOMNode(this);

        window.snapterest.headerHtml =
            componentDOMRepresentation.children[0].outerHTML;
        window.snapterest.tweetHtml =
            componentDOMRepresentation.children[1].outerHTML;
    };

    componentWillReceiveProps(nextProps) {
        console.log('[Snapterest] StreamTweet: 4. Running componentWillReceiveProps()');
        const {tweet: currentTweet} = this.props;

        const {tweet: nextTweet} = nextProps;

        const currentTweetLength = currentTweet.text.length;
        const nextTweetLength = nextTweet.text.length;
        const isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
        let headerText;



    }


    componentWillUnmount() {
        console.log('[Snapterest] StreamTweet: 8. Running componentWillUnmount()');

        delete window.snapterest;
    }

    render() {
        console.log('[Snapterest] StreamTweet: Running render()');

        const {headerText} = this.state;
        const {tweet, onAddTweetToCollection} = this.props;

        return (
            <section>
                <Header text={headerText}/>
                <Tweet
                    tweet={tweet}
                    OnImageClick={onAddTweetToCollection}
                />
            </section>
        );
    }
}

export default StreamTweet;

