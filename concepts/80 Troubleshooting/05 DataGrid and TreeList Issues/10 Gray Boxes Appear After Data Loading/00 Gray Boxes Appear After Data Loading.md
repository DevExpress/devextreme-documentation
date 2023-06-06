In certain cases, gray boxes may remain visible after DataGrid or TreeList finishes data loading:

![DataGrid with Gray Boxes Visible](/images/DataGrid/datagrid-gray-boxes.png)

These gray boxes are row placeholders that appear when the component takes time to load and render rows. These placeholders can remain visible due to the following reasons:

- The component's size does not match the container size.
- An error occurs during data loading.
- Loaded data is incorrect (has wrong structure, missing required fields, the number of loaded items is not expected, etc.)
- Unexpected external interactions (the component is re-rendering, the container has been resized, saved component state is corrupted, etc.)

Follow the steps below to troubleshoot your application. If the solutions listed here do not help you resolve an issue, create a ticket in our Support Center and describe the issue in greater detail: [Create a ticket](https://supportcenter.devexpress.com/ticket/create).