---
default: undefined
type: Array | function(options) | DataSource_Options
---
---
##### shortDescription
Specifies the data source to be used for the header filter.

##### param(options): Object
Data source options.

##### field(options.component): Object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(options.dataSource): Object
The header filter data source.

---
Assigning a function to this field enables you to calculate the header filter data source dynamically. Refer to the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') | [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') option for details.
 
The elements of the array assigned to this field should be in the following format.

	<!--JavaScript-->{
		text: /* A string to be displayed in the UI */
		value: /* A single value or filterExpression array */
	}

[note]Every unique value present in the current column should also be present in the data source for the header filter.

For example, you can implement the following header filtering conditions for a field containing dates.

	<!--JavaScript-->
    $(function(){
        var now = new Date();
        var startOfWeek = new Date(now.setDate(now.getDate() - now.getDay() - 1 + (now.getDay()==0?-6:1)));             
        var startOfDay = new Date(now.setHours(0,0,0,0));

        $("#gridContainer").dxDataGrid({
            // ...
            columns: [{
                // ...
                headerFilter: {
                    dataSource: {
                        load: function(loadOptions) {
                            return [{
                                text: 'Today',
                                value: [['OrderDate', '>=', startOfDay], 'and', ['OrderDate', '<=', now]]
                            }, {
                                text: 'This week',
                                value: [['OrderDate', '>=', startOfWeek], 'and', ['OrderDate', '<', startOfDay]]
                            }, {
                                text: 'Earlier',
                                value: ['OrderDate', '<', startOfWeek]
                            }];
                        }
                    }
                }
            },
            // ...
            ]
        });
    });

If you use a data source that does not contain the required fields (**text** and **value**), you can use the map option of the DataSource object to cast the initial data array to the required structure. If the initial array includes key fields, all these fields as well as the **text** and **value** fields should be present in the resulting array.

    <!--JavaScript-->
    $(function(){
        var categoriesStore = new DevExpress.data.ArrayStore({
            data: [
                { categoryName: "...", categoryId: "1", categoryCode: "..." },
                // ...
            ],
            key: ["categoryId", "categoryCode"]
        });

        $("#gridContainer").dxDataGrid({
            // ...
            columns: [{
                // ...
                headerFilter: {
                    dataSource: new DevExpress.data.DataSource({
                        store: categoriesStore,
                        map: function(item) {
                            return {
                                text: item.categoryName,
                                value: item.categoryId,
                                categoryId: item.categoryId,
                                categoryCode: item.categoryCode
                            }
                        }
                    })
                }
            },
            // ...
            ]
        });
    });