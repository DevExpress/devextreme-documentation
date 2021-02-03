To submit a form, add a [Button Item](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/ButtonItem/) and set its [useSubmitBehavior](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#useSubmitBehavior) property to **true**. The Form can be submitted to a server only if input validation is successful. 

The code below does show how to add a Submit button, but disables its default behavior. (To keep this tutorial simple, we didn't implement the backend, so there's no way to post data to a server.)  The example simply shows a fake confirmation message after a timeout:

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
                        type: "numeric"
                    }] 
                }, {
                    dataField: "email",
                    validationRules: [{
                        type: "email"
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

        $("#form-container").on("submit", function(e) {
            setTimeout(function () { 
                alert("Submitted");          
            }, 1000);
            
            e.preventDefault();
        });
    });

    <!-- tab: index.html -->
    <form action="/employee-page" id="form-container">
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
                    <dxi-validation-rule type="numeric">
                    </dxi-validation-rule>
                </dxi-item>
                <dxi-item dataField="email">
                    <dxi-validation-rule type="email">
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
                        <DxNumericRule/>
                    </DxSimpleItem>
                    <DxSimpleItem data-field="email">
                        <DxEmailRule/>
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
                            <NumericRule />
                        </SimpleItem>
                        <SimpleItem dataField="email">
                            <EmailRule />
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
* [API Reference](/Documentation/ApiReference/UI_Components/dxForm/)
