---
id: dxFormSimpleItem.dataField
type: String | undefined
default: undefined
---
---
##### shortDescription
Specifies the path to the [formData](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#formData') object field bound to the current form item.

---
For instance, use standard JavaScript syntax to specify the path to the field if your data includes nested items:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#formContainer").dxForm({
            // ...
            formData: employee,
            items: [{
                // ...
                dataField: "address[0].city",
            },
            // ...
            ]
        });
    });

    <!-- tab: data.js -->
    const employee = {
        id: '0',
        firstName: 'John',
        lastName: 'Heart',
        address: [
            {
                city: 'New York',
                state: 'NY'
            },
        ]
    };

##### Angular

    <!-- tab: app.component.html -->
    <dx-form [formData]="employee" ... >
        <dxi-item dataField="address[0].city" ... ></dxi-item>
    </dx-form>

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class Employee {
        id: number;
        firstName: string;
        lastName: string;
        address: Object[];
    }

    const employee: Employee = {
        id: '0',
        firstName: 'John',
        lastName: 'Heart',
        address: [
            {
                city: 'New York',
                state: 'NY'
            },
        ]
    };

    @Injectable()
    export class Service {
        getEmployee() : Employee {
            return employee;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm :form-data="employee" ...>
            <DxSimpleItem data-field="address[0].city" ... />
        </DxForm>
    </template>
    <script setup>
    import DxForm, { DxSimpleItem } from 'devextreme-vue/form';
    import service from './data.js';

    const employee = service.getEmployee();
    </script>

    <!-- tab: data.js -->
    const employee = {
        id: '0',
        firstName: 'John',
        lastName: 'Heart',
        address: [
            {
                city: 'New York',
                state: 'NY'
            },
        ]
    };

    export default {
        getEmployee() {
            return employee;
        },
    };    

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Form, { SimpleItem } from 'devextreme-react/form';

    const App = () => {
        return (
            <Form formData={employee} ...>
                <SimpleItem dataField="address[0].city" ... />
            </Form>
        );
    };

    export default App;

    <!-- tab: data.js -->
    const employee = {
        id: '0',
        firstName: 'John',
        lastName: 'Heart',
        address: [
            {
                city: 'New York',
                state: 'NY'
            },
        ]
    };

    export default {
        getEmployee() {
            return employee;
        },
    };  

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/CustomizeItem/"
}