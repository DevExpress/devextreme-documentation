In the following code, the **FilterBuilder** allows filtering by three fields, two of which are hierarchical. The [allowHierarchicalFields](/api-reference/10%20UI%20Widgets/dxFilterBuilder/1%20Configuration/allowHierarchicalFields.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#allowHierarchicalFields') option set to **true** specifies displaying hierarchical fields as a tree.

---
#####jQuery

    <!--JavaScript-->
    var orders = [{
        orderID: 35703,
        address: {
            state: "California",
            city: "Los Angeles"
        }
    }, {
        orderID: 35711,
        address: {
            state: "California",
            city: "San Jose"
        }
    }, 
    // ...
    ];

    $(function() {
        $("#filterBuilderContainer").dxFilterBuilder({
            fields: [
                { dataField: "orderID" },
                { dataField: "address.state" }, 
                { dataField: "address.city" }
            ],
            allowHierarchicalFields: true
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxFilterBuilderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        orders = [{
            orderID: 35703,
            address: {
                state: "California",
                city: "Los Angeles"
            }
        }, {
            orderID: 35711,
            address: {
                state: "California",
                city: "San Jose"
            }
        }, 
        // ...
        ];

        fields = [
            { dataField: "orderID" },
            { dataField: "address.state" }, 
            { dataField: "address.city" }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxFilterBuilderModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-filter-builder 
        [fields]="fields">
    </dx-filter-builder>

---

![DevExtreme HTML5 JavaScript Filter Builder Hierarchical Fields](/images/FilterBuilder/visual_elements/hierarchical_fields.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/FilterBuilder/"
}

#####See Also#####
- [Integrate with a Widget](/concepts/05%20Widgets/FilterBuilder/020%20Integrate%20with%20a%20Widget.md '/Documentation/Guide/Widgets/FilterBuilder/Integrate_with_a_Widget/')
