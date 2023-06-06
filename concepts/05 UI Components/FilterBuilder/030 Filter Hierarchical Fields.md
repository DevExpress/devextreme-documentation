In the following code, the FilterBuilder can filter data by three fields, two of which are hierarchical. The [allowHierarchicalFields](/api-reference/10%20UI%20Components/dxFilterBuilder/1%20Configuration/allowHierarchicalFields.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/#allowHierarchicalFields') property is **true** to display hierarchical fields as a tree.

---
#####jQuery

    <!--JavaScript-->
    const orders = [{
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

    <!--HTML-->
    <dx-filter-builder
        [allowHierarchicalFields]="true">
        <dxi-field dataField="orderID"></dxi-field>
        <dxi-field dataField="address.state"></dxi-field>
        <dxi-field dataField="address.city"></dxi-field>
    </dx-filter-builder>

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
    }
    @NgModule({
        imports: [
            // ...
            DxFilterBuilderModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFilterBuilder
            :allow-hierarchical-fields="true">
            <DxField data-field="orderID" />
            <DxField data-field="address.state" />
            <DxField data-field="address.city" />
        </DxFilterBuilder>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxFilterBuilder, {
        DxField
    } from 'devextreme-vue/filter-builder';

    const orders = [{
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

    export default {
        components: {
            DxFilterBuilder,
            DxField
        },
        data() {
            return {
                orders
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import 'devextreme/dist/css/dx.light.css';

    import FilterBuilder, {
        Field
    } from 'devextreme-react/filter-builder';

    const orders = [{
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

    export default function App() {
        return (
            <FilterBuilder
                allowHierarchicalFields={true}>
                <Field dataField="orderID" />
                <Field dataField="address.state" />
                <Field dataField="address.city" />
            </FilterBuilder>
        );
    }

---

![DevExtreme HTML5 JavaScript Filter Builder Hierarchical Fields](/images/FilterBuilder/visual_elements/hierarchical_fields.png)

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/FilterBuilder/"
}

#####See Also#####
- [Integrate with a UI component](/concepts/05%20UI%20Components/FilterBuilder/020%20Integrate%20with%20a%20DevExtreme%20UI%20Component.md '/Documentation/Guide/UI_Components/FilterBuilder/Integrate_with_a_DevExtreme_UI_Component/')
