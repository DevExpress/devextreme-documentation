DevExtreme includes a validation engine that checks edited values before they are saved. This engine supports different [validation rule types](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/).

To apply validation rules to a simple item, specify them in the [validationRules[]](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#validationRules) array. You can specify an item's [isRequired](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#isRequired) property to implicitly apply the [RequiredRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RequiredRule/).

The following example sets the **isRequired** property for the `Name` item. It also adds the [NumericRule](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules/NumericRule '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/NumericRule/') for `officeNumber` and [EmailRule](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules/EmailRule '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/EmailRule/') for `Email`.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#form").dxForm({
            formData: {
                // ...
            },
            colCount: 2,
            items: [{
                dataField: "name",
                isRequired: true
            }, {
                dataField: "officeNumber",
                validationRules: [{
                    type: "numeric"
                }] 
            }, {
                dataField: "email",
                validationRules: [{
                    type: "email"
                }] 
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-form
        [formData]="employee"
        [colCount]="2">
        <dxi-item dataField="name" [isRequired]="true">
        </dxi-item>
        <dxi-item dataField="officeNumber">
            <dxi-validation-rule type="numeric">
            </dxi-validation-rule>
        </dxi-item>
        <dxi-item dataField="email">
            <dxi-validation-rule type="email">
            </dxi-validation-rule>
        </dxi-item>
    </dx-form>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        employee = {
            // ...
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxFormModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxFormModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm 
            :form-data="employee"
            :col-count="2">
            <DxSimpleItem data-field="name :is-required="true"/>
            <DxSimpleItem data-field="officeNumber">
                <DxNumericRule/>
            </DxSimpleItem>
            <DxSimpleItem data-field="email">
                <DxEmailRule/>
            </DxSimpleItem>
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { 
        DxForm, 
        DxSimpleItem, 
        DxNumericRule, 
        DxEmailRule 
    } from 'devextreme-vue/form';
    
    const employee = {
        // ...
    };

    export default {
        components: {
            DxForm,
            DxSimpleItem,
            DxNumericRule, 
            DxEmailRule
        },
        data: {
            return: {
                employee
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        Form,
        SimpleItem,
        NumericRule,
        EmailRule
    } from 'devextreme-react/form';

    const employee = {
        // ...
    };

    const App = () => {
        return (
            <Form
                formData={employee}
                colCount={2}>
                <SimpleItem dataField="name" isRequired={true} />
                <SimpleItem dataField="officeNumber">
                    <NumericRule />
                </SimpleItem>
                <SimpleItem dataField="email">
                    <EmailRule />
                </SimpleItem>
            </Form>
        );
    }

    export default App;

---


You can also call the [validate()](/Documentation/ApiReference/UI_Components/dxForm/Methods/#validate) Form's method to validate all editors simultaneously. 
