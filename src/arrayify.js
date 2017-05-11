const arrayify = (thing = []) => (Array.isArray(thing) ? thing : [thing])

module.exports = arrayify
