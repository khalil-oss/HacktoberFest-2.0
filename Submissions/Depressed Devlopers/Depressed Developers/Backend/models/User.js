import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    
  _id: ObjectId,
  name: String,
  email: String,
  password: String,
  role: ["student", "instructor", "admin"],
  profilePicture: String,
  createdAt: Date

})

const UserModel = mongoose.Model("users" , UserSchema)
export {UserModel}