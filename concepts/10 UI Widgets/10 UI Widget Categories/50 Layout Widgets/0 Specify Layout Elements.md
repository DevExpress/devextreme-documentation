A common task you encounter with when working with a layout widget is specifying layout elements arranged by the widget. You can solve this task using the **dxItem** markup component. Create a **div** element for each layout block and apply the **data-options** attribute set to **dxItem**.

    <!--HTML-->
    <div id="box">
        <div data-options="dxItem: firstItemOptions ">
            . . .
        </div>
        <div data-options="dxItem: secondItemOptions">
            . . .
        </div>
        <div data-options="dxItem: thirdItemOptions">
            . . .
        </div>
    </div>

<!---->

    <!--JavaScript-->
    $("#box").dxBox({})

#####AngularJS Approach#####

    <!--HTML-->
    <div dx-box="{ }">
        <div data-options="dxItem: firstItemOptions ">
            . . .
        </div>
        <div data-options="dxItem: secondItemOptions">
            . . .
        </div>
        <div data-options="dxItem: thirdItemOptions">
            . . .
        </div>
    </div>

#####Knockout Approach#####

    <!--HTML-->
    <div data-bind="dxBox:{ }">
        <div data-options="dxItem: firstItemOptions ">
            . . .
        </div>
        <div data-options="dxItem: secondItemOptions">
            . . .
        </div>
        <div data-options="dxItem: thirdItemOptions">
            . . .
        </div>
    </div>

To learn what set of item options is required for a specific widget, refer to the **Default Item Template** reference section of this widget.

The layout widgets implement common Collection Container Widget functionality. This enables you to [specify widget items](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/0%20Specify%20Data%20Source.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source') and [customize item appearance](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#UI_Widgets_UI_Widget_Categories_Collection_Container_Widgets_Common_Tasks_Customize_Widget_Item_Appearance) using the approach supported by collection container widgets.
