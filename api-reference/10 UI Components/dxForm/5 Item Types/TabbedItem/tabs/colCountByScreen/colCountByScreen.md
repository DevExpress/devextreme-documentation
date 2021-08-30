---
id: dxFormTabbedItem.tabs.colCountByScreen
type: Object
inherits: ColCountResponsible
default: undefined
---
---
##### shortDescription
Specifies the relation between the [screen size qualifier](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/screenByWidth.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#screenByWidth') and the number of columns in the tabbed layout.

---
---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            // ...
            items: [{
                itemType: "tabbed",
                tabs: [{
                    items: [ ... ],
                    colCountByScreen: {
                        xs: 2, 
                        sm: 3  
                    }
                }]
            },
            // ...
            ]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-form ... >
        <dxi-item itemType="tabbed">
            <dxi-tab title="Phone">
                <dxo-col-count-by-screen 
                    [xs]="2"  
                    [sm]="3"> 
                </dxo-col-count-by-screen>
                <dxi-item ... ></dxi-item>
            </dxi-tab>
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
        <DxForm ... >
            <DxTabbedItem ... >
                <DxTab title="Phone">
                    <DxColCountByScreen :xs="2" :sm="3"/>
                    <DxSimpleItem ... />
                </DxTab>
            </DxTabbedItem>
        </DxForm>
    </template>
    <script>
    import DxForm, {
        DxTabbedItem,
        DxTab,
        DxColCountByScreen,
        DxSimpleItem
    } from 'devextreme-vue/form';

    export default {
        components: {
            DxForm,
            DxTabbedItem,
            DxTab,
            DxColCountByScreen,
            DxSimpleItem
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import Form, {
        TabbedItem,
        Tab,
        SimpleItem,
        ColCountByScreen
    } from 'devextreme-react/form';

    const App = () => {
        return (
            <Form ... >
                <TabbedItem ... >
                    <Tab title="Phone">
                        <ColCountByScreen xs={2} sm={3} />
                        <SimpleItem ... />
                    </Tab>
                </TabbedItem>
            </Form>
        );
    };

    export default App;

---