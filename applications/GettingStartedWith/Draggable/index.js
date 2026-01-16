$(() => {
    let z = 1;

  $("#note-1").dxDraggable({
    onDragStart: handleDragStart,
    boundary: ".board",
    group: "cards",
  }).on({
    "click": handleClick,
    "dxdragenter": handleDragEnter,
    "dxdragleave": handleDragStop,
    "dxdrop": handleDragStop,
  });

  $("#note-2").dxDraggable({
    onDragStart: handleDragStart,
    group: "cards",
    boundary: ".board",
  }).on({
    "click": handleClick,
    "dxdragenter": handleDragEnter,
    "dxdragleave": handleDragStop,
    "dxdrop": handleDragStop,
  });

  $("#note-3").dxDraggable({
    onDragStart: handleDragStart,
    group: "cards",
    boundary: ".board",
  }).on({
    "click": handleClick,
    "dxdragenter": handleDragEnter,
    "dxdragleave": handleDragStop,
    "dxdrop": handleDragStop,
  });

  $("#note-4").dxDraggable({
    onDragStart: handleDragStart,
    boundary: ".board",
    group: "cards",
  }).on({
    "click": handleClick,
    "dxdragenter": handleDragEnter,
    "dxdragleave": handleDragStop,
    "dxdrop": handleDragStop,
  });

  function changeZIndex(el) {
    el.css("z-index", z);
    z++;
  }

  function handleClick(e) {
    changeZIndex($(e.currentTarget));
  }

  function handleDragStart(e) {
    changeZIndex($(e.element[0]));
  }

  function handleDragEnter(e) {
    e.target.classList.add('overlapped');
  }

  function handleDragStop(e) {
    e.target.classList.remove('overlapped');
  }
});
