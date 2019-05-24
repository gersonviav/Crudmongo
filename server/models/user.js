var mongoose = require('mongoose')
var Schema = mongoose.Schema

mongoose.Promise = global.Promise

const { env:{ MONGO_DB = 'mongodb://localhost/demo' } } = process

mongoose.connect(MONGO_DB,
  { useNewUrlParser: true },
  function(err) {
    if(err) console.log(err)
    else console.log('Connect success')
  }
)

const userSchema = new Schema({
  name    : { type: String },
  email   : { type: String, 'default': null },
  gender  : { type: String, 'default': null },
  lastName: { type: String, 'default': null },
  mobile  : { type: String, 'default': null },
  think   : { type: String, 'default': null },
  createAt: { type: Date, 'default': new Date() },
  updateAt: { type: Date, 'default': new Date() }
})

const Users = mongoose.model('Users', userSchema)

export { Users }
