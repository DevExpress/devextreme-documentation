DevExtreme components consist of standard HTML elements (for instance, `<div>`, `<td>`, and `<tr>`). You can use CSS classes to customize these elements.

For a list of common CSS classes used in DevExtreme components, see [CSS Classes](/api-reference/10%20UI%20Components/zz%20CSS%20Classes '/Documentation/ApiReference/UI_Components/CSS_Classes/'). To identify classes for specific visual elements, inspect the component markup:

- [How to inspect CSS rules](/concepts/80%20Troubleshooting/00%20Basics/15%20Examine%20CSS.md '/Documentation/Guide/Troubleshooting/Basics/#Examine_CSS')
- [Use CSS to Customize Control Appearance](https://docs.devexpress.com/GeneralInformation/404568/css-customization/customize-control-appearance)

To add custom classes to a DevExtreme component's root element, specify the `class` HTML attribute. You can also configure a component's [elementAttr](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/elementAttr.md '/Documentation/ApiReference/UI_Components/dxButton/Configuration/#elementAttr') or [wrapperAttr](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#wrapperAttr) property.

[note]

---

##### jQuery

DevExtreme component markup may change between releases without notice. We recommend that you configure [API properties](/concepts/60%20Themes%20and%20Styles/10%20HTML-Based%20Components%20Customization/30%20Components%20API.md '/Documentation/Guide/Themes_and_Styles/HTML-Based_Components_Customization/#Components_API') to customize components instead.

##### Angular

- DevExtreme component markup may change between releases without notice. We recommend that you configure [API properties](/concepts/60%20Themes%20and%20Styles/10%20HTML-Based%20Components%20Customization/30%20Components%20API.md '/Documentation/Guide/Themes_and_Styles/HTML-Based_Components_Customization/#Components_API') to customize components instead.
- DevExtreme components such as [Popup](/Documentation/Guide/UI_Components/Popup/Overview/) display content within wrappers in the application root. To customize these components, define global CSS styles. For more information, refer to the following topic: [Angular - Styling Components](https://angular.dev/guide/components/styling).

##### Vue

- DevExtreme component markup may change between releases without notice. We recommend that you configure [API properties](/concepts/60%20Themes%20and%20Styles/10%20HTML-Based%20Components%20Customization/30%20Components%20API.md '/Documentation/Guide/Themes_and_Styles/HTML-Based_Components_Customization/#Components_API') to customize components instead.
- DevExtreme components such as [Popup](/Documentation/Guide/UI_Components/Popup/Overview/) display content within wrappers in the application root. To customize these components, define CSS styles in non-scoped `<style>` tags. For more information, refer to the following topic: [Vue - SFC CSS Features](https://vuejs.org/api/sfc-css-features.html).

##### React

DevExtreme component markup may change between releases without notice. We recommend that you configure [API properties](/concepts/60%20Themes%20and%20Styles/10%20HTML-Based%20Components%20Customization/30%20Components%20API.md '/Documentation/Guide/Themes_and_Styles/HTML-Based_Components_Customization/#Components_API') to customize components instead.

---

[/note]

After you apply CSS customizations to DevExtreme components, review your application's adaptivity in the browser. For more information, refer to the following topics:

- [Google Chrome - Simulate mobile devices with device mode](https://developer.chrome.com/docs/devtools/device-mode/)
- [Microsoft Edge - Emulate mobile devices (Device Emulation)](https://learn.microsoft.com/en-us/microsoft-edge/devtools/device-mode/)
- [Firefox - Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/)
