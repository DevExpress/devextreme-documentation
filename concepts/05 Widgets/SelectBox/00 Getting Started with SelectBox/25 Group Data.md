The **SelectBox** can display data grouped by category. To implement this, we will use the data from the previous steps with the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') component. Its API allows you to sort, filter, select, and group data. At its core, the **DataSource** has a [store](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores') - an object that keeps data and provides an API to access and modify it. To configure the store, use the **DataSource**'s [store](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/store '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/') object. Specify its [type](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/store/type.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/#type') as *"array"*, pass the initial data array to the [data](/api-reference/30%20Data%20Layer/ArrayStore/1%20Configuration/data.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#data') field, and set the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') field. 

To group data, specify the data field to group by in the **DataSource**'s [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') option and set the **SelectBox**'s [grouped](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/grouped.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#grouped') option to **true**.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const data = [{
            ID: 1,
            Name: 'Banana',
            Category: 'Fruits',
        }, {
            ID: 2,
            Name: 'Cucumber',
            Category: 'Vegetables',
        }, {
            ID: 3,
            Name: 'Apple',
            Category: 'Fruits',
        }, {
            ID: 4,
            Name: 'Tomato',
            Category: 'Vegetables',
        }, {
            ID: 5,
            Name: 'Apricot',
            Category: 'Fruits',
        }]

        const dataSource = new DevExpress.data.DataSource({
            store: data,
            type: 'array',
            key: "ID",
            group: "Category"
        });

        $("#selectBox").dxSelectBox({
            // ...
             grouped: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-select-box ...
        [grouped]="true">
    </dx-select-box>

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
        <DxSelectBox ...
            :grouped="true"
        />
    </template>

    <script>
    // ...
    import DataSource from 'devextreme/data/data_source';

    export default {
        components: {
            DxSelectBox
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

    class App extends React.Component {
        // ...

        render() {
            return (
                <SelectBox ...
                    grouped={true}
                />
            );        
        }

    }

    export default App;
    
---

If your data is already grouped, ensure each group has the **key** and **items** fields as shown in [this article](/concepts/05%20Widgets/SelectBox/07%20Grouping/01%20In%20the%20Data%20Source.md '/Documentation/Guide/Widgets/SelectBox/Grouping/In_the_Data_Source/'). If the fields are named differently, implement the **DataSource**'s [map](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/map.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map') function to create **key** + **items** field mappings.

Run the code and ensure the widget's data is grouped.

You have configured basic **SelectBox** features. To take a more detailed look at this widget, explore the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/Overview)
* [API Reference](/api-reference/10%20UI%20Widgets/dxSelectBox '/Documentation/ApiReference/UI_Widgets/dxSelectBox/')