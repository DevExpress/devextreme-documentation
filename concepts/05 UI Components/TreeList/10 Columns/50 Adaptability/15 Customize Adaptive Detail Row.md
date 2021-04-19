Adaptive detail rows contain the [Form](/Documentation/ApiReference/UI_Components/dxForm/) UI component. You can implement the [onAdaptiveDetailRowPreparing](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onAdaptiveDetailRowPreparing) handler to customize the Form: change its properties in the **formOptions** attribute of the function's argument. For example, the following code marks the form's *"OrderID"* data field as required:

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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ...
            :@adaptive-detail-row-preparing="onAdaptiveDetailRowPreparing">
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList
        },
        methods: {
            onAdaptiveDetailRowPreparing(e) {
                for (let formItem of e.formOptions.items) {
                    if (formItem.dataField == 'OrderID') {
                        formItem.isRequired = true;
                    }
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeList from 'devextreme-react/tree-list';

    const onAdaptiveDetailRowPreparing = (e) => {
        for (let formItem of e.formOptions.items) {
            if (formItem.dataField == 'OrderID') {
                formItem.isRequired = true;
            }
        }
    };

    export default function App() {
	    return (
            <TreeList ... 
                onAdaptiveDetailRowPreparing={onAdaptiveDetailRowPreparing}>
            </TreeList>
        );
    }
    
---
