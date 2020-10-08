In the closed state, the navigation menu is partially visible because it displays item icons. If the items do not have icons, you can hide the menu. To do this, open the `SideNavOuterToolbarComponent` or `SideNavInnerToolbarComponent` (depending on the [layout](/Documentation/Guide/Angular_Components/Application_Template/#Layouts)) and change the `updateDrawer()` function as follows:

    <!-- tab: side-nav-outer-toolbar.component.ts -->
    // ...
    export class SideNavInnerToolbarComponent implements OnInit {
        // ...
        updateDrawer() {
            // ...
            this.minMenuSize = 0;
        }
    }
