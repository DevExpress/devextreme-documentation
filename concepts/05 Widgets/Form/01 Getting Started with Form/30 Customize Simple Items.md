You can customize editors used as form items. You can specify [editorType]() to define which editor the **Form** will generate for a certain item. To configure this editor, specify its settings in the [editorOptions]() object. 

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#form").dxForm({
            formData: {
                name: "John Heart",
                hireDate: new Date(2012, 4, 13),
                officeNumber: "901"
            },
            items: ["name", "hireDate", "officeNumber"]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-form
        [(formData)]="employee",
        [items]="formItems"
    >
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
            hireDate: new Date(2012, 4, 13),
            officeNumber: "901"
        }

        formItems = ['name', 'hireDate', 'officeNumber']
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
        <div id="app-container">
            <DxForm 
                :form-data="employee"
                :items="formItems">
            </DxForm>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm } from 'devextreme-vue/form';

    export default {
        components: {
            DxForm
        },
        data: {
            return: {
                employee = {
                    name: "John Heart",
                    hireDate: new Date(2012, 4, 13),
                    officeNumber: "901"
                },
                formItems = ['name', 'hireDate', 'officeNumber']
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
        Form
    } from 'devextreme-react/form';

    const employee = {
        name: "John Heart",
        hireDate: new Date(2012, 4, 13),
        officeNumber: "901"
    };

    const formItems = ['name', 'hireDate', 'officeNumber'];

    function App() {
        return (
            <div className="App">
                <Form
                    formData={employee}
                    items={formItems}>
                </Form>
            </div>
        );
    }

    export default App;

---