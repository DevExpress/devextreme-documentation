When the server caches requests, DevExtreme components are rendered using data applied when the page is loaded for the first time. This decreases the number of requests to the server.

To enable this feature:

1. import the `DxServerTransferStateModule` in the `app.module.ts` file:

        <!-- tab: app.module.ts-->
        import { DxServerTransferStateModule } from 'devextreme-angular';

        @NgModule({
            // ...
            imports: [
                //  ...
                DxServerTransferStateModule
            ]
        })
        export class AppModule { }

2. import the `ServerTransferStateModule` in the `app.server.module.ts` file:
        
        <!-- tab: app.server.module.ts-->
        import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
        // ...
        @NgModule({
            imports: [
                AppModule,
                ServerModule,
                ServerTransferStateModule,
                ModuleMapLoaderModule
            ],
            bootstrap: [AppComponent],
        })

3. Check that the `main.ts` file contains the following code to ensure that the `AppModule` is bootstrapped *after* the server-side rendered page is loaded:

        <!-- tab: main.ts-->
        document.addEventListener('DOMContentLoaded', () => {
            platformBrowserDynamic().bootstrapModule(AppModule)
                .catch(err => console.log(err));
        });
