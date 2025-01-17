The application includes two layouts. The only difference between them is where the toolbar is located: outer (default) or inner toolbar.

**Outer toolbar**
<br/>
<img src="/images/dx-application-templates/outer.png" style="width: 800px;" alt="Outer toolbar expanded" />

**Inner toolbar**
<br/>
<img src="/images/dx-application-templates/inner.png" style="width: 800px;" alt="Inner toolbar expanded" />
<br/>

To switch to another layout, open the `src\app\app.component.html` file and replace the `app-side-nav-outer-toolbar` element with `app-side-nav-inner-toolbar`:

    <!-- tab: app.component.html -->
    <app-side-nav-inner-toolbar title="{{appInfo.title}}">
        <!-- Layout content is here -->
    </app-side-nav-inner-toolbar>

To generate a new application with an inner toolbar, set the `--layout` flag to `side-nav-inner-toolbar`:

    npx devextreme-cli new angular-app app-name --layout=side-nav-inner-toolbar
