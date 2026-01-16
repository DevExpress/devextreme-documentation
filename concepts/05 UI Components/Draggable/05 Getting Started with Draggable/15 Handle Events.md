This example specifies an [onDragStart](/Documentation/ApiReference/UI_Components/dxDraggable/Configuration/#onDragStart) handler to update card overlapping as follows:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        let z = 1;

        $("#note-1").dxDraggable({
            onDragStart(e) {
                changeZIndex($(e.element[0]));
            }
            // ...
        });

        function changeZIndex(el) {
            el.css("z-index", z);
            z++;
        }
    });

##### Angular

    <!-- tab: app.component.html -->
    <div class="board">
        <dx-draggable ...
            (onDragStart)="handleDragStart($event)"
        ></dx-draggable>

        <!-- ... -->
    </div>

    <!-- tab: app.component.ts -->
    import { type DxDraggableTypes } from 'devextreme-angular/ui/draggable';

    // ...
    export class AppComponent {
        z = 1;

        changeZIndex(element: HTMLElement) {
            element.style.zIndex = this.z.toString();
            this.z++;
        }

        handleDragStart(e: DxDraggableTypes.DragStartEvent) {
            this.changeZIndex(e.element);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div class="board">
            <DxDraggable ...
                @drag-start="handleDragStart"
            />

            <!-- ... -->
        </div>
    </template>

    <script setup lang="ts">
    import { DxDraggable, type DxDraggableTypes } from "devextreme-vue/draggable";

    let z = 1;

    function changeZIndex(element: HTMLElement) {
        element.style.zIndex = z.toString();
        z++;
    }

    function handleDragStart(e: DxDraggableTypes.DragStartEvent) {
        changeZIndex(e.element);
    }

    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { JSX, useState, useCallback } from 'react';
    import { Draggable, type DraggableTypes } from 'devextreme-react/draggable';

    function App(): JSX.Element {
        const [, setZ] = useState(1);

        const changeZIndex = useCallback((element: HTMLElement) => {
            setZ((prevValue) => {
                element.style.zIndex = prevValue.toString();
                return prevValue + 1;
            });
        }, []);

        const handleDragStart = useCallback((e: DraggableTypes.DragStartEvent) => {
            changeZIndex(e.element);
        }, []);

        return (
            <div class="board">
                <Draggable ...
                    onDragStart={handleDragStart}
                />

                {/* ... */}
            </div>
        );
    }

---

This example also specifies handlers for four common events (not specific to Draggable):

- `click`
- `dxdragenter`
- `dxdragleave`
- `dxdrop`

---

##### jQuery

To attach handlers to common events, call [Draggable.on()](/Documentation/ApiReference/UI_Components/dxDraggable/Methods/#onevents) as follows:

    <!-- tab: index.js -->
    $(function() {
        $("#note-1").dxDraggable({
            group: 'cards',

            // ...
        }).on({
            "click": handleClick,
            "dxdragenter": handleDragEnter,
            "dxdragleave": handleDragStop,
            "dxdrop": handleDragStop,
        });

        // ...

        function handleClick(e) {
            changeZIndex($(e.currentTarget));
        }

        function handleDragEnter(e) {
            e.target.classList.add('overlapped');
        }

        function handleDragStop(e) {
            e.target.classList.remove('overlapped');
        }
    });

##### Angular

To attach handlers to common events, call the [on()](/Documentation/ApiReference/Common/Utils/events/#onelement_eventName_handler) utility method within [Draggable.onInitialized()](/Documentation/ApiReference/UI_Components/dxDraggable/Configuration/#onInitialized) as follows:

    <!-- tab: app.component.html -->
    <div class="board">
        <dx-draggable ...
            group="cards"
            (onInitialized)="handleInit($event)"
        ></dx-draggable>

        <!-- ... -->
    </div>

    <!-- tab: app.component.ts -->
    import { type DxDraggableTypes } from 'devextreme-angular/ui/draggable';
    import { EventObject } from 'devextreme/common/core/events';
    import { on } from "devextreme/events";

    // ...
    export class AppComponent {
        handleClick(e: EventObject) {
            this.changeZIndex(e.currentTarget as HTMLElement);
        }

        handleDragEnter(e: EventObject) {
            const target: HTMLElement = e.target as HTMLElement;

            target.classList.add('overlapped');
        }

        handleDragStop(e: EventObject) {
            const target: HTMLElement = e.target as HTMLElement;

            target.classList.remove('overlapped');
        }

        handleInit(e: DxDraggableTypes.InitializedEvent) {
            on(e.element!, 'click', this.handleClick.bind(this));

            on(e.element!, 'dxdragenter', this.handleDragEnter);

            on(e.element!, 'dxdragleave', this.handleDragStop);
            on(e.element!, 'dxdrop', this.handleDragStop);
        }
    }

##### Vue

To attach handlers to common events, call the [on()](/Documentation/ApiReference/Common/Utils/events/#onelement_eventName_handler) utility method within [Draggable.onInitialized()](/Documentation/ApiReference/UI_Components/dxDraggable/Configuration/#onInitialized) as follows:

    <!-- tab: App.vue -->
    <template>
        <div class="board">
            <DxDraggable ...
                group="cards"
                @initialized="handleInit"
            />

            <!-- ... -->
        </div>
    </template>

    <script setup lang="ts">
    import { DxDraggable, type DxDraggableTypes } from "devextreme-vue/draggable";
    import { on } from "devextreme/events";
    import { type EventObject } from "devextreme/common/core/events";

    function handleClick(e: EventObject) {
        changeZIndex(e.currentTarget as HTMLElement);
    }

    function handleDragEnter(e: EventObject) {
        const target: HTMLElement = e.target as HTMLElement;

        target.classList.add('overlapped');
    }

    function handleDragStop(e: EventObject) {
        const target: HTMLElement = e.target as HTMLElement;

        target.classList.remove('overlapped');
    }

    function handleInit(e: DxDraggableTypes.InitializedEvent) {
        on(e.element!, "click", handleClick);

        on(e.element!, "dxdragenter", handleDragEnter);

        on(e.element!, "dxdragleave", handleDragStop);
        on(e.element!, "dxdrop", handleDragStop);
    }

    </script>

##### React

To attach handlers to common events, call the [on()](/Documentation/ApiReference/Common/Utils/events/#onelement_eventName_handler) utility method within [Draggable.onInitialized()](/Documentation/ApiReference/UI_Components/dxDraggable/Configuration/#onInitialized) as follows:

    <!-- tab: App.tsx -->
    import React, { JSX, useState, useCallback } from 'react';
    import { Draggable, type DraggableTypes } from 'devextreme-react/draggable';
    import { on } from 'devextreme/common/core/events';
    import { type EventObject } from 'devextreme/common/core/events';

    function App(): JSX.Element {
        const handleClick = useCallback((e: EventObject) => {
            changeZIndex(e.currentTarget as HTMLElement);
        }, []);

        const handleDragEnter = useCallback((e: EventObject) => {
            const target: HTMLElement = e.target as HTMLElement;
            target.classList.add('overlapped');
        }, []);

        const handleDragStop = useCallback((e: EventObject) => {
            const target: HTMLElement = e.target as HTMLElement;
            target.classList.remove('overlapped');
        }, []);

        const handleInit = useCallback((e: DraggableTypes.InitializedEvent) => {
            on(e.element!, 'click', handleClick);
            on(e.element!, 'dxdragenter', handleDragEnter);
            on(e.element!, 'dxdragleave', handleDragStop);
            on(e.element!, 'dxdrop', handleDragStop);
        }, []);

        return (
            <div class="board">
                <Draggable ...
                    group="cards"
                    onInitialized={handleInit}
                />

                {/* ... */}
            </div>
        );
    }

---

[note] Specify an identical [group](/Documentation/ApiReference/UI_Components/dxDraggable/Configuration/#group) value for all Draggable instances to ensure the components interact with each other (in `dxdragenter`, `dxdragleave`, and `dxdrop` handlers).
