---
module: ui/form
inherits: ..\Widget\Widget.md
---
---
##### widgettree
formData: {
    "ID": 1,
    "CompanyName": "Super Mart of the West",
    "Address": "702 SW 8th Street",
    "City": "Bentonville",
    "State": "Arkansas",
    "Zipcode": 72716,
    "Phone": "(800) 555-2797",
    "Fax": "(800) 555-2171",
    "Website": "http://www.nowebsitesupermart.com"
}

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Form** widget represents fields of a data object as a collection of label-editor pairs. These pairs can be arranged in several groups, tabs and columns.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxForm` jQuery plug-in.

        <!--HTML-->
        <div id="form">
        </div>

    <!---->

        <!--JavaScript-->
        var companyData = {
            id: "1",
            name: "Super Mart of the West",
            city: "Bentonville",
            state: "Arkansas",
            zip: 72716,
            phone: "(800) 555-2797",
            fax: "(800) 555-2171",
            website: "http://www.nowebsitesupermart.com"
        }
        $("#form").dxForm({
            formData: companyData,
            colCount: 2
        });

- **Knockout**  
 Add a div element and apply `dxForm` binding to this element.

        <!--HTML-->
        <div data-bind="dxForm: {
            formData: companyData,
            colCount: 2
        }"></div>

    <!---->

        <!--JavaScript-->
        var myViewModel = {
            companyData: {
                id: "1",
                name: "Super Mart of the West",
                city: "Bentonville",
                state: "Arkansas",
                zip: 72716,
                phone: "(800) 555-2797",
                fax: "(800) 555-2171",
                website: "http://www.nowebsitesupermart.com"
            }
        }
        ko.applyBindings(myViewModel);

- **AngularJS**  
 Add a div element and apply the `dx-form` directive to this element.

        <!--HTML-->
        <div ng-controller="demoController">
            <div dx-form="{
                formData: companyData,
                colCount: 2
            }"></div>
        </div>

    <!---->

        <!--JavaScript-->
        var myApp = angular.module('myApp', ['dx']);
        myApp.controller("demoController", function ($scope) {
            $scope.companyData = {
                id: "1",
                name: "Super Mart of the West",
                city: "Bentonville",
                state: "Arkansas",
                zip: 72716,
                phone: "(800) 555-2797",
                fax: "(800) 555-2171",
                website: "http://www.nowebsitesupermart.com"
            };
        });
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['myApp']);
        });

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.