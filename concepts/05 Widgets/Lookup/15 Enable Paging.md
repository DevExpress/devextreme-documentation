Paging options are set in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'): [paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') enables paging; [pageSize](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/pageSize.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize') specifies how many data items a page should contain.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: new DevExpress.data.DataSource({
                store: /* A store is configured here */,
                paginate: true,
                pageSize: 10
            }),
            // ...
        });
    });

#####Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        lookupDataSource: any = {};
        constructor() {
            this.lookupData = new DataSource({
                store: /* A store is configured here */,
                paginate: true,
                pageSize: 10
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
    <dx-lookup ...
        [dataSource]="lookupData">
    </dx-lookup>

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Lookup()
        .ID("lookup")
        .DataSource(d => d
            // Data access is configured here
        )
        .DataSourceOptions(o => o
            .Paginate(true)
            .PageSize(10)
        )
    )

---

**Lookup** renders the next page once a user scrolls the item list to the bottom. If you set the [pageLoadMode](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/pageLoadMode.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#pageLoadMode') to *"nextButton"*, **Lookup** renders the next page when a user clicks the **Next** button. You can change this button's text using the [nextButtonText](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/nextButtonText.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#nextButtonText') option:

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

[Local arrays](/concepts/05%20Widgets/Lookup/03%20Data%20Binding/05%20Simple%20Array/05%20Array%20Only.md '/Documentation/Guide/Widgets/Lookup/Data_Binding/Simple_Array/Array_Only/') and remote datasets loaded using the **CustomStore** in [raw mode](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources/1%20Load%20Data%20in%20Raw%20Mode.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode') are *only rendered* page by page. In other cases, remote datasets are *also loaded* page by page if the server can partition data.

#####See Also#####
- **Data Binding**: [Web API Service](/concepts/05%20Widgets/Lookup/03%20Data%20Binding/16%20Web%20API%20Service.md '/Documentation/Guide/Widgets/Lookup/Data_Binding/Web_API_Service/') | [PHP Service](/concepts/05%20Widgets/Lookup/03%20Data%20Binding/17%20PHP%20Service.md '/Documentation/Guide/Widgets/Lookup/Data_Binding/PHP_Service/') | [MongoDB Service](/concepts/05%20Widgets/Lookup/03%20Data%20Binding/18%20MongoDB%20Service.md '/Documentation/Guide/Widgets/Lookup/Data_Binding/MongoDB_Service/') | [OData Service](/concepts/05%20Widgets/Lookup/03%20Data%20Binding/15%20OData%20Service.md '/Documentation/Guide/Widgets/Lookup/Data_Binding/OData_Service/') | [Custom Sources](/concepts/05%20Widgets/Lookup/03%20Data%20Binding/20%20Custom%20Sources.md '/Documentation/Guide/Widgets/Lookup/Data_Binding/Custom_Sources/') | [JavaScript Array](/concepts/05%20Widgets/Lookup/03%20Data%20Binding/05%20Simple%20Array/05%20Array%20Only.md '/Documentation/Guide/Widgets/Lookup/Data_Binding/Simple_Array/Array_Only/')
- [Lookup - Enable Grouping](/concepts/05%20Widgets/Lookup/10%20Enable%20Grouping.md '/Documentation/Guide/Widgets/Lookup/Enable_Grouping/')
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics)

[tags]lookup, paginate, page size, pageSize, loading mode
