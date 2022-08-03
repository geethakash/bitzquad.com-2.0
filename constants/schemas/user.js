import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            default: null,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: Number,
            required: true,
        },
        thumbnail: {
            type: String,
            default: "",
        },
        deleted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
