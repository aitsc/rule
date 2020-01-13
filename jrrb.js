/*
转载：https://raw.githubusercontent.com/maxduke/Rules/master/Surge/Script/jrrb.js
今日热榜
http-response https:\/\/api\.tophub\.today\/account\/sync
hostname= api.tophub.today
*/

var obj = JSON.parse($response.body);
 obj={
 "data": {
  "is_vip": "1",
  "vip_expired": "2292599349",
  "is_vip_now": true
 },
 "error": false,
 "status": 200
};
$done({body: JSON.stringify(obj)});
