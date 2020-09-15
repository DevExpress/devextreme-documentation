Add the [DevExtreme layout template](/concepts/40%20Angular%20Components/10%20Getting%20Started/02%20Create%20a%20DevExtreme%20Application/00%20Create%20a%20DevExtreme%20Application.md '/Documentation/Guide/Angular_Components/Getting_Started/Create_a_DevExtreme_Application/') to an existing Angular application:

    devextreme add angular-template [--layout][--empty][--resolve-conflicts]
    // ===== or =====
    npx -p devextreme-cli devextreme add angular-template [--layout][--empty][--resolve-conflicts]

Arguments:

* `--layout`        
Specifies the DevExtreme layout to add. Available values:
    * `side-nav-outer-toolbar` (default)
    * `side-nav-inner-toolbar`

    Both layouts are illustrated in the [Layouts](/concepts/40%20Angular%20Components/10%20Getting%20Started/02%20Create%20a%20DevExtreme%20Application/10%20Layouts.md '/Documentation/Guide/Angular_Components/Getting_Started/Create_a_DevExtreme_Application/#Layouts') article.

* `--empty`     
Specifies whether to skip sample views generation (default: `false`).

* `--resolve-conflicts`     
Specifies whether to override the existing `app.component` or create a component with another name. Available values:
    * `createNew` (default)
    * `override` (**NOTE: all changes in the overridden files will be lost**)

    If you created a new component, register it in `app.module.ts`:

        <!-- tab: app.module.ts -->
        // ...
        import { AppComponent } from './app1.component';
        // ...

[note] This command is not supported for Vue and React.