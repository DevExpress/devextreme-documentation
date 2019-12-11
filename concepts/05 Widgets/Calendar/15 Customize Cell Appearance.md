For AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/'). The following code shows how you can use **dxTemplate** to define templates for cells.

**AngularJS**

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.currentDate = new Date();
        });

<!---->

    <!--HTML--><div ng-controller="DemoController">
        <div dx-calendar="{
            value: currentDate,
            cellTemplate: 'cell'
        }" dx-item-alias="item">
            <div data-options="dxTemplate: { name: 'cell' }">
                <span style="font-style:italic;">{{ item.text }}</span>
            </div>
        </div>
    </div>

[note] The `dx-item-alias` directive specifies the variable that is used to access the cell object.

**Knockout**

    <!--JavaScript-->var viewModel = {
        currentDate: new Date()
    };

    ko.applyBindings(viewModel);

<!---->

    <!--HTML--><div data-bind="dxCalendar: {
        value: currentDate,
        cellTemplate: 'cell'
    }">
        <div data-options="dxTemplate: { name: 'cell' }">
            <span style="font-style:italic;" data-bind="text: text"></span>
        </div>
    </div>

If you use jQuery alone, combine the HTML markup for cells manually with jQuery [DOM manipulation methods](https://api.jquery.com/category/manipulation). To apply this markup, use the [cellTemplate](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/cellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#cellTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    $(function () {
        $("#calendarContainer").dxCalendar({
            value: new Date(),
            cellTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<p style='font-style:italic;'>" + itemData.text + "</p>");
            }
        });
    });

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [Use an Alternative Template Engine](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance/5%20Use%20an%20Alternative%20Template%20Engine.md '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Use_an_Alternative_Template_Engine') article.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance)
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')
- [Calendar Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-calendar-overview)
- [Calendar API Reference](/api-reference/10%20UI%20Widgets/dxCalendar '/Documentation/ApiReference/UI_Widgets/dxCalendar/')

[tags]calendar, cell appearance, customize, templates