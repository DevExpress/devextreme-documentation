By default, the DropDownBox component does not support filtering because it does not contain built-in content. This topic shows how to implement search when a TreeList is embedded inside the DropDownBox.

You can use the following example as a starting point: DropDownBox with embedded TreeList.

**Note**: This example demonstrates how to search when the TreeList includes a lookup column and you want the DropDownBox search to work by the lookup display value (for example, employee name), not by the stored key. If you don't need to use a lookup column, see the [DataGrid example](https://github.com/DevExpress-Examples/devextreme-dropdownbox-filter-data-in-nested-widget). 


### Configure DropDownBox to accept user input

To allow typing and handle the user input:

- Enable [`acceptCustomValue`](https://js.devexpress.com/jQuery/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#acceptCustomValue).
- Set [`valueChangeEvent`](https://js.devexpress.com/jQuery/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#valueChangeEvent) to an empty string.

```js
$('#treeBox').dxDropDownBox({
  acceptCustomValue: true,
  valueChangeEvent: '',
  openOnFieldClick: false,
  // ...
});
```

---

### Configure `displayExpr`

Use [`displayExpr`](https://js.devexpress.com/jQuery/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#displayExpr) to show the selected item in the input.

If a displayed text depends on lookup data, load that data first and resolve it in `displayExpr`.

```js
const lookupDataSource = DevExpress.data.AspNet.createStore({
  key: 'ID',
  loadUrl: `${url}/TaskEmployees`,
});

lookupDataSource.load().then((items) => {
  lookupItems = items;
  $('#treeBox').dxDropDownBox('instance')?.repaint();
});

function displayExpr(item, lookupItems) {
  if (!lookupItems || !lookupItems.length) return 'Loading...';

  const employeeData = lookupItems.find(
    (employee) => employee.ID === item.Task_Assigned_Employee_ID,
  );

  if (!employeeData) return item.Task_Subject || '';
  return `${employeeData.Name}: ${item.Task_Subject} (${item.Task_Status})`;
}
```

---

### Create the main `DataSource` for TreeList

TreeList search in this scenario is implemented via [`DataSource.filter`](https://js.devexpress.com/jQuery/Documentation/ApiReference/Data_Layer/DataSource/Methods/#filterfilterExpr), because we need to filter by IDs resolved from the lookup datasource.

```js
const dataSource = new DevExpress.data.DataSource({
  store: DevExpress.data.AspNet.createStore({
    key: 'Task_ID',
    loadUrl: `${url}/Tasks`,
  }),
});
```

---

### Configure the embedded TreeList in `contentTemplate`

Use DropDownBox [`contentTemplate`](https://js.devexpress.com/jQuery/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#contentTemplate) to render the TreeList.

To use the focused row feature, set the following settings:
- Enable [`focusedRowEnabled`](https://js.devexpress.com/jQuery/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#focusedRowEnabled)
- Use [`focusedRowKey`](https://js.devexpress.com/jQuery/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#focusedRowKey)


###  Implement search in `onInput` (lookup display value scenario)

Use DropDownBox [`onInput`](https://js.devexpress.com/jQuery/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#onInput) to:
1. Ensure the dropdown is open
2. Convert typed text into matching lookup IDs
3. Apply an ID-based filter to the main datasource

```js
onInput(e) {
  clearTimeout(searchTimerId);

  const dropDownBox = e.component;
  if (!dropDownBox.option('opened')) dropDownBox.open();

  searchTimerId = performSearch({
    e,
    lookupDataSource,
    dataSource,
    searchTimeout,
    searchExprVal,
  });
},
```

The key part is building a filter expression and applying it via [`DataSource.filter`](https://js.devexpress.com/jQuery/Documentation/ApiReference/Data_Layer/DataSource/Methods/#filterfilterExpr):

```js
function applySearchFilter({ text, lookupField, dataField, searchExprVal, lookupDataSource, dataSource }) {
  lookupDataSource.load({ filter: [lookupField, 'contains', text] }).done((items) => {
    const filterParts = [];

    // add search for a non-lookup field (for example, subject)
    if (Array.isArray(searchExprVal)) {
      filterParts.push([searchExprVal[1], 'contains', text]);
    }

    // add OR conditions for each resolved lookup ID
    items.forEach((item, index) => {
      if (filterParts.length > 0 || index > 0) filterParts.push('or');
      filterParts.push([dataField, '=', item.ID]);
    });

    const filterExpr = filterParts.length > 0 ? filterParts : [dataField, '=', -1];

    dataSource.filter(filterExpr);
    dataSource.load();
  });
}
```


---

### Detect whether the user is searching (`isSearchIncomplete`)

This helper compares:
- `text` — what the user typed
- `displayValue` — formatted text for the currently selected value

If they differ, it means the user is searching and the popup state should be managed accordingly.

```js
function isSearchIncomplete(dropDownBox) {
  let displayValue = dropDownBox.option('displayValue');
  let text = dropDownBox.option('text') || '';
  displayValue = displayValue && displayValue.length && displayValue[0];
  return text !== displayValue;
}
```


### Focus and selection management (`onOpened` / `onClosed`)


Use DropDownBox [`onOpened`](https://js.devexpress.com/jQuery/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#onOpened) to move focus into the TreeList and to clear selection when the input text no longer matches the selected value.

Use DropDownBox [`onClosed`](https://js.devexpress.com/jQuery/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#onClosed) to restore consistent state when the user typed text but did not confirm a selection. In this topic, the search state is cleared by calling `dataSource.filter(null)`.

------ 

### Example

See this example for more details: [DropDownBox with embedded TreeList](https://github.com/DevExpress-Examples/devextreme-dropdownbox-implement-search-for-treelist)


## See Also

- [DropDownBox](https://js.devexpress.com/jQuery/Documentation/ApiReference/UI_Components/dxDropDownBox/)
- [DropDownBox — `onInput`](https://js.devexpress.com/jQuery/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#onInput)
- [TreeList](https://js.devexpress.com/jQuery/Documentation/ApiReference/UI_Components/dxTreeList/)
- [DataSource — `filter`](https://js.devexpress.com/jQuery/Documentation/ApiReference/Data_Layer/DataSource/Methods/#filterfilterExpr)
- [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data)
- [Example: DropDownBox with embedded TreeList](https://github.com/DevExpress-Examples/devextreme-dropdownbox-implement-search-for-treelist)
