---
id: dxDropDownButton.Options.dropDownOptions
type: dxPopup_Options
default: {}
---
---
##### shortDescription
Configures the drop-down field.

---
See the [Popup configuration](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/') for options that you can specify in this object.

[note]

#include widgets-config-object-option-note with {
    optionName: "dropDownOptions"
}

---
##### Angular

    <!-- tab: app.component.html -->
    <dx-drop-down-button ... >
        <dxo-drop-down-options
            [onOptionChanged]="logOption">
        </dxo-drop-down-options>
    </dx-drop-down-button>

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

    import { DxDropDownButtonModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDropDownButtonModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-drop-down-button ... >
            <dx-drop-down-options
                :on-option-changed="logOption"
            />
        </dx-drop-down-button>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDropDownButton, {
        DxDropDownOptions
    } from 'devextreme-vue/drop-down-button';

    export default {
        components: {
            DxDropDownButton,
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