---
id: dxTemplate
type: Object
---
---
##### shortDescription
A custom template's markup.

##### lib
dx.web.js, dx.all.js

---
The **dxTemplate** markup component specifies a custom template for a container widget or a collection widget's items in Angular, AngularJS and Knockout apps. Place this template within the widget's element, specify the template [name](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate/1%20Configuration/name.md '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/Configuration/#name') and assign it to the corresponding **xxxTemplate** option (for example, **itemTemplate**, **containerTemplate**). You can omit specifying the **xxxTemplate** option if you use the default template name, for instance, *item* for the **itemTemplate**, *content* for the **contentTemplate**. 

Commonly, the **dxTemplate** is in the component's (Angular), scope's (AngularJS) or view model's (Knockout) binding context, but it can differ depending on the widget element you specify the template for. See the corresponding **xxxTemplate** option description for more information on a specific template's binding context. Use <a href="http://knockoutjs.com/documentation/binding-context.html" target="_blank">Knockout</a> or <a href="https://docs.angularjs.org/guide/scope" target="_blank">AngularJS</a> binding variables if you need to access another binding context from the template.

---

#####Angular

    <!--HTML-->
    <dx-popup
        [width]="300"
        [height]="250"
        contentTemplate="info"
        [visible]="true">
        <div *dxTemplate="let data of 'info'">
            <p>
                Full Name:
                <span>{{employee.FirstName}}</span>
                <span>{{employee.LastName}}</span>
            </p>
            <p>Birth Date: <span>{{employee.BirthDate}}</span></p>
            <p>Address: <span>{{employee.Address}}</span></p>
        </div>
    </dx-popup>

    <!--TypeScript-->
    import { DxPopupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            FirstName: "Sandra",
            LastName: "Johnson",
            BirthDate: "1974/11/15",
            Address: "4600 N Virginia Rd."
        };
    }
    @NgModule({
        imports: [
            // ...
            DxPopupModule
        ],
        // ...
    })

#####AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div class="popup" 
            dx-popup="{
                width: 300,
                height: 250,
                contentTemplate: 'info',   
                visible: true
            }">
            <div data-options="dxTemplate: { name:'info' }">
                <p>
                    Full Name:
                    <span>{{employee.FirstName}}</span> 
                    <span>{{employee.LastName}}</span>
                </p>            
                <p>Birth Date: <span>{{employee.BirthDate}}</span></p>
                <p>Address: <span>{{employee.Address}}</span></p>
            </div>
        </div>    
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function DemoController($scope) {
            $scope.employee = {
                FirstName: "Sandra",
                LastName: "Johnson",
                BirthDate: "1974/11/15",
                Address: "4600 N Virginia Rd."
            };
        });

#####Knockout

    <!--HTML-->
    <div data-bind="dxPopup: {
        width: 300,
        height: 250,
        contentTemplate: 'info',   
        visible: true
    }">
        <div data-options="dxTemplate: { name:'info' }">
            <p>
                Full Name:
                <span data-bind="text: employee.FirstName"></span> 
                <span data-bind="text: employee.LastName"></span>
            </p>            
            <p>Birth Date: <span data-bind="text: employee.BirthDate"></span></p>
            <p>Address: <span data-bind="text: employee.Address"></span></p>
        </div>   
    </div>

    <!--JavaScript-->var viewModel= {
        employee: {
            FirstName: "Sandra",
            LastName: "Johnson",
            BirthDate: "1974/11/15",
            Address: "4600 N Virginia Rd."
        }
    };

    ko.applyBindings(viewModel);

---

When you specify an item template in Knockout apps, you can bind this template's elements directly to an item object's fields. In Angular and AngularJS apps, an item object extends the standard binding context. In AngularJS apps, you can access it only using an alias that you specify in the `dx-item-alias` directive. In Angular apps, use the input variable that is declared via the `let` keyword. In all Angular, AngularJs and Knockout apps, you can also bind a template element to the rendered item's index using the `index` keyword. 

---

#####Angular

    <!--HTML-->
    <dx-list [dataSource]="fruits">
        <div *dxTemplate="let fruit of 'item'; let i = index">
            <span>[{{i}}] </span>
            <b>{{fruit.name}}</b><br />
            <p>{{fruit.count}}</p>
        </div>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruits = [
            { name: "Apples", count: 10 },
            { name: "Oranges", count: 12 },
            { name: "Lemons", count: 15 },
            { name: "Pears", count: 20 },
            { name: "Pineapples", count: 3 }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })


#####AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-list="{
            dataSource: fruits
        }" dx-item-alias="fruit">
            <div data-options="dxTemplate: { name: 'item' }">
                <span>[{{$index}}] </span>
                <b>{{fruit.name}}</b><br />
                <p>{{fruit.count}}</p>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.fruits = [
                { name: "Apples", count: 10 },
                { name: "Oranges", count: 12 },
                { name: "Lemons", count: 15 },
                { name: "Pears", count: 20 },
                { name: "Pineapples", count: 3 }
            ];
        });

#####Knockout

    <!--HTML-->
    <div data-bind="dxList: { dataSource: fruits }">
        <div data-options="dxTemplate: { name: 'item' }">
            [<span data-bind="text: $index"></span>]
            <b data-bind="text: name"></b><br />
            <p data-bind="text: count"></p>
        </div>
    </div>


    <!--JavaScript-->
    var viewModel = {
        fruits: [
            { name: "Apples", count: 10 },
            { name: "Oranges", count: 12 },
            { name: "Lemons", count: 15 },
            { name: "Pears", count: 20 },
            { name: "Pineapples", count: 3 }
        ]
    };

    ko.applyBindings(viewModel);

---

In AngularJs and Knockout apps, you can define different templates intended for different devices. Specify the [device object's](/api-reference/50%20Common/Object%20Structures/device '/Documentation/ApiReference/Common/Object_Structures/device/') fields as the **dxTemplate**'s markup options to set a target device for a template. 

    <!--JavaScript-->
    <div data-options="dxTemplate: { name: 'item', platform: 'ios', phone: true }">
        This is a template for an iPhone.
    </div>
    <div data-options="dxTemplate: { name: 'item', tablet: true }">
        This is a template for any tablet.
    </div>

#####See Also#####
- [Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates '/Documentation/Guide/Widgets/Common/Templates/')