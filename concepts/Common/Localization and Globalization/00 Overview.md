---
title: Localization and Globalization
---

This help topic explains three related areas:

- [UI Text Localization](/concepts/Common/Localization%20and%20Globalization/05%20UI%20Text%20Localization/00%20UI%20Text%20Localization.md): translates component messages, captions, and command text.
- [Value Formatting](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/00%20Value%20Formatting.md): formats dates, numbers, and currencies for a selected locale.
- [Right-to-Left (RTL) Support](/concepts/Common/Localization%20and%20Globalization/20%20Right-to-Left%20(RTL)%20Support.md): controls text direction and mirrored layout behavior.

These areas work together, but each area solves a different task.

- Use **UI text localization** to load or customize message dictionaries.
- Use **value formatting** to control how components render and parse values.
- Use **RTL support** to switch layout direction for right-to-left languages.

### Initial Behavior

- DevExtreme resolves UI messages through locale fallback and uses the English dictionary (`en`) when no matching localized string exists.
- Value formatting uses the active locale and your selected formatting engine (`Intl` or `Globalize`).
- Layout direction stays left-to-right until you enable `rtlEnabled`.

### Demos

The following demo includes both text localization and value formatting scenarios:

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingIntl/",
    name: "Using Intl"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingGlobalize/",
    name: "Using Globalize"
}
