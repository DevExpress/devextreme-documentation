In a [Module Federation](https://www.npmjs.com/package/@angular-architects/module_federation) setup, configure the license key in all applications (host and remotes) that use DevExtreme components.

Call the `config()` method early in your application, typically in the `AppModule` constructor or a dedicated service:

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';
    import { config } from 'devextreme/core/config';

    @NgModule({
        declarations: [AppComponent],
        imports: [BrowserModule],
        bootstrap: [AppComponent],
    })
    export class AppModule {
        constructor() {
            config({ licenseKey: 'DEVELOPER_LICENSE_KEY' });
        }
    }

For remote applications using DevExtreme components, **repeat this step** in the remote's `AppModule`.

To manage the license configuration, create a shared utility file. Use this utility in both the host and remote `AppModule`:

    <!-- tab: src/shared/devextreme.config.ts -->
    import { config } from 'devextreme/core/config';

    export function configureDevExtremeLicense() {
        config({ licenseKey: 'DEVELOPER_LICENSE_KEY' });
    }

    <!-- tab: app.module.ts -->
    import { configureDevExtremeLicense } from './path-to-shared/devextreme.config';

    @NgModule({
        declarations: [AppComponent],
        imports: [BrowserModule],
        bootstrap: [AppComponent],
    })
    export class AppModule {
        constructor() {
            configureDevExtremeLicense();
        }
    }

If the `config()` method cannot be called, [store the license key in a global window object](/concepts/Common/Licensing/10%20Validate%20Your%20License%20Key/20%20Storing%20the%20License%20Key%20in%20a%20Global%20Window%20Object.md '/Documentation/Guide/Common/Licensing/#Validate_Your_License_Key/Storing_the_License_Key_in_a_Global_Window_Object').

[tags] angular