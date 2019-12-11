[DataSources](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') and [Stores](/Documentation/Guide/Data_Layer/Data_Layer/#What_Are_Stores) use sort expressions to specify sorting conditions and direction.

For an example, declare  a **Person** class.

    <!--JavaScript-->var Person = function(firstName, lastName, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = {
            city: city
        };
    };
    Person.prototype.fullName = function() {
        return this.firstName + " " + this.lastName;
    };

After the **Person** class is created, declare a **data** array holding several instances of this class.

    <!--JavaScript-->var data = [
        new Person("John", "Smith", "San Francisco"),
        new Person("John", "Doe", "New York"),
        new Person("Xavier", "Gomez", "Denver"),
        new Person("Xavier", "Lee", "New Mexico")
    ];

Create a simple [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').

    <!--JavaScript-->var dataSource = new DevExpress.data.DataSource(data);

The sorting condition can be specified using the [sort](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/sort.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort') configuration option or the [sort(sortExpr)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/sort(sortExpr).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#sortsortExpr') method of the DataSource. The value assigned to the option or passed to the method is a sorting expression, which can have one of the following formats.

- **A single expression**

        <!--JavaScript-->dataSource.sort("lastName");
        dataSource.load().done(function(result) {
            // 'result' contains the 'data' array items sorted by 'lastName'
        });

 To sort data in descending order, pass an object containing the **getter** (**field** or **selector** - they are equivalents) and **desc** properties to the sort method.

        <!--JavaScript-->dataSource.sort({ getter: "lastName", desc: true });
        dataSource.load().done(function(result) {
            // 'result' contains the 'data' array items sorted by 'lastName' in descending order
        });

 Pass a function to the method if you need to sort by custom values. 

        <!--JavaScript-->
        dataSource.sort(function(e) {
            if(e.Position == "CEO") 
                return "!";
            else
                return e.Position;
        });
        dataSource.load().done(function(result) {
            // 'result' contains the 'data' array where CEO's are displayed at the top
            // other positions are sorted in ascending order
        });

- **Several expressions**

        <!--JavaScript-->dataSource.sort(
            "fullName", 
            { getter: "address.city", desc: true }
        );
        dataSource.load().done(function(result) {
            // 'result' contains the 'data' array items sorted by 'fullName' and then by 'address.city' in the descending order
        });

 You can pass an array of expressions instead of using several arguments.

        <!--JavaScript-->dataSource.sort([
            "firstName",
            "lastName",
            { getter: "address.city", desc: true }
        ]);
        dataSource.load().done(function(result) {
            // 'result' contains the 'data' array items sorted by 'firstName', then by 'lastName',
            // and then by 'address.city' in the descending order
        });

[Stores](/Documentation/Guide/Data_Layer/Data_Layer/#What_Are_Stores#What_Are_Stores) support the same sort expression syntax as the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').

    <!--JavaScript-->var arrayStore = new DevExpress.data.ArrayStore(data);
    arrayStore
        .load({
            sort: [
                { getter: "firstName", desc: true },
                "lastName"
            ]
        })
        .done(function (result) {
            // 'result' contains the 'data' array items sorted by 'firstName' in the descending order and then by 'lastName'
        });

