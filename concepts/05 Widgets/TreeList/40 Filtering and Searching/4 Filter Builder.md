The [**FilterBuilder**](/api-reference/10%20UI%20Widgets/dxFilterBuilder '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/') widget helps a user build a complex filter expression and apply it to all grid columns at once.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList FilterBuilder](/images/treeList/visual_elements/filter_builder.png)

To integrate the **FilterBuilder** with the **TreeList**, first, pass an array of columns that should be filtered to the **FilterBuilder**'s [fields](/api-reference/10%20UI%20Widgets/dxFilterBuilder/1%20Configuration/fields.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#fields') option. Each item in this array should at least have the [dataField](/api-reference/10%20UI%20Widgets/dxFilterBuilder/5%20Field/dataField.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/#dataField') at least. The following code allows using all **TreeList** columns in the **FilterBuilder**:

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
    import { DxTreeListModule, DxFilterBuilderModule } from 'devextreme-angular';
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

Then, add a button that updates a filter of the **TreeList**'s data source according to the build filter expression. The [value](/api-reference/10%20UI%20Widgets/dxFilterBuilder/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#value') option stores this expression.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        // ...
        $("#button").dxButton({
            text: "Apply Filter",
            onClick: function () {
                var filter = $("#filterBuilder").dxFilterBuilder("instance").option("value");
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
    } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        @ViewChild(DxFilterBuilderComponent) filterBuilder: DxFilterBuilderComponent;
        // ...
        buttonClick() {
            this.treeList.filter(this.filterBuilder.value);
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
- [Filtering API - Initial and Runtime Filtering](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/5%20API/1%20Initial%20and%20Runtime%20Filtering.md '/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering')
- [DataGrid with the Filter Builder Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/FilterBuilder/WithTreeList/Angular/Light)
