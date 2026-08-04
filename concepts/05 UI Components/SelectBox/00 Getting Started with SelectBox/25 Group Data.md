#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/SelectBox/Grouping/In_the_Data_Source/", name: "Grouping in the Data Source" }

SelectBox can display grouped data. To implement this capability using a flat data source, follow these steps:

1. Bind the component to a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') instance
2. Specify the [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') field in the component **DataSource**
3. Enable the [grouped](/api-reference/10%20UI%20Components/dxDropDownList/1%20Configuration/grouped.md '/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#grouped') property

---
##### jQuery

    <!-- tab: index.js -->
    const dataSource = new DevExpress.data.DataSource({
        store: {
            data,
            type: 'array',
            key: 'ID',
        },
        group: 'Category',
    });

    $("#selectBox").dxSelectBox({
        dataSource,
        grouped: true,
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().SelectBox()
        .DataSource(d => d
            .Mvc().Controller("SelectBoxData")
            .LoadAction("Get")
            .Key("ID")
        )
        .DataSourceOptions(o => o.Group("Category"))
        .Grouped(true)
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-select-box
        [dataSource]="dataSource"
        [grouped]="true"
    ></dx-select-box>

    <!-- tab: app.component.ts -->
    import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
    import { DataSource } from 'devextreme-angular/common/data';

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
                    key: 'ID',
                },
                group: 'Category',
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSelectBox
            :data-source="dataSource"
            :grouped="true"
        />
    </template>

    <script setup lang="ts">
    import { DxSelectBox } from 'devextreme-vue/select-box';
    import { DataSource } from 'devextreme-vue/common/data';

    const dataSource = new DataSource({
        store: {
            data,
            type: 'array',
            key: 'ID',
        },
        group: 'Category',
    });
    </script>

##### React

    <!-- tab: App.tsx -->
    import { SelectBox } from 'devextreme-react/select-box';
    import { DataSource } from 'devextreme-react/common/data';

    const dataSource = new DataSource({
        store: {
            data: data,
            type: 'array',
            key: 'ID'
        },
        group: 'Category'
    })

    export default function App() {
        return (
            <SelectBox
                dataSource={dataSource}
                grouped={true}
            />
        );   
    }
    
---

SelectBox can also display grouped data using nested data sources with only one nesting level. Each object in a nested data source contains a **key** field and an **items** array. For more information, refer to the following guide: [SelectBox - Grouping in the Data Source](/Documentation/Guide/UI_Components/SelectBox/Grouping/In_the_Data_Source/).
