"use strict";

/* 
 * shadow.js
 * HOVER ALPHA EFFECT
 * Move your mouse or drag your finger to change the alpha opacity color of the text, and to see 3 colorful text-shadow effects.
 *
 * Headline is editable, so place your cursor in the text and type anything else you'd like.
 *
 * #028 - #100DaysOfCode
 * By ilithya | 2019
 */

function getTwoDecimal(num) {
  // The +0.5 smoothens the transition change
  return parseFloat(num.toFixed(2) + 0.5);
}
var mouse = {
  decimal: function decimal(coord) {
    return getTwoDecimal(coord / 1000);
  },
  x: function x(e) {
    return Math.abs(e.clientX - window.innerWidth / 2);
  },
  y: function y(e) {
    return Math.abs(e.clientY - window.innerHeight / 2);
  }
};
var changeTextAlphaVal = function changeTextAlphaVal(txt, e) {
  var root = document.querySelector(":root");
  var cssVar = "--alpha";
  var currentAlpha = getComputedStyle(root).getPropertyValue(cssVar).trim();
  var max = parseFloat(currentAlpha);
  var dx = mouse.decimal(mouse.x(e));
  var dy = mouse.decimal(mouse.y(e));
  var alphaVal;
  if (dx <= 0) {
    alphaVal = dy >= max ? dy : getTwoDecimal(max - dy);
  } else {
    alphaVal = dx >= max ? dx : getTwoDecimal(max - dx);
  }
  txt.style.setProperty(cssVar, alphaVal);
};
function createShadow(e, currTarget) {
  // Walk effect based on Wes Bos' Mouse Move Shadow Exercise
  // https://tinyurl.com/touabxe
  var walk = Math.round(Math.max(window.innerWidth, window.innerHeight) / 6); // Or use 150?
  var coordWalk = function coordWalk(coord, side) {
    return Math.round(coord / side * walk - walk / 2);
  };
  var xWalk = coordWalk(e.clientX, currTarget.offsetWidth);
  var yWalk = coordWalk(e.clientY, currTarget.offsetHeight);
  var pink = [255, 0, 139];
  var blue = [0, 86, 255];
  var yellow = [255, 240, 0];
  var typoAlpha = 0.6;
  var typo = currTarget.querySelector(".typo");
  changeTextAlphaVal(typo, e); // Comment this if you don't want the text alpha opacity to change on interaction

  typo.style.textShadow = "\n\t  ".concat(xWalk, "px ").concat(yWalk, "px 0 rgba(").concat(pink, ", ").concat(typoAlpha, "),\n\t  ").concat(xWalk * -1, "px ").concat(yWalk * 2, "px 0 rgba(").concat(blue, ", ").concat(typoAlpha, "),\n\t  ").concat(xWalk * -2, "px ").concat(yWalk * -1, "px 0 rgba(").concat(yellow, ", ").concat(typoAlpha, ")\n\t");
}
function onMouseMove(e) {
  createShadow(e, e.currentTarget);
}
function onTouchMove(e) {
  createShadow(e.changedTouches[0], e.currentTarget);
}
var heading = document.querySelector(".heading");
heading.addEventListener("mousemove", onMouseMove);
heading.addEventListener("touchmove", onTouchMove);
