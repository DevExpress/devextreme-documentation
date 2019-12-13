To bind the **List** to data provided by an OData service, use the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/').

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.ODataStore({
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                key: "Product_ID"
            }),
            itemTemplate: function(data, _, element) {
                element.append(
                    $("<img />").attr("src", "data:image/jpg;base64," + data.Product_Primary_Image)
                                .height(30).width(30)
                                .addClass("item-image"),
                    $("<p>").text(data.Product_Name)
                            .addClass("item-text")
                )
            }
        });
    });

    <!--CSS-->.item-image {
        vertical-align: middle;
    }

    .item-text {
        display: inline-block;
        vertical-align: middle;
        margin: 0px 0px 0px 10px;
    }

#####Angular

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    import ODataStore from "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        listDataSource = new ODataStore({
            url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
            key: "Product_ID"
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
    <dx-list
        [dataSource]="listDataSource">
        <div *dxTemplate="let data of 'item'">
            <img class="item-image" src="data:image/jpg;base64,{{data.Product_Primary_Image}}" style="height:30px; width:30px">
            <p class="item-text">{{data.Product_Name}}</p>
        </div>
    </dx-list>

    <!--CSS-->
    .item-image {
        vertical-align: middle;
    }

    .item-text {
        display: inline-block;
        vertical-align: middle;
        margin: 0px 0px 0px 10px;
    }

---

Data kept in the **ODataStore** can be processed in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). For example, the **DataSource** can group or filter data.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: "odata",
                    url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                    key: "Product_ID"
                },
                group: "Product_Category",
                filter: ["Product_Available", "=", true]
            }),
            grouped: true,
            itemTemplate: function(data, _, element) {
                // The template is omitted for brevity
                // See the previous code example
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    import "devextreme/data/odata/store";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        productDataSource = new DataSource({
            store: {
                type: "odata",
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                key: "Product_ID"
            },
            group: "Product_Category",
            filter: ["Product_Available", "=", true]
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
    <dx-list
        [dataSource]="productDataSource"
        [grouped]="true" >
        <div *dxTemplate="let data of 'item'">
            <!-- The template is omitted for brevity -->
            <!-- See the previous code example -->
        </div>
    </dx-list>

---

#####See Also#####
- [Data Layer - What Are Stores](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores')
- [Data Layer - Data Source Examples | OData](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData')
- [List - Access the DataSource](/concepts/05%20Widgets/List/03%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/Widgets/List/Data_Binding/Access_the_DataSource/')
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI)
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')

[tags]list, data binding, provide data, odata, ODataStore, DataSource, process data