
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOBD_URI || 'mongodb://localhost/symmetrical-journey', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;