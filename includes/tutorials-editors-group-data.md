The {WidgetName} can display data grouped by category. To implement this, we will use the data from the previous steps with the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') component. Its API allows you to sort, filter, select, and group data. At its core, the **DataSource** has a [store](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores') - an object that keeps data and provides an API to access and modify it. To configure the store, use the **DataSource**'s [store](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/store '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/') object. Specify its [type](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/store/type.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/#type') as *"array"*, pass the initial data array to the [data](/api-reference/30%20Data%20Layer/ArrayStore/1%20Configuration/data.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#data') field, and set the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') field. 

To group data, specify the data field to group by in the **DataSource**'s [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') property and set the {WidgetName}'s [grouped](/api-reference/10%20UI%20Components/dxDropDownList/1%20Configuration/grouped.md '/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/#grouped') property to **true**.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const dataSource = new DevExpress.data.DataSource({
            store: data,
            type: "array",
            key: "ID",
            group: "Category"
        });

        $("#{widgetName}").dx{WidgetName}({
            // ...
            grouped: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        [grouped]="true">
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    // ...
    export class AppComponent {
        data: Item[];
        dataSource: DataSource;

        constructor(service: AppService) {
            this.data = service.getItems();
            this.dataSource = new DataSource({
                store: {
                    data: this.data,
                    type: 'array',
                    key: 'ID'
                },
                group: "Category"
            });
        }
        // ...
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            :grouped="true"
        />
    </template>

    <script>
    // ...
    import DataSource from 'devextreme/data/data_source';

    export default {
        components: {
            Dx{WidgetName}
        },
        data() {
            return {
                dataSource: new DataSource({
                    store: {
                        data: data,
                        type: 'array',
                        key: 'ID',
                    },
                    group: "Category"
                })
            }
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    const dataSource = new DataSource({
        store: {
            data: data,
            type: 'array',
            key: 'ID'
        },
        group: "Category"
    })

    function App() {
        // ...
        return (
            <{WidgetName} ...
                grouped={true}
            />
        );   
    }

    export default App;
    
---

If your data is already grouped, ensure each group has the **key** and **items** fields as shown in the following article: [Grouping in the Data Source](/Documentation/Guide/UI_Components/{WidgetName}/Grouping/In_the_Data_Source/). If the fields are named differently, implement the **DataSource**'s [map](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map) function to create **key** + **items** field mappings.
