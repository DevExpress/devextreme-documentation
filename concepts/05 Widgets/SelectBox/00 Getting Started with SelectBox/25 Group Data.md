The **SelectBox** can display data grouped by category. To make this possible, use the [DataSource]() component. Its API allows you to [sort](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort), [filter](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter), [select](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#select), and [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) data. At its core, the **DataSource** has a [store](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/) - an object that keeps data and provides an API to access and modify it. To configure the store, use the **DataSource**'s [store]() object. Specify its [type]() as *"array"*, pass the initial data array to the [data]() field, and set the [key] field. 

To group data, specify the data field to group by in the **DataSource**'s [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) option and set the **SelectBox**'s [grouped](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#grouped) option to **true**.



---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#selectBox").dxSelectBox({
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

            var dataSource = new DevExpress.data.DataSource({
                store: data,
                type: 'array',
                key: "ID",
                group: "Category"
            });

            $("#selectBox").dxSelectBox({
                dataSource: dataSource,
                displayExpr: "Name",
                searchEnabled: "true",
                onValueChanged: function(e) {
                    if (e.previousValue !== null) {
                        console.log(e.previousValue.Name);
                    }
                    console.log(e.value.Name);
                },
                grouped: true
            });
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-select-box
        [dataSource]="dataSource"
        displayExpr="Name"
        searchEnabled="true"
        (onValueChanged)="onValueChanged($event)"
        grouped="true">
    </dx-select-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import DataSource from 'devextreme/data/data_source';
    import { AppService, Item } from './app.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
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

        onValueChanged(e){
            if (e.previousValue !== null) {
                console.log(e.previousValue.Name);
            }
            console.log(e.value.Name);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSelectBox
            :data-source="dataSource"
            display-expr="Name"
            :search-enabled="true"
            @value-changed="onValueChange"
            :grouped="true"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import { DxSelectBox } from 'devextreme-vue';
    import DataSource from 'devextreme/data/data_source';
    import { data } from './data';

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
        methods: {
            onValueChange(e){
                if (e.previousValue) { 
                    console.log(e.previousValue.Name); 
                }
                console.log(e.value.Name);
            }
        },
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import { SelectBox } from 'devextreme-react/select-box';
    import DataSource from 'devextreme/data/data_source';
    import { data } from './data';

    const dataSource = new DataSource({
        store: {
            data: data,
            type: 'array',
            key: 'ID'
        },
        group: "Category"
    })

    class App extends React.Component {
        onValueChanged(e) {
            if (e.previousValue) { 
                console.log(e.previousValue.Name); 
            }
            console.log(e.value.Name);
        }

        render() {
            return (
                <SelectBox
                    dataSource={dataSource}
                    displayExpr="Name"
                    searchEnabled={true}
                    onValueChanged={this.onValueChanged}
                    grouped={true}
                />

            );        
        }

    }

    export default App;
    
---

If your data is already grouped, ensure each group has the **key** and **items** fields as shown in [this article](/Documentation/Guide/Widgets/SelectBox/Grouping/In_the_Data_Source/). If the fields are named differently, implement the **DataSource**'s [map]() function to create **key** + **items** field mappings.

Run the code and ensure the widget's data is grouped.

You have configured basic **SelectBox** features. To take a more detailed look at this widget, explore the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/Overview)
* [API Reference](/Documentation/ApiReference/UI_Widgets/dxSelectBox/)