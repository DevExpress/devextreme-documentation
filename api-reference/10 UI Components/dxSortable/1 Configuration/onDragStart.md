---
id: dxSortable.Options.onDragStart
type: function(e)
default: null
---
---
##### shortDescription
A function that is called when drag gesture is initialized.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel the gesture.

##### field(e.component): dxSortable
The UI component that raised the event.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fromData): any
Custom [data](/api-reference/10%20UI%20Components/DraggableBase/1%20Configuration/data.md '{basewidgetpath}/Configuration/#data') associated with the source UI component.

##### field(e.fromIndex): Number
The item's original position. If the item is dragged from another UI component, the value is **-1**.

##### field(e.itemData): any
The dragged item's data. Note that you should specify the item data manually.

##### field(e.itemElement): DxElement
#include draganddrop-ref-itemelementparam

##### field(e.model): any
Model data. Available only if you use Knockout.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var treeView = $("#simple-treeview").dxTreeView({
            items: employees,
            dataStructure: "plain",
            <!-- ... -->
        }).dxTreeView("instance");

        $("#simple-treeview").dxSortable({
            filter: ".dx-treeview-item",
            allowReordering: true,
            // ...
            onDragStart: function (e) {
                e.itemData = e.element.find(".dx-treeview-item")[e.fromIndex].innerText;
                // your code
            }
        });
    }); 

    <!-- tab: index.html -->
    <div class="demo-container">
        <div class="form">
            <div id="simple-treeview"></div>
        </div>
    </div>


##### Angular

    <!--TypeScript-->
    import { DxSortableModule, DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onDragStart(e) {
            e.itemData = e.element.find(".dx-treeview-item")[e.fromIndex].innerText;
            //...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSortableModule,
            DxTreeViewModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-sortable
        filter=".dx-treeview-item"
        [allowReordering]="true"
        (onDragStart)="onDragStart($event)">
        <dx-tree-view
            id="simple-treeview"
            [items]="employees"
            dataStructure="plain"
            ...>
        </dx-tree-view>
    </dx-sortable>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSortable
            filter=".dx-treeview-item"
            :allow-reordering="true"
            @drag-start="onDragStart"
        >
            <DxTreeView
                id="simple-treeview"
                data-structure="plain"
                :items="employees"
            />
        </DxSortable>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxSortable, DxTreeView from 'devextreme-vue/gantt';
  
    export default {
        components: {
            DxSortable,
            DxTreeView
        },
        methods: {
            onDragStart(e) {
                e.itemData = e.element.find(".dx-treeview-item")[e.fromIndex].innerText;
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeView from 'devextreme-react/tree-view';
    import Sortable from 'devextreme-react/sortable';

    class App extends React.Component {
        // ...
        render() {
            return (
                <Sortable
                    filter=".dx-treeview-item"
                    allowReordering={true}
                    onDragStart={this.onDragStart}>
                    <TreeView
                        id="simple-treeview"
                        dataStructure="plain"
                        items={this.state.employees}
                    />
                </Sortable>                
            );
        }
        onDragStart = (e) => {
            e.itemData = e.element.find(".dx-treeview-item")[e.fromIndex].innerText;
            // your code
        }
    }
    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Sortable()
        .Filter(".dx-treeview-item")
        .AllowReordering(true)
        .OnDragStart("onDragStart")
        .Content(
            Html.DevExtreme().TreeView()
                .ID("simple-treeview")
                .DataStructure(TreeViewDataStructure.Plain)
                .DataSource(d => d.Mvc().LoadAction("GetPlainDataForDragAndDrop"))
                .DataSourceOptions(o => o.Map("mapIcons"))
        )
    )
    
    <script>
        function onDragStart(e) {
            e.itemData = e.element.find(".dx-treeview-item")[e.fromIndex].innerText;
            // your code
        }
    </script>

---
