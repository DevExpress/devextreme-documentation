Use a default template for minor widget item customization. This template defines item appearance depending on whether specific fields are present or absent from the item's data object specified in a data source. The following fields exist in every default template:

- **disabled**  
Specifies whether an item is disabled.
- **template**  
Specifies a template that is used for this item only.
- **text**  
Specifies the item text.

Some widgets have additional fields, for example, **NavBar** has **badge**, **visible** and **icon** fields. The following code defines three items. Each of them has an icon, one is hidden, and one has a badge. 

    <!--JavaScript-->
    var dataSource = [
        { text: "User", icon: "user" },
        { text: "Find", icon: "find", visible: false },
        { text: "Favorites", icon: "favorites", badge: "New" }
    ];

    $(function() {
        $("#navBarContainer").dxNavBar({
            dataSource: dataSource
        });
    });

See the widget's **Default Item Template** reference section for its full set of fields.
