---
id: dxScheduler.Options.resources.dataSource
type: String | Array<Object> | DataSource | DataSource_Options
default: null
---
---
##### shortDescription
Specifies available resource instances.

---
If you use DevExtreme ASP.NET MVC Controls, refer to the <a href="https://docs.devexpress.com/AspNetCore/400575/devextreme-based-controls/concepts/bind-controls-to-data" target="_blank">Bind Controls to Data</a> article.

Each resource instance is an object with the  `id`, `color`, and `text` fields. If your resource instances have a different structure, specify the [valueExpr](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#valueExpr'), [colorExpr](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources/colorExpr.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#colorExpr') and [displayExpr](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#displayExpr') options.

Depending on your data source, specify the **dataSource** option as follows. In each case, also specify the [fieldExpr](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources/fieldExpr.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#fieldExpr') option to [bind appointments to resource instances](/concepts/05%20Widgets/Scheduler/040%20Resources/020%20Assign%20Appointments%20to%20Resources '/Documentation/Guide/Widgets/Scheduler/Resources/Assign_Appointments_to_Resources/'). 

- **Data Array**        
Assign the array to the **dataSource** option. 

- **Read-Only Data in JSON Format**          
Set the **dataSource** option to the URL of a JSON file or service that returns JSON data.

- **OData**         
Implement an [ODataStore](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/40%20OData.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/').

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
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                resources: [{
                    // ...
                    dataSource: DevExpress.data.AspNet.createStore({
                        key: "ID",
                        loadUrl: serviceUrl + "/GetAction",
                        insertUrl: serviceUrl + "/InsertAction",
                        updateUrl: serviceUrl + "/UpdateAction",
                        deleteUrl: serviceUrl + "/DeleteAction"
                    })
                }]
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
                this.resources = [{
                    // ...
                    dataSource: createStore({
                        key: "ID",
                        loadUrl: serviceUrl + "/GetAction",
                        insertUrl: serviceUrl + "/InsertAction",
                        updateUrl: serviceUrl + "/UpdateAction",
                        deleteUrl: serviceUrl + "/DeleteAction"
                    })
                }];
            }
        }

        <!-- tab: app.component.html -->
        <dx-{widget-name} ...
            [resources]="resources">
        </dx-{widget-name}>

        <!-- tab: app.module.ts -->
        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';
        import { AppComponent } from './app.component';

        import { Dx{WidgetName}Module } from 'devextreme-angular';

        @NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                Dx{WidgetName}Module
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
        export class AppModule { }

    ##### Vue

        <!-- tab: App.vue -->
        <template> 
            <Dx{WidgetName} ...
                :resources="resources" />
        </template>

        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import CustomStore from 'devextreme/data/custom_store';
        import { createStore } from 'devextreme-aspnet-data-nojquery';
        import { Dx{WidgetName} } from 'devextreme-vue/{widget-name}';

        export default {
            components: {
                Dx{WidgetName}
            },
            data() {
                const serviceUrl = "https://url/to/my/service";
                const resources = [{
                    // ...
                    dataSource: createStore({
                        key: "ID",
                        loadUrl: serviceUrl + "/GetAction",
                        insertUrl: serviceUrl + "/InsertAction",
                        updateUrl: serviceUrl + "/UpdateAction",
                        deleteUrl: serviceUrl + "/DeleteAction"
                    })
                }];
                return {
                    resources
                }
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import CustomStore from 'devextreme/data/custom_store';
        import { createStore } from 'devextreme-aspnet-data-nojquery';
        import {WidgetName} from 'devextreme-react/{widget-name}';

        const serviceUrl = "https://url/to/my/service";
        const resources = [{
            // ...
            dataSource: createStore({
                key: "ID",
                loadUrl: serviceUrl + "/GetAction",
                insertUrl: serviceUrl + "/InsertAction",
                updateUrl: serviceUrl + "/UpdateAction",
                deleteUrl: serviceUrl + "/DeleteAction"
            })
        }];

        class App extends React.Component {
            render() {
                return (
                    <{WidgetName} ...
                        resources={resources} />
                );
            }
        }
        export default App;
        
    ---

- **Any other data source**     
Implement a [CustomStore](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/').

[note]

Please review the following notes about data binding:

- If you wrap the store into the **DataSource** object explicitly, set the [paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') option to **false** to prevent data from partitioning.

- Data field names should not contain the following characters: `.`, `,`, `:`, `[`, and `]`.

- The stores are immutable. You cannot change their configurations at runtime. Instead, create a new store or **DataSource** and assign it to the **dataSource** option as shown in the articles about changing options in [jQuery](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/05%20Get%20and%20Set%20Options/00%20Get%20and%20Set%20Options.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Get_and_Set_Options'), [Angular](/concepts/40%20Angular%20Components/20%20Component%20Configuration%20Syntax/33%20Two-Way%20Option%20Binding.md '/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/#Two-Way_Option_Binding'), [React](/concepts/50%20React%20Components/20%20State%20Management/3%20Controlled%20Mode.md '/Documentation/Guide/React_Components/State_Management/#Controlled_Mode'), and [Vue](/concepts/55%20Vue%20Components/20%20Component%20Configuration%20Syntax/33%20Two-Way%20Option%20Binding.md '/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/#Two-Way_Option_Binding').

[/note]