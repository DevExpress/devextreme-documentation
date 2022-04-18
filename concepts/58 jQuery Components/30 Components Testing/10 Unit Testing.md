Create a HTML file and add your markup to it. The example below illustrates a unit test for the DataGrid UI component. this markup also loads the jQuery, QUnit, and DevExtreme libraries from CDN.

# [Html](#tab/tabid-html)

```html
<meta charset="utf-8" />
<title>Test DataGrid</title>
<head>
  <script src="https://code.jquery.com/qunit/qunit-2.16.0.js"></script>
  <script
    src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
    crossorigin="anonymous"
  ></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/devextreme/21.1.4/js/dx.all.js"></script>
  <link
    rel="stylesheet"
    href="https://code.jquery.com/qunit/qunit-2.16.0.css"
  />
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/devextreme/21.1.4/css/dx.light.css"
    rel="stylesheet"
  />
</head>
<body>
  <div id="dataGrid"></div>
  <div id="qunit"></div>
  <div id="qunit-fixture"></div>
</body>
```
***

Add the following script to test the DataGrid configuration and the number of loaded records. 
# [JS](#tab/tabid-js)

```js
<script>
  let createDataGrid = (options, $container) => {
    const dataGridElement = ($container || $("#dataGrid")).dxDataGrid(options);
    QUnit.assert.ok(dataGridElement);
    const dataGrid = dataGridElement.dxDataGrid("instance");
    return dataGrid;
  };

  QUnit.module("DataGrid", function () {
    QUnit.test("DataGrid is ready and displaying data", function (assert) {
      // act
      const dataGrid = createDataGrid({
        dataSource: {
          pageSize: 3,
          store: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
        },
      });

      // assert
      assert.equal($("#dataGrid").find(".dx-data-row").length, 3);
    });
  });
</script>
```
***

Open your file in a browser to see the test report. If the test file contains multiple tests, you can filter the results or re-run specific tests.