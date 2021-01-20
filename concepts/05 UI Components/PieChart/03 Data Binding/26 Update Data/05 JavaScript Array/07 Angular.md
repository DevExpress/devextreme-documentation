Enclose the **dataSource** option in square brackets to bind it to an array using one-way binding. Now, whenever an item is added or removed from the array, the **PieChart** will be updated accordingly.

    <!--HTML--><dx-pie-chart [dataSource]="fruits"></dx-pie-chart>
    
    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruits = [
            { fruit: 'Apples', count: 10 },
            { fruit: 'Oranges', count: 12 },
            { fruit: 'Lemons', count: 15 }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })