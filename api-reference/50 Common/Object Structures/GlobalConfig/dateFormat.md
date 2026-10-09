---
id: GlobalConfig.dateFormat
type: LocalizationFormat | Record
default: undefined
---
---
##### shortDescription
Specifies the default date format for all DevExtreme components in the application.

---
This property can accept a [predefined format string](/api-reference/40%20Common%20Types/Format.md '/Documentation/ApiReference/Common_Types/#Format'), [custom format string](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/10%20Format%20UI%20Component%20Values/20%20Custom%20Format%20String.md '/Documentation/Guide/Common/Localization_and_Globalization/Value_Formatting/#Format_UI_Component_Values/Custom_Format_String'), or [format function](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/10%20Format%20UI%20Component%20Values/30%20Custom%20Function.md '/Documentation/Guide/Common/Localization_and_Globalization/Value_Formatting/#Format_UI_Component_Values/Custom_Function').

---

##### jQuery

    <!-- tab: index.js -->
    DevExpress.config({
        dateFormat: 'yyyy-MM-dd',
    });

##### Angular

    <!-- tab: app.component.ts -->
    import config from "devextreme/core/config";

    config({
        dateFormat: 'yyyy-MM-dd',
    });

##### Vue

    <!-- tab: App.vue -->
    import config from "devextreme/core/config";

    config({
        dateFormat: 'yyyy-MM-dd',
    });

##### React

    <!-- tab: App.tsx -->
    import config from "devextreme/core/config";

    config({
        dateFormat: 'yyyy-MM-dd',
    });

---

You can configure default formats for specific locales. Assign an object with key-value pairs to this property. Use locale identifiers as keys. Use the `default` key to specify a format for all other locales:

---

##### jQuery

    <!-- tab: index.js -->
    DevExpress.config({
        dateFormat: {
            default: 'longDate',
            en: 'shortDate',
        }
    });

##### Angular

    <!-- tab: app.component.ts -->
    import config from "devextreme/core/config";

    config({
        dateFormat: {
            default: 'longDate',
            en: 'shortDate',
        }
    });

##### Vue

    <!-- tab: App.vue -->
    import config from "devextreme/core/config";

    config({
        dateFormat: {
            default: 'longDate',
            en: 'shortDate',
        }
    });

##### React

    <!-- tab: App.tsx -->
    import config from "devextreme/core/config";

    config({
        dateFormat: {
            default: 'longDate',
            en: 'shortDate',
        }
    });

---

You can also specify locale-specific formats and the `default` format as [format](/Documentation/ApiReference/Common/Object_Structures/Format/) objects. These objects can include the [locale](/Documentation/ApiReference/Common/Object_Structures/Format/#locale) field. Components use this locale in the following scenarios:

- When a component uses the global **dateFormat**
- When a component format does not specify **locale** and matches the global **dateFormat** or *"shortDate"*
- When a component uses an Intl format that does not specify **locale** and includes date fields but no time fields:
    - Date: **year**, **month**, **day**, **weekday**
    - Time: **hour**, **minute**, **second**

If a component uses any other date format, such as *"monthAndYear"*, it displays values in the [current application locale](/Documentation/ApiReference/Common/utils/localization/#locale). To apply another locale to component formats, specify **locale** in these formats.

The following code specifies the *"de-DE"* locale for the global **dateFormat**:

---

##### jQuery

    <!-- tab: index.js -->
    DevExpress.config({
        dateFormat: {
            default: {
                type: 'shortDate',
                locale: 'de-DE',
            },
        }
    });

##### Angular

    <!-- tab: app.component.ts -->
    import config from "devextreme/core/config";

    config({
        dateFormat: {
            default: {
                type: 'shortDate',
                locale: 'de-DE',
            },
        }
    });

##### Vue

    <!-- tab: App.vue -->
    import config from "devextreme/core/config";

    config({
        dateFormat: {
            default: {
                type: 'shortDate',
                locale: 'de-DE',
            },
        }
    });

##### React

    <!-- tab: App.tsx -->
    import config from "devextreme/core/config";

    config({
        dateFormat: {
            default: {
                type: 'shortDate',
                locale: 'de-DE',
            },
        }
    });

---

[note] Assign [format](/Documentation/ApiReference/Common/Object_Structures/Format/) objects to the `default` key or specific locale keys instead of declaring format options directly inside **dateFormat**.
