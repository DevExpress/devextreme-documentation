Because DevExtreme components consist of standard HTML elements (`<div>`, `<td>`, `<tr>`, and so on), you can use CSS classes to customize them.

A number of classes are [documented](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes '/Documentation/ApiReference/UI_Widgets/CSS_Classes/'). However, in most cases, you need to inspect the HTML markup to determine and override the applied CSS classes. The following articles describe how you can do it:

- <a href="https://www.devexpress.com/Support/Center/Question/Details/K18570/how-to-inspect-css-rules" target="_blank">How to inspect CSS rules</a>
- <a href="https://www.devexpress.com/Support/Center/Question/Details/T632424/how-to-implement-css-related-solutions-for-devexpress-components" target="_blank">How to implement CSS-related solutions for DevExpress components</a>

Classes can be added to the widget element in the markup using the `class` attribute as usual. If it is not possible to change the markup, use the widget's [elementAttr](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/elementAttr.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#elementAttr') option for the same purpose.

[note] The internal CSS structure may be changed between releases without notice. Taking that into account, we recommend customizing widgets [using their API](/concepts/60%20Themes%20and%20Styles/10%20HTML-Based%20Widgets%20Customization/30%20Widgets%20API.md '/Documentation/Guide/Themes_and_Styles/HTML-Based_Widgets_Customization/#Widgets_API') instead of CSS if it is possible because you will be notified if the API is changed.

During the customization, we recommend checking how the widgets page will look on different devices by viewing them in responsive design mode. Refer to the articles for <a href="https://developers.google.com/web/tools/chrome-devtools/device-mode/emulate-mobile-viewports" target="_blank">Google Chrome</a>, <a href="https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_Mode" target="_blank">Firefox</a>, or <a href="https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide/emulation" target="_blank">Microsoft Edge</a> for information on how to enter this mode in the browser.
