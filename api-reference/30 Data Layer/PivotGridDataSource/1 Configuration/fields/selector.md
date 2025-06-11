---
id: PivotGridDataSource.Options.fields.selector
type: function()
default: undefined
---
---
##### shortDescription
Specifies a function that combines field values into groups.

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/SimpleArray/"
}

[note]

- The **selector** function cannot be used with an an [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/') or [remote operations](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/remoteOperations.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#remoteOperations'). If you use remote operations, create a calculated data field on the server and [bind a pivot grid field to it](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/dataField.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField').
- The `this` keyword refers to the field's configuration.

[/note]

The **selector** function takes a data object and returns a field value. You can use **selector** as an alternative to the [groupInterval](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/groupInterval.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#groupInterval') property.

The following code snippet implements **selector** to group birth dates by decades:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        const pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                caption: "Birth Decade",
                area: "column",
                selector: function (data) {
                    var birthDate = new Date(data.birthDate);
                    return `${Math.floor(birthDate.getFullYear() / 10) * 10}s`;
                }
            }]
        });
    });
    
##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // ...
                fields: [{
                    caption: "Birth Decade",
                    area: "column",
                    selector: function (data) {
                        let birthDate = new Date(data.birthDate);
                        return `${Math.floor(birthDate.getFullYear() / 10) * 10}s`;
                    }
                }]
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid
            :data-source="pivotGridDataSource"
        />
    </template>
    
    <script>
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import DxPivotGrid from 'devextreme-vue/pivot-grid';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            caption: 'Birth Decade',
            area: 'column',
            selector: function (data) {
                let birthDate = new Date(data.birthDate);
                return `${Math.floor(birthDate.getFullYear() / 10) * 10}s`;
            }
        }]
    });

    export default {
        components: {
            DxPivotGrid
        },
        data() {
            return {
                pivotGridDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import DxPivotGrid from 'devextreme-react/pivot-grid';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            caption: 'Birth Decade',
            area: 'column',
            selector: function (data) {
                let birthDate = new Date(data.birthDate);
                return `${Math.floor(birthDate.getFullYear() / 10) * 10}s`;
            }
        }]
    });

    class App extends React.Component {
        render() {
            return (
                <PivotGrid ...
                    dataSource={pivotGridDataSource}
                />
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().PivotGrid()
        .DataSource(ds => ds
            // ...
            .Fields(fields => {
                fields.Add()
                    .Caption("Birth Decade")
                    .Area(PivotGridArea.Column)
                    .Selector("groupByDecade")
            })
        )
    )

    <script type="text/javascript">
        function groupByDecade (data) {
            var birthDate = new Date(data.birthDate);
            return Math.floor(birthDate.getFullYear() / 10) * 10;
        }
    </script>

---

The following code snippet places values below and over 1000 into separate groups:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        const pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                caption: "Amount",
                area: "column",
                selector: function (data) {
                    return data.amount > 1000 ? "> 1000" : "< 1000";
                }
            }]
        });
    });
    
##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // ...
                fields: [{
                    caption: "Amount",
                    area: "column",
                    selector: function (data) {
                        return data.amount > 1000 ? "> 1000" : "< 1000";
                    }
                }]
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid
            :data-source="pivotGridDataSource"
        />
    </template>
    
    <script>
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import DxPivotGrid from 'devextreme-vue/pivot-grid';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            caption: 'Amount',
            area: 'column',
            selector: function (data) {
                return data.amount > 1000 ? '> 1000' : '< 1000';
            }
        }]
    });

    export default {
        components: {
            DxPivotGrid
        },
        data() {
            return {
                pivotGridDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import DxPivotGrid from 'devextreme-react/pivot-grid';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            caption: 'Amount',
            area: 'column',
            selector: function (data) {
                return data.amount > 1000 ? '> 1000' : '< 1000';
            }
        }]
    });

    class App extends React.Component {
        render() {
            return (
                <PivotGrid
                    dataSource={pivotGridDataSource}
                />
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().PivotGrid()
        .DataSource(ds => ds
            // ...
            .Fields(fields => {
                fields.Add()
                    .Caption("Amount")
                    .Area(PivotGridArea.Column)
                    .Selector("classifyValues")
            })
        )
    )

    <script type="text/javascript">
        function classifyValues (data) {
            return data.amount > 1000 ? "> 1000" : "< 1000";
        }
    </script>

---

The following code snippet calculates data area "Sales" fields by multiplying `data.quantity` with `data.price`:

---

##### jQuery

    <!--JavaScript-->
    const pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // ...
        fields: [
            {
                caption: 'Sales',
                dataType: 'number',
                summaryType: 'sum',
                format: 'currency',
                area: 'data',
                selector(data) {
                    return data.quantity * data.price;
                }
            }
        ]
    })

##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource = new PivotGridDataSource({
            // ...
            fields: [
                {
                    caption: 'Sales',
                    dataType: 'number',
                    summaryType: 'sum',
                    format: 'currency',
                    area: 'data',
                    selector(data) {
                        return data.quantity * data.price;
                    }
                }
            ]
        })
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid 
            :data-source="pivotGridDataSource"
        ... >
            // ...
        </DxPivotGrid>
    </template>

    <script setup>
    import DxPivotGrid from 'devextreme-vue/pivot-grid';
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [
            {
                caption: 'Sales',
                dataType: 'number',
                summaryType: 'sum',
                format: 'currency',
                area: 'data',
                selector(data) {
                    return data.quantity * data.price;
                }
            }
        ]
    })
    </script>

##### React

    <!-- tab: App.js -->
    import PivotGrid from 'devextreme-react/pivot-grid';
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [
            {
                caption: 'Sales',
                dataType: 'number',
                summaryType: 'sum',
                format: 'currency',
                area: 'data',
                selector(data) {
                    return data.quantity * data.price;
                }
            }
        ]
    })

    function App () {
        return (
            <PivotGrid
                dataSource={pivotGridDataSource}
            ... >
                // ...
            </PivotGrid>
        )
    }

---

#####See Also#####
- [Data Grouping](/concepts/05%20UI%20Components/PivotGrid/050%20Grouping/020%20Data%20Grouping '/Documentation/Guide/UI_Components/PivotGrid/Grouping/#Data_Grouping')
