#include tutorials-editors-data-binding

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#tagBox").dxTagBox({
            dataSource: data,
            valueExpr: "ID",
            displayExpr: "Name"
        });
    });

    <!-- tab: data.js -->
    const data = [{
        "ID": 1,
        "Name": "HD Video Player",
        "Category": "Video Players"
    }, {
        "ID": 2,
        "Name": "SuperHD Player",
        "Category": "Video Players"
    }, {
        "ID": 3,
        "Name": "SuperPlasma 50",
        "Category": "Televisions"
    }, {
        "ID": 4,
        "Name": "SuperLED 50",
        "Category": "Televisions"
    }, {
        "ID": 7,
        "Name": "SuperLCD 42",
        "Category": "Televisions"
    }, {
        "ID": 8,
        "Name": "SuperPlasma 65",
        "Category": "Televisions"
    }, {
        "ID": 10,
        "Name": "DesktopLED 21",
        "Category": "Monitors"
    }, {
        "ID": 11,
        "Name": "DesktopLED 19",
        "Category": "Monitors"
    }, {
        "ID": 12,
        "Name": "DesktopLCD 21",
        "Category": "Monitors"
    }, {
        "ID": 13,
        "Name": "DesktopLCD 19",
        "Category": "Monitors"
    }, {
        "ID": 14,
        "Name": "Projector Plus",
        "Category": "Projectors"
    }, {
        "ID": 15,
        "Name": "Projector PlusHD",
        "Category": "Projectors"
    }, {
        "ID": 16,
        "Name": "Projector PlusHT",
        "Category": "Projectors"
    }, {
        "ID": 17,
        "Name": "ExcelRemote IR",
        "Category": "Automation"
    }, {
        "ID": 18,
        "Name": "ExcelRemote BT",
        "Category": "Automation"
    }];


##### Angular

    <!-- tab: app.component.html -->
    <dx-tag-box
        [dataSource]="data"
        valueExpr="ID"
        displayExpr="Name">
    </dx-tag-box>

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

    const data: Item[] = [{
        "ID": 1,
        "Name": "HD Video Player",
        "Category": "Video Players"
    }, {
        "ID": 2,
        "Name": "SuperHD Player",
        "Category": "Video Players"
    }, {
        "ID": 3,
        "Name": "SuperPlasma 50",
        "Category": "Televisions"
    }, {
        "ID": 4,
        "Name": "SuperLED 50",
        "Category": "Televisions"
    }, {
        "ID": 7,
        "Name": "SuperLCD 42",
        "Category": "Televisions"
    }, {
        "ID": 8,
        "Name": "SuperPlasma 65",
        "Category": "Televisions"
    }, {
        "ID": 10,
        "Name": "DesktopLED 21",
        "Category": "Monitors"
    }, {
        "ID": 11,
        "Name": "DesktopLED 19",
        "Category": "Monitors"
    }, {
        "ID": 12,
        "Name": "DesktopLCD 21",
        "Category": "Monitors"
    }, {
        "ID": 13,
        "Name": "DesktopLCD 19",
        "Category": "Monitors"
    }, {
        "ID": 14,
        "Name": "Projector Plus",
        "Category": "Projectors"
    }, {
        "ID": 15,
        "Name": "Projector PlusHD",
        "Category": "Projectors"
    }, {
        "ID": 16,
        "Name": "Projector PlusHT",
        "Category": "Projectors"
    }, {
        "ID": 17,
        "Name": "ExcelRemote IR",
        "Category": "Automation"
    }, {
        "ID": 18,
        "Name": "ExcelRemote BT",
        "Category": "Automation"
    }];

    @Injectable({
        providedIn: 'root'
    })

    export class AppService {
        getItems(): Item[] {
            return data;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTagBox
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
            DxTagBox
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
        "ID": 1,
        "Name": "HD Video Player",
        "Category": "Video Players"
    }, {
        "ID": 2,
        "Name": "SuperHD Player",
        "Category": "Video Players"
    }, {
        "ID": 3,
        "Name": "SuperPlasma 50",
        "Category": "Televisions"
    }, {
        "ID": 4,
        "Name": "SuperLED 50",
        "Category": "Televisions"
    }, {
        "ID": 7,
        "Name": "SuperLCD 42",
        "Category": "Televisions"
    }, {
        "ID": 8,
        "Name": "SuperPlasma 65",
        "Category": "Televisions"
    }, {
        "ID": 10,
        "Name": "DesktopLED 21",
        "Category": "Monitors"
    }, {
        "ID": 11,
        "Name": "DesktopLED 19",
        "Category": "Monitors"
    }, {
        "ID": 12,
        "Name": "DesktopLCD 21",
        "Category": "Monitors"
    }, {
        "ID": 13,
        "Name": "DesktopLCD 19",
        "Category": "Monitors"
    }, {
        "ID": 14,
        "Name": "Projector Plus",
        "Category": "Projectors"
    }, {
        "ID": 15,
        "Name": "Projector PlusHD",
        "Category": "Projectors"
    }, {
        "ID": 16,
        "Name": "Projector PlusHT",
        "Category": "Projectors"
    }, {
        "ID": 17,
        "Name": "ExcelRemote IR",
        "Category": "Automation"
    }, {
        "ID": 18,
        "Name": "ExcelRemote BT",
        "Category": "Automation"
    }];

##### React

    <!-- tab: App.js -->
    // ...
    import { data } from './data';

    function App() {
        return (
            <TagBox
                dataSource={data}
                valueExpr="ID"
                displayExpr="Name"
            />
        );
    }

    export default App;

    <!-- tab: data.js -->
    export const data = [{
        "ID": 1,
        "Name": "HD Video Player",
        "Category": "Video Players"
    }, {
        "ID": 2,
        "Name": "SuperHD Player",
        "Category": "Video Players"
    }, {
        "ID": 3,
        "Name": "SuperPlasma 50",
        "Category": "Televisions"
    }, {
        "ID": 4,
        "Name": "SuperLED 50",
        "Category": "Televisions"
    }, {
        "ID": 7,
        "Name": "SuperLCD 42",
        "Category": "Televisions"
    }, {
        "ID": 8,
        "Name": "SuperPlasma 65",
        "Category": "Televisions"
    }, {
        "ID": 10,
        "Name": "DesktopLED 21",
        "Category": "Monitors"
    }, {
        "ID": 11,
        "Name": "DesktopLED 19",
        "Category": "Monitors"
    }, {
        "ID": 12,
        "Name": "DesktopLCD 21",
        "Category": "Monitors"
    }, {
        "ID": 13,
        "Name": "DesktopLCD 19",
        "Category": "Monitors"
    }, {
        "ID": 14,
        "Name": "Projector Plus",
        "Category": "Projectors"
    }, {
        "ID": 15,
        "Name": "Projector PlusHD",
        "Category": "Projectors"
    }, {
        "ID": 16,
        "Name": "Projector PlusHT",
        "Category": "Projectors"
    }, {
        "ID": 17,
        "Name": "ExcelRemote IR",
        "Category": "Automation"
    }, {
        "ID": 18,
        "Name": "ExcelRemote BT",
        "Category": "Automation"
    }];

---

If you run this code and open the TagBox, you will see the the populated drop-down list. Next, we will enable search.

[tags] data binding