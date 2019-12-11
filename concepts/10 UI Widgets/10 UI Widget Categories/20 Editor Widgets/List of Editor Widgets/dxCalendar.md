<article data-show="Content/Applications/16_1/UIWidgets/dxCalendar/markup.html,
        Content/Applications/16_1/UIWidgets/dxCalendar/script.js">

The [Calendar](/api-reference/10%20UI%20Widgets/dxCalendar '/Documentation/ApiReference/UI_Widgets/dxCalendar/') widget displays a calendar and enables a user to select the required date within the specified date range. You can access the selected date using the [value](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#value') option.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorscalendarcalendarcalendar/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Editor widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Get and set a widget value](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/0%20Common%20Tasks/0%20Get%20And%20Set%20a%20Widget%20Value.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Get_And_Set_a_Widget_Value')  
- [Handle the value change event](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/0%20Common%20Tasks/1%20Handle%20The%20Value%20Change%20Event.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Handle_The_Value_Change_Event')  

In addition to common editor functionality, the widget enables you to perform the following adjustments.

**Specify the date range**

The date range is specified by the [min](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/min.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#min') and [max](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/max.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#max') options, which take on a [Date](https://www.w3schools.com/js/js_dates.asp) object representing the earliest and latest date respectively.

    <!--JavaScript-->
    var calendarOptions = {
        min: new Date(2000,1,1),
        max: new Date(2020,12,31)
    }

<a name="dxCalendar_Specify_the_zoom_level"></a>
**Specify the zoom level**

The size of a date range displayed on a single calendar page is specified using the zoomLevel option, which accepts the "month", "year", "decade" and "century" values. When a user clicks the calendar header, the zoom level is decreased, when a user clicks a calendar item, the zoom level is increased. The maxZoomLevel and minZoomLevel options specify maximum and minimum zoom levels a user can specify.

    <!--JavaScript-->
    var calendarOptions = {
        minZoomLevel: 'century',
        maxZoomLevel: 'month',
        zoomLevel: 'year'
    }

**Specify a cell appearance**

By default, a predefined cell template is applied to display calendar cells. This template is based on the fields of an object holding cell information described in the [Default Cell Template](/api-reference/10%20UI%20Widgets/dxCalendar/5%20Default%20Cell%20Template '/Documentation/ApiReference/UI_Widgets/dxCalendar/Default_Cell_Template/') topic. If the default cell template is not appropriate for your task, implement a custom cell template based on these fields. For more information on customizing cell appearance, refer to the [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/') topic.

#####See Also#####
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')


**Specify which day of the week is displayed first**

The widget enables you to specify which day of the week is to be displayed in the first column. Pass the 0 based index of the required day to the [firstDayOfWeek](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/firstDayOfWeek.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#firstDayOfWeek') option.

- 0 - Sunday
- 1 - Monday
- 2 - Tuesday
- 3 - Wednesday
- 4 - Thursday
- 5 - Friday
- 6 - Saturday

<!---->

    <!--JavaScript-->
    var calendarOptions = {
        firstDayOfWeek: 1
    }

**Keyboard support**

An end-user can use the following keys to interact with the widget.

- Left/right arrow  
 Highlights the previous/next day.

- Up/down arrow  
 Highlights a day a week before/after the currently highlighted day.

- Ctrl + left/right arrow (page up/down)  
 Displays the previous/next month.

- Enter
 Selects the highlighted day.
</article>