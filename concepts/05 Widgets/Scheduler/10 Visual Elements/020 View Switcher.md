View switcher is a scheduler element used for quick switching between different scheduler views.

<div class="documentation-gallery">
    <script type="text/template"> 
        {"options": {
            "width": 857,
            "height": 700
        },
        "images": [
            { "image": "Content/images/doc/16_2/UiWidgets/Scheduler_ViewSwitcher_Month.png", "text": "Month View" },
            { "image": "Content/images/doc/16_2/UiWidgets/Scheduler_ViewSwitcher_Week.png", "text": "Week View" },
            { "image": "Content/images/doc/16_2/UiWidgets/Scheduler_ViewSwitcher_WorkWeek.png", "text": "Work Week View" },
            { "image": "Content/images/doc/16_2/UiWidgets/Scheduler_ViewSwitcher_Day.png", "text": "Day View" }
        ]}
    </script>
</div>

You can specify which views are available within the switcher. For this purpose, use the widget's [views](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/views '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#views') option.

    <!--JavaScript-->
    var schedulerOptions = {
        // ...
        views: ['week', 'month']
    }

When the Scheduler is displayed on a mobile device, it uses a drop-down menu to switch views. To specify whether or not the widget uses drop-down menu instead of tabs, use the [useDropDownViewSwitcher](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/useDropDownViewSwitcher.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#useDropDownViewSwitcher') option.

    <!--JavaScript-->
    var schedulerOptions = {
        // ...
        useDropDownViewSwitcher: true
    }

![Drop-down View Switcher](/images/UiWidgets/Scheduler_DropDown_ViewSwitcher.png)