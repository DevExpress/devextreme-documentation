
---

##### jQuery

This example specifies an [onDragStart](/Documentation/ApiReference/UI_Components/dxDraggable/Configuration/#onDragStart) handler to update note overlapping:

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

This example also specifies handlers for four common events (not specific to Draggable):

- `click`
- `dxdragenter`
- `dxdragleave`
- `dxdrop`

To attach handlers to common events, call [Draggable.on()](/Documentation/ApiReference/UI_Components/dxDraggable/Methods/#onevents):

    <!-- tab: index.js -->
    $(function() {
        $("#note-1").dxDraggable({
            group: 'notes',

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

[note] Specify an identical [group](/Documentation/ApiReference/UI_Components/dxDraggable/Configuration/#group) value for all Draggable instances to ensure the components interact with each other (in `dxdragenter`, `dxdragleave`, and `dxdrop` handlers).

##### Angular

This example specifies the following event handlers to update note overlapping:

- [onDragStart](/Documentation/ApiReference/UI_Components/dxDraggable/Configuration/#onDragStart)
- [onDragMove](/Documentation/ApiReference/UI_Components/dxDraggable/Configuration/#onDragMove)
- [onDragEnd](/Documentation/ApiReference/UI_Components/dxDraggable/Configuration/#onDragEnd)

This example also implements a `(click)` handler on the parent `<div>` element within the `note` component:

    <!-- tab: app.component.html -->
    aa

##### Vue

This example specifies the following event handlers to update note overlapping:

- [onDragStart](/Documentation/ApiReference/UI_Components/dxDraggable/Configuration/#onDragStart)
- [onDragMove](/Documentation/ApiReference/UI_Components/dxDraggable/Configuration/#onDragMove)
- [onDragEnd](/Documentation/ApiReference/UI_Components/dxDraggable/Configuration/#onDragEnd)

This example also implements a `@click` handler on the parent `<div>` element within the `Note` component:

    <!-- tab: Note.vue -->
    <template>
        <DxDraggable ...
            :style="{zIndex: currentZIndex}"
            @drag-start="handleDragStart"
            @drag-move="handleDragMove"
            @drag-end="handleDragEnd"
        >
            <div
                :class="`note ${isOverlapped ? 'overlapped' : ''}`"
                @click="handleClick"
            >
                <!-- ... -->
            </div>
        </DxDraggable>
    </template>

    <script setup lang="ts">
    import { ref } from "vue";
    // ...

    const overlappedComponentId = ref<string | null>(null);
    const currentZIndex = ref<number>(0);

    function updateZIndex() {
        const zIndexToUpdate = zIndex.value + 1;
        currentZIndex.value = zIndexToUpdate;
        zIndex.value = zIndexToUpdate;
    }

    function handleDragStart() {
        updateZIndex();
    }

    function handleDragMove(e: DxDraggableTypes.DragMoveEvent) {
        if (e.toComponent !== e.component) {
            const toComponentId = e.toComponent.element().id;
            startOverlap(toComponentId);
            overlappedComponentId.value = toComponentId;
        } else {
            stopOverlap();
            overlappedComponentId.value = null;
        }
    }

    function handleDragEnd() {
        stopOverlap();
    }

    function handleClick() {
        updateZIndex();
    }
    </script>

    <!-- tab: App.vue -->
    <template>
        <div class="boundary-text">Dragging Boundary</div>
        <div class="board">
            <template v-for="note in notes">
            <Note ...
                :is-overlapped="overlappedId === note.id"
                v-model:z-index="zIndex"
                :start-overlap="startOverlap"
                :stop-overlap="stopOverlap"
            />
            </template>
        </div>
        <div class="boundary-text">Dragging Boundary</div>
    </template>

    <script setup lang="ts">
    import { ref } from "vue";
    // ...

    const overlappedId = ref<string | null>(null);
    const zIndex = ref<number>(0);

    function startOverlap(id: string) {
        overlappedId.value = id;
    }

    function stopOverlap() {
        overlappedId.value = null;
    }
    </script>


##### React

This example specifies the following event handlers to update note overlapping:

- [onDragStart](/Documentation/ApiReference/UI_Components/dxDraggable/Configuration/#onDragStart)
- [onDragMove](/Documentation/ApiReference/UI_Components/dxDraggable/Configuration/#onDragMove)
- [onDragEnd](/Documentation/ApiReference/UI_Components/dxDraggable/Configuration/#onDragEnd)

This example also implements an `onClick` handler on the parent `<div>` element within the `Note` component:

    <!-- tab: Note.tsx -->
    import React, {
        useCallback, useMemo, useRef, useState,
    } from 'react';
    // ...

    function Note({ ... }: NoteProps) {
        const overlappedComponentId = useRef<string | null>(null);
        const [currentZIndex, setCurrentZIndex] = useState(0);

        const style = useMemo(() => ({ zIndex: currentZIndex }), [currentZIndex]);

        const updateZIndex = useCallback(() => {
            const zIndexToUpdate = zIndex.current + 1;
            setCurrentZIndex(zIndexToUpdate);
            zIndex.current = zIndexToUpdate;
        }, []);

        const handleDragStart = useCallback(() => {
            updateZIndex();
        }, []);

        const handleDragMove = useCallback((e: DraggableTypes.DragMoveEvent) => {
            if (e.toComponent !== e.component) {
                const toComponentId = e.toComponent.element().id;
                startOverlap(toComponentId);
                overlappedComponentId.current = toComponentId;
            } else {
                stopOverlap();
                overlappedComponentId.current = null;
            }
        }, []);

        const onClick = useCallback(() => {
            updateZIndex();
        }, [updateZIndex]);

        const handleDragEnd = useCallback(() => {
            stopOverlap();
        }, []);

        return (
            <Draggable ...
                style={style}
                onDragStart={handleDragStart}
                onDragMove={handleDragMove}
                onDragEnd={handleDragEnd}
            >
            <div
                className={`note ${isOverlapped ? 'overlapped' : ''}`}
                onClick={onClick}
            >
                {/* ... */}
            </div>
            </Draggable>
        );
    }

    <!-- tab: App.tsx -->
    import { useCallback, useRef, useState } from 'react';
    // ...

    function App(): JSX.Element {
        const zIndex = useRef(0);
        const [overlappedId, setOverlappedId] = useState<string | null>(null);

        const startOverlap = useCallback((id: string) => {
            setOverlappedId(id);
        }, []);

        const stopOverlap = useCallback(() => {
            setOverlappedId(null);
        }, []);

        return (
            <div className="demo-container dx-theme-fluent-typography">
            <div className="boundary-text">Dragging Boundary</div>
            <div className="board">
                {notes.map((note) => (
                    <Note
                        {...note}
                        key={note.id}
                        isOverlapped={overlappedId === note.id}
                        zIndex={zIndex}
                        startOverlap={startOverlap}
                        stopOverlap={stopOverlap}
                    />
                ))}
            </div>
            <div className="boundary-text">Dragging Boundary</div>
            </div>
        );
    }

---
