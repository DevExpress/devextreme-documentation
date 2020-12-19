You can add an empty space to separate form items. To do this, assign "empty" to the [itemType](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/EmptyItem/#itemType) property. In the following example, the empty item [spans](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/EmptyItem/#colSpan) two columns:

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
                phone: "+1(213) 555-9392",
                skype: "jheart_DX_skype",
                email: "jheart@dx-email.com""
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
            name: "John Heart",
            position: "CEO",
            hireDate: new Date(2012, 4, 13),
            officeNumber: 901,
            phone: "+1(213) 555-9392",
            skype: "jheart_DX_skype",
            email: "jheart@dx-email.com""
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
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxSimpleItem, DxEmptyItem } from 'devextreme-vue/form';
    
    let employee = {
        name: "John Heart",
        position: "CEO",
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        phone: "+1(213) 555-9392",
        skype: "jheart_DX_skype",
        email: "jheart@dx-email.com""
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
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        Form,
        SimpleItem,
        EmptyItem
    } from 'devextreme-react/form';

    let employee = {
        name: "John Heart",
        position: "CEO",
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        phone: "+1(213) 555-9392",
        skype: "jheart_DX_skype",
        email: "jheart@dx-email.com""
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