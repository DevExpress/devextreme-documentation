If you want to extend the functionality of a JavaScript array, place it into an [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'). It provides an interface for loading and editing data, and allows you to handle data-related events.

---

#####jQuery

    <!--JavaScript-->$(function() {
        $("#gridContainer").dxDataGrid({
            dataSource: new DevExpress.data.ArrayStore({
                data: books,
                onLoaded: function () {
                    // Event handling commands go here
                }
            })
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    import ArrayStore from "devextreme/data/array_store";
    // ...
    export class AppComponent {
        books = [ /* ... */ ];
        bookStore = new ArrayStore({
            data: this.books,
            onLoaded: function () {
                // Event handling commands go here
            }
        });
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML--><dx-data-grid
        [dataSource]="bookStore">
    </dx-data-grid>

---

Data kept in the **ArrayStore** can be processed in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').  For example, the **DataSource** can sort data.

---

#####jQuery

    <!--JavaScript-->
    var books = [{ 
        author: 'D. Adams', 
        title: "The Hitchhiker's Guide to the Galaxy", 
        year: 1979, 
        genre: 'Comedy, sci-fi' 
    }, 
        // ...
    ];
    
    $(function() {
        $("#gridContainer").dxDataGrid({
            dataSource: new DevExpress.data.DataSource({
                store: books,
                sort: { getter: "title", desc: true }
            })
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        books = [ /* ... */ ];
        bookDataSource = new DataSource({
            store: this.books,
            sort: { getter: "fullName", desc: true }
        });
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML--><dx-data-grid
        [dataSource]="bookDataSource">
    </dx-data-grid>

---

[note]Even if you have [passed a JavaScript array](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding/10%20Simple%20Array/10%20Array%20Only.md '/Documentation/Guide/Widgets/DataGrid/Data_Binding/Simple_Array/Array_Only/') to the **dataSource** option, the **DataGrid** automatically places it into the **ArrayStore** wrapped in the **DataSource** that you can get using the [getDataSource()](/api-reference/10%20UI%20Widgets/DataHelperMixin/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getDataSource') method.

#####See Also#####
- [Data Layer - What Are Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Creating_DataSource_What_Are_Stores)
- [Data Layer - DataSource Examples | In-memory Data](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/0%20In-memory%20Data.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#In-memory_Data')

[tags]dataGrid, data grid, data binding, provide data, ArrayStore, DataSource, process data