const email = "你的账号";
const passwd = "你的密码";

var title = "签到-召唤师"
var site = "https://zhs.today";
var post_login = {
	url: site + "/auth/login",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
		"Cookie": "expire_in=1"
	},
	body: "email=" + email + "&passwd=" + passwd
}

$httpClient.post(post_login, function(error, response, data){
	if (response.status != 200) {
		$notification.post(title, "登录失败！", response.status);
		$done();
		return null;
	}
	var cookie = response.headers["Set-Cookie"];
	cookie = cookie.match(/(email|expire_in|ip|key|uid|__cfduid)=.+?;/ig).join(" ");
	
	var post_checkin = {
		url: site + "/user/checkin",
		headers: {
			Cookie: cookie
		}
	}
	
	$httpClient.post(post_checkin, function(error, response, data){
		mation = data.replace(/(^\s*)|(\s*$)/g, "")
		if (mation.slice(0,1) != "{") {
			$notification.post(title, "签到失败！", mation.slice(0,10));
			$done();
			return null;
		}
		data = JSON.parse(data);
		
		$notification.post(title, "", data["msg"]);
		$done();
	});
});
$done();

// 或者

var title = "签到-召唤师"
var site = "https://zhs.today";
var post_login = {
	url: site + "/auth/login",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
		"Cookie": "expire_in=1"
	},
	body: "email=" + email + "&passwd=" + passwd
}

$httpClient.post(post_login, function(error, response, data){
	if (response.status != 200) {
		$notification.post(title, "登录失败！", response.status);
		$done();
		return null;
	}
	var cookie = response.headers["Set-Cookie"];
	cookie = cookie.match(/(email|expire_in|ip|key|uid|__cfduid)=.+?;/ig).join(" ");
	$persistentStore.write(null);
	$persistentStore.write(cookie, "qd_zhs");
});

var post_checkin = {
	url: site + "/user/checkin",
	headers: {
		"Cookie": $persistentStore.read("qd_zhs")
	}
}

$httpClient.post(post_checkin, function(error, response, data){
	mation = data.replace(/(^\s*)|(\s*$)/g, "")
	if (mation.slice(0,1) != "{") {
		$notification.post(title, "签到失败！", mation.slice(0,10));
		$done();
		return null;
	}
	data = JSON.parse(data);
	$notification.post(title, "", data["msg"]);
	$done();
});
$done();
