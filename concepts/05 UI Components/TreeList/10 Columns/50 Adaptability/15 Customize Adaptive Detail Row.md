Adaptive detail row contains the [Form UI component](/Documentation/ApiReference/UI_Components/dxForm/). You can implement the [onAdaptiveDetailRowPreparing](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onAdaptiveDetailRowPreparing') handler to customize it. The following code marks the form item whose data field is *"OrderID"* as required:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            onAdaptiveDetailRowPreparing: function (e) {
                for (let formItem of e.formOptions.items) {
                    if (formItem.dataField == "OrderID") {
                        formItem.isRequired = true;
                    }
                }
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onAdaptiveDetailRowPreparing (e) {
            for (let formItem of e.formOptions.items) {
                if (formItem.dataField == "OrderID") {
                    formItem.isRequired = true;
                }
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ...
        (onAdaptiveDetailRowPreparing)="onAdaptiveDetailRowPreparing($event)">
    </dx-tree-list>
    
---