Simple item [labels](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/label/) display the formatted field names of the [formData](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData) object. You can change the displayed text in the **label**.[text](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/label/#text) property. 

The Form displays labels on the left side of editors. The text of all editors is aligned to the left. To change location of all labels, use the [labelLocation](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#labelLocation) property. Use **label**.[location](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/label/#location) property to relocate individual labels. You can change the horizontal alignment of individual labels in the [alignment](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/label/#alignment) property.

Use the [showColonAfterLabel](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#showColonAfterLabel) property to display colons at the end of labels. Use the **label**.[showColon](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/label/#showColon) property for the same purpose for an individual label. Individual settings override common settings.

The following code shows how to locate all labels on top of editors. We align the `Notes` item label's text to the center. We also hide the colons after all labels:

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
        Item,
        Label
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
                colCount={2}
                labelLocation="top"
                showColonAfterLabel={false}>
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
