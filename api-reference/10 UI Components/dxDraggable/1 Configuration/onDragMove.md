---
id: dxDraggable.Options.onDragMove
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
        $("#draggable").dxDraggable({
            data: tasks,
            dragTemplate: dragTemplateFunc,       
            onDragMove: function (e) {
                e.itemData = e.fromData.text;
                // your code
            }
        });
    }); 

    function dragTemplateFunc(item, customContainer){
        var $customContainer = $(document.createElement("div")) 
            .text(item.itemData + ' drag template');
        return $customContainer;
    }

    <!-- tab: data.js -->
    const tasks = [
    {
        text: 'New Brochures',
    }, {
        text: 'Brochure Design Review',
    }, 
        //...
    ];

##### Angular

    <!--TypeScript-->
    import { DxDraggableModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onDragMove(e){
            e.itemData = e.fromData.text;
            // ...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDraggableModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-draggable
        [data]="task"
        (onDragMove)="onDragMove($event)"
        dragTemplate="myDragTemplate"
    >
        <div *dxTemplate="let e of 'myDragTemplate'">
            <div>{{ e.itemData + " drag template" }}</div>
        </div>          
    </dx-draggable>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDraggable
            :data="task"
            @drag-move="onDragMove"
            :drag-template="myDragTemplate"
        >
            {{task.text}}
            <template #myDragTemplate="{ data }">
                <div>{{ data.itemData}} + "drag template"</div>
            </template>
        </DxDraggable>
    </template>
    <script>

    import DxDraggable from 'devextreme-vue/draggable';

    export default {
        components: {
            DxDraggable
        },
        data() {
            return {
                tasks,
                myDragTemplate: "myDragTemplate",
                //...
            };
        },        
        methods: {
            onDragMove(e) {
                e.itemData = e.fromData.text;
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import Draggable from 'devextreme-react/draggable';
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
                <Draggable
                    data={tasks}
                    onDragMove={this.onDragMove}
                    dragTemplate={myDragTemplate}>
                </Draggable>                
            );
        }
        onDragMove = (e) => {
            e.itemData = e.fromData.text;
            // your code
        }
    }
    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Draggable()
        .DataSource(d => d.Mvc()
            // ...
        )
        .OnDragMove("onDragMove")
        .DragTemplate(new JS("dragTemplateFunc"))
    )

    <script>
        function onDragMove(e) {
            e.itemData = e.fromData.text;
            // your code
        }

        function dragTemplateFunc(item, customContainer){
            var $customContainer = $(document.createElement("div")) 
                .text(item.itemData + ' drag template');
            return $customContainer;
        }
    </script>

---