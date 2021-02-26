Use the following code to get a UI component instance:

    <!--JavaScript-->
    var chartInstance = $("#chartContainer").dxChart("instance");

If the UI component is not yet instantiated, this code throws an [E0009](/api-reference/50%20Common/utils/zz%20Errors%20and%20Warnings/E0009.md '/Documentation/ApiReference/Common/utils/Errors_and_Warnings/#E0009') exception that you can handle with a [try...catch](https://www.w3schools.com/js/js_errors.asp) block:

    <!--JavaScript-->
    try {
        var chartInstance = $("#chartContainer").dxChart("instance");
    }
    catch (err) {
        alert("Exception handled: " + err.message);
    }

Instead of the exception, you can get a truthy or falsy value that can be used in conditional statements. To do this, call the UI component class's static **getInstance(element)** method. This method returns **undefined** if the UI component is not instantiated for the element:

    <!--JavaScript-->
    var element = document.getElementById("chartContainer");
    var chartInstance = DevExpress.viz.dxChart.getInstance(element);
    if (chartInstance) {
        // Your code goes here
    }