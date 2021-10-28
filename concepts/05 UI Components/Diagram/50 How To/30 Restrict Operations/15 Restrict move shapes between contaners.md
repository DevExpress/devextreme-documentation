$(function() {
    var it;
    var diagram = $("#diagram").dxDiagram({
      onRequestEditOperation: function(e) {
            var diagram = $("#diagram").dxDiagram().dxDiagram("instance");
            if(e.operation === "moveShape") {
              
              var currentShape = diagram.getItemById(it);
             console.log(it+" "+e.args.shape.containerId); if(it!==e.args.shape.containerId)
                e.allowed = false;
            }
        },
        onSelectionChanged: function(e) {

          if(e.items[0])
            it = e.items[0].containerId;
        },
        toolbox: {
            groups: [ "general", { category: "containers", title: "Containers", expanded: true }]
        }
    }).dxDiagram("instance");

    $.ajax({
        url: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/data/diagram-structure.json",
        dataType: "text",
        success: function(data) {
            diagram.import(data);
        }
    });
});


$(function() {
    var selectedItems;
    var diagram = $("#diagram").dxDiagram({
        onRequestEditOperation: function(e) {
            if(e.operation === "moveShape") {
                var currentItem = selectedItems.find(function(item) {
                    if(item && item.id === e.args.shape.id) {
                        console.log(item.id+" - "+item.containerId);
                        return item;
                    }
                });
            if(currentItem)
                var container = currentItem.containerId;
            if(container && container !== e.args.shape.containerId){
                console.log(container + " " +e.args.shape.containerId);
                e.allowed = false;}
            }
        },
        onSelectionChanged: function(e) {
            selectedItems = e.items;
        },
        toolbox: {
            groups: [ "general", { category: "containers", title: "Containers", expanded: true }]
        }
    }).dxDiagram("instance");

    $.ajax({
        url: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/data/diagram-structure.json",
        dataType: "text",
        success: function(data) {
            diagram.import(data);
        }
    });
});
