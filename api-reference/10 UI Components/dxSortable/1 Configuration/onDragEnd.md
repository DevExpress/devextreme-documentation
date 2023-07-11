---
id: dxSortable.Options.onDragEnd
type: function(e)
default: null
---
---
##### shortDescription
A function that is called when the drag gesture is finished.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel the gesture.

##### field(e.component): dxSortable
The UI component that raised the event.

##### field(e.dropInsideItem): Boolean
Indicates if the dragged item is dropped inside another item.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fromComponent): dxSortable | dxDraggable
The instance of the item's source UI component. Works only for element drag and drop between components.

##### field(e.fromData): any
Custom [data](/api-reference/10%20UI%20Components/DraggableBase/1%20Configuration/data.md '{basewidgetpath}/Configuration/#data') associated with the source UI component. Works only for element drag and drop between components.

##### field(e.fromIndex): Number
The item's original position. If the item is dragged from another UI component, the value is **-1**.

##### field(e.itemData): any
The item's data before the drag operation. Note that you should specify the item data manually.

##### field(e.itemElement): DxElement
#include draganddrop-ref-itemelementparam

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.toComponent): dxSortable | dxDraggable
The instance of the item's target UI component. Works only for element drag and drop between components.

##### field(e.toData): any
Custom [data](/api-reference/10%20UI%20Components/DraggableBase/1%20Configuration/data.md '{basewidgetpath}/Configuration/#data') associated with the target UI component. Works only for element drag and drop between components.

##### field(e.toIndex): Number
The position in which the item is placed. If the item is dragged away from the UI component, the value is **-1**.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/DragAndDropPlainDataStructure/"
}


---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var treeView = $("#simple-treeview").dxTreeView({
            items: treeViewItems,
            dataStructure: "plain",
            <!-- ... -->
        }).dxTreeView("instance");

        $("#simple-treeview").dxSortable({
            filter: ".dx-treeview-item",
            allowReordering: true,
            dragTemplate: dragTemplateFunc,       
            onDragEnd: function (e) {
                e.itemData = e.element.find(".dx-treeview-item")[e.fromIndex].innerText;
                // your code
            }
        });
    }); 

    function dragTemplateFunc(item, customContainer){
        var $customContainer = $(document.createElement("div")) 
            .text(item.itemData + ' drag template');
        return $customContainer;
    }

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
        onDragEnd(e){
            e.itemData = this.treeViewItems[e.fromIndex].name;
            // ...
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
        (onDragEnd)="onDragEnd($event)"
        dragTemplate="myDragTemplate"
    >
        <div *dxTemplate="let e of 'myDragTemplate'">
            <div>{{ e.itemData + " drag template" }}</div>
        </div>          
        <dx-tree-view
            id="simple-treeview"
            [items]="treeViewItems"
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
            @drag-end="onDragEnd"
            :drag-template="myDragTemplate"
        >
            <template #myDragTemplate="{ data }">
                <div>{{ data.itemData.Task_Subject}} + "drag template"</div>
            </template>        
            <DxTreeView
                id="simple-treeview"
                data-structure="plain"
                :items="treeViewItems"
            />
        </DxSortable>
    </template>

    <script>

    import DxTreeView from 'devextreme-vue/tree-view';
    import DxSortable from 'devextreme-vue/sortable';

    export default {
        components: {
            DxSortable,
            DxTreeView
        },
        data() {
            return {
                myDragTemplate: "myDragTemplate",
                //...
            };
        },        
        methods: {
            onDragEnd(e) {
                e.itemData = this.treeViewItems[e.fromIndex].name;
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import TreeView from 'devextreme-react/tree-view';
    import Sortable from 'devextreme-react/sortable';
    import { Template } from 'devextreme-react/core/template';

    function myDragTemplate(e) {
        return (
            e.itemData + " drag template";
        );
    }

    class App extends React.Component {
        constructor(props) {
            //...
        }        
        render() {
            return (
                <Sortable
                    filter=".dx-treeview-item"
                    allowReordering={true}
                    onDragEnd={this.onDragEnd}
                    dragTemplate={myDragTemplate}>
                    <TreeView
                        id="simple-treeview"
                        dataStructure="plain"
                        items={this.state.treeViewItems}
                    />
                </Sortable>                
            );
        }
        onDragEnd = (e) => {
            e.itemData = this.state.treeViewItems[e.fromIndex].name;
            // your code
        }
    }
    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Sortable()
        .Filter(".dx-treeview-item")
        .AllowReordering(true)
        .OnDragEnd("onDragEnd")
        .DragTemplate(new JS("dragTemplateFunc"))
        .Content(
            Html.DevExtreme().TreeView()
                .ID("simple-treeview")
                .DataStructure(TreeViewDataStructure.Plain)
                .DataSource(d => d.Mvc().LoadAction("GetPlainDataForDragAndDrop"))
                .DataSourceOptions(o => o.Map("mapIcons"))
        )
    )
    
    <script>
        function onDragEnd(e) {
            e.itemData = e.element.find(".dx-treeview-item")[e.fromIndex].innerText;
            // your code
        }

        function dragTemplateFunc(item, customContainer){
            var $customContainer = $(document.createElement("div")) 
                .text(item.itemData + ' drag template');
            return $customContainer;
        }        
    </script>

---
