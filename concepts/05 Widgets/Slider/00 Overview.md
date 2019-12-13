The **Slider** is a widget that allows an end user to set a numeric value on a continuous range of possible values.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Slider/Overview/"
}

The following code adds a simple **Slider** to your page. The **min** and **max** options limit the range of accepted values. The **value** sets the initial value for the widget.

    <!--HTML-->
    <div id="sliderContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#sliderContainer").dxSlider({
            min: 0, max: 100,
            value: 25
        });
    });

In addition, you can specify the step of **Slider** values using the [step](/api-reference/10%20UI%20Widgets/dxSliderBase/1%20Configuration/step.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/#step') option.

    <!--JavaScript-->
    $(function() {
        $("#sliderContainer").dxSlider({
            min: 0, max: 100,
            value: 25,
            step: 10
        });
    });

#####See Also#####
#include common-link-configurewidget
- [Slider - Customize Widget Appearance](/concepts/05%20Widgets/Slider/05%20Customize%20Widget%20Appearance.md '/Documentation/Guide/Widgets/Slider/Customize_Widget_Appearance')
- [Slider - Handle the Value Change Event](/concepts/05%20Widgets/Slider/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/Slider/Handle_the_Value_Change_Event')
- [Slider API Reference](/api-reference/10%20UI%20Widgets/dxSlider '/Documentation/ApiReference/UI_Widgets/dxSlider/')
- [RangeSlider - Overview](/concepts/05%20Widgets/RangeSlider/00%20Overview.md '/Documentation/Guide/Widgets/RangeSlider/Overview/')

[tags]slider, editor, overview, min, max, step