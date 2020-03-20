The [map](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/map.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map') configuration option of the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') enables you to modify each item of the loaded array. A function passed to this option takes an initial item as a parameter and returns the processed item. This function is performed within the DataSource and is not passed to the underlying Store.

Begin with the creation of a sample array.

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

Assign the required function to the [map](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/map.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map') configuration option of the DataSource.

    <!--JavaScript-->var dataSource = new DevExpress.data.DataSource({
        store: data,
        map: function(itemData) {
            return {
                fullName: itemData.firstName + " " + itemData.lastName,
                address: {
                    city: itemData.city
                }
            }
        }
    });

The dataSource in the example above will convert the initial data items into the following ones.

    [
        {
            fullName: "John Smith",
            address: {
                city: "San Francisco"
            }
        },
        {
            fullName: "Xavier Lee",
            address: {
                city: "New York"
            }
        },
        {
            fullName: "Maria Gomez",
            address: {
                city: "Denver"
            }
        }
    ]