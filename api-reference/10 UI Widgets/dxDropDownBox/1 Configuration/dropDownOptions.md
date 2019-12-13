---
id: dxDropDownBox.Options.dropDownOptions
type: dxPopup_Options
default: {}
---
---
##### shortDescription
Configures the drop-down field which holds the [content](/api-reference/10%20UI%20Widgets/dxDropDownBox/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#contentTemplate').

---
See [Popup Configuration](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/') for options that you can specify in this object.

[note]

#include widgets-config-object-option-note with {
    optionName: "dropDownOptions"
}

---
##### Angular

    <!-- tab: app.component.html -->
    <dx-drop-down-box ... >
        <dxo-drop-down-options
            [onOptionChanged]="logOption">
        </dxo-drop-down-options>
    </dx-drop-down-box>

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

    import { DxDropDownBoxModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDropDownBoxModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-drop-down-box ... >
            <dx-drop-down-options
                :on-option-changed="logOption"
            />
        </dx-drop-down-box>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDropDownBox, {
        DxDropDownOptions
    } from 'devextreme-vue/drop-down-box';

    export default {
        components: {
            DxDropDownBox,
            DxDropDownOptions
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