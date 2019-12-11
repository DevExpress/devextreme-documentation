To dispose of a DevExtreme widget, free up the allocated resources by calling the **dispose()** method. Then, remove the widget's associated DOM node:

    <!--HTML-->
    <dx-data-grid #dataGridVar id="myDataGrid"></dx-data-grid>

<!---->

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild("dataGridVar") dataGrid: DxDataGridComponent;

        removeDataGrid (e) {
            this.dataGrid.instance.dispose();
            document.getElementById("myDataGrid").remove();
        }
    }

#####See Also#####
- [DevExtreme-Angular on GitHub](https://github.com/DevExpress/devextreme-angular)