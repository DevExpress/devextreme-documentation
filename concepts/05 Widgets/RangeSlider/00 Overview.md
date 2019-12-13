The **RangeSlider** is a widget that allows an end user to choose a range of numeric values. Basically, the **RangeSlider** is the [Slider](/concepts/05%20Widgets/Slider/00%20Overview.md '/Documentation/Guide/Widgets/Slider/Overview/') widget with a second handle added.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSlider/Overview/"
}

The following code adds a simple **RangeSlider** to your page. The **start** and **end** options specify the selected interval. The **min** and **max** options limit the range of accepted values.

    <!--HTML-->
    <div id="rangeSliderContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#rangeSliderContainer").dxRangeSlider({
            min: 0, max: 100,
            start: 20, end: 60
        });
    });

In addition, you can specify the step of **RangeSlider** values using the [step](/api-reference/10%20UI%20Widgets/dxSliderBase/1%20Configuration/step.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#step') option.

    <!--JavaScript-->
    $(function() {
        $("#rangeSliderContainer").dxRangeSlider({
            min: 0, max: 100,
            start: 20, end: 60,
            step: 10
        });
    });



#####See Also#####
#include common-link-configurewidget
- [RangeSlider - Customize Widget Appearance](/concepts/05%20Widgets/RangeSlider/05%20Customize%20Widget%20Appearance.md '/Documentation/Guide/Widgets/RangeSlider/Customize_Widget_Appearance')
- [RangeSlider - Handle the Value Change Event](/concepts/05%20Widgets/RangeSlider/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/RangeSlider/Handle_the_Value_Change_Event')
- [RangeSlider API Reference](/api-reference/10%20UI%20Widgets/dxRangeSlider '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/')
- [Slider - Overview](/concepts/05%20Widgets/Slider/00%20Overview.md '/Documentation/Guide/Widgets/Slider/Overview/')

[tags]rangeSlider, range slider, editor, overview, range, min, max, start, end, step