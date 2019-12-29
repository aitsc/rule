var obj = JSON.parse($response.body);


obj.subscriber.entitlements = {
   "pro": {
    "expires_date": "2099-12-29T09:26:54Z",
    "product_identifier": "com.lkzhao.editor.pro.ios.yearly",
    "purchase_date": "2019-12-29T09:26:54Z"
   }
};

obj.subscriber.subscriptions = {
   "com.lkzhao.editor.pro.ios.yearly": {
    "billing_issues_detected_at": null,
    "expires_date": "2099-12-29T09:26:54Z",
    "is_sandbox": false,
    "original_purchase_date": "2019-12-29T09:26:54Z",
    "purchase_date": "2019-12-29T09:26:54Z",
    "store": "app_store",
    "unsubscribe_detected_at": null
   }
};

$done({body: JSON.stringify(obj)});
