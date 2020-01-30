    <!--JavaScript-->
    var dataGridInstance = $("#dataGridContainer").dxDataGrid("instance");
    dataGridInstance.option({
        dataSource: [],
        editing: {
            mode: "cell"
        }
    });

    // ---------- or ----------
    $("#dataGridContainer").dxDataGrid({
        dataSource: [],
        editing: {
            mode: "cell"
        }
    });

[note]

When you pass an object to the **option(options)** method or to the jQuery plugin at runtime as shown in the previous code, options specified in this object will be merged with the options that were [specified at design time](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget). 

This works properly unless the options were specified as arrays. If the latter is true, set new options between **beginUpdate()** and **endUpdate()** method calls. The following code sample demonstrates the described technique using an example of the [valueAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/') array in the [Chart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/') widget:  

    <!--JavaScript-->
    var chart = $("#chartContainer").dxChart({
        // ...
        valueAxis: [{
            name: "axis1",
            // ...
        }, {
            name: "axis2",
            // ...
        }]
    }).dxChart("instance");

    chart.beginUpdate();
    chart.option("valueAxis[0].visible", false);
    chart.option("valueAxis[1].grid.visible", false);
    chart.endUpdate();

[/note]