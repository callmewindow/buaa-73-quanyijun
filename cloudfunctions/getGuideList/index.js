const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  const guidelist = await db.collection('robot_GuideList').get({
    success(res) {
    }
  })

  return {
    guidelist
  }
}