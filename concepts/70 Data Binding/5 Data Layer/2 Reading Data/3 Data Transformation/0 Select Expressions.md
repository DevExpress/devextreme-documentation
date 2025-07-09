The [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') supports the [select](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/select.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#select') property. This property determines the structure of items in the loaded array. When loading data, the DataSource sends the **select** value to the underlying Store. If the Store supports it, data transformation occurs on the server side.

Create an array of sample data:

    <!--JavaScript-->const data = [
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

You can define the select property value within the [configuration object](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/') passed to the DataSource constructor.

    <!--JavaScript-->
    const dataSource = new DevExpress.data.DataSource({
        store: data,
        select: "lastName"
    });

To modify the **select** property, pass the new property value to the [select(expr)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/select(expr).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#selectexpr') method of the DataSource.

    <!--JavaScript-->
    dataSource.select("firstName", "city");
    dataSource.load();

A selection expression can be a [getter](/concepts/70%20Data%20Binding/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Binding/Data_Layer/#Getters_And_Setters'), multiple getters, or a function.

- **A single getter**

        <!--JavaScript-->dataSource.select("lastName");
        dataSource.load().done(function(result) {
            //'result' contains the resulting array
        });

 The resulting array looks like the following:

        [
            { lastName: "Smith" },
            { lastName: "Lee" },
            { lastName: "Gomez" },
        ]

- **Multiple getters**

        <!--JavaScript-->dataSource.select("firstName", "lastName");
        dataSource.load().done(function(result) {
            //'result' contains the resulting array
        });

 The resulting array looks like the following:

        [
            { firstName: "John", lastName: "Smith" },
            { firstName: "Xavier", lastName: "Lee" },
            { firstName: "Maria", lastName: "Gomez" },
        ]

 You can pass an array of [getters](/concepts/70%20Data%20Binding/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Binding/Data_Layer/#Getters_And_Setters') instead of using multiple arguments.

        <!--JavaScript-->dataSource.select(["firstName", "lastName"]);

- **A function**

 A select expression can be a function that takes an item object and returns the transformed object.

        <!--JavaScript-->dataSource.select(function(dataItem) {
            return {
                fullName: dataItem.firstName + " " + dataItem.lastName,
                address: dataItem.city
            };
        });
        dataSource.load().done(function(result) {
            //'result' contains the resulting array
        });

 The resulting array looks like the following:

        [
            { fullName: "John Smith", address: "San Francisco" }
            { fullName: "Xavier Lee", address: "New York" }
            { fullName: "Maria Gomez", address: "Denver" }
        ]

[Stores](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores') support the same select expression syntax as the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').

    <!--JavaScript-->const arrayStore = new DevExpress.data.ArrayStore(data);
    arrayStore
        .load({
            select: [ "firstName", "lastName" ]
        })
        .done(function (result) {
            //'result' contains the resulting array
        });

You can perform additional data transformation with the [map](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/map.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map') and [postProcess](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/postProcess.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#postProcess') configuration properties of the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').
