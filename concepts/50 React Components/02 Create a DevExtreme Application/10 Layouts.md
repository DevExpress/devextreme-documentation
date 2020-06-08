The application includes two layouts. The only difference between them is where the toolbar is located.

- **Outer Toolbar** (default)       
![DevExtreme React Template - Outer toolbar](/images/dx-application-templates/react-app-template-outer-toolbar.png)

- **Inner Toolbar**         
![DevExtreme React Template - Inner toolbar](/images/dx-application-templates/react-app-template-inner-toolbar.png)

To generate a new application with an inner toolbar, set the `--layout` flag to `side-nav-inner-toolbar`:

    npx devextreme-cli new react-app app-name --layout=side-nav-inner-toolbar

To switch to another layout after the application is created, open the `src\Content.js` file and replace the `SideNavOuterToolbar` import with `SideNavInnerToolbar`:

    <!-- tab: Content.js -->
    import {
      SideNavInnerToolbar as SideNavBarLayout,
      SingleCard
    } from './layouts';
