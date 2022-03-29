
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOBD_URI || 'mongodb://localhost/symmetrical-journey', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;