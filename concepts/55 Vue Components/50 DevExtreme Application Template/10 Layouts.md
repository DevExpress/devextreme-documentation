The application includes two layouts. The only difference between them is where the toolbar is located.

- **Outer Toolbar** (default)       
![DevExtreme Vue Template - Outer toolbar](/images/dx-application-templates/vue-app-template-outer-toolbar.png)

- **Inner Toolbar**         
![DevExtreme Vue Template - Inner toolbar](/images/dx-application-templates/vue-app-template-inner-toolbar.png)

To generate a new application with an inner toolbar, set the `--layout` flag to `side-nav-inner-toolbar`:

    npx devextreme-cli new vue-app app-name --layout=side-nav-inner-toolbar

To switch to another layout after the application is created, open the `src\router.js` file and change the import path from `./layouts/side-nav-outer-toolbar` to `./layouts/side-nav-inner-toolbar`:

    <!-- tab: router.js -->
    import defaultLayout from './layouts/side-nav-inner-toolbar';
