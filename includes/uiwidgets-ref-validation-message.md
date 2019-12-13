An error message can be specified as follows:

- **Hard-code the message** 

    ---
    ##### jQuery

        <!-- tab: index.js -->
        $(function() {
            $("#textBox").dxTextBox({ ... })
                .dxValidator({
                    type: "${{ruleType}}",
                    message: "My custom message"
                });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-text-box> 
            <dx-validator>
                <dxi-validation-rule 
                    type="${{ruleType}}" 
                    message="My custom message">
                </dxi-validation-rule>
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
            <dx-text-box>
                <dx-validator>
                    <dx-${{ruleType}}-rule
                        message="My custom message"
                    />
                </dx-validator>
            </dx-text-box>
        </template>

        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import { DxTextBox } from 'devextreme-vue/text-box';
        import {
            DxValidator,
            Dx${{ruleTypeUpperCase}}Rule
        } from 'devextreme-vue/validator';

        export default {
            components: {
                DxTextBox,
                DxValidator,
                Dx${{ruleTypeUpperCase}}Rule
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';

        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import { TextBox } from 'devextreme-react/text-box';
        import {
            Validator,
            ${{ruleTypeUpperCase}}Rule
        } from 'devextreme-react/validator';

        class App extends React.Component {
            render() {
                return (
                    <TextBox>
                        <Validator>
                            <${{ruleTypeUpperCase}}Rule
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
                    type: "${{ruleType}}",
                    message: ""
                });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-text-box>
            <dx-validator>
                <dxi-validation-rule 
                    type="${{ruleType}}" 
                    message="">
                </dxi-validation-rule>
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
            <dx-text-box>
                <dx-validator>
                    <dx-${{ruleType}}-rule
                        message=""
                    />
                </dx-validator>
            </dx-text-box>
        </template>

        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import { DxTextBox } from 'devextreme-vue/text-box';
        import {
            DxValidator,
            Dx${{ruleTypeUpperCase}}Rule
        } from 'devextreme-vue/validator';

        export default {
            components: {
                DxTextBox,
                DxValidator,
                Dx${{ruleTypeUpperCase}}Rule
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';

        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import { TextBox } from 'devextreme-react/text-box';
        import {
            Validator,
            ${{ruleTypeUpperCase}}Rule
        } from 'devextreme-react/validator';

        class App extends React.Component {
            render() {
                return (
                    <TextBox>
                        <Validator>
                            <${{ruleTypeUpperCase}}Rule
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
                    name: "${{editorName}}", // The error message will be "${{errorMessage}}"
                    validationRules: [{
                        type: "${{ruleType}}"
                    }]
                });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-text-box>
            <!-- The error message will be "${{errorMessage}}" -->
            <dx-validator name="${{editorName}}">
                <dxi-validation-rule 
                    type="${{ruleType}}">
                </dxi-validation-rule>
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
            <dx-text-box>
                <!-- The error message will be "${{errorMessage}}" -->
                <dx-validator name="${{editorName}}">
                    <dx-${{ruleType}}-rule />
                </dx-validator>
            </dx-text-box>
        </template>

        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import { DxTextBox } from 'devextreme-vue/text-box';
        import {
            DxValidator,
            Dx${{ruleTypeUpperCase}}Rule
        } from 'devextreme-vue/validator';

        export default {
            components: {
                DxValidator,
                Dx${{ruleTypeUpperCase}}Rule
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';

        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import { TextBox } from 'devextreme-react/text-box';
        import {
            Validator,
            ${{ruleTypeUpperCase}}Rule
        } from 'devextreme-react/validator';

        class App extends React.Component {
            render() {
                return (
                    <TextBox>
                        {/* The error message will be "${{errorMessage}}" */}
                        <Validator name="${{editorName}}">
                            <${{ruleTypeUpperCase}}Rule} />
                        </Validator>
                    </TextBox>
                );
            }
        }
        
        export default App;

    ---
