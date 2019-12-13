The **TreeList** widget has an integrated filter builder that can be invoked using the [filter panel](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/4%20Filter%20Panel%20with%20Filter%20Builder.md '/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Filter_Panel_with_Filter_Builder'). You can also use the [FilterBuilder](/concepts/05%20Widgets/FilterBuilder/010%20Overview.md '/Documentation/Guide/Widgets/FilterBuilder/Overview/') widget as a standalone component. Pass an array of columns that should be filtered to the **FilterBuilder**'s [fields](/api-reference/10%20UI%20Widgets/dxFilterBuilder/1%20Configuration/fields '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#fields') option. Each item in this array should at least have the [dataField](/api-reference/_hidden/dxFilterBuilderField/dataField.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/fields/#dataField'). The following code allows using **TreeList** columns in the **FilterBuilder**:

---
#####jQuery

    <!--JavaScript-->
    var columns = [{
        caption: "ID",
        dataField: "Product_ID",
        dataType: "number"
    }, {
        dataField: "Product_Name"
    }, {
        caption: "Cost",
        dataField: "Product_Cost",
        dataType: "number",
        format: "currency"
    }];

    $(function () {
        $("#treeList").dxTreeList({
            dataSource: products, 
            columns: columns
        });
        $("#filterBuilder").dxFilterBuilder({
            fields: columns
        });
    });

#####Angular

    <!--HTML-->
    <dx-filter-builder 
        [fields]="columns">
    </dx-filter-builder>
    <dx-tree-list 
        [dataSource]="products"  
        [columns]="columns">
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule, DxFilterBuilderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        columns = [{
            caption: "ID",
            dataField: "Product_ID",
            dataType: "number"
        }, {
            dataField: "Product_Name"
        }, {
            caption: "Cost",
            dataField: "Product_Cost",
            dataType: "number",
            format: "currency"
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule,
            DxFilterBuilderModule
        ],
        // ...
    })

---

Then, add a button that updates a filter of the **TreeList**'s data source according to the filter expression:

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        // ...
        $("#button").dxButton({
            text: "Apply Filter",
            onClick: function () {
                var filter = $("#filterBuilder").dxFilterBuilder("instance").getFilterExpression();
                $("#treeList").dxTreeList("instance").filter(filter);
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { 
        DxTreeListModule, 
        DxFilterBuilderModule, 
        DxTreeListComponent, 
        DxFilterBuilderComponent 
    } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        @ViewChild(DxFilterBuilderComponent, { static: false }) filterBuilder: DxFilterBuilderComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        // @ViewChild(DxFilterBuilderComponent) filterBuilder: DxFilterBuilderComponent;
        // ...
        buttonClick() {
            this.treeList.instance.filter(this.filterBuilder.instance.getFilterExpression());
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule,
            DxFilterBuilderModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-button 
        text="Apply Filter"
        (onClick)="buttonClick()">
    </dx-button>   

---

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/6%20API/1%20Initial%20and%20Runtime%20Filtering.md '/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering')
