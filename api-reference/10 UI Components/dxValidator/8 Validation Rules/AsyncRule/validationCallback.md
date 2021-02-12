---
id: AsyncRule.validationCallback
type: function(options)
---
---
##### shortDescription
A function that validates the target value.

##### param(options): Object
An object that defines validation parameters.

##### field(options.column): Object
The column to which the cell being validated belongs. Exists only when you validate a built-in editor in the [DataGrid](/api-reference/10%20UI%20Widgets/dxDataGrid '/Documentation/ApiReference/UI_Components/dxDataGrid') or [TreeList](/api-reference/10%20UI%20Widgets/dxTreeList '/Documentation/ApiReference/UI_Components/dxTreeList').

##### field(options.data): Object
The current row's data. Exists only when you validate a **DataGrid** or **TreeList** cell's value.

##### field(options.formItem): Object
The form item being validated. Exists only when you validate a built-in editor in the [Form](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Components/dxForm/') UI component.

##### field(options.rule): Object
The rule being checked.

##### field(options.validator): Object
The [Validator](/api-reference/10%20UI%20Widgets/dxValidator '/Documentation/ApiReference/UI_Components/dxValidator') object that initiated the validation.

##### field(options.value): String | Number
The validated value.

##### return: Promise<any>
A Promise that should be resolved or rejected as shown in the example below.

---

The following code shows a generic **validationCallback** implementation for a server that returns a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Body/json" target="_blank">JSON</a> response. The function sends the value that should be validated to the server. The response includes a flag that indicates validity, and optionally an error message that is used if validation fails.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#textBox").dxTextBox({ ... })
            .dxValidator({
                validationRules: [{ 
                    type: "async", 
                    validationCallback: function(params) {
                        const d = $.Deferred();
                        $.ajax( ... ).done(function(res) {
                            // res.message contains validation error message
                            res.isValid ? d.resolve() : d.reject(res.message);

                            // ===== or if "res" is { isValid: Boolean, message: String } =====
                            d.resolve(res);
                        }).fail(function(error) {
                            console.error("Server-side validation error", error);

                            d.reject("Cannot contact validation server");
                        })
                        return d.promise();
                    }
                }]
            });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-text-box>
        <dx-validator>
            <dxi-validation-rule type="async" 
                [validationCallback]="validateAsync">
            </dxi-validation-rule>
        </dx-validator>
    </dx-text-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { HttpClient } from '@angular/common/http';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        constructor(private httpClient: HttpClient) {
            this.validateAsync = this.validateAsync.bind(this);
        }

        validateAsync(params) {
            return new Promise((resolve, reject) => {
                this.httpClient.post("https://mydomain.com/MyDataService", { data: params.value })
                    .toPromise()
                    .then((res: any) => {
                        // res.message contains validation error message
                        res.isValid ? resolve() : reject(res.message);

                        // ===== or if "res" is { isValid: Boolean, message: String } =====
                        resolve(res);
                    })
                    .catch(error => {
                        console.error("Server-side validation error", error);

                        reject("Cannot contact validation server");
                    });
            })
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { HttpClientModule } from '@angular/common/http';

    import { DxValidatorModule,
            DxTextBoxModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            HttpClientModule,
            DxTextBoxModule,
            DxValidatorModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTextBox>
            <DxValidator>
                <DxAsyncRule
                    :validation-callback="validateAsync"
                />
            </DxValidator>
        </DxTextBox>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxTextBox } from 'devextreme-vue/text-box';
    import {
        DxValidator,
        DxAsyncRule
    } from 'devextreme-vue/validator';
    import 'whatwg-fetch';

    export default {
        components: {
            DxTextBox,
            DxValidator,
            DxAsyncRule
        },
        methods: {
            validateAsync(params) {
                return new Promise((resolve, reject) => {
                    fetch("https://mydomain.com/MyDataService", {
                        method: 'POST',
                        body: JSON.stringify({ data: params.value })
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error: ${res.status} ${res.statusText}`);
                        }
                        return response.json();
                    })
                    .then(res => {
                        // res.message contains validation error message
                        res.isValid ? resolve() : reject(res.message);

                        // ===== or if "res" is { isValid: Boolean, message: String } =====
                        resolve(res);
                    })
                    .catch(error => {
                        console.error("Server-side validation error", error);

                        reject("Cannot contact validation server");
                    });
                });
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { TextBox } from 'devextreme-react/text-box';
    import {
        Validator,
        AsyncRule
    } from 'devextreme-react/validator';
    import 'whatwg-fetch';

    const validateAsync = function(params) {
        return new Promise((resolve, reject) => {
            fetch("https://mydomain.com/MyDataService", {
                method: 'POST',
                body: JSON.stringify({ data: params.value })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${res.status} ${res.statusText}`);
                }
                return response.json();
            })
            .then(res => {
                // res.message contains validation error message
                res.isValid ? resolve() : reject(res.message);
                
                // ===== or if "res" is { isValid: Boolean, message: String } =====
                resolve(res);
            })
            .catch(error => {
                console.error("Server-side validation error", error);

                reject("Cannot contact validation server");
            });
        });
    };

    class App extends React.Component {
        render() {
            return (
                <TextBox>
                    <Validator>
                        <AsyncRule
                            validationCallback={validateAsync} />
                    </Validator>
                </TextBox>
            );
        }
    }
    export default App;

---
