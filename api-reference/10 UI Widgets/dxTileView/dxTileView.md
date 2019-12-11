---
module: ui/tile_view
export: default
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### widgettree
dataSource: [
    {text: ""},
    {text: ""},
    {text: ""},
    {text: ""},
    {text: ""},
    {text: ""},
    {text: ""}
],
height: 300

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **TileView** widget contains a collection of tiles. Tiles can store much more information than ordinary buttons, that is why they are very popular in apps designed for touch devices.

---
You can create the widget using one of the following approaches.

- [**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div id="tileView">
            <div data-options="dxTemplate: { name: 'tile' }">
                <p style="font-size:larger"><b data-bind="text: state"></b></p>
                <p>Capital: <i data-bind="text: capital"></i></p>
                <p>Population: <i data-bind="text: population"></i></p>
            </div>
        </div>

        <!--JavaScript-->
        var states = [
            { state: "Alabama", capital: "Montgomery", population: 4822023 },
            { state: "Alaska", capital: "Juneau", population: 731449 },
            { state: "Arizona", capital: "Phoenix", population: 6553255 },
            // ...
        ];
        $(function() {
            $("#tileView").dxTileView({
                dataSource: states,
                itemTemplate: "tile"
            });
        });

- [**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <dx-tile-view
            [dataSource]="states"
            itemTemplate="tile">
                <div *dxTemplate="let tileData of 'tile'">
                    <p style="font-size:larger"><b> {{ tileData.state }} </b></p>
                    <p>Capital: <i> {{ tileData.capital }} </i></p>
                    <p>Population: <i> {{ tileData.population }} </i></p>
                </div>
        </dx-tile-view>

        <!--JavaScript-->
        export class AppComponent {
            states = [
                // ...
            ];
        }

- [**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div dx-tile-view="{
            dataSource: states,
            itemTemplate: 'tile'
        }" dx-item-alias="itemObj">
            <div data-options="dxTemplate: { name: 'tile' }">
                <p style="font-size:larger"><b> {{ itemObj.state }} </b></p>
                <p>Capital: <i> {{ itemObj.capital }} </i></p>
                <p>Population: <i> {{ itemObj.population }} </i></p>
            </div>
        </div>

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller("DemoController", function ($scope) {
                $scope.states = [
                    // ...   
                ];
            });

- [**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div data-bind="dxTileView: {
            dataSource: states,
            itemTemplate: 'tile'
        }">
            <div data-options="dxTemplate: { name: 'tile' }">
                <p style="font-size:larger"><b data-bind="text: state"></b></p>
                <p>Capital: <i data-bind="text: capital"></i></p>
                <p>Population: <i data-bind="text: population"></i></p>
            </div>
        </div>

        <!--JavaScript-->var viewModel = {
            states: [
                // ...
            ]
        };
        ko.applyBindings(viewModel);

- [**ASP.NET MVC Wrappers**](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget')

        <!--Razor C#-->@(Html.DevExtreme().TileView()
            .ID("tileView")
            .DataSource(States)
            .ItemTemplate(@<text>
                <p style="font-size:larger"><b> <%= state %> </b></p>
                <p>Capital: <i> <%= capital %> </i></p>
                <p>Population: <i> <%= population %> </i></p>
            </text>)
        )

        <!--Razor VB-->@Code
            Html.DevExtreme().TileView() _
                .ID("tileView") _
                .DataSource(States) _
                .ItemTemplate(Sub()
                    @<text>
                        <p style="font-size:larger"><b> <%= state %> </b></p>
                        <p>Capital: <i> <%= capital %> </i></p>
                        <p>Population: <i> <%= population %> </i></p>
                    </text>
                End Sub).Render()
        End Code

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandliststileviewtileviewtileview/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [TileView - Overview](/concepts/05%20Widgets/TileView/00%20Overview.md '/Documentation/Guide/Widgets/TileView/Overview/')