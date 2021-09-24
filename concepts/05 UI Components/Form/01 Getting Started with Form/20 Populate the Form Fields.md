To create a data entry UI, assign an object to the [formData](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#formData') property. The Form creates a [simple item](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/') (a label-editor pair) for each field in the **formData** object.

The Form chooses default editors based on value types: [TextBox](/api-reference/10%20UI%20Components/dxTextBox '/Documentation/ApiReference/UI_Components/dxTextBox/') for string values, [NumberBox](/api-reference/10%20UI%20Components/dxNumberBox '/Documentation/ApiReference/UI_Components/dxNumberBox/') for numbers, [DateBox](/api-reference/10%20UI%20Components/dxDateBox '/Documentation/ApiReference/UI_Components/dxDateBox/') for dates. You can use the [editorType](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorType') property to specify an editor explicitly. In the following example, the Form uses the default editors:

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
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm 
            :form-data="employee">
        </DxForm>
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
            <Form
                formData={employee}>
            </Form>
        );
    }

    export default App;

---

When you implement this code, the Form is created with the following simple items: TextBox for `name`, NumberBox for `officeNumber`, and DateBox for the `hireDate` data field.
