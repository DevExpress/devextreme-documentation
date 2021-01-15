Templates allow you to customize UI component elements. In the following code, an [itemTemplate](/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemTemplate) called `listItem` and a [groupTemplate](/Documentation/ApiReference/UI_Components/dxList/Configuration/#groupTemplate) called `listGroup` customize items and groups in the [List](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/GroupedList/Angular/Light). Inside the templates, the `itemData` and `groupData` variables expose item and group data objects; the `itemIndex` variable gives access to the item index.

    <!--HTML-->
    <dx-list
        [items]="groupedItems"
        [grouped]="true"
        itemTemplate="listItem"
        groupTemplate="listGroup">
        <div *dxTemplate="let itemData of 'listItem'; let itemIndex = index">
            {{itemIndex}} - {{itemData.itemProperty}}
        </div>
        <div *dxTemplate="let groupData of 'listGroup'">
            {{groupData.groupProperty}}
        </div>
    </dx-list>

[note] The `dxTemplate` attribute directive cannot be used on custom markup elements. 

Refer to the common [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates) article for more information.

[note]

Angular has a built-in `template` directive. This causes an error when you try to specify an eponymous property on a configuration component (for instance, on `dxo-master-detail`). In this case, use the following syntax:

    <!--HTML-->
    <dxo-master-detail [template]="'masterDetail'"></dxo-master-detail>
    
[/note]
