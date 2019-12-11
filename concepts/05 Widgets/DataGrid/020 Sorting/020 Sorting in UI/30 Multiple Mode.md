In a multiple mode, when a user clicks column headers, the grid behaves like the sorting mode is single (see the previous subtopic). To sort records by multiple columns, the user must set their sort orders using the context menu mentioned earlier. Obviously, sorting settings can be cleared using this menu. Left-clicking a column header brings single-like sorting behavior back. The process of sorting in the multiple mode is illustrated by the animation below.

![DevExtreme DataGrid SortingSingleMode](/images/DataGrid/SortingMultipleMode.gif)

If sorting must not be permitted for a user, disable it by setting the **sorting** | **mode** option to *'none'*. You still will be able to [apply sorting in code](/concepts/05%20Widgets/DataGrid/020%20Sorting/030%20Sorting%20in%20Code.md '/Documentation/Guide/Widgets/DataGrid/Sorting/#Sorting_in_Code').

    <!--JavaScript-->var dataGridOptions = {
		// ...
		sorting: {
			mode: 'none'
		}
    };

The process of applying sorting can be simplified if the user has the keyboard. For more information on using the keyboard for sorting, see the [Using Keyboard to Apply Sorting](/concepts/05%20Widgets/DataGrid/020%20Sorting/050%20Using%20Keyboard%20to%20Apply%20Sorting.md '/Documentation/Guide/Widgets/DataGrid/Sorting/#Using_Keyboard_to_Apply_Sorting') article.
