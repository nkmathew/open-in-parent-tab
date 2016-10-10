/**
 * Content script
 *
 * The right clicked url is sent to this content script which sends back the url to
 * the context-menu worker message handler for it to open a new tab using Firefox
 * sdk's tabs API. All this because it's impossible to open a non-child tab in
 * client-side Javascript:
 *
 * Relevant discussion:
 * http://stackoverflow.com/questions/4907843/
 *
 */
(function() {
  // Event handler for context menu entry click
  self.on('click', function (node, data) {
    self.postMessage(node.toString());
  });
})();
