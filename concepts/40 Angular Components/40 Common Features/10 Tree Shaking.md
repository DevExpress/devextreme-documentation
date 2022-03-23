## Tree Shaking

The tree shaking mechanism removes unused portions of source and library code to reduce the downloaded size of the application.

The tree shaking mechanism checks whether you import only the modules used in your application. For instance, the following **import** takes the `DxButtonModule` from the `devextreme-angular` module:

    <!--TypeScript-->
    import { DxButtonModule } from 'devextreme-angular';

If tree shaking is not configured in your application, **import** exports from specific modules instead of the main `devextreme-angular` module to reduce the bundle size:

    <!--TypeScript-->
    import { DxButtonModule } from 'devextreme-angular/ui/button';

[note]The tree shaking mechanism works only when you create the **production** bundle.

## Bundle Size

DevExtreme code consists of three main code groups:
- Utilities Code
    An application imports Utilities Code, when you add a DevExtreme component. Utilities Code is mandatory for DevExtreme components and the tree shaking mechanim does not remove this code. 

- Data Visualization Components Code
    The bundle includes the Data Visualization components code if you use the Chart component in your application. The Data Visualization components code has a large file size and may affect the resulting bundle.

- UI Components Code
    The size of the UI Components Code depends on components that you use in your application. For example, you can import a simple component (such as [Button](/concepts/05%20UI%20Components/Button/00%20Getting%20Started%20with%20Button '/Documentation/Guide/UI_Components/Button/Getting_Started_with_Button/')) and the resulting bundle will contain only this component code. Complex components (such as [DataGrid](/concepts/05%20UI%20Components/DataGrid/00%20Getting%20Started%20with%20DataGrid '/Documentation/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/'), [Scheduler](/concepts/05%20UI%20Components/Scheduler/00%20Getting%20Started%20with%20Scheduler '/Documentation/Guide/UI_Components/Scheduler/Getting_Started_with_Scheduler/'), or [PivotGrid](/concepts/05%20UI%20Components/PivotGrid/00%20Getting%20Started%20with%20PivotGrid '/Documentation/Guide/UI_Components/PivotGrid/Getting_Started_with_PivotGrid/')) include multiple simple components. If you import [DataGrid](/concepts/05%20UI%20Components/DataGrid/00%20Getting%20Started%20with%20DataGrid '/Documentation/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/') to your application, the bundle includes code of the [ScrollView](/concepts/05%20UI%20Components/ScrollView/00%20Overview.md '/Documentation/Guide/UI_Components/ScrollView/Overview/'), [Button](/concepts/05%20UI%20Components/Button/00%20Getting%20Started%20with%20Button '/Documentation/Guide/UI_Components/Button/Getting_Started_with_Button/'), [TextBox](/concepts/05%20UI%20Components/TextBox/00%20Getting%20Started%20with%20TextBox '/Documentation/Guide/UI_Components/TextBox/Getting_Started_with_TextBox/'), [Form](/concepts/05%20UI%20Components/Form/01%20Getting%20Started%20with%20Form/00%20Getting%20Started%20with%20Form.md '/Documentation/Guide/UI_Components/Form/Getting_Started_with_Form/'), and other components .


To summarize, the tree shaking mechanism does not affect the resulting bundle if you use a complex UI and Data Visualization in the application. However, if you use simple components, the tree shaking mechanism will remove unnecessary code from the production bundle. Refer to the following Github issue for more details about bundle size in DevExtreme Angular applications: [Large Bundle Size - Angular](https://github.com/DevExpress/devextreme-angular/issues/811).

The table below contains information about the size of common modules after you import them to the application:
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
