---
module: ui/autocomplete
export: default
inherits: ..\dxDropDownList\dxDropDownList.md
---
---
##### widgettree
dataSource: ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia", "Phoenix", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Indianapolis", "Jacksonville", "San Francisco", "Columbus", "Charlotte", "Fort Worth", "Detroit", "El Paso", "Memphis", "Seattle", "Denver", "Washington", "Boston", "Nashville", "Baltimore", "Oklahoma City", "Louisville", "Portland", "Las Vegas", "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento", "Long Beach", "Kansas City", "Mesa", "Virginia Beach", "Atlanta", "Colorado Springs", "Omaha", "Raleigh", "Miami", "Oakland", "Minneapolis", "Tulsa", "Cleveland", "Wichita", "Arlington", "New Orleans", "Bakersfield", "Tampa", "Honolulu", "Aurora", "Anaheim", "Santa Ana", "St. Louis", "Riverside", "Corpus Christi", "Lexington", "Pittsburgh", "Anchorage", "Stockton", "Cincinnati", "Saint Paul", "Toledo", "Greensboro", "Newark", "Plano", "Henderson", "Lincoln", "Buffalo", "Jersey City", "Chula Vista", "Fort Wayne", "Orlando", "St. Petersburg", "Chandler", "Laredo", "Norfolk", "Durham", "Madison", "Lubbock", "Irvine", "Winston–Salem", "Glendale", "Garland", "Hialeah", "Reno", "Chesapeake", "Gilbert", "Baton Rouge", "Irving", "Scottsdale", "North Las Vegas", "Fremont", "Boise", "Richmond"],
placeholder: "City"

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Autocomplete** widget is a textbox that provides suggestions while a user types into it.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#autocomplete").dxAutocomplete({
            dataSource: [ "Item 1", "Item 2", "Item 3" ],
            placeholder: "Type item name..."
        });
    });

    <!--HTML-->
    <div id="autocomplete"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-autocomplete
        [dataSource]="autocompleteData"
        placeholder="Type item name...">
    </dx-autocomplete>

    <!--TypeScript-->
    import { DxAutocompleteModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        autocompleteData = [ "Item 1", "Item 2", "Item 3" ];
    }
    @NgModule({
        imports: [
            // ...
            DxAutocompleteModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-autocomplete="{
            dataSource: autocompleteData,
            placeholder: 'Type item name...'
        }"></div>
    </div>

    <!--JavaScript-->
    angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.autocompleteData = [ "Item 1", "Item 2", "Item 3" ];
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxAutocomplete: {
        dataSource: autocompleteData,
        placeholder: 'Type item name...'
    }"></div>

    <!--JavaScript-->
    var viewModel = {
        autocompleteData: [ "Item 1", "Item 2", "Item 3" ]
    };

    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Autocomplete()
        .ID("autocomplete")
        .DataSource(new[] { "Item 1", "Item 2", "Item 3" })
        .Placeholder("Type item name...")
    )

    <!--Razor VB-->@(Html.DevExtreme().Autocomplete() _
        .ID("autocomplete") _
        .DataSource({ "Item 1", "Item 2", "Item 3" }) _
        .Placeholder("Type item name...")
    )

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/editorsautocompleteautocompleteautocomplete/"
}

#####See Also#####
- [Autocomplete - Overview](/concepts/05%20Widgets/Autocomplete/00%20Overview.md '/Documentation/Guide/Widgets/Autocomplete/Overview/')