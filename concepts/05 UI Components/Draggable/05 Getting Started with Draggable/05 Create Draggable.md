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

    export default function App(): JSX.Element {
        return (
            <Draggable />
        );
    }

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
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_2/css/dx.fluent.blue.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_2/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body class="dx-viewport">
            <div id="note-1" class="card">
                <div class="color-indicator blue"></div>
                <div class="text-container">
                    <div class="body-text-box">Install New Router in Dev Room</div>
                    <div class="detail-text-box">Amelia Harper</div>
                </div>
            </div>
        </body>
    </html>

##### Angular

    <!-- tab: app.component.html -->
    <dx-draggable id="note-1" class="card">
        <div class="color-indicator blue"></div>
        <div class="text-container">
            <div class="body-text-box">Install New Router in Dev Room</div>
            <div class="detail-text-box">Amelia Harper</div>
        </div>
    </dx-draggable>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDraggable id="note-1" class="card">
            <div class="color-indicator blue"></div>
            <div class="text-container">
                <div class="body-text-box">Install New Router in Dev Room</div>
                <div class="detail-text-box">Amelia Harper</div>
            </div>
        </DxDraggable>
    </template>

##### React

    <!-- tab: App.tsx -->
    import React, { JSX, useState } from 'react';
    import { Draggable, type DraggableTypes } from 'devextreme-react/draggable';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    export default function App(): JSX.Element {
        return (
            <Draggable id="note-1" className="card">
                <div className="color-indicator blue"></div>
                <div className="text-container">
                    <div className="body-text-box">Install New Router in Dev Room</div>
                    <div className="detail-text-box">Amelia Harper</div>
                </div>
            </Draggable>
        );
    }

---

This example creates four Draggable components inside a common `.board` container:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#note-1").dxDraggable({});
        $("#note-2").dxDraggable({});
        $("#note-3").dxDraggable({});
        $("#note-4").dxDraggable({});
    });

    <!-- tab: index.html -->
    <div class="board">
        <div id="note-1" class="card">
            <div class="color-indicator blue"></div>
            <div class="text-container">
                <div class="body-text-box">Install New Router in Dev Room</div>
                <div class="detail-text-box">Amelia Harper</div>
            </div>
        </div>

        <div id="note-2" class="card">
            <div class="color-indicator green"></div>
            <div class="text-container">
                <div class="body-text-box">Launch New Website</div>
                <div class="detail-text-box">Brett Wade</div>
            </div>
        </div>

        <div id="note-3" class="card">
            <div class="color-indicator red"></div>
            <div class="text-container">
                <div class="body-text-box">Prepare 2026 Marketing Plan</div>
                <div class="detail-text-box">Robert Reagan</div>
            </div>
        </div>

        <div id="note-4" class="card">
            <div class="color-indicator yellow"></div>
            <div class="text-container">
                <div class="body-text-box">Approve Personal Computer Upgrade Plan</div>
                <div class="detail-text-box">Bart Arnaz</div>
            </div>
        </div>
    </div>

##### Angular

    <!-- tab: app.component.html -->
    <div class="board">
        <dx-draggable id="note-1" class="card">
            <div class="color-indicator blue"></div>
            <div class="text-container">
                <div class="body-text-box">Install New Router in Dev Room</div>
                <div class="detail-text-box">Amelia Harper</div>
            </div>
        </dx-draggable>

        <dx-draggable id="note-2" class="card">
            <div class="color-indicator green"></div>
            <div class="text-container">
                <div class="body-text-box">Launch New Website</div>
                <div class="detail-text-box">Brett Wade</div>
            </div>
        </dx-draggable>

        <dx-draggable id="note-3" class="card">
            <div class="color-indicator red"></div>
            <div class="text-container">
                <div class="body-text-box">Prepare 2026 Marketing Plan</div>
                <div class="detail-text-box">Robert Reagan</div>
            </div>
        </dx-draggable>

        <dx-draggable id="note-4" class="card">
            <div class="color-indicator yellow"></div>
            <div class="text-container">
                <div class="body-text-box">Approve Personal Computer Upgrade Plan</div>
                <div class="detail-text-box">Bart Arnaz</div>
            </div>
        </dx-draggable>
    </div>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div class="board">
            <DxDraggable id="note-1" class="card">
                <div class="color-indicator blue"></div>
                <div class="text-container">
                    <div class="body-text-box">Install New Router in Dev Room</div>
                    <div class="detail-text-box">Amelia Harper</div>
                </div>
            </DxDraggable>

            <DxDraggable id="note-2" class="card">
                <div class="color-indicator green"></div>
                <div class="text-container">
                    <div class="body-text-box">Launch New Website</div>
                    <div class="detail-text-box">Brett Wade</div>
                </div>
            </DxDraggable>

            <DxDraggable id="note-3" class="card">
                <div class="color-indicator red"></div>
                <div class="text-container">
                    <div class="body-text-box">Prepare 2026 Marketing Plan</div>
                    <div class="detail-text-box">Robert Reagan</div>
                </div>
            </DxDraggable>

            <DxDraggable id="note-4" class="card">
                <div class="color-indicator yellow"></div>
                <div class="text-container">
                    <div class="body-text-box">Approve Personal Computer Upgrade Plan</div>
                    <div class="detail-text-box">Bart Arnaz</div>
                </div>
            </DxDraggable>
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
                <Draggable id="note-1" className="card">
                    <div className="color-indicator blue"></div>
                    <div className="text-container">
                        <div className="body-text-box">Install New Router in Dev Room</div>
                        <div className="detail-text-box">Amelia Harper</div>
                    </div>
                </Draggable>

                <Draggable id="note-2" className="card">
                    <div className="color-indicator green"></div>
                    <div className="text-container">
                        <div className="body-text-box">Launch New Website</div>
                        <div className="detail-text-box">Brett Wade</div>
                    </div>
                </Draggable>

                <Draggable id="note-3" className="card">
                    <div className="color-indicator red"></div>
                    <div className="text-container">
                        <div className="body-text-box">Prepare 2026 Marketing Plan</div>
                        <div className="detail-text-box">Robert Reagan</div>
                    </div>
                </Draggable>

                <Draggable id="note-4" className="card">
                    <div className="color-indicator yellow"></div>
                    <div className="text-container">
                        <div className="body-text-box">Approve Personal Computer Upgrade Plan</div>
                        <div className="detail-text-box">Bart Arnaz</div>
                    </div>
                </Draggable>
            </div>
        );
    }

---
