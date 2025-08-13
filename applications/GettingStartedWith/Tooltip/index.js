$(() => {
  $('#like').dxButton({
    icon: 'like',
    stylingMode: 'outlined',
    type: 'normal',
  });

  $('#like-tooltip').dxTooltip({
    target: '#like',
    showEvent: 'mouseenter',
    hideEvent: 'mouseleave',
    position: 'bottom',
    contentTemplate() {
      return $('<div>').text('Like');
    },
  });

  $('#trash').dxButton({
    icon: 'trash',
    stylingMode: 'outlined',
    type: 'normal',
  });

  $('#trash-tooltip').dxTooltip({
    target: '#trash',
    showEvent: 'mouseenter',
    hideEvent: 'mouseleave',
    position: 'bottom',
    contentTemplate() {
      return $('<div>')
        .addClass('red-tooltip')
        .text('Delete');
    },
  });

  $('#info').dxButton({
    icon: 'info',
    stylingMode: 'outlined',
    type: 'normal',
  });

  $('#info-tooltip').dxTooltip({
    target: '#info',
    showEvent: 'mouseenter',
    hideEvent: 'mouseleave',
    position: 'bottom',
    contentTemplate() {
      return $('<div>')
        .addClass('blue-tooltip')
        .text('Info');
    },
  });
});
