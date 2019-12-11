For Angular, AngularJS, and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/'). The following code shows how you can use **dxTemplate** to define templates for cells.

---
##### Angular

    <!--HTML-->
    <dx-calendar
        [(value)]="currentDate">
        <span *dxTemplate="let cellData of 'cell'; let i = index"
             [style.font-style]="i == 0 || i == 6 ? 'italic' : 'normal'">
             {{cellData.text}}
        </span>
    </dx-calendar>

    <!--TypeScript-->
    import { DxCalendarModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        currentDate: Date = new Date();
    }
    @NgModule({
        imports: [
            // ...
            DxCalendarModule
        ],
        // ...
    })

#####**AngularJS**

    <!--HTML--><div ng-controller="DemoController">
        <div dx-calendar="{
            cellTemplate: 'cell',
            bindingOptions: {
                value: 'currentDate'
            }
        }" dx-item-alias="cellData">
            <span data-options="dxTemplate: { name: 'cell' }"
                  style="font-style: {{$index == 0 || $index == 6 ? 'italic' : 'normal'}}">
                  {{cellData.text}}
            </span>
        </div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.currentDate = new Date();
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the cell object.

#####**Knockout**

    <!--HTML--><div data-bind="dxCalendar: {
        value: currentDate,
        cellTemplate: 'cell'
    }">
        <span data-options="dxTemplate: { name: 'cell' }" data-bind="{
            style: { 'font-style': $index == 0 || $index == 6 ? 'italic' : 'normal' },
            text: text
        }"></span>
    </div>

    <!--JavaScript-->var viewModel = {
        currentDate: ko.observable(new Date())
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, combine the HTML markup for cells manually with jQuery [DOM manipulation methods](https://api.jquery.com/category/manipulation). To apply this markup, use the [cellTemplate](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/cellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#cellTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    $(function () {
        $("#calendarContainer").dxCalendar({
            value: new Date(),
            cellTemplate: function (cellData, cellIndex, cellElement) {
                var italic = $("<span>").css('font-style', 'italic')
                                        .text(cellData.text);
                var normal = $("<span>").text(cellData.text);
                return (cellIndex == 0 || cellIndex == 6) ? italic : normal;
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