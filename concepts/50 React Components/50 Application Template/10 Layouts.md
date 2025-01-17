The application includes two layouts. The only difference between them is where the toolbar is located: outer (default) or inner toolbar.

**Outer toolbar**
<br/>
<img src="/images/dx-application-templates/outer.png" style="width: 800px;" alt="Outer toolbar expanded" />

**Inner toolbar**
<br/>
<img src="/images/dx-application-templates/inner.png" style="width: 800px;" alt="Inner toolbar expanded" />
<br/>

To switch to another layout, open the `src\Content.js` file and replace the `SideNavOuterToolbar` import with `SideNavInnerToolbar`:

    <!-- tab: Content.js -->
    import {
      SideNavInnerToolbar as SideNavBarLayout,
      SingleCard
    } from './layouts';

To generate a new application with an inner toolbar, set the `--layout` flag to `side-nav-inner-toolbar`:

    npx devextreme-cli new react-app app-name --layout=side-nav-inner-toolbar
