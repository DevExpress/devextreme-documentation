let iframeSheets = document.styleSheets;

iframeSheets[4].disabled = true;

let parentSheets = window.parent.document.styleSheets;

$('head').append(`<link rel="stylesheet" href="${parentSheets[parentSheets.length - 1].href}">`);
