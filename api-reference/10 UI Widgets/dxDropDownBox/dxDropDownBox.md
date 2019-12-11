---
module: ui/drop_down_box
export: default
inherits: ..\DataExpressionMixin\DataExpressionMixin.md,..\dxDropDownEditor\dxDropDownEditor.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **DropDownBox** widget consists of a text field, which displays the current value, and a drop-down field, which can contain any UI element.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->
    $(function () {
        var fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
        $("#dropDownBox").dxDropDownBox({
            value: fruits[0],
            dataSource: fruits,
            contentTemplate: function (e) {
                var $list = $("<div>").dxList({
                    dataSource: fruits,
                    selectionMode: "single",
                    onSelectionChanged: function (args) {
                        e.component.option("value", args.addedItems[0]);
                        e.component.close();
                    }
                });
                return $list;
            }
        });
    });

    <!--HTML-->
    <div id="dropDownBox"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-drop-down-box
        [(value)]="selectedFruit"
        [(opened)]="isDropDownBoxOpened"
        [dataSource]="fruits">
        <div *dxTemplate="let contentData of 'content'">
            <dx-list 
                [dataSource]="fruits"
                selectionMode="single"
                (onSelectionChanged)="changeDropDownBoxValue($event)">
            </dx-list>
        </div>
    </dx-drop-down-box>

    <!--TypeScript-->
    import { DxDropDownBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
        selectedFruit = fruits[0];
        isDropDownBoxOpened = false;
        changeDropDownBoxValue = function (args) {
            selectedFruit = args.addedItems[0];
            isDropDownBoxOpened = false;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDropDownBoxModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-drop-down-box="{
            dataSource: fruits,
            bindingOptions: {
                value: 'selectedFruit',
                opened: 'isDropDownBoxOpened'
            }
        }">
            <div data-options="dxTemplate: { name: 'content' }">
                <div dx-list="{
                    dataSource: fruits,
                    selectionMode: 'single',
                    onSelectionChanged: changeDropDownBoxValue
                }"></div>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
            $scope.selectedFruit = $scope.fruits[0];
            $scope.isDropDownBoxOpened = false;
            $scope.changeDropDownBoxValue = function (args) {
                $scope.selectedFruit = args.addedItems[0];
                $scope.isDropDownBoxOpened = false;
            }
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxDropDownBox: {
        value: fruits[0],
        dataSource: fruits,
        opened: isDropDownBoxOpened
    }">
        <div data-options="dxTemplate: { name: 'content' }">
            <div data-bind="dxList: {
                dataSource: fruits,
                selectionMode: 'single',
                onSelectionChanged: changeDropDownBoxValue
            }"></div>
        </div>
    </div>

    <!--JavaScript-->
    var viewModel = function () {
        var vm = { };
        vm.fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
        vm.selectedFruit = ko.observable(vm.fruits[0]);
        vm.isDropDownBoxOpened = ko.observable(false);
        vm.changeDropDownBoxValue = function (args) {
            vm.selectedFruit(args.addedItems[0]);
            vm.isDropDownBoxOpened(false);
        }
        return vm;
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)
    
    <!--Razor C#-->
    @(Html.DevExtreme().DropDownBox()
        .ID("dropDownBox")
        .DataSource(new[] { "Apples", "Oranges", "Lemons", "Pears", "Pineapples" })
        .Value("Apples")
        .ContentTemplate(@<text>
            @(Html.DevExtreme().List()
                .DataSource(new JS("component.option('dataSource')"))
                .SelectionMode(ListSelectionMode.Single)
                .OnSelectionChanged("innerList_selectionChanged")
            )
        </text>)
    )

    <script>
        function innerList_selectionChanged (e) {
            var dropDownBox = $("#dropDownBox").dxDropDownBox("instance");
            dropDownBox.option("value", e.addedItems[0]);
            dropDownBox.close();
        }
    </script>

    <!--Razor VB-->
    @Code
        Html.DevExtreme().DropDownBox() _
            .ID("dropDownBox") _
            .DataSource({ "Apples", "Oranges", "Lemons", "Pears", "Pineapples" }) _
            .Value("Apples") _
            .ContentTemplate(Sub()
                @<text>
                    @Html.DevExtreme().List() _
                        .DataSource(New JS("component.option('dataSource')")) _
                        .SelectionMode(ListSelectionMode.Single) _
                        .OnSelectionChanged("innerList_selectionChanged")
                </text>
            End Sub).Render()
    End Code

    <script>
        function innerList_selectionChanged (e) {
            var dropDownBox = $("#dropDownBox").dxDropDownBox("instance");
            dropDownBox.option("value", e.addedItems[0]);
            dropDownBox.close();
        }
    </script>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DropDownBox/SingleSelection/jQuery/Light/"
}
<a href="https://www.youtube.com/watch?v=j578mQfW99o&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>