import { LIKE_COLEECTION, TWEET_COLEECTION } from '../firebase'
import store from '../store'
import firebase from 'firebase'

export default async (tweet) => {
    try {
        // 좋아요 완료
        if (tweet.isLiked) {
            // 좋아요 삭제
            const snapshot = await LIKE_COLEECTION.where('from_tweet_id', '==', tweet.id).where('uid', '==', store.state.user.uid).get()
            await snapshot.docs[0].ref.delete()
            // 좋아요 갯수 삭제
            await TWEET_COLEECTION.doc(tweet.id).update({
                "num_likes": firebase.firestore.FieldValue.increment(-1),
            })
        // 좋아요 미완료
        } else {
            const doc = LIKE_COLEECTION.doc()
            await doc.set({
                "id": doc.id,
                "from_tweet_id": tweet.id,
                "uid": store.state.user.uid,
                "created_at": Date.now()
            })
            await TWEET_COLEECTION.doc(tweet.id).update({
                // num_retweets +1 하기(frirebase공식문서 찾아보기)
                "num_likes": firebase.firestore.FieldValue.increment(1),
            })
        }
    } catch (e) {
        console.log('handle retweet error:', e)
    }
}