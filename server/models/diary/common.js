const dbUtils = require('./../../utils/db-util')
const request = require('request')

const common = {
  async getToken(params) {
    return new Promise((res, rej) => {
      request.get({
        uri: `https://api.weixin.qq.com/sns/jscode2session`,
        json: true,
        qs: {
            grant_type: `authorization_code`,
            appid:params.appID,
            secret: params.secret,
            js_code: params.code
        }
      }, (err, response, data) => {
          if (response.statusCode === 200) {
            res({openid:data.openid,session_key:data.session_key})
          } else {
            console.log(`[error]`, err);
            rej(err)
          }
      })
    })
  }
}

module.exports = common