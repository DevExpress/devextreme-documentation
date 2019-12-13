Enclose the **dataSource** option in square brackets to bind it to an array using one-way binding. Now, whenever an item is added or removed from the array, the **Funnel** will be updated accordingly.

    <!--HTML--><dx-funnel
        [dataSource]="fruits"
        argumentField="fruit"
        valueField="count">
    </dx-funnel>
    
    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
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
            DxFunnelModule
        ],
        // ...
    })