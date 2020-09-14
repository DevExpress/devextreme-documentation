#include tutorials-intro-installationnote

The **Drawer** is a dismissible or permanently visible panel used for navigation in responsive web application layouts.

DevExtreme supplies application templates for <a href="https://devexpress.github.io/devextreme-angular-template/#/home" target="_blank">Angular</a>, <a href="https://devexpress.github.io/devextreme-vue-template/#/home" target="_blank">Vue</a>, and <a href="https://devexpress.github.io/devextreme-react-template/#/home" target="_blank">React</a>. They implement a responsive layout that uses the **Drawer**. You can use these templates instead of following the tutorial. Refer to the documentation on GitHub for more information:

- [DevExtreme Angular Template](/concepts/40%20Angular%20Components/10%20Getting%20Started/02%20Create%20a%20DevExtreme%20Application/00%20Create%20a%20DevExtreme%20Application.md '/Documentation/Guide/Angular_Components/Getting_Started/Create_a_DevExtreme_Application/')
- [DevExtreme Vue Template](/concepts/55%20Vue%20Components/02%20Create%20a%20DevExtreme%20Application/00%20Create%20a%20DevExtreme%20Application.md '/Documentation/Guide/Vue_Components/Create_a_DevExtreme_Application/')
- [DevExtreme React Template](/concepts/50%20React%20Components/02%20Create%20a%20DevExtreme%20Application/00%20Create%20a%20DevExtreme%20Application.md '/Documentation/Guide/React_Components/Create_a_DevExtreme_Application/')

If the templates are unsuitable or you use jQuery, follow the instructions in this tutorial. We create a **Drawer** that allows a user to switch between pages. The **Drawer** is opened and closed via a button on a toolbar.

<div class="simulator-desktop-container drawer-simulator" data-view="/Content/Applications/20_1/GettingStartedWith/Drawer/index.html, /Content/Applications/20_1/GettingStartedWith/Drawer/index.js, /Content/Applications/20_1/GettingStartedWith/Drawer/index.css"></div>

Refer to the subtopics for details on every configuration step. You can also see the full code below:

---
##### jQuery

    <!--tab: index.js-->
    $(function() {
        $("#view").load( "./inbox.html" );

        $("#toolbar").dxToolbar({
            items: [{
                widget: "dxButton",
                location: "before",
                options: {
                    icon: "menu",
                    onClick: function() {
                        drawer.toggle();
                    }
                }
            }]
        });

        const drawer = $("#drawer").dxDrawer({
            minSize: 37,
            height: 250,
            revealMode: "expand",
            openedStateMode: "overlap",
            template: function() {
                const $list = $("<div/>").dxList({
                    items: [
                        { id: 1, text: "Inbox", icon: "message", filePath: "inbox" },
                        { id: 2, text: "Sent Mail", icon: "check", filePath: "sent-mail" },
                        { id: 3, text: "Trash", icon: "trash", filePath: "trash" },
                        { id: 4, text: "Spam", icon: "mention", filePath: "spam" }
                    ],
                    width: 200,
                    height: 200,
                    selectionMode: "single",
                    onSelectionChanged: function(e) {
                        $("#view").load( e.addedItems[0].filePath + ".html" );
                        drawer.hide();
                    }
                });
                return $list;
            }
        }).dxDrawer("instance");
    })

    <!--tab: index.html-->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_20_1/css/dx.common.css">
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_20_1/css/dx.light.css">
            <link rel="stylesheet" href="index.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_20_1/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body>
            <div id="toolbar"></div>
            <div id="drawer">
                <div id="view"></div>
            </div>
        </body>
    </html>

    <!--tab: index.css-->
    .dx-overlay-content {
        background-color: lightgray;
    }
    #toolbar {
        background-color: rgba(191, 191, 191, .15);
        padding: 5px 10px;
    }
    .dx-toolbar-button .dx-button {
        background-color: rgba(191, 191, 191, -0.15);
        border: none;
    }
    .dx-toolbar-button > .dx-toolbar-item-content {
        margin-left: -7px;
    }
    .dx-list-item-icon {
        margin-right: 10px;
    }
    #view {
        margin-left: 10px;
        margin-top: 10px;
    }

    <!--tab: inbox.html-->
    <div>Inbox</div>

    <!--tab: sent-mail.html-->
    <div>Sent Mail</div>

    <!--tab: trash.html-->
    <div>Trash</div>

    <!--tab: spam.html-->
    <div>Spam</div>

##### Angular

    <!-- tab: app.component.html -->
    <dx-toolbar id="toolbar">
        <dxi-item 
            widget="dxButton"
            [options]="buttonOptions"
            location="before">
        </dxi-item>
    </dx-toolbar>
    <dx-drawer
        template="template"
        [height]="250"
        [(opened)]="isDrawerOpen"
        [minSize]="37"
        revealMode="expand"
        openedStateMode="overlap">
        <div *dxTemplate="let data of 'template'">
            <dx-list
                [items]="navigation"
                [width]="200"
                selectionMode="single"
                (onSelectionChanged)="loadView($event)">
            </dx-list>
        </div>
        <div id="view"><router-outlet></router-outlet></div>
    </dx-drawer>

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";
    import { Router } from "@angular/router";

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: []
    })

    export class AppComponent {
        navigation: any;
        isDrawerOpen: Boolean = false;
        buttonOptions: any;

        constructor(private router: Router) {
            this.buttonOptions = {
                icon: "menu",
                onClick: () => {
                    this.isDrawerOpen = !this.isDrawerOpen;
                }
            };
            this.navigation = [
                { id: 1, text: "Inbox", icon: "message", filePath: "inbox" },
                { id: 2, text: "Sent Mail", icon: "check", filePath: "sent-mail" },
                { id: 3, text: "Trash", icon: "trash", filePath: "trash" },
                { id: 4, text: "Spam", icon: "mention", filePath: "spam" }
            ];
        }

        loadView(e) {
            this.router.navigate([e.addedItems[0].filePath]);
            this.isDrawerOpen = false;
        }
    }

    <!-- tab: app.component.css -->
    ::ng-deep .dx-overlay-content {
        background-color: lightgray;
    }
    ::ng-deep #toolbar {
        background-color: rgba(191, 191, 191, .15);
        padding: 5px 10px;
    }
    ::ng-deep .dx-toolbar-button .dx-button {
        background-color: rgba(191, 191, 191, -0.15);
        border: none;
    }
    ::ng-deep .dx-toolbar-button > .dx-toolbar-item-content {
        margin-left: -7px;
    }
    ::ng-deep .dx-list-item-icon {
        margin-right: 10px;
    }
    ::ng-deep #view {
        margin-left: 10px;
        margin-top: 10px;
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from "@angular/platform-browser";
    import { NgModule } from "@angular/core";
    import { AppComponent } from "./app.component";

    import { AppRoutingModule } from "./app-routing.module";
    import { DxDrawerModule, DxToolbarModule, DxListModule } from "devextreme-angular";

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            DxDrawerModule,
            DxToolbarModule,
            DxListModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: app-routing.module.ts -->
    import { NgModule } from "@angular/core";
    import { Routes, RouterModule } from "@angular/router";
    import { InboxComponent } from "./views/inbox.component";
    import { SentMailComponent } from "./views/sent-mail.component";
    import { TrashComponent } from "./views/trash.component";
    import { SpamComponent } from "./views/spam.component";

    const routes: Routes = [
        { path: '', redirectTo: '/inbox', pathMatch: 'full' },
        { path: 'inbox', component: InboxComponent },
        { path: 'sent-mail', component: SentMailComponent },
        { path: 'trash', component: TrashComponent },
        { path: 'spam', component: SpamComponent },
    ];

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
        declarations: [
            InboxComponent,
            SentMailComponent,
            TrashComponent,
            SpamComponent
        ]
    })
    export class AppRoutingModule { }

    <!-- tab: inbox.component.ts -->
    import { Component } from "@angular/core";

    @Component({
        selector: 'app-inbox',
        template: '<div>Inbox</div>'
    })
    export class InboxComponent { constructor() { } }

    <!-- tab: sent-mail.component.ts -->
    import { Component } from "@angular/core";

    @Component({
        selector: 'app-sent-mail',
        template: '<div>Sent Mail</div>'
    })
    export class SentMailComponent { constructor() { } }

    <!-- tab: spam.component.ts -->
    import { Component } from "@angular/core";

    @Component({
        selector: 'app-spam',
        template: '<div>Spam</div>'
    })
    export class SpamComponent { constructor() { } }

    <!-- tab: trash.component.ts -->
    import { Component } from "@angular/core";

    @Component({
        selector: 'app-trash',
        template: '<div>Trash</div>'
    })
    export class TrashComponent { constructor() { } }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxToolbar id="toolbar">
                <DxItem
                    widget="dxButton"
                    :options="buttonOptions"
                    location="before"
                />
            </DxToolbar>
            <DxDrawer
                opened-state-mode="overlap"
                reveal-mode="expand"
                :opened.sync="isDrawerOpen"
                :minSize="37"
                :height="250"
                template="list">
                <template #list>
                    <NavigationList
                        @navigated="isDrawerOpen = false"
                    />
                </template>
                <div id="view">
                    <router-view></router-view>
                </div>
            </DxDrawer>
        </div>
    </template>

    <script>
    import DxDrawer from 'devextreme-vue/drawer';
    import DxToolbar, { DxItem } from 'devextreme-vue/toolbar';
    import NavigationList from './components/NavigationList.vue';

    export default {
        components: {
            DxDrawer,
            DxToolbar,
            DxItem,
            NavigationList
        },
        data() {
            return {
                buttonOptions: {
                    icon: "menu",
                    onClick: () => {
                        this.isDrawerOpen = !this.isDrawerOpen;
                    }
                },
                isDrawerOpen: false
            };
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
    #toolbar {
        background-color: rgba(191, 191, 191, 0.15);
        padding: 5px 10px;
    }
    .dx-toolbar-button .dx-button {
        background-color: rgba(191, 191, 191, -0.15);
        border: none;
    }
    .dx-toolbar-button > .dx-toolbar-item-content {
        margin-left: -7px;
    }
    .dx-list-item-icon {
        margin-right: 10px;
    }
    </style>

    <!-- tab: NavigationList.vue -->
    <template>
        <DxList
            :width="200"
            selection-mode="single"
            :items="navigation"
            @selection-changed="loadView($event)"
        />
    </template>
    <script>
    import { DxList } from "devextreme-vue/list";

    export default {
        components: {
            DxList
        },
        data() {
            const navigation = [
                { id: 1, text: "Inbox", icon: "message", filePath: "inbox" },
                { id: 2, text: "Sent Mail", icon: "check", filePath: "sent-mail" },
                { id: 3, text: "Trash", icon: "trash", filePath: "trash" },
                { id: 4, text: "Spam", icon: "mention", filePath: "spam" }
            ];
            return {
                navigation
            };
        },
        methods: {
            loadView(e) {
                this.$router.push(e.addedItems[0].filePath);
                this.$emit('navigated');
            }
        }
    }
    </script>

    <!-- tab: main.js -->
    import Vue from 'vue';
    import VueRouter from 'vue-router';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import App from './App.vue';
    import InboxComponent from "./components/Inbox.vue";
    import SentMailComponent from "./components/SentMail.vue";
    import TrashComponent from "./components/Trash.vue";
    import SpamComponent from "./components/Spam.vue";

    Vue.config.productionTip = false;

    Vue.use(VueRouter);

    const routes = [
        { path: "", redirect: "/inbox" },
        { path: "/inbox", component: InboxComponent },
        { path: "/sent-mail", component: SentMailComponent },
        { path: "/trash", component: TrashComponent },
        { path: "/spam", component: SpamComponent }
    ];

    const router = new VueRouter({
        mode: "history",
        routes
    });

    new Vue({
        render: h => h(App),
        router
    }).$mount('#app')

    <!-- tab: Inbox.vue -->
    <template>
        <div>Inbox</div>
    </template>

    <script>
    export default {}
    </script>

    <!-- tab: SentMail.vue -->
    <template>
        <div>Sent mail</div>
    </template>

    <script>
    export default {}
    </script>

    <!-- tab: Spam.vue -->
    <template>
        <div>Spam</div>
    </template>

    <script>
    export default {}
    </script>

    <!-- tab: Trash.vue -->
    <template>
        <div>Trash</div>
    </template>

    <script>
    export default {}
    </script>

##### React

    <!-- tab: DxComponent.js -->
    import React from "react";
     
    import "devextreme/dist/css/dx.common.css";
    import "devextreme/dist/css/dx.light.css";
    import "./DxComponent.css";
    
    import { Drawer } from "devextreme-react/drawer";
    import { Toolbar, Item } from "devextreme-react/toolbar";
    import NavigationList from "./NavigationList";
    
    import { Router, Route } from "react-router-dom";
    
    import Inbox from "./views/Inbox";
    import Trash from "./views/Trash";
    import SentMail from "./views/SentMail";
    import Spam from "./views/Spam";
    
    import history from "./history";

    class DxComponent extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                isDrawerOpen: false
            };
            this.buttonOptions = {
                icon: "menu",
                onClick: () => {
                    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
                }
            };
        }
        
        renderList = () => {
            const stateHandler = (newState) => this.setState(newState);
            return (
                <NavigationList stateHandler={stateHandler} />
            );
        }
        
        render() {
            return (
                <React.Fragment>
                    <Toolbar id="toolbar">
                        <Item 
                            widget="dxButton" 
                            options={this.buttonOptions} 
                            location="before" />
                    </Toolbar>
                    <Drawer
                        minSize={37}
                        height={250}
                        revealMode="expand"
                        openedStateMode="overlap"
                        render={this.renderList}
                        opened={this.state.isDrawerOpen} >
                        <div id="view">
                            <Router history={history}>
                                <div>
                                    <Route exact path="/" component={Inbox} />
                                    <Route exact path="/inbox" component={Inbox} />
                                    <Route exact path="/sent-mail" component={SentMail} />
                                    <Route exact path="/spam" component={Spam} />
                                    <Route exact path="/trash" component={Trash} />
                                </div>
                            </Router>
                        </div>
                    </Drawer>
                </React.Fragment>
            );
        }
    }
    export default DxComponent;

    <!-- tab: NavigationList.js -->
    import React from "react";
    import List from "devextreme-react/list";
    import history from "./history";
    
    const navigation = [
        { id: 1, text: "Inbox", icon: "message", filePath: "inbox" },
        { id: 2, text: "Sent Mail", icon: "check", filePath: "sent-mail" },
        { id: 3, text: "Trash", icon: "trash", filePath: "trash" },
        { id: 4, text: "Spam", icon: "mention", filePath: "spam" }
    ];
    
    class NavigationList extends React.PureComponent {
        loadView = (e) => {
            history.push(e.addedItems[0].filePath);
            this.props.stateHandler({ isDrawerOpen: false });
        }
        render() {
            return (
                <React.Fragment>
                    <List
                        items={navigation}
                        width={200} 
                        selectionMode="single"
                        onSelectionChanged={this.loadView} />
                </React.Fragment>
            );
        }
    }
    export default NavigationList;

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

    <!-- tab: history.js -->
    import { createBrowserHistory } from "history"

    export default createBrowserHistory()

    <!-- tab: DxComponent.css -->
    .dx-overlay-content {
        background-color: lightgray;
    }
    #toolbar {
        background-color: rgba(191, 191, 191, .15);
        padding: 5px 10px;
    }
    .dx-toolbar-button .dx-button {
        background-color: rgba(191, 191, 191, -0.15);
        border: none;
    }
    .dx-toolbar-button > .dx-toolbar-item-content {
        margin-left: -7px;
    }
    .dx-list-item-icon {
        margin-right: 10px;
    }
    #view {
        margin-left: 10px;
        margin-top: 10px;
    }

    <!-- tab: Inbox.js -->
    import React from "react";

    class Inbox extends React.Component {
        render() {
            return (
                <div>Inbox</div>
            );
        }
    }
    export default Inbox;

    <!-- tab: SentMail.js -->
    import React from "react";

    class SentMail extends React.Component {
        render() {
            return (
                <div>Sent Mail</div>
            );
        }
    }
    export default SentMail;

    <!-- tab: Spam.js -->
    import React from "react";

    class Spam extends React.Component {
        render() {
            return (
                <div>Spam</div>
            );
        }
    }
    export default Spam;

    <!-- tab: Trash.js -->
    import React from "react";

    class Trash extends React.Component {
        render() {
            return (
                <div>Trash</div>
            );
        }
    }
    export default Trash;

##### ASP.NET MVC Controls

    <!-- tab: _Layout.cshtml -->
    @(Html.DevExtreme().Toolbar()
        .ID("layout-toolbar")
        .Items(items => {
            items.Add().Widget(w => w.Button()
                .Icon("menu")
                .OnClick("button_clickHandler")
            ).Location(ToolbarItemLocation.Before);
        })
    )

    @(Html.DevExtreme().Drawer()
        .ID("layout-drawer")
        .MinSize(37)
        .Height(250)
        .Opened(new JS("JSON.parse(sessionStorage.getItem('isDrawerOpen'))"))
        .RevealMode(DrawerRevealMode.Expand)
        .OpenedStateMode(DrawerOpenedStateMode.Overlap)        
        .Template(@<text>
            @(Html.DevExtreme().List()
                .Width(200)
                .OnInitialized("list_onInitialized")
                .Items(items => {
                    items.Add().Text("Inbox").Icon("message").Option("path", @Url.Action("Index"));
                    items.Add().Text("Sent Mail").Icon("check").Option("path", @Url.Action("Sent"));
                    items.Add().Text("Deleted").Icon("trash").Option("path", @Url.Action("Deleted"));
                    items.Add().Text("Spam").Icon("mention").Option("path", @Url.Action("Spam"));
                })
                .KeyExpr("path")
                .SelectionMode(ListSelectionMode.Single)
                .OnSelectionChanged("list_onSelectionChanged")
            )
        </text>)
        .Content(@<text>@RenderBody()</text>)
    )
 
    <script type="text/javascript">
        function button_clickHandler() {
            const drawer = $("#layout-drawer").dxDrawer("instance");
            drawer.toggle();
            sessionStorage.setItem("isDrawerOpen", JSON.stringify(drawer.option("opened")));
        }

        function list_onSelectionChanged(e) {
            document.location.pathname = e.addedItems[0].path;
            $("#layout-drawer").dxDrawer("hide");
        }

        function list_onInitialized(e) {
            const t = "@Url.Action()";
            e.component.option("selectedItemKeys", [ "@Url.Action()" ])
        }
    </script>
    
    <!-- tab: HomeController.cs -->
    using System.Web.Mvc;

    namespace DevExtremeApp.Controllers {
        public class HomeController : Controller {
            public ActionResult Index() {
                return View();
            }

            public ActionResult Deleted() {
                return View();
            }

            public ActionResult Sent() {
                return View();
            }

            public ActionResult Spam() {
                return View();
            }
        }
    }

    <!-- tab: Site.css -->
    .dx-overlay-content {
        background-color: lightgray;
    }

    .drawer-view-content {
        margin-left: 10px;
        margin-top: 10px;
    }

    #layout-toolbar {
        background-color: rgba(191, 191, 191, .15);
        padding: 5px 10px;
    }

    #layout-toolbar .dx-toolbar-button .dx-button {
        background-color: rgba(191, 191, 191, -0.15);
        border: none;
    }

    #layout-toolbar .dx-toolbar-button > .dx-toolbar-item-content {
        margin-left: -7px;
    }

    #layout-toolbar .dx-list-item-icon {
        margin-right: 10px;
    }

    <!-- tab: Index.cshtml -->
    <div class="drawer-view-content">Inbox</div>

    <!-- tab: Deleted.cshtml -->
    <div class="drawer-view-content">Deleted</div>

    <!-- tab: Sent.cshtml -->
    <div class="drawer-view-content">Sent</div>

    <!-- tab: Spam.cshtml -->
    <div class="drawer-view-content">Spam</div>

---

[tags]dxdrawer
