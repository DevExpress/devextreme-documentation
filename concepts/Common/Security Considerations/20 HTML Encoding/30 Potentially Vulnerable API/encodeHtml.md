**encodeHtml** is a Boolean property that you can set for a [column in the DataGrid](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#encodeHtml), a [column in the TreeList](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#encodeHtml), a [column in the Gantt](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#encodeHtml), a [cell in the PivotGrid](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#encodeHtml), and a [header filter value in the PivotGridFieldChooser](/Documentation/ApiReference/UI_Components/dxPivotGridFieldChooser/Configuration/#encodeHtml). The default **encodeHtml** value is **true**, and the component encodes the corresponding values. If you set it to **false**, the component disables encoding, and malicious code can be executed. We recommend that you keep this property set to **true**.

Open the following example to learn how disabling the **encodeHtml** property can affect your application: <a href="https://codepen.io/romantsukanov/pen/QWEpQQQ?editors=1010" target="_blank">HTML Encoding in DataGrid</a>. In this example, the data source stores the malicious code:

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
