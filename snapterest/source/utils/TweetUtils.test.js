import TweetUtils from "./TweetUtils";

describe('TweetUtils', () => {
    test('getListOfTweetIds returns an array of tweet ids', () => {
        const tweetsMock = {
            tweet1: {},
            tweet2: {},
            tweet3: {}
        };

        const expectedListOfTweetIds = [
            'tweet1',
            'tweet2',
            'tweet3'
        ];

        const actualListOfTweetIds = TweetUtils.getListOfTweetIds(tweetsMock);

        expect(actualListOfTweetIds).toEqual(expectedListOfTweetIds);
    });
});

