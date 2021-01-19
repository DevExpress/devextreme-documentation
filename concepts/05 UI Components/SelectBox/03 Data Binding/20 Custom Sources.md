Access to a custom data source is configured using the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') component. DevExtreme provides <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md" target="_blank">ASP.NET</a> and <a href="https://github.com/DevExpress/DevExtreme-PHP-Data/blob/master/README.md" target="_blank">PHP</a> extensions that help configure it and implement server-side data processing. You can also use the third-party extension for <a href="https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md" target="_blank">MongoDB</a>. If these extensions are not suitable for your data source, follow the instructions below to configure the **CustomStore** manually.

The **CustomSource**'s configuration differs depending on whether data is processed on the client or server. In the former case, switch the **CustomStore** to the raw mode and load all data from the server using the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function as shown in the following example:

#include common-code-customsource-rawmode-withkey

[note]We recommend not using this mode with large amounts of data because all data is loaded at once.

In the latter case, use the **CustomStore**'s **load** function to send data processing settings to the server. These settings are passed as a parameter to the **load** function and depend on the operations (paging, filtering, sorting, etc.) that you have enabled in the **DataSource**. The following settings are relevant for the **SelectBox**:

- **Paging settings**: [take](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/take.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#take') and [skip](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/skip.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#skip')       
Present if [paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') is **true** and [pageSize](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/pageSize.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize') is set in the **DataSource**.

- **Sorting settings**: [sort](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/sort.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#sort')         
Present if the **DataSource**'s [sort](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/sort.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort') property is set.

- **Filtering settings**: [filter](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/filter.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#filter')    
Present if the **DataSource**'s [filter](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') property is set or [searching is enabled](/concepts/05%20Widgets/SelectBox/10%20Configure%20Search%20Parameters.md '/Documentation/Guide/Widgets/SelectBox/Configure_Search_Parameters/') in the UI component.

- **Searching settings**: [searchExpr](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/searchExpr.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchExpr'), [searchOperation](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/searchOperation.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchOperation'), and [searchValue](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/searchValue.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchValue')     
Present if [corresponding properties](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchExpr.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr') are set in the **DataSource**.

- **Grouping settings**: [group](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/group.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#group')      
Present if the **DataSource**'s [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') property is set.

After receiving these settings, the server should apply them to data and send back an object with the following structure:

    {
        data: [{
            key: "Group 1",
            items: [ ... ] // result data objects
        },
        ...
        ]
    }

If the **group** setting is absent, the object structure is different: 

    {
        data: [ ... ] // result data objects
    }

If you specify the **SelectBox**'s [value](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#value') beforehand, the **CustomStore** should implement the [byKey](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/byKey.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey') operation. If the **SelectBox** allows a user [to add custom items](/concepts/05%20Widgets/SelectBox/15%20Create%20a%20User-Defined%20Item.md '/Documentation/Guide/Widgets/SelectBox/Create_a_User-Defined_Item/'), implement the [insert](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/insert.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#insert') method. Below is a generalized **CustomStore** configuration for the **SelectBox** UI component.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: new DevExpress.data.DataSource({
                key: "ID",
                load: function(loadOptions) {
                    const d = $.Deferred(),
                        params = {};
                    [
                        "skip",     
                        "take",  
                        "sort", 
                        "filter", 
                        "searchExpr",
                        "searchOperation",
                        "searchValue",
                        "group", 
                    ].forEach(function(i) {
                        if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                            params[i] = JSON.stringify(loadOptions[i]);
                    });
                    $.getJSON("http://mydomain.com/MyDataService", params)
                        .done(function(result) {
                            // Here, you can perform operations unsupported by the server
                            d.resolve(result.data);
                        });
                    return d.promise();
                },
                byKey: function(key) {
                    const d = new $.Deferred();
                    $.get('https://mydomain.com/MyDataService?id=' + key)
                        .done(function(result) {
                            d.resolve(result);
                        });
                    return d.promise();
                },
                insert: function(values) {
                    return $.ajax({
                        url: "http://mydomain.com/MyDataService/",
                        method: "POST",
                        data: values
                    })
                }
            })
        });
    });
    function isNotEmpty(value) {
        return value !== undefined && value !== null && value !== "";
    }

##### Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
    import { DxSelectBoxModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        selectBoxData: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            function isNotEmpty(value: any): boolean {
                return value !== undefined && value !== null && value !== "";
            }
            this.selectBoxData = new DataSource({
                store: new CustomStore({
                    key: "ID",
                    load: (loadOptions) => {
                        let params: HttpParams = new HttpParams();
                        [
                            "skip",     
                            "take",  
                            "sort", 
                            "filter", 
                            "searchExpr",
                            "searchOperation",
                            "searchValue",
                            "group", 
                        ].forEach(function(i) {
                            if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                                params = params.set(i, JSON.stringify(loadOptions[i]));
                        });
                        return httpClient.get("http://mydomain.com/MyDataService", { params: params })
                            .toPromise()
                            .then(result => {
                                // Here, you can perform operations unsupported by the server
                                return result.data;
                            });
                    },
                    byKey: function(key) {
                        return httpClient.get('https://mydomain.com/MyDataService?id=' + key)
                            .toPromise();
                    },
                    insert: function(values) {
                        return httpClient.post('http://mydomain.com/MyDataService', values)
                            .toPromise();
                    }
                })
            });
        }
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule,
             HttpClientModule 
         ],
         // ...
     })

    <!--HTML-->
    <dx-select-box
        [dataSource]="selectBoxData">
    </dx-select-box>

##### Vue

    <template>
        <DxSelectBox ... 
            :data-source="dataSource" />
    </template>
    <script>
    import DxSelectBox from "devextreme-vue/select-box";
    import CustomStore from "devextreme/data/custom_store";
    import 'whatwg-fetch';
    // ...
    function isNotEmpty(value) {
        return value !== undefined && value !== null && value !== "";
    }
    function handleErrors(response) {
        if (!response.ok)
            throw Error(response.statusText);
        return response;
    }
    const selectBoxDataSource = {
        store: new CustomStore({
            key: "ID",
            load: (loadOptions) => {
                let params = "?";
                [
                   "skip",     
                    "take",  
                    "sort", 
                    "filter", 
                    "searchExpr",
                    "searchOperation",
                    "searchValue",
                    "group"
                ].forEach(function(i) {
                    if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                        params += `${i}=${JSON.stringify(loadOptions[i])}&`;
                });
                params = params.slice(0, -1);
                return fetch(`https://mydomain.com/MyDataService${params}`)
                    .then(handleErrors)
                    .then(response => response.json())
                    .then((result) => {
                        return result.data;
                    });
            },
            byKey: (key) => {
                return fetch(`https://mydomain.com/MyDataService?id=${key}`)
                        .then(handleErrors);
            },
            insert: (values) => {
                return fetch("https://mydomain.com/MyDataService", {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(handleErrors);
            }
        })
    }
    export default {
        // ...
        data() {
            return {
                dataSource: selectBoxDataSource
            };
        },
        components: {
            // ...
            DxSelectBox
        }
    }
    </script>

##### React

    import React from "react";
    import SelectBox from "devextreme-react/select-box";
    import CustomStore from "devextreme/data/custom_store";
    import 'whatwg-fetch';
    // ...
    function isNotEmpty(value) {
        return value !== undefined && value !== null && value !== "";
    }
    function handleErrors(response) {
        if (!response.ok) 
            throw Error(response.statusText);
        return response;
    }
    const selectBoxDataSource = {
        store: new CustomStore({
            key: "ID",
            load: (loadOptions) => {
                let params = "?";
                [
                   "skip",     
                    "take",  
                    "sort", 
                    "filter", 
                    "searchExpr",
                    "searchOperation",
                    "searchValue",
                    "group"
                ].forEach(function(i) {
                    if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                        params += `${i}=${JSON.stringify(loadOptions[i])}&`;
                });
                params = params.slice(0, -1);
                return fetch(`https://mydomain.com/MyDataService${params}`)
                    .then(handleErrors)
                    .then(response => response.json())
                    .then((result) => {
                        return result.data;
                    });
            },
            byKey: (key) => {
                return fetch(`https://mydomain.com/MyDataService?id=${key}`)
                        .then(handleErrors);
            },
            insert: (values) => {
                return fetch("https://mydomain.com/MyDataService", {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(handleErrors);
            }
        })
    }
    class App extends React.Component {
        render() {
            return (
                <SelectBox ...
                    dataSource={selectBoxDataSource}>
                </SelectBox>
            );
        }
    }
    export default App;

---

#####See Also#####
- [Data Layer - DataSource Examples | Custom Sources](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/3%20Custom%20Sources '/Documentation/Guide/Data_Binding/Data_Source_Examples/#Custom_Sources')
- [Data Layer - DataSource Examples | Connect to a RESTful Service](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/3%20Custom%20Sources/0%20Connect%20to%20RESTful%20Service.md '/Documentation/Guide/Data_Binding/Data_Source_Examples/#Custom_Sources/Connect_to_RESTful_Service')
- [Data Layer - Overview](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/')
- [Access the DataSource](/concepts/05%20Widgets/SelectBox/03%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/Widgets/SelectBox/Data_Binding/Access_the_DataSource/')
- [Grouping](/concepts/05%20Widgets/SelectBox/07%20Grouping/01%20In%20the%20Data%20Source.md '/Documentation/Guide/Widgets/SelectBox/Grouping/In_the_Data_Source/')
- [Configure Search Parameters](/concepts/05%20Widgets/SelectBox/10%20Configure%20Search%20Parameters.md '/Documentation/Guide/Widgets/SelectBox/Configure_Search_Parameters/')
- [SelectBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/Overview)

[tags]selectBox, data binding, provide data, custom data source, CustomStore, DataSource, load