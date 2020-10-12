const moment = require('moment')

function timer(req, res, next) {
    let time = moment().format('MMM D, YYYY hh:mm A')
    console.log(time)
    next()
}

module.exports = timer