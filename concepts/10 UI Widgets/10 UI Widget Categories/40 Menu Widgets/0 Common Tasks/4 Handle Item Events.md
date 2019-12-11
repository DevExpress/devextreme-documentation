Menu widgets include options that allow you to handle item clicking and selecting.  Here they are:

- **onItemClick**  
 An action performed when a menu item is clicked.
- **onSelectionChanged**  
 An action performed when a menu item is selected or unselected.

<!---->

    <!--JavaScript-->var menuOptions =  { 
        dataSource: menuItems, 
        onItemClick: function (data) {
			alert("Item is clicked");
		}
    }