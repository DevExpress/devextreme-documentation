You may experience an issue, when DataGrid or TreeList finishes data loading, gray boxes are still visible:

![DataGrid with Gray Boxes Visible](/images/DataGrid/datagrid-gray-boxes.png)

These gray boxes are row placeholders that appear when the component takes time to load and render rows. The issue described above occurs due to the following reasons:

- The component's height property is not consistent with the space the component occupies.
- An error occurs during data loading.
- The loaded data is incorrect (has a wrong structure, missing required fields, the number of data items is not expected, etc.).
- Unexpected external interactions (rerendering, resizing, state storing, etc.).

Follow the steps below to troubleshoot your application. If the solutions listed here do not help you resolve an issue, create a ticket in our Support Center and describe the issue in greater detail: [Create a ticket](https://supportcenter.devexpress.com/ticket/create).