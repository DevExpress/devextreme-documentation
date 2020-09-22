Depending on the library or framework you use, call the [toggle()](/api-reference/10%20UI%20Widgets/dxDrawer/3%20Methods/toggle().md '/Documentation/ApiReference/UI_Widgets/dxDrawer/Methods/#toggle') method or bind the [opened](/api-reference/10%20UI%20Widgets/dxDrawer/1%20Configuration/opened.md '/Documentation/ApiReference/UI_Widgets/dxDrawer/Configuration/#opened') option to a component property.

In the following code, a toolbar button outside the **Drawer** opens and closes it:

---
##### jQuery

    <!--tab: index.js-->
    $(function() {
        const drawer = $("#drawer").dxDrawer({ 
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

##### Angular

    <!-- tab: app.component.html -->
    <dx-toolbar id="toolbar">
        <dxi-item 
            widget="dxButton"
            [options]="buttonOptions"
            location="before">
        </dxi-item>
    </dx-toolbar>
    <dx-drawer ...
        [(opened)]="isDrawerOpen">
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
        isDrawerOpen: Boolean = false;
        buttonOptions: any;

        constructor() {
            this.buttonOptions = {
                icon: "menu",
                onClick: () => {
                    this.isDrawerOpen = !this.isDrawerOpen;
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
            <DxDrawer ...
                v-model:opened="isDrawerOpen">
                <!-- ... -->
            </DxDrawer>
        </div>
    </template>

    <script>
    // ...
    import DxToolbar, { DxItem } from 'devextreme-vue/toolbar';

    export default {
        components: {
            // ...
            DxToolbar,
            DxItem
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
    /* ... */
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
    </style>

##### React

    <!-- tab: DxComponent.js -->
    // ...
    import { Drawer } from "devextreme-react/drawer";
    import { Toolbar, Item } from "devextreme-react/toolbar";

    class DxComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isDrawerOpen: false
            };
            this.buttonOptions = {
                icon: "menu",
                onClick: () => {
                    this.setState({ isDrawerOpen: !this.state.isDrawerOpen })
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
                        opened={this.state.isDrawerOpen} >
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
            const drawer = $("#layout-drawer").dxDrawer("instance");
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

---
