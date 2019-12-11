---
dep: 
type: Object
inherits: ..\..\10 UI Widgets\Component\Component.md
---
---
##### lib
dx.viz.js, dx.viz-web.js, dx.all.js

##### deprecated
[note]This widget is <span style="color:red">deprecated</span>. Instead of it, use the built-in client-side exporting. For further information, refer to the **export** option of a particular widget.

##### shortDescription
The **Exporter** widget allows you to export your chart, gauge or any other DevExtreme data visualization widget into an image or a document. The **Exporter** works in conjunction with other widgets and should not be used separately.

---
To operate, **Exporter** requires the [PhantomJS](https://phantomjs.org) WebKit version 1.9.X, which allows you to use the client-server model where PhantomJS performs as a server. Refer to the [Deploy a Server](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/80%20Client-Side%20Exporting%20and%20Printing/40%20dxExporter/10%20Deploy%20a%20Server.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Client-Side_Exporting_and_Printing/#dxExporter/Deploy_a_Server') topic for details on how to setup your server.

When your server is ready, add **Exporter** onto your page.

#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function() {
        $("#exportMenu").dxExporter({
            // ...
            });
    });

    <!--HTML--><div id="exportMenu"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-exporter></dx-exporter>

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div dx-exporter="{
        // ...
    }"></div>

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxExporter: {
        // ...
    }"></div>

---