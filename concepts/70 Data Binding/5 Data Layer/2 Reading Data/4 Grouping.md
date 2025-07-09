In some cases, you may need to group data by certain criteria. Each item in a grouped array is an object containing two fields:

- **key** - a group key;
- **items** - an array of items in the group.
<!---->

    <!--JavaScript-->const groupedArray = [
        {
            key: "A",
            items: [ "Amelia", "Andrew"]
        }        
        {
            key: "B",
            items: [ "Betty", "Benjamin"]
        }
    ];

The DevExtreme data layer ([DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') and [Stores](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores')) supports grouping. The group expression syntax is identical to the [sort expression syntax](/concepts/70%20Data%20Binding/5%20Data%20Layer/2%20Reading%20Data/1%20Sorting.md '/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Sorting').

For instance, create a sample DataSource:

    <!--JavaScript-->const data = [
        { name: "Amelia", birthYear: 1991, gender: "female" },
        { name: "Benjamin", birthYear: 1983, gender: "male" },
        { name: "Andrew", birthYear: 1991, gender: "male" },
        { name: "Danielle", birthYear: 1983, gender: "female" },
        { name: "Lee", birthYear: 1983, gender: "male" },
        { name: "Betty", birthYear: 1983, gender: "female" }
    ];
    const dataSource = new DevExpress.data.DataSource(data);

The group expression is stored in the [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') property of the DataSource. You can call the [group()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/group().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#group') and [group(groupExpr)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/group(groupExpr).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#groupgroupExpr') methods to get and modify the group value. To group the array by "birthYear", call the **group(groupExpr)** method and pass "birthYear" as an argument.

    <!--JavaScript-->dataSource.group("birthYear");
    dataSource.load().done(function(result) {
        //'result' contains the loaded array
    });

The return value of the function that processes the loaded data contains the following array:

    [
        {
            key: 1983,
            items: [
                { name: "Benjamin", birthYear: 1983, gender: "male" },
                { name: "Danielle", birthYear: 1983, gender: "female" },
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

To group DataSource by custom criteria, pass a function to the **group(groupExpr)** method.

    <!--JavaScript-->dataSource.group(function(dataItem) {
        return dataItem.birthYear < 1990 ? "Born before 1990" : "Born after 1990";
    });
    dataSource.load().done(function(result) {
        //'result' contains the loaded array
    });

In this case, the 'result' array includes the following items:

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
                { name: "Danielle", birthYear: 1983, gender: "female" },
                { name: "Lee", birthYear: 1983, gender: "male" },
                { name: "Betty", birthYear: 1983, gender: "female" }
            ]
        }
    ]

Multi-level grouping is also supported. Pass several [getters](/concepts/70%20Data%20Binding/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Binding/Data_Layer/#Getters_And_Setters') or an array of getters to the [group(groupExpr)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/group(groupExpr).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#groupgroupExpr') method to load an array containing subgroups.

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
                        { name: "Danielle", birthYear: 1983, gender: "female" },
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

[Stores](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores') support the same group expression syntax as the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').

    <!--JavaScript-->const arrayStore = new DevExpress.data.ArrayStore(data);
    arrayStore
        .load({
            group: "birthYear"
        })
        .done(function (result) {
            // 'result' contains the 'data' array grouped by the 'birthYear' property value.
        });