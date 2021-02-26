---
default: undefined
type: array
---
---
##### shortDescription
Columns banded by the current column.

---
Unlike normal columns, band columns do not hold data. Instead, they collect two or more columns under one column header. To set up this layout, declare the band column using a hierarchical structure. For this, assign the nested columns to the **columns** field of the band column. For example, the following code declares the *"Address"* band column and nests three columns within it.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                caption: "Address",
                columns: ["City", "Street", "Apartment"]
            }, {
                // ...
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column caption="Address">
            <dxi-column dataField="City"></dxi-column>
            <dxi-column dataField="Street"></dxi-column>
            <dxi-column dataField="Apartment"></dxi-column>
        </dxi-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumn caption="Address">
                <DxColumn data-field="City" />
                <DxColumn data-field="Street" />
                <DxColumn data-field="Apartment" />
            </DxColumn>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxColumn
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Column
    } from 'devextreme-react/{widget-name}';

    export default function App() {
        return (
            <{WidgetName} ... >
                <Column caption="Address">
                    <Column dataField="City" />
                    <Column dataField="Street" />
                    <Column dataField="Apartment" />
                </Column>
            </{WidgetName}>
        );
    }
    
---

A nested column has almost every property a regular column has. These properties are described in the [columns](/api-reference/_hidden/GridBaseColumn '/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/columns/') section of the Reference.

[note]There is an exception though: nested columns cannot be [fixed](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnFixing '/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/columnFixing/') alone, therefore specifying the [fixed](/api-reference/_hidden/GridBaseColumn/fixed.md '/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/columns/#fixed') and [fixedPosition](/api-reference/_hidden/GridBaseColumn/fixedPosition.md '/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/columns/#fixedPosition') properties for them is useless. However, the whole band column can be fixed as usual.

For example, the following code specifies the **width** and **sortOrder** properties of the *"Street"* column nested within the fixed *"Address"* band column.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                caption: "Address",
                fixed: true,
                fixedPosition: "right",
                columns: [
                    "City", {
                        dataField: "Street",
                        width: 100,
                        sortOrder: "asc"
                    },
                    "Apartment"
                ]
            }, {
                // ...
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column
            caption="Address"
            [fixed]="true"
            fixedPosition="right">
            <dxi-column dataField="City"></dxi-column>
            <dxi-column dataField="Street" [width]="100" sortOrder="asc"></dxi-column>
            <dxi-column dataField="Apartment"></dxi-column>
        </dxi-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumn
                caption="Address"
                :fixed="true"
                fixed-position="right">
                <DxColumn data-field="City" />
                <DxColumn data-field="Street" :width="100" sort-order="asc" />
                <DxColumn data-field="Apartment" />
            </DxColumn>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxColumn
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Column
    } from 'devextreme-react/{widget-name}';

    export default function App() {
        return (
            <{WidgetName} ... >
                <Column
                    caption="Address"
                    fixed={true}
                    fixedPosition="right">
                    <Column dataField="City" />
                    <Column dataField="Street" width={100} sortOrder="asc" />
                    <Column dataField="Apartment" />
                </Column>
            </{WidgetName}>
        );
    }
    
---

Band columns support hierarchies of any nesting level. It means that the following structure is acceptable.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                caption: "A",
                columns: [ "A1", "A2", {
                    caption: "A3",
                    columns: ["A31", "A32", {
                        caption: "A33",
                        columns: ["A331", "A332", "A333"]
                    }]
                }]
            }, {
                caption: "B",
                columns: // ...
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column caption="A">
            <dxi-column dataField="A1"></dxi-column>
            <dxi-column dataField="A2"></dxi-column>
            <dxi-column caption="A3">
                <dxi-column dataField="A31"></dxi-column>
                <dxi-column dataField="A32"></dxi-column>
                <dxi-column caption="A33">
                    <dxi-column dataField="A331"></dxi-column>
                    <dxi-column dataField="A332"></dxi-column>
                    <dxi-column dataField="A333"></dxi-column>
                </dxi-column>
            </dxi-column>
        </dxi-column>
        <dxi-column caption="B">
            ...
        </dxi-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })


##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumn caption="A">
                <DxColumn data-field="A1" />
                <DxColumn data-field="A2" />
                <DxColumn caption="A3">
                    <DxColumn data-field="A31" />
                    <DxColumn data-field="A32" />
                    <DxColumn caption="A33">
                        <DxColumn data-field="A331" />
                        <DxColumn data-field="A332" />
                        <DxColumn data-field="A333" />
                    </DxColumn>
                </DxColumn>
            </DxColumn>
            <DxColumn caption="B">
                ...
            </DxColumn>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxColumn
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Column
    } from 'devextreme-react/{widget-name}';

    export default function App() {
        return (
            <{WidgetName} ... >
                <Column caption="A">
                    <Column dataField="A1" />
                    <Column dataField="A2" />
                    <Column caption="A3">
                        <Column dataField="A31" />
                        <Column dataField="A32" />
                        <Column caption="A33">
                            <Column dataField="A331" />
                            <Column dataField="A332" />
                            <Column dataField="A333" />
                        </Column>
                    </Column>
                </Column>
                <Column caption="B">
                    ...
                </Column>
            </{WidgetName}>
        );
    }
    
---

Band columns have the [isBand](/api-reference/_hidden/GridBaseColumn/isBand.md '/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/columns/#isBand') flag. Banded columns have the [ownerBand](/api-reference/_hidden/GridBaseColumn/ownerBand.md '/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/columns/#ownerBand') property set. Use these properties to distinguish band and banded columns from regular ones in code.

#####See Also#####
- [Band Columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/2%20Band%20Columns.md '/Documentation/Guide/UI_Components/{WidgetName}/Columns/Column_Types/Band_Columns/')
- [Column Fixing](/concepts/05%20Widgets/DataGrid/15%20Columns/30%20Column%20Fixing.md '/Documentation/Guide/UI_Components/{WidgetName}/Columns/Column_Fixing/')