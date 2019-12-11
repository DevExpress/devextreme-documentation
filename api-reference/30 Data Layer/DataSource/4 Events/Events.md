---
##### shortDescription
This section describes events raised by the DataSource object.

---
To handle events, use one of the following methods.

- [Attach a handler for a DataSource event](/Documentation/Guide/Data_Layer/Data_Layer/#UseOption)  
    Assign a callback function to the DataSource option that takes on a handler for the required event. The events that can be handled within the DataSource's configuration object are listed in the **Configuration** section. All these events have names starting with *on*.

- [Attach several handlers for one or several events to a DataSource](/Documentation/Guide/Data_Layer/Data_Layer/#UseMethod)  
    Specify event handling functions for one or more events using the **on()** method. All the DataSource events are listed in the **Events** section.