Each collection container widget contains the following options, which allow you to specify handlers for events raised by a widget item.

- **onItemClick**  
 Specifies the function called on an item click.

- **onItemContextMenu**  
 Specifies the function called when the right mouse button is held or clicked when the pointer is over an item.

- **onItemDeleted**  
 Specifies the function called after an item is deleted.

- **onItemDeleting**  
 Specifies the function called before an item is deleted.

- **onItemHold**  
 Specifies the function called on an item held during a specified time span.

- **onSelectionChanged**  
 Specifies the function called when an item is selected.

- **onItemRendered**  
 Specifies the function called after an item is rendered.

- **onItemReordered**  
 Specifies the function called after an item is moved to another position.

<!---->

    <!--JavaScript-->
    var listOptions = { 
        onItemClick: function() {
            alert("List item is clicked");
        },
        onItemHold: function() {
            alert("List item is held");
        },
        onSelectionChanged: function() {
            alert("List item is selected");
        }
    }

The context of an event handling function is the widget instance. Thus, you can access the context using the **this** keyword. Alternatively, you can access the widget instance using the **component** field of the argument object. The argument object also enables you to access the object associated with the processed item using the **itemData** field. For a complete list of available argument object fields, refer to a particular event description.

    <!--JavaScript-->
    var listOptions = {
        onItemClick: function(e){
            . . .
            //e.component - the widget instance
            //e.itemData - current item object
        }
    }

In **MVVM approach**, the context of an event handling function is the view or application model. Thus, you can access it using the **this** keyword. The argument object also enables you to access the widget instance and the object associated with the processed item using the **component** and **itemData** fields respectively. For a complete list of available argument object fields, refer to a particular event description. Alternatively, you can access the view model using the **model** field of the argument object. 

    <!--JavaScript-->
    var listOptions = {
        onItemClick: function(e){
            . . .
            //e.model - the view model (available only in the Knockout approach)
            //e.component - the widget instance
            //e.itemData - current item object
        }
    }

[note] The **model** field of the argument object is available only in the Knockout approach.

Note that you can use the **onItemDeleting** option to add a confirmation dialog displayed when a widget item is deleted. The function passed to this option should return a Promise of the jQuery Deferred object, which is resolved if item deletion is confirmed and rejected if deletion is canceled.

    <!--JavaScript-->
    var widgetOptions = {
        onItemDeleting: function(e) {
            return DevExpress.ui.dialog.confirm("Do you really want to delete the item?");
        })
    }

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')
