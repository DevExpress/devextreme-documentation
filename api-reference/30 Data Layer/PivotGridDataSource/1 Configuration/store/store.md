---
id: PivotGridDataSource.Options.store
type: Store | Store_Options | XmlaStore | XmlaStore_Options | Array<Object> | Object
---
---
##### shortDescription
Configures the **DataSource**'s underlying store.

---
This option accepts one of the following:

* **Store instance**            
An [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/'), [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'), [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/'), [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/'), or [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') instance.

* **Store configuration object**        
An **XmlaStore**, **ArrayStore**, **LocalStore**, or **ODataStore** configuration object. Make sure to set the [type](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/store/type.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/#type') option.

* **Array**         
Assigning an array to the **store** option automatically creates an **ArrayStore** in the **PivotGridDataSource**.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            store: new DevExpress.data.XmlaStore({
                // XmlaStore instance
            })
            // ===== or =====
            store: {
                type: "xmla",
                // XmlaStore configuration object
            }
        });

        $("#pivotGridContainer").dxPivotGrid({
            dataSource: pivotGridDataSource
        });
    });
    

##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    import XmlaStore from "devextreme/ui/pivot_grid/xmla_store";
    import { DxPivotGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                store: new XmlaStore({
                    // XmlaStore instance
                })
                // ===== or =====
                store: {
                    type: "xmla",
                    // XmlaStore configuration object
                }
            });
        }
    }

    @NgModule({
        imports: [
            // ...
            DxPivotGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-pivot-grid
        [dataSource]="pivotGridDataSource">
    </dx-pivot-grid>

---

See the [Use CustomStore](/concepts/05%20Widgets/PivotGrid/035%20Use%20CustomStore '/Documentation/Guide/Widgets/PivotGrid/Use_CustomStore/') topic for information on how to implement custom data access logic.