DevExtreme libraries use the current application locale to display UI text and format values. Specify **Format**.[locale](/Documentation/ApiReference/Common/Object_Structures/Format/#locale) in the following [GlobalConfig](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/) properties to format date, time, and number values in another locale:

- [dateFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateFormat)
- [timeFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#timeFormat)
- [dateTimeFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateTimeFormat)
- [numberFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#numberFormat)
- [dateTimeFormatPresets](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateTimeFormatPresets)

The following code snippet displays German [UI text](/Documentation/Guide/Common/Localization_and_Globalization/UI_Text_Localization/) and specifies the *"en-CA"* locale in **dateFormat** and the *"en-US"* locale in **numberFormat**:

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

To apply a specific locale to a predefined date/time format in all components, override this format in [dateTimeFormatPresets](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateTimeFormatPresets) with a format object that specifies **locale**. The following code snippet displays *"longDate"* values in the *"en-CA"* locale:

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

Define **locale** in a component format property to format component values in a specific locale. The following code snippet configures [displayFormat](/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#displayFormat).**locale** in a DevExtreme DateBox:

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
