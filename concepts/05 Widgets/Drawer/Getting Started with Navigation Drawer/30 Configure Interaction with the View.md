When the **Drawer** opens, it can overlap, shrink, or partially displace the view, depending on the [openedStateMode](/api-reference/10%20UI%20Widgets/dxDrawer/1%20Configuration/openedStateMode.md '/Documentation/ApiReference/UI_Widgets/dxDrawer/Configuration/#openedStateMode') option:

---
#####jQuery

    <!--tab: index.js-->
    $(function() {
        var drawer = $("#drawer").dxDrawer({
            // ...
            openedStateMode: "overlap"
        }).dxDrawer("instance");
    })

#####Angular

    <!-- tab: app.component.html -->
    <dx-drawer ...
        openedStateMode="overlap">
    </dx-drawer>

##### ASP.NET MVC Controls

    <!-- tab: _Layout.cshtml -->
    @(Html.DevExtreme().Drawer()
        .ID("layout-drawer")   
        .OpenedStateMode(DrawerOpenedStateMode.Overlap)
    )

#####React

    <!-- tab: DxComponent.js -->
    // ...
    class DxComponent extends React.Component {
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
    export default DxComponent;

---

Run the code, open the **Drawer** and you should see that it overlaps the view's text.