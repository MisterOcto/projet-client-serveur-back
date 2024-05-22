const mongoose = require("mongoose");

const beerSchema = mongoose.Schema(
    {
        message: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        likers: {
            type: [String],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("beer", beerSchema);
