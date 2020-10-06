In the closed state, the navigation menu is partially visible because it displays item icons. If the items do not have icons, you can hide the menu. To do this, open the `SideNavOuterToolbarComponent` or `SideNavInnerToolbarComponent` (depending on the [layout](/concepts/40%20Angular%20Components/10%20Getting%20Started/02%20Create%20a%20DevExtreme%20Application/10%20Layouts.md '/Documentation/Guide/Angular_Components/Getting_Started/Create_a_DevExtreme_Application/#Layouts')) and change the `updateDrawer()` function as follows:

    <!-- tab: side-nav-outer-toolbar.component.ts -->
    // ...
    export class SideNavInnerToolbarComponent implements OnInit {
        // ...
        updateDrawer() {
            // ...
            this.minMenuSize = 0;
        }
    }
