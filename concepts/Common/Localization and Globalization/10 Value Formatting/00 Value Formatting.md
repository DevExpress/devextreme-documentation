You can change value formatting in DevExtreme applications in two ways:

- Set a UI component's `format` property to display formatted values in editors, grids, and other components.
- Use the [localization API](/api-reference/50%20Common/utils/localization '/Documentation/ApiReference/Common/utils/localization/') to format and parse values programmatically in code.

Format patterns are locale-independent initially. To apply locale-aware formatting rules, use [Intl](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/50%20Using%20Intl.md '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Intl') or [Globalize](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/55%20Using%20Globalize.md '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Globalize').

#include btn-open-demo with {
	href: "https://js.devexpress.com/React/Demos/WidgetsGallery/Demo/Localization/UsingIntl/FluentBlueLight/"
}