---
id: AsyncRule.message
type: String
default: 'Value is invalid'
---
---
##### shortDescription
Specifies the message that is shown if the rule is broken.

---

An error message can be specified as follows:

- **Hard-code the message** 

    ---
    ##### jQuery

        <!-- tab: index.js -->
        $(function() {
            $("#textBox").dxTextBox({ ... })
                .dxValidator({
                    type: "async",
                    message: "My custom message"
                });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-text-box> 
            <dx-validator>
                <dxi-validator-async-rule
                    message="My custom message">
                </dxi-validator-async-rule>
            </dx-validator>
        </dx-text-box>

        <!-- tab: app.module.ts -->
        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';
        import { AppComponent } from './app.component';

        import { DxValidatorModule,
                 DxTextBoxModule } from 'devextreme-angular';

        @NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                DxTextBoxModule,
                BrowserModule,
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
                        message="My custom message"
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

        export default {
            components: {
                DxTextBox,
                DxValidator,
                DxAsyncRule
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

        class App extends React.Component {
            render() {
                return (
                    <TextBox>
                        <Validator>
                            <AsyncRule
                                message="My custom message" />
                        </Validator>
                    </TextBox>
                );
            }
        }
        export default App;

    ---

- **Hide the message**

    ---
    ##### jQuery

        <!-- tab: index.js -->
        $(function() {
            $("#textBox").dxTextBox({ ... })
                .dxValidator({
                    type: "async",
                    message: ""
                });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-text-box>
            <dx-validator>
                <dxi-validator-async-rule
                    message="">
                </dxi-validator-async-rule>
            </dx-validator>
        </dx-text-box>

        <!-- tab: app.module.ts -->
        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';
        import { AppComponent } from './app.component';

         import { DxValidatorModule,
                  DxTextBoxModule } from 'devextreme-angular';

        @NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                DxValidatorModule,
                DxTextBoxModule
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
                        message=""
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

        export default {
            components: {
                DxTextBox,
                DxValidator,
                DxAsyncRule
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

        class App extends React.Component {
            render() {
                return (
                    <TextBox>
                        <Validator>
                            <AsyncRule
                                message="" />
                        </Validator>
                    </TextBox>
                );
            }
        }
        export default App;

    ---

- **Display the editor's name in the message**

    ---
    ##### jQuery

        <!-- tab: index.js -->
        $(function() {
            $("#textBox").dxTextBox({ ... })
                .dxValidator({
                    name: "Password", // The error message will be "Password is invalid"
                    validationRules: [{
                        type: "async"
                    }]
                });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-text-box>
            <!-- The error message will be "Password is invalid" -->
            <dx-validator name="Password">
                <dxi-validator-async-rule>
                </dxi-validator-async-rule>
            </dx-validator>
        </dx-text-box>

        <!-- tab: app.module.ts -->
        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';
        import { AppComponent } from './app.component';

        import { DxValidatorModule,
                 DxTextBoxModule } from 'devextreme-angular';

        @NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                DxValidatorModule,
                DxTextBoxModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
        export class AppModule { }

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <DxTextBox>
                <!-- The error message will be "Password is invalid" -->
                <DxValidator name="Password">
                    <DxAsyncRule />
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

        export default {
            components: {
                DxValidator,
                DxAsyncRule
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

        class App extends React.Component {
            render() {
                return (
                    <TextBox>
                        {/* The error message will be "Password is invalid" */}
                        <Validator name="Password">
                            <AsyncRule />
                        </Validator>
                    </TextBox>
                );
            }
        }
        
        export default App;

    ---


- **Get the message from the server**       
See the example in the [validationCallback](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules/AsyncRule/validationCallback.md '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/AsyncRule/#validationCallback') description.
