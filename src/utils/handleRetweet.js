import { RETWEET_COLLECTION, TWEET_COLEECTION } from '../firebase'
import store from '../store'
import firebase from 'firebase'

export default async (tweet) => {
    try {
        // 리트윗 완료
        if (tweet.isRetweeted) {
            // 리트윗 삭제
            const snapshot = await RETWEET_COLLECTION.where('from_tweet_id', '==', tweet.id).where('uid', '==', store.state.user.uid).get()
            await snapshot.docs[0].ref.delete()
            // 리트윗 갯수 삭제
            await TWEET_COLEECTION.doc(tweet.id).update({
                num_retweets: firebase.firestore.FieldValue.increment(-1),
            })
        // 리트윗 미완료
        } else {
            const doc = RETWEET_COLLECTION.doc()
            await doc.set({
                id: doc.id,
                from_tweet_id: tweet.id,
                uid: store.state.user.uid,
        created_at: Date.now(),
            })
            await TWEET_COLEECTION.doc(tweet.id).update({
                // num_retweets +1 하기(frirebase공식문서 찾아보기)
                num_retweets: firebase.firestore.FieldValue.increment(1),
            })
        }
    } catch (e) {
        console.log('handle retweet error:', e)
    }
}