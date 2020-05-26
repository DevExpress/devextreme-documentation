#include tutorials-intro-installationnote

The **DropDownButton** combines the functionality of a button and a drop-down menu. You can replace the menu with a custom drop-down control. 

This tutorial describes how to configure a **DropDownButton** that logs user clicks in the browser console (you can open the console to see the messages):

<div class="simulator-desktop-container" data-view="/Content/Applications/20_2/GettingStartedWith/DropDownButton/index.html, /Content/Applications/20_2/GettingStartedWith/DropDownButton/index.js, /Content/Applications/20_2/GettingStartedWith/DropDownButton/index.css"></div>

Refer to the subtopics for details on every configuration step. You can also see the full code below:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var actions = [
            { id: 1, text: "My profile", icon: "user" },
            { id: 2, text: "Messages", icon: "email" },
            { id: 3, text: "Contacts", icon: "group" },
            { id: 4, text: "Log out", icon: "runner" }
        ];

        $("#myDropDownButton").dxDropDownButton({
            text: "Sandra Johnson",
            icon: "user",
            items: actions,
            keyExpr: "id",
            onItemClick: function(e) {
                console.log(e.itemData.text + " was clicked");
            },
            splitButton: true,
            onButtonClick: function() {
                console.log("Main button was clicked");
            }
        });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_20_2/css/dx.common.css">
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_20_2/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_20_2/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body>
            <div id="myDropDownButton"></div>
        </body>
    </html>

##### Angular

    <!-- tab: app.component.html -->
    <dx-drop-down-button
        text="Sandra Johnson"
        icon="user"
        [items]="actions"
        keyExpr="id"
        (onItemClick)="logAction($event)"
        [splitButton]="true"
        (onButtonClick)="logButtonClick()">
    </dx-drop-down-button>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        actions: Array<{id: Number, text: String, icon: String}> = [
            { id: 1, text: "My profile", icon: "user" },
            { id: 2, text: "Messages", icon: "email" },
            { id: 3, text: "Contacts", icon: "group" },
            { id: 4, text: "Log out", icon: "runner" }
        ];

        logAction(e) {
            console.log(e.itemData.text + " was clicked");
        }

        logButtonClick() {
            console.log("Main button was clicked");
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxDropDownButtonModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDropDownButtonModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDropDownButton
            text="Sandra Johnson"
            icon="user"
            :items="actions"
            key-expr="id"
            @item-click="logAction"
            :split-button="true"
            @button-click="logButtonClick"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDropDownButton from 'devextreme-vue/drop-down-button';

    const actions = [
        { id: 1, text: "My profile", icon: "user" },
        { id: 2, text: "Messages", icon: "email" },
        { id: 3, text: "Contacts", icon: "group" },
        { id: 4, text: "Log out", icon: "runner" }
    ];

    export default {
        components: {
            DxDropDownButton
        },
        data() {
            return {
                actions
            }
        },
        methods: {
            logAction(e) {
                console.log(e.itemData.text + " was clicked");
            },
            logButtonClick() {
                console.log("Main button was clicked");
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DropDownButton from 'devextreme-react/drop-down-button';

    const actions = [
        { id: 1, text: "My profile", icon: "user" },
        { id: 2, text: "Messages", icon: "email" },
        { id: 3, text: "Contacts", icon: "group" },
        { id: 4, text: "Log out", icon: "runner" }
    ];

    class App extends React.Component {
        logAction(e) {
            console.log(e.itemData.text + " was clicked");
        }

        logButtonClick() {
            console.log("Main button was clicked");
        }

        render() {
            return (
                <DropDownButton
                    text="Sandra Johnson"
                    icon="user"
                    items={actions}
                    keyExpr="id"
                    onItemClick={this.logAction}
                    splitButton={true}
                    onButtonClick={this.logButtonClick}
                />
            );
        }
    }
    export default App;

---

[tags]dxdropdownbutton