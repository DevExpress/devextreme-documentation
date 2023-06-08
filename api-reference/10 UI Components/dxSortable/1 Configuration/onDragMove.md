---
id: dxSortable.Options.onDragMove
type: function(e)
default: null
---
---
##### shortDescription
A function that is called every time a draggable item is moved.

##### param(e): DragMoveEvent
Information about the event that caused the function's execution.

---

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
            onDragMove: function (e) {
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
        onDragMove(e){
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
        (onDragMove)="onDragMove($event)"
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
            @drag-move="onDragMove"
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
            onDragMove(e) {
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
                    onDragMove={this.onDragMove}
                    dragTemplate={myDragTemplate}>
                    <TreeView
                        id="simple-treeview"
                        dataStructure="plain"
                        items={this.state.treeViewItems}
                    />
                </Sortable>                
            );
        }
        onDragMove = (e) => {
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
        .OnDragMove("onDragMove")
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
        function onDragMove(e) {
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

