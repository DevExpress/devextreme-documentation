## Tree Shaking

Tree shaking removes unused portions of source and library code to reduce the downloaded size of the application.

Tree shaking already works if you import only the modules that you use in your application. For instance, the following import takes only the `DxButtonModule` from the `devextreme-angular` module:

    <!--TypeScript-->
    import { DxButtonModule } from 'devextreme-angular';

If tree shaking is not configured in your application, import exports from specific modules instead of the main `devextreme-angular` module to reduce the bundle size:

    <!--TypeScript-->
    import { DxButtonModule } from 'devextreme-angular/ui/button';

Please note that the tree shaking mechanism works only when you create the **production** bundle.

## Bundle Size

DevExtreme code can be divided to three main groups:
1) Utilities Code.
2) Data Visualization Components Code.
3) Ui Components Code.

Utilities Code is the code that is used by all our components. This code is always imported to the application when you add a DevExtreme component. It can't be removed by the Tree Shaking mechanim as our components won't work without it. An example of such code is our Option Manager or Events Engine.

Data Visualization components code is independent. This means that you can import the Chart module and this will add only the Chart component code to the bundle. However, the Chart component is quite complex, so it will affect the size of the resulting bundle.

The code of UI Components mostly independent. This means that you can import a simple component (such as dxButton) and the resulting bundle will contain only this component code. However, complex components, such as dxDataGrid, depend on multiple simple components. So, if you import dxDataGrid to the application, the resulting bundle will contain the dxScrollView, dxButton, dxSelectBox, dxTextBox and other components code.

To summarize, if you use complex UI and Data Visualization in the application, the resulting bundle will include almost all DevExtreme controls. However, if you use only some components, the Tree Shaking mechanism will remove unnecessary code from the production bundle. You can read more about the bundle size in DevExtreme Angular applications in this [GitHub issue](https://github.com/DevExpress/devextreme-angular/issues/811). The following comment contains the detailed information about how Tree Shaking works for [different DevExtreme components](https://github.com/DevExpress/devextreme-angular/issues/811#issuecomment-1008557295).

[tags] angular
