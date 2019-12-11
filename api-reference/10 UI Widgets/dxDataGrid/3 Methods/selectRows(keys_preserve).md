---
##### shortDescription
Selects specific grid records.

##### param(keys): array
The keys of the records to be selected.

##### param(preserve): boolean
Specifies whether or not previously selected records must remain selected.

---
[note]To access a grid record by a key, a field providing key values must be specified in the **key** option of the underlying [Store](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') of the [dataSource](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource'). If no key was specified, the whole data object is considered the key, however, we recommend specifying the key to prevent selection from being duplicated.

By default, calling the **selectRows(keys, preserve)** method deselects all previously selected records. If you need these records to remain selected, call the same method with *true* as its second argument as the code snippet below demonstrates.

	<!--JavaScript-->dataGridInstance.selectRows([5, 10, 12], true);

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridselectionmultipleselection/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>