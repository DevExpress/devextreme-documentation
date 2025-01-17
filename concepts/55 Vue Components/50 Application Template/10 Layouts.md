The application includes two layouts. The only difference between them is where the toolbar is located: outer (default) or inner toolbar.

**Outer toolbar**
<br/>
<img src="/images/dx-application-templates/outer.png" style="width: 800px;" alt="Outer toolbar expanded" />

**Inner toolbar**
<br/>
<img src="/images/dx-application-templates/inner.png" style="width: 800px;" alt="Inner toolbar expanded" />
<br/>

To switch to another layout, open the `src\router.js` file and change the import path from `./layouts/side-nav-outer-toolbar` to `./layouts/side-nav-inner-toolbar`:

    <!-- tab: router.js -->
    import defaultLayout from './layouts/side-nav-inner-toolbar';

To generate a new application with an inner toolbar, set the `--layout` flag to `side-nav-inner-toolbar`:

    npx devextreme-cli new vue-app app-name --layout=side-nav-inner-toolbar
