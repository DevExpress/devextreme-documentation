To submit the Form, wrap it in the HTML <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" target="_blank">form</a> element. Then add the [button item](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/ButtonItem/) and set its **buttonOptions**.[useSubmitBehavior](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#useSubmitBehavior) property to **true**. If you specify any validation rules, you can submit the Form data to the server only when all validation checks pass successfully.  

Usually, Form editors should be submitted to the server after being successfully validated on the client. The following code shows how to do this using a button form item. Note that the Form widget is wrapped in the <form> tag in the markup.

In this tutorial, we use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout" target="_blank">setTimeout</a> function to emulate the form submission. We set the [preventDefault](/Documentation/ApiReference/Common/Object_Structures/dxEvent/Methods/#preventDefault) property to **true** to override the HTML form submit event:

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
                itemType: "group",
                caption: "Personal Information",
                colCount: 2,
                items: [{
                    dataField: "name",
                    isRequired: "true"
                }, {
                    dataField: "officeNumber",
                    validationRules: [{
                        type: "numeric",
                        message: "This field should contain a number"
                    }] 
                }, {
                    dataField: "email",
                    validationRules: [{
                        type: "email",
                        message: "This is not a valid Email"
                    }] 
                }]
            }, {
                itemType: "button",
                buttonOptions: {
                    text: "Submit the Form",
                    useSubmitBehavior: true
                }
            }]
        });

        $("#formContainer").on("submit", function(e) {
            setTimeout(function () { 
                alert("Submitted");          
            }, 1000);
            
            e.preventDefault();
        });
    });

    <!-- tab: index.html -->
    <form action="/employee-page" id="formContainer">
        <div id="form"></div>
    </form>

##### Angular

    <!-- tab: app.component.html -->
    <form action="/employee-page" (submit)="handleSubmit($event)">
        <dx-form
            [formData]="employee"
            [colCount]="2">
            <dxi-item 
                itemType="group" 
                caption="Personal Information"
                [colCount]="2">
                <dxi-item dataField="name" [isRequired]="true">
                </dxi-item>
                <dxi-item dataField="officeNumber">
                    <dxi-validation-rule
                        type="numeric"
                        message="This field should contain a number">
                    </dxi-validation-rule>
                </dxi-item>
                <dxi-item dataField="email">
                    <dxi-validation-rule
                        type="email"
                        message="This is not a valid Email">
                    </dxi-validation-rule>
                </dxi-item>
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
            // ...
        }

        submitButtonOptions = {
            text: "Submit the Form",
            useSubmitBehavior: true
        }

        handleSubmit = function(e) {
            setTimeout(() => { 
                alert("Submitted");          
            }, 1000);
            
            e.preventDefault();
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
        <form action="/employee-page" @submit="handleSubmit">
            <DxForm 
                :form-data="employee"
                :col-count="2">
                <DxGroupItem
                    caption="Personal Information"
                    :col-count="2">
                    <DxSimpleItem data-field="name" :is-required="true"/>
                    <DxSimpleItem data-field="officeNumber">
                        <DxNumericRule
                            message="This field should contain a number"
                        />
                    </DxSimpleItem>
                    <DxSimpleItem data-field="email">
                        <DxEmailRule
                            message="This is not a valid Email"
                        />
                    </DxSimpleItem>
                </DxGroupItem>
                <DxButtonItem :button-options="submitButtonOptions"/>
            </DxForm>
        </form>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { 
        DxForm, 
        DxSimpleItem, 
        DxGroupItem,
        DxButtonItem,
        DxNumericRule, 
        DxEmailRule
    } from 'devextreme-vue/form';
    
    const employee = {
        // ...
    };

    const submitButtonOptions = {
        text: "Submit the Form",
        useSubmitBehavior: true
    };

    export default {
        components: {
            DxForm,
            DxSimpleItem,
            DxGroupItem,
            DxButtonItem,
            DxNumericRule, 
            DxEmailRule
        },
        data: {
            return: {
                employee,
                submitButtonOptions
            }
        },
        methods: {
            handleSubmit(e) {
                setTimeout(() => { 
                    alert("Submitted");          
                }, 1000);
                
                e.preventDefault();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback } from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        Form,
        SimpleItem,
        GroupItem,
        ButtonItem,
        NumericRule,
        EmailRule
    } from 'devextreme-react/form';

    const employee = {
        // ...
    };

    const submitButtonOptions = {
        text: "Submit the Form",
        useSubmitBehavior: true
    };

    const App = () => {
        const handleSubmit = React.useCallback((e) => {
            setTimeout(() => { 
                alert("Submitted");          
            }, 1000);

            e.preventDefault();
        }, []);

        return (
            <form action="/employee-page" onSubmit={handleSubmit}>
                <Form
                    formData={employee}
                    colCount={2}>
                    <GroupItem 
                        caption="Personal Information"
                        colCount={2}>
                        <SimpleItem dataField="name" isRequired={true} />
                        <SimpleItem dataField="officeNumber">
                            <NumericRule
                                message="This field should contain a number"
                            />
                        </SimpleItem>
                        <SimpleItem dataField="email">
                            <EmailRule
                                message="This is not a valid Email"
                            />
                        </SimpleItem>
                    </GroupItem>
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
