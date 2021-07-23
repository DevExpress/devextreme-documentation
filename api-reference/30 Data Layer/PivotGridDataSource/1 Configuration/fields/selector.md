---
id: PivotGridDataSource.Options.fields.selector
type: function()
default: undefined
---
---
##### shortDescription
Specifies a function that combines the field's values into groups for the [headers](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Headers'). Cannot be used with an [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/') or [remote operations](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/remoteOperations.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#remoteOperations').

---
This function is an alternative to the [groupInterval](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/groupInterval.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#groupInterval') property and should return a group name that corresponds to a data object. The function's parameter represents this data object. For example, the **selector** function in the following code groups birth dates by decades:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                caption: "Birth Decade",
                area: "column",
                selector: function (data) {
                    var birthDate = new Date(data.birthDate);
                    return Math.floor(birthDate.getFullYear() / 10) * 10;
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
                        return Math.floor(birthDate.getFullYear() / 10) * 10;
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
                return Math.floor(birthDate.getFullYear() / 10) * 10;
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
                return Math.floor(birthDate.getFullYear() / 10) * 10;
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

Another example: a **selector** that places values below and over 1000 into different groups:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
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

[note] The **selector** function cannot be used with [remote operations](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/remoteOperations.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#remoteOperations'). Instead, create a calculated data field on the server and [bind a pivot grid field to it](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/dataField.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField').

#include uiwidgets-ref-functioncontext with { 
    value: "field's configuration"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/SimpleArray/"
}

#####See Also#####
- [Data Grouping](/concepts/05%20UI%20Components/PivotGrid/050%20Grouping/020%20Data%20Grouping '/Documentation/Guide/UI_Components/PivotGrid/Grouping/#Data_Grouping')