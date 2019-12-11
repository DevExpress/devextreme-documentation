Paging is used to load data in portions, which improves the widget's performance on large datasets. It is configured in the widget's [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). Enable paging by setting the [paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') option to **true**, and specify the number of items per page using the [pageSize](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/pageSize.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize') option.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: new DevExpress.data.DataSource({
                loadMode: "raw",   
                load: function () {
                    return $.getJSON('https://mydomain.com/MyDataService');
                },
                paginate: true,
                pageSize: 5
            }),
            valueExpr: "Product_ID",
            displayExpr: "Product_Name"
        });
    });

#####Angular

    <!--TypeScript-->
    import { ..., Inject } from '@angular/core';
    import { Http, HttpModule } from '@angular/http';
    import DataSource from 'devextreme/data/data_source';
    import { DxLookupModule } from 'devextreme-angular';
    import CustomStore from 'devextreme/data/custom_store';
    import 'rxjs/add/operator/toPromise';
    // ...
    export class AppComponent {
        lookupDataSource: any = {};
        constructor(@Inject(Http) http: Http) {
            this.lookupData = new DataSource({
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
                paginate: true,
                pageSize: 5
            })
        }
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupData"
        valueExpr="Product_ID"
        displayExpr="Product_Name">
    </dx-lookup>

---

The **Lookup**'s default behavior is to load the next page once a user scrolls the item list to the bottom. If you set the [pageLoadMode](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/pageLoadMode.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#pageLoadMode') to *"nextButton"*, the **Lookup** loads the next page when a user clicks the **Next** button. This button gets the text from the [nextButtonText](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/nextButtonText.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#nextButtonText') option.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            // ...
            pageLoadMode: "nextButton",
            nextButtonText: "More"
        });
    });

#####Angular

    <!--HTML-->
    <dx-lookup ...
        pageLoadMode="nextButton"
        nextButtonText="More">
    </dx-lookup>

---

#####See Also#####
- [Lookup - Enable Grouping](/concepts/05%20Widgets/Lookup/10%20Enable%20Grouping.md '/Documentation/Guide/Widgets/Lookup/Enable_Grouping/')
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics)

[tags]lookup, paginate, page size, pageSize, loading mode
