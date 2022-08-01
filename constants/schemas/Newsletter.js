import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        subscribed: {
            type: Boolean,
            default: true,
        },
        deleted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Newsletter || mongoose.model("Newsletter", NewsletterSchema);
