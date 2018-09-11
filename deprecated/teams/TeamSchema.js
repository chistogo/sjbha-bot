import mongoose from 'mongoose';

const teamSchema = mongoose.Schema({
    user: String,
    userID: String,
    team: String,
    oldTeam: String,
    resist: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('TeamSchema', teamSchema);