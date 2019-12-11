The **Slider** is a widget that allows an end user to set a numeric value on a continuous range of possible values.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-slider-overview/ios7" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds a simple **Slider** to your page. The **min** and **max** options limit the range of accepted values. The **value** sets the initial value for the widget.

    <!--HTML-->
    <div id="sliderContainer"></div>

<!---->

    <!--JavaScript-->
    $(function() {
        $("#sliderContainer").dxSlider({
            min: 0, max: 100,
            value: 25
        });
    });

In addition, you can specify the step of **Slider** values using the [step](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/step.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/#step') option.

    <!--JavaScript-->
    $(function() {
        $("#sliderContainer").dxSlider({
            min: 0, max: 100,
            value: 25,
            step: 10
        });
    });

#####See Also#####
- [Widget Basics - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/')
- [Widget Basics - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/')
- [Widget Basics - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [Slider - Customize Widget Appearance](/concepts/05%20Widgets/Slider/05%20Customize%20Widget%20Appearance.md '/Documentation/Guide/Widgets/Slider/Customize_Widget_Appearance')
- [Slider - Handle the Value Change Event](/concepts/05%20Widgets/Slider/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/Slider/Handle_the_Value_Change_Event')
- [Slider API Reference](/api-reference/10%20UI%20Widgets/dxSlider '/Documentation/ApiReference/UI_Widgets/dxSlider/')
- [RangeSlider - Overview](/concepts/05%20Widgets/RangeSlider/00%20Overview.md '/Documentation/Guide/Widgets/RangeSlider/Overview/')

[tags]slider, editor, overview, min, max, step