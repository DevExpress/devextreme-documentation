Integration testing helps test a component across multiple units. Integration testing does not test unit by unit, it tests all the units as an entity. 

The example bwelow illustrates how to test the DataGrid's functionality. The test code adds a new row, saves it, and checks the results. 

To get started with QUnit in your browser, create a HTML file as described in the [Unit Testing](/Documentation/Guide/jQuery_Components/Components_Testing/#Unit_Testing) article and reference the SinonJS script.

    <!--HTML-->
    <!-- This script allows you to simulate timers. -->
    <script src="https://cdn.jsdelivr.net/npm/sinon@9/pkg/sinon.js"></script>

Add the test code. This code creates the DataGrid and calls the **addRow** and **saveEditData** methods to create a new row. Timers allow you to call methods continually since all the processes are asynchronous. The final step is to check whether the DataGrid has two visible rows - an initial and newly created rows.

    <!--JavaScript-->
    <script>
    let clock;
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
        QUnit.test('Add a row in batch edit mode', function(assert) {
            // arrange, act
            const array = [{ id: 1, name: 'Test 1' }];

            const dataGrid = createDataGrid({
                editing: {
                    mode: 'batch'
                },
                dataSource: {
                    key: 'id',
                    load: function() {
                        return array;
                    },
                    insert: function(values) {
                        array.push(values);
                    }
                }
            });
            clock.tick(100);

            // Adds a row
            dataGrid.addRow();

            clock.tick(100);

            dataGrid.saveEditData();

            clock.tick(200);

            // Check assertion
            assert.strictEqual(dataGrid.getVisibleRows().length, 2, 'visible rows: 2');
            assert.strictEqual(dataGrid.hasEditData(), false, 'DataGrid has no edit data');
        });
    });
    </script>

Open the test.html file in your browser to see the detailed report of the test and its result.