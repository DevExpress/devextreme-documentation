**encodeHtml** is a Boolean property that you can set for a column in the [DataGrid](/api-reference/10%20UI%20Components/dxDataGrid '/Documentation/ApiReference/UI_Components/dxDataGrid/') and [TreeList](/api-reference/10%20UI%20Components/dxTreeList '/Documentation/ApiReference/UI_Components/dxTreeList/') components. Its default value is **true**, which means that column values are encoded. If you set it to **false**, the encoding is disabled, and malicious code can be executed. We recommend that you keep this property set to **true**.

Open the following example to learn how disabling the **encodeHtml** property can affect your application: <a href="https://codepen.io/romantsukanov/pen/QWEpQQQ?editors=1010" target="_blank">HTML Encoding in DataGrid</a>. In this example, malicious code is saved in the data source:

    <!-- tab: JavaScript -->
    const products = [{
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

When **encodeHtml** is **true**, the DataGrid interprets this code as text and simply displays it:

![DevExtreme DataGrid with enabled HTML encoding](/images/DataGrid/encodehtml-true.png)

If you set **encodeHtml** to **false**, the malicious code will be interpreted as script, and you will see an alert pop-up window:

![DevExtreme DataGrid with disabled HTML encoding](/images/DataGrid/encodehtml-false.png)
