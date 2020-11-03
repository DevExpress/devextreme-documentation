---
id: PivotGridDataSourceField.sortingMethod
type: function(a, b)
default: undefined
---
---
##### shortDescription
Specifies a custom comparison function that sorts the field's values in the [headers](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers').

##### param(a): Object
A field value to be compared.

##### field(a.children): Array<any>
The field value's children; available only when the corresponding header item is expanded.

##### field(a.value): String | Number
The field value.

##### param(b): Object
A field value to be compared.

##### field(b.children): Array<any>
The field value's children; available only when the corresponding header item is expanded.

##### field(b.value): String | Number
The field value.

##### return: Number
Specifies whether *a* goes before *b*.

---
This function accepts two field values and should return a number indicating their sort order:

- *Less than zero*     
*a* goes before *b*.
- *Zero*   
*a* and *b* remain unchanged relative to each other.
- *Greater than zero*   
*a* goes after *b*.

Inside this function, you can access the [field's configuration](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/') using the **this** keyword:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                // ...
                sortingMethod: function (a, b) {
                    var fieldSortOrder = this.sortOrder;
                    // ...
                }
            },
            // ...
            ]
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
                    // ...
                    sortingMethod: function (a, b) {
                        let field = this as any;
                        let fieldSortOrder = field.sortOrder;
                        // ...
                    }
                },
                // ...
                ]
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
            // ...
            sortingMethod: function (a, b) {
                let field = this as any;
                let fieldSortOrder = field.sortOrder;
                // ...
            }
        },
        // ...
        ]
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
            // ...
            sortingMethod: function (a, b) {
                let field = this as any;
                let fieldSortOrder = field.sortOrder;
                // ...
            }
        },
        // ...
        ]
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
                    // ...
                    .SortingMethod("sortingMethod");
            })
        )
    )

    <script type="text/javascript">
        function sortingMethod (a, b) {
            var fieldSortOrder = this.sortOrder;
            // ...
        }
    </script>

---

#include uiwidgets-ref-functioncontext with { 
    value: "field's configuration"
}

#####See Also#####
- **fields[]**.[sortOrder](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/sortOrder.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortOrder')