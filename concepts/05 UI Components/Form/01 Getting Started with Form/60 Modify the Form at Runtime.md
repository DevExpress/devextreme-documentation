You can change any form, editor, or item properties at runtime. In the code below, we modify the [readOnly](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#readOnly) property's value:

---
##### jQuery

Use the [option(optionName, optionValue)](/Documentation/ApiReference/UI_Components/dxForm/Methods/#optionoptionName_optionValue) method to update a Form property, and the [itemOption(id, option, value)](/Documentation/ApiReference/UI_Components/dxForm/Methods/#itemOptionid_option_value) to update the value of an item property.

    <!-- tab: index.js -->
    $(function() {
        const form = $("#form").dxForm({
            formData: {
                // ...
            },
            colCount: 2,
            items: ["name", "position", "hireDate", "officeNumber"]
        }).dxForm("instance");

        $("#checkBox").dxCheckBox({
            text: "Enable read-only mode",
            value: false,
            onValueChanged: function (e) {
                form.option("readOnly", e.value);
            }
        });
    });

##### Angular

To update a property value, bind it to a component property as follows:

    <!-- tab: app.component.html -->
    <dx-form
        [formData]="employee"
        [colCount]="2"
        [readOnly]="isFormReadOnly">
        <dxi-item dataField="name"></dxi-item>
        <dxi-item dataField="position"></dxi-item>
        <dxi-item dataField="hireDate"></dxi-item>
        <dxi-item dataField="officeNumber"></dxi-item>
    </dx-form>

    <dx-check-box
        text="Enable read-only mode"
        [(value)]="isFormReadOnly">
    </dx-check-box>

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

        isFormReadOnly = false
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxFormModule, DxCheckBoxModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxFormModule,
            DxCheckBoxModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

To update a property value, bind it to a component property as follows:

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxForm 
                :form-data="employee"
                :col-count="2"
                :read-only="isFormReadOnly">
                <DxSimpleItem data-field="name"/>
                <DxSimpleItem data-field="position"/>
                <DxSimpleItem data-field="hireDate"/>
                <DxSimpleItem data-field="officeNumber"/>
            </DxForm>
            <DxCheckBox
                text="Enable read-only mode"
                v-model:value="isFormDisabled"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxSimpleItem } from 'devextreme-vue/form';
    import { DxCheckBox } from 'devextreme-vue/check-box';
    
    const employee = {
        // ...
    };

    let isFormDisabled = false;

    export default {
        components: {
            DxForm,
            DxSimpleItem,
            DxCheckBox
        },
        data: {
            return: {
                employee,
                isFormDisabled
            }
        }
    }
    </script>

##### React

To update a property value, bind it to a component property as follows:

    <!-- tab: App.js -->
    import React, {useState, useCallback } from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        Form,
        SimpleItem,
    } from 'devextreme-react/form';

    import { CheckBox } from 'devextreme-react/check-box';

    const employee = {
        // ...
    };

    const App = () => {
        const [isFormDisabled, setIsFormDisabled] = useState(false);

        const onCheckBoxValueChanged = useCallback((e) => {
            setIsFormDisabled(e.value);
        }, []);

        return (
            <div>
                <Form
                    formData={employee}
                    colCount={2}
                    readOnly={isFormDisabled}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="position" />
                    <SimpleItem dataField="hireDate" />
                    <SimpleItem dataField="officeNumber" />
                </Form>

                <CheckBox
                    text="Enable read-only mode"
                    value={isFormDisabled}
                    onValueChanged={onCheckBoxValueChanged} 
                />
            </div>
        );
    }

    export default App;


---
