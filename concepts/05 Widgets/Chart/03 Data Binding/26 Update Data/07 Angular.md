[note]Use the technique described here only if your data source is a [JavaScript array](/concepts/05%20Widgets/Chart/03%20Data%20Binding/05%20Simple%20Array/05%20Array%20Only.md '/Documentation/Guide/Widgets/Chart/Data_Binding/Simple_Array/Array_Only/'). Otherwise, update **Chart** data [through the DataSource instance](/concepts/05%20Widgets/Chart/03%20Data%20Binding/26%20Update%20Data/01%20DevExtreme%20DataSource.md '/Documentation/Guide/Widgets/Chart/Data_Binding/Update_Data/#DevExtreme_DataSource').

Enclose the **dataSource** option in square brackets to bind it to an array using one-way binding. Now, whenever an item is added or removed from the array, the **Chart** will be updated accordingly.

    <!--HTML--><dx-chart [dataSource]="fruits"></dx-chart>
    
    <!--TypeScript-->
    import { DxChartModule } from 'devextreme-angular';
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
            DxChartModule
        ],
        // ...
    })

#####See Also#####
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')
- [DevExtreme Angular on GitHub](https://github.com/devexpress/DevExtreme-angular)