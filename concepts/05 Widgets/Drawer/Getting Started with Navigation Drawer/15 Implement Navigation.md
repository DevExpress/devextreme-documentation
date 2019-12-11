The **Drawer** is designed to contain navigation items. If they should nest other items, use the [TreeView](/api-reference/10%20UI%20Widgets/dxTreeView '/Documentation/ApiReference/UI_Widgets/dxTreeView/') widget to implement navigation. Otherwise, use the [List](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/').

These widgets provide the **onSelectionChanged** function in which we can implement the navigation logic. However, this function is executed only if you enable selection. In the **TreeView**, set the [selectionMode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectionMode') to *"single"* and assign **true** to [selectByClick](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/selectByClick.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectByClick'); in the **List**, set the [selectionMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectionMode') to *"single"*.

In this tutorial, we use the **List**:

---
#####jQuery

    <!--tab: index.js-->
    $(function() {
        // Loads the initial page
        $("#view" ).load( "./inbox.html" );

        var drawer = $("#drawer").dxDrawer({
            // ...
            template: function(e) {
                var $list = $("<div/>").dxList({
                    items: [
                        { id: 1, text: "Inbox", icon: "message", filePath: "inbox" },
                        { id: 2, text: "Sent Mail", icon: "check", filePath: "sent-mail" },
                        { id: 3, text: "Trash", icon: "trash", filePath: "trash" },
                        { id: 4, text: "Spam", icon: "mention", filePath: "spam" }
                    ],
                    width: 200,
                    selectionMode: "single",
                    onSelectionChanged: function(e) {
                        $("#view").load( e.addedItems[0].filePath + ".html" );
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

    <!--tab: inbox.html-->
    <div>Inbox</div>

    <!--tab: sent-mail.html-->
    <div>Sent Mail</div>

    <!--tab: trash.html-->
    <div>Trash</div>

    <!--tab: spam.html-->
    <div>Spam</div>

#####Angular

    <!-- tab: app.component.html -->
    <dx-drawer ... >
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
        isOpened: Boolean = false;

        constructor(private router: Router) {
            this.navigation = [
                { id: 1, text: "Inbox", icon: "message", filePath: "inbox" },
                { id: 2, text: "Sent Mail", icon: "check", filePath: "sent-mail" },
                { id: 3, text: "Trash", icon: "trash", filePath: "trash" },
                { id: 4, text: "Spam", icon: "mention", filePath: "spam" }
            ];
        }
        loadView(e) {
            this.router.navigate([e.addedItems[0].filePath])
        }
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

##### ASP.NET MVC Controls

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
            sessionStorage.setItem("drawerOpened", JSON.stringify(drawer.option("opened")));
        }

        function list_onSelectionChanged(e) {
            document.location.pathname = e.addedItems[0].path;
        }

        function list_onInitialized(e) {
            var t = "@Url.Action()";
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

#####React

    <!-- tab: DxComponent.js -->
    // ...
    import NavigationList from "./NavigationList.js";

    import { Router, Route } from "react-router-dom";

    import Inbox from "./views/Inbox.js";
    import Trash from "./views/Trash.js";
    import SentMail from "./views/SentMail.js";
    import Spam from "./views/Spam.js";

    import history from "./history";

    class DxComponent extends React.Component {
        render() {
            return (
                <React.Fragment>
                    <Drawer ...
                        component={NavigationList} >
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
    import List from "devextreme-react/list.js";
    import history from "./history";

    const navigation = [
        { id: 1, text: "Inbox", icon: "message", filePath: "inbox" },
        { id: 2, text: "Sent Mail", icon: "check", filePath: "sent-mail" },
        { id: 3, text: "Trash", icon: "trash", filePath: "trash" },
        { id: 4, text: "Spam", icon: "mention", filePath: "spam" }
    ];

    class NavigationList extends React.PureComponent {
        loadView(e) {
            history.push(e.addedItems[0].filePath);
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

    <!-- tab: history.js -->
    import { createBrowserHistory } from "history";

    export default createBrowserHistory()

    <!-- tab: DxComponent.css -->
    /* ... */
    .dx-list-item-icon {
        margin-right: 10px;
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

---

Run the code, open the **Drawer**, and click its items to change the views.
