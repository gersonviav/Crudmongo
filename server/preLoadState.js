import counterDuck from 'reducers/counter'

export default async function(req, res, next) {
  // Get store from locals
  const { store } = res.locals
  // Dispatch a action to change initial state
  await store.dispatch(counterDuck.creators.addCountFromServer())
  // Resave new store
  res.locals.store = store
  // Pass middlerware
  next()
}
