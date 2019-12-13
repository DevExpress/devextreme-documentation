The **FilterBuilder** widget allows a user to build complex filter expressions with an unlimited number of filter conditions using the UI. 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FilterBuilder/WithDataGrid/"
}

The following code adds a simple **FilterBuilder** to your page. Note that each item in the [fields](/api-reference/10%20UI%20Widgets/dxFilterBuilder/1%20Configuration/fields '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#fields') array contains the [dataField](/api-reference/_hidden/dxFilterBuilderField/dataField.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/fields/#dataField'). The filter expression is defined in the [value](/api-reference/10%20UI%20Widgets/dxFilterBuilder/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#value') option and should contain only those data fields that are present in the **fields** array.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#filterBuilder").dxFilterBuilder({
            value: [
                [
                    ["Product_Name", "startswith", "Super"],
                    "and",
                    ["Product_Cost", ">=", 300]
                ],
                "Or",
                [
                    ["Product_Name", "contains", "HD"],
                    "and",
                    ["Product_Cost", "<", 200]
                ]
            ],
            fields: [{
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
            }]
        });
    });

#####Angular

    <!--HTML-->
    <dx-filter-builder 
        [fields]="fields">
    </dx-filter-builder>

    <!--TypeScript-->
    import { DxFilterBuilderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fields = [{
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
            DxFilterBuilderModule
        ],
        // ...
    })

---

The **FilterBuilder** displays the filter expression as a tree structure, where nodes represent simple filter conditions. Each condition consists of a data field, operation and value. A logical operation combines conditions into groups. For example, the following image shows how the above filter expression looks in the UI:

![DevExtreme HTML5 JavaScript Filter Builder Groups](/images/FilterBuilder/visual_elements/groups.png)

#####See Also#####
#include common-link-configurewidget
- [Integrate with a Widget](/concepts/05%20Widgets/FilterBuilder/020%20Integrate%20with%20a%20Widget.md '/Documentation/Guide/Widgets/FilterBuilder/Integrate_with_a_Widget/')
- [Predefine Filter Values](/concepts/05%20Widgets/FilterBuilder/040%20Predefine%20Filter%20Values.md '/Documentation/Guide/Widgets/FilterBuilder/Predefine_Filter_Values/')
- [API Reference](/api-reference/10%20UI%20Widgets/dxFilterBuilder '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/')

[tags]filter builder, filterBuilder, filter expression, condition, overview
