---
module: ui/data_grid
inherits: ..\Widget\Widget.md
---
---
##### widgettree
dataSource: [{
    "ID": 1,
    "CompanyName": "Super Mart of the West",
    "City": "Bentonville",
    "State": "Arkansas"
}, {
    "ID": 2,
    "CompanyName": "Electronics Depot",
    "City": "Atlanta",
    "State": "Georgia"
}, {
    "ID": 3,
    "CompanyName": "K&S Music",
    "City": "Minneapolis",
    "State": "Minnesota"
}, {
    "ID": 4,
    "CompanyName": "Tom's Club",
    "City": "Issaquah",
    "State": "Washington"
}, {
    "ID": 5,
    "CompanyName": "E-Mart",
    "City": "Hoffman Estates",
    "State": "Illinois"
}]

##### lib
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **DataGrid** is a widget that represents data from a local or remote source in the form of a grid. This widget offers such basic features as [sorting](/concepts/10%20UI%20Widgets/70%20Data%20Grid/020%20Sorting/010%20Sorting.md '/Documentation/Guide/UI_Widgets/Data_Grid/Sorting/'), [grouping](/concepts/10%20UI%20Widgets/70%20Data%20Grid/040%20Grouping/010%20Grouping.md '/Documentation/Guide/UI_Widgets/Data_Grid/Grouping/'), [filtering](/concepts/10%20UI%20Widgets/70%20Data%20Grid/030%20Filtering '/Documentation/Guide/UI_Widgets/Data_Grid/Filtering/'), as well as more advanced capabilities, like [state storing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/stateStoring '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/'), [export to Excel](/concepts/10%20UI%20Widgets/70%20Data%20Grid/090%20Client-Side%20Export '/Documentation/Guide/UI_Widgets/Data_Grid/Client-Side_Export/'), [master-detail interface](/concepts/10%20UI%20Widgets/70%20Data%20Grid/080%20Master-Detail%20Interface '/Documentation/Guide/UI_Widgets/Data_Grid/Master-Detail_Interface/'), and many others.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxDataGrid` jQuery plug-in.

        <!--HTML--><div id="gridContainer"></div>

    <!---->

        <!--JavaScript-->$("#gridContainer").dxDataGrid({
			dataSource: customers,
			columns: ['CompanyName', 'City', 'State', 'Phone', 'Fax']
		});

- **Knockout**  
 Add a div element and apply the `dxDataGrid` binding to this element.

        <!--HTML-->
        <div data-bind="dxDataGrid: {
			dataSource: customers,
			columns: ['CompanyName', 'City', 'State', 'Phone', 'Fax']
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-data-grid` directive to this element.

        <!--HTML-->
        <div dx-data-grid="{
			dataSource: customers,
			columns: ['CompanyName', 'City', 'State', 'Phone', 'Fax']
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

To provide data for the **DataGrid** widget, specify a data source. **DataGrid** accepts two types of data sources: an array of objects and a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') configuration object. To learn more about data binding in **DataGrid**, refer to the [Data Binding](/concepts/10%20UI%20Widgets/70%20Data%20Grid/010%20Data%20Binding/05%20Data%20Binding.md '/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/') guide.

<a href="http://js.devexpress.com/Demos/DataGridGallery/#chart/datagridspagingandscrollingpager" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=KJpS2Iwrrg8&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=5" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>