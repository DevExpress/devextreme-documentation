Set this option to the name of a data field that provides displayed values...

    displayExpr: "name"

... or to a function that returns the displayed value:

    displayExpr: function(item) {
        // "item" can be null
        return item && 'ID: ' + item.id + ', Name: ' + item.name;
    }
