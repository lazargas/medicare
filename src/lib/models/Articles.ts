const mongoose = require('mongoose');


const ArticlesSchema = new mongoose.Schema({
    Image_URL: {
        type: String,
        required: true
    },
    URL: {
        type: String,
        required: true
    },
    author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
    breadcrumbs: [
        {
            level: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            },
            link: {
                type: String,
                default: null
            }
        }
    ],
    content: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    },
    tags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Tags',
            required: true
        }
    ],
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    updated_at: {
        type: Date,
        required: true
    },
    views: {
        type: Number,
        default: 0
    }
});

export default mongoose.models.Articles || mongoose.model('Articles', ArticlesSchema);
