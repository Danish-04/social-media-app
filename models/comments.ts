import { ObjectId, Schema, Document } from "mongoose";

export interface Comments extends Document {
    post: ObjectId,
    user: ObjectId,
    comment: string,
    createdAt: Date
}

export const CommentsSchema = new Schema<Comments>({
    post: { type: Schema.Types.ObjectId, required: true, ref: 'posts' },
    user: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
    comment: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
})