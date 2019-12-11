DevExtreme includes methods used to create a getter and setter for the property specified as a string.

    <!--JavaScript-->var getter = DevExpress.data.utils.compileGetter("firstName");
    var setter = DevExpress.data.utils.compileSetter("firstName");

[note] In this section, we will use the **compileGetter** and **compileSetter** utility functions to demonstrate the use of getters and setters separately. However, in practice you do not need to use them when specifying sorting, filtering, etc. Use only the values passed to these methods. They too should be named "getter" and "setter".

Consider some examples to understand how getters and setters work.

To get a value of the **person.firstName** property, call the created getter and pass the **person** object to it.

    <!--JavaScript-->// the getter returns "John" and assigns it to the 'name' variable
    var name = getter(person); 

To assign a new value to the **person.firstName** property, call the created setter and pass the **person** object and the new value to it.

    <!--JavaScript-->// assigns "Michael" to 'person.firstName'
    setter(person, "Michael"); 

The property for which you want to create a getter or a setter is specified via a string passed to the **compileGetter** or the **compileSetter** method. The property string can have one of the following formats.

- **A property name**  
    Specifies a top-level property.

        <!--JavaScript-->var getter = DevExpress.data.utils.compileGetter("firstName");
        var setter = DevExpress.data.utils.compileSetter("firstName");
        // the getter returns "John" and assigns it to the 'name' variable
        var name = getter(person);
        // assigns "Michael" to 'person.firstName'
        setter(person, "Michael");

- **A second and higher level property**  
    Specifies a second and higher level property.

        <!--JavaScript-->var getter = DevExpress.data.utils.compileGetter("address.city");
        var setter = DevExpress.data.utils.compileSetter("address.city");
        // the getter returns "Los Angeles" and assigns it to the 'city' variable
        var city = getter(person); 
        // assigns "San Francisco" to 'person.address.city'
        setter(person, "San Francisco"); 

- **A method name**  
    Specifies the method whose value should be returned by the getter.

        <!--JavaScript-->var getter = DevExpress.data.utils.compileGetter("getBirthYear");
        // the getter returns 1985 and assigns it to the 'year' variable
        var year = getter(person); 

- **An array of property and method names**  
    If you pass an array of strings to the **compileGetter** function, the compiled getter will return an object containing the specified properties. If an item of the array passed to **compileGetter** represents a second or higher level property, the getter will create the appropriate subobjects within the returned object.

        <!--JavaScript-->var getter = DevExpress.data.utils.compileGetter(["firstName", "lastName", "address.city", "getBirthYear"]);
        var personData = getter(person); 

 The specified getter called for the **person** object will return the following object.

        {
            firstName: "John",
            lastName: "Smith",
            getBirthYear: 1985,
            address: {
                city: "Los Angeles"
            }
        }
    Note that the returned object contains the **getBirthYear** property that holds the value returned by the method with the same name.

- **A function**  
    If you pass a function to **compileGetter**, this function will be executed each time the getter is called. The function should have a parameter that takes on an object passed to the getter.

        <!--JavaScript-->var getter = DevExpress.data.utils.compileGetter(function(dataItem) {
          return dataItem.firstName + " " + dataItem.lastName;
        });
        // the getter returns "John Smith" and assigns it to the 'fullName' variable
        var fullName = getter(person); 

- **"this"**  
    In this case, the getter returns the object itself. This getter is used to sort or group an array of items containing a simple value.

        <!--JavaScript-->var getter = DevExpress.data.utils.compileGetter("this");
        // the getter returns "A text" and assigns it to the 'text' variable
        var text = getter("A text"); 

