---
id: dxTreeMap.Options.dataSource
type: Array<any> | Store | DataSource | DataSource_Options | String
notUsedInTheme: 
---
---
##### shortDescription
Binds the UI component to data.

---

The TreeMap works with collections of objects. 

Objects that have a plain structure are visualized by tiles. For example, the following array of objects produces four tiles:

    let data = [
        { name: "Apples", value: 10 },
        { name: "Oranges", value: 13 },
        { name: "Cucumbers", value: 4 },
        { name: "Tomatoes", value: 8 }
    ];

Objects that have a hierarchical structure are visualized by groups of tiles. For example, the following array arranges the tiles from the previous code in two groups: *"Fruits"* and *"Vegetables"*.

    let data = [{
        name: "Fruits",
        items: [
            { name: "Apples", value: 10 },
            { name: "Oranges", value: 13 }
        ]
    }, {
        name: "Vegetables",
        items: [
            { name: "Cucumbers", value: 4 },
            { name: "Tomatoes", value: 8 }
        ]
    }];

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/HierarchicalDataStructure/"
}

For both structures, set the [valueField](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/valueField.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#valueField') and [labelField](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/labelField.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#labelField'); for the hierarchical structure, also set the [childrenField](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/childrenField.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#childrenField').

A plain data array can imply a hierarchical structure. An example of such array is given below. In this case, set the [idField](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/idField.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#idField') and [parentField](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/parentField.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#parentField') in addition to the **valueField** and **labelField**.

    let data = [
        { id: 1, name: "Fruits"},
        { parent: 1, name: "Apples", value: 10 },
        { parent: 1, name: "Oranges", value: 13 },
 
        { id: 2, name: "Vegetables" },
        { parent: 2, name: "Cucumbers", value: 4 },
        { parent: 2, name: "Tomatoes", value: 8 }
    ];

    let treeMapOptions = {
        // ...
        idField: "id",
        parentField: "parent"
    };

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/FlatDataStructure/"
}

Depending on your data source, bind the TreeMap to data as follows.

- **Data Array**        
Assign the array to the **dataSource** property. 

- **Read-Only Data in JSON Format**          
Set the **dataSource** property to the URL of a JSON file or service that returns JSON data.

- **OData**         
Implement an [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/').

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
            $("#{widgetName}Container").dxTreeMap({
                // ...
                dataSource: DevExpress.data.AspNet.createStore({
                    key: "ID",
                    loadUrl: serviceUrl + "/GetAction"
                })
            })
        });

    ##### Angular

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';
        import CustomStore from 'devextreme/data/custom_store';
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
                this.store = createStore({
                    key: "ID",
                    loadUrl: serviceUrl + "/GetAction"
                })
            }
        }

        <!-- tab: app.component.html -->
        <dx-tree-map ...
            [dataSource]="store">
        </dx-tree-map>

        <!-- tab: app.module.ts -->
        #include angular-app-module-ts

    ##### Vue

        <!-- tab: App.vue -->
        <template> 
            <DxTreeMap ...
                :data-source="store" />
        </template>

        <script>
        import CustomStore from 'devextreme/data/custom_store';
        import { createStore } from 'devextreme-aspnet-data-nojquery';
        import { DxTreeMap } from 'devextreme-vue/tree-map';

        export default {
            components: {
                DxTreeMap
            },
            data() {
                const serviceUrl = "https://url/to/my/service";
                const store = createStore({
                    key: "ID",
                    loadUrl: serviceUrl + "/GetAction"
                });
                return {
                    store
                }
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';

        import CustomStore from 'devextreme/data/custom_store';
        import { createStore } from 'devextreme-aspnet-data-nojquery';
        import TreeMap from 'devextreme-react/tree-map';

        const serviceUrl = "https://url/to/my/service";
        const store = createStore({
            key: "ID",
            loadUrl: serviceUrl + "/GetAction"
        });

        class App extends React.Component {
            render() {
                return (
                    <TreeMap ...
                        dataSource={store} />
                );
            }
        }
        export default App;

    ---

- **Any other data source**     
Implement a [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/').

Regardless of the data source on the input, the TreeMap always wraps it in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') object. This object allows you to sort, filter, group, and perform other data shaping operations. To get its instance, call the [getDataSource()](/api-reference/10%20UI%20Components/DataHelperMixin/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Components/dxTreeMap/Methods/#getDataSource') method.

[note]

Review the following notes about data binding:

- Data field names cannot be equal to `this` and should not contain the following characters: `.`, `:`, `[`, and `]`.

- The stores and **DataSource** have methods to process and update data. However, the methods do not allow you to perform particular tasks (for example, replace the entire dataset, reconfigure data access at runtime). For such tasks, create a new array, store, or **DataSource** and assign it to the **dataSource** property as shown in the articles about changing properties in [jQuery](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/05%20Get%20and%20Set%20Properties/00%20Get%20and%20Set%20Properties.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Get_and_Set_Properties'), [Angular](/concepts/40%20Angular%20Components/20%20Component%20Configuration%20Syntax/33%20Two-Way%20Property%20Binding.md '/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/#Two-Way_Property_Binding'), [React](/concepts/50%20React%20Components/20%20State%20Management/3%20Controlled%20Mode.md '/Documentation/Guide/React_Components/State_Management/#Controlled_Mode'), and [Vue](/concepts/55%20Vue%20Components/20%20Component%20Configuration%20Syntax/33%20Two-Way%20Property%20Binding.md '/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/#Two-Way_Property_Binding').

[/note]
