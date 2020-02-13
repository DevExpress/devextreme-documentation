The **Switch** is a widget that can be in two states: "On" (when [value](/api-reference/10%20UI%20Widgets/dxSwitch/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxSwitch/Configuration/#value') is **true**) and "Off" (when [value](/api-reference/10%20UI%20Widgets/dxSwitch/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxSwitch/Configuration/#value') is **false**).

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Switch/Overview/"
}

The following code adds the **Switch** to your page.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            value: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} [value]="true">
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent { }

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
        <Dx{WidgetName} :value="true" />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName} defaultValue={true} />
            );
        }
    }
    export default App;

---

#####See Also#####
#include common-link-configurewidget
- [Switch - Handle the Value Change Event](/concepts/05%20Widgets/Switch/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/Switch/Handle_the_Value_Change_Event')
- [Switch - Keyboard Support](/concepts/05%20Widgets/Switch/20%20Keyboard%20Support.md '/Documentation/Guide/Widgets/Switch/Keyboard_Support')
- [Switch API Reference](/api-reference/10%20UI%20Widgets/dxSwitch '/Documentation/ApiReference/UI_Widgets/dxSwitch/')

[tags]switch, editor, overview