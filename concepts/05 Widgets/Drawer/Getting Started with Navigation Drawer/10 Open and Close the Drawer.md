Depending on the library or framework you use, call the [toggle()](/api-reference/10%20UI%20Widgets/dxDrawer/3%20Methods/toggle().md '/Documentation/ApiReference/UI_Widgets/dxDrawer/Methods/#toggle') method or bind a variable to the [opened](/api-reference/10%20UI%20Widgets/dxDrawer/1%20Configuration/opened.md '/Documentation/ApiReference/UI_Widgets/dxDrawer/Configuration/#opened') option.

In the following code, a toolbar button outside the **Drawer** opens and closes it:

---
#####jQuery

    <!--tab: index.js-->
    $(function() {
        var drawer = $("#drawer").dxDrawer({ 
            // ... 
        }).dxDrawer("instance");
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
    })

    <!--tab: index.html-->
    <div id="toolbar"></div>
    <div id="drawer">
        <div id="view">View content</div>
    </div>

    <!--tab: style.css-->
    /* ... */
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

#####Angular

    <!-- tab: app.component.html -->
    <dx-toolbar id="toolbar">
        <dxi-item 
            widget="dxButton"
            [options]="buttonOptions"
            location="before">
        </dxi-item>
    </dx-toolbar>
    <dx-drawer ...
        [(opened)]="isOpened">
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
        isOpened: Boolean = false;
        buttonOptions: any;

        constructor() {
            this.buttonOptions = {
                icon: "menu",
                onClick: () => {
                    this.isOpened = !this.isOpened;
                }
            };
        }
    }

    <!-- tab: app.module.ts -->
    // ...
    import { DxDrawerModule, DxToolbarModule } from "devextreme-angular";

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            // ...
            DxDrawerModule,
            DxToolbarModule,
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: app.component.css -->
    /* ... */
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

##### ASP.NET MVC Controls

    <!-- tab: _Layout.cshtml -->
    @(Html.DevExtreme().Toolbar()
        .ID("layout-toolbar")
        .Items(items =>{
            items.Add().Widget(w => w.Button()
                .Icon("menu")
                .OnClick("button_clickHandler")
            ).Location(ToolbarItemLocation.Before);
        })
    )
    @(Html.DevExtreme().Drawer()
        .ID("layout-drawer")
        // ...
    )

    <script type="text/javascript">
        function button_clickHandler() {
            var drawer = $("#layout-drawer").dxDrawer("instance");
            drawer.toggle();
        }
    </script>

    <!-- tab: Site.css -->
    /* ... */
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

#####React

    <!-- tab: DxComponent.js -->
    // ...
    import { Drawer } from "devextreme-react/drawer";
    import { Toolbar, Item } from "devextreme-react/toolbar";

    class DxComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isOpened: false
            };
            this.buttonOptions = {
                icon: "menu",
                onClick: () => {
                    this.setState({ isOpened: !this.state.isOpened })
                }
            };
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
                    <Drawer ...
                        opened={this.state.isOpened} >
                        <div>View content</div>
                    </Drawer>
                </React.Fragment>
            );
        }
    }
    export default DxComponent;

    <!-- tab: DxComponent.css -->
    /* ... */
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

---
