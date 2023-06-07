In certain cases, gray boxes may remain visible after DataGrid or TreeList finishes loading data:

![DataGrid with Gray Boxes Visible](/images/DataGrid/datagrid-gray-boxes.png)

These gray boxes are row placeholders that appear while the component loads and renders rows. These placeholders can remain visible in the following cases:

- The component size does not match the container size.
- An error occurs during data loading.
- Loaded data is incorrect (has wrong structure, missing required fields, the number of loaded items is not expected, etc.)
- Unexpected external interactions (when the component is re-rendering, the container is resized, the saved component state is corrupted, etc.)

Follow the steps below to troubleshoot your application. If the solutions listed here do not help you resolve an issue, create a ticket in our Support Center and describe the issue in greater detail: [Create a ticket](https://supportcenter.devexpress.com/ticket/create).