The [items[]](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items) array is used to configure form items. This array can contain strings and objects. Strings are names of the [formData](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData) object's fields. Use strings for the fields that the **Form** will render as simple items with default configuration. You can also configure editors for certain fields manually. For this, specify editor settings in an object in the **items[]** array. Use the [dataField](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#dataField) property to identify the field that provides data. In the example below, we configure the `HireDate` field's editor:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#form").dxForm({
            formData: {
                name: "John Heart",
                officeNumber: 901,
                hireDate: new Date(2012, 4, 13)
            },
            items: ["name", "officeNumber", {
                dataField: "hireDate",
                editorOptions: {
                    disabled: true
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-form
        [formData]="employee">
        <dxi-item dataField="name"></dxi-item>
        <dxi-item dataField="officeNumber"></dxi-item>
        <dxi-item 
            dataField="hireDate" 
            [editorOptions]="hireDateOptions">
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
            officeNumber: 901,
            hireDate: new Date(2012, 4, 13)
        }

        hireDateOptions = {
            disabled: true
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
            :form-data="employee">
            <DxItem data-field="name"/>
            <DxItem data-field="officeNumber"/>
            <DxItem 
                data-field="hireDate"
                :editor-options="hireDateOptions"
            />
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxItem } from 'devextreme-vue/form';
    
    const employee = {
        name: 'John Heart',
        officeNumber: 901,
        hireDate: new Date(2012, 4, 13)
    };

    const hireDateOptions = {
        disabled: true
    };

    export default {
        components: {
            DxForm,
            DxItem
        },
        data: {
            return: {
                employee,
                hireDateOptions
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
        officeNumber: 901,
        hireDate: new Date(2012, 4, 13)
    };

    const hireDateOptions = {
        disabled: true
    };

    const App = () => {
        return (
            <Form
                formData={employee}>
                <Item dataField="name" />
                <Item dataField="officeNumber" />
                <Item 
                    dataField="hireDate"
                    editorOptions={hireDateOptions}
                />
            </Form>
        );
    }

    export default App;

---
