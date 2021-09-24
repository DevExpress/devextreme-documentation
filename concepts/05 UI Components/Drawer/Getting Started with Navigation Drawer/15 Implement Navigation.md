The Drawer is designed to contain navigation items. If they should nest other items, use the [TreeView](/api-reference/10%20UI%20Components/dxTreeView '/Documentation/ApiReference/UI_Components/dxTreeView/') UI component to implement navigation. Otherwise, use the [List](/api-reference/10%20UI%20Components/dxList '/Documentation/ApiReference/UI_Components/dxList/'), as done in this tutorial.

Each list item should navigate to a different view. To implement this, follow the steps below:

---
##### jQuery

1. **Enable item selection**        

    Set the [selectionMode](/api-reference/10%20UI%20Components/dxList/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectionMode') to *"single"*. If you use the TreeView, you should also set the [selectByClick](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/selectByClick.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#selectByClick') property to **true**.

1. **Navigate to a view when selection is changed**

    In the [onSelectionChanged](/api-reference/10%20UI%20Components/dxList/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#onSelectionChanged') event handler, load the new view and [hide](/api-reference/10%20UI%20Components/dxDrawer/3%20Methods/hide().md '/Documentation/ApiReference/UI_Components/dxDrawer/Methods/#hide') the Drawer.

<!-- -->

    <!--tab: index.js-->
    $(function() {
        // Loads the initial page
        $("#view" ).load( "./pages/inbox.html" );

        const drawer = $("#drawer").dxDrawer({
            // ...
            template: function(e) {
                const $list = $("<div/>").dxList({
                    items: [
                        { id: 1, text: "Inbox", icon: "message", path: "inbox" },
                        { id: 2, text: "Sent Mail", icon: "check", path: "sent-mail" },
                        { id: 3, text: "Trash", icon: "trash", path: "trash" },
                        { id: 4, text: "Spam", icon: "mention", path: "spam" }
                    ],
                    width: 200,
                    selectionMode: "single",
                    onSelectionChanged: function(e) {
                        $("#view").load( "./pages/" + e.addedItems[0].path + ".html" );
                        drawer.hide();
                    }
                });
                return $list;
            }
        }).dxDrawer("instance");
    })

    <!--tab: index.html-->
    <div id="toolbar"></div>
    <div id="drawer">
        <div id="view"></div>
    </div>

    <!--tab: style.css-->
    /* ... */
    .dx-list-item-icon {
        margin-right: 10px;
    }

    <!--tab: pages/inbox.html-->
    <div>Inbox</div>

    <!--tab: pages/sent-mail.html-->
    <div>Sent Mail</div>

    <!--tab: pages/trash.html-->
    <div>Trash</div>

    <!--tab: pages/spam.html-->
    <div>Spam</div>

##### Angular

1. **Configure routing**

    Specify routes and set up the router in the `AppRountingModule`.

1. **Define an [itemTemplate](/api-reference/10%20UI%20Components/dxList/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemTemplate')**

    Specify the elements that the template should render and wrap them in an element with the <a href="https://angular.io/api/router/RouterLink" target="_blank">RouterLink</a> directive. In the code below, the *"links"* **itemTemplate** renders an icon and text.

1. **Enable item selection**

    Set the [selectionMode](/api-reference/10%20UI%20Components/dxList/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectionMode') to *"single"*. If you use the TreeView, you should also set the [selectByClick](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/selectByClick.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#selectByClick') property to **true**. In the [onSelectionChanged](/api-reference/10%20UI%20Components/dxList/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#onSelectionChanged') event handler, close the Drawer.

<!-- -->

    <!-- tab: app.component.html -->
    <dx-drawer ... >
        <div *dxTemplate="let data of 'template'">
            <dx-list
                [items]="navigation"
                [width]="200"
                selectionMode="single"
                (onSelectionChanged)="this.isDrawerOpen = false"
                itemTemplate="links">
                <div *dxTemplate="let link of 'links'">
                    <a [routerLink]="['/' + link.path]">
                        <div>
                            <div class="dx-list-item-icon-container">
                                <i class="dx-icon dx-list-item-icon dx-icon-{{link.icon}}"></i>
                            </div>
                            <span>{{ link.text }}</span>
                        </div>
                    </a>
                </div>
            </dx-list>
        </div>
        <div id="view">
            <router-outlet></router-outlet>
        </div>
    </dx-drawer>

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";

    #include angular-component-decorator
    export class AppComponent {
        navigation: any[] = [
            { id: 1, text: "Inbox", icon: "message", path: "inbox" },
            { id: 2, text: "Sent Mail", icon: "check", path: "sent-mail" },
            { id: 3, text: "Trash", icon: "trash", path: "trash" },
            { id: 4, text: "Spam", icon: "mention", path: "spam" }
        ];
        isDrawerOpen: Boolean = false;
    }

    <!-- tab: app.component.css -->
    /* ... */
    ::ng-deep .dx-list-item-icon {
        margin-right: 10px;
    }

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

    <!-- tab: app.module.ts -->
    import { AppRoutingModule } from "./app-routing.module";
    import { DxDrawerModule, DxToolbarModule, DxListModule } from "devextreme-angular";
    // ...
    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            // ...
            AppRoutingModule,
            DxDrawerModule,
            DxToolbarModule,
            DxListModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

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

1. **Install <a href="https://router.vuejs.org/" target="_blank">Vue Router</a>**

        npm install vue-router

1. **Configure routing**

    Specify routes and set up the router in the `main.js` file.

1. **Define an [itemTemplate](/api-reference/10%20UI%20Components/dxList/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemTemplate')**

    Specify the elements that the template should render and wrap them in a <a href="https://router.vuejs.org/api/#router-link" target="_blank">`<router-link>`</a> component. In the code below, the *"links"* **itemTemplate** renders an icon and text.

1. **Enable item selection**

    Set the [selectionMode](/api-reference/10%20UI%20Components/dxList/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectionMode') to *"single"*. If you use the TreeView, you should also set the [selectByClick](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/selectByClick.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#selectByClick') property to **true**. In the [onSelectionChanged](/api-reference/10%20UI%20Components/dxList/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#onSelectionChanged') event handler, close the Drawer.

<!-- -->

    <!-- tab: NavigationList.vue -->
    <template>
        <DxList
            :width="200"
            selection-mode="single"
            :items="navigation"
            item-template="links"
            @selection-changed="navigate">
            <template #links="{ data }">
                <div>
                    <router-link :to="'/' + data.path">
                        <div>
                            <div class="dx-list-item-icon-container">
                                <i class="dx-icon dx-list-item-icon" :class="'dx-icon-' + data.icon"></i>
                            </div>
                            <span>{{ data.text }}</span>
                        </div>
                    </router-link>
                </div>
            </template>
        </DxList>
    </template>
    <script>
    import { DxList } from "devextreme-vue/list";

    export default {
        components: {
            DxList
        },
        data() {
            const navigation = [
                { id: 1, text: "Inbox", icon: "message", path: "inbox" },
                { id: 2, text: "Sent Mail", icon: "check", path: "sent-mail" },
                { id: 3, text: "Trash", icon: "trash", path: "trash" },
                { id: 4, text: "Spam", icon: "mention", path: "spam" }
            ];
            return {
                navigation
            };
        },
        methods: {
            navigate() {
                this.$emit('navigated');
            }
        }
    }
    </script>

    <!-- tab: App.vue -->
    <template>
        <div>
            <!-- ... -->
            <DxDrawer ...
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
    // ...
    import NavigationList from './components/NavigationList.vue';

    export default {
        components: {
            // ...
            NavigationList
        },
        // ...
    };
    </script>

    <style>
    /* ... */
    .dx-list-item-icon {
        margin-right: 10px;
    }
    </style>

    <!-- tab: main.js -->
    import Vue from 'vue';
    import VueRouter from 'vue-router';

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

1. **Install <a href="https://reactrouter.com/" target="_blank">React Router</a>**

        npm install react-router-dom --save

1. **Configure routing**

    Wrap the entire `App` component in a `BrowserRouter` and add a <a href="https://reactrouter.com/web/api/Route" target="_blank">`Route`</a> that renders the `NavigationDrawer` component. Define other `Routes` within the `Drawer` markup in the `NavigationDrawer` component.

1. **Define the [itemRender](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemRender.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemRender') function**

    Specify the elements that the function should render and wrap them in a <a href="https://reactrouter.com/web/api/Link" target="_blank">`Link`</a>. In the code below, the `renderItem` function renders an icon and text.

1. **Enable item selection**

    Set the [selectionMode](/api-reference/10%20UI%20Components/dxList/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectionMode') to *"single"*. If you use the TreeView, you should also set the [selectByClick](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/selectByClick.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#selectByClick') property to **true**. In the [onSelectionChanged](/api-reference/10%20UI%20Components/dxList/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#onSelectionChanged') event handler, close the Drawer.

<!-- -->

    <!-- tab: App.js -->
    // ...
    import { BrowserRouter, Route } from 'react-router-dom'

    class App extends Component {
        render() {
            return (
                <BrowserRouter>
                    <div className="App">
                        <Route component={NavigationDrawer} />
                    </div>
                </BrowserRouter>
            );
        }
    }
    export default App;


    <!-- tab: NavigationDrawer.js -->
    // ...
    import NavigationList from "./NavigationList";

    import { Switch, Route } from "react-router-dom";

    import Inbox from "./views/Inbox";
    import Trash from "./views/Trash";
    import SentMail from "./views/SentMail";
    import Spam from "./views/Spam";

    class NavigationDrawer extends React.Component {
        // ...
        renderList = () => {
            const stateHandler = (newState) => this.setState(newState);
            return (
                <NavigationList stateHandler={stateHandler} />
            );
        }

        render() {
            return (
                <React.Fragment>
                    { /* ... */ }
                    <Drawer ...
                        render={this.renderList}>
                        <div id="view">
                            <Switch>
                                <Route exact path="/" component={Inbox} />
                                <Route exact path="/inbox" component={Inbox} />
                                <Route exact path="/sent-mail" component={SentMail} />
                                <Route exact path="/spam" component={Spam} />
                                <Route exact path="/trash" component={Trash} />
                            </Switch>
                        </div>
                    </Drawer>
                </React.Fragment>
            );
        }
    }
    export default NavigationDrawer;

    <!-- tab: NavigationList.js -->
    import React from "react";
    import List from "devextreme-react/list";
    import { Link } from "react-router-dom";

    const navigation = [
        { id: 1, text: "Inbox", icon: "message", path: "inbox" },
        { id: 2, text: "Sent Mail", icon: "check", path: "sent-mail" },
        { id: 3, text: "Trash", icon: "trash", path: "trash" },
        { id: 4, text: "Spam", icon: "mention", path: "spam" }
    ];

    class NavigationList extends React.PureComponent {
        closeDrawer = () => {
            this.props.stateHandler({ isDrawerOpen: false });
        }

        renderItem = (data) => {
            return (
                <div>
                    <Link to={'/' + data.path}>
                        <div>
                            <div className="dx-list-item-icon-container">
                                <i className={`dx-icon dx-list-item-icon dx-icon-${data.icon}`}></i>
                            </div>
                            <span>{data.text}</span>
                        </div>
                    </Link>
                </div>
            );
        }

        render() {
            return (
                <React.Fragment>
                    <List
                        items={navigation}
                        width={200} 
                        selectionMode="single"
                        onSelectionChanged={this.closeDrawer}
                        itemRender={this.renderItem}
                    />
                </React.Fragment>
            );
        }
    }
    export default NavigationList;

    <!-- tab: NavigationDrawer.css -->
    /* ... */
    .dx-list-item-icon {
        margin-right: 10px;
    }

    <!-- tab: views/Inbox.js -->
    import React from "react";

    class Inbox extends React.Component {
        render() {
            return (
                <div>Inbox</div>
            );
        }
    }
    export default Inbox;

    <!-- tab: views/SentMail.js -->
    import React from "react";

    class SentMail extends React.Component {
        render() {
            return (
                <div>Sent Mail</div>
            );
        }
    }
    export default SentMail;

    <!-- tab: views/Spam.js -->
    import React from "react";

    class Spam extends React.Component {
        render() {
            return (
                <div>Spam</div>
            );
        }
    }
    export default Spam;

    <!-- tab: views/Trash.js -->
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

1. **Enable item selection**        

    Set the [selectionMode](/api-reference/10%20UI%20Components/dxList/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectionMode') to *"single"*. If you use the TreeView, you should also set the [selectByClick](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/selectByClick.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#selectByClick') property to **true**.

1. **Navigate to a view when selection is changed**

    In the [onSelectionChanged](/api-reference/10%20UI%20Components/dxList/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#onSelectionChanged') event handler, load the new view and [hide](/api-reference/10%20UI%20Components/dxDrawer/3%20Methods/hide().md '/Documentation/ApiReference/UI_Components/dxDrawer/Methods/#hide') the Drawer.

<!-- -->

    <!-- tab: _Layout.cshtml -->
    @(Html.DevExtreme().Toolbar()
        // ...
    )
    @(Html.DevExtreme().Drawer()
        .ID("layout-drawer")   
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
            // ...
            sessionStorage.setItem("isDrawerOpen", JSON.stringify(drawer.option("opened")));
        }

        function list_onSelectionChanged(e) {
            const drawer = $("#layout-drawer").dxDrawer("instance");
            drawer.hide();
            sessionStorage.setItem("isDrawerOpen", JSON.stringify(drawer.option("opened")));
            document.location.pathname = e.addedItems[0].path;
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
    /* ... */
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

Run the code, open the Drawer, and click its items to change the views.
