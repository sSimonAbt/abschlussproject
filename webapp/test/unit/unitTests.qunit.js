/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
  "use strict";

  sap.ui.require(["com/sbt/IHKProject/test/unit/allTests"], function () {
    QUnit.start();
  });
});