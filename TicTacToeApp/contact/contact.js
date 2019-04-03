const onTap = function (args) {
  const button = args.object
  const page = button.page
  page.frame.goBack()
}

module.exports = { onTap }