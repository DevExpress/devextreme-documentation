The [customizeTooltip](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/tooltip/customizeTooltip.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/tooltip/#customizeTooltip') callback function allows you to customize tooltips in [SVG components](/concepts/60%20Themes%20and%20Styles/00%20Styling%20Methods.md '/Documentation/Guide/Themes_and_Styles/Styling_Methods/'). This function should return an object with individual tooltip settings. This object can include an `html` field that accepts an HTML string. If this string contains JavaScript code, the UI component will execute it.

To guard against XSS attacks when using the **customizeTooltip** callback function, ensure that the `html` value does not contain malicious code or use the `text` field instead. Unlike `html` values, `text` values are encoded. Refer to the following example to see the difference:

#include btn-open-codepen with {
    href: "https://codepen.io/vladaskorokhodova/pen/LYqJzQp"
}