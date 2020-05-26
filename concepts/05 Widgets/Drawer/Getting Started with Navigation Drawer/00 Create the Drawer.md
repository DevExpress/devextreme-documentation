Wrap the view in the **Drawer** and specify a [template](/api-reference/10%20UI%20Widgets/dxDrawer/1%20Configuration/template.md '/Documentation/ApiReference/UI_Widgets/dxDrawer/Configuration/#template') for the **Drawer**'s content. Inside the **template**, set the **Drawer**'s width. You can use the nested widget's **width** option for this (see [Implement Navigation](/concepts/05%20Widgets/Drawer/Getting%20Started%20with%20Navigation%20Drawer/15%20Implement%20Navigation.md '/Documentation/Guide/Widgets/Drawer/Getting_Started_with_Navigation_Drawer/#Implement_Navigation')), but in this tutorial, we use the `width` CSS property. The **Drawer**'s height adjusts to the view's height (specified via the [height](/api-reference/10%20UI%20Widgets/dxDrawer/1%20Configuration/height.md '/Documentation/ApiReference/UI_Widgets/dxDrawer/Configuration/#height') option).

In addition, you can specify the [minSize](/api-reference/10%20UI%20Widgets/dxDrawer/1%20Configuration/minSize.md '/Documentation/ApiReference/UI_Widgets/dxDrawer/Configuration/#minSize') option to make the **Drawer** partially visible in the closed state. 

---
##### jQuery

    <!--tab: index.html-->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_20_2/css/dx.common.css">
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_20_2/css/dx.light.css">
            <link rel="stylesheet" href="index.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_20_2/js/dx.all.js"></script>
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

    <!-- tab: DxComponent.js -->
    import React from "react";
    
    import "devextreme/dist/css/dx.common.css";
    import "devextreme/dist/css/dx.light.css";
    import "./DxComponent.css";

    import { Drawer } from "devextreme-react/drawer";

    class DxComponent extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <React.Fragment>
                    <Drawer
                        minSize={37}
                        height={250}
                        render={ () => <div style="width: 150px">Drawer content</div> } >
                        <div>View content</div>
                    </Drawer>
                </React.Fragment>
            );
        }
    }
    export default DxComponent;

    <!-- tab: DxComponent.css -->
    .dx-overlay-content {
        background-color: lightgray;
    }
    #view {
        margin-left: 10px;
        margin-top: 10px;
    }

    <!-- tab: App.js -->
    import React, { Component } from "react";

    import DxComponent from "./components/DxComponent";

    class App extends Component {
        render() {
            return (
                <div className="App">
                    <DxComponent />
                </div>
            );
        }
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

If you run the code, you should see a partially visible **Drawer** and a view that displays *View content*.
