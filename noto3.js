var obj = JSON.parse($response.body);

obj.subscriber.entitlements = {
   "pro": {
    "expires_date": "2099-01-01T09:26:54Z",
    "product_identifier": "com.lkzhao.editor.pro.ios.yearly",
    "purchase_date": "2019-12-19T09:26:54Z"
   }
};

obj.subscriber.subscriptions = {};

$done({body: JSON.stringify(obj)});
