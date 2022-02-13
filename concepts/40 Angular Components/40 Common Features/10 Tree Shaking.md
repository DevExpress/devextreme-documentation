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

We divide DevExtreme code into three main groups:
1) Utilities Code.
All DevExtreme components use Utilities Code. The application always imports it when you add a DevExtreme component. It can't be removed by the Tree Shaking mechanim as our components won't work without it. An example of such code is our Option Manager or Events Engine.

2) Data Visualization Components Code.
Data Visualization components code is independent. This means that you can import the Chart module and this will add only the Chart component code to the bundle. However, the Chart component is quite complex, so it will affect the size of the resulting bundle.

3) UI Components Code.
The code of UI Components mostly independent. This means that you can import a simple component (such as dxButton) and the resulting bundle will contain only this component code. However, complex components, such as dxDataGrid, dxScheduler, dxPivotGrid, etc., depend on multiple simple components. So, if you import dxDataGrid to the application, the resulting bundle will contain the dxScrollView, dxButton, dxSelectBox, dxTextBox, DxPopup, dxForm and other components code.


To summarize, if you use complex UI and Data Visualization in the application, the resulting bundle will include almost all DevExtreme controls. However, if you use only some components, the Tree Shaking mechanism will remove unnecessary code from the production bundle. You can read more about the bundle size in DevExtreme Angular applications in this [GitHub issue](https://github.com/DevExpress/devextreme-angular/issues/811). Here is a small comparison table that contains information about the size of common modules after you import them to the application:
<table class="dx-table">
<tr>
<th>Module</th>
<th>Raw Size</th>
<th>Transfer Size</th>
</tr>
<tr>
<td>Empty App</td>
<td>216.09 kB</td>
<td>60.11 kB</td>
</tr>
<tr>
<td>DxDataGridModule</td>
<td>2.01 MB</td>
<td>456.46 kB</td>
</tr>
<tr>
<td>DxButtonModule</td>
<td>490.44 kB</td>
<td>122.62 kB</td>
</tr>
<tr>
<td>DxTextBoxModule</td>
<td>688.89 kB</td>
<td>162.69 kB</td>
</tr>
<tr>
<td>DxFormModule</td>
<td>1.11 MB</td>
<td>249.49 kB</td>
</tr>
<tr>
<td>DxChartModule</td>
<td>1.10 MB</td>
<td>283.46 kB</td>
</tr>
<tr>
<td>DxVectorMapModule</td>
<td>820.20 kB</td>
<td>209.38 kB</td>
</tr>
<tr>
<td>DxSelectBoxModule</td>
<td>977.27 kB</td>
<td>218.51 kB</td>
</tr>
<tr>
<td>DxSchedulerModule</td>
<td>2.00 MB</td>
<td>389.43 kB</td>
</tr>
</table>


[tags] angular
