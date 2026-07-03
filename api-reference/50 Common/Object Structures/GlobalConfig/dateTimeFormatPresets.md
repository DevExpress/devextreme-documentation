---
id: GlobalConfig.dateTimeFormatPresets
type: Record
default: undefined
---
---
##### shortDescription
Configures overrides for predefined date/time formats.

---
Use this object to override [predefined DevExtreme formats](/api-reference/40%20Common%20Types/Format.md '/Documentation/ApiReference/Common_Types/#Format'). You can specify overrides as [custom format strings](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/10%20Format%20UI%20Component%20Values/20%20Custom%20Format%20String.md '/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Format_String') or [format functions](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/10%20Format%20UI%20Component%20Values/30%20Custom%20Function.md '/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Function').

You can configure overrides for specific locales. To do this, specify key-value pair objects. Use locale identifiers as keys. Use the `default` key to specify an override for all other locales:

---

##### jQuery

    <!-- tab: index.js -->
    DevExpress.config({
        dateTimeFormatPresets: {
            shortDate: {
                default: 'dd/MM/yyyy',
                'en-US': 'MM/dd/yyyy',
            },
            shortTime: 'HH:mm:ss',
        }
    });

##### Angular

    <!-- tab: app.component.ts -->
    import config from "devextreme/core/config";

    config({
        dateTimeFormatPresets: {
            shortDate: {
                default: 'dd/MM/yyyy',
                'en-US': 'MM/dd/yyyy',
            },
            shortTime: 'HH:mm:ss',
        }
    });

##### Vue

    <!-- tab: App.vue -->
    import config from "devextreme/core/config";

    config({
        dateTimeFormatPresets: {
            shortDate: {
                default: 'dd/MM/yyyy',
                'en-US': 'MM/dd/yyyy',
            },
            shortTime: 'HH:mm:ss',
        }
    });

##### React

    <!-- tab: App.tsx -->
    import config from "devextreme/core/config";

    config({
        dateTimeFormatPresets: {
            shortDate: {
                default: 'dd/MM/yyyy',
                'en-US': 'MM/dd/yyyy',
            },
            shortTime: 'HH:mm:ss',
        }
    });

---

[note] You cannot use **dateTimeFormatPresets** to override number formats.