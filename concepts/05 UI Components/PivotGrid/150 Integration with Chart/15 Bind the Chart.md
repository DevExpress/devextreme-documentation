A pivot grid can be bound only to an existing chart. 

---
##### jQuery

For example, assume you have the following code that creates a pivot grid in the `pivotGridWidget` container and a chart in the `chartWidget` container.

    <!--HTML-->
    <div id="pivotGridWidget" style="height:400px; max-width:700px"></div>
    <div id="chartWidget" style="height:400px; max-width:700px"></div>

    <!--JavaScript-->
    $(function () {
        $("#pivotGridWidget").dxPivotGrid({ ... });
        $("#chartWidget").dxChart({ ... });
    });

---

To bind chart and pivot grid together without changing the default integration properties, call the `bindChart(chart, integrationOptions)`.

---
##### jQuery

    <!--JavaScript-->// Passing the chart instance
    var chartInstance = $("#chartWidget").dxChart("instance");
    var pivotGridInstance = $("#pivotGridWidget").dxPivotGrid("instance");
    pivotGridInstance.bindChart(chartInstance);

<!--------->

    <!--JavaScript-->// Passing the selector of the chart container
    var pivotGridInstance = $("#pivotGridWidget").dxPivotGrid("instance");
    pivotGridInstance.bindChart('#chartWidget');

<!--------->

    <!--JavaScript-->// Passing the jQuery element
    var pivotGridInstance = $("#pivotGridWidget").dxPivotGrid("instance");
    pivotGridInstance.bindChart($('#chartWidget'));

---

This method can be called at any point of the application flow. For example, you can bind the chart once it is initialized.

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#pivotGridWidget").dxPivotGrid({ ... });
        $("#chartWidget").dxChart({
            // ...
            onInitialized: function (e) {
                var pivotGridInstance = $("#pivotGridWidget").dxPivotGrid("instance");
                pivotGridInstance.bindChart('#chartWidget');
            }
        });
    });

---

The `bindChart(chart, integrationOptions)` method returns a function that unbinds the chart. If the method has returned **null**, the binding failed.

---
##### jQuery

    <!--JavaScript-->var unbindChart = pivotGridInstance.bindChart('#chartWidget');
    // ...
    if (unbindChart)
        unbindChart();

---

#####See Also#####
#include common-link-configurewidget