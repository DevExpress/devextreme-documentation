When the **Drawer** opens, it can overlap, shrink, or partially displace the view, depending on the [openedStateMode](/api-reference/10%20UI%20Widgets/dxDrawer/1%20Configuration/openedStateMode.md '/Documentation/ApiReference/UI_Components/dxDrawer/Configuration/#openedStateMode') option:

---
##### jQuery

    <!--tab: index.js-->
    $(function() {
        const drawer = $("#drawer").dxDrawer({
            // ...
            openedStateMode: "overlap"
        }).dxDrawer("instance");
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-drawer ...
        openedStateMode="overlap">
    </dx-drawer>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <!-- ... -->
            <DxDrawer ...
                opened-state-mode="overlap">
                <!-- ... -->
            </DxDrawer>
        </div>
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: NavigationDrawer.js -->
    // ...
    class NavigationDrawer extends React.Component {
        // ...
        render() {
            return (
                <React.Fragment>
                    <Drawer ...
                        openedStateMode="overlap" >
                    </Drawer>
                </React.Fragment>
            );
        }
    }
    export default NavigationDrawer;

##### ASP.NET MVC Controls

    <!-- tab: _Layout.cshtml -->
    @(Html.DevExtreme().Drawer()
        .ID("layout-drawer")   
        .OpenedStateMode(DrawerOpenedStateMode.Overlap)
    )

---

Run the code, open the **Drawer** and you should see that it overlaps the view's text.