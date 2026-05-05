---
id: GlobalConfig.numberFormat
type: LocalizationFormat | Record
default: undefined
---
---
##### shortDescription
Specifies the default number format for all DevExtreme components in the application.

---
This property can accept a [predefined format string](/Documentation/ApiReference/Common_Types/#Format), a [custom format string](/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Format_String) or a [format function](/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Function).

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

You can configure default formats for specific locales. To do this, assign a key-value pair object to this property. Use locale identifiers as keys. Use the `default` key to specify a format for all other locales:

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
