const onTap = function (args) {
  const button = args.object
  const page = button.page
  page.frame.navigate('contact/contact')
}

module.exports = { onTap }