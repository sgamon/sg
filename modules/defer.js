/*eslint-env node */

'use strict'

/**
 * Returns a deferred promise object
 *
 * @returns {{resolve: *, reject: *, promise: (exports|module.exports)}}
 */
module.exports = function () {
  let resolve, reject
  let promise = new Promise(function() {
    resolve = arguments[0]
    reject = arguments[1]
  })
  return {
    resolve: resolve,
    reject: reject,
    promise: promise
  }
}

