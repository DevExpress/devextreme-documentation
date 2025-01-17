[DataSources](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') and [Stores](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores') use sort expressions to specify sorting conditions and direction.

For example, declare a **Person** class:

    <!--JavaScript-->const Person = function(firstName, lastName, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = {
            city: city
        };
    };
    Person.prototype.fullName = function() {
        return this.firstName + " " + this.lastName;
    };

Declare a **data** array with multiple instances of the **Person** class:

    <!--JavaScript-->const data = [
        new Person("John", "Smith", "San Francisco"),
        new Person("John", "Doe", "New York"),
        new Person("Xavier", "Gomez", "Denver"),
        new Person("Xavier", "Lee", "New Mexico")
    ];

Create [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'):

    <!--JavaScript-->const dataSource = new DevExpress.data.DataSource(data);

Specify the sorting condition with the [sort](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/sort.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort') configuration property or the [sort(sortExpr)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/sort(sortExpr).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#sortsortExpr') method of the DataSource. You can pass a sorting expression to the property/method in one of the following formats:

- **A single expression**

        <!--JavaScript-->dataSource.sort("lastName");
        dataSource.load().done(function(result) {
            // 'result' contains the 'data' array items sorted by 'lastName'
        });

 To sort data in descending order, pass an object containing the **getter** (**field** or **selector** - they are equivalents) and **desc** properties to the sort method:

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

 You can pass an array of expressions instead of using multiple arguments.

        <!--JavaScript-->dataSource.sort([
            "firstName",
            "lastName",
            { getter: "address.city", desc: true }
        ]);
        dataSource.load().done(function(result) {
            // 'result' contains the 'data' array items sorted by 'firstName', then by 'lastName',
            // and then by 'address.city' in the descending order
        });

[Stores](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores') support the same sort expression syntax as the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').

    <!--JavaScript-->const arrayStore = new DevExpress.data.ArrayStore(data);
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

