const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true});

const adminSchema = new mongoose.Schema({
    title:'String',
    sDesc:'String',
    lDesc:'String',
    image:'String',
})
const adminModel = mongoose.model('post',adminSchema)

module.exports = adminModel;