---
id: dxFormTabbedItem.tabPanelOptions
type: dxTabPanel_Options
default: undefined
---
---
##### shortDescription
Holds a [configuration object](/api-reference/10%20UI%20Widgets/dxTabPanel/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/') for the [TabPanel](/api-reference/10%20UI%20Widgets/dxTabPanel '/Documentation/ApiReference/UI_Widgets/dxTabPanel/') widget used to display the current form item.

---

[note]

#include widgets-config-object-option-note with {
    optionName: "tabPanelOptions"
}

---
##### Angular

    <!-- tab: app.component.html -->
    <dx-form ... >
        <dxi-item itemType="tabbed">
            <dxo-tab-panel-options ...
                [onOptionChanged]="logOption">
            </dxo-tab-panel-options>
        </dxi-item>
    </dx-form>

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

    import { DxFormModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxFormModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-form ... >
            <dx-tabbed-item>
                <dx-tab-panel-options ...
                    :on-option-changed="logOption"
                />
            </dx-tabbed-item>
        </dx-form>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxForm, {
        DxTabbedItem,
        DxTabPanelOptions
    } from 'devextreme-vue/form';

    export default {
        components: {
            DxForm,
            DxTabbedItem,
            DxTabPanelOptions
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

#####See Also#####
- [Configure the Tab Panel](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs/20%20Configure%20the%20Tab%20Panel.md '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/#Configure_the_Tab_Panel')