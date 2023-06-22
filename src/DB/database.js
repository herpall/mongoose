const mongoose = require('mongoose');

const URI = 'mongodb+srv://herni96:herpall96@ricky-kiosko.vsdhug2.mongodb.net/'

mongoose.connect(URI)
    .then(()=> console.log('DB connect'))
    .catch(()=> console.log(err));

module.exports = mongoose;