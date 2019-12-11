---
type: Object
---
---
##### shortDescription
Specifies markup for a widget item.

---
The **dxItem** component defines custom markup for a layout's or collection widget's item. The **Default Item Template** section of the widget describes each **dxItem** specified within the widget element and its configuration options.

- [**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div id="navBarContainer">
            <div data-options="dxItem: { disabled: true }"> 
                <!-- custom markup -->
            </div>
            <div data-options="dxItem: { badge: 'New'}"> 
                <!-- custom markup -->
            </div>
            <div data-options="dxItem: { }"> 
                <!-- custom markup -->
            </div>
        </div>

- [**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div dx-nav-bar="{ }">
            <div data-options="dxItem: { disabled: true }"> 
                <!-- custom markup -->
            </div>
            <div data-options="dxItem: { badge: 'New'}"> 
                <!-- custom markup -->
            </div>
            <div data-options="dxItem: { }"> 
                <!-- custom markup -->
            </div>
        </div>

- [**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div data-bind="dxNavBar: { }">
            <div data-options="dxItem: { disabled: true }"> 
                <!-- custom markup -->
            </div>
            <div data-options="dxItem: { badge: 'New'}"> 
                <!-- custom markup -->
            </div>
            <div data-options="dxItem: { }"> 
                <!-- custom markup -->
            </div>
        </div>


[note]**dxItem** elements are ignored when the **dataSource** option is defined.