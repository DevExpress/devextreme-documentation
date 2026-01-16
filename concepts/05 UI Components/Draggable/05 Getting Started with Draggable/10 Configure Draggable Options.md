This example specifies the [boundary](/Documentation/ApiReference/UI_Components/dxDraggable/Configuration/#boundary/) property to constrain Draggable movement inside the `.board` container:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#note-1").dxDraggable({
            boundary: '.board'
        });

        // ...
    });

##### Angular

    <!-- tab: app.component.html -->
    <div class="board">
        <dx-draggable
            id="note-1"
            class="card"
            boundary=".board"
        ></dx-draggable>

        <!-- ... -->
    </div>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div class="board">
            <DxDraggable
                id="note-1"
                class="card"
                boundary=".board"
            ></DxDraggable>

            <!-- ... -->
        </div>
    </template>

##### React

    <!-- tab: App.tsx -->
    import React, { JSX, useState } from 'react';
    import { Draggable, type DraggableTypes } from 'devextreme-react/draggable';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    export default function App(): JSX.Element {
        return (
            <div class="board">
                <Draggable
                    id="note-1"
                    className="card"
                    boundary=".board"
                ></Draggable>

                {/* ... */}
            </div>
        );
    }

---
