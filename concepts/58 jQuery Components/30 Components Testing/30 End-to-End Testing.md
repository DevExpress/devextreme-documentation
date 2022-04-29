End-to-End (Functional) testing ignores the component's internal structure and allows you to verify how DevExtreme components work from a user's point of view.

The example below illustrates how to create an End-to-End test for the DataGrid's functionality. The test code emulates a click on the pager. 

Create a HTML file and add your markup to it:

    <!--HTML-->
    <!DOCTYPE html>
    <meta charset="utf-8" />
    <title>Test DataGrid</title>
    <head>
    <script src="https://code.jquery.com/qunit/qunit-2.16.0.js"></script>
    <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous"
    ></script>
    <script src="https://cdn.jsdelivr.net/npm/sinon@9/pkg/sinon.js"></script>
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

Add the following script to your test file. This code finds the specified link on the pager and clicks it. A click on the pager triggers the `dxclick` event. The test checks whether the result page index is the same as the expected page index. 

    <!--JavaScript-->
    <script>
    let clock;
    const testElement = $('#dataGrid');

    let createDataGrid = (options, $container) => {
        const dataGridElement = ($container || $("#dataGrid")).dxDataGrid(options);
        QUnit.assert.ok(dataGridElement, "DataGrid created");
        const dataGrid = dataGridElement.dxDataGrid("instance");
        return dataGrid;
    };

    QUnit.module("DataGrid", {
        beforeEach: function() {
            clock = sinon.useFakeTimers();
        },
        afterEach: function() {
            clock.restore();
        }
    }, () => {
        QUnit.test('dxPager changes a page index', function(assert) {

            const array = [];
            for (let i = 0; i < 100; i++) {
            array.push({id: i, test: 'test ' + i})
            }

            const dataGrid = createDataGrid({
                dataSource: {
                    key: 'id',
                    load: function() {
                        return array;
                    }
                },
                pager: {
                    enabled: true,
                    visible: true,
                    allowedPageSizes: [5, 10],
                    showPageSizeSelector: true
                },
                paging: {
                    enabled: true,
                    pageSize: 10
                }
            });

            clock.tick(100);

            $(testElement.find('.dx-page')[5]).trigger('dxclick');

            clock.tick(300);

            assert.equal(dataGrid.pageIndex(), 5, 'page index');
        });
    });
    </script>
