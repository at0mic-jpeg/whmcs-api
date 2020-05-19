const fetch = require("node-fetch")
const prepare = require("querystring")

module.exports.eval = {}

/**
 * Initializer.
 * @param {object} object 
 * @param {string} object.accesskey WHMCS API Accesskey
 * @param {string} object.responsetype WHMCS API Response Type (Default: JSON)

 * @param {string} object.username WHMCS API Username
 * @param {string} object.password WHMCS API Password
 * OR
 * @param {string} object.identifier WHMCS API Username
 * @param {string} object.secret WHMCS API Password
*/

module.exports.initialize = object => {
    for (let key in object) {
        this.eval[key] = object[key]
    }
    return this.eval;
}

/**
 * Calling API
 * @param {string} Action
 * @param {object} API_Parameters
 */

module.exports.call = (api, params) => {
    this.eval.action = api
    return new Promise((resolve, reject) => {
        if (typeof(params) === "object") {
            // Check the array.
            for (let key in params) {
                if (params[key] === false) {
                    reject(`Missing Object Parameters. Key: ${key}`)
                } else {
                    this.eval[key] = params[key]
                }
            }
        } else {
            reject(`Object having parameters expected at param #1. Expected ${typeof(params)}`)
        }
        fetch(`${this.eval.endpoint}?${prepare.stringify(this.eval)}`).then(res => {
            res.json().then(data => {
                if (data.result === "success") {
                    resolve(data)
                } else {
                    reject(data.message)
                }
            })
        })
    })
}

