All operations with widget options are carried out using the **option()** method. You can use it to do the following.

####Get All Options####
<div style="height:5px"></div>
    <!--JavaScript-->var chartInstance = $("#chartContainer").dxChart("instance");
    var chartOptions = chartInstance.option();

    // ---------- or ----------
    var chartOptions = $("#chartContainer").dxChart("option");

####Get the Value of a Single Option####
<div style="height:5px"></div>
    <!--JavaScript-->var chartInstance = $("#chartContainer").dxChart("instance");
    var chartDataSource = chartInstance.option("dataSource");
    var legendVisibility = chartInstance.option("legend.visible");

    // ---------- or ----------
    var chartDataSource = $("#chartContainer").dxChart("option", "dataSource");
    var legendVisibility = $("#chartContainer").dxChart("option", "legend.visible");

####Set a Single Option####
<div style="height:5px"></div>
    <!--JavaScript-->var chartInstance = $("#chartContainer").dxChart("instance");
    chartInstance.option("dataSource", []);
    chartInstance.option("legend.visible", true);

    // ---------- or ----------
    $("#chartContainer").dxChart("option", "dataSource", []);
    $("#chartContainer").dxChart("option", "legend.visible", true);

[note]If you perform a chain of option changes, wrap it up into the **beginUpdate()** and **endUpdate()** function calls. It prevents the widget from unnecessary refreshing and event raising. Better yet, [use an object](#SetSeveralOptions) instead if you need to change several options at once.

<a id="SetSeveralOptions"></a>
<h4>Set Several Options</h4>
<div style="height:5px"></div>
    <!--JavaScript-->var chartInstance = $("#chartContainer").dxChart("instance");
    chartInstance.option({
        dataSource: [],
        legend: {
            visible: true
        }
    });

    // ---------- or ----------
    $("#chartContainer").dxChart({
        dataSource: [],
        legend: {
            visible: true
        }
    });

[note]When you pass an object to the **option(options)** method or to the jQuery plugin at runtime as shown in the previous code, options specified in this object will be merged with the options that were [specified at design time](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Create_and_Configure_a_Widget'). 