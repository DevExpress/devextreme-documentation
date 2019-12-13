All group validation errors can be displayed in the [ValidationSummary](/api-reference/10%20UI%20Widgets/dxValidationSummary '/Documentation/ApiReference/UI_Widgets/dxValidationSummary/') widget. The following code shows how to add this widget to a page. The commented-out codelines associate the **Validation Summary** with a named **Validation Group**.

---

##### jQuery

    <!--JavaScript-->$(function () {
        // var loginGroup = "loginGroup";
        $("#summary").dxValidationSummary({
            // validationGroup: loginGroup
        });
    });

    <!--HTML-->
    ...
    <div id="summary"></div>

##### Angular

    <!-- tab: app.component.html -->
    <!-- <dx-validation-group name="loginGroup"> -->
        ...
        <dx-validation-summary></dx-validation-summary>
    <!-- </dx-validation-group> -->

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import {
        // ...
        // DxValidationGroupModule,
        DxValidationSummaryModule
    } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            // ...
            // DxValidationGroupModule,
            DxValidationSummaryModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### AngularJS

    <!--HTML-->
    <!-- div id="loginGroup" dx-validation-group="{ }" -->
        ...
        <div dx-validation-summary="{ }"></div>
    <!-- /div -->

##### Knockout

    <!--HTML-->
    <!-- div id="loginGroup" data-bind="dxValidationGroup: { }" -->
        <div data-bind="dxValidationSummary: { }"></div>
    <!-- /div -->

##### Vue

    <!-- tab: App.vue -->
    <template>
        <!-- <dx-validation-group name="loginGroup"> -->
            ...
            <dx-validation-summary />
        <!-- </dx-validation-group> -->
    </template>

    <script>
    // ...
    import DxValidationSummary from 'devextreme-vue/validation-summary';
    // import DxValidationGroup from 'devextreme-vue/validation-group';
    
    export default {
        components: {
            // ...
            // DxValidationGroup,
            DxValidationSummary
        },
        // ...
    }
    </script>
    
##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    // ...
    // import ValidationGroup from 'devextreme-react/validation-group';
    import ValidationSummary from 'devextreme-react/validation-summary';

    class App extends React.Component {
        // ...
        render() {
            return (
                {/* <ValidationGroup name="loginGroup"> */}
                    ...
                    <ValidationSummary />
                {/* </ValidationGroup> */}
            );
        }
    }
    export default App;

---
