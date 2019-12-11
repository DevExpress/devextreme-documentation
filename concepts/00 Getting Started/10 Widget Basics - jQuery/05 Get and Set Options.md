All operations with widget options are carried out using the **option()** method. You can use it to do the following.

####Get All Options####
<div style="height:5px"></div>
    <!--JavaScript-->var menuInstance = $("#menuContainer").dxMenu("instance");
    var menuOptions = menuInstance.option();

    // ---------- or ----------
    var menuOptions = $("#menuContainer").dxMenu("option");

####Get the Value of a Single Option####
<div style="height:5px"></div>
    <!--JavaScript-->var menuInstance = $("#menuContainer").dxMenu("instance");
    var menuDataSource = menuInstance.option("dataSource");
    var submenuMode = menuInstance.option("showSubmenuMode.name");

    // ---------- or ----------
    var menuDataSource = $("#menuContainer").dxMenu("option", "dataSource");
    var submenuMode = $("#menuContainer").dxMenu("option", "showSubmenuMode.name");

####Set a Single Option####
<div style="height:5px"></div>
    <!--JavaScript-->var menuInstance = $("#menuContainer").dxMenu("instance");
    menuInstance.option("dataSource", []);
    menuInstance.option("showSubmenuMode.name", 'onClick');

    // ---------- or ----------
    $("#menuContainer").dxMenu("option", "dataSource", []);
    $("#menuContainer").dxMenu("option", "showSubmenuMode.name", 'onClick');

[note]If you perform several option changes, wrap them with the **beginUpdate()** and **endUpdate()** method calls. This prevents the widget from being unnecessarily refreshed and from events being raised. Use an object instead if you need to change several options at once.

####Set Several Options####
<div style="height:5px"></div>
    <!--JavaScript-->var menuInstance = $("#menuContainer").dxMenu("instance");
    menuInstance.option({
        dataSource: [],
        showSubmenuMode: {
            name: 'onClick'
        }
    });

    // ---------- or ----------
    $("#menuContainer").dxMenu({
        dataSource: [],
        showSubmenuMode: {
            name: 'onClick'
        }
    });

[note]

When you pass an object to the **option(options)** method or to the jQuery plugin at runtime as shown in the previous code, options specified in this object will be merged with the options that were [specified at design time](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget'). 

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

#####See Also#####
- **API Reference**.**WidgetName**.**Configuration**, for example, **API Reference**.[Menu](/api-reference/10%20UI%20Widgets/dxMenu '/Documentation/ApiReference/UI_Widgets/dxMenu/').[Configuration](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/')
- [Create and Configure a Widget - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget')

[tags]basics, jquery, change options, get, set, runtime
