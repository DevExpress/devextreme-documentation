The popup mode is the [form mode](/concepts/05%20UI%20Components/TreeList/20%20Editing/10%20User%20Interaction/40%20Form%20Mode.md '/Documentation/Guide/UI_Components/TreeList/Editing/#User_Interaction/Form_Mode') with the form placed in a popup window.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Editing Popup Mode](/images/treelist/editing/popup_mode.png)

Use the **editing**.[popup](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/popup.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#popup') object to customize the popup window. This object can contain the [Popup UI component's fields](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/'). However, you should refer to the **popup** object's description for information on restrictions that apply.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
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
    <dx-tree-list ... >
        <dxo-editing
            [allowUpdating]="true"
            mode="popup">
            <dxo-form labelLocation="top"></dxo-form>
            <dxo-popup [showTitle]="true" title="Row in the editing state"></dxo-popup>
        </dxo-editing>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
            <DxEditing
                :allow-updating="true"
                mode="popup">
                <DxForm
                    label-location="top"
                />
                <DxPopup
                    :show-title="true"
                    title="Row in the editing state"
                />
            </DxEditing>
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxEditing,
        DxForm,
        DxPopup
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxEditing,
            DxForm,
            DxPopup
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Editing,
        Form,
        Popup
    } from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList ... >
                    <Editing
                        allowUpdating={true}
                        mode="popup">
                        <Form
                            labelLocation="top"
                        />
                        <Popup
                            showTitle={true}
                            title="Row in the editing state"
                        />
                    </Editing>
                </TreeList>
            );
        }
    }
    export default App;
    
---

Since the popup and form modes are very similar, you can use the same **columns**.[formItem](/api-reference/_hidden/GridBaseColumn/formItem.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#formItem') and **editing**.[form](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/form.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#form') properties to customize items and layout in both modes. See the [Form Mode](/concepts/05%20UI%20Components/TreeList/20%20Editing/10%20User%20Interaction/40%20Form%20Mode.md '/Documentation/Guide/UI_Components/TreeList/Editing/#User_Interaction/Form_Mode') topic for more details on form customization.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/PopupEditing/"
}

#####See Also#####
- [Data Validation](/concepts/05%20UI%20Components/TreeList/20%20Editing/50%20Data%20Validation.md '/Documentation/Guide/UI_Components/TreeList/Editing/#Data_Validation')