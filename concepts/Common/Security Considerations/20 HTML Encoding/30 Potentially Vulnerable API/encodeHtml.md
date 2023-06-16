**encodeHtml** is a Boolean property that you can set for a [column in the DataGrid](/api-reference/_hidden/dxDataGridColumn/encodeHtml.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#encodeHtml'), a [column in the TreeList](/api-reference/_hidden/GridBaseColumn/encodeHtml.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#encodeHtml'), a [column in the Gantt](/api-reference/_hidden/GridBaseColumn/encodeHtml.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#encodeHtml'), a [cell in the PivotGrid](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/encodeHtml.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#encodeHtml'), and a [header filter value in the PivotGridFieldChooser](/api-reference/10%20UI%20Components/dxPivotGridFieldChooser/1%20Configuration/encodeHtml.md '/Documentation/ApiReference/UI_Components/dxPivotGridFieldChooser/Configuration/#encodeHtml'). The default **encodeHtml** value is `true`, and the component encodes corresponding values. If you set it to `false`, the component disables encoding, and malicious code can be executed. To mitigate security-related risks, we recommend that you always set this property to `true`.

To see what can occur if you disable the **encodeHtml** property open the following example: <a href="https://codepen.io/romantsukanov/pen/QWEpQQQ?editors=1010" target="_blank">HTML Encoding in DataGrid</a>. In this example, the data source stores the malicious code:

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

When **encodeHtml** is `true`, the DataGrid interprets this code as text and simply displays it:

![DevExtreme DataGrid with enabled HTML encoding](/images/DataGrid/encodehtml-true.png)

If you set **encodeHtml** to `false`, the malicious code will be interpreted as script, and you will see an alert pop-up window:

![DevExtreme DataGrid with disabled HTML encoding](/images/DataGrid/encodehtml-false.png)
