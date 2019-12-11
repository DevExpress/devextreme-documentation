---
##### shortDescription
This section describes events raised by this **ODataStore** instance.

---
To handle events, use one of the following methods.

- [Attach a handler for a Data Store event](/Documentation/Guide/Data_Layer/Data_Layer/#UseOption)  
    Assign a callback function to the Data Store option that takes on a handler for the required event. The events that can be handled within the Data Store's configuration object are listed in the **Configuration** section. All these events have names starting with *on*.

- [Attach several handlers for one or several events to a Data Store](/Documentation/Guide/Data_Layer/Data_Layer/#UseMethod)  
    Specify event handling functions for one or more events using the **on()** method. All the Data Store events are listed in the **Events** section.