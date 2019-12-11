---
module: ui/autocomplete
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
You can create a widget using one of the following approaches.

- **jQuery**  
 Use the `dxAutocomplete` jQuery plug-in.

        <!--HTML-->
        <div id="autoComplete"></div>

    <!---->

        <!--JavaScript-->
        $("#actionSheet").dxAutocomplete({
            dataSource: autoCompleteData,
            placeholder: 'Type country name',
            valueExpr: 'name'
        });

- **Knockout**  
 Add a div element and apply the `dxAutocomplete` binding to this element.

        <!--HTML-->
        <div data-bind="dxAutocomplete: {
            dataSource: autoCompleteData,
            placeholder: 'Type country name',
            valueExpr: 'name'
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-autocomplete` directive to this element.

        <!--HTML-->
        <div dx-autocomplete="{
            dataSource: autoCompleteData,
            placeholder: 'Type country name',
            valueExpr: 'name'
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

The **Autocomplete** widget supports common Collection Container and Editor widget functionality. You can find detailed information on principles of working with the widget in the [dxAutocomplete section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/List%20of%20Editor%20Widgets/dxAutocomplete.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#List_of_Editor_Widgets/dxAutocomplete') of the [Editor Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/') article. For the information on using Collection Container functionality refer to the [Collection Container Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/') guide.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorsautocompleteautocompleteautocomplete/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>