Use the [items[]](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items) array to configure all form items. This array can contain strings (**formData** field names) and objects (item configurations). Use a string if the default item configuration suits you. Otherwise, declare an object that configures the simple item. Specify the [dataField](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#dataField) and other properties in it. In the example below, we configure the `HireDate` simple item:

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
            <DxSimpleItem data-field="name"/>
            <DxSimpleItem data-field="officeNumber"/>
            <DxSimpleItem 
                data-field="hireDate"
                :editor-options="hireDateOptions"
            />
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxSimpleItem } from 'devextreme-vue/form';
    
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
            DxSimpleItem
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
        SimpleItem
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
            <Form formData={employee}>
                <SimpleItem dataField="name" />
                <SimpleItem dataField="officeNumber" />
                <SimpleItem 
                    dataField="hireDate"
                    editorOptions={hireDateOptions}
                />
            </Form>
        );
    }

    export default App;

---
