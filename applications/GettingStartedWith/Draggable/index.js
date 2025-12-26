$(() => {
  
    let z = 0;

    $('#note-1').dxDraggable({
        onDragStart: handleDragStart,
        boundary: '.board',
    }).on('click', handleClick);
    
    $('#note-2').dxDraggable({
        onDragStart: handleDragStart,
        boundary: '.board',
    }).on('click', handleClick);
    
    $('#note-3').dxDraggable({
        onDragStart: handleDragStart,
        boundary: '.board',
    }).on('click', handleClick);
    
    $('#note-4').dxDraggable({
        onDragStart: handleDragStart,
        boundary: '.board',
    }).on('click', handleClick);

    function changeZIndex(el) {
        z++
        el.css('z-index', z);
    }
    
    function handleClick(e) {
        changeZIndex($(e.currentTarget));
    }
    
    function handleDragStart(e) {
        changeZIndex($(e.element[0]));
    }
  
});
