The SelectBox can load data from different data source types. To use a local array, assign it to the [dataSource](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#dataSource) property. If array elements are objects, set the fields that supply the SelectBox's value ([valueExpr](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#valueExpr')) and displayed value ([displayExpr](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#displayExpr')). For information on other data source types, refer to the following articles:

- [Read-Only Data in JSON Format](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Read-Only_Data_in_JSON_Format/)
- [OData](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/)
- [Web API, PHP, MongoDB](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/)
- [Custom Data Sources](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const data = [{
            ID: 1,
            Name: 'Banana',
            Category: 'Fruits'
        }, {
            ID: 2,
            Name: 'Cucumber',
            Category: 'Vegetables'
        }, {
            ID: 3,
            Name: 'Apple',
            Category: 'Fruits'
        }, {
            ID: 4,
            Name: 'Tomato',
            Category: 'Vegetables'
        }, {
            ID: 5,
            Name: 'Apricot',
            Category: 'Fruits'
        }]

        $("#selectBox").dxSelectBox({
            dataSource: data,
            valueExpr: "ID",
            displayExpr: "Name"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-select-box
        [dataSource]="data"
        valueExpr="ID"
        displayExpr="Name">
    </dx-select-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { AppService, Item } from './app.service';

    // ...
    export class AppComponent {
        data: Item[];

        constructor(service: AppService) {
            this.data = service.getItems();
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class Item {
        ID: number;
        Name: string;
        Category: string;
    }
    
    const items: Item[] = [{
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

    @Injectable()
    export class AppService {
        getItems(): Item[] {
            return items;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSelectBox
            :data-source="data"
            value-expr="ID"
            display-expr="Name"
        />
    </template>

    <script>
    // ...
    import { data } from './data';

    export default {
        components: {
            DxSelectBox
        },
        data() {
            return {
                data
            }
        }
    }
    </script>

    <!-- tab: data.js -->
    export const data = [{
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
    }];

##### React

    <!-- tab: App.js -->
    // ...
    import { data } from './data';

    class App extends React.Component {
        render() {
            return (
                <SelectBox
                    dataSource={data}
                    valueExpr="ID"
                    displayExpr="Name"
                />
            );        
        }

    }

    export default App;

    <!-- tab: data.js -->
    export const data = [{
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
    }];

---

If you run this code and open the SelectBox, you will see the the populated drop-down list. Next, we will enable search.

[tags] data binding