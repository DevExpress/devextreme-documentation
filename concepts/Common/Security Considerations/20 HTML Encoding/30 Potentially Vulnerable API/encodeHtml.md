**encodeHtml** is a Boolean property that you can set for the following component values:

- [DataGrid](/api-reference/_hidden/dxDataGridColumn/encodeHtml.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#encodeHtml'): Cell values in specific columns
- [Gantt](/api-reference/_hidden/GridBaseColumn/encodeHtml.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#encodeHtml'): Cell values in specific task list columns
- [PivotGrid](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/encodeHtml.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#encodeHtml'): All cell values
- [PivotGridFieldChooser](/api-reference/10%20UI%20Components/dxPivotGridFieldChooser/1%20Configuration/encodeHtml.md '/Documentation/ApiReference/UI_Components/dxPivotGridFieldChooser/Configuration/#encodeHtml'): Header filter values
- [TreeList](/api-reference/_hidden/GridBaseColumn/encodeHtml.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#encodeHtml'): Cell values in specific columns
- **DevExtreme Viz Components (Charts, Gauges, and other)**: `text` field values in **customizeTooltip** return objects

The default **encodeHtml** value is `false` in Viz components. These components evaluate tags in `text` field values and transform HTML tags to [tspan](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/tspan) SVG elements. These components also strip all attributes except `style` and `class`.

In the remaining components, the default **encodeHtml** value is `true`. If you set the property to `false`, these components can execute malicious code.

[note] To mitigate security-related risks, we recommend that you always use default **encodeHtml** values.

The following example demonstrates what can occur if you disable **encodeHtml** in a DataGrid:

#include btn-open-codepen with {
    href: "https://codepen.io/vladaskorokhodova/pen/WNPgZMJ"
}

In this example, the data source stores the malicious code:

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
