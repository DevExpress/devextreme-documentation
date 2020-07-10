To bind the **SelectBox** to data, set the [dataSource](/Documentation/ApiReference/UI_Widgets/dxAccordion/Configuration/#dataSource) and the fields that provide the widget's value ([valueExpr](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#valueExpr)) and displayed value ([displayExpr](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#displayExpr)). In this tutorial, the **SelectBox** is bound to a local array.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#selectBox").dxSelectBox({
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
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/20.1.4/css/dx.common.css">
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/20.1.4/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/20.1.4/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body>
            <div id="selectBox"></div>
        </body>
    </html>


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

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
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