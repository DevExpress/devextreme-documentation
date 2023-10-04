The [customizeTooltip](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/tooltip/customizeTooltip.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/tooltip/#customizeTooltip') callback function allows you to customize tooltips in [SVG components](/Documentation/Guide/Themes_and_Styles/Styling_Methods/). This function should return an object with individual tooltip settings. This object can include an `html` field that accepts an HTML string. If this string contains JavaScript code, the UI component will execute it.

To guard against XSS attacks when using the **customizeTooltip** callback function, ensure that the `html` value does not contain malicious code or use the `text` field instead. Unlike `html` values, `text` values are encoded. Refer to the following example to see the difference: <a href="https://codepen.io/romantsukanov/pen/vYmJXXg?editors=1010" target="_blank">customizeTooltip - Potential XSS Vulnerability</a>.


