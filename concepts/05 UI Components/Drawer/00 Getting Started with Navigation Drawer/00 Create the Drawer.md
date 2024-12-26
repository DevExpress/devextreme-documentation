To create the Drawer component, you need to specify its content [template](/api-reference/10%20UI%20Components/dxDrawer/1%20Configuration/template.md '/Documentation/ApiReference/UI_Components/dxDrawer/Configuration/#template'). The image below shows the difference between Drawer and view content:

![DevExtreme HTML5 JavaScript Drawer](/images/UiWidgets/drawer.png)

Wrap the view in the Drawer in HTML markup. Then, specify a [template](/api-reference/10%20UI%20Components/dxDrawer/1%20Configuration/template.md '/Documentation/ApiReference/UI_Components/dxDrawer/Configuration/#template') for the Drawer's content. 

It is important to specify the Drawer's [height](/api-reference/10%20UI%20Components/dxDrawer/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxDrawer/Configuration/#height') and [width](/api-reference/10%20UI%20Components/dxDrawer/1%20Configuration/width.md '/Documentation/ApiReference/UI_Components/dxDrawer/Configuration/#width'). Alternatively, if you implement a UI component within the Drawer component's content, you can specify the component's **width** property and set the view's **height**. The Drawer's height automatically adjusts to the view's height in this case. Refer to the following topic for details: [Implement Navigation](/concepts/05%20UI%20Components/Drawer/00%20Getting%20Started%20with%20Navigation%20Drawer/15%20Implement%20Navigation.md '/Documentation/Guide/UI_Components/Drawer/Getting_Started_with_Navigation_Drawer/#Implement_Navigation').

[note]You cannot set the Drawer's height or width as a percentage.

This tutorial uses the `width` CSS property of the Drawer's nested HTML element and specifies the component's [height](/api-reference/10%20UI%20Components/dxDrawer/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxDrawer/Configuration/#height') property.

You can also specify the [minSize](/api-reference/10%20UI%20Components/dxDrawer/1%20Configuration/minSize.md '/Documentation/ApiReference/UI_Components/dxDrawer/Configuration/#minSize') property to make the Drawer partially visible when it is closed. 

---
##### jQuery

    <!--tab: index.html-->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_1/css/dx.light.css">
            <link rel="stylesheet" href="index.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body>
            <div id="drawer">
                <div id="view">View content</div>
            </div>
        </body>
    </html>

    <!--tab: index.js-->
    $(function() {
        $("#drawer").dxDrawer({
            template: function(e) {
                return $("<div style='width: 150px'>Drawer content</div>");
            },
            height: 250,
            minSize: 37
        });
    });

    <!--tab: index.css-->
    .dx-overlay-content {
        background-color: lightgray;
    }
    #view {
        margin-left: 10px;
        margin-top: 10px;
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-drawer
        template="template"
        [height]="250"
        [minSize]="37">
        <div *dxTemplate="let data of 'template'">
            <div style="width: 150px">Drawer content</div>
        </div>
        <div>View content</div>
    </dx-drawer>

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from "@angular/platform-browser";
    import { NgModule } from "@angular/core";
    import { AppComponent } from "./app.component";

    import { DxDrawerModule } from "devextreme-angular";

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDrawerModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: app.component.css -->
    ::ng-deep .dx-overlay-content {
        background-color: lightgray;
    }
    ::ng-deep #view {
        margin-left: 10px;
        margin-top: 10px;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxDrawer
                :minSize="37"
                :height="250"
                template="list">
                <template #list>
                    <div style="width: 150px">Drawer content</div>
                </template>
                <div id="view">
                    <div>View content</div>
                </div>
            </DxDrawer>
        </div>
    </template>

    <script>
    import DxDrawer from 'devextreme-vue/drawer';

    export default {
        components: {
            DxDrawer
        }
    };
    </script>

    <style>
    .dx-overlay-content {
        background-color: lightgray;
    }
    #view {
        margin-left: 10px;
        margin-top: 10px;
    }
    </style>

##### React 

    <!-- tab: NavigationDrawer.js -->
    import React from "react";
    
    import "devextreme/dist/css/dx.light.css";
    import "./NavigationDrawer.css";

    import { Drawer } from "devextreme-react/drawer";

    function NavigationDrawer() {
        return (
            <div>
                <Drawer
                    minSize={37}
                    height={250}
                    render={ () => <div style={{width: 150 + "px"}}>Drawer content</div> }
                >
                    <div>View content</div>
                </Drawer>
            </div>
        );
    }

    export default NavigationDrawer;

    <!-- tab: NavigationDrawer.css -->
    .dx-overlay-content {
        background-color: lightgray;
    }
    #view {
        margin-left: 10px;
        margin-top: 10px;
    }

    <!-- tab: App.js -->
    import 'devextreme/dist/css/dx.light.css';
    import './App.css';
    import NavigationDrawer from "./components/NavigationDrawer";

    function App() {
        return (
            <div>
                <NavigationDrawer />
            </div>
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!-- tab: _Layout.cshtml -->
    @(Html.DevExtreme().Drawer()
        .ID("layout-drawer")
        .Height(250)
        .MinSize(37)
        .Template(@<text><div style="width: 150px">Drawer content</div></text>)
        .Content(@<text><div id=".drawer-view-content">View content</div></text>)
    )

    <!-- tab: Site.css -->
    .dx-overlay-content {
        background-color: lightgray;
    }

    .drawer-view-content {
        margin-left: 10px;
        margin-top: 10px;
    }

---

If you run the code, you can see a partially visible Drawer and a view that displays *View content*.

[note]The Drawer UI component is not designed to contain another Drawer. Do not use nested Drawers to avoid possible issues in your application.
