import mongoose, { Schema, ObjectId, Document } from "mongoose";


export interface Follow extends Document {
    user: ObjectId,
    following: ObjectId,
    createdAt: Date
}

const FollowSchema = new Schema<Follow>({
    user: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
    following: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
    createdAt: { type: Date, required: true, default: Date.now },
})

export const FollowModel = mongoose.model('Follow', FollowSchema)

export default FollowModel