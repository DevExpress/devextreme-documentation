---
id: dxDraggable.Options.onDragEnd
type: function(e)
default: null
---
---
##### shortDescription
A function that is called when a drag gesture is finished.

##### param(e): ui/draggable:DragEndEvent
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel the gesture.

##### field(e.component): {WidgetName}
The UI component that raised the event.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fromComponent): {WidgetName}
The instance of the item's source UI component. Works only for element drag and drop between components.

##### field(e.fromData): any
Custom [data](/api-reference/10%20UI%20Components/DraggableBase/1%20Configuration/data.md '{basewidgetpath}/Configuration/#data') associated with the source UI component. Works only for element drag and drop between components.

##### field(e.itemData): any
The item's data before the drag operation. Note that you should specify the item data manually.

##### field(e.itemElement): DxElement
#include draganddrop-ref-itemelementparam

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.toComponent): {WidgetName}
The instance of the item's target UI component. Works only for element drag and drop between components.

##### field(e.toData): any
Custom [data](/api-reference/10%20UI%20Components/DraggableBase/1%20Configuration/data.md '{basewidgetpath}/Configuration/#data') associated with the target UI component. Works only for element drag and drop between components.

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