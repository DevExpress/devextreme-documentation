The **TreeView** raises the following selection-related events: 

- [itemSelectionChanged](/api-reference/10%20UI%20Widgets/dxTreeView/4%20Events/itemSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemSelectionChanged')            
Raised after a node's selection state changes.

- [selectionChanged](/api-reference/10%20UI%20Widgets/dxTreeView/4%20Events/selectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#selectionChanged')            
Raised after the tree view's selection state changes.

- [selectAllValueChanged](/api-reference/10%20UI%20Widgets/dxTreeView/4%20Events/selectAllValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#selectAllValueChanged')          
Raised after the "Select All" check box's state changes.

You can handle these events with functions. Assign the handling functions to the [onItemSelectionChanged](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/onItemSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemSelectionChanged') and [onSelectAllValueChanged](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/onSelectAllValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onSelectAllValueChanged') options when you configure the widget if they are going to remain unchanged at runtime.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            onItemSelectionChanged: function (e) {
                // Handler of the "itemSelectionChanged" event
            },
            onSelectionChanged: function (e) {
                // Handler of the "selectionChanged" event
            },            
            onSelectAllValueChanged: function (e) {
                // Handler of the "selectAllValueChanged" event
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-view ...
        (onItemSelectionChanged)="onItemSelectionChanged($event)"
        (onSelectionChanged)="onSelectionChanged($event)"
        (onSelectAllValueChanged)="onSelectAllValueChanged($event)>
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onItemSelectionChanged (e) {
            // Handler of the "itemSelectionChanged" event
        }
        onSelectionChanged (e) {
            // Handler of the "selectionChanged" event
        }        
        onSelectAllValueChanged (e) {
            // Handler of the "selectAllValueChanged" event
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })
    
##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeView
            :data-source="data"
            show-check-boxes-mode="normal"
            @item-selection-changed="onItemSelectionChanged"
            @selection-changed="onSelectionChanged"
            @select-all-value-changed="onSelectAllValueChanged" 
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    
    import { DxTreeView } from 'devextreme-vue/tree-view';

    const data = [ ... ];

    export default {
        components: {
            DxTreeView
        },
        data() {
            return {
                data
            };
        },
        methods: {
            onItemSelectionChanged(e) {
                // Handler of the "itemSelectionChanged" event
            }
            onSelectionChanged(e) {
                // Handler of the "selectionChanged" event
            }
            onSelectAllValueChanged(e) {
                // Handler of the "selectAllValueChanged" event                    
            }
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import TreeView from 'devextreme-react/tree-view';

    const data = [ ... ];

    class App extends React.Component {
        render() {
            return (
                <TreeView
                    dataSource={data} 
                    showCheckBoxesMode="normal"
                    onItemSelectionChanged={this.onItemSelectionChanged}
                    onSelectionChanged={this.onSelectionChanged} 
                    onSelectAllValueChanged={this.onSelectAllValueChanged}/>
            );
        }

        onItemSelectionChanged(e) {
            // Handler of the "itemSelectionChanged" event
        }

        onSelectionChanged(e) {
            // Handler of the "selectionChanged" event
        }

        onSelectAllValueChanged(e) {
            // Handler of the "selectAllValueChanged" event
        }
    }

    export default App;

---

If you are going to change the event handler at runtime, or if you need to attach several handlers to the event, subscribe to it using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var itemSelectionChangedHandler1 = function (e) {
        // First handler of the "itemSelectionChanged" event
    };

    var itemSelectionChangedHandler2 = function (e) {
        // Second handler of the "itemSelectionChanged" event
    };

    $("#treeViewContainer").dxTreeView("instance")
        .on("itemSelectionChanged", itemSelectionChangedHandler1)
        .on("itemSelectionChanged", itemSelectionChangedHandler2);

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_View/ItemSelectionAndCustomization/"
}

#####See Also#####
- [TreeView - Access a Node](/concepts/05%20Widgets/TreeView/10%20Access%20a%20Node '/Documentation/Guide/Widgets/TreeView/Access_a_Node')
- [TreeView - Search Nodes](/concepts/05%20Widgets/TreeView/15%20Search%20Nodes.md '/Documentation/Guide/Widgets/TreeView/Search_Nodes/')
- [TreeView - Expand and Collapse Nodes](/concepts/05%20Widgets/TreeView/25%20Select%20Nodes '/Documentation/Guide/Widgets/TreeView/Select_Nodes')
- [TreeView API Reference](/api-reference/10%20UI%20Widgets/dxTreeView '/Documentation/ApiReference/UI_Widgets/dxTreeView/')
