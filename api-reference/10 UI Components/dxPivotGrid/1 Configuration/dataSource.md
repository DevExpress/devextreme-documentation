---
id: dxPivotGrid.Options.dataSource
type: Array<any> | PivotGridDataSource | PivotGridDataSource_Options
default: null
---
---
##### shortDescription
Binds the UI component to data.

---

The PivotGrid is bound to data via the [PivotGridDataSource](/api-reference/30%20Data%20Layer/PivotGridDataSource '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/'), a component that allows you to sort, filter, group, and perform other data shaping operations. The **PivotGridDataSource**'s underlying data access logic is isolated in the store. You use different store types for different data sources.
 
To bind the PivotGrid to data, assign a **PivotGridDataSource** to the UI component's **dataSource** property. In the **PivotGridDataSource**, specify the [store](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/store '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/') property depending on your data source as shown in the following list. In each case, also specify the [fields[]](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array to configure pivot grid fields.

- **Data Array**        
Assign the array to the **store** property. [View Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/SimpleArray)

- **OLAP Data**         
Implement an [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/'). [View Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/OLAPDataSource)

- **Web API, PHP, MongoDB**     
Use one of the following extensions to enable the server to process data according to the protocol DevExtreme UI components use:

    - <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md" target="_blank">DevExtreme.AspNet.Data</a>
    - <a href="https://github.com/DevExpress/DevExtreme-PHP-Data/blob/master/README.md" target="_blank">DevExtreme-PHP-Data</a>
    - <a href="https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md" target="_blank">devextreme-query-mongodb</a>

    Then, use the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference" target="_blank">createStore</a> method to configure access to the server on the client as shown below. This method is part of **DevExtreme.AspNet.Data**.

    ---
    ##### jQuery

        <!-- tab: JavaScript -->
        $(function() {
            let serviceUrl = "https://url/to/my/service";
            $("#pivotGridContainer").dxPivotGrid({
                // ...
                dataSource: new DevExpress.data.PivotGridDataSource({
                    store: DevExpress.data.AspNet.createStore({
                        key: "ID",
                        loadUrl: serviceUrl + "/GetAction"
                    })
                })
            })
        });

    ##### Angular

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';
        import CustomStore from 'devextreme/data/custom_store';
        import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
        import { createStore } from 'devextreme-aspnet-data-nojquery';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            store: CustomStore;
            constructor() {
                let serviceUrl = "https://url/to/my/service";
                this.pivotGridDataSource = new PivotGridDataSource({
                    store: createStore({
                        key: "ID",
                        loadUrl: serviceUrl + "/GetAction"
                    })
                })
            }
        }

        <!-- tab: app.component.html -->
        <dx-pivot-grid ...
            [dataSource]="pivotGridDataSource">
        </dx-pivot-grid>

        <!-- tab: app.module.ts -->
        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';
        import { AppComponent } from './app.component';

        import { DxPivotGridModule } from 'devextreme-angular';

        @NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                DxPivotGridModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
        export class AppModule { }

    ##### Vue

        <!-- tab: App.vue -->
        <template> 
            <DxPivotGrid ...
                :data-source="pivotGridDataSource" />
        </template>

        <script>
        import 'devextreme/dist/css/dx.light.css';

        import CustomStore from 'devextreme/data/custom_store';
        import { createStore } from 'devextreme-aspnet-data-nojquery';
        import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
        import { DxPivotGrid } from 'devextreme-vue/pivot-grid';

        export default {
            components: {
                DxPivotGrid
            },
            data() {
                const serviceUrl = "https://url/to/my/service";
                const pivotGridDataSource = new PivotGridDataSource({
                    store: createStore({
                        key: "ID",
                        loadUrl: serviceUrl + "/GetAction"
                    })
                });
                return {
                    pivotGridDataSource
                }
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';
        import 'devextreme/dist/css/dx.light.css';

        import CustomStore from 'devextreme/data/custom_store';
        import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
        import { createStore } from 'devextreme-aspnet-data-nojquery';
        import PivotGrid from 'devextreme-react/pivot-grid';

        const serviceUrl = "https://url/to/my/service";
        const pivotGridDataSource = new PivotGridDataSource({
            store: createStore({
                key: "ID",
                loadUrl: serviceUrl + "/GetAction"
            })
        });

        class App extends React.Component {
            render() {
                return (
                    <PivotGrid ...
                        dataSource={pivotGridDataSource} />
                );
            }
        }
        export default App;

    ---

    #include common-demobutton with {
        url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/WebAPIService/"
    }

- **Any other data source**     
Implement a [CustomStore](/concepts/05%20UI%20Components/PivotGrid/035%20Use%20CustomStore '/Documentation/Guide/UI_Components/PivotGrid/Use_CustomStore/').

You can call the [getDataSource()](/api-reference/10%20UI%20Components/dxPivotGrid/3%20Methods/getDataSource().md '{basewidgetpath}/Methods/#getDataSource') method to access the **PivotGridDataSource** instance associated with the PivotGrid.

[note]

Review the following notes about data binding:

- If the PivotGrid UI component gets data from a server, enable [remoteOperations](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/remoteOperations.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#remoteOperations') to notify the UI component that the server processes data.

- Data field names cannot be equal to `this` and should not contain the following characters: `.`, `:`, `[`, and `]`.

- The stores and **PivotGridDataSource** have methods to process and update data. However, the methods do not allow you to perform particular tasks (for example, replace the entire dataset, reconfigure data access at runtime). For such tasks, create a new **PivotGridDataSource** and assign it to the **dataSource** property as shown in the articles about changing properties in [jQuery](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/05%20Get%20and%20Set%20Properties/00%20Get%20and%20Set%20Properties.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Get_and_Set_Properties'), [Angular](/concepts/40%20Angular%20Components/20%20Component%20Configuration%20Syntax/33%20Two-Way%20Property%20Binding.md '/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/#Two-Way_Property_Binding'), [React](/concepts/50%20React%20Components/20%20State%20Management/3%20Controlled%20Mode.md '/Documentation/Guide/React_Components/State_Management/#Controlled_Mode'), and [Vue](/concepts/55%20Vue%20Components/20%20Component%20Configuration%20Syntax/33%20Two-Way%20Property%20Binding.md '/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/#Two-Way_Property_Binding').

[/note]
