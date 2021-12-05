import { RETWEET_COLEECTION, TWEET_COLEECTION } from '../firebase'
import store from '../store'
import firebase from 'firebase'

export default async (tweet) => {
    try {
        const doc = RETWEET_COLEECTION.doc()
        await doc.set({
            "id": doc.id,
            "from_tweet_id": tweet.id,
            "uid": store.state.user.uid,
            "created_at": Date.now()
        })
        await TWEET_COLEECTION.doc(tweet.id).update({
            // num_retweets +1 하기(frirebase공식문서 찾아보기)
            "num_retweets": firebase.firestore.FieldValue.increment(1),
        })
    } catch (e) {
        console.log('handle retweet error:', e)
    }
}