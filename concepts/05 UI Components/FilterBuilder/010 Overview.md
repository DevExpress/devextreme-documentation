The FilterBuilder UI component allows a user to build complex filter expressions with an unlimited number of filter conditions using the UI. 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FilterBuilder/WithDataGrid/"
}

The following code adds a simple FilterBuilder to your page. Note that each item in the [fields](/api-reference/10%20UI%20Components/dxFilterBuilder/1%20Configuration/fields '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/#fields') array contains the [dataField](/api-reference/_hidden/dxFilterBuilderField/dataField.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/#dataField'). The filter expression is defined in the [value](/api-reference/10%20UI%20Components/dxFilterBuilder/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/#value') property and should contain only those data fields that are present in the **fields** array.

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
                "or",
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
        [(value)]="filterValue">
        <dxi-field
            dataField="Product_ID"
            dataType="number"
            caption="ID">
        </dxi-field>
        <dxi-field dataField="Product_Name"></dxi-field>
        <dxi-field
            dataField="Product_Cost"
            dataType="number"
            caption="Cost"
            format="currency">
        </dxi-field>
    </dx-filter-builder>

    <!--TypeScript-->
    import { DxFilterBuilderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        filterValue = [
            [
                ["Product_Name", "startswith", "Super"],
                "and",
                ["Product_Cost", ">=", 300]
            ],
            "or",
            [
                ["Product_Name", "contains", "HD"],
                "and",
                ["Product_Cost", "<", 200]
            ]
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
            v-model:value="filterValue">
            <DxField
                data-field="Product_ID"
                data-type="number"
                caption="ID"
            />
            <DxField data-field="Product_Name" />
            <DxField
                data-field="Product_Cost"
                data-type="number"
                caption="Cost"
                format="currency"
            />
        </DxFilterBuilder>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxFilterBuilder, {
        DxField
    } from 'devextreme-vue/filter-builder';

    export default {
        components: {
            DxFilterBuilder,
            DxField
        },
        data() {
            return {
                filterValue: [
                    [
                        ["Product_Name", "startswith", "Super"],
                        "and",
                        ["Product_Cost", ">=", 300]
                    ],
                    "or",
                    [
                        ["Product_Name", "contains", "HD"],
                        "and",
                        ["Product_Cost", "<", 200]
                    ]
                ]
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import { useState } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import FilterBuilder, {
        Field
    } from 'devextreme-react/filter-builder';

    export default function App() {
        const [filterValue, setFilterValue] = useState([
            [
                ["Product_Name", "startswith", "Super"],
                "and",
                ["Product_Cost", ">=", 300]
            ],
            "or",
            [
                ["Product_Name", "contains", "HD"],
                "and",
                ["Product_Cost", "<", 200]
            ]
        ]);

        return (
            <FilterBuilder
                value={filterValue}
                onValueChange={setFilterValue}>
                <Field
                    dataField="Product_ID"
                    dataType="number"
                    caption="ID"
                />
                <Field dataField="Product_Name" />
                <Field
                    dataField="Product_Cost"
                    dataType="number"
                    caption="Cost"
                    format="currency"
                />
            </FilterBuilder>
        );
    }

---

The FilterBuilder displays the filter expression as a tree structure, where nodes represent simple filter conditions. Each condition consists of a data field, operation and value. A logical operation combines conditions into groups. For example, the following image shows how the above filter expression looks in the UI:

![DevExtreme HTML5 JavaScript Filter Builder Groups](/images/FilterBuilder/visual_elements/groups.png)

#####See Also#####
#include common-link-configurewidget
- [Integrate with a UI component](/concepts/05%20UI%20Components/FilterBuilder/020%20Integrate%20with%20a%20DevExtreme%20UI%20Component.md '/Documentation/Guide/UI_Components/FilterBuilder/Integrate_with_a_DevExtreme_UI_Component/')
- [Predefine Filter Values](/concepts/05%20UI%20Components/FilterBuilder/040%20Predefine%20Filter%20Values.md '/Documentation/Guide/UI_Components/FilterBuilder/Predefine_Filter_Values/')
- [API Reference](/api-reference/10%20UI%20Components/dxFilterBuilder '/Documentation/ApiReference/UI_Components/dxFilterBuilder/')

[tags]dxfilterbuilder, filter builder, filterBuilder, filter expression, condition, overview
