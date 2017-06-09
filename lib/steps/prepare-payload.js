'use strict'
const logger = require('../logger')

module.exports = data => {
  return new Promise((resolve, reject) => {
    logger('info', ['prepare-payload', data._id])
    const job = {
      _id: data._id,
      errors: [],
      jobId: data._id,
      retry: false,
      payload: data
    }
    resolve(job)
  })
}
