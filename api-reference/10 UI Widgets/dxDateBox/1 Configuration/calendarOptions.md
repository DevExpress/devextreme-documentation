---
id: dxDateBox.Options.calendarOptions
type: dxCalendar_Options
default: {}
---
---
##### shortDescription
Configures the calendar's value picker. Applies only if the [pickerType](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/pickerType.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#pickerType') is *"calendar"*.

---
You can specify most of the [Calendar options](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/') in this object except those listed below. These options are overridden by their **DateBox** counterparts.

- [dateSerializationFormat](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/dateSerializationFormat.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#dateSerializationFormat')
- [disabledDates](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/disabledDates.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#disabledDates')
- [max](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/max.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#max')
- [min](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/min.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#min')
- [onCellClick](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#onCellClick)
- [onValueChanged](/api-reference/10%20UI%20Widgets/Editor/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#onValueChanged')
- [tabIndex](/api-reference/10%20UI%20Widgets/Widget/1%20Configuration/tabIndex.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#tabIndex')
- [value](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#value')

[note]

#include widgets-config-object-option-note with {
    optionName: "calendarOptions"
}

---
##### Angular

    <!-- tab: app.component.html -->
    <dx-date-box ... >
        <dxo-calendar-options
            [onOptionChanged]="logOption">
        </dxo-calendar-options>
    </dx-date-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        logOption(e) {
            console.log(e.fullName + ': ' + e.value);
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxDateBoxModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDateBoxModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-date-box ... >
            <dx-calendar-options
                :on-option-changed="logOption"
            />
        </dx-date-box>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDateBox, {
        DxCalendarOptions
    } from 'devextreme-vue/date-box';

    export default {
        components: {
            DxDateBox,
            DxCalendarOptions
        },
        methods: {
            logOption(e) {
                console.log(e.fullName + ': ' + e.value);
            }
        }
    }
    </script>

---

[/note]