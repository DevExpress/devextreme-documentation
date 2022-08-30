DevExtreme components consist of HTML elements and obey CSS rules. If the component is not displayed correctly, examine its CSS.

#### Case 

The [DataGrid](/Documentation/ApiReference/UI_Components/dxDataGrid/) colorizes its [toolbar](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/) without any colorizing properties specified.

#### Troubleshooting  

Inspect the toolbar element. Right-click the element and choose the **Inspect** menu item or press Ctrl+Shift+C (Chrome) and click the element. Both actions navigate you to this element in the Elements tab of your browser's DevTools.

Open the **Computed** tab and check the `background-color` CSS property.

![CSS Image 1](/images/Troubleshooting/css_image_1.png)

If this property does not exist, inspect the parent element.

![CSS Image 2](/images/Troubleshooting/css_image_2.png)

The parent element has the `background-color` property. Expand it to see that the unexpected color comes from a rule for `.dx-toolbar` class in the *styles.css* file.

![CSS Image 3](/images/Troubleshooting/css_image_3.png)

Use a more specific CSS selector for this style to take effect only to the standalone toolbar. For example, assign an ID to the Toolbar and specify the following selector: `#my-toolbar .dx-toolbar`.