DevExtreme libraries use the current application locale to display UI text and to format values. You can use a different locale to format date, time, and number values. To do that, specify **Format**.[locale](/api-reference/50%20Common/Object%20Structures/format/locale.md '/Documentation/ApiReference/Common/Object_Structures/Format/#locale') in the following [GlobalConfig](/api-reference/50%20Common/Object%20Structures/GlobalConfig '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/') properties:

- [dateFormat](/api-reference/50%20Common/Object%20Structures/GlobalConfig/dateFormat.md '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateFormat')
- [timeFormat](/api-reference/50%20Common/Object%20Structures/GlobalConfig/timeFormat.md '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#timeFormat')
- [dateTimeFormat](/api-reference/50%20Common/Object%20Structures/GlobalConfig/dateTimeFormat.md '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateTimeFormat')
- [numberFormat](/api-reference/50%20Common/Object%20Structures/GlobalConfig/numberFormat.md '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#numberFormat')
- [dateTimeFormatPresets](/api-reference/50%20Common/Object%20Structures/GlobalConfig/dateTimeFormatPresets.md '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateTimeFormatPresets')

The following code snippet displays German [UI text](/concepts/Common/Localization%20and%20Globalization/05%20UI%20Text%20Localization/00%20UI%20Text%20Localization.md '/Documentation/Guide/Common/Localization_and_Globalization/UI_Text_Localization/') and specifies the *"en-CA"* locale in **dateFormat** and the *"en-US"* locale in **numberFormat**:

---
##### jQuery

    <!-- tab: index.html -->
    <head>
        <!-- ... -->
        <script src="https://cdn3.devexpress.com/jslib/minor_26_2/js/dx.all.js"></script>
        <script src="https://cdn3.devexpress.com/jslib/minor_26_2/js/localization/dx.messages.de.js"></script>
        <script src="index.js"></script>
    </head>

    <!-- tab: index.js -->
    DevExpress.localization.locale('de');

    DevExpress.config({
        dateFormat: {
            default: {
                locale: 'en-CA',
            }
        },
        numberFormat: {
            default: {
                locale: 'en-US',
            }
        }
    });

##### Angular

    <!-- tab: app.component.ts -->
    import deMessages from 'devextreme/localization/messages/de.json';
    import { loadMessages, locale } from 'devextreme/localization';
    import config from 'devextreme/core/config';

    loadMessages(deMessages);
    locale('de');

    config({
        dateFormat: {
            default: {
                locale: 'en-CA',
            },
        },
        numberFormat: {
            default: {
                locale: 'en-US',
            },
        },
    });

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import deMessages from 'devextreme/localization/messages/de.json';
    import { loadMessages, locale } from 'devextreme/localization';
    import config from 'devextreme/core/config';

    loadMessages(deMessages);
    locale('de');

    config({
        dateFormat: {
            default: {
                locale: 'en-CA',
            },
        },
        numberFormat: {
            default: {
                locale: 'en-US',
            },
        },
    });
    </script>

##### React

    <!-- tab: App.tsx -->
    import deMessages from 'devextreme/localization/messages/de.json';
    import { loadMessages, locale } from 'devextreme/localization';
    import config from 'devextreme/core/config';

    loadMessages(deMessages);
    locale('de');

    config({
        dateFormat: {
            default: {
                locale: 'en-CA',
            },
        },
        numberFormat: {
            default: {
                locale: 'en-US',
            },
        },
    });

---

Components that use these global formats display values as follows:

<table class="dx-table">
    <tr>
        <th>Raw Value</th>
        <th>Formatted Value</th>
    </tr>
    <tr>
        <td>January 20, 2027</td>
        <td>2027-01-20</td>
    </tr>
    <tr>
        <td>1234.5678</td>
        <td>1,234.568</td>
    </tr>
</table>

[note] **dateFormat**, **timeFormat**, **dateTimeFormat**, and **numberFormat** only configure default formats. **locale** values specified in these properties do not affect formats defined in components.

To apply a specific locale to a predefined date/time format (**format**.[type](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type')), override this format in [dateTimeFormatPresets](/api-reference/50%20Common/Object%20Structures/GlobalConfig/dateTimeFormatPresets.md '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateTimeFormatPresets') with a format object that specifies **locale**. The following code snippet displays *"longDate"* values in the *"en-CA"* locale:

---
##### jQuery

    <!-- tab: index.js -->
    DevExpress.config({
        dateTimeFormatPresets: {
            longDate: {
                default: {
                    type: 'longDate',
                    locale: 'en-CA',
                },
            },
        },
    });

##### Angular

    <!-- tab: app.component.ts -->
    import config from 'devextreme/core/config';

    config({
        dateTimeFormatPresets: {
            longDate: {
                default: {
                    type: 'longDate',
                    locale: 'en-CA',
                },
            },
        },
    });

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import config from 'devextreme/core/config';

    config({
        dateTimeFormatPresets: {
            longDate: {
                default: {
                    type: 'longDate',
                    locale: 'en-CA',
                },
            },
        },
    });
    </script>

##### React

    <!-- tab: App.tsx -->
    import config from 'devextreme/core/config';

    config({
        dateTimeFormatPresets: {
            longDate: {
                default: {
                    type: 'longDate',
                    locale: 'en-CA',
                },
            },
        },
    });

---

Define **locale** in a component format property to format component values in a specific locale. The following code snippet configures [displayFormat](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/displayFormat.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#displayFormat').**locale** in a DevExtreme DateBox:

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $('#dateBoxContainer').dxDateBox({
            value: new Date(2027, 1, 20),
            displayFormat: {
                locale: 'en-CA'
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-box [value]="date">
        <dxo-date-box-display-format locale="en-CA"></dxo-date-box-display-format>
    </dx-date-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxDateBoxModule } from 'devextreme-angular';

    @Component({
        // ...
        imports: [DxDateBoxModule]
    })
    export class AppComponent {
        date: Date = new Date(2027, 1, 20);
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDateBox :value="date">
            <DxDisplayFormat locale="en-CA" />
        </DxDateBox>
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxDateBox, DxDisplayFormat } from 'devextreme-vue/date-box';

    const date = ref<Date>(new Date(2027, 1, 20));
    </script>

##### React

    <!-- tab: App.tsx -->
    import { DateBox, DisplayFormat } from 'devextreme-react/date-box';

    const date = new Date(2027, 1, 20);

    export default function App() {
        return (
            <DateBox defaultValue={date}>
                <DisplayFormat locale="en-CA" />
            </DateBox>
        );
    }

---
