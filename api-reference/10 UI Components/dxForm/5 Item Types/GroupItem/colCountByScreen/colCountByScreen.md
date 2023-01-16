---
id: dxFormGroupItem.colCountByScreen
type: any
inherits: ColCountResponsible
default: undefined
---
---
##### shortDescription
Specifies the relation between the [screen size qualifier](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/screenByWidth.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#screenByWidth') and the number of columns in the grouped layout.

---
---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            // ...
            items: [{
                itemType: "group",
                items: [ ... ],
                colCountByScreen: {
                    xs: 2, 
                    sm: 3  
                }
            },
            // ...
            ]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-form ... >
        <dxi-item itemType="group">
            <dxo-col-count-by-screen 
                [xs]="2"  
                [sm]="3"> 
            </dxo-col-count-by-screen>
            <dxi-item ... ></dxi-item>
        </dxi-item>
    </dx-form>

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
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm ...>
            <DxGroupItem ...>
                <DxColCountByScreen :xs="2" :sm="3"/>
                <DxSimpleItem .../>
            </DxGroupItem>
        </DxForm>
    </template>
    <script>
    import DxForm, { DxSimpleItem, DxGroupItem, DxColCountByScreen } from 'devextreme-vue/form';

    export default {
        components: {
            DxForm,
            DxSimpleItem,
            DxGroupItem,
            DxColCountByScreen
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Form, { SimpleItem, GroupItem, ColCountByScreen } from 'devextreme-react/form';

    const App = () => {
        return (
            <Form ...>
                <GroupItem ...>
                    <ColCountByScreen xs={2} sm={3} />
                    <SimpleItem />
                </GroupItem>
            </Form>
        );
    };

    export default App;

---
