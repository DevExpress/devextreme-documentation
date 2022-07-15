You can group data items in the Autocomplete drop-down list.

If the data source contains ungrouped data items, use the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/)'s [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) property to specify the data field to group by.

The component can also work with initially grouped data items. In this case, the data array should contain objects with the `key` and `items` fields:

    let dataSource = [{
        key: "Group 1", // Group caption 
        items: [ // Items in Group 1
            { /* ... */ },
            { /* ... */ }
        ]
    }, {
        key: "Group 2",
        items: [
            { /* ... */ },
            { /* ... */ }
        ]
    }];

If data objects are grouped but use other field names, implement the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/)'s [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group)'s [map](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map) function to create `key` and `items` field mappings.

[note]Only one-level grouping is supported.

Regardless of the data source structure, enable the [grouped](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#grouped) property.

The following code groups the data source by `Assignee` field and supplies it to the component:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const dataSource = new DevExpress.data.DataSource({
            store: {
                type: 'array',
                data: employeesTasks,
                key: 'ID',
            },
            group: 'Assignee',
        });

        $("#autocomplete").dxAutocomplete({
            dataSource,
            valueExpr: "Subject",
            grouped: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-autocomplete
        [dataSource]="dataSource"
        valueExpr="Subject"
        [grouped]="true"
    >
    </dx-autocomplete>

    <!-- tab: app.component.ts -->
    // ...
    import DataSource from 'devextreme/data/data_source';
    import ArrayStore from 'devextreme/data/array_store';

    // ...
    export class AppComponent {
        employeesTasks: Task[];
        dataSource: any;

        constructor(service: Service) {
            this.employeesTasks = service.getTasks();
            this.dataSource = new DataSource({
                store: new ArrayStore({
                    data: this.employeesTasks,
                    key: "ID"
                }),
                group: "Assignee"
            });
            
        }
    }


##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxAutocomplete 
            :data-source="dataSource"
            value-expr="Subject"
            :grouped="true"
        >
        </DxAutocomplete>
    </template>

    <script>
    // ...
    import DataSource from 'devextreme/data/data_source';

    export default {
        components: {
            DxAutocomplete
        },
        data() {
            return {
                dataSource: new DataSource({
                    store: {
                        type: 'array',
                        data: employeesTasks,
                        key: 'ID',
                    },
                    group: 'Assignee',
                }),
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    function App() {
        const dataSource = new DataSource({
            store: {
                type: 'array',
                data: employeesTasks,
                key: 'ID',
            },
            group: 'Assignee',
        });

        return (
            <Autocomplete
                dataSource={dataSource}
                valueExpr="Subject"
                grouped={true}
            >
            </Autocomplete>
        );
    }

    export default App;

---