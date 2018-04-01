require('./style.less')
const { log } = require('./utils')

log('hello world')

if (__DEV__) { // eslint-disable-line
  log('In development ...')
}
