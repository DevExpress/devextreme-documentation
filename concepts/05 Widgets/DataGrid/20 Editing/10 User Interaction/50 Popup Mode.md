The popup mode is the [form mode](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/40%20Form%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Editing/#User_Interaction/Form_Mode') with the form placed in a popup window.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Editing Popup Mode](/images/DataGrid/editing/popup_mode.png)

Use the **editing**.[popup](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/popup.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#popup') object to customize the popup window. This object can contain the [Popup widget's fields](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/'). However, you should refer to the **popup** object's description for information on restrictions that apply.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                allowUpdating: true,
                mode: "popup",
                form: {
                    labelLocation: "top"
                },
                popup: {
                    showTitle: true,
                    title: "Row in the editing state"
                }
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-editing
            [allowUpdating]="true"
            mode="popup">
            <dxo-form labelLocation="top"></dxo-form>
            <dxo-popup [showTitle]="true" title="Row in the editing state"></dxo-popup>
        </dxo-editing>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

Since the popup and form modes are very similar, you can use the same **columns**.[formItem](/api-reference/_hidden/GridBaseColumn/formItem.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#formItem') and **editing**.[form](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/form.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#form') options to customize items and layout in both modes. See the [Form Mode](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/40%20Form%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Editing/#User_Interaction/Form_Mode') topic for more details on form customization.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/PopupEditing/"
}

#####See Also#####
- [Data Validation](/concepts/05%20Widgets/DataGrid/20%20Editing/50%20Data%20Validation.md '/Documentation/Guide/Widgets/DataGrid/Editing/#Data_Validation')