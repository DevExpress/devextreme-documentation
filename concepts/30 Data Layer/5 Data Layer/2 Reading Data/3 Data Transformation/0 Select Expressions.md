The [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') supports the [select](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/select.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#select') option intended to specify the structure of an item of the array being loaded. The DataSource passes the value of this option to the underlying Store when loading data. Therefore, this data transformation can be performed on the server side if the Store supports it. 

To consider a select expression syntax, begin by creating an array of sample data.

    <!--JavaScript-->var data = [
        {
            firstName: "John",
            lastName: "Smith",
            city: "San Francisco"
        },
        {
            firstName: "Xavier",
            lastName: "Lee",
            city: "New York"
        },
        {
            firstName: "Maria",
            lastName: "Gomez",
            city: "Denver"
        }
    ];

You can define the select option value via the [configuration object](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/') passed to the DataSource constructor.

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource({
        store: data,
        select: "lastName"
    });

To modify the **select** option, pass the new option value to the [select(expr)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/select(expr).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#selectexpr') method of the DataSource.

    <!--JavaScript-->
    dataSource.select("firstName", "city");
    dataSource.load();

A selection expression can be a [getter](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters'), several getters, or a function.

- **A single getter**

        <!--JavaScript-->dataSource.select("lastName");
        dataSource.load().done(function(result) {
            //'result' contains the resulting array
        });

 The resulting array looks like the following.

        [
            { lastName: "Smith" },
            { lastName: "Lee" },
            { lastName: "Gomez" },
        ]

- **Several getters**

        <!--JavaScript-->dataSource.select("firstName", "lastName");
        dataSource.load().done(function(result) {
            //'result' contains the resulting array
        });

 The resulting array looks like the following.

        [
            { firstName: "John", lastName: "Smith" },
            { firstName: "Xavier", lastName: "Lee" },
            { firstName: "Maria", lastName: "Gomez" },
        ]

 You can pass an array of [getters](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters') instead of using several arguments.

        <!--JavaScript-->dataSource.select(["firstName", "lastName"]);

- **A function**

 A select expression can also be a function that takes on an item object and returns the transformed object.

        <!--JavaScript-->dataSource.select(function(dataItem) {
            return {
                fullName: dataItem.firstName + " " + dataItem.lastName,
                address: dataItem.city
            };
        });
        dataSource.load().done(function(result) {
            //'result' contains the resulting array
        });

 The resulting array looks like the following.

        [
            { fullName: "John Smith", address: "San Francisco" }
            { fullName: "Xavier Lee", address: "New York" }
            { fullName: "Maria Gomez", address: "Denver" }
        ]

[Stores](/Documentation/Guide/Data_Layer/Data_Layer/#What_Are_Stores) support the same select expression syntax as the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').

    <!--JavaScript-->var arrayStore = new DevExpress.data.ArrayStore(data);
    arrayStore
        .load({
            select: [ "firstName", "lastName" ]
        })
        .done(function (result) {
            //'result' contains the resulting array
        });

Additional data transformation can be performed with the [map](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/map.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map') and [postProcess](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/postProcess.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#postProcess') configuration options of the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').
