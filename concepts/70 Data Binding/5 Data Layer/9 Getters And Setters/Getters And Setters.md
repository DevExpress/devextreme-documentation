One of the basic data layer concepts is *getters* and *setters*. Getters are essential tools used to specify sorting, grouping, filtering, and data transformation rules.

A *getter* function returns a value of a predefined property of an object passed to the getter as a parameter.

A *setter* function assigns a new value to the predefined property of an object passed to the setter as a parameter. The new value is specified through the second parameter of a setter.

For example, create a sample object:

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
