You can configure individual labels in the [label](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/label '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/label/') object. This object's section lists all available properties.

The following properties apply to all labels in the Form:

- [alignItemLabels](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/alignItemLabels.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#alignItemLabels')
- [alignItemLabelsInAllGroups](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/alignItemLabelsInAllGroups.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#alignItemLabelsInAllGroups')
- [labelLocation](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/labelLocation.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#labelLocation')
- [showColonAfterLabel](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/showColonAfterLabel.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#showColonAfterLabel')

The following code shows how to configure the **labelLocation** property to place labels on top of editors. The example sets the **label**.[alignment](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/label/alignment.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/label/#alignment') property to align the `Notes` item label's text to the center:

![DevExtreme Form: Item Labels](/images/UiWidgets/form-getting-started-configure-labels.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#form").dxForm({
            formData: {
                // ...
            },
            labelLocation: "top",
            colCount: 2,
            items: ["name", "position", "hireDate", "officeNumber", {
                dataField: "notes",
                colSpan: 2,
                label: {
                    alignment: "center"
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-form
        [formData]="employee"
        [colCount]="2"
        labelLocation="top">
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
            // ...
        }
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm 
            :form-data="employee"
            :col-count="2"
            label-location="top">
            <DxSimpleItem data-field="name"/>
            <DxSimpleItem data-field="position"/>
            <DxSimpleItem data-field="hireDate"/>
            <DxSimpleItem data-field="officeNumber"/>
            <DxSimpleItem 
                data-field="notes"
                :col-span="2">
                <DxLabel alignment="center"/>
            </DxSimpleItem>
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxSimpleItem, DxLabel } from 'devextreme-vue/form';
    
    const employee = {
        // ...
    };

    export default {
        components: {
            DxForm,
            DxSimpleItem,
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
        SimpleItem,
        Label
    } from 'devextreme-react/form';

    const employee = {
        // ...
    };

    const App = () => {
        return (
            <Form
                formData={employee}
                colCount={2}
                labelLocation="top">
                <SimpleItem dataField="name" />
                <SimpleItem dataField="position" />
                <SimpleItem dataField="hireDate" />
                <SimpleItem dataField="officeNumber" />
                <SimpleItem 
                    dataField="notes"
                    colSpan={2}>
                    <Label alignment="center" />
                </SimpleItem>
            </Form>
        );
    }

    export default App;


---
