The [customizeTooltip](/Documentation/ApiReference/UI_Components/dxChart/Configuration/tooltip/#customizeTooltip) callback function allows you to customize tooltips in [SVG components](/Documentation/Guide/Themes_and_Styles/HTML-_and_SVG-Based_UI_Components/). This function should return an object with individual tooltip settings. This object can include the **html** field that accepts an HTML string. If this string contains JavaScript code, the UI component executes it. This capability makes the component vulnerable to XSS attacks.

To guard against the attacks, ensure that the **html** value does not contain malicious code. Alternatively, you can use the **text** field. Unlike **html** values, **text** values are encoded. Refer to the following example to see the difference: <a href="https://codepen.io/romantsukanov/pen/vYmJXXg?editors=1010" target="_blank">customizeTooltip - Potential XSS Vulnerability</a>.


