---
id: dxFormSimpleItem.dataField
type: String
default: undefined
---
---
##### shortDescription
Specifies the path to the [formData](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#formData') object field bound to the current form item.

---
Use standard JavaScript syntax (`item.nestedItem` and `array[itemIndex]`) to specify the field path if your data includes nested items/arrays:

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

[note]

The Form component does not support **dataField** field names that contain characters used to access nested items: `.`, `[`, and `]`. The following code snippet demonstrates an unsupported field name:

---
##### jQuery

    <!-- tab: index.js -->
    // Incorrect:
    const employee = {
        id: '0',
        "address.city": 'New York', // Invalid naming.
    };

    $(function() {
        $("#formContainer").dxForm({
            // ...
            formData: employee,
            items: [{
                // ...
                dataField: "address.city", // Form attempts to access the "city" property inside of "address".
            }]
        });
    });

    // Correct:
    const employee = {
        id: '0',
        addressCity: 'New York', // Supported naming.
    };

    $(function() {
        $("#formContainer").dxForm({
            // ...
            formData: employee,
            items: [{
                // ...
                dataField: "addressCity", // Form accesses "addressCity" correctly.
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    // Incorrect:
    <dx-form [formData]="employee" ... >
        <dxi-item ...
            dataField="address.city" // Form attempts to access the "city" property inside of "address".
        >
        </dxi-item>
    </dx-form>

    // Correct:
    <dx-form [formData]="employee" ... >
        <dxi-item ...
            dataField="addressCity" // Form accesses "addressCity" correctly.
        >
        </dxi-item>
    </dx-form>

    <!-- tab: app.component.ts -->
    // Incorrect:
    const employee: Employee = {
        id: '0',
        "address.city": 'New York', // Invalid naming.
    };

    // Correct:
    const employee: Employee = {
        id: '0',
        addressCity: 'New York', // Supported naming.
    };

##### Vue

    <!-- tab: App.vue -->
    // Incorrect:
    <template>
        <DxForm :form-data="employee" ...>
            <DxSimpleItem ... 
                data-field="address.city" // Form attempts to access the "city" property inside of "address".
            />
        </DxForm>
    </template>
    <script setup>
    // ...
    const employee = {
        id: '0',
        "address.city": 'New York', // Invalid naming.
    };
    </script>

    // Correct:
    <template>
        <DxForm :form-data="employee" ...>
            <DxSimpleItem ...
                data-field="addressCity" // Form accesses "addressCity" correctly.
            />
        </DxForm>
    </template>
    <script setup>
    // ...
    const employee = {
        id: '0',
        addressCity: 'New York', // Supported naming.
    };
    </script>

##### React

    <!-- tab: App.js -->
    // Incorrect:
    const App = () => {
        const employee = {
            id: '0',
            "address.city": 'New York', // Invalid naming.
        };

        return (
            <Form formData={employee} ...>
                <SimpleItem ...
                    dataField="address.city" // Form attempts to access the "city" property inside of "address".
                />
            </Form>
        );
    };

    export default App;

    // Correct: 
    const App = () => {
        const employee = {
            id: '0',
            addressCity: 'New York', // Supported naming.
        };

        return (
            <Form formData={employee} ...>
                <SimpleItem ...
                    dataField="addressCity" // Form accesses "addressCity" correctly.
                />
            </Form>
        );
    };

    export default App;

---

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/CustomizeItem/"
}