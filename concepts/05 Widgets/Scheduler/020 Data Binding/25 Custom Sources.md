DevExtreme provides the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') component, a flexible instrument that allows you to configure data access manually, for consuming data from any source. The following extensions for ASP.NET and PHP servers simplify the task of configuring the **CustomStore** and implement server-side data processing as well:

- [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data)
- [DevExtreme-PHP-Data](https://github.com/DevExpress/DevExtreme-PHP-Data)

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/WebAPIService/jQuery/Light/",
    name: "Web API Service"
}

You need to configure the **CustomStore** in detail for accessing a server built on another technology. Data in this situation can be processed on the client or server. In the former case, switch the **CustomStore** to the raw mode and load all data from the server in the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function as shown in the next example. 

---

#####jQuery

    <!--JavaScript-->$(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: new DevExpress.data.DataSource({
                store: new DevExpress.data.CustomStore({
                    loadMode: "raw",   
                    load: function () {
                        return $.getJSON('https://mydomain.com/MyDataService');
                    }
                }),
                paginate: false
            })
        });
    });
    
#####Angular

    <!--TypeScript-->
    import { ..., Inject } from '@angular/core';
    import { Http, HttpModule } from '@angular/http';
    import { DxSchedulerModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    import CustomStore from 'devextreme/data/custom_store';
    import 'rxjs/add/operator/toPromise';
    // ...
    export class AppComponent  {
        schedulerDataSource: any = {};
        constructor(@Inject(Http) http: Http) {
            this.schedulerDataSource = new DataSource({
                store: new CustomStore({
                    loadMode: "raw",   
                    load: function () {
                        return http.get('https://mydomain.com/MyDataService')
                                    .toPromise()
                                    .then(response => {
                                        return response.json();
                                    });
                    }
                }),
                paginate: false
            })
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule,
            HttpModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-scheduler
        [dataSource]="schedulerDataSource">
    </dx-scheduler>

---

In the latter case, use the **CustomStore**'s **load** function to send data processing settings to the server. These settings are passed as a parameter to the **load** function. In case of the **Scheduler**, the only relevant setting is **filter**, which is passed when the **Scheduler**'s [remoteFiltering](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/remoteFiltering.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#remoteFiltering') option is set to **true**:

* **filter**: <span style="font-size:smaller">Array</span>      
Defines filtering parameters. Present if the **DataSource**'s [filter](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') option is set. Possible variants:

    * Binary filter

            [ "field", "=", 3 ]

    * Unary filter
    
             [ "!", [ "field", "=", 3 ] ]

    * Complex filter
    
            [
                [ "field", "=", 10 ],
                "and",
                [
                    [ "otherField", "<", 3 ],
                    "or",
                    [ "otherField", ">", 11 ]
                ]
            ]

    See the [Filtering](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering') topic for more details.

After receiving this setting, the server should apply it to data and send back an object of the following structure:

    {
        data: [ ... ] // result data objects
    }

If the **Scheduler** allows a user to add, delete or update appointments, the **CustomStore** must implement the [insert](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/insert.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#insert'), [remove](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/remove.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#remove') and [update](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/update.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#update') operations as well. Here is a generalized configuration of the **CustomStore** for the **Scheduler** widget.

---

#####jQuery

    var schedulerDataSource = new DevExpress.data.DataSource({
        paginate: false,
        load: function (loadOptions) {
            var d = $.Deferred();
            $.getJSON('http://mydomain.com/MyDataService', {  
                filter: loadOptions.filter ? JSON.stringify(loadOptions.filter) : ""
            }).done(function (result) {
                // You can process the received data here
                d.resolve(result);
            });
            return d.promise();
        },
        insert: function (values) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/",
                method: "POST",
                data: values
            })
        },
        remove: function (key) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/" + encodeURIComponent(key),
                method: "DELETE",
            })
        },
        update: function (key, values) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/" + encodeURIComponent(key),
                method: "PUT",
                data: values
            })
        }
    });

    $(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: schedulerDataSource,
            remoteFiltering: true
        });
    });

#####Angular

    <!--TypeScript-->
    import { ..., Inject } from '@angular/core';
    import { Http, HttpModule, URLSearchParams } from '@angular/http';
    import { DxSchedulerModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    import CustomStore from 'devextreme/data/custom_store';
    import 'rxjs/add/operator/toPromise';
    // ...
    export class AppComponent {
        schedulerDataSource: any = {};
        constructor(@Inject(Http) http: Http) {
            this.schedulerDataSource = new DataSource({
                store: new CustomStore({
                    load: function (loadOptions) {
                        let params: URLSearchParams = new URLSearchParams();
                        params.set("filter", loadOptions.filter ? JSON.stringify(loadOptions.filter) : ""); 
                        return http.get('http://mydomain.com/MyDataService', {
                                        search: params
                                    })
                                    .toPromise()
                                    .then(response => {
                                        var json = response.json();
                                        // You can process the received data here
                                        return json.items
                                    });
                    },
                    insert: function (values) {
                        return http.post('http://mydomain.com/MyDataService', values)
                                .toPromise();
                    },
                    remove: function (key) {
                        return http.delete('http://mydomain.com/MyDataService' + encodeURIComponent(key))
                                .toPromise();
                    },
                    update: function (key, values) {
                        return http.put('http://mydomain.com/MyDataService' + encodeURIComponent(key), values)
                                .toPromise();
                    }
                }),
                paginate: false
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule,
            HttpModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-scheduler
        [dataSource]="schedulerDataSource"
        [remoteFiltering]="true">
    </dx-scheduler>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/GoogleCalendarIntegration/jQuery/Light/"
}

#####See Also#####
- [Data Layer - DataSource Examples | Custom Sources](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources')
- [Data Layer - DataSource Examples | Connect to a RESTful Service](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources/0%20Connect%20to%20RESTful%20Service.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Connect_to_RESTful_Service')
- [Data Layer - Overview](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/')
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/')

[tags]scheduler, data binding, provide data, custom data source, CustomStore, DataSource, load, delete, add, update, remote filtering