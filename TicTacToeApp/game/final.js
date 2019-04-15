const onLoad = function (args)  {
  const page = args.object
  const label = page.getViewById('final-text')
  label.text = page.navigationContext.text
}

const onTap = function (args) {
  const button = args.object
  const page = button.page
  page.frame.goBack()
}

module.exports = { onLoad, onTap }