A store is a universal data access interface within the DevExtreme data layer. It includes the following methods that are required for reading and editing data:

- **load(options)** - Loads data. This function accepts an object specifying [sorting](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/1%20Sorting.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting'), [grouping](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/4%20Grouping.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping'), [filtering](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering'), and [data transformation](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/3%20Data%20Transformation '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation') options.
- **insert(values)** - Adds a new item with the passed values.
- **remove(key)** - Removes the data item the key specifies.
- **update(key, values)** - Sets the new values to the data item the key specifies.
- **byKey(key, extraOptions)** - Loads the data item the key specifies. The **extraOptions** argument requires additional implementation options to get the required item.
- **totalCount(options)** - Enables you to get the total count of items that satisfy the specified conditions without loading them. The **options** object can contain **filter** and **group** fields that specify filtering and grouping options.

DevExtreme includes the following Store implementations for the most common data access scenarios:

- [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/') - provides access to an in-memory array
- [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/') - provides access to HTML5 web storage
- [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') - provides access to a remote OData service

You can implement custom data access logic as described in the [Custom Sources](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources') topic if these stores are not suitable.
