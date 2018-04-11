require('./style.less')
import { map } from 'lodash-es'
import { square } from './lib/math'
const { log } = require('./utils')

log('hello world')
log(map([1, 2, 3], square))

import('./lib/superalert').then(({ default: superalert }) => {
  superalert({ a: 1 })
})

if (module.hot) {
  module.hot.accept(['./utils', './lib/math'], () => {
    // console.log('Accepting the updated bar module!')
    alert(square(4))
  })
}
