In the closed state, the navigation menu is still visible displaying item icons. If the items lack icons, it is better to entirely hide the menu. To do this, open the `SideNavOuterToolbarComponent` or `SideNavInnerToolbarComponent` (depending on the used [layout](/Documentation/Guide/Angular_Components/Getting_Started/Create_a_DevExtreme_Application/#Layouts)) and change the `updateDrawer()` function as follows:

    <!-- tab: side-nav-outer-toolbar.component.ts -->
    // ...
    export class SideNavInnerToolbarComponent implements OnInit {
        // ...
        updateDrawer() {
            // ...
            this.minMenuSize = 0;
        }
    }