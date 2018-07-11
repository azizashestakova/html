(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Icon = function Icon() {
  _classCallCheck(this, Icon);

  var icons = document.getElementById('hidden-svg');
  if (icons) {
    var url = icons.dataset.path,
        ajax = new XMLHttpRequest();
    ajax.open('GET', url, true);
    ajax.send();
    ajax.onload = function (e) {
      return icons.innerHTML = ajax.responseText;
    };
  }
};

exports.default = Icon;

},{}],2:[function(require,module,exports){
'use strict';

var _icon = require('../_modules/icon/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  new _icon2.default();
})();

},{"../_modules/icon/icon":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvX21vZHVsZXMvaWNvbi9pY29uLmpzIiwic3JjL19zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7Ozs7SUFFcUIsSSxHQUNuQixnQkFBYztBQUFBOztBQUNaLE1BQUksUUFBUSxTQUFTLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBWjtBQUNBLE1BQUksS0FBSixFQUFXO0FBQ1QsUUFBSSxNQUFNLE1BQU0sT0FBTixDQUFjLElBQXhCO0FBQUEsUUFDRSxPQUFPLElBQUksY0FBSixFQURUO0FBRUEsU0FBSyxJQUFMLENBQVUsS0FBVixFQUFpQixHQUFqQixFQUFzQixJQUF0QjtBQUNBLFNBQUssSUFBTDtBQUNBLFNBQUssTUFBTCxHQUFjO0FBQUEsYUFBSyxNQUFNLFNBQU4sR0FBa0IsS0FBSyxZQUE1QjtBQUFBLEtBQWQ7QUFDRDtBQUNGLEM7O2tCQVZrQixJOzs7QUNGckI7O0FBRUE7Ozs7OztBQUVBLENBQUMsWUFBTTtBQUNMO0FBQ0QsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxldCBpY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRkZW4tc3ZnJyk7XHJcbiAgICBpZiAoaWNvbnMpIHtcclxuICAgICAgbGV0IHVybCA9IGljb25zLmRhdGFzZXQucGF0aCxcclxuICAgICAgICBhamF4ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgIGFqYXgub3BlbignR0VUJywgdXJsLCB0cnVlKTtcclxuICAgICAgYWpheC5zZW5kKCk7XHJcbiAgICAgIGFqYXgub25sb2FkID0gZSA9PiBpY29ucy5pbm5lckhUTUwgPSBhamF4LnJlc3BvbnNlVGV4dDtcclxuICAgIH1cclxuICB9XHJcbn0iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9fbW9kdWxlcy9pY29uL2ljb24nO1xyXG5cclxuKCgpID0+IHtcclxuICBuZXcgSWNvbigpO1xyXG59KSgpOyJdfQ==

//# sourceMappingURL=main.js.map
