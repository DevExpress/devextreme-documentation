To bind the **SelectBox** to data, set the [dataSource](/api-reference/10%20UI%20Widgets/dxAccordion/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxAccordion/Configuration/#dataSource') and the fields that provide the widget's value ([valueExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#valueExpr')) and displayed value ([displayExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#displayExpr')). In this tutorial, the **SelectBox** is bound to a local array.

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

If you run this code and open the **SelectBox**, you will see the the populated drop-down list. Next, we will enable search.