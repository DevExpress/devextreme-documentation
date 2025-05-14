The application template has two layouts that differ only in toolbar type: outer (default) or inner.

**Outer toolbar**
<br/>
<img src="/images/dx-application-templates/outer.png" style="width: 800px;" alt="Outer toolbar expanded" />

**Inner toolbar**
<br/>
<img src="/images/dx-application-templates/inner.png" style="width: 800px;" alt="Inner toolbar expanded" />
<br/>

To switch to another layout: 

- If your project uses Vite, replace the `SideNavOuterToolbar` import with `SideNavInnerToolbar` in `src\Content.js`.

        <!-- tab: Content.js -->
        import { SideNavInnerToolbar as SideNavBarLayout, SingleCard } from './layouts';

- If your project uses Next.js, replace the `SideNavOuterToolbar` import with `SideNavInnerToolbar` in `src\app\pages\layout.jsx`.

        <!-- tab: Content.js -->
        import { SideNavInnerToolbar as SideNavBarLayout, SingleCard } from './src/layouts/index';

To generate a new application with an inner toolbar, set the `--layout` flag to `side-nav-inner-toolbar`:

    npx devextreme-cli new react-app app-name --layout=side-nav-inner-toolbar
