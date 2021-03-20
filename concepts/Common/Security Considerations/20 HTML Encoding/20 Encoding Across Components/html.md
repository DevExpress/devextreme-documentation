Items in collection UI components ([List](/api-reference/10%20UI%20Components/dxList '/Documentation/ApiReference/UI_Components/dxList/'), [SelectBox](/api-reference/10%20UI%20Components/dxSelectBox '/Documentation/ApiReference/UI_Components/dxSelectBox/'), [Toolbar](/api-reference/10%20UI%20Components/dxToolbar '/Documentation/ApiReference/UI_Components/dxToolbar/')) can apply appearance based on data source fields (see the [Default Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/05%20Default%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Default_Templates') article). [html](/api-reference/_hidden/CollectionWidgetItem/html.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/items/#html') is one of such fields that specifies item markup. This field's values are not encoded, so ensure that they do not contain malicious code. Alternatively, you can use the [text](/api-reference/_hidden/CollectionWidgetItem/text.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/items/#text') field. Unlike **html** values, **text** values are encoded.

The following example illustrates how the **html** field can lead to a potential vulnerability: <a href="https://codepen.io/romantsukanov/pen/PozaNPP?editors=1010" target="_blank">HTML Encoding in List</a>. In this example, both **text** and **html** values contain unsafe HTML, but **html** lines are commented out:


    <!-- tab: JavaScript -->
    const products = [{
        "id": 1,
        "text": "<img src=1 onerror=alert('XSS') \/>",
        // "html": "<img src=1 onerror=alert('XSS') \/>"
    }, {
        "ID": 2,
        "text": "<script>alert('XSS')<\/script>",
        // "html": "<script>alert('XSS')<\/script>"
    }, {
        "id": 3,
        "text": "Product 1"
        // "html": "Product 1"
    }];

When **html** is commented out, **text** applies. You can see that its values are interpreted as text and simply displayed:

![DevExtreme List with enabled HTML encoding](/images/UiWidgets/list-item-text.png)

Uncomment the **html** lines, and you will see an alert pop-up window. This is because unsafe HTML was interpreted as script and executed:

![DevExtreme List with disabled HTML encoding](/images/UiWidgets/list-item-html.png)
