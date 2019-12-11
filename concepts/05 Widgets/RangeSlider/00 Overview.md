The **RangeSlider** is a widget that allows an end user to choose a range of numeric values. Basically, the **RangeSlider** is the [Slider](/concepts/05%20Widgets/Slider/00%20Overview.md '/Documentation/Guide/Widgets/Slider/Overview/') widget with a second handle added.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-range_slider-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds a simple **RangeSlider** to your page. The **start** and **end** options specify the selected interval. The **min** and **max** options limit the range of accepted values.

    <!--HTML-->
    <div id="rangeSliderContainer"></div>

<!---->

    <!--JavaScript-->
    $(function() {
        $("#rangeSliderContainer").dxRangeSlider({
            min: 0, max: 100,
            start: 20, end: 60
        });
    });

In addition, you can specify the step of **RangeSlider** values using the [step](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/step.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#step') option.

    <!--JavaScript-->
    $(function() {
        $("#rangeSliderContainer").dxRangeSlider({
            min: 0, max: 100,
            start: 20, end: 60,
            step: 10
        });
    });



#####See Also#####
- [Widget Basics - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/')
- [Widget Basics - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/')
- [Widget Basics - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [RangeSlider - Customize Widget Appearance](/concepts/05%20Widgets/RangeSlider/05%20Customize%20Widget%20Appearance.md '/Documentation/Guide/Widgets/RangeSlider/Customize_Widget_Appearance')
- [RangeSlider - Handle the Value Change Event](/concepts/05%20Widgets/RangeSlider/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/RangeSlider/Handle_the_Value_Change_Event')
- [RangeSlider API Reference](/api-reference/10%20UI%20Widgets/dxRangeSlider '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/')
- [Slider - Overview](/concepts/05%20Widgets/Slider/00%20Overview.md '/Documentation/Guide/Widgets/Slider/Overview/')

[tags]rangeSlider, range slider, editor, overview, range, min, max, start, end, step