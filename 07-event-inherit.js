//https://nodejs.org/api/util.html#util_util_inherits_constructor_superconstructor

"use strict";

const EventEmitter = require("events").EventEmitter,
  inherits = require("util").inherits;

const Clock = function () {
  const self = this;

  setInterval(function () {
    //console.log('hola')
    self.emit("tictac");
  }, 1000);
};

inherits(Clock, EventEmitter);

Clock.prototype.theTime = function () {
  var date = new Date(),
    hrs = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    msg = hrs + ":" + min + ":" + sec;

  console.log(msg);
};

const cucu = new Clock();

cucu.on("tictac", () => {
  cucu.theTime();
});
