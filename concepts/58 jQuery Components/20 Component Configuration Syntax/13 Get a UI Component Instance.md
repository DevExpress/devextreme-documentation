Use the following code to get a UI component instance:

    <!-- tab: index.js -->
    var chartInstance = $("#chart-container").dxChart("instance");

If the UI component is not yet instantiated, this code throws an [E0009](/api-reference/50%20Common/utils/zz%20Errors%20and%20Warnings/E0009.md '/Documentation/ApiReference/Common/utils/Errors_and_Warnings/#E0009') exception that you can handle with a [try...catch](https://www.w3schools.com/js/js_errors.asp) block:

    <!-- tab: index.js -->
    try {
        var chartInstance = $("#chart-container").dxChart("instance");
    }
    catch (err) {
        alert("Exception handled: " + err.message);
    }

Instead of an exception, you can get a truthy or falsy value for use in conditional statements. Call the UI component class’s static **getInstance(element)**. This method returns **undefined** if no UI component instance is associated with the element:

    <!-- tab: index.js -->
    var element = document.getElementById("chart-container");
    var chartInstance = DevExpress.viz.dxChart.getInstance(element);
    if (chartInstance) {
        // Your code goes here
    }

You can also get component instances in event handlers such as **onInitialized** or **onOptionChanged**:

    <!-- tab: index.js -->
    $('#data-grid-container').dxDataGrid({
        onInitialized(e) {
            let dataGridInstance = e.component;
            // ...
        }
        // ...
    })