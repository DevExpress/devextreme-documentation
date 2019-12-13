---
id: GridBase.Options.editing.popup
type: dxPopup_Options
---
---
##### shortDescription
Configures the popup. Used only if **editing**.[mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode') is *"popup"*.

---
You can specify most of the [Popup options](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/') in this object except those listed below. The **{WidgetName}** overrides these options.

- [contentTemplate](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#contentTemplate')
- [fullScreen](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/fullScreen.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#fullScreen')
- [showTitle](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/showTitle.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#showTitle')
- [toolbarItems](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/toolbarItems '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/toolbarItems/')

The popup always contains a form whose items are used for editing. Use the [form](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/form.md '{basewidgetpath}/Configuration/editing/#form') option to customize the form's items.

[note]

#include widgets-config-object-option-note with {
    optionName: "popup"
}

---
##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-editing mode="popup">
            <dxo-popup ...
                [onOptionChanged]="logOption">
            </dxo-popup>
        </dxo-editing>
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
            <dx-editing mode="popup">
                <dx-popup ...
                    :on-option-changed="logOption"
                />
            </dx-editing>
        </dx-{widget-name}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxEditing,
        DxPopup
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxEditing,
            DxPopup
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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/{WidgetName}/PopupEditing/"
}
