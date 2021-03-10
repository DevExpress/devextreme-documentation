If you need to add an empty space between neighboring items, use an empty item. To create an empty item, assign "empty" to the [itemType](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/EmptyItem/#itemType) property. To define how many columns the empty item should span, specify the [colSpan](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/EmptyItem/#colSpan) option. For a list of available properties, refer to the [Empty Item](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/EmptyItem/) section.

In the following example, the empty item [spans](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/EmptyItem/#colSpan) two columns. The resulting layout looks as follows:

![DevExtreme Form: Empty Item](/images/UiWidgets/form-getting-started-empty-item.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#form").dxForm({
            formData: {
                // ...
            },
            colCount: 2,
            items: ["name", "position", "hireDate", "officeNumber", {
                itemType: "empty",
                colSpan: 2
            }, "phone", "skype", "email"]
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
            itemType="empty" 
            [colSpan]="2">
        </dxi-item>
        <dxi-item dataField="skype"></dxi-item>
        <dxi-item dataField="phone"></dxi-item>
        <dxi-item dataField="email"></dxi-item>
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
            <DxSimpleItem data-field="name"/>
            <DxSimpleItem data-field="position"/>
            <DxSimpleItem data-field="hireDate"/>
            <DxSimpleItem data-field="officeNumber"/>
            <DxEmptyItem 
                :col-span="2"
            />
            <DxSimpleItem dataField="skype"/>
            <DxSimpleItem dataField="phone"/>
            <DxSimpleItem dataField="email"/>
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxSimpleItem, DxEmptyItem } from 'devextreme-vue/form';
    
    const employee = {
        // ...
    };

    export default {
        components: {
            DxForm,
            DxSimpleItem,
            DxEmptyItem
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
    import 'devextreme/dist/css/dx.light.css';

    import {
        Form,
        SimpleItem,
        EmptyItem
    } from 'devextreme-react/form';

    const employee = {
        // ...
    };

    const App = () => {
        return (
            <Form
                formData={employee}
                colCount={2}>
                <SimpleItem dataField="name" />
                <SimpleItem dataField="position" />
                <SimpleItem dataField="hireDate" />
                <SimpleItem dataField="officeNumber" />
                <EmptyItem 
                    colSpan={2}
                />
                <SimpleItem dataField="phone" />
                <SimpleItem dataField="skype" />
                <SimpleItem dataField="email" />
            </Form>
        );
    }

    export default App;

---
