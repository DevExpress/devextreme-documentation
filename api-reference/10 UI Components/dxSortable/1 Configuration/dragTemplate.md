---
id: dxSortable.Options.dragTemplate
type: template | undefined
default: undefined
---
---
##### shortDescription
Specifies custom markup to be shown instead of the item being dragged.

##### param(dragInfo): Object
Information about the item being dragged.

##### field(dragInfo.fromIndex): Number
The item's original position.

##### field(dragInfo.itemData): any
The item's data. Note that you should specify the item data manually.

##### field(dragInfo.itemElement): DxElement
#include draganddrop-ref-itemelementparam

##### param(containerElement): DxElement
A container in which the template should be rendered.

##### return: String | Element | jQuery
#include common-template-return-value

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
            onDragChange: function (e) {
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
        onDragChange(e){
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
        (onDragChange)="onDragChange($event)"
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
            @drag-change="onDragChange"
            drag-template="myDragTemplate"
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
        methods: {
            onDragChange(e) {
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
                    onDragChange={this.onDragChange}
                    dragTemplate={myDragTemplate}>
                    <TreeView
                        id="simple-treeview"
                        dataStructure="plain"
                        items={this.state.treeViewItems}
                    />
                </Sortable>                
            );
        }
        onDragChange = (e) => {
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
        .OnDragChange("onDragChange")
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
        function onDragChange(e) {
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
