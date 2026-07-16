---
id: GlobalConfig.numberFormat
type: LocalizationFormat | Record
default: undefined
---
---
##### shortDescription
Specifies the default number format for all DevExtreme components in the application.

---
This property can accept a [predefined format string](/api-reference/40%20Common%20Types/Format.md '/Documentation/ApiReference/Common_Types/#Format'), [custom format string](/concepts/Common/Value%20Formatting/10%20Format%20UI%20Component%20Values/20%20Custom%20Format%20String.md '/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Format_String'), or [format function](/concepts/Common/Value%20Formatting/10%20Format%20UI%20Component%20Values/30%20Custom%20Function.md '/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Function').

---

##### jQuery

    <!-- tab: index.js -->
    DevExpress.config({
        numberFormat: '#0.#',
    });

##### Angular

    <!-- tab: app.component.ts -->
    import config from "devextreme/core/config";

    config({
        numberFormat: '#0.#',
    });

##### Vue

    <!-- tab: App.vue -->
    import config from "devextreme/core/config";

    config({
        numberFormat: '#0.#',
    });

##### React

    <!-- tab: App.tsx -->
    import config from "devextreme/core/config";

    config({
        numberFormat: '#0.#',
    });

---

You can configure default formats for specific locales. Assign an object with key-value pairs to this property. Use locale identifiers as keys. Use the `default` key to specify a format for all other locales:

---

##### jQuery

    <!-- tab: index.js -->
    DevExpress.config({
        numberFormat: {
            default: 'billions',
            en: 'millions',
        }
    });

##### Angular

    <!-- tab: app.component.ts -->
    import config from "devextreme/core/config";

    config({
        numberFormat: {
            default: 'billions',
            en: 'millions',
        }
    });

##### Vue

    <!-- tab: App.vue -->
    import config from "devextreme/core/config";

    config({
        numberFormat: {
            default: 'billions',
            en: 'millions',
        }
    });

##### React

    <!-- tab: App.tsx -->
    import config from "devextreme/core/config";

    config({
        numberFormat: {
            default: 'billions',
            en: 'millions',
        }
    });

---
