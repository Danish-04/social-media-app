import mongoose, { Schema, ObjectId, Document } from "mongoose";

export interface PostLikes extends Document {
    post: ObjectId,
    user: ObjectId,
    createdAt: Date
}

const PostLikesSchema = new Schema<PostLikes>({
    post: { type: Schema.Types.ObjectId, required: true, ref: 'posts' },
    user: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
    createdAt: { type: Date, required: true, default: Date.now },
})

export const PostLikesModel = mongoose.model('PostLikes', PostLikesSchema)

export default PostLikesModel