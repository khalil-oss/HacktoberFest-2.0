import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  _id: ObjectId,
  title: String,
  description: String,
  instructor: { type: ObjectId, ref: 'User' },
  category: ["Programming", "Design", "Business"],
  difficulty: ["Beginner", "Intermediate", "Advanced"],
  price: Number,
  thumbnail: String,
  syllabus: [String],
  isApproved: Boolean,
  createdAt: Date
})

const CourseModel = mongoose.model("courses",CourseSchema)

export {CourseModel}