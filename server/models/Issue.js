import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Issue = new Schema({
    title: {type: String},
    description: { type: String},
    responsible: {type: String},
    sevirity: {type: String},
    status: {type: String, default: 'Open'}
});

export default mongoose.model('Issue', Issue);