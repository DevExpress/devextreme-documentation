The **Form** generates a [simple item](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/) for each field in the [formData]() object. A simple item is a label-editor pair. 

To populate form fields, assign an object to the [formData](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData) property. Each field in this object will be visualized as a label-editor pair. Such pairs are called "simple items". The **Form** automatically defines which editors it will generate for fields in the **formData** object. The editor's type depends on the data type of the field's value. The **Form** in the following example will create the [TextBox](/Documentation/ApiReference/UI_Widgets/dxTextBox/), [NumberBox](/Documentation/ApiReference/UI_Widgets/dxNumberBox/), and [DateBox](/Documentation/ApiReference/UI_Widgets/dxDateBox/) editors:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#form").dxForm({
            formData: {
                name: "John Heart",
                officeNumber: 901,
                hireDate: new Date(2012, 4, 13)
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-form
        [formData]="employee">
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
                :form-data="employee">
            </DxForm>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm } from 'devextreme-vue/form';

    const employee = {
        name: 'John Heart',
        officeNumber: 901,
        hireDate: new Date(2012, 4, 13)
    };

    export default {
        components: {
            DxForm
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
        Form
    } from 'devextreme-react/form';

    const employee = {
        name: 'John Heart',
        officeNumber: 901,
        hireDate: new Date(2012, 4, 13)
    };

    const App = () => {
        return (
            <div className="App">
                <Form
                    formData={employee}>
                </Form>
            </div>
        );
    }

    export default App;

---
