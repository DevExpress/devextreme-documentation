---
id: GlobalConfig.dateFormat
type: LocalizationFormat | Record
default: undefined
---
---
##### shortDescription
Specifies the default date format for all DevExtreme components in the application.

---
This property can accept a [predefined format string](/api-reference/40%20Common%20Types/Format.md '/Documentation/ApiReference/Common_Types/#Format'), [custom format string](/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Format_String), or [format function](/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Function).

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
