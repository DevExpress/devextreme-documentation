The TreeList UI component raises the [selectionChanged](/api-reference/10%20UI%20Components/GridBase/4%20Events/selectionChanged.md '/Documentation/ApiReference/UI_Components/dxTreeList/Events/#selectionChanged') event when a row is selected or when the selection is cancelled. If the function that handles this event is going to remain unchanged, assign it to the [onSelectionChanged](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onSelectionChanged') property when you configure the UI component.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            onSelectionChanged: function(e) { // Handler of the "selectionChanged" event
                const currentSelectedRowKeys = e.currentSelectedRowKeys;
                const currentDeselectedRowKeys = e.currentDeselectedRowKeys;
                const allSelectedRowKeys = e.selectedRowKeys;
                const allSelectedRowsData = e.selectedRowsData;
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-list ...
        (onSelectionChanged)="onSelectionChanged($event)">
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onSelectionChanged (e) { // Handler of the "selectionChanged" event
            const currentSelectedRowKeys = e.currentSelectedRowKeys;
            const currentDeselectedRowKeys = e.currentDeselectedRowKeys;
            const allSelectedRowKeys = e.selectedRowKeys;
            const allSelectedRowsData = e.selectedRowsData;
            // ...
        }
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
        <DxTreeList ...
            @selection-changed="onSelectionChanged">
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList
        },
        methods: {
            onSelectionChanged(e) {
                const currentSelectedRowKeys = e.currentSelectedRowKeys;
                const currentDeselectedRowKeys = e.currentDeselectedRowKeys;
                const allSelectedRowKeys = e.selectedRowKeys;
                const allSelectedRowsData = e.selectedRowsData;
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList from 'devextreme-react/tree-list';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.onSelectionChanged = this.onSelectionChanged.bind(this);
        }
        
        onSelectionChanged(e) {
            const currentSelectedRowKeys = e.currentSelectedRowKeys;
            const currentDeselectedRowKeys = e.currentDeselectedRowKeys;
            const allSelectedRowKeys = e.selectedRowKeys;
            const allSelectedRowsData = e.selectedRowsData;
            // ...
        }

        render() {
            return (
                <TreeList ...
                    onSelectionChanged={this.onSelectionChanged}>
                </TreeList>
            );
        }
    }
    export default App;
    
---

If you are going to change the event handler at runtime, or if you need to attach several handlers to the event, subscribe to it using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var selectionChangedEventHandler1 = function(e) {
        // First handler of the "selectionChanged" event
    };

    var selectionChangedEventHandler2 = function(e) {
        // Second handler of the "selectionChanged" event
    };

    $("#treeListContainer").dxTreeList("instance")
        .on("selectionChanged", selectionChangedEventHandler1)
        .on("selectionChanged", selectionChangedEventHandler2);

#####See Also#####
#include common-link-handleevents
