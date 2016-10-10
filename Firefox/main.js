let contextMenu = require('sdk/context-menu');
let self = require('sdk/self');
let tabs = require('sdk/tabs');

contextMenu.Item({
  label: 'Open Link in New Parent Tab',
  context: [
    contextMenu.URLContext(["*"]),
    contextMenu.SelectorContext("a[href]")
  ],
  accessKey: 'o',
  image: self.data.url('./images/icon-3.png'),
  contentScriptFile: [
    self.data.url('content-script.js')
  ],
  onMessage: function (url) {
    tabs.open(url);
  }
});
