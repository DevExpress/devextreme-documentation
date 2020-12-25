When you open the **Drawer**, it can slide in or expand from the closed position. Use the [revealMode](/api-reference/10%20UI%20Widgets/dxDrawer/1%20Configuration/revealMode.md '/Documentation/ApiReference/UI_Widgets/dxDrawer/Configuration/#revealMode') option to specify this behavior.

---
##### jQuery

    <!--tab: index.js-->
    $(function() {
        const drawer = $("#drawer").dxDrawer({
            // ...
            revealMode: "expand"
        }).dxDrawer("instance");
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-drawer ...
        revealMode="expand">
    </dx-drawer>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <!-- ... -->
            <DxDrawer ...
                reveal-mode="expand">
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
                        revealMode="expand" >
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
        .RevealMode(DrawerRevealMode.Expand)
    )

---

Run the code and open the **Drawer**. You should see that the UI component gets wider, but its content stays in place, creating an impression that the **Drawer** expands. 
