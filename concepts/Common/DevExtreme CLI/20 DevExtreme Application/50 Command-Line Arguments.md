* `--layout`        
Specifies the DevExtreme layout to add. Available values:
    * `side-nav-outer-toolbar` (default)
    * `side-nav-inner-toolbar`

    Both layouts are illustrated <a href="https://github.com/DevExpress/devextreme-angular-template#getting-started" target="_blank">in this article</a>.

* `--empty`     
Specifies whether to skip sample views generation (default: `false`).

* `--icon`      
Specifies the view's icon (default: `folder`). You can choose an icon from the [DevExtreme icon library](/concepts/60%20Themes%20and%20Styles/30%20Icons/10%20Built-In%20Icon%20Library.md '/Documentation/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library').

* `--resolve-conflicts` (Angular only)     
Specifies whether to override the existing `app.component` or create a component with another name. Available values:
    * `createNew` (default)
    * `override` (**NOTE: all changes in the overridden files will be lost**)

    If you created a new component, register it in `app.module.ts`:

        <!-- tab: app.module.ts -->
        // ...
        import { AppComponent } from './app1.component';
        // ...

#####See Also#####
- **Create and Configure a Widget** in [Angular](/concepts/40%20Angular%20Components/20%20Component%20Configuration%20Syntax '/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/'), [React](/concepts/50%20React%20Components/40%20Component%20Configuration%20Syntax/00%20Component%20Configuration%20Syntax.md '/Documentation/Guide/React_Components/Component_Configuration_Syntax/'), and [Vue](/concepts/55%20Vue%20Components/20%20Component%20Configuration%20Syntax '/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/').
