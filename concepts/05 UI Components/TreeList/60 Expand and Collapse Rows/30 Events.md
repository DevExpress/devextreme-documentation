To execute certain commands before or after a row was expanded or collapsed, handle the [rowExpanding](/api-reference/10%20UI%20Components/GridBase/4%20Events/rowExpanding.md '/Documentation/ApiReference/UI_Components/dxTreeList/Events/#rowExpanding'), [rowExpanded](/api-reference/10%20UI%20Components/GridBase/4%20Events/rowExpanded.md '/Documentation/ApiReference/UI_Components/dxTreeList/Events/#rowExpanded'), [rowCollapsing](/api-reference/10%20UI%20Components/GridBase/4%20Events/rowCollapsing.md '/Documentation/ApiReference/UI_Components/dxTreeList/Events/#rowCollapsing') or [rowCollapsed](/api-reference/10%20UI%20Components/GridBase/4%20Events/rowCollapsed.md '/Documentation/ApiReference/UI_Components/dxTreeList/Events/#rowCollapsed') event. Assign event handling functions to the corresponding **on*EventName*** properties when you configure the UI component if these functions are going to remain unchanged. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            onRowExpanding: function (e) {
                // Handler of the "rowExpanding" event
            },
            onRowExpanded: function (e) {
                // Handler of the "rowExpanded" event
            },
            onRowCollapsing: function (e) {
                // Handler of the "rowCollapsing" event
            },
            onRowCollapsed: function (e) {
                // Handler of the "rowCollapsed" event
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-list ...
        (onRowExpanding)="onRowExpanding($event)"
        (onRowExpanded)="onRowExpanded($event)"
        (onRowCollapsing)="onRowCollapsing($event)"
        (onRowCollapsed)="onRowCollapsed($event)">
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onRowExpanding (e) {
            // Handler of the "rowExpanding" event
        },
        onRowExpanded (e) {
            // Handler of the "rowExpanded" event
        },
        onRowCollapsing (e) {
            // Handler of the "rowCollapsing" event
        },
        onRowCollapsed (e) {
            // Handler of the "rowCollapsed" event
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
            @row-expanding="onRowExpanding"
            @row-expanded="onRowExpanded"
            @row-collapsing="onRowCollapsing"
            @row-collapsed="onRowCollapsed">
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList
        },
        // ...
        methods: {
            onRowExpanding (e) {
                // Handler of the "rowExpanding" event
            },
            onRowExpanded (e) {
                // Handler of the "rowExpanded" event
            },
            onRowCollapsing (e) {
                // Handler of the "rowCollapsing" event
            },
            onRowCollapsed (e) {
                // Handler of the "rowCollapsed" event
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList from 'devextreme-react/tree-list';

    const onRowExpanding = (e) => {
        // Handler of the "rowExpanding" event
    };
    const onRowExpanded = (e) => {
        // Handler of the "rowExpanded" event
    };
    const onRowCollapsing = (e) => {
        // Handler of the "rowCollapsing" event
    };
    const onRowCollapsed = (e) => {
        // Handler of the "rowCollapsed" event
    };

    export default function App() {
        return (
            <TreeList ...
                onRowExpanding={onRowExpanding}
                onRowExpanded={onRowExpanded}
                onRowCollapsing={onRowCollapsing}
                onRowCollapsed={onRowCollapsed}>
            </TreeList>
        );
    }
    
---

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var rowCollapsedEventHandler1 = function (e) {
        // First handler of the "rowCollapsed" event
    };

    var rowCollapsedEventHandler2 = function (e) {
        // Second handler of the "rowCollapsed" event
    };

    $("#treeListContainer").dxTreeList("instance")
        .on("rowCollapsed", rowCollapsedEventHandler1)
        .on("rowCollapsed", rowCollapsedEventHandler2);

#####See Also#####
#include common-link-handleevents
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview)
