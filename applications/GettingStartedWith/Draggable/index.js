$(() => {
    const notes = ["#note-1", "#note-2", "#note-3", "#note-4"];
    let z = 1;

    $("#note-1").dxDraggable({
      onDragStart: handleDragStart,
      onDragMove: handleDragMove,
      onDragEnd: handleDragEnd,
      boundary: ".board",
      group: "1",
    })
    .on("click", handleClick);

    $("#note-2").dxDraggable({
      onDragStart: handleDragStart,
      onDragMove: handleDragMove,
      onDragEnd: handleDragEnd,
      group: "1",
      boundary: ".board",
    })
    .on("click", handleClick);

    $("#note-3").dxDraggable({
      onDragStart: handleDragStart,
      onDragMove: handleDragMove,
      onDragEnd: handleDragEnd,
      group: "1",
      boundary: ".board",
    })
    .on("click", handleClick);

    $("#note-4").dxDraggable({
      onDragStart: handleDragStart,
      onDragMove: handleDragMove,
      onDragEnd: handleDragEnd,
      boundary: ".board",
      group: "1",
    })
    .on("click", handleClick);

    function changeZIndex(el) {
        z++;
        el.css("z-index", z);
    }

    function handleClick(e) {
        changeZIndex($(e.currentTarget));
    }

    function handleDragStart(e) {
        changeZIndex($(e.element[0]));
    }

    function handleDragMove(e) {
        if (e.toComponent !== e.component) {
            e.toComponent.element().css("outline", "1px dashed red");
        } else {
            notes.forEach((el) => $(el).css('outline', ''));
        }
    }

    function handleDragEnd(e) {
        notes.forEach((el) => $(el).css('outline', ''));
    }
});
