You can divide form items into several columns. To keep the fixed number of columns, specify the number in the [colCount](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#colCount) property. An item can occupy more than one column. For this, specify the [colSpan](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#colSpan) property. In the example below, the `Notes` item spans two columns:

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
                notes: "John has been in the Audio/Video industry since 1990."
            },
            colCount: 2,
            items: ["name", "position", "hireDate", "officeNumber", {
                dataField: "notes",
                colSpan: 2
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-form
        [formData]="employee"
        [colCount]="2">
        <dxi-item dataField="name"></dxi-item>
        <dxi-item dataField="position"></dxi-item>
        <dxi-item dataField="hireDate"></dxi-item>
        <dxi-item dataField="officeNumber"></dxi-item>
        <dxi-item 
            dataField="notes" 
            [colSpan]="2">
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
            name: 'John Heart',
            position: 'CEO',
            hireDate: new Date(2012, 4, 13),
            officeNumber: 901,
            notes: 'John has been in the Audio/Video industry since 1990.'
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
            <DxItem data-field="name"/>
            <DxItem data-field="position"/>
            <DxItem data-field="hireDate"/>
            <DxItem data-field="officeNumber"/>
            <DxItem 
                data-field="notes"
                :col-span="2"
            />
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxItem } from 'devextreme-vue/form';
    
    const employee = {
        name: 'John Heart',
        position: 'CEO',
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        notes: 'John has been in the Audio/Video industry since 1990.'
    };

    export default {
        components: {
            DxForm,
            DxItem
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

    const employee = {
        name: 'John Heart',
        position: 'CEO',
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        notes: 'John has been in the Audio/Video industry since 1990.'
    };

    const App = () => {
        return (
            <Form
                formData={employee}
                colCount={2}>
                <Item dataField="name" />
                <Item dataField="position" />
                <Item dataField="hireDate" />
                <Item dataField="officeNumber" />
                <Item 
                    dataField="notes"
                    colSpan={2}
                />
            </Form>
        );
    }

    export default App;

---

