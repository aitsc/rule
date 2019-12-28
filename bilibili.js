/*
转载
https://sub.jiaowoy.top/js/bilidhy.js
*/

let obj = JSON.parse($response.body);
obj["result"]["user_status"]["vip"] = 1;
$done({body: JSON.stringify(obj)});
