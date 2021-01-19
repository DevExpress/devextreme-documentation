[note] **Fields Grouping** essentially differs from from the [Data Grouping](/concepts/05%20Widgets/PivotGrid/050%20Grouping/020%20Data%20Grouping '/Documentation/Guide/Widgets/PivotGrid/Grouping/#Data_Grouping') described above.

If your [field](/concepts/05%20Widgets/PivotGrid/020%20Fields%20and%20Areas/10%20Fields.md '/Documentation/Guide/Widgets/PivotGrid/Fields_and_Areas/#Fields') set contains typical dimensions, such as **Address**, you can organize fields related to them into groups. The pivot grid's **group of fields** concept is similar to the **hierarchy** OLAP concept. A group will be displayed in the **Field Chooser** as a single field, but when you put a group into an [area](/concepts/05%20Widgets/PivotGrid/020%20Fields%20and%20Areas/20%20Areas.md '/Documentation/Guide/Widgets/PivotGrid/Fields_and_Areas/#Areas'), then that action is similar to putting a set of fields in a corresponding order in that area.

To create a group, follow the steps below.

1. Create an empty field in the **fields** array. Declare a new group by assigning its name to the [groupName](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/groupName.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#groupName') option of this field. Specify the area where this group must be located using the [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') option.    
2. Assign the group's name to the **groupName** option of each field you need to group.     
3. Order the fields within the group by setting the [groupIndex](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/groupIndex.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#groupIndex') option of each field within a group. The order of fields is important because it affects the structure of the resulting hierarchy.

A sample implementation of the **Address** dimension is presented below.

    <!--JavaScript-->var pivotGridOptions = {
        dataSource: {
            // ...
            fields: [{ 
                groupName: 'Address',
                area: 'column'
            }, {
                dataField: 'Region',
                groupName: 'Address',
                groupIndex: 0
            }, {
                dataField: 'Country',
                groupName: 'Address',
                groupIndex: 1
            }, { 
                dataField: 'City',
                groupName: 'Address',
                groupIndex: 2
            },
            // ...
            ]
        }
    }

You can specify a number of secondary options for a group. Define whether the group contains dimensional fields or measures using the [isMeasure](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/isMeasure.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#isMeasure') option. If the **groupName** value should not be displayed in the Field Chooser, configure the group's [caption](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/caption.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption'). If you need to [filter](/concepts/05%20Widgets/PivotGrid/080%20Filtering '/Documentation/Guide/Widgets/PivotGrid/Filtering/') data by group values, specify the [filterValues](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/filterValues.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#filterValues') option. Each item of the **filterValues** array should contain a filtering value for each field in the group.     

[note] When you create a group, fields that belong to this group disappear from the Field Chooser. If you need to display them along with the group, duplicate each field without specifying the **groupName** and **groupIndex**. If you have a group and its fields are displayed in the Field Chooser, consider putting them all into a folder using the [displayFolder](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/displayFolder.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#displayFolder') option.

You do not need to implement groups for date values as they are implemented by default. However, you may need to customize the groups. For example, consider the following code. Here, the fields of the *"month"* group interval are sorted in descending order using the **sortOrder** option. In addition, the fields of the *"quarter"* group interval are hidden using the **visible** option.


    <!--JavaScript-->var pivotGridOptions = {
        dataSource: {
            // ...
            fields: [{
                dataField: 'OrderDate',
                dataType: 'date',
                area: 'column'
            }, {
                groupName: 'OrderDate', // "groupName" equals "dataField" of the group 
                groupInterval: 'month',
                sortOrder: 'desc'
            }, {
                groupName: 'OrderDate',
                groupInterval: 'quarter',
                visible: false
            },
            // ...
            ]
        }
    }





