Server-side rendering (SSR) generates static pages on the server to reduce the application's loading time.

Follow the [Angular guide on SSR](https://angular.dev/guide/ssr) to create Angular project with SSR or add SSR to an existing project.

Then, [add DevExtreme components](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/') to your application.

To finish DevExtreme SSR configuration, import `DxServerModule` in the `app.module.server.ts` file:

    <!-- tab: app.module.server.ts -->
    import { NgModule } from '@angular/core';
    import { ServerModule } from '@angular/platform-server';

    import { AppModule } from './app.module';
    import { AppComponent } from './app.component';
    import { DxServerModule } from 'devextreme-angular/server';

    @NgModule({
        imports: [
            AppModule,
            ServerModule,
            DxServerModule
        ],
        bootstrap: [AppComponent],
    })
    export class AppServerModule {}

If you use standalone components, import `DxServerModule` in the `app.config.server.ts` file:

    <!-- tab: app.config.server.ts -->
    import { mergeApplicationConfig, ApplicationConfig, importProvidersFrom } from '@angular/core';
    import { provideServerRendering } from '@angular/platform-server';
    import { DxServerModule } from 'devextreme-angular/server';

    import { appConfig } from './app.config';

    const serverConfig: ApplicationConfig = {
        providers: [
            provideServerRendering(), importProvidersFrom(DxServerModule)
        ]
    };

    export const config = mergeApplicationConfig(appConfig, serverConfig);

[note] DevExtreme Angular components do not support [switching between themes at runtime](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/60%20Switch%20Between%20Themes%20at%20Runtime '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Switch_Between_Themes_at_Runtime') in the SSR mode. You can only [use a single theme](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application/03%20Configure%20Stylesheets.md '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/#Configure_Stylesheets').

[tags] angular
