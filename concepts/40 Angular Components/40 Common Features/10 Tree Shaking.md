Tree shaking removes unused portions of source and library code to reduce the downloaded size of the application.

Tree shaking already works if you import only the modules that you use in your application. For instance, the following import takes only the `DxButtonModule` from the `devextreme-angular` module:

    <!--TypeScript-->
    import { DxButtonModule } from 'devextreme-angular';

If tree shaking is not configured in your application, import exports from specific modules instead of the main `devextreme-angular` module to reduce the bundle size:

    <!--TypeScript-->
    import { DxButtonModule } from 'devextreme-angular/ui/button';
