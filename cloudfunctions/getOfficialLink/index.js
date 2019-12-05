const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  const officialLink = await db.collection('official_link').get({
    success(res) {
    }
  })

  return {
    officialLink
  }
}