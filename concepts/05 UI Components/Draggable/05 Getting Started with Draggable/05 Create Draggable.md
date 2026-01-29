---

##### jQuery

[Add DevExtreme to your jQuery application](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/00%20Add%20DevExtreme%20to%20a%20jQuery%20Application.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/') and use the following code to create a Draggable:

    <!-- tab: index.js -->
    $(function() {
        $("#draggable").dxDraggable({});
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_2/css/dx.fluent.blue.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_2/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body class="dx-viewport">
            <div id="draggable"></div>
        </body>
    </html>

##### Angular

[Add DevExtreme to your Angular application](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/') and use the following code to create a Draggable:

    <!-- tab: app.component.html -->
    <dx-draggable></dx-draggable>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { type DxDraggableTypes } from 'devextreme-angular/ui/draggable';

    <!-- tab: app.module.ts -->
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { DxDraggableModule } from 'devextreme-angular';
    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            DxDraggableModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: angular.json -->
    {
        // ...
        "styles": [
            "node_modules/devextreme/dist/css/dx.fluent.blue.light.css",
        ],
    }

##### Vue

[Add DevExtreme to your Vue application](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/00%20Add%20DevExtreme%20to%20a%20Vue%20Application.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/') and use the following code to create a Draggable:

    <!-- tab: App.vue -->
    <template>
        <DxDraggable />
    </template>

    <script setup lang="ts">
    import { DxDraggable, type DxDraggableTypes } from 'devextreme-vue/draggable';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    </script>

##### React

[Add DevExtreme to your React application](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/00%20Add%20DevExtreme%20to%20a%20React%20Application.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/') and use the following code to create a Draggable:

    <!-- tab: App.tsx -->
    import React, { JSX, useState } from 'react';
    import { Draggable, type DraggableTypes } from 'devextreme-react/draggable';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    function App(): JSX.Element {
        return (
            <Draggable />
        );
    }

    export default App;

---

Draggable does not include default visual elements. Specify custom markup as follows:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#note-1").dxDraggable({});
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
        </head>
        <body class="dx-viewport">
            <div id="note-1" class="note">
                <div class="color-indicator blue"></div>
                <div class="text-container">
                    <div class="body-text-box">Install New Router in Dev Room</div>
                    <div class="detail-text-box">Amelia Harper</div>
                </div>
            </div>
        </body>
    </html>

This example creates four Draggable components inside a common `.board` container:

    <!-- tab: index.js -->
    $(function() {
        $("#note-1").dxDraggable({});
        $("#note-2").dxDraggable({});
        $("#note-3").dxDraggable({});
        $("#note-4").dxDraggable({});
    });

    <!-- tab: index.html -->
    <div class="board">
        <div id="note-1" class="note">
            <div class="color-indicator blue"></div>
            <div class="text-container">
                <div class="body-text-box">Install New Router in Dev Room</div>
                <div class="detail-text-box">Amelia Harper</div>
            </div>
        </div>

        <div id="note-2" class="note">
            <div class="color-indicator green"></div>
            <div class="text-container">
                <div class="body-text-box">👨‍💻 Launch New Website</div>
                <div class="detail-text-box">Brett Wade</div>
            </div>
        </div>

        <div id="note-3" class="note">
            <div class="color-indicator red"></div>
            <div class="text-container">
                <div class="body-text-box">Prepare 2026 Marketing Plan</div>
                <div class="detail-text-box">Robert Reagan</div>
            </div>
        </div>

        <div id="note-4" class="note">
            <div class="color-indicator yellow"></div>
            <div class="text-container">
                <div class="body-text-box">🖥️ Approve Personal Computer Upgrade Plan</div>
                <div class="detail-text-box">Bart Arnaz</div>
            </div>
        </div>
    </div>

##### Angular

    <!-- tab: app.component.html -->
    <dx-draggable id="note-1" class="note">
        <div class="color-indicator"></div>
        <div class="text-container">
            <div class="body-text-box">Install New Router in Dev Room</div>
            <div class="detail-text-box">Amelia Harper</div>
        </div>
    </dx-draggable>

This example defines Draggable markup within a custom component, `note`.

This component configures the `NoteInfo` interface to specify note information. Use this interface within an array to define four notes. Implement the `note` component within a `@for` directive to add these notes to the app:

    <!-- tab: note.component.html -->
    <div>
        <dx-draggable
            [id]="id()"
            [group]="group()"
            [boundary]="boundary()"
            class="note"
        >
            <div class="color-indicator"></div>
            <div class="text-container">
                <div class="body-text-box">{{ task() }}</div>
                <div class="detail-text-box">{{ assignee() }}</div>
            </div>
        </dx-draggable>
    </div>

    <!-- tab: note.component.ts -->
    import { Component, input, model } from '@angular/core';

    export interface NoteInfo {
        id: string;
        task: string;
        assignee: string;
    }

    @Component({
        selector: 'note',
        templateUrl: './note.component.html',
        styleUrls: ['../app/app.component.scss'],
    })
    export class NoteComponent {
        id = input<string>();
        group = input<string>('notes');
        boundary = input<string>('.board')
        task = input<string>();
        assignee = input<string>();
        // ...

    }

    <!-- tab: app.component.html -->
    <div class="boundary-text">Dragging Boundary</div>
    <div class="board">
        @for (note of notes; track note) {
        <note
            [id]="note.id"
            [task]="note.task"
            [assignee]="note.assignee"
        ></note>
        }
    </div>
    <div class="boundary-text">Dragging Boundary</div>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { type NoteInfo } from 'src/note/note.component';

    // ...
    export class AppComponent {
        notes: NoteInfo[] = [{
            id: 'note-1',
            task: 'Install New Router in Dev Room',
            assignee: 'Amelia Harper',
        }, {
            id: 'note-2',
            task: '👨‍💻 Launch New Website',
            assignee: 'Brett Wade',
        }, {
            id: 'note-3',
            task: 'Prepare 2026 Marketing Plan',
            assignee: 'Robert Reagan',
        }, {
            id: 'note-4',
            task: '🖥️ Approve Personal Computer Upgrade Plan',
            assignee: 'Bart Arnaz',
        }];
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDraggable id="note-1">
            <div class="note">
                <div class="color-indicator"></div>
                <div class="text-container">
                    <div class="body-text-box">Install New Router in Dev Room</div>
                    <div class="detail-text-box">Amelia Harper</div>
                </div>
            </div>
        </DxDraggable>
    </template>

This example defines Draggable markup within a custom component, `Note`.

This component configures two interfaces:

- `export interface NoteInfo`: Specifies note information. 
- `interface NoteProps`: Defines properties of the Note component.

Create an array of `NoteInfo` objects to define four notes. Implement the `Note` component within a `<template>` tag and use the `v-for` directive to add these notes to the app:

    <!-- tab: Note.vue -->
    <template>
        <DxDraggable
            :id="id"
            :group="group"
            :boundary="boundary"
        >
            <div class="note">
                <div class="color-indicator"></div>
                <div class="text-container">
                    <div class="body-text-box">{{ task }}</div>
                    <div class="detail-text-box">{{ assignee }}</div>
                </div>
            </div>
        </DxDraggable>
    </template>

    <script setup lang="ts">
    // ...

    export interface NoteInfo {
        id: string;
        task: string;
        assignee: string;
    }

    interface NoteProps extends NoteInfo {
        group?: string;
        boundary?: string;
        // ...
    }

    const {
        id,
        group = 'notes',
        boundary = '.board',
        task,
        assignee,
        // ...
    } = defineProps<NoteProps>();

    </script>

    <!-- tab: App.vue -->
    <template>
    <div class="boundary-text">Dragging Boundary</div>
    <div class="board">
        <template v-for="note in notes">
            <Note
                :id="note.id"
                :task="note.task"
                :assignee="note.assignee"
            />
        </template>
    </div>
    <div class="boundary-text">Dragging Boundary</div>
    </template>

    <script setup lang="ts">
    // ...

    import Note, { type NoteInfo } from "./Note.vue";

    const notes: NoteInfo[] = [
        {
            id: 'note-1',
            task: 'Install New Router in Dev Room',
            assignee: 'Amelia Harper',
        },
        {
            id: 'note-2',
            task: '👨‍💻 Launch New Website',
            assignee: 'Brett Wade',
        },
        {
            id: 'note-3',
            task: 'Prepare 2026 Marketing Plan',
            assignee: 'Robert Reagan',
        },
        {
            id: 'note-4',
            task: '🖥️ Approve Personal Computer Upgrade Plan',
            assignee: 'Bart Arnaz',
        },
    ];

    </script>

##### React

    <!-- tab: App.tsx -->
    import { Draggable } from 'devextreme-react/draggable';

    function App(): JSX.Element {
        return (
            <Draggable id="note-1" className="note">
                <div className="color-indicator blue"></div>
                <div className="text-container">
                    <div className="body-text-box">Install New Router in Dev Room</div>
                    <div className="detail-text-box">Amelia Harper</div>
                </div>
            </Draggable>
        );
    }

This example defines Draggable markup within a custom component, `Note`.

This component configures two interfaces:

- `export interface NoteInfo`: Specifies note information. 
- `interface NoteProps`: Defines properties of the Note component.

Create an array of `NoteInfo` objects to define four notes. Implement the `Note` component within an [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) callback to add these notes to the app:

    <!-- tab: Note.tsx -->
    import { Draggable, type DraggableTypes } from 'devextreme-react/draggable';
    import { type NoteProps } from './Note.types';
    // ...

    function Note({
        id,
        group = 'notes',
        boundary = '.board',
        task,
        assignee,
        // ...
    }: NoteProps) {
        return (
            <Draggable
                id={id}
                group={group}
                boundary={boundary}
            >
                <div
                    className={`note ${isOverlapped ? 'overlapped' : ''}`}
                >
                    <div className="color-indicator"></div>
                    <div className="text-container">
                        <div className="body-text-box">{task}</div>
                        <div className="detail-text-box">{assignee}</div>
                    </div>
                </div>
            </Draggable>
        );
    }

    export default Note;

    <!-- tab: Note.types.tsx -->
    export interface NoteInfo {
        id: string;
        task: string;
        assignee: string;
    }

    export interface NoteProps extends NoteInfo {
        group?: string;
        boundary?: string;
        // ...
    }

    <!-- tab: App.tsx -->
    import Note from './components/Note/Note.tsx';
    import { type NoteInfo } from './components/Note/Note.types.tsx';
    // ...

    const notes: NoteInfo[] = [{
        id: 'note-1',
        task: 'Install New Router in Dev Room',
        assignee: 'Amelia Harper',
    }, {
        id: 'note-2',
        task: '👨‍💻 Launch New Website',
        assignee: 'Brett Wade',
    }, {
        id: 'note-3',
        task: 'Prepare 2026 Marketing Plan',
        assignee: 'Robert Reagan',
    }, {
        id: 'note-4',
        task: '🖥️ Approve Personal Computer Upgrade Plan',
        assignee: 'Bart Arnaz',
    }];

    function App(): JSX.Element {
        return (
            <div className="boundary-text">Dragging Boundary</div>
            <div className="board">
                {notes.map((note) => (
                    <Note
                        {...note}
                        key={note.id}
                    />
                ))}
            </div>
            <div className="boundary-text">Dragging Boundary</div>
        );
    }

---
