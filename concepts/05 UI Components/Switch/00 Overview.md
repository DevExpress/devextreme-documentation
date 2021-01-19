The **Switch** is a UI component that can be in two states: "On" (when [value](/api-reference/10%20UI%20Widgets/dxSwitch/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxSwitch/Configuration/#value') is **true**) and "Off" (when [value](/api-reference/10%20UI%20Widgets/dxSwitch/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxSwitch/Configuration/#value') is **false**).

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Switch/Overview/"
}

The following code adds the **Switch** to your page.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#switchContainer").dxSwitch({
            value: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-switch [value]="true">
    </dx-switch>

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

    import { DxSwitchModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxSwitchModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSwitch :value="true" />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxSwitch from 'devextreme-vue/switch';

    export default {
        components: {
            DxSwitch
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Switch from 'devextreme-react/switch';

    class App extends React.Component {
        render() {
            return (
                <Switch defaultValue={true} />
            );
        }
    }
    export default App;

---

#####See Also#####
#include common-link-configurewidget
- [Switch - Handle the Value Change Event](/concepts/05%20Widgets/Switch/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/Switch/Handle_the_Value_Change_Event')
- [Switch - Keyboard Support](/concepts/05%20Widgets/Switch/20%20Keyboard%20Support.md '/Documentation/Guide/Widgets/Switch/Keyboard_Support')
- [Switch API Reference](/api-reference/10%20UI%20Widgets/dxSwitch '/Documentation/ApiReference/UI_Components/dxSwitch/')

[tags]dxswitch, switch, editor, overview