One of the basic data layer concepts is a Getters and Setters concept. Getters are essential tools used to specify sorting, grouping, filtering, and data transformation rules.

A getter is a function that returns a value of the predefined property of an object passed to the getter as a parameter.
A setter is a function that assigns the new value to the predefined property of an object passed to the setter as a parameter. The new value is specified via the second parameter of a setter.

Create the **person** object to consider how to get and set its property values using getters and setters.

    <!--JavaScript-->var person = {
      firstName: "John",
      lastName: "Smith",
      birthDate: new Date(1985,10,15),
      getBirthYear: function(){
        return this.birthDate.getFullYear();
      },
      address: {
        zipCode: 90007,
        state: "CA",
        city: "Los Angeles",
        getAddress: function(){
          return this.zipCode + " " + this.state + " " + this.city;
        }
      }
    };

