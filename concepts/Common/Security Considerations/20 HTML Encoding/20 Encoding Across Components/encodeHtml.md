**encodeHtml** is a Boolean option that can be set for a column in the [DataGrid]() or [TreeList]() component. Its default value is **true**, which means that HTML encoding is enabled. If you set it to **false**, column values are no longer encoded, and malicious code can be executed. We recommend keeping this option set to **true**.

Open the following example to learn how the **encodeHtml** option works: <a href="https://codepen.io/romantsukanov/pen/QWEpQQQ?editors=1010" target="_blank">HTML Encoding in DataGrid</a>. In this example, malicious code is saved in the data source:

    <!-- tab: JavaScript -->
    var products = [{
        "ProductID": 1,
        "ProductName": "<img src=1 onerror=alert('XSS') \/>",
        // ...
    }, {
        "ProductID": 2,
        "ProductName": "<script>alert('XSS')<\/script>",
        // ...
    },
    // ...
    ];

When **encodeHtml** is **true**, the **DataGrid** interprets this code as text and simply displays it:

![DataGrid with enabled HTML encoding](/images/DataGrid/encodehtml-true.png)

If you set **encodeHtml** to **false**, the malicious code will be interpreted as script, and you will see an alert popup window:

![DataGrid with disabled HTML encoding](/images/DataGrid/encodehtml-false.png)