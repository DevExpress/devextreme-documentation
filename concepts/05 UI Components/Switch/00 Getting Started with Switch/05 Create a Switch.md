---
##### jQuery

[Add DevExtreme to your jQuery application](/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/) and use the following code to create a Switch component:

    <!-- tab: index.js -->
    $(function() {
        $("#switch").dxSwitch({ });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_23_1/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_23_1/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body>
            <div id="switch"></div>
        </body>
    </html>


##### Angular

[Add DevExtreme to your Angular application](/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/) and use the following code to create a Switch component:

    <!-- tab: app.component.html -->
    <dx-switch></dx-switch>

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";

    @Component({
        selector: "app-root",
        templateUrl: "./app.component.html",
        styleUrls: ["./app.component.css"]
    })
    export class AppComponent {

    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from "@angular/platform-browser";
    import { NgModule } from "@angular/core";
    import { AppComponent } from "./app.component";

    import { DxSwitchModule } from "devextreme-angular";

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxSwitchModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

[Add DevExtreme to your Vue application](/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/) and use the following code to create a Switch component:

    <!-- tab: App.vue -->
    <template>
        <DxSwitch>
        </DxSwitch>
    </template>

    <script>
    import "devextreme/dist/css/dx.light.css";
    import { DxSwitch } from "devextreme-vue/switch";

    export default {
        components: {
            DxSwitch
        }
    }
    </script>

##### React

[Add DevExtreme to your React application](/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/) and use the following code to create a Switch component:

    <!-- tab: App.js -->
    import React from "react";
    import "devextreme/dist/css/dx.light.css";
    import { Switch } from "devextreme-react/switch";

    function App() {
        return (
            <Switch>
            </Switch>
        );
    }

    export default App;

---
