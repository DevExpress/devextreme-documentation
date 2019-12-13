The **ProgressBar** is a widget that shows current progress.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/ProgressBar/Overview/"
}

The following code adds a simple **ProgressBar** to your page. The **value** option specifies the current value. The **min** and **max** options limit the range of accepted values. The progress is measured in percentages and calculated by the following formula: `(value / max) * 100`. If the current progress is unknown yet, set the **value** option to **false**.

    <!--HTML-->
    <div id="progressBarContainer"></div>

    <!--JavaScript-->
    $(function(){
        $("#progressBarContainer").dxProgressBar({
            min: 0,
            max: 100,
            value: 49
        });
    });

When the **ProgressBar** reaches the [maximum](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/max.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#max') value, the [complete](/api-reference/10%20UI%20Widgets/dxProgressBar/4%20Events/complete.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Events/#complete') event is raised. You can handle it using the [onComplete](/api-reference/10%20UI%20Widgets/dxProgressBar/1%20Configuration/onComplete.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#onComplete') function.

    <!--JavaScript-->
    $(function() {
        $("#progressBarContainer").dxProgressBar({
            min: 0,
            max: 100,
            value: 49,
            onComplete: function() {
                DevExpress.ui.dialog.alert("Completed");
            }
        });
    });

#####See Also#####
#include common-link-configurewidget
- [ProgressBar - Progress Status](/concepts/05%20Widgets/ProgressBar/05%20Progress%20Status.md '/Documentation/Guide/Widgets/ProgressBar/Progress_Status')
- [ProgressBar - Handle the Value Change Event](/concepts/05%20Widgets/ProgressBar/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/ProgressBar/Handle_the_Value_Change_Event')
- [ProgressBar API Reference](/api-reference/10%20UI%20Widgets/dxProgressBar '/Documentation/ApiReference/UI_Widgets/dxProgressBar/')

[tags]progress bar, progressBar, editor, overview, range, min, max, complete