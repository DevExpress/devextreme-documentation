Use the following code to get a widget instance:

    <!--JavaScript-->
    var chartInstance = $("#chartContainer").dxChart("instance");

If the widget is not yet instantiated, this code throws an [E0009](/api-reference/50%20Common/utils/zz%20Errors%20and%20Warnings/E0009.md '/Documentation/ApiReference/Common/utils/Errors_and_Warnings/#E0009') exception that you can handle with a [try...catch](https://www.w3schools.com/js/js_errors.asp) block:

    <!--JavaScript-->
    try {
        var chartInstance = $("#chartContainer").dxChart("instance");
    }
    catch (err) {
        alert("Exception handled: " + err.message);
    }

Instead of the exception, you can get a truthy or falsy value that can be used in conditional statements. To do this, call the widget class's static **getInstance(element)** method. This method returns **undefined** if the widget is not instantiated for the element:

    <!--JavaScript-->
    var element = document.getElementById("chartContainer");
    var chartInstance = DevExpress.viz.dxChart.getInstance(element);
    if (chartInstance) {
        // Your code goes here
    }

#####See Also#####
- [Get and Set Options](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/05%20Get%20and%20Set%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_and_Set_Options/')
- [Call Methods](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/10%20Call%20Methods.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/')
- [Handle Events](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [3rd-Party Frameworks Integration API](/concepts/05%20Widgets/zz%20Common/15%20Advanced/40%203rd-Party%20Frameworks%20Integration%20API '/Documentation/Guide/Widgets/Common/Advanced/3rd-Party_Frameworks_Integration_API/')
