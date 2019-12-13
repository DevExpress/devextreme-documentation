---
id: GridBase.Options.filterBuilderPopup
type: dxPopup_Options
default: {}
---
---
##### shortDescription
Configures the popup in which the integrated [filter builder](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterBuilder.md '{basewidgetpath}/Configuration/#filterBuilder') is shown.

---
See the [Popup configuration](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/') for options that you can specify in this object.

[note]

#include widgets-config-object-option-note with {
    optionName: "filterBuilderPopup"
}

---
##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-filter-builder-popup
            [onOptionChanged]="logOption">
        </dxo-filter-builder-popup>
    </dx-{widget-name}>

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

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-{widget-name} ... >
            <dx-filter-builder-popup
                :on-option-changed="logOption"
            />
        </dx-{widget-name}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxFilterBuilderPopup
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxFilterBuilderPopup
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
- [Filter Panel with Filter Builder](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/4%20Filter%20Panel%20with%20Filter%20Builder.md '/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Filter_Panel_with_Filter_Builder')