You can modify any form, editor or item properties at runtime. In **jQuery**, use the [option(optionName, optionValue)](/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#optionoptionName_optionValue) method to update a property value. In **Angular**, **Vue** or **React**, bind the property's value to a component property.

The following code shows how to dynamically make all editors in the **Form** read-only. To achieve this, we modify the [readOnly](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#readOnly) property after the click on [CheckBox](/Documentation/ApiReference/UI_Widgets/dxCheckBox/).

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        let form = $("#formContainer").dxForm({
            formData: {
                name: "John Heart",
                position: "CEO",
                hireDate: new Date(2012, 4, 13),
                officeNumber: 901,
                notes: "John has been in the Audio/Video industry since 1990."
            },
            labelLocation: "top",
            showColonAfterLabel: false,
            colCount: 2,
            items: ["name", "position", "hireDate", "officeNumber", {
                dataField: "notes",
                colSpan: 2,
                label: {
                    alignment: "center"
                }
            }]
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

    <!-- tab: app.component.html -->
    <dx-form
        [formData]="employee"
        [colCount]="2"
        labelLocation="top"
        [showColonAfterLabel]="false">
        <dxi-item dataField="name"></dxi-item>
        <dxi-item dataField="position"></dxi-item>
        <dxi-item dataField="hireDate"></dxi-item>
        <dxi-item dataField="officeNumber"></dxi-item>
        <dxi-item 
            dataField="notes" 
            [colSpan]="2">
            <dxo-label alignment="center">
            </dxo-label>
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
            :col-count="2"
            label-location="top"
            :show-colon-after-label="false">
            <DxItem data-field="name"/>
            <DxItem data-field="position"/>
            <DxItem data-field="hireDate"/>
            <DxItem data-field="officeNumber"/>
            <DxItem 
                data-field="notes"
                :col-span="2">
                <DxLabel alignment="center"/>
            </DxItem>
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxItem, DxLabel } from 'devextreme-vue/form';
    
    let employee = {
        name: "John Heart",
        position: "CEO",
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        notes: "John has been in the Audio/Video industry since 1990."
    };

    export default {
        components: {
            DxForm,
            DxItem,
            DxLabel
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
        Item
    } from 'devextreme-react/form';

    let employee = {
        name: "John Heart",
        position: "CEO",
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        notes: "John has been in the Audio/Video industry since 1990."
    };

    const App = () => {
        return (
            <Form
                formData={employee}
                colCount={2}
                itemLocation="top"
                showColonAfterLable={false}>
                <Item dataField="name" />
                <Item dataField="position" />
                <Item dataField="hireDate" />
                <Item dataField="officeNumber" />
                <Item 
                    dataField="notes"
                    colSpan={2}>
                    <Label alignment="center" />
                </Item>
            </Form>
        );
    }

    export default App;


---

