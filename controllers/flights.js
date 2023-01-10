function newFLight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

export {
  newFLight as new
}