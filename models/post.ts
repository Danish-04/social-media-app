import { ObjectId, Schema, Document } from "mongoose";
import mongoose from "mongoose";


// enum object for Gender

export enum postType {
    text = "text",
    image = "image",
    video = "video",
}

// enum object for post
export enum postStatus {
    public = "public",
    private = "private",
}

// interface for post
export interface Post extends Document {
    user: ObjectId
    privacy: postStatus
    createdAt: Date,
    updatedAt: Date,
    caption: string,
    title: string,
    type: postType
}

// Schema for post
const PostSchema = new Schema<Post>({
    user: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
    privacy: { type: String, enum: Object.values(postStatus), required: true },
    createdAt: { type: Date, required: true, default: Date.now },
    updatedAt: { type: Date, required: true, default: Date.now },
    caption: { type: String, required: true },
    title: { type: String, required: true },
    type: { type: String, enum: Object.values(postType), required: true },
});

export const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;


