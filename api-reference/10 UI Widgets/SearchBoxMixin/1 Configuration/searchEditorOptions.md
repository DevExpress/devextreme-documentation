---
id: SearchBoxMixin.Options.searchEditorOptions
type: dxTextBox_Options
default: {}
---
---
##### shortDescription
Configures the search panel.

---
See the [TextBox Configuration](/api-reference/10%20UI%20Widgets/dxTextBox/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/') for options you can specify in this object.

[note]

#include widgets-config-object-option-note with {
    optionName: "searchEditorOptions"
}

---
##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-search-editor-options
            [onOptionChanged]="logOption">
        </dxo-search-editor-options>
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
            <dx-search-editor-options
                :on-option-changed="logOption"
            />
        </dx-{widget-name}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxSearchEditorOptions
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxSearchEditorOptions
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