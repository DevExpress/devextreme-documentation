In some cases, you may need to group data by certain criteria. An item of a grouped array is an object containing two fields:

- **key** - a group key;
- **items** - an array of items belonging to the group.
<!---->

    <!--JavaScript-->var groupedArray = [
        {
            key: "A",
            items: [ "Amelia", "Andrew"]
        }        
        {
            key: "B",
            items: [ "Betty", "Benjamin"]
        }
    ];

The DevExtreme data layer ([DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') and [Stores](/Documentation/Guide/Data_Layer/Data_Layer/#What_Are_Stores#What_Are_Stores)) supports grouping. The group expression syntax is identical to the [sort expression syntax](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/1%20Sorting.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting').

Consider grouping on the following examples. Begin with the creation of a sample DataSource.

    <!--JavaScript-->var data = [
        { name: "Amelia", birthYear: 1991, gender: "female" },
        { name: "Benjamin", birthYear: 1983, gender: "male" },
        { name: "Andrew", birthYear: 1991, gender: "male" },
        { name: "Daniela", birthYear: 1983, gender: "female" },
        { name: "Lee", birthYear: 1983, gender: "male" },
        { name: "Betty", birthYear: 1983, gender: "female" }
    ];
    var dataSource = new DevExpress.data.DataSource(data);

The group expression is stored in the [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') option of the DataSource. You can get and modify the option value via the [group()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/group().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#group') and [group(groupExpr)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/group(groupExpr).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#groupgroupExpr') methods respectively. To group the given array by 'birthYear', call the **group(groupExpr)** method and pass "birthYear" as an argument.

    <!--JavaScript-->dataSource.group("birthYear");
    dataSource.load().done(function(result) {
        //'result' contains the loaded array
    });

The return value of the function that processes the loaded data contains the following array.

    [
        {
            key: 1983,
            items: [
                { name: "Benjamin", birthYear: 1983, gender: "male" },
                { name: "Daniela", birthYear: 1983, gender: "female" },
                { name: "Lee", birthYear: 1983, gender: "male" },
                { name: "Betty", birthYear: 1983, gender: "female" }
            ]
        },
        {
            key: 1991,
            items: [
                { name: "Amelia", birthYear: 1991, gender: "female" },
                { name: "Andrew", birthYear: 1991, gender: "male" }
            ]
        }
    ]

To group by custom criteria, pass a function to the **group(groupExpr)** method.

    <!--JavaScript-->dataSource.group(function(dataItem) {
        return dataItem.birthYear < 1990 ? "Born before 1990" : "Born after 1990";
    });
    dataSource.load().done(function(result) {
        //'result' contains the loaded array
    });

In this case, the 'result' array includes the following items.

    [
        {
            key: "Born after 1990",
            items: [
                { name: "Amelia", birthYear: 1991, gender: "female" },
                { name: "Andrew", birthYear: 1991, gender: "male" }
            ]
        },
        {
            key: "Born before 1990",
            items: [
                { name: "Benjamin", birthYear: 1983, gender: "male" },
                { name: "Daniela", birthYear: 1983, gender: "female" },
                { name: "Lee", birthYear: 1983, gender: "male" },
                { name: "Betty", birthYear: 1983, gender: "female" }
            ]
        }
    ]

Multi-level grouping is also supported. Pass several [getters](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters') or an array of getters to the [group(groupExpr)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/group(groupExpr).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#groupgroupExpr') method to load an array containing subgroups.

    <!--JavaScript-->dataSource.group("birthYear", "gender");
    dataSource.load().done(function(result) {
        //'result' contains the loaded array
    });

The loaded array looks like the following.

    [
        {
            key: 1983,
            items: [
                {
                    key: "female",
                    items:[
                        { name: "Daniela", birthYear: 1983, gender: "female" },
                        { name: "Betty", birthYear: 1983, gender: "female" }
                    ]
                },
                {
                    key: "male",
                    items:[
                        { name: "Benjamin", birthYear: 1983, gender: "male" },
                        { name: "Lee", birthYear: 1983, gender: "male" }
                    ]
                }
            ]
        },
        {
            key: 1991,
            items: [
                {
                    key: "female",
                    items:[
                        { name: "Amelia", birthYear: 1991, gender: "female" }
                    ]
                },
                {
                    key: "male",
                    items:[
                        { name: "Andrew", birthYear: 1991, gender: "male" }
                    ]
                }
            ]
        }
    ]

[Stores](/Documentation/Guide/Data_Layer/Data_Layer/#What_Are_Stores) support the same group expression syntax as the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').

    <!--JavaScript-->var arrayStore = new DevExpress.data.ArrayStore(data);
    arrayStore
        .load({
            group: "birthYear"
        })
        .done(function (result) {
            // 'result' contains the 'data' array grouped by the 'birthYear' property value.
        });