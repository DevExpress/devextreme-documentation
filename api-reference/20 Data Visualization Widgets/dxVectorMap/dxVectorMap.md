---
module: viz/vector_map
export: default
inherits: ..\BaseWidget\BaseWidget.md
---
---
##### widgettree
layers: [{
    type: 'area',
    dataSource: '/Content/data/vectorMap-sources/world.txt'
}]

##### lib
dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **VectorMap** is a widget that visualizes geographical locations. This widget represents a geographical map that contains areas and markers. Areas embody continents and countries. Markers flag specific points on the map, for example, towns, cities or capitals.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function() {
        $("#vectorMap").dxVectorMap({
            layers: [{
                type: 'area',
                dataSource: DevExpress.viz.map.sources.world,
                label: {
                    enabled: true,
                    dataField: 'name'
                }
            }]
        });
    });

    <!--HTML--><div id="vectorMap"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-vector-map>
        <dxi-layer
            type="area"
            [dataSource]="worldMap">
            <dxo-label
                [enabled]="true"
                dataField="name">
            </dxo-label>
        </dxi-layer>
    </dx-vector-map>

    <!--TypeScript-->
    import { DxVectorMapModule } from "devextreme-angular";
    import * as maps from "vectormap-data/world.js";
    // ...
    export class AppComponent {
        worldMap: any = maps.world;
    }
    @NgModule({
        imports: [
            // ...
            DxVectorMapModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div dx-vector-map="{
        layers: [{
            type: 'area',
            dataSource: DevExpress.viz.map.sources.world,
            label: {
                enabled: true,
                dataField: 'name'
            }
        }]
    }"></div>

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxVectorMap: {
        layers: [{
            type: 'area',
            dataSource: DevExpress.viz.map.sources.world,
            label: {
                enabled: true,
                dataField: 'name'
            }
        }],
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().VectorMap()
        .Layers(layers => {
            layers.Add()
                .DataSource(new JS("DevExpress.viz.map.sources.world"))
                .Label(l => l
                    .Enabled(true)
                    .DataField("name")
                );
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().VectorMap() _
        .Layers(Sub(layers)
            layers.Add() _
                .DataSource(New JS("DevExpress.viz.map.sources.world")) _
                .Label(Sub(l)
                    l.Enabled(true) _
                        .DataField("name")
                End Sub)
        End Sub)
    )

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapcolorscustomization/"
}
<a href="http://www.youtube.com/watch?v=A2jKKWJq2Kk&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=23" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [VectorMap - Visual Elements](/concepts/05%20Widgets/VectorMap/10%20Visual%20Elements '/Documentation/Guide/Widgets/VectorMap/Visual_Elements/')
- [VectorMap - Providing Data](/concepts/05%20Widgets/VectorMap/20%20Providing%20Data '/Documentation/Guide/Widgets/VectorMap/Providing_Data/')
- [VectorMap - End-User Interaction](/concepts/05%20Widgets/VectorMap/40%20End-User%20Interaction '/Documentation/Guide/Widgets/VectorMap/End-User_Interaction/')