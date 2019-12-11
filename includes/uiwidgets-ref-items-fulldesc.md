If you need to update the widget items, reassign the entire **items[]** array as shown in the following example:

    <!--JavaScript-->
    {widgetName}Instance.option('items', newItems);

As an alternative to **items**, you can use the [dataSource]({basewidgetpath}/Configuration/#dataSource) option. It accepts the [DataSource](/api-reference/30%20Data%20Layer/DataSource/DataSource.md '/Documentation/ApiReference/Data_Layer/DataSource/') object, whose underlying [stores](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') provide an [API](/concepts/30%20Data%20Layer/5%20Data%20Layer/3%20Data%20Modification/3%20Data%20Modification.md '/Documentation/Guide/Data_Layer/Data_Layer/#Data_Modification') that allows you to update individual items without reassigning the entire item collection.

[note] Do not use the **items** option if you use **dataSource**, and vice versa.