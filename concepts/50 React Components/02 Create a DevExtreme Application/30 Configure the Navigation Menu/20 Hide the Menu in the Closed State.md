In the closed state, the navigation menu is partially visible because it displays item icons. If the items do not have icons, you can hide the menu. To do this, open the `SideNavOuterToolbar` or `SideNavInnerToolbar` component (depending on the used [layout](/concepts/50%20React%20Components/02%20Create%20a%20DevExtreme%20Application/10%20Layouts.md '/Documentation/Guide/React_Components/Create_a_DevExtreme_Application/#Layouts')), find the [Drawer](/api-reference/10%20UI%20Widgets/dxDrawer '/Documentation/ApiReference/UI_Widgets/dxDrawer/') configuration, and set its [minSize](/api-reference/10%20UI%20Widgets/dxDrawer/1%20Configuration/minSize.md '/Documentation/ApiReference/UI_Widgets/dxDrawer/Configuration/#minSize') option to 0:

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