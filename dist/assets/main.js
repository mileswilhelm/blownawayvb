/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.modernizrrc.js":
/*!*************************!*\
  !*** ./.modernizrrc.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

;

(function (window) {
  var hadGlobal = ('Modernizr' in window);
  var oldGlobal = window.Modernizr;
  /*!
  * modernizr v3.8.0
  * Build https://modernizr.com/download?-emoji-flexbox-promises-addtest-fnbind-printshiv-setclasses-testprop-dontmin
  *
  * Copyright (c)
  *  Faruk Ates
  *  Paul Irish
  *  Alex Sexton
  *  Ryan Seddon
  *  Patrick Kettner
  *  Stu Cox
  *  Richard Herrera
  *  Veeck
  * MIT License
  */

  /*
   * Modernizr tests which native CSS3 and HTML5 features are available in the
   * current UA and makes the results available to you in two ways: as properties on
   * a global `Modernizr` object, and as classes on the `<html>` element. This
   * information allows you to progressively enhance your pages with a granular level
   * of control over the experience.
  */

  ;

  (function (window, document, undefined) {
    var tests = [];
    /**
     * ModernizrProto is the constructor for Modernizr
     *
     * @class
     * @access public
     */

    var ModernizrProto = {
      // The current version, dummy
      _version: '3.8.0',
      // Any settings that don't work as separate modules
      // can go in here as configuration.
      _config: {
        'classPrefix': '',
        'enableClasses': true,
        'enableJSClass': true,
        'usePrefixes': true
      },
      // Queue of tests
      _q: [],
      // Stub these for people who are listening
      on: function on(test, cb) {
        // I don't really think people should do this, but we can
        // safe guard it a bit.
        // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
        // This is in case people listen to synchronous tests. I would leave it out,
        // but the code to *disallow* sync tests in the real version of this
        // function is actually larger than this.
        var self = this;
        setTimeout(function () {
          cb(self[test]);
        }, 0);
      },
      addTest: function addTest(name, fn, options) {
        tests.push({
          name: name,
          fn: fn,
          options: options
        });
      },
      addAsyncTest: function addAsyncTest(fn) {
        tests.push({
          name: null,
          fn: fn
        });
      }
    }; // Fake some of Object.create so we can force non test results to be non "own" properties.

    var Modernizr = function Modernizr() {};

    Modernizr.prototype = ModernizrProto; // Leak modernizr globally when you `require` it rather than force it here.
    // Overwrite name so constructor name is nicer :D

    Modernizr = new Modernizr();
    var classes = [];
    /**
     * is returns a boolean if the typeof an obj is exactly type.
     *
     * @access private
     * @function is
     * @param {*} obj - A thing we want to check the type of
     * @param {string} type - A string to compare the typeof against
     * @returns {boolean} true if the typeof the first parameter is exactly the specified type, false otherwise
     */

    function is(obj, type) {
      return _typeof(obj) === type;
    }

    ;
    /**
     * Run through all tests and detect their support in the current UA.
     *
     * @access private
     * @returns {void}
     */

    function testRunner() {
      var featureNames;
      var feature;
      var aliasIdx;
      var result;
      var nameIdx;
      var featureName;
      var featureNameSplit;

      for (var featureIdx in tests) {
        if (tests.hasOwnProperty(featureIdx)) {
          featureNames = [];
          feature = tests[featureIdx]; // run the test, throw the return value into the Modernizr,
          // then based on that boolean, define an appropriate className
          // and push it into an array of classes we'll join later.
          //
          // If there is no name, it's an 'async' test that is run,
          // but not directly added to the object. That should
          // be done with a post-run addTest call.

          if (feature.name) {
            featureNames.push(feature.name.toLowerCase());

            if (feature.options && feature.options.aliases && feature.options.aliases.length) {
              // Add all the aliases into the names list
              for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
                featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
              }
            }
          } // Run the test, or use the raw value if it's not a function


          result = is(feature.fn, 'function') ? feature.fn() : feature.fn; // Set each of the names on the Modernizr object

          for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
            featureName = featureNames[nameIdx]; // Support dot properties as sub tests. We don't do checking to make sure
            // that the implied parent tests have been added. You must call them in
            // order (either in the test, or make the parent test a dependency).
            //
            // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
            // hashtag famous last words

            featureNameSplit = featureName.split('.');

            if (featureNameSplit.length === 1) {
              Modernizr[featureNameSplit[0]] = result;
            } else {
              // cast to a Boolean, if not one already or if it doesnt exist yet (like inputtypes)
              if (!Modernizr[featureNameSplit[0]] || Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
                Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
              }

              Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
            }

            classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
          }
        }
      }
    }

    ;
    /**
     * docElement is a convenience wrapper to grab the root element of the document
     *
     * @access private
     * @returns {HTMLElement|SVGElement} The root element of the document
     */

    var docElement = document.documentElement;
    /**
     * A convenience helper to check if the document we are running in is an SVG document
     *
     * @access private
     * @returns {boolean}
     */

    var isSVG = docElement.nodeName.toLowerCase() === 'svg';
    /**
     * setClasses takes an array of class names and adds them to the root element
     *
     * @access private
     * @function setClasses
     * @param {string[]} classes - Array of class names
     */
    // Pass in an and array of class names, e.g.:
    //  ['no-webp', 'borderradius', ...]

    function setClasses(classes) {
      var className = docElement.className;
      var classPrefix = Modernizr._config.classPrefix || '';

      if (isSVG) {
        className = className.baseVal;
      } // Change `no-js` to `js` (independently of the `enableClasses` option)
      // Handle classPrefix on this too


      if (Modernizr._config.enableJSClass) {
        var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');
        className = className.replace(reJS, '$1' + classPrefix + 'js$2');
      }

      if (Modernizr._config.enableClasses) {
        // Add the new classes
        if (classes.length > 0) {
          className += ' ' + classPrefix + classes.join(' ' + classPrefix);
        }

        if (isSVG) {
          docElement.className.baseVal = className;
        } else {
          docElement.className = className;
        }
      }
    }

    ;
    /**
     * hasOwnProp is a shim for hasOwnProperty that is needed for Safari 2.0 support
     *
     * @author kangax
     * @access private
     * @function hasOwnProp
     * @param {object} object - The object to check for a property
     * @param {string} property - The property to check for
     * @returns {boolean}
     */
    // hasOwnProperty shim by kangax needed for Safari 2.0 support

    var hasOwnProp;

    (function () {
      var _hasOwnProperty = {}.hasOwnProperty;
      /* istanbul ignore else */

      /* we have no way of testing IE 5.5 or safari 2,
       * so just assume the else gets hit */

      if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
        hasOwnProp = function hasOwnProp(object, property) {
          return _hasOwnProperty.call(object, property);
        };
      } else {
        hasOwnProp = function hasOwnProp(object, property) {
          /* yes, this can give false positives/negatives, but most of the time we don't care about those */
          return property in object && is(object.constructor.prototype[property], 'undefined');
        };
      }
    })(); // _l tracks listeners for async tests, as well as tests that execute after the initial run


    ModernizrProto._l = {};
    /**
     * Modernizr.on is a way to listen for the completion of async tests. Being
     * asynchronous, they may not finish before your scripts run. As a result you
     * will get a possibly false negative `undefined` value.
     *
     * @memberOf Modernizr
     * @name Modernizr.on
     * @access public
     * @function on
     * @param {string} feature - String name of the feature detect
     * @param {Function} cb - Callback function returning a Boolean - true if feature is supported, false if not
     * @returns {void}
     * @example
     *
     * ```js
     * Modernizr.on('flash', function( result ) {
     *   if (result) {
     *    // the browser has flash
     *   } else {
     *     // the browser does not have flash
     *   }
     * });
     * ```
     */

    ModernizrProto.on = function (feature, cb) {
      // Create the list of listeners if it doesn't exist
      if (!this._l[feature]) {
        this._l[feature] = [];
      } // Push this test on to the listener list


      this._l[feature].push(cb); // If it's already been resolved, trigger it on next tick


      if (Modernizr.hasOwnProperty(feature)) {
        // Next Tick
        setTimeout(function () {
          Modernizr._trigger(feature, Modernizr[feature]);
        }, 0);
      }
    };
    /**
     * _trigger is the private function used to signal test completion and run any
     * callbacks registered through [Modernizr.on](#modernizr-on)
     *
     * @memberOf Modernizr
     * @name Modernizr._trigger
     * @access private
     * @function _trigger
     * @param {string} feature - string name of the feature detect
     * @param {Function|boolean} [res] - A feature detection function, or the boolean =
     * result of a feature detection function
     * @returns {void}
     */


    ModernizrProto._trigger = function (feature, res) {
      if (!this._l[feature]) {
        return;
      }

      var cbs = this._l[feature]; // Force async

      setTimeout(function () {
        var i, cb;

        for (i = 0; i < cbs.length; i++) {
          cb = cbs[i];
          cb(res);
        }
      }, 0); // Don't trigger these again

      delete this._l[feature];
    };
    /**
     * addTest allows you to define your own feature detects that are not currently
     * included in Modernizr (under the covers it's the exact same code Modernizr
     * uses for its own [feature detections](https://github.com/Modernizr/Modernizr/tree/master/feature-detects)).
     * Just like the official detects, the result
     * will be added onto the Modernizr object, as well as an appropriate className set on
     * the html element when configured to do so
     *
     * @memberOf Modernizr
     * @name Modernizr.addTest
     * @optionName Modernizr.addTest()
     * @optionProp addTest
     * @access public
     * @function addTest
     * @param {string|Object} feature - The string name of the feature detect, or an
     * object of feature detect names and test
     * @param {Function|boolean} test - Function returning true if feature is supported,
     * false if not. Otherwise a boolean representing the results of a feature detection
     * @returns {Object} the Modernizr object to allow chaining
     * @example
     *
     * The most common way of creating your own feature detects is by calling
     * `Modernizr.addTest` with a string (preferably just lowercase, without any
     * punctuation), and a function you want executed that will return a boolean result
     *
     * ```js
     * Modernizr.addTest('itsTuesday', function() {
     *  var d = new Date();
     *  return d.getDay() === 2;
     * });
     * ```
     *
     * When the above is run, it will set Modernizr.itstuesday to `true` when it is tuesday,
     * and to `false` every other day of the week. One thing to notice is that the names of
     * feature detect functions are always lowercased when added to the Modernizr object. That
     * means that `Modernizr.itsTuesday` will not exist, but `Modernizr.itstuesday` will.
     *
     *
     *  Since we only look at the returned value from any feature detection function,
     *  you do not need to actually use a function. For simple detections, just passing
     *  in a statement that will return a boolean value works just fine.
     *
     * ```js
     * Modernizr.addTest('hasjquery', 'jQuery' in window);
     * ```
     *
     * Just like before, when the above runs `Modernizr.hasjquery` will be true if
     * jQuery has been included on the page. Not using a function saves a small amount
     * of overhead for the browser, as well as making your code much more readable.
     *
     * Finally, you also have the ability to pass in an object of feature names and
     * their tests. This is handy if you want to add multiple detections in one go.
     * The keys should always be a string, and the value can be either a boolean or
     * function that returns a boolean.
     *
     * ```js
     * var detects = {
     *  'hasjquery': 'jQuery' in window,
     *  'itstuesday': function() {
     *    var d = new Date();
     *    return d.getDay() === 2;
     *  }
     * }
     *
     * Modernizr.addTest(detects);
     * ```
     *
     * There is really no difference between the first methods and this one, it is
     * just a convenience to let you write more readable code.
     */


    function addTest(feature, test) {
      if (_typeof(feature) === 'object') {
        for (var key in feature) {
          if (hasOwnProp(feature, key)) {
            addTest(key, feature[key]);
          }
        }
      } else {
        feature = feature.toLowerCase();
        var featureNameSplit = feature.split('.');
        var last = Modernizr[featureNameSplit[0]]; // Again, we don't check for parent test existence. Get that right, though.

        if (featureNameSplit.length === 2) {
          last = last[featureNameSplit[1]];
        }

        if (typeof last !== 'undefined') {
          // we're going to quit if you're trying to overwrite an existing test
          // if we were to allow it, we'd do this:
          //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
          //   docElement.className = docElement.className.replace( re, '' );
          // but, no rly, stuff 'em.
          return Modernizr;
        }

        test = typeof test === 'function' ? test() : test; // Set the value (this is the magic, right here).

        if (featureNameSplit.length === 1) {
          Modernizr[featureNameSplit[0]] = test;
        } else {
          // cast to a Boolean, if not one already
          if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
            Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
          }

          Modernizr[featureNameSplit[0]][featureNameSplit[1]] = test;
        } // Set a single class (either `feature` or `no-feature`)


        setClasses([(!!test && test !== false ? '' : 'no-') + featureNameSplit.join('-')]); // Trigger the event

        Modernizr._trigger(feature, test);
      }

      return Modernizr; // allow chaining.
    } // After all the tests are run, add self to the Modernizr prototype


    Modernizr._q.push(function () {
      ModernizrProto.addTest = addTest;
    });
    /**
     * @optionName html5printshiv
     * @optionProp html5printshiv
     */
    // Take the html5 variable out of the html5shiv scope so we can return it.


    var html5;

    if (!isSVG) {
      /**
       * @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
       */
      ;

      (function (window, document) {
        /*jshint evil:true */

        /** version */
        var version = '3.7.3';
        /** Preset options */

        var options = window.html5 || {};
        /** Used to skip problem elements */

        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
        /** Not all elements can be cloned in IE **/

        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
        /** Detect whether the browser supports default html5 styles */

        var supportsHtml5Styles;
        /** Name of the expando, to work with multiple documents or to re-shiv one document */

        var expando = '_html5shiv';
        /** The id for the the documents expando */

        var expanID = 0;
        /** Cached data for each document */

        var expandoData = {};
        /** Detect whether the browser supports unknown elements */

        var supportsUnknownElements;

        (function () {
          try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>'; //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles

            supportsHtml5Styles = 'hidden' in a;

            supportsUnknownElements = a.childNodes.length == 1 || function () {
              // assign a false positive if unable to shiv
              document.createElement('a');
              var frag = document.createDocumentFragment();
              return typeof frag.cloneNode == 'undefined' || typeof frag.createDocumentFragment == 'undefined' || typeof frag.createElement == 'undefined';
            }();
          } catch (e) {
            // assign a false positive if detection fails => unable to shiv
            supportsHtml5Styles = true;
            supportsUnknownElements = true;
          }
        })();
        /*--------------------------------------------------------------------------*/

        /**
         * Creates a style sheet with the given CSS text and adds it to the document.
         * @private
         * @param {Document} ownerDocument The document.
         * @param {String} cssText The CSS text.
         * @returns {StyleSheet} The style element.
         */


        function addStyleSheet(ownerDocument, cssText) {
          var p = ownerDocument.createElement('p'),
              parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;
          p.innerHTML = 'x<style>' + cssText + '</style>';
          return parent.insertBefore(p.lastChild, parent.firstChild);
        }
        /**
         * Returns the value of `html5.elements` as an array.
         * @private
         * @returns {Array} An array of shived element node names.
         */


        function getElements() {
          var elements = html5.elements;
          return typeof elements == 'string' ? elements.split(' ') : elements;
        }
        /**
         * Extends the built-in list of html5 elements
         * @memberOf html5
         * @param {String|Array} newElements whitespace separated list or array of new element names to shiv
         * @param {Document} ownerDocument The context document.
         */


        function addElements(newElements, ownerDocument) {
          var elements = html5.elements;

          if (typeof elements != 'string') {
            elements = elements.join(' ');
          }

          if (typeof newElements != 'string') {
            newElements = newElements.join(' ');
          }

          html5.elements = elements + ' ' + newElements;
          shivDocument(ownerDocument);
        }
        /**
         * Returns the data associated to the given document
         * @private
         * @param {Document} ownerDocument The document.
         * @returns {Object} An object of data.
         */


        function getExpandoData(ownerDocument) {
          var data = expandoData[ownerDocument[expando]];

          if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
          }

          return data;
        }
        /**
         * returns a shived element for the given nodeName and document
         * @memberOf html5
         * @param {String} nodeName name of the element
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived element.
         */


        function createElement(nodeName, ownerDocument, data) {
          if (!ownerDocument) {
            ownerDocument = document;
          }

          if (supportsUnknownElements) {
            return ownerDocument.createElement(nodeName);
          }

          if (!data) {
            data = getExpandoData(ownerDocument);
          }

          var node;

          if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
          } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
          } else {
            node = data.createElem(nodeName);
          } // Avoid adding some elements to fragments in IE < 9 because
          // * Attributes like `name` or `type` cannot be set/changed once an element
          //   is inserted into a document/fragment
          // * Link elements with `src` attributes that are inaccessible, as with
          //   a 403 response, will cause the tab/window to crash
          // * Script elements appended to fragments will execute when their `src`
          //   or `text` property is set


          return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
        }
        /**
         * returns a shived DocumentFragment for the given document
         * @memberOf html5
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived DocumentFragment.
         */


        function createDocumentFragment(ownerDocument, data) {
          if (!ownerDocument) {
            ownerDocument = document;
          }

          if (supportsUnknownElements) {
            return ownerDocument.createDocumentFragment();
          }

          data = data || getExpandoData(ownerDocument);
          var clone = data.frag.cloneNode(),
              i = 0,
              elems = getElements(),
              l = elems.length;

          for (; i < l; i++) {
            clone.createElement(elems[i]);
          }

          return clone;
        }
        /**
         * Shivs the `createElement` and `createDocumentFragment` methods of the document.
         * @private
         * @param {Document|DocumentFragment} ownerDocument The document.
         * @param {Object} data of the document.
         */


        function shivMethods(ownerDocument, data) {
          if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
          }

          ownerDocument.createElement = function (nodeName) {
            //abort shiv
            if (!html5.shivMethods) {
              return data.createElem(nodeName);
            }

            return createElement(nodeName, ownerDocument, data);
          };

          ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' + 'var n=f.cloneNode(),c=n.createElement;' + 'h.shivMethods&&(' + // unroll the `createElement` calls
          getElements().join().replace(/[\w\-:]+/g, function (nodeName) {
            data.createElem(nodeName);
            data.frag.createElement(nodeName);
            return 'c("' + nodeName + '")';
          }) + ');return n}')(html5, data.frag);
        }
        /*--------------------------------------------------------------------------*/

        /**
         * Shivs the given document.
         * @memberOf html5
         * @param {Document} ownerDocument The document to shiv.
         * @returns {Document} The shived document.
         */


        function shivDocument(ownerDocument) {
          if (!ownerDocument) {
            ownerDocument = document;
          }

          var data = getExpandoData(ownerDocument);

          if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
            data.hasCSS = !!addStyleSheet(ownerDocument, // corrects block display not defined in IE6/7/8/9
            'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' + // adds styling not present in IE6/7/8/9
            'mark{background:#FF0;color:#000}' + // hides non-rendered elements
            'template{display:none}');
          }

          if (!supportsUnknownElements) {
            shivMethods(ownerDocument, data);
          }

          return ownerDocument;
        }
        /*--------------------------------------------------------------------------*/

        /**
         * The `html5` object is exposed so that more elements can be shived and
         * existing shiving can be detected on iframes.
         * @type Object
         * @example
         *
         * // options can be changed before the script is included
         * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
         */


        var html5 = {
          /**
           * An array or space separated string of node names of the elements to shiv.
           * @memberOf html5
           * @type Array|String
           */
          'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',

          /**
           * current version of html5shiv
           */
          'version': version,

          /**
           * A flag to indicate that the HTML5 style sheet should be inserted.
           * @memberOf html5
           * @type Boolean
           */
          'shivCSS': options.shivCSS !== false,

          /**
           * Is equal to true if a browser supports creating unknown/HTML5 elements
           * @memberOf html5
           * @type boolean
           */
          'supportsUnknownElements': supportsUnknownElements,

          /**
           * A flag to indicate that the document's `createElement` and `createDocumentFragment`
           * methods should be overwritten.
           * @memberOf html5
           * @type Boolean
           */
          'shivMethods': options.shivMethods !== false,

          /**
           * A string to describe the type of `html5` object ("default" or "default print").
           * @memberOf html5
           * @type String
           */
          'type': 'default',
          // shivs the document according to the specified `html5` object options
          'shivDocument': shivDocument,
          //creates a shived element
          createElement: createElement,
          //creates a shived documentFragment
          createDocumentFragment: createDocumentFragment,
          //extends list of elements
          addElements: addElements
        };
        /*--------------------------------------------------------------------------*/
        // expose html5

        window.html5 = html5; // shiv the document

        shivDocument(document);
        /*------------------------------- Print Shiv -------------------------------*/

        /** Used to filter media types */

        var reMedia = /^$|\b(?:all|print)\b/;
        /** Used to namespace printable elements */

        var shivNamespace = 'html5shiv';
        /** Detect whether the browser supports shivable style sheets */

        var supportsShivableSheets = !supportsUnknownElements && function () {
          // assign a false negative if unable to shiv
          var docEl = document.documentElement;
          return !(typeof document.namespaces == 'undefined' || typeof document.parentWindow == 'undefined' || typeof docEl.applyElement == 'undefined' || typeof docEl.removeNode == 'undefined' || typeof window.attachEvent == 'undefined');
        }();
        /*--------------------------------------------------------------------------*/

        /**
         * Wraps all HTML5 elements in the given document with printable elements.
         * (eg. the "header" element is wrapped with the "html5shiv:header" element)
         * @private
         * @param {Document} ownerDocument The document.
         * @returns {Array} An array wrappers added.
         */


        function addWrappers(ownerDocument) {
          var node,
              nodes = ownerDocument.getElementsByTagName('*'),
              index = nodes.length,
              reElements = RegExp('^(?:' + getElements().join('|') + ')$', 'i'),
              result = [];

          while (index--) {
            node = nodes[index];

            if (reElements.test(node.nodeName)) {
              result.push(node.applyElement(createWrapper(node)));
            }
          }

          return result;
        }
        /**
         * Creates a printable wrapper for the given element.
         * @private
         * @param {Element} element The element.
         * @returns {Element} The wrapper.
         */


        function createWrapper(element) {
          var node,
              nodes = element.attributes,
              index = nodes.length,
              wrapper = element.ownerDocument.createElement(shivNamespace + ':' + element.nodeName); // copy element attributes to the wrapper

          while (index--) {
            node = nodes[index];
            node.specified && wrapper.setAttribute(node.nodeName, node.nodeValue);
          } // copy element styles to the wrapper


          wrapper.style.cssText = element.style.cssText;
          return wrapper;
        }
        /**
         * Shivs the given CSS text.
         * (eg. header{} becomes html5shiv\:header{})
         * @private
         * @param {String} cssText The CSS text to shiv.
         * @returns {String} The shived CSS text.
         */


        function shivCssText(cssText) {
          var pair,
              parts = cssText.split('{'),
              index = parts.length,
              reElements = RegExp('(^|[\\s,>+~])(' + getElements().join('|') + ')(?=[[\\s,>+~#.:]|$)', 'gi'),
              replacement = '$1' + shivNamespace + '\\:$2';

          while (index--) {
            pair = parts[index] = parts[index].split('}');
            pair[pair.length - 1] = pair[pair.length - 1].replace(reElements, replacement);
            parts[index] = pair.join('}');
          }

          return parts.join('{');
        }
        /**
         * Removes the given wrappers, leaving the original elements.
         * @private
         * @params {Array} wrappers An array of printable wrappers.
         */


        function removeWrappers(wrappers) {
          var index = wrappers.length;

          while (index--) {
            wrappers[index].removeNode();
          }
        }
        /*--------------------------------------------------------------------------*/

        /**
         * Shivs the given document for print.
         * @memberOf html5
         * @param {Document} ownerDocument The document to shiv.
         * @returns {Document} The shived document.
         */


        function shivPrint(ownerDocument) {
          var shivedSheet,
              wrappers,
              data = getExpandoData(ownerDocument),
              namespaces = ownerDocument.namespaces,
              ownerWindow = ownerDocument.parentWindow;

          if (!supportsShivableSheets || ownerDocument.printShived) {
            return ownerDocument;
          }

          if (typeof namespaces[shivNamespace] == 'undefined') {
            namespaces.add(shivNamespace);
          }

          function removeSheet() {
            clearTimeout(data._removeSheetTimer);

            if (shivedSheet) {
              shivedSheet.removeNode(true);
            }

            shivedSheet = null;
          }

          ownerWindow.attachEvent('onbeforeprint', function () {
            removeSheet();
            var imports,
                length,
                sheet,
                collection = ownerDocument.styleSheets,
                cssText = [],
                index = collection.length,
                sheets = Array(index); // convert styleSheets collection to an array

            while (index--) {
              sheets[index] = collection[index];
            } // concat all style sheet CSS text


            while (sheet = sheets.pop()) {
              // IE does not enforce a same origin policy for external style sheets...
              // but has trouble with some dynamically created stylesheets
              if (!sheet.disabled && reMedia.test(sheet.media)) {
                try {
                  imports = sheet.imports;
                  length = imports.length;
                } catch (er) {
                  length = 0;
                }

                for (index = 0; index < length; index++) {
                  sheets.push(imports[index]);
                }

                try {
                  cssText.push(sheet.cssText);
                } catch (er) {}
              }
            } // wrap all HTML5 elements with printable elements and add the shived style sheet


            cssText = shivCssText(cssText.reverse().join(''));
            wrappers = addWrappers(ownerDocument);
            shivedSheet = addStyleSheet(ownerDocument, cssText);
          });
          ownerWindow.attachEvent('onafterprint', function () {
            // remove wrappers, leaving the original elements, and remove the shived style sheet
            removeWrappers(wrappers);
            clearTimeout(data._removeSheetTimer);
            data._removeSheetTimer = setTimeout(removeSheet, 500);
          });
          ownerDocument.printShived = true;
          return ownerDocument;
        }
        /*--------------------------------------------------------------------------*/
        // expose API


        html5.type += ' print';
        html5.shivPrint = shivPrint; // shiv for print

        shivPrint(document);

        if (( false ? undefined : _typeof(module)) == 'object' && module.exports) {
          module.exports = html5;
        }
      })(typeof window !== "undefined" ? window : this, document);
    }

    ;
    /**
     * contains checks to see if a string contains another string
     *
     * @access private
     * @function contains
     * @param {string} str - The string we want to check for substrings
     * @param {string} substr - The substring we want to search the first string for
     * @returns {boolean} true if and only if the first string 'str' contains the second string 'substr'
     */

    function contains(str, substr) {
      return !!~('' + str).indexOf(substr);
    }

    ;
    /**
     * createElement is a convenience wrapper around document.createElement. Since we
     * use createElement all over the place, this allows for (slightly) smaller code
     * as well as abstracting away issues with creating elements in contexts other than
     * HTML documents (e.g. SVG documents).
     *
     * @access private
     * @function createElement
     * @returns {HTMLElement|SVGElement} An HTML or SVG element
     */

    function createElement() {
      if (typeof document.createElement !== 'function') {
        // This is the case in IE7, where the type of createElement is "object".
        // For this reason, we cannot call apply() as Object is not a Function.
        return document.createElement(arguments[0]);
      } else if (isSVG) {
        return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0]);
      } else {
        return document.createElement.apply(document, arguments);
      }
    }

    ;
    /**
     * Create our "modernizr" element that we do most feature tests on.
     *
     * @access private
     */

    var modElem = {
      elem: createElement('modernizr')
    }; // Clean up this element

    Modernizr._q.push(function () {
      delete modElem.elem;
    });

    var mStyle = {
      style: modElem.elem.style
    }; // kill ref for gc, must happen before mod.elem is removed, so we unshift on to
    // the front of the queue.

    Modernizr._q.unshift(function () {
      delete mStyle.style;
    });
    /**
     * getBody returns the body of a document, or an element that can stand in for
     * the body if a real body does not exist
     *
     * @access private
     * @function getBody
     * @returns {HTMLElement|SVGElement} Returns the real body of a document, or an
     * artificially created element that stands in for the body
     */


    function getBody() {
      // After page load injecting a fake body doesn't work so check if body exists
      var body = document.body;

      if (!body) {
        // Can't use the real body create a fake one.
        body = createElement(isSVG ? 'svg' : 'body');
        body.fake = true;
      }

      return body;
    }

    ;
    /**
     * injectElementWithStyles injects an element with style element and some CSS rules
     *
     * @access private
     * @function injectElementWithStyles
     * @param {string} rule - String representing a css rule
     * @param {Function} callback - A function that is used to test the injected element
     * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
     * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
     * @returns {boolean} the result of the specified callback test
     */

    function injectElementWithStyles(rule, callback, nodes, testnames) {
      var mod = 'modernizr';
      var style;
      var ret;
      var node;
      var docOverflow;
      var div = createElement('div');
      var body = getBody();

      if (parseInt(nodes, 10)) {
        // In order not to give false positives we create a node for each test
        // This also allows the method to scale for unspecified uses
        while (nodes--) {
          node = createElement('div');
          node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
          div.appendChild(node);
        }
      }

      style = createElement('style');
      style.type = 'text/css';
      style.id = 's' + mod; // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
      // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270

      (!body.fake ? div : body).appendChild(style);
      body.appendChild(div);

      if (style.styleSheet) {
        style.styleSheet.cssText = rule;
      } else {
        style.appendChild(document.createTextNode(rule));
      }

      div.id = mod;

      if (body.fake) {
        //avoid crashing IE8, if background image is used
        body.style.background = ''; //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible

        body.style.overflow = 'hidden';
        docOverflow = docElement.style.overflow;
        docElement.style.overflow = 'hidden';
        docElement.appendChild(body);
      }

      ret = callback(div, rule); // If this is done after page load we don't want to remove the body so check if body exists

      if (body.fake) {
        body.parentNode.removeChild(body);
        docElement.style.overflow = docOverflow; // Trigger layout so kinetic scrolling isn't disabled in iOS6+
        // eslint-disable-next-line

        docElement.offsetHeight;
      } else {
        div.parentNode.removeChild(div);
      }

      return !!ret;
    }

    ;
    /**
     * domToCSS takes a camelCase string and converts it to kebab-case
     * e.g. boxSizing -> box-sizing
     *
     * @access private
     * @function domToCSS
     * @param {string} name - String name of camelCase prop we want to convert
     * @returns {string} The kebab-case version of the supplied name
     */

    function domToCSS(name) {
      return name.replace(/([A-Z])/g, function (str, m1) {
        return '-' + m1.toLowerCase();
      }).replace(/^ms-/, '-ms-');
    }

    ;
    /**
     * wrapper around getComputedStyle, to fix issues with Firefox returning null when
     * called inside of a hidden iframe
     *
     * @access private
     * @function computedStyle
     * @param {HTMLElement|SVGElement} elem - The element we want to find the computed styles of
     * @param {string|null} [pseudo] - An optional pseudo element selector (e.g. :before), of null if none
     * @param {string} prop - A CSS property
     * @returns {CSSStyleDeclaration} the value of the specified CSS property
     */

    function computedStyle(elem, pseudo, prop) {
      var result;

      if ('getComputedStyle' in window) {
        result = getComputedStyle.call(window, elem, pseudo);
        var console = window.console;

        if (result !== null) {
          if (prop) {
            result = result.getPropertyValue(prop);
          }
        } else {
          if (console) {
            var method = console.error ? 'error' : 'log';
            console[method].call(console, 'getComputedStyle returning null, its possible modernizr test results are inaccurate');
          }
        }
      } else {
        result = !pseudo && elem.currentStyle && elem.currentStyle[prop];
      }

      return result;
    }

    ;
    /**
     * nativeTestProps allows for us to use native feature detection functionality if available.
     * some prefixed form, or false, in the case of an unsupported rule
     *
     * @access private
     * @function nativeTestProps
     * @param {array} props - An array of property names
     * @param {string} value - A string representing the value we want to check via @supports
     * @returns {boolean|undefined} A boolean when @supports exists, undefined otherwise
     */
    // Accepts a list of property names and a single value
    // Returns `undefined` if native detection not available

    function nativeTestProps(props, value) {
      var i = props.length; // Start with the JS API: https://www.w3.org/TR/css3-conditional/#the-css-interface

      if ('CSS' in window && 'supports' in window.CSS) {
        // Try every prefixed variant of the property
        while (i--) {
          if (window.CSS.supports(domToCSS(props[i]), value)) {
            return true;
          }
        }

        return false;
      } // Otherwise fall back to at-rule (for Opera 12.x)
      else if ('CSSSupportsRule' in window) {
          // Build a condition string for every prefixed variant
          var conditionText = [];

          while (i--) {
            conditionText.push('(' + domToCSS(props[i]) + ':' + value + ')');
          }

          conditionText = conditionText.join(' or ');
          return injectElementWithStyles('@supports (' + conditionText + ') { #modernizr { position: absolute; } }', function (node) {
            return computedStyle(node, null, 'position') === 'absolute';
          });
        }

      return undefined;
    }

    ;
    /**
     * cssToDOM takes a kebab-case string and converts it to camelCase
     * e.g. box-sizing -> boxSizing
     *
     * @access private
     * @function cssToDOM
     * @param {string} name - String name of kebab-case prop we want to convert
     * @returns {string} The camelCase version of the supplied name
     */

    function cssToDOM(name) {
      return name.replace(/([a-z])-([a-z])/g, function (str, m1, m2) {
        return m1 + m2.toUpperCase();
      }).replace(/^-/, '');
    }

    ; // testProps is a generic CSS / DOM property test.
    // In testing support for a given CSS property, it's legit to test:
    //    `elem.style[styleName] !== undefined`
    // If the property is supported it will return an empty string,
    // if unsupported it will return undefined.
    // We'll take advantage of this quick test and skip setting a style
    // on our modernizr element, but instead just testing undefined vs
    // empty string.
    // Property names can be provided in either camelCase or kebab-case.

    function testProps(props, prefixed, value, skipValueTest) {
      skipValueTest = is(skipValueTest, 'undefined') ? false : skipValueTest; // Try native detect first

      if (!is(value, 'undefined')) {
        var result = nativeTestProps(props, value);

        if (!is(result, 'undefined')) {
          return result;
        }
      } // Otherwise do it properly


      var afterInit, i, propsLength, prop, before; // If we don't have a style element, that means we're running async or after
      // the core tests, so we'll need to create our own elements to use.
      // Inside of an SVG element, in certain browsers, the `style` element is only
      // defined for valid tags. Therefore, if `modernizr` does not have one, we
      // fall back to a less used element and hope for the best.
      // For strict XHTML browsers the hardly used samp element is used.

      var elems = ['modernizr', 'tspan', 'samp'];

      while (!mStyle.style && elems.length) {
        afterInit = true;
        mStyle.modElem = createElement(elems.shift());
        mStyle.style = mStyle.modElem.style;
      } // Delete the objects if we created them.


      function cleanElems() {
        if (afterInit) {
          delete mStyle.style;
          delete mStyle.modElem;
        }
      }

      propsLength = props.length;

      for (i = 0; i < propsLength; i++) {
        prop = props[i];
        before = mStyle.style[prop];

        if (contains(prop, '-')) {
          prop = cssToDOM(prop);
        }

        if (mStyle.style[prop] !== undefined) {
          // If value to test has been passed in, do a set-and-check test.
          // 0 (integer) is a valid property value, so check that `value` isn't
          // undefined, rather than just checking it's truthy.
          if (!skipValueTest && !is(value, 'undefined')) {
            // Needs a try catch block because of old IE. This is slow, but will
            // be avoided in most cases because `skipValueTest` will be used.
            try {
              mStyle.style[prop] = value;
            } catch (e) {} // If the property value has changed, we assume the value used is
            // supported. If `value` is empty string, it'll fail here (because
            // it hasn't changed), which matches how browsers have implemented
            // CSS.supports()


            if (mStyle.style[prop] !== before) {
              cleanElems();
              return prefixed === 'pfx' ? prop : true;
            }
          } // Otherwise just return true, or the property name if this is a
          // `prefixed()` call
          else {
              cleanElems();
              return prefixed === 'pfx' ? prop : true;
            }
        }
      }

      cleanElems();
      return false;
    }

    ;
    /**
     * testProp() investigates whether a given style property is recognized
     * Property names can be provided in either camelCase or kebab-case.
     *
     * @memberOf Modernizr
     * @name Modernizr.testProp
     * @access public
     * @optionName Modernizr.testProp()
     * @optionProp testProp
     * @function testProp
     * @param {string} prop - Name of the CSS property to check
     * @param {string} [value] - Name of the CSS value to check
     * @param {boolean} [useValue] - Whether or not to check the value if @supports isn't supported
     * @returns {boolean} an empty string if the property is supported, undefined if its unsupported
     * @example
     *
     * Just like [testAllProps](#modernizr-testallprops), only it does not check any vendor prefixed
     * version of the string.
     *
     * Note that the property name must be provided in camelCase (e.g. boxSizing not box-sizing)
     *
     * ```js
     * Modernizr.testProp('pointerEvents')  // true
     * ```
     *
     * You can also provide a value as an optional second argument to check if a
     * specific value is supported
     *
     * ```js
     * Modernizr.testProp('pointerEvents', 'none') // true
     * Modernizr.testProp('pointerEvents', 'penguin') // false
     * ```
     */

    var testProp = ModernizrProto.testProp = function (prop, value, useValue) {
      return testProps([prop], undefined, value, useValue);
    };
    /**
     * fnBind is a super small [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) polyfill.
     *
     * @access private
     * @function fnBind
     * @param {Function} fn - a function you want to change `this` reference to
     * @param {Object} that - the `this` you want to call the function with
     * @returns {Function} The wrapped version of the supplied function
     */


    function fnBind(fn, that) {
      return function () {
        return fn.apply(that, arguments);
      };
    }

    ;
    /*!
    {
      "name": "Canvas",
      "property": "canvas",
      "caniuse": "canvas",
      "tags": ["canvas", "graphics"],
      "polyfills": ["flashcanvas", "excanvas", "slcanvas", "fxcanvas"]
    }
    !*/

    /* DOC
    Detects support for the `<canvas>` element for 2D drawing.
    */
    // On the S60 and BB Storm, getContext exists, but always returns undefined
    // so we actually have to call getContext() to verify
    // github.com/Modernizr/Modernizr/issues/issue/97/

    Modernizr.addTest('canvas', function () {
      var elem = createElement('canvas');
      return !!(elem.getContext && elem.getContext('2d'));
    });
    /*!
    {
      "name": "Canvas text",
      "property": "canvastext",
      "caniuse": "canvas-text",
      "tags": ["canvas", "graphics"],
      "polyfills": ["canvastext"]
    }
    !*/

    /* DOC
    Detects support for the text APIs for `<canvas>` elements.
    */

    Modernizr.addTest('canvastext', function () {
      if (Modernizr.canvas === false) {
        return false;
      }

      return typeof createElement('canvas').getContext('2d').fillText === 'function';
    });
    /*!
    {
      "name": "Emoji",
      "property": "emoji"
    }
    !*/

    /* DOC
    Detects support for emoji character sets.
    */

    Modernizr.addTest('emoji', function () {
      if (!Modernizr.canvastext) {
        return false;
      }

      var node = createElement('canvas');
      var ctx = node.getContext('2d');
      var backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
      var offset = 12 * backingStoreRatio;
      ctx.fillStyle = '#f00';
      ctx.textBaseline = 'top';
      ctx.font = '32px Arial';
      ctx.fillText("\uD83D\uDC28", 0, 0); // U+1F428 KOALA

      return ctx.getImageData(offset, offset, 1, 1).data[0] !== 0;
    });
    /**
     * If the browsers follow the spec, then they would expose vendor-specific styles as:
     *   elem.style.WebkitBorderRadius
     * instead of something like the following (which is technically incorrect):
     *   elem.style.webkitBorderRadius
      * WebKit ghosts their properties in lowercase but Opera & Moz do not.
     * Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
     *   erik.eae.net/archives/2008/03/10/21.48.10/
      * More here: github.com/Modernizr/Modernizr/issues/issue/21
     *
     * @access private
     * @returns {string} The string representing the vendor-specific style properties
     */

    var omPrefixes = 'Moz O ms Webkit';
    var cssomPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.split(' ') : [];
    ModernizrProto._cssomPrefixes = cssomPrefixes;
    /**
     * List of JavaScript DOM values used for tests
     *
     * @memberOf Modernizr
     * @name Modernizr._domPrefixes
     * @optionName Modernizr._domPrefixes
     * @optionProp domPrefixes
     * @access public
     * @example
     *
     * Modernizr._domPrefixes is exactly the same as [_prefixes](#modernizr-_prefixes), but rather
     * than kebab-case properties, all properties are their Capitalized variant
     *
     * ```js
     * Modernizr._domPrefixes === [ "Moz", "O", "ms", "Webkit" ];
     * ```
     */

    var domPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(' ') : [];
    ModernizrProto._domPrefixes = domPrefixes;
    /**
     * testDOMProps is a generic DOM property test; if a browser supports
     *   a certain property, it won't return undefined for it.
     *
     * @access private
     * @function testDOMProps
     * @param {Array<string>} props - An array of properties to test for
     * @param {Object} obj - An object or Element you want to use to test the parameters again
     * @param {boolean|Object} elem - An Element to bind the property lookup again. Use `false` to prevent the check
     * @returns {false|*} returns false if the prop is unsupported, otherwise the value that is supported
     */

    function testDOMProps(props, obj, elem) {
      var item;

      for (var i in props) {
        if (props[i] in obj) {
          // return the property name as a string
          if (elem === false) {
            return props[i];
          }

          item = obj[props[i]]; // let's bind a function

          if (is(item, 'function')) {
            // bind to obj unless overridden
            return fnBind(item, elem || obj);
          } // return the unbound function or obj or value


          return item;
        }
      }

      return false;
    }

    ;
    /**
     * testPropsAll tests a list of DOM properties we want to check against.
     * We specify literally ALL possible (known and/or likely) properties on
     * the element including the non-vendor prefixed one, for forward-
     * compatibility.
     *
     * @access private
     * @function testPropsAll
     * @param {string} prop - A string of the property to test for
     * @param {string|Object} [prefixed] - An object to check the prefixed properties on. Use a string to skip
     * @param {HTMLElement|SVGElement} [elem] - An element used to test the property and value against
     * @param {string} [value] - A string of a css value
     * @param {boolean} [skipValueTest] - An boolean representing if you want to test if value sticks when set
     * @returns {false|string} returns the string version of the property, or false if it is unsupported
     */

    function testPropsAll(prop, prefixed, elem, value, skipValueTest) {
      var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
          props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' '); // did they call .prefixed('boxSizing') or are we just testing a prop?

      if (is(prefixed, 'string') || is(prefixed, 'undefined')) {
        return testProps(props, prefixed, value, skipValueTest); // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
      } else {
        props = (prop + ' ' + domPrefixes.join(ucProp + ' ') + ucProp).split(' ');
        return testDOMProps(props, prefixed, elem);
      }
    } // Modernizr.testAllProps() investigates whether a given style property,
    // or any of its vendor-prefixed variants, is recognized
    //
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testAllProps('boxSizing')


    ModernizrProto.testAllProps = testPropsAll;
    /**
     * testAllProps determines whether a given CSS property is supported in the browser
     *
     * @memberOf Modernizr
     * @name Modernizr.testAllProps
     * @optionName Modernizr.testAllProps()
     * @optionProp testAllProps
     * @access public
     * @function testAllProps
     * @param {string} prop - String naming the property to test (either camelCase or kebab-case)
     * @param {string} [value] - String of the value to test
     * @param {boolean} [skipValueTest=false] - Whether to skip testing that the value is supported when using non-native detection
     * @returns {false|string} returns the string version of the property, or false if it is unsupported
     * @example
     *
     * testAllProps determines whether a given CSS property, in some prefixed form,
     * is supported by the browser.
     *
     * ```js
     * testAllProps('boxSizing')  // true
     * ```
     *
     * It can optionally be given a CSS value in string form to test if a property
     * value is valid
     *
     * ```js
     * testAllProps('display', 'block') // true
     * testAllProps('display', 'penguin') // false
     * ```
     *
     * A boolean can be passed as a third parameter to skip the value check when
     * native detection (@supports) isn't available.
     *
     * ```js
     * testAllProps('shapeOutside', 'content-box', true);
     * ```
     */

    function testAllProps(prop, value, skipValueTest) {
      return testPropsAll(prop, undefined, undefined, value, skipValueTest);
    }

    ModernizrProto.testAllProps = testAllProps;
    /*!
    {
      "name": "Flexbox",
      "property": "flexbox",
      "caniuse": "flexbox",
      "tags": ["css"],
      "notes": [{
        "name": "The _new_ flexbox",
        "href": "https://www.w3.org/TR/css-flexbox-1/"
      }],
      "warnings": [
        "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
      ]
    }
    !*/

    /* DOC
    Detects support for the Flexible Box Layout model, a.k.a. Flexbox, which allows easy manipulation of layout order and sizing within a container.
    */

    Modernizr.addTest('flexbox', testAllProps('flexBasis', '1px', true));
    /*!
    {
      "name": "ES6 Promises",
      "property": "promises",
      "caniuse": "promises",
      "polyfills": ["es6promises"],
      "authors": ["Krister Kari", "Jake Archibald"],
      "tags": ["es6"],
      "notes": [{
        "name": "The ES6 promises spec",
        "href": "https://github.com/domenic/promises-unwrapping"
      },{
        "name": "Chromium dashboard - ES6 Promises",
        "href": "https://www.chromestatus.com/features/5681726336532480"
      },{
        "name": "JavaScript Promises: an Introduction",
        "href": "https://developers.google.com/web/fundamentals/primers/promises/"
      }]
    }
    !*/

    /* DOC
    Check if browser implements ECMAScript 6 Promises per specification.
    */

    Modernizr.addTest('promises', function () {
      return 'Promise' in window && // Some of these methods are missing from
      // Firefox/Chrome experimental implementations
      'resolve' in window.Promise && 'reject' in window.Promise && 'all' in window.Promise && 'race' in window.Promise && // Older version of the spec had a resolver object
      // as the arg rather than a function
      function () {
        var resolve;
        new window.Promise(function (r) {
          resolve = r;
        });
        return typeof resolve === 'function';
      }();
    }); // Run each test

    testRunner(); // Remove the "no-js" class if it exists

    setClasses(classes);
    delete ModernizrProto.addTest;
    delete ModernizrProto.addAsyncTest; // Run the things that are supposed to run after the tests

    for (var i = 0; i < Modernizr._q.length; i++) {
      Modernizr._q[i]();
    } // Leak Modernizr namespace


    window.Modernizr = Modernizr;
    ;
  })(window, document);

  module.exports = window.Modernizr;

  if (hadGlobal) {
    window.Modernizr = oldGlobal;
  } else {
    delete window.Modernizr;
  }
})(window);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var modernizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modernizr */ "./.modernizrrc.js");
/* harmony import */ var modernizr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(modernizr__WEBPACK_IMPORTED_MODULE_0__);
 // eslint-disable-next-line

console.log('🐶');

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/main.js ./src/scss/main.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! ./src/scss/main.scss */"./src/scss/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vLm1vZGVybml6cnJjLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2Nzcz8wMGUzIl0sIm5hbWVzIjpbIndpbmRvdyIsImhhZEdsb2JhbCIsIm9sZEdsb2JhbCIsIk1vZGVybml6ciIsImRvY3VtZW50IiwidW5kZWZpbmVkIiwidGVzdHMiLCJNb2Rlcm5penJQcm90byIsIl92ZXJzaW9uIiwiX2NvbmZpZyIsIl9xIiwib24iLCJ0ZXN0IiwiY2IiLCJzZWxmIiwic2V0VGltZW91dCIsImFkZFRlc3QiLCJuYW1lIiwiZm4iLCJvcHRpb25zIiwicHVzaCIsImFkZEFzeW5jVGVzdCIsInByb3RvdHlwZSIsImNsYXNzZXMiLCJpcyIsIm9iaiIsInR5cGUiLCJ0ZXN0UnVubmVyIiwiZmVhdHVyZU5hbWVzIiwiZmVhdHVyZSIsImFsaWFzSWR4IiwicmVzdWx0IiwibmFtZUlkeCIsImZlYXR1cmVOYW1lIiwiZmVhdHVyZU5hbWVTcGxpdCIsImZlYXR1cmVJZHgiLCJoYXNPd25Qcm9wZXJ0eSIsInRvTG93ZXJDYXNlIiwiYWxpYXNlcyIsImxlbmd0aCIsInNwbGl0IiwiQm9vbGVhbiIsImpvaW4iLCJkb2NFbGVtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiaXNTVkciLCJub2RlTmFtZSIsInNldENsYXNzZXMiLCJjbGFzc05hbWUiLCJjbGFzc1ByZWZpeCIsImJhc2VWYWwiLCJlbmFibGVKU0NsYXNzIiwicmVKUyIsIlJlZ0V4cCIsInJlcGxhY2UiLCJlbmFibGVDbGFzc2VzIiwiaGFzT3duUHJvcCIsIl9oYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJvYmplY3QiLCJwcm9wZXJ0eSIsImNvbnN0cnVjdG9yIiwiX2wiLCJfdHJpZ2dlciIsInJlcyIsImNicyIsImkiLCJrZXkiLCJsYXN0IiwiaHRtbDUiLCJ2ZXJzaW9uIiwicmVTa2lwIiwic2F2ZUNsb25lcyIsInN1cHBvcnRzSHRtbDVTdHlsZXMiLCJleHBhbmRvIiwiZXhwYW5JRCIsImV4cGFuZG9EYXRhIiwic3VwcG9ydHNVbmtub3duRWxlbWVudHMiLCJhIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNoaWxkTm9kZXMiLCJmcmFnIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImNsb25lTm9kZSIsImUiLCJhZGRTdHlsZVNoZWV0Iiwib3duZXJEb2N1bWVudCIsImNzc1RleHQiLCJwIiwicGFyZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbnNlcnRCZWZvcmUiLCJsYXN0Q2hpbGQiLCJmaXJzdENoaWxkIiwiZ2V0RWxlbWVudHMiLCJlbGVtZW50cyIsImFkZEVsZW1lbnRzIiwibmV3RWxlbWVudHMiLCJzaGl2RG9jdW1lbnQiLCJnZXRFeHBhbmRvRGF0YSIsImRhdGEiLCJub2RlIiwiY2FjaGUiLCJjcmVhdGVFbGVtIiwiY2FuSGF2ZUNoaWxkcmVuIiwidGFnVXJuIiwiYXBwZW5kQ2hpbGQiLCJjbG9uZSIsImVsZW1zIiwibCIsInNoaXZNZXRob2RzIiwiY3JlYXRlRnJhZyIsIkZ1bmN0aW9uIiwic2hpdkNTUyIsImhhc0NTUyIsInJlTWVkaWEiLCJzaGl2TmFtZXNwYWNlIiwic3VwcG9ydHNTaGl2YWJsZVNoZWV0cyIsImRvY0VsIiwibmFtZXNwYWNlcyIsInBhcmVudFdpbmRvdyIsImFwcGx5RWxlbWVudCIsInJlbW92ZU5vZGUiLCJhdHRhY2hFdmVudCIsImFkZFdyYXBwZXJzIiwibm9kZXMiLCJpbmRleCIsInJlRWxlbWVudHMiLCJjcmVhdGVXcmFwcGVyIiwiZWxlbWVudCIsImF0dHJpYnV0ZXMiLCJ3cmFwcGVyIiwic3BlY2lmaWVkIiwic2V0QXR0cmlidXRlIiwibm9kZVZhbHVlIiwic3R5bGUiLCJzaGl2Q3NzVGV4dCIsInBhaXIiLCJwYXJ0cyIsInJlcGxhY2VtZW50IiwicmVtb3ZlV3JhcHBlcnMiLCJ3cmFwcGVycyIsInNoaXZQcmludCIsInNoaXZlZFNoZWV0Iiwib3duZXJXaW5kb3ciLCJwcmludFNoaXZlZCIsImFkZCIsInJlbW92ZVNoZWV0IiwiY2xlYXJUaW1lb3V0IiwiX3JlbW92ZVNoZWV0VGltZXIiLCJpbXBvcnRzIiwic2hlZXQiLCJjb2xsZWN0aW9uIiwic3R5bGVTaGVldHMiLCJzaGVldHMiLCJBcnJheSIsInBvcCIsImRpc2FibGVkIiwibWVkaWEiLCJlciIsInJldmVyc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiY29udGFpbnMiLCJzdHIiLCJzdWJzdHIiLCJpbmRleE9mIiwiYXJndW1lbnRzIiwiY3JlYXRlRWxlbWVudE5TIiwiYXBwbHkiLCJtb2RFbGVtIiwiZWxlbSIsIm1TdHlsZSIsInVuc2hpZnQiLCJnZXRCb2R5IiwiYm9keSIsImZha2UiLCJpbmplY3RFbGVtZW50V2l0aFN0eWxlcyIsInJ1bGUiLCJjYWxsYmFjayIsInRlc3RuYW1lcyIsIm1vZCIsInJldCIsImRvY092ZXJmbG93IiwiZGl2IiwicGFyc2VJbnQiLCJpZCIsInN0eWxlU2hlZXQiLCJjcmVhdGVUZXh0Tm9kZSIsImJhY2tncm91bmQiLCJvdmVyZmxvdyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIm9mZnNldEhlaWdodCIsImRvbVRvQ1NTIiwibTEiLCJjb21wdXRlZFN0eWxlIiwicHNldWRvIiwicHJvcCIsImdldENvbXB1dGVkU3R5bGUiLCJjb25zb2xlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm1ldGhvZCIsImVycm9yIiwiY3VycmVudFN0eWxlIiwibmF0aXZlVGVzdFByb3BzIiwicHJvcHMiLCJ2YWx1ZSIsIkNTUyIsInN1cHBvcnRzIiwiY29uZGl0aW9uVGV4dCIsImNzc1RvRE9NIiwibTIiLCJ0b1VwcGVyQ2FzZSIsInRlc3RQcm9wcyIsInByZWZpeGVkIiwic2tpcFZhbHVlVGVzdCIsImFmdGVySW5pdCIsInByb3BzTGVuZ3RoIiwiYmVmb3JlIiwic2hpZnQiLCJjbGVhbkVsZW1zIiwidGVzdFByb3AiLCJ1c2VWYWx1ZSIsImZuQmluZCIsInRoYXQiLCJnZXRDb250ZXh0IiwiY2FudmFzIiwiZmlsbFRleHQiLCJjYW52YXN0ZXh0IiwiY3R4IiwiYmFja2luZ1N0b3JlUmF0aW8iLCJ3ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwibW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIm1zQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwiYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIm9mZnNldCIsImZpbGxTdHlsZSIsInRleHRCYXNlbGluZSIsImZvbnQiLCJnZXRJbWFnZURhdGEiLCJvbVByZWZpeGVzIiwiY3Nzb21QcmVmaXhlcyIsInVzZVByZWZpeGVzIiwiX2Nzc29tUHJlZml4ZXMiLCJkb21QcmVmaXhlcyIsIl9kb21QcmVmaXhlcyIsInRlc3RET01Qcm9wcyIsIml0ZW0iLCJ0ZXN0UHJvcHNBbGwiLCJ1Y1Byb3AiLCJjaGFyQXQiLCJzbGljZSIsInRlc3RBbGxQcm9wcyIsIlByb21pc2UiLCJyZXNvbHZlIiwiciIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtR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QUFjLFNBQS9DO0FBQ0EsZUFBTyxPQUFPRCxPQUFQLEtBQW1CLFVBQTFCO0FBQ0QsT0FKQSxFQVREO0FBY0QsS0FmRCxFQTlwRHFDLENBZ3JEckM7O0FBQ0F0TyxjQUFVLEdBanJEMkIsQ0FtckRyQzs7QUFDQW9CLGNBQVUsQ0FBQ3hCLE9BQUQsQ0FBVjtBQUVBLFdBQU9oQixjQUFjLENBQUNTLE9BQXRCO0FBQ0EsV0FBT1QsY0FBYyxDQUFDYyxZQUF0QixDQXZyRHFDLENBeXJEckM7O0FBQ0EsU0FBSyxJQUFJNkMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRy9ELFNBQVMsQ0FBQ08sRUFBVixDQUFhNkIsTUFBakMsRUFBeUMyQixDQUFDLEVBQTFDLEVBQThDO0FBQzVDL0QsZUFBUyxDQUFDTyxFQUFWLENBQWF3RCxDQUFiO0FBQ0QsS0E1ckRvQyxDQThyRHJDOzs7QUFDQWxFLFVBQU0sQ0FBQ0csU0FBUCxHQUFtQkEsU0FBbkI7QUFHRjtBQUVDLEdBcHNEQSxFQW9zREVILE1BcHNERixFQW9zRFVJLFFBcHNEVjs7QUFxc0REOEosUUFBTSxDQUFDQyxPQUFQLEdBQWVuSyxNQUFNLENBQUNHLFNBQXRCOztBQUFnQyxNQUFHRixTQUFILEVBQWE7QUFBQ0QsVUFBTSxDQUFDRyxTQUFQLEdBQWlCRCxTQUFqQjtBQUE0QixHQUExQyxNQUE4QztBQUFDLFdBQU9GLE1BQU0sQ0FBQ0csU0FBZDtBQUF5QjtBQUFDLENBOXREeEcsRUE4dEQwR0gsTUE5dEQxRyxFOzs7Ozs7Ozs7Ozs7O0FDQUQ7QUFBQTtBQUFBO0NBRUE7O0FBQ0F5TSxPQUFPLENBQUMwRCxHQUFSLENBQVksSUFBWixFOzs7Ozs7Ozs7OztBQ0hBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIjsoZnVuY3Rpb24od2luZG93KXt2YXIgaGFkR2xvYmFsPSdNb2Rlcm5penInIGluIHdpbmRvdzt2YXIgb2xkR2xvYmFsPXdpbmRvdy5Nb2Rlcm5penI7LyohXG4gKiBtb2Rlcm5penIgdjMuOC4wXG4gKiBCdWlsZCBodHRwczovL21vZGVybml6ci5jb20vZG93bmxvYWQ/LWVtb2ppLWZsZXhib3gtcHJvbWlzZXMtYWRkdGVzdC1mbmJpbmQtcHJpbnRzaGl2LXNldGNsYXNzZXMtdGVzdHByb3AtZG9udG1pblxuICpcbiAqIENvcHlyaWdodCAoYylcbiAqICBGYXJ1ayBBdGVzXG4gKiAgUGF1bCBJcmlzaFxuICogIEFsZXggU2V4dG9uXG4gKiAgUnlhbiBTZWRkb25cbiAqICBQYXRyaWNrIEtldHRuZXJcbiAqICBTdHUgQ294XG4gKiAgUmljaGFyZCBIZXJyZXJhXG4gKiAgVmVlY2tcblxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG4vKlxuICogTW9kZXJuaXpyIHRlc3RzIHdoaWNoIG5hdGl2ZSBDU1MzIGFuZCBIVE1MNSBmZWF0dXJlcyBhcmUgYXZhaWxhYmxlIGluIHRoZVxuICogY3VycmVudCBVQSBhbmQgbWFrZXMgdGhlIHJlc3VsdHMgYXZhaWxhYmxlIHRvIHlvdSBpbiB0d28gd2F5czogYXMgcHJvcGVydGllcyBvblxuICogYSBnbG9iYWwgYE1vZGVybml6cmAgb2JqZWN0LCBhbmQgYXMgY2xhc3NlcyBvbiB0aGUgYDxodG1sPmAgZWxlbWVudC4gVGhpc1xuICogaW5mb3JtYXRpb24gYWxsb3dzIHlvdSB0byBwcm9ncmVzc2l2ZWx5IGVuaGFuY2UgeW91ciBwYWdlcyB3aXRoIGEgZ3JhbnVsYXIgbGV2ZWxcbiAqIG9mIGNvbnRyb2wgb3ZlciB0aGUgZXhwZXJpZW5jZS5cbiovXG5cbjsoZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKXtcblxuICB2YXIgdGVzdHMgPSBbXTtcbiAgXG5cbiAgLyoqXG4gICAqIE1vZGVybml6clByb3RvIGlzIHRoZSBjb25zdHJ1Y3RvciBmb3IgTW9kZXJuaXpyXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAYWNjZXNzIHB1YmxpY1xuICAgKi9cbiAgdmFyIE1vZGVybml6clByb3RvID0ge1xuICAgIC8vIFRoZSBjdXJyZW50IHZlcnNpb24sIGR1bW15XG4gICAgX3ZlcnNpb246ICczLjguMCcsXG5cbiAgICAvLyBBbnkgc2V0dGluZ3MgdGhhdCBkb24ndCB3b3JrIGFzIHNlcGFyYXRlIG1vZHVsZXNcbiAgICAvLyBjYW4gZ28gaW4gaGVyZSBhcyBjb25maWd1cmF0aW9uLlxuICAgIF9jb25maWc6IHtcbiAgICAgICdjbGFzc1ByZWZpeCc6ICcnLFxuICAgICAgJ2VuYWJsZUNsYXNzZXMnOiB0cnVlLFxuICAgICAgJ2VuYWJsZUpTQ2xhc3MnOiB0cnVlLFxuICAgICAgJ3VzZVByZWZpeGVzJzogdHJ1ZVxuICAgIH0sXG5cbiAgICAvLyBRdWV1ZSBvZiB0ZXN0c1xuICAgIF9xOiBbXSxcblxuICAgIC8vIFN0dWIgdGhlc2UgZm9yIHBlb3BsZSB3aG8gYXJlIGxpc3RlbmluZ1xuICAgIG9uOiBmdW5jdGlvbih0ZXN0LCBjYikge1xuICAgICAgLy8gSSBkb24ndCByZWFsbHkgdGhpbmsgcGVvcGxlIHNob3VsZCBkbyB0aGlzLCBidXQgd2UgY2FuXG4gICAgICAvLyBzYWZlIGd1YXJkIGl0IGEgYml0LlxuICAgICAgLy8gLS0gTk9URTo6IHRoaXMgZ2V0cyBXQVkgb3ZlcnJpZGRlbiBpbiBzcmMvYWRkVGVzdCBmb3IgYWN0dWFsIGFzeW5jIHRlc3RzLlxuICAgICAgLy8gVGhpcyBpcyBpbiBjYXNlIHBlb3BsZSBsaXN0ZW4gdG8gc3luY2hyb25vdXMgdGVzdHMuIEkgd291bGQgbGVhdmUgaXQgb3V0LFxuICAgICAgLy8gYnV0IHRoZSBjb2RlIHRvICpkaXNhbGxvdyogc3luYyB0ZXN0cyBpbiB0aGUgcmVhbCB2ZXJzaW9uIG9mIHRoaXNcbiAgICAgIC8vIGZ1bmN0aW9uIGlzIGFjdHVhbGx5IGxhcmdlciB0aGFuIHRoaXMuXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYihzZWxmW3Rlc3RdKTtcbiAgICAgIH0sIDApO1xuICAgIH0sXG5cbiAgICBhZGRUZXN0OiBmdW5jdGlvbihuYW1lLCBmbiwgb3B0aW9ucykge1xuICAgICAgdGVzdHMucHVzaCh7bmFtZTogbmFtZSwgZm46IGZuLCBvcHRpb25zOiBvcHRpb25zfSk7XG4gICAgfSxcblxuICAgIGFkZEFzeW5jVGVzdDogZnVuY3Rpb24oZm4pIHtcbiAgICAgIHRlc3RzLnB1c2goe25hbWU6IG51bGwsIGZuOiBmbn0pO1xuICAgIH1cbiAgfTtcblxuICBcblxuICAvLyBGYWtlIHNvbWUgb2YgT2JqZWN0LmNyZWF0ZSBzbyB3ZSBjYW4gZm9yY2Ugbm9uIHRlc3QgcmVzdWx0cyB0byBiZSBub24gXCJvd25cIiBwcm9wZXJ0aWVzLlxuICB2YXIgTW9kZXJuaXpyID0gZnVuY3Rpb24oKSB7fTtcbiAgTW9kZXJuaXpyLnByb3RvdHlwZSA9IE1vZGVybml6clByb3RvO1xuXG4gIC8vIExlYWsgbW9kZXJuaXpyIGdsb2JhbGx5IHdoZW4geW91IGByZXF1aXJlYCBpdCByYXRoZXIgdGhhbiBmb3JjZSBpdCBoZXJlLlxuICAvLyBPdmVyd3JpdGUgbmFtZSBzbyBjb25zdHJ1Y3RvciBuYW1lIGlzIG5pY2VyIDpEXG4gIE1vZGVybml6ciA9IG5ldyBNb2Rlcm5penIoKTtcblxuICBcblxuICB2YXIgY2xhc3NlcyA9IFtdO1xuICBcblxuICAvKipcbiAgICogaXMgcmV0dXJucyBhIGJvb2xlYW4gaWYgdGhlIHR5cGVvZiBhbiBvYmogaXMgZXhhY3RseSB0eXBlLlxuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIGlzXG4gICAqIEBwYXJhbSB7Kn0gb2JqIC0gQSB0aGluZyB3ZSB3YW50IHRvIGNoZWNrIHRoZSB0eXBlIG9mXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gQSBzdHJpbmcgdG8gY29tcGFyZSB0aGUgdHlwZW9mIGFnYWluc3RcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIHR5cGVvZiB0aGUgZmlyc3QgcGFyYW1ldGVyIGlzIGV4YWN0bHkgdGhlIHNwZWNpZmllZCB0eXBlLCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG4gIGZ1bmN0aW9uIGlzKG9iaiwgdHlwZSkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSB0eXBlO1xuICB9XG5cbiAgO1xuXG4gIC8qKlxuICAgKiBSdW4gdGhyb3VnaCBhbGwgdGVzdHMgYW5kIGRldGVjdCB0aGVpciBzdXBwb3J0IGluIHRoZSBjdXJyZW50IFVBLlxuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmdW5jdGlvbiB0ZXN0UnVubmVyKCkge1xuICAgIHZhciBmZWF0dXJlTmFtZXM7XG4gICAgdmFyIGZlYXR1cmU7XG4gICAgdmFyIGFsaWFzSWR4O1xuICAgIHZhciByZXN1bHQ7XG4gICAgdmFyIG5hbWVJZHg7XG4gICAgdmFyIGZlYXR1cmVOYW1lO1xuICAgIHZhciBmZWF0dXJlTmFtZVNwbGl0O1xuXG4gICAgZm9yICh2YXIgZmVhdHVyZUlkeCBpbiB0ZXN0cykge1xuICAgICAgaWYgKHRlc3RzLmhhc093blByb3BlcnR5KGZlYXR1cmVJZHgpKSB7XG4gICAgICAgIGZlYXR1cmVOYW1lcyA9IFtdO1xuICAgICAgICBmZWF0dXJlID0gdGVzdHNbZmVhdHVyZUlkeF07XG4gICAgICAgIC8vIHJ1biB0aGUgdGVzdCwgdGhyb3cgdGhlIHJldHVybiB2YWx1ZSBpbnRvIHRoZSBNb2Rlcm5penIsXG4gICAgICAgIC8vIHRoZW4gYmFzZWQgb24gdGhhdCBib29sZWFuLCBkZWZpbmUgYW4gYXBwcm9wcmlhdGUgY2xhc3NOYW1lXG4gICAgICAgIC8vIGFuZCBwdXNoIGl0IGludG8gYW4gYXJyYXkgb2YgY2xhc3NlcyB3ZSdsbCBqb2luIGxhdGVyLlxuICAgICAgICAvL1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBuYW1lLCBpdCdzIGFuICdhc3luYycgdGVzdCB0aGF0IGlzIHJ1bixcbiAgICAgICAgLy8gYnV0IG5vdCBkaXJlY3RseSBhZGRlZCB0byB0aGUgb2JqZWN0LiBUaGF0IHNob3VsZFxuICAgICAgICAvLyBiZSBkb25lIHdpdGggYSBwb3N0LXJ1biBhZGRUZXN0IGNhbGwuXG4gICAgICAgIGlmIChmZWF0dXJlLm5hbWUpIHtcbiAgICAgICAgICBmZWF0dXJlTmFtZXMucHVzaChmZWF0dXJlLm5hbWUudG9Mb3dlckNhc2UoKSk7XG5cbiAgICAgICAgICBpZiAoZmVhdHVyZS5vcHRpb25zICYmIGZlYXR1cmUub3B0aW9ucy5hbGlhc2VzICYmIGZlYXR1cmUub3B0aW9ucy5hbGlhc2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gQWRkIGFsbCB0aGUgYWxpYXNlcyBpbnRvIHRoZSBuYW1lcyBsaXN0XG4gICAgICAgICAgICBmb3IgKGFsaWFzSWR4ID0gMDsgYWxpYXNJZHggPCBmZWF0dXJlLm9wdGlvbnMuYWxpYXNlcy5sZW5ndGg7IGFsaWFzSWR4KyspIHtcbiAgICAgICAgICAgICAgZmVhdHVyZU5hbWVzLnB1c2goZmVhdHVyZS5vcHRpb25zLmFsaWFzZXNbYWxpYXNJZHhdLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJ1biB0aGUgdGVzdCwgb3IgdXNlIHRoZSByYXcgdmFsdWUgaWYgaXQncyBub3QgYSBmdW5jdGlvblxuICAgICAgICByZXN1bHQgPSBpcyhmZWF0dXJlLmZuLCAnZnVuY3Rpb24nKSA/IGZlYXR1cmUuZm4oKSA6IGZlYXR1cmUuZm47XG5cbiAgICAgICAgLy8gU2V0IGVhY2ggb2YgdGhlIG5hbWVzIG9uIHRoZSBNb2Rlcm5penIgb2JqZWN0XG4gICAgICAgIGZvciAobmFtZUlkeCA9IDA7IG5hbWVJZHggPCBmZWF0dXJlTmFtZXMubGVuZ3RoOyBuYW1lSWR4KyspIHtcbiAgICAgICAgICBmZWF0dXJlTmFtZSA9IGZlYXR1cmVOYW1lc1tuYW1lSWR4XTtcbiAgICAgICAgICAvLyBTdXBwb3J0IGRvdCBwcm9wZXJ0aWVzIGFzIHN1YiB0ZXN0cy4gV2UgZG9uJ3QgZG8gY2hlY2tpbmcgdG8gbWFrZSBzdXJlXG4gICAgICAgICAgLy8gdGhhdCB0aGUgaW1wbGllZCBwYXJlbnQgdGVzdHMgaGF2ZSBiZWVuIGFkZGVkLiBZb3UgbXVzdCBjYWxsIHRoZW0gaW5cbiAgICAgICAgICAvLyBvcmRlciAoZWl0aGVyIGluIHRoZSB0ZXN0LCBvciBtYWtlIHRoZSBwYXJlbnQgdGVzdCBhIGRlcGVuZGVuY3kpLlxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gQ2FwIGl0IHRvIFRXTyB0byBtYWtlIHRoZSBsb2dpYyBzaW1wbGUgYW5kIGJlY2F1c2Ugd2hvIG5lZWRzIHRoYXQga2luZCBvZiBzdWJ0ZXN0aW5nXG4gICAgICAgICAgLy8gaGFzaHRhZyBmYW1vdXMgbGFzdCB3b3Jkc1xuICAgICAgICAgIGZlYXR1cmVOYW1lU3BsaXQgPSBmZWF0dXJlTmFtZS5zcGxpdCgnLicpO1xuXG4gICAgICAgICAgaWYgKGZlYXR1cmVOYW1lU3BsaXQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBNb2Rlcm5penJbZmVhdHVyZU5hbWVTcGxpdFswXV0gPSByZXN1bHQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNhc3QgdG8gYSBCb29sZWFuLCBpZiBub3Qgb25lIGFscmVhZHkgb3IgaWYgaXQgZG9lc250IGV4aXN0IHlldCAobGlrZSBpbnB1dHR5cGVzKVxuICAgICAgICAgICAgaWYgKCFNb2Rlcm5penJbZmVhdHVyZU5hbWVTcGxpdFswXV0gfHwgTW9kZXJuaXpyW2ZlYXR1cmVOYW1lU3BsaXRbMF1dICYmICEoTW9kZXJuaXpyW2ZlYXR1cmVOYW1lU3BsaXRbMF1dIGluc3RhbmNlb2YgQm9vbGVhbikpIHtcbiAgICAgICAgICAgICAgTW9kZXJuaXpyW2ZlYXR1cmVOYW1lU3BsaXRbMF1dID0gbmV3IEJvb2xlYW4oTW9kZXJuaXpyW2ZlYXR1cmVOYW1lU3BsaXRbMF1dKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTW9kZXJuaXpyW2ZlYXR1cmVOYW1lU3BsaXRbMF1dW2ZlYXR1cmVOYW1lU3BsaXRbMV1dID0gcmVzdWx0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNsYXNzZXMucHVzaCgocmVzdWx0ID8gJycgOiAnbm8tJykgKyBmZWF0dXJlTmFtZVNwbGl0LmpvaW4oJy0nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgO1xuXG4gIC8qKlxuICAgKiBkb2NFbGVtZW50IGlzIGEgY29udmVuaWVuY2Ugd3JhcHBlciB0byBncmFiIHRoZSByb290IGVsZW1lbnQgb2YgdGhlIGRvY3VtZW50XG4gICAqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8U1ZHRWxlbWVudH0gVGhlIHJvb3QgZWxlbWVudCBvZiB0aGUgZG9jdW1lbnRcbiAgICovXG4gIHZhciBkb2NFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBoZWxwZXIgdG8gY2hlY2sgaWYgdGhlIGRvY3VtZW50IHdlIGFyZSBydW5uaW5nIGluIGlzIGFuIFNWRyBkb2N1bWVudFxuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICB2YXIgaXNTVkcgPSBkb2NFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnO1xuXG4gIFxuXG4gIC8qKlxuICAgKiBzZXRDbGFzc2VzIHRha2VzIGFuIGFycmF5IG9mIGNsYXNzIG5hbWVzIGFuZCBhZGRzIHRoZW0gdG8gdGhlIHJvb3QgZWxlbWVudFxuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIHNldENsYXNzZXNcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NlcyAtIEFycmF5IG9mIGNsYXNzIG5hbWVzXG4gICAqL1xuICAvLyBQYXNzIGluIGFuIGFuZCBhcnJheSBvZiBjbGFzcyBuYW1lcywgZS5nLjpcbiAgLy8gIFsnbm8td2VicCcsICdib3JkZXJyYWRpdXMnLCAuLi5dXG4gIGZ1bmN0aW9uIHNldENsYXNzZXMoY2xhc3Nlcykge1xuICAgIHZhciBjbGFzc05hbWUgPSBkb2NFbGVtZW50LmNsYXNzTmFtZTtcbiAgICB2YXIgY2xhc3NQcmVmaXggPSBNb2Rlcm5penIuX2NvbmZpZy5jbGFzc1ByZWZpeCB8fCAnJztcblxuICAgIGlmIChpc1NWRykge1xuICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLmJhc2VWYWw7XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIGBuby1qc2AgdG8gYGpzYCAoaW5kZXBlbmRlbnRseSBvZiB0aGUgYGVuYWJsZUNsYXNzZXNgIG9wdGlvbilcbiAgICAvLyBIYW5kbGUgY2xhc3NQcmVmaXggb24gdGhpcyB0b29cbiAgICBpZiAoTW9kZXJuaXpyLl9jb25maWcuZW5hYmxlSlNDbGFzcykge1xuICAgICAgdmFyIHJlSlMgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgY2xhc3NQcmVmaXggKyAnbm8tanMoXFxcXHN8JCknKTtcbiAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKHJlSlMsICckMScgKyBjbGFzc1ByZWZpeCArICdqcyQyJyk7XG4gICAgfVxuXG4gICAgaWYgKE1vZGVybml6ci5fY29uZmlnLmVuYWJsZUNsYXNzZXMpIHtcbiAgICAgIC8vIEFkZCB0aGUgbmV3IGNsYXNzZXNcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzUHJlZml4ICsgY2xhc3Nlcy5qb2luKCcgJyArIGNsYXNzUHJlZml4KTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1NWRykge1xuICAgICAgICBkb2NFbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsID0gY2xhc3NOYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgO1xuXG4gIC8qKlxuICAgKiBoYXNPd25Qcm9wIGlzIGEgc2hpbSBmb3IgaGFzT3duUHJvcGVydHkgdGhhdCBpcyBuZWVkZWQgZm9yIFNhZmFyaSAyLjAgc3VwcG9ydFxuICAgKlxuICAgKiBAYXV0aG9yIGthbmdheFxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIGhhc093blByb3BcbiAgICogQHBhcmFtIHtvYmplY3R9IG9iamVjdCAtIFRoZSBvYmplY3QgdG8gY2hlY2sgZm9yIGEgcHJvcGVydHlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IC0gVGhlIHByb3BlcnR5IHRvIGNoZWNrIGZvclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG5cbiAgLy8gaGFzT3duUHJvcGVydHkgc2hpbSBieSBrYW5nYXggbmVlZGVkIGZvciBTYWZhcmkgMi4wIHN1cHBvcnRcbiAgdmFyIGhhc093blByb3A7XG5cbiAgKGZ1bmN0aW9uKCkge1xuICAgIHZhciBfaGFzT3duUHJvcGVydHkgPSAoe30pLmhhc093blByb3BlcnR5O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgLyogd2UgaGF2ZSBubyB3YXkgb2YgdGVzdGluZyBJRSA1LjUgb3Igc2FmYXJpIDIsXG4gICAgICogc28ganVzdCBhc3N1bWUgdGhlIGVsc2UgZ2V0cyBoaXQgKi9cbiAgICBpZiAoIWlzKF9oYXNPd25Qcm9wZXJ0eSwgJ3VuZGVmaW5lZCcpICYmICFpcyhfaGFzT3duUHJvcGVydHkuY2FsbCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICBoYXNPd25Qcm9wID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gX2hhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7XG4gICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGhhc093blByb3AgPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IC8qIHllcywgdGhpcyBjYW4gZ2l2ZSBmYWxzZSBwb3NpdGl2ZXMvbmVnYXRpdmVzLCBidXQgbW9zdCBvZiB0aGUgdGltZSB3ZSBkb24ndCBjYXJlIGFib3V0IHRob3NlICovXG4gICAgICAgIHJldHVybiAoKHByb3BlcnR5IGluIG9iamVjdCkgJiYgaXMob2JqZWN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZVtwcm9wZXJ0eV0sICd1bmRlZmluZWQnKSk7XG4gICAgICB9O1xuICAgIH1cbiAgfSkoKTtcblxuICBcblxuXG4gIC8vIF9sIHRyYWNrcyBsaXN0ZW5lcnMgZm9yIGFzeW5jIHRlc3RzLCBhcyB3ZWxsIGFzIHRlc3RzIHRoYXQgZXhlY3V0ZSBhZnRlciB0aGUgaW5pdGlhbCBydW5cbiAgTW9kZXJuaXpyUHJvdG8uX2wgPSB7fTtcblxuICAvKipcbiAgICogTW9kZXJuaXpyLm9uIGlzIGEgd2F5IHRvIGxpc3RlbiBmb3IgdGhlIGNvbXBsZXRpb24gb2YgYXN5bmMgdGVzdHMuIEJlaW5nXG4gICAqIGFzeW5jaHJvbm91cywgdGhleSBtYXkgbm90IGZpbmlzaCBiZWZvcmUgeW91ciBzY3JpcHRzIHJ1bi4gQXMgYSByZXN1bHQgeW91XG4gICAqIHdpbGwgZ2V0IGEgcG9zc2libHkgZmFsc2UgbmVnYXRpdmUgYHVuZGVmaW5lZGAgdmFsdWUuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBNb2Rlcm5penJcbiAgICogQG5hbWUgTW9kZXJuaXpyLm9uXG4gICAqIEBhY2Nlc3MgcHVibGljXG4gICAqIEBmdW5jdGlvbiBvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmVhdHVyZSAtIFN0cmluZyBuYW1lIG9mIHRoZSBmZWF0dXJlIGRldGVjdFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiAtIENhbGxiYWNrIGZ1bmN0aW9uIHJldHVybmluZyBhIEJvb2xlYW4gLSB0cnVlIGlmIGZlYXR1cmUgaXMgc3VwcG9ydGVkLCBmYWxzZSBpZiBub3RcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIE1vZGVybml6ci5vbignZmxhc2gnLCBmdW5jdGlvbiggcmVzdWx0ICkge1xuICAgKiAgIGlmIChyZXN1bHQpIHtcbiAgICogICAgLy8gdGhlIGJyb3dzZXIgaGFzIGZsYXNoXG4gICAqICAgfSBlbHNlIHtcbiAgICogICAgIC8vIHRoZSBicm93c2VyIGRvZXMgbm90IGhhdmUgZmxhc2hcbiAgICogICB9XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIE1vZGVybml6clByb3RvLm9uID0gZnVuY3Rpb24oZmVhdHVyZSwgY2IpIHtcbiAgICAvLyBDcmVhdGUgdGhlIGxpc3Qgb2YgbGlzdGVuZXJzIGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICBpZiAoIXRoaXMuX2xbZmVhdHVyZV0pIHtcbiAgICAgIHRoaXMuX2xbZmVhdHVyZV0gPSBbXTtcbiAgICB9XG5cbiAgICAvLyBQdXNoIHRoaXMgdGVzdCBvbiB0byB0aGUgbGlzdGVuZXIgbGlzdFxuICAgIHRoaXMuX2xbZmVhdHVyZV0ucHVzaChjYik7XG5cbiAgICAvLyBJZiBpdCdzIGFscmVhZHkgYmVlbiByZXNvbHZlZCwgdHJpZ2dlciBpdCBvbiBuZXh0IHRpY2tcbiAgICBpZiAoTW9kZXJuaXpyLmhhc093blByb3BlcnR5KGZlYXR1cmUpKSB7XG4gICAgICAvLyBOZXh0IFRpY2tcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIE1vZGVybml6ci5fdHJpZ2dlcihmZWF0dXJlLCBNb2Rlcm5penJbZmVhdHVyZV0pO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBfdHJpZ2dlciBpcyB0aGUgcHJpdmF0ZSBmdW5jdGlvbiB1c2VkIHRvIHNpZ25hbCB0ZXN0IGNvbXBsZXRpb24gYW5kIHJ1biBhbnlcbiAgICogY2FsbGJhY2tzIHJlZ2lzdGVyZWQgdGhyb3VnaCBbTW9kZXJuaXpyLm9uXSgjbW9kZXJuaXpyLW9uKVxuICAgKlxuICAgKiBAbWVtYmVyT2YgTW9kZXJuaXpyXG4gICAqIEBuYW1lIE1vZGVybml6ci5fdHJpZ2dlclxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIF90cmlnZ2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmZWF0dXJlIC0gc3RyaW5nIG5hbWUgb2YgdGhlIGZlYXR1cmUgZGV0ZWN0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb258Ym9vbGVhbn0gW3Jlc10gLSBBIGZlYXR1cmUgZGV0ZWN0aW9uIGZ1bmN0aW9uLCBvciB0aGUgYm9vbGVhbiA9XG4gICAqIHJlc3VsdCBvZiBhIGZlYXR1cmUgZGV0ZWN0aW9uIGZ1bmN0aW9uXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgTW9kZXJuaXpyUHJvdG8uX3RyaWdnZXIgPSBmdW5jdGlvbihmZWF0dXJlLCByZXMpIHtcbiAgICBpZiAoIXRoaXMuX2xbZmVhdHVyZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2JzID0gdGhpcy5fbFtmZWF0dXJlXTtcblxuICAgIC8vIEZvcmNlIGFzeW5jXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpLCBjYjtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2IgPSBjYnNbaV07XG4gICAgICAgIGNiKHJlcyk7XG4gICAgICB9XG4gICAgfSwgMCk7XG5cbiAgICAvLyBEb24ndCB0cmlnZ2VyIHRoZXNlIGFnYWluXG4gICAgZGVsZXRlIHRoaXMuX2xbZmVhdHVyZV07XG4gIH07XG5cbiAgLyoqXG4gICAqIGFkZFRlc3QgYWxsb3dzIHlvdSB0byBkZWZpbmUgeW91ciBvd24gZmVhdHVyZSBkZXRlY3RzIHRoYXQgYXJlIG5vdCBjdXJyZW50bHlcbiAgICogaW5jbHVkZWQgaW4gTW9kZXJuaXpyICh1bmRlciB0aGUgY292ZXJzIGl0J3MgdGhlIGV4YWN0IHNhbWUgY29kZSBNb2Rlcm5penJcbiAgICogdXNlcyBmb3IgaXRzIG93biBbZmVhdHVyZSBkZXRlY3Rpb25zXShodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci90cmVlL21hc3Rlci9mZWF0dXJlLWRldGVjdHMpKS5cbiAgICogSnVzdCBsaWtlIHRoZSBvZmZpY2lhbCBkZXRlY3RzLCB0aGUgcmVzdWx0XG4gICAqIHdpbGwgYmUgYWRkZWQgb250byB0aGUgTW9kZXJuaXpyIG9iamVjdCwgYXMgd2VsbCBhcyBhbiBhcHByb3ByaWF0ZSBjbGFzc05hbWUgc2V0IG9uXG4gICAqIHRoZSBodG1sIGVsZW1lbnQgd2hlbiBjb25maWd1cmVkIHRvIGRvIHNvXG4gICAqXG4gICAqIEBtZW1iZXJPZiBNb2Rlcm5penJcbiAgICogQG5hbWUgTW9kZXJuaXpyLmFkZFRlc3RcbiAgICogQG9wdGlvbk5hbWUgTW9kZXJuaXpyLmFkZFRlc3QoKVxuICAgKiBAb3B0aW9uUHJvcCBhZGRUZXN0XG4gICAqIEBhY2Nlc3MgcHVibGljXG4gICAqIEBmdW5jdGlvbiBhZGRUZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZmVhdHVyZSAtIFRoZSBzdHJpbmcgbmFtZSBvZiB0aGUgZmVhdHVyZSBkZXRlY3QsIG9yIGFuXG4gICAqIG9iamVjdCBvZiBmZWF0dXJlIGRldGVjdCBuYW1lcyBhbmQgdGVzdFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufGJvb2xlYW59IHRlc3QgLSBGdW5jdGlvbiByZXR1cm5pbmcgdHJ1ZSBpZiBmZWF0dXJlIGlzIHN1cHBvcnRlZCxcbiAgICogZmFsc2UgaWYgbm90LiBPdGhlcndpc2UgYSBib29sZWFuIHJlcHJlc2VudGluZyB0aGUgcmVzdWx0cyBvZiBhIGZlYXR1cmUgZGV0ZWN0aW9uXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBNb2Rlcm5penIgb2JqZWN0IHRvIGFsbG93IGNoYWluaW5nXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIFRoZSBtb3N0IGNvbW1vbiB3YXkgb2YgY3JlYXRpbmcgeW91ciBvd24gZmVhdHVyZSBkZXRlY3RzIGlzIGJ5IGNhbGxpbmdcbiAgICogYE1vZGVybml6ci5hZGRUZXN0YCB3aXRoIGEgc3RyaW5nIChwcmVmZXJhYmx5IGp1c3QgbG93ZXJjYXNlLCB3aXRob3V0IGFueVxuICAgKiBwdW5jdHVhdGlvbiksIGFuZCBhIGZ1bmN0aW9uIHlvdSB3YW50IGV4ZWN1dGVkIHRoYXQgd2lsbCByZXR1cm4gYSBib29sZWFuIHJlc3VsdFxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBNb2Rlcm5penIuYWRkVGVzdCgnaXRzVHVlc2RheScsIGZ1bmN0aW9uKCkge1xuICAgKiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICAgKiAgcmV0dXJuIGQuZ2V0RGF5KCkgPT09IDI7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogV2hlbiB0aGUgYWJvdmUgaXMgcnVuLCBpdCB3aWxsIHNldCBNb2Rlcm5penIuaXRzdHVlc2RheSB0byBgdHJ1ZWAgd2hlbiBpdCBpcyB0dWVzZGF5LFxuICAgKiBhbmQgdG8gYGZhbHNlYCBldmVyeSBvdGhlciBkYXkgb2YgdGhlIHdlZWsuIE9uZSB0aGluZyB0byBub3RpY2UgaXMgdGhhdCB0aGUgbmFtZXMgb2ZcbiAgICogZmVhdHVyZSBkZXRlY3QgZnVuY3Rpb25zIGFyZSBhbHdheXMgbG93ZXJjYXNlZCB3aGVuIGFkZGVkIHRvIHRoZSBNb2Rlcm5penIgb2JqZWN0LiBUaGF0XG4gICAqIG1lYW5zIHRoYXQgYE1vZGVybml6ci5pdHNUdWVzZGF5YCB3aWxsIG5vdCBleGlzdCwgYnV0IGBNb2Rlcm5penIuaXRzdHVlc2RheWAgd2lsbC5cbiAgICpcbiAgICpcbiAgICogIFNpbmNlIHdlIG9ubHkgbG9vayBhdCB0aGUgcmV0dXJuZWQgdmFsdWUgZnJvbSBhbnkgZmVhdHVyZSBkZXRlY3Rpb24gZnVuY3Rpb24sXG4gICAqICB5b3UgZG8gbm90IG5lZWQgdG8gYWN0dWFsbHkgdXNlIGEgZnVuY3Rpb24uIEZvciBzaW1wbGUgZGV0ZWN0aW9ucywganVzdCBwYXNzaW5nXG4gICAqICBpbiBhIHN0YXRlbWVudCB0aGF0IHdpbGwgcmV0dXJuIGEgYm9vbGVhbiB2YWx1ZSB3b3JrcyBqdXN0IGZpbmUuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIE1vZGVybml6ci5hZGRUZXN0KCdoYXNqcXVlcnknLCAnalF1ZXJ5JyBpbiB3aW5kb3cpO1xuICAgKiBgYGBcbiAgICpcbiAgICogSnVzdCBsaWtlIGJlZm9yZSwgd2hlbiB0aGUgYWJvdmUgcnVucyBgTW9kZXJuaXpyLmhhc2pxdWVyeWAgd2lsbCBiZSB0cnVlIGlmXG4gICAqIGpRdWVyeSBoYXMgYmVlbiBpbmNsdWRlZCBvbiB0aGUgcGFnZS4gTm90IHVzaW5nIGEgZnVuY3Rpb24gc2F2ZXMgYSBzbWFsbCBhbW91bnRcbiAgICogb2Ygb3ZlcmhlYWQgZm9yIHRoZSBicm93c2VyLCBhcyB3ZWxsIGFzIG1ha2luZyB5b3VyIGNvZGUgbXVjaCBtb3JlIHJlYWRhYmxlLlxuICAgKlxuICAgKiBGaW5hbGx5LCB5b3UgYWxzbyBoYXZlIHRoZSBhYmlsaXR5IHRvIHBhc3MgaW4gYW4gb2JqZWN0IG9mIGZlYXR1cmUgbmFtZXMgYW5kXG4gICAqIHRoZWlyIHRlc3RzLiBUaGlzIGlzIGhhbmR5IGlmIHlvdSB3YW50IHRvIGFkZCBtdWx0aXBsZSBkZXRlY3Rpb25zIGluIG9uZSBnby5cbiAgICogVGhlIGtleXMgc2hvdWxkIGFsd2F5cyBiZSBhIHN0cmluZywgYW5kIHRoZSB2YWx1ZSBjYW4gYmUgZWl0aGVyIGEgYm9vbGVhbiBvclxuICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBib29sZWFuLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiB2YXIgZGV0ZWN0cyA9IHtcbiAgICogICdoYXNqcXVlcnknOiAnalF1ZXJ5JyBpbiB3aW5kb3csXG4gICAqICAnaXRzdHVlc2RheSc6IGZ1bmN0aW9uKCkge1xuICAgKiAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gICAqICAgIHJldHVybiBkLmdldERheSgpID09PSAyO1xuICAgKiAgfVxuICAgKiB9XG4gICAqXG4gICAqIE1vZGVybml6ci5hZGRUZXN0KGRldGVjdHMpO1xuICAgKiBgYGBcbiAgICpcbiAgICogVGhlcmUgaXMgcmVhbGx5IG5vIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgZmlyc3QgbWV0aG9kcyBhbmQgdGhpcyBvbmUsIGl0IGlzXG4gICAqIGp1c3QgYSBjb252ZW5pZW5jZSB0byBsZXQgeW91IHdyaXRlIG1vcmUgcmVhZGFibGUgY29kZS5cbiAgICovXG4gIGZ1bmN0aW9uIGFkZFRlc3QoZmVhdHVyZSwgdGVzdCkge1xuXG4gICAgaWYgKHR5cGVvZiBmZWF0dXJlID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yICh2YXIga2V5IGluIGZlYXR1cmUpIHtcbiAgICAgICAgaWYgKGhhc093blByb3AoZmVhdHVyZSwga2V5KSkge1xuICAgICAgICAgIGFkZFRlc3Qoa2V5LCBmZWF0dXJlWyBrZXkgXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuXG4gICAgICBmZWF0dXJlID0gZmVhdHVyZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdmFyIGZlYXR1cmVOYW1lU3BsaXQgPSBmZWF0dXJlLnNwbGl0KCcuJyk7XG4gICAgICB2YXIgbGFzdCA9IE1vZGVybml6cltmZWF0dXJlTmFtZVNwbGl0WzBdXTtcblxuICAgICAgLy8gQWdhaW4sIHdlIGRvbid0IGNoZWNrIGZvciBwYXJlbnQgdGVzdCBleGlzdGVuY2UuIEdldCB0aGF0IHJpZ2h0LCB0aG91Z2guXG4gICAgICBpZiAoZmVhdHVyZU5hbWVTcGxpdC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgbGFzdCA9IGxhc3RbZmVhdHVyZU5hbWVTcGxpdFsxXV07XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGFzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gd2UncmUgZ29pbmcgdG8gcXVpdCBpZiB5b3UncmUgdHJ5aW5nIHRvIG92ZXJ3cml0ZSBhbiBleGlzdGluZyB0ZXN0XG4gICAgICAgIC8vIGlmIHdlIHdlcmUgdG8gYWxsb3cgaXQsIHdlJ2QgZG8gdGhpczpcbiAgICAgICAgLy8gICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiXFxcXGIobm8tKT9cIiArIGZlYXR1cmUgKyBcIlxcXFxiXCIpO1xuICAgICAgICAvLyAgIGRvY0VsZW1lbnQuY2xhc3NOYW1lID0gZG9jRWxlbWVudC5jbGFzc05hbWUucmVwbGFjZSggcmUsICcnICk7XG4gICAgICAgIC8vIGJ1dCwgbm8gcmx5LCBzdHVmZiAnZW0uXG4gICAgICAgIHJldHVybiBNb2Rlcm5penI7XG4gICAgICB9XG5cbiAgICAgIHRlc3QgPSB0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJyA/IHRlc3QoKSA6IHRlc3Q7XG5cbiAgICAgIC8vIFNldCB0aGUgdmFsdWUgKHRoaXMgaXMgdGhlIG1hZ2ljLCByaWdodCBoZXJlKS5cbiAgICAgIGlmIChmZWF0dXJlTmFtZVNwbGl0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBNb2Rlcm5penJbZmVhdHVyZU5hbWVTcGxpdFswXV0gPSB0ZXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY2FzdCB0byBhIEJvb2xlYW4sIGlmIG5vdCBvbmUgYWxyZWFkeVxuICAgICAgICBpZiAoTW9kZXJuaXpyW2ZlYXR1cmVOYW1lU3BsaXRbMF1dICYmICEoTW9kZXJuaXpyW2ZlYXR1cmVOYW1lU3BsaXRbMF1dIGluc3RhbmNlb2YgQm9vbGVhbikpIHtcbiAgICAgICAgICBNb2Rlcm5penJbZmVhdHVyZU5hbWVTcGxpdFswXV0gPSBuZXcgQm9vbGVhbihNb2Rlcm5penJbZmVhdHVyZU5hbWVTcGxpdFswXV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgTW9kZXJuaXpyW2ZlYXR1cmVOYW1lU3BsaXRbMF1dW2ZlYXR1cmVOYW1lU3BsaXRbMV1dID0gdGVzdDtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IGEgc2luZ2xlIGNsYXNzIChlaXRoZXIgYGZlYXR1cmVgIG9yIGBuby1mZWF0dXJlYClcbiAgICAgIHNldENsYXNzZXMoWyghIXRlc3QgJiYgdGVzdCAhPT0gZmFsc2UgPyAnJyA6ICduby0nKSArIGZlYXR1cmVOYW1lU3BsaXQuam9pbignLScpXSk7XG5cbiAgICAgIC8vIFRyaWdnZXIgdGhlIGV2ZW50XG4gICAgICBNb2Rlcm5penIuX3RyaWdnZXIoZmVhdHVyZSwgdGVzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1vZGVybml6cjsgLy8gYWxsb3cgY2hhaW5pbmcuXG4gIH1cblxuICAvLyBBZnRlciBhbGwgdGhlIHRlc3RzIGFyZSBydW4sIGFkZCBzZWxmIHRvIHRoZSBNb2Rlcm5penIgcHJvdG90eXBlXG4gIE1vZGVybml6ci5fcS5wdXNoKGZ1bmN0aW9uKCkge1xuICAgIE1vZGVybml6clByb3RvLmFkZFRlc3QgPSBhZGRUZXN0O1xuICB9KTtcblxuICBcblxuXG4gIC8qKlxuICAgKiBAb3B0aW9uTmFtZSBodG1sNXByaW50c2hpdlxuICAgKiBAb3B0aW9uUHJvcCBodG1sNXByaW50c2hpdlxuICAgKi9cblxuICAvLyBUYWtlIHRoZSBodG1sNSB2YXJpYWJsZSBvdXQgb2YgdGhlIGh0bWw1c2hpdiBzY29wZSBzbyB3ZSBjYW4gcmV0dXJuIGl0LlxuICB2YXIgaHRtbDU7XG4gIGlmICghaXNTVkcpIHtcbiAgICAvKipcbiAgICAgKiBAcHJlc2VydmUgSFRNTDUgU2hpdiAzLjcuMyB8IEBhZmFya2FzIEBqZGFsdG9uIEBqb25fbmVhbCBAcmVtIHwgTUlUL0dQTDIgTGljZW5zZWRcbiAgICAgKi9cbiAgICA7KGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQpIHtcbiAgICAgIC8qanNoaW50IGV2aWw6dHJ1ZSAqL1xuICAgICAgLyoqIHZlcnNpb24gKi9cbiAgICAgIHZhciB2ZXJzaW9uID0gJzMuNy4zJztcblxuICAgICAgLyoqIFByZXNldCBvcHRpb25zICovXG4gICAgICB2YXIgb3B0aW9ucyA9IHdpbmRvdy5odG1sNSB8fCB7fTtcblxuICAgICAgLyoqIFVzZWQgdG8gc2tpcCBwcm9ibGVtIGVsZW1lbnRzICovXG4gICAgICB2YXIgcmVTa2lwID0gL148fF4oPzpidXR0b258bWFwfHNlbGVjdHx0ZXh0YXJlYXxvYmplY3R8aWZyYW1lfG9wdGlvbnxvcHRncm91cCkkL2k7XG5cbiAgICAgIC8qKiBOb3QgYWxsIGVsZW1lbnRzIGNhbiBiZSBjbG9uZWQgaW4gSUUgKiovXG4gICAgICB2YXIgc2F2ZUNsb25lcyA9IC9eKD86YXxifGNvZGV8ZGl2fGZpZWxkc2V0fGgxfGgyfGgzfGg0fGg1fGg2fGl8bGFiZWx8bGl8b2x8cHxxfHNwYW58c3Ryb25nfHN0eWxlfHRhYmxlfHRib2R5fHRkfHRofHRyfHVsKSQvaTtcblxuICAgICAgLyoqIERldGVjdCB3aGV0aGVyIHRoZSBicm93c2VyIHN1cHBvcnRzIGRlZmF1bHQgaHRtbDUgc3R5bGVzICovXG4gICAgICB2YXIgc3VwcG9ydHNIdG1sNVN0eWxlcztcblxuICAgICAgLyoqIE5hbWUgb2YgdGhlIGV4cGFuZG8sIHRvIHdvcmsgd2l0aCBtdWx0aXBsZSBkb2N1bWVudHMgb3IgdG8gcmUtc2hpdiBvbmUgZG9jdW1lbnQgKi9cbiAgICAgIHZhciBleHBhbmRvID0gJ19odG1sNXNoaXYnO1xuXG4gICAgICAvKiogVGhlIGlkIGZvciB0aGUgdGhlIGRvY3VtZW50cyBleHBhbmRvICovXG4gICAgICB2YXIgZXhwYW5JRCA9IDA7XG5cbiAgICAgIC8qKiBDYWNoZWQgZGF0YSBmb3IgZWFjaCBkb2N1bWVudCAqL1xuICAgICAgdmFyIGV4cGFuZG9EYXRhID0ge307XG5cbiAgICAgIC8qKiBEZXRlY3Qgd2hldGhlciB0aGUgYnJvd3NlciBzdXBwb3J0cyB1bmtub3duIGVsZW1lbnRzICovXG4gICAgICB2YXIgc3VwcG9ydHNVbmtub3duRWxlbWVudHM7XG5cbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICBhLmlubmVySFRNTCA9ICc8eHl6PjwveHl6Pic7XG4gICAgICAgICAgLy9pZiB0aGUgaGlkZGVuIHByb3BlcnR5IGlzIGltcGxlbWVudGVkIHdlIGNhbiBhc3N1bWUsIHRoYXQgdGhlIGJyb3dzZXIgc3VwcG9ydHMgYmFzaWMgSFRNTDUgU3R5bGVzXG4gICAgICAgICAgc3VwcG9ydHNIdG1sNVN0eWxlcyA9ICgnaGlkZGVuJyBpbiBhKTtcblxuICAgICAgICAgIHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzID0gYS5jaGlsZE5vZGVzLmxlbmd0aCA9PSAxIHx8IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGFzc2lnbiBhIGZhbHNlIHBvc2l0aXZlIGlmIHVuYWJsZSB0byBzaGl2XG4gICAgICAgICAgICAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCkoJ2EnKTtcbiAgICAgICAgICAgIHZhciBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgdHlwZW9mIGZyYWcuY2xvbmVOb2RlID09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICAgIHR5cGVvZiBmcmFnLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQgPT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgICAgICAgdHlwZW9mIGZyYWcuY3JlYXRlRWxlbWVudCA9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KCkpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAvLyBhc3NpZ24gYSBmYWxzZSBwb3NpdGl2ZSBpZiBkZXRlY3Rpb24gZmFpbHMgPT4gdW5hYmxlIHRvIHNoaXZcbiAgICAgICAgICBzdXBwb3J0c0h0bWw1U3R5bGVzID0gdHJ1ZTtcbiAgICAgICAgICBzdXBwb3J0c1Vua25vd25FbGVtZW50cyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgfSgpKTtcblxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhIHN0eWxlIHNoZWV0IHdpdGggdGhlIGdpdmVuIENTUyB0ZXh0IGFuZCBhZGRzIGl0IHRvIHRoZSBkb2N1bWVudC5cbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAcGFyYW0ge0RvY3VtZW50fSBvd25lckRvY3VtZW50IFRoZSBkb2N1bWVudC5cbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjc3NUZXh0IFRoZSBDU1MgdGV4dC5cbiAgICAgICAqIEByZXR1cm5zIHtTdHlsZVNoZWV0fSBUaGUgc3R5bGUgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gYWRkU3R5bGVTaGVldChvd25lckRvY3VtZW50LCBjc3NUZXh0KSB7XG4gICAgICAgIHZhciBwID0gb3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXG4gICAgICAgICAgcGFyZW50ID0gb3duZXJEb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdIHx8IG93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICAgIHAuaW5uZXJIVE1MID0gJ3g8c3R5bGU+JyArIGNzc1RleHQgKyAnPC9zdHlsZT4nO1xuICAgICAgICByZXR1cm4gcGFyZW50Lmluc2VydEJlZm9yZShwLmxhc3RDaGlsZCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIGBodG1sNS5lbGVtZW50c2AgYXMgYW4gYXJyYXkuXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHJldHVybnMge0FycmF5fSBBbiBhcnJheSBvZiBzaGl2ZWQgZWxlbWVudCBub2RlIG5hbWVzLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBnZXRFbGVtZW50cygpIHtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gaHRtbDUuZWxlbWVudHM7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZWxlbWVudHMgPT0gJ3N0cmluZycgPyBlbGVtZW50cy5zcGxpdCgnICcpIDogZWxlbWVudHM7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRXh0ZW5kcyB0aGUgYnVpbHQtaW4gbGlzdCBvZiBodG1sNSBlbGVtZW50c1xuICAgICAgICogQG1lbWJlck9mIGh0bWw1XG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gbmV3RWxlbWVudHMgd2hpdGVzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvciBhcnJheSBvZiBuZXcgZWxlbWVudCBuYW1lcyB0byBzaGl2XG4gICAgICAgKiBAcGFyYW0ge0RvY3VtZW50fSBvd25lckRvY3VtZW50IFRoZSBjb250ZXh0IGRvY3VtZW50LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBhZGRFbGVtZW50cyhuZXdFbGVtZW50cywgb3duZXJEb2N1bWVudCkge1xuICAgICAgICB2YXIgZWxlbWVudHMgPSBodG1sNS5lbGVtZW50cztcbiAgICAgICAgaWYodHlwZW9mIGVsZW1lbnRzICE9ICdzdHJpbmcnKXtcbiAgICAgICAgICBlbGVtZW50cyA9IGVsZW1lbnRzLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YgbmV3RWxlbWVudHMgIT0gJ3N0cmluZycpe1xuICAgICAgICAgIG5ld0VsZW1lbnRzID0gbmV3RWxlbWVudHMuam9pbignICcpO1xuICAgICAgICB9XG4gICAgICAgIGh0bWw1LmVsZW1lbnRzID0gZWxlbWVudHMgKycgJysgbmV3RWxlbWVudHM7XG4gICAgICAgIHNoaXZEb2N1bWVudChvd25lckRvY3VtZW50KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRoZSBkYXRhIGFzc29jaWF0ZWQgdG8gdGhlIGdpdmVuIGRvY3VtZW50XG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHBhcmFtIHtEb2N1bWVudH0gb3duZXJEb2N1bWVudCBUaGUgZG9jdW1lbnQuXG4gICAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBBbiBvYmplY3Qgb2YgZGF0YS5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gZ2V0RXhwYW5kb0RhdGEob3duZXJEb2N1bWVudCkge1xuICAgICAgICB2YXIgZGF0YSA9IGV4cGFuZG9EYXRhW293bmVyRG9jdW1lbnRbZXhwYW5kb11dO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0ge307XG4gICAgICAgICAgZXhwYW5JRCsrO1xuICAgICAgICAgIG93bmVyRG9jdW1lbnRbZXhwYW5kb10gPSBleHBhbklEO1xuICAgICAgICAgIGV4cGFuZG9EYXRhW2V4cGFuSURdID0gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiByZXR1cm5zIGEgc2hpdmVkIGVsZW1lbnQgZm9yIHRoZSBnaXZlbiBub2RlTmFtZSBhbmQgZG9jdW1lbnRcbiAgICAgICAqIEBtZW1iZXJPZiBodG1sNVxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IG5vZGVOYW1lIG5hbWUgb2YgdGhlIGVsZW1lbnRcbiAgICAgICAqIEBwYXJhbSB7RG9jdW1lbnR9IG93bmVyRG9jdW1lbnQgVGhlIGNvbnRleHQgZG9jdW1lbnQuXG4gICAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgc2hpdmVkIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQobm9kZU5hbWUsIG93bmVyRG9jdW1lbnQsIGRhdGEpe1xuICAgICAgICBpZiAoIW93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICBvd25lckRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYoc3VwcG9ydHNVbmtub3duRWxlbWVudHMpe1xuICAgICAgICAgIHJldHVybiBvd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBnZXRFeHBhbmRvRGF0YShvd25lckRvY3VtZW50KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbm9kZTtcblxuICAgICAgICBpZiAoZGF0YS5jYWNoZVtub2RlTmFtZV0pIHtcbiAgICAgICAgICBub2RlID0gZGF0YS5jYWNoZVtub2RlTmFtZV0uY2xvbmVOb2RlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2F2ZUNsb25lcy50ZXN0KG5vZGVOYW1lKSkge1xuICAgICAgICAgIG5vZGUgPSAoZGF0YS5jYWNoZVtub2RlTmFtZV0gPSBkYXRhLmNyZWF0ZUVsZW0obm9kZU5hbWUpKS5jbG9uZU5vZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlID0gZGF0YS5jcmVhdGVFbGVtKG5vZGVOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF2b2lkIGFkZGluZyBzb21lIGVsZW1lbnRzIHRvIGZyYWdtZW50cyBpbiBJRSA8IDkgYmVjYXVzZVxuICAgICAgICAvLyAqIEF0dHJpYnV0ZXMgbGlrZSBgbmFtZWAgb3IgYHR5cGVgIGNhbm5vdCBiZSBzZXQvY2hhbmdlZCBvbmNlIGFuIGVsZW1lbnRcbiAgICAgICAgLy8gICBpcyBpbnNlcnRlZCBpbnRvIGEgZG9jdW1lbnQvZnJhZ21lbnRcbiAgICAgICAgLy8gKiBMaW5rIGVsZW1lbnRzIHdpdGggYHNyY2AgYXR0cmlidXRlcyB0aGF0IGFyZSBpbmFjY2Vzc2libGUsIGFzIHdpdGhcbiAgICAgICAgLy8gICBhIDQwMyByZXNwb25zZSwgd2lsbCBjYXVzZSB0aGUgdGFiL3dpbmRvdyB0byBjcmFzaFxuICAgICAgICAvLyAqIFNjcmlwdCBlbGVtZW50cyBhcHBlbmRlZCB0byBmcmFnbWVudHMgd2lsbCBleGVjdXRlIHdoZW4gdGhlaXIgYHNyY2BcbiAgICAgICAgLy8gICBvciBgdGV4dGAgcHJvcGVydHkgaXMgc2V0XG4gICAgICAgIHJldHVybiBub2RlLmNhbkhhdmVDaGlsZHJlbiAmJiAhcmVTa2lwLnRlc3Qobm9kZU5hbWUpICYmICFub2RlLnRhZ1VybiA/IGRhdGEuZnJhZy5hcHBlbmRDaGlsZChub2RlKSA6IG5vZGU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogcmV0dXJucyBhIHNoaXZlZCBEb2N1bWVudEZyYWdtZW50IGZvciB0aGUgZ2l2ZW4gZG9jdW1lbnRcbiAgICAgICAqIEBtZW1iZXJPZiBodG1sNVxuICAgICAgICogQHBhcmFtIHtEb2N1bWVudH0gb3duZXJEb2N1bWVudCBUaGUgY29udGV4dCBkb2N1bWVudC5cbiAgICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBzaGl2ZWQgRG9jdW1lbnRGcmFnbWVudC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gY3JlYXRlRG9jdW1lbnRGcmFnbWVudChvd25lckRvY3VtZW50LCBkYXRhKXtcbiAgICAgICAgaWYgKCFvd25lckRvY3VtZW50KSB7XG4gICAgICAgICAgb3duZXJEb2N1bWVudCA9IGRvY3VtZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmKHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzKXtcbiAgICAgICAgICByZXR1cm4gb3duZXJEb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IGRhdGEgfHwgZ2V0RXhwYW5kb0RhdGEob3duZXJEb2N1bWVudCk7XG4gICAgICAgIHZhciBjbG9uZSA9IGRhdGEuZnJhZy5jbG9uZU5vZGUoKSxcbiAgICAgICAgICBpID0gMCxcbiAgICAgICAgICBlbGVtcyA9IGdldEVsZW1lbnRzKCksXG4gICAgICAgICAgbCA9IGVsZW1zLmxlbmd0aDtcbiAgICAgICAgZm9yKDtpPGw7aSsrKXtcbiAgICAgICAgICBjbG9uZS5jcmVhdGVFbGVtZW50KGVsZW1zW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2hpdnMgdGhlIGBjcmVhdGVFbGVtZW50YCBhbmQgYGNyZWF0ZURvY3VtZW50RnJhZ21lbnRgIG1ldGhvZHMgb2YgdGhlIGRvY3VtZW50LlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqIEBwYXJhbSB7RG9jdW1lbnR8RG9jdW1lbnRGcmFnbWVudH0gb3duZXJEb2N1bWVudCBUaGUgZG9jdW1lbnQuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBvZiB0aGUgZG9jdW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIHNoaXZNZXRob2RzKG93bmVyRG9jdW1lbnQsIGRhdGEpIHtcbiAgICAgICAgaWYgKCFkYXRhLmNhY2hlKSB7XG4gICAgICAgICAgZGF0YS5jYWNoZSA9IHt9O1xuICAgICAgICAgIGRhdGEuY3JlYXRlRWxlbSA9IG93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudDtcbiAgICAgICAgICBkYXRhLmNyZWF0ZUZyYWcgPSBvd25lckRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQ7XG4gICAgICAgICAgZGF0YS5mcmFnID0gZGF0YS5jcmVhdGVGcmFnKCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIG93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uKG5vZGVOYW1lKSB7XG4gICAgICAgICAgLy9hYm9ydCBzaGl2XG4gICAgICAgICAgaWYgKCFodG1sNS5zaGl2TWV0aG9kcykge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuY3JlYXRlRWxlbShub2RlTmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KG5vZGVOYW1lLCBvd25lckRvY3VtZW50LCBkYXRhKTtcbiAgICAgICAgfTtcblxuICAgICAgICBvd25lckRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQgPSBGdW5jdGlvbignaCxmJywgJ3JldHVybiBmdW5jdGlvbigpeycgK1xuICAgICAgICAgICd2YXIgbj1mLmNsb25lTm9kZSgpLGM9bi5jcmVhdGVFbGVtZW50OycgK1xuICAgICAgICAgICdoLnNoaXZNZXRob2RzJiYoJyArXG4gICAgICAgICAgLy8gdW5yb2xsIHRoZSBgY3JlYXRlRWxlbWVudGAgY2FsbHNcbiAgICAgICAgICBnZXRFbGVtZW50cygpLmpvaW4oKS5yZXBsYWNlKC9bXFx3XFwtOl0rL2csIGZ1bmN0aW9uKG5vZGVOYW1lKSB7XG4gICAgICAgICAgICBkYXRhLmNyZWF0ZUVsZW0obm9kZU5hbWUpO1xuICAgICAgICAgICAgZGF0YS5mcmFnLmNyZWF0ZUVsZW1lbnQobm9kZU5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuICdjKFwiJyArIG5vZGVOYW1lICsgJ1wiKSc7XG4gICAgICAgICAgfSkgK1xuICAgICAgICAgICcpO3JldHVybiBufSdcbiAgICAgICAgKShodG1sNSwgZGF0YS5mcmFnKTtcbiAgICAgIH1cblxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAgIC8qKlxuICAgICAgICogU2hpdnMgdGhlIGdpdmVuIGRvY3VtZW50LlxuICAgICAgICogQG1lbWJlck9mIGh0bWw1XG4gICAgICAgKiBAcGFyYW0ge0RvY3VtZW50fSBvd25lckRvY3VtZW50IFRoZSBkb2N1bWVudCB0byBzaGl2LlxuICAgICAgICogQHJldHVybnMge0RvY3VtZW50fSBUaGUgc2hpdmVkIGRvY3VtZW50LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBzaGl2RG9jdW1lbnQob3duZXJEb2N1bWVudCkge1xuICAgICAgICBpZiAoIW93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICBvd25lckRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRhdGEgPSBnZXRFeHBhbmRvRGF0YShvd25lckRvY3VtZW50KTtcblxuICAgICAgICBpZiAoaHRtbDUuc2hpdkNTUyAmJiAhc3VwcG9ydHNIdG1sNVN0eWxlcyAmJiAhZGF0YS5oYXNDU1MpIHtcbiAgICAgICAgICBkYXRhLmhhc0NTUyA9ICEhYWRkU3R5bGVTaGVldChvd25lckRvY3VtZW50LFxuICAgICAgICAgICAgLy8gY29ycmVjdHMgYmxvY2sgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRTYvNy84LzlcbiAgICAgICAgICAgICdhcnRpY2xlLGFzaWRlLGRpYWxvZyxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsaGVhZGVyLGhncm91cCxtYWluLG5hdixzZWN0aW9ue2Rpc3BsYXk6YmxvY2t9JyArXG4gICAgICAgICAgICAvLyBhZGRzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUU2LzcvOC85XG4gICAgICAgICAgICAnbWFya3tiYWNrZ3JvdW5kOiNGRjA7Y29sb3I6IzAwMH0nICtcbiAgICAgICAgICAgIC8vIGhpZGVzIG5vbi1yZW5kZXJlZCBlbGVtZW50c1xuICAgICAgICAgICAgJ3RlbXBsYXRle2Rpc3BsYXk6bm9uZX0nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN1cHBvcnRzVW5rbm93bkVsZW1lbnRzKSB7XG4gICAgICAgICAgc2hpdk1ldGhvZHMob3duZXJEb2N1bWVudCwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG93bmVyRG9jdW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBgaHRtbDVgIG9iamVjdCBpcyBleHBvc2VkIHNvIHRoYXQgbW9yZSBlbGVtZW50cyBjYW4gYmUgc2hpdmVkIGFuZFxuICAgICAgICogZXhpc3Rpbmcgc2hpdmluZyBjYW4gYmUgZGV0ZWN0ZWQgb24gaWZyYW1lcy5cbiAgICAgICAqIEB0eXBlIE9iamVjdFxuICAgICAgICogQGV4YW1wbGVcbiAgICAgICAqXG4gICAgICAgKiAvLyBvcHRpb25zIGNhbiBiZSBjaGFuZ2VkIGJlZm9yZSB0aGUgc2NyaXB0IGlzIGluY2x1ZGVkXG4gICAgICAgKiBodG1sNSA9IHsgJ2VsZW1lbnRzJzogJ21hcmsgc2VjdGlvbicsICdzaGl2Q1NTJzogZmFsc2UsICdzaGl2TWV0aG9kcyc6IGZhbHNlIH07XG4gICAgICAgKi9cbiAgICAgIHZhciBodG1sNSA9IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gYXJyYXkgb3Igc3BhY2Ugc2VwYXJhdGVkIHN0cmluZyBvZiBub2RlIG5hbWVzIG9mIHRoZSBlbGVtZW50cyB0byBzaGl2LlxuICAgICAgICAgKiBAbWVtYmVyT2YgaHRtbDVcbiAgICAgICAgICogQHR5cGUgQXJyYXl8U3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICAnZWxlbWVudHMnOiBvcHRpb25zLmVsZW1lbnRzIHx8ICdhYmJyIGFydGljbGUgYXNpZGUgYXVkaW8gYmRpIGNhbnZhcyBkYXRhIGRhdGFsaXN0IGRldGFpbHMgZGlhbG9nIGZpZ2NhcHRpb24gZmlndXJlIGZvb3RlciBoZWFkZXIgaGdyb3VwIG1haW4gbWFyayBtZXRlciBuYXYgb3V0cHV0IHBpY3R1cmUgcHJvZ3Jlc3Mgc2VjdGlvbiBzdW1tYXJ5IHRlbXBsYXRlIHRpbWUgdmlkZW8nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBjdXJyZW50IHZlcnNpb24gb2YgaHRtbDVzaGl2XG4gICAgICAgICAqL1xuICAgICAgICAndmVyc2lvbic6IHZlcnNpb24sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgZmxhZyB0byBpbmRpY2F0ZSB0aGF0IHRoZSBIVE1MNSBzdHlsZSBzaGVldCBzaG91bGQgYmUgaW5zZXJ0ZWQuXG4gICAgICAgICAqIEBtZW1iZXJPZiBodG1sNVxuICAgICAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICAnc2hpdkNTUyc6IChvcHRpb25zLnNoaXZDU1MgIT09IGZhbHNlKSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXMgZXF1YWwgdG8gdHJ1ZSBpZiBhIGJyb3dzZXIgc3VwcG9ydHMgY3JlYXRpbmcgdW5rbm93bi9IVE1MNSBlbGVtZW50c1xuICAgICAgICAgKiBAbWVtYmVyT2YgaHRtbDVcbiAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgJ3N1cHBvcnRzVW5rbm93bkVsZW1lbnRzJzogc3VwcG9ydHNVbmtub3duRWxlbWVudHMsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgZmxhZyB0byBpbmRpY2F0ZSB0aGF0IHRoZSBkb2N1bWVudCdzIGBjcmVhdGVFbGVtZW50YCBhbmQgYGNyZWF0ZURvY3VtZW50RnJhZ21lbnRgXG4gICAgICAgICAqIG1ldGhvZHMgc2hvdWxkIGJlIG92ZXJ3cml0dGVuLlxuICAgICAgICAgKiBAbWVtYmVyT2YgaHRtbDVcbiAgICAgICAgICogQHR5cGUgQm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgJ3NoaXZNZXRob2RzJzogKG9wdGlvbnMuc2hpdk1ldGhvZHMgIT09IGZhbHNlKSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBzdHJpbmcgdG8gZGVzY3JpYmUgdGhlIHR5cGUgb2YgYGh0bWw1YCBvYmplY3QgKFwiZGVmYXVsdFwiIG9yIFwiZGVmYXVsdCBwcmludFwiKS5cbiAgICAgICAgICogQG1lbWJlck9mIGh0bWw1XG4gICAgICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgJ3R5cGUnOiAnZGVmYXVsdCcsXG5cbiAgICAgICAgLy8gc2hpdnMgdGhlIGRvY3VtZW50IGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGBodG1sNWAgb2JqZWN0IG9wdGlvbnNcbiAgICAgICAgJ3NoaXZEb2N1bWVudCc6IHNoaXZEb2N1bWVudCxcblxuICAgICAgICAvL2NyZWF0ZXMgYSBzaGl2ZWQgZWxlbWVudFxuICAgICAgICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50LFxuXG4gICAgICAgIC8vY3JlYXRlcyBhIHNoaXZlZCBkb2N1bWVudEZyYWdtZW50XG4gICAgICAgIGNyZWF0ZURvY3VtZW50RnJhZ21lbnQ6IGNyZWF0ZURvY3VtZW50RnJhZ21lbnQsXG5cbiAgICAgICAgLy9leHRlbmRzIGxpc3Qgb2YgZWxlbWVudHNcbiAgICAgICAgYWRkRWxlbWVudHM6IGFkZEVsZW1lbnRzXG4gICAgICB9O1xuXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICAgLy8gZXhwb3NlIGh0bWw1XG4gICAgICB3aW5kb3cuaHRtbDUgPSBodG1sNTtcblxuICAgICAgLy8gc2hpdiB0aGUgZG9jdW1lbnRcbiAgICAgIHNoaXZEb2N1bWVudChkb2N1bWVudCk7XG5cbiAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQcmludCBTaGl2IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgICAvKiogVXNlZCB0byBmaWx0ZXIgbWVkaWEgdHlwZXMgKi9cbiAgICAgIHZhciByZU1lZGlhID0gL14kfFxcYig/OmFsbHxwcmludClcXGIvO1xuXG4gICAgICAvKiogVXNlZCB0byBuYW1lc3BhY2UgcHJpbnRhYmxlIGVsZW1lbnRzICovXG4gICAgICB2YXIgc2hpdk5hbWVzcGFjZSA9ICdodG1sNXNoaXYnO1xuXG4gICAgICAvKiogRGV0ZWN0IHdoZXRoZXIgdGhlIGJyb3dzZXIgc3VwcG9ydHMgc2hpdmFibGUgc3R5bGUgc2hlZXRzICovXG4gICAgICB2YXIgc3VwcG9ydHNTaGl2YWJsZVNoZWV0cyA9ICFzdXBwb3J0c1Vua25vd25FbGVtZW50cyAmJiAoZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGFzc2lnbiBhIGZhbHNlIG5lZ2F0aXZlIGlmIHVuYWJsZSB0byBzaGl2XG4gICAgICAgIHZhciBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmV0dXJuICEoXG4gICAgICAgICAgdHlwZW9mIGRvY3VtZW50Lm5hbWVzcGFjZXMgPT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgICB0eXBlb2YgZG9jdW1lbnQucGFyZW50V2luZG93ID09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgdHlwZW9mIGRvY0VsLmFwcGx5RWxlbWVudCA9PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAgIHR5cGVvZiBkb2NFbC5yZW1vdmVOb2RlID09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgdHlwZW9mIHdpbmRvdy5hdHRhY2hFdmVudCA9PSAndW5kZWZpbmVkJ1xuICAgICAgICApO1xuICAgICAgfSgpKTtcblxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYWxsIEhUTUw1IGVsZW1lbnRzIGluIHRoZSBnaXZlbiBkb2N1bWVudCB3aXRoIHByaW50YWJsZSBlbGVtZW50cy5cbiAgICAgICAqIChlZy4gdGhlIFwiaGVhZGVyXCIgZWxlbWVudCBpcyB3cmFwcGVkIHdpdGggdGhlIFwiaHRtbDVzaGl2OmhlYWRlclwiIGVsZW1lbnQpXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHBhcmFtIHtEb2N1bWVudH0gb3duZXJEb2N1bWVudCBUaGUgZG9jdW1lbnQuXG4gICAgICAgKiBAcmV0dXJucyB7QXJyYXl9IEFuIGFycmF5IHdyYXBwZXJzIGFkZGVkLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBhZGRXcmFwcGVycyhvd25lckRvY3VtZW50KSB7XG4gICAgICAgIHZhciBub2RlLFxuICAgICAgICAgIG5vZGVzID0gb3duZXJEb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpLFxuICAgICAgICAgIGluZGV4ID0gbm9kZXMubGVuZ3RoLFxuICAgICAgICAgIHJlRWxlbWVudHMgPSBSZWdFeHAoJ14oPzonICsgZ2V0RWxlbWVudHMoKS5qb2luKCd8JykgKyAnKSQnLCAnaScpLFxuICAgICAgICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICAgICAgbm9kZSA9IG5vZGVzW2luZGV4XTtcbiAgICAgICAgICBpZiAocmVFbGVtZW50cy50ZXN0KG5vZGUubm9kZU5hbWUpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChub2RlLmFwcGx5RWxlbWVudChjcmVhdGVXcmFwcGVyKG5vZGUpKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhIHByaW50YWJsZSB3cmFwcGVyIGZvciB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQuXG4gICAgICAgKiBAcmV0dXJucyB7RWxlbWVudH0gVGhlIHdyYXBwZXIuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZVdyYXBwZXIoZWxlbWVudCkge1xuICAgICAgICB2YXIgbm9kZSxcbiAgICAgICAgICBub2RlcyA9IGVsZW1lbnQuYXR0cmlidXRlcyxcbiAgICAgICAgICBpbmRleCA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgICB3cmFwcGVyID0gZWxlbWVudC5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc2hpdk5hbWVzcGFjZSArICc6JyArIGVsZW1lbnQubm9kZU5hbWUpO1xuXG4gICAgICAgIC8vIGNvcHkgZWxlbWVudCBhdHRyaWJ1dGVzIHRvIHRoZSB3cmFwcGVyXG4gICAgICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICAgICAgbm9kZSA9IG5vZGVzW2luZGV4XTtcbiAgICAgICAgICBub2RlLnNwZWNpZmllZCAmJiB3cmFwcGVyLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCBub2RlLm5vZGVWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29weSBlbGVtZW50IHN0eWxlcyB0byB0aGUgd3JhcHBlclxuICAgICAgICB3cmFwcGVyLnN0eWxlLmNzc1RleHQgPSBlbGVtZW50LnN0eWxlLmNzc1RleHQ7XG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNoaXZzIHRoZSBnaXZlbiBDU1MgdGV4dC5cbiAgICAgICAqIChlZy4gaGVhZGVye30gYmVjb21lcyBodG1sNXNoaXZcXDpoZWFkZXJ7fSlcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gY3NzVGV4dCBUaGUgQ1NTIHRleHQgdG8gc2hpdi5cbiAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzaGl2ZWQgQ1NTIHRleHQuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIHNoaXZDc3NUZXh0KGNzc1RleHQpIHtcbiAgICAgICAgdmFyIHBhaXIsXG4gICAgICAgICAgcGFydHMgPSBjc3NUZXh0LnNwbGl0KCd7JyksXG4gICAgICAgICAgaW5kZXggPSBwYXJ0cy5sZW5ndGgsXG4gICAgICAgICAgcmVFbGVtZW50cyA9IFJlZ0V4cCgnKF58W1xcXFxzLD4rfl0pKCcgKyBnZXRFbGVtZW50cygpLmpvaW4oJ3wnKSArICcpKD89W1tcXFxccyw+K34jLjpdfCQpJywgJ2dpJyksXG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSAnJDEnICsgc2hpdk5hbWVzcGFjZSArICdcXFxcOiQyJztcblxuICAgICAgICB3aGlsZSAoaW5kZXgtLSkge1xuICAgICAgICAgIHBhaXIgPSBwYXJ0c1tpbmRleF0gPSBwYXJ0c1tpbmRleF0uc3BsaXQoJ30nKTtcbiAgICAgICAgICBwYWlyW3BhaXIubGVuZ3RoIC0gMV0gPSBwYWlyW3BhaXIubGVuZ3RoIC0gMV0ucmVwbGFjZShyZUVsZW1lbnRzLCByZXBsYWNlbWVudCk7XG4gICAgICAgICAgcGFydHNbaW5kZXhdID0gcGFpci5qb2luKCd9Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnRzLmpvaW4oJ3snKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmVzIHRoZSBnaXZlbiB3cmFwcGVycywgbGVhdmluZyB0aGUgb3JpZ2luYWwgZWxlbWVudHMuXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHBhcmFtcyB7QXJyYXl9IHdyYXBwZXJzIEFuIGFycmF5IG9mIHByaW50YWJsZSB3cmFwcGVycy5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVtb3ZlV3JhcHBlcnMod3JhcHBlcnMpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gd3JhcHBlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaW5kZXgtLSkge1xuICAgICAgICAgIHdyYXBwZXJzW2luZGV4XS5yZW1vdmVOb2RlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAgIC8qKlxuICAgICAgICogU2hpdnMgdGhlIGdpdmVuIGRvY3VtZW50IGZvciBwcmludC5cbiAgICAgICAqIEBtZW1iZXJPZiBodG1sNVxuICAgICAgICogQHBhcmFtIHtEb2N1bWVudH0gb3duZXJEb2N1bWVudCBUaGUgZG9jdW1lbnQgdG8gc2hpdi5cbiAgICAgICAqIEByZXR1cm5zIHtEb2N1bWVudH0gVGhlIHNoaXZlZCBkb2N1bWVudC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gc2hpdlByaW50KG93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgdmFyIHNoaXZlZFNoZWV0LFxuICAgICAgICAgIHdyYXBwZXJzLFxuICAgICAgICAgIGRhdGEgPSBnZXRFeHBhbmRvRGF0YShvd25lckRvY3VtZW50KSxcbiAgICAgICAgICBuYW1lc3BhY2VzID0gb3duZXJEb2N1bWVudC5uYW1lc3BhY2VzLFxuICAgICAgICAgIG93bmVyV2luZG93ID0gb3duZXJEb2N1bWVudC5wYXJlbnRXaW5kb3c7XG5cbiAgICAgICAgaWYgKCFzdXBwb3J0c1NoaXZhYmxlU2hlZXRzIHx8IG93bmVyRG9jdW1lbnQucHJpbnRTaGl2ZWQpIHtcbiAgICAgICAgICByZXR1cm4gb3duZXJEb2N1bWVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG5hbWVzcGFjZXNbc2hpdk5hbWVzcGFjZV0gPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBuYW1lc3BhY2VzLmFkZChzaGl2TmFtZXNwYWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVNoZWV0KCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChkYXRhLl9yZW1vdmVTaGVldFRpbWVyKTtcbiAgICAgICAgICBpZiAoc2hpdmVkU2hlZXQpIHtcbiAgICAgICAgICAgIHNoaXZlZFNoZWV0LnJlbW92ZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNoaXZlZFNoZWV0PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgb3duZXJXaW5kb3cuYXR0YWNoRXZlbnQoJ29uYmVmb3JlcHJpbnQnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgIHJlbW92ZVNoZWV0KCk7XG5cbiAgICAgICAgICB2YXIgaW1wb3J0cyxcbiAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgIHNoZWV0LFxuICAgICAgICAgICAgY29sbGVjdGlvbiA9IG93bmVyRG9jdW1lbnQuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBjc3NUZXh0ID0gW10sXG4gICAgICAgICAgICBpbmRleCA9IGNvbGxlY3Rpb24ubGVuZ3RoLFxuICAgICAgICAgICAgc2hlZXRzID0gQXJyYXkoaW5kZXgpO1xuXG4gICAgICAgICAgLy8gY29udmVydCBzdHlsZVNoZWV0cyBjb2xsZWN0aW9uIHRvIGFuIGFycmF5XG4gICAgICAgICAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICAgICAgICAgIHNoZWV0c1tpbmRleF0gPSBjb2xsZWN0aW9uW2luZGV4XTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uY2F0IGFsbCBzdHlsZSBzaGVldCBDU1MgdGV4dFxuICAgICAgICAgIHdoaWxlICgoc2hlZXQgPSBzaGVldHMucG9wKCkpKSB7XG4gICAgICAgICAgICAvLyBJRSBkb2VzIG5vdCBlbmZvcmNlIGEgc2FtZSBvcmlnaW4gcG9saWN5IGZvciBleHRlcm5hbCBzdHlsZSBzaGVldHMuLi5cbiAgICAgICAgICAgIC8vIGJ1dCBoYXMgdHJvdWJsZSB3aXRoIHNvbWUgZHluYW1pY2FsbHkgY3JlYXRlZCBzdHlsZXNoZWV0c1xuICAgICAgICAgICAgaWYgKCFzaGVldC5kaXNhYmxlZCAmJiByZU1lZGlhLnRlc3Qoc2hlZXQubWVkaWEpKSB7XG5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpbXBvcnRzID0gc2hlZXQuaW1wb3J0cztcbiAgICAgICAgICAgICAgICBsZW5ndGggPSBpbXBvcnRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgfSBjYXRjaChlcil7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHNoZWV0cy5wdXNoKGltcG9ydHNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY3NzVGV4dC5wdXNoKHNoZWV0LmNzc1RleHQpO1xuICAgICAgICAgICAgICB9IGNhdGNoKGVyKXt9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gd3JhcCBhbGwgSFRNTDUgZWxlbWVudHMgd2l0aCBwcmludGFibGUgZWxlbWVudHMgYW5kIGFkZCB0aGUgc2hpdmVkIHN0eWxlIHNoZWV0XG4gICAgICAgICAgY3NzVGV4dCA9IHNoaXZDc3NUZXh0KGNzc1RleHQucmV2ZXJzZSgpLmpvaW4oJycpKTtcbiAgICAgICAgICB3cmFwcGVycyA9IGFkZFdyYXBwZXJzKG93bmVyRG9jdW1lbnQpO1xuICAgICAgICAgIHNoaXZlZFNoZWV0ID0gYWRkU3R5bGVTaGVldChvd25lckRvY3VtZW50LCBjc3NUZXh0KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBvd25lcldpbmRvdy5hdHRhY2hFdmVudCgnb25hZnRlcnByaW50JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gcmVtb3ZlIHdyYXBwZXJzLCBsZWF2aW5nIHRoZSBvcmlnaW5hbCBlbGVtZW50cywgYW5kIHJlbW92ZSB0aGUgc2hpdmVkIHN0eWxlIHNoZWV0XG4gICAgICAgICAgcmVtb3ZlV3JhcHBlcnMod3JhcHBlcnMpO1xuICAgICAgICAgIGNsZWFyVGltZW91dChkYXRhLl9yZW1vdmVTaGVldFRpbWVyKTtcbiAgICAgICAgICBkYXRhLl9yZW1vdmVTaGVldFRpbWVyID0gc2V0VGltZW91dChyZW1vdmVTaGVldCwgNTAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb3duZXJEb2N1bWVudC5wcmludFNoaXZlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBvd25lckRvY3VtZW50O1xuICAgICAgfVxuXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICAgLy8gZXhwb3NlIEFQSVxuICAgICAgaHRtbDUudHlwZSArPSAnIHByaW50JztcbiAgICAgIGh0bWw1LnNoaXZQcmludCA9IHNoaXZQcmludDtcblxuICAgICAgLy8gc2hpdiBmb3IgcHJpbnRcbiAgICAgIHNoaXZQcmludChkb2N1bWVudCk7XG5cbiAgICAgIGlmKHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpe1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGh0bWw1O1xuICAgICAgfVxuXG4gICAgfSh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdGhpcywgZG9jdW1lbnQpKTtcbiAgfVxuXG4gIDtcblxuICAvKipcbiAgICogY29udGFpbnMgY2hlY2tzIHRvIHNlZSBpZiBhIHN0cmluZyBjb250YWlucyBhbm90aGVyIHN0cmluZ1xuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIGNvbnRhaW5zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHdlIHdhbnQgdG8gY2hlY2sgZm9yIHN1YnN0cmluZ3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN1YnN0ciAtIFRoZSBzdWJzdHJpbmcgd2Ugd2FudCB0byBzZWFyY2ggdGhlIGZpcnN0IHN0cmluZyBmb3JcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgYW5kIG9ubHkgaWYgdGhlIGZpcnN0IHN0cmluZyAnc3RyJyBjb250YWlucyB0aGUgc2Vjb25kIHN0cmluZyAnc3Vic3RyJ1xuICAgKi9cbiAgZnVuY3Rpb24gY29udGFpbnMoc3RyLCBzdWJzdHIpIHtcbiAgICByZXR1cm4gISF+KCcnICsgc3RyKS5pbmRleE9mKHN1YnN0cik7XG4gIH1cblxuICA7XG5cbiAgLyoqXG4gICAqIGNyZWF0ZUVsZW1lbnQgaXMgYSBjb252ZW5pZW5jZSB3cmFwcGVyIGFyb3VuZCBkb2N1bWVudC5jcmVhdGVFbGVtZW50LiBTaW5jZSB3ZVxuICAgKiB1c2UgY3JlYXRlRWxlbWVudCBhbGwgb3ZlciB0aGUgcGxhY2UsIHRoaXMgYWxsb3dzIGZvciAoc2xpZ2h0bHkpIHNtYWxsZXIgY29kZVxuICAgKiBhcyB3ZWxsIGFzIGFic3RyYWN0aW5nIGF3YXkgaXNzdWVzIHdpdGggY3JlYXRpbmcgZWxlbWVudHMgaW4gY29udGV4dHMgb3RoZXIgdGhhblxuICAgKiBIVE1MIGRvY3VtZW50cyAoZS5nLiBTVkcgZG9jdW1lbnRzKS5cbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqIEBmdW5jdGlvbiBjcmVhdGVFbGVtZW50XG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudHxTVkdFbGVtZW50fSBBbiBIVE1MIG9yIFNWRyBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KCkge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gVGhpcyBpcyB0aGUgY2FzZSBpbiBJRTcsIHdoZXJlIHRoZSB0eXBlIG9mIGNyZWF0ZUVsZW1lbnQgaXMgXCJvYmplY3RcIi5cbiAgICAgIC8vIEZvciB0aGlzIHJlYXNvbiwgd2UgY2Fubm90IGNhbGwgYXBwbHkoKSBhcyBPYmplY3QgaXMgbm90IGEgRnVuY3Rpb24uXG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcmd1bWVudHNbMF0pO1xuICAgIH0gZWxzZSBpZiAoaXNTVkcpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMuY2FsbChkb2N1bWVudCwgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgYXJndW1lbnRzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgb3VyIFwibW9kZXJuaXpyXCIgZWxlbWVudCB0aGF0IHdlIGRvIG1vc3QgZmVhdHVyZSB0ZXN0cyBvbi5cbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqL1xuICB2YXIgbW9kRWxlbSA9IHtcbiAgICBlbGVtOiBjcmVhdGVFbGVtZW50KCdtb2Rlcm5penInKVxuICB9O1xuXG4gIC8vIENsZWFuIHVwIHRoaXMgZWxlbWVudFxuICBNb2Rlcm5penIuX3EucHVzaChmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgbW9kRWxlbS5lbGVtO1xuICB9KTtcblxuICBcblxuICB2YXIgbVN0eWxlID0ge1xuICAgIHN0eWxlOiBtb2RFbGVtLmVsZW0uc3R5bGVcbiAgfTtcblxuICAvLyBraWxsIHJlZiBmb3IgZ2MsIG11c3QgaGFwcGVuIGJlZm9yZSBtb2QuZWxlbSBpcyByZW1vdmVkLCBzbyB3ZSB1bnNoaWZ0IG9uIHRvXG4gIC8vIHRoZSBmcm9udCBvZiB0aGUgcXVldWUuXG4gIE1vZGVybml6ci5fcS51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSBtU3R5bGUuc3R5bGU7XG4gIH0pO1xuXG4gIFxuXG4gIC8qKlxuICAgKiBnZXRCb2R5IHJldHVybnMgdGhlIGJvZHkgb2YgYSBkb2N1bWVudCwgb3IgYW4gZWxlbWVudCB0aGF0IGNhbiBzdGFuZCBpbiBmb3JcbiAgICogdGhlIGJvZHkgaWYgYSByZWFsIGJvZHkgZG9lcyBub3QgZXhpc3RcbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqIEBmdW5jdGlvbiBnZXRCb2R5XG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudHxTVkdFbGVtZW50fSBSZXR1cm5zIHRoZSByZWFsIGJvZHkgb2YgYSBkb2N1bWVudCwgb3IgYW5cbiAgICogYXJ0aWZpY2lhbGx5IGNyZWF0ZWQgZWxlbWVudCB0aGF0IHN0YW5kcyBpbiBmb3IgdGhlIGJvZHlcbiAgICovXG4gIGZ1bmN0aW9uIGdldEJvZHkoKSB7XG4gICAgLy8gQWZ0ZXIgcGFnZSBsb2FkIGluamVjdGluZyBhIGZha2UgYm9keSBkb2Vzbid0IHdvcmsgc28gY2hlY2sgaWYgYm9keSBleGlzdHNcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgICBpZiAoIWJvZHkpIHtcbiAgICAgIC8vIENhbid0IHVzZSB0aGUgcmVhbCBib2R5IGNyZWF0ZSBhIGZha2Ugb25lLlxuICAgICAgYm9keSA9IGNyZWF0ZUVsZW1lbnQoaXNTVkcgPyAnc3ZnJyA6ICdib2R5Jyk7XG4gICAgICBib2R5LmZha2UgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBib2R5O1xuICB9XG5cbiAgO1xuXG4gIC8qKlxuICAgKiBpbmplY3RFbGVtZW50V2l0aFN0eWxlcyBpbmplY3RzIGFuIGVsZW1lbnQgd2l0aCBzdHlsZSBlbGVtZW50IGFuZCBzb21lIENTUyBydWxlc1xuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIGluamVjdEVsZW1lbnRXaXRoU3R5bGVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBydWxlIC0gU3RyaW5nIHJlcHJlc2VudGluZyBhIGNzcyBydWxlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gdGVzdCB0aGUgaW5qZWN0ZWQgZWxlbWVudFxuICAgKiBAcGFyYW0ge251bWJlcn0gW25vZGVzXSAtIEFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBudW1iZXIgb2YgYWRkaXRpb25hbCBub2RlcyB5b3Ugd2FudCBpbmplY3RlZFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbdGVzdG5hbWVzXSAtIEFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCBhcmUgdXNlZCBhcyBpZHMgZm9yIHRoZSBhZGRpdGlvbmFsIG5vZGVzXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB0aGUgcmVzdWx0IG9mIHRoZSBzcGVjaWZpZWQgY2FsbGJhY2sgdGVzdFxuICAgKi9cbiAgZnVuY3Rpb24gaW5qZWN0RWxlbWVudFdpdGhTdHlsZXMocnVsZSwgY2FsbGJhY2ssIG5vZGVzLCB0ZXN0bmFtZXMpIHtcbiAgICB2YXIgbW9kID0gJ21vZGVybml6cic7XG4gICAgdmFyIHN0eWxlO1xuICAgIHZhciByZXQ7XG4gICAgdmFyIG5vZGU7XG4gICAgdmFyIGRvY092ZXJmbG93O1xuICAgIHZhciBkaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgYm9keSA9IGdldEJvZHkoKTtcblxuICAgIGlmIChwYXJzZUludChub2RlcywgMTApKSB7XG4gICAgICAvLyBJbiBvcmRlciBub3QgdG8gZ2l2ZSBmYWxzZSBwb3NpdGl2ZXMgd2UgY3JlYXRlIGEgbm9kZSBmb3IgZWFjaCB0ZXN0XG4gICAgICAvLyBUaGlzIGFsc28gYWxsb3dzIHRoZSBtZXRob2QgdG8gc2NhbGUgZm9yIHVuc3BlY2lmaWVkIHVzZXNcbiAgICAgIHdoaWxlIChub2Rlcy0tKSB7XG4gICAgICAgIG5vZGUgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbm9kZS5pZCA9IHRlc3RuYW1lcyA/IHRlc3RuYW1lc1tub2Rlc10gOiBtb2QgKyAobm9kZXMgKyAxKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0eWxlID0gY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgICBzdHlsZS5pZCA9ICdzJyArIG1vZDtcblxuICAgIC8vIElFNiB3aWxsIGZhbHNlIHBvc2l0aXZlIG9uIHNvbWUgdGVzdHMgZHVlIHRvIHRoZSBzdHlsZSBlbGVtZW50IGluc2lkZSB0aGUgdGVzdCBkaXYgc29tZWhvdyBpbnRlcmZlcmluZyBvZmZzZXRIZWlnaHQsIHNvIGluc2VydCBpdCBpbnRvIGJvZHkgb3IgZmFrZWJvZHkuXG4gICAgLy8gT3BlcmEgd2lsbCBhY3QgYWxsIHF1aXJreSB3aGVuIGluamVjdGluZyBlbGVtZW50cyBpbiBkb2N1bWVudEVsZW1lbnQgd2hlbiBwYWdlIGlzIHNlcnZlZCBhcyB4bWwsIG5lZWRzIGZha2Vib2R5IHRvby4gIzI3MFxuICAgICghYm9keS5mYWtlID8gZGl2IDogYm9keSkuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBydWxlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlKSk7XG4gICAgfVxuICAgIGRpdi5pZCA9IG1vZDtcblxuICAgIGlmIChib2R5LmZha2UpIHtcbiAgICAgIC8vYXZvaWQgY3Jhc2hpbmcgSUU4LCBpZiBiYWNrZ3JvdW5kIGltYWdlIGlzIHVzZWRcbiAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgLy9TYWZhcmkgNS4xMy81LjEuNCBPU1ggc3RvcHMgbG9hZGluZyBpZiA6Oi13ZWJraXQtc2Nyb2xsYmFyIGlzIHVzZWQgYW5kIHNjcm9sbGJhcnMgYXJlIHZpc2libGVcbiAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgIGRvY092ZXJmbG93ID0gZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdztcbiAgICAgIGRvY0VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgIGRvY0VsZW1lbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgfVxuXG4gICAgcmV0ID0gY2FsbGJhY2soZGl2LCBydWxlKTtcbiAgICAvLyBJZiB0aGlzIGlzIGRvbmUgYWZ0ZXIgcGFnZSBsb2FkIHdlIGRvbid0IHdhbnQgdG8gcmVtb3ZlIHRoZSBib2R5IHNvIGNoZWNrIGlmIGJvZHkgZXhpc3RzXG4gICAgaWYgKGJvZHkuZmFrZSkge1xuICAgICAgYm9keS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJvZHkpO1xuICAgICAgZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IGRvY092ZXJmbG93O1xuICAgICAgLy8gVHJpZ2dlciBsYXlvdXQgc28ga2luZXRpYyBzY3JvbGxpbmcgaXNuJ3QgZGlzYWJsZWQgaW4gaU9TNitcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgZG9jRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdik7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhcmV0O1xuICB9XG5cbiAgO1xuXG4gIC8qKlxuICAgKiBkb21Ub0NTUyB0YWtlcyBhIGNhbWVsQ2FzZSBzdHJpbmcgYW5kIGNvbnZlcnRzIGl0IHRvIGtlYmFiLWNhc2VcbiAgICogZS5nLiBib3hTaXppbmcgLT4gYm94LXNpemluZ1xuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIGRvbVRvQ1NTXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gU3RyaW5nIG5hbWUgb2YgY2FtZWxDYXNlIHByb3Agd2Ugd2FudCB0byBjb252ZXJ0XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBrZWJhYi1jYXNlIHZlcnNpb24gb2YgdGhlIHN1cHBsaWVkIG5hbWVcbiAgICovXG4gIGZ1bmN0aW9uIGRvbVRvQ1NTKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZS5yZXBsYWNlKC8oW0EtWl0pL2csIGZ1bmN0aW9uKHN0ciwgbTEpIHtcbiAgICAgIHJldHVybiAnLScgKyBtMS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pLnJlcGxhY2UoL15tcy0vLCAnLW1zLScpO1xuICB9XG5cbiAgO1xuXG5cbiAgLyoqXG4gICAqIHdyYXBwZXIgYXJvdW5kIGdldENvbXB1dGVkU3R5bGUsIHRvIGZpeCBpc3N1ZXMgd2l0aCBGaXJlZm94IHJldHVybmluZyBudWxsIHdoZW5cbiAgICogY2FsbGVkIGluc2lkZSBvZiBhIGhpZGRlbiBpZnJhbWVcbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqIEBmdW5jdGlvbiBjb21wdXRlZFN0eWxlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8U1ZHRWxlbWVudH0gZWxlbSAtIFRoZSBlbGVtZW50IHdlIHdhbnQgdG8gZmluZCB0aGUgY29tcHV0ZWQgc3R5bGVzIG9mXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IFtwc2V1ZG9dIC0gQW4gb3B0aW9uYWwgcHNldWRvIGVsZW1lbnQgc2VsZWN0b3IgKGUuZy4gOmJlZm9yZSksIG9mIG51bGwgaWYgbm9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcCAtIEEgQ1NTIHByb3BlcnR5XG4gICAqIEByZXR1cm5zIHtDU1NTdHlsZURlY2xhcmF0aW9ufSB0aGUgdmFsdWUgb2YgdGhlIHNwZWNpZmllZCBDU1MgcHJvcGVydHlcbiAgICovXG4gIGZ1bmN0aW9uIGNvbXB1dGVkU3R5bGUoZWxlbSwgcHNldWRvLCBwcm9wKSB7XG4gICAgdmFyIHJlc3VsdDtcblxuICAgIGlmICgnZ2V0Q29tcHV0ZWRTdHlsZScgaW4gd2luZG93KSB7XG4gICAgICByZXN1bHQgPSBnZXRDb21wdXRlZFN0eWxlLmNhbGwod2luZG93LCBlbGVtLCBwc2V1ZG8pO1xuICAgICAgdmFyIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcblxuICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29uc29sZSkge1xuICAgICAgICAgIHZhciBtZXRob2QgPSBjb25zb2xlLmVycm9yID8gJ2Vycm9yJyA6ICdsb2cnO1xuICAgICAgICAgIGNvbnNvbGVbbWV0aG9kXS5jYWxsKGNvbnNvbGUsICdnZXRDb21wdXRlZFN0eWxlIHJldHVybmluZyBudWxsLCBpdHMgcG9zc2libGUgbW9kZXJuaXpyIHRlc3QgcmVzdWx0cyBhcmUgaW5hY2N1cmF0ZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9ICFwc2V1ZG8gJiYgZWxlbS5jdXJyZW50U3R5bGUgJiYgZWxlbS5jdXJyZW50U3R5bGVbcHJvcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIDtcblxuICAvKipcbiAgICogbmF0aXZlVGVzdFByb3BzIGFsbG93cyBmb3IgdXMgdG8gdXNlIG5hdGl2ZSBmZWF0dXJlIGRldGVjdGlvbiBmdW5jdGlvbmFsaXR5IGlmIGF2YWlsYWJsZS5cbiAgICogc29tZSBwcmVmaXhlZCBmb3JtLCBvciBmYWxzZSwgaW4gdGhlIGNhc2Ugb2YgYW4gdW5zdXBwb3J0ZWQgcnVsZVxuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIG5hdGl2ZVRlc3RQcm9wc1xuICAgKiBAcGFyYW0ge2FycmF5fSBwcm9wcyAtIEFuIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdmFsdWUgd2Ugd2FudCB0byBjaGVjayB2aWEgQHN1cHBvcnRzXG4gICAqIEByZXR1cm5zIHtib29sZWFufHVuZGVmaW5lZH0gQSBib29sZWFuIHdoZW4gQHN1cHBvcnRzIGV4aXN0cywgdW5kZWZpbmVkIG90aGVyd2lzZVxuICAgKi9cbiAgLy8gQWNjZXB0cyBhIGxpc3Qgb2YgcHJvcGVydHkgbmFtZXMgYW5kIGEgc2luZ2xlIHZhbHVlXG4gIC8vIFJldHVybnMgYHVuZGVmaW5lZGAgaWYgbmF0aXZlIGRldGVjdGlvbiBub3QgYXZhaWxhYmxlXG4gIGZ1bmN0aW9uIG5hdGl2ZVRlc3RQcm9wcyhwcm9wcywgdmFsdWUpIHtcbiAgICB2YXIgaSA9IHByb3BzLmxlbmd0aDtcbiAgICAvLyBTdGFydCB3aXRoIHRoZSBKUyBBUEk6IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbmRpdGlvbmFsLyN0aGUtY3NzLWludGVyZmFjZVxuICAgIGlmICgnQ1NTJyBpbiB3aW5kb3cgJiYgJ3N1cHBvcnRzJyBpbiB3aW5kb3cuQ1NTKSB7XG4gICAgICAvLyBUcnkgZXZlcnkgcHJlZml4ZWQgdmFyaWFudCBvZiB0aGUgcHJvcGVydHlcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgaWYgKHdpbmRvdy5DU1Muc3VwcG9ydHMoZG9tVG9DU1MocHJvcHNbaV0pLCB2YWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UgZmFsbCBiYWNrIHRvIGF0LXJ1bGUgKGZvciBPcGVyYSAxMi54KVxuICAgIGVsc2UgaWYgKCdDU1NTdXBwb3J0c1J1bGUnIGluIHdpbmRvdykge1xuICAgICAgLy8gQnVpbGQgYSBjb25kaXRpb24gc3RyaW5nIGZvciBldmVyeSBwcmVmaXhlZCB2YXJpYW50XG4gICAgICB2YXIgY29uZGl0aW9uVGV4dCA9IFtdO1xuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjb25kaXRpb25UZXh0LnB1c2goJygnICsgZG9tVG9DU1MocHJvcHNbaV0pICsgJzonICsgdmFsdWUgKyAnKScpO1xuICAgICAgfVxuICAgICAgY29uZGl0aW9uVGV4dCA9IGNvbmRpdGlvblRleHQuam9pbignIG9yICcpO1xuICAgICAgcmV0dXJuIGluamVjdEVsZW1lbnRXaXRoU3R5bGVzKCdAc3VwcG9ydHMgKCcgKyBjb25kaXRpb25UZXh0ICsgJykgeyAjbW9kZXJuaXpyIHsgcG9zaXRpb246IGFic29sdXRlOyB9IH0nLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIHJldHVybiBjb21wdXRlZFN0eWxlKG5vZGUsIG51bGwsICdwb3NpdGlvbicpID09PSAnYWJzb2x1dGUnO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgO1xuXG4gIC8qKlxuICAgKiBjc3NUb0RPTSB0YWtlcyBhIGtlYmFiLWNhc2Ugc3RyaW5nIGFuZCBjb252ZXJ0cyBpdCB0byBjYW1lbENhc2VcbiAgICogZS5nLiBib3gtc2l6aW5nIC0+IGJveFNpemluZ1xuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIGNzc1RvRE9NXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gU3RyaW5nIG5hbWUgb2Yga2ViYWItY2FzZSBwcm9wIHdlIHdhbnQgdG8gY29udmVydFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY2FtZWxDYXNlIHZlcnNpb24gb2YgdGhlIHN1cHBsaWVkIG5hbWVcbiAgICovXG4gIGZ1bmN0aW9uIGNzc1RvRE9NKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZS5yZXBsYWNlKC8oW2Etel0pLShbYS16XSkvZywgZnVuY3Rpb24oc3RyLCBtMSwgbTIpIHtcbiAgICAgIHJldHVybiBtMSArIG0yLnRvVXBwZXJDYXNlKCk7XG4gICAgfSkucmVwbGFjZSgvXi0vLCAnJyk7XG4gIH1cblxuICA7XG5cbiAgLy8gdGVzdFByb3BzIGlzIGEgZ2VuZXJpYyBDU1MgLyBET00gcHJvcGVydHkgdGVzdC5cblxuICAvLyBJbiB0ZXN0aW5nIHN1cHBvcnQgZm9yIGEgZ2l2ZW4gQ1NTIHByb3BlcnR5LCBpdCdzIGxlZ2l0IHRvIHRlc3Q6XG4gIC8vICAgIGBlbGVtLnN0eWxlW3N0eWxlTmFtZV0gIT09IHVuZGVmaW5lZGBcbiAgLy8gSWYgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCBpdCB3aWxsIHJldHVybiBhbiBlbXB0eSBzdHJpbmcsXG4gIC8vIGlmIHVuc3VwcG9ydGVkIGl0IHdpbGwgcmV0dXJuIHVuZGVmaW5lZC5cblxuICAvLyBXZSdsbCB0YWtlIGFkdmFudGFnZSBvZiB0aGlzIHF1aWNrIHRlc3QgYW5kIHNraXAgc2V0dGluZyBhIHN0eWxlXG4gIC8vIG9uIG91ciBtb2Rlcm5penIgZWxlbWVudCwgYnV0IGluc3RlYWQganVzdCB0ZXN0aW5nIHVuZGVmaW5lZCB2c1xuICAvLyBlbXB0eSBzdHJpbmcuXG5cbiAgLy8gUHJvcGVydHkgbmFtZXMgY2FuIGJlIHByb3ZpZGVkIGluIGVpdGhlciBjYW1lbENhc2Ugb3Iga2ViYWItY2FzZS5cblxuICBmdW5jdGlvbiB0ZXN0UHJvcHMocHJvcHMsIHByZWZpeGVkLCB2YWx1ZSwgc2tpcFZhbHVlVGVzdCkge1xuICAgIHNraXBWYWx1ZVRlc3QgPSBpcyhza2lwVmFsdWVUZXN0LCAndW5kZWZpbmVkJykgPyBmYWxzZSA6IHNraXBWYWx1ZVRlc3Q7XG5cbiAgICAvLyBUcnkgbmF0aXZlIGRldGVjdCBmaXJzdFxuICAgIGlmICghaXModmFsdWUsICd1bmRlZmluZWQnKSkge1xuICAgICAgdmFyIHJlc3VsdCA9IG5hdGl2ZVRlc3RQcm9wcyhwcm9wcywgdmFsdWUpO1xuICAgICAgaWYgKCFpcyhyZXN1bHQsICd1bmRlZmluZWQnKSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSBkbyBpdCBwcm9wZXJseVxuICAgIHZhciBhZnRlckluaXQsIGksIHByb3BzTGVuZ3RoLCBwcm9wLCBiZWZvcmU7XG5cbiAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgc3R5bGUgZWxlbWVudCwgdGhhdCBtZWFucyB3ZSdyZSBydW5uaW5nIGFzeW5jIG9yIGFmdGVyXG4gICAgLy8gdGhlIGNvcmUgdGVzdHMsIHNvIHdlJ2xsIG5lZWQgdG8gY3JlYXRlIG91ciBvd24gZWxlbWVudHMgdG8gdXNlLlxuXG4gICAgLy8gSW5zaWRlIG9mIGFuIFNWRyBlbGVtZW50LCBpbiBjZXJ0YWluIGJyb3dzZXJzLCB0aGUgYHN0eWxlYCBlbGVtZW50IGlzIG9ubHlcbiAgICAvLyBkZWZpbmVkIGZvciB2YWxpZCB0YWdzLiBUaGVyZWZvcmUsIGlmIGBtb2Rlcm5penJgIGRvZXMgbm90IGhhdmUgb25lLCB3ZVxuICAgIC8vIGZhbGwgYmFjayB0byBhIGxlc3MgdXNlZCBlbGVtZW50IGFuZCBob3BlIGZvciB0aGUgYmVzdC5cbiAgICAvLyBGb3Igc3RyaWN0IFhIVE1MIGJyb3dzZXJzIHRoZSBoYXJkbHkgdXNlZCBzYW1wIGVsZW1lbnQgaXMgdXNlZC5cbiAgICB2YXIgZWxlbXMgPSBbJ21vZGVybml6cicsICd0c3BhbicsICdzYW1wJ107XG4gICAgd2hpbGUgKCFtU3R5bGUuc3R5bGUgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICBhZnRlckluaXQgPSB0cnVlO1xuICAgICAgbVN0eWxlLm1vZEVsZW0gPSBjcmVhdGVFbGVtZW50KGVsZW1zLnNoaWZ0KCkpO1xuICAgICAgbVN0eWxlLnN0eWxlID0gbVN0eWxlLm1vZEVsZW0uc3R5bGU7XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIHRoZSBvYmplY3RzIGlmIHdlIGNyZWF0ZWQgdGhlbS5cbiAgICBmdW5jdGlvbiBjbGVhbkVsZW1zKCkge1xuICAgICAgaWYgKGFmdGVySW5pdCkge1xuICAgICAgICBkZWxldGUgbVN0eWxlLnN0eWxlO1xuICAgICAgICBkZWxldGUgbVN0eWxlLm1vZEVsZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IHByb3BzTGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgIGJlZm9yZSA9IG1TdHlsZS5zdHlsZVtwcm9wXTtcblxuICAgICAgaWYgKGNvbnRhaW5zKHByb3AsICctJykpIHtcbiAgICAgICAgcHJvcCA9IGNzc1RvRE9NKHByb3ApO1xuICAgICAgfVxuXG4gICAgICBpZiAobVN0eWxlLnN0eWxlW3Byb3BdICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAvLyBJZiB2YWx1ZSB0byB0ZXN0IGhhcyBiZWVuIHBhc3NlZCBpbiwgZG8gYSBzZXQtYW5kLWNoZWNrIHRlc3QuXG4gICAgICAgIC8vIDAgKGludGVnZXIpIGlzIGEgdmFsaWQgcHJvcGVydHkgdmFsdWUsIHNvIGNoZWNrIHRoYXQgYHZhbHVlYCBpc24ndFxuICAgICAgICAvLyB1bmRlZmluZWQsIHJhdGhlciB0aGFuIGp1c3QgY2hlY2tpbmcgaXQncyB0cnV0aHkuXG4gICAgICAgIGlmICghc2tpcFZhbHVlVGVzdCAmJiAhaXModmFsdWUsICd1bmRlZmluZWQnKSkge1xuXG4gICAgICAgICAgLy8gTmVlZHMgYSB0cnkgY2F0Y2ggYmxvY2sgYmVjYXVzZSBvZiBvbGQgSUUuIFRoaXMgaXMgc2xvdywgYnV0IHdpbGxcbiAgICAgICAgICAvLyBiZSBhdm9pZGVkIGluIG1vc3QgY2FzZXMgYmVjYXVzZSBgc2tpcFZhbHVlVGVzdGAgd2lsbCBiZSB1c2VkLlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtU3R5bGUuc3R5bGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAgICAgLy8gSWYgdGhlIHByb3BlcnR5IHZhbHVlIGhhcyBjaGFuZ2VkLCB3ZSBhc3N1bWUgdGhlIHZhbHVlIHVzZWQgaXNcbiAgICAgICAgICAvLyBzdXBwb3J0ZWQuIElmIGB2YWx1ZWAgaXMgZW1wdHkgc3RyaW5nLCBpdCdsbCBmYWlsIGhlcmUgKGJlY2F1c2VcbiAgICAgICAgICAvLyBpdCBoYXNuJ3QgY2hhbmdlZCksIHdoaWNoIG1hdGNoZXMgaG93IGJyb3dzZXJzIGhhdmUgaW1wbGVtZW50ZWRcbiAgICAgICAgICAvLyBDU1Muc3VwcG9ydHMoKVxuICAgICAgICAgIGlmIChtU3R5bGUuc3R5bGVbcHJvcF0gIT09IGJlZm9yZSkge1xuICAgICAgICAgICAgY2xlYW5FbGVtcygpO1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeGVkID09PSAncGZ4JyA/IHByb3AgOiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UganVzdCByZXR1cm4gdHJ1ZSwgb3IgdGhlIHByb3BlcnR5IG5hbWUgaWYgdGhpcyBpcyBhXG4gICAgICAgIC8vIGBwcmVmaXhlZCgpYCBjYWxsXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNsZWFuRWxlbXMoKTtcbiAgICAgICAgICByZXR1cm4gcHJlZml4ZWQgPT09ICdwZngnID8gcHJvcCA6IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2xlYW5FbGVtcygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIDtcblxuICAvKipcbiAgICogdGVzdFByb3AoKSBpbnZlc3RpZ2F0ZXMgd2hldGhlciBhIGdpdmVuIHN0eWxlIHByb3BlcnR5IGlzIHJlY29nbml6ZWRcbiAgICogUHJvcGVydHkgbmFtZXMgY2FuIGJlIHByb3ZpZGVkIGluIGVpdGhlciBjYW1lbENhc2Ugb3Iga2ViYWItY2FzZS5cbiAgICpcbiAgICogQG1lbWJlck9mIE1vZGVybml6clxuICAgKiBAbmFtZSBNb2Rlcm5penIudGVzdFByb3BcbiAgICogQGFjY2VzcyBwdWJsaWNcbiAgICogQG9wdGlvbk5hbWUgTW9kZXJuaXpyLnRlc3RQcm9wKClcbiAgICogQG9wdGlvblByb3AgdGVzdFByb3BcbiAgICogQGZ1bmN0aW9uIHRlc3RQcm9wXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wIC0gTmFtZSBvZiB0aGUgQ1NTIHByb3BlcnR5IHRvIGNoZWNrXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdmFsdWVdIC0gTmFtZSBvZiB0aGUgQ1NTIHZhbHVlIHRvIGNoZWNrXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VzZVZhbHVlXSAtIFdoZXRoZXIgb3Igbm90IHRvIGNoZWNrIHRoZSB2YWx1ZSBpZiBAc3VwcG9ydHMgaXNuJ3Qgc3VwcG9ydGVkXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBhbiBlbXB0eSBzdHJpbmcgaWYgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgdW5kZWZpbmVkIGlmIGl0cyB1bnN1cHBvcnRlZFxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiBKdXN0IGxpa2UgW3Rlc3RBbGxQcm9wc10oI21vZGVybml6ci10ZXN0YWxscHJvcHMpLCBvbmx5IGl0IGRvZXMgbm90IGNoZWNrIGFueSB2ZW5kb3IgcHJlZml4ZWRcbiAgICogdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhlIHByb3BlcnR5IG5hbWUgbXVzdCBiZSBwcm92aWRlZCBpbiBjYW1lbENhc2UgKGUuZy4gYm94U2l6aW5nIG5vdCBib3gtc2l6aW5nKVxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBNb2Rlcm5penIudGVzdFByb3AoJ3BvaW50ZXJFdmVudHMnKSAgLy8gdHJ1ZVxuICAgKiBgYGBcbiAgICpcbiAgICogWW91IGNhbiBhbHNvIHByb3ZpZGUgYSB2YWx1ZSBhcyBhbiBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQgdG8gY2hlY2sgaWYgYVxuICAgKiBzcGVjaWZpYyB2YWx1ZSBpcyBzdXBwb3J0ZWRcbiAgICpcbiAgICogYGBganNcbiAgICogTW9kZXJuaXpyLnRlc3RQcm9wKCdwb2ludGVyRXZlbnRzJywgJ25vbmUnKSAvLyB0cnVlXG4gICAqIE1vZGVybml6ci50ZXN0UHJvcCgncG9pbnRlckV2ZW50cycsICdwZW5ndWluJykgLy8gZmFsc2VcbiAgICogYGBgXG4gICAqL1xuICB2YXIgdGVzdFByb3AgPSBNb2Rlcm5penJQcm90by50ZXN0UHJvcCA9IGZ1bmN0aW9uKHByb3AsIHZhbHVlLCB1c2VWYWx1ZSkge1xuICAgIHJldHVybiB0ZXN0UHJvcHMoW3Byb3BdLCB1bmRlZmluZWQsIHZhbHVlLCB1c2VWYWx1ZSk7XG4gIH07XG5cbiAgXG5cbiAgLyoqXG4gICAqIGZuQmluZCBpcyBhIHN1cGVyIHNtYWxsIFtiaW5kXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9GdW5jdGlvbi9iaW5kKSBwb2x5ZmlsbC5cbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqIEBmdW5jdGlvbiBmbkJpbmRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSBhIGZ1bmN0aW9uIHlvdSB3YW50IHRvIGNoYW5nZSBgdGhpc2AgcmVmZXJlbmNlIHRvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0aGF0IC0gdGhlIGB0aGlzYCB5b3Ugd2FudCB0byBjYWxsIHRoZSBmdW5jdGlvbiB3aXRoXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gVGhlIHdyYXBwZWQgdmVyc2lvbiBvZiB0aGUgc3VwcGxpZWQgZnVuY3Rpb25cbiAgICovXG4gIGZ1bmN0aW9uIGZuQmluZChmbiwgdGhhdCkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICA7XG4vKiFcbntcbiAgXCJuYW1lXCI6IFwiQ2FudmFzXCIsXG4gIFwicHJvcGVydHlcIjogXCJjYW52YXNcIixcbiAgXCJjYW5pdXNlXCI6IFwiY2FudmFzXCIsXG4gIFwidGFnc1wiOiBbXCJjYW52YXNcIiwgXCJncmFwaGljc1wiXSxcbiAgXCJwb2x5ZmlsbHNcIjogW1wiZmxhc2hjYW52YXNcIiwgXCJleGNhbnZhc1wiLCBcInNsY2FudmFzXCIsIFwiZnhjYW52YXNcIl1cbn1cbiEqL1xuLyogRE9DXG5EZXRlY3RzIHN1cHBvcnQgZm9yIHRoZSBgPGNhbnZhcz5gIGVsZW1lbnQgZm9yIDJEIGRyYXdpbmcuXG4qL1xuXG4gIC8vIE9uIHRoZSBTNjAgYW5kIEJCIFN0b3JtLCBnZXRDb250ZXh0IGV4aXN0cywgYnV0IGFsd2F5cyByZXR1cm5zIHVuZGVmaW5lZFxuICAvLyBzbyB3ZSBhY3R1YWxseSBoYXZlIHRvIGNhbGwgZ2V0Q29udGV4dCgpIHRvIHZlcmlmeVxuICAvLyBnaXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvaXNzdWVzL2lzc3VlLzk3L1xuICBNb2Rlcm5penIuYWRkVGVzdCgnY2FudmFzJywgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsZW0gPSBjcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICByZXR1cm4gISEoZWxlbS5nZXRDb250ZXh0ICYmIGVsZW0uZ2V0Q29udGV4dCgnMmQnKSk7XG4gIH0pO1xuXG4vKiFcbntcbiAgXCJuYW1lXCI6IFwiQ2FudmFzIHRleHRcIixcbiAgXCJwcm9wZXJ0eVwiOiBcImNhbnZhc3RleHRcIixcbiAgXCJjYW5pdXNlXCI6IFwiY2FudmFzLXRleHRcIixcbiAgXCJ0YWdzXCI6IFtcImNhbnZhc1wiLCBcImdyYXBoaWNzXCJdLFxuICBcInBvbHlmaWxsc1wiOiBbXCJjYW52YXN0ZXh0XCJdXG59XG4hKi9cbi8qIERPQ1xuRGV0ZWN0cyBzdXBwb3J0IGZvciB0aGUgdGV4dCBBUElzIGZvciBgPGNhbnZhcz5gIGVsZW1lbnRzLlxuKi9cblxuICBNb2Rlcm5penIuYWRkVGVzdCgnY2FudmFzdGV4dCcsIGZ1bmN0aW9uKCkge1xuICAgIGlmIChNb2Rlcm5penIuY2FudmFzID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIGNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJykuZmlsbFRleHQgPT09ICdmdW5jdGlvbic7XG4gIH0pO1xuXG4vKiFcbntcbiAgXCJuYW1lXCI6IFwiRW1vamlcIixcbiAgXCJwcm9wZXJ0eVwiOiBcImVtb2ppXCJcbn1cbiEqL1xuLyogRE9DXG5EZXRlY3RzIHN1cHBvcnQgZm9yIGVtb2ppIGNoYXJhY3RlciBzZXRzLlxuKi9cblxuICBNb2Rlcm5penIuYWRkVGVzdCgnZW1vamknLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoIU1vZGVybml6ci5jYW52YXN0ZXh0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBub2RlID0gY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdmFyIGN0eCA9IG5vZGUuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB2YXIgYmFja2luZ1N0b3JlUmF0aW8gPVxuICAgICAgY3R4LndlYmtpdEJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICAgIGN0eC5tb3pCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICBjdHgubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICBjdHgub0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICAgIGN0eC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICAxO1xuICAgIHZhciBvZmZzZXQgPSAxMiAqIGJhY2tpbmdTdG9yZVJhdGlvO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2YwMCc7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuICAgIGN0eC5mb250ID0gJzMycHggQXJpYWwnO1xuICAgIGN0eC5maWxsVGV4dCgnXFx1ZDgzZFxcdWRjMjgnLCAwLCAwKTsgLy8gVSsxRjQyOCBLT0FMQVxuICAgIHJldHVybiBjdHguZ2V0SW1hZ2VEYXRhKG9mZnNldCwgb2Zmc2V0LCAxLCAxKS5kYXRhWzBdICE9PSAwO1xuICB9KTtcblxuXG4gIC8qKlxuICAgKiBJZiB0aGUgYnJvd3NlcnMgZm9sbG93IHRoZSBzcGVjLCB0aGVuIHRoZXkgd291bGQgZXhwb3NlIHZlbmRvci1zcGVjaWZpYyBzdHlsZXMgYXM6XG4gICAqICAgZWxlbS5zdHlsZS5XZWJraXRCb3JkZXJSYWRpdXNcbiAgICogaW5zdGVhZCBvZiBzb21ldGhpbmcgbGlrZSB0aGUgZm9sbG93aW5nICh3aGljaCBpcyB0ZWNobmljYWxseSBpbmNvcnJlY3QpOlxuICAgKiAgIGVsZW0uc3R5bGUud2Via2l0Qm9yZGVyUmFkaXVzXG5cbiAgICogV2ViS2l0IGdob3N0cyB0aGVpciBwcm9wZXJ0aWVzIGluIGxvd2VyY2FzZSBidXQgT3BlcmEgJiBNb3ogZG8gbm90LlxuICAgKiBNaWNyb3NvZnQgdXNlcyBhIGxvd2VyY2FzZSBgbXNgIGluc3RlYWQgb2YgdGhlIGNvcnJlY3QgYE1zYCBpbiBJRTgrXG4gICAqICAgZXJpay5lYWUubmV0L2FyY2hpdmVzLzIwMDgvMDMvMTAvMjEuNDguMTAvXG5cbiAgICogTW9yZSBoZXJlOiBnaXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvaXNzdWVzL2lzc3VlLzIxXG4gICAqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdmVuZG9yLXNwZWNpZmljIHN0eWxlIHByb3BlcnRpZXNcbiAgICovXG4gIHZhciBvbVByZWZpeGVzID0gJ01veiBPIG1zIFdlYmtpdCc7XG4gIFxuXG4gIHZhciBjc3NvbVByZWZpeGVzID0gKE1vZGVybml6clByb3RvLl9jb25maWcudXNlUHJlZml4ZXMgPyBvbVByZWZpeGVzLnNwbGl0KCcgJykgOiBbXSk7XG4gIE1vZGVybml6clByb3RvLl9jc3NvbVByZWZpeGVzID0gY3Nzb21QcmVmaXhlcztcbiAgXG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgSmF2YVNjcmlwdCBET00gdmFsdWVzIHVzZWQgZm9yIHRlc3RzXG4gICAqXG4gICAqIEBtZW1iZXJPZiBNb2Rlcm5penJcbiAgICogQG5hbWUgTW9kZXJuaXpyLl9kb21QcmVmaXhlc1xuICAgKiBAb3B0aW9uTmFtZSBNb2Rlcm5penIuX2RvbVByZWZpeGVzXG4gICAqIEBvcHRpb25Qcm9wIGRvbVByZWZpeGVzXG4gICAqIEBhY2Nlc3MgcHVibGljXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIE1vZGVybml6ci5fZG9tUHJlZml4ZXMgaXMgZXhhY3RseSB0aGUgc2FtZSBhcyBbX3ByZWZpeGVzXSgjbW9kZXJuaXpyLV9wcmVmaXhlcyksIGJ1dCByYXRoZXJcbiAgICogdGhhbiBrZWJhYi1jYXNlIHByb3BlcnRpZXMsIGFsbCBwcm9wZXJ0aWVzIGFyZSB0aGVpciBDYXBpdGFsaXplZCB2YXJpYW50XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIE1vZGVybml6ci5fZG9tUHJlZml4ZXMgPT09IFsgXCJNb3pcIiwgXCJPXCIsIFwibXNcIiwgXCJXZWJraXRcIiBdO1xuICAgKiBgYGBcbiAgICovXG4gIHZhciBkb21QcmVmaXhlcyA9IChNb2Rlcm5penJQcm90by5fY29uZmlnLnVzZVByZWZpeGVzID8gb21QcmVmaXhlcy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJykgOiBbXSk7XG4gIE1vZGVybml6clByb3RvLl9kb21QcmVmaXhlcyA9IGRvbVByZWZpeGVzO1xuICBcblxuICAvKipcbiAgICogdGVzdERPTVByb3BzIGlzIGEgZ2VuZXJpYyBET00gcHJvcGVydHkgdGVzdDsgaWYgYSBicm93c2VyIHN1cHBvcnRzXG4gICAqICAgYSBjZXJ0YWluIHByb3BlcnR5LCBpdCB3b24ndCByZXR1cm4gdW5kZWZpbmVkIGZvciBpdC5cbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqIEBmdW5jdGlvbiB0ZXN0RE9NUHJvcHNcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBwcm9wcyAtIEFuIGFycmF5IG9mIHByb3BlcnRpZXMgdG8gdGVzdCBmb3JcbiAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIEFuIG9iamVjdCBvciBFbGVtZW50IHlvdSB3YW50IHRvIHVzZSB0byB0ZXN0IHRoZSBwYXJhbWV0ZXJzIGFnYWluXG4gICAqIEBwYXJhbSB7Ym9vbGVhbnxPYmplY3R9IGVsZW0gLSBBbiBFbGVtZW50IHRvIGJpbmQgdGhlIHByb3BlcnR5IGxvb2t1cCBhZ2Fpbi4gVXNlIGBmYWxzZWAgdG8gcHJldmVudCB0aGUgY2hlY2tcbiAgICogQHJldHVybnMge2ZhbHNlfCp9IHJldHVybnMgZmFsc2UgaWYgdGhlIHByb3AgaXMgdW5zdXBwb3J0ZWQsIG90aGVyd2lzZSB0aGUgdmFsdWUgdGhhdCBpcyBzdXBwb3J0ZWRcbiAgICovXG4gIGZ1bmN0aW9uIHRlc3RET01Qcm9wcyhwcm9wcywgb2JqLCBlbGVtKSB7XG4gICAgdmFyIGl0ZW07XG5cbiAgICBmb3IgKHZhciBpIGluIHByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbaV0gaW4gb2JqKSB7XG5cbiAgICAgICAgLy8gcmV0dXJuIHRoZSBwcm9wZXJ0eSBuYW1lIGFzIGEgc3RyaW5nXG4gICAgICAgIGlmIChlbGVtID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBwcm9wc1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW0gPSBvYmpbcHJvcHNbaV1dO1xuXG4gICAgICAgIC8vIGxldCdzIGJpbmQgYSBmdW5jdGlvblxuICAgICAgICBpZiAoaXMoaXRlbSwgJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICAvLyBiaW5kIHRvIG9iaiB1bmxlc3Mgb3ZlcnJpZGRlblxuICAgICAgICAgIHJldHVybiBmbkJpbmQoaXRlbSwgZWxlbSB8fCBvYmopO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmV0dXJuIHRoZSB1bmJvdW5kIGZ1bmN0aW9uIG9yIG9iaiBvciB2YWx1ZVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgO1xuXG4gIC8qKlxuICAgKiB0ZXN0UHJvcHNBbGwgdGVzdHMgYSBsaXN0IG9mIERPTSBwcm9wZXJ0aWVzIHdlIHdhbnQgdG8gY2hlY2sgYWdhaW5zdC5cbiAgICogV2Ugc3BlY2lmeSBsaXRlcmFsbHkgQUxMIHBvc3NpYmxlIChrbm93biBhbmQvb3IgbGlrZWx5KSBwcm9wZXJ0aWVzIG9uXG4gICAqIHRoZSBlbGVtZW50IGluY2x1ZGluZyB0aGUgbm9uLXZlbmRvciBwcmVmaXhlZCBvbmUsIGZvciBmb3J3YXJkLVxuICAgKiBjb21wYXRpYmlsaXR5LlxuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIHRlc3RQcm9wc0FsbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcCAtIEEgc3RyaW5nIG9mIHRoZSBwcm9wZXJ0eSB0byB0ZXN0IGZvclxuICAgKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IFtwcmVmaXhlZF0gLSBBbiBvYmplY3QgdG8gY2hlY2sgdGhlIHByZWZpeGVkIHByb3BlcnRpZXMgb24uIFVzZSBhIHN0cmluZyB0byBza2lwXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8U1ZHRWxlbWVudH0gW2VsZW1dIC0gQW4gZWxlbWVudCB1c2VkIHRvIHRlc3QgdGhlIHByb3BlcnR5IGFuZCB2YWx1ZSBhZ2FpbnN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdmFsdWVdIC0gQSBzdHJpbmcgb2YgYSBjc3MgdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbc2tpcFZhbHVlVGVzdF0gLSBBbiBib29sZWFuIHJlcHJlc2VudGluZyBpZiB5b3Ugd2FudCB0byB0ZXN0IGlmIHZhbHVlIHN0aWNrcyB3aGVuIHNldFxuICAgKiBAcmV0dXJucyB7ZmFsc2V8c3RyaW5nfSByZXR1cm5zIHRoZSBzdHJpbmcgdmVyc2lvbiBvZiB0aGUgcHJvcGVydHksIG9yIGZhbHNlIGlmIGl0IGlzIHVuc3VwcG9ydGVkXG4gICAqL1xuICBmdW5jdGlvbiB0ZXN0UHJvcHNBbGwocHJvcCwgcHJlZml4ZWQsIGVsZW0sIHZhbHVlLCBza2lwVmFsdWVUZXN0KSB7XG5cbiAgICB2YXIgdWNQcm9wID0gcHJvcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3Auc2xpY2UoMSksXG4gICAgICBwcm9wcyA9IChwcm9wICsgJyAnICsgY3Nzb21QcmVmaXhlcy5qb2luKHVjUHJvcCArICcgJykgKyB1Y1Byb3ApLnNwbGl0KCcgJyk7XG5cbiAgICAvLyBkaWQgdGhleSBjYWxsIC5wcmVmaXhlZCgnYm94U2l6aW5nJykgb3IgYXJlIHdlIGp1c3QgdGVzdGluZyBhIHByb3A/XG4gICAgaWYgKGlzKHByZWZpeGVkLCAnc3RyaW5nJykgfHwgaXMocHJlZml4ZWQsICd1bmRlZmluZWQnKSkge1xuICAgICAgcmV0dXJuIHRlc3RQcm9wcyhwcm9wcywgcHJlZml4ZWQsIHZhbHVlLCBza2lwVmFsdWVUZXN0KTtcblxuICAgICAgLy8gb3RoZXJ3aXNlLCB0aGV5IGNhbGxlZCAucHJlZml4ZWQoJ3JlcXVlc3RBbmltYXRpb25GcmFtZScsIHdpbmRvd1ssIGVsZW1dKVxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wcyA9IChwcm9wICsgJyAnICsgKGRvbVByZWZpeGVzKS5qb2luKHVjUHJvcCArICcgJykgKyB1Y1Byb3ApLnNwbGl0KCcgJyk7XG4gICAgICByZXR1cm4gdGVzdERPTVByb3BzKHByb3BzLCBwcmVmaXhlZCwgZWxlbSk7XG4gICAgfVxuICB9XG5cbiAgLy8gTW9kZXJuaXpyLnRlc3RBbGxQcm9wcygpIGludmVzdGlnYXRlcyB3aGV0aGVyIGEgZ2l2ZW4gc3R5bGUgcHJvcGVydHksXG4gIC8vIG9yIGFueSBvZiBpdHMgdmVuZG9yLXByZWZpeGVkIHZhcmlhbnRzLCBpcyByZWNvZ25pemVkXG4gIC8vXG4gIC8vIE5vdGUgdGhhdCB0aGUgcHJvcGVydHkgbmFtZXMgbXVzdCBiZSBwcm92aWRlZCBpbiB0aGUgY2FtZWxDYXNlIHZhcmlhbnQuXG4gIC8vIE1vZGVybml6ci50ZXN0QWxsUHJvcHMoJ2JveFNpemluZycpXG4gIE1vZGVybml6clByb3RvLnRlc3RBbGxQcm9wcyA9IHRlc3RQcm9wc0FsbDtcblxuICBcblxuICAvKipcbiAgICogdGVzdEFsbFByb3BzIGRldGVybWluZXMgd2hldGhlciBhIGdpdmVuIENTUyBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQgaW4gdGhlIGJyb3dzZXJcbiAgICpcbiAgICogQG1lbWJlck9mIE1vZGVybml6clxuICAgKiBAbmFtZSBNb2Rlcm5penIudGVzdEFsbFByb3BzXG4gICAqIEBvcHRpb25OYW1lIE1vZGVybml6ci50ZXN0QWxsUHJvcHMoKVxuICAgKiBAb3B0aW9uUHJvcCB0ZXN0QWxsUHJvcHNcbiAgICogQGFjY2VzcyBwdWJsaWNcbiAgICogQGZ1bmN0aW9uIHRlc3RBbGxQcm9wc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcCAtIFN0cmluZyBuYW1pbmcgdGhlIHByb3BlcnR5IHRvIHRlc3QgKGVpdGhlciBjYW1lbENhc2Ugb3Iga2ViYWItY2FzZSlcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt2YWx1ZV0gLSBTdHJpbmcgb2YgdGhlIHZhbHVlIHRvIHRlc3RcbiAgICogQHBhcmFtIHtib29sZWFufSBbc2tpcFZhbHVlVGVzdD1mYWxzZV0gLSBXaGV0aGVyIHRvIHNraXAgdGVzdGluZyB0aGF0IHRoZSB2YWx1ZSBpcyBzdXBwb3J0ZWQgd2hlbiB1c2luZyBub24tbmF0aXZlIGRldGVjdGlvblxuICAgKiBAcmV0dXJucyB7ZmFsc2V8c3RyaW5nfSByZXR1cm5zIHRoZSBzdHJpbmcgdmVyc2lvbiBvZiB0aGUgcHJvcGVydHksIG9yIGZhbHNlIGlmIGl0IGlzIHVuc3VwcG9ydGVkXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIHRlc3RBbGxQcm9wcyBkZXRlcm1pbmVzIHdoZXRoZXIgYSBnaXZlbiBDU1MgcHJvcGVydHksIGluIHNvbWUgcHJlZml4ZWQgZm9ybSxcbiAgICogaXMgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiB0ZXN0QWxsUHJvcHMoJ2JveFNpemluZycpICAvLyB0cnVlXG4gICAqIGBgYFxuICAgKlxuICAgKiBJdCBjYW4gb3B0aW9uYWxseSBiZSBnaXZlbiBhIENTUyB2YWx1ZSBpbiBzdHJpbmcgZm9ybSB0byB0ZXN0IGlmIGEgcHJvcGVydHlcbiAgICogdmFsdWUgaXMgdmFsaWRcbiAgICpcbiAgICogYGBganNcbiAgICogdGVzdEFsbFByb3BzKCdkaXNwbGF5JywgJ2Jsb2NrJykgLy8gdHJ1ZVxuICAgKiB0ZXN0QWxsUHJvcHMoJ2Rpc3BsYXknLCAncGVuZ3VpbicpIC8vIGZhbHNlXG4gICAqIGBgYFxuICAgKlxuICAgKiBBIGJvb2xlYW4gY2FuIGJlIHBhc3NlZCBhcyBhIHRoaXJkIHBhcmFtZXRlciB0byBza2lwIHRoZSB2YWx1ZSBjaGVjayB3aGVuXG4gICAqIG5hdGl2ZSBkZXRlY3Rpb24gKEBzdXBwb3J0cykgaXNuJ3QgYXZhaWxhYmxlLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiB0ZXN0QWxsUHJvcHMoJ3NoYXBlT3V0c2lkZScsICdjb250ZW50LWJveCcsIHRydWUpO1xuICAgKiBgYGBcbiAgICovXG4gIGZ1bmN0aW9uIHRlc3RBbGxQcm9wcyhwcm9wLCB2YWx1ZSwgc2tpcFZhbHVlVGVzdCkge1xuICAgIHJldHVybiB0ZXN0UHJvcHNBbGwocHJvcCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHZhbHVlLCBza2lwVmFsdWVUZXN0KTtcbiAgfVxuXG4gIE1vZGVybml6clByb3RvLnRlc3RBbGxQcm9wcyA9IHRlc3RBbGxQcm9wcztcblxuICBcbi8qIVxue1xuICBcIm5hbWVcIjogXCJGbGV4Ym94XCIsXG4gIFwicHJvcGVydHlcIjogXCJmbGV4Ym94XCIsXG4gIFwiY2FuaXVzZVwiOiBcImZsZXhib3hcIixcbiAgXCJ0YWdzXCI6IFtcImNzc1wiXSxcbiAgXCJub3Rlc1wiOiBbe1xuICAgIFwibmFtZVwiOiBcIlRoZSBfbmV3XyBmbGV4Ym94XCIsXG4gICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1mbGV4Ym94LTEvXCJcbiAgfV0sXG4gIFwid2FybmluZ3NcIjogW1xuICAgIFwiQSBgdHJ1ZWAgcmVzdWx0IGZvciB0aGlzIGRldGVjdCBkb2VzIG5vdCBpbXBseSB0aGF0IHRoZSBgZmxleC13cmFwYCBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQ7IHNlZSB0aGUgYGZsZXh3cmFwYCBkZXRlY3QuXCJcbiAgXVxufVxuISovXG4vKiBET0NcbkRldGVjdHMgc3VwcG9ydCBmb3IgdGhlIEZsZXhpYmxlIEJveCBMYXlvdXQgbW9kZWwsIGEuay5hLiBGbGV4Ym94LCB3aGljaCBhbGxvd3MgZWFzeSBtYW5pcHVsYXRpb24gb2YgbGF5b3V0IG9yZGVyIGFuZCBzaXppbmcgd2l0aGluIGEgY29udGFpbmVyLlxuKi9cblxuICBNb2Rlcm5penIuYWRkVGVzdCgnZmxleGJveCcsIHRlc3RBbGxQcm9wcygnZmxleEJhc2lzJywgJzFweCcsIHRydWUpKTtcblxuLyohXG57XG4gIFwibmFtZVwiOiBcIkVTNiBQcm9taXNlc1wiLFxuICBcInByb3BlcnR5XCI6IFwicHJvbWlzZXNcIixcbiAgXCJjYW5pdXNlXCI6IFwicHJvbWlzZXNcIixcbiAgXCJwb2x5ZmlsbHNcIjogW1wiZXM2cHJvbWlzZXNcIl0sXG4gIFwiYXV0aG9yc1wiOiBbXCJLcmlzdGVyIEthcmlcIiwgXCJKYWtlIEFyY2hpYmFsZFwiXSxcbiAgXCJ0YWdzXCI6IFtcImVzNlwiXSxcbiAgXCJub3Rlc1wiOiBbe1xuICAgIFwibmFtZVwiOiBcIlRoZSBFUzYgcHJvbWlzZXMgc3BlY1wiLFxuICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kb21lbmljL3Byb21pc2VzLXVud3JhcHBpbmdcIlxuICB9LHtcbiAgICBcIm5hbWVcIjogXCJDaHJvbWl1bSBkYXNoYm9hcmQgLSBFUzYgUHJvbWlzZXNcIixcbiAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy5jaHJvbWVzdGF0dXMuY29tL2ZlYXR1cmVzLzU2ODE3MjYzMzY1MzI0ODBcIlxuICB9LHtcbiAgICBcIm5hbWVcIjogXCJKYXZhU2NyaXB0IFByb21pc2VzOiBhbiBJbnRyb2R1Y3Rpb25cIixcbiAgICBcImhyZWZcIjogXCJodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL3ByaW1lcnMvcHJvbWlzZXMvXCJcbiAgfV1cbn1cbiEqL1xuLyogRE9DXG5DaGVjayBpZiBicm93c2VyIGltcGxlbWVudHMgRUNNQVNjcmlwdCA2IFByb21pc2VzIHBlciBzcGVjaWZpY2F0aW9uLlxuKi9cblxuICBNb2Rlcm5penIuYWRkVGVzdCgncHJvbWlzZXMnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJ1Byb21pc2UnIGluIHdpbmRvdyAmJlxuICAgIC8vIFNvbWUgb2YgdGhlc2UgbWV0aG9kcyBhcmUgbWlzc2luZyBmcm9tXG4gICAgLy8gRmlyZWZveC9DaHJvbWUgZXhwZXJpbWVudGFsIGltcGxlbWVudGF0aW9uc1xuICAgICdyZXNvbHZlJyBpbiB3aW5kb3cuUHJvbWlzZSAmJlxuICAgICdyZWplY3QnIGluIHdpbmRvdy5Qcm9taXNlICYmXG4gICAgJ2FsbCcgaW4gd2luZG93LlByb21pc2UgJiZcbiAgICAncmFjZScgaW4gd2luZG93LlByb21pc2UgJiZcbiAgICAvLyBPbGRlciB2ZXJzaW9uIG9mIHRoZSBzcGVjIGhhZCBhIHJlc29sdmVyIG9iamVjdFxuICAgIC8vIGFzIHRoZSBhcmcgcmF0aGVyIHRoYW4gYSBmdW5jdGlvblxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZXNvbHZlO1xuICAgICAgbmV3IHdpbmRvdy5Qcm9taXNlKGZ1bmN0aW9uKHIpIHsgcmVzb2x2ZSA9IHI7IH0pO1xuICAgICAgcmV0dXJuIHR5cGVvZiByZXNvbHZlID09PSAnZnVuY3Rpb24nO1xuICAgIH0oKSk7XG4gIH0pO1xuXG5cbiAgLy8gUnVuIGVhY2ggdGVzdFxuICB0ZXN0UnVubmVyKCk7XG5cbiAgLy8gUmVtb3ZlIHRoZSBcIm5vLWpzXCIgY2xhc3MgaWYgaXQgZXhpc3RzXG4gIHNldENsYXNzZXMoY2xhc3Nlcyk7XG5cbiAgZGVsZXRlIE1vZGVybml6clByb3RvLmFkZFRlc3Q7XG4gIGRlbGV0ZSBNb2Rlcm5penJQcm90by5hZGRBc3luY1Rlc3Q7XG5cbiAgLy8gUnVuIHRoZSB0aGluZ3MgdGhhdCBhcmUgc3VwcG9zZWQgdG8gcnVuIGFmdGVyIHRoZSB0ZXN0c1xuICBmb3IgKHZhciBpID0gMDsgaSA8IE1vZGVybml6ci5fcS5sZW5ndGg7IGkrKykge1xuICAgIE1vZGVybml6ci5fcVtpXSgpO1xuICB9XG5cbiAgLy8gTGVhayBNb2Rlcm5penIgbmFtZXNwYWNlXG4gIHdpbmRvdy5Nb2Rlcm5penIgPSBNb2Rlcm5penI7XG5cblxuO1xuXG59KSh3aW5kb3csIGRvY3VtZW50KTtcbm1vZHVsZS5leHBvcnRzPXdpbmRvdy5Nb2Rlcm5penI7aWYoaGFkR2xvYmFsKXt3aW5kb3cuTW9kZXJuaXpyPW9sZEdsb2JhbDt9ZWxzZXtkZWxldGUgd2luZG93Lk1vZGVybml6cjt9fSkod2luZG93KTsiLCJpbXBvcnQgJ21vZGVybml6cic7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuY29uc29sZS5sb2coJ/CfkLYnKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=