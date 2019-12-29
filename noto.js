var obj = JSON.parse($response.body);

obj.subscriber = {"entitlements": {"pro": {"expires_date": "2099-01-01T09:26:54Z","product_identifier": "com.lkzhao.editor.pro.ios.yearly","purchase_date": "2019-12-19T09:26:54Z"}};

obj.original_application_version = "31";

obj.original_purchase_date = "2019-12-12T07:47:03Z";

obj.subscriptions = {
   "com.lkzhao.editor.pro.ios.yearly": {
    "billing_issues_detected_at": null,
    "expires_date": "2099-01-01T09:26:54Z",
    "is_sandbox": false,
    "original_purchase_date": "2019-12-19T09:26:54Z",
    "period_type": "trial",
    "purchase_date": "2019-12-19T09:26:54Z",
    "store": "app_store",
    "unsubscribe_detected_at": null
   }
};

$done({body: JSON.stringify(obj)});
