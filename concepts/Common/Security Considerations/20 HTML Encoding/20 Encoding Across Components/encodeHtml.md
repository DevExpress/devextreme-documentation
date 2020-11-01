**encodeHtml** is a Boolean option that can be set for a column in the [DataGrid]() and [TreeList]() components. Its default value is **true**, which means that column values are encoded. If you set it to **false**, the encoding is disabled, and malicious code can be executed. We recommend keeping this option set to **true**.

Open the following example to learn how disabling the **encodeHtml** option can affect your application: <a href="https://codepen.io/romantsukanov/pen/QWEpQQQ?editors=1010" target="_blank">HTML Encoding in DataGrid</a>. In this example, malicious code is saved in the data source:

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

If you set **encodeHtml** to **false**, the malicious code will be interpreted as script, and you will see an alert pop-up window:

![DataGrid with disabled HTML encoding](/images/DataGrid/encodehtml-false.png)