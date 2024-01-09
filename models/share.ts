
import { ObjectId, Schema, Document } from "mongoose";
import mongoose from "mongoose";
export interface Share extends Document {
    post: ObjectId,
    user: ObjectId,
    createdAt: Date
}

const ShareSchema = new Schema<Share>({
    post: { type: Schema.Types.ObjectId, required: true, ref: 'posts' },
    user: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
    createdAt: { type: Date, required: true, default: Date.now },
})

export const ShareModel = mongoose.model('Share', ShareSchema)

export default ShareModel