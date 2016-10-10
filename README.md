[![Project wip: Work In Progress][wip-svg]][wip-link]

---

### Open Link in New Parent Tab
A Firefox add-on that enables you to open a link in a new parent tab through a
context menu command, as opposed to opening the link as a child tab. Particularly
useful for users of add-ons that display tabs in a tree manner like
[Tree Style Tab][3] and [Tab Tree][4].

It's supposed to save you the hassle of reordering your heavily nested child tabs by
drag-and-dropping each one manually when using these add-ons. Open the links as
parent tabs in the first place and you won't have to worry about deeply nested tabs

And yes, I'm definitely overselling it. It's far from being a must-have and comes
really close to the hello world of Firefox SDK add-ons, but it fits my workflow and
I'm keeping it

### Screenshot
![](http://image.prntscr.com/image/a2a4e03357c8470384ddd75dd0a4cc39.png)

### Development

- Tools:

  + Install [Extension Auto-Installer][1] add-on
    - Enables you to easily test the add-on without having to generate the `xpi`
      installing it manually from the **Add-ons Manager**
  + Install [Jetpack Mechanic Utilities][2], `npm install jpm -g`
  + GNU Make (for running the Makefile of course)

- Workflow:
  + Pull changes from repo
  + Install dev dependencies by running `npm install` from the root project folder
  + Add some feature
  + Check for errors by simply running `grunt`

- Building and testing in Firefox

  - Set `xpinstall.signatures.required` to `false` in `about:config`
  - Set Logging level to `all` to be able to see output from `console.log`.
    `extensions.sdk.console.logLevel` in `about:config`
  - Run `make xpi` to build the `.xpi` file
  - Run `make run` to test the extension in a new Firefox profile instance
  - Run `make install` or just `make` to install the extension in the current Firefox
    instance

- Debugging in Firefox 45+
  - Unsigned add-ons can be tested/debugged using the new `about:debugging` page
    where you can view the add-on's console and gain access to a scratchpad for short
    scripts

[1]: https://addons.mozilla.org/en-us/firefox/add-on/autoinstaller/
[2]: https://www.npmjs.com/package/jpm
[3]: https://addons.mozilla.org/en-US/firefox/addon/tree-style-tab/
[4]: https://addons.mozilla.org/en-US/firefox/addon/tab-tree/
[wip-svg]: http://www.repowip.org/badges/latest/wip.svg
[wip-link]: http://www.repowip.org/#wip
