The application includes two layouts. The only difference between them is where the toolbar is located.

- **Outer Toolbar** (default)       
![DevExtreme Angular Template - Outer toolbar](/images/dx-application-templates/angular-app-template-outer-toolbar.png)

- **Inner Toolbar**         
![DevExtreme Angular Template - Inner toolbar](/images/dx-application-templates/angular-app-template-inner-toolbar.png)

To generate a new application with an inner toolbar, set the `--layout` flag to `side-nav-inner-toolbar`:

    npx devextreme-cli new angular-app app-name --layout=side-nav-inner-toolbar

To switch to another layout after the application is created, open the `src\app\app.component.html` file and replace the `app-side-nav-outer-toolbar` element with `app-side-nav-inner-toolbar`:

    <!-- tab: app.component.html -->
    <app-side-nav-inner-toolbar title="{{appInfo.title}}">
        <!-- Layout content is here -->
    </app-side-nav-inner-toolbar>
