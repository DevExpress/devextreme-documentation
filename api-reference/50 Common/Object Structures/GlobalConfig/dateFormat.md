---
id: GlobalConfig.dateFormat
type: LocalizationFormat | Record
default: undefined
---
---
##### shortDescription
Specifies the default date format for all DevExtreme components in the application.

---
Assign a string value to this property to use a [predefined format](/Documentation/ApiReference/Common_Types/#Format). Specify a [custom format string](/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Format_String) or a [format function](/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Function) to use a custom format.

You can configure default formats for specific locales. To do this, assign a key-value pair object to this property. Use locale identifiers as keys to define formats for specific locales. Use the `default` key to specify a format for all other locales:

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

##### Angular

    <!-- tab: App.tsx -->
    import config from "devextreme/core/config";

    config({
        dateFormat: {
            default: 'longDate',
            en: 'shortDate',
        }
    });

---
