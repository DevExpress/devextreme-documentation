---
id: dxHtmlEditorMention.dataSource
type: Array<String> | DataSource | DataSource_Options
default: null
---
---
##### shortDescription
Provides data for the suggestion list.

---
If you use DevExtreme ASP.NET MVC Controls, refer to the <a href="https://docs.devexpress.com/AspNetCore/400575/devextreme-based-controls/concepts/bind-controls-to-data" target="_blank">Bind Controls to Data</a> article.

Depending on your data source, specify this option as described in the following list. The data source can provide `string` values or objects. In the latter case, also specify the [displayExpr](/api-reference/_hidden/dxHtmlEditorMention/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/mentions/#displayExpr') and [valueExpr](/api-reference/_hidden/dxHtmlEditorMention/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/mentions/#valueExpr').

- **Data Array**        
Assign the array to the **dataSource** option. 

- **Read-Only Data in JSON Format**          
Set the **dataSource** option to the URL of a JSON file or service that returns JSON data.

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
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                mentions: [{
                    dataSource: DevExpress.data.AspNet.createStore({
                        key: "ID",
                        loadUrl: serviceUrl + "/GetAction"
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
                this.store = createStore({
                    key: "ID",
                    loadUrl: serviceUrl + "/GetAction"
                })
            }
        }

        <!-- tab: app.component.html -->
        <dx-{widget-name} ... >
            <dxi-mention [dataSource]="store"></dxi-mention>
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
            <Dx{WidgetName} ... >
                <DxMention :data-source="store"></DxMention>
            </Dx{WidgetName}>
        </template>

        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import CustomStore from 'devextreme/data/custom_store';
        import { createStore } from 'devextreme-aspnet-data-nojquery';
        import { Dx{WidgetName}, DxMention } from 'devextreme-vue/{widget-name}';

        export default {
            components: {
                Dx{WidgetName},
                DxMention
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
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import CustomStore from 'devextreme/data/custom_store';
        import { createStore } from 'devextreme-aspnet-data-nojquery';
        import {WidgetName}, { Mention } from 'devextreme-react/{widget-name}';

        const serviceUrl = "https://url/to/my/service";
        const store = createStore({
            key: "ID",
            loadUrl: serviceUrl + "/GetAction"
        });

        class App extends React.Component {
            render() {
                return (
                    <{WidgetName} ... >
                        <Mention dataSource={store} />
                    </{WidgetName}>
                );
            }
        }
        export default App;

    ---

- **Any other data source**     
Implement a [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/').

[note]

The stores are immutable. You cannot change their configurations at runtime. Instead, create a new store or **DataSource** and assign it to the **dataSource** option as shown in the articles about changing options in [jQuery](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/05%20Get%20and%20Set%20Options/00%20Get%20and%20Set%20Options.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Get_and_Set_Options'), [Angular](/concepts/40%20Angular%20Components/20%20Component%20Configuration%20Syntax/33%20Two-Way%20Option%20Binding.md '/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/#Two-Way_Option_Binding'), [React](/concepts/50%20React%20Components/20%20State%20Management/3%20Controlled%20Mode.md '/Documentation/Guide/React_Components/State_Management/#Controlled_Mode'), and [Vue](/concepts/55%20Vue%20Components/20%20Component%20Configuration%20Syntax/33%20Two-Way%20Option%20Binding.md '/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/#Two-Way_Option_Binding').

[/note]