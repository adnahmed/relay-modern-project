import Topics from "../Enums/Topics";

export default interface CommentOrRecommendation {
    key: string
    date: Date
    value: string
    topic: Topics
}
