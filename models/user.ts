
import mongoose, { Schema, Document } from "mongoose";


// enum object for Gender

export enum Gender {
    male = "male",
    female = "female",
    other = "other",
}

// interface for User
export interface User extends Document {
    name: String,
    age: Number,
    password: String,
    phone: String,
    gender: Gender
};


// User Schema
const UserSchema = new Schema<User>({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    gender: { type: String, enum: Object.values(Gender), required: true },
});

export const UserModel = mongoose.model('User', UserSchema);

export default UserModel;

