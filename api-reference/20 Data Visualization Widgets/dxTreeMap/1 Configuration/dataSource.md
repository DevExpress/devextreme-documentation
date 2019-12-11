---
type: Array | DataSource | DataSource_Options | String
---
---
##### notUsedInTheme

##### shortDescription
Specifies the origin of data for the widget.

---
This option accepts one of the following.

- Array of objects      
 A simple JavaScript array containing a collection of plain objects.

- URL       
 A URL to JSON data or to a service returning data in JSON format.

- [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') or its [configuration object](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')      
 A DataSource is an object that provides a handy API for data processing. A DataSource is a stateful object, which means that it saves data processing settings and applies them each time data is loaded. All underlying data access logic of a DataSource is isolated in a Store. A Store provides an API for reading and modifying data. Unlike the DataSource, a Store is a stateless object.

#include widgets-ref-datasource-fieldname-note

Basically, all data providers contain data objects. Objects that have a plain structure are visualized by tiles. For example, the following data source produces four individual tiles.

    <!--JavaScript-->var treeMapOptions = {
        // ...
        dataSource: [
            { name: 'Apples', value: 10 },
            { name: 'Oranges', value: 13 },
            { name: 'Cucumbers', value: 4 },
            { name: 'Tomatoes', value: 8 }
        ]    
    };

Hierarchically-structured objects are visualized by groups of tiles. For example, the following data source arranges the tiles from the previous code snippet in two groups: *"Fruits"* and *"Vegetables"*.

    <!--JavaScript-->var treeMapOptions = {
        // ...
        dataSource: [{
            name: 'Fruits',
            items: [
                { name: 'Apples', value: 10 },
                { name: 'Oranges', value: 13 }
            ]
        }, {
            name: 'Vegetables',
            items: [
                { name: 'Cucumbers', value: 4 },
                { name: 'Tomatoes', value: 8 }
            ]
        }] 
    };

After providing data, bind it to the widget using the [valueField](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/valueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#valueField'), [labelField](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/labelField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#labelField') and [childrenField](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/childrenField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#childrenField') options.

In certain cases, you may have a plain data source that implies a hierarchical structure. For example, the following code declares such a data source. Nevertheless, it will be visualized in the same manner as the data source from the code snippet above.

    <!--JavaScript-->var treeMapOptions = {
        // ...
        dataSource: [
            { id: 1, name: 'Fruits'},
            { parent: 1, name: 'Apples', value: 10 },
            { parent: 1, name: 'Oranges', value: 13 },
            
            { id: 2, name: 'Vegetables' },
            { parent: 2, name: 'Cucumbers', value: 4 },
            { parent: 2, name: 'Tomatoes', value: 8 }
        ],
        idField: 'id',
        parentField: 'parent'
    };

Note that in this data source, objects that have children have the *"id"* field whose value is unique. Their children have the *"parent"* field pointing at the parent's ID. The *"id"* and *"parent"* fields can have other names, but in any case, they must be assigned to the [idField](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/idField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#idField') and [parentField](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/parentField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#parentField') options. Otherwise, you will get four individual tiles (as in the first code snippet) instead of two groups by two tiles. To specify the fields that provide values and labels, use the [valueField](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/valueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#valueField') and [labelField](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/labelField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#labelField') options as well.

The examples above show how to provide data using an array of objects. If you are looking for a more powerful and versatile data solution, consider using the DataSource object. To learn how to implement a DataSource that serves your needs best, refer to the [Data Source Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Data_Source_Examples) article.

<a href="/Demos/WidgetsGallery/Demo/Charts/HierarchicalDataStructure/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View hierarchical Data Structure Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Charts/FlatDataStructure/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Flat Data Structure Demo</a>

<a href="https://www.youtube.com/watch?v=xTyN69v7kWU&index=5&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>

#####See Also#####
- [getDataSource()](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/3%20Methods/getDataSource().md '{basewidgetpath}/Methods/#getDataSource')
- [Data Layer - Overview](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer')
- [Data Layer - Data Source Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Layer/Data_Source_Examples')