To submit the Form, wrap it in the HTML <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" target="_blank">form</a> element. Then add the [button](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/ButtonItem/) item and set its **buttonOptions**.[useSubmitBehavior](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#useSubmitBehavior) property to **true**. You can submit the Form data to the server only when all validation checks pass successfully.  


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
            }, {
                itemType: "button",
                buttonOptions: {
                    text: "Submit the Form",
                    useSubmitBehavior: true
                }
            }]
        });
    });

    <!-- tab: index.html -->
    <form action="/employee-page" method="post">
        <div id="formWidget"></div>
    </form>

##### Angular

    <!-- tab: app.component.html -->
    <form action="/employee-page" method="post">
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
            <dxi-item 
                itemType="button"
                [buttonOptions]="submitButtonOptions">
            </dxi-item>
        </dx-form>
    </form>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        employee = {
            name: 'John Heart',
            position: 'CEO',
            hireDate: new Date(2012, 4, 13),
            officeNumber: 901,
            phone: '+1(213) 555-9392',
            skype: 'jheart_DX_skype',
            email: 'jheart@dx-email.com',
            notes: 'John has been in the Audio/Video industry since 1990.'
        }

        submitButtonOptions = {
            text: "Submit the Form",
            useSubmitBehavior: true
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
        <form action="/employee-page" method="post">
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
                <DxButtonItem :button-options="submitButtonOptions"/>
            </DxForm>
        </form>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxSimpleItem, DxNumericRule, DxEmailRule } from 'devextreme-vue/form';
    
    const employee = {
        name: 'John Heart',
        position: 'CEO',
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        phone: '+1(213) 555-9392',
        skype: 'jheart_DX_skype',
        email: 'jheart@dx-email.com',
        notes: 'John has been in the Audio/Video industry since 1990.'
    };

    const submitButtonOptions = {
        text: "Submit the Form",
        useSubmitBehavior: true
    };

    export default {
        components: {
            DxForm,
            DxSimpleItem,
            DxNumericRule, 
            DxEmailRule,
            DxButtonItem
        },
        data: {
            return: {
                employee,
                submitButtonOptions
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
        EmailRule,
        ButtonItem
    } from 'devextreme-react/form';

    const employee = {
        name: 'John Heart',
        position: 'CEO',
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        phone: '+1(213) 555-9392',
        skype: 'jheart_DX_skype',
        email: 'jheart@dx-email.com',
        notes: 'John has been in the Audio/Video industry since 1990.'
    };

    const submitButtonOptions = {
        text: "Submit the Form",
        useSubmitBehavior: true
    };

    const App = () => {
        return (
            <form action="/employee-page" method="post">
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
                    <ButtonItem buttonOptions={submitButtonOptions} />
                </Form>
            </form>
        );
    }

    export default App;

---

For further information on the **Form** UI component, refer to the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Overview/)
* [API Reference](/Documentation/ApiReference/UI_Widgets/dxForm/)
