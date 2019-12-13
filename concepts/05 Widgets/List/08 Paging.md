Paging options are set in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'): [paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') enables paging; [pageSize](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/pageSize.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize') specifies how many data items a page should contain.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
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
    import { DxListModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        listDataSource = new DataSource({
            store: /* A store is configured here */,
            paginate: true,
            pageSize: 10
        });
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-list ...
        [dataSource]="listDataSource">
    </dx-list>

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().List()
        .ID("list")
        .DataSource(d => d
            // Data access is configured here
        )
        .DataSourceOptions(o => o
            .Paginate(true)
            .PageSize(10)
        )
    )

---

The next page can be rendered when a user scrolls the **List** down to the bottom, or after a user clicks the **More** button. Set the [pageLoadMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/pageLoadMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#pageLoadMode') option to specify the mode:

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            // ...
            pageLoadMode: "scrollBottom" // or "nextButton"
        });
    });

#####Angular

    <!--HTML-->
    <dx-list ...
        pageLoadMode="scrollBottom"> <!-- or "nextButton" -->
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

---

[note] The **List** renders as many pages as it can fit into its [height](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/height.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#height') when the widget is displayed for the first time and the **pageLoadMode** is set to *"scrollBottom"*.

[Local arrays](/concepts/05%20Widgets/List/03%20Data%20Binding/05%20Simple%20Array/05%20Array%20Only.md '/Documentation/Guide/Widgets/List/Data_Binding/Simple_Array/Array_Only/') and remote datasets loaded using the **CustomStore** in [raw mode](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources/1%20Load%20Data%20in%20Raw%20Mode.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode') are *only rendered* page by page. In other cases, remote datasets are *also loaded* page by page if the server can partition data.

#####See Also#####
- **Data Binding**: [Web API Service](/concepts/05%20Widgets/List/03%20Data%20Binding/16%20Web%20API%20Service.md '/Documentation/Guide/Widgets/List/Data_Binding/Web_API_Service/') | [PHP Service](/concepts/05%20Widgets/List/03%20Data%20Binding/17%20PHP%20Service.md '/Documentation/Guide/Widgets/List/Data_Binding/PHP_Service/') | [MongoDB Service](/concepts/05%20Widgets/List/03%20Data%20Binding/18%20MongoDB%20Service.md '/Documentation/Guide/Widgets/List/Data_Binding/MongoDB_Service/') | [OData Service](/concepts/05%20Widgets/List/03%20Data%20Binding/15%20OData%20Service.md '/Documentation/Guide/Widgets/List/Data_Binding/OData_Service/') | [Custom Sources](/concepts/05%20Widgets/List/03%20Data%20Binding/20%20Custom%20Sources.md '/Documentation/Guide/Widgets/List/Data_Binding/Custom_Sources/') | [JavaScript Array](/concepts/05%20Widgets/List/03%20Data%20Binding/05%20Simple%20Array/05%20Array%20Only.md '/Documentation/Guide/Widgets/List/Data_Binding/Simple_Array/Array_Only/')
- [List - Localization](/concepts/05%20Widgets/List/50%20Localization.md '/Documentation/Guide/Widgets/List/Localization/')

[tags]list, paging, paginate, pageSize, pageLoadMode
