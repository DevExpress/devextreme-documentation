---
id: dxDropDownBox.Options.displayValueFormatter
type: function(value)
---
---
##### shortDescription
Customizes text before it is displayed in the input field.

##### param(value): String | Array<any>
One or more values from the [displayExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#displayExpr') that correspond(s) to the selected [widget values](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#value').

##### return: String
Text for the input field.

---
This function receives values from the data field set in the [displayExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#displayExpr') option and should return a string that contains text for the input field. If the **displayExpr** is not set, the function receives full data objects. 

The following code demonstrates how to change separators from commas to semicolons by using the **displayValueFormatter** function. You can try it if you copy this code to the [Multiple Selection demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DropDownBox/MultipleSelection):

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dropDownBoxContainer").dxDropDownBox({
            displayValueFormatter: function(value) {
                return Array.isArray(value) ? value.join("; ") : value;
            },
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-drop-down-box ...
        [displayValueFormatter]="displayValueFormatter"
    >
        <!-- ... -->
    </dx-drop-down-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
        displayValueFormatter(value) {
            return Array.isArray(value) ? value.join("; ") : value;
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
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-drop-down-box ...
            :display-value-formatter="displayValueFormatter"
        >
            <!-- ... -->
        </dx-drop-down-box>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxDropDownBox } from 'devextreme-vue/drop-down-box';

    export default {
        components: {
            DxDropDownBox
        },
        // ...
        methods: {
            displayValueFormatter: function(value) {
                return Array.isArray(value) ? value.join("; ") : value;
            }
        }    
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DropDownBox } from 'devextreme-react/drop-down-box';

    class App extends React.Component {
        render() {
            return (
                <DropDownBox ...
                    displayValueFormatter={this.displayValueFormatter}
                />
            );
        }
            
        displayValueFormatter(value) {
            return Array.isArray(value) ? value.join("; ") : value;
        }
    }

    export default App;

---