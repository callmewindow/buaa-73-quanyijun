const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  const officialAccount = await db.collection('official_account').get({
    success(res) {
    }
  })

  return {
    officialAccount
  }
}