import { LIKE_COLEECTION, RETWEET_COLEECTION, USER_COLEECTION } from "../firebase"

export default async (tweet, currentUser) => {
    // Adding user info
    const doc = await USER_COLEECTION.doc(tweet.uid).get()
    tweet.profile_image_url = doc.data().profile_image_url
    tweet.email = doc.data().email
    tweet.username = doc.data().username
    // tweet = { ...tweet, ...doc.data() }

    // adding retweet info
    const retweetSnapshot = await RETWEET_COLEECTION.where('from_tweet_id', '==', tweet.id).where('uid', '==', currentUser.uid).get()
    if (retweetSnapshot.empty) {
        tweet.isRetweeted = false
    } else {
        tweet.isRetweeted = true
    }
    // adding likes info
    const likeSnapshot = await LIKE_COLEECTION.where('from_tweet_id', '==', tweet.id).where('uid', '==', currentUser.uid).get()
    if (likeSnapshot.empty) {
        tweet.isLiked = false
    } else {
        tweet.isLiked = true
    }
    return tweet
}
