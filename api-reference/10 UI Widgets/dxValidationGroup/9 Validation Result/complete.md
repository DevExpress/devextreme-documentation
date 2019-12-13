---
id: dxValidationGroupResult.complete
type: Promise<dxValidationGroupResult>
---
---
##### shortDescription
A promise that is fulfilled when all async rules are validated.

---
This promise exists only when the [status](/api-reference/10%20UI%20Widgets/dxValidationGroup/9%20Validation%20Result/status.md '/Documentation/ApiReference/UI_Widgets/dxValidationGroup/Validation_Result/#status') is *"pending"*. Check the status before you attach callback functions to that promise.

In the following example, a button validates a group of editors with async rules. The **status** is checked in the **onClick** event handler:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var validationGroupName = "myValidationGroup"; 

        $("#textBox").dxTextBox({ ... })
            .dxValidator({
                validationGroup: validationGroupName,
                validationRules: [{ 
                    type: "async", 
                    validationCallback: function(params) {
                        // ...
                    }
                }]
            });

        $("#dateBox").dxDateBox({ ... })
            .dxValidator({
                validationGroup: validationGroupName,
                validationRules: [{ 
                    type: "async", 
                    validationCallback: function(params) {
                        // ...
                    }
                }]
            });

        $("#button").dxButton({
            validationGroup: validationGroupName,
            onClick: function(e) {
                const res = e.validationGroup.validate(); 
                res.status === "pending" && res.complete.then((r) => {
                    console.log(r.status);
                });
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-text-box>
        <dx-validator
            [validationGroup]="validationGroupName">
                <dxi-validation-rule type="async" 
                    [validationCallback]="validateAsync">
                </dxi-validation-rule>
        </dx-validator>
    </dx-text-box>

    <dx-date-box>
        <dx-validator
            [validationGroup]="validationGroupName">
                <dxi-validation-rule type="async" 
                    [validationCallback]="validateAsync">
                </dxi-validation-rule>
        </dx-validator>
    </dx-date-box>

    <dx-button 
        [validationGroup]="validationGroupName"
        (onClick)="validateGroup($event)">
    </dx-button>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        validationGroupName = "myValidationGroup";

        validateGroup(e) {
            const res = e.validationGroup.validate(); 
            res.status === "pending" && res.complete.then((r) => {
                console.log(r.status);
            });
        }
        
        validateAsync(params) {
            // ...
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxValidatorModule,
             DxTextBoxModule,
             DxDateBoxModule,
             DxButtonModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxTextBoxModule,
            DxDateBoxModule,
            DxButtonModule,
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
            <dx-validator
                :validation-group="validationGroupName">
                <dx-async-rule
                    :validation-callback="validateAsync"
                />
            </dx-validator>
        </dx-text-box>

        <dx-date-box>
            <dx-validator
                :validation-group="validationGroupName">
                <dx-async-rule
                    :validation-callback="validateAsync"
                />
            </dx-validator>
        </dx-date-box>

        <dx-button
            :validation-group="validationGroupName"
            @click="validateGroup()"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTextBox } from 'devextreme-vue/text-box';
    import { DxDateBox } from 'devextreme-vue/date-box';
    import { DxButton } from 'devextreme-vue/button';

    import {
        DxValidator,
        DxAsyncRule
    } from 'devextreme-vue/validator';

    export default {
        components: {
            DxTextBox,
            DxDateBox,
            DxButton,
            DxValidator,
            DxAsyncRule
        },
        data() {
            return {
                validationGroupName: 'myValidationGroup'
            }
        },
        methods: {
            validateAsync(params) {
                // ...
            },
            validateGroup(e) {
                const res = e.validationGroup.validate(); 
                res.status === "pending" && res.complete.then((r) => {
                    console.log(r.status);
                });
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TextBox } from 'devextreme-react/text-box';
    import { DateBox } from 'devextreme-react/date-box';
    import { Button } from 'devextreme-react/button';

    import {
        Validator,
        AsyncRule
    } from 'devextreme-react/validator';

    const validationGroupName = "myValidationGroup";

    const validateAsync = function(params) {
        // ...
    };

    const validateGroup = function(e) {
        const res = e.validationGroup.validate(); 
        res.status === "pending" && res.complete.then((r) => {
            console.log(r.status);
        });
    });

    class App extends React.Component {
        render() {
            return (
                <TextBox>
                    <Validator
                        validationGroup={validationGroupName}>
                        <AsyncRule
                            validationCallback={validateAsync} />
                    </Validator>
                </TextBox>

                <DateBox>
                    <Validator
                        validationGroup={validationGroupName}>
                        <AsyncRule
                            validationCallback={validateAsync} />
                    </Validator>
                </DateBox>

                <Button 
                    validationGroup={validationGroupName}
                    onClick={validateGroup} />
            );
        }
    }
    export default App;

---
