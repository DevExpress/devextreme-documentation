---
id: dxDraggable.Options.onDragEnd
type: function(e)
default: null
---
---
##### shortDescription
A function that is called when drag gesture is finished.

##### param(e): DragEndEvent
Information about the event that caused the function's execution.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#draggable").dxDraggable({
            data: tasks,
            dragTemplate: dragTemplateFunc,       
            onDragEnd: function (e) {
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
        onDragEnd(e){
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
        (onDragEnd)="onDragEnd($event)"
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
            @drag-end="onDragEnd"
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
            onDragEnd(e) {
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
                    onDragEnd={this.onDragEnd}
                    dragTemplate={myDragTemplate}>
                </Draggable>                
            );
        }
        onDragEnd = (e) => {
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
        .OnDragEnd("onDragEnd")
        .DragTemplate(new JS("dragTemplateFunc"))
    )

    <script>
        function onDragEnd(e) {
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