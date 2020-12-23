DevExtreme includes a validation engine that checks edited values before they are saved. This engine supports different validation rule types, such as [Email](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/EmailRule/), [Numeric](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/NumericRule/), [Pattern](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/PatternRule/), and more. 

To apply validation rules to a simple item, specify them in the [validationRules[]](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#validationRules) array. The Form validates an editor when this edtor's value changes. To validate all editors simultaneously, call the [validate()](/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#validate) method. You can also assign **true** to the [showValidationSummary](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#showValidationSummary) property to display all [error messages](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RequiredRule/#message) under the Form.

You can specify an item's [isRequired](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#isRequired) property to apply the [Required Rule](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RequiredRule/) to it. The required items are marked with red asterisk signs.

In the following example, we specify the [isRequired](Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#isRequired) property for the `name` item. We also specify the **NumericRule** and **EmailRules** for two other items. The [showValidationSummary](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#showValidationSummary) property is set to **true**.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                name: "John Heart",
                position: "CEO",
                hireDate: new Date(2012, 4, 13),
                officeNumber: 901,
                phone: "+1(213) 555-9392",
                skype: "jheart_DX_skype",
                email: "jheart@dx-email.com",
                notes: "John has been in the Audio/Video industry since 1990."
            },
            colCount: 2,
            items: [{
                dataField: "name",
                isRequired: "true"
            }, "position", "hireDate", {
                dataField: "officeNumber",
                validationRules: [{
                    type: "numeric",
                    message: "This field should contain a number"
                }] 
            }, "notes", "phone", "skype", {
                dataField: "name",
                validationRules: [{
                    type: "email",
                    message: "This is not a valid Email"
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
        <dxi-item dataField="position"></dxi-item>
        <dxi-item dataField="hireDate"></dxi-item>
        <dxi-item dataField="officeNumber">
            <dxi-validation-rule
                type="numeric"
                message="This field should contain a number">
            </dxi-validation-rule>
        </dxi-item>
        <dxi-item dataField="notes"></dxi-item>
        <dxi-item dataField="phone"></dxi-item>
        <dxi-item dataField="skype"></dxi-item>
        <dxi-item dataField="email">
            <dxi-validation-rule
                type="email"
                message="This is not a valid Email">
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
            name: "John Heart",
            position: "CEO",
            hireDate: new Date(2012, 4, 13),
            officeNumber: 901,
            phone: "+1(213) 555-9392",
            skype: "jheart_DX_skype",
            email: "jheart@dx-email.com",
            notes: "John has been in the Audio/Video industry since 1990."
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
            <DxSimpleItem data-field="position"/>
            <DxSimpleItem data-field="hireDate"/>
            <DxSimpleItem data-field="officeNumber">
                <DxNumericRule
                    message="This field should contain a number"
                />
            </DxSimpleItem>
            <DxSimpleItem data-field="notes"/>
            <DxSimpleItem data-field="phone"/>
            <DxSimpleItem data-field="skype"/>
            <DxSimpleItem data-field="email">
                <DxEmailRule
                    message="This is not a valid Email"
                />
            </DxSimpleItem>
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxSimpleItem, DxNumericRule, DxEmailRule } from 'devextreme-vue/form';
    
    let employee = {
        name: "John Heart",
        position: "CEO",
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        phone: "+1(213) 555-9392",
        skype: "jheart_DX_skype",
        email: "jheart@dx-email.com",
        notes: "John has been in the Audio/Video industry since 1990."
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

    let employee = {
        name: "John Heart",
        position: "CEO",
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        phone: "+1(213) 555-9392",
        skype: "jheart_DX_skype",
        email: "jheart@dx-email.com",
        notes: "John has been in the Audio/Video industry since 1990."
    };

    const App = () => {
        return (
            <Form
                formData={employee}
                colCount={2}>
                <SimpleItem dataField="name" isRequired={true} />
                <SimpleItem dataField="position" />
                <SimpleItem dataField="hireDate" />
                <SimpleItem dataField="officeNumber">
                    <NumericRule
                        message="This field should contain a number"
                    />
                </SimpleItem>
                <SimpleItem dataField="notes" />
                <SimpleItem dataField="phone" />
                <SimpleItem dataField="skype" />
                <SimpleItem dataField="email">
                    <EmailRule
                        message="This is not a valid Email"
                    />
                </SimpleItem>
            </Form>
        );
    }

    export default App;

---

