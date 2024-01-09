import { ObjectId, Schema, Document } from "mongoose";
import mongoose from "mongoose";

// enum object for contentType
export enum contenTtype {
    image = "image/jpg",
    image2 = "image/jpeg",
    image3 = "image/png",
    image4 = "image/gif",
    video = "video/mp4",
    video2 = "video/webm",
    video3 = "video/avi",
}

// interface for content
export interface Content extends Document {
    post: ObjectId,
    path: string,
    size: Number,
    type: contenTtype
}

// Schema for content
const ContentSchema = new Schema<Content>({
    post: { type: Schema.Types.ObjectId, required: true, ref: 'posts' },
    path: { type: String, required: true },
    size: { type: Number, required: true },
    type: { type: String, enum: Object.values(contenTtype), required: true },
});

export const ContentModel = mongoose.model('Content', ContentSchema);

export default ContentModel;