---
id: GridBase.Options.onRowValidating
type: function(e)
default: null
EventForAction: GridBase.rowValidating
---
---
##### shortDescription
A function that is executed after cells in a row are validated against [validation rules](/api-reference/_hidden/GridBaseColumn/validationRules.md '{basewidgetpath}/Configuration/columns/#validationRules').

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.brokenRules): Array<RequiredRule, NumericRule, RangeRule, StringLengthRule, CustomRule, CompareRule, PatternRule, EmailRule, AsyncRule>
An array of broken rules. The structure of rule objects is described in the [Validation Rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') section.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.errorText): String
An error message to be displayed.

##### field(e.isValid): Boolean
Indicates whether data in all row cells satisfies the validation rules.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in the data source, the whole data object is considered the key.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.newData): Object
The data of the validated row after changes.

##### field(e.oldData): Object
The data of the validated row before changes.

##### field(e.promise): Promise<void>
Assign a Promise to this field to perform an asynchronous operation, such as a request to a server.

---
Use this function to perform operations before messages about failed validation are shown. For instance, you can run additional checks and change the **isValid** function parameter to change the validation result. You can also change the **errorText** parameter to correct the error message.


The following code illustrates how to validate an email address on the server and display an error row with a custom error text if the validation fails:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            onRowValidating: function(e) {
                if(e.newData.Email) {
                    e.promise = checkEmail(e.newData.Email)
                        .done(function(result) {
                            e.errorText = result.errorText;
                            e.isValid = result.isValid;
                        });
                }
            }
        });
    });
    function checkEmail(email) {
        return $.ajax({
            // The url returns { errorText: "The Email address you entered already exists.", isValid: false }
            url: "https://www.mywebsite.com/api/checkEmail",
            dataType: "json",
            data: { email: email }
        });
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        (onRowValidating)="onRowValidating($event)">
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { HttpClient, HttpParams } from '@angular/common/http';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        constructor(@Inject(HttpClient) http: HttpClient) {
            this.checkEmail = this.checkEmail.bind(this);
        }
        onRowValidating(e) {
            if(e.newData.Email) {
                e.promise = this.checkEmail(e.newData.Email)
                    .then((result: any) => {
                        // "result" is { errorText: "The Email address you entered already exists.", isValid: false }
                        e.errorText = result.errorText;
                        e.isValid = result.isValid;
                    });
            }
        }
        checkEmail(email) {
            const params = new HttpParams().set("email", email);
            return this.http.get("https://www.mywebsite.com/api/checkEmail", { params })
                .toPromise();
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule, Component } from '@angular/core';
    import { HttpClientModule } from '@angular/common/http';
    import { AppComponent } from './app.component';

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            HttpClientModule,
            Dx{WidgetName}Module
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            @row-validating="onRowValidating">
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';
    import 'whatwg-fetch';

    export default {
        components: {
            Dx{WidgetName}
        },
        // ...
        methods: {
            onRowValidating(e) {
                if(e.newData.Email) {
                    e.promise = this.checkEmail(e.newData.Email)
                        .then((result: any) => {
                            // "result" is { errorText: "The Email address you entered already exists.", isValid: false }
                            e.errorText = result.errorText;
                            e.isValid = result.isValid;
                        });
                }
            },
            checkEmail(email) {
                let params = '?' + 'email=' + email;
                return fetch("https://www.mywebsite.com/api/checkEmail${params}")
                    .toPromise();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-react/{widget-name}';
    import 'whatwg-fetch';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.onRowValidating = this.onRowValidating.bind(this);
        }

        onRowValidating(e) {
            if(e.newData.Email) {
                e.promise = this.checkEmail(e.newData.Email)
                    .then((result: any) => {
                        // "result" is { errorText: "The Email address you entered already exists.", isValid: false }
                        e.errorText = result.errorText;
                        e.isValid = result.isValid;
                    });
            }
        }
        checkEmail(email) {
            let params = '?' + 'email=' + email;
            return fetch("https://www.mywebsite.com/api/checkEmail${params}")
                .toPromise();
        }

        render() {
            return (
                <{WidgetName} ...
                    onRowValidating={this.onRowValidating}>
                </{WidgetName}>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().{WidgetName}()
        // ...
        .OnRowValidating("onRowValidating")
    )

    <script type="text/javascript">
        function onRowValidating(e) {
            if(e.newData.Email) {
                e.promise = checkEmail(e.newData.Email)
                    .done(function(result) {
                        e.errorText = result.errorText;
                        e.isValid = result.isValid;
                    });
            }
        }
        function checkEmail(email) {
            return $.ajax({
                // The url returns { errorText: "The Email address you entered already exists.", isValid: false }
                url: "https://www.mywebsite.com/api/checkEmail",
                dataType: "json",
                data: { email: email }
            });
        }
    </script>

---

[note] In batch [editing mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'), if changes in several rows are committed simultaneously, this function is executed for each row.
