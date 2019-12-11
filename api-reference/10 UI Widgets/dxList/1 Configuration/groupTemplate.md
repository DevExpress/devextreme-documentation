---
default: 'group'
type: template
---
---
##### shortDescription
The template to be used for rendering item groups.

##### param(groupData): object
The group object to be rendered.

##### param(groupIndex): number
The index of the group to be rendered.

##### param(groupElement): object
An HTML element of the group to be rendered.

##### return: string|Node|jQuery
A template name or a template container.

---
[note]A binding context of a group template is the data source object that corresponds to the currently rendered group. 

So, in **Knockout approach**, you can bind template elements to the group object fields directly. To access another binding context within a group template, use [Knockout](https://knockoutjs.com/documentation/binding-context.html) binding variables.

In **AngularJS approach**, if you need to access group object fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive. Add the directive to the widget element to specify an alias to the root object of a group. Without this directive, group object fields are beyond reach. To access another binding context within a group template, use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [List - Customize Group Headers](/concepts/05%20Widgets/List/14%20Grouping/05%20Customize%20Group%20Headers.md '/Documentation/Guide/Widgets/List/Grouping/Customize_Group_Headers/')
- [template](/api-reference/50%20Common/Object%20Structures/template '/Documentation/ApiReference/Common/Object_Structures/template/')
- [Customize Widget Element Appearance](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistslistlistgroupedlist/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>