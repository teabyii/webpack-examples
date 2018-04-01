module.exports = function(env, argv) {
  return argv.mode === 'production' ?
    require('./configs/webpack.production') :
    require('./configs/webpack.development')
}
