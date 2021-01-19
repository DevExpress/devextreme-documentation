In the closed state, the navigation menu is partially visible because it displays item icons. If the items do not have icons, you can hide the menu. To do this, open the `SideNavOuterToolbar` or `SideNavInnerToolbar` component (depending on the used [layout](/Documentation/Guide/React_Components/Application_Template/#Layouts)), find the [Drawer](/api-reference/10%20UI%20Widgets/dxDrawer '/Documentation/ApiReference/UI_Components/dxDrawer/') configuration, and set its [minSize](/api-reference/10%20UI%20Widgets/dxDrawer/1%20Configuration/minSize.md '/Documentation/ApiReference/UI_Components/dxDrawer/Configuration/#minSize') property to 0:

    <!-- tab: side-nav-outer-toolbar.js -->
    // ...
    export default function ({ title, children }) {
        // ...
        return (
            <div className={'side-nav-inner-toolbar'}>
                <Drawer ...
                    minSize={0}>
                    {/* ... */}
                </Drawer>
            </div>
        );
    }