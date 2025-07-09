To process loaded data beyond simple [sorting](/concepts/70%20Data%20Binding/5%20Data%20Layer/2%20Reading%20Data/1%20Sorting.md '/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Sorting'), [grouping](/concepts/70%20Data%20Binding/5%20Data%20Layer/2%20Reading%20Data/4%20Grouping.md '/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Grouping'), [filtering](/concepts/70%20Data%20Binding/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Filtering'), or [data item transformation](/concepts/70%20Data%20Binding/5%20Data%20Layer/2%20Reading%20Data/3%20Data%20Transformation '/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Data_Transformation'), use the DataSource [postProcess](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/postProcess.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#postProcess') property. For instance, you may need to group items by creation date (Today, This week, Long time ago). Assign a function that implements the required post processing algorithm to **postProcess**. The function should take the loaded array as a parameter and return the processed array.

The following code snippet uses the **postProcess** property to perform the task mentioned above.

    const data = [
        { 
            subject: "First message", 
            message: "This message has been recieved at 12/09/2013", 
            date: new Date(2013, 08, 11) 
        },
        { 
            subject: "Today message", 
            message: "This message has been recieved today",
            date: new Date() 
        },
        ...
    ];

Create a DataSource instance and assign the required function to the [postProcess](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/postProcess.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#postProcess') configuration property.

    <!--JavaScript-->function groupByDate(data) {
        const MS_PER_DAY = 24 * 60 * 60 * 1000,
            result = [],
            todayItems = [],
            thisWeekItems = [],
            otherItems = [];

        // Fill intervals
        $.each(data, function() {
            const daysAgo = ($.now() - this.date.getTime()) / MS_PER_DAY;

            if(daysAgo < 1)
                todayItems.push(this);                
            else if(daysAgo < 7)
                thisWeekItems.push(this);                
            else
                otherItems.push(this);                
        });

        // Construct final result
        if(todayItems.length)
            result.push({ key: "Today", items: todayItems });

        if(thisWeekItems.length)
            result.push({ key: "This week", items: thisWeekItems });

        if(otherItems.length)
            result.push({ key: "Long time ago", items: otherItems });

        return result;
    }

    const dataSource = new DevExpress.data.DataSource({
        store: data,
        postProcess: groupByDate
    });

The DataSource in the example above groups the items by the time period. The resulting array will look like the  following.

    [
        {
            key: "Today",
            items: [
                //today items
            ]
        },
        {
            key: "This week",
            items: [
                //this week items
            ]
        },
        {
            key: "Long time ago",
            items: [
                //items elder then a week
            ]
        }
    ]

[note] The function passed to the **postProcess** property is performed within the DataSource and is not passed to the underlying Store.
