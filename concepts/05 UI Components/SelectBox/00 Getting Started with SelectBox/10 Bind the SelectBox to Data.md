#include tutorials-editors-data-binding 

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

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().SelectBox()
        .DataSource(d => d
            .Mvc().Controller("SelectBoxData")
            .LoadAction("Get")
            .Key("ID")
        )
        .ValueExpr("ID")
        .DisplayExpr("Name")
    )

    <!-- tab: SelectBoxDataController.cs -->
    using ASP_NET_Core.Models;
    using DevExtreme.AspNet.Data;
    using DevExtreme.AspNet.Mvc;
    using Microsoft.AspNetCore.Mvc;

    namespace ASP_NET_Core.Controllers;
    
    public class SelectBoxDataController : Controller {
        
        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SelectBoxData.SelectBoxItems, loadOptions);
        }

    }

    <!-- tab: SelectBoxItem.cs -->
    namespace ASP_NET_Core.Models;
    public class SelectBoxItem {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
    }

    <!-- tab: SelectBoxData.cs -->
    namespace ASP_NET_Core.Models;
    static class SelectBoxData {
        public static List<SelectBoxItem> SelectBoxItems = [
            new SelectBoxItem {
                ID = 1,
                Name = "Banana",
                Category = "Fruits",
            },
            new SelectBoxItem {
                ID = 2,
                Name = "Cucumber",
                Category = "Vegetables",
            },
            new SelectBoxItem {
                ID = 3,
                Name = "Apple",
                Category = "Fruits",
            },
            new SelectBoxItem {
                ID = 4,
                Name = "Tomato",
                Category = "Vegetables",
            },
            new SelectBoxItem {
                ID = 5,
                Name = "Apricot",
                Category = "Fruits",
            },
        ];
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-select-box
        [dataSource]="data"
        valueExpr="ID"
        displayExpr="Name"
    ></dx-select-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
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

    <script setup lang="ts">
    import { DxSelectBox } from 'devextreme-vue/select-box';
    import { data } from './data';

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

    <!-- tab: App.tsx -->
    import { SelectBox } from 'devextreme-react/select-box';
    import { data } from './data';

    export default function App() {
        return (
            <SelectBox
                dataSource={data}
                valueExpr="ID"
                displayExpr="Name"
            />
        ); 
    }

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