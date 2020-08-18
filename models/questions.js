const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videoSchema = new Schema(
    //add property of day, type date
    {   
        day: {
            type: Date,
            default: Date.now
        },
        title:{
            type: String,
            required: "Add video title"
        },
        description:{
            type: String,
            required: "Add video description"
        },
        vieoUrl: {
            type: String,
            required: "https://youtu.be/JmwIUBGBb9I"
        },
        level:{
            type: Number,
            required: "https://youtu.be/32oHIYU4pk8"
        },
        questions: [
            {
                q: {
                    type: String,
                    trim: true,
                    required: "Add Your Exercise"
                },
                answer: {
                    type: Boolean,
                    required: "Select Exercise Type"
                },
                
            }
        ]
    }
)

const Workout = mongoose.model("questions", videoSchema);

module.exports = questions;