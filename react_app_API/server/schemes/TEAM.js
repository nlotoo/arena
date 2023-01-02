const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({

    teamName: {
        type: String,

    },
    score: {
        type: Number
    }

}

)

module.exports = mongoose.model("Team", teamSchema);