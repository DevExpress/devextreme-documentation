---
module: ui/pivot_grid_field_chooser
inherits: ..\Widget\Widget.md
---
---
##### lib
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
A complementary widget for [PivotGrid](/api-reference/10%20UI%20Widgets/dxPivotGrid '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/') that allows you to manage data displayed in the **PivotGrid**.

---
The field chooser is already integrated in **PivotGrid** and can be invoked using the context menu. If you need to continuously display the field chooser near the **PivotGrid** widget, use the **PivotGridFieldChooser** widget.


You can add the **PivotGridFieldChooser** widget using one of the following approaches.

- **jQuery**  
 Use the `dxPivotGridFieldChooser` jQuery plug-in.

        <!--HTML--><div id="fieldChooserContainer"></div>
		<div id="pivotGridContainer"></div>

    <!---->

        <!--JavaScript-->$('#fieldChooserContainer').dxPivotGridFieldChooser({
            dataSource: pivotGridDataSource
        });
- **Knockout**  
 Add a div element and apply the `dxPivotGridFieldChooser` binding to this element.

        <!--HTML-->
        <div data-bind="dxPivotGridFieldChooser: { dataSource: pivotGridDataSource }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-pivot-grid-field-chooser` directive to this element.

        <!--HTML-->
        <div dx-pivot-grid-field-chooser="{ dataSource: pivotGridDataSource }"></div>

The pivot grid data source can be acquired from **PivotGrid** using the [getDataSource()](/api-reference/10%20UI%20Widgets/dxPivotGrid/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Methods/#getDataSource') method as shown below.

	<!--JavaScript-->var pivotGridDataSource = $('#pivotGridContainer').dxPivotGrid('instance').getDataSource();

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

To provide data for the **PivotGridFieldChooser** widget, specify the same dataSource as its **PivotGrid** has. The easiest way is to get the data source from the **PivotGrid** widget and assign it to the [dataSource](/api-reference/10%20UI%20Widgets/dxPivotGridFieldChooser/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxPivotGridFieldChooser/Configuration/#dataSource') field.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridpivotgridpivotgridfieldchooser" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>