DevExtreme components consist of HTML elements and obey CSS rules. If the component is not displayed correctly, examine its CSS.

### Issue 

The CSS `background-color` rules are specified for the standalone [Toolbar](/api-reference/10%20UI%20Components/dxToolbar '/Documentation/ApiReference/UI_Components/dxToolbar/'). The [DataGrid](/api-reference/10%20UI%20Components/dxDataGrid '/Documentation/ApiReference/UI_Components/dxDataGrid/') colorizes its [toolbar](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/toolbar.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/') without any specific DataGrid colorizing properties enabled.

### Solution  

Inspect the toolbar element. Right-click the element and choose the **Inspect** menu item or press Ctrl+Shift+C (Chrome) and click the element. Both actions navigate you to this element in the Elements tab of your browser's DevTools.

Open the **Computed** tab and check the `background-color` CSS property.

![Inspect CSS: the Computed tab opened](/images/Troubleshooting/troubleshooting-inspect-css-1.png)

If this property does not exist, inspect the parent element.

![Inspect CSS: parent element](/images/Troubleshooting/troubleshooting-inspect-css-2.png)

The parent element has the `background-color` property. Expand it to see that the unexpected color comes from a rule for `.dx-toolbar` class in the *styles.css* file.

![Inspect CSS: the `background-color` property expanded](/images/Troubleshooting/troubleshooting-inspect-css-3.png)

Use a more specific CSS selector for this style to take effect only on the standalone toolbar. For example, assign an ID to the grid toolbar and specify the following selector: `#my-toolbar .dx-toolbar`.