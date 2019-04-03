const onAddGame = function (args) {
  const button = args.object
  button.showModal(
    'game/addgame-root',
    {},
    () => { console.log('Modal closed') },
    false
  )
}

module.exports = { onAddGame }