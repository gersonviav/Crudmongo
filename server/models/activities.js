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

const activitiesSchema = new Schema({
  tipo : { type: String, 'default': null },
  descripcion : { type: String, 'default': null },
  evento : { type: String, 'default': null }  
})

const Activities = mongoose.model('Activities', activitiesSchema)

export { Activities }
