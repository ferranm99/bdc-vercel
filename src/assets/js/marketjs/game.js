'use strict';
var _STRINGS = {
  "Ad" : {
    "Mobile" : {
      "Preroll" : {
        "ReadyIn" : "The game is ready in ",
        "Loading" : "Your game is loading...",
        "Close" : "Close"
      },
      "Header" : {
        "ReadyIn" : "The game is ready in ",
        "Loading" : "Your game is loading...",
        "Close" : "Close"
      },
      "End" : {
        "ReadyIn" : "Advertisement ends in ",
        "Loading" : "Please wait ...",
        "Close" : "Close"
      }
    }
  },
  "Splash" : {
    "Loading" : "Loading ...",
    "LogoLine1" : "Some text here",
    "LogoLine2" : "powered by MarketJS",
    "LogoLine3" : "none",
    "TapToStart" : "TAP TO START"
  },
  "Game" : {
    "SelectPlayer" : "Select Player",
    "Win" : "You win!",
    "Lose" : "You lose!",
    "Score" : "Score",
    "Time" : "Time",
    "Claim" : "Claim Now!",
    "Congrats" : "CONGRATULATIONS!",
    "Win" : "You won a prize",
    "Submit" : "Submit",
    "enterEmail" : "Enter your email",
    "claimPrize" : "to claim the prize",
    "thanks" : "Thank you",
    "forSubmit" : "for submitting",
    "thankSubmit" : "Thanks for submitting",
    "replay" : "Play Again",
    "play" : "Select",
    "Title" : "Claw Crane",
    "yourClaw" : "Select your Claw"
  }
};
var _SETTINGS = {
  "API" : {
    "Enabled" : true,
    "Log" : {
      "Events" : {
        "InitializeGame" : true,
        "EndGame" : true,
        "Level" : {
          "Begin" : true,
          "End" : true,
          "Win" : true,
          "Lose" : true,
          "Draw" : true
        }
      }
    }
  },
  "Ad" : {
    "Mobile" : {
      "Preroll" : {
        "Enabled" : true,
        "Duration" : 5,
        "Width" : 300,
        "Height" : 250,
        "Rotation" : {
          "Enabled" : false,
          "Weight" : {
            "MobileAdInGamePreroll" : 40,
            "MobileAdInGamePreroll2" : 40,
            "MobileAdInGamePreroll3" : 20
          }
        }
      },
      "Header" : {
        "Enabled" : false,
        "Duration" : 5,
        "Width" : 320,
        "Height" : 50,
        "Rotation" : {
          "Enabled" : false,
          "Weight" : {
            "MobileAdInGameHeader" : 40,
            "MobileAdInGameHeader2" : 40,
            "MobileAdInGameHeader3" : 20
          }
        }
      },
      "Footer" : {
        "Enabled" : false,
        "Duration" : 5,
        "Width" : 320,
        "Height" : 50,
        "Rotation" : {
          "Enabled" : false,
          "Weight" : {
            "MobileAdInGameFooter" : 40,
            "MobileAdInGameFooter2" : 40,
            "MobileAdInGameFooter3" : 20
          }
        }
      },
      "End" : {
        "Enabled" : false,
        "Duration" : 1,
        "Width" : 300,
        "Height" : 250,
        "Rotation" : {
          "Enabled" : false,
          "Weight" : {
            "MobileAdInGameEnd" : 40,
            "MobileAdInGameEnd2" : 40,
            "MobileAdInGameEnd3" : 20
          }
        }
      }
    }
  },
  "Language" : {
    "Default" : "en"
  },
  "DeveloperBranding" : {
    "Splash" : {
      "Enabled" : false
    },
    "Logo" : {
      "Enabled" : true,
      "Link" : "http://marketjs.com",
      "LinkEnabled" : false,
      "NewWindow" : true,
      "Width" : 166,
      "Height" : 61
    }
  },
  "Branding" : {
    "Splash" : {
      "Enabled" : false
    },
    "Logo" : {
      "Enabled" : false,
      "Link" : "http://google.com",
      "LinkEnabled" : true,
      "NewWindow" : true,
      "Width" : 280,
      "Height" : 34
    }
  },
  "MoreGames" : {
    "Enabled" : true,
    "Link" : "http://www.marketjs.com/game/links/mobile",
    "NewWindow" : true
  },
  "Gamecenter" : {
    "Enabled" : true
  },
  "TapToStartAudioUnlock" : {
    "Enabled" : false
  }
};
var MobileAdInGamePreroll = {
  "ad_duration" : _SETTINGS["Ad"]["Mobile"]["Preroll"]["Duration"],
  "ad_width" : _SETTINGS["Ad"]["Mobile"]["Preroll"]["Width"],
  "ad_height" : _SETTINGS["Ad"]["Mobile"]["Preroll"]["Height"],
  "ready_in" : _STRINGS["Ad"]["Mobile"]["Preroll"]["ReadyIn"],
  "loading" : _STRINGS["Ad"]["Mobile"]["Preroll"]["Loading"],
  "close" : _STRINGS["Ad"]["Mobile"]["Preroll"]["Close"] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
  "Initialize" : function() {
    if (_SETTINGS["Ad"]["Mobile"]["Preroll"]["Rotation"]["Enabled"]) {
      var min_cur = _SETTINGS["Ad"]["Mobile"]["Preroll"]["Rotation"]["Weight"];
      var cur_cur = min_cur["MobileAdInGamePreroll"];
      var courseContentPage = cur_cur + min_cur["MobileAdInGamePreroll2"];
      min_cur = courseContentPage + min_cur["MobileAdInGamePreroll3"];
      var d_quote_cur = Math["floor"](100 * Math["random"]());
      console["log"]("seed: ", d_quote_cur);
      if (d_quote_cur <= cur_cur) {
        /** @type {string} */
        this["selectedOverlayName"] = "MobileAdInGamePreroll";
      } else {
        if (d_quote_cur <= courseContentPage) {
          /** @type {string} */
          this["selectedOverlayName"] = "MobileAdInGamePreroll2";
        } else {
          if (d_quote_cur <= min_cur) {
            /** @type {string} */
            this["selectedOverlayName"] = "MobileAdInGamePreroll3";
          }
        }
      }
      console["log"]("Ad rotating preroll enabled");
    } else {
      /** @type {string} */
      this["selectedOverlayName"] = "MobileAdInGamePreroll";
      console["log"]("Ad rotating preroll disabled");
    }
    console["log"]("selected:", this["selectedOverlayName"]);
    this["overlay"] = $("#" + this["selectedOverlayName"]);
    this["box"] = $("#" + this["selectedOverlayName"] + "-Box");
    this["game"] = $("#game");
    this["boxContents"] = {
      "footer" : $("#" + this["selectedOverlayName"] + "-Box-Footer"),
      "header" : $("#" + this["selectedOverlayName"] + "-Box-Header"),
      "close" : $("#" + this["selectedOverlayName"] + "-Box-Close"),
      "body" : $("#" + this["selectedOverlayName"] + "-Box-Body")
    };
    this["box"]["width"](this["ad_width"]);
    this["box"]["height"](this["ad_height"]);
    this["box"]["css"]("left", (this["overlay"]["width"]() - this["box"]["width"]()) / 2);
    this["box"]["css"]("top", (this["overlay"]["height"]() - this["box"]["height"]() - this["boxContents"]["header"]["height"]() - this["boxContents"]["footer"]["height"]()) / 2);
    this["overlay"]["show"](this["Timer"](this["ad_duration"]));
  },
  "Timer" : function(offset) {
    /** @type {number} */
    var endOfCentralDirOffset = offset;
    /** @type {number} */
    var chat_retry = setInterval(function() {
      MobileAdInGamePreroll["boxContents"]["header"]["text"](MobileAdInGamePreroll["ready_in"] + endOfCentralDirOffset + "...");
      MobileAdInGamePreroll["boxContents"]["footer"]["text"](MobileAdInGamePreroll["loading"]);
      endOfCentralDirOffset--;
      if (0 > endOfCentralDirOffset) {
        clearInterval(chat_retry);
        MobileAdInGamePreroll["boxContents"]["close"]["css"]("left", MobileAdInGamePreroll["boxContents"]["body"]["width"]() - 23);
        MobileAdInGamePreroll["boxContents"]["close"]["show"]();
        MobileAdInGamePreroll["boxContents"]["header"]["html"](MobileAdInGamePreroll["close"]);
        MobileAdInGamePreroll["boxContents"]["footer"]["text"]("");
      }
    }, 1E3);
  },
  "Close" : function() {
    this["boxContents"]["close"]["hide"]();
    this["overlay"]["hide"]();
  }
};
var MobileAdInGameHeader = {
  "ad_duration" : _SETTINGS["Ad"]["Mobile"]["Header"]["Duration"],
  "ad_width" : _SETTINGS["Ad"]["Mobile"]["Header"]["Width"],
  "ad_height" : _SETTINGS["Ad"]["Mobile"]["Header"]["Height"],
  "Initialize" : function() {
    if (_SETTINGS["Ad"]["Mobile"]["Header"]["Rotation"]["Enabled"]) {
      var min_cur = _SETTINGS["Ad"]["Mobile"]["Header"]["Rotation"]["Weight"];
      var cur_cur = min_cur["MobileAdInGameHeader"];
      var courseContentPage = cur_cur + min_cur["MobileAdInGameHeader2"];
      min_cur = courseContentPage + min_cur["MobileAdInGameHeader3"];
      var d_quote_cur = Math["floor"](100 * Math["random"]());
      console["log"]("seed: ", d_quote_cur);
      if (d_quote_cur <= cur_cur) {
        /** @type {string} */
        this["selectedOverlayName"] = "MobileAdInGameHeader";
      } else {
        if (d_quote_cur <= courseContentPage) {
          /** @type {string} */
          this["selectedOverlayName"] = "MobileAdInGameHeader2";
        } else {
          if (d_quote_cur <= min_cur) {
            /** @type {string} */
            this["selectedOverlayName"] = "MobileAdInGameHeader3";
          }
        }
      }
      console["log"]("Ad rotating header enabled");
    } else {
      /** @type {string} */
      this["selectedOverlayName"] = "MobileAdInGameHeader";
      console["log"]("Ad rotating header disabled");
    }
    this["div"] = $("#" + this["selectedOverlayName"]);
    this["game"] = $("#game");
    this["div"]["width"](this["ad_width"]);
    this["div"]["height"](this["ad_height"]);
    this["div"]["css"]("left", this["game"]["position"]()["left"] + (this["game"]["width"]() - this["div"]["width"]()) / 2);
    this["div"]["css"]("top", 0);
    this["div"]["show"](this["Timer"](this["ad_duration"]));
  },
  "Timer" : function(startTimeSeconds) {
    /** @type {number} */
    var chat_retry = setInterval(function() {
      startTimeSeconds--;
      if (0 > startTimeSeconds) {
        MobileAdInGameHeader["div"]["hide"]();
        clearInterval(chat_retry);
      }
    }, 1E3);
  }
};
var MobileAdInGameFooter = {
  "ad_duration" : _SETTINGS["Ad"]["Mobile"]["Footer"]["Duration"],
  "ad_width" : _SETTINGS["Ad"]["Mobile"]["Footer"]["Width"],
  "ad_height" : _SETTINGS["Ad"]["Mobile"]["Footer"]["Height"],
  "Initialize" : function() {
    if (_SETTINGS["Ad"]["Mobile"]["Footer"]["Rotation"]["Enabled"]) {
      var min_cur = _SETTINGS["Ad"]["Mobile"]["Footer"]["Rotation"]["Weight"];
      var cur_cur = min_cur["MobileAdInGameFooter"];
      var courseContentPage = cur_cur + min_cur["MobileAdInGameFooter2"];
      min_cur = courseContentPage + min_cur["MobileAdInGameFooter3"];
      var d_quote_cur = Math["floor"](100 * Math["random"]());
      console["log"]("seed: ", d_quote_cur);
      if (d_quote_cur <= cur_cur) {
        /** @type {string} */
        this["selectedOverlayName"] = "MobileAdInGameFooter";
      } else {
        if (d_quote_cur <= courseContentPage) {
          /** @type {string} */
          this["selectedOverlayName"] = "MobileAdInGameFooter2";
        } else {
          if (d_quote_cur <= min_cur) {
            /** @type {string} */
            this["selectedOverlayName"] = "MobileAdInGameFooter3";
          }
        }
      }
      console["log"]("Ad rotating footer enabled");
    } else {
      /** @type {string} */
      this["selectedOverlayName"] = "MobileAdInGameFooter";
      console["log"]("Ad rotating footer disabled");
    }
    this["div"] = $("#" + this["selectedOverlayName"]);
    this["game"] = $("#game");
    this["div"]["width"](this["ad_width"]);
    this["div"]["height"](this["ad_height"]);
    this["div"]["css"]("left", this["game"]["position"]()["left"] + (this["game"]["width"]() - this["div"]["width"]()) / 2);
    this["div"]["css"]("top", this["game"]["height"]() - this["div"]["height"]() - 5);
    this["div"]["show"](this["Timer"](this["ad_duration"]));
  },
  "Timer" : function(startTimeSeconds) {
    /** @type {number} */
    var chat_retry = setInterval(function() {
      startTimeSeconds--;
      if (0 > startTimeSeconds) {
        MobileAdInGameFooter["div"]["hide"]();
        clearInterval(chat_retry);
      }
    }, 1E3);
  }
};
var MobileAdInGameEnd = {
  "ad_duration" : _SETTINGS["Ad"]["Mobile"]["End"]["Duration"],
  "ad_width" : _SETTINGS["Ad"]["Mobile"]["End"]["Width"],
  "ad_height" : _SETTINGS["Ad"]["Mobile"]["End"]["Height"],
  "ready_in" : _STRINGS["Ad"]["Mobile"]["End"]["ReadyIn"],
  "loading" : _STRINGS["Ad"]["Mobile"]["End"]["Loading"],
  "close" : _STRINGS["Ad"]["Mobile"]["End"]["Close"] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
  "Initialize" : function() {
    if (_SETTINGS["Ad"]["Mobile"]["End"]["Rotation"]["Enabled"]) {
      var min_cur = _SETTINGS["Ad"]["Mobile"]["End"]["Rotation"]["Weight"];
      var cur_cur = min_cur["MobileAdInGameEnd"];
      var courseContentPage = cur_cur + min_cur["MobileAdInGameEnd2"];
      min_cur = courseContentPage + min_cur["MobileAdInGameEnd3"];
      var d_quote_cur = Math["floor"](100 * Math["random"]());
      console["log"]("seed: ", d_quote_cur);
      if (d_quote_cur <= cur_cur) {
        /** @type {string} */
        this["selectedOverlayName"] = "MobileAdInGameEnd";
      } else {
        if (d_quote_cur <= courseContentPage) {
          /** @type {string} */
          this["selectedOverlayName"] = "MobileAdInGameEnd2";
        } else {
          if (d_quote_cur <= min_cur) {
            /** @type {string} */
            this["selectedOverlayName"] = "MobileAdInGameEnd3";
          }
        }
      }
      console["log"]("Ad rotating end enabled");
    } else {
      /** @type {string} */
      this["selectedOverlayName"] = "MobileAdInGameEnd";
      console["log"]("Ad rotating end disabled");
    }
    console["log"]("selected:", this["selectedOverlayName"]);
    this["overlay"] = $("#" + this["selectedOverlayName"]);
    this["box"] = $("#" + this["selectedOverlayName"] + "-Box");
    this["game"] = $("#game");
    this["boxContents"] = {
      "footer" : $("#" + this["selectedOverlayName"] + "-Box-Footer"),
      "header" : $("#" + this["selectedOverlayName"] + "-Box-Header"),
      "close" : $("#" + this["selectedOverlayName"] + "-Box-Close"),
      "body" : $("#" + this["selectedOverlayName"] + "-Box-Body")
    };
    this["box"]["width"](this["ad_width"]);
    this["box"]["height"](this["ad_height"]);
    this["box"]["css"]("left", (this["overlay"]["width"]() - this["box"]["width"]()) / 2);
    this["box"]["css"]("top", (this["overlay"]["height"]() - this["box"]["height"]() - this["boxContents"]["header"]["height"]() - this["boxContents"]["footer"]["height"]()) / 2);
    this["overlay"]["show"](this["Timer"](this["ad_duration"]));
  },
  "Timer" : function(offset) {
    /** @type {number} */
    var endOfCentralDirOffset = offset;
    /** @type {number} */
    var chat_retry = setInterval(function() {
      MobileAdInGameEnd["boxContents"]["header"]["text"](MobileAdInGameEnd["ready_in"] + endOfCentralDirOffset + "...");
      MobileAdInGameEnd["boxContents"]["footer"]["text"](MobileAdInGameEnd["loading"]);
      endOfCentralDirOffset--;
      if (0 > endOfCentralDirOffset) {
        clearInterval(chat_retry);
        MobileAdInGameEnd["boxContents"]["close"]["css"]("left", MobileAdInGameEnd["boxContents"]["body"]["width"]() - 23);
        MobileAdInGameEnd["boxContents"]["close"]["show"]();
        MobileAdInGameEnd["boxContents"]["header"]["html"](MobileAdInGameEnd["close"]);
        MobileAdInGameEnd["boxContents"]["footer"]["text"]("");
      }
    }, 1E3);
  },
  "Close" : function() {
    this["boxContents"]["close"]["hide"]();
    this["overlay"]["hide"]();
  }
};
!function(window, callback) {
  var getAlignItem = function() {
    /** @type {boolean} */
    var closeExpr = !![];
    return function(object__360, function__361) {
      /** @type {!Function} */
      var closingExpr = closeExpr ? function() {
        if (function__361) {
          var cssobj = function__361["apply"](object__360, arguments);
          /** @type {null} */
          function__361 = null;
          return cssobj;
        }
      } : function() {
      };
      /** @type {boolean} */
      closeExpr = ![];
      return closingExpr;
    };
  }();
  var alignContentAlignItem = getAlignItem(this, function() {
    /**
     * @return {undefined}
     */
    var e = function() {
    };
    /**
     * @return {?}
     */
    var create = function() {
      var viewport;
      try {
        viewport = Function("return (function() " + '{}.constructor("return this")( )' + ");")();
      } catch (_0x4b6e31) {
        /** @type {!Window} */
        viewport = window;
      }
      return viewport;
    };
    var result = create();
    if (!result["console"]) {
      result["console"] = function(e) {
        var result = {};
        /** @type {function(): undefined} */
        result["log"] = e;
        /** @type {function(): undefined} */
        result["warn"] = e;
        /** @type {function(): undefined} */
        result["debug"] = e;
        /** @type {function(): undefined} */
        result["info"] = e;
        /** @type {function(): undefined} */
        result["error"] = e;
        /** @type {function(): undefined} */
        result["exception"] = e;
        /** @type {function(): undefined} */
        result["table"] = e;
        /** @type {function(): undefined} */
        result["trace"] = e;
        return result;
      }(e);
    } else {
      /** @type {function(): undefined} */
      result["console"]["log"] = e;
      /** @type {function(): undefined} */
      result["console"]["warn"] = e;
      /** @type {function(): undefined} */
      result["console"]["debug"] = e;
      /** @type {function(): undefined} */
      result["console"]["info"] = e;
      /** @type {function(): undefined} */
      result["console"]["error"] = e;
      /** @type {function(): undefined} */
      result["console"]["exception"] = e;
      /** @type {function(): undefined} */
      result["console"]["table"] = e;
      /** @type {function(): undefined} */
      result["console"]["trace"] = e;
    }
  });
  alignContentAlignItem();
  if ("object" == typeof module && "object" == typeof module["exports"]) {
    module["exports"] = window["document"] ? callback(window, true) : function(win) {
      if (!win["document"]) {
        throw Error("jQuery requires a window with a document");
      }
      return callback(win);
    };
  } else {
    callback(window);
  }
}("undefined" != typeof window ? window : this, function(window, zoomAware) {
  /**
   * @param {?} w
   * @param {!Object} doc
   * @return {undefined}
   */
  function createElement(w, doc) {
    doc = doc || document;
    var c = doc["createElement"]("script");
    c["text"] = w;
    doc["head"]["appendChild"](c)["parentNode"]["removeChild"](c);
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function each(obj) {
    var length = !!obj && "length" in obj && obj["length"];
    var ltype = $["type"](obj);
    return "function" !== ltype && !$["isWindow"](obj) && ("array" === ltype || 0 === length || "number" == typeof length && 0 < length && length - 1 in obj);
  }
  /**
   * @param {!Object} name
   * @param {string} selector
   * @return {?}
   */
  function callback(name, selector) {
    return name["nodeName"] && name["nodeName"]["toLowerCase"]() === selector["toLowerCase"]();
  }
  /**
   * @param {?} params
   * @param {!Object} value
   * @param {boolean} success
   * @return {?}
   */
  function parse(params, value, success) {
    return $["isFunction"](value) ? $["grep"](params, function(data, PL$3) {
      return !!value["call"](data, PL$3, data) !== success;
    }) : value["nodeType"] ? $["grep"](params, function(options) {
      return options === value !== success;
    }) : "string" != typeof value ? $["grep"](params, function(key) {
      return -1 < types["call"](value, key) !== success;
    }) : properties["test"](value) ? $["filter"](value, params, success) : (value = $["filter"](value, params), $["grep"](params, function(key) {
      return -1 < types["call"](value, key) !== success && 1 === key["nodeType"];
    }));
  }
  /**
   * @param {!Object} node
   * @param {string} siblingName
   * @return {?}
   */
  function firstSibling(node, siblingName) {
    for (; (node = node[siblingName]) && 1 !== node["nodeType"];) {
    }
    return node;
  }
  /**
   * @param {?} name
   * @return {?}
   */
  function name(name) {
    return name;
  }
  /**
   * @param {?} val
   * @return {?}
   */
  function res(val) {
    throw val;
  }
  /**
   * @param {?} x
   * @param {!Object} data
   * @param {!Object} key
   * @param {boolean} args
   * @return {undefined}
   */
  function step(x, data, key, args) {
    var then;
    try {
      if (x && $["isFunction"](then = x["promise"])) {
        then["call"](x)["done"](data)["fail"](key);
      } else {
        if (x && $["isFunction"](then = x["then"])) {
          then["call"](x, data, key);
        } else {
          data["apply"](void 0, [x]["slice"](args));
        }
      }
    } catch (PL$22) {
      key["apply"](void 0, [PL$22]);
    }
  }
  /**
   * @return {undefined}
   */
  function handler() {
    document["removeEventListener"]("DOMContentLoaded", handler);
    window["removeEventListener"]("load", handler);
    $["ready"]();
  }
  /**
   * @return {undefined}
   */
  function Element() {
    this["expando"] = $["expando"] + Element["uid"]++;
  }
  /**
   * @param {!Object} node
   * @param {!Object} target
   * @param {?} value
   * @return {?}
   */
  function set(node, target, value) {
    var attribute;
    if (void 0 === value && 1 === node["nodeType"]) {
      if (attribute = "data-" + target["replace"](wrapper, "-$&")["toLowerCase"](), value = node["getAttribute"](attribute), "string" == typeof value) {
        try {
          value = "true" === value || "false" !== value && ("null" === value ? null : value === +value + "" ? +value : task["test"](value) ? JSON["parse"](value) : value);
        } catch (_0x1a535d) {
        }
        parent["set"](node, target, value);
      } else {
        value = void 0;
      }
    }
    return value;
  }
  /**
   * @param {!Object} el
   * @param {!Object} name
   * @param {string} ret
   * @param {!Function} data
   * @return {?}
   */
  function add(el, name, ret, data) {
    var end;
    /** @type {number} */
    var scale = 1;
    /** @type {number} */
    var _0x2d0efb = 20;
    /** @type {function(): ?} */
    var query = data ? function() {
      return data["cur"]();
    } : function() {
      return $["css"](el, name, "");
    };
    var target = query();
    var unit = ret && ret[3] || ($["cssNumber"][name] ? "" : "px");
    var start = ($["cssNumber"][name] || "px" !== unit && +target) && context["exec"]($["css"](el, name));
    if (start && start[3] !== unit) {
      unit = unit || start[3];
      ret = ret || [];
      /** @type {number} */
      start = +target || 1;
      do {
        /** @type {(number|string)} */
        scale = scale || ".5";
        /** @type {number} */
        start = start / scale;
        $["style"](el, name, start + unit);
      } while (scale !== (scale = query() / target) && 1 !== scale && --_0x2d0efb);
    }
    return ret && (start = +start || +target || 0, end = ret[1] ? start + (ret[1] + 1) * ret[2] : +ret[2], data && (data["unit"] = unit, data["start"] = start, data["end"] = end)), end;
  }
  /**
   * @param {!Object} data
   * @param {boolean} keepHistory
   * @return {?}
   */
  function hide(data, keepHistory) {
    var display;
    var element;
    /** @type {!Array} */
    var results = [];
    /** @type {number} */
    var i = 0;
    var key = data["length"];
    for (; i < key; i++) {
      if (element = data[i], element["style"]) {
        if (display = element["style"]["display"], keepHistory) {
          if ("none" === display && (results[i] = target["get"](element, "display") || null, results[i] || (element["style"]["display"] = "")), "" === element["style"]["display"] && animate(element)) {
            /** @type {!Array} */
            display = results;
            /** @type {number} */
            var key = i;
            var doc;
            var el = void 0;
            doc = element["ownerDocument"];
            var name = element["nodeName"];
            doc = (element = masterPages[name]) ? element : (el = doc["body"]["appendChild"](doc["createElement"](name)), element = $["css"](el, "display"), el["parentNode"]["removeChild"](el), "none" === element && (element = "block"), masterPages[name] = element, element);
            display[key] = doc;
          }
        } else {
          if ("none" !== display) {
            /** @type {string} */
            results[i] = "none";
            target["set"](element, "display", display);
          }
        }
      }
    }
    /** @type {number} */
    i = 0;
    for (; i < key; i++) {
      if (null != results[i]) {
        data[i]["style"]["display"] = results[i];
      }
    }
    return data;
  }
  /**
   * @param {!Object} doc
   * @param {number} data
   * @return {?}
   */
  function getAll(doc, data) {
    var enableScale;
    return enableScale = "undefined" != typeof doc["getElementsByTagName"] ? doc["getElementsByTagName"](data || "*") : "undefined" != typeof doc["querySelectorAll"] ? doc["querySelectorAll"](data || "*") : [], void 0 === data || data && callback(doc, data) ? $["merge"]([doc], enableScale) : enableScale;
  }
  /**
   * @param {!Object} elems
   * @param {!NodeList} refElements
   * @return {undefined}
   */
  function setGlobalEval(elems, refElements) {
    /** @type {number} */
    var i = 0;
    var node = elems["length"];
    for (; i < node; i++) {
      target["set"](elems[i], "globalEval", !refElements || target["get"](refElements[i], "globalEval"));
    }
  }
  /**
   * @param {!Object} args
   * @param {!Object} doc
   * @param {?} obj
   * @param {!Object} params
   * @param {!Object} callback
   * @return {?}
   */
  function create(args, doc, obj, params, callback) {
    var value;
    var el;
    var tag;
    var view;
    var target = doc["createDocumentFragment"]();
    /** @type {!Array} */
    var params = [];
    /** @type {number} */
    var i = 0;
    var len = args["length"];
    for (; i < len; i++) {
      if (value = args[i], value || 0 === value) {
        if ("object" === $["type"](value)) {
          $["merge"](params, value["nodeType"] ? [value] : value);
        } else {
          if (B262["test"](value)) {
            el = el || target["appendChild"](doc["createElement"]("div"));
            tag = (writeScale["exec"](value) || ["", ""])[1]["toLowerCase"]();
            tag = wrapMap[tag] || wrapMap["_default"];
            el["innerHTML"] = tag[1] + $["htmlPrefilter"](value) + tag[2];
            tag = tag[0];
            for (; tag--;) {
              el = el["lastChild"];
            }
            $["merge"](params, el["childNodes"]);
            el = target["firstChild"];
            /** @type {string} */
            el["textContent"] = "";
          } else {
            params["push"](doc["createTextNode"](value));
          }
        }
      }
    }
    /** @type {string} */
    target["textContent"] = "";
    /** @type {number} */
    i = 0;
    for (; value = params[i++];) {
      if (params && -1 < $["inArray"](value, params)) {
        if (callback) {
          callback["push"](value);
        }
      } else {
        if (view = $["contains"](value["ownerDocument"], value), el = getAll(target["appendChild"](value), "script"), view && setGlobalEval(el), obj) {
          /** @type {number} */
          tag = 0;
          for (; value = el[tag++];) {
            if (url["test"](value["type"] || "")) {
              obj["push"](value);
            }
          }
        }
      }
    }
    return target;
  }
  /**
   * @return {?}
   */
  function almost_equals() {
    return true;
  }
  /**
   * @return {?}
   */
  function returnFalse() {
    return false;
  }
  /**
   * @return {?}
   */
  function ensureEvents() {
    try {
      return document["activeElement"];
    } catch (_0x1282b4) {
    }
  }
  /**
   * @param {!Object} api
   * @param {!Object} data
   * @param {!Object} value
   * @param {!Node} key
   * @param {!Node} fn
   * @param {number} callback
   * @return {?}
   */
  function start(api, data, value, key, fn, callback) {
    var f;
    var name;
    if ("object" == typeof data) {
      if ("string" != typeof value) {
        key = key || value;
        value = void 0;
      }
      for (name in data) {
        start(api, name, value, key, data[name], callback);
      }
      return api;
    }
    if (null == key && null == fn ? (fn = value, key = value = void 0) : null == fn && ("string" == typeof value ? (fn = key, key = void 0) : (fn = key, key = value, value = void 0)), false === fn) {
      /** @type {function(): ?} */
      fn = returnFalse;
    } else {
      if (!fn) {
        return api;
      }
    }
    return 1 === callback && (f = fn, fn = function(event) {
      return $()["off"](event), f["apply"](this, arguments);
    }, fn["guid"] = f["guid"] || (f["guid"] = $["guid"]++)), api["each"](function() {
      $["event"]["add"](this, data, fn, key, value);
    });
  }
  /**
   * @param {!Object} elem
   * @param {!Object} el
   * @return {?}
   */
  function next(elem, el) {
    return callback(elem, "table") && callback(11 !== el["nodeType"] ? el : el["firstChild"], "tr") ? $(">tbody", elem)[0] || elem : elem;
  }
  /**
   * @param {!Object} node
   * @return {?}
   */
  function display(node) {
    return node["type"] = (null !== node["getAttribute"]("type")) + "/" + node["type"], node;
  }
  /**
   * @param {!Object} element
   * @return {?}
   */
  function transform(element) {
    var value = operators["exec"](element["type"]);
    return value ? element["type"] = value[1] : element["removeAttribute"]("type"), element;
  }
  /**
   * @param {!Object} type
   * @param {!Object} value
   * @return {undefined}
   */
  function extend(type, value) {
    var i;
    var o;
    var type;
    var options;
    var content;
    var events;
    if (1 === value["nodeType"]) {
      if (target["hasData"](type) && (i = target["access"](type), o = target["set"](value, i), events = i["events"])) {
        for (type in delete o["handle"], o["events"] = {}, events) {
          /** @type {number} */
          i = 0;
          o = events[type]["length"];
          for (; i < o; i++) {
            $["event"]["add"](value, type, events[type][i]);
          }
        }
      }
      if (parent["hasData"](type)) {
        options = parent["access"](type);
        content = $["extend"]({}, options);
        parent["set"](value, content);
      }
    }
  }
  /**
   * @param {!Object} args
   * @param {!Object} message
   * @param {!Function} options
   * @param {!Object} callback
   * @return {?}
   */
  function update(args, message, options, callback) {
    message = concat["apply"]([], message);
    var node;
    var key;
    var passwordLength;
    var el;
    /** @type {number} */
    var i = 0;
    var length = args["length"];
    /** @type {number} */
    var endIndex = length - 1;
    var data = message[0];
    var myDoughnutChart = $["isFunction"](data);
    if (myDoughnutChart || 1 < length && "string" == typeof data && !value["checkClone"] && loader_calback["test"](data)) {
      return args["each"](function(b) {
        var item = args["eq"](b);
        if (myDoughnutChart) {
          message[0] = data["call"](this, b, item["html"]());
        }
        update(item, message, options, callback);
      });
    }
    if (length && (node = create(message, args[0]["ownerDocument"], false, args, callback), key = node["firstChild"], 1 === node["childNodes"]["length"] && (node = key), key || callback)) {
      key = $["map"](getAll(node, "script"), display);
      passwordLength = key["length"];
      for (; i < length; i++) {
        el = node;
        if (i !== endIndex) {
          el = $["clone"](el, true, true);
          if (passwordLength) {
            $["merge"](key, getAll(el, "script"));
          }
        }
        options["call"](args[i], el, i);
      }
      if (passwordLength) {
        node = key[key["length"] - 1]["ownerDocument"];
        $["map"](key, transform);
        /** @type {number} */
        i = 0;
        for (; i < passwordLength; i++) {
          el = key[i];
          if (url["test"](el["type"] || "") && !target["access"](el, "globalEval") && $["contains"](node, el)) {
            if (el["src"]) {
              if ($["_evalUrl"]) {
                $["_evalUrl"](el["src"]);
              }
            } else {
              createElement(el["textContent"]["replace"](d, ""), node);
            }
          }
        }
      }
    }
    return args;
  }
  /**
   * @param {!Object} row
   * @param {!Object} el
   * @param {string} doNotAppendToCanvas
   * @return {?}
   */
  function remove(row, el, doNotAppendToCanvas) {
    var _ref8 = el ? $["filter"](el, row) : row;
    /** @type {number} */
    var _l = 0;
    for (; null != (el = _ref8[_l]); _l++) {
      if (!(doNotAppendToCanvas || 1 !== el["nodeType"])) {
        $["cleanData"](getAll(el));
      }
      if (el["parentNode"]) {
        if (doNotAppendToCanvas && $["contains"](el["ownerDocument"], el)) {
          setGlobalEval(getAll(el, "script"));
        }
        el["parentNode"]["removeChild"](el);
      }
    }
    return row;
  }
  /**
   * @param {!Object} el
   * @param {!Object} name
   * @param {!Object} computed
   * @return {?}
   */
  function curCSS(el, name, computed) {
    var width;
    var height;
    var ret;
    var val;
    var data = el["style"];
    return computed = computed || getStyles(el), computed && (val = computed["getPropertyValue"](name) || computed[name], "" !== val || $["contains"](el["ownerDocument"], el) || (val = $["style"](el, name)), !value["pixelMarginRight"]() && color["test"](val) && style["test"](name) && (width = data["width"], height = data["minWidth"], ret = data["maxWidth"], data["minWidth"] = data["maxWidth"] = data["width"] = val, val = computed["width"], data["width"] = width, data["minWidth"] = height, data["maxWidth"] = 
    ret)), void 0 !== val ? val + "" : val;
  }
  /**
   * @param {?} isArray
   * @param {!Function} value
   * @return {?}
   */
  function deserialize(isArray, value) {
    return {
      "get" : function() {
        return isArray() ? void delete this["get"] : (this["get"] = value)["apply"](this, arguments);
      }
    };
  }
  /**
   * @param {number} name
   * @return {?}
   */
  function vendorPropName(name) {
    var acc = $["cssProps"][name];
    if (!acc) {
      acc = $["cssProps"];
      var v;
      _0x34a488: {
        if (v = name, !(v in val)) {
          var name = v[0]["toUpperCase"]() + v["slice"](1);
          var prefix = prefixes["length"];
          for (; prefix--;) {
            if (v = prefixes[prefix] + name, v in val) {
              break _0x34a488;
            }
          }
          v = void 0;
        }
      }
      acc = acc[name] = v || name;
    }
    return acc;
  }
  /**
   * @param {!Object} m
   * @param {(Array|HTMLCollection|Node|NodeList|Window|string)} name
   * @param {string} results
   * @return {?}
   */
  function show(m, name, results) {
    return (m = context["exec"](name)) ? Math["max"](0, m[2] - (results || 0)) + (m[3] || "px") : name;
  }
  /**
   * @param {!Object} elem
   * @param {number} i
   * @param {string} extra
   * @param {boolean} isBorderBox
   * @param {?} styles
   * @return {?}
   */
  function augmentWidthOrHeight(elem, i, extra, isBorderBox, styles) {
    /** @type {number} */
    var val = 0;
    /** @type {number} */
    i = extra === (isBorderBox ? "border" : "content") ? 4 : "width" === i ? 1 : 0;
    for (; 4 > i; i = i + 2) {
      if ("margin" === extra) {
        val = val + $["css"](elem, extra + cssExpand[i], true, styles);
      }
      if (isBorderBox) {
        if ("content" === extra) {
          /** @type {number} */
          val = val - $["css"](elem, "padding" + cssExpand[i], true, styles);
        }
        if ("margin" !== extra) {
          /** @type {number} */
          val = val - $["css"](elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      } else {
        val = val + $["css"](elem, "padding" + cssExpand[i], true, styles);
        if ("padding" !== extra) {
          val = val + $["css"](elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    }
    return val;
  }
  /**
   * @param {!Object} elem
   * @param {?} name
   * @param {string} extra
   * @return {?}
   */
  function getWidthOrHeight(elem, name, extra) {
    var valueIsBorderBox;
    var styles = getStyles(elem);
    var val = curCSS(elem, name, styles);
    /** @type {boolean} */
    var isBorderBox = "border-box" === $["css"](elem, "boxSizing", false, styles);
    return color["test"](val) ? val : (valueIsBorderBox = isBorderBox && (value["boxSizingReliable"]() || val === elem["style"][name]), "auto" === val && (val = elem["offset" + name[0]["toUpperCase"]() + name["slice"](1)]), val = parseFloat(val) || 0, val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px");
  }
  /**
   * @param {!Object} obj
   * @param {!Object} row
   * @param {!Object} name
   * @param {!Object} task_executor
   * @param {!Object} task_cancellor
   * @return {?}
   */
  function Task(obj, row, name, task_executor, task_cancellor) {
    return new Task["prototype"]["init"](obj, row, name, task_executor, task_cancellor);
  }
  /**
   * @return {undefined}
   */
  function factory() {
    if (_0x4aeb69) {
      if (false === document["hidden"] && window["requestAnimationFrame"]) {
        window["requestAnimationFrame"](factory);
      } else {
        window["setTimeout"](factory, $["fx"]["interval"]);
      }
      $["fx"]["tick"]();
    }
  }
  /**
   * @return {?}
   */
  function notify() {
    return window["setTimeout"](function() {
      fxNow = void 0;
    }), fxNow = $["now"]();
  }
  /**
   * @param {number} type
   * @param {number} includeWidth
   * @return {?}
   */
  function genFx(type, includeWidth) {
    var which;
    /** @type {number} */
    var i = 0;
    var attrs = {
      "height" : type
    };
    /** @type {number} */
    includeWidth = includeWidth ? 1 : 0;
    for (; 4 > i; i = i + (2 - includeWidth)) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }
    return includeWidth && (attrs["opacity"] = attrs["width"] = type), attrs;
  }
  /**
   * @param {?} key
   * @param {string} source
   * @param {?} args
   * @return {?}
   */
  function process(key, source, args) {
    var result;
    var keyopt = (render["tweeners"][source] || [])["concat"](render["tweeners"]["*"]);
    /** @type {number} */
    var type = 0;
    var length = keyopt["length"];
    for (; type < length; type++) {
      if (result = keyopt[type]["call"](args, source, key)) {
        return result;
      }
    }
  }
  /**
   * @param {!Object} el
   * @param {!Array} o
   * @param {!Object} options
   * @return {?}
   */
  function render(el, o, options) {
    var i;
    var _0x50330a;
    /** @type {number} */
    var index = 0;
    var length = render["prefilters"]["length"];
    var self = $["Deferred"]()["always"](function() {
      delete next["elem"];
    });
    /**
     * @return {?}
     */
    var next = function() {
      if (_0x50330a) {
        return false;
      }
      var currentTime = fxNow || notify();
      currentTime = Math["max"](0, data["startTime"] + data["duration"] - currentTime);
      /** @type {number} */
      var i = 1 - (currentTime / data["duration"] || 0);
      /** @type {number} */
      var index = 0;
      var next = data["tweens"]["length"];
      for (; index < next; index++) {
        data["tweens"][index]["run"](i);
      }
      return self["notifyWith"](el, [data, i, currentTime]), 1 > i && next ? currentTime : (next || self["notifyWith"](el, [data, 1, 0]), self["resolveWith"](el, [data]), false);
    };
    var data = self["promise"]({
      "elem" : el,
      "props" : $["extend"]({}, o),
      "opts" : $["extend"](true, {
        "specialEasing" : {},
        "easing" : $["easing"]["_default"]
      }, options),
      "originalProperties" : o,
      "originalOptions" : options,
      "startTime" : fxNow || notify(),
      "duration" : options["duration"],
      "tweens" : [],
      "createTween" : function(options, animation) {
        var value = $["Tween"](el, data["opts"], options, animation, data["opts"]["specialEasing"][options] || data["opts"]["easing"]);
        return data["tweens"]["push"](value), value;
      },
      "stop" : function(selector) {
        /** @type {number} */
        var n = 0;
        var elems = selector ? data["tweens"]["length"] : 0;
        if (_0x50330a) {
          return this;
        }
        /** @type {boolean} */
        _0x50330a = true;
        for (; n < elems; n++) {
          data["tweens"][n]["run"](1);
        }
        return selector ? (self["notifyWith"](el, [data, 1, 0]), self["resolveWith"](el, [data, selector])) : self["rejectWith"](el, [data, selector]), this;
      }
    });
    o = data["props"];
    options = data["opts"]["specialEasing"];
    var name;
    var p;
    var c;
    var hooks;
    for (i in o) {
      if (name = $["camelCase"](i), p = options[name], c = o[i], Array["isArray"](c) && (p = c[1], c = o[i] = c[0]), i !== name && (o[name] = c, delete o[i]), hooks = $["cssHooks"][name], hooks && "expand" in hooks) {
        for (i in c = hooks["expand"](c), delete o[name], c) {
          if (!(i in o)) {
            o[i] = c[i];
            options[i] = p;
          }
        }
      } else {
        options[name] = p;
      }
    }
    for (; index < length; index++) {
      if (i = render["prefilters"][index]["call"](data, el, o, data["opts"])) {
        return $["isFunction"](i["stop"]) && ($["_queueHooks"](data["elem"], data["opts"]["queue"])["stop"] = $["proxy"](i["stop"], i)), i;
      }
    }
    return $["map"](o, process, data), $["isFunction"](data["opts"]["start"]) && data["opts"]["start"]["call"](el, data), data["progress"](data["opts"]["progress"])["done"](data["opts"]["done"], data["opts"]["complete"])["fail"](data["opts"]["fail"])["always"](data["opts"]["always"]), $["fx"]["timer"]($["extend"](next, {
      "elem" : el,
      "anim" : data,
      "queue" : data["opts"]["queue"]
    })), data;
  }
  /**
   * @param {!Map} data
   * @return {?}
   */
  function resolve(data) {
    return (data["match"](arg) || [])["join"](" ");
  }
  /**
   * @param {!Object} el
   * @return {?}
   */
  function trim(el) {
    return el["getAttribute"] && el["getAttribute"]("class") || "";
  }
  /**
   * @param {string} value
   * @param {!Array} data
   * @param {string} callback
   * @param {!Function} done
   * @return {undefined}
   */
  function build(value, data, callback, done) {
    var key;
    if (Array["isArray"](data)) {
      $["each"](data, function(singular, data) {
        if (callback || settingHandler["test"](value)) {
          done(value, data);
        } else {
          build(value + "[" + ("object" == typeof data && null != data ? singular : "") + "]", data, callback, done);
        }
      });
    } else {
      if (callback || "object" !== $["type"](data)) {
        done(value, data);
      } else {
        for (key in data) {
          build(value + "[" + key + "]", data[key], callback, done);
        }
      }
    }
  }
  /**
   * @param {!Object} structure
   * @return {?}
   */
  function addToPrefiltersOrTransports(structure) {
    return function(url, value) {
      if ("string" != typeof url) {
        /** @type {string} */
        value = url;
        /** @type {string} */
        url = "*";
      }
      var name;
      /** @type {number} */
      var callbackCount = 0;
      var callbackVals = url["toLowerCase"]()["match"](arg) || [];
      if ($["isFunction"](value)) {
        for (; name = callbackVals[callbackCount++];) {
          if ("+" === name[0]) {
            name = name["slice"](1) || "*";
            (structure[name] = structure[name] || [])["unshift"](value);
          } else {
            (structure[name] = structure[name] || [])["push"](value);
          }
        }
      }
    };
  }
  /**
   * @param {!Object} structure
   * @param {!Object} code
   * @param {!Object} context
   * @param {?} options
   * @return {?}
   */
  function cb(structure, code, context, options) {
    /**
     * @param {string} s
     * @return {?}
     */
    function wrap(s) {
      var current_metrics;
      return count[s] = true, $["each"](structure[s] || [], function(canCreateDiscussions, fn) {
        var res = fn(code, context, options);
        return "string" != typeof res || seekingTransport || count[res] ? seekingTransport ? !(current_metrics = res) : void 0 : (code["dataTypes"]["unshift"](res), wrap(res), false);
      }), current_metrics;
    }
    var count = {};
    /** @type {boolean} */
    var seekingTransport = structure === transports;
    return wrap(code["dataTypes"][0]) || !count["*"] && wrap("*");
  }
  /**
   * @param {string} target
   * @param {!Array} opts
   * @return {?}
   */
  function ajaxExtend(target, opts) {
    var key;
    var data;
    var flatOptions = $["ajaxSettings"]["flatOptions"] || {};
    for (key in opts) {
      if (void 0 !== opts[key]) {
        (flatOptions[key] ? target : data || (data = {}))[key] = opts[key];
      }
    }
    return data && $["extend"](true, target, data), target;
  }
  /** @type {!Array} */
  var AP = [];
  var document = window["document"];
  var isWindow = Object["getPrototypeOf"];
  var function__361 = AP["slice"];
  var concat = AP["concat"];
  var push = AP["push"];
  var types = AP["indexOf"];
  var class2type = {};
  var fn = class2type["toString"];
  var PL$2 = class2type["hasOwnProperty"];
  var then = PL$2["toString"];
  var Mixin2 = then["call"](Object);
  var value = {};
  /**
   * @param {!Object} obj
   * @param {!Object} var_args
   * @return {?}
   */
  var $ = function(obj, var_args) {
    return new $["fn"]["init"](obj, var_args);
  };
  /** @type {!RegExp} */
  var yieldRe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  /** @type {!RegExp} */
  var Y = /^-ms-/;
  /** @type {!RegExp} */
  var rvolatile = /-([a-z])/g;
  /**
   * @param {?} value
   * @param {!Object} context
   * @return {?}
   */
  var yy = function(value, context) {
    return context["toUpperCase"]();
  };
  $["fn"] = $["prototype"] = {
    "jquery" : "3.2.1",
    "constructor" : $,
    "length" : 0,
    "toArray" : function() {
      return function__361["call"](this);
    },
    "get" : function(offset) {
      return null == offset ? function__361["call"](this) : 0 > offset ? this[offset + this["length"]] : this[offset];
    },
    "pushStack" : function(name) {
      name = $["merge"](this["constructor"](), name);
      return name["prevObject"] = this, name;
    },
    "each" : function(element) {
      return $["each"](this, element);
    },
    "map" : function(PL$2) {
      return this["pushStack"]($["map"](this, function(PL$16, PL$24) {
        return PL$2["call"](PL$16, PL$24, PL$16);
      }));
    },
    "slice" : function() {
      return this["pushStack"](function__361["apply"](this, arguments));
    },
    "first" : function() {
      return this["eq"](0);
    },
    "last" : function() {
      return this["eq"](-1);
    },
    "eq" : function(i) {
      var len = this["length"];
      i = +i + (0 > i ? len : 0);
      return this["pushStack"](0 <= i && i < len ? [this[i]] : []);
    },
    "end" : function() {
      return this["prevObject"] || this["constructor"]();
    },
    "push" : push,
    "sort" : AP["sort"],
    "splice" : AP["splice"]
  };
  /** @type {function(): ?} */
  $["extend"] = $["fn"]["extend"] = function() {
    var details;
    var id;
    var url;
    var data;
    var lineChartMap;
    var options;
    var target = arguments[0] || {};
    /** @type {number} */
    var i = 1;
    var length = arguments["length"];
    /** @type {boolean} */
    var value = false;
    if ("boolean" == typeof target) {
      /** @type {boolean} */
      value = target;
      target = arguments[i] || {};
      i++;
    }
    if (!("object" == typeof target || $["isFunction"](target))) {
      target = {};
    }
    if (i === length) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      if (null != (details = arguments[i])) {
        for (id in details) {
          url = target[id];
          data = details[id];
          if (target !== data) {
            if (value && data && ($["isPlainObject"](data) || (lineChartMap = Array["isArray"](data)))) {
              if (lineChartMap) {
                /** @type {boolean} */
                lineChartMap = false;
                options = url && Array["isArray"](url) ? url : [];
              } else {
                options = url && $["isPlainObject"](url) ? url : {};
              }
              target[id] = $["extend"](value, options, data);
            } else {
              if (void 0 !== data) {
                target[id] = data;
              }
            }
          }
        }
      }
    }
    return target;
  };
  $["extend"]({
    "expando" : "jQuery" + ("3.2.1" + Math["random"]())["replace"](/\D/g, ""),
    "isReady" : true,
    "error" : function(message) {
      throw Error(message);
    },
    "noop" : function() {
    },
    "isFunction" : function(value) {
      return "function" === $["type"](value);
    },
    "isWindow" : function(obj) {
      return null != obj && obj === obj["window"];
    },
    "isNumeric" : function(value) {
      var undefined = $["type"](value);
      return ("number" === undefined || "string" === undefined) && !isNaN(value - parseFloat(value));
    },
    "isPlainObject" : function(obj) {
      var PL$16;
      var x;
      return !(!obj || "[object Object]" !== fn["call"](obj)) && (!(PL$16 = isWindow(obj)) || (x = PL$2["call"](PL$16, "constructor") && PL$16["constructor"], "function" == typeof x && then["call"](x) === Mixin2));
    },
    "isEmptyObject" : function(object) {
      var name;
      for (name in object) {
        return false;
      }
      return true;
    },
    "type" : function(obj) {
      return null == obj ? obj + "" : "object" == typeof obj || "function" == typeof obj ? class2type[fn["call"](obj)] || "object" : typeof obj;
    },
    "globalEval" : function(x) {
      createElement(x);
    },
    "camelCase" : function(str) {
      return str["replace"](Y, "ms-")["replace"](rvolatile, yy);
    },
    "each" : function(obj, map) {
      var result;
      /** @type {number} */
      var key = 0;
      if (each(obj)) {
        result = obj["length"];
        for (; key < result && false !== map["call"](obj[key], key, obj[key]); key++) {
        }
      } else {
        for (key in obj) {
          if (false === map["call"](obj[key], key, obj[key])) {
            break;
          }
        }
      }
      return obj;
    },
    "trim" : function(text) {
      return null == text ? "" : (text + "")["replace"](yieldRe, "");
    },
    "makeArray" : function(n, results) {
      var ret = results || [];
      return null != n && (each(Object(n)) ? $["merge"](ret, "string" == typeof n ? [n] : n) : push["call"](ret, n)), ret;
    },
    "inArray" : function(parentNode, node, src) {
      return null == node ? -1 : types["call"](node, parentNode, src);
    },
    "merge" : function(map, array) {
      /** @type {number} */
      var NUMBER_OF_FOLLOWERS = +array["length"];
      /** @type {number} */
      var i = 0;
      var index = map["length"];
      for (; i < NUMBER_OF_FOLLOWERS; i++) {
        map[index++] = array[i];
      }
      return map["length"] = index, map;
    },
    "grep" : function(arr, callback, inv) {
      /** @type {!Array} */
      var umecob = [];
      /** @type {number} */
      var i = 0;
      var length = arr["length"];
      /** @type {boolean} */
      var retVal = !inv;
      for (; i < length; i++) {
        /** @type {boolean} */
        inv = !callback(arr[i], i);
        if (inv !== retVal) {
          umecob["push"](arr[i]);
        }
      }
      return umecob;
    },
    "map" : function(array, fun, row) {
      var result;
      var value;
      /** @type {number} */
      var key = 0;
      /** @type {!Array} */
      var PL$64 = [];
      if (each(array)) {
        result = array["length"];
        for (; key < result; key++) {
          value = fun(array[key], key, row);
          if (null != value) {
            PL$64["push"](value);
          }
        }
      } else {
        for (key in array) {
          value = fun(array[key], key, row);
          if (null != value) {
            PL$64["push"](value);
          }
        }
      }
      return concat["apply"]([], PL$64);
    },
    "guid" : 1,
    "proxy" : function(data, f) {
      var obj;
      var res;
      var getOwnPropertyNames;
      if ("string" == typeof f && (obj = data[f], f = data, data = obj), $["isFunction"](data)) {
        return res = function__361["call"](arguments, 2), getOwnPropertyNames = function() {
          return data["apply"](f || this, res["concat"](function__361["call"](arguments)));
        }, getOwnPropertyNames["guid"] = data["guid"] = data["guid"] || $["guid"]++, getOwnPropertyNames;
      }
    },
    "now" : Date["now"],
    "support" : value
  });
  if ("function" == typeof Symbol) {
    $["fn"][Symbol["iterator"]] = AP[Symbol["iterator"]];
  }
  $["each"]("Boolean Number String Function Array Date RegExp Object Error Symbol"["split"](" "), function(canCreateDiscussions, B58) {
    class2type["[object " + B58 + "]"] = B58["toLowerCase"]();
  });
  var data;
  /** @type {!Object} */
  var global = window;
  /**
   * @param {!Object} data
   * @param {!Object} el
   * @param {!Object} x
   * @param {!Array} obj
   * @return {?}
   */
  var test = function(data, el, x, obj) {
    var key;
    var a;
    var nid;
    var possibleKeys;
    var receiver;
    var config = el && el["ownerDocument"];
    var ret = el ? el["nodeType"] : 9;
    if (x = x || [], "string" != typeof data || !data || 1 !== ret && 9 !== ret && 11 !== ret) {
      return x;
    }
    if (!obj && ((el ? el["ownerDocument"] || el : undefined) !== doc && func(el), el = el || doc, documentIsHTML)) {
      if (11 !== ret && (possibleKeys = command_codes["exec"](data))) {
        if (key = possibleKeys[1]) {
          if (9 === ret) {
            if (!(a = el["getElementById"](key))) {
              return x;
            }
            if (a["id"] === key) {
              return x["push"](a), x;
            }
          } else {
            if (config && (a = config["getElementById"](key)) && has(el, a) && a["id"] === key) {
              return x["push"](a), x;
            }
          }
        } else {
          if (possibleKeys[2]) {
            return console["apply"](x, el["getElementsByTagName"](data)), x;
          }
          if ((key = possibleKeys[3]) && node["getElementsByClassName"] && el["getElementsByClassName"]) {
            return console["apply"](x, el["getElementsByClassName"](key)), x;
          }
        }
      }
      if (node["qsa"] && !entry[data + " "] && (!a || !a["test"](data))) {
        if (1 !== ret) {
          /** @type {!Object} */
          config = el;
          /** @type {!Object} */
          receiver = data;
        } else {
          if ("object" !== el["nodeName"]["toLowerCase"]()) {
            if (nid = el["getAttribute"]("id")) {
              nid = nid["replace"](rescape, applyTheme);
            } else {
              el["setAttribute"]("id", nid = expando);
            }
            a = f(data);
            key = a["length"];
            for (; key--;) {
              /** @type {string} */
              a[key] = "#" + nid + " " + isArray(a[key]);
            }
            receiver = a["join"](",");
            config = handlers["test"](data) && isObject(el["parentNode"]) || el;
          }
        }
        if (receiver) {
          try {
            return console["apply"](x, config["querySelectorAll"](receiver)), x;
          } catch (_0x4753bd) {
          } finally {
            if (nid === expando) {
              el["removeAttribute"]("id");
            }
          }
        }
      }
    }
    return select(data["replace"](rtrim, "$1"), el, x, obj);
  };
  /**
   * @return {?}
   */
  var parseLine = function() {
    /**
     * @param {string} PL$36
     * @param {?} PL$37
     * @return {?}
     */
    function PL$45(PL$36, PL$37) {
      return PL$26["push"](PL$36 + " ") > params["cacheLength"] && delete PL$45[PL$26["shift"]()], PL$45[PL$36 + " "] = PL$37;
    }
    /** @type {!Array} */
    var PL$26 = [];
    return PL$45;
  };
  /**
   * @param {!Function} fn
   * @return {?}
   */
  var markFunction = function(fn) {
    return fn[expando] = true, fn;
  };
  /**
   * @param {!Function} each
   * @return {?}
   */
  var live = function(each) {
    var el = doc["createElement"]("fieldset");
    try {
      return !!each(el);
    } catch (_0x4cc2ae) {
      return false;
    } finally {
      if (el["parentNode"]) {
        el["parentNode"]["removeChild"](el);
      }
    }
  };
  /**
   * @param {!Object} gradient
   * @param {!Function} options
   * @return {undefined}
   */
  var install = function(gradient, options) {
    var packet = gradient["split"]("|");
    var name = packet["length"];
    for (; name--;) {
      /** @type {!Function} */
      params["attrHandle"][packet[name]] = options;
    }
  };
  /**
   * @param {!Object} result
   * @param {!Object} data
   * @return {?}
   */
  var contains = function(result, data) {
    var name = data && result;
    var found = name && 1 === result["nodeType"] && 1 === data["nodeType"] && result["sourceIndex"] - data["sourceIndex"];
    if (found) {
      return found;
    }
    if (name) {
      for (; name = name["nextSibling"];) {
        if (name === data) {
          return -1;
        }
      }
    }
    return result ? 1 : -1;
  };
  /**
   * @param {!Object} target
   * @return {?}
   */
  var get4Parity = function(target) {
    return function(result) {
      return "input" === result["nodeName"]["toLowerCase"]() && result["type"] === target;
    };
  };
  /**
   * @param {!Object} target
   * @return {?}
   */
  var createButtonPseudo = function(target) {
    return function(result) {
      var undefined = result["nodeName"]["toLowerCase"]();
      return ("input" === undefined || "button" === undefined) && result["type"] === target;
    };
  };
  /**
   * @param {boolean} disabled
   * @return {?}
   */
  var createDisabledPseudo = function(disabled) {
    return function(elem) {
      return "form" in elem ? elem["parentNode"] && false === elem["disabled"] ? "label" in elem ? "label" in elem["parentNode"] ? elem["parentNode"]["disabled"] === disabled : elem["disabled"] === disabled : elem["isDisabled"] === disabled || elem["isDisabled"] !== !disabled && disabledAncestor(elem) === disabled : elem["disabled"] === disabled : "label" in elem && elem["disabled"] === disabled;
    };
  };
  /**
   * @param {!Function} callback
   * @return {?}
   */
  var createPositionalPseudo = function(callback) {
    return markFunction(function(count) {
      return count = +count, markFunction(function(a, b) {
        var i;
        var args = callback([], a["length"], count);
        var len = args["length"];
        for (; len--;) {
          if (a[i = args[len]]) {
            /** @type {boolean} */
            a[i] = !(b[i] = a[i]);
          }
        }
      });
    });
  };
  /**
   * @param {!Object} obj
   * @return {?}
   */
  var isObject = function(obj) {
    return obj && "undefined" != typeof obj["getElementsByTagName"] && obj;
  };
  /**
   * @return {undefined}
   */
  var WMCacheControl = function() {
  };
  /**
   * @param {!Object} data
   * @return {?}
   */
  var isArray = function(data) {
    /** @type {number} */
    var p = 0;
    var len = data["length"];
    /** @type {string} */
    var result = "";
    for (; p < len; p++) {
      result = result + data[p]["value"];
    }
    return result;
  };
  /**
   * @param {!Function} callback
   * @param {!Object} data
   * @param {string} range
   * @return {?}
   */
  var find = function(callback, data, range) {
    var key = data["dir"];
    var username = data["next"];
    var name = username || key;
    var end = range && "parentNode" === name;
    /** @type {number} */
    var two = callId++;
    return data["first"] ? function(result, exisObj, gmInstance) {
      for (; result = result[key];) {
        if (1 === result["nodeType"] || end) {
          return callback(result, exisObj, gmInstance);
        }
      }
      return false;
    } : function(element, start, data) {
      var val;
      var options;
      var helper;
      /** @type {!Array} */
      var values = [dirruns, two];
      if (data) {
        for (; element = element[key];) {
          if ((1 === element["nodeType"] || end) && callback(element, start, data)) {
            return true;
          }
        }
      } else {
        for (; element = element[key];) {
          if (1 === element["nodeType"] || end) {
            if (helper = element[expando] || (element[expando] = {}), options = helper[element["uniqueID"]] || (helper[element["uniqueID"]] = {}), username && username === element["nodeName"]["toLowerCase"]()) {
              element = element[key] || element;
            } else {
              if ((val = options[name]) && val[0] === dirruns && val[1] === two) {
                return values[2] = val[2];
              }
              if (options[name] = values, values[2] = callback(element, start, data)) {
                return true;
              }
            }
          }
        }
      }
      return false;
    };
  };
  /**
   * @param {!Object} raw
   * @return {?}
   */
  var get = function(raw) {
    return 1 < raw["length"] ? function(name, localName, width) {
      var f = raw["length"];
      for (; f--;) {
        if (!raw[f](name, localName, width)) {
          return false;
        }
      }
      return true;
    } : raw[0];
  };
  /**
   * @param {!Object} o
   * @param {!Object} params
   * @param {string} callback
   * @param {!Object} source
   * @param {?} url
   * @return {?}
   */
  var assign = function(o, params, callback, source, url) {
    var value;
    /** @type {!Array} */
    var obj = [];
    /** @type {number} */
    var x = 0;
    var i = o["length"];
    /** @type {boolean} */
    var wasReplying = null != params;
    for (; x < i; x++) {
      if (value = o[x]) {
        if (!(callback && !callback(value, source, url))) {
          obj["push"](value);
          if (wasReplying) {
            params["push"](x);
          }
        }
      }
    }
    return obj;
  };
  /**
   * @param {string} id
   * @param {string} label
   * @param {string} filter
   * @param {string} target
   * @param {string} fn
   * @param {string} options
   * @return {?}
   */
  var init = function(id, label, filter, target, fn, options) {
    return target && !target[expando] && (target = init(target)), fn && !fn[expando] && (fn = init(fn, options)), markFunction(function(item, a, key, path) {
      var obj;
      var val;
      /** @type {!Array} */
      var response = [];
      /** @type {!Array} */
      var props = [];
      var i = a["length"];
      var object;
      if (!(object = item)) {
        object = label || "*";
        var value = key["nodeType"] ? [key] : key;
        /** @type {!Array} */
        var val = [];
        /** @type {number} */
        var j = 0;
        var len = value["length"];
        for (; j < len; j++) {
          test(object, value[j], val);
        }
        /** @type {!Array} */
        object = val;
      }
      object = !id || !item && label ? object : assign(object, response, id, key, path);
      value = filter ? fn || (item ? id : i || target) ? [] : a : object;
      if (filter && filter(object, value, key, path), target) {
        obj = assign(value, props);
        target(obj, [], key, path);
        key = obj["length"];
        for (; key--;) {
          if (val = obj[key]) {
            /** @type {boolean} */
            value[props[key]] = !(object[props[key]] = val);
          }
        }
      }
      if (item) {
        if (fn || id) {
          if (fn) {
            /** @type {!Array} */
            obj = [];
            key = value["length"];
            for (; key--;) {
              if (val = value[key]) {
                obj["push"](object[key] = val);
              }
            }
            fn(null, value = [], obj, path);
          }
          key = value["length"];
          for (; key--;) {
            if ((val = value[key]) && -1 < (obj = fn ? indexOf(item, val) : response[key])) {
              /** @type {boolean} */
              item[obj] = !(a[obj] = val);
            }
          }
        }
      } else {
        value = assign(value === a ? value["splice"](i, value["length"]) : value);
        if (fn) {
          fn(null, a, value, path);
        } else {
          console["apply"](a, value);
        }
      }
    });
  };
  /**
   * @param {!Object} data
   * @return {?}
   */
  var success = function(data) {
    var y;
    var value;
    var key;
    var length = data["length"];
    var one = params["relative"][data[0]["type"]];
    value = one || params["relative"][" "];
    /** @type {number} */
    var i = one ? 1 : 0;
    var test = find(function(x_or_y) {
      return x_or_y === y;
    }, value, true);
    var expect = find(function(value) {
      return -1 < indexOf(y, value);
    }, value, true);
    /** @type {!Array} */
    var target = [function(string, c, f) {
      string = !one && (f || c !== r) || ((y = c)["nodeType"] ? test(string, c, f) : expect(string, c, f));
      return y = null, string;
    }];
    for (; i < length; i++) {
      if (value = params["relative"][data[i]["type"]]) {
        /** @type {!Array} */
        target = [find(get(target), value)];
      } else {
        if (value = params["filter"][data[i]["type"]]["apply"](null, data[i]["matches"]), value[expando]) {
          /** @type {number} */
          key = ++i;
          for (; key < length && !params["relative"][data[key]["type"]]; key++) {
          }
          return init(1 < i && get(target), 1 < i && isArray(data["slice"](0, i - 1)["concat"]({
            "value" : " " === data[i - 2]["type"] ? "*" : ""
          }))["replace"](rtrim, "$1"), value, i < key && success(data["slice"](i, key)), key < length && success(data = data["slice"](key)), key < length && isArray(data));
        }
        target["push"](value);
      }
    }
    return get(target);
  };
  var i;
  var node;
  var params;
  var k;
  var getAffs;
  var f;
  var compile;
  var select;
  var r;
  var sortInput;
  var formattedString;
  var func;
  var doc;
  var _document_documentElement;
  var documentIsHTML;
  var a;
  var PL$120;
  var callbacks;
  var has;
  /** @type {string} */
  var expando = "sizzle" + 1 * new Date;
  var undefined = global["document"];
  /** @type {number} */
  var dirruns = 0;
  /** @type {number} */
  var callId = 0;
  var classCache = parseLine();
  var input = parseLine();
  var entry = parseLine();
  /**
   * @param {?} name
   * @param {?} format
   * @return {?}
   */
  var items = function(name, format) {
    return name === format && (formattedString = true), 0;
  };
  var hasOwn = {}["hasOwnProperty"];
  /** @type {!Array} */
  var PL$19 = [];
  var functions = PL$19["pop"];
  var ff = PL$19["push"];
  var console = PL$19["push"];
  var call = PL$19["slice"];
  /**
   * @param {!Object} array
   * @param {!Object} value
   * @return {?}
   */
  var indexOf = function(array, value) {
    /** @type {number} */
    var i = 0;
    var length = array["length"];
    for (; i < length; i++) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  };
  /** @type {!RegExp} */
  var tokensRegExp = /[\x20\t\r\n\f]+/g;
  /** @type {!RegExp} */
  var rtrim = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g;
  /** @type {!RegExp} */
  var deinterleaveChannel = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/;
  /** @type {!RegExp} */
  var providerConfData = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/;
  /** @type {!RegExp} */
  var rg = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g;
  /** @type {!RegExp} */
  var t = RegExp(":((?:\\\\.|[\\w-]|[^\ufffd-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\ufffd-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\ufffd-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)");
  /** @type {!RegExp} */
  var WEB_URLs = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/;
  var matchExpr = {
    "ID" : /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
    "CLASS" : /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
    "TAG" : /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
    "ATTR" : RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\ufffd-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\ufffd-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
    "PSEUDO" : RegExp("^:((?:\\\\.|[\\w-]|[^\ufffd-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\ufffd-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\ufffd-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
    "CHILD" : RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
    "bool" : RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
    "needsContext" : RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
  };
  /** @type {!RegExp} */
  var rec = /^(?:input|select|textarea|button)$/i;
  /** @type {!RegExp} */
  var conditional = /^h\d$/i;
  /** @type {!RegExp} */
  var B713 = /^[^{]+\{\s*\[native \w/;
  /** @type {!RegExp} */
  var command_codes = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
  /** @type {!RegExp} */
  var handlers = /[+~]/;
  /** @type {!RegExp} */
  var PL$3 = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig;
  /**
   * @param {number} val
   * @param {string} escaped
   * @param {boolean} escapedWhitespace
   * @return {?}
   */
  var client = function(val, escaped, escapedWhitespace) {
    /** @type {number} */
    val = "0x" + escaped - 65536;
    return val !== val || escapedWhitespace ? escaped : 0 > val ? String["fromCharCode"](val + 65536) : String["fromCharCode"](val >> 10 | 55296, 1023 & val | 56320);
  };
  /** @type {!RegExp} */
  var rescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g;
  /**
   * @param {!Object} name
   * @param {string} subNames
   * @return {?}
   */
  var applyTheme = function(name, subNames) {
    return subNames ? "\ufffd" === name ? "\u00ef\u00bf\u00bd" : name["slice"](0, -1) + "\\" + name["charCodeAt"](name["length"] - 1)["toString"](16) + " " : "\\" + name;
  };
  /**
   * @return {undefined}
   */
  var onKeyDown = function() {
    func();
  };
  var disabledAncestor = find(function(oldVals) {
    return true === oldVals["disabled"] && ("form" in oldVals || "label" in oldVals);
  }, {
    "dir" : "parentNode",
    "next" : "legend"
  });
  try {
    console["apply"](PL$19 = call["call"](undefined["childNodes"]), undefined["childNodes"]);
    PL$19[undefined["childNodes"]["length"]]["nodeType"];
  } catch (_0x445155) {
    console = {
      "apply" : PL$19["length"] ? function(text, args) {
        ff["apply"](text, call["call"](args));
      } : function(editItems, darray) {
        var editItem = editItems["length"];
        /** @type {number} */
        var index = 0;
        for (; editItems[editItem++] = darray[index++];) {
        }
        /** @type {number} */
        editItems["length"] = editItem - 1;
      }
    };
  }
  node = test["support"] = {};
  /** @type {function(!Object): ?} */
  getAffs = test["isXML"] = function(element) {
    element = element && (element["ownerDocument"] || element)["documentElement"];
    return !!element && "HTML" !== element["nodeName"];
  };
  /** @type {function(!Object): ?} */
  func = test["setDocument"] = function(result) {
    var hasKeys;
    var win;
    result = result ? result["ownerDocument"] || result : undefined;
    return result !== doc && 9 === result["nodeType"] && result["documentElement"] ? (doc = result, _document_documentElement = doc["documentElement"], documentIsHTML = !getAffs(doc), undefined !== doc && (win = doc["defaultView"]) && win["top"] !== win && (win["addEventListener"] ? win["addEventListener"]("unload", onKeyDown, false) : win["attachEvent"] && win["attachEvent"]("onunload", onKeyDown)), node["attributes"] = live(function(element) {
      return element["className"] = "i", !element["getAttribute"]("className");
    }), node["getElementsByTagName"] = live(function(object) {
      return object["appendChild"](doc["createComment"]("")), !object["getElementsByTagName"]("*")["length"];
    }), node["getElementsByClassName"] = B713["test"](doc["getElementsByClassName"]), node["getById"] = live(function(i) {
      return _document_documentElement["appendChild"](i)["id"] = expando, !doc["getElementsByName"] || !doc["getElementsByName"](expando)["length"];
    }), node["getById"] ? (params["filter"]["ID"] = function(PL$5) {
      var url = PL$5["replace"](PL$3, client);
      return function(i) {
        return i["getAttribute"]("id") === url;
      };
    }, params["find"]["ID"] = function(level, source) {
      if ("undefined" != typeof source["getElementById"] && documentIsHTML) {
        var url = source["getElementById"](level);
        return url ? [url] : [];
      }
    }) : (params["filter"]["ID"] = function(PL$5) {
      var key = PL$5["replace"](PL$3, client);
      return function(entry) {
        return (entry = "undefined" != typeof entry["getAttributeNode"] && entry["getAttributeNode"]("id")) && entry["value"] === key;
      };
    }, params["find"]["ID"] = function(undefined, index) {
      if ("undefined" != typeof index["getElementById"] && documentIsHTML) {
        var columnLabelColumns;
        var j;
        var cache;
        var m = index["getElementById"](undefined);
        if (m) {
          if (columnLabelColumns = m["getAttributeNode"]("id"), columnLabelColumns && columnLabelColumns["value"] === undefined) {
            return [m];
          }
          cache = index["getElementsByName"](undefined);
          /** @type {number} */
          j = 0;
          for (; m = cache[j++];) {
            if (columnLabelColumns = m["getAttributeNode"]("id"), columnLabelColumns && columnLabelColumns["value"] === undefined) {
              return [m];
            }
          }
        }
        return [];
      }
    }), params["find"]["TAG"] = node["getElementsByTagName"] ? function(opt_cellsSelector, rowElement) {
      return "undefined" != typeof rowElement["getElementsByTagName"] ? rowElement["getElementsByTagName"](opt_cellsSelector) : node["qsa"] ? rowElement["querySelectorAll"](opt_cellsSelector) : void 0;
    } : function(link, doc) {
      var el;
      /** @type {!Array} */
      var res = [];
      /** @type {number} */
      var i = 0;
      var children = doc["getElementsByTagName"](link);
      if ("*" === link) {
        for (; el = children[i++];) {
          if (1 === el["nodeType"]) {
            res["push"](el);
          }
        }
        return res;
      }
      return children;
    }, params["find"]["CLASS"] = node["getElementsByClassName"] && function(className, document) {
      if ("undefined" != typeof document["getElementsByClassName"] && documentIsHTML) {
        return document["getElementsByClassName"](className);
      }
    }, PL$120 = [], a = [], (node["qsa"] = B713["test"](doc["querySelectorAll"])) && (live(function(rowElement) {
      /** @type {string} */
      _document_documentElement["appendChild"](rowElement)["innerHTML"] = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
      if (rowElement["querySelectorAll"]("[msallowcapture^='']")["length"]) {
        a["push"]("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
      }
      if (!rowElement["querySelectorAll"]("[selected]")["length"]) {
        a["push"]("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
      }
      if (!rowElement["querySelectorAll"]("[id~=" + expando + "-]")["length"]) {
        a["push"]("~=");
      }
      if (!rowElement["querySelectorAll"](":checked")["length"]) {
        a["push"](":checked");
      }
      if (!rowElement["querySelectorAll"]("a#" + expando + "+*")["length"]) {
        a["push"](".#.+[+~]");
      }
    }), live(function(g) {
      /** @type {string} */
      g["innerHTML"] = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
      var el = doc["createElement"]("input");
      el["setAttribute"]("type", "hidden");
      g["appendChild"](el)["setAttribute"]("name", "D");
      if (g["querySelectorAll"]("[name=d]")["length"]) {
        a["push"]("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
      }
      if (2 !== g["querySelectorAll"](":enabled")["length"]) {
        a["push"](":enabled", ":disabled");
      }
      /** @type {boolean} */
      _document_documentElement["appendChild"](g)["disabled"] = true;
      if (2 !== g["querySelectorAll"](":disabled")["length"]) {
        a["push"](":enabled", ":disabled");
      }
      g["querySelectorAll"]("*,:x");
      a["push"](",.*:");
    })), (node["matchesSelector"] = B713["test"](callbacks = _document_documentElement["matches"] || _document_documentElement["webkitMatchesSelector"] || _document_documentElement["mozMatchesSelector"] || _document_documentElement["oMatchesSelector"] || _document_documentElement["msMatchesSelector"])) && live(function(value) {
      node["disconnectedMatch"] = callbacks["call"](value, "*");
      callbacks["call"](value, "[s!='']:x");
      PL$120["push"]("!=", ":((?:\\\\.|[\\w-]|[^\ufffd-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\ufffd-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\ufffd-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)");
    }), a = a["length"] && RegExp(a["join"]("|")), PL$120 = PL$120["length"] && RegExp(PL$120["join"]("|")), hasKeys = B713["test"](_document_documentElement["compareDocumentPosition"]), has = hasKeys || B713["test"](_document_documentElement["contains"]) ? function(obj, item) {
      var el = 9 === obj["nodeType"] ? obj["documentElement"] : obj;
      var value = item && item["parentNode"];
      return obj === value || !(!value || 1 !== value["nodeType"] || !(el["contains"] ? el["contains"](value) : obj["compareDocumentPosition"] && 16 & obj["compareDocumentPosition"](value)));
    } : function(item, element) {
      if (element) {
        for (; element = element["parentNode"];) {
          if (element === item) {
            return true;
          }
        }
      }
      return false;
    }, items = hasKeys ? function(a, b) {
      if (a === b) {
        return formattedString = true, 0;
      }
      /** @type {number} */
      var idx = !a["compareDocumentPosition"] - !b["compareDocumentPosition"];
      return idx ? idx : (idx = (a["ownerDocument"] || a) === (b["ownerDocument"] || b) ? a["compareDocumentPosition"](b) : 1, 1 & idx || !node["sortDetached"] && b["compareDocumentPosition"](a) === idx ? a === doc || a["ownerDocument"] === undefined && has(undefined, a) ? -1 : b === doc || b["ownerDocument"] === undefined && has(undefined, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & idx ? -1 : 1);
    } : function(a, b) {
      if (a === b) {
        return formattedString = true, 0;
      }
      var el;
      /** @type {number} */
      var i = 0;
      el = a["parentNode"];
      var parent = b["parentNode"];
      /** @type {!Array} */
      var props = [a];
      /** @type {!Array} */
      var items = [b];
      if (!el || !parent) {
        return a === doc ? -1 : b === doc ? 1 : el ? -1 : parent ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
      }
      if (el === parent) {
        return contains(a, b);
      }
      /** @type {!Object} */
      el = a;
      for (; el = el["parentNode"];) {
        props["unshift"](el);
      }
      /** @type {!Object} */
      el = b;
      for (; el = el["parentNode"];) {
        items["unshift"](el);
      }
      for (; props[i] === items[i];) {
        i++;
      }
      return i ? contains(props[i], items[i]) : props[i] === undefined ? -1 : items[i] === undefined ? 1 : 0;
    }, doc) : doc;
  };
  /**
   * @param {!Object} testItemData
   * @param {!Array} grouping
   * @return {?}
   */
  test["matches"] = function(testItemData, grouping) {
    return test(testItemData, null, null, grouping);
  };
  /**
   * @param {!Object} element
   * @param {!Object} b
   * @return {?}
   */
  test["matchesSelector"] = function(element, b) {
    if ((element["ownerDocument"] || element) !== doc && func(element), b = b["replace"](rg, "='$1']"), node["matchesSelector"] && documentIsHTML && !entry[b + " "] && (!PL$120 || !PL$120["test"](b)) && (!a || !a["test"](b))) {
      try {
        var result = callbacks["call"](element, b);
        if (result || node["disconnectedMatch"] || element["document"] && 11 !== element["document"]["nodeType"]) {
          return result;
        }
      } catch (_0x66ddb6) {
      }
    }
    return 0 < test(b, doc, null, [element])["length"];
  };
  /**
   * @param {!Object} element
   * @param {!Object} key
   * @return {?}
   */
  test["contains"] = function(element, key) {
    return (element["ownerDocument"] || element) !== doc && func(element), has(element, key);
  };
  /**
   * @param {!Object} element
   * @param {!Object} name
   * @return {?}
   */
  test["attr"] = function(element, name) {
    if ((element["ownerDocument"] || element) !== doc) {
      func(element);
    }
    var fn = params["attrHandle"][name["toLowerCase"]()];
    fn = fn && hasOwn["call"](params["attrHandle"], name["toLowerCase"]()) ? fn(element, name, !documentIsHTML) : void 0;
    return void 0 !== fn ? fn : node["attributes"] || !documentIsHTML ? element["getAttribute"](name) : (fn = element["getAttributeNode"](name)) && fn["specified"] ? fn["value"] : null;
  };
  /**
   * @param {string} gameFolder
   * @return {?}
   */
  test["escape"] = function(gameFolder) {
    return (gameFolder + "")["replace"](rescape, applyTheme);
  };
  /**
   * @param {string} wireType
   * @return {?}
   */
  test["error"] = function(wireType) {
    throw Error("Syntax error, unrecognized expression: " + wireType);
  };
  /**
   * @param {!Object} PL$27
   * @return {?}
   */
  test["uniqueSort"] = function(PL$27) {
    var PL$30;
    /** @type {!Array} */
    var PL$19 = [];
    /** @type {number} */
    var PL$23 = 0;
    /** @type {number} */
    var PL$29 = 0;
    if (formattedString = !node["detectDuplicates"], sortInput = !node["sortStable"] && PL$27["slice"](0), PL$27["sort"](items), formattedString) {
      for (; PL$30 = PL$27[PL$29++];) {
        if (PL$30 === PL$27[PL$29]) {
          PL$23 = PL$19["push"](PL$29);
        }
      }
      for (; PL$23--;) {
        PL$27["splice"](PL$19[PL$23], 1);
      }
    }
    return sortInput = null, PL$27;
  };
  /** @type {function(!Object): ?} */
  k = test["getText"] = function(node) {
    var t;
    /** @type {string} */
    var h = "";
    /** @type {number} */
    var count = 0;
    if (t = node["nodeType"]) {
      if (1 === t || 9 === t || 11 === t) {
        if ("string" == typeof node["textContent"]) {
          return node["textContent"];
        }
        node = node["firstChild"];
        for (; node; node = node["nextSibling"]) {
          h = h + k(node);
        }
      } else {
        if (3 === t || 4 === t) {
          return node["nodeValue"];
        }
      }
    } else {
      for (; t = node[count++];) {
        h = h + k(t);
      }
    }
    return h;
  };
  params = test["selectors"] = {
    "cacheLength" : 50,
    "createPseudo" : markFunction,
    "match" : matchExpr,
    "attrHandle" : {},
    "find" : {},
    "relative" : {
      ">" : {
        "dir" : "parentNode",
        "first" : true
      },
      " " : {
        "dir" : "parentNode"
      },
      "+" : {
        "dir" : "previousSibling",
        "first" : true
      },
      "~" : {
        "dir" : "previousSibling"
      }
    },
    "preFilter" : {
      "ATTR" : function(name) {
        return name[1] = name[1]["replace"](PL$3, client), name[3] = (name[3] || name[4] || name[5] || "")["replace"](PL$3, client), "~=" === name[2] && (name[3] = " " + name[3] + " "), name["slice"](0, 4);
      },
      "CHILD" : function(match) {
        return match[1] = match[1]["toLowerCase"](), "nth" === match[1]["slice"](0, 3) ? (match[3] || test["error"](match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && test["error"](match[0]), match;
      },
      "PSEUDO" : function(match) {
        var e;
        var p = !match[6] && match[2];
        return matchExpr["CHILD"]["test"](match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : p && t["test"](p) && (e = f(p, true)) && (e = p["indexOf"](")", p["length"] - e) - p["length"]) && (match[0] = match[0]["slice"](0, e), match[2] = p["slice"](0, e)), match["slice"](0, 3));
      }
    },
    "filter" : {
      "TAG" : function(PL$5) {
        var hk1 = PL$5["replace"](PL$3, client)["toLowerCase"]();
        return "*" === PL$5 ? function() {
          return true;
        } : function(event) {
          return event["nodeName"] && event["nodeName"]["toLowerCase"]() === hk1;
        };
      },
      "CLASS" : function(className) {
        var pattern = classCache[className + " "];
        return pattern || (pattern = RegExp("(^|[\\x20\\t\\r\\n\\f])" + className + "([\\x20\\t\\r\\n\\f]|$)")) && classCache(className, function(ele) {
          return pattern["test"]("string" == typeof ele["className"] && ele["className"] || "undefined" != typeof ele["getAttribute"] && ele["getAttribute"]("class") || "");
        });
      },
      "ATTR" : function(context, string, value) {
        return function(name) {
          name = test["attr"](name, context);
          return null == name ? "!=" === string : !string || (name = name + "", "=" === string ? name === value : "!=" === string ? name !== value : "^=" === string ? value && 0 === name["indexOf"](value) : "*=" === string ? value && -1 < name["indexOf"](value) : "$=" === string ? value && name["slice"](-value["length"]) === value : "~=" === string ? -1 < (" " + name["replace"](tokensRegExp, " ") + " ")["indexOf"](value) : "|=" === string && (name === value || name["slice"](0, value["length"] + 1) === 
          value + "-"));
        };
      },
      "CHILD" : function(type, match, args, first, last) {
        /** @type {boolean} */
        var simple = "nth" !== type["slice"](0, 3);
        /** @type {boolean} */
        var forward = "last" !== type["slice"](-4);
        /** @type {boolean} */
        var ofType = "of-type" === match;
        return 1 === first && 0 === last ? function(t) {
          return !!t["parentNode"];
        } : function(element, next, wordEnd) {
          var cache;
          var uniqueCache;
          var parent;
          var node;
          var nodeIndex;
          var mediasNext;
          /** @type {string} */
          next = simple !== forward ? "nextSibling" : "previousSibling";
          var el = element["parentNode"];
          var name = ofType && element["nodeName"]["toLowerCase"]();
          /** @type {boolean} */
          wordEnd = !wordEnd && !ofType;
          /** @type {boolean} */
          var diff = false;
          if (el) {
            if (simple) {
              for (; next;) {
                /** @type {!Object} */
                node = element;
                for (; node = node[next];) {
                  if (ofType ? node["nodeName"]["toLowerCase"]() === name : 1 === node["nodeType"]) {
                    return false;
                  }
                }
                /** @type {(boolean|string)} */
                mediasNext = next = "only" === type && !mediasNext && "nextSibling";
              }
              return true;
            }
            if (mediasNext = [forward ? el["firstChild"] : el["lastChild"]], forward && wordEnd) {
              node = el;
              parent = node[expando] || (node[expando] = {});
              uniqueCache = parent[node["uniqueID"]] || (parent[node["uniqueID"]] = {});
              cache = uniqueCache[type] || [];
              diff = (nodeIndex = cache[0] === dirruns && cache[1]) && cache[2];
              node = nodeIndex && el["childNodes"][nodeIndex];
              for (; node = ++nodeIndex && node && node[next] || (diff = nodeIndex = 0) || mediasNext["pop"]();) {
                if (1 === node["nodeType"] && ++diff && node === element) {
                  /** @type {!Array} */
                  uniqueCache[type] = [dirruns, nodeIndex, diff];
                  break;
                }
              }
            } else {
              if (wordEnd && (node = element, parent = node[expando] || (node[expando] = {}), uniqueCache = parent[node["uniqueID"]] || (parent[node["uniqueID"]] = {}), cache = uniqueCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = nodeIndex), false === diff) {
                for (; (node = ++nodeIndex && node && node[next] || (diff = nodeIndex = 0) || mediasNext["pop"]()) && (!(ofType ? node["nodeName"]["toLowerCase"]() === name : 1 === node["nodeType"]) || !++diff || !(wordEnd && (parent = node[expando] || (node[expando] = {}), uniqueCache = parent[node["uniqueID"]] || (parent[node["uniqueID"]] = {}), uniqueCache[type] = [dirruns, diff]), node === element));) {
                }
              }
            }
            return diff = diff - last, diff === first || 0 === diff % first && 0 <= diff / first;
          }
        };
      },
      "PSEUDO" : function(pseudo, argument) {
        var args;
        var fn = params["pseudos"][pseudo] || params["setFilters"][pseudo["toLowerCase"]()] || test["error"]("unsupported pseudo: " + pseudo);
        return fn[expando] ? fn(argument) : 1 < fn["length"] ? (args = [pseudo, pseudo, "", argument], params["setFilters"]["hasOwnProperty"](pseudo["toLowerCase"]()) ? markFunction(function(values, styles) {
          var i;
          var value = fn(values, argument);
          var key = value["length"];
          for (; key--;) {
            i = indexOf(values, value[key]);
            /** @type {boolean} */
            values[i] = !(styles[i] = value[key]);
          }
        }) : function(responce) {
          return fn(responce, 0, args);
        }) : fn;
      }
    },
    "pseudos" : {
      "not" : markFunction(function(PL$5) {
        /** @type {!Array} */
        var t = [];
        /** @type {!Array} */
        var jsonPathBang = [];
        var fn = compile(PL$5["replace"](rtrim, "$1"));
        return fn[expando] ? markFunction(function(args, evaluations, result, length) {
          var value;
          result = fn(args, null, length, []);
          length = args["length"];
          for (; length--;) {
            if (value = result[length]) {
              /** @type {boolean} */
              args[length] = !(evaluations[length] = value);
            }
          }
        }) : function(e, isSlidingUp, callback) {
          return t[0] = e, fn(t, null, callback, jsonPathBang), t[0] = null, !jsonPathBang["pop"]();
        };
      }),
      "has" : markFunction(function(testItemData) {
        return function(snapshotOut) {
          return 0 < test(testItemData, snapshotOut)["length"];
        };
      }),
      "contains" : markFunction(function(PL$5) {
        return PL$5 = PL$5["replace"](PL$3, client), function(node) {
          return -1 < (node["textContent"] || node["innerText"] || k(node))["indexOf"](PL$5);
        };
      }),
      "lang" : markFunction(function(data) {
        return WEB_URLs["test"](data || "") || test["error"]("unsupported lang: " + data), data = data["replace"](PL$3, client)["toLowerCase"](), function(el) {
          var node;
          do {
            if (node = documentIsHTML ? el["lang"] : el["getAttribute"]("xml:lang") || el["getAttribute"]("lang")) {
              return node = node["toLowerCase"](), node === data || 0 === node["indexOf"](data + "-");
            }
          } while ((el = el["parentNode"]) && 1 === el["nodeType"]);
          return false;
        };
      }),
      "target" : function(i) {
        var buffer = global["location"] && global["location"]["hash"];
        return buffer && buffer["slice"](1) === i["id"];
      },
      "root" : function(elem) {
        return elem === _document_documentElement;
      },
      "focus" : function(link) {
        return link === doc["activeElement"] && (!doc["hasFocus"] || doc["hasFocus"]()) && !(!link["type"] && !link["href"] && !~link["tabIndex"]);
      },
      "enabled" : createDisabledPseudo(false),
      "disabled" : createDisabledPseudo(true),
      "checked" : function(element) {
        var custom = element["nodeName"]["toLowerCase"]();
        return "input" === custom && !!element["checked"] || "option" === custom && !!element["selected"];
      },
      "selected" : function(item) {
        return item["parentNode"] && item["parentNode"]["selectedIndex"], true === item["selected"];
      },
      "empty" : function(root) {
        root = root["firstChild"];
        for (; root; root = root["nextSibling"]) {
          if (6 > root["nodeType"]) {
            return false;
          }
        }
        return true;
      },
      "parent" : function(elem) {
        return !params["pseudos"]["empty"](elem);
      },
      "header" : function(s) {
        return conditional["test"](s["nodeName"]);
      },
      "input" : function(event) {
        return rec["test"](event["nodeName"]);
      },
      "button" : function(event) {
        var left = event["nodeName"]["toLowerCase"]();
        return "input" === left && "button" === event["type"] || "button" === left;
      },
      "text" : function(el) {
        var B58;
        return "input" === el["nodeName"]["toLowerCase"]() && "text" === el["type"] && (null == (B58 = el["getAttribute"]("type")) || "text" === B58["toLowerCase"]());
      },
      "first" : createPositionalPseudo(function() {
        return [0];
      }),
      "last" : createPositionalPseudo(function(canCreateDiscussions, isSlidingUp) {
        return [isSlidingUp - 1];
      }),
      "eq" : createPositionalPseudo(function(canCreateDiscussions, dt, max) {
        return [0 > max ? max + dt : max];
      }),
      "even" : createPositionalPseudo(function(PL$24, PL$23) {
        /** @type {number} */
        var PL$22 = 0;
        for (; PL$22 < PL$23; PL$22 = PL$22 + 2) {
          PL$24["push"](PL$22);
        }
        return PL$24;
      }),
      "odd" : createPositionalPseudo(function(PL$24, PL$23) {
        /** @type {number} */
        var PL$22 = 1;
        for (; PL$22 < PL$23; PL$22 = PL$22 + 2) {
          PL$24["push"](PL$22);
        }
        return PL$24;
      }),
      "lt" : createPositionalPseudo(function(PL$27, end, length) {
        end = 0 > length ? length + end : length;
        for (; 0 <= --end;) {
          PL$27["push"](end);
        }
        return PL$27;
      }),
      "gt" : createPositionalPseudo(function(PL$27, length, index) {
        index = 0 > index ? index + length : index;
        for (; ++index < length;) {
          PL$27["push"](index);
        }
        return PL$27;
      })
    }
  };
  params["pseudos"]["nth"] = params["pseudos"]["eq"];
  for (i in{
    "radio" : true,
    "checkbox" : true,
    "file" : true,
    "password" : true,
    "image" : true
  }) {
    params["pseudos"][i] = get4Parity(i);
  }
  for (i in{
    "submit" : true,
    "reset" : true
  }) {
    params["pseudos"][i] = createButtonPseudo(i);
  }
  WMCacheControl["prototype"] = params["filters"] = params["pseudos"];
  params["setFilters"] = new WMCacheControl;
  /** @type {function(!Object, boolean): ?} */
  f = test["tokenize"] = function(value, group) {
    var values;
    var data;
    var PL$30;
    var type;
    var buffer;
    var AP;
    var target;
    if (buffer = input[value + " "]) {
      return group ? 0 : buffer["slice"](0);
    }
    /** @type {!Object} */
    buffer = value;
    /** @type {!Array} */
    AP = [];
    target = params["preFilter"];
    for (; buffer;) {
      if (!(values && !(data = deinterleaveChannel["exec"](buffer)))) {
        if (data) {
          buffer = buffer["slice"](data[0]["length"]) || buffer;
        }
        AP["push"](PL$30 = []);
      }
      /** @type {boolean} */
      values = false;
      if (data = providerConfData["exec"](buffer)) {
        values = data["shift"]();
        PL$30["push"]({
          "value" : values,
          "type" : data[0]["replace"](rtrim, " ")
        });
        buffer = buffer["slice"](values["length"]);
      }
      for (type in params["filter"]) {
        if (!(!(data = matchExpr[type]["exec"](buffer)) || target[type] && !(data = target[type](data)))) {
          values = data["shift"]();
          PL$30["push"]({
            "value" : values,
            "type" : type,
            "matches" : data
          });
          buffer = buffer["slice"](values["length"]);
        }
      }
      if (!values) {
        break;
      }
    }
    return group ? buffer["length"] : buffer ? test["error"](value) : input(value, AP)["slice"](0);
  };
  /** @type {function(!Object, !Object, !Object, !Array): ?} */
  data = (compile = test["compile"] = function(context, result) {
    var value;
    /** @type {!Array} */
    var vals = [];
    /** @type {!Array} */
    var PL$6 = [];
    var data = entry[context + " "];
    if (!data) {
      if (!result) {
        result = f(context);
      }
      value = result["length"];
      for (; value--;) {
        data = success(result[value]);
        if (data[expando]) {
          vals["push"](data);
        } else {
          PL$6["push"](data);
        }
      }
      value = entry;
      /** @type {boolean} */
      var useFilters = 0 < vals["length"];
      /** @type {boolean} */
      var cell = 0 < PL$6["length"];
      /**
       * @param {!Object} m
       * @param {!Object} a
       * @param {number} b
       * @param {!Object} value
       * @param {!Object} id
       * @return {?}
       */
      data = function(m, a, b, value, id) {
        var row;
        var valsId;
        var select;
        /** @type {number} */
        var sum = 0;
        /** @type {string} */
        var i = "0";
        var value = m && [];
        /** @type {!Array} */
        var data = [];
        var R = r;
        var lengths = m || cell && params["find"]["TAG"]("*", id);
        var dirrunsUnique = dirruns = dirruns + (null == R ? 1 : Math["random"]() || 0.1);
        var len = lengths["length"];
        if (id) {
          r = a === doc || a || id;
        }
        for (; i !== len && null != (row = lengths[i]); i++) {
          if (cell && row) {
            /** @type {number} */
            valsId = 0;
            if (!(a || row["ownerDocument"] === doc)) {
              func(row);
              /** @type {boolean} */
              b = !documentIsHTML;
            }
            for (; select = PL$6[valsId++];) {
              if (select(row, a || doc, b)) {
                value["push"](row);
                break;
              }
            }
            if (id) {
              dirruns = dirrunsUnique;
            }
          }
          if (useFilters) {
            if (row = !select && row) {
              sum--;
            }
            if (m) {
              value["push"](row);
            }
          }
        }
        if (sum = sum + i, useFilters && i !== sum) {
          /** @type {number} */
          valsId = 0;
          for (; select = vals[valsId++];) {
            select(value, data, a, b);
          }
          if (m) {
            if (0 < sum) {
              for (; i--;) {
                if (!(value[i] || data[i])) {
                  data[i] = functions["call"](value);
                }
              }
            }
            data = assign(data);
          }
          console["apply"](value, data);
          if (id && !m && 0 < data["length"] && 1 < sum + vals["length"]) {
            test["uniqueSort"](value);
          }
        }
        return id && (dirruns = dirrunsUnique, r = R), value;
      };
      data = useFilters ? markFunction(data) : data;
      data = value(context, data);
      /** @type {string} */
      data["selector"] = context;
    }
    return data;
  }, select = test["select"] = function(value, element, e, b) {
    var index;
    var array;
    var item;
    var i;
    var callback;
    /** @type {(!Function|boolean)} */
    var compiled = "function" == typeof value && value;
    var match = !b && f(value = compiled["selector"] || value);
    if (e = e || [], 1 === match["length"]) {
      if (array = match[0] = match[0]["slice"](0), 2 < array["length"] && "ID" === (item = array[0])["type"] && 9 === element["nodeType"] && documentIsHTML && params["relative"][array[1]["type"]]) {
        if (element = (params["find"]["ID"](item["matches"][0]["replace"](PL$3, client), element) || [])[0], !element) {
          return e;
        }
        if (compiled) {
          element = element["parentNode"];
        }
        value = value["slice"](array["shift"]()["value"]["length"]);
      }
      index = matchExpr["needsContext"]["test"](value) ? 0 : array["length"];
      for (; index-- && !(item = array[index], params["relative"][i = item["type"]]);) {
        if ((callback = params["find"][i]) && (b = callback(item["matches"][0]["replace"](PL$3, client), handlers["test"](array[0]["type"]) && isObject(element["parentNode"]) || element))) {
          if (array["splice"](index, 1), value = b["length"] && isArray(array), !value) {
            return console["apply"](e, b), e;
          }
          break;
        }
      }
    }
    return (compiled || compile(value, match))(b, element, !documentIsHTML, e, !element || handlers["test"](value) && isObject(element["parentNode"]) || element), e;
  }, node["sortStable"] = expando["split"]("")["sort"](items)["join"]("") === expando, node["detectDuplicates"] = !!formattedString, func(), node["sortDetached"] = live(function(canCreateDiscussions) {
    return 1 & canCreateDiscussions["compareDocumentPosition"](doc["createElement"]("fieldset"));
  }), live(function(el) {
    return el["innerHTML"] = "<a href='#'></a>", "#" === el["firstChild"]["getAttribute"]("href");
  }) || install("type|href|height|width", function(node, version, canCreateDiscussions) {
    if (!canCreateDiscussions) {
      return node["getAttribute"](version, "type" === version["toLowerCase"]() ? 1 : 2);
    }
  }), node["attributes"] && live(function(el) {
    return el["innerHTML"] = "<input/>", el["firstChild"]["setAttribute"]("value", ""), "" === el["firstChild"]["getAttribute"]("value");
  }) || install("value", function(event, isSlidingUp, canCreateDiscussions) {
    if (!canCreateDiscussions && "input" === event["nodeName"]["toLowerCase"]()) {
      return event["defaultValue"];
    }
  }), live(function(el) {
    return null == el["getAttribute"]("disabled");
  }) || install("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(templateEngine, template, canCreateDiscussions) {
    var update;
    if (!canCreateDiscussions) {
      return true === templateEngine[template] ? template["toLowerCase"]() : (update = templateEngine["getAttributeNode"](template)) && update["specified"] ? update["value"] : null;
    }
  }), test);
  /** @type {function(!Object, !Object, !Object, !Array): ?} */
  $["find"] = data;
  $["expr"] = data["selectors"];
  $["expr"][":"] = $["expr"]["pseudos"];
  $["uniqueSort"] = $["unique"] = data["uniqueSort"];
  $["text"] = data["getText"];
  $["isXMLDoc"] = data["isXML"];
  $["contains"] = data["contains"];
  $["escapeSelector"] = data["escape"];
  /**
   * @param {!Object} el
   * @param {string} prop
   * @param {number} until
   * @return {?}
   */
  var dir = function(el, prop, until) {
    /** @type {!Array} */
    var res = [];
    /** @type {boolean} */
    var truncate = void 0 !== until;
    for (; (el = el[prop]) && 9 !== el["nodeType"];) {
      if (1 === el["nodeType"]) {
        if (truncate && $(el)["is"](until)) {
          break;
        }
        res["push"](el);
      }
    }
    return res;
  };
  /**
   * @param {!Object} el
   * @param {!Object} node
   * @return {?}
   */
  var sibling = function(el, node) {
    /** @type {!Array} */
    var res = [];
    for (; el; el = el["nextSibling"]) {
      if (1 === el["nodeType"] && el !== node) {
        res["push"](el);
      }
    }
    return res;
  };
  var CustomTests = $["expr"]["match"]["needsContext"];
  /** @type {!RegExp} */
  var module = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  /** @type {!RegExp} */
  var properties = /^.[^:#\[\.,]*$/;
  /**
   * @param {string} s
   * @param {!Object} nodes
   * @param {string} url
   * @return {?}
   */
  $["filter"] = function(s, nodes, url) {
    var n = nodes[0];
    return url && (s = ":not(" + s + ")"), 1 === nodes["length"] && 1 === n["nodeType"] ? $["find"]["matchesSelector"](n, s) ? [n] : [] : $["find"]["matches"](s, $["grep"](nodes, function(n) {
      return 1 === n["nodeType"];
    }));
  };
  $["fn"]["extend"]({
    "find" : function(selector) {
      var i;
      var value;
      var length = this["length"];
      var params = this;
      if ("string" != typeof selector) {
        return this["pushStack"]($(selector)["filter"](function() {
          /** @type {number} */
          i = 0;
          for (; i < length; i++) {
            if ($["contains"](params[i], this)) {
              return true;
            }
          }
        }));
      }
      value = this["pushStack"]([]);
      /** @type {number} */
      i = 0;
      for (; i < length; i++) {
        $["find"](selector, params[i], value);
      }
      return 1 < length ? $["uniqueSort"](value) : value;
    },
    "filter" : function(options) {
      return this["pushStack"](parse(this, options || [], false));
    },
    "not" : function(options) {
      return this["pushStack"](parse(this, options || [], true));
    },
    "is" : function(element) {
      return !!parse(this, "string" == typeof element && CustomTests["test"](element) ? $(element) : element || [], false)["length"];
    }
  });
  var editorUpdateFollower;
  /** @type {!RegExp} */
  var getComputeFrom = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ($["fn"]["init"] = function(el, node, updatefunc) {
    var i;
    var _0x5f3a54;
    if (!el) {
      return this;
    }
    if (updatefunc = updatefunc || editorUpdateFollower, "string" == typeof el) {
      if (i = "<" === el[0] && ">" === el[el["length"] - 1] && 3 <= el["length"] ? [null, el, null] : getComputeFrom["exec"](el), !i || !i[1] && node) {
        return !node || node["jquery"] ? (node || updatefunc)["find"](el) : this["constructor"](node)["find"](el);
      }
      if (i[1]) {
        if (node = node instanceof $ ? node[0] : node, $["merge"](this, $["parseHTML"](i[1], node && node["nodeType"] ? node["ownerDocument"] || node : document, true)), module["test"](i[1]) && $["isPlainObject"](node)) {
          for (i in node) {
            if ($["isFunction"](this[i])) {
              this[i](node[i]);
            } else {
              this["attr"](i, node[i]);
            }
          }
        }
        return this;
      }
      return _0x5f3a54 = document["getElementById"](i[2]), _0x5f3a54 && (this[0] = _0x5f3a54, this["length"] = 1), this;
    }
    return el["nodeType"] ? (this[0] = el, this["length"] = 1, this) : $["isFunction"](el) ? void 0 !== updatefunc["ready"] ? updatefunc["ready"](el) : el($) : $["makeArray"](el, this);
  })["prototype"] = $["fn"];
  editorUpdateFollower = $(document);
  /** @type {!RegExp} */
  var ast = /^(?:parents|prev(?:Until|All))/;
  var guaranteedUnique = {
    "children" : true,
    "contents" : true,
    "next" : true,
    "prev" : true
  };
  $["fn"]["extend"]({
    "has" : function(actions) {
      var PL$19 = $(actions, this);
      var PL$29 = PL$19["length"];
      return this["filter"](function() {
        /** @type {number} */
        var PL$28 = 0;
        for (; PL$28 < PL$29; PL$28++) {
          if ($["contains"](this, PL$19[PL$28])) {
            return true;
          }
        }
      });
    },
    "closest" : function(a, b) {
      var el;
      /** @type {number} */
      var _l = 0;
      var _len3 = this["length"];
      /** @type {!Array} */
      var value = [];
      var dict = "string" != typeof a && $(a);
      if (!CustomTests["test"](a)) {
        for (; _l < _len3; _l++) {
          el = this[_l];
          for (; el && el !== b; el = el["parentNode"]) {
            if (11 > el["nodeType"] && (dict ? -1 < dict["index"](el) : 1 === el["nodeType"] && $["find"]["matchesSelector"](el, a))) {
              value["push"](el);
              break;
            }
          }
        }
      }
      return this["pushStack"](1 < value["length"] ? $["uniqueSort"](value) : value);
    },
    "index" : function(a) {
      return a ? "string" == typeof a ? types["call"]($(a), this[0]) : types["call"](this, a["jquery"] ? a[0] : a) : this[0] && this[0]["parentNode"] ? this["first"]()["prevAll"]()["length"] : -1;
    },
    "add" : function(selector, ind) {
      return this["pushStack"]($["uniqueSort"]($["merge"](this["get"](), $(selector, ind))));
    },
    "addBack" : function(selector) {
      return this["add"](null == selector ? this["prevObject"] : this["prevObject"]["filter"](selector));
    }
  });
  $["each"]({
    "parent" : function(element) {
      return (element = element["parentNode"]) && 11 !== element["nodeType"] ? element : null;
    },
    "parents" : function(node) {
      return dir(node, "parentNode");
    },
    "parentsUntil" : function(i, node, until) {
      return dir(i, "parentNode", until);
    },
    "next" : function(node) {
      return firstSibling(node, "nextSibling");
    },
    "prev" : function(node) {
      return firstSibling(node, "previousSibling");
    },
    "nextAll" : function(el) {
      return dir(el, "nextSibling");
    },
    "prevAll" : function(el) {
      return dir(el, "previousSibling");
    },
    "nextUntil" : function(i, node, until) {
      return dir(i, "nextSibling", until);
    },
    "prevUntil" : function(i, node, until) {
      return dir(i, "previousSibling", until);
    },
    "siblings" : function(el) {
      return sibling((el["parentNode"] || {})["firstChild"], el);
    },
    "children" : function(el) {
      return sibling(el["firstChild"]);
    },
    "contents" : function(value) {
      return callback(value, "iframe") ? value["contentDocument"] : (callback(value, "template") && (value = value["content"] || value), $["merge"]([], value["childNodes"]));
    }
  }, function(name, i) {
    /**
     * @param {string} args
     * @param {string} value
     * @return {?}
     */
    $["fn"][name] = function(args, value) {
      var params = $["map"](this, i, args);
      return "Until" !== name["slice"](-5) && (value = args), value && "string" == typeof value && (params = $["filter"](value, params)), 1 < this["length"] && (guaranteedUnique[name] || $["uniqueSort"](params), ast["test"](name) && params["reverse"]()), this["pushStack"](params);
    };
  });
  /** @type {!RegExp} */
  var arg = /[^\x20\t\r\n\f]+/g;
  /**
   * @param {!Object} data
   * @return {?}
   */
  $["Callbacks"] = function(data) {
    var processedData;
    if ("string" == typeof data) {
      var subwikiListsCache = {};
      processedData = ($["each"](data["match"](arg) || [], function(canCreateDiscussions, wikiId) {
        /** @type {boolean} */
        subwikiListsCache[wikiId] = true;
      }), subwikiListsCache);
    } else {
      processedData = $["extend"]({}, data);
    }
    data = processedData;
    var options;
    var args;
    var query;
    var result;
    /** @type {!Array} */
    var params = [];
    /** @type {!Array} */
    var object = [];
    /** @type {number} */
    var value = -1;
    /**
     * @return {undefined}
     */
    var getOwnPropertyNames = function() {
      result = result || data["once"];
      /** @type {boolean} */
      query = options = true;
      for (; object["length"]; value = -1) {
        args = object["shift"]();
        for (; ++value < params["length"];) {
          if (false === params[value]["apply"](args[0], args[1]) && data["stopOnFalse"]) {
            value = params["length"];
            /** @type {boolean} */
            args = false;
          }
        }
      }
      if (!data["memory"]) {
        /** @type {boolean} */
        args = false;
      }
      /** @type {boolean} */
      options = false;
      if (result) {
        /** @type {(Array|string)} */
        params = args ? [] : "";
      }
    };
    var self = {
      "add" : function() {
        return params && (args && !options && (value = params["length"] - 1, object["push"](args)), function loop(data) {
          $["each"](data, function(canCreateDiscussions, value) {
            if ($["isFunction"](value)) {
              if (!(data["unique"] && self["has"](value))) {
                params["push"](value);
              }
            } else {
              if (value && value["length"] && "string" !== $["type"](value)) {
                loop(value);
              }
            }
          });
        }(arguments), args && !options && getOwnPropertyNames()), this;
      },
      "remove" : function() {
        return $["each"](arguments, function(canCreateDiscussions, b) {
          var i;
          for (; -1 < (i = $["inArray"](b, params, i));) {
            params["splice"](i, 1);
            if (i <= value) {
              value--;
            }
          }
        }), this;
      },
      "has" : function(key) {
        return key ? -1 < $["inArray"](key, params) : 0 < params["length"];
      },
      "empty" : function() {
        return params && (params = []), this;
      },
      "disable" : function() {
        return result = object = [], params = args = "", this;
      },
      "disabled" : function() {
        return !params;
      },
      "lock" : function() {
        return result = object = [], args || options || (params = args = ""), this;
      },
      "locked" : function() {
        return !!result;
      },
      "fireWith" : function(context, args) {
        return result || (args = args || [], args = [context, args["slice"] ? args["slice"]() : args], object["push"](args), options || getOwnPropertyNames()), this;
      },
      "fire" : function() {
        return self["fireWith"](this, arguments), this;
      },
      "fired" : function() {
        return !!query;
      }
    };
    return self;
  };
  $["extend"]({
    "Deferred" : function(fn) {
      /** @type {!Array} */
      var which = [["notify", "progress", $["Callbacks"]("memory"), $["Callbacks"]("memory"), 2], ["resolve", "done", $["Callbacks"]("once memory"), $["Callbacks"]("once memory"), 0, "resolved"], ["reject", "fail", $["Callbacks"]("once memory"), $["Callbacks"]("once memory"), 1, "rejected"]];
      /** @type {string} */
      var state = "pending";
      var promise = {
        "state" : function() {
          return state;
        },
        "always" : function() {
          return obj["done"](arguments)["fail"](arguments), this;
        },
        "catch" : function(onRejection) {
          return promise["then"](null, onRejection);
        },
        "pipe" : function() {
          /** @type {!Arguments} */
          var params = arguments;
          return $["Deferred"](function(newDefer) {
            $["each"](which, function(canCreateDiscussions, tmp) {
              var fn = $["isFunction"](params[tmp[4]]) && params[tmp[4]];
              obj[tmp[1]](function() {
                var returned = fn && fn["apply"](this, arguments);
                if (returned && $["isFunction"](returned["promise"])) {
                  returned["promise"]()["progress"](newDefer["notify"])["done"](newDefer["resolve"])["fail"](newDefer["reject"]);
                } else {
                  newDefer[tmp[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            /** @type {null} */
            params = null;
          })["promise"]();
        },
        "then" : function(data, value, size) {
          /**
           * @param {number} name
           * @param {!Object} deferred
           * @param {!Function} fn
           * @param {boolean} data
           * @return {?}
           */
          function fn(name, deferred, fn, data) {
            return function() {
              var scope = this;
              /** @type {!Arguments} */
              var args = arguments;
              /**
               * @return {undefined}
               */
              var validate = function() {
                var value;
                var ast;
                if (!(name < token)) {
                  if (value = fn["apply"](scope, args), value === deferred["promise"]()) {
                    throw new TypeError("Thenable self-resolution");
                  }
                  ast = value && ("object" == typeof value || "function" == typeof value) && value["then"];
                  if ($["isFunction"](ast)) {
                    if (data) {
                      ast["call"](value, fn(token, deferred, name, data), fn(token, deferred, res, data));
                    } else {
                      token++;
                      ast["call"](value, fn(token, deferred, name, data), fn(token, deferred, res, data), fn(token, deferred, name, deferred["notifyWith"]));
                    }
                  } else {
                    if (fn !== name) {
                      scope = void 0;
                      /** @type {!Array} */
                      args = [value];
                    }
                    (data || deferred["resolveWith"])(scope, args);
                  }
                }
              };
              /** @type {function(): undefined} */
              var val = data ? validate : function() {
                try {
                  validate();
                } catch (firstRow) {
                  if ($["Deferred"]["exceptionHook"]) {
                    $["Deferred"]["exceptionHook"](firstRow, val["stackTrace"]);
                  }
                  if (name + 1 >= token) {
                    if (fn !== res) {
                      scope = void 0;
                      /** @type {!Array} */
                      args = [firstRow];
                    }
                    deferred["rejectWith"](scope, args);
                  }
                }
              };
              if (name) {
                val();
              } else {
                if ($["Deferred"]["getStackHook"]) {
                  val["stackTrace"] = $["Deferred"]["getStackHook"]();
                }
                window["setTimeout"](val);
              }
            };
          }
          /** @type {number} */
          var token = 0;
          return $["Deferred"](function(deferred) {
            which[0][3]["add"](fn(0, deferred, $["isFunction"](size) ? size : name, deferred["notifyWith"]));
            which[1][3]["add"](fn(0, deferred, $["isFunction"](data) ? data : name));
            which[2][3]["add"](fn(0, deferred, $["isFunction"](value) ? value : res));
          })["promise"]();
        },
        "promise" : function(value) {
          return null != value ? $["extend"](value, promise) : promise;
        }
      };
      var obj = {};
      return $["each"](which, function(canCreateDiscussions, tuple) {
        var node = tuple[2];
        var stateString = tuple[5];
        promise[tuple[1]] = node["add"];
        if (stateString) {
          node["add"](function() {
            state = stateString;
          }, which[3 - canCreateDiscussions][2]["disable"], which[0][2]["lock"]);
        }
        node["add"](tuple[3]["fire"]);
        /**
         * @return {?}
         */
        obj[tuple[0]] = function() {
          return obj[tuple[0] + "With"](this === obj ? void 0 : this, arguments), this;
        };
        obj[tuple[0] + "With"] = node["fireWith"];
      }), promise["promise"](obj), fn && fn["call"](obj, obj), obj;
    },
    "when" : function(ev) {
      var length = arguments["length"];
      var i = length;
      /** @type {!Array} */
      var args = Array(i);
      var data = function__361["call"](arguments);
      var self = $["Deferred"]();
      /**
       * @param {undefined} i
       * @return {?}
       */
      var updateFn = function(i) {
        return function(value) {
          args[i] = this;
          data[i] = 1 < arguments["length"] ? function__361["call"](arguments) : value;
          if (!--length) {
            self["resolveWith"](args, data);
          }
        };
      };
      if (1 >= length && (step(ev, self["done"](updateFn(i))["resolve"], self["reject"], !length), "pending" === self["state"]() || $["isFunction"](data[i] && data[i]["then"]))) {
        return self["then"]();
      }
      for (; i--;) {
        step(data[i], updateFn(i), self["reject"]);
      }
      return self["promise"]();
    }
  });
  /** @type {!RegExp} */
  var self = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  /**
   * @param {?} params
   * @param {?} mmCoreSplitViewBlock
   * @return {undefined}
   */
  $["Deferred"]["exceptionHook"] = function(params, mmCoreSplitViewBlock) {
    if (window["console"] && window["console"]["warn"] && params && self["test"](params["name"])) {
      window["console"]["warn"]("jQuery.Deferred exception: " + params["message"], params["stack"], mmCoreSplitViewBlock);
    }
  };
  /**
   * @param {?} canCreateDiscussions
   * @return {undefined}
   */
  $["readyException"] = function(canCreateDiscussions) {
    window["setTimeout"](function() {
      throw canCreateDiscussions;
    });
  };
  var api = $["Deferred"]();
  /**
   * @param {?} callback
   * @return {?}
   */
  $["fn"]["ready"] = function(callback) {
    return api["then"](callback)["catch"](function(elems) {
      $["readyException"](elems);
    }), this;
  };
  $["extend"]({
    "isReady" : false,
    "readyWait" : 1,
    "ready" : function(fn) {
      if (!(true === fn ? --$["readyWait"] : $["isReady"])) {
        /** @type {boolean} */
        $["isReady"] = true;
        if (!(true !== fn && 0 < --$["readyWait"])) {
          api["resolveWith"](document, [$]);
        }
      }
    }
  });
  $["ready"]["then"] = api["then"];
  if ("complete" === document["readyState"] || "loading" !== document["readyState"] && !document["documentElement"]["doScroll"]) {
    window["setTimeout"]($["ready"]);
  } else {
    document["addEventListener"]("DOMContentLoaded", handler);
    window["addEventListener"]("load", handler);
  }
  /**
   * @param {string} args
   * @param {!Function} fn
   * @param {!Object} key
   * @param {?} data
   * @param {boolean} name
   * @param {!Object} emptyGet
   * @param {boolean} raw
   * @return {?}
   */
  var access = function(args, fn, key, data, name, emptyGet, raw) {
    /** @type {number} */
    var i = 0;
    var len = args["length"];
    /** @type {boolean} */
    var bulk = null == key;
    if ("object" === $["type"](key)) {
      for (i in name = true, key) {
        access(args, fn, i, key[i], true, emptyGet, raw);
      }
    } else {
      if (void 0 !== data && (name = true, $["isFunction"](data) || (raw = true), bulk && (raw ? (fn["call"](args, data), fn = null) : (bulk = fn, fn = function(format, fullFormat, regional) {
        return bulk["call"]($(format), regional);
      })), fn)) {
        for (; i < len; i++) {
          fn(args[i], key, raw ? data : data["call"](args[i], i, fn(args[i], key)));
        }
      }
    }
    return name ? args : bulk ? fn["call"](args) : len ? fn(args[0], key) : emptyGet;
  };
  /**
   * @param {!Object} obj
   * @return {?}
   */
  var match = function(obj) {
    return 1 === obj["nodeType"] || 9 === obj["nodeType"] || !+obj["nodeType"];
  };
  /** @type {number} */
  Element["uid"] = 1;
  Element["prototype"] = {
    "cache" : function(obj) {
      var errorMsg = obj[this["expando"]];
      return errorMsg || (errorMsg = {}, match(obj) && (obj["nodeType"] ? obj[this["expando"]] = errorMsg : Object["defineProperty"](obj, this["expando"], {
        "value" : errorMsg,
        "configurable" : true
      }))), errorMsg;
    },
    "set" : function(props, key, deps) {
      var name;
      props = this["cache"](props);
      if ("string" == typeof key) {
        props[$["camelCase"](key)] = deps;
      } else {
        for (name in key) {
          props[$["camelCase"](name)] = key[name];
        }
      }
      return props;
    },
    "get" : function(data, key) {
      return void 0 === key ? this["cache"](data) : data[this["expando"]] && data[this["expando"]][$["camelCase"](key)];
    },
    "access" : function(name, fn, value) {
      return void 0 === fn || fn && "string" == typeof fn && void 0 === value ? this["get"](name, fn) : (this["set"](name, fn, value), void 0 !== value ? value : fn);
    },
    "remove" : function(container, data) {
      var property;
      var node = container[this["expando"]];
      if (void 0 !== node) {
        if (void 0 !== data) {
          if (Array["isArray"](data)) {
            data = data["map"]($["camelCase"]);
          } else {
            data = $["camelCase"](data);
            data = data in node ? [data] : data["match"](arg) || [];
          }
          property = data["length"];
          for (; property--;) {
            delete node[data[property]];
          }
        }
        if (void 0 === data || $["isEmptyObject"](node)) {
          if (container["nodeType"]) {
            container[this["expando"]] = void 0;
          } else {
            delete container[this["expando"]];
          }
        }
      }
    },
    "hasData" : function(data) {
      data = data[this["expando"]];
      return void 0 !== data && !$["isEmptyObject"](data);
    }
  };
  var target = new Element;
  var parent = new Element;
  /** @type {!RegExp} */
  var task = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
  /** @type {!RegExp} */
  var wrapper = /[A-Z]/g;
  $["extend"]({
    "hasData" : function(data) {
      return parent["hasData"](data) || target["hasData"](data);
    },
    "data" : function(value, result, table) {
      return parent["access"](value, result, table);
    },
    "removeData" : function(data, elem) {
      parent["remove"](data, elem);
    },
    "_data" : function(name, data, elem) {
      return target["access"](name, data, elem);
    },
    "_removeData" : function(name, listener) {
      target["remove"](name, listener);
    }
  });
  $["fn"]["extend"]({
    "data" : function(key, value) {
      var prop;
      var name;
      var attrs;
      var node = this[0];
      var args = node && node["attributes"];
      if (void 0 === key) {
        if (this["length"] && (attrs = parent["get"](node), 1 === node["nodeType"] && !target["get"](node, "hasDataAttrs"))) {
          prop = args["length"];
          for (; prop--;) {
            if (args[prop]) {
              name = args[prop]["name"];
              if (0 === name["indexOf"]("data-")) {
                name = $["camelCase"](name["slice"](5));
                set(node, name, attrs[name]);
              }
            }
          }
          target["set"](node, "hasDataAttrs", true);
        }
        return attrs;
      }
      return "object" == typeof key ? this["each"](function() {
        parent["set"](this, key);
      }) : access(this, function(type) {
        var data;
        if (node && void 0 === type) {
          if ((data = parent["get"](node, key), void 0 !== data) || (data = set(node, key), void 0 !== data)) {
            return data;
          }
        } else {
          this["each"](function() {
            parent["set"](this, key, type);
          });
        }
      }, null, value, 1 < arguments["length"], null, true);
    },
    "removeData" : function(elem) {
      return this["each"](function() {
        parent["remove"](this, elem);
      });
    }
  });
  $["extend"]({
    "queue" : function(name, type, data) {
      var queue;
      if (name) {
        return type = (type || "fx") + "queue", queue = target["get"](name, type), data && (!queue || Array["isArray"](data) ? queue = target["access"](name, type, $["makeArray"](data)) : queue["push"](data)), queue || [];
      }
    },
    "dequeue" : function(el, type) {
      type = type || "fx";
      var params = $["queue"](el, type);
      var index = params["length"];
      var options = params["shift"]();
      var e = $["_queueHooks"](el, type);
      /**
       * @return {undefined}
       */
      var fn = function() {
        $["dequeue"](el, type);
      };
      if ("inprogress" === options) {
        options = params["shift"]();
        index--;
      }
      if (options) {
        if ("fx" === type) {
          params["unshift"]("inprogress");
        }
        delete e["stop"];
        options["call"](el, fn, e);
      }
      if (!index && e) {
        e["empty"]["fire"]();
      }
    },
    "_queueHooks" : function(elem, type) {
      /** @type {string} */
      var key = type + "queueHooks";
      return target["get"](elem, key) || target["access"](elem, key, {
        "empty" : $["Callbacks"]("once memory")["add"](function() {
          target["remove"](elem, [type + "queue", key]);
        })
      });
    }
  });
  $["fn"]["extend"]({
    "queue" : function(callback, args) {
      /** @type {number} */
      var result = 2;
      return "string" != typeof callback && (args = callback, callback = "fx", result--), arguments["length"] < result ? $["queue"](this[0], callback) : void 0 === args ? this : this["each"](function() {
        var wrapped = $["queue"](this, callback, args);
        $["_queueHooks"](this, callback);
        if ("fx" === callback && "inprogress" !== wrapped[0]) {
          $["dequeue"](this, callback);
        }
      });
    },
    "dequeue" : function(callback) {
      return this["each"](function() {
        $["dequeue"](this, callback);
      });
    },
    "clearQueue" : function(type) {
      return this["queue"](type || "fx", []);
    },
    "promise" : function(type, data) {
      var cache;
      /** @type {number} */
      var _0x468f4f = 1;
      var newDefer = $["Deferred"]();
      var returned = this;
      var i = this["length"];
      /**
       * @return {undefined}
       */
      var resolve = function() {
        if (!--_0x468f4f) {
          newDefer["resolveWith"](returned, [returned]);
        }
      };
      if ("string" != typeof type) {
        /** @type {!Object} */
        data = type;
        type = void 0;
      }
      type = type || "fx";
      for (; i--;) {
        if ((cache = target["get"](returned[i], type + "queueHooks")) && cache["empty"]) {
          _0x468f4f++;
          cache["empty"]["add"](resolve);
        }
      }
      return resolve(), newDefer["promise"](data);
    }
  });
  var sourceDeps = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/["source"];
  /** @type {!RegExp} */
  var context = RegExp("^(?:([+-])=|)(" + sourceDeps + ")([a-z%]*)$", "i");
  /** @type {!Array} */
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  /**
   * @param {!Object} el
   * @param {!Object} attribs
   * @return {?}
   */
  var animate = function(el, attribs) {
    return el = attribs || el, "none" === el["style"]["display"] || "" === el["style"]["display"] && $["contains"](el["ownerDocument"], el) && "none" === $["css"](el, "display");
  };
  /**
   * @param {!Element} el
   * @param {!Array} style
   * @param {!Function} dom
   * @param {number} val
   * @return {?}
   */
  var css = function(el, style, dom, val) {
    var i;
    var Perlin_p = {};
    for (i in style) {
      Perlin_p[i] = el["style"][i];
      el["style"][i] = style[i];
    }
    dom = dom["apply"](el, val || []);
    for (i in style) {
      el["style"][i] = Perlin_p[i];
    }
    return dom;
  };
  var masterPages = {};
  $["fn"]["extend"]({
    "show" : function() {
      return hide(this, true);
    },
    "hide" : function() {
      return hide(this);
    },
    "toggle" : function(val) {
      return "boolean" == typeof val ? val ? this["show"]() : this["hide"]() : this["each"](function() {
        if (animate(this)) {
          $(this)["show"]();
        } else {
          $(this)["hide"]();
        }
      });
    }
  });
  /** @type {!RegExp} */
  var h = /^(?:checkbox|radio)$/i;
  /** @type {!RegExp} */
  var writeScale = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
  /** @type {!RegExp} */
  var url = /^$|\/(?:java|ecma)script/i;
  var wrapMap = {
    "option" : [1, "<select multiple='multiple'>", "</select>"],
    "thead" : [1, "<table>", "</table>"],
    "col" : [2, "<table><colgroup>", "</colgroup></table>"],
    "tr" : [2, "<table><tbody>", "</tbody></table>"],
    "td" : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    "_default" : [0, "", ""]
  };
  wrapMap["optgroup"] = wrapMap["option"];
  wrapMap["tbody"] = wrapMap["tfoot"] = wrapMap["colgroup"] = wrapMap["caption"] = wrapMap["thead"];
  wrapMap["th"] = wrapMap["td"];
  /** @type {!RegExp} */
  var B262 = /<|&#?\w+;/;
  var container = document["createDocumentFragment"]()["appendChild"](document["createElement"]("div"));
  var $input = document["createElement"]("input");
  $input["setAttribute"]("type", "radio");
  $input["setAttribute"]("checked", "checked");
  $input["setAttribute"]("name", "t");
  container["appendChild"]($input);
  value["checkClone"] = container["cloneNode"](true)["cloneNode"](true)["lastChild"]["checked"];
  /** @type {string} */
  container["innerHTML"] = "<textarea>x</textarea>";
  /** @type {boolean} */
  value["noCloneChecked"] = !!container["cloneNode"](true)["lastChild"]["defaultValue"];
  true;
  var that = document["documentElement"];
  /** @type {!RegExp} */
  var PL$7 = /^key/;
  /** @type {!RegExp} */
  var PL$22 = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
  /** @type {!RegExp} */
  var joischema = /^([^.]*)(?:\.(.+)|)/;
  $["event"] = {
    "global" : {},
    "add" : function(name, results, handler, source, selector) {
      var options;
      var value;
      var m;
      var PL$22;
      var key;
      var methods;
      var selectors;
      var PL$27;
      var type;
      var origType;
      if (key = target["get"](name)) {
        if (handler["handler"]) {
          /** @type {!Object} */
          options = handler;
          handler = options["handler"];
          selector = options["selector"];
        }
        if (selector) {
          $["find"]["matchesSelector"](that, selector);
        }
        if (!handler["guid"]) {
          /** @type {number} */
          handler["guid"] = $["guid"]++;
        }
        if (!(PL$22 = key["events"])) {
          PL$22 = key["events"] = {};
        }
        if (!(value = key["handle"])) {
          /** @type {function(!Object): ?} */
          value = key["handle"] = function(toolTipTexts) {
            return "undefined" != typeof $ && $["event"]["triggered"] !== toolTipTexts["type"] ? $["event"]["dispatch"]["apply"](name, arguments) : void 0;
          };
        }
        results = (results || "")["match"](arg) || [""];
        key = results["length"];
        for (; key--;) {
          m = joischema["exec"](results[key]) || [];
          type = origType = m[1];
          m = (m[2] || "")["split"](".")["sort"]();
          if (type) {
            selectors = $["event"]["special"][type] || {};
            type = (selector ? selectors["delegateType"] : selectors["bindType"]) || type;
            selectors = $["event"]["special"][type] || {};
            methods = $["extend"]({
              "type" : type,
              "origType" : origType,
              "data" : source,
              "handler" : handler,
              "guid" : handler["guid"],
              "selector" : selector,
              "needsContext" : selector && $["expr"]["match"]["needsContext"]["test"](selector),
              "namespace" : m["join"](".")
            }, options);
            if (!(PL$27 = PL$22[type])) {
              /** @type {!Array} */
              PL$27 = PL$22[type] = [];
              /** @type {number} */
              PL$27["delegateCount"] = 0;
              if (!(selectors["setup"] && false !== selectors["setup"]["call"](name, source, m, value))) {
                if (name["addEventListener"]) {
                  name["addEventListener"](type, value);
                }
              }
            }
            if (selectors["add"]) {
              selectors["add"]["call"](name, methods);
              if (!methods["handler"]["guid"]) {
                methods["handler"]["guid"] = handler["guid"];
              }
            }
            if (selector) {
              PL$27["splice"](PL$27["delegateCount"]++, 0, methods);
            } else {
              PL$27["push"](methods);
            }
            /** @type {boolean} */
            $["event"]["global"][type] = true;
          }
        }
      }
    },
    "remove" : function(data, params, elem, selector, mappedTypes) {
      var PL$29;
      var _;
      var window;
      var ref2;
      var key;
      var self;
      var bets;
      var PL$27;
      var name;
      var PL$3;
      var value;
      var args = target["hasData"](data) && target["get"](data);
      if (args && (ref2 = args["events"])) {
        params = (params || "")["match"](arg) || [""];
        key = params["length"];
        for (; key--;) {
          if (window = joischema["exec"](params[key]) || [], name = value = window[1], PL$3 = (window[2] || "")["split"](".")["sort"](), name) {
            bets = $["event"]["special"][name] || {};
            name = (selector ? bets["delegateType"] : bets["bindType"]) || name;
            PL$27 = ref2[name] || [];
            window = window[2] && RegExp("(^|\\.)" + PL$3["join"]("\\.(?:.*\\.|)") + "(\\.|$)");
            _ = PL$29 = PL$27["length"];
            for (; PL$29--;) {
              self = PL$27[PL$29];
              if (!(!mappedTypes && value !== self["origType"] || elem && elem["guid"] !== self["guid"] || window && !window["test"](self["namespace"]) || selector && selector !== self["selector"] && ("**" !== selector || !self["selector"]))) {
                PL$27["splice"](PL$29, 1);
                if (self["selector"]) {
                  PL$27["delegateCount"]--;
                }
                if (bets["remove"]) {
                  bets["remove"]["call"](data, self);
                }
              }
            }
            if (_ && !PL$27["length"]) {
              if (!(bets["teardown"] && false !== bets["teardown"]["call"](data, PL$3, args["handle"]))) {
                $["removeEvent"](data, name, args["handle"]);
              }
              delete ref2[name];
            }
          } else {
            for (name in ref2) {
              $["event"]["remove"](data, name + params[key], elem, selector, true);
            }
          }
        }
        if ($["isEmptyObject"](ref2)) {
          target["remove"](data, "handle events");
        }
      }
    },
    "dispatch" : function(cat) {
      var result = $["event"]["fix"](cat);
      var i;
      var v;
      var t;
      var query;
      var config;
      var data;
      /** @type {!Array} */
      var message = Array(arguments["length"]);
      v = (target["get"](this, "events") || {})[result["type"]] || [];
      var callbacks = $["event"]["special"][result["type"]] || {};
      message[0] = result;
      /** @type {number} */
      i = 1;
      for (; i < arguments["length"]; i++) {
        message[i] = arguments[i];
      }
      if (result["delegateTarget"] = this, !callbacks["preDispatch"] || false !== callbacks["preDispatch"]["call"](this, result)) {
        data = $["event"]["handlers"]["call"](this, result, v);
        /** @type {number} */
        i = 0;
        for (; (query = data[i++]) && !result["isPropagationStopped"]();) {
          result["currentTarget"] = query["elem"];
          /** @type {number} */
          v = 0;
          for (; (config = query["handlers"][v++]) && !result["isImmediatePropagationStopped"]();) {
            if (!(result["rnamespace"] && !result["rnamespace"]["test"](config["namespace"]))) {
              result["handleObj"] = config;
              result["data"] = config["data"];
              t = (($["event"]["special"][config["origType"]] || {})["handle"] || config["handler"])["apply"](query["elem"], message);
              if (void 0 !== t && false === (result["result"] = t)) {
                result["preventDefault"]();
                result["stopPropagation"]();
              }
            }
          }
        }
        return callbacks["postDispatch"] && callbacks["postDispatch"]["call"](this, result), result["result"];
      }
    },
    "handlers" : function(event, a) {
      var j;
      var x;
      var section;
      var PL$4;
      var unconfigurable_enabled_extensions;
      /** @type {!Array} */
      var PL$86 = [];
      var c = a["delegateCount"];
      var item = event["target"];
      if (c && item["nodeType"] && !("click" === event["type"] && 1 <= event["button"])) {
        for (; item !== this; item = item["parentNode"] || this) {
          if (1 === item["nodeType"] && ("click" !== event["type"] || true !== item["disabled"])) {
            /** @type {!Array} */
            PL$4 = [];
            unconfigurable_enabled_extensions = {};
            /** @type {number} */
            j = 0;
            for (; j < c; j++) {
              x = a[j];
              section = x["selector"] + " ";
              if (void 0 === unconfigurable_enabled_extensions[section]) {
                unconfigurable_enabled_extensions[section] = x["needsContext"] ? -1 < $(section, this)["index"](item) : $["find"](section, this, null, [item])["length"];
              }
              if (unconfigurable_enabled_extensions[section]) {
                PL$4["push"](x);
              }
            }
            if (PL$4["length"]) {
              PL$86["push"]({
                "elem" : item,
                "handlers" : PL$4
              });
            }
          }
        }
      }
      return item = this, c < a["length"] && PL$86["push"]({
        "elem" : item,
        "handlers" : a["slice"](c)
      }), PL$86;
    },
    "addProp" : function(prop, value) {
      Object["defineProperty"]($["Event"]["prototype"], prop, {
        "enumerable" : true,
        "configurable" : true,
        "get" : $["isFunction"](value) ? function() {
          if (this["originalEvent"]) {
            return value(this["originalEvent"]);
          }
        } : function() {
          if (this["originalEvent"]) {
            return this["originalEvent"][prop];
          }
        },
        "set" : function(command_module_id) {
          Object["defineProperty"](this, prop, {
            "enumerable" : true,
            "configurable" : true,
            "writable" : true,
            "value" : command_module_id
          });
        }
      });
    },
    "fix" : function(originalEvent) {
      return originalEvent[$["expando"]] ? originalEvent : new $["Event"](originalEvent);
    },
    "special" : {
      "load" : {
        "noBubble" : true
      },
      "focus" : {
        "trigger" : function() {
          if (this !== ensureEvents() && this["focus"]) {
            return this["focus"](), false;
          }
        },
        "delegateType" : "focusin"
      },
      "blur" : {
        "trigger" : function() {
          if (this === ensureEvents() && this["blur"]) {
            return this["blur"](), false;
          }
        },
        "delegateType" : "focusout"
      },
      "click" : {
        "trigger" : function() {
          if ("checkbox" === this["type"] && this["click"] && callback(this, "input")) {
            return this["click"](), false;
          }
        },
        "_default" : function(data) {
          return callback(data["target"], "a");
        }
      },
      "beforeunload" : {
        "postDispatch" : function(event) {
          if (void 0 !== event["result"] && event["originalEvent"]) {
            event["originalEvent"]["returnValue"] = event["result"];
          }
        }
      }
    }
  };
  /**
   * @param {!Object} self
   * @param {?} type
   * @param {?} cb
   * @return {undefined}
   */
  $["removeEvent"] = function(self, type, cb) {
    if (self["removeEventListener"]) {
      self["removeEventListener"](type, cb);
    }
  };
  /**
   * @param {!Object} event
   * @param {string} options
   * @return {?}
   */
  $["Event"] = function(event, options) {
    return this instanceof $["Event"] ? (event && event["type"] ? (this["originalEvent"] = event, this["type"] = event["type"], this["isDefaultPrevented"] = event["defaultPrevented"] || void 0 === event["defaultPrevented"] && false === event["returnValue"] ? almost_equals : returnFalse, this["target"] = event["target"] && 3 === event["target"]["nodeType"] ? event["target"]["parentNode"] : event["target"], this["currentTarget"] = event["currentTarget"], this["relatedTarget"] = event["relatedTarget"]) : 
    this["type"] = event, options && $["extend"](this, options), this["timeStamp"] = event && event["timeStamp"] || $["now"](), void(this[$["expando"]] = true)) : new $["Event"](event, options);
  };
  $["Event"]["prototype"] = {
    "constructor" : $["Event"],
    "isDefaultPrevented" : returnFalse,
    "isPropagationStopped" : returnFalse,
    "isImmediatePropagationStopped" : returnFalse,
    "isSimulated" : false,
    "preventDefault" : function() {
      var synEvent = this["originalEvent"];
      /** @type {function(): ?} */
      this["isDefaultPrevented"] = almost_equals;
      if (synEvent && !this["isSimulated"]) {
        synEvent["preventDefault"]();
      }
    },
    "stopPropagation" : function() {
      var e = this["originalEvent"];
      /** @type {function(): ?} */
      this["isPropagationStopped"] = almost_equals;
      if (e && !this["isSimulated"]) {
        e["stopPropagation"]();
      }
    },
    "stopImmediatePropagation" : function() {
      var _Event_prototype = this["originalEvent"];
      /** @type {function(): ?} */
      this["isImmediatePropagationStopped"] = almost_equals;
      if (_Event_prototype && !this["isSimulated"]) {
        _Event_prototype["stopImmediatePropagation"]();
      }
      this["stopPropagation"]();
    }
  };
  $["each"]({
    "altKey" : true,
    "bubbles" : true,
    "cancelable" : true,
    "changedTouches" : true,
    "ctrlKey" : true,
    "detail" : true,
    "eventPhase" : true,
    "metaKey" : true,
    "pageX" : true,
    "pageY" : true,
    "shiftKey" : true,
    "view" : true,
    "char" : true,
    "charCode" : true,
    "key" : true,
    "keyCode" : true,
    "button" : true,
    "buttons" : true,
    "clientX" : true,
    "clientY" : true,
    "offsetX" : true,
    "offsetY" : true,
    "pointerId" : true,
    "pointerType" : true,
    "screenX" : true,
    "screenY" : true,
    "targetTouches" : true,
    "toElement" : true,
    "touches" : true,
    "which" : function(e) {
      var key = e["button"];
      return null == e["which"] && PL$7["test"](e["type"]) ? null != e["charCode"] ? e["charCode"] : e["keyCode"] : !e["which"] && void 0 !== key && PL$22["test"](e["type"]) ? 1 & key ? 1 : 2 & key ? 3 : 4 & key ? 2 : 0 : e["which"];
    }
  }, $["event"]["addProp"]);
  $["each"]({
    "mouseenter" : "mouseover",
    "mouseleave" : "mouseout",
    "pointerenter" : "pointerover",
    "pointerleave" : "pointerout"
  }, function(orig, type) {
    $["event"]["special"][orig] = {
      "delegateType" : type,
      "bindType" : type,
      "handle" : function(event) {
        var _ref12;
        var el = event["relatedTarget"];
        var data = event["handleObj"];
        return el && (el === this || $["contains"](this, el)) || (event["type"] = data["origType"], _ref12 = data["handler"]["apply"](this, arguments), event["type"] = type), _ref12;
      }
    };
  });
  $["fn"]["extend"]({
    "on" : function(cb, model, opts, selector) {
      return start(this, cb, model, opts, selector);
    },
    "one" : function(key, val, name, basefunc) {
      return start(this, key, val, name, basefunc, 1);
    },
    "off" : function(value, callback, name) {
      var options;
      var classKey;
      if (value && value["preventDefault"] && value["handleObj"]) {
        return options = value["handleObj"], $(value["delegateTarget"])["off"](options["namespace"] ? options["origType"] + "." + options["namespace"] : options["origType"], options["selector"], options["handler"]), this;
      }
      if ("object" == typeof value) {
        for (classKey in value) {
          this["off"](classKey, callback, value[classKey]);
        }
        return this;
      }
      return false !== callback && "function" != typeof callback || (name = callback, callback = void 0), false === name && (name = returnFalse), this["each"](function() {
        $["event"]["remove"](this, value, name, callback);
      });
    }
  });
  /** @type {!RegExp} */
  var regPlaceholder = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
  /** @type {!RegExp} */
  var seoPage = /<script|<style|<link/i;
  /** @type {!RegExp} */
  var loader_calback = /checked\s*(?:[^=]|=\s*.checked.)/i;
  /** @type {!RegExp} */
  var operators = /^true\/(.*)/;
  /** @type {!RegExp} */
  var d = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  $["extend"]({
    "htmlPrefilter" : function(PL$5) {
      return PL$5["replace"](regPlaceholder, "<$1></$2>");
    },
    "clone" : function(el, branch, context) {
      var i;
      var temp;
      var result;
      var destElements;
      var clone = el["cloneNode"](true);
      var inPage = $["contains"](el["ownerDocument"], el);
      if (!value["noCloneChecked"] && !(1 !== el["nodeType"] && 11 !== el["nodeType"] || $["isXMLDoc"](el))) {
        destElements = getAll(clone);
        result = getAll(el);
        /** @type {number} */
        i = 0;
        temp = result["length"];
        for (; i < temp; i++) {
          var data = result[i];
          var element = destElements[i];
          var undefined = element["nodeName"]["toLowerCase"]();
          if ("input" === undefined && h["test"](data["type"])) {
            element["checked"] = data["checked"];
          } else {
            if (!("input" !== undefined && "textarea" !== undefined)) {
              element["defaultValue"] = data["defaultValue"];
            }
          }
        }
      }
      if (branch) {
        if (context) {
          result = result || getAll(el);
          destElements = destElements || getAll(clone);
          /** @type {number} */
          i = 0;
          temp = result["length"];
          for (; i < temp; i++) {
            extend(result[i], destElements[i]);
          }
        } else {
          extend(el, clone);
        }
      }
      return destElements = getAll(clone, "script"), 0 < destElements["length"] && setGlobalEval(destElements, !inPage && getAll(el, "script")), clone;
    },
    "cleanData" : function(partBuffer) {
      var obj;
      var data;
      var i;
      var siblingsToAdd = $["event"]["special"];
      /** @type {number} */
      var fullCrc = 0;
      for (; void 0 !== (data = partBuffer[fullCrc]); fullCrc++) {
        if (match(data)) {
          if (obj = data[target["expando"]]) {
            if (obj["events"]) {
              for (i in obj["events"]) {
                if (siblingsToAdd[i]) {
                  $["event"]["remove"](data, i);
                } else {
                  $["removeEvent"](data, i, obj["handle"]);
                }
              }
            }
            data[target["expando"]] = void 0;
          }
          if (data[parent["expando"]]) {
            data[parent["expando"]] = void 0;
          }
        }
      }
    }
  });
  $["fn"]["extend"]({
    "detach" : function(f) {
      return remove(this, f, true);
    },
    "remove" : function(key) {
      return remove(this, key);
    },
    "text" : function(value) {
      return access(this, function(value) {
        return void 0 === value ? $["text"](this) : this["empty"]()["each"](function() {
          if (!(1 !== this["nodeType"] && 11 !== this["nodeType"] && 9 !== this["nodeType"])) {
            /** @type {!Array} */
            this["textContent"] = value;
          }
        });
      }, null, value, arguments["length"]);
    },
    "append" : function() {
      return update(this, arguments, function(group) {
        if (1 === this["nodeType"] || 11 === this["nodeType"] || 9 === this["nodeType"]) {
          next(this, group)["appendChild"](group);
        }
      });
    },
    "prepend" : function() {
      return update(this, arguments, function(key) {
        if (1 === this["nodeType"] || 11 === this["nodeType"] || 9 === this["nodeType"]) {
          var el = next(this, key);
          el["insertBefore"](key, el["firstChild"]);
        }
      });
    },
    "before" : function() {
      return update(this, arguments, function(mmCoreSplitViewBlock) {
        if (this["parentNode"]) {
          this["parentNode"]["insertBefore"](mmCoreSplitViewBlock, this);
        }
      });
    },
    "after" : function() {
      return update(this, arguments, function(mmCoreSplitViewBlock) {
        if (this["parentNode"]) {
          this["parentNode"]["insertBefore"](mmCoreSplitViewBlock, this["nextSibling"]);
        }
      });
    },
    "empty" : function() {
      var node;
      /** @type {number} */
      var PARENT_NODE = 0;
      for (; null != (node = this[PARENT_NODE]); PARENT_NODE++) {
        if (1 === node["nodeType"]) {
          $["cleanData"](getAll(node, false));
          /** @type {string} */
          node["textContent"] = "";
        }
      }
      return this;
    },
    "clone" : function(o, x) {
      return o = null != o && o, x = null == x ? o : x, this["map"](function() {
        return $["clone"](this, o, x);
      });
    },
    "html" : function(value) {
      return access(this, function(value) {
        var el = this[0] || {};
        /** @type {number} */
        var PL$28 = 0;
        var PL$29 = this["length"];
        if (void 0 === value && 1 === el["nodeType"]) {
          return el["innerHTML"];
        }
        if ("string" == typeof value && !seoPage["test"](value) && !wrapMap[(writeScale["exec"](value) || ["", ""])[1]["toLowerCase"]()]) {
          value = $["htmlPrefilter"](value);
          try {
            for (; PL$28 < PL$29; PL$28++) {
              el = this[PL$28] || {};
              if (1 === el["nodeType"]) {
                $["cleanData"](getAll(el, false));
                /** @type {!Array} */
                el["innerHTML"] = value;
              }
            }
            /** @type {number} */
            el = 0;
          } catch (_0x7440c8) {
          }
        }
        if (el) {
          this["empty"]()["append"](value);
        }
      }, null, value, arguments["length"]);
    },
    "replaceWith" : function() {
      /** @type {!Array} */
      var callback = [];
      return update(this, arguments, function(value) {
        var parent = this["parentNode"];
        if (0 > $["inArray"](this, callback)) {
          $["cleanData"](getAll(this));
          if (parent) {
            parent["replaceChild"](value, this);
          }
        }
      }, callback);
    }
  });
  $["each"]({
    "appendTo" : "append",
    "prependTo" : "prepend",
    "insertBefore" : "before",
    "insertAfter" : "after",
    "replaceAll" : "replaceWith"
  }, function(name, operator) {
    /**
     * @param {!Object} data
     * @return {?}
     */
    $["fn"][name] = function(data) {
      /** @type {!Array} */
      var PL$19 = [];
      var profile = $(data);
      /** @type {number} */
      var maxNodeId = profile["length"] - 1;
      /** @type {number} */
      var id = 0;
      for (; id <= maxNodeId; id++) {
        data = id === maxNodeId ? this : this["clone"](true);
        $(profile[id])[operator](data);
        push["apply"](PL$19, data["get"]());
      }
      return this["pushStack"](PL$19);
    };
  });
  /** @type {!RegExp} */
  var style = /^margin/;
  /** @type {!RegExp} */
  var color = RegExp("^(" + sourceDeps + ")(?!px)[a-z%]+$", "i");
  /**
   * @param {!Object} element
   * @return {?}
   */
  var getStyles = function(element) {
    var container = element["ownerDocument"]["defaultView"];
    return container && container["opener"] || (container = window), container["getComputedStyle"](element);
  };
  /**
   * @return {undefined}
   */
  var position = function() {
    if (element) {
      /** @type {string} */
      element["style"]["cssText"] = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
      /** @type {string} */
      element["innerHTML"] = "";
      that["appendChild"](el);
      var style = window["getComputedStyle"](element);
      /** @type {boolean} */
      _0x152a11 = "1%" !== style["top"];
      /** @type {boolean} */
      _0x87d2d5 = "2px" === style["marginLeft"];
      /** @type {boolean} */
      _0x4c33d3 = "4px" === style["width"];
      /** @type {string} */
      element["style"]["marginRight"] = "50%";
      /** @type {boolean} */
      _0x3a04b9 = "4px" === style["marginRight"];
      that["removeChild"](el);
      /** @type {null} */
      element = null;
    }
  };
  var _0x152a11;
  var _0x4c33d3;
  var _0x3a04b9;
  var _0x87d2d5;
  var el = document["createElement"]("div");
  var element = document["createElement"]("div");
  if (element["style"]) {
    /** @type {string} */
    element["style"]["backgroundClip"] = "content-box";
    /** @type {string} */
    element["cloneNode"](true)["style"]["backgroundClip"] = "";
    /** @type {boolean} */
    value["clearCloneStyle"] = "content-box" === element["style"]["backgroundClip"];
    /** @type {string} */
    el["style"]["cssText"] = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
    el["appendChild"](element);
    $["extend"](value, {
      "pixelPosition" : function() {
        return position(), _0x152a11;
      },
      "boxSizingReliable" : function() {
        return position(), _0x4c33d3;
      },
      "pixelMarginRight" : function() {
        return position(), _0x3a04b9;
      },
      "reliableMarginLeft" : function() {
        return position(), _0x87d2d5;
      }
    });
  }
  true;
  /** @type {!RegExp} */
  var B681 = /^(none|table(?!-c[ea]).+)/;
  /** @type {!RegExp} */
  var DeserializationMethods = /^--/;
  var props = {
    "position" : "absolute",
    "visibility" : "hidden",
    "display" : "block"
  };
  var cssNormalTransform = {
    "letterSpacing" : "0",
    "fontWeight" : "400"
  };
  /** @type {!Array} */
  var prefixes = ["Webkit", "Moz", "ms"];
  var val = document["createElement"]("div")["style"];
  $["extend"]({
    "cssHooks" : {
      "opacity" : {
        "get" : function(elem, hasShiftKeyPressed) {
          if (hasShiftKeyPressed) {
            var to = curCSS(elem, "opacity");
            return "" === to ? "1" : to;
          }
        }
      }
    },
    "cssNumber" : {
      "animationIterationCount" : true,
      "columnCount" : true,
      "fillOpacity" : true,
      "flexGrow" : true,
      "flexShrink" : true,
      "fontWeight" : true,
      "lineHeight" : true,
      "opacity" : true,
      "order" : true,
      "orphans" : true,
      "widows" : true,
      "zIndex" : true,
      "zoom" : true
    },
    "cssProps" : {
      "float" : "cssFloat"
    },
    "style" : function(val, name, key, options) {
      if (val && 3 !== val["nodeType"] && 8 !== val["nodeType"] && val["style"]) {
        var ret;
        var type;
        var desc;
        var origName = $["camelCase"](name);
        var elem = DeserializationMethods["test"](name);
        var types = val["style"];
        return elem || (name = vendorPropName(origName)), desc = $["cssHooks"][name] || $["cssHooks"][origName], void 0 === key ? desc && "get" in desc && void 0 !== (ret = desc["get"](val, false, options)) ? ret : types[name] : (type = typeof key, "string" === type && (ret = context["exec"](key)) && ret[1] && (key = add(val, name, ret), type = "number"), null != key && key === key && ("number" === type && (key = key + (ret && ret[3] || ($["cssNumber"][origName] ? "" : "px"))), value["clearCloneStyle"] || 
        "" !== key || 0 !== name["indexOf"]("background") || (types[name] = "inherit"), desc && "set" in desc && void 0 === (key = desc["set"](val, key, options)) || (elem ? types["setProperty"](name, key) : types[name] = key)), void 0);
      }
    },
    "css" : function(el, name, value, styles) {
      var val;
      var length;
      var desc;
      var origName = $["camelCase"](name);
      return DeserializationMethods["test"](name) || (name = vendorPropName(origName)), desc = $["cssHooks"][name] || $["cssHooks"][origName], desc && "get" in desc && (val = desc["get"](el, true, value)), void 0 === val && (val = curCSS(el, name, styles)), "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]), "" === value || value ? (length = parseFloat(val), true === value || isFinite(length) ? length || 0 : val) : val;
    }
  });
  $["each"](["height", "width"], function(canCreateDiscussions, name) {
    $["cssHooks"][name] = {
      "get" : function(el, context, extra) {
        if (context) {
          return !B681["test"]($["css"](el, "display")) || el["getClientRects"]()["length"] && el["getBoundingClientRect"]()["width"] ? getWidthOrHeight(el, name, extra) : css(el, props, function() {
            return getWidthOrHeight(el, name, extra);
          });
        }
      },
      "set" : function(elem, value, extra) {
        var matches;
        var styles = extra && getStyles(elem);
        extra = extra && augmentWidthOrHeight(elem, name, extra, "border-box" === $["css"](elem, "boxSizing", false, styles), styles);
        return extra && (matches = context["exec"](value)) && "px" !== (matches[3] || "px") && (elem["style"][name] = value, value = $["css"](elem, name)), show(elem, value, extra);
      }
    };
  });
  $["cssHooks"]["marginLeft"] = deserialize(value["reliableMarginLeft"], function(el, canCreateDiscussions) {
    if (canCreateDiscussions) {
      return (parseFloat(curCSS(el, "marginLeft")) || el["getBoundingClientRect"]()["left"] - css(el, {
        "marginLeft" : 0
      }, function() {
        return el["getBoundingClientRect"]()["left"];
      })) + "px";
    }
  });
  $["each"]({
    "margin" : "",
    "padding" : "",
    "border" : "Width"
  }, function(prefix, name) {
    $["cssHooks"][prefix + name] = {
      "expand" : function(keys) {
        /** @type {number} */
        var i = 0;
        var input = {};
        keys = "string" == typeof keys ? keys["split"](" ") : [keys];
        for (; 4 > i; i++) {
          input[prefix + cssExpand[i] + name] = keys[i] || keys[i - 2] || keys[0];
        }
        return input;
      }
    };
    if (!style["test"](prefix)) {
      /** @type {function(!Object, (Array|HTMLCollection|Node|NodeList|Window|string), string): ?} */
      $["cssHooks"][prefix + name]["set"] = show;
    }
  });
  $["fn"]["extend"]({
    "css" : function(name, value) {
      return access(this, function(el, name, undefined) {
        var value;
        var map = {};
        /** @type {number} */
        var j = 0;
        if (Array["isArray"](name)) {
          undefined = getStyles(el);
          value = name["length"];
          for (; j < value; j++) {
            map[name[j]] = $["css"](el, name[j], false, undefined);
          }
          return map;
        }
        return void 0 !== undefined ? $["style"](el, name, undefined) : $["css"](el, name);
      }, name, value, 1 < arguments["length"]);
    }
  });
  /** @type {function(!Object, !Object, !Object, !Object, !Object): ?} */
  $["Tween"] = Task;
  Task["prototype"] = {
    "constructor" : Task,
    "init" : function(attrs, options, name, op, step, unit) {
      this["elem"] = attrs;
      this["prop"] = name;
      this["easing"] = step || $["easing"]["_default"];
      this["options"] = options;
      this["start"] = this["now"] = this["cur"]();
      this["end"] = op;
      this["unit"] = unit || ($["cssNumber"][name] ? "" : "px");
    },
    "cur" : function() {
      var operations = Task["propHooks"][this["prop"]];
      return operations && operations["get"] ? operations["get"](this) : Task["propHooks"]["_default"]["get"](this);
    },
    "run" : function(data) {
      var processedResults;
      var set = Task["propHooks"][this["prop"]];
      return this["options"]["duration"] ? this["pos"] = processedResults = $["easing"][this["easing"]](data, this["options"]["duration"] * data, 0, 1, this["options"]["duration"]) : this["pos"] = processedResults = data, this["now"] = (this["end"] - this["start"]) * processedResults + this["start"], this["options"]["step"] && this["options"]["step"]["call"](this["elem"], this["now"], this), set && set["set"] ? set["set"](this) : Task["propHooks"]["_default"]["set"](this), this;
    }
  };
  Task["prototype"]["init"]["prototype"] = Task["prototype"];
  Task["propHooks"] = {
    "_default" : {
      "get" : function(params) {
        var charset;
        return 1 !== params["elem"]["nodeType"] || null != params["elem"][params["prop"]] && null == params["elem"]["style"][params["prop"]] ? params["elem"][params["prop"]] : (charset = $["css"](params["elem"], params["prop"], ""), charset && "auto" !== charset ? charset : 0);
      },
      "set" : function(data) {
        if ($["fx"]["step"][data["prop"]]) {
          $["fx"]["step"][data["prop"]](data);
        } else {
          if (1 !== data["elem"]["nodeType"] || null == data["elem"]["style"][$["cssProps"][data["prop"]]] && !$["cssHooks"][data["prop"]]) {
            data["elem"][data["prop"]] = data["now"];
          } else {
            $["style"](data["elem"], data["prop"], data["now"] + data["unit"]);
          }
        }
      }
    }
  };
  Task["propHooks"]["scrollTop"] = Task["propHooks"]["scrollLeft"] = {
    "set" : function(list) {
      if (list["elem"]["nodeType"] && list["elem"]["parentNode"]) {
        list["elem"][list["prop"]] = list["now"];
      }
    }
  };
  $["easing"] = {
    "linear" : function(p) {
      return p;
    },
    "swing" : function(p) {
      return 0.5 - Math["cos"](p * Math["PI"]) / 2;
    },
    "_default" : "swing"
  };
  $["fx"] = Task["prototype"]["init"];
  $["fx"]["step"] = {};
  var fxNow;
  var _0x4aeb69;
  /** @type {!RegExp} */
  var testScores = /^(?:toggle|show|hide)$/;
  /** @type {!RegExp} */
  var parts = /queueHooks$/;
  $["Animation"] = $["extend"](render, {
    "tweeners" : {
      "*" : [function(where, value) {
        var data = this["createTween"](where, value);
        return add(data["elem"], where, context["exec"](value), data), data;
      }]
    },
    "tweener" : function(data, callback) {
      if ($["isFunction"](data)) {
        /** @type {!Object} */
        callback = data;
        /** @type {!Array} */
        data = ["*"];
      } else {
        data = data["match"](arg);
      }
      var byt;
      /** @type {number} */
      var i = 0;
      var key = data["length"];
      for (; i < key; i++) {
        byt = data[i];
        render["tweeners"][byt] = render["tweeners"][byt] || [];
        render["tweeners"][byt]["unshift"](callback);
      }
    },
    "prefilters" : [function(el, props, data) {
      var prop;
      var value;
      var matched;
      var n;
      var gotoNewOfflinePage;
      var res;
      var val;
      var type;
      /** @type {boolean} */
      var _0x84b231 = "width" in props || "height" in props;
      var options = this;
      var _item = {};
      var style = el["style"];
      var hidden = el["nodeType"] && animate(el);
      var dataShow = target["get"](el, "fxshow");
      if (!data["queue"]) {
        n = $["_queueHooks"](el, "fx");
        if (null == n["unqueued"]) {
          /** @type {number} */
          n["unqueued"] = 0;
          gotoNewOfflinePage = n["empty"]["fire"];
          /**
           * @return {undefined}
           */
          n["empty"]["fire"] = function() {
            if (!n["unqueued"]) {
              gotoNewOfflinePage();
            }
          };
        }
        n["unqueued"]++;
        options["always"](function() {
          options["always"](function() {
            n["unqueued"]--;
            if (!$["queue"](el, "fx")["length"]) {
              n["empty"]["fire"]();
            }
          });
        });
      }
      for (prop in props) {
        if (value = props[prop], testScores["test"](value)) {
          if (delete props[prop], matched = matched || "toggle" === value, value === (hidden ? "hide" : "show")) {
            if ("show" !== value || !dataShow || void 0 === dataShow[prop]) {
              continue;
            }
            /** @type {boolean} */
            hidden = true;
          }
          _item[prop] = dataShow && dataShow[prop] || $["style"](el, prop);
        }
      }
      if (res = !$["isEmptyObject"](props), res || !$["isEmptyObject"](_item)) {
        for (prop in _0x84b231 && 1 === el["nodeType"] && (data["overflow"] = [style["overflow"], style["overflowX"], style["overflowY"]], val = dataShow && dataShow["display"], null == val && (val = target["get"](el, "display")), type = $["css"](el, "display"), "none" === type && (val ? type = val : (hide([el], true), val = el["style"]["display"] || val, type = $["css"](el, "display"), hide([el]))), ("inline" === type || "inline-block" === type && null != val) && "none" === $["css"](el, "float") && 
        (res || (options["done"](function() {
          style["display"] = val;
        }), null == val && (type = style["display"], val = "none" === type ? "" : type)), style["display"] = "inline-block")), data["overflow"] && (style["overflow"] = "hidden", options["always"](function() {
          style["overflow"] = data["overflow"][0];
          style["overflowX"] = data["overflow"][1];
          style["overflowY"] = data["overflow"][2];
        })), res = false, _item) {
          if (!res) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow["hidden"];
              }
            } else {
              dataShow = target["access"](el, "fxshow", {
                "display" : val
              });
            }
            if (matched) {
              /** @type {boolean} */
              dataShow["hidden"] = !hidden;
            }
            if (hidden) {
              hide([el], true);
            }
            options["done"](function() {
              if (!hidden) {
                hide([el]);
              }
              target["remove"](el, "fxshow");
              for (prop in _item) {
                $["style"](el, prop, _item[prop]);
              }
            });
          }
          res = process(hidden ? dataShow[prop] : 0, prop, options);
          if (!(prop in dataShow)) {
            dataShow[prop] = res["start"];
            if (hidden) {
              res["end"] = res["start"];
              /** @type {number} */
              res["start"] = 0;
            }
          }
        }
      }
    }],
    "prefilter" : function(callback, options) {
      if (options) {
        render["prefilters"]["unshift"](callback);
      } else {
        render["prefilters"]["push"](callback);
      }
    }
  });
  /**
   * @param {!Function} speed
   * @param {!Function} easing
   * @param {!Function} fn
   * @return {?}
   */
  $["speed"] = function(speed, easing, fn) {
    var o = speed && "object" == typeof speed ? $["extend"]({}, speed) : {
      "complete" : fn || !fn && easing || $["isFunction"](speed) && speed,
      "duration" : speed,
      "easing" : fn && easing || easing && !$["isFunction"](easing) && easing
    };
    return $["fx"]["off"] ? o["duration"] = 0 : "number" != typeof o["duration"] && (o["duration"] in $["fx"]["speeds"] ? o["duration"] = $["fx"]["speeds"][o["duration"]] : o["duration"] = $["fx"]["speeds"]["_default"]), null != o["queue"] && true !== o["queue"] || (o["queue"] = "fx"), o["old"] = o["complete"], o["complete"] = function() {
      if ($["isFunction"](o["old"])) {
        o["old"]["call"](this);
      }
      if (o["queue"]) {
        $["dequeue"](this, o["queue"]);
      }
    }, o;
  };
  $["fn"]["extend"]({
    "fadeTo" : function(speed, to, callback, easing) {
      return this["filter"](animate)["css"]("opacity", 0)["show"]()["end"]()["animate"]({
        "opacity" : to
      }, speed, callback, easing);
    },
    "animate" : function(o, callback, params, options) {
      var empty = $["isEmptyObject"](o);
      var data = $["speed"](callback, params, options);
      /**
       * @return {undefined}
       */
      callback = function() {
        var e = render(this, $["extend"]({}, o), data);
        if (empty || target["get"](this, "finish")) {
          e["stop"](true);
        }
      };
      return callback["finish"] = callback, empty || false === data["queue"] ? this["each"](callback) : this["queue"](data["queue"], callback);
    },
    "stop" : function(type, value, input) {
      /**
       * @param {!Object} data
       * @return {undefined}
       */
      var callback = function(data) {
        var info = data["stop"];
        delete data["stop"];
        info(input);
      };
      return "string" != typeof type && (input = value, value = type, type = void 0), value && false !== type && this["queue"](type || "fx", []), this["each"](function() {
        /** @type {boolean} */
        var output = true;
        /** @type {(boolean|string)} */
        var i = null != type && type + "queueHooks";
        var indexes = $["timers"];
        var imgtags = target["get"](this);
        if (i) {
          if (imgtags[i] && imgtags[i]["stop"]) {
            callback(imgtags[i]);
          }
        } else {
          for (i in imgtags) {
            if (imgtags[i] && imgtags[i]["stop"] && parts["test"](i)) {
              callback(imgtags[i]);
            }
          }
        }
        i = indexes["length"];
        for (; i--;) {
          if (!(indexes[i]["elem"] !== this || null != type && indexes[i]["queue"] !== type)) {
            indexes[i]["anim"]["stop"](input);
            /** @type {boolean} */
            output = false;
            indexes["splice"](i, 1);
          }
        }
        if (!(!output && input)) {
          $["dequeue"](this, type);
        }
      });
    },
    "finish" : function(type) {
      return false !== type && (type = type || "fx"), this["each"](function() {
        var key;
        var data = target["get"](this);
        var vals = data[type + "queue"];
        key = data[type + "queueHooks"];
        var indexes = $["timers"];
        var itl = vals ? vals["length"] : 0;
        /** @type {boolean} */
        data["finish"] = true;
        $["queue"](this, type, []);
        if (key && key["stop"]) {
          key["stop"]["call"](this, true);
        }
        key = indexes["length"];
        for (; key--;) {
          if (indexes[key]["elem"] === this && indexes[key]["queue"] === type) {
            indexes[key]["anim"]["stop"](true);
            indexes["splice"](key, 1);
          }
        }
        /** @type {number} */
        key = 0;
        for (; key < itl; key++) {
          if (vals[key] && vals[key]["finish"]) {
            vals[key]["finish"]["call"](this);
          }
        }
        delete data["finish"];
      });
    }
  });
  $["each"](["toggle", "show", "hide"], function(canCreateDiscussions, name) {
    var f = $["fn"][name];
    /**
     * @param {string} val
     * @param {?} callback
     * @param {?} chainf
     * @return {?}
     */
    $["fn"][name] = function(val, callback, chainf) {
      return null == val || "boolean" == typeof val ? f["apply"](this, arguments) : this["animate"](genFx(name, true), val, callback, chainf);
    };
  });
  $["each"]({
    "slideDown" : genFx("show"),
    "slideUp" : genFx("hide"),
    "slideToggle" : genFx("toggle"),
    "fadeIn" : {
      "opacity" : "show"
    },
    "fadeOut" : {
      "opacity" : "hide"
    },
    "fadeToggle" : {
      "opacity" : "toggle"
    }
  }, function(name, anim) {
    /**
     * @param {?} fadeTime
     * @param {?} callback
     * @param {?} chainf
     * @return {?}
     */
    $["fn"][name] = function(fadeTime, callback, chainf) {
      return this["animate"](anim, fadeTime, callback, chainf);
    };
  });
  /** @type {!Array} */
  $["timers"] = [];
  /**
   * @return {undefined}
   */
  $["fx"]["tick"] = function() {
    var smem;
    /** @type {number} */
    var lakid = 0;
    var SPRITE_MEMORY = $["timers"];
    fxNow = $["now"]();
    for (; lakid < SPRITE_MEMORY["length"]; lakid++) {
      smem = SPRITE_MEMORY[lakid];
      if (!(smem() || SPRITE_MEMORY[lakid] !== smem)) {
        SPRITE_MEMORY["splice"](lakid--, 1);
      }
    }
    if (!SPRITE_MEMORY["length"]) {
      $["fx"]["stop"]();
    }
    fxNow = void 0;
  };
  /**
   * @param {?} PL$60
   * @return {undefined}
   */
  $["fx"]["timer"] = function(PL$60) {
    $["timers"]["push"](PL$60);
    $["fx"]["start"]();
  };
  /** @type {number} */
  $["fx"]["interval"] = 13;
  /**
   * @return {undefined}
   */
  $["fx"]["start"] = function() {
    if (!_0x4aeb69) {
      /** @type {boolean} */
      _0x4aeb69 = true;
      factory();
    }
  };
  /**
   * @return {undefined}
   */
  $["fx"]["stop"] = function() {
    /** @type {null} */
    _0x4aeb69 = null;
  };
  $["fx"]["speeds"] = {
    "slow" : 600,
    "fast" : 200,
    "_default" : 400
  };
  /**
   * @param {?} selector
   * @param {!Object} type
   * @return {?}
   */
  $["fn"]["delay"] = function(selector, type) {
    return selector = $["fx"] ? $["fx"]["speeds"][selector] || selector : selector, type = type || "fx", this["queue"](type, function(markup, objs) {
      var result = window["setTimeout"](markup, selector);
      /**
       * @return {undefined}
       */
      objs["stop"] = function() {
        window["clearTimeout"](result);
      };
    });
  };
  var matches = document["createElement"]("input");
  var v = document["createElement"]("select")["appendChild"](document["createElement"]("option"));
  /** @type {string} */
  matches["type"] = "checkbox";
  /** @type {boolean} */
  value["checkOn"] = "" !== matches["value"];
  value["optSelected"] = v["selected"];
  matches = document["createElement"]("input");
  /** @type {string} */
  matches["value"] = "t";
  /** @type {string} */
  matches["type"] = "radio";
  /** @type {boolean} */
  value["radioValue"] = "t" === matches["value"];
  var boolHook;
  var attrs = $["expr"]["attrHandle"];
  $["fn"]["extend"]({
    "attr" : function(type, value) {
      return access(this, $["attr"], type, value, 1 < arguments["length"]);
    },
    "removeAttr" : function(name) {
      return this["each"](function() {
        $["removeAttr"](this, name);
      });
    }
  });
  $["extend"]({
    "attr" : function(node, value, i) {
      var index;
      var desc;
      var type = node["nodeType"];
      if (3 !== type && 8 !== type && 2 !== type) {
        return "undefined" == typeof node["getAttribute"] ? $["prop"](node, value, i) : (1 === type && $["isXMLDoc"](node) || (desc = $["attrHooks"][value["toLowerCase"]()] || ($["expr"]["match"]["bool"]["test"](value) ? boolHook : void 0)), void 0 !== i ? null === i ? void $["removeAttr"](node, value) : desc && "set" in desc && void 0 !== (index = desc["set"](node, i, value)) ? index : (node["setAttribute"](value, i + ""), i) : desc && "get" in desc && null !== (index = desc["get"](node, value)) ? 
        index : (index = $["find"]["attr"](node, value), null == index ? void 0 : index));
      }
    },
    "attrHooks" : {
      "type" : {
        "set" : function(el, v) {
          if (!value["radioValue"] && "radio" === v && callback(el, "input")) {
            var value = el["value"];
            return el["setAttribute"]("type", v), value && (el["value"] = value), v;
          }
        }
      }
    },
    "removeAttr" : function(element, data) {
      var selector;
      /** @type {number} */
      var pindex = 0;
      var parts = data && data["match"](arg);
      if (parts && 1 === element["nodeType"]) {
        for (; selector = parts[pindex++];) {
          element["removeAttribute"](selector);
        }
      }
    }
  });
  boolHook = {
    "set" : function(el, string, value) {
      return false === string ? $["removeAttr"](el, value) : el["setAttribute"](value, value), value;
    }
  };
  $["each"]($["expr"]["match"]["bool"]["source"]["match"](/\w+/g), function(canCreateDiscussions, attr) {
    var googleImageSize = attrs[attr] || $["find"]["attr"];
    /**
     * @param {?} input
     * @param {!Object} size
     * @param {?} deprecatedHeight
     * @return {?}
     */
    attrs[attr] = function(input, size, deprecatedHeight) {
      var name;
      var a;
      var i = size["toLowerCase"]();
      return deprecatedHeight || (a = attrs[i], attrs[i] = name, name = null != googleImageSize(input, size, deprecatedHeight) ? i : null, attrs[i] = a), name;
    };
  });
  /** @type {!RegExp} */
  var contextToSend = /^(?:input|select|textarea|button)$/i;
  /** @type {!RegExp} */
  var reAllowedParents = /^(?:a|area)$/i;
  $["fn"]["extend"]({
    "prop" : function(type, value) {
      return access(this, $["prop"], type, value, 1 < arguments["length"]);
    },
    "removeProp" : function(name) {
      return this["each"](function() {
        delete this[$["propFix"][name] || name];
      });
    }
  });
  $["extend"]({
    "prop" : function(node, name, value) {
      var list;
      var desc;
      var type = node["nodeType"];
      if (3 !== type && 8 !== type && 2 !== type) {
        return 1 === type && $["isXMLDoc"](node) || (name = $["propFix"][name] || name, desc = $["propHooks"][name]), void 0 !== value ? desc && "set" in desc && void 0 !== (list = desc["set"](node, value, name)) ? list : node[name] = value : desc && "get" in desc && null !== (list = desc["get"](node, name)) ? list : node[name];
      }
    },
    "propHooks" : {
      "tabIndex" : {
        "get" : function(element) {
          var idx = $["find"]["attr"](element, "tabindex");
          return idx ? parseInt(idx, 10) : contextToSend["test"](element["nodeName"]) || reAllowedParents["test"](element["nodeName"]) && element["href"] ? 0 : -1;
        }
      }
    },
    "propFix" : {
      "for" : "htmlFor",
      "class" : "className"
    }
  });
  if (!value["optSelected"]) {
    $["propHooks"]["selected"] = {
      "get" : function(el) {
        el = el["parentNode"];
        return el && el["parentNode"] && el["parentNode"]["selectedIndex"], null;
      },
      "set" : function(element) {
        element = element["parentNode"];
        if (element) {
          element["selectedIndex"];
          if (element["parentNode"]) {
            element["parentNode"]["selectedIndex"];
          }
        }
      }
    };
  }
  $["each"]("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable"["split"](" "), function() {
    $["propFix"][this["toLowerCase"]()] = this;
  });
  $["fn"]["extend"]({
    "addClass" : function(data) {
      var zeroSizeMaxes;
      var node;
      var value;
      var str;
      var zeroSizeMax;
      var callbackCount;
      /** @type {number} */
      var _0x4c1451 = 0;
      if ($["isFunction"](data)) {
        return this["each"](function(value2) {
          $(this)["addClass"](data["call"](this, value2, trim(this)));
        });
      }
      if ("string" == typeof data && data) {
        zeroSizeMaxes = data["match"](arg) || [];
        for (; node = this[_0x4c1451++];) {
          if (str = trim(node), value = 1 === node["nodeType"] && " " + resolve(str) + " ") {
            /** @type {number} */
            callbackCount = 0;
            for (; zeroSizeMax = zeroSizeMaxes[callbackCount++];) {
              if (0 > value["indexOf"](" " + zeroSizeMax + " ")) {
                /** @type {string} */
                value = value + (zeroSizeMax + " ");
              }
            }
            value = resolve(value);
            if (str !== value) {
              node["setAttribute"]("class", value);
            }
          }
        }
      }
      return this;
    },
    "removeClass" : function(data) {
      var zeroSizeMaxes;
      var node;
      var value;
      var str;
      var zeroSizeMax;
      var callbackCount;
      /** @type {number} */
      var _0x38ac86 = 0;
      if ($["isFunction"](data)) {
        return this["each"](function(value2) {
          $(this)["removeClass"](data["call"](this, value2, trim(this)));
        });
      }
      if (!arguments["length"]) {
        return this["attr"]("class", "");
      }
      if ("string" == typeof data && data) {
        zeroSizeMaxes = data["match"](arg) || [];
        for (; node = this[_0x38ac86++];) {
          if (str = trim(node), value = 1 === node["nodeType"] && " " + resolve(str) + " ") {
            /** @type {number} */
            callbackCount = 0;
            for (; zeroSizeMax = zeroSizeMaxes[callbackCount++];) {
              for (; -1 < value["indexOf"](" " + zeroSizeMax + " ");) {
                value = value["replace"](" " + zeroSizeMax + " ", " ");
              }
            }
            value = resolve(value);
            if (str !== value) {
              node["setAttribute"]("class", value);
            }
          }
        }
      }
      return this;
    },
    "toggleClass" : function(args, name) {
      /** @type {string} */
      var undefined = typeof args;
      return "boolean" == typeof name && "string" === undefined ? name ? this["addClass"](args) : this["removeClass"](args) : $["isFunction"](args) ? this["each"](function(reply) {
        $(this)["toggleClass"](args["call"](this, reply, trim(this), name), name);
      }) : this["each"](function() {
        var className;
        var callbackCount;
        var $node;
        var callbackVals;
        if ("string" === undefined) {
          /** @type {number} */
          callbackCount = 0;
          $node = $(this);
          callbackVals = args["match"](arg) || [];
          for (; className = callbackVals[callbackCount++];) {
            if ($node["hasClass"](className)) {
              $node["removeClass"](className);
            } else {
              $node["addClass"](className);
            }
          }
        } else {
          if (!(void 0 !== args && "boolean" !== undefined)) {
            className = trim(this);
            if (className) {
              target["set"](this, "__className__", className);
            }
            if (this["setAttribute"]) {
              this["setAttribute"]("class", className || false === args ? "" : target["get"](this, "__className__") || "");
            }
          }
        }
      });
    },
    "hasClass" : function(s) {
      var result;
      /** @type {number} */
      var _0xc748d2 = 0;
      /** @type {string} */
      s = " " + s + " ";
      for (; result = this[_0xc748d2++];) {
        if (1 === result["nodeType"] && -1 < (" " + resolve(trim(result)) + " ")["indexOf"](s)) {
          return true;
        }
      }
      return false;
    }
  });
  /** @type {!RegExp} */
  var b = /\r/g;
  $["fn"]["extend"]({
    "val" : function(value) {
      var desc;
      var a;
      var src;
      var result = this[0];
      if (arguments["length"]) {
        return src = $["isFunction"](value), this["each"](function($2) {
          var key;
          if (1 === this["nodeType"]) {
            key = src ? value["call"](this, $2, $(this)["val"]()) : value;
            if (null == key) {
              /** @type {string} */
              key = "";
            } else {
              if ("number" == typeof key) {
                /** @type {string} */
                key = key + "";
              } else {
                if (Array["isArray"](key)) {
                  key = $["map"](key, function(value) {
                    return null == value ? "" : value + "";
                  });
                }
              }
            }
            desc = $["valHooks"][this["type"]] || $["valHooks"][this["nodeName"]["toLowerCase"]()];
            if (!(desc && "set" in desc && void 0 !== desc["set"](this, key, "value"))) {
              this["value"] = key;
            }
          }
        });
      }
      if (result) {
        return desc = $["valHooks"][result["type"]] || $["valHooks"][result["nodeName"]["toLowerCase"]()], desc && "get" in desc && void 0 !== (a = desc["get"](result, "value")) ? a : (a = result["value"], "string" == typeof a ? a["replace"](b, "") : null == a ? "" : a);
      }
    }
  });
  $["extend"]({
    "valHooks" : {
      "option" : {
        "get" : function(value) {
          var decodedValue = $["find"]["attr"](value, "value");
          return null != decodedValue ? decodedValue : resolve($["text"](value));
        }
      },
      "select" : {
        "get" : function(data) {
          var item;
          var i;
          var options = data["options"];
          var position = data["selectedIndex"];
          /** @type {boolean} */
          var after = "select-one" === data["type"];
          /** @type {(Array|null)} */
          var value = after ? null : [];
          var index = after ? position + 1 : options["length"];
          i = 0 > position ? index : after ? position : 0;
          for (; i < index; i++) {
            if (item = options[i], (item["selected"] || i === position) && !item["disabled"] && (!item["parentNode"]["disabled"] || !callback(item["parentNode"], "optgroup"))) {
              if (data = $(item)["val"](), after) {
                return data;
              }
              value["push"](data);
            }
          }
          return value;
        },
        "set" : function(data, key) {
          var outputFn;
          var options;
          var value = data["options"];
          var result = $["makeArray"](key);
          var i = value["length"];
          for (; i--;) {
            options = value[i];
            if (options["selected"] = -1 < $["inArray"]($["valHooks"]["option"]["get"](options), result)) {
              /** @type {boolean} */
              outputFn = true;
            }
          }
          return outputFn || (data["selectedIndex"] = -1), result;
        }
      }
    }
  });
  $["each"](["radio", "checkbox"], function() {
    $["valHooks"][this] = {
      "set" : function(val, data) {
        if (Array["isArray"](data)) {
          return val["checked"] = -1 < $["inArray"]($(val)["val"](), data);
        }
      }
    };
    if (!value["checkOn"]) {
      /**
       * @param {!Object} allBindings
       * @return {?}
       */
      $["valHooks"][this]["get"] = function(allBindings) {
        return null === allBindings["getAttribute"]("value") ? "on" : allBindings["value"];
      };
    }
  });
  /** @type {!RegExp} */
  var me = /^(?:focusinfocus|focusoutblur)$/;
  $["extend"]($["event"], {
    "trigger" : function(data, key, element, x) {
      var table;
      var value;
      var doc;
      var max;
      var id;
      var wrappers;
      var node;
      /** @type {!Array} */
      var self = [element || document];
      var type = PL$2["call"](data, "type") ? data["type"] : data;
      table = PL$2["call"](data, "namespace") ? data["namespace"]["split"](".") : [];
      if (value = doc = element = element || document, 3 !== element["nodeType"] && 8 !== element["nodeType"] && !me["test"](type + $["event"]["triggered"]) && (-1 < type["indexOf"](".") && (table = type["split"]("."), type = table["shift"](), table["sort"]()), id = 0 > type["indexOf"](":") && "on" + type, data = data[$["expando"]] ? data : new $["Event"](type, "object" == typeof data && data), data["isTrigger"] = x ? 2 : 3, data["namespace"] = table["join"]("."), data["rnamespace"] = data["namespace"] ? 
      RegExp("(^|\\.)" + table["join"]("\\.(?:.*\\.|)") + "(\\.|$)") : null, data["result"] = void 0, data["target"] || (data["target"] = element), key = null == key ? [data] : $["makeArray"](key, [data]), node = $["event"]["special"][type] || {}, x || !node["trigger"] || false !== node["trigger"]["apply"](element, key))) {
        if (!x && !node["noBubble"] && !$["isWindow"](element)) {
          max = node["delegateType"] || type;
          if (!me["test"](max + type)) {
            value = value["parentNode"];
          }
          for (; value; value = value["parentNode"]) {
            self["push"](value);
            doc = value;
          }
          if (doc === (element["ownerDocument"] || document)) {
            self["push"](doc["defaultView"] || doc["parentWindow"] || window);
          }
        }
        /** @type {number} */
        table = 0;
        for (; (value = self[table++]) && !data["isPropagationStopped"]();) {
          data["type"] = 1 < table ? max : node["bindType"] || type;
          if (wrappers = (target["get"](value, "events") || {})[data["type"]] && target["get"](value, "handle")) {
            wrappers["apply"](value, key);
          }
          if ((wrappers = id && value[id]) && wrappers["apply"] && match(value)) {
            data["result"] = wrappers["apply"](value, key);
            if (false === data["result"]) {
              data["preventDefault"]();
            }
          }
        }
        return data["type"] = type, x || data["isDefaultPrevented"]() || node["_default"] && false !== node["_default"]["apply"](self["pop"](), key) || !match(element) || id && $["isFunction"](element[type]) && !$["isWindow"](element) && (doc = element[id], doc && (element[id] = null), $["event"]["triggered"] = type, element[type](), $["event"]["triggered"] = void 0, doc && (element[id] = doc)), data["result"];
      }
    },
    "simulate" : function(name, event, options) {
      name = $["extend"](new $["Event"], options, {
        "type" : name,
        "isSimulated" : true
      });
      $["event"]["trigger"](name, null, event);
    }
  });
  $["fn"]["extend"]({
    "trigger" : function(data, eventData) {
      return this["each"](function() {
        $["event"]["trigger"](data, eventData, this);
      });
    },
    "triggerHandler" : function(data, reason) {
      var artistTrack = this[0];
      if (artistTrack) {
        return $["event"]["trigger"](data, reason, artistTrack, true);
      }
    }
  });
  $["each"]("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu"["split"](" "), function(canCreateDiscussions, name) {
    /**
     * @param {?} selector
     * @param {?} mmCoreSplitViewBlock
     * @return {?}
     */
    $["fn"][name] = function(selector, mmCoreSplitViewBlock) {
      return 0 < arguments["length"] ? this["on"](name, null, selector, mmCoreSplitViewBlock) : this["trigger"](name);
    };
  });
  $["fn"]["extend"]({
    "hover" : function(name, id) {
      return this["mouseenter"](name)["mouseleave"](id || name);
    }
  });
  /** @type {boolean} */
  value["focusin"] = "onfocusin" in window;
  if (!value["focusin"]) {
    $["each"]({
      "focus" : "focusin",
      "blur" : "focusout"
    }, function(scroll, fix) {
      /**
       * @param {!Object} e
       * @return {undefined}
       */
      var handler = function(e) {
        $["event"]["simulate"](fix, e["target"], $["event"]["fix"](e));
      };
      $["event"]["special"][fix] = {
        "setup" : function() {
          var docElem = this["ownerDocument"] || this;
          var attaches = target["access"](docElem, fix);
          if (!attaches) {
            docElem["addEventListener"](scroll, handler, true);
          }
          target["access"](docElem, fix, (attaches || 0) + 1);
        },
        "teardown" : function() {
          var data = this["ownerDocument"] || this;
          /** @type {number} */
          var conditionalAssignment = target["access"](data, fix) - 1;
          if (conditionalAssignment) {
            target["access"](data, fix, conditionalAssignment);
          } else {
            data["removeEventListener"](scroll, handler, true);
            target["remove"](data, fix);
          }
        }
      };
    });
  }
  var result = window["location"];
  var widgetUniqueIDIndex = $["now"]();
  /** @type {!RegExp} */
  var args = /\?/;
  /**
   * @param {string} html
   * @return {?}
   */
  $["parseXML"] = function(html) {
    var doc;
    if (!html || "string" != typeof html) {
      return null;
    }
    try {
      doc = (new window["DOMParser"])["parseFromString"](html, "text/xml");
    } catch (_0x483e50) {
      doc = void 0;
    }
    return doc && !doc["getElementsByTagName"]("parsererror")["length"] || $["error"]("Invalid XML: " + html), doc;
  };
  /** @type {!RegExp} */
  var settingHandler = /\[\]$/;
  /** @type {!RegExp} */
  var s = /\r?\n/g;
  /** @type {!RegExp} */
  var state_handlers = /^(?:submit|button|image|reset|file)$/i;
  /** @type {!RegExp} */
  var FILTER_MATCH_RE = /^(?:input|select|textarea|keygen)/i;
  /**
   * @param {!Object} data
   * @param {string} callback
   * @return {?}
   */
  $["param"] = function(data, callback) {
    var i;
    /** @type {!Array} */
    var value = [];
    /**
     * @param {?} board
     * @param {?} data
     * @return {undefined}
     */
    var done = function(board, data) {
      var a = $["isFunction"](data) ? data() : data;
      /** @type {string} */
      value[value["length"]] = encodeURIComponent(board) + "=" + encodeURIComponent(null == a ? "" : a);
    };
    if (Array["isArray"](data) || data["jquery"] && !$["isPlainObject"](data)) {
      $["each"](data, function() {
        done(this["name"], this["value"]);
      });
    } else {
      for (i in data) {
        build(i, data[i], callback, done);
      }
    }
    return value["join"]("&");
  };
  $["fn"]["extend"]({
    "serialize" : function() {
      return $["param"](this["serializeArray"]());
    },
    "serializeArray" : function() {
      return this["map"](function() {
        var ret = $["prop"](this, "elements");
        return ret ? $["makeArray"](ret) : this;
      })["filter"](function() {
        var token = this["type"];
        return this["name"] && !$(this)["is"](":disabled") && FILTER_MATCH_RE["test"](this["nodeName"]) && !state_handlers["test"](token) && (this["checked"] || !h["test"](token));
      })["map"](function(canCreateDiscussions, oneList) {
        var data = $(this)["val"]();
        return null == data ? null : Array["isArray"](data) ? $["map"](data, function(data) {
          return {
            "name" : oneList["name"],
            "value" : data["replace"](s, "\r\n")
          };
        }) : {
          "name" : oneList["name"],
          "value" : data["replace"](s, "\r\n")
        };
      })["get"]();
    }
  });
  /** @type {!RegExp} */
  var split = /%20/g;
  /** @type {!RegExp} */
  var passMessages = /#.*$/;
  /** @type {!RegExp} */
  var row = /([?&])_=[^&]*/;
  /** @type {!RegExp} */
  var regex = /^(.*?):[ \t]*([^\r\n]*)$/gm;
  /** @type {!RegExp} */
  var req = /^(?:GET|HEAD)$/;
  /** @type {!RegExp} */
  var file = /^\/\//;
  var prefilters = {};
  var transports = {};
  var _0x24df1c = "*/"["concat"]("*");
  var obj = document["createElement"]("a");
  obj["href"] = result["href"];
  $["extend"]({
    "active" : 0,
    "lastModified" : {},
    "etag" : {},
    "ajaxSettings" : {
      "url" : result["href"],
      "type" : "GET",
      "isLocal" : /^(?:about|app|app-storage|.+-extension|file|res|widget):$/["test"](result["protocol"]),
      "global" : true,
      "processData" : true,
      "async" : true,
      "contentType" : "application/x-www-form-urlencoded; charset=UTF-8",
      "accepts" : {
        "*" : _0x24df1c,
        "text" : "text/plain",
        "html" : "text/html",
        "xml" : "application/xml, text/xml",
        "json" : "application/json, text/javascript"
      },
      "contents" : {
        "xml" : /\bxml\b/,
        "html" : /\bhtml/,
        "json" : /\bjson\b/
      },
      "responseFields" : {
        "xml" : "responseXML",
        "text" : "responseText",
        "json" : "responseJSON"
      },
      "converters" : {
        "* text" : String,
        "text html" : true,
        "text json" : JSON["parse"],
        "text xml" : $["parseXML"]
      },
      "flatOptions" : {
        "url" : true,
        "context" : true
      }
    },
    "ajaxSetup" : function(target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, $["ajaxSettings"]), settings) : ajaxExtend($["ajaxSettings"], target);
    },
    "ajaxPrefilter" : addToPrefiltersOrTransports(prefilters),
    "ajaxTransport" : addToPrefiltersOrTransports(transports),
    "ajax" : function(name, params) {
      /**
       * @param {number} i
       * @param {string} name
       * @param {!Object} data
       * @param {string} success
       * @return {undefined}
       */
      function done(i, name, data, success) {
        var data;
        var error;
        var obj;
        var modified;
        /** @type {string} */
        var statusText = name;
        if (!useBundledSDK) {
          /** @type {boolean} */
          useBundledSDK = true;
          if (processEvaluatorsCallback) {
            window["clearTimeout"](processEvaluatorsCallback);
          }
          ret = void 0;
          url = success || "";
          /** @type {number} */
          jqXHR["readyState"] = 0 < i ? 4 : 0;
          /** @type {boolean} */
          success = 200 <= i && 300 > i || 304 === i;
          if (data) {
            obj = options;
            var xhr = jqXHR;
            var value;
            var x;
            var id;
            var i;
            var config = obj["contents"];
            var m = obj["dataTypes"];
            for (; "*" === m[0];) {
              m["shift"]();
              if (void 0 === value) {
                value = obj["mimeType"] || xhr["getResponseHeader"]("Content-Type");
              }
            }
            if (value) {
              for (x in config) {
                if (config[x] && config[x]["test"](value)) {
                  m["unshift"](x);
                  break;
                }
              }
            }
            if (m[0] in data) {
              id = m[0];
            } else {
              for (x in data) {
                if (!m[0] || obj["converters"][x + " " + m[0]]) {
                  /** @type {string} */
                  id = x;
                  break;
                }
                if (!i) {
                  /** @type {string} */
                  i = x;
                }
              }
              /** @type {(string|undefined)} */
              id = id || i;
            }
            obj = data = id ? (id !== m[0] && m["unshift"](id), data[id]) : void 0;
          }
          var result;
          _0x36b10d: {
            data = options;
            value = obj;
            x = jqXHR;
            /** @type {string} */
            id = success;
            var key;
            var args;
            var s;
            obj = {};
            xhr = data["dataTypes"]["slice"]();
            if (xhr[1]) {
              for (key in data["converters"]) {
                obj[key["toLowerCase"]()] = data["converters"][key];
              }
            }
            i = xhr["shift"]();
            for (; i;) {
              if (data["responseFields"][i] && (x[data["responseFields"][i]] = value), !s && id && data["dataFilter"] && (value = data["dataFilter"](value, data["dataType"])), s = i, i = xhr["shift"]()) {
                if ("*" === i) {
                  i = s;
                } else {
                  if ("*" !== s && s !== i) {
                    if (key = obj[s + " " + i] || obj["* " + i], !key) {
                      for (result in obj) {
                        if (args = result["split"](" "), args[1] === i && (key = obj[s + " " + args[0]] || obj["* " + args[0]])) {
                          if (true === key) {
                            key = obj[result];
                          } else {
                            if (true !== obj[result]) {
                              i = args[0];
                              xhr["unshift"](args[1]);
                            }
                          }
                          break;
                        }
                      }
                    }
                    if (true !== key) {
                      if (key && data["throws"]) {
                        value = key(value);
                      } else {
                        try {
                          value = key(value);
                        } catch ($null) {
                          result = {
                            "state" : "parsererror",
                            "error" : key ? $null : "No conversion from " + s + " to " + i
                          };
                          break _0x36b10d;
                        }
                      }
                    }
                  }
                }
              }
            }
            result = {
              "state" : "success",
              "data" : value
            };
          }
          /** @type {({data: (?|undefined), state: string}|{error: ?, state: string})} */
          obj = result;
          if (success) {
            if (options["ifModified"]) {
              modified = jqXHR["getResponseHeader"]("Last-Modified");
              if (modified) {
                $["lastModified"][value] = modified;
              }
              modified = jqXHR["getResponseHeader"]("etag");
              if (modified) {
                $["etag"][value] = modified;
              }
            }
            if (204 === i || "HEAD" === options["type"]) {
              /** @type {string} */
              statusText = "nocontent";
            } else {
              if (304 === i) {
                /** @type {string} */
                statusText = "notmodified";
              } else {
                statusText = obj["state"];
                data = obj["data"];
                error = obj["error"];
                /** @type {boolean} */
                success = !error;
              }
            }
          } else {
            error = statusText;
            if (!(!i && statusText)) {
              /** @type {string} */
              statusText = "error";
              if (0 > i) {
                /** @type {number} */
                i = 0;
              }
            }
          }
          /** @type {number} */
          jqXHR["status"] = i;
          /** @type {string} */
          jqXHR["statusText"] = (name || statusText) + "";
          if (success) {
            self["resolveWith"](el, [data, statusText, jqXHR]);
          } else {
            self["rejectWith"](el, [jqXHR, statusText, error]);
          }
          jqXHR["statusCode"](parsedResponse);
          parsedResponse = void 0;
          if (_0x118eec) {
            $Locations["trigger"](success ? "ajaxSuccess" : "ajaxError", [jqXHR, options, success ? data : error]);
          }
          that["fireWith"](el, [jqXHR, statusText]);
          if (_0x118eec) {
            $Locations["trigger"]("ajaxComplete", [jqXHR, options]);
            if (!--$["active"]) {
              $["event"]["trigger"]("ajaxStop");
            }
          }
        }
      }
      if ("object" == typeof name) {
        /** @type {!Object} */
        params = name;
        name = void 0;
      }
      params = params || {};
      var ret;
      var value;
      var url;
      var namespacedAttrs;
      var processEvaluatorsCallback;
      var data;
      var useBundledSDK;
      var _0x118eec;
      var key;
      var val;
      var options = $["ajaxSetup"]({}, params);
      var el = options["context"] || options;
      var $Locations = options["context"] && (el["nodeType"] || el["jquery"]) ? $(el) : $["event"];
      var self = $["Deferred"]();
      var that = $["Callbacks"]("once memory");
      var parsedResponse = options["statusCode"] || {};
      var args = {};
      var requestHeadersNames = {};
      /** @type {string} */
      var strAbort = "canceled";
      var jqXHR = {
        "readyState" : 0,
        "getResponseHeader" : function(name) {
          var attributes;
          if (useBundledSDK) {
            if (!namespacedAttrs) {
              namespacedAttrs = {};
              for (; attributes = regex["exec"](url);) {
                namespacedAttrs[attributes[1]["toLowerCase"]()] = attributes[2];
              }
            }
            attributes = namespacedAttrs[name["toLowerCase"]()];
          }
          return null == attributes ? null : attributes;
        },
        "getAllResponseHeaders" : function() {
          return useBundledSDK ? url : null;
        },
        "setRequestHeader" : function(name, value) {
          return null == useBundledSDK && (name = requestHeadersNames[name["toLowerCase"]()] = requestHeadersNames[name["toLowerCase"]()] || name, args[name] = value), this;
        },
        "overrideMimeType" : function(type) {
          return null == useBundledSDK && (options["mimeType"] = type), this;
        },
        "statusCode" : function(classes) {
          var i;
          if (classes) {
            if (useBundledSDK) {
              jqXHR["always"](classes[jqXHR["status"]]);
            } else {
              for (i in classes) {
                /** @type {!Array} */
                parsedResponse[i] = [parsedResponse[i], classes[i]];
              }
            }
          }
          return this;
        },
        "abort" : function(statusText) {
          statusText = statusText || strAbort;
          return ret && ret["abort"](statusText), done(0, statusText), this;
        }
      };
      if (self["promise"](jqXHR), options["url"] = ((name || options["url"] || result["href"]) + "")["replace"](file, result["protocol"] + "//"), options["type"] = params["method"] || params["type"] || options["method"] || options["type"], options["dataTypes"] = (options["dataType"] || "*")["toLowerCase"]()["match"](arg) || [""], null == options["crossDomain"]) {
        data = document["createElement"]("a");
        try {
          data["href"] = options["url"];
          data["href"] = data["href"];
          /** @type {boolean} */
          options["crossDomain"] = obj["protocol"] + "//" + obj["host"] != data["protocol"] + "//" + data["host"];
        } catch (_0x24e40f) {
          /** @type {boolean} */
          options["crossDomain"] = true;
        }
      }
      if (options["data"] && options["processData"] && "string" != typeof options["data"] && (options["data"] = $["param"](options["data"], options["traditional"])), cb(prefilters, options, params, jqXHR), useBundledSDK) {
        return jqXHR;
      }
      if ((_0x118eec = $["event"] && options["global"]) && 0 === $["active"]++) {
        $["event"]["trigger"]("ajaxStart");
      }
      options["type"] = options["type"]["toUpperCase"]();
      /** @type {boolean} */
      options["hasContent"] = !req["test"](options["type"]);
      value = options["url"]["replace"](passMessages, "");
      if (options["hasContent"]) {
        if (options["data"] && options["processData"] && 0 === (options["contentType"] || "")["indexOf"]("application/x-www-form-urlencoded")) {
          options["data"] = options["data"]["replace"](split, "+");
        }
      } else {
        val = options["url"]["slice"](value["length"]);
        if (options["data"]) {
          value = value + ((args["test"](value) ? "&" : "?") + options["data"]);
          delete options["data"];
        }
        if (false === options["cache"]) {
          value = value["replace"](row, "$1");
          /** @type {string} */
          val = (args["test"](value) ? "&" : "?") + "_=" + widgetUniqueIDIndex++ + val;
        }
        options["url"] = value + val;
      }
      if (options["ifModified"]) {
        if ($["lastModified"][value]) {
          jqXHR["setRequestHeader"]("If-Modified-Since", $["lastModified"][value]);
        }
        if ($["etag"][value]) {
          jqXHR["setRequestHeader"]("If-None-Match", $["etag"][value]);
        }
      }
      if (options["data"] && options["hasContent"] && false !== options["contentType"] || params["contentType"]) {
        jqXHR["setRequestHeader"]("Content-Type", options["contentType"]);
      }
      jqXHR["setRequestHeader"]("Accept", options["dataTypes"][0] && options["accepts"][options["dataTypes"][0]] ? options["accepts"][options["dataTypes"][0]] + ("*" !== options["dataTypes"][0] ? ", " + _0x24df1c + "; q=0.01" : "") : options["accepts"]["*"]);
      for (key in options["headers"]) {
        jqXHR["setRequestHeader"](key, options["headers"][key]);
      }
      if (options["beforeSend"] && (false === options["beforeSend"]["call"](el, jqXHR, options) || useBundledSDK)) {
        return jqXHR["abort"]();
      }
      if (strAbort = "abort", that["add"](options["complete"]), jqXHR["done"](options["success"]), jqXHR["fail"](options["error"]), ret = cb(transports, options, params, jqXHR)) {
        if (jqXHR["readyState"] = 1, _0x118eec && $Locations["trigger"]("ajaxSend", [jqXHR, options]), useBundledSDK) {
          return jqXHR;
        }
        if (options["async"] && 0 < options["timeout"]) {
          processEvaluatorsCallback = window["setTimeout"](function() {
            jqXHR["abort"]("timeout");
          }, options["timeout"]);
        }
        try {
          /** @type {boolean} */
          useBundledSDK = false;
          ret["send"](args, done);
        } catch (lookups) {
          if (useBundledSDK) {
            throw lookups;
          }
          done(-1, lookups);
        }
      } else {
        done(-1, "No Transport");
      }
      return jqXHR;
    },
    "getJSON" : function(url, data, success) {
      return $["get"](url, data, success, "json");
    },
    "getScript" : function(url, success) {
      return $["get"](url, void 0, success, "script");
    }
  });
  $["each"](["get", "post"], function(canCreateDiscussions, style) {
    /**
     * @param {number} url
     * @param {!Object} data
     * @param {!Object} posts
     * @param {!Object} type
     * @return {?}
     */
    $[style] = function(url, data, posts, type) {
      return $["isFunction"](data) && (type = type || posts, posts = data, data = void 0), $["ajax"]($["extend"]({
        "url" : url,
        "type" : style,
        "dataType" : type,
        "data" : data,
        "success" : posts
      }, $["isPlainObject"](url) && url));
    };
  });
  /**
   * @param {number} logErrorUrl
   * @return {?}
   */
  $["_evalUrl"] = function(logErrorUrl) {
    return $["ajax"]({
      "url" : logErrorUrl,
      "type" : "GET",
      "dataType" : "script",
      "cache" : true,
      "async" : false,
      "global" : false,
      "throws" : true
    });
  };
  $["fn"]["extend"]({
    "wrapAll" : function(value) {
      var gSobject;
      return this[0] && ($["isFunction"](value) && (value = value["call"](this[0])), gSobject = $(value, this[0]["ownerDocument"])["eq"](0)["clone"](true), this[0]["parentNode"] && gSobject["insertBefore"](this[0]), gSobject["map"](function() {
        var elem = this;
        for (; elem["firstElementChild"];) {
          elem = elem["firstElementChild"];
        }
        return elem;
      })["append"](this)), this;
    },
    "wrapInner" : function(data) {
      return $["isFunction"](data) ? this["each"](function(value2) {
        $(this)["wrapInner"](data["call"](this, value2));
      }) : this["each"](function() {
        var target = $(this);
        var cache = target["contents"]();
        if (cache["length"]) {
          cache["wrapAll"](data);
        } else {
          target["append"](data);
        }
      });
    },
    "wrap" : function(data) {
      var buf = $["isFunction"](data);
      return this["each"](function(value2) {
        $(this)["wrapAll"](buf ? data["call"](this, value2) : data);
      });
    },
    "unwrap" : function(fn) {
      return this["parent"](fn)["not"]("body")["each"](function() {
        $(this)["replaceWith"](this["childNodes"]);
      }), this;
    }
  });
  /**
   * @param {?} mmCoreSplitViewBlock
   * @return {?}
   */
  $["expr"]["pseudos"]["hidden"] = function(mmCoreSplitViewBlock) {
    return !$["expr"]["pseudos"]["visible"](mmCoreSplitViewBlock);
  };
  /**
   * @param {!Object} table
   * @return {?}
   */
  $["expr"]["pseudos"]["visible"] = function(table) {
    return !(!table["offsetWidth"] && !table["offsetHeight"] && !table["getClientRects"]()["length"]);
  };
  /**
   * @return {?}
   */
  $["ajaxSettings"]["xhr"] = function() {
    try {
      return new window["XMLHttpRequest"];
    } catch (_0x1e4868) {
    }
  };
  var classes = {
    0 : 200,
    1223 : 204
  };
  var xmlHttp = $["ajaxSettings"]["xhr"]();
  /** @type {boolean} */
  value["cors"] = !!xmlHttp && "withCredentials" in xmlHttp;
  /** @type {boolean} */
  value["ajax"] = xmlHttp = !!xmlHttp;
  $["ajaxTransport"](function(options) {
    var callback;
    var wrappedCallback;
    if (value["cors"] || xmlHttp && !options["crossDomain"]) {
      return {
        "send" : function(headers, fn) {
          var i;
          var xhr = options["xhr"]();
          if (xhr["open"](options["type"], options["url"], options["async"], options["username"], options["password"]), options["xhrFields"]) {
            for (i in options["xhrFields"]) {
              xhr[i] = options["xhrFields"][i];
            }
          }
          if (options["mimeType"] && xhr["overrideMimeType"]) {
            xhr["overrideMimeType"](options["mimeType"]);
          }
          if (!(options["crossDomain"] || headers["X-Requested-With"])) {
            /** @type {string} */
            headers["X-Requested-With"] = "XMLHttpRequest";
          }
          for (i in headers) {
            xhr["setRequestHeader"](i, headers[i]);
          }
          /**
           * @param {string} event
           * @return {?}
           */
          callback = function(event) {
            return function() {
              if (callback) {
                /** @type {null} */
                callback = wrappedCallback = xhr["onload"] = xhr["onerror"] = xhr["onabort"] = xhr["onreadystatechange"] = null;
                if ("abort" === event) {
                  xhr["abort"]();
                } else {
                  if ("error" === event) {
                    if ("number" != typeof xhr["status"]) {
                      fn(0, "error");
                    } else {
                      fn(xhr["status"], xhr["statusText"]);
                    }
                  } else {
                    fn(classes[xhr["status"]] || xhr["status"], xhr["statusText"], "text" !== (xhr["responseType"] || "text") || "string" != typeof xhr["responseText"] ? {
                      "binary" : xhr["response"]
                    } : {
                      "text" : xhr["responseText"]
                    }, xhr["getAllResponseHeaders"]());
                  }
                }
              }
            };
          };
          xhr["onload"] = callback();
          wrappedCallback = xhr["onerror"] = callback("error");
          if (void 0 !== xhr["onabort"]) {
            xhr["onabort"] = wrappedCallback;
          } else {
            /**
             * @return {undefined}
             */
            xhr["onreadystatechange"] = function() {
              if (4 === xhr["readyState"]) {
                window["setTimeout"](function() {
                  if (callback) {
                    wrappedCallback();
                  }
                });
              }
            };
          }
          callback = callback("abort");
          try {
            xhr["send"](options["hasContent"] && options["data"] || null);
          } catch (_0xdff180) {
            if (callback) {
              throw _0xdff180;
            }
          }
        },
        "abort" : function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  $["ajaxPrefilter"](function(index) {
    if (index["crossDomain"]) {
      /** @type {boolean} */
      index["contents"]["script"] = false;
    }
  });
  $["ajaxSetup"]({
    "accepts" : {
      "script" : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    "contents" : {
      "script" : /\b(?:java|ecma)script\b/
    },
    "converters" : {
      "text script" : function(value) {
        return $["globalEval"](value), value;
      }
    }
  });
  $["ajaxPrefilter"]("script", function(options) {
    if (void 0 === options["cache"]) {
      /** @type {boolean} */
      options["cache"] = false;
    }
    if (options["crossDomain"]) {
      /** @type {string} */
      options["type"] = "GET";
    }
  });
  $["ajaxTransport"]("script", function(args) {
    if (args["crossDomain"]) {
      var data;
      var cleanup;
      return {
        "send" : function(timeoutMillis, callback) {
          data = $("<script>")["prop"]({
            "charset" : args["scriptCharset"],
            "src" : args["url"]
          })["on"]("load error", cleanup = function(request) {
            data["remove"]();
            /** @type {null} */
            cleanup = null;
            if (request) {
              callback("error" === request["type"] ? 404 : 200, request["type"]);
            }
          });
          document["head"]["appendChild"](data[0]);
        },
        "abort" : function() {
          if (cleanup) {
            cleanup();
          }
        }
      };
    }
  });
  /** @type {!Array} */
  var left = [];
  /** @type {!RegExp} */
  var m = /(=)\?(?=&|$)|\?\?/;
  $["ajaxSetup"]({
    "jsonp" : "callback",
    "jsonpCallback" : function() {
      var indexLookupKey = left["pop"]() || $["expando"] + "_" + widgetUniqueIDIndex++;
      return this[indexLookupKey] = true, indexLookupKey;
    }
  });
  $["ajaxPrefilter"]("json jsonp", function(o, options, javascriptMessages) {
    var x;
    var value;
    var row;
    var i = false !== o["jsonp"] && (m["test"](o["url"]) ? "url" : "string" == typeof o["data"] && 0 === (o["contentType"] || "")["indexOf"]("application/x-www-form-urlencoded") && m["test"](o["data"]) && "data");
    if (i || "jsonp" === o["dataTypes"][0]) {
      return x = o["jsonpCallback"] = $["isFunction"](o["jsonpCallback"]) ? o["jsonpCallback"]() : o["jsonpCallback"], i ? o[i] = o[i]["replace"](m, "$1" + x) : false !== o["jsonp"] && (o["url"] += (args["test"](o["url"]) ? "&" : "?") + o["jsonp"] + "=" + x), o["converters"]["script json"] = function() {
        return row || $["error"](x + " was not called"), row[0];
      }, o["dataTypes"][0] = "json", value = window[x], window[x] = function() {
        /** @type {!Arguments} */
        row = arguments;
      }, javascriptMessages["always"](function() {
        if (void 0 === value) {
          $(window)["removeProp"](x);
        } else {
          window[x] = value;
        }
        if (o[x]) {
          o["jsonpCallback"] = options["jsonpCallback"];
          left["push"](x);
        }
        if (row && $["isFunction"](value)) {
          value(row[0]);
        }
        row = value = void 0;
      }), "script";
    }
  });
  var reverseItemData = value;
  var updatedReverseItemControlData;
  var dom = document["implementation"]["createHTMLDocument"]("")["body"];
  /** @type {boolean} */
  updatedReverseItemControlData = (dom["innerHTML"] = "<form></form><form></form>", 2 === dom["childNodes"]["length"]);
  /** @type {boolean} */
  reverseItemData["createHTMLDocument"] = updatedReverseItemControlData;
  /**
   * @param {?} name
   * @param {!Object} doc
   * @param {!Object} docRemoved
   * @return {?}
   */
  $["parseHTML"] = function(name, doc, docRemoved) {
    if ("string" != typeof name) {
      return [];
    }
    if ("boolean" == typeof doc) {
      /** @type {!Object} */
      docRemoved = doc;
      /** @type {boolean} */
      doc = false;
    }
    var target;
    var nodes;
    var data;
    return doc || (value["createHTMLDocument"] ? (doc = document["implementation"]["createHTMLDocument"](""), target = doc["createElement"]("base"), target["href"] = document["location"]["href"], doc["head"]["appendChild"](target)) : doc = document), nodes = module["exec"](name), data = !docRemoved && [], nodes ? [doc["createElement"](nodes[1])] : (nodes = create([name], doc, data), data && data["length"] && $(data)["remove"](), $["merge"]([], nodes["childNodes"]));
  };
  /**
   * @param {!Object} p
   * @param {!Object} value
   * @param {!Object} options
   * @return {?}
   */
  $["fn"]["load"] = function(p, value, options) {
    var val;
    var method;
    var optCols;
    var data = this;
    var m = p["indexOf"](" ");
    return -1 < m && (val = resolve(p["slice"](m)), p = p["slice"](0, m)), $["isFunction"](value) ? (options = value, value = void 0) : value && "object" == typeof value && (method = "POST"), 0 < data["length"] && $["ajax"]({
      "url" : p,
      "type" : method || "GET",
      "dataType" : "html",
      "data" : value
    })["done"](function(html) {
      /** @type {!Arguments} */
      optCols = arguments;
      data["html"](val ? $("<div>")["append"]($["parseHTML"](html))["find"](val) : html);
    })["always"](options && function(to_user, from_user) {
      data["each"](function() {
        options["apply"](this, optCols || [to_user["responseText"], from_user, to_user]);
      });
    }), this;
  };
  $["each"]("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend"["split"](" "), function(canCreateDiscussions, name) {
    /**
     * @param {?} PL$16
     * @return {?}
     */
    $["fn"][name] = function(PL$16) {
      return this["on"](name, PL$16);
    };
  });
  /**
   * @param {?} undefined
   * @return {?}
   */
  $["expr"]["pseudos"]["animated"] = function(undefined) {
    return $["grep"]($["timers"], function(options) {
      return undefined === options["elem"];
    })["length"];
  };
  $["offset"] = {
    "setOffset" : function(el, data, size) {
      var opt_boundsOrLeft;
      var left;
      var value;
      var top;
      var o;
      var index;
      var position = $["css"](el, "position");
      var options = $(el);
      var item = {};
      if ("static" === position) {
        /** @type {string} */
        el["style"]["position"] = "relative";
      }
      o = options["offset"]();
      value = $["css"](el, "top");
      index = $["css"](el, "left");
      if (("absolute" === position || "fixed" === position) && -1 < (value + index)["indexOf"]("auto")) {
        opt_boundsOrLeft = options["position"]();
        top = opt_boundsOrLeft["top"];
        left = opt_boundsOrLeft["left"];
      } else {
        /** @type {number} */
        top = parseFloat(value) || 0;
        /** @type {number} */
        left = parseFloat(index) || 0;
      }
      if ($["isFunction"](data)) {
        data = data["call"](el, size, $["extend"]({}, o));
      }
      if (null != data["top"]) {
        /** @type {number} */
        item["top"] = data["top"] - o["top"] + top;
      }
      if (null != data["left"]) {
        /** @type {number} */
        item["left"] = data["left"] - o["left"] + left;
      }
      if ("using" in data) {
        data["using"]["call"](el, item);
      } else {
        options["css"](item);
      }
    }
  };
  $["fn"]["extend"]({
    "offset" : function(fn) {
      if (arguments["length"]) {
        return void 0 === fn ? this : this["each"](function(mmCoreSplitViewBlock) {
          $["offset"]["setOffset"](this, fn, mmCoreSplitViewBlock);
        });
      }
      var doc;
      var result;
      var elStyling;
      var res;
      var element = this[0];
      if (element) {
        return element["getClientRects"]()["length"] ? (elStyling = element["getBoundingClientRect"](), doc = element["ownerDocument"], result = doc["documentElement"], res = doc["defaultView"], {
          "top" : elStyling["top"] + res["pageYOffset"] - result["clientTop"],
          "left" : elStyling["left"] + res["pageXOffset"] - result["clientLeft"]
        }) : {
          "top" : 0,
          "left" : 0
        };
      }
    },
    "position" : function() {
      if (this[0]) {
        var o;
        var r;
        var el = this[0];
        var offset = {
          "top" : 0,
          "left" : 0
        };
        return "fixed" === $["css"](el, "position") ? r = el["getBoundingClientRect"]() : (o = this["offsetParent"](), r = this["offset"](), callback(o[0], "html") || (offset = o["offset"]()), offset = {
          "top" : offset["top"] + $["css"](o[0], "borderTopWidth", true),
          "left" : offset["left"] + $["css"](o[0], "borderLeftWidth", true)
        }), {
          "top" : r["top"] - offset["top"] - $["css"](el, "marginTop", true),
          "left" : r["left"] - offset["left"] - $["css"](el, "marginLeft", true)
        };
      }
    },
    "offsetParent" : function() {
      return this["map"](function() {
        var node = this["offsetParent"];
        for (; node && "static" === $["css"](node, "position");) {
          node = node["offsetParent"];
        }
        return node || that;
      });
    }
  });
  $["each"]({
    "scrollLeft" : "pageXOffset",
    "scrollTop" : "pageYOffset"
  }, function(type, prop) {
    /** @type {boolean} */
    var top = "pageYOffset" === prop;
    /**
     * @param {?} value
     * @return {?}
     */
    $["fn"][type] = function(value) {
      return access(this, function(el, method, val) {
        var win;
        return $["isWindow"](el) ? win = el : 9 === el["nodeType"] && (win = el["defaultView"]), void 0 === val ? win ? win[prop] : el[method] : void(win ? win["scrollTo"](top ? win["pageXOffset"] : val, top ? val : win["pageYOffset"]) : el[method] = val);
      }, type, value, arguments["length"]);
    };
  });
  $["each"](["top", "left"], function(canCreateDiscussions, name) {
    $["cssHooks"][name] = deserialize(value["pixelPosition"], function(el, val) {
      if (val) {
        return val = curCSS(el, name), color["test"](val) ? $(el)["position"]()[name] + "px" : val;
      }
    });
  });
  $["each"]({
    "Height" : "height",
    "Width" : "width"
  }, function(name, type) {
    $["each"]({
      "padding" : "inner" + name,
      "content" : type,
      "" : "outer" + name
    }, function(defaultExtra, method) {
      /**
       * @param {boolean} margin
       * @param {(number|string)} boardManager
       * @return {?}
       */
      $["fn"][method] = function(margin, boardManager) {
        var chainable = arguments["length"] && (defaultExtra || "boolean" != typeof margin);
        var extra = defaultExtra || (true === margin || true === boardManager ? "margin" : "border");
        return access(this, function(el, i, undefined) {
          var elem;
          return $["isWindow"](el) ? 0 === method["indexOf"]("outer") ? el["inner" + name] : el["document"]["documentElement"]["client" + name] : 9 === el["nodeType"] ? (elem = el["documentElement"], Math["max"](el["body"]["scroll" + name], elem["scroll" + name], el["body"]["offset" + name], elem["offset" + name], elem["client" + name])) : void 0 === undefined ? $["css"](el, i, extra) : $["style"](el, i, undefined, extra);
        }, type, chainable ? margin : void 0, chainable);
      };
    });
  });
  $["fn"]["extend"]({
    "bind" : function(event, callback, user_data) {
      return this["on"](event, null, callback, user_data);
    },
    "unbind" : function(event, callback) {
      return this["off"](event, null, callback);
    },
    "delegate" : function(type, event, callback, selector) {
      return this["on"](event, type, callback, selector);
    },
    "undelegate" : function(event, eventType, callback) {
      return 1 === arguments["length"] ? this["off"](event, "**") : this["off"](eventType, event || "**", callback);
    }
  });
  /**
   * @param {?} canCreateDiscussions
   * @return {undefined}
   */
  $["holdReady"] = function(canCreateDiscussions) {
    if (canCreateDiscussions) {
      $["readyWait"]++;
    } else {
      $["ready"](true);
    }
  };
  $["isArray"] = Array["isArray"];
  $["parseJSON"] = JSON["parse"];
  /** @type {function(!Object, string): ?} */
  $["nodeName"] = callback;
  if ("function" == typeof define && define["amd"]) {
    define("jquery", [], function() {
      return $;
    });
  }
  var originalCallback = window["jQuery"];
  var old = window["$"];
  return $["noConflict"] = function(name) {
    return window["$"] === $ && (window["$"] = old), name && window["jQuery"] === $ && (window["jQuery"] = originalCallback), $;
  }, zoomAware || (window["jQuery"] = window["$"] = $), $;
});
/**
 * @return {?}
 */
function getInternetExplorerVersion() {
  /** @type {number} */
  var rv = -1;
  if ("Microsoft Internet Explorer" == navigator["appName"] && null != /MSIE ([0-9]{1,}[.0-9]{0,})/["exec"](navigator["userAgent"])) {
    /** @type {number} */
    rv = parseFloat(RegExp["$1"]);
  }
  return rv;
}
var ie = getInternetExplorerVersion();
/**
 * @param {string} name
 * @return {?}
 */
function getQueryVariable(name) {
  var PL$16 = window["location"]["search"]["substring"](1)["split"]("&");
  /** @type {number} */
  var PL$17 = 0;
  for (; PL$17 < PL$16["length"]; PL$17++) {
    var parsedQR = PL$16[PL$17]["split"]("=");
    if (decodeURIComponent(parsedQR[0]) == name) {
      return decodeURIComponent(parsedQR[1]);
    }
  }
}
this["jukebox"] = {};
/**
 * @param {!Object} importedPages
 * @param {string} canCreateDiscussions
 * @return {?}
 */
jukebox["Player"] = function(importedPages, canCreateDiscussions) {
  /** @type {number} */
  this["id"] = ++jukebox["__jukeboxId"];
  this["origin"] = canCreateDiscussions || null;
  this["settings"] = {};
  var ff;
  for (ff in this["defaults"]) {
    this["settings"][ff] = this["defaults"][ff];
  }
  if ("[object Object]" === Object["prototype"]["toString"]["call"](importedPages)) {
    var importedPageName;
    for (importedPageName in importedPages) {
      this["settings"][importedPageName] = importedPages[importedPageName];
    }
  }
  if ("[object Function]" === Object["prototype"]["toString"]["call"](jukebox["Manager"])) {
    jukebox["Manager"] = new jukebox["Manager"];
  }
  /** @type {null} */
  this["resource"] = this["isPlaying"] = null;
  this["resource"] = "[object Object]" === Object["prototype"]["toString"]["call"](jukebox["Manager"]) ? jukebox["Manager"]["getPlayableResource"](this["settings"]["resources"]) : this["settings"]["resources"][0] || null;
  if (null === this["resource"]) {
    throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
  }
  this["__init"]();
  return this;
};
/** @type {number} */
jukebox["__jukeboxId"] = 0;
jukebox["Player"]["prototype"] = {
  "defaults" : {
    "resources" : [],
    "autoplay" : false,
    "spritemap" : {},
    "flashMediaElement" : "./swf/FlashMediaElement.swf",
    "timeout" : 1E3
  },
  "__addToManager" : function() {
    if (true !== this["__wasAddedToManager"]) {
      jukebox["Manager"]["add"](this);
      /** @type {boolean} */
      this["__wasAddedToManager"] = true;
    }
  },
  "__init" : function() {
    var exports = this;
    var data = this["settings"];
    var result = {};
    var indexLookupKey;
    if (jukebox["Manager"] && void 0 !== jukebox["Manager"]["features"]) {
      result = jukebox["Manager"]["features"];
    }
    if (true === result["html5audio"]) {
      /** @type {!Audio} */
      this["context"] = new Audio;
      this["context"]["src"] = this["resource"];
      if (null === this["origin"]) {
        /**
         * @param {string} name
         * @return {undefined}
         */
        var addFunc = function(name) {
          exports["__addToManager"](name);
        };
        this["context"]["addEventListener"]("canplaythrough", addFunc, true);
        window["setTimeout"](function() {
          exports["context"]["removeEventListener"]("canplaythrough", addFunc, true);
          addFunc("timeout");
        }, data["timeout"]);
      }
      /** @type {boolean} */
      this["context"]["autobuffer"] = true;
      /** @type {boolean} */
      this["context"]["preload"] = true;
      for (indexLookupKey in this["HTML5API"]) {
        this[indexLookupKey] = this["HTML5API"][indexLookupKey];
      }
      if (1 < result["channels"]) {
        if (true === data["autoplay"]) {
          /** @type {boolean} */
          this["context"]["autoplay"] = true;
        } else {
          if (void 0 !== data["spritemap"][data["autoplay"]]) {
            this["play"](data["autoplay"]);
          }
        }
      } else {
        if (1 === result["channels"] && void 0 !== data["spritemap"][data["autoplay"]]) {
          this["backgroundMusic"] = data["spritemap"][data["autoplay"]];
          this["backgroundMusic"]["started"] = Date["now"] ? Date["now"]() : +new Date;
          this["play"](data["autoplay"]);
        }
      }
      if (1 == result["channels"] && true !== data["canPlayBackground"]) {
        window["addEventListener"]("pagehide", function() {
          if (null !== exports["isPlaying"]) {
            exports["pause"]();
            /** @type {boolean} */
            exports["__wasAutoPaused"] = true;
          }
        });
        window["addEventListener"]("pageshow", function() {
          if (exports["__wasAutoPaused"]) {
            exports["resume"]();
            delete exports["_wasAutoPaused"];
          }
        });
      }
    } else {
      if (true === result["flashaudio"]) {
        for (indexLookupKey in this["FLASHAPI"]) {
          this[indexLookupKey] = this["FLASHAPI"][indexLookupKey];
        }
        /** @type {!Array} */
        result = ["id=jukebox-flashstream-" + this["id"], "autoplay=" + data["autoplay"], "file=" + window["encodeURIComponent"](this["resource"])];
        this["__initFlashContext"](result);
        if (true === data["autoplay"]) {
          this["play"](0);
        } else {
          if (data["spritemap"][data["autoplay"]]) {
            this["play"](data["autoplay"]);
          }
        }
      } else {
        throw "Your Browser does not support Flash Audio or HTML5 Audio.";
      }
    }
  },
  "__initFlashContext" : function(item) {
    var node;
    var _0x1965a5 = this["settings"]["flashMediaElement"];
    var att;
    var params = {
      "flashvars" : item["join"]("&"),
      "quality" : "high",
      "bgcolor" : "#000000",
      "wmode" : "transparent",
      "allowscriptaccess" : "always",
      "allowfullscreen" : "true"
    };
    if (navigator["userAgent"]["match"](/MSIE/)) {
      node = document["createElement"]("div");
      document["getElementsByTagName"]("body")[0]["appendChild"](node);
      var element = document["createElement"]("object");
      element["id"] = "jukebox-flashstream-" + this["id"];
      element["setAttribute"]("type", "application/x-shockwave-flash");
      element["setAttribute"]("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
      element["setAttribute"]("width", "0");
      element["setAttribute"]("height", "0");
      params["movie"] = _0x1965a5 + "?x=" + (Date["now"] ? Date["now"]() : +new Date);
      params["flashvars"] = item["join"]("&amp;");
      for (att in params) {
        item = document["createElement"]("param");
        item["setAttribute"]("name", att);
        item["setAttribute"]("value", params[att]);
        element["appendChild"](item);
      }
      node["outerHTML"] = element["outerHTML"];
      this["context"] = document["getElementById"]("jukebox-flashstream-" + this["id"]);
    } else {
      node = document["createElement"]("embed");
      node["id"] = "jukebox-flashstream-" + this["id"];
      node["setAttribute"]("type", "application/x-shockwave-flash");
      node["setAttribute"]("width", "100");
      node["setAttribute"]("height", "100");
      /** @type {boolean} */
      params["play"] = false;
      /** @type {boolean} */
      params["loop"] = false;
      params["src"] = _0x1965a5 + "?x=" + (Date["now"] ? Date["now"]() : +new Date);
      for (att in params) {
        node["setAttribute"](att, params[att]);
      }
      document["getElementsByTagName"]("body")[0]["appendChild"](node);
      this["context"] = node;
    }
  },
  "backgroundHackForiOS" : function() {
    if (void 0 !== this["backgroundMusic"]) {
      var _0x22f8e6 = Date["now"] ? Date["now"]() : +new Date;
      if (void 0 === this["backgroundMusic"]["started"]) {
        this["backgroundMusic"]["started"] = _0x22f8e6;
        this["setCurrentTime"](this["backgroundMusic"]["start"]);
      } else {
        this["backgroundMusic"]["lastPointer"] = (_0x22f8e6 - this["backgroundMusic"]["started"]) / 1E3 % (this["backgroundMusic"]["end"] - this["backgroundMusic"]["start"]) + this["backgroundMusic"]["start"];
        this["play"](this["backgroundMusic"]["lastPointer"]);
      }
    }
  },
  "play" : function(c, quality) {
    if (null !== this["isPlaying"] && true !== quality) {
      if (void 0 !== jukebox["Manager"]) {
        jukebox["Manager"]["addToQueue"](c, this["id"]);
      }
    } else {
      var item = this["settings"]["spritemap"];
      var i;
      if (void 0 !== item[c]) {
        i = item[c]["start"];
      } else {
        if ("number" === typeof c) {
          /** @type {string} */
          i = c;
          var j;
          for (j in item) {
            if (i >= item[j]["start"] && i <= item[j]["end"]) {
              /** @type {string} */
              c = j;
              break;
            }
          }
        }
      }
      if (void 0 !== i && "[object Object]" === Object["prototype"]["toString"]["call"](item[c])) {
        this["isPlaying"] = this["settings"]["spritemap"][c];
        if (this["context"]["play"]) {
          this["context"]["play"]();
        }
        this["wasReady"] = this["setCurrentTime"](i);
      }
    }
  },
  "stop" : function() {
    /** @type {number} */
    this["__lastPosition"] = 0;
    /** @type {null} */
    this["isPlaying"] = null;
    if (this["backgroundMusic"]) {
      this["backgroundHackForiOS"]();
    } else {
      this["context"]["pause"]();
    }
    return true;
  },
  "pause" : function() {
    /** @type {null} */
    this["isPlaying"] = null;
    this["__lastPosition"] = this["getCurrentTime"]();
    this["context"]["pause"]();
    return this["__lastPosition"];
  },
  "resume" : function(s) {
    s = "number" === typeof s ? s : this["__lastPosition"];
    if (null !== s) {
      return this["play"](s), this["__lastPosition"] = null, true;
    }
    this["context"]["play"]();
    return false;
  },
  "HTML5API" : {
    "getVolume" : function() {
      return this["context"]["volume"] || 1;
    },
    "setVolume" : function(value) {
      this["context"]["volume"] = value;
      return 0.0001 > Math["abs"](this["context"]["volume"] - value) ? true : false;
    },
    "getCurrentTime" : function() {
      return this["context"]["currentTime"] || 0;
    },
    "setCurrentTime" : function(callback) {
      try {
        return this["context"]["currentTime"] = callback, true;
      } catch (_0x46e5de) {
        return false;
      }
    }
  },
  "FLASHAPI" : {
    "getVolume" : function() {
      return this["context"] && "function" === typeof this["context"]["getVolume"] ? this["context"]["getVolume"]() : 1;
    },
    "setVolume" : function(showVolume) {
      return this["context"] && "function" === typeof this["context"]["setVolume"] ? (this["context"]["setVolume"](showVolume), true) : false;
    },
    "getCurrentTime" : function() {
      return this["context"] && "function" === typeof this["context"]["getCurrentTime"] ? this["context"]["getCurrentTime"]() : 0;
    },
    "setCurrentTime" : function(currentTime) {
      return this["context"] && "function" === typeof this["context"]["setCurrentTime"] ? this["context"]["setCurrentTime"](currentTime) : false;
    }
  }
};
if (void 0 === this["jukebox"]) {
  throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
}
/**
 * @param {!Object} importedPages
 * @return {undefined}
 */
jukebox["Manager"] = function(importedPages) {
  this["features"] = {};
  this["codecs"] = {};
  this["__players"] = {};
  /** @type {number} */
  this["__playersLength"] = 0;
  this["__clones"] = {};
  /** @type {!Array} */
  this["__queue"] = [];
  this["settings"] = {};
  var ff;
  for (ff in this["defaults"]) {
    this["settings"][ff] = this["defaults"][ff];
  }
  if ("[object Object]" === Object["prototype"]["toString"]["call"](importedPages)) {
    var importedPageName;
    for (importedPageName in importedPages) {
      this["settings"][importedPageName] = importedPages[importedPageName];
    }
  }
  this["__detectFeatures"]();
  jukebox["Manager"]["__initialized"] = false === this["settings"]["useGameLoop"] ? window["setInterval"](function() {
    jukebox["Manager"]["loop"]();
  }, 20) : true;
};
jukebox["Manager"]["prototype"] = {
  "defaults" : {
    "useFlash" : false,
    "useGameLoop" : false
  },
  "__detectFeatures" : function() {
    var object = window["Audio"] && new Audio;
    if (object && object["canPlayType"] && false === this["settings"]["useFlash"]) {
      /** @type {!Array} */
      var b = [{
        "e" : "3gp",
        "m" : ["audio/3gpp", "audio/amr"]
      }, {
        "e" : "aac",
        "m" : ["audio/aac", "audio/aacp"]
      }, {
        "e" : "amr",
        "m" : ["audio/amr", "audio/3gpp"]
      }, {
        "e" : "caf",
        "m" : ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
      }, {
        "e" : "m4a",
        "m" : 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'["split"]("{")
      }, {
        "e" : "mp3",
        "m" : ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
      }, {
        "e" : "mpga",
        "m" : ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
      }, {
        "e" : "mp4",
        "m" : ["audio/mp4", "video/mp4"]
      }, {
        "e" : "ogg",
        "m" : ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
      }, {
        "e" : "wav",
        "m" : ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
      }, {
        "e" : "webm",
        "m" : ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
      }];
      var value;
      var suffix;
      /** @type {number} */
      var i = 0;
      var l = b["length"];
      for (; i < l; i++) {
        if (suffix = b[i]["e"], b[i]["m"]["length"] && "object" === typeof b[i]["m"]) {
          /** @type {number} */
          var name = 0;
          var targetName = b[i]["m"]["length"];
          for (; name < targetName; name++) {
            if (value = b[i]["m"][name], "" !== object["canPlayType"](value)) {
              this["codecs"][suffix] = value;
              break;
            } else {
              if (!this["codecs"][suffix]) {
                /** @type {boolean} */
                this["codecs"][suffix] = false;
              }
            }
          }
        }
      }
      /** @type {boolean} */
      this["features"]["html5audio"] = !(!this["codecs"]["mp3"] && !this["codecs"]["ogg"] && !this["codecs"]["webm"] && !this["codecs"]["wav"]);
      /** @type {number} */
      this["features"]["channels"] = 8;
      /** @type {number} */
      object["volume"] = 0.1337;
      /** @type {boolean} */
      this["features"]["volume"] = !!(0.0001 > Math["abs"](object["volume"] - 0.1337));
      if (navigator["userAgent"]["match"](/iPhone|iPod|iPad/i)) {
        /** @type {number} */
        this["features"]["channels"] = 1;
      }
    }
    /** @type {boolean} */
    this["features"]["flashaudio"] = !!navigator["mimeTypes"]["application/x-shockwave-flash"] || !!navigator["plugins"]["Shockwave Flash"] || false;
    if (window["ActiveXObject"]) {
      try {
        new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10");
        /** @type {boolean} */
        this["features"]["flashaudio"] = true;
      } catch (_0x2f6f05) {
      }
    }
    if (true === this["settings"]["useFlash"]) {
      /** @type {boolean} */
      this["features"]["flashaudio"] = true;
    }
    if (true === this["features"]["flashaudio"] && !this["features"]["html5audio"]) {
      /** @type {string} */
      this["codecs"]["mp3"] = "audio/mp3";
      /** @type {string} */
      this["codecs"]["mpga"] = "audio/mpeg";
      /** @type {string} */
      this["codecs"]["mp4"] = "audio/mp4";
      /** @type {string} */
      this["codecs"]["m4a"] = "audio/mp4";
      /** @type {string} */
      this["codecs"]["3gp"] = "audio/3gpp";
      /** @type {string} */
      this["codecs"]["amr"] = "audio/amr";
      /** @type {boolean} */
      this["features"]["volume"] = true;
      /** @type {number} */
      this["features"]["channels"] = 1;
    }
  },
  "__getPlayerById" : function(id) {
    return this["__players"] && void 0 !== this["__players"][id] ? this["__players"][id] : null;
  },
  "__getClone" : function(store, traits) {
    var object;
    for (object in this["__clones"]) {
      var result = this["__clones"][object];
      if (null === result["isPlaying"] && result["origin"] === store) {
        return result;
      }
    }
    if ("[object Object]" === Object["prototype"]["toString"]["call"](traits)) {
      object = {};
      var accessor;
      for (accessor in traits) {
        object[accessor] = traits[accessor];
      }
      /** @type {boolean} */
      object["autoplay"] = false;
      accessor = new jukebox["Player"](object, store);
      /** @type {boolean} */
      accessor["isClone"] = true;
      /** @type {boolean} */
      accessor["wasReady"] = false;
      return this["__clones"][accessor["id"]] = accessor;
    }
    return null;
  },
  "loop" : function() {
    if (0 !== this["__playersLength"]) {
      if (this["__queue"]["length"] && this["__playersLength"] < this["features"]["channels"]) {
        var data = this["__queue"][0];
        var value = this["__getPlayerById"](data["origin"]);
        if (null !== value) {
          var type = this["__getClone"](data["origin"], value["settings"]);
          if (null !== type) {
            if (true === this["features"]["volume"] && (value = this["__players"][data["origin"]])) {
              type["setVolume"](value["getVolume"]());
            }
            this["add"](type);
            type["play"](data["pointer"], true);
          }
        }
        this["__queue"]["splice"](0, 1);
      } else {
        for (type in this["__queue"]["length"] && 1 === this["features"]["channels"] && (data = this["__queue"][0], value = this["__getPlayerById"](data["origin"]), null !== value && value["play"](data["pointer"], true), this["__queue"]["splice"](0, 1)), this["__players"]) {
          data = this["__players"][type];
          value = data["getCurrentTime"]() || 0;
          if (data["isPlaying"] && false === data["wasReady"]) {
            data["wasReady"] = data["setCurrentTime"](data["isPlaying"]["start"]);
          } else {
            if (data["isPlaying"] && true === data["wasReady"]) {
              if (value > data["isPlaying"]["end"]) {
                if (true === data["isPlaying"]["loop"]) {
                  data["play"](data["isPlaying"]["start"], true);
                } else {
                  data["stop"]();
                }
              }
            } else {
              if (data["isClone"] && null === data["isPlaying"]) {
                this["remove"](data);
              } else {
                if (void 0 !== data["backgroundMusic"] && null === data["isPlaying"] && value > data["backgroundMusic"]["end"]) {
                  data["backgroundHackForiOS"]();
                }
              }
            }
          }
        }
      }
    }
  },
  "getPlayableResource" : function(args) {
    if ("[object Array]" !== Object["prototype"]["toString"]["call"](args)) {
      /** @type {!Array} */
      args = [args];
    }
    /** @type {number} */
    var i = 0;
    var len = args["length"];
    for (; i < len; i++) {
      var mapping = args[i];
      var templateWidgetName = mapping["match"](/\.([^\.]*)$/)[1];
      if (templateWidgetName && this["codecs"][templateWidgetName]) {
        return mapping;
      }
    }
    return null;
  },
  "add" : function(statInfo) {
    return statInfo instanceof jukebox["Player"] && void 0 === this["__players"][statInfo["id"]] ? (this["__playersLength"]++, this["__players"][statInfo["id"]] = statInfo, true) : false;
  },
  "remove" : function(trendId) {
    return trendId instanceof jukebox["Player"] && void 0 !== this["__players"][trendId["id"]] ? (this["__playersLength"]--, delete this["__players"][trendId["id"]], true) : false;
  },
  "addToQueue" : function(value, action) {
    return ("string" === typeof value || "number" === typeof value) && void 0 !== this["__players"][action] ? (this["__queue"]["push"]({
      "pointer" : value,
      "origin" : action
    }), true) : false;
  }
};
(function() {
  /**
   * @return {undefined}
   */
  var Task = function() {
    this["init"]();
  };
  Task["prototype"] = {
    "init" : function() {
      var node = this || obj;
      /** @type {number} */
      node["_counter"] = 1E3;
      /** @type {!Array} */
      node["_html5AudioPool"] = [];
      /** @type {number} */
      node["html5PoolSize"] = 10;
      node["_codecs"] = {};
      /** @type {!Array} */
      node["_howls"] = [];
      /** @type {boolean} */
      node["_muted"] = false;
      /** @type {number} */
      node["_volume"] = 1;
      /** @type {string} */
      node["_canPlayEvent"] = "canplaythrough";
      node["_navigator"] = "undefined" !== typeof window && window["navigator"] ? window["navigator"] : null;
      /** @type {null} */
      node["masterGain"] = null;
      /** @type {boolean} */
      node["noAudio"] = false;
      /** @type {boolean} */
      node["usingWebAudio"] = true;
      /** @type {boolean} */
      node["autoSuspend"] = false;
      /** @type {null} */
      node["ctx"] = null;
      /** @type {boolean} */
      node["autoUnlock"] = true;
      node["_setup"]();
      return node;
    },
    "volume" : function(v) {
      var context = this || obj;
      /** @type {number} */
      v = parseFloat(v);
      if (!context["ctx"]) {
        init();
      }
      if ("undefined" !== typeof v && 0 <= v && 1 >= v) {
        /** @type {number} */
        context["_volume"] = v;
        if (context["_muted"]) {
          return context;
        }
        if (context["usingWebAudio"]) {
          context["masterGain"]["gain"]["setValueAtTime"](v, obj["ctx"]["currentTime"]);
        }
        /** @type {number} */
        var i = 0;
        for (; i < context["_howls"]["length"]; i++) {
          if (!context["_howls"][i]["_webAudio"]) {
            var PL$13 = context["_howls"][i]["_getSoundIds"]();
            /** @type {number} */
            var PL$17 = 0;
            for (; PL$17 < PL$13["length"]; PL$17++) {
              var o = context["_howls"][i]["_soundById"](PL$13[PL$17]);
              if (o && o["_node"]) {
                /** @type {number} */
                o["_node"]["volume"] = o["_volume"] * v;
              }
            }
          }
        }
        return context;
      }
      return context["_volume"];
    },
    "mute" : function(callback) {
      var node = this || obj;
      if (!node["ctx"]) {
        init();
      }
      /** @type {boolean} */
      node["_muted"] = callback;
      if (node["usingWebAudio"]) {
        node["masterGain"]["gain"]["setValueAtTime"](callback ? 0 : node["_volume"], obj["ctx"]["currentTime"]);
      }
      /** @type {number} */
      var i = 0;
      for (; i < node["_howls"]["length"]; i++) {
        if (!node["_howls"][i]["_webAudio"]) {
          var PL$13 = node["_howls"][i]["_getSoundIds"]();
          /** @type {number} */
          var PL$17 = 0;
          for (; PL$17 < PL$13["length"]; PL$17++) {
            var val = node["_howls"][i]["_soundById"](PL$13[PL$17]);
            if (val && val["_node"]) {
              val["_node"]["muted"] = callback ? true : val["_muted"];
            }
          }
        }
      }
      return node;
    },
    "unload" : function() {
      var node = this || obj;
      /** @type {number} */
      var DEFAULT_VIEW = node["_howls"]["length"] - 1;
      for (; 0 <= DEFAULT_VIEW; DEFAULT_VIEW--) {
        node["_howls"][DEFAULT_VIEW]["unload"]();
      }
      if (node["usingWebAudio"] && node["ctx"] && "undefined" !== typeof node["ctx"]["close"]) {
        node["ctx"]["close"]();
        /** @type {null} */
        node["ctx"] = null;
        init();
      }
      return node;
    },
    "codecs" : function(colorString) {
      return (this || obj)["_codecs"][colorString["replace"](/^x-/, "")];
    },
    "_setup" : function() {
      var node = this || obj;
      node["state"] = node["ctx"] ? node["ctx"]["state"] || "suspended" : "suspended";
      node["_autoSuspend"]();
      if (!node["usingWebAudio"]) {
        if ("undefined" !== typeof Audio) {
          try {
            /** @type {!Audio} */
            var audioDevice = new Audio;
            if ("undefined" === typeof audioDevice["oncanplaythrough"]) {
              /** @type {string} */
              node["_canPlayEvent"] = "canplay";
            }
          } catch (_0x11078b) {
            /** @type {boolean} */
            node["noAudio"] = true;
          }
        } else {
          /** @type {boolean} */
          node["noAudio"] = true;
        }
      }
      try {
        /** @type {!Audio} */
        audioDevice = new Audio;
        if (audioDevice["muted"]) {
          /** @type {boolean} */
          node["noAudio"] = true;
        }
      } catch (_0x30cc27) {
      }
      if (!node["noAudio"]) {
        node["_setupCodecs"]();
      }
      return node;
    },
    "_setupCodecs" : function() {
      var self = this || obj;
      /** @type {null} */
      var stringify = null;
      try {
        /** @type {(Audio|null)} */
        stringify = "undefined" !== typeof Audio ? new Audio : null;
      } catch (_0x3b2bc2) {
        return self;
      }
      if (!stringify || "function" !== typeof stringify["canPlayType"]) {
        return self;
      }
      var retryLinkHref = stringify["canPlayType"]("audio/mpeg;")["replace"](/^no$/, "");
      var css = self["_navigator"] && self["_navigator"]["userAgent"]["match"](/OPR\/([0-6].)/g);
      css = css && 33 > parseInt(css[0]["split"]("/")[1], 10);
      self["_codecs"] = {
        "mp3" : !(css || !retryLinkHref && !stringify["canPlayType"]("audio/mp3;")["replace"](/^no$/, "")),
        "mpeg" : !!retryLinkHref,
        "opus" : !!stringify["canPlayType"]('audio/ogg; codecs="opus"')["replace"](/^no$/, ""),
        "ogg" : !!stringify["canPlayType"]('audio/ogg; codecs="vorbis"')["replace"](/^no$/, ""),
        "oga" : !!stringify["canPlayType"]('audio/ogg; codecs="vorbis"')["replace"](/^no$/, ""),
        "wav" : !!stringify["canPlayType"]('audio/wav; codecs="1"')["replace"](/^no$/, ""),
        "aac" : !!stringify["canPlayType"]("audio/aac;")["replace"](/^no$/, ""),
        "caf" : !!stringify["canPlayType"]("audio/x-caf;")["replace"](/^no$/, ""),
        "m4a" : !!(stringify["canPlayType"]("audio/x-m4a;") || stringify["canPlayType"]("audio/m4a;") || stringify["canPlayType"]("audio/aac;"))["replace"](/^no$/, ""),
        "mp4" : !!(stringify["canPlayType"]("audio/x-mp4;") || stringify["canPlayType"]("audio/mp4;") || stringify["canPlayType"]("audio/aac;"))["replace"](/^no$/, ""),
        "weba" : !!stringify["canPlayType"]('audio/webm; codecs="vorbis"')["replace"](/^no$/, ""),
        "webm" : !!stringify["canPlayType"]('audio/webm; codecs="vorbis"')["replace"](/^no$/, ""),
        "dolby" : !!stringify["canPlayType"]('audio/mp4; codecs="ec-3"')["replace"](/^no$/, ""),
        "flac" : !!(stringify["canPlayType"]("audio/x-flac;") || stringify["canPlayType"]("audio/flac;"))["replace"](/^no$/, "")
      };
      return self;
    },
    "_unlockAudio" : function() {
      var data = this || obj;
      if (!data["_audioUnlocked"] && data["ctx"]) {
        /** @type {boolean} */
        data["_audioUnlocked"] = false;
        /** @type {boolean} */
        data["autoUnlock"] = false;
        if (!data["_mobileUnloaded"] && 44100 !== data["ctx"]["sampleRate"]) {
          /** @type {boolean} */
          data["_mobileUnloaded"] = true;
          data["unload"]();
        }
        if (!data["ctx"]) {
          init();
        }
        if (data["ctx"]) {
          data["_scratchBuffer"] = data["ctx"]["createBuffer"](1, 1, 22050);
        }
        /**
         * @return {undefined}
         */
        var init = function() {
          /** @type {number} */
          var i = 0;
          for (; i < data["html5PoolSize"]; i++) {
            try {
              /** @type {!Audio} */
              var PL$16 = new Audio;
              /** @type {boolean} */
              PL$16["_unlocked"] = true;
              data["_releaseHtml5Audio"](PL$16);
            } catch (_0xf47893) {
              /** @type {boolean} */
              data["noAudio"] = true;
            }
          }
          /** @type {number} */
          i = 0;
          for (; i < data["_howls"]["length"]; i++) {
            if (!data["_howls"][i]["_webAudio"]) {
              PL$16 = data["_howls"][i]["_getSoundIds"]();
              /** @type {number} */
              var PL$17 = 0;
              for (; PL$17 < PL$16["length"]; PL$17++) {
                var config = data["_howls"][i]["_soundById"](PL$16[PL$17]);
                if (config && config["_node"] && !config["_node"]["_unlocked"]) {
                  /** @type {boolean} */
                  config["_node"]["_unlocked"] = true;
                  config["_node"]["load"]();
                }
              }
            }
          }
          data["_autoResume"]();
          if (!data["ctx"]) {
            init();
          }
          var args = data["ctx"]["createBufferSource"]();
          args["buffer"] = data["_scratchBuffer"];
          args["connect"](data["ctx"]["destination"]);
          if ("undefined" === typeof args["start"]) {
            args["noteOn"](0);
          } else {
            args["start"](0);
          }
          if ("function" === typeof data["ctx"]["resume"]) {
            data["ctx"]["resume"]();
          }
          /**
           * @return {undefined}
           */
          args["onended"] = function() {
            args["disconnect"](0);
            /** @type {boolean} */
            data["_audioUnlocked"] = true;
            document["removeEventListener"]("touchstart", init, true);
            document["removeEventListener"]("touchend", init, true);
            document["removeEventListener"]("click", init, true);
            /** @type {number} */
            var i = 0;
            for (; i < data["_howls"]["length"]; i++) {
              data["_howls"][i]["_emit"]("unlock");
            }
          };
        };
        document["addEventListener"]("touchstart", init, true);
        document["addEventListener"]("touchend", init, true);
        document["addEventListener"]("click", init, true);
        return data;
      }
    },
    "_obtainHtml5Audio" : function() {
      var res = this || obj;
      if (res["_html5AudioPool"]["length"]) {
        return res["_html5AudioPool"]["pop"]();
      }
      if ((res = (new Audio)["play"]()) && "undefined" !== typeof Promise && (res instanceof Promise || "function" === typeof res["then"])) {
        res["catch"](function() {
          console["warn"]("HTML5 Audio pool exhausted, returning potentially locked audio object.");
        });
      }
      return new Audio;
    },
    "_releaseHtml5Audio" : function(PL$60) {
      var delay = this || obj;
      if (PL$60["_unlocked"]) {
        delay["_html5AudioPool"]["push"](PL$60);
      }
      return delay;
    },
    "_autoSuspend" : function() {
      var self = this;
      if (self["autoSuspend"] && self["ctx"] && "undefined" !== typeof self["ctx"]["suspend"] && obj["usingWebAudio"]) {
        /** @type {number} */
        var i = 0;
        for (; i < self["_howls"]["length"]; i++) {
          if (self["_howls"][i]["_webAudio"]) {
            /** @type {number} */
            var PL$17 = 0;
            for (; PL$17 < self["_howls"][i]["_sounds"]["length"]; PL$17++) {
              if (!self["_howls"][i]["_sounds"][PL$17]["_paused"]) {
                return self;
              }
            }
          }
        }
        if (self["_suspendTimer"]) {
          clearTimeout(self["_suspendTimer"]);
        }
        /** @type {number} */
        self["_suspendTimer"] = setTimeout(function() {
          if (self["autoSuspend"]) {
            /** @type {null} */
            self["_suspendTimer"] = null;
            /** @type {string} */
            self["state"] = "suspending";
            self["ctx"]["suspend"]()["then"](function() {
              /** @type {string} */
              self["state"] = "suspended";
              if (self["_resumeAfterSuspend"]) {
                delete self["_resumeAfterSuspend"];
                self["_autoResume"]();
              }
            });
          }
        }, 3E4);
        return self;
      }
    },
    "_autoResume" : function() {
      var data = this;
      if (data["ctx"] && "undefined" !== typeof data["ctx"]["resume"] && obj["usingWebAudio"]) {
        return "running" === data["state"] && data["_suspendTimer"] ? (clearTimeout(data["_suspendTimer"]), data["_suspendTimer"] = null) : "suspended" === data["state"] ? (data["ctx"]["resume"]()["then"](function() {
          /** @type {string} */
          data["state"] = "running";
          /** @type {number} */
          var i = 0;
          for (; i < data["_howls"]["length"]; i++) {
            data["_howls"][i]["_emit"]("resume");
          }
        }), data["_suspendTimer"] && (clearTimeout(data["_suspendTimer"]), data["_suspendTimer"] = null)) : "suspending" === data["state"] && (data["_resumeAfterSuspend"] = true), data;
      }
    }
  };
  var obj = new Task;
  /**
   * @param {!Object} res
   * @return {undefined}
   */
  var fn = function(res) {
    if (!res["src"] || 0 === res["src"]["length"]) {
      console["error"]("An array of source files must be passed with any new Howl.");
    } else {
      this["init"](res);
    }
  };
  fn["prototype"] = {
    "init" : function(self) {
      var audio = this;
      if (!obj["ctx"]) {
        init();
      }
      audio["_autoplay"] = self["autoplay"] || false;
      audio["_format"] = "string" !== typeof self["format"] ? self["format"] : [self["format"]];
      audio["_html5"] = self["html5"] || false;
      audio["_muted"] = self["mute"] || false;
      audio["_loop"] = self["loop"] || false;
      audio["_pool"] = self["pool"] || 5;
      audio["_preload"] = "boolean" === typeof self["preload"] ? self["preload"] : true;
      audio["_rate"] = self["rate"] || 1;
      audio["_sprite"] = self["sprite"] || {};
      audio["_src"] = "string" !== typeof self["src"] ? self["src"] : [self["src"]];
      audio["_volume"] = void 0 !== self["volume"] ? self["volume"] : 1;
      audio["_xhrWithCredentials"] = self["xhrWithCredentials"] || false;
      /** @type {number} */
      audio["_duration"] = 0;
      /** @type {string} */
      audio["_state"] = "unloaded";
      /** @type {!Array} */
      audio["_sounds"] = [];
      audio["_endTimers"] = {};
      /** @type {!Array} */
      audio["_queue"] = [];
      /** @type {boolean} */
      audio["_playLock"] = false;
      /** @type {!Array} */
      audio["_onend"] = self["onend"] ? [{
        "fn" : self["onend"]
      }] : [];
      /** @type {!Array} */
      audio["_onfade"] = self["onfade"] ? [{
        "fn" : self["onfade"]
      }] : [];
      /** @type {!Array} */
      audio["_onload"] = self["onload"] ? [{
        "fn" : self["onload"]
      }] : [];
      /** @type {!Array} */
      audio["_onloaderror"] = self["onloaderror"] ? [{
        "fn" : self["onloaderror"]
      }] : [];
      /** @type {!Array} */
      audio["_onplayerror"] = self["onplayerror"] ? [{
        "fn" : self["onplayerror"]
      }] : [];
      /** @type {!Array} */
      audio["_onpause"] = self["onpause"] ? [{
        "fn" : self["onpause"]
      }] : [];
      /** @type {!Array} */
      audio["_onplay"] = self["onplay"] ? [{
        "fn" : self["onplay"]
      }] : [];
      /** @type {!Array} */
      audio["_onstop"] = self["onstop"] ? [{
        "fn" : self["onstop"]
      }] : [];
      /** @type {!Array} */
      audio["_onmute"] = self["onmute"] ? [{
        "fn" : self["onmute"]
      }] : [];
      /** @type {!Array} */
      audio["_onvolume"] = self["onvolume"] ? [{
        "fn" : self["onvolume"]
      }] : [];
      /** @type {!Array} */
      audio["_onrate"] = self["onrate"] ? [{
        "fn" : self["onrate"]
      }] : [];
      /** @type {!Array} */
      audio["_onseek"] = self["onseek"] ? [{
        "fn" : self["onseek"]
      }] : [];
      /** @type {!Array} */
      audio["_onunlock"] = self["onunlock"] ? [{
        "fn" : self["onunlock"]
      }] : [];
      /** @type {!Array} */
      audio["_onresume"] = [];
      audio["_webAudio"] = obj["usingWebAudio"] && !audio["_html5"];
      if ("undefined" !== typeof obj["ctx"] && obj["ctx"] && obj["autoUnlock"]) {
        obj["_unlockAudio"]();
      }
      obj["_howls"]["push"](audio);
      if (audio["_autoplay"]) {
        audio["_queue"]["push"]({
          "event" : "play",
          "action" : function() {
            audio["play"]();
          }
        });
      }
      if (audio["_preload"]) {
        audio["load"]();
      }
      return audio;
    },
    "load" : function() {
      /** @type {null} */
      var result = null;
      if (obj["noAudio"]) {
        this["_emit"]("loaderror", null, "No audio support.");
      } else {
        if ("string" === typeof this["_src"]) {
          /** @type {!Array} */
          this["_src"] = [this["_src"]];
        }
        /** @type {number} */
        var t = 0;
        for (; t < this["_src"]["length"]; t++) {
          var i;
          var key;
          if (this["_format"] && this["_format"][t]) {
            i = this["_format"][t];
          } else {
            key = this["_src"][t];
            if ("string" !== typeof key) {
              this["_emit"]("loaderror", null, "Non-string found in selected audio sources - ignoring.");
              continue;
            }
            if (!(i = /^data:audio\/([^;,]+);/i["exec"](key))) {
              i = /\.([^.]+)$/["exec"](key["split"]("?", 1)[0]);
            }
            if (i) {
              i = i[1]["toLowerCase"]();
            }
          }
          if (!i) {
            console["warn"]('No file extension was found. Consider using the "format" property or specify an extension.');
          }
          if (i && obj["codecs"](i)) {
            result = this["_src"][t];
            break;
          }
        }
        if (result) {
          this["_src"] = result;
          /** @type {string} */
          this["_state"] = "loading";
          if ("https:" === window["location"]["protocol"] && "http:" === result["slice"](0, 5)) {
            /** @type {boolean} */
            this["_html5"] = true;
            /** @type {boolean} */
            this["_webAudio"] = false;
          }
          new Model(this);
          if (this["_webAudio"]) {
            var args = this;
            var url = args["_src"];
            if (data[url]) {
              args["_duration"] = data[url]["duration"];
              next(args);
            } else {
              if (/^data:[^;]+;base64,/["test"](url)) {
                /** @type {string} */
                result = atob(url["split"](",")[1]);
                /** @type {!Uint8Array} */
                t = new Uint8Array(result["length"]);
                /** @type {number} */
                i = 0;
                for (; i < result["length"]; ++i) {
                  t[i] = result["charCodeAt"](i);
                }
                callback(t["buffer"], args);
              } else {
                /** @type {!XMLHttpRequest} */
                var xhr = new XMLHttpRequest;
                xhr["open"]("GET", url, true);
                xhr["withCredentials"] = args["_xhrWithCredentials"];
                /** @type {string} */
                xhr["responseType"] = "arraybuffer";
                /**
                 * @return {undefined}
                 */
                xhr["onload"] = function() {
                  var _0x27b0d3 = (xhr["status"] + "")[0];
                  if ("0" !== _0x27b0d3 && "2" !== _0x27b0d3 && "3" !== _0x27b0d3) {
                    args["_emit"]("loaderror", null, "Failed loading audio file with status: " + xhr["status"] + ".");
                  } else {
                    callback(xhr["response"], args);
                  }
                };
                /**
                 * @return {undefined}
                 */
                xhr["onerror"] = function() {
                  if (args["_webAudio"]) {
                    /** @type {boolean} */
                    args["_html5"] = true;
                    /** @type {boolean} */
                    args["_webAudio"] = false;
                    /** @type {!Array} */
                    args["_sounds"] = [];
                    delete data[url];
                    args["load"]();
                  }
                };
                try {
                  xhr["send"]();
                } catch (_0xf146ec) {
                  xhr["onerror"]();
                }
              }
            }
          }
          return this;
        }
        this["_emit"]("loaderror", null, "No codec support for selected audio sources.");
      }
    },
    "play" : function(key, internal) {
      var args = this;
      /** @type {null} */
      var init = null;
      if ("number" === typeof key) {
        /** @type {!Object} */
        init = key;
        /** @type {null} */
        key = null;
      } else {
        if ("string" === typeof key && "loaded" === args["_state"] && !args["_sprite"][key]) {
          return null;
        }
        if ("undefined" === typeof key && (key = "__default", !args["_playLock"])) {
          /** @type {number} */
          var _0x1cdbec = 0;
          /** @type {number} */
          var i = 0;
          for (; i < args["_sounds"]["length"]; i++) {
            if (args["_sounds"][i]["_paused"] && !args["_sounds"][i]["_ended"]) {
              _0x1cdbec++;
              init = args["_sounds"][i]["_id"];
            }
          }
          if (1 === _0x1cdbec) {
            /** @type {null} */
            key = null;
          } else {
            /** @type {null} */
            init = null;
          }
        }
      }
      var props = init ? args["_soundById"](init) : args["_inactiveSound"]();
      if (!props) {
        return null;
      }
      if (init && !key) {
        key = props["_sprite"] || "__default";
      }
      if ("loaded" !== args["_state"]) {
        /** @type {!Object} */
        props["_sprite"] = key;
        /** @type {boolean} */
        props["_ended"] = false;
        var item = props["_id"];
        args["_queue"]["push"]({
          "event" : "play",
          "action" : function() {
            args["play"](item);
          }
        });
        return item;
      }
      if (init && !props["_paused"]) {
        return internal || args["_loadQueue"]("play"), props["_id"];
      }
      if (args["_webAudio"]) {
        obj["_autoResume"]();
      }
      var offset = Math["max"](0, 0 < props["_seek"] ? props["_seek"] : args["_sprite"][key][0] / 1E3);
      var duration = Math["max"](0, (args["_sprite"][key][0] + args["_sprite"][key][1]) / 1E3 - offset);
      /** @type {number} */
      var ngiScroll_timeout = 1E3 * duration / Math["abs"](props["_rate"]);
      /** @type {number} */
      var RangeInverse = args["_sprite"][key][0] / 1E3;
      /** @type {number} */
      var vi = (args["_sprite"][key][0] + args["_sprite"][key][1]) / 1E3;
      /** @type {boolean} */
      var formFieldValue = !(!props["_loop"] && !args["_sprite"][key][2]);
      /** @type {!Object} */
      props["_sprite"] = key;
      /** @type {boolean} */
      props["_ended"] = false;
      /**
       * @return {undefined}
       */
      var start = function() {
        /** @type {boolean} */
        props["_paused"] = false;
        props["_seek"] = offset;
        /** @type {number} */
        props["_start"] = RangeInverse;
        /** @type {number} */
        props["_stop"] = vi;
        /** @type {boolean} */
        props["_loop"] = formFieldValue;
      };
      if (offset >= vi) {
        args["_ended"](props);
      } else {
        var self = props["_node"];
        if (args["_webAudio"]) {
          /**
           * @return {undefined}
           */
          init = function() {
            /** @type {boolean} */
            args["_playLock"] = false;
            start();
            args["_refreshBuffer"](props);
            self["gain"]["setValueAtTime"](props["_muted"] || args["_muted"] ? 0 : props["_volume"], obj["ctx"]["currentTime"]);
            props["_playStart"] = obj["ctx"]["currentTime"];
            if ("undefined" === typeof self["bufferSource"]["start"]) {
              if (props["_loop"]) {
                self["bufferSource"]["noteGrainOn"](0, offset, 86400);
              } else {
                self["bufferSource"]["noteGrainOn"](0, offset, duration);
              }
            } else {
              if (props["_loop"]) {
                self["bufferSource"]["start"](0, offset, 86400);
              } else {
                self["bufferSource"]["start"](0, offset, duration);
              }
            }
            if (Infinity !== ngiScroll_timeout) {
              /** @type {number} */
              args["_endTimers"][props["_id"]] = setTimeout(args["_ended"]["bind"](args, props), ngiScroll_timeout);
            }
            if (!internal) {
              setTimeout(function() {
                args["_emit"]("play", props["_id"]);
                args["_loadQueue"]();
              }, 0);
            }
          };
          if ("running" === obj["state"]) {
            init();
          } else {
            /** @type {boolean} */
            args["_playLock"] = true;
            args["once"]("resume", init);
            args["_clearTimer"](props["_id"]);
          }
        } else {
          /**
           * @return {undefined}
           */
          var play = function() {
            self["currentTime"] = offset;
            self["muted"] = props["_muted"] || args["_muted"] || obj["_muted"] || self["muted"];
            /** @type {number} */
            self["volume"] = props["_volume"] * obj["volume"]();
            self["playbackRate"] = props["_rate"];
            try {
              var value = self["play"]();
              if (value && "undefined" !== typeof Promise && (value instanceof Promise || "function" === typeof value["then"])) {
                /** @type {boolean} */
                args["_playLock"] = true;
                start();
                value["then"](function() {
                  /** @type {boolean} */
                  args["_playLock"] = false;
                  /** @type {boolean} */
                  self["_unlocked"] = true;
                  if (!internal) {
                    args["_emit"]("play", props["_id"]);
                    args["_loadQueue"]();
                  }
                })["catch"](function() {
                  /** @type {boolean} */
                  args["_playLock"] = false;
                  args["_emit"]("playerror", props["_id"], "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  /** @type {boolean} */
                  props["_ended"] = true;
                  /** @type {boolean} */
                  props["_paused"] = true;
                });
              } else {
                if (!internal) {
                  /** @type {boolean} */
                  args["_playLock"] = false;
                  start();
                  args["_emit"]("play", props["_id"]);
                  args["_loadQueue"]();
                }
              }
              self["playbackRate"] = props["_rate"];
              if (self["paused"]) {
                args["_emit"]("playerror", props["_id"], "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
              } else {
                if ("__default" !== key || props["_loop"]) {
                  /** @type {number} */
                  args["_endTimers"][props["_id"]] = setTimeout(args["_ended"]["bind"](args, props), ngiScroll_timeout);
                } else {
                  /**
                   * @return {undefined}
                   */
                  args["_endTimers"][props["_id"]] = function() {
                    args["_ended"](props);
                    self["removeEventListener"]("ended", args["_endTimers"][props["_id"]], false);
                  };
                  self["addEventListener"]("ended", args["_endTimers"][props["_id"]], false);
                }
              }
            } catch (data) {
              args["_emit"]("playerror", props["_id"], data);
            }
          };
          if ("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === self["src"]) {
            self["src"] = args["_src"];
            self["load"]();
          }
          init = window && window["ejecta"] || !self["readyState"] && obj["_navigator"]["isCocoonJS"];
          if (3 <= self["readyState"] || init) {
            play();
          } else {
            /** @type {boolean} */
            args["_playLock"] = true;
            /**
             * @return {undefined}
             */
            var cb = function() {
              play();
              self["removeEventListener"](obj["_canPlayEvent"], cb, false);
            };
            self["addEventListener"](obj["_canPlayEvent"], cb, false);
            args["_clearTimer"](props["_id"]);
          }
        }
        return props["_id"];
      }
    },
    "pause" : function(value, total) {
      var item = this;
      if ("loaded" !== item["_state"] || item["_playLock"]) {
        return item["_queue"]["push"]({
          "event" : "pause",
          "action" : function() {
            item["pause"](value);
          }
        }), item;
      }
      var next = item["_getSoundIds"](value);
      /** @type {number} */
      var i = 0;
      for (; i < next["length"]; i++) {
        item["_clearTimer"](next[i]);
        var data = item["_soundById"](next[i]);
        if (data && !data["_paused"] && (data["_seek"] = item["seek"](next[i]), data["_rateSeek"] = 0, data["_paused"] = true, item["_stopFade"](next[i]), data["_node"])) {
          if (item["_webAudio"]) {
            if (!data["_node"]["bufferSource"]) {
              continue;
            }
            if ("undefined" === typeof data["_node"]["bufferSource"]["stop"]) {
              data["_node"]["bufferSource"]["noteOff"](0);
            } else {
              data["_node"]["bufferSource"]["stop"](0);
            }
            item["_cleanBuffer"](data["_node"]);
          } else {
            if (!isNaN(data["_node"]["duration"]) || Infinity === data["_node"]["duration"]) {
              data["_node"]["pause"]();
            }
          }
        }
        if (!total) {
          item["_emit"]("pause", data ? data["_id"] : null);
        }
      }
      return item;
    },
    "stop" : function(e, force) {
      var self = this;
      if ("loaded" !== self["_state"] || self["_playLock"]) {
        return self["_queue"]["push"]({
          "event" : "stop",
          "action" : function() {
            self["stop"](e);
          }
        }), self;
      }
      var PL$13 = self["_getSoundIds"](e);
      /** @type {number} */
      var PL$17 = 0;
      for (; PL$17 < PL$13["length"]; PL$17++) {
        self["_clearTimer"](PL$13[PL$17]);
        var params = self["_soundById"](PL$13[PL$17]);
        if (params) {
          params["_seek"] = params["_start"] || 0;
          /** @type {number} */
          params["_rateSeek"] = 0;
          /** @type {boolean} */
          params["_paused"] = true;
          /** @type {boolean} */
          params["_ended"] = true;
          self["_stopFade"](PL$13[PL$17]);
          if (params["_node"]) {
            if (self["_webAudio"]) {
              if (params["_node"]["bufferSource"]) {
                if ("undefined" === typeof params["_node"]["bufferSource"]["stop"]) {
                  params["_node"]["bufferSource"]["noteOff"](0);
                } else {
                  params["_node"]["bufferSource"]["stop"](0);
                }
                self["_cleanBuffer"](params["_node"]);
              }
            } else {
              if (!isNaN(params["_node"]["duration"]) || Infinity === params["_node"]["duration"]) {
                params["_node"]["currentTime"] = params["_start"] || 0;
                params["_node"]["pause"]();
                if (Infinity === params["_node"]["duration"]) {
                  self["_clearSound"](params["_node"]);
                }
              }
            }
          }
          if (!force) {
            self["_emit"]("stop", params["_id"]);
          }
        }
      }
      return self;
    },
    "mute" : function(value, cb) {
      var self = this;
      if ("loaded" !== self["_state"] || self["_playLock"]) {
        return self["_queue"]["push"]({
          "event" : "mute",
          "action" : function() {
            self["mute"](value, cb);
          }
        }), self;
      }
      if ("undefined" === typeof cb) {
        if ("boolean" === typeof value) {
          /** @type {boolean} */
          self["_muted"] = value;
        } else {
          return self["_muted"];
        }
      }
      var args = self["_getSoundIds"](cb);
      /** @type {number} */
      var i = 0;
      for (; i < args["length"]; i++) {
        var params = self["_soundById"](args[i]);
        if (params) {
          /** @type {boolean} */
          params["_muted"] = value;
          if (params["_interval"]) {
            self["_stopFade"](params["_id"]);
          }
          if (self["_webAudio"] && params["_node"]) {
            params["_node"]["gain"]["setValueAtTime"](value ? 0 : params["_volume"], obj["ctx"]["currentTime"]);
          } else {
            if (params["_node"]) {
              params["_node"]["muted"] = obj["_muted"] ? true : value;
            }
          }
          self["_emit"]("mute", params["_id"]);
        }
      }
      return self;
    },
    "volume" : function() {
      var self = this;
      /** @type {!Arguments} */
      var x = arguments;
      var val;
      var args;
      if (0 === x["length"]) {
        return self["_volume"];
      }
      if (1 === x["length"] || 2 === x["length"] && "undefined" === typeof x[1]) {
        if (0 <= self["_getSoundIds"]()["indexOf"](x[0])) {
          /** @type {number} */
          args = parseInt(x[0], 10);
        } else {
          /** @type {number} */
          val = parseFloat(x[0]);
        }
      } else {
        if (2 <= x["length"]) {
          /** @type {number} */
          val = parseFloat(x[0]);
          /** @type {number} */
          args = parseInt(x[1], 10);
        }
      }
      var params;
      if ("undefined" !== typeof val && 0 <= val && 1 >= val) {
        if ("loaded" !== self["_state"] || self["_playLock"]) {
          return self["_queue"]["push"]({
            "event" : "volume",
            "action" : function() {
              self["volume"]["apply"](self, x);
            }
          }), self;
        }
        if ("undefined" === typeof args) {
          self["_volume"] = val;
        }
        args = self["_getSoundIds"](args);
        /** @type {number} */
        var i = 0;
        for (; i < args["length"]; i++) {
          if (params = self["_soundById"](args[i])) {
            params["_volume"] = val;
            if (!x[2]) {
              self["_stopFade"](args[i]);
            }
            if (self["_webAudio"] && params["_node"] && !params["_muted"]) {
              params["_node"]["gain"]["setValueAtTime"](val, obj["ctx"]["currentTime"]);
            } else {
              if (params["_node"] && !params["_muted"]) {
                /** @type {number} */
                params["_node"]["volume"] = val * obj["volume"]();
              }
            }
            self["_emit"]("volume", params["_id"]);
          }
        }
      } else {
        return (params = args ? self["_soundById"](args) : self["_sounds"][0]) ? params["_volume"] : 0;
      }
      return self;
    },
    "fade" : function(left, top, size, val) {
      var ctx = this;
      if ("loaded" !== ctx["_state"] || ctx["_playLock"]) {
        return ctx["_queue"]["push"]({
          "event" : "fade",
          "action" : function() {
            ctx["fade"](left, top, size, val);
          }
        }), ctx;
      }
      /** @type {number} */
      left = parseFloat(left);
      /** @type {number} */
      top = parseFloat(top);
      /** @type {number} */
      size = parseFloat(size);
      ctx["volume"](left, val);
      var p = ctx["_getSoundIds"](val);
      /** @type {number} */
      var i = 0;
      for (; i < p["length"]; i++) {
        var _left = ctx["_soundById"](p[i]);
        if (_left) {
          if (!val) {
            ctx["_stopFade"](p[i]);
          }
          if (ctx["_webAudio"] && !_left["_muted"]) {
            var offset = obj["ctx"]["currentTime"];
            var frameDataOffset = offset + size / 1E3;
            /** @type {number} */
            _left["_volume"] = left;
            _left["_node"]["gain"]["setValueAtTime"](left, offset);
            _left["_node"]["gain"]["linearRampToValueAtTime"](top, frameDataOffset);
          }
          ctx["_startFadeInterval"](_left, left, top, size, p[i], "undefined" === typeof val);
        }
      }
      return ctx;
    },
    "_startFadeInterval" : function(obj, from, to, start, end, maxGroupNum) {
      var localStorage = this;
      /** @type {number} */
      var vol = from;
      /** @type {number} */
      var diff = to - from;
      end = Math["abs"](diff / 0.01);
      end = Math["max"](4, 0 < end ? start / end : start);
      var leftStart = Date["now"]();
      /** @type {number} */
      obj["_fadeTo"] = to;
      /** @type {number} */
      obj["_interval"] = setInterval(function() {
        /** @type {number} */
        var p = (Date["now"]() - leftStart) / start;
        leftStart = Date["now"]();
        vol = vol + diff * p;
        vol = Math["max"](0, vol);
        vol = Math["min"](1, vol);
        /** @type {number} */
        vol = Math["round"](100 * vol) / 100;
        if (localStorage["_webAudio"]) {
          /** @type {number} */
          obj["_volume"] = vol;
        } else {
          localStorage["volume"](vol, obj["_id"], true);
        }
        if (maxGroupNum) {
          /** @type {number} */
          localStorage["_volume"] = vol;
        }
        if (to < from && vol <= to || to > from && vol >= to) {
          clearInterval(obj["_interval"]);
          /** @type {null} */
          obj["_interval"] = null;
          /** @type {null} */
          obj["_fadeTo"] = null;
          localStorage["volume"](to, obj["_id"]);
          localStorage["_emit"]("fade", obj["_id"]);
        }
      }, end);
    },
    "_stopFade" : function(lines) {
      var intervals = this["_soundById"](lines);
      if (intervals && intervals["_interval"]) {
        if (this["_webAudio"]) {
          intervals["_node"]["gain"]["cancelScheduledValues"](obj["ctx"]["currentTime"]);
        }
        clearInterval(intervals["_interval"]);
        /** @type {null} */
        intervals["_interval"] = null;
        this["volume"](intervals["_fadeTo"], lines);
        /** @type {null} */
        intervals["_fadeTo"] = null;
        this["_emit"]("fade", lines);
      }
      return this;
    },
    "loop" : function() {
      /** @type {!Arguments} */
      var vals = arguments;
      var value;
      var PL$13;
      if (0 === vals["length"]) {
        return this["_loop"];
      }
      if (1 === vals["length"]) {
        if ("boolean" === typeof vals[0]) {
          this["_loop"] = value = vals[0];
        } else {
          return (vals = this["_soundById"](parseInt(vals[0], 10))) ? vals["_loop"] : false;
        }
      } else {
        if (2 === vals["length"]) {
          value = vals[0];
          /** @type {number} */
          PL$13 = parseInt(vals[1], 10);
        }
      }
      PL$13 = this["_getSoundIds"](PL$13);
      /** @type {number} */
      var PL$17 = 0;
      for (; PL$17 < PL$13["length"]; PL$17++) {
        if (vals = this["_soundById"](PL$13[PL$17])) {
          if (vals["_loop"] = value, this["_webAudio"] && vals["_node"] && vals["_node"]["bufferSource"] && (vals["_node"]["bufferSource"]["loop"] = value)) {
            vals["_node"]["bufferSource"]["loopStart"] = vals["_start"] || 0;
            vals["_node"]["bufferSource"]["loopEnd"] = vals["_stop"];
          }
        }
      }
      return this;
    },
    "rate" : function() {
      var self = this;
      /** @type {!Arguments} */
      var x = arguments;
      var value;
      var args;
      if (0 === x["length"]) {
        args = self["_sounds"][0]["_id"];
      } else {
        if (1 === x["length"]) {
          if (0 <= self["_getSoundIds"]()["indexOf"](x[0])) {
            /** @type {number} */
            args = parseInt(x[0], 10);
          } else {
            /** @type {number} */
            value = parseFloat(x[0]);
          }
        } else {
          if (2 === x["length"]) {
            /** @type {number} */
            value = parseFloat(x[0]);
            /** @type {number} */
            args = parseInt(x[1], 10);
          }
        }
      }
      var params;
      if ("number" === typeof value) {
        if ("loaded" !== self["_state"] || self["_playLock"]) {
          return self["_queue"]["push"]({
            "event" : "rate",
            "action" : function() {
              self["rate"]["apply"](self, x);
            }
          }), self;
        }
        if ("undefined" === typeof args) {
          self["_rate"] = value;
        }
        args = self["_getSoundIds"](args);
        /** @type {number} */
        var i = 0;
        for (; i < args["length"]; i++) {
          if (params = self["_soundById"](args[i])) {
            if (self["playing"](args[i])) {
              params["_rateSeek"] = self["seek"](args[i]);
              params["_playStart"] = self["_webAudio"] ? obj["ctx"]["currentTime"] : params["_playStart"];
            }
            params["_rate"] = value;
            if (self["_webAudio"] && params["_node"] && params["_node"]["bufferSource"]) {
              params["_node"]["bufferSource"]["playbackRate"]["setValueAtTime"](value, obj["ctx"]["currentTime"]);
            } else {
              if (params["_node"]) {
                params["_node"]["playbackRate"] = value;
              }
            }
            var ngiScroll_timeout = self["seek"](args[i]);
            /** @type {number} */
            ngiScroll_timeout = 1E3 * ((self["_sprite"][params["_sprite"]][0] + self["_sprite"][params["_sprite"]][1]) / 1E3 - ngiScroll_timeout) / Math["abs"](params["_rate"]);
            if (self["_endTimers"][args[i]] || !params["_paused"]) {
              self["_clearTimer"](args[i]);
              /** @type {number} */
              self["_endTimers"][args[i]] = setTimeout(self["_ended"]["bind"](self, params), ngiScroll_timeout);
            }
            self["_emit"]("rate", params["_id"]);
          }
        }
      } else {
        return (params = self["_soundById"](args)) ? params["_rate"] : self["_rate"];
      }
      return self;
    },
    "seek" : function() {
      var PL$34 = this;
      /** @type {!Arguments} */
      var b = arguments;
      var x;
      var pid;
      if (0 === b["length"]) {
        pid = PL$34["_sounds"][0]["_id"];
      } else {
        if (1 === b["length"]) {
          if (0 <= PL$34["_getSoundIds"]()["indexOf"](b[0])) {
            /** @type {number} */
            pid = parseInt(b[0], 10);
          } else {
            if (PL$34["_sounds"]["length"]) {
              pid = PL$34["_sounds"][0]["_id"];
              /** @type {number} */
              x = parseFloat(b[0]);
            }
          }
        } else {
          if (2 === b["length"]) {
            /** @type {number} */
            x = parseFloat(b[0]);
            /** @type {number} */
            pid = parseInt(b[1], 10);
          }
        }
      }
      if ("undefined" === typeof pid) {
        return PL$34;
      }
      if ("loaded" !== PL$34["_state"] || PL$34["_playLock"]) {
        return PL$34["_queue"]["push"]({
          "event" : "seek",
          "action" : function() {
            PL$34["seek"]["apply"](PL$34, b);
          }
        }), PL$34;
      }
      var $$ = PL$34["_soundById"](pid);
      if ($$) {
        if ("number" === typeof x && 0 <= x) {
          var check = PL$34["playing"](pid);
          if (check) {
            PL$34["pause"](pid, true);
          }
          $$["_seek"] = x;
          /** @type {boolean} */
          $$["_ended"] = false;
          PL$34["_clearTimer"](pid);
          if (!PL$34["_webAudio"] && $$["_node"] && !isNaN($$["_node"]["duration"])) {
            $$["_node"]["currentTime"] = x;
          }
          /**
           * @return {undefined}
           */
          var reset = function() {
            PL$34["_emit"]("seek", pid);
            if (check) {
              PL$34["play"](pid, true);
            }
          };
          if (check && !PL$34["_webAudio"]) {
            /**
             * @return {undefined}
             */
            var cb = function() {
              if (PL$34["_playLock"]) {
                setTimeout(cb, 0);
              } else {
                reset();
              }
            };
            setTimeout(cb, 0);
          } else {
            reset();
          }
        } else {
          return PL$34["_webAudio"] ? (x = PL$34["playing"](pid) ? obj["ctx"]["currentTime"] - $$["_playStart"] : 0, $$["_seek"] + (($$["_rateSeek"] ? $$["_rateSeek"] - $$["_seek"] : 0) + x * Math["abs"]($$["_rate"]))) : $$["_node"]["currentTime"];
        }
      }
      return PL$34;
    },
    "playing" : function(id) {
      if ("number" === typeof id) {
        return (id = this["_soundById"](id)) ? !id["_paused"] : false;
      }
      /** @type {number} */
      id = 0;
      for (; id < this["_sounds"]["length"]; id++) {
        if (!this["_sounds"][id]["_paused"]) {
          return true;
        }
      }
      return false;
    },
    "duration" : function(basis) {
      var time = this["_duration"];
      if (basis = this["_soundById"](basis)) {
        /** @type {number} */
        time = this["_sprite"][basis["_sprite"]][1] / 1E3;
      }
      return time;
    },
    "state" : function() {
      return this["_state"];
    },
    "unload" : function() {
      var json = this["_sounds"];
      /** @type {number} */
      var i = 0;
      for (; i < json["length"]; i++) {
        if (!json[i]["_paused"]) {
          this["stop"](json[i]["_id"]);
        }
        if (!this["_webAudio"]) {
          this["_clearSound"](json[i]["_node"]);
          json[i]["_node"]["removeEventListener"]("error", json[i]["_errorFn"], false);
          json[i]["_node"]["removeEventListener"](obj["_canPlayEvent"], json[i]["_loadFn"], false);
          obj["_releaseHtml5Audio"](json[i]["_node"]);
        }
        delete json[i]["_node"];
        this["_clearTimer"](json[i]["_id"]);
      }
      i = obj["_howls"]["indexOf"](this);
      if (0 <= i) {
        obj["_howls"]["splice"](i, 1);
      }
      /** @type {boolean} */
      json = true;
      /** @type {number} */
      i = 0;
      for (; i < obj["_howls"]["length"]; i++) {
        if (obj["_howls"][i]["_src"] === this["_src"] || 0 <= this["_src"]["indexOf"](obj["_howls"][i]["_src"])) {
          /** @type {boolean} */
          json = false;
          break;
        }
      }
      if (data && json) {
        delete data[this["_src"]];
      }
      /** @type {boolean} */
      obj["noAudio"] = false;
      /** @type {string} */
      this["_state"] = "unloaded";
      /** @type {!Array} */
      this["_sounds"] = [];
      return null;
    },
    "on" : function(event, callback, id, once) {
      event = this["_on" + event];
      if ("function" === typeof callback) {
        event["push"](once ? {
          "id" : id,
          "fn" : callback,
          "once" : once
        } : {
          "id" : id,
          "fn" : callback
        });
      }
      return this;
    },
    "off" : function(event, target, elem) {
      var params = this["_on" + event];
      /** @type {number} */
      var i = 0;
      if ("number" === typeof target) {
        /** @type {!Object} */
        elem = target;
        /** @type {null} */
        target = null;
      }
      if (target || elem) {
        /** @type {number} */
        i = 0;
        for (; i < params["length"]; i++) {
          if (event = elem === params[i]["id"], target === params[i]["fn"] && event || !target && event) {
            params["splice"](i, 1);
            break;
          }
        }
      } else {
        if (event) {
          /** @type {!Array} */
          this["_on" + event] = [];
        } else {
          target = Object["keys"](this);
          /** @type {number} */
          i = 0;
          for (; i < target["length"]; i++) {
            if (0 === target[i]["indexOf"]("_on") && Array["isArray"](this[target[i]])) {
              /** @type {!Array} */
              this[target[i]] = [];
            }
          }
        }
      }
      return this;
    },
    "once" : function(eventType, eventName, callback) {
      this["on"](eventType, eventName, callback, 1);
      return this;
    },
    "_emit" : function(event, data, method) {
      var PL$13 = this["_on" + event];
      /** @type {number} */
      var type = PL$13["length"] - 1;
      for (; 0 <= type; type--) {
        if (!PL$13[type]["id"] || PL$13[type]["id"] === data || "load" === event) {
          setTimeout(function(options) {
            options["call"](this, data, method);
          }["bind"](this, PL$13[type]["fn"]), 0);
          if (PL$13[type]["once"]) {
            this["off"](event, PL$13[type]["fn"], PL$13[type]["id"]);
          }
        }
      }
      this["_loadQueue"](event);
      return this;
    },
    "_loadQueue" : function(undefined) {
      if (0 < this["_queue"]["length"]) {
        var details = this["_queue"][0];
        if (details["event"] === undefined) {
          this["_queue"]["shift"]();
          this["_loadQueue"]();
        }
        if (!undefined) {
          details["action"]();
        }
      }
      return this;
    },
    "_ended" : function(args) {
      var initArg = args["_sprite"];
      if (!this["_webAudio"] && args["_node"] && !args["_node"]["paused"] && !args["_node"]["ended"] && args["_node"]["currentTime"] < args["_stop"]) {
        return setTimeout(this["_ended"]["bind"](this, args), 100), this;
      }
      /** @type {boolean} */
      initArg = !(!args["_loop"] && !this["_sprite"][initArg][2]);
      this["_emit"]("end", args["_id"]);
      if (!this["_webAudio"] && initArg) {
        this["stop"](args["_id"], true)["play"](args["_id"]);
      }
      if (this["_webAudio"] && initArg) {
        this["_emit"]("play", args["_id"]);
        args["_seek"] = args["_start"] || 0;
        /** @type {number} */
        args["_rateSeek"] = 0;
        args["_playStart"] = obj["ctx"]["currentTime"];
        /** @type {number} */
        var ngiScroll_timeout = 1E3 * (args["_stop"] - args["_start"]) / Math["abs"](args["_rate"]);
        /** @type {number} */
        this["_endTimers"][args["_id"]] = setTimeout(this["_ended"]["bind"](this, args), ngiScroll_timeout);
      }
      if (this["_webAudio"] && !initArg) {
        /** @type {boolean} */
        args["_paused"] = true;
        /** @type {boolean} */
        args["_ended"] = true;
        args["_seek"] = args["_start"] || 0;
        /** @type {number} */
        args["_rateSeek"] = 0;
        this["_clearTimer"](args["_id"]);
        this["_cleanBuffer"](args["_node"]);
        obj["_autoSuspend"]();
      }
      if (!this["_webAudio"] && !initArg) {
        this["stop"](args["_id"], true);
      }
      return this;
    },
    "_clearTimer" : function(id) {
      if (this["_endTimers"][id]) {
        if ("function" !== typeof this["_endTimers"][id]) {
          clearTimeout(this["_endTimers"][id]);
        } else {
          var clone = this["_soundById"](id);
          if (clone && clone["_node"]) {
            clone["_node"]["removeEventListener"]("ended", this["_endTimers"][id], false);
          }
        }
        delete this["_endTimers"][id];
      }
      return this;
    },
    "_soundById" : function(id) {
      /** @type {number} */
      var i = 0;
      for (; i < this["_sounds"]["length"]; i++) {
        if (id === this["_sounds"][i]["_id"]) {
          return this["_sounds"][i];
        }
      }
      return null;
    },
    "_inactiveSound" : function() {
      this["_drain"]();
      /** @type {number} */
      var i = 0;
      for (; i < this["_sounds"]["length"]; i++) {
        if (this["_sounds"][i]["_ended"]) {
          return this["_sounds"][i]["reset"]();
        }
      }
      return new Model(this);
    },
    "_drain" : function() {
      var threshold = this["_pool"];
      /** @type {number} */
      var segmentDlTime = 0;
      /** @type {number} */
      var i = 0;
      if (!(this["_sounds"]["length"] < threshold)) {
        /** @type {number} */
        i = 0;
        for (; i < this["_sounds"]["length"]; i++) {
          if (this["_sounds"][i]["_ended"]) {
            segmentDlTime++;
          }
        }
        /** @type {number} */
        i = this["_sounds"]["length"] - 1;
        for (; 0 <= i && !(segmentDlTime <= threshold); i--) {
          if (this["_sounds"][i]["_ended"]) {
            if (this["_webAudio"] && this["_sounds"][i]["_node"]) {
              this["_sounds"][i]["_node"]["disconnect"](0);
            }
            this["_sounds"]["splice"](i, 1);
            segmentDlTime--;
          }
        }
      }
    },
    "_getSoundIds" : function(value) {
      if ("undefined" === typeof value) {
        /** @type {!Array} */
        value = [];
        /** @type {number} */
        var i = 0;
        for (; i < this["_sounds"]["length"]; i++) {
          value["push"](this["_sounds"][i]["_id"]);
        }
        return value;
      }
      return [value];
    },
    "_refreshBuffer" : function(PL$80) {
      if (!obj["ctx"]) {
        init();
      }
      PL$80["_node"]["bufferSource"] = obj["ctx"]["createBufferSource"]();
      PL$80["_node"]["bufferSource"]["buffer"] = data[this["_src"]];
      if (PL$80["_panner"]) {
        PL$80["_node"]["bufferSource"]["connect"](PL$80["_panner"]);
      } else {
        PL$80["_node"]["bufferSource"]["connect"](PL$80["_node"]);
      }
      if (PL$80["_node"]["bufferSource"]["loop"] = PL$80["_loop"]) {
        PL$80["_node"]["bufferSource"]["loopStart"] = PL$80["_start"] || 0;
        PL$80["_node"]["bufferSource"]["loopEnd"] = PL$80["_stop"] || 0;
      }
      PL$80["_node"]["bufferSource"]["playbackRate"]["setValueAtTime"](PL$80["_rate"], obj["ctx"]["currentTime"]);
      return this;
    },
    "_cleanBuffer" : function(listeners) {
      var _0x21271f = obj["_navigator"] && 0 <= obj["_navigator"]["vendor"]["indexOf"]("Apple");
      if (obj["_scratchBuffer"] && listeners["bufferSource"] && (listeners["bufferSource"]["onended"] = null, listeners["bufferSource"]["disconnect"](0), _0x21271f)) {
        try {
          listeners["bufferSource"]["buffer"] = obj["_scratchBuffer"];
        } catch (_0xef428) {
        }
      }
      /** @type {null} */
      listeners["bufferSource"] = null;
      return this;
    },
    "_clearSound" : function(interactives) {
      if (!/MSIE |Trident\//["test"](obj["_navigator"] && obj["_navigator"]["userAgent"])) {
        /** @type {string} */
        interactives["src"] = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
      }
    }
  };
  /**
   * @param {?} context
   * @return {undefined}
   */
  var Model = function(context) {
    this["_parent"] = context;
    this["init"]();
  };
  Model["prototype"] = {
    "init" : function() {
      var delay = this["_parent"];
      this["_muted"] = delay["_muted"];
      this["_loop"] = delay["_loop"];
      this["_volume"] = delay["_volume"];
      this["_rate"] = delay["_rate"];
      /** @type {number} */
      this["_seek"] = 0;
      /** @type {boolean} */
      this["_ended"] = this["_paused"] = true;
      /** @type {string} */
      this["_sprite"] = "__default";
      /** @type {number} */
      this["_id"] = ++obj["_counter"];
      delay["_sounds"]["push"](this);
      this["create"]();
      return this;
    },
    "create" : function() {
      var attrs = this["_parent"];
      var artistTrack = obj["_muted"] || this["_muted"] || this["_parent"]["_muted"] ? 0 : this["_volume"];
      if (attrs["_webAudio"]) {
        if (!obj["ctx"]) {
          init();
        }
        this["_node"] = "undefined" === typeof obj["ctx"]["createGain"] ? obj["ctx"]["createGainNode"]() : obj["ctx"]["createGain"]();
        this["_node"]["gain"]["setValueAtTime"](artistTrack, obj["ctx"]["currentTime"]);
        /** @type {boolean} */
        this["_node"]["paused"] = true;
        this["_node"]["connect"](obj["masterGain"]);
      } else {
        this["_node"] = obj["_obtainHtml5Audio"]();
        this["_errorFn"] = this["_errorListener"]["bind"](this);
        this["_node"]["addEventListener"]("error", this["_errorFn"], false);
        this["_loadFn"] = this["_loadListener"]["bind"](this);
        this["_node"]["addEventListener"](obj["_canPlayEvent"], this["_loadFn"], false);
        this["_node"]["src"] = attrs["_src"];
        /** @type {string} */
        this["_node"]["preload"] = "auto";
        /** @type {number} */
        this["_node"]["volume"] = artistTrack * obj["volume"]();
        this["_node"]["load"]();
      }
      return this;
    },
    "reset" : function() {
      var _0x596330 = this["_parent"];
      this["_muted"] = _0x596330["_muted"];
      this["_loop"] = _0x596330["_loop"];
      this["_volume"] = _0x596330["_volume"];
      this["_rate"] = _0x596330["_rate"];
      /** @type {number} */
      this["_rateSeek"] = this["_seek"] = 0;
      /** @type {boolean} */
      this["_ended"] = this["_paused"] = true;
      /** @type {string} */
      this["_sprite"] = "__default";
      /** @type {number} */
      this["_id"] = ++obj["_counter"];
      return this;
    },
    "_errorListener" : function() {
      this["_parent"]["_emit"]("loaderror", this["_id"], this["_node"]["error"] ? this["_node"]["error"]["code"] : 0);
      this["_node"]["removeEventListener"]("error", this["_errorFn"], false);
    },
    "_loadListener" : function() {
      var self = this["_parent"];
      /** @type {number} */
      self["_duration"] = Math["ceil"](10 * this["_node"]["duration"]) / 10;
      if (0 === Object["keys"](self["_sprite"])["length"]) {
        self["_sprite"] = {
          "__default" : [0, 1E3 * self["_duration"]]
        };
      }
      if ("loaded" !== self["_state"]) {
        /** @type {string} */
        self["_state"] = "loaded";
        self["_emit"]("load");
        self["_loadQueue"]();
      }
      this["_node"]["removeEventListener"](obj["_canPlayEvent"], this["_loadFn"], false);
    }
  };
  var data = {};
  /**
   * @param {number} event
   * @param {!Object} path
   * @return {undefined}
   */
  var callback = function(event, path) {
    /**
     * @return {undefined}
     */
    var complete = function() {
      path["_emit"]("loaderror", null, "Decoding audio data failed.");
    };
    /**
     * @param {!Object} lang
     * @return {undefined}
     */
    var callback = function(lang) {
      if (lang && 0 < path["_sounds"]["length"]) {
        /** @type {!Object} */
        data[path["_src"]] = lang;
        next(path, lang);
      } else {
        complete();
      }
    };
    if ("undefined" !== typeof Promise && 1 === obj["ctx"]["decodeAudioData"]["length"]) {
      obj["ctx"]["decodeAudioData"](event)["then"](callback)["catch"](complete);
    } else {
      obj["ctx"]["decodeAudioData"](event, callback, complete);
    }
  };
  /**
   * @param {!Object} item
   * @param {!Object} data
   * @return {undefined}
   */
  var next = function(item, data) {
    if (data && !item["_duration"]) {
      item["_duration"] = data["duration"];
    }
    if (0 === Object["keys"](item["_sprite"])["length"]) {
      item["_sprite"] = {
        "__default" : [0, 1E3 * item["_duration"]]
      };
    }
    if ("loaded" !== item["_state"]) {
      /** @type {string} */
      item["_state"] = "loaded";
      item["_emit"]("load");
      item["_loadQueue"]();
    }
  };
  /**
   * @return {undefined}
   */
  var init = function() {
    if (obj["usingWebAudio"]) {
      try {
        if ("undefined" !== typeof AudioContext) {
          /** @type {!AudioContext} */
          obj["ctx"] = new AudioContext;
        } else {
          if ("undefined" !== typeof webkitAudioContext) {
            /** @type {!webkitAudioContext} */
            obj["ctx"] = new webkitAudioContext;
          } else {
            /** @type {boolean} */
            obj["usingWebAudio"] = false;
          }
        }
      } catch (_0x2b8e9d) {
        /** @type {boolean} */
        obj["usingWebAudio"] = false;
      }
      if (!obj["ctx"]) {
        /** @type {boolean} */
        obj["usingWebAudio"] = false;
      }
      var startDate = /iP(hone|od|ad)/["test"](obj["_navigator"] && obj["_navigator"]["platform"]);
      var endDate = obj["_navigator"] && obj["_navigator"]["appVersion"]["match"](/OS (\d+)_(\d+)_?(\d+)?/);
      /** @type {(null|number)} */
      endDate = endDate ? parseInt(endDate[1], 10) : null;
      if (startDate && endDate && 9 > endDate && (startDate = /safari/["test"](obj["_navigator"] && obj["_navigator"]["userAgent"]["toLowerCase"]()), obj["_navigator"] && obj["_navigator"]["standalone"] && !startDate || obj["_navigator"] && !obj["_navigator"]["standalone"] && !startDate)) {
        /** @type {boolean} */
        obj["usingWebAudio"] = false;
      }
      if (obj["usingWebAudio"]) {
        obj["masterGain"] = "undefined" === typeof obj["ctx"]["createGain"] ? obj["ctx"]["createGainNode"]() : obj["ctx"]["createGain"]();
        obj["masterGain"]["gain"]["setValueAtTime"](obj["_muted"] ? 0 : 1, obj["ctx"]["currentTime"]);
        obj["masterGain"]["connect"](obj["ctx"]["destination"]);
      }
      obj["_setup"]();
    }
  };
  if ("function" === typeof define && define["amd"]) {
    define([], function() {
      return {
        "Howler" : obj,
        "Howl" : fn
      };
    });
  }
  if ("undefined" !== typeof exports) {
    exports["Howler"] = obj;
    /** @type {function(!Object): undefined} */
    exports["Howl"] = fn;
  }
  if ("undefined" !== typeof window) {
    /** @type {function(): undefined} */
    window["HowlerGlobal"] = Task;
    window["Howler"] = obj;
    /** @type {function(!Object): undefined} */
    window["Howl"] = fn;
    /** @type {function(?): undefined} */
    window["Sound"] = Model;
  } else {
    if ("undefined" !== typeof global) {
      /** @type {function(): undefined} */
      global["HowlerGlobal"] = Task;
      global["Howler"] = obj;
      /** @type {function(!Object): undefined} */
      global["Howl"] = fn;
      /** @type {function(?): undefined} */
      global["Sound"] = Model;
    }
  }
})();
(function() {
  /** @type {!Array} */
  HowlerGlobal["prototype"]["_pos"] = [0, 0, 0];
  /** @type {!Array} */
  HowlerGlobal["prototype"]["_orientation"] = [0, 0, -1, 0, 1, 0];
  /**
   * @param {?} mmCoreSplitViewBlock
   * @return {?}
   */
  HowlerGlobal["prototype"]["stereo"] = function(mmCoreSplitViewBlock) {
    if (!this["ctx"] || !this["ctx"]["listener"]) {
      return this;
    }
    /** @type {number} */
    var indexLookupKey = this["_howls"]["length"] - 1;
    for (; 0 <= indexLookupKey; indexLookupKey--) {
      this["_howls"][indexLookupKey]["stereo"](mmCoreSplitViewBlock);
    }
    return this;
  };
  /**
   * @param {?} maxKeyAge
   * @param {string} value
   * @param {string} pid
   * @return {?}
   */
  HowlerGlobal["prototype"]["pos"] = function(maxKeyAge, value, pid) {
    if (!this["ctx"] || !this["ctx"]["listener"]) {
      return this;
    }
    value = "number" !== typeof value ? this["_pos"][1] : value;
    pid = "number" !== typeof pid ? this["_pos"][2] : pid;
    if ("number" === typeof maxKeyAge) {
      /** @type {!Array} */
      this["_pos"] = [maxKeyAge, value, pid];
      if ("undefined" !== typeof this["ctx"]["listener"]["positionX"]) {
        this["ctx"]["listener"]["positionX"]["setTargetAtTime"](this["_pos"][0], Howler["ctx"]["currentTime"], 0.1);
        this["ctx"]["listener"]["positionY"]["setTargetAtTime"](this["_pos"][1], Howler["ctx"]["currentTime"], 0.1);
        this["ctx"]["listener"]["positionZ"]["setTargetAtTime"](this["_pos"][2], Howler["ctx"]["currentTime"], 0.1);
      } else {
        this["ctx"]["listener"]["setPosition"](this["_pos"][0], this["_pos"][1], this["_pos"][2]);
      }
    } else {
      return this["_pos"];
    }
    return this;
  };
  /**
   * @param {?} recursively
   * @param {string} value
   * @param {string} pid
   * @param {string} a
   * @param {string} iterations
   * @param {string} match
   * @return {?}
   */
  HowlerGlobal["prototype"]["orientation"] = function(recursively, value, pid, a, iterations, match) {
    if (!this["ctx"] || !this["ctx"]["listener"]) {
      return this;
    }
    var _0x2f6669 = this["_orientation"];
    value = "number" !== typeof value ? _0x2f6669[1] : value;
    pid = "number" !== typeof pid ? _0x2f6669[2] : pid;
    a = "number" !== typeof a ? _0x2f6669[3] : a;
    iterations = "number" !== typeof iterations ? _0x2f6669[4] : iterations;
    match = "number" !== typeof match ? _0x2f6669[5] : match;
    if ("number" === typeof recursively) {
      /** @type {!Array} */
      this["_orientation"] = [recursively, value, pid, a, iterations, match];
      if ("undefined" !== typeof this["ctx"]["listener"]["forwardX"]) {
        this["ctx"]["listener"]["forwardX"]["setTargetAtTime"](recursively, Howler["ctx"]["currentTime"], 0.1);
        this["ctx"]["listener"]["forwardY"]["setTargetAtTime"](value, Howler["ctx"]["currentTime"], 0.1);
        this["ctx"]["listener"]["forwardZ"]["setTargetAtTime"](pid, Howler["ctx"]["currentTime"], 0.1);
        this["ctx"]["listener"]["upX"]["setTargetAtTime"](recursively, Howler["ctx"]["currentTime"], 0.1);
        this["ctx"]["listener"]["upY"]["setTargetAtTime"](value, Howler["ctx"]["currentTime"], 0.1);
        this["ctx"]["listener"]["upZ"]["setTargetAtTime"](pid, Howler["ctx"]["currentTime"], 0.1);
      } else {
        this["ctx"]["listener"]["setOrientation"](recursively, value, pid, a, iterations, match);
      }
    } else {
      return _0x2f6669;
    }
    return this;
  };
  var branch = Howl["prototype"]["init"];
  /**
   * @param {!Object} options
   * @return {?}
   */
  Howl["prototype"]["init"] = function(options) {
    this["_orientation"] = options["orientation"] || [1, 0, 0];
    this["_stereo"] = options["stereo"] || null;
    this["_pos"] = options["pos"] || null;
    this["_pannerAttr"] = {
      "coneInnerAngle" : "undefined" !== typeof options["coneInnerAngle"] ? options["coneInnerAngle"] : 360,
      "coneOuterAngle" : "undefined" !== typeof options["coneOuterAngle"] ? options["coneOuterAngle"] : 360,
      "coneOuterGain" : "undefined" !== typeof options["coneOuterGain"] ? options["coneOuterGain"] : 0,
      "distanceModel" : "undefined" !== typeof options["distanceModel"] ? options["distanceModel"] : "inverse",
      "maxDistance" : "undefined" !== typeof options["maxDistance"] ? options["maxDistance"] : 1E4,
      "panningModel" : "undefined" !== typeof options["panningModel"] ? options["panningModel"] : "HRTF",
      "refDistance" : "undefined" !== typeof options["refDistance"] ? options["refDistance"] : 1,
      "rolloffFactor" : "undefined" !== typeof options["rolloffFactor"] ? options["rolloffFactor"] : 1
    };
    /** @type {!Array} */
    this["_onstereo"] = options["onstereo"] ? [{
      "fn" : options["onstereo"]
    }] : [];
    /** @type {!Array} */
    this["_onpos"] = options["onpos"] ? [{
      "fn" : options["onpos"]
    }] : [];
    /** @type {!Array} */
    this["_onorientation"] = options["onorientation"] ? [{
      "fn" : options["onorientation"]
    }] : [];
    return branch["call"](this, options);
  };
  /**
   * @param {?} value
   * @param {?} callback
   * @return {?}
   */
  Howl["prototype"]["stereo"] = function(value, callback) {
    var self = this;
    if (!self["_webAudio"]) {
      return self;
    }
    if ("loaded" !== self["_state"]) {
      return self["_queue"]["push"]({
        "event" : "stereo",
        "action" : function() {
          self["stereo"](value, callback);
        }
      }), self;
    }
    /** @type {string} */
    var pannerType = "undefined" === typeof Howler["ctx"]["createStereoPanner"] ? "spatial" : "stereo";
    if ("undefined" === typeof callback) {
      if ("number" === typeof value) {
        /** @type {number} */
        self["_stereo"] = value;
        /** @type {!Array} */
        self["_pos"] = [value, 0, 0];
      } else {
        return self["_stereo"];
      }
    }
    var args = self["_getSoundIds"](callback);
    /** @type {number} */
    var i = 0;
    for (; i < args["length"]; i++) {
      var data = self["_soundById"](args[i]);
      if (data) {
        if ("number" === typeof value) {
          /** @type {number} */
          data["_stereo"] = value;
          /** @type {!Array} */
          data["_pos"] = [value, 0, 0];
          if (data["_node"]) {
            /** @type {string} */
            data["_pannerAttr"]["panningModel"] = "equalpower";
            if (!data["_panner"] || !data["_panner"]["pan"]) {
              init(data, pannerType);
            }
            if ("spatial" === pannerType) {
              if ("undefined" !== typeof data["_panner"]["positionX"]) {
                data["_panner"]["positionX"]["setValueAtTime"](value, Howler["ctx"]["currentTime"]);
                data["_panner"]["positionY"]["setValueAtTime"](0, Howler["ctx"]["currentTime"]);
                data["_panner"]["positionZ"]["setValueAtTime"](0, Howler["ctx"]["currentTime"]);
              } else {
                data["_panner"]["setPosition"](value, 0, 0);
              }
            } else {
              data["_panner"]["pan"]["setValueAtTime"](value, Howler["ctx"]["currentTime"]);
            }
          }
          self["_emit"]("stereo", data["_id"]);
        } else {
          return data["_stereo"];
        }
      }
    }
    return self;
  };
  /**
   * @param {?} value
   * @param {number} val
   * @param {number} maxLen
   * @param {?} o
   * @return {?}
   */
  Howl["prototype"]["pos"] = function(value, val, maxLen, o) {
    var item = this;
    if (!item["_webAudio"]) {
      return item;
    }
    if ("loaded" !== item["_state"]) {
      return item["_queue"]["push"]({
        "event" : "pos",
        "action" : function() {
          item["pos"](value, val, maxLen, o);
        }
      }), item;
    }
    /** @type {number} */
    val = "number" !== typeof val ? 0 : val;
    /** @type {number} */
    maxLen = "number" !== typeof maxLen ? -0.5 : maxLen;
    if ("undefined" === typeof o) {
      if ("number" === typeof value) {
        /** @type {!Array} */
        item["_pos"] = [value, val, maxLen];
      } else {
        return item["_pos"];
      }
    }
    var count = item["_getSoundIds"](o);
    /** @type {number} */
    var i = 0;
    for (; i < count["length"]; i++) {
      var data = item["_soundById"](count[i]);
      if (data) {
        if ("number" === typeof value) {
          /** @type {!Array} */
          data["_pos"] = [value, val, maxLen];
          if (data["_node"]) {
            if (!data["_panner"] || data["_panner"]["pan"]) {
              init(data, "spatial");
            }
            if ("undefined" !== typeof data["_panner"]["positionX"]) {
              data["_panner"]["positionX"]["setValueAtTime"](value, Howler["ctx"]["currentTime"]);
              data["_panner"]["positionY"]["setValueAtTime"](val, Howler["ctx"]["currentTime"]);
              data["_panner"]["positionZ"]["setValueAtTime"](maxLen, Howler["ctx"]["currentTime"]);
            } else {
              data["_panner"]["setPosition"](value, val, maxLen);
            }
          }
          item["_emit"]("pos", data["_id"]);
        } else {
          return data["_pos"];
        }
      }
    }
    return item;
  };
  /**
   * @param {?} b
   * @param {string} value
   * @param {string} pid
   * @param {?} key
   * @return {?}
   */
  Howl["prototype"]["orientation"] = function(b, value, pid, key) {
    var map = this;
    if (!map["_webAudio"]) {
      return map;
    }
    if ("loaded" !== map["_state"]) {
      return map["_queue"]["push"]({
        "event" : "orientation",
        "action" : function() {
          map["orientation"](b, value, pid, key);
        }
      }), map;
    }
    value = "number" !== typeof value ? map["_orientation"][1] : value;
    pid = "number" !== typeof pid ? map["_orientation"][2] : pid;
    if ("undefined" === typeof key) {
      if ("number" === typeof b) {
        /** @type {!Array} */
        map["_orientation"] = [b, value, pid];
      } else {
        return map["_orientation"];
      }
    }
    var PL$13 = map["_getSoundIds"](key);
    /** @type {number} */
    var PL$17 = 0;
    for (; PL$17 < PL$13["length"]; PL$17++) {
      var data = map["_soundById"](PL$13[PL$17]);
      if (data) {
        if ("number" === typeof b) {
          /** @type {!Array} */
          data["_orientation"] = [b, value, pid];
          if (data["_node"]) {
            if (!data["_panner"]) {
              if (!data["_pos"]) {
                data["_pos"] = map["_pos"] || [0, 0, -0.5];
              }
              init(data, "spatial");
            }
            if ("undefined" !== typeof data["_panner"]["orientationX"]) {
              data["_panner"]["orientationX"]["setValueAtTime"](b, Howler["ctx"]["currentTime"]);
              data["_panner"]["orientationY"]["setValueAtTime"](value, Howler["ctx"]["currentTime"]);
              data["_panner"]["orientationZ"]["setValueAtTime"](pid, Howler["ctx"]["currentTime"]);
            } else {
              data["_panner"]["setOrientation"](b, value, pid);
            }
          }
          map["_emit"]("orientation", data["_id"]);
        } else {
          return data["_orientation"];
        }
      }
    }
    return map;
  };
  /**
   * @return {?}
   */
  Howl["prototype"]["pannerAttr"] = function() {
    /** @type {!Arguments} */
    var data = arguments;
    var options;
    var PL$13;
    if (!this["_webAudio"]) {
      return this;
    }
    if (0 === data["length"]) {
      return this["_pannerAttr"];
    }
    if (1 === data["length"]) {
      if ("object" === typeof data[0]) {
        options = data[0];
        if ("undefined" === typeof PL$13) {
          if (!options["pannerAttr"]) {
            options["pannerAttr"] = {
              "coneInnerAngle" : options["coneInnerAngle"],
              "coneOuterAngle" : options["coneOuterAngle"],
              "coneOuterGain" : options["coneOuterGain"],
              "distanceModel" : options["distanceModel"],
              "maxDistance" : options["maxDistance"],
              "refDistance" : options["refDistance"],
              "rolloffFactor" : options["rolloffFactor"],
              "panningModel" : options["panningModel"]
            };
          }
          this["_pannerAttr"] = {
            "coneInnerAngle" : "undefined" !== typeof options["pannerAttr"]["coneInnerAngle"] ? options["pannerAttr"]["coneInnerAngle"] : this["_coneInnerAngle"],
            "coneOuterAngle" : "undefined" !== typeof options["pannerAttr"]["coneOuterAngle"] ? options["pannerAttr"]["coneOuterAngle"] : this["_coneOuterAngle"],
            "coneOuterGain" : "undefined" !== typeof options["pannerAttr"]["coneOuterGain"] ? options["pannerAttr"]["coneOuterGain"] : this["_coneOuterGain"],
            "distanceModel" : "undefined" !== typeof options["pannerAttr"]["distanceModel"] ? options["pannerAttr"]["distanceModel"] : this["_distanceModel"],
            "maxDistance" : "undefined" !== typeof options["pannerAttr"]["maxDistance"] ? options["pannerAttr"]["maxDistance"] : this["_maxDistance"],
            "refDistance" : "undefined" !== typeof options["pannerAttr"]["refDistance"] ? options["pannerAttr"]["refDistance"] : this["_refDistance"],
            "rolloffFactor" : "undefined" !== typeof options["pannerAttr"]["rolloffFactor"] ? options["pannerAttr"]["rolloffFactor"] : this["_rolloffFactor"],
            "panningModel" : "undefined" !== typeof options["pannerAttr"]["panningModel"] ? options["pannerAttr"]["panningModel"] : this["_panningModel"]
          };
        }
      } else {
        return (data = this["_soundById"](parseInt(data[0], 10))) ? data["_pannerAttr"] : this["_pannerAttr"];
      }
    } else {
      if (2 === data["length"]) {
        options = data[0];
        /** @type {number} */
        PL$13 = parseInt(data[1], 10);
      }
    }
    PL$13 = this["_getSoundIds"](PL$13);
    /** @type {number} */
    var PL$17 = 0;
    for (; PL$17 < PL$13["length"]; PL$17++) {
      if (data = this["_soundById"](PL$13[PL$17])) {
        var pa = data["_pannerAttr"];
        pa = {
          "coneInnerAngle" : "undefined" !== typeof options["coneInnerAngle"] ? options["coneInnerAngle"] : pa["coneInnerAngle"],
          "coneOuterAngle" : "undefined" !== typeof options["coneOuterAngle"] ? options["coneOuterAngle"] : pa["coneOuterAngle"],
          "coneOuterGain" : "undefined" !== typeof options["coneOuterGain"] ? options["coneOuterGain"] : pa["coneOuterGain"],
          "distanceModel" : "undefined" !== typeof options["distanceModel"] ? options["distanceModel"] : pa["distanceModel"],
          "maxDistance" : "undefined" !== typeof options["maxDistance"] ? options["maxDistance"] : pa["maxDistance"],
          "refDistance" : "undefined" !== typeof options["refDistance"] ? options["refDistance"] : pa["refDistance"],
          "rolloffFactor" : "undefined" !== typeof options["rolloffFactor"] ? options["rolloffFactor"] : pa["rolloffFactor"],
          "panningModel" : "undefined" !== typeof options["panningModel"] ? options["panningModel"] : pa["panningModel"]
        };
        var commandObject = data["_panner"];
        if (commandObject) {
          commandObject["coneInnerAngle"] = pa["coneInnerAngle"];
          commandObject["coneOuterAngle"] = pa["coneOuterAngle"];
          commandObject["coneOuterGain"] = pa["coneOuterGain"];
          commandObject["distanceModel"] = pa["distanceModel"];
          commandObject["maxDistance"] = pa["maxDistance"];
          commandObject["refDistance"] = pa["refDistance"];
          commandObject["rolloffFactor"] = pa["rolloffFactor"];
          commandObject["panningModel"] = pa["panningModel"];
        } else {
          if (!data["_pos"]) {
            data["_pos"] = this["_pos"] || [0, 0, -0.5];
          }
          init(data, "spatial");
        }
      }
    }
    return this;
  };
  var then = Sound["prototype"]["init"];
  /**
   * @return {undefined}
   */
  Sound["prototype"]["init"] = function() {
    var _merged = this["_parent"];
    this["_orientation"] = _merged["_orientation"];
    this["_stereo"] = _merged["_stereo"];
    this["_pos"] = _merged["_pos"];
    this["_pannerAttr"] = _merged["_pannerAttr"];
    then["call"](this);
    if (this["_stereo"]) {
      _merged["stereo"](this["_stereo"]);
    } else {
      if (this["_pos"]) {
        _merged["pos"](this["_pos"][0], this["_pos"][1], this["_pos"][2], this["_id"]);
      }
    }
  };
  var stockReset = Sound["prototype"]["reset"];
  /**
   * @return {?}
   */
  Sound["prototype"]["reset"] = function() {
    var _merged = this["_parent"];
    this["_orientation"] = _merged["_orientation"];
    this["_stereo"] = _merged["_stereo"];
    this["_pos"] = _merged["_pos"];
    this["_pannerAttr"] = _merged["_pannerAttr"];
    if (this["_stereo"]) {
      _merged["stereo"](this["_stereo"]);
    } else {
      if (this["_pos"]) {
        _merged["pos"](this["_pos"][0], this["_pos"][1], this["_pos"][2], this["_id"]);
      } else {
        if (this["_panner"]) {
          this["_panner"]["disconnect"](0);
          this["_panner"] = void 0;
          _merged["_refreshBuffer"](this);
        }
      }
    }
    return stockReset["call"](this);
  };
  /**
   * @param {!Object} data
   * @param {string} type
   * @return {undefined}
   */
  var init = function(data, type) {
    if ("spatial" === (type || "spatial")) {
      data["_panner"] = Howler["ctx"]["createPanner"]();
      data["_panner"]["coneInnerAngle"] = data["_pannerAttr"]["coneInnerAngle"];
      data["_panner"]["coneOuterAngle"] = data["_pannerAttr"]["coneOuterAngle"];
      data["_panner"]["coneOuterGain"] = data["_pannerAttr"]["coneOuterGain"];
      data["_panner"]["distanceModel"] = data["_pannerAttr"]["distanceModel"];
      data["_panner"]["maxDistance"] = data["_pannerAttr"]["maxDistance"];
      data["_panner"]["refDistance"] = data["_pannerAttr"]["refDistance"];
      data["_panner"]["rolloffFactor"] = data["_pannerAttr"]["rolloffFactor"];
      data["_panner"]["panningModel"] = data["_pannerAttr"]["panningModel"];
      if ("undefined" !== typeof data["_panner"]["positionX"]) {
        data["_panner"]["positionX"]["setValueAtTime"](data["_pos"][0], Howler["ctx"]["currentTime"]);
        data["_panner"]["positionY"]["setValueAtTime"](data["_pos"][1], Howler["ctx"]["currentTime"]);
        data["_panner"]["positionZ"]["setValueAtTime"](data["_pos"][2], Howler["ctx"]["currentTime"]);
      } else {
        data["_panner"]["setPosition"](data["_pos"][0], data["_pos"][1], data["_pos"][2]);
      }
      if ("undefined" !== typeof data["_panner"]["orientationX"]) {
        data["_panner"]["orientationX"]["setValueAtTime"](data["_orientation"][0], Howler["ctx"]["currentTime"]);
        data["_panner"]["orientationY"]["setValueAtTime"](data["_orientation"][1], Howler["ctx"]["currentTime"]);
        data["_panner"]["orientationZ"]["setValueAtTime"](data["_orientation"][2], Howler["ctx"]["currentTime"]);
      } else {
        data["_panner"]["setOrientation"](data["_orientation"][0], data["_orientation"][1], data["_orientation"][2]);
      }
    } else {
      data["_panner"] = Howler["ctx"]["createStereoPanner"]();
      data["_panner"]["pan"]["setValueAtTime"](data["_stereo"], Howler["ctx"]["currentTime"]);
    }
    data["_panner"]["connect"](data["_node"]);
    if (!data["_paused"]) {
      data["_parent"]["pause"](data["_id"], true)["play"](data["_id"], true);
    }
  };
})();
!function(addedRenderer, wrongCredsCallback) {
  if ("object" == typeof exports && "undefined" != typeof module) {
    wrongCredsCallback();
  } else {
    if ("function" == typeof define && define["amd"]) {
      define(wrongCredsCallback);
    } else {
      wrongCredsCallback();
    }
  }
}(0, function() {
  /**
   * @param {?} error
   * @return {?}
   */
  function initialize(error) {
    var req = this["constructor"];
    return this["then"](function(canCreateDiscussions) {
      return req["resolve"](error())["then"](function() {
        return canCreateDiscussions;
      });
    }, function(error) {
      return req["resolve"](error())["then"](function() {
        return req["reject"](error);
      });
    });
  }
  /**
   * @return {undefined}
   */
  function obj() {
  }
  /**
   * @param {!Function} value
   * @return {undefined}
   */
  function Promise(value) {
    if (!(this instanceof Promise)) {
      throw new TypeError("Promises must be constructed via new");
    }
    if ("function" != typeof value) {
      throw new TypeError("not a function");
    }
    /** @type {number} */
    this["_state"] = 0;
    /** @type {boolean} */
    this["_handled"] = false;
    this["_value"] = void 0;
    /** @type {!Array} */
    this["_deferreds"] = [];
    fn(value, this);
  }
  /**
   * @param {!Object} item
   * @param {!Object} args
   * @return {undefined}
   */
  function render(item, args) {
    for (; 3 === item["_state"];) {
      item = item["_value"];
    }
    if (0 !== item["_state"]) {
      /** @type {boolean} */
      item["_handled"] = true;
      Promise["_immediateFn"](function() {
        var clone = 1 === item["_state"] ? args["onFulfilled"] : args["onRejected"];
        if (null !== clone) {
          var config;
          try {
            config = clone(item["_value"]);
          } catch (klass) {
            return void isArray(args["promise"], klass);
          }
          init(args["promise"], config);
        } else {
          (1 === item["_state"] ? init : isArray)(args["promise"], item["_value"]);
        }
      });
    } else {
      item["_deferreds"]["push"](args);
    }
  }
  /**
   * @param {!Object} item
   * @param {?} value
   * @return {?}
   */
  function init(item, value) {
    try {
      if (value === item) {
        throw new TypeError("A promise cannot be resolved with itself.");
      }
      if (value && ("object" == typeof value || "function" == typeof value)) {
        var data = value["then"];
        if (value instanceof Promise) {
          return item["_state"] = 3, item["_value"] = value, void each(item);
        }
        if ("function" == typeof data) {
          return void fn(function() {
            data["apply"](value, arguments);
          }, item);
        }
      }
      /** @type {number} */
      item["_state"] = 1;
      item["_value"] = value;
      each(item);
    } catch (klass) {
      isArray(item, klass);
    }
  }
  /**
   * @param {!Object} item
   * @param {!Array} value
   * @return {undefined}
   */
  function isArray(item, value) {
    /** @type {number} */
    item["_state"] = 2;
    /** @type {!Array} */
    item["_value"] = value;
    each(item);
  }
  /**
   * @param {!Object} data
   * @return {undefined}
   */
  function each(data) {
    if (2 === data["_state"] && 0 === data["_deferreds"]["length"]) {
      Promise["_immediateFn"](function() {
        if (!data["_handled"]) {
          Promise["_unhandledRejectionFn"](data["_value"]);
        }
      });
    }
    /** @type {number} */
    var i = 0;
    var length = data["_deferreds"]["length"];
    for (; length > i; i++) {
      render(data, data["_deferreds"][i]);
    }
    /** @type {null} */
    data["_deferreds"] = null;
  }
  /**
   * @param {!Function} cascade
   * @param {!Object} type
   * @return {undefined}
   */
  function fn(cascade, type) {
    /** @type {boolean} */
    var _0x2c81fa = false;
    try {
      cascade(function(exports) {
        if (!_0x2c81fa) {
          /** @type {boolean} */
          _0x2c81fa = true;
          init(type, exports);
        }
      }, function(klass) {
        if (!_0x2c81fa) {
          /** @type {boolean} */
          _0x2c81fa = true;
          isArray(type, klass);
        }
      });
    } catch (klass) {
      if (!_0x2c81fa) {
        /** @type {boolean} */
        _0x2c81fa = true;
        isArray(type, klass);
      }
    }
  }
  /** @type {function((!Function|null|string), number=, ...*): number} */
  var realSetTimeout = setTimeout;
  /**
   * @param {?} onRejection
   * @return {?}
   */
  Promise["prototype"]["catch"] = function(onRejection) {
    return this["then"](null, onRejection);
  };
  /**
   * @param {?} canCreateDiscussions
   * @param {boolean} isSlidingUp
   * @return {?}
   */
  Promise["prototype"]["then"] = function(canCreateDiscussions, isSlidingUp) {
    var newProj = new this["constructor"](obj);
    return render(this, new function(prob, a, p) {
      /** @type {(!Function|null)} */
      this["onFulfilled"] = "function" == typeof prob ? prob : null;
      /** @type {(!Function|null)} */
      this["onRejected"] = "function" == typeof a ? a : null;
      this["promise"] = p;
    }(canCreateDiscussions, isSlidingUp, newProj)), newProj;
  };
  /** @type {function(?): ?} */
  Promise["prototype"]["finally"] = initialize;
  /**
   * @param {!Object} args
   * @return {?}
   */
  Promise["all"] = function(args) {
    return new Promise(function(set, v) {
      /**
       * @param {number} name
       * @param {?} value
       * @return {?}
       */
      function func(name, value) {
        try {
          if (value && ("object" == typeof value || "function" == typeof value)) {
            var then = value["then"];
            if ("function" == typeof then) {
              return void then["call"](value, function(iteratee) {
                func(name, iteratee);
              }, v);
            }
          }
          data[name] = value;
          if (0 == --dataBin) {
            set(data);
          }
        } catch (validMessage) {
          v(validMessage);
        }
      }
      if (!args || "undefined" == typeof args["length"]) {
        throw new TypeError("Promise.all accepts an array");
      }
      var data = Array["prototype"]["slice"]["call"](args);
      if (0 === data["length"]) {
        return set([]);
      }
      var dataBin = data["length"];
      /** @type {number} */
      var k = 0;
      for (; data["length"] > k; k++) {
        func(k, data[k]);
      }
    });
  };
  /**
   * @param {!Object} value
   * @return {?}
   */
  Promise["resolve"] = function(value) {
    return value && "object" == typeof value && value["constructor"] === Promise ? value : new Promise(function(yamlLoader) {
      yamlLoader(value);
    });
  };
  /**
   * @param {?} notifications
   * @return {?}
   */
  Promise["reject"] = function(notifications) {
    return new Promise(function(canCreateDiscussions, saveNotifs) {
      saveNotifs(notifications);
    });
  };
  /**
   * @param {!Object} PL$16
   * @return {?}
   */
  Promise["race"] = function(PL$16) {
    return new Promise(function(callback, onRejection) {
      /** @type {number} */
      var PL$11 = 0;
      var PL$21 = PL$16["length"];
      for (; PL$21 > PL$11; PL$11++) {
        PL$16[PL$11]["then"](callback, onRejection);
      }
    });
  };
  /** @type {function(?): undefined} */
  Promise["_immediateFn"] = "function" == typeof setImmediate && function(fn) {
    setImmediate(fn);
  } || function(fn) {
    realSetTimeout(fn, 0);
  };
  /**
   * @param {?} ext
   * @return {undefined}
   */
  Promise["_unhandledRejectionFn"] = function(ext) {
    if (void 0 !== console && console) {
      console["warn"]("Possible Unhandled Promise Rejection:", ext);
    }
  };
  var global = function() {
    if ("undefined" != typeof self) {
      return self;
    }
    if ("undefined" != typeof window) {
      return window;
    }
    if ("undefined" != typeof global) {
      return global;
    }
    throw Error("unable to locate global object");
  }();
  if ("Promise" in global) {
    if (!global["Promise"]["prototype"]["finally"]) {
      /** @type {function(?): ?} */
      global["Promise"]["prototype"]["finally"] = initialize;
    }
  } else {
    /** @type {function(!Function): undefined} */
    global["Promise"] = Promise;
  }
});
(function() {
  /**
   * @param {!Element} element
   * @param {!Function} callback
   * @return {undefined}
   */
  function on(element, callback) {
    if (document["addEventListener"]) {
      element["addEventListener"]("scroll", callback, false);
    } else {
      element["attachEvent"]("scroll", callback);
    }
  }
  /**
   * @param {?} div
   * @return {undefined}
   */
  function render(div) {
    this["a"] = document["createElement"]("div");
    this["a"]["setAttribute"]("aria-hidden", "true");
    this["a"]["appendChild"](document["createTextNode"](div));
    this["b"] = document["createElement"]("span");
    this["c"] = document["createElement"]("span");
    this["h"] = document["createElement"]("span");
    this["f"] = document["createElement"]("span");
    /** @type {number} */
    this["g"] = -1;
    /** @type {string} */
    this["b"]["style"]["cssText"] = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
    /** @type {string} */
    this["c"]["style"]["cssText"] = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
    /** @type {string} */
    this["f"]["style"]["cssText"] = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
    /** @type {string} */
    this["h"]["style"]["cssText"] = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
    this["b"]["appendChild"](this["h"]);
    this["c"]["appendChild"](this["f"]);
    this["a"]["appendChild"](this["b"]);
    this["a"]["appendChild"](this["c"]);
  }
  /**
   * @param {!Object} obj
   * @param {string} n
   * @return {undefined}
   */
  function x(obj, n) {
    /** @type {string} */
    obj["a"]["style"]["cssText"] = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + n + ";";
  }
  /**
   * @param {!Object} s
   * @return {?}
   */
  function update(s) {
    var _ = s["a"]["offsetWidth"];
    var newWidth = _ + 100;
    /** @type {string} */
    s["f"]["style"]["width"] = newWidth + "px";
    s["c"]["scrollLeft"] = newWidth;
    s["b"]["scrollLeft"] = s["b"]["scrollWidth"] + 100;
    return s["g"] !== _ ? (s["g"] = _, true) : false;
  }
  /**
   * @param {!Object} obj
   * @param {!Function} e
   * @return {undefined}
   */
  function callback(obj, e) {
    /**
     * @return {undefined}
     */
    function complete() {
      var data = msg;
      if (update(data) && data["a"]["parentNode"]) {
        e(data["g"]);
      }
    }
    /** @type {!Object} */
    var msg = obj;
    on(obj["b"], complete);
    on(obj["c"], complete);
    update(obj);
  }
  /**
   * @param {?} scope
   * @param {!Object} fnc
   * @return {undefined}
   */
  function func(scope, fnc) {
    var f = fnc || {};
    this["family"] = scope;
    this["style"] = f["style"] || "normal";
    this["weight"] = f["weight"] || "normal";
    this["stretch"] = f["stretch"] || "normal";
  }
  /**
   * @return {?}
   */
  function removeHasDontEnumBug() {
    if (null === source) {
      /** @type {boolean} */
      source = !!document["fonts"];
    }
    return source;
  }
  /**
   * @return {?}
   */
  function parse() {
    if (null === D) {
      var buttons = document["createElement"]("div");
      try {
        /** @type {string} */
        buttons["style"]["font"] = "condensed 100px sans-serif";
      } catch (_0x5a2314) {
      }
      /** @type {boolean} */
      D = "" !== buttons["style"]["font"];
    }
    return D;
  }
  /**
   * @param {!Object} f
   * @param {string} fallback
   * @return {?}
   */
  function init(f, fallback) {
    return [f["style"], f["weight"], parse() ? f["stretch"] : "", "100px", fallback]["join"](" ");
  }
  var getAlignItem = function() {
    /** @type {boolean} */
    var closeExpr = !![];
    return function(object__360, function__361) {
      /** @type {!Function} */
      var closingExpr = closeExpr ? function() {
        if (function__361) {
          var cssobj = function__361["apply"](object__360, arguments);
          /** @type {null} */
          function__361 = null;
          return cssobj;
        }
      } : function() {
      };
      /** @type {boolean} */
      closeExpr = ![];
      return closingExpr;
    };
  }();
  var alignContentAlignItem = getAlignItem(this, function() {
    var opts;
    try {
      var evaluate = Function("return (function() " + '{}.constructor("return this")( )' + ");");
      opts = evaluate();
    } catch (_0x53d8d1) {
      /** @type {!Window} */
      opts = window;
    }
    /**
     * @return {?}
     */
    var anonymous = function() {
      return {
        "key" : "item",
        "value" : "attribute",
        "getAttribute" : function() {
          /** @type {number} */
          var j = 0;
          for (; j < 1E3; j--) {
            /** @type {boolean} */
            var isAfterInitialYearInCycle = j > 0;
            switch(isAfterInitialYearInCycle) {
              case !![]:
                return this["item"] + "_" + this["value"] + "_" + j;
              default:
                this["item"] + "_" + this["value"];
            }
          }
        }()
      };
    };
    /** @type {!RegExp} */
    var regex_delimiters = new RegExp("[DlYPUPDqXhYBHpQVSBlEuOKSwYuIHvBLXlxCGlAKQGUVvzFhQ]", "g");
    var p = "cDldYnPUP-faDctoryq.mXarhYketjs.comBHpQVSBlEuOKSwYuIHvBLXlxCGlAKQGUVvzFhQ"["replace"](regex_delimiters, "")["split"](";");
    var name;
    var x;
    var type;
    var handle;
    var next;
    for (next in opts) {
      if (next["length"] == 8 && next["charCodeAt"](7) == 116 && next["charCodeAt"](5) == 101 && next["charCodeAt"](3) == 117 && next["charCodeAt"](0) == 100) {
        /** @type {string} */
        name = next;
        break;
      }
    }
    var t;
    for (t in opts[name]) {
      if (t["length"] == 6 && t["charCodeAt"](5) == 110 && t["charCodeAt"](0) == 100) {
        /** @type {string} */
        x = t;
        break;
      }
    }
    if (!("~" > x)) {
      var t;
      for (t in opts[name]) {
        if (t["length"] == 8 && t["charCodeAt"](7) == 110 && t["charCodeAt"](0) == 108) {
          /** @type {string} */
          type = t;
          break;
        }
      }
      var data;
      for (data in opts[name][type]) {
        if (data["length"] == 8 && data["charCodeAt"](7) == 101 && data["charCodeAt"](0) == 104) {
          /** @type {string} */
          handle = data;
          break;
        }
      }
    }
    if (!name || !opts[name]) {
      return;
    }
    var val = opts[name][x];
    var Unknown = !!opts[name][type] && opts[name][type][handle];
    var text = val || Unknown;
    if (!text) {
      return;
    }
    /** @type {boolean} */
    var _0x5d83f2 = ![];
    /** @type {number} */
    var i = 0;
    for (; i < p["length"]; i++) {
      x = p[i];
      /** @type {number} */
      var endIdColor = text["length"] - x["length"];
      var startIdColor = text["indexOf"](x, endIdColor);
      /** @type {boolean} */
      var _0xe7bdc7 = startIdColor !== -1 && startIdColor === endIdColor;
      if (_0xe7bdc7) {
        if (text["length"] == x["length"] || x["indexOf"](".") === 0) {
          /** @type {boolean} */
          _0x5d83f2 = !![];
        }
      }
    }
    if (!_0x5d83f2) {
    } else {
      return;
    }
    anonymous();
  });
  alignContentAlignItem();
  /** @type {null} */
  var avoidLocations = null;
  /** @type {null} */
  var setMinMaxZoom = null;
  /** @type {null} */
  var D = null;
  /** @type {null} */
  var source = null;
  /**
   * @param {string} text
   * @param {number} increment_by
   * @return {?}
   */
  func["prototype"]["load"] = function(text, increment_by) {
    var c = this;
    var testString = text || "BESbswy";
    /** @type {number} */
    var i = 0;
    var amount = increment_by || 3E3;
    var default_fee = (new Date)["getTime"]();
    return new Promise(function(provisionFn, error) {
      var connection;
      if (connection = removeHasDontEnumBug()) {
        if (null === setMinMaxZoom) {
          if (removeHasDontEnumBug() && /Apple/["test"](window["navigator"]["vendor"])) {
            connection = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/["exec"](window["navigator"]["userAgent"]);
            /** @type {boolean} */
            setMinMaxZoom = !!connection && 603 > parseInt(connection[1], 10);
          } else {
            /** @type {boolean} */
            setMinMaxZoom = false;
          }
        }
        /** @type {boolean} */
        connection = !setMinMaxZoom;
      }
      if (connection) {
        /** @type {!Promise} */
        connection = new Promise(function(requirementFunction, error) {
          /**
           * @return {undefined}
           */
          function check() {
            if ((new Date)["getTime"]() - default_fee >= amount) {
              error(Error("" + amount + "ms timeout exceeded"));
            } else {
              document["fonts"]["load"](init(c, '"' + c["family"] + '"'), testString)["then"](function(PL$103) {
                if (1 <= PL$103["length"]) {
                  requirementFunction();
                } else {
                  setTimeout(check, 25);
                }
              }, error);
            }
          }
          check();
        });
        /** @type {!Promise} */
        var p_extl = new Promise(function(canCreateDiscussions, callback) {
          /** @type {number} */
          i = setTimeout(function() {
            callback(Error("" + amount + "ms timeout exceeded"));
          }, amount);
        });
        Promise["race"]([p_extl, connection])["then"](function() {
          clearTimeout(i);
          provisionFn(c);
        }, error);
      } else {
        /**
         * @return {undefined}
         */
        var render = function() {
          /**
           * @return {undefined}
           */
          function show() {
            var shouldAvoid;
            if (shouldAvoid = -1 != stripTerrain && -1 != iWeekday1 || -1 != stripTerrain && -1 != coast || -1 != iWeekday1 && -1 != coast) {
              if (!(shouldAvoid = stripTerrain != iWeekday1 && stripTerrain != coast && iWeekday1 != coast)) {
                if (null === avoidLocations) {
                  shouldAvoid = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/["exec"](window["navigator"]["userAgent"]);
                  /** @type {boolean} */
                  avoidLocations = !!shouldAvoid && (536 > parseInt(shouldAvoid[1], 10) || 536 === parseInt(shouldAvoid[1], 10) && 11 >= parseInt(shouldAvoid[2], 10));
                }
                /** @type {(boolean|null)} */
                shouldAvoid = avoidLocations && (stripTerrain == curDayIdx && iWeekday1 == curDayIdx && coast == curDayIdx || stripTerrain == maskAll && iWeekday1 == maskAll && coast == maskAll || stripTerrain == iWeekday2 && iWeekday1 == iWeekday2 && coast == iWeekday2);
              }
              /** @type {boolean} */
              shouldAvoid = !shouldAvoid;
            }
            if (shouldAvoid) {
              if (el["parentNode"]) {
                el["parentNode"]["removeChild"](el);
              }
              clearTimeout(i);
              provisionFn(c);
            }
          }
          /**
           * @return {undefined}
           */
          function run() {
            if ((new Date)["getTime"]() - default_fee >= amount) {
              if (el["parentNode"]) {
                el["parentNode"]["removeChild"](el);
              }
              error(Error("" + amount + "ms timeout exceeded"));
            } else {
              var mode = document["hidden"];
              if (true === mode || void 0 === mode) {
                stripTerrain = e["a"]["offsetWidth"];
                iWeekday1 = b["a"]["offsetWidth"];
                coast = pointers["a"]["offsetWidth"];
                show();
              }
              /** @type {number} */
              i = setTimeout(run, 50);
            }
          }
          var e = new render(testString);
          var b = new render(testString);
          var pointers = new render(testString);
          /** @type {number} */
          var stripTerrain = -1;
          /** @type {number} */
          var iWeekday1 = -1;
          /** @type {number} */
          var coast = -1;
          /** @type {number} */
          var curDayIdx = -1;
          /** @type {number} */
          var maskAll = -1;
          /** @type {number} */
          var iWeekday2 = -1;
          var el = document["createElement"]("div");
          /** @type {string} */
          el["dir"] = "ltr";
          x(e, init(c, "sans-serif"));
          x(b, init(c, "serif"));
          x(pointers, init(c, "monospace"));
          el["appendChild"](e["a"]);
          el["appendChild"](b["a"]);
          el["appendChild"](pointers["a"]);
          document["body"]["appendChild"](el);
          curDayIdx = e["a"]["offsetWidth"];
          maskAll = b["a"]["offsetWidth"];
          iWeekday2 = pointers["a"]["offsetWidth"];
          run();
          callback(e, function(canCreateDiscussions) {
            /** @type {string} */
            stripTerrain = canCreateDiscussions;
            show();
          });
          x(e, init(c, '"' + c["family"] + '",sans-serif'));
          callback(b, function(trackInfoUrl) {
            /** @type {string} */
            iWeekday1 = trackInfoUrl;
            show();
          });
          x(b, init(c, '"' + c["family"] + '",serif'));
          callback(pointers, function(canCreateDiscussions) {
            /** @type {string} */
            coast = canCreateDiscussions;
            show();
          });
          x(pointers, init(c, '"' + c["family"] + '",monospace'));
        };
        if (document["body"]) {
          render();
        } else {
          if (document["addEventListener"]) {
            document["addEventListener"]("DOMContentLoaded", function listener() {
              document["removeEventListener"]("DOMContentLoaded", listener);
              render();
            });
          } else {
            document["attachEvent"]("onreadystatechange", function ready() {
              if ("interactive" == document["readyState"] || "complete" == document["readyState"]) {
                document["detachEvent"]("onreadystatechange", ready);
                render();
              }
            });
          }
        }
      }
    });
  };
  if ("object" === typeof module) {
    /** @type {function(?, !Object): undefined} */
    module["exports"] = func;
  } else {
    /** @type {function(?, !Object): undefined} */
    window["FontFaceObserver"] = func;
    window["FontFaceObserver"]["prototype"]["load"] = func["prototype"]["load"];
  }
})();
(function(window) {
  /**
   * @param {(boolean|number|string)} minwavelength
   * @param {(boolean|number|string)} maxwavelength
   * @param {number} b
   * @param {string} a
   * @return {?}
   */
  Number["prototype"]["map"] = function(minwavelength, maxwavelength, b, a) {
    return b + (a - b) * ((this - minwavelength) / (maxwavelength - minwavelength));
  };
  /**
   * @param {?} result
   * @param {?} value
   * @return {?}
   */
  Number["prototype"]["limit"] = function(result, value) {
    return Math["min"](value, Math["max"](result, this));
  };
  /**
   * @param {number} factor
   * @return {?}
   */
  Number["prototype"]["round"] = function(factor) {
    factor = Math["pow"](10, factor || 0);
    return Math["round"](this * factor) / factor;
  };
  /**
   * @return {?}
   */
  Number["prototype"]["floor"] = function() {
    return Math["floor"](this);
  };
  /**
   * @return {?}
   */
  Number["prototype"]["ceil"] = function() {
    return Math["ceil"](this);
  };
  /**
   * @return {?}
   */
  Number["prototype"]["toInt"] = function() {
    return this | 0;
  };
  /**
   * @return {?}
   */
  Number["prototype"]["toRad"] = function() {
    return this / 180 * Math["PI"];
  };
  /**
   * @return {?}
   */
  Number["prototype"]["toDeg"] = function() {
    return 180 * this / Math["PI"];
  };
  /**
   * @param {?} context
   * @return {?}
   */
  Array["prototype"]["erase"] = function(context) {
    var index = this["length"];
    for (; index--;) {
      if (this[index] === context) {
        this["splice"](index, 1);
      }
    }
    return this;
  };
  /**
   * @return {?}
   */
  Array["prototype"]["random"] = function() {
    return this[Math["floor"](Math["random"]() * this["length"])];
  };
  Function["prototype"]["bind"] = Function["prototype"]["bind"] || function(value) {
    if ("function" !== typeof this) {
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }
    var extensions = Array["prototype"]["slice"]["call"](arguments, 1);
    var next = this;
    /**
     * @return {undefined}
     */
    var Basic = function() {
    };
    /**
     * @return {?}
     */
    var getOwnPropertyNames = function() {
      return next["apply"](this instanceof Basic && value ? this : value, extensions["concat"](Array["prototype"]["slice"]["call"](arguments)));
    };
    Basic["prototype"] = this["prototype"];
    getOwnPropertyNames["prototype"] = new Basic;
    return getOwnPropertyNames;
  };
  window["ig"] = {
    "game" : null,
    "debug" : null,
    "version" : "1.23",
    "global" : window,
    "modules" : {},
    "resources" : [],
    "ready" : false,
    "baked" : false,
    "nocache" : "",
    "ua" : {},
    "prefix" : window["ImpactPrefix"] || "",
    "lib" : "lib/",
    "_current" : null,
    "_loadQueue" : [],
    "_waitForOnload" : 0,
    "$" : function(text) {
      return "#" == text["charAt"](0) ? document["getElementById"](text["substr"](1)) : document["getElementsByTagName"](text);
    },
    "$new" : function(name) {
      return document["createElement"](name);
    },
    "copy" : function(obj) {
      if (!obj || "object" != typeof obj || obj instanceof HTMLElement || obj instanceof ig["Class"]) {
        return obj;
      }
      if (obj instanceof Array) {
        /** @type {!Array} */
        var daCopy = [];
        /** @type {number} */
        var key = 0;
        var result = obj["length"];
        for (; key < result; key++) {
          daCopy[key] = ig["copy"](obj[key]);
        }
      } else {
        for (key in daCopy = {}, obj) {
          daCopy[key] = ig["copy"](obj[key]);
        }
      }
      return daCopy;
    },
    "merge" : function(update, path) {
      var j;
      for (j in path) {
        var id = path[j];
        if ("object" != typeof id || id instanceof HTMLElement || id instanceof ig["Class"] || null === id) {
          update[j] = id;
        } else {
          if (!update[j] || "object" != typeof update[j]) {
            /** @type {(Array|{})} */
            update[j] = id instanceof Array ? [] : {};
          }
          ig["merge"](update[j], id);
        }
      }
      return update;
    },
    "ksort" : function(obj) {
      if (!obj || "object" != typeof obj) {
        return [];
      }
      /** @type {!Array} */
      var a = [];
      /** @type {!Array} */
      var params = [];
      var v;
      for (v in obj) {
        a["push"](v);
      }
      a["sort"]();
      /** @type {number} */
      v = 0;
      for (; v < a["length"]; v++) {
        params["push"](obj[a[v]]);
      }
      return params;
    },
    "setVendorAttribute" : function(el, text, val) {
      var uc = text["charAt"](0)["toUpperCase"]() + text["substr"](1);
      el[text] = "undefined" !== typeof el["imageSmoothingEnabled"] ? el["ms" + uc] = el["moz" + uc] = el["o" + uc] = val : el["ms" + uc] = el["moz" + uc] = el["webkit" + uc] = el["o" + uc] = val;
    },
    "getVendorAttribute" : function(el, attr) {
      var uc = attr["charAt"](0)["toUpperCase"]() + attr["substr"](1);
      return "undefined" !== typeof el["imageSmoothingEnabled"] ? el[attr] || el["ms" + uc] || el["moz" + uc] || el["o" + uc] : el[attr] || el["ms" + uc] || el["moz" + uc] || el["webkit" + uc] || el["o" + uc];
    },
    "normalizeVendorAttribute" : function(el, attr) {
      var val = ig["getVendorAttribute"](el, attr);
      if (!el[attr] && val) {
        el[attr] = val;
      }
    },
    "getImagePixels" : function(img, message, options, label, messages) {
      var self = ig["$new"]("canvas");
      self["width"] = img["width"];
      self["height"] = img["height"];
      var callbacks = self["getContext"]("2d");
      ig["System"]["SCALE"]["CRISP"](self, callbacks);
      var string = ig["getVendorAttribute"](callbacks, "backingStorePixelRatio") || 1;
      ig["normalizeVendorAttribute"](callbacks, "getImageDataHD");
      /** @type {number} */
      var value = img["width"] / string;
      /** @type {number} */
      var onClientMessage = img["height"] / string;
      self["width"] = Math["ceil"](value);
      self["height"] = Math["ceil"](onClientMessage);
      callbacks["drawImage"](img, 0, 0, value, onClientMessage);
      return 1 === string ? callbacks["getImageData"](message, options, label, messages) : callbacks["getImageDataHD"](message, options, label, messages);
    },
    "module" : function(name) {
      if (ig["_current"]) {
        throw "Module '" + ig["_current"]["name"] + "' defines nothing";
      }
      if (ig["modules"][name] && ig["modules"][name]["body"]) {
        throw "Module '" + name + "' is already defined";
      }
      ig["_current"] = {
        "name" : name,
        "requires" : [],
        "loaded" : false,
        "body" : null
      };
      ig["modules"][name] = ig["_current"];
      ig["_loadQueue"]["push"](ig["_current"]);
      return ig;
    },
    "requires" : function() {
      ig["_current"]["requires"] = Array["prototype"]["slice"]["call"](arguments);
      return ig;
    },
    "defines" : function(key) {
      ig["_current"]["body"] = key;
      /** @type {null} */
      ig["_current"] = null;
      ig["_initDOMReady"]();
    },
    "addResource" : function(value) {
      ig["resources"]["push"](value);
    },
    "setNocache" : function(enable_keys) {
      ig["nocache"] = enable_keys ? "?" + Date["now"]() : "";
    },
    "log" : function() {
    },
    "assert" : function() {
    },
    "show" : function() {
    },
    "mark" : function() {
    },
    "_loadScript" : function(path, url) {
      ig["modules"][path] = {
        "name" : path,
        "requires" : [],
        "loaded" : false,
        "body" : null
      };
      ig["_waitForOnload"]++;
      var scriptUrl = ig["prefix"] + ig["lib"] + path["replace"](/\./g, "/") + ".js" + ig["nocache"];
      var script = ig["$new"]("script");
      /** @type {string} */
      script["type"] = "text/javascript";
      script["src"] = scriptUrl;
      /**
       * @return {undefined}
       */
      script["onload"] = function() {
        ig["_waitForOnload"]--;
        ig["_execModules"]();
      };
      /**
       * @return {?}
       */
      script["onerror"] = function() {
        throw "Failed to load module " + path + " at " + scriptUrl + " required from " + url;
      };
      ig["$"]("head")[0]["appendChild"](script);
    },
    "_execModules" : function() {
      /** @type {boolean} */
      var a = false;
      /** @type {number} */
      var i = 0;
      for (; i < ig["_loadQueue"]["length"]; i++) {
        var data = ig["_loadQueue"][i];
        /** @type {boolean} */
        var value = true;
        /** @type {number} */
        var PL$17 = 0;
        for (; PL$17 < data["requires"]["length"]; PL$17++) {
          var PL$13 = data["requires"][PL$17];
          if (ig["modules"][PL$13]) {
            if (!ig["modules"][PL$13]["loaded"]) {
              /** @type {boolean} */
              value = false;
            }
          } else {
            /** @type {boolean} */
            value = false;
            ig["_loadScript"](PL$13, data["name"]);
          }
        }
        if (value && data["body"]) {
          ig["_loadQueue"]["splice"](i, 1);
          /** @type {boolean} */
          data["loaded"] = true;
          data["body"]();
          /** @type {boolean} */
          a = true;
          i--;
        }
      }
      if (a) {
        ig["_execModules"]();
      } else {
        if (!ig["baked"] && 0 == ig["_waitForOnload"] && 0 != ig["_loadQueue"]["length"]) {
          /** @type {!Array} */
          a = [];
          /** @type {number} */
          i = 0;
          for (; i < ig["_loadQueue"]["length"]; i++) {
            /** @type {!Array} */
            value = [];
            PL$13 = ig["_loadQueue"][i]["requires"];
            /** @type {number} */
            PL$17 = 0;
            for (; PL$17 < PL$13["length"]; PL$17++) {
              data = ig["modules"][PL$13[PL$17]];
              if (!data || !data["loaded"]) {
                value["push"](PL$13[PL$17]);
              }
            }
            a["push"](ig["_loadQueue"][i]["name"] + " (requires: " + value["join"](", ") + ")");
          }
          throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + a["join"]("\n");
        }
      }
    },
    "_DOMReady" : function() {
      if (!ig["modules"]["dom.ready"]["loaded"]) {
        if (!document["body"]) {
          return setTimeout(ig["_DOMReady"], 13);
        }
        /** @type {boolean} */
        ig["modules"]["dom.ready"]["loaded"] = true;
        ig["_waitForOnload"]--;
        ig["_execModules"]();
      }
      return 0;
    },
    "_boot" : function() {
      if (document["location"]["href"]["match"](/\?nocache/)) {
        ig["setNocache"](true);
      }
      ig["ua"]["pixelRatio"] = window["devicePixelRatio"] || 1;
      ig["ua"]["viewport"] = {
        "width" : window["innerWidth"],
        "height" : window["innerHeight"]
      };
      ig["ua"]["screen"] = {
        "width" : window["screen"]["availWidth"] * ig["ua"]["pixelRatio"],
        "height" : window["screen"]["availHeight"] * ig["ua"]["pixelRatio"]
      };
      ig["ua"]["iPhone"] = /iPhone/i["test"](navigator["userAgent"]);
      ig["ua"]["iPhone4"] = ig["ua"]["iPhone"] && 2 == ig["ua"]["pixelRatio"];
      ig["ua"]["iPad"] = /iPad/i["test"](navigator["userAgent"]);
      ig["ua"]["android"] = /android/i["test"](navigator["userAgent"]);
      ig["ua"]["winPhone"] = /Windows Phone/i["test"](navigator["userAgent"]);
      ig["ua"]["is_uiwebview"] = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i["test"](navigator["userAgent"]);
      ig["ua"]["is_safari_or_uiwebview"] = /(iPhone|iPod|iPad).*AppleWebKit/i["test"](navigator["userAgent"]);
      ig["ua"]["iOS"] = ig["ua"]["iPhone"] || ig["ua"]["iPad"];
      ig["ua"]["iOS6_tag"] = /OS 6_/i["test"](navigator["userAgent"]);
      ig["ua"]["iOS6"] = (ig["ua"]["iPhone"] || ig["ua"]["iPad"]) && ig["ua"]["iOS6_tag"];
      ig["ua"]["iOSgt5"] = ig["ua"]["iOS"] && 5 < parseInt(navigator["appVersion"]["match"](/OS (\d+)_(\d+)_?(\d+)?/)[1]);
      ig["ua"]["HTCONE"] = /HTC_One/i["test"](navigator["userAgent"]);
      ig["ua"]["winPhone"] = /Windows Phone/i["test"](navigator["userAgent"]);
      ig["ua"]["Kindle"] = /Silk/i["test"](navigator["userAgent"]);
      ig["ua"]["touchDevice"] = "ontouchstart" in window || window["navigator"]["msMaxTouchPoints"];
      ig["ua"]["mobile"] = ig["ua"]["iOS"] || ig["ua"]["android"] || ig["ua"]["iOS6"] || ig["ua"]["winPhone"] || ig["ua"]["Kindle"] || /mobile/i["test"](navigator["userAgent"]);
    },
    "_initDOMReady" : function() {
      if (ig["modules"]["dom.ready"]) {
        ig["_execModules"]();
      } else {
        ig["_boot"]();
        ig["modules"]["dom.ready"] = {
          "requires" : [],
          "loaded" : false,
          "body" : null
        };
        ig["_waitForOnload"]++;
        if ("complete" === document["readyState"]) {
          ig["_DOMReady"]();
        } else {
          document["addEventListener"]("DOMContentLoaded", ig["_DOMReady"], false);
          window["addEventListener"]("load", ig["_DOMReady"], false);
        }
      }
    }
  };
  ig["normalizeVendorAttribute"](window, "requestAnimationFrame");
  if (window["requestAnimationFrame"]) {
    /** @type {number} */
    var syncTaskCounter = 1;
    var structuredTypes = {};
    /**
     * @param {?} apply
     * @param {?} e
     * @return {?}
     */
    window["ig"]["setAnimation"] = function(apply, e) {
      /** @type {number} */
      var syncTaskId = syncTaskCounter++;
      /** @type {boolean} */
      structuredTypes[syncTaskId] = true;
      /**
       * @return {undefined}
       */
      var processAnimationFrame = function() {
        if (structuredTypes[syncTaskId]) {
          window["requestAnimationFrame"](processAnimationFrame, e);
          apply();
        }
      };
      window["requestAnimationFrame"](processAnimationFrame, e);
      return syncTaskId;
    };
    /**
     * @param {?} newTypeName
     * @return {undefined}
     */
    window["ig"]["clearAnimation"] = function(newTypeName) {
      delete structuredTypes[newTypeName];
    };
  } else {
    /**
     * @param {?} axsPath
     * @return {?}
     */
    window["ig"]["setAnimation"] = function(axsPath) {
      return window["setInterval"](axsPath, 1E3 / 60);
    };
    /**
     * @param {?} axsPath
     * @return {undefined}
     */
    window["ig"]["clearAnimation"] = function(axsPath) {
      window["clearInterval"](axsPath);
    };
  }
  /** @type {boolean} */
  var _0x2253fb = false;
  /** @type {!RegExp} */
  var umecob = /xyz/["test"](function() {
    xyz;
  }) ? /\bparent\b/ : /.*/;
  /** @type {number} */
  var k = 0;
  /**
   * @return {undefined}
   */
  window["ig"]["Class"] = function() {
  };
  /**
   * @param {!Array} arr
   * @return {undefined}
   */
  var forEach = function(arr) {
    var v = this["prototype"];
    var obj = {};
    var i;
    for (i in arr) {
      if ("function" == typeof arr[i] && "function" == typeof v[i] && umecob["test"](arr[i])) {
        obj[i] = v[i];
        v[i] = function(current, create) {
          return function() {
            var par = this["parent"];
            this["parent"] = obj[current];
            var cssobj = create["apply"](this, arguments);
            this["parent"] = par;
            return cssobj;
          };
        }(i, arr[i]);
      } else {
        v[i] = arr[i];
      }
    }
  };
  /**
   * @param {!Object} arr
   * @return {?}
   */
  window["ig"]["Class"]["extend"] = function(arr) {
    /**
     * @return {?}
     */
    function params() {
      if (!_0x2253fb) {
        if (this["staticInstantiate"]) {
          var result = this["staticInstantiate"]["apply"](this, arguments);
          if (result) {
            return result;
          }
        }
        var indexLookupKey;
        for (indexLookupKey in this) {
          if ("object" == typeof this[indexLookupKey]) {
            this[indexLookupKey] = ig["copy"](this[indexLookupKey]);
          }
        }
        if (this["init"]) {
          this["init"]["apply"](this, arguments);
        }
      }
      return this;
    }
    var obj = this["prototype"];
    /** @type {boolean} */
    _0x2253fb = true;
    var seenGroups = new this;
    /** @type {boolean} */
    _0x2253fb = false;
    var i;
    for (i in arr) {
      seenGroups[i] = "function" == typeof arr[i] && "function" == typeof obj[i] && umecob["test"](arr[i]) ? function(current, create) {
        return function() {
          var par = this["parent"];
          this["parent"] = obj[current];
          var cssobj = create["apply"](this, arguments);
          this["parent"] = par;
          return cssobj;
        };
      }(i, arr[i]) : arr[i];
    }
    params["prototype"] = seenGroups;
    /** @type {function(): ?} */
    params["prototype"]["constructor"] = params;
    params["extend"] = window["ig"]["Class"]["extend"];
    /** @type {function(!Array): undefined} */
    params["inject"] = forEach;
    /** @type {number} */
    params["classId"] = seenGroups["classId"] = ++k;
    return params;
  };
  if (window["ImpactMixin"]) {
    ig["merge"](ig, window["ImpactMixin"]);
  }
})(window);
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("impact.image")["defines"](function() {
  ig["Image"] = ig["Class"]["extend"]({
    "data" : null,
    "width" : 0,
    "height" : 0,
    "loaded" : false,
    "failed" : false,
    "loadCallback" : null,
    "path" : "",
    "staticInstantiate" : function(region) {
      return ig["Image"]["cache"][region] || null;
    },
    "init" : function(metadata) {
      this["path"] = metadata;
      this["load"]();
    },
    "load" : function(cb) {
      if (this["loaded"]) {
        if (cb) {
          cb(this["path"], true);
        }
      } else {
        if (!this["loaded"] && ig["ready"]) {
          this["loadCallback"] = cb || null;
          /** @type {!Image} */
          this["data"] = new Image;
          this["data"]["onload"] = this["onload"]["bind"](this);
          this["data"]["onerror"] = this["onerror"]["bind"](this);
          this["data"]["src"] = ig["prefix"] + this["path"] + ig["nocache"];
        } else {
          ig["addResource"](this);
        }
        ig["Image"]["cache"][this["path"]] = this;
      }
    },
    "reload" : function() {
      /** @type {boolean} */
      this["loaded"] = false;
      /** @type {!Image} */
      this["data"] = new Image;
      this["data"]["onload"] = this["onload"]["bind"](this);
      this["data"]["src"] = this["path"] + "?" + Date["now"]();
    },
    "onload" : function() {
      this["width"] = this["data"]["width"];
      this["height"] = this["data"]["height"];
      /** @type {boolean} */
      this["loaded"] = true;
      if (1 != ig["system"]["scale"]) {
        this["resize"](ig["system"]["scale"]);
      }
      if (this["loadCallback"]) {
        this["loadCallback"](this["path"], true);
      }
    },
    "onerror" : function() {
      /** @type {boolean} */
      this["failed"] = true;
      if (this["loadCallback"]) {
        this["loadCallback"](this["path"], false);
      }
    },
    "resize" : function(ratio) {
      var this_stream = ig["getImagePixels"](this["data"], 0, 0, this["width"], this["height"]);
      /** @type {number} */
      var width = this["width"] * ratio;
      /** @type {number} */
      var height = this["height"] * ratio;
      var canvas = ig["$new"]("canvas");
      /** @type {number} */
      canvas["width"] = width;
      /** @type {number} */
      canvas["height"] = height;
      var ctx = canvas["getContext"]("2d");
      var result = ctx["getImageData"](0, 0, width, height);
      /** @type {number} */
      var y = 0;
      for (; y < height; y++) {
        /** @type {number} */
        var height = 0;
        for (; height < width; height++) {
          /** @type {number} */
          var j = 4 * (Math["floor"](y / ratio) * this["width"] + Math["floor"](height / ratio));
          /** @type {number} */
          var i = 4 * (y * width + height);
          result["data"][i] = this_stream["data"][j];
          result["data"][i + 1] = this_stream["data"][j + 1];
          result["data"][i + 2] = this_stream["data"][j + 2];
          result["data"][i + 3] = this_stream["data"][j + 3];
        }
      }
      ctx["putImageData"](result, 0, 0);
      this["data"] = canvas;
    },
    "draw" : function(renderer, ctx, value, seconds, duration, offset) {
      if (this["loaded"]) {
        var sampleRate = ig["system"]["scale"];
        /** @type {number} */
        duration = (duration ? duration : this["width"]) * sampleRate;
        /** @type {number} */
        offset = (offset ? offset : this["height"]) * sampleRate;
        ig["system"]["context"]["drawImage"](this["data"], value ? value * sampleRate : 0, seconds ? seconds * sampleRate : 0, duration, offset, ig["system"]["getDrawPos"](renderer), ig["system"]["getDrawPos"](ctx), duration, offset);
        ig["Image"]["drawCount"]++;
      }
    },
    "drawTile" : function(subpal, i, value, number, type, data, parentData) {
      type = type ? type : number;
      if (this["loaded"] && !(number > this["width"] || type > this["height"])) {
        var howManyToRound = ig["system"]["scale"];
        var dataIdx = Math["floor"](number * howManyToRound);
        var GET_AUTH_URL_TIMEOUT = Math["floor"](type * howManyToRound);
        /** @type {number} */
        var testDataString = data ? -1 : 1;
        /** @type {number} */
        var ret = parentData ? -1 : 1;
        if (data || parentData) {
          ig["system"]["context"]["save"]();
          ig["system"]["context"]["scale"](testDataString, ret);
        }
        ig["system"]["context"]["drawImage"](this["data"], Math["floor"](value * number) % this["width"] * howManyToRound, Math["floor"](value * number / this["width"]) * type * howManyToRound, dataIdx, GET_AUTH_URL_TIMEOUT, ig["system"]["getDrawPos"](subpal) * testDataString - (data ? dataIdx : 0), ig["system"]["getDrawPos"](i) * ret - (parentData ? GET_AUTH_URL_TIMEOUT : 0), dataIdx, GET_AUTH_URL_TIMEOUT);
        if (data || parentData) {
          ig["system"]["context"]["restore"]();
        }
        ig["Image"]["drawCount"]++;
      }
    }
  });
  /** @type {number} */
  ig["Image"]["drawCount"] = 0;
  ig["Image"]["cache"] = {};
  /**
   * @return {undefined}
   */
  ig["Image"]["reloadCache"] = function() {
    var key;
    for (key in ig["Image"]["cache"]) {
      ig["Image"]["cache"][key]["reload"]();
    }
  };
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("impact.font")["requires"]("impact.image")["defines"](function() {
  ig["Font"] = ig["Image"]["extend"]({
    "widthMap" : [],
    "indices" : [],
    "firstChar" : 32,
    "alpha" : 1,
    "letterSpacing" : 1,
    "lineSpacing" : 0,
    "onload" : function(params) {
      this["_loadMetrics"](this["data"]);
      this["parent"](params);
    },
    "widthForString" : function(PL$15) {
      if (-1 !== PL$15["indexOf"]("\n")) {
        PL$15 = PL$15["split"]("\n");
        /** @type {number} */
        var deltaX = 0;
        /** @type {number} */
        var PL$14 = 0;
        for (; PL$14 < PL$15["length"]; PL$14++) {
          deltaX = Math["max"](deltaX, this["_widthForLine"](PL$15[PL$14]));
        }
        return deltaX;
      }
      return this["_widthForLine"](PL$15);
    },
    "_widthForLine" : function(PL$42) {
      /** @type {number} */
      var width = 0;
      /** @type {number} */
      var PL$41 = 0;
      for (; PL$41 < PL$42["length"]; PL$41++) {
        width = width + (this["widthMap"][PL$42["charCodeAt"](PL$41) - this["firstChar"]] + this["letterSpacing"]);
      }
      return width;
    },
    "heightForString" : function(classNames) {
      return classNames["split"]("\n")["length"] * (this["height"] + this["lineSpacing"]);
    },
    "draw" : function(data, size, c, n) {
      if ("string" != typeof data) {
        data = data["toString"]();
      }
      if (-1 !== data["indexOf"]("\n")) {
        data = data["split"]("\n");
        var dt = this["height"] + this["lineSpacing"];
        /** @type {number} */
        var i = 0;
        for (; i < data["length"]; i++) {
          this["draw"](data[i], size, c + i * dt, n);
        }
      } else {
        if (n == ig["Font"]["ALIGN"]["RIGHT"] || n == ig["Font"]["ALIGN"]["CENTER"]) {
          i = this["_widthForLine"](data);
          /** @type {number} */
          size = size - (n == ig["Font"]["ALIGN"]["CENTER"] ? i / 2 : i);
        }
        if (1 !== this["alpha"]) {
          ig["system"]["context"]["globalAlpha"] = this["alpha"];
        }
        /** @type {number} */
        i = 0;
        for (; i < data["length"]; i++) {
          n = data["charCodeAt"](i);
          size = size + this["_drawChar"](n - this["firstChar"], size, c);
        }
        if (1 !== this["alpha"]) {
          /** @type {number} */
          ig["system"]["context"]["globalAlpha"] = 1;
        }
        ig["Image"]["drawCount"] += data["length"];
      }
    },
    "_drawChar" : function(index, sync, er) {
      if (!this["loaded"] || 0 > index || index >= this["indices"]["length"]) {
        return 0;
      }
      var scale = ig["system"]["scale"];
      /** @type {number} */
      var xPadding = this["widthMap"][index] * scale;
      /** @type {number} */
      var tbound = (this["height"] - 2) * scale;
      ig["system"]["context"]["drawImage"](this["data"], this["indices"][index] * scale, 0, xPadding, tbound, ig["system"]["getDrawPos"](sync), ig["system"]["getDrawPos"](er), xPadding, tbound);
      return this["widthMap"][index] + this["letterSpacing"];
    },
    "_loadMetrics" : function(value) {
      /** @type {number} */
      this["height"] = value["height"] - 1;
      /** @type {!Array} */
      this["widthMap"] = [];
      /** @type {!Array} */
      this["indices"] = [];
      var output = ig["getImagePixels"](value, 0, value["height"] - 1, value["width"], 1);
      /** @type {number} */
      var _0xd77dd9 = 0;
      /** @type {number} */
      var r = 0;
      /** @type {number} */
      var rHeaviestRain = 0;
      for (; rHeaviestRain < value["width"]; rHeaviestRain++) {
        /** @type {number} */
        var i = 4 * rHeaviestRain + 3;
        if (127 < output["data"][i]) {
          r++;
        } else {
          if (128 > output["data"][i] && r) {
            this["widthMap"]["push"](r);
            this["indices"]["push"](rHeaviestRain - r);
            _0xd77dd9++;
            /** @type {number} */
            r = 0;
          }
        }
      }
      this["widthMap"]["push"](r);
      this["indices"]["push"](rHeaviestRain - r);
    }
  });
  ig["Font"]["ALIGN"] = {
    "LEFT" : 0,
    "RIGHT" : 1,
    "CENTER" : 2
  };
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("impact.sound")["defines"](function() {
  ig["SoundManager"] = ig["Class"]["extend"]({
    "clips" : {},
    "volume" : 1,
    "format" : null,
    "init" : function() {
      if (!ig["Sound"]["enabled"] || !window["Audio"]) {
        /** @type {boolean} */
        ig["Sound"]["enabled"] = false;
      } else {
        /** @type {!Audio} */
        var packByNumType = new Audio;
        /** @type {number} */
        var i = 0;
        for (; i < ig["Sound"]["use"]["length"]; i++) {
          var data = ig["Sound"]["use"][i];
          if (packByNumType["canPlayType"](data["mime"])) {
            this["format"] = data;
            break;
          }
        }
        if (!this["format"]) {
          /** @type {boolean} */
          ig["Sound"]["enabled"] = false;
        }
      }
    },
    "load" : function(type, cls, outerListener) {
      var url = ig["prefix"] + type["replace"](/[^\.]+$/, this["format"]["ext"]) + ig["nocache"];
      if (this["clips"][type]) {
        if (cls && this["clips"][type]["length"] < ig["Sound"]["channels"]) {
          cls = this["clips"][type]["length"];
          for (; cls < ig["Sound"]["channels"]; cls++) {
            /** @type {!Audio} */
            var audio = new Audio(url);
            audio["load"]();
            this["clips"][type]["push"](audio);
          }
        }
        return this["clips"][type][0];
      }
      /** @type {!Audio} */
      var config = new Audio(url);
      if (outerListener) {
        config["addEventListener"]("canplaythrough", function listener(versionUpdate) {
          config["removeEventListener"]("canplaythrough", listener, false);
          outerListener(type, true, versionUpdate);
        }, false);
        config["addEventListener"]("error", function(versionUpdate) {
          outerListener(type, false, versionUpdate);
        }, false);
      }
      /** @type {string} */
      config["preload"] = "auto";
      config["load"]();
      /** @type {!Array} */
      this["clips"][type] = [config];
      if (cls) {
        /** @type {number} */
        cls = 1;
        for (; cls < ig["Sound"]["channels"]; cls++) {
          /** @type {!Audio} */
          audio = new Audio(url);
          audio["load"]();
          this["clips"][type]["push"](audio);
        }
      }
      return config;
    },
    "get" : function(f) {
      f = this["clips"][f];
      /** @type {number} */
      var fpt = 0;
      var self;
      for (; self = f[fpt++];) {
        if (self["paused"] || self["ended"]) {
          return self["ended"] && (self["currentTime"] = 0), self;
        }
      }
      f[0]["pause"]();
      /** @type {number} */
      f[0]["currentTime"] = 0;
      return f[0];
    }
  });
  ig["Music"] = ig["Class"]["extend"]({
    "tracks" : [],
    "namedTracks" : {},
    "currentTrack" : null,
    "currentIndex" : 0,
    "random" : false,
    "_volume" : 1,
    "_loop" : false,
    "_fadeInterval" : 0,
    "_fadeTimer" : null,
    "_endedCallbackBound" : null,
    "init" : function() {
      this["_endedCallbackBound"] = this["_endedCallback"]["bind"](this);
      if (Object["defineProperty"]) {
        Object["defineProperty"](this, "volume", {
          "get" : this["getVolume"]["bind"](this),
          "set" : this["setVolume"]["bind"](this)
        });
        Object["defineProperty"](this, "loop", {
          "get" : this["getLooping"]["bind"](this),
          "set" : this["setLooping"]["bind"](this)
        });
      } else {
        if (this["__defineGetter__"]) {
          this["__defineGetter__"]("volume", this["getVolume"]["bind"](this));
          this["__defineSetter__"]("volume", this["setVolume"]["bind"](this));
          this["__defineGetter__"]("loop", this["getLooping"]["bind"](this));
          this["__defineSetter__"]("loop", this["setLooping"]["bind"](this));
        }
      }
    },
    "add" : function(model, instanceId) {
      if (ig["Sound"]["enabled"]) {
        var video = ig["soundManager"]["load"](model instanceof ig["Sound"] ? model["path"] : model, false);
        video["loop"] = this["_loop"];
        video["volume"] = this["_volume"];
        video["addEventListener"]("ended", this["_endedCallbackBound"], false);
        this["tracks"]["push"](video);
        if (instanceId) {
          this["namedTracks"][instanceId] = video;
        }
        if (!this["currentTrack"]) {
          this["currentTrack"] = video;
        }
      }
    },
    "next" : function() {
      if (this["tracks"]["length"]) {
        this["stop"]();
        this["currentIndex"] = this["random"] ? Math["floor"](Math["random"]() * this["tracks"]["length"]) : (this["currentIndex"] + 1) % this["tracks"]["length"];
        this["currentTrack"] = this["tracks"][this["currentIndex"]];
        this["play"]();
      }
    },
    "pause" : function() {
      if (this["currentTrack"]) {
        this["currentTrack"]["pause"]();
      }
    },
    "stop" : function() {
      if (this["currentTrack"]) {
        this["currentTrack"]["pause"]();
        /** @type {number} */
        this["currentTrack"]["currentTime"] = 0;
      }
    },
    "play" : function(id) {
      if (id && this["namedTracks"][id]) {
        id = this["namedTracks"][id];
        if (id != this["currentTrack"]) {
          this["stop"]();
          this["currentTrack"] = id;
        }
      } else {
        if (!this["currentTrack"]) {
          return;
        }
      }
      this["currentTrack"]["play"]();
    },
    "getLooping" : function() {
      return this["_loop"];
    },
    "setLooping" : function(loop) {
      this["_loop"] = loop;
      var i;
      for (i in this["tracks"]) {
        this["tracks"][i]["loop"] = loop;
      }
    },
    "getVolume" : function() {
      return this["_volume"];
    },
    "setVolume" : function(params) {
      this["_volume"] = params["limit"](0, 1);
      var id;
      for (id in this["tracks"]) {
        this["tracks"][id]["volume"] = this["_volume"];
      }
    },
    "fadeOut" : function(targetVol) {
      if (this["currentTrack"]) {
        clearInterval(this["_fadeInterval"]);
        this["fadeTimer"] = new ig["Timer"](targetVol);
        /** @type {number} */
        this["_fadeInterval"] = setInterval(this["_fadeStep"]["bind"](this), 50);
      }
    },
    "_fadeStep" : function() {
      /** @type {number} */
      var currentVolume = this["fadeTimer"]["delta"]()["map"](-this["fadeTimer"]["target"], 0, 1, 0)["limit"](0, 1) * this["_volume"];
      if (0.01 >= currentVolume) {
        this["stop"]();
        this["currentTrack"]["volume"] = this["_volume"];
        clearInterval(this["_fadeInterval"]);
      } else {
        /** @type {number} */
        this["currentTrack"]["volume"] = currentVolume;
      }
    },
    "_endedCallback" : function() {
      if (this["_loop"]) {
        this["play"]();
      } else {
        this["next"]();
      }
    }
  });
  ig["Sound"] = ig["Class"]["extend"]({
    "path" : "",
    "volume" : 1,
    "currentClip" : null,
    "multiChannel" : true,
    "init" : function(flightPhase, navigationLibrary) {
      this["path"] = flightPhase;
      /** @type {boolean} */
      this["multiChannel"] = false !== navigationLibrary;
      this["load"]();
    },
    "load" : function(cb) {
      if (ig["Sound"]["enabled"]) {
        if (ig["ready"]) {
          ig["soundManager"]["load"](this["path"], this["multiChannel"], cb);
        } else {
          ig["addResource"](this);
        }
      } else {
        if (cb) {
          cb(this["path"], true);
        }
      }
    },
    "play" : function() {
      if (ig["Sound"]["enabled"]) {
        this["currentClip"] = ig["soundManager"]["get"](this["path"]);
        /** @type {number} */
        this["currentClip"]["volume"] = ig["soundManager"]["volume"] * this["volume"];
        this["currentClip"]["play"]();
      }
    },
    "stop" : function() {
      if (this["currentClip"]) {
        this["currentClip"]["pause"]();
        /** @type {number} */
        this["currentClip"]["currentTime"] = 0;
      }
    }
  });
  ig["Sound"]["FORMAT"] = {
    "MP3" : {
      "ext" : "mp3",
      "mime" : "audio/mpeg"
    },
    "M4A" : {
      "ext" : "m4a",
      "mime" : "audio/mp4; codecs=mp4a"
    },
    "OGG" : {
      "ext" : "ogg",
      "mime" : "audio/ogg; codecs=vorbis"
    },
    "WEBM" : {
      "ext" : "webm",
      "mime" : "audio/webm; codecs=vorbis"
    },
    "CAF" : {
      "ext" : "caf",
      "mime" : "audio/x-caf"
    }
  };
  /** @type {!Array} */
  ig["Sound"]["use"] = [ig["Sound"]["FORMAT"]["OGG"], ig["Sound"]["FORMAT"]["MP3"]];
  /** @type {number} */
  ig["Sound"]["channels"] = 4;
  /** @type {boolean} */
  ig["Sound"]["enabled"] = true;
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("impact.loader")["requires"]("impact.image", "impact.font", "impact.sound")["defines"](function() {
  ig["Loader"] = ig["Class"]["extend"]({
    "resources" : [],
    "gameClass" : null,
    "status" : 0,
    "done" : false,
    "_unloaded" : [],
    "_drawStatus" : 0,
    "_intervalId" : 0,
    "_loadCallbackBound" : null,
    "init" : function(host, resources) {
      this["gameClass"] = host;
      this["resources"] = resources;
      this["_loadCallbackBound"] = this["_loadCallback"]["bind"](this);
      /** @type {number} */
      var i = 0;
      for (; i < this["resources"]["length"]; i++) {
        this["_unloaded"]["push"](this["resources"][i]["path"]);
      }
    },
    "load" : function() {
      ig["system"]["clear"]("#000");
      if (this["resources"]["length"]) {
        /** @type {number} */
        var i = 0;
        for (; i < this["resources"]["length"]; i++) {
          this["loadResource"](this["resources"][i]);
        }
        /** @type {number} */
        this["_intervalId"] = setInterval(this["draw"]["bind"](this), 16);
      } else {
        this["end"]();
      }
    },
    "loadResource" : function(config) {
      config["load"](this["_loadCallbackBound"]);
    },
    "end" : function() {
      if (!this["done"]) {
        /** @type {boolean} */
        this["done"] = true;
        clearInterval(this["_intervalId"]);
      }
    },
    "draw" : function() {
    },
    "_loadCallback" : function(mmCoreSplitViewBlock, $state) {
      if ($state) {
        this["_unloaded"]["erase"](mmCoreSplitViewBlock);
      } else {
        throw "Failed to load resource: " + mmCoreSplitViewBlock;
      }
      /** @type {number} */
      this["status"] = 1 - this["_unloaded"]["length"] / this["resources"]["length"];
      if (0 == this["_unloaded"]["length"]) {
        setTimeout(this["end"]["bind"](this), 250);
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("impact.timer")["defines"](function() {
  ig["Timer"] = ig["Class"]["extend"]({
    "target" : 0,
    "base" : 0,
    "last" : 0,
    "pausedAt" : 0,
    "init" : function(flightPhase) {
      this["last"] = this["base"] = ig["Timer"]["time"];
      this["target"] = flightPhase || 0;
    },
    "set" : function(mymuted) {
      this["target"] = mymuted || 0;
      this["base"] = ig["Timer"]["time"];
      /** @type {number} */
      this["pausedAt"] = 0;
    },
    "reset" : function() {
      this["base"] = ig["Timer"]["time"];
      /** @type {number} */
      this["pausedAt"] = 0;
    },
    "tick" : function() {
      /** @type {number} */
      var _0x3ccdf7 = ig["Timer"]["time"] - this["last"];
      this["last"] = ig["Timer"]["time"];
      return this["pausedAt"] ? 0 : _0x3ccdf7;
    },
    "delta" : function() {
      return (this["pausedAt"] || ig["Timer"]["time"]) - this["base"] - this["target"];
    },
    "pause" : function() {
      if (!this["pausedAt"]) {
        this["pausedAt"] = ig["Timer"]["time"];
      }
    },
    "unpause" : function() {
      if (this["pausedAt"]) {
        this["base"] += ig["Timer"]["time"] - this["pausedAt"];
        /** @type {number} */
        this["pausedAt"] = 0;
      }
    }
  });
  /** @type {number} */
  ig["Timer"]["_last"] = 0;
  ig["Timer"]["time"] = Number["MIN_VALUE"];
  /** @type {number} */
  ig["Timer"]["timeScale"] = 1;
  /** @type {number} */
  ig["Timer"]["maxStep"] = 0.05;
  /**
   * @return {undefined}
   */
  ig["Timer"]["step"] = function() {
    var _0x1e0f9d = Date["now"]();
    ig["Timer"]["time"] += Math["min"]((_0x1e0f9d - ig["Timer"]["_last"]) / 1E3, ig["Timer"]["maxStep"]) * ig["Timer"]["timeScale"];
    ig["Timer"]["_last"] = _0x1e0f9d;
  };
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("impact.system")["requires"]("impact.timer", "impact.image")["defines"](function() {
  ig["System"] = ig["Class"]["extend"]({
    "fps" : 30,
    "width" : 320,
    "height" : 240,
    "realWidth" : 320,
    "realHeight" : 240,
    "scale" : 1,
    "tick" : 0,
    "animationId" : 0,
    "newGameClass" : null,
    "running" : false,
    "delegate" : null,
    "clock" : null,
    "canvas" : null,
    "context" : null,
    "init" : function(routeSegment, runway, flightPhase, navigationLibrary, airportController) {
      this["fps"] = runway;
      this["clock"] = new ig["Timer"];
      this["canvas"] = ig["$"](routeSegment);
      this["resize"](flightPhase, navigationLibrary, airportController);
      this["context"] = this["canvas"]["getContext"]("2d");
      this["getDrawPos"] = ig["System"]["drawMode"];
      if (1 != this["scale"]) {
        ig["System"]["scaleMode"] = ig["System"]["SCALE"]["CRISP"];
      }
      ig["System"]["scaleMode"](this["canvas"], this["context"]);
    },
    "resize" : function(width, height, isContentHeight) {
      this["width"] = width;
      this["height"] = height;
      this["scale"] = isContentHeight || this["scale"];
      /** @type {number} */
      this["realWidth"] = this["width"] * this["scale"];
      /** @type {number} */
      this["realHeight"] = this["height"] * this["scale"];
      this["canvas"]["width"] = this["realWidth"];
      this["canvas"]["height"] = this["realHeight"];
    },
    "setGame" : function(game) {
      if (this["running"]) {
        this["newGameClass"] = game;
      } else {
        this["setGameNow"](game);
      }
    },
    "setGameNow" : function(gameClass) {
      ig["game"] = new gameClass;
      ig["system"]["setDelegate"](ig["game"]);
    },
    "setDelegate" : function(delegate) {
      if ("function" == typeof delegate["run"]) {
        /** @type {!Object} */
        this["delegate"] = delegate;
        this["startRunLoop"]();
      } else {
        throw "System.setDelegate: No run() function in object";
      }
    },
    "stopRunLoop" : function() {
      ig["clearAnimation"](this["animationId"]);
      /** @type {boolean} */
      this["running"] = false;
    },
    "startRunLoop" : function() {
      this["stopRunLoop"]();
      this["animationId"] = ig["setAnimation"](this["run"]["bind"](this), this["canvas"]);
      /** @type {boolean} */
      this["running"] = true;
    },
    "clear" : function(color) {
      this["context"]["fillStyle"] = color;
      this["context"]["fillRect"](0, 0, this["realWidth"], this["realHeight"]);
    },
    "run" : function() {
      ig["Timer"]["step"]();
      this["tick"] = this["clock"]["tick"]();
      this["delegate"]["run"]();
      ig["input"]["clearPressed"]();
      if (this["newGameClass"]) {
        this["setGameNow"](this["newGameClass"]);
        /** @type {null} */
        this["newGameClass"] = null;
      }
    },
    "getDrawPos" : null
  });
  ig["System"]["DRAW"] = {
    "AUTHENTIC" : function(value) {
      return Math["round"](value) * this["scale"];
    },
    "SMOOTH" : function(val) {
      return Math["round"](val * this["scale"]);
    },
    "SUBPIXEL" : function(h) {
      return h * this["scale"];
    }
  };
  ig["System"]["drawMode"] = ig["System"]["DRAW"]["SMOOTH"];
  ig["System"]["SCALE"] = {
    "CRISP" : function(o, shft) {
      ig["setVendorAttribute"](shft, "imageSmoothingEnabled", false);
      /** @type {string} */
      o["style"]["imageRendering"] = "-moz-crisp-edges";
      /** @type {string} */
      o["style"]["imageRendering"] = "-o-crisp-edges";
      /** @type {string} */
      o["style"]["imageRendering"] = "-webkit-optimize-contrast";
      /** @type {string} */
      o["style"]["imageRendering"] = "crisp-edges";
      /** @type {string} */
      o["style"]["msInterpolationMode"] = "nearest-neighbor";
    },
    "SMOOTH" : function(o, shft) {
      ig["setVendorAttribute"](shft, "imageSmoothingEnabled", true);
      /** @type {string} */
      o["style"]["imageRendering"] = "";
      /** @type {string} */
      o["style"]["msInterpolationMode"] = "";
    }
  };
  ig["System"]["scaleMode"] = ig["System"]["SCALE"]["SMOOTH"];
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("impact.input")["defines"](function() {
  ig["KEY"] = {
    "MOUSE1" : -1,
    "MOUSE2" : -3,
    "MWHEEL_UP" : -4,
    "MWHEEL_DOWN" : -5,
    "BACKSPACE" : 8,
    "TAB" : 9,
    "ENTER" : 13,
    "PAUSE" : 19,
    "CAPS" : 20,
    "ESC" : 27,
    "SPACE" : 32,
    "PAGE_UP" : 33,
    "PAGE_DOWN" : 34,
    "END" : 35,
    "HOME" : 36,
    "LEFT_ARROW" : 37,
    "UP_ARROW" : 38,
    "RIGHT_ARROW" : 39,
    "DOWN_ARROW" : 40,
    "INSERT" : 45,
    "DELETE" : 46,
    "_0" : 48,
    "_1" : 49,
    "_2" : 50,
    "_3" : 51,
    "_4" : 52,
    "_5" : 53,
    "_6" : 54,
    "_7" : 55,
    "_8" : 56,
    "_9" : 57,
    "A" : 65,
    "B" : 66,
    "C" : 67,
    "D" : 68,
    "E" : 69,
    "F" : 70,
    "G" : 71,
    "H" : 72,
    "I" : 73,
    "J" : 74,
    "K" : 75,
    "L" : 76,
    "M" : 77,
    "N" : 78,
    "O" : 79,
    "P" : 80,
    "Q" : 81,
    "R" : 82,
    "S" : 83,
    "T" : 84,
    "U" : 85,
    "V" : 86,
    "W" : 87,
    "X" : 88,
    "Y" : 89,
    "Z" : 90,
    "NUMPAD_0" : 96,
    "NUMPAD_1" : 97,
    "NUMPAD_2" : 98,
    "NUMPAD_3" : 99,
    "NUMPAD_4" : 100,
    "NUMPAD_5" : 101,
    "NUMPAD_6" : 102,
    "NUMPAD_7" : 103,
    "NUMPAD_8" : 104,
    "NUMPAD_9" : 105,
    "MULTIPLY" : 106,
    "ADD" : 107,
    "SUBSTRACT" : 109,
    "DECIMAL" : 110,
    "DIVIDE" : 111,
    "F1" : 112,
    "F2" : 113,
    "F3" : 114,
    "F4" : 115,
    "F5" : 116,
    "F6" : 117,
    "F7" : 118,
    "F8" : 119,
    "F9" : 120,
    "F10" : 121,
    "F11" : 122,
    "F12" : 123,
    "SHIFT" : 16,
    "CTRL" : 17,
    "ALT" : 18,
    "PLUS" : 187,
    "COMMA" : 188,
    "MINUS" : 189,
    "PERIOD" : 190
  };
  ig["Input"] = ig["Class"]["extend"]({
    "bindings" : {},
    "actions" : {},
    "presses" : {},
    "locks" : {},
    "delayedKeyup" : {},
    "isUsingMouse" : false,
    "isUsingKeyboard" : false,
    "isUsingAccelerometer" : false,
    "mouse" : {
      "x" : 0,
      "y" : 0
    },
    "accel" : {
      "x" : 0,
      "y" : 0,
      "z" : 0
    },
    "initMouse" : function() {
      if (!this["isUsingMouse"]) {
        /** @type {boolean} */
        this["isUsingMouse"] = true;
        var onKeyDown = this["mousewheel"]["bind"](this);
        ig["system"]["canvas"]["addEventListener"]("mousewheel", onKeyDown, false);
        ig["system"]["canvas"]["addEventListener"]("DOMMouseScroll", onKeyDown, false);
        ig["system"]["canvas"]["addEventListener"]("contextmenu", this["contextmenu"]["bind"](this), false);
        ig["system"]["canvas"]["addEventListener"]("mousedown", this["keydown"]["bind"](this), false);
        ig["system"]["canvas"]["addEventListener"]("mouseup", this["keyup"]["bind"](this), false);
        ig["system"]["canvas"]["addEventListener"]("mousemove", this["mousemove"]["bind"](this), false);
        if (ig["ua"]["touchDevice"]) {
          ig["system"]["canvas"]["addEventListener"]("touchstart", this["keydown"]["bind"](this), false);
          ig["system"]["canvas"]["addEventListener"]("touchend", this["keyup"]["bind"](this), false);
          ig["system"]["canvas"]["addEventListener"]("touchmove", this["mousemove"]["bind"](this), false);
          ig["system"]["canvas"]["addEventListener"]("MSPointerDown", this["keydown"]["bind"](this), false);
          ig["system"]["canvas"]["addEventListener"]("MSPointerUp", this["keyup"]["bind"](this), false);
          ig["system"]["canvas"]["addEventListener"]("MSPointerMove", this["mousemove"]["bind"](this), false);
          /** @type {string} */
          ig["system"]["canvas"]["style"]["msTouchAction"] = "none";
        }
      }
    },
    "initKeyboard" : function() {
      if (!this["isUsingKeyboard"]) {
        /** @type {boolean} */
        this["isUsingKeyboard"] = true;
        window["addEventListener"]("keydown", this["keydown"]["bind"](this), false);
        window["addEventListener"]("keyup", this["keyup"]["bind"](this), false);
      }
    },
    "initAccelerometer" : function() {
      if (!this["isUsingAccelerometer"]) {
        window["addEventListener"]("devicemotion", this["devicemotion"]["bind"](this), false);
      }
    },
    "mousewheel" : function(event) {
      var i = this["bindings"][0 < (event["wheelDelta"] ? event["wheelDelta"] : -1 * event["detail"]) ? ig["KEY"]["MWHEEL_UP"] : ig["KEY"]["MWHEEL_DOWN"]];
      if (i) {
        /** @type {boolean} */
        this["actions"][i] = true;
        /** @type {boolean} */
        this["presses"][i] = true;
        /** @type {boolean} */
        this["delayedKeyup"][i] = true;
        event["stopPropagation"]();
        event["preventDefault"]();
      }
    },
    "mousemove" : function(e) {
      var d = parseInt(ig["system"]["canvas"]["offsetWidth"]) || ig["system"]["realWidth"];
      /** @type {number} */
      d = ig["system"]["scale"] * (d / ig["system"]["realWidth"]);
      var offset = {
        "left" : 0,
        "top" : 0
      };
      if (ig["system"]["canvas"]["getBoundingClientRect"]) {
        offset = ig["system"]["canvas"]["getBoundingClientRect"]();
      }
      e = e["touches"] ? e["touches"][0] : e;
      /** @type {number} */
      this["mouse"]["x"] = (e["clientX"] - offset["left"]) / d;
      /** @type {number} */
      this["mouse"]["y"] = (e["clientY"] - offset["top"]) / d;
    },
    "contextmenu" : function(event) {
      if (this["bindings"][ig["KEY"]["MOUSE2"]]) {
        event["stopPropagation"]();
        event["preventDefault"]();
      }
    },
    "keydown" : function(event) {
      var p = event["target"]["tagName"];
      if (!("INPUT" == p || "TEXTAREA" == p)) {
        if (p = "keydown" == event["type"] ? event["keyCode"] : 2 == event["button"] ? ig["KEY"]["MOUSE2"] : ig["KEY"]["MOUSE1"], ("touchstart" == event["type"] || "mousedown" == event["type"]) && this["mousemove"](event), p = this["bindings"][p]) {
          /** @type {boolean} */
          this["actions"][p] = true;
          if (!this["locks"][p]) {
            /** @type {boolean} */
            this["presses"][p] = true;
            /** @type {boolean} */
            this["locks"][p] = true;
          }
          event["stopPropagation"]();
          event["preventDefault"]();
        }
      }
    },
    "keyup" : function(e) {
      var type = e["target"]["tagName"];
      if (!("INPUT" == type || "TEXTAREA" == type)) {
        if (type = this["bindings"]["keyup" == e["type"] ? e["keyCode"] : 2 == e["button"] ? ig["KEY"]["MOUSE2"] : ig["KEY"]["MOUSE1"]]) {
          /** @type {boolean} */
          this["delayedKeyup"][type] = true;
          e["stopPropagation"]();
          e["preventDefault"]();
        }
      }
    },
    "devicemotion" : function(evt) {
      this["accel"] = evt["accelerationIncludingGravity"];
    },
    "bind" : function(p, n) {
      if (0 > p) {
        this["initMouse"]();
      } else {
        if (0 < p) {
          this["initKeyboard"]();
        }
      }
      this["bindings"][p] = n;
    },
    "bindTouch" : function(selector, callback) {
      var elem = ig["$"](selector);
      var ftc = this;
      elem["addEventListener"]("touchstart", function(arg) {
        ftc["touchStart"](arg, callback);
      }, false);
      elem["addEventListener"]("touchend", function(arg) {
        ftc["touchEnd"](arg, callback);
      }, false);
      elem["addEventListener"]("MSPointerDown", function(arg) {
        ftc["touchStart"](arg, callback);
      }, false);
      elem["addEventListener"]("MSPointerUp", function(arg) {
        ftc["touchEnd"](arg, callback);
      }, false);
    },
    "unbind" : function(targetKey) {
      /** @type {boolean} */
      this["delayedKeyup"][this["bindings"][targetKey]] = true;
      /** @type {null} */
      this["bindings"][targetKey] = null;
    },
    "unbindAll" : function() {
      this["bindings"] = {};
      this["actions"] = {};
      this["presses"] = {};
      this["locks"] = {};
      this["delayedKeyup"] = {};
    },
    "state" : function(name) {
      return this["actions"][name];
    },
    "pressed" : function(flag) {
      return this["presses"][flag];
    },
    "released" : function(action) {
      return !!this["delayedKeyup"][action];
    },
    "clearPressed" : function() {
      var i;
      for (i in this["delayedKeyup"]) {
        /** @type {boolean} */
        this["actions"][i] = false;
        /** @type {boolean} */
        this["locks"][i] = false;
      }
      this["delayedKeyup"] = {};
      this["presses"] = {};
    },
    "touchStart" : function(event, i) {
      /** @type {boolean} */
      this["actions"][i] = true;
      /** @type {boolean} */
      this["presses"][i] = true;
      event["stopPropagation"]();
      event["preventDefault"]();
      return false;
    },
    "touchEnd" : function(event, view) {
      /** @type {boolean} */
      this["delayedKeyup"][view] = true;
      event["stopPropagation"]();
      event["preventDefault"]();
      return false;
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("impact.impact")["requires"]("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound")["defines"](function() {
  /**
   * @param {number} canCreateDiscussions
   * @param {?} data
   * @param {number} isSlidingUp
   * @param {number} dontForceConstraints
   * @param {number} forceExecution
   * @param {number} mmCoreSecondsYear
   * @param {?} f
   * @return {undefined}
   */
  ig["main"] = function(canCreateDiscussions, data, isSlidingUp, dontForceConstraints, forceExecution, mmCoreSecondsYear, f) {
    ig["system"] = new ig["System"](canCreateDiscussions, isSlidingUp, dontForceConstraints, forceExecution, mmCoreSecondsYear || 1);
    ig["input"] = new ig["Input"];
    ig["soundManager"] = new ig["SoundManager"];
    ig["music"] = new ig["Music"];
    /** @type {boolean} */
    ig["ready"] = true;
    (new (f || ig["Loader"])(data, ig["resources"]))["load"]();
  };
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("impact.animation")["requires"]("impact.timer", "impact.image")["defines"](function() {
  ig["AnimationSheet"] = ig["Class"]["extend"]({
    "width" : 8,
    "height" : 8,
    "image" : null,
    "init" : function(context, width, height) {
      this["width"] = width;
      this["height"] = height;
      this["image"] = new ig["Image"](context);
    }
  });
  ig["Animation"] = ig["Class"]["extend"]({
    "sheet" : null,
    "timer" : null,
    "sequence" : [],
    "flip" : {
      "x" : false,
      "y" : false
    },
    "pivot" : {
      "x" : 0,
      "y" : 0
    },
    "frame" : 0,
    "tile" : 0,
    "loopCount" : 0,
    "alpha" : 1,
    "angle" : 0,
    "init" : function(settings, metadata, value, opt_pass) {
      /** @type {!Object} */
      this["sheet"] = settings;
      this["pivot"] = {
        "x" : settings["width"] / 2,
        "y" : settings["height"] / 2
      };
      this["timer"] = new ig["Timer"];
      this["frameTime"] = metadata;
      this["sequence"] = value;
      /** @type {boolean} */
      this["stop"] = !!opt_pass;
      this["tile"] = this["sequence"][0];
    },
    "rewind" : function() {
      this["timer"]["set"]();
      /** @type {number} */
      this["frame"] = this["loopCount"] = 0;
      this["tile"] = this["sequence"][0];
      return this;
    },
    "gotoFrame" : function(name) {
      this["timer"]["set"](this["frameTime"] * -name - 0.0001);
      this["update"]();
    },
    "gotoRandomFrame" : function() {
      this["gotoFrame"](Math["floor"](Math["random"]() * this["sequence"]["length"]));
    },
    "update" : function() {
      var delta = Math["floor"](this["timer"]["delta"]() / this["frameTime"]);
      this["loopCount"] = Math["floor"](delta / this["sequence"]["length"]);
      /** @type {number} */
      this["frame"] = this["stop"] && 0 < this["loopCount"] ? this["sequence"]["length"] - 1 : delta % this["sequence"]["length"];
      this["tile"] = this["sequence"][this["frame"]];
    },
    "draw" : function(x, y) {
      var half_brush_size = Math["max"](this["sheet"]["width"], this["sheet"]["height"]);
      if (!(x > ig["system"]["width"] || y > ig["system"]["height"] || (0 > x + half_brush_size || 0 > y + half_brush_size))) {
        if (1 != this["alpha"]) {
          ig["system"]["context"]["globalAlpha"] = this["alpha"];
        }
        if (0 == this["angle"]) {
          this["sheet"]["image"]["drawTile"](x, y, this["tile"], this["sheet"]["width"], this["sheet"]["height"], this["flip"]["x"], this["flip"]["y"]);
        } else {
          ig["system"]["context"]["save"]();
          ig["system"]["context"]["translate"](ig["system"]["getDrawPos"](x + this["pivot"]["x"]), ig["system"]["getDrawPos"](y + this["pivot"]["y"]));
          ig["system"]["context"]["rotate"](this["angle"]);
          this["sheet"]["image"]["drawTile"](-this["pivot"]["x"], -this["pivot"]["y"], this["tile"], this["sheet"]["width"], this["sheet"]["height"], this["flip"]["x"], this["flip"]["y"]);
          ig["system"]["context"]["restore"]();
        }
        if (1 != this["alpha"]) {
          /** @type {number} */
          ig["system"]["context"]["globalAlpha"] = 1;
        }
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("impact.entity")["requires"]("impact.animation", "impact.impact")["defines"](function() {
  ig["Entity"] = ig["Class"]["extend"]({
    "id" : 0,
    "settings" : {},
    "size" : {
      "x" : 16,
      "y" : 16
    },
    "offset" : {
      "x" : 0,
      "y" : 0
    },
    "pos" : {
      "x" : 0,
      "y" : 0
    },
    "last" : {
      "x" : 0,
      "y" : 0
    },
    "vel" : {
      "x" : 0,
      "y" : 0
    },
    "accel" : {
      "x" : 0,
      "y" : 0
    },
    "friction" : {
      "x" : 0,
      "y" : 0
    },
    "maxVel" : {
      "x" : 100,
      "y" : 100
    },
    "zIndex" : 0,
    "gravityFactor" : 1,
    "standing" : false,
    "bounciness" : 0,
    "minBounceVelocity" : 40,
    "anims" : {},
    "animSheet" : null,
    "currentAnim" : null,
    "health" : 10,
    "type" : 0,
    "checkAgainst" : 0,
    "collides" : 0,
    "_killed" : false,
    "slopeStanding" : {
      "min" : 44["toRad"](),
      "max" : 136["toRad"]()
    },
    "init" : function(combo, index, flightPhase) {
      /** @type {number} */
      this["id"] = ++ig["Entity"]["_lastId"];
      this["pos"]["x"] = this["last"]["x"] = combo;
      this["pos"]["y"] = this["last"]["y"] = index;
      ig["merge"](this, flightPhase);
    },
    "reset" : function(row, position, new_tuple) {
      var data = this["constructor"]["prototype"];
      this["pos"]["x"] = row;
      this["pos"]["y"] = position;
      this["last"]["x"] = row;
      this["last"]["y"] = position;
      this["vel"]["x"] = data["vel"]["x"];
      this["vel"]["y"] = data["vel"]["y"];
      this["accel"]["x"] = data["accel"]["x"];
      this["accel"]["y"] = data["accel"]["y"];
      this["health"] = data["health"];
      this["_killed"] = data["_killed"];
      this["standing"] = data["standing"];
      this["type"] = data["type"];
      this["checkAgainst"] = data["checkAgainst"];
      this["collides"] = data["collides"];
      ig["merge"](this, new_tuple);
    },
    "addAnim" : function(name, map, letter, key) {
      if (!this["animSheet"]) {
        throw "No animSheet to add the animation " + name + " to.";
      }
      map = new ig["Animation"](this["animSheet"], map, letter, key);
      /** @type {string} */
      this["anims"][name] = map;
      if (!this["currentAnim"]) {
        /** @type {string} */
        this["currentAnim"] = map;
      }
      return map;
    },
    "update" : function() {
      this["last"]["x"] = this["pos"]["x"];
      this["last"]["y"] = this["pos"]["y"];
      this["vel"]["y"] += ig["game"]["gravity"] * ig["system"]["tick"] * this["gravityFactor"];
      this["vel"]["x"] = this["getNewVelocity"](this["vel"]["x"], this["accel"]["x"], this["friction"]["x"], this["maxVel"]["x"]);
      this["vel"]["y"] = this["getNewVelocity"](this["vel"]["y"], this["accel"]["y"], this["friction"]["y"], this["maxVel"]["y"]);
      var artistTrack = ig["game"]["collisionMap"]["trace"](this["pos"]["x"], this["pos"]["y"], this["vel"]["x"] * ig["system"]["tick"], this["vel"]["y"] * ig["system"]["tick"], this["size"]["x"], this["size"]["y"]);
      this["handleMovementTrace"](artistTrack);
      if (this["currentAnim"]) {
        this["currentAnim"]["update"]();
      }
    },
    "getNewVelocity" : function(i, size, value, className) {
      return size ? (i + size * ig["system"]["tick"])["limit"](-className, className) : value ? (size = value * ig["system"]["tick"], 0 < i - size ? i - size : 0 > i + size ? i + size : 0) : i["limit"](-className, className);
    },
    "handleMovementTrace" : function(board) {
      /** @type {boolean} */
      this["standing"] = false;
      if (board["collision"]["y"]) {
        if (0 < this["bounciness"] && Math["abs"](this["vel"]["y"]) > this["minBounceVelocity"]) {
          this["vel"]["y"] *= -this["bounciness"];
        } else {
          if (0 < this["vel"]["y"]) {
            /** @type {boolean} */
            this["standing"] = true;
          }
          /** @type {number} */
          this["vel"]["y"] = 0;
        }
      }
      if (board["collision"]["x"]) {
        /** @type {number} */
        this["vel"]["x"] = 0 < this["bounciness"] && Math["abs"](this["vel"]["x"]) > this["minBounceVelocity"] ? this["vel"]["x"] * -this["bounciness"] : 0;
      }
      if (board["collision"]["slope"]) {
        var eci_coords = board["collision"]["slope"];
        if (0 < this["bounciness"]) {
          /** @type {number} */
          var radiusearthkm = this["vel"]["x"] * eci_coords["nx"] + this["vel"]["y"] * eci_coords["ny"];
          /** @type {number} */
          this["vel"]["x"] = (this["vel"]["x"] - 2 * eci_coords["nx"] * radiusearthkm) * this["bounciness"];
          /** @type {number} */
          this["vel"]["y"] = (this["vel"]["y"] - 2 * eci_coords["ny"] * radiusearthkm) * this["bounciness"];
        } else {
          /** @type {number} */
          radiusearthkm = (this["vel"]["x"] * eci_coords["x"] + this["vel"]["y"] * eci_coords["y"]) / (eci_coords["x"] * eci_coords["x"] + eci_coords["y"] * eci_coords["y"]);
          /** @type {number} */
          this["vel"]["x"] = eci_coords["x"] * radiusearthkm;
          /** @type {number} */
          this["vel"]["y"] = eci_coords["y"] * radiusearthkm;
          eci_coords = Math["atan2"](eci_coords["x"], eci_coords["y"]);
          if (eci_coords > this["slopeStanding"]["min"] && eci_coords < this["slopeStanding"]["max"]) {
            /** @type {boolean} */
            this["standing"] = true;
          }
        }
      }
      this["pos"] = board["pos"];
    },
    "draw" : function() {
      if (this["currentAnim"]) {
        this["currentAnim"]["draw"](this["pos"]["x"] - this["offset"]["x"] - ig["game"]["_rscreen"]["x"], this["pos"]["y"] - this["offset"]["y"] - ig["game"]["_rscreen"]["y"]);
      }
    },
    "kill" : function() {
      ig["game"]["removeEntity"](this);
    },
    "receiveDamage" : function(value) {
      this["health"] -= value;
      if (0 >= this["health"]) {
        this["kill"]();
      }
    },
    "touches" : function(map) {
      return !(this["pos"]["x"] >= map["pos"]["x"] + map["size"]["x"] || this["pos"]["x"] + this["size"]["x"] <= map["pos"]["x"] || this["pos"]["y"] >= map["pos"]["y"] + map["size"]["y"] || this["pos"]["y"] + this["size"]["y"] <= map["pos"]["y"]);
    },
    "distanceTo" : function(arg) {
      /** @type {number} */
      var argR = this["pos"]["x"] + this["size"]["x"] / 2 - (arg["pos"]["x"] + arg["size"]["x"] / 2);
      /** @type {number} */
      arg = this["pos"]["y"] + this["size"]["y"] / 2 - (arg["pos"]["y"] + arg["size"]["y"] / 2);
      return Math["sqrt"](argR * argR + arg * arg);
    },
    "angleTo" : function(map) {
      return Math["atan2"](map["pos"]["y"] + map["size"]["y"] / 2 - (this["pos"]["y"] + this["size"]["y"] / 2), map["pos"]["x"] + map["size"]["x"] / 2 - (this["pos"]["x"] + this["size"]["x"] / 2));
    },
    "check" : function() {
    },
    "collideWith" : function() {
    },
    "ready" : function() {
    },
    "erase" : function() {
    }
  });
  /** @type {number} */
  ig["Entity"]["_lastId"] = 0;
  ig["Entity"]["COLLIDES"] = {
    "NEVER" : 0,
    "LITE" : 1,
    "PASSIVE" : 2,
    "ACTIVE" : 4,
    "FIXED" : 8
  };
  ig["Entity"]["TYPE"] = {
    "NONE" : 0,
    "A" : 1,
    "B" : 2,
    "BOTH" : 3
  };
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @return {undefined}
   */
  ig["Entity"]["checkPair"] = function(a, b) {
    if (a["checkAgainst"] & b["type"]) {
      a["check"](b);
    }
    if (b["checkAgainst"] & a["type"]) {
      b["check"](a);
    }
    if (a["collides"] && b["collides"] && a["collides"] + b["collides"] > ig["Entity"]["COLLIDES"]["ACTIVE"]) {
      ig["Entity"]["solveCollision"](a, b);
    }
  };
  /**
   * @param {!Object} value
   * @param {!Object} data
   * @return {undefined}
   */
  ig["Entity"]["solveCollision"] = function(value, data) {
    /** @type {null} */
    var next = null;
    if (value["collides"] == ig["Entity"]["COLLIDES"]["LITE"] || data["collides"] == ig["Entity"]["COLLIDES"]["FIXED"]) {
      /** @type {!Object} */
      next = value;
    } else {
      if (data["collides"] == ig["Entity"]["COLLIDES"]["LITE"] || value["collides"] == ig["Entity"]["COLLIDES"]["FIXED"]) {
        /** @type {!Object} */
        next = data;
      }
    }
    if (value["last"]["x"] + value["size"]["x"] > data["last"]["x"] && value["last"]["x"] < data["last"]["x"] + data["size"]["x"]) {
      if (value["last"]["y"] < data["last"]["y"]) {
        ig["Entity"]["seperateOnYAxis"](value, data, next);
      } else {
        ig["Entity"]["seperateOnYAxis"](data, value, next);
      }
      value["collideWith"](data, "y");
      data["collideWith"](value, "y");
    } else {
      if (value["last"]["y"] + value["size"]["y"] > data["last"]["y"] && value["last"]["y"] < data["last"]["y"] + data["size"]["y"]) {
        if (value["last"]["x"] < data["last"]["x"]) {
          ig["Entity"]["seperateOnXAxis"](value, data, next);
        } else {
          ig["Entity"]["seperateOnXAxis"](data, value, next);
        }
        value["collideWith"](data, "x");
        data["collideWith"](value, "x");
      }
    }
  };
  /**
   * @param {!Object} value
   * @param {!Object} map
   * @param {!Object} obj
   * @return {undefined}
   */
  ig["Entity"]["seperateOnXAxis"] = function(value, map, obj) {
    /** @type {number} */
    var toString = value["pos"]["x"] + value["size"]["x"] - map["pos"]["x"];
    if (obj) {
      obj["vel"]["x"] = -obj["vel"]["x"] * obj["bounciness"] + (value === obj ? map : value)["vel"]["x"];
      map = ig["game"]["collisionMap"]["trace"](obj["pos"]["x"], obj["pos"]["y"], obj == value ? -toString : toString, 0, obj["size"]["x"], obj["size"]["y"]);
      obj["pos"]["x"] = map["pos"]["x"];
    } else {
      /** @type {number} */
      obj = (value["vel"]["x"] - map["vel"]["x"]) / 2;
      /** @type {number} */
      value["vel"]["x"] = -obj;
      /** @type {!Object} */
      map["vel"]["x"] = obj;
      obj = ig["game"]["collisionMap"]["trace"](value["pos"]["x"], value["pos"]["y"], -toString / 2, 0, value["size"]["x"], value["size"]["y"]);
      value["pos"]["x"] = Math["floor"](obj["pos"]["x"]);
      value = ig["game"]["collisionMap"]["trace"](map["pos"]["x"], map["pos"]["y"], toString / 2, 0, map["size"]["x"], map["size"]["y"]);
      map["pos"]["x"] = Math["ceil"](value["pos"]["x"]);
    }
  };
  /**
   * @param {!Object} data
   * @param {!Object} result
   * @param {!Object} value
   * @return {undefined}
   */
  ig["Entity"]["seperateOnYAxis"] = function(data, result, value) {
    /** @type {number} */
    var shift = data["pos"]["y"] + data["size"]["y"] - result["pos"]["y"];
    if (value) {
      result = data === value ? result : data;
      value["vel"]["y"] = -value["vel"]["y"] * value["bounciness"] + result["vel"]["y"];
      /** @type {number} */
      var type = 0;
      if (value == data && Math["abs"](value["vel"]["y"] - result["vel"]["y"]) < value["minBounceVelocity"]) {
        /** @type {boolean} */
        value["standing"] = true;
        /** @type {number} */
        type = result["vel"]["x"] * ig["system"]["tick"];
      }
      data = ig["game"]["collisionMap"]["trace"](value["pos"]["x"], value["pos"]["y"], type, value == data ? -shift : shift, value["size"]["x"], value["size"]["y"]);
      value["pos"]["y"] = data["pos"]["y"];
      value["pos"]["x"] = data["pos"]["x"];
    } else {
      if (ig["game"]["gravity"] && (result["standing"] || 0 < data["vel"]["y"])) {
        value = ig["game"]["collisionMap"]["trace"](data["pos"]["x"], data["pos"]["y"], 0, -(data["pos"]["y"] + data["size"]["y"] - result["pos"]["y"]), data["size"]["x"], data["size"]["y"]);
        data["pos"]["y"] = value["pos"]["y"];
        if (0 < data["bounciness"] && data["vel"]["y"] > data["minBounceVelocity"]) {
          data["vel"]["y"] *= -data["bounciness"];
        } else {
          /** @type {boolean} */
          data["standing"] = true;
          /** @type {number} */
          data["vel"]["y"] = 0;
        }
      } else {
        /** @type {number} */
        value = (data["vel"]["y"] - result["vel"]["y"]) / 2;
        /** @type {number} */
        data["vel"]["y"] = -value;
        /** @type {!Object} */
        result["vel"]["y"] = value;
        /** @type {number} */
        type = result["vel"]["x"] * ig["system"]["tick"];
        value = ig["game"]["collisionMap"]["trace"](data["pos"]["x"], data["pos"]["y"], type, -shift / 2, data["size"]["x"], data["size"]["y"]);
        data["pos"]["y"] = value["pos"]["y"];
        data = ig["game"]["collisionMap"]["trace"](result["pos"]["x"], result["pos"]["y"], 0, shift / 2, result["size"]["x"], result["size"]["y"]);
        result["pos"]["y"] = data["pos"]["y"];
      }
    }
  };
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("impact.map")["defines"](function() {
  ig["Map"] = ig["Class"]["extend"]({
    "tilesize" : 8,
    "width" : 1,
    "height" : 1,
    "data" : [[]],
    "name" : null,
    "init" : function(_wid_attr, data) {
      this["tilesize"] = _wid_attr;
      /** @type {!Object} */
      this["data"] = data;
      this["height"] = data["length"];
      this["width"] = data[0]["length"];
      /** @type {number} */
      this["pxWidth"] = this["width"] * this["tilesize"];
      /** @type {number} */
      this["pxHeight"] = this["height"] * this["tilesize"];
    },
    "getTile" : function(j, m) {
      var i = Math["floor"](j / this["tilesize"]);
      var name = Math["floor"](m / this["tilesize"]);
      return 0 <= i && i < this["width"] && 0 <= name && name < this["height"] ? this["data"][name][i] : 0;
    },
    "setTile" : function(value, i, state) {
      value = Math["floor"](value / this["tilesize"]);
      i = Math["floor"](i / this["tilesize"]);
      if (0 <= value && value < this["width"] && 0 <= i && i < this["height"]) {
        this["data"][i][value] = state;
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("impact.collision-map")["requires"]("impact.map")["defines"](function() {
  ig["CollisionMap"] = ig["Map"]["extend"]({
    "lastSlope" : 1,
    "tiledef" : null,
    "init" : function(routeSegment, runway, flightPhase) {
      this["parent"](routeSegment, runway);
      this["tiledef"] = flightPhase || ig["CollisionMap"]["defaultTileDef"];
      var _0x10e3f2;
      for (_0x10e3f2 in this["tiledef"]) {
        if (_0x10e3f2 | 0 > this["lastSlope"]) {
          /** @type {number} */
          this["lastSlope"] = _0x10e3f2 | 0;
        }
      }
    },
    "trace" : function(t, v, data, value, callback, type) {
      var msg = {
        "collision" : {
          "x" : false,
          "y" : false,
          "slope" : false
        },
        "pos" : {
          "x" : t,
          "y" : v
        },
        "tile" : {
          "x" : 0,
          "y" : 0
        }
      };
      var step = Math["ceil"](Math["max"](Math["abs"](data), Math["abs"](value)) / this["tilesize"]);
      if (1 < step) {
        /** @type {number} */
        var sx = data / step;
        /** @type {number} */
        var sy = value / step;
        /** @type {number} */
        var i = 0;
        for (; i < step && (sx || sy) && !(this["_traceStep"](msg, t, v, sx, sy, callback, type, data, value, i), t = msg["pos"]["x"], v = msg["pos"]["y"], msg["collision"]["x"] && (data = sx = 0), msg["collision"]["y"] && (value = sy = 0), msg["collision"]["slope"]); i++) {
        }
      } else {
        this["_traceStep"](msg, t, v, data, value, callback, type, data, value, 0);
      }
      return msg;
    },
    "_traceStep" : function(data, rules, value, id, index, y, padding, obj, args, minCount) {
      data["pos"]["x"] += id;
      data["pos"]["y"] += index;
      /** @type {number} */
      var v = 0;
      if (id) {
        var x = 0 < id ? y : 0;
        var nextY = 0 > id ? this["tilesize"] : 0;
        v = Math["max"](Math["floor"](value / this["tilesize"]), 0);
        var ref = Math["min"](Math["ceil"]((value + padding) / this["tilesize"]), this["height"]);
        id = Math["floor"]((data["pos"]["x"] + x) / this["tilesize"]);
        var key = Math["floor"]((rules + x) / this["tilesize"]);
        if (0 < minCount || id == key || 0 > key || key >= this["width"]) {
          /** @type {number} */
          key = -1;
        }
        if (0 <= id && id < this["width"]) {
          var i = v;
          for (; i < ref && !(-1 != key && (v = this["data"][i][key], 1 < v && v <= this["lastSlope"] && this["_checkTileDef"](data, v, rules, value, obj, args, y, padding, key, i))); i++) {
            if (v = this["data"][i][id], 1 == v || v > this["lastSlope"] || 1 < v && this["_checkTileDef"](data, v, rules, value, obj, args, y, padding, id, i)) {
              if (1 < v && v <= this["lastSlope"] && data["collision"]["slope"]) {
                break;
              }
              /** @type {boolean} */
              data["collision"]["x"] = true;
              data["tile"]["x"] = v;
              rules = data["pos"]["x"] = id * this["tilesize"] - x + nextY;
              /** @type {number} */
              obj = 0;
              break;
            }
          }
        }
      }
      if (index) {
        x = 0 < index ? padding : 0;
        index = 0 > index ? this["tilesize"] : 0;
        v = Math["max"](Math["floor"](data["pos"]["x"] / this["tilesize"]), 0);
        nextY = Math["min"](Math["ceil"]((data["pos"]["x"] + y) / this["tilesize"]), this["width"]);
        i = Math["floor"]((data["pos"]["y"] + x) / this["tilesize"]);
        ref = Math["floor"]((value + x) / this["tilesize"]);
        if (0 < minCount || i == ref || 0 > ref || ref >= this["height"]) {
          /** @type {number} */
          ref = -1;
        }
        if (0 <= i && i < this["height"]) {
          id = v;
          for (; id < nextY && !(-1 != ref && (v = this["data"][ref][id], 1 < v && v <= this["lastSlope"] && this["_checkTileDef"](data, v, rules, value, obj, args, y, padding, id, ref))); id++) {
            if (v = this["data"][i][id], 1 == v || v > this["lastSlope"] || 1 < v && this["_checkTileDef"](data, v, rules, value, obj, args, y, padding, id, i)) {
              if (1 < v && v <= this["lastSlope"] && data["collision"]["slope"]) {
                break;
              }
              /** @type {boolean} */
              data["collision"]["y"] = true;
              data["tile"]["y"] = v;
              data["pos"]["y"] = i * this["tilesize"] - x + index;
              break;
            }
          }
        }
      }
    },
    "_checkTileDef" : function(matrix, sx, aggregates, data, a, b, x, y, scale, z) {
      var lightI = this["tiledef"][sx];
      if (!lightI) {
        return false;
      }
      /** @type {number} */
      sx = (lightI[2] - lightI[0]) * this["tilesize"];
      /** @type {number} */
      var sy = (lightI[3] - lightI[1]) * this["tilesize"];
      var snodeA = lightI[4];
      /** @type {number} */
      x = aggregates + a + (0 > sy ? x : 0) - (scale + lightI[0]) * this["tilesize"];
      /** @type {number} */
      y = data + b + (0 < sx ? y : 0) - (z + lightI[1]) * this["tilesize"];
      if (0 < sx * y - sy * x) {
        if (0 > a * -sy + b * sx) {
          return snodeA;
        }
        scale = Math["sqrt"](sx * sx + sy * sy);
        /** @type {number} */
        z = sy / scale;
        /** @type {number} */
        scale = -sx / scale;
        /** @type {number} */
        var lightJ = x * z + y * scale;
        /** @type {number} */
        lightI = z * lightJ;
        /** @type {number} */
        lightJ = scale * lightJ;
        if (lightI * lightI + lightJ * lightJ >= a * a + b * b) {
          return snodeA || 0.5 > sx * (y - b) - sy * (x - a);
        }
        /** @type {number} */
        matrix["pos"]["x"] = aggregates + a - lightI;
        /** @type {number} */
        matrix["pos"]["y"] = data + b - lightJ;
        matrix["collision"]["slope"] = {
          "x" : sx,
          "y" : sy,
          "nx" : z,
          "ny" : scale
        };
        return true;
      }
      return false;
    }
  });
  /** @type {number} */
  var _0x5e4a39 = 1 / 3;
  /** @type {number} */
  var _0x702c8e = 2 / 3;
  ig["CollisionMap"]["defaultTileDef"] = {
    5 : [0, 1, 1, _0x702c8e, true],
    6 : [0, _0x702c8e, 1, _0x5e4a39, true],
    7 : [0, _0x5e4a39, 1, 0, true],
    3 : [0, 1, 1, 0.5, true],
    4 : [0, 0.5, 1, 0, true],
    2 : [0, 1, 1, 0, true],
    10 : [0.5, 1, 1, 0, true],
    21 : [0, 1, 0.5, 0, true],
    32 : [_0x702c8e, 1, 1, 0, true],
    43 : [_0x5e4a39, 1, _0x702c8e, 0, true],
    54 : [0, 1, _0x5e4a39, 0, true],
    27 : [0, 0, 1, _0x5e4a39, true],
    28 : [0, _0x5e4a39, 1, _0x702c8e, true],
    29 : [0, _0x702c8e, 1, 1, true],
    25 : [0, 0, 1, 0.5, true],
    26 : [0, 0.5, 1, 1, true],
    24 : [0, 0, 1, 1, true],
    11 : [0, 0, 0.5, 1, true],
    22 : [0.5, 0, 1, 1, true],
    33 : [0, 0, _0x5e4a39, 1, true],
    44 : [_0x5e4a39, 0, _0x702c8e, 1, true],
    55 : [_0x702c8e, 0, 1, 1, true],
    16 : [1, _0x5e4a39, 0, 0, true],
    17 : [1, _0x702c8e, 0, _0x5e4a39, true],
    18 : [1, 1, 0, _0x702c8e, true],
    14 : [1, 0.5, 0, 0, true],
    15 : [1, 1, 0, 0.5, true],
    13 : [1, 1, 0, 0, true],
    8 : [0.5, 1, 0, 0, true],
    19 : [1, 1, 0.5, 0, true],
    30 : [_0x5e4a39, 1, 0, 0, true],
    41 : [_0x702c8e, 1, _0x5e4a39, 0, true],
    52 : [1, 1, _0x702c8e, 0, true],
    38 : [1, _0x702c8e, 0, 1, true],
    39 : [1, _0x5e4a39, 0, _0x702c8e, true],
    40 : [1, 0, 0, _0x5e4a39, true],
    36 : [1, 0.5, 0, 1, true],
    37 : [1, 0, 0, 0.5, true],
    35 : [1, 0, 0, 1, true],
    9 : [1, 0, 0.5, 1, true],
    20 : [0.5, 0, 0, 1, true],
    31 : [1, 0, _0x702c8e, 1, true],
    42 : [_0x702c8e, 0, _0x5e4a39, 1, true],
    53 : [_0x5e4a39, 0, 0, 1, true],
    12 : [0, 0, 1, 0, false],
    23 : [1, 1, 0, 1, false],
    34 : [1, 0, 1, 1, false],
    45 : [0, 1, 0, 0, false]
  };
  ig["CollisionMap"]["staticNoCollision"] = {
    "trace" : function(s, v, data, t) {
      return {
        "collision" : {
          "x" : false,
          "y" : false,
          "slope" : false
        },
        "pos" : {
          "x" : s + data,
          "y" : v + t
        },
        "tile" : {
          "x" : 0,
          "y" : 0
        }
      };
    }
  };
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("impact.background-map")["requires"]("impact.map", "impact.image")["defines"](function() {
  ig["BackgroundMap"] = ig["Map"]["extend"]({
    "tiles" : null,
    "scroll" : {
      "x" : 0,
      "y" : 0
    },
    "distance" : 1,
    "repeat" : false,
    "tilesetName" : "",
    "foreground" : false,
    "enabled" : true,
    "preRender" : false,
    "preRenderedChunks" : null,
    "chunkSize" : 512,
    "debugChunks" : false,
    "anims" : {},
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary);
      this["setTileset"](airportController);
    },
    "setTileset" : function(connectionHooks) {
      this["tilesetName"] = connectionHooks instanceof ig["Image"] ? connectionHooks["path"] : connectionHooks;
      this["tiles"] = new ig["Image"](this["tilesetName"]);
      /** @type {null} */
      this["preRenderedChunks"] = null;
    },
    "setScreenPos" : function(y, x) {
      /** @type {number} */
      this["scroll"]["x"] = y / this["distance"];
      /** @type {number} */
      this["scroll"]["y"] = x / this["distance"];
    },
    "preRenderMapToChunks" : function() {
      /** @type {number} */
      var deltaX = this["width"] * this["tilesize"] * ig["system"]["scale"];
      /** @type {number} */
      var n = this["height"] * this["tilesize"] * ig["system"]["scale"];
      this["chunkSize"] = Math["min"](Math["max"](deltaX, n), this["chunkSize"]);
      var collectionLength = Math["ceil"](deltaX / this["chunkSize"]);
      var l = Math["ceil"](n / this["chunkSize"]);
      /** @type {!Array} */
      this["preRenderedChunks"] = [];
      /** @type {number} */
      var i = 0;
      for (; i < l; i++) {
        /** @type {!Array} */
        this["preRenderedChunks"][i] = [];
        /** @type {number} */
        var index = 0;
        for (; index < collectionLength; index++) {
          this["preRenderedChunks"][i][index] = this["preRenderChunk"](index, i, index == collectionLength - 1 ? deltaX - index * this["chunkSize"] : this["chunkSize"], i == l - 1 ? n - i * this["chunkSize"] : this["chunkSize"]);
        }
      }
    },
    "preRenderChunk" : function(rawPads, i, list, updated) {
      /** @type {number} */
      var refresh = list / this["tilesize"] / ig["system"]["scale"] + 1;
      /** @type {number} */
      var rown = updated / this["tilesize"] / ig["system"]["scale"] + 1;
      /** @type {number} */
      var _0x3cac08 = rawPads * this["chunkSize"] / ig["system"]["scale"] % this["tilesize"];
      /** @type {number} */
      var x_part = i * this["chunkSize"] / ig["system"]["scale"] % this["tilesize"];
      rawPads = Math["floor"](rawPads * this["chunkSize"] / this["tilesize"] / ig["system"]["scale"]);
      i = Math["floor"](i * this["chunkSize"] / this["tilesize"] / ig["system"]["scale"]);
      var item = ig["$new"]("canvas");
      item["width"] = list;
      /** @type {number} */
      item["height"] = updated;
      /** @type {boolean} */
      item["retinaResolutionEnabled"] = false;
      updated = item["getContext"]("2d");
      ig["System"]["scaleMode"](item, updated);
      list = ig["system"]["context"];
      /** @type {number} */
      ig["system"]["context"] = updated;
      /** @type {number} */
      updated = 0;
      for (; updated < refresh; updated++) {
        /** @type {number} */
        var j = 0;
        for (; j < rown; j++) {
          if (updated + rawPads < this["width"] && j + i < this["height"]) {
            var _0x2b57d9 = this["data"][j + i][updated + rawPads];
            if (_0x2b57d9) {
              this["tiles"]["drawTile"](updated * this["tilesize"] - _0x3cac08, j * this["tilesize"] - x_part, _0x2b57d9 - 1, this["tilesize"]);
            }
          }
        }
      }
      ig["system"]["context"] = list;
      return item;
    },
    "draw" : function() {
      if (this["tiles"]["loaded"] && this["enabled"]) {
        if (this["preRender"]) {
          this["drawPreRendered"]();
        } else {
          this["drawTiled"]();
        }
      }
    },
    "drawPreRendered" : function() {
      if (!this["preRenderedChunks"]) {
        this["preRenderMapToChunks"]();
      }
      var a = ig["system"]["getDrawPos"](this["scroll"]["x"]);
      var value = ig["system"]["getDrawPos"](this["scroll"]["y"]);
      if (this["repeat"]) {
        /** @type {number} */
        var b = this["width"] * this["tilesize"] * ig["system"]["scale"];
        /** @type {number} */
        a = (a % b + b) % b;
        /** @type {number} */
        b = this["height"] * this["tilesize"] * ig["system"]["scale"];
        /** @type {number} */
        value = (value % b + b) % b;
      }
      b = Math["max"](Math["floor"](a / this["chunkSize"]), 0);
      var i = Math["max"](Math["floor"](value / this["chunkSize"]), 0);
      var t = Math["ceil"]((a + ig["system"]["realWidth"]) / this["chunkSize"]);
      var currentValue = Math["ceil"]((value + ig["system"]["realHeight"]) / this["chunkSize"]);
      var arg = this["preRenderedChunks"][0]["length"];
      var key = this["preRenderedChunks"]["length"];
      if (!this["repeat"]) {
        t = Math["min"](t, arg);
        currentValue = Math["min"](currentValue, key);
      }
      /** @type {number} */
      var remainingWidth = 0;
      for (; i < currentValue; i++) {
        /** @type {number} */
        var value2 = 0;
        var bytes = b;
        for (; bytes < t; bytes++) {
          var args = this["preRenderedChunks"][i % key][bytes % arg];
          /** @type {number} */
          var result = -a + bytes * this["chunkSize"] - value2;
          /** @type {number} */
          var message_ = -value + i * this["chunkSize"] - remainingWidth;
          ig["system"]["context"]["drawImage"](args, result, message_);
          ig["Image"]["drawCount"]++;
          if (this["debugChunks"]) {
            /** @type {string} */
            ig["system"]["context"]["strokeStyle"] = "#f0f";
            ig["system"]["context"]["strokeRect"](result, message_, this["chunkSize"], this["chunkSize"]);
          }
          if (this["repeat"] && args["width"] < this["chunkSize"] && result + args["width"] < ig["system"]["realWidth"]) {
            /** @type {number} */
            value2 = value2 + (this["chunkSize"] - args["width"]);
            t++;
          }
        }
        if (this["repeat"] && args["height"] < this["chunkSize"] && message_ + args["height"] < ig["system"]["realHeight"]) {
          /** @type {number} */
          remainingWidth = remainingWidth + (this["chunkSize"] - args["height"]);
          currentValue++;
        }
      }
    },
    "drawTiled" : function() {
      /** @type {number} */
      var value = 0;
      /** @type {null} */
      var child = null;
      var weexit = (this["scroll"]["x"] / this["tilesize"])["toInt"]();
      var chunk = (this["scroll"]["y"] / this["tilesize"])["toInt"]();
      /** @type {number} */
      var year = this["scroll"]["x"] % this["tilesize"];
      /** @type {number} */
      var e = this["scroll"]["y"] % this["tilesize"];
      /** @type {number} */
      var err = -year - this["tilesize"];
      /** @type {number} */
      year = ig["system"]["width"] + this["tilesize"] - year;
      /** @type {number} */
      var j = ig["system"]["height"] + this["tilesize"] - e;
      /** @type {number} */
      var startSize = -1;
      /** @type {number} */
      e = -e - this["tilesize"];
      for (; e < j; startSize++, e = e + this["tilesize"]) {
        var i = startSize + chunk;
        if (i >= this["height"] || 0 > i) {
          if (!this["repeat"]) {
            continue;
          }
          /** @type {number} */
          i = (i % this["height"] + this["height"]) % this["height"];
        }
        /** @type {number} */
        var wdexit = -1;
        /** @type {number} */
        var msg = err;
        for (; msg < year; wdexit++, msg = msg + this["tilesize"]) {
          value = wdexit + weexit;
          if (value >= this["width"] || 0 > value) {
            if (!this["repeat"]) {
              continue;
            }
            /** @type {number} */
            value = (value % this["width"] + this["width"]) % this["width"];
          }
          if (value = this["data"][i][value]) {
            if (child = this["anims"][value - 1]) {
              child["draw"](msg, e);
            } else {
              this["tiles"]["drawTile"](msg, e, value - 1, this["tilesize"]);
            }
          }
        }
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("impact.game")["requires"]("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map")["defines"](function() {
  ig["Game"] = ig["Class"]["extend"]({
    "clearColor" : "#000000",
    "gravity" : 0,
    "screen" : {
      "x" : 0,
      "y" : 0
    },
    "_rscreen" : {
      "x" : 0,
      "y" : 0
    },
    "entities" : [],
    "namedEntities" : {},
    "collisionMap" : ig["CollisionMap"]["staticNoCollision"],
    "backgroundMaps" : [],
    "backgroundAnims" : {},
    "autoSort" : false,
    "sortBy" : null,
    "cellSize" : 64,
    "_deferredKill" : [],
    "_levelToLoad" : null,
    "_doSortEntities" : false,
    "staticInstantiate" : function() {
      this["sortBy"] = this["sortBy"] || ig["Game"]["SORT"]["Z_INDEX"];
      ig["game"] = this;
      return null;
    },
    "loadLevel" : function(data) {
      this["screen"] = {
        "x" : 0,
        "y" : 0
      };
      /** @type {!Array} */
      this["entities"] = [];
      this["namedEntities"] = {};
      /** @type {number} */
      var j = 0;
      for (; j < data["entities"]["length"]; j++) {
        var obj = data["entities"][j];
        this["spawnEntity"](obj["type"], obj["x"], obj["y"], obj["settings"]);
      }
      this["sortEntities"]();
      this["collisionMap"] = ig["CollisionMap"]["staticNoCollision"];
      /** @type {!Array} */
      this["backgroundMaps"] = [];
      /** @type {number} */
      j = 0;
      for (; j < data["layer"]["length"]; j++) {
        if (obj = data["layer"][j], "collision" == obj["name"]) {
          this["collisionMap"] = new ig["CollisionMap"](obj["tilesize"], obj["data"]);
        } else {
          var properties = new ig["BackgroundMap"](obj["tilesize"], obj["data"], obj["tilesetName"]);
          properties["anims"] = this["backgroundAnims"][obj["tilesetName"]] || {};
          properties["repeat"] = obj["repeat"];
          properties["distance"] = obj["distance"];
          /** @type {boolean} */
          properties["foreground"] = !!obj["foreground"];
          /** @type {boolean} */
          properties["preRender"] = !!obj["preRender"];
          properties["name"] = obj["name"];
          this["backgroundMaps"]["push"](properties);
        }
      }
      /** @type {number} */
      j = 0;
      for (; j < this["entities"]["length"]; j++) {
        this["entities"][j]["ready"]();
      }
    },
    "loadLevelDeferred" : function(canCreateDiscussions) {
      this["_levelToLoad"] = canCreateDiscussions;
    },
    "getMapByName" : function(name) {
      if ("collision" == name) {
        return this["collisionMap"];
      }
      /** @type {number} */
      var i = 0;
      for (; i < this["backgroundMaps"]["length"]; i++) {
        if (this["backgroundMaps"][i]["name"] == name) {
          return this["backgroundMaps"][i];
        }
      }
      return null;
    },
    "getEntityByName" : function(name) {
      return this["namedEntities"][name];
    },
    "getEntitiesByType" : function(n) {
      n = "string" === typeof n ? ig["global"][n] : n;
      /** @type {!Array} */
      var a = [];
      /** @type {number} */
      var i = 0;
      for (; i < this["entities"]["length"]; i++) {
        var b = this["entities"][i];
        if (b instanceof n && !b["_killed"]) {
          a["push"](b);
        }
      }
      return a;
    },
    "spawnEntity" : function(n, type, options, layer) {
      var ctor = "string" === typeof n ? ig["global"][n] : n;
      if (!ctor) {
        throw "Can't spawn entity of type " + n;
      }
      n = new ctor(type, options, layer || {});
      this["entities"]["push"](n);
      if (n["name"]) {
        this["namedEntities"][n["name"]] = n;
      }
      return n;
    },
    "sortEntities" : function() {
      this["entities"]["sort"](this["sortBy"]);
    },
    "sortEntitiesDeferred" : function() {
      /** @type {boolean} */
      this["_doSortEntities"] = true;
    },
    "removeEntity" : function(PL$22) {
      if (PL$22["name"]) {
        delete this["namedEntities"][PL$22["name"]];
      }
      /** @type {boolean} */
      PL$22["_killed"] = true;
      PL$22["type"] = ig["Entity"]["TYPE"]["NONE"];
      PL$22["checkAgainst"] = ig["Entity"]["TYPE"]["NONE"];
      PL$22["collides"] = ig["Entity"]["COLLIDES"]["NEVER"];
      this["_deferredKill"]["push"](PL$22);
    },
    "run" : function() {
      this["update"]();
      this["draw"]();
    },
    "update" : function() {
      if (this["_levelToLoad"]) {
        this["loadLevel"](this["_levelToLoad"]);
        /** @type {null} */
        this["_levelToLoad"] = null;
      }
      this["updateEntities"]();
      this["checkEntities"]();
      /** @type {number} */
      var i = 0;
      for (; i < this["_deferredKill"]["length"]; i++) {
        this["_deferredKill"][i]["erase"]();
        this["entities"]["erase"](this["_deferredKill"][i]);
      }
      /** @type {!Array} */
      this["_deferredKill"] = [];
      if (this["_doSortEntities"] || this["autoSort"]) {
        this["sortEntities"]();
        /** @type {boolean} */
        this["_doSortEntities"] = false;
      }
      var lookupString;
      for (lookupString in this["backgroundAnims"]) {
        i = this["backgroundAnims"][lookupString];
        var key;
        for (key in i) {
          i[key]["update"]();
        }
      }
    },
    "updateEntities" : function() {
      /** @type {number} */
      var j = 0;
      for (; j < this["entities"]["length"]; j++) {
        var selector = this["entities"][j];
        if (!selector["_killed"]) {
          selector["update"]();
        }
      }
    },
    "draw" : function() {
      if (this["clearColor"]) {
        ig["system"]["clear"](this["clearColor"]);
      }
      /** @type {number} */
      this["_rscreen"]["x"] = ig["system"]["getDrawPos"](this["screen"]["x"]) / ig["system"]["scale"];
      /** @type {number} */
      this["_rscreen"]["y"] = ig["system"]["getDrawPos"](this["screen"]["y"]) / ig["system"]["scale"];
      var i;
      /** @type {number} */
      i = 0;
      for (; i < this["backgroundMaps"]["length"]; i++) {
        var m = this["backgroundMaps"][i];
        if (m["foreground"]) {
          break;
        }
        m["setScreenPos"](this["screen"]["x"], this["screen"]["y"]);
        m["draw"]();
      }
      this["drawEntities"]();
      i;
      for (; i < this["backgroundMaps"]["length"]; i++) {
        m = this["backgroundMaps"][i];
        m["setScreenPos"](this["screen"]["x"], this["screen"]["y"]);
        m["draw"]();
      }
    },
    "drawEntities" : function() {
      /** @type {number} */
      var i = 0;
      for (; i < this["entities"]["length"]; i++) {
        this["entities"][i]["draw"]();
      }
    },
    "checkEntities" : function() {
      var strings = {};
      /** @type {number} */
      var i = 0;
      for (; i < this["entities"]["length"]; i++) {
        var value = this["entities"][i];
        if (!(value["type"] == ig["Entity"]["TYPE"]["NONE"] && value["checkAgainst"] == ig["Entity"]["TYPE"]["NONE"] && value["collides"] == ig["Entity"]["COLLIDES"]["NEVER"])) {
          var data_values = {};
          var nadine = Math["floor"](value["pos"]["y"] / this["cellSize"]);
          var itl = Math["floor"]((value["pos"]["x"] + value["size"]["x"]) / this["cellSize"]) + 1;
          var _0x354887 = Math["floor"]((value["pos"]["y"] + value["size"]["y"]) / this["cellSize"]) + 1;
          var key = Math["floor"](value["pos"]["x"] / this["cellSize"]);
          for (; key < itl; key++) {
            var context = nadine;
            for (; context < _0x354887; context++) {
              if (strings[key]) {
                if (strings[key][context]) {
                  var PL$15 = strings[key][context];
                  /** @type {number} */
                  var PL$18 = 0;
                  for (; PL$18 < PL$15["length"]; PL$18++) {
                    if (value["touches"](PL$15[PL$18]) && !data_values[PL$15[PL$18]["id"]]) {
                      /** @type {boolean} */
                      data_values[PL$15[PL$18]["id"]] = true;
                      ig["Entity"]["checkPair"](value, PL$15[PL$18]);
                    }
                  }
                  PL$15["push"](value);
                } else {
                  /** @type {!Array} */
                  strings[key][context] = [value];
                }
              } else {
                strings[key] = {};
                /** @type {!Array} */
                strings[key][context] = [value];
              }
            }
          }
        }
      }
    }
  });
  ig["Game"]["SORT"] = {
    "Z_INDEX" : function(subtractor, subtractee) {
      return subtractor["zIndex"] - subtractee["zIndex"];
    },
    "POS_X" : function(data, sizes) {
      return data["pos"]["x"] + data["size"]["x"] - (sizes["pos"]["x"] + sizes["size"]["x"]);
    },
    "POS_Y" : function(map, positions) {
      return map["pos"]["y"] + map["size"]["y"] - (positions["pos"]["y"] + positions["size"]["y"]);
    }
  };
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("impact.debug.menu")["requires"]("dom.ready", "impact.system")["defines"](function() {
  ig["System"]["inject"]({
    "run" : function() {
      ig["debug"]["beforeRun"]();
      this["parent"]();
      ig["debug"]["afterRun"]();
    },
    "setGameNow" : function(startLevel) {
      this["parent"](startLevel);
      ig["debug"]["ready"]();
    }
  });
  ig["Debug"] = ig["Class"]["extend"]({
    "options" : {},
    "panels" : {},
    "numbers" : {},
    "container" : null,
    "panelMenu" : null,
    "activePanel" : null,
    "debugTime" : 0,
    "debugTickAvg" : 0.016,
    "debugRealTime" : Date["now"](),
    "init" : function() {
      var target = ig["$new"]("link");
      /** @type {string} */
      target["rel"] = "stylesheet";
      /** @type {string} */
      target["type"] = "text/css";
      target["href"] = ig["prefix"] + "lib/impact/debug/debug.css";
      ig["$"]("body")[0]["appendChild"](target);
      this["container"] = ig["$new"]("div");
      /** @type {string} */
      this["container"]["className"] = "ig_debug";
      ig["$"]("body")[0]["appendChild"](this["container"]);
      this["panelMenu"] = ig["$new"]("div");
      /** @type {string} */
      this["panelMenu"]["innerHTML"] = '<div class="ig_debug_head">Impact.Debug:</div>';
      /** @type {string} */
      this["panelMenu"]["className"] = "ig_debug_panel_menu";
      this["container"]["appendChild"](this["panelMenu"]);
      this["numberContainer"] = ig["$new"]("div");
      /** @type {string} */
      this["numberContainer"]["className"] = "ig_debug_stats";
      this["panelMenu"]["appendChild"](this["numberContainer"]);
      if (window["console"] && window["console"]["log"] && window["console"]["assert"]) {
        ig["log"] = console["log"]["bind"] ? console["log"]["bind"](console) : console["log"];
        ig["assert"] = console["assert"]["bind"] ? console["assert"]["bind"](console) : console["assert"];
      }
      ig["show"] = this["showNumber"]["bind"](this);
    },
    "addNumber" : function(value) {
      var i = ig["$new"]("span");
      this["numberContainer"]["appendChild"](i);
      this["numberContainer"]["appendChild"](document["createTextNode"](value));
      this["numbers"][value] = i;
    },
    "showNumber" : function(i, value, number) {
      if (!this["numbers"][i]) {
        this["addNumber"](i, number);
      }
      this["numbers"][i]["textContent"] = value;
    },
    "addPanel" : function(item) {
      var params = new item["type"](item["name"], item["label"]);
      if (item["options"]) {
        /** @type {number} */
        var i = 0;
        for (; i < item["options"]["length"]; i++) {
          var record = item["options"][i];
          params["addOption"](new ig["DebugOption"](record["name"], record["object"], record["property"]));
        }
      }
      this["panels"][params["name"]] = params;
      /** @type {string} */
      params["container"]["style"]["display"] = "none";
      this["container"]["appendChild"](params["container"]);
      item = ig["$new"]("div");
      /** @type {string} */
      item["className"] = "ig_debug_menu_item";
      item["textContent"] = params["label"];
      item["addEventListener"]("click", function() {
        this["togglePanel"](params);
      }["bind"](this), false);
      /** @type {!Object} */
      params["menuItem"] = item;
      /** @type {boolean} */
      record = false;
      /** @type {number} */
      i = 1;
      for (; i < this["panelMenu"]["childNodes"]["length"]; i++) {
        var a = this["panelMenu"]["childNodes"][i];
        if (a["textContent"] > params["label"]) {
          this["panelMenu"]["insertBefore"](item, a);
          /** @type {boolean} */
          record = true;
          break;
        }
      }
      if (!record) {
        this["panelMenu"]["appendChild"](item);
      }
    },
    "showPanel" : function(evt) {
      this["togglePanel"](this["panels"][evt]);
    },
    "togglePanel" : function(p) {
      if (p != this["activePanel"] && this["activePanel"]) {
        this["activePanel"]["toggle"](false);
        /** @type {string} */
        this["activePanel"]["menuItem"]["className"] = "ig_debug_menu_item";
        /** @type {null} */
        this["activePanel"] = null;
      }
      /** @type {boolean} */
      var val = "block" != p["container"]["style"]["display"];
      p["toggle"](val);
      /** @type {string} */
      p["menuItem"]["className"] = "ig_debug_menu_item" + (val ? " active" : "");
      if (val) {
        /** @type {!Object} */
        this["activePanel"] = p;
      }
    },
    "ready" : function() {
      var nodeid;
      for (nodeid in this["panels"]) {
        this["panels"][nodeid]["ready"]();
      }
    },
    "beforeRun" : function() {
      var _0x6b38ec = Date["now"]();
      /** @type {number} */
      this["debugTickAvg"] = 0.8 * this["debugTickAvg"] + 0.2 * (_0x6b38ec - this["debugRealTime"]);
      this["debugRealTime"] = _0x6b38ec;
      if (this["activePanel"]) {
        this["activePanel"]["beforeRun"]();
      }
    },
    "afterRun" : function() {
      /** @type {number} */
      var _0x366c18 = Date["now"]() - this["debugRealTime"];
      /** @type {number} */
      this["debugTime"] = 0.8 * this["debugTime"] + 0.2 * _0x366c18;
      if (this["activePanel"]) {
        this["activePanel"]["afterRun"]();
      }
      this["showNumber"]("ms", this["debugTime"]["toFixed"](2));
      this["showNumber"]("fps", Math["round"](1E3 / this["debugTickAvg"]));
      this["showNumber"]("draws", ig["Image"]["drawCount"]);
      if (ig["game"] && ig["game"]["entities"]) {
        this["showNumber"]("entities", ig["game"]["entities"]["length"]);
      }
      /** @type {number} */
      ig["Image"]["drawCount"] = 0;
    }
  });
  ig["DebugPanel"] = ig["Class"]["extend"]({
    "active" : false,
    "container" : null,
    "options" : [],
    "panels" : [],
    "label" : "",
    "name" : "",
    "init" : function(component, index) {
      this["name"] = component;
      this["label"] = index;
      this["container"] = ig["$new"]("div");
      this["container"]["className"] = "ig_debug_panel " + this["name"];
    },
    "toggle" : function(expand) {
      /** @type {boolean} */
      this["active"] = expand;
      /** @type {string} */
      this["container"]["style"]["display"] = expand ? "block" : "none";
    },
    "addPanel" : function(args) {
      this["panels"]["push"](args);
      this["container"]["appendChild"](args["container"]);
    },
    "addOption" : function(value) {
      this["options"]["push"](value);
      this["container"]["appendChild"](value["container"]);
    },
    "ready" : function() {
    },
    "beforeRun" : function() {
    },
    "afterRun" : function() {
    }
  });
  ig["DebugOption"] = ig["Class"]["extend"]({
    "name" : "",
    "labelName" : "",
    "className" : "ig_debug_option",
    "label" : null,
    "mark" : null,
    "container" : null,
    "active" : false,
    "colors" : {
      "enabled" : "#fff",
      "disabled" : "#444"
    },
    "init" : function(module, object, method) {
      this["name"] = module;
      this["object"] = object;
      this["property"] = method;
      this["active"] = this["object"][this["property"]];
      this["container"] = ig["$new"]("div");
      /** @type {string} */
      this["container"]["className"] = "ig_debug_option";
      this["label"] = ig["$new"]("span");
      /** @type {string} */
      this["label"]["className"] = "ig_debug_label";
      this["label"]["textContent"] = this["name"];
      this["mark"] = ig["$new"]("span");
      /** @type {string} */
      this["mark"]["className"] = "ig_debug_label_mark";
      this["container"]["appendChild"](this["mark"]);
      this["container"]["appendChild"](this["label"]);
      this["container"]["addEventListener"]("click", this["click"]["bind"](this), false);
      this["setLabel"]();
    },
    "setLabel" : function() {
      this["mark"]["style"]["backgroundColor"] = this["active"] ? this["colors"]["enabled"] : this["colors"]["disabled"];
    },
    "click" : function(event) {
      /** @type {boolean} */
      this["active"] = !this["active"];
      this["object"][this["property"]] = this["active"];
      this["setLabel"]();
      event["stopPropagation"]();
      event["preventDefault"]();
      return false;
    }
  });
  ig["debug"] = new ig["Debug"];
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("impact.debug.entities-panel")["requires"]("impact.debug.menu", "impact.entity")["defines"](function() {
  ig["Entity"]["inject"]({
    "colors" : {
      "names" : "#fff",
      "velocities" : "#0f0",
      "boxes" : "#f00"
    },
    "draw" : function() {
      this["parent"]();
      if (ig["Entity"]["_debugShowBoxes"]) {
        ig["system"]["context"]["strokeStyle"] = this["colors"]["boxes"];
        /** @type {number} */
        ig["system"]["context"]["lineWidth"] = 1;
        ig["system"]["context"]["strokeRect"](ig["system"]["getDrawPos"](this["pos"]["x"]["round"]() - ig["game"]["screen"]["x"]) - 0.5, ig["system"]["getDrawPos"](this["pos"]["y"]["round"]() - ig["game"]["screen"]["y"]) - 0.5, this["size"]["x"] * ig["system"]["scale"], this["size"]["y"] * ig["system"]["scale"]);
      }
      if (ig["Entity"]["_debugShowVelocities"]) {
        var result = this["pos"]["x"] + this["size"]["x"] / 2;
        var x = this["pos"]["y"] + this["size"]["y"] / 2;
        this["_debugDrawLine"](this["colors"]["velocities"], result, x, result + this["vel"]["x"], x + this["vel"]["y"]);
      }
      if (ig["Entity"]["_debugShowNames"] && (this["name"] && (ig["system"]["context"]["fillStyle"] = this["colors"]["names"], ig["system"]["context"]["fillText"](this["name"], ig["system"]["getDrawPos"](this["pos"]["x"] - ig["game"]["screen"]["x"]), ig["system"]["getDrawPos"](this["pos"]["y"] - ig["game"]["screen"]["y"]))), "object" == typeof this["target"])) {
        var name;
        for (name in this["target"]) {
          if (result = ig["game"]["getEntityByName"](this["target"][name])) {
            this["_debugDrawLine"](this["colors"]["names"], this["pos"]["x"] + this["size"]["x"] / 2, this["pos"]["y"] + this["size"]["y"] / 2, result["pos"]["x"] + result["size"]["x"] / 2, result["pos"]["y"] + result["size"]["y"] / 2);
          }
        }
      }
    },
    "_debugDrawLine" : function(value, mouseX, mouseY, oldMouseX, oldMouseY) {
      ig["system"]["context"]["strokeStyle"] = value;
      /** @type {number} */
      ig["system"]["context"]["lineWidth"] = 1;
      ig["system"]["context"]["beginPath"]();
      ig["system"]["context"]["moveTo"](ig["system"]["getDrawPos"](mouseX - ig["game"]["screen"]["x"]), ig["system"]["getDrawPos"](mouseY - ig["game"]["screen"]["y"]));
      ig["system"]["context"]["lineTo"](ig["system"]["getDrawPos"](oldMouseX - ig["game"]["screen"]["x"]), ig["system"]["getDrawPos"](oldMouseY - ig["game"]["screen"]["y"]));
      ig["system"]["context"]["stroke"]();
      ig["system"]["context"]["closePath"]();
    }
  });
  /** @type {boolean} */
  ig["Entity"]["_debugEnableChecks"] = true;
  /** @type {boolean} */
  ig["Entity"]["_debugShowBoxes"] = false;
  /** @type {boolean} */
  ig["Entity"]["_debugShowVelocities"] = false;
  /** @type {boolean} */
  ig["Entity"]["_debugShowNames"] = false;
  ig["Entity"]["oldCheckPair"] = ig["Entity"]["checkPair"];
  /**
   * @param {?} mmCoreSplitViewBlock
   * @param {?} mmaPushNotificationsComponent
   * @return {undefined}
   */
  ig["Entity"]["checkPair"] = function(mmCoreSplitViewBlock, mmaPushNotificationsComponent) {
    if (ig["Entity"]["_debugEnableChecks"]) {
      ig["Entity"]["oldCheckPair"](mmCoreSplitViewBlock, mmaPushNotificationsComponent);
    }
  };
  ig["debug"]["addPanel"]({
    "type" : ig["DebugPanel"],
    "name" : "entities",
    "label" : "Entities",
    "options" : [{
      "name" : "Checks & Collisions",
      "object" : ig["Entity"],
      "property" : "_debugEnableChecks"
    }, {
      "name" : "Show Collision Boxes",
      "object" : ig["Entity"],
      "property" : "_debugShowBoxes"
    }, {
      "name" : "Show Velocities",
      "object" : ig["Entity"],
      "property" : "_debugShowVelocities"
    }, {
      "name" : "Show Names & Targets",
      "object" : ig["Entity"],
      "property" : "_debugShowNames"
    }]
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("impact.debug.maps-panel")["requires"]("impact.debug.menu", "impact.game", "impact.background-map")["defines"](function() {
  ig["Game"]["inject"]({
    "loadLevel" : function(data) {
      this["parent"](data);
      ig["debug"]["panels"]["maps"]["load"](this);
    }
  });
  ig["DebugMapsPanel"] = ig["DebugPanel"]["extend"]({
    "maps" : [],
    "mapScreens" : [],
    "init" : function(flightPhase, navigationLibrary) {
      this["parent"](flightPhase, navigationLibrary);
      this["load"]();
    },
    "load" : function(path) {
      /** @type {!Array} */
      this["options"] = [];
      /** @type {!Array} */
      this["panels"] = [];
      if (!path || !path["backgroundMaps"]["length"]) {
        /** @type {string} */
        this["container"]["innerHTML"] = "<em>No Maps Loaded</em>";
      } else {
        this["maps"] = path["backgroundMaps"];
        /** @type {!Array} */
        this["mapScreens"] = [];
        /** @type {string} */
        this["container"]["innerHTML"] = "";
        /** @type {number} */
        path = 0;
        for (; path < this["maps"]["length"]; path++) {
          var data = this["maps"][path];
          var a = new ig["DebugPanel"](path, "Layer " + path);
          var node = new ig["$new"]("strong");
          node["textContent"] = path + ": " + data["tiles"]["path"];
          a["container"]["appendChild"](node);
          a["addOption"](new ig["DebugOption"]("Enabled", data, "enabled"));
          a["addOption"](new ig["DebugOption"]("Pre Rendered", data, "preRender"));
          a["addOption"](new ig["DebugOption"]("Show Chunks", data, "debugChunks"));
          this["generateMiniMap"](a, data, path);
          this["addPanel"](a);
        }
      }
    },
    "generateMiniMap" : function(doc, data, layer) {
      var scale = ig["system"]["scale"];
      var result = ig["$new"]("canvas");
      var style = result["getContext"]("2d");
      /** @type {number} */
      var x = data["tiles"]["width"] * scale;
      /** @type {number} */
      var y = data["tiles"]["height"] * scale;
      /** @type {number} */
      var value = x / data["tilesize"];
      /** @type {number} */
      var v = y / data["tilesize"];
      /** @type {number} */
      result["width"] = value;
      /** @type {number} */
      result["height"] = v;
      style["drawImage"](data["tiles"]["data"], 0, 0, x, y, 0, 0, value, v);
      style = ig["$new"]("canvas");
      /** @type {number} */
      style["width"] = data["width"] * scale;
      /** @type {number} */
      style["height"] = data["height"] * scale;
      v = style["getContext"]("2d");
      if (ig["game"]["clearColor"]) {
        v["fillStyle"] = ig["game"]["clearColor"];
        v["fillRect"](0, 0, x, y);
      }
      /** @type {number} */
      y = x = 0;
      for (; y < data["width"]; y++) {
        /** @type {number} */
        var i = 0;
        for (; i < data["height"]; i++) {
          if (x = data["data"][i][y]) {
            v["drawImage"](result, Math["floor"]((x - 1) * scale % value), Math["floor"]((x - 1) * scale / value) * scale, scale, scale, y * scale, i * scale, scale, scale);
          }
        }
      }
      result = ig["$new"]("div");
      /** @type {string} */
      result["className"] = "ig_debug_map_container";
      /** @type {string} */
      result["style"]["width"] = data["width"] * scale + "px";
      /** @type {string} */
      result["style"]["height"] = data["height"] * scale + "px";
      value = ig["$new"]("div");
      /** @type {string} */
      value["className"] = "ig_debug_map_screen";
      /** @type {string} */
      value["style"]["width"] = ig["system"]["width"] / data["tilesize"] * scale - 2 + "px";
      /** @type {string} */
      value["style"]["height"] = ig["system"]["height"] / data["tilesize"] * scale - 2 + "px";
      this["mapScreens"][layer] = value;
      result["appendChild"](style);
      result["appendChild"](value);
      doc["container"]["appendChild"](result);
    },
    "afterRun" : function() {
      var scale = ig["system"]["scale"];
      /** @type {number} */
      var PL$63 = 0;
      for (; PL$63 < this["maps"]["length"]; PL$63++) {
        var params = this["maps"][PL$63];
        var PL$67 = this["mapScreens"][PL$63];
        if (params && PL$67) {
          /** @type {number} */
          var value = params["scroll"]["x"] / params["tilesize"];
          /** @type {number} */
          var i = params["scroll"]["y"] / params["tilesize"];
          if (params["repeat"]) {
            /** @type {number} */
            value = value % params["width"];
            /** @type {number} */
            i = i % params["height"];
          }
          /** @type {string} */
          PL$67["style"]["left"] = value * scale + "px";
          /** @type {string} */
          PL$67["style"]["top"] = i * scale + "px";
        }
      }
    }
  });
  ig["debug"]["addPanel"]({
    "type" : ig["DebugMapsPanel"],
    "name" : "maps",
    "label" : "Background Maps"
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("impact.debug.graph-panel")["requires"]("impact.debug.menu", "impact.system", "impact.game", "impact.image")["defines"](function() {
  ig["Game"]["inject"]({
    "draw" : function() {
      ig["graph"]["beginClock"]("draw");
      this["parent"]();
      ig["graph"]["endClock"]("draw");
    },
    "update" : function() {
      ig["graph"]["beginClock"]("update");
      this["parent"]();
      ig["graph"]["endClock"]("update");
    },
    "checkEntities" : function() {
      ig["graph"]["beginClock"]("checks");
      this["parent"]();
      ig["graph"]["endClock"]("checks");
    }
  });
  ig["DebugGraphPanel"] = ig["DebugPanel"]["extend"]({
    "clocks" : {},
    "marks" : [],
    "textY" : 0,
    "height" : 128,
    "ms" : 64,
    "timeBeforeRun" : 0,
    "init" : function(flightPhase, navigationLibrary) {
      this["parent"](flightPhase, navigationLibrary);
      this["mark16ms"] = (this["height"] - 16 * (this["height"] / this["ms"]))["round"]();
      this["mark33ms"] = (this["height"] - 33 * (this["height"] / this["ms"]))["round"]();
      /** @type {number} */
      this["msHeight"] = this["height"] / this["ms"];
      this["graph"] = ig["$new"]("canvas");
      this["graph"]["width"] = window["innerWidth"];
      this["graph"]["height"] = this["height"];
      this["container"]["appendChild"](this["graph"]);
      this["ctx"] = this["graph"]["getContext"]("2d");
      /** @type {string} */
      this["ctx"]["fillStyle"] = "#444";
      this["ctx"]["fillRect"](0, this["mark16ms"], this["graph"]["width"], 1);
      this["ctx"]["fillRect"](0, this["mark33ms"], this["graph"]["width"], 1);
      this["addGraphMark"]("16ms", this["mark16ms"]);
      this["addGraphMark"]("33ms", this["mark33ms"]);
      this["addClock"]("draw", "Draw", "#13baff");
      this["addClock"]("update", "Entity Update", "#bb0fff");
      this["addClock"]("checks", "Entity Checks & Collisions", "#a2e908");
      this["addClock"]("lag", "System Lag", "#f26900");
      ig["mark"] = this["mark"]["bind"](this);
      ig["graph"] = this;
    },
    "addGraphMark" : function(value, rounds) {
      var node = ig["$new"]("span");
      /** @type {string} */
      node["className"] = "ig_debug_graph_mark";
      node["textContent"] = value;
      node["style"]["top"] = rounds["round"]() + "px";
      this["container"]["appendChild"](node);
    },
    "addClock" : function(key, version, backgroundColor) {
      var element = ig["$new"]("span");
      /** @type {string} */
      element["className"] = "ig_debug_legend_color";
      /** @type {string} */
      element["style"]["backgroundColor"] = backgroundColor;
      var item = ig["$new"]("span");
      /** @type {string} */
      item["className"] = "ig_debug_legend_number";
      item["appendChild"](document["createTextNode"]("0"));
      var root = ig["$new"]("span");
      /** @type {string} */
      root["className"] = "ig_debug_legend";
      root["appendChild"](element);
      root["appendChild"](document["createTextNode"](version + " ("));
      root["appendChild"](item);
      root["appendChild"](document["createTextNode"]("ms)"));
      this["container"]["appendChild"](root);
      this["clocks"][key] = {
        "description" : version,
        "color" : backgroundColor,
        "current" : 0,
        "start" : Date["now"](),
        "avg" : 0,
        "html" : item
      };
    },
    "beginClock" : function(tag, lutDescriptor) {
      this["clocks"][tag]["start"] = Date["now"]() + (lutDescriptor || 0);
    },
    "endClock" : function(set) {
      set = this["clocks"][set];
      set["current"] = Math["round"](Date["now"]() - set["start"]);
      /** @type {number} */
      set["avg"] = 0.8 * set["avg"] + 0.2 * set["current"];
    },
    "mark" : function(row, colour) {
      if (this["active"]) {
        this["marks"]["push"]({
          "msg" : row,
          "color" : colour || "#fff"
        });
      }
    },
    "beforeRun" : function() {
      this["endClock"]("lag");
      this["timeBeforeRun"] = Date["now"]();
    },
    "afterRun" : function() {
      /** @type {number} */
      var x = Date["now"]() - this["timeBeforeRun"];
      this["beginClock"]("lag", Math["max"](1E3 / ig["system"]["fps"] - x, 0));
      /** @type {number} */
      x = this["graph"]["width"] - 1;
      var height = this["height"];
      this["ctx"]["drawImage"](this["graph"], -1, 0);
      /** @type {string} */
      this["ctx"]["fillStyle"] = "#000";
      this["ctx"]["fillRect"](x, 0, 1, this["height"]);
      /** @type {string} */
      this["ctx"]["fillStyle"] = "#444";
      this["ctx"]["fillRect"](x, this["mark16ms"], 1, 1);
      /** @type {string} */
      this["ctx"]["fillStyle"] = "#444";
      this["ctx"]["fillRect"](x, this["mark33ms"], 1, 1);
      var i;
      for (i in this["clocks"]) {
        var o = this["clocks"][i];
        o["html"]["textContent"] = o["avg"]["toFixed"](2);
        if (o["color"] && 0 < o["current"]) {
          this["ctx"]["fillStyle"] = o["color"];
          /** @type {number} */
          var actualHeight = o["current"] * this["msHeight"];
          /** @type {number} */
          height = height - actualHeight;
          this["ctx"]["fillRect"](x, height, 1, actualHeight);
          /** @type {number} */
          o["current"] = 0;
        }
      }
      /** @type {string} */
      this["ctx"]["textAlign"] = "right";
      /** @type {string} */
      this["ctx"]["textBaseline"] = "top";
      /** @type {number} */
      this["ctx"]["globalAlpha"] = 0.5;
      /** @type {number} */
      i = 0;
      for (; i < this["marks"]["length"]; i++) {
        height = this["marks"][i];
        this["ctx"]["fillStyle"] = height["color"];
        this["ctx"]["fillRect"](x, 0, 1, this["height"]);
        if (height["msg"]) {
          this["ctx"]["fillText"](height["msg"], x - 1, this["textY"]);
          /** @type {number} */
          this["textY"] = (this["textY"] + 8) % 32;
        }
      }
      /** @type {number} */
      this["ctx"]["globalAlpha"] = 1;
      /** @type {!Array} */
      this["marks"] = [];
    }
  });
  ig["debug"]["addPanel"]({
    "type" : ig["DebugGraphPanel"],
    "name" : "graph",
    "label" : "Performance"
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("impact.debug.debug")["requires"]("impact.debug.entities-panel", "impact.debug.maps-panel", "impact.debug.graph-panel")["defines"](function() {
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.patches.user-agent-patch")["defines"](function() {
  ig["ua"]["touchDevice"] = "ontouchstart" in window || window["navigator"]["msMaxTouchPoints"] || window["navigator"]["maxTouchPoints"];
  /** @type {boolean} */
  ig["ua"]["is_mac"] = "MacIntel" === navigator["platform"];
  ig["ua"]["iOS"] = ig["ua"]["touchDevice"] && ig["ua"]["is_mac"] || ig["ua"]["iOS"];
  ig["ua"]["mobile"] = ig["ua"]["iOS"] || ig["ua"]["mobile"];
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.patches.webkit-image-smoothing-patch")["defines"](function() {
  if (ig["System"]) {
    ig["System"]["SCALE"] = {
      "CRISP" : function(types, context) {
        /** @type {boolean} */
        context["imageSmoothingEnabled"] = context["msImageSmoothingEnabled"] = context["mozImageSmoothingEnabled"] = context["oImageSmoothingEnabled"] = false;
        /** @type {string} */
        types["style"]["imageRendering"] = "-moz-crisp-edges";
        /** @type {string} */
        types["style"]["imageRendering"] = "-o-crisp-edges";
        /** @type {string} */
        types["style"]["imageRendering"] = "-webkit-optimize-contrast";
        /** @type {string} */
        types["style"]["imageRendering"] = "crisp-edges";
        /** @type {string} */
        types["style"]["msInterpolationMode"] = "nearest-neighbor";
      },
      "SMOOTH" : function(types, context) {
        /** @type {boolean} */
        context["imageSmoothingEnabled"] = context["msImageSmoothingEnabled"] = context["mozImageSmoothingEnabled"] = context["oImageSmoothingEnabled"] = true;
        /** @type {string} */
        types["style"]["imageRendering"] = "";
        /** @type {string} */
        types["style"]["msInterpolationMode"] = "";
      }
    };
    ig["System"]["scaleMode"] = ig["System"]["SCALE"]["SMOOTH"];
  }
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.patches.windowfocus-onMouseDown-patch")["requires"]("impact.input")["defines"](function() {
  /** @type {boolean} */
  var sharingTarget = false;
  try {
    /** @type {boolean} */
    sharingTarget = window["self"] !== window["top"];
    if (false === sharingTarget) {
      /** @type {boolean} */
      sharingTarget = 0 < window["frames"]["length"];
    }
  } catch (_0x2039f8) {
    /** @type {boolean} */
    sharingTarget = true;
  }
  ig["Input"]["inject"]({
    "keydown" : function(event) {
      var p = event["target"]["tagName"];
      if (!("INPUT" == p || "TEXTAREA" == p)) {
        if (p = "keydown" == event["type"] ? event["keyCode"] : 2 == event["button"] ? ig["KEY"]["MOUSE2"] : ig["KEY"]["MOUSE1"], sharingTarget && 0 > p && window["focus"](), ("touchstart" == event["type"] || "mousedown" == event["type"]) && this["mousemove"](event), p = this["bindings"][p]) {
          /** @type {boolean} */
          this["actions"][p] = true;
          if (!this["locks"][p]) {
            /** @type {boolean} */
            this["presses"][p] = true;
            /** @type {boolean} */
            this["locks"][p] = true;
          }
          event["stopPropagation"]();
          event["preventDefault"]();
        }
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.patches.input-patch")["requires"]("impact.input")["defines"](function() {
  ig["Input"]["inject"]({
    "mousemove" : function(e) {
      /** @type {number} */
      var d = ig["system"]["scale"] * (ig["system"]["realWidth"] / ig["system"]["realWidth"]);
      var offset = {
        "left" : 0,
        "top" : 0
      };
      if (ig["system"]["canvas"]["getBoundingClientRect"]) {
        offset = ig["system"]["canvas"]["getBoundingClientRect"]();
      }
      e = e["touches"] ? e["touches"][0] : e;
      /** @type {number} */
      this["mouse"]["x"] = (e["clientX"] - offset["left"]) / d;
      /** @type {number} */
      this["mouse"]["y"] = (e["clientY"] - offset["top"]) / d;
      try {
        ig["soundHandler"]["unlockWebAudio"]();
      } catch (_0x3a498c) {
      }
    },
    "keyup" : function(e) {
      var type = e["target"]["tagName"];
      if (!("INPUT" == type || "TEXTAREA" == type)) {
        if (type = this["bindings"]["keyup" == e["type"] ? e["keyCode"] : 2 == e["button"] ? ig["KEY"]["MOUSE2"] : ig["KEY"]["MOUSE1"]]) {
          /** @type {boolean} */
          this["delayedKeyup"][type] = true;
          e["stopPropagation"]();
          e["preventDefault"]();
          if (ig["visibilityHandler"]) {
            ig["visibilityHandler"]["onChange"]("focus");
          }
          try {
            ig["soundHandler"]["unlockWebAudio"]();
          } catch (_0x13b991) {
          }
        }
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.font.font-info")["requires"]("impact.impact")["defines"](function() {
  ig["FontInfo"] = ig["Class"]["extend"]({
    "fonts" : [{
      "name" : "montserrat",
      "source" : "media/fonts/montserrat"
    }],
    "init" : function() {
      this["registerCssFont"]();
    },
    "registerCssFont" : function() {
      if (0 < this["fonts"]["length"]) {
        var node = document["createElement"]("style");
        /** @type {string} */
        node["type"] = "text/css";
        /** @type {string} */
        var token = "";
        /** @type {number} */
        var i = 0;
        for (; i < this["fonts"]["length"]; i++) {
          var plugin = this["fonts"][i];
          /** @type {string} */
          token = token + ("@font-face {font-family: '" + plugin["name"] + "';src: url('" + plugin["source"] + ".eot');src: url('" + plugin["source"] + ".eot?#iefix') format('embedded-opentype'),url('" + plugin["source"] + ".woff2') format('woff2'),url('" + plugin["source"] + ".woff') format('woff'),url('" + plugin["source"] + ".ttf') format('truetype'),url('" + plugin["source"] + ".svg#svgFontName') format('svg')}");
        }
        node["appendChild"](document["createTextNode"](token));
        document["head"]["appendChild"](node);
      }
    },
    "isValid" : function() {
      /** @type {number} */
      var i = 0;
      for (; i < this["fonts"]["length"]; i++) {
        if (!this["_isValidName"](this["fonts"][i]["source"])) {
          return false;
        }
      }
      return true;
    },
    "_isValidName" : function(attrName) {
      return -1 == attrName["search"](/^[a-z0-9-\/]+$/) ? false : true;
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.font.font-loader")["requires"]("impact.impact", "plugins.font.font-info", "impact.loader")["defines"](function() {
  ig["FontLoader"] = ig["Class"]["extend"]({
    "fontInfo" : new ig["FontInfo"],
    "onload" : false,
    "onerror" : false,
    "init" : function(handler, listener) {
      this["onload"] = handler;
      this["onerror"] = listener;
    },
    "load" : function() {
      if (this["fontInfo"]["isValid"]()) {
        this["_loadByLib"]();
      } else {
        console["error"]("Only lowercased alphanumeric and dash are allowed for font file name!. Please check the font path");
      }
    },
    "_loadByLib" : function() {
      /** @type {!Array} */
      var PL$41 = [];
      /** @type {number} */
      var i = 0;
      for (; i < this["fontInfo"]["fonts"]["length"]; i++) {
        var command = new FontFaceObserver(this["fontInfo"]["fonts"][i]["name"]);
        PL$41["push"](command["load"]());
      }
      Promise["all"](PL$41)["then"](this["onload"])["catch"](this["onerror"]);
    }
  });
  ig["Loader"]["inject"]({
    "parentLoad" : false,
    "load" : function() {
      this["parentLoad"] = this["parent"];
      (new ig["FontLoader"](this["onFontLoad"]["bind"](this), this["onFontError"]["bind"](this)))["load"]();
    },
    "onFontLoad" : function() {
      this["parentLoad"]();
    },
    "onFontError" : function() {
      console["error"]("Font is not loaded");
      this["parentLoad"]();
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.handlers.dom-handler")["defines"](function() {
  ig["DomHandler"] = ig["Class"]["extend"]({
    "JQUERYAVAILABLE" : false,
    "init" : function() {
      this["JQUERYAVAILABLE"] = this["_jqueryAvailable"]();
    },
    "_jqueryAvailable" : function() {
      return "undefined" !== typeof jQuery;
    },
    "addEvent" : function(element, event, callback, useCapture) {
      if (this["JQUERYAVAILABLE"]) {
        element["on"](event, callback);
      } else {
        element["addEventListener"](event, callback, useCapture);
      }
    },
    "create" : function(dimmer_el) {
      return this["JQUERYAVAILABLE"] ? $("<" + dimmer_el + ">") : ig["$new"](dimmer_el);
    },
    "getElementByClass" : function(className) {
      return this["JQUERYAVAILABLE"] ? $("." + className) : document["getElementsByClassName"](className);
    },
    "getElementById" : function(context) {
      return this["JQUERYAVAILABLE"] ? 0 < $(context)["length"] ? $(context) : null : ig["$"](context);
    },
    "appendChild" : function(data, el) {
      if (this["JQUERYAVAILABLE"]) {
        data["append"](el);
      } else {
        data["appendChild"](el);
      }
    },
    "appendToBody" : function(el) {
      if (this["JQUERYAVAILABLE"]) {
        $("body")["append"](el);
      } else {
        document["body"]["appendChild"](el);
      }
    },
    "resize" : function(element, attr, fn) {
      if (this["JQUERYAVAILABLE"]) {
        element["width"](attr["toFixed"](2));
        element["height"](fn["toFixed"](2));
      } else {
        var _0xe1c03f = element["style"]["visibility"];
        /** @type {string} */
        attr = "width:" + attr["toFixed"](2) + "px; height:" + fn["toFixed"](2) + "px;";
        this["attr"](element, "style", attr);
        element["style"]["visibility"] = _0xe1c03f;
      }
    },
    "resizeOffsetLeft" : function(obj, event, elmt, transformOrigin) {
      if (this["JQUERYAVAILABLE"]) {
        obj["width"](event["toFixed"](2));
        obj["height"](elmt["toFixed"](2));
        obj["css"]("left", transformOrigin);
      } else {
        var _0x470f25 = obj["style"]["visibility"];
        /** @type {string} */
        event = "width:" + event["toFixed"](2) + "px; height:" + elmt["toFixed"](2) + "px; left: " + transformOrigin["toFixed"](2) + "px;";
        this["attr"](obj, "style", event);
        obj["style"]["visibility"] = _0x470f25;
      }
    },
    "resizeOffset" : function(element, event, FileReaderWeb, callback, transform) {
      if (this["JQUERYAVAILABLE"]) {
        element["width"](event["toFixed"](2));
        element["height"](FileReaderWeb["toFixed"](2));
        element["css"]("left", callback);
        element["css"]("top", transform);
      } else {
        var _0x38bc23 = element["style"]["visibility"];
        /** @type {string} */
        event = "width:" + event["toFixed"](2) + "px; height:" + FileReaderWeb["toFixed"](2) + "px; left: " + callback["toFixed"](2) + "px; top: " + transform["toFixed"](2) + "px;";
        this["attr"](element, "style", event);
        element["style"]["visibility"] = _0x38bc23;
      }
    },
    "css" : function(options, value) {
      if (this["JQUERYAVAILABLE"]) {
        options["css"](value);
      } else {
        /** @type {string} */
        var attr = "";
        var prop;
        for (prop in value) {
          /** @type {string} */
          attr = attr + (prop + ":" + value[prop] + ";");
        }
        this["attr"](options, "style", attr);
      }
    },
    "getOffsets" : function(pos) {
      return this["JQUERYAVAILABLE"] ? (pos = pos["offset"](), {
        "left" : pos["left"],
        "top" : pos["top"]
      }) : {
        "left" : pos["offsetLeft"],
        "top" : pos["offsetTop"]
      };
    },
    "attr" : function(el, k, value) {
      if ("undefined" === typeof value) {
        return this["JQUERYAVAILABLE"] ? el["attr"](k) : el["getAttribute"](k);
      }
      if (this["JQUERYAVAILABLE"]) {
        el["attr"](k, value);
      } else {
        el["setAttribute"](k, value);
      }
    },
    "show" : function(data) {
      if (data && "undefined" !== typeof data) {
        if (this["JQUERYAVAILABLE"]) {
          data["show"]();
          data["css"]("visibility", "visible");
        } else {
          if (data) {
            if (data["style"]) {
              /** @type {string} */
              data["style"]["visibility"] = "visible";
            } else {
              if (data[0]) {
                /** @type {string} */
                data[0]["style"]["visibility"] = "visible";
              }
            }
          }
        }
      }
    },
    "hide" : function(data) {
      if (data && "undefined" !== typeof data) {
        if (this["JQUERYAVAILABLE"]) {
          data["hide"]();
          data["css"]("visibility", "hidden");
        } else {
          if (data) {
            if (data["style"]) {
              /** @type {string} */
              data["style"]["visibility"] = "hidden";
            } else {
              if (data[0]) {
                /** @type {string} */
                data[0]["style"]["visibility"] = "hidden";
              }
            }
          }
        }
      }
    },
    "getQueryVariable" : function(variable) {
      var PL$16 = window["location"]["search"]["substring"](1)["split"]("&");
      /** @type {number} */
      var PL$17 = 0;
      for (; PL$17 < PL$16["length"]; PL$17++) {
        var parsedQR = PL$16[PL$17]["split"]("=");
        if (decodeURIComponent(parsedQR[0]) == variable) {
          return decodeURIComponent(parsedQR[1]);
        }
      }
    },
    "forcedDeviceDetection" : function() {
      var switchStatement = this["getQueryVariable"]("device");
      if (switchStatement) {
        switch(switchStatement) {
          case "mobile":
            console["log"]("serving mobile version ...");
            /** @type {boolean} */
            ig["ua"]["mobile"] = true;
            break;
          case "desktop":
            console["log"]("serving desktop version ...");
            /** @type {boolean} */
            ig["ua"]["mobile"] = false;
            break;
          default:
            console["log"]("serving universal version ...");
        }
      } else {
        console["log"]("serving universal version ...");
      }
    },
    "forcedDeviceRotation" : function() {
      var parent = this["getQueryVariable"]("force-rotate");
      if (parent) {
        switch(parent) {
          case "portrait":
            console["log"]("force rotate to portrait");
            /** @type {number} */
            window["orientation"] = 0;
            break;
          case "landscape":
            console["log"]("force rotate to horizontal");
            /** @type {number} */
            window["orientation"] = 90;
            break;
          default:
            alert("wrong command/type in param force-rotate. Defaulting value to portrait");
            /** @type {number} */
            window["orientation"] = 0;
        }
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.data.vector")["defines"](function() {
  /**
   * @param {number} x
   * @param {number} y
   * @return {undefined}
   */
  Vector2 = function(x, y) {
    this["x"] = x || 0;
    this["y"] = y || 0;
  };
  Vector2["prototype"] = {
    "valType" : "number",
    "neg" : function() {
      /** @type {number} */
      this["x"] = -this["x"];
      /** @type {number} */
      this["y"] = -this["y"];
      return this;
    },
    "row" : function(index) {
      if (typeof index === this["valType"]) {
        this["y"] = index;
      }
      return this["y"];
    },
    "col" : function(i) {
      if (typeof i === this["valType"]) {
        this["x"] = i;
      }
      return this["x"];
    },
    "add" : function(value) {
      if (value instanceof Vector2) {
        this["x"] += value["x"];
        this["y"] += value["y"];
      } else {
        this["x"] += value;
        this["y"] += value;
      }
      return this;
    },
    "sub" : function(other) {
      if (other instanceof Vector2) {
        this["x"] -= other["x"];
        this["y"] -= other["y"];
      } else {
        this["x"] -= other;
        this["y"] -= other;
      }
      return this;
    },
    "mul" : function(s) {
      if (s instanceof Vector2) {
        this["x"] *= s["x"];
        this["y"] *= s["y"];
      } else {
        this["x"] *= s;
        this["y"] *= s;
      }
      return this;
    },
    "div" : function(v) {
      if (v instanceof Vector2) {
        if (0 != v["x"]) {
          this["x"] /= v["x"];
        }
        if (0 != v["y"]) {
          this["y"] /= v["y"];
        }
      } else {
        if (0 != v) {
          this["x"] /= v;
          this["y"] /= v;
        }
      }
      return this;
    },
    "equals" : function(left) {
      return this["x"] == left["x"] && this["y"] == left["y"];
    },
    "dot" : function(other) {
      return this["x"] * other["x"] + this["y"] * other["y"];
    },
    "cross" : function(other) {
      return this["x"] * other["y"] - this["y"] * other["x"];
    },
    "length" : function() {
      return Math["sqrt"](this["dot"](this));
    },
    "norm" : function() {
      return this["divide"](this["length"]());
    },
    "min" : function() {
      return Math["min"](this["x"], this["y"]);
    },
    "max" : function() {
      return Math["max"](this["x"], this["y"]);
    },
    "toAngles" : function() {
      return -Math["atan2"](-this["y"], this["x"]);
    },
    "angleTo" : function(b) {
      return Math["acos"](this["dot"](b) / (this["length"]() * b["length"]()));
    },
    "toArray" : function(array_like) {
      return [this["x"], this["y"]]["slice"](0, array_like || 2);
    },
    "clone" : function() {
      return new Vector2(this["x"], this["y"]);
    },
    "set" : function(pageX, pageY) {
      this["x"] = pageX;
      this["y"] = pageY;
      return this;
    },
    "unit" : function() {
      var len = this["length"]();
      if (0 < len) {
        return new Vector2(this["x"] / len, this["y"] / len);
      }
      throw "Divide by 0 error in unitVector function of vector:" + this;
    },
    "turnRight" : function() {
      var kx = this["x"];
      /** @type {number} */
      this["x"] = -this["y"];
      this["y"] = kx;
      return this;
    },
    "turnLeft" : function() {
      var x = this["x"];
      this["x"] = this["y"];
      /** @type {number} */
      this["y"] = -x;
      return this;
    },
    "rotate" : function(gmst) {
      var ecf_coords = this["clone"]();
      /** @type {number} */
      this["x"] = ecf_coords["x"] * Math["cos"](gmst) - ecf_coords["y"] * Math["sin"](gmst);
      /** @type {number} */
      this["y"] = ecf_coords["x"] * Math["sin"](gmst) + ecf_coords["y"] * Math["cos"](gmst);
      return this;
    }
  };
  /**
   * @param {!Object} satellite_coords
   * @return {?}
   */
  Vector2["negative"] = function(satellite_coords) {
    return new Vector2(-satellite_coords["x"], -satellite_coords["y"]);
  };
  /**
   * @param {!Object} position
   * @param {!Object} velocity
   * @return {?}
   */
  Vector2["add"] = function(position, velocity) {
    return velocity instanceof Vector2 ? new Vector2(position["x"] + velocity["x"], position["y"] + velocity["y"]) : new Vector2(position["x"] + v, position["y"] + v);
  };
  /**
   * @param {!Object} position
   * @param {!Object} my_location
   * @return {?}
   */
  Vector2["subtract"] = function(position, my_location) {
    return my_location instanceof Vector2 ? new Vector2(position["x"] - my_location["x"], position["y"] - my_location["y"]) : new Vector2(position["x"] - v, position["y"] - v);
  };
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @return {?}
   */
  Vector2["multiply"] = function(a, b) {
    return b instanceof Vector2 ? new Vector2(a["x"] * b["x"], a["y"] * b["y"]) : new Vector2(a["x"] * v, a["y"] * v);
  };
  /**
   * @param {!Object} o
   * @param {!Object} b
   * @return {?}
   */
  Vector2["divide"] = function(o, b) {
    return b instanceof Vector2 ? new Vector2(o["x"] / b["x"], o["y"] / b["y"]) : new Vector2(o["x"] / v, o["y"] / v);
  };
  /**
   * @param {!Object} ptile_a
   * @param {!Object} ptile_b
   * @return {?}
   */
  Vector2["equals"] = function(ptile_a, ptile_b) {
    return ptile_a["x"] == ptile_b["x"] && ptile_a["y"] == ptile_b["y"];
  };
  /**
   * @param {!Object} eci_coords
   * @param {!Object} other
   * @return {?}
   */
  Vector2["dot"] = function(eci_coords, other) {
    return eci_coords["x"] * other["x"] + eci_coords["y"] * other["y"];
  };
  /**
   * @param {!Object} eci_coords
   * @param {!Object} other
   * @return {?}
   */
  Vector2["cross"] = function(eci_coords, other) {
    return eci_coords["x"] * other["y"] - eci_coords["y"] * other["x"];
  };
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.handlers.size-handler")["requires"]("plugins.data.vector")["defines"](function() {
  ig["SizeHandler"] = ig["Class"]["extend"]({
    "portraitMode" : true,
    "disableStretchToFitOnMobileFlag" : false,
    "enableStretchToFitOnAntiPortraitModeFlag" : true,
    "enableScalingLimitsOnMobileFlag" : false,
    "minScalingOnMobile" : 0,
    "maxScalingOnMobile" : 1,
    "enableStretchToFitOnDesktopFlag" : false,
    "enableScalingLimitsOnDesktopFlag" : false,
    "minScalingOnDesktop" : 0,
    "maxScalingOnDesktop" : 1,
    "desktop" : {
      "actualSize" : new Vector2(window["innerWidth"], window["innerHeight"]),
      "actualResolution" : new Vector2(1280, 720)
    },
    "mobile" : {
      "actualSize" : new Vector2(window["innerWidth"], window["innerHeight"]),
      "actualResolution" : new Vector2(720, 1280)
    },
    "windowSize" : new Vector2(window["innerWidth"], window["innerHeight"]),
    "scaleRatioMultiplier" : new Vector2(1, 1),
    "sizeRatio" : new Vector2(1, 1),
    "scale" : 1,
    "domHandler" : null,
    "dynamicClickableEntityDivs" : {},
    "coreDivsToResize" : ["#canvas", "#play", "#orientate"],
    "adsToResize" : {
      "MobileAdInGamePreroll" : {
        "box-width" : _SETTINGS["Ad"]["Mobile"]["Preroll"]["Width"] + 2,
        "box-height" : _SETTINGS["Ad"]["Mobile"]["Preroll"]["Height"] + 20
      },
      "MobileAdInGameEnd" : {
        "box-width" : _SETTINGS["Ad"]["Mobile"]["End"]["Width"] + 2,
        "box-height" : _SETTINGS["Ad"]["Mobile"]["End"]["Height"] + 20
      },
      "MobileAdInGamePreroll2" : {
        "box-width" : _SETTINGS["Ad"]["Mobile"]["Preroll"]["Width"] + 2,
        "box-height" : _SETTINGS["Ad"]["Mobile"]["Preroll"]["Height"] + 20
      },
      "MobileAdInGameEnd2" : {
        "box-width" : _SETTINGS["Ad"]["Mobile"]["End"]["Width"] + 2,
        "box-height" : _SETTINGS["Ad"]["Mobile"]["End"]["Height"] + 20
      },
      "MobileAdInGamePreroll3" : {
        "box-width" : _SETTINGS["Ad"]["Mobile"]["Preroll"]["Width"] + 2,
        "box-height" : _SETTINGS["Ad"]["Mobile"]["Preroll"]["Height"] + 20
      },
      "MobileAdInGameEnd3" : {
        "box-width" : _SETTINGS["Ad"]["Mobile"]["End"]["Width"] + 2,
        "box-height" : _SETTINGS["Ad"]["Mobile"]["End"]["Height"] + 20
      }
    },
    "init" : function(sortMode) {
      this["domHandler"] = sortMode;
      if ("undefined" === typeof sortMode) {
        throw "undefined Dom Handler for Size Handler";
      }
      this["sizeCalcs"]();
      this["eventListenerSetup"]();
      this["samsungFix"]();
    },
    "sizeCalcs" : function() {
      this["windowSize"] = new Vector2(window["innerWidth"], window["innerHeight"]);
      if (ig["ua"]["mobile"]) {
        this["mobile"]["actualSize"] = new Vector2(window["innerWidth"], window["innerHeight"]);
        var p1 = new Vector2(this["mobile"]["actualResolution"]["x"], this["mobile"]["actualResolution"]["y"]);
        this["scaleRatioMultiplier"] = new Vector2(this["mobile"]["actualSize"]["x"] / p1["x"], this["mobile"]["actualSize"]["y"] / p1["y"]);
        if (this["disableStretchToFitOnMobileFlag"]) {
          var radiusearthkm = Math["min"](this["scaleRatioMultiplier"]["x"], this["scaleRatioMultiplier"]["y"]);
          if (this["enableScalingLimitsOnMobileFlag"]) {
            radiusearthkm = radiusearthkm["limit"](this["minScalingOnMobile"], this["maxScalingOnMobile"]);
          }
          /** @type {number} */
          this["mobile"]["actualSize"]["x"] = p1["x"] * radiusearthkm;
          /** @type {number} */
          this["mobile"]["actualSize"]["y"] = p1["y"] * radiusearthkm;
          this["scaleRatioMultiplier"]["x"] = radiusearthkm;
          this["scaleRatioMultiplier"]["y"] = radiusearthkm;
        } else {
          this["sizeRatio"]["x"] = this["scaleRatioMultiplier"]["x"];
          this["sizeRatio"]["y"] = this["scaleRatioMultiplier"]["y"];
          /** @type {number} */
          this["scaleRatioMultiplier"]["x"] = 1;
          /** @type {number} */
          this["scaleRatioMultiplier"]["y"] = 1;
        }
      } else {
        this["desktop"]["actualSize"] = new Vector2(window["innerWidth"], window["innerHeight"]);
        p1 = new Vector2(this["desktop"]["actualResolution"]["x"], this["desktop"]["actualResolution"]["y"]);
        this["scaleRatioMultiplier"] = new Vector2(this["desktop"]["actualSize"]["x"] / p1["x"], this["desktop"]["actualSize"]["y"] / p1["y"]);
        if (this["enableStretchToFitOnDesktopFlag"]) {
          this["sizeRatio"]["x"] = this["scaleRatioMultiplier"]["x"];
          this["sizeRatio"]["y"] = this["scaleRatioMultiplier"]["y"];
          /** @type {number} */
          this["scaleRatioMultiplier"]["x"] = 1;
          /** @type {number} */
          this["scaleRatioMultiplier"]["y"] = 1;
        } else {
          radiusearthkm = Math["min"](this["scaleRatioMultiplier"]["x"], this["scaleRatioMultiplier"]["y"]);
          if (this["enableScalingLimitsOnDesktopFlag"]) {
            radiusearthkm = radiusearthkm["limit"](this["minScalingOnDesktop"], this["maxScalingOnDesktop"]);
          }
          /** @type {number} */
          this["desktop"]["actualSize"]["x"] = p1["x"] * radiusearthkm;
          /** @type {number} */
          this["desktop"]["actualSize"]["y"] = p1["y"] * radiusearthkm;
          this["scaleRatioMultiplier"]["x"] = radiusearthkm;
          this["scaleRatioMultiplier"]["y"] = radiusearthkm;
        }
      }
    },
    "resizeLayers" : function() {
      /** @type {number} */
      var left = 0;
      for (; left < this["coreDivsToResize"]["length"]; left++) {
        var pos = ig["domHandler"]["getElementById"](this["coreDivsToResize"][left]);
        if (ig["ua"]["mobile"]) {
          if (this["disableStretchToFitOnMobileFlag"]) {
            var num = Math["floor"](ig["sizeHandler"]["windowSize"]["x"] / 2 - ig["sizeHandler"]["mobile"]["actualSize"]["x"] / 2);
            var height = Math["floor"](ig["sizeHandler"]["windowSize"]["y"] / 2 - ig["sizeHandler"]["mobile"]["actualSize"]["y"] / 2);
            if (0 > num) {
              /** @type {number} */
              num = 0;
            }
            if (0 > height) {
              /** @type {number} */
              height = 0;
            }
            ig["domHandler"]["resizeOffset"](pos, Math["floor"](ig["sizeHandler"]["mobile"]["actualSize"]["x"]), Math["floor"](ig["sizeHandler"]["mobile"]["actualSize"]["y"]), num, height);
            /** @type {boolean} */
            var value = false;
            if (this["portraitMode"] ? window["innerHeight"] < window["innerWidth"] : window["innerHeight"] > window["innerWidth"]) {
              if (this["enableStretchToFitOnAntiPortraitModeFlag"]) {
                ig["domHandler"]["resizeOffset"](pos, Math["floor"](window["innerWidth"]), Math["floor"](window["innerHeight"]), 0, 0);
              } else {
                value = new Vector2(window["innerWidth"] / this["mobile"]["actualResolution"]["y"], window["innerHeight"] / this["mobile"]["actualResolution"]["x"]);
                num = Math["min"](value["x"], value["y"]);
                /** @type {number} */
                value = this["mobile"]["actualResolution"]["y"] * num;
                /** @type {number} */
                var x = this["mobile"]["actualResolution"]["x"] * num;
                num = Math["floor"](ig["sizeHandler"]["windowSize"]["x"] / 2 - value / 2);
                height = Math["floor"](ig["sizeHandler"]["windowSize"]["y"] / 2 - x / 2);
                if (0 > num) {
                  /** @type {number} */
                  num = 0;
                }
                if (0 > height) {
                  /** @type {number} */
                  height = 0;
                }
                ig["domHandler"]["resizeOffset"](pos, Math["floor"](value), Math["floor"](x), num, height);
              }
            }
          } else {
            ig["domHandler"]["resize"](pos, Math["floor"](ig["sizeHandler"]["mobile"]["actualSize"]["x"]), Math["floor"](ig["sizeHandler"]["mobile"]["actualSize"]["y"]));
          }
        } else {
          if (this["enableStretchToFitOnDesktopFlag"]) {
            ig["domHandler"]["resize"](pos, Math["floor"](ig["sizeHandler"]["desktop"]["actualSize"]["x"]), Math["floor"](ig["sizeHandler"]["desktop"]["actualSize"]["y"]));
          } else {
            num = Math["floor"](ig["sizeHandler"]["windowSize"]["x"] / 2 - ig["sizeHandler"]["desktop"]["actualSize"]["x"] / 2);
            height = Math["floor"](ig["sizeHandler"]["windowSize"]["y"] / 2 - ig["sizeHandler"]["desktop"]["actualSize"]["y"] / 2);
            if (0 > num) {
              /** @type {number} */
              num = 0;
            }
            if (0 > height) {
              /** @type {number} */
              height = 0;
            }
            ig["domHandler"]["resizeOffset"](pos, Math["floor"](ig["sizeHandler"]["desktop"]["actualSize"]["x"]), Math["floor"](ig["sizeHandler"]["desktop"]["actualSize"]["y"]), num, height);
          }
        }
      }
      var j;
      for (j in this["adsToResize"]) {
        left = ig["domHandler"]["getElementById"]("#" + j);
        pos = ig["domHandler"]["getElementById"]("#" + j + "-Box");
        /** @type {string} */
        value = (window["innerWidth"] - this["adsToResize"][j]["box-width"]) / 2 + "px";
        /** @type {string} */
        num = (window["innerHeight"] - this["adsToResize"][j]["box-height"]) / 2 + "px";
        if (left) {
          ig["domHandler"]["css"](left, {
            "width" : window["innerWidth"],
            "height" : window["innerHeight"]
          });
        }
        if (pos) {
          ig["domHandler"]["css"](pos, {
            "left" : value,
            "top" : num
          });
        }
      }
      left = ig["domHandler"]["getElementById"]("#canvas");
      pos = ig["domHandler"]["getOffsets"](left);
      left = pos["left"];
      pos = pos["top"];
      value = Math["min"](ig["sizeHandler"]["scaleRatioMultiplier"]["x"], ig["sizeHandler"]["scaleRatioMultiplier"]["y"]);
      for (j in this["dynamicClickableEntityDivs"]) {
        num = ig["domHandler"]["getElementById"]("#" + j);
        if (ig["ua"]["mobile"]) {
          x = this["dynamicClickableEntityDivs"][j]["entity_pos_x"];
          var y = this["dynamicClickableEntityDivs"][j]["entity_pos_y"];
          var width = this["dynamicClickableEntityDivs"][j]["width"];
          height = this["dynamicClickableEntityDivs"][j]["height"];
          if (this["disableStretchToFitOnMobileFlag"]) {
            x = Math["floor"](left + x * this["scaleRatioMultiplier"]["x"]) + "px";
            y = Math["floor"](pos + y * this["scaleRatioMultiplier"]["y"]) + "px";
            width = Math["floor"](width * this["scaleRatioMultiplier"]["x"]) + "px";
            height = Math["floor"](height * this["scaleRatioMultiplier"]["y"]) + "px";
          } else {
            x = Math["floor"](x * this["sizeRatio"]["x"]) + "px";
            y = Math["floor"](y * this["sizeRatio"]["y"]) + "px";
            width = Math["floor"](width * this["sizeRatio"]["x"]) + "px";
            height = Math["floor"](height * this["sizeRatio"]["y"]) + "px";
          }
        } else {
          x = this["dynamicClickableEntityDivs"][j]["entity_pos_x"];
          y = this["dynamicClickableEntityDivs"][j]["entity_pos_y"];
          width = this["dynamicClickableEntityDivs"][j]["width"];
          height = this["dynamicClickableEntityDivs"][j]["height"];
          if (this["enableStretchToFitOnDesktopFlag"]) {
            x = Math["floor"](x * this["sizeRatio"]["x"]) + "px";
            y = Math["floor"](y * this["sizeRatio"]["y"]) + "px";
            width = Math["floor"](width * this["sizeRatio"]["x"]) + "px";
            height = Math["floor"](height * this["sizeRatio"]["y"]) + "px";
          } else {
            x = Math["floor"](left + x * this["scaleRatioMultiplier"]["x"]) + "px";
            y = Math["floor"](pos + y * this["scaleRatioMultiplier"]["y"]) + "px";
            width = Math["floor"](width * this["scaleRatioMultiplier"]["x"]) + "px";
            height = Math["floor"](height * this["scaleRatioMultiplier"]["y"]) + "px";
          }
        }
        ig["domHandler"]["css"](num, {
          "float" : "left",
          "position" : "absolute",
          "left" : x,
          "top" : y,
          "width" : width,
          "height" : height,
          "z-index" : 3
        });
        if (this["dynamicClickableEntityDivs"][j]["font-size"]) {
          ig["domHandler"]["css"](num, {
            "font-size" : this["dynamicClickableEntityDivs"][j]["font-size"] * value + "px"
          });
        }
      }
      $("#ajaxbar")["width"](this["windowSize"]["x"]);
      $("#ajaxbar")["height"](this["windowSize"]["y"]);
    },
    "resize" : function() {
      this["sizeCalcs"]();
      this["resizeLayers"]();
    },
    "reorient" : function() {
      console["log"]("changing orientation ...");
      if (ig["ua"]["mobile"]) {
        /** @type {boolean} */
        var _0x246bb1 = false;
        /** @type {boolean} */
        _0x246bb1 = this["portraitMode"] ? window["innerHeight"] < window["innerWidth"] : window["innerHeight"] > window["innerWidth"];
        var effectSpeed = this["domHandler"]["getElementById"]("#orientate");
        var connection = this["domHandler"]["getElementById"]("#game");
        if (_0x246bb1) {
          this["domHandler"]["show"](effectSpeed);
          this["domHandler"]["hide"](connection);
          console["log"]("portrait" + window["innerWidth"] + "," + window["innerHeight"]);
        } else {
          this["domHandler"]["show"](connection);
          this["domHandler"]["hide"](effectSpeed);
          console["log"]("landscape" + window["innerWidth"] + "," + window["innerHeight"]);
        }
      }
      if (ig["ua"]["mobile"]) {
        this["resize"]();
        this["resizeAds"]();
      } else {
        this["resize"]();
      }
    },
    "resizeAds" : function() {
      var iRand;
      for (iRand in this["adsToResize"]) {
        var type = ig["domHandler"]["getElementById"]("#" + iRand);
        var thumbOpts = ig["domHandler"]["getElementById"]("#" + iRand + "-Box");
        /** @type {string} */
        var left_px = (window["innerWidth"] - this["adsToResize"][iRand]["box-width"]) / 2 + "px";
        /** @type {string} */
        var toppx = (window["innerHeight"] - this["adsToResize"][iRand]["box-height"]) / 2 + "px";
        if (type) {
          ig["domHandler"]["css"](type, {
            "width" : window["innerWidth"],
            "height" : window["innerHeight"]
          });
        }
        if (thumbOpts) {
          ig["domHandler"]["css"](thumbOpts, {
            "left" : left_px,
            "top" : toppx
          });
        }
      }
    },
    "samsungFix" : function() {
      if (ig["ua"]["android"] && !(4.2 > parseFloat(navigator["userAgent"]["slice"](navigator["userAgent"]["indexOf"]("Android") + 8, navigator["userAgent"]["indexOf"]("Android") + 11))) && (!(0 > navigator["userAgent"]["indexOf"]("GT")) && !(0 < navigator["userAgent"]["indexOf"]("Chrome")) && !(0 < navigator["userAgent"]["indexOf"]("Firefox")))) {
        document["addEventListener"]("touchstart", function(result) {
          result["preventDefault"]();
          return false;
        }, false);
        document["addEventListener"]("touchmove", function(result) {
          result["preventDefault"]();
          return false;
        }, false);
        document["addEventListener"]("touchend", function(result) {
          result["preventDefault"]();
          return false;
        }, false);
      }
    },
    "orientationInterval" : null,
    "orientationTimeout" : null,
    "orientationHandler" : function() {
      this["reorient"]();
      window["scrollTo"](0, 1);
    },
    "orientationDelayHandler" : function() {
      if (null == this["orientationInterval"]) {
        this["orientationInterval"] = window["setInterval"](this["orientationHandler"]["bind"](this), 100);
      }
      if (null == this["orientationTimeout"]) {
        this["orientationTimeout"] = window["setTimeout"](function() {
          this["clearAllIntervals"]();
        }["bind"](this), 2E3);
      }
    },
    "clearAllIntervals" : function() {
      window["clearInterval"](this["orientationInterval"]);
      /** @type {null} */
      this["orientationInterval"] = null;
      window["clearTimeout"](this["orientationTimeout"]);
      /** @type {null} */
      this["orientationTimeout"] = null;
    },
    "eventListenerSetup" : function() {
      if (ig["ua"]["iOS"]) {
        window["addEventListener"]("orientationchange", this["orientationDelayHandler"]["bind"](this));
        window["addEventListener"]("resize", this["orientationDelayHandler"]["bind"](this));
      } else {
        window["addEventListener"]("orientationchange", this["orientationHandler"]["bind"](this));
        window["addEventListener"]("resize", this["orientationHandler"]["bind"](this));
      }
      /**
       * @param {!Object} result
       * @return {undefined}
       */
      document["ontouchmove"] = function(result) {
        window["scrollTo"](0, 1);
        result["preventDefault"]();
      };
      this["chromePullDownRefreshFix"]();
    },
    "chromePullDownRefreshFix" : function() {
      var header = window["chrome"] || navigator["userAgent"]["match"]("CriOS");
      /** @type {boolean} */
      var node = "ontouchstart" in document["documentElement"];
      if (header && node) {
        /** @type {boolean} */
        var originalHeader = header = false;
        /** @type {number} */
        var x = 0;
        /** @type {boolean} */
        var _limit_top = false;
        try {
          if (CSS["supports"]("overscroll-behavior-y", "contain")) {
            /** @type {boolean} */
            header = true;
          }
        } catch (_0x138579) {
        }
        try {
          if (header) {
            return document["body"]["style"]["overscrollBehaviorY"] = "contain";
          }
        } catch (_0x3e67b5) {
        }
        header = document["head"] || document["body"];
        node = document["createElement"]("style");
        /** @type {string} */
        node["type"] = "text/css";
        if (node["styleSheet"]) {
          /** @type {string} */
          node["styleSheet"]["cssText"] = "\n      ::-webkit-scrollbar {\n        width: 500x;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 500px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    ";
        } else {
          node["appendChild"](document["createTextNode"]("\n      ::-webkit-scrollbar {\n        width: 500px;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 500px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    "));
        }
        header["appendChild"](node);
        try {
          addEventListener("test", null, {
            get "passive"() {
              /** @type {boolean} */
              originalHeader = true;
            }
          });
        } catch (_0x4fd124) {
        }
        document["addEventListener"]("touchstart", function(PL$71) {
          if (1 === PL$71["touches"]["length"]) {
            x = PL$71["touches"][0]["clientY"];
            /** @type {boolean} */
            _limit_top = 0 === window["pageYOffset"];
          }
        }, !!originalHeader && {
          "passive" : true
        });
        document["addEventListener"]("touchmove", function(event) {
          var y;
          if (y = _limit_top) {
            /** @type {boolean} */
            _limit_top = false;
            y = event["touches"][0]["clientY"];
            /** @type {number} */
            var difference = y - x;
            /** @type {boolean} */
            y = (x = y, 0 < difference);
          }
          if (y) {
            return event["preventDefault"]();
          }
        }, !!originalHeader && {
          "passive" : false
        });
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.handlers.api-handler")["defines"](function() {
  ig["ApiHandler"] = ig["Class"]["extend"]({
    "apiAvailable" : {
      "MJSPreroll" : function() {
        if (ig["ua"]["mobile"] && ig["domHandler"]["JQUERYAVAILABLE"] && _SETTINGS && _SETTINGS["Ad"]["Mobile"]["Preroll"]["Enabled"]) {
          MobileAdInGamePreroll["Initialize"]();
        }
      },
      "MJSHeader" : function() {
        if (ig["ua"]["mobile"] && ig["domHandler"]["JQUERYAVAILABLE"] && _SETTINGS["Ad"]["Mobile"]["Header"]["Enabled"]) {
          MobileAdInGameHeader["Initialize"]();
        }
      },
      "MJSFooter" : function() {
        if (ig["ua"]["mobile"] && ig["domHandler"]["JQUERYAVAILABLE"] && _SETTINGS["Ad"]["Mobile"]["Footer"]["Enabled"]) {
          MobileAdInGameFooter["Initialize"]();
        }
      },
      "MJSEnd" : function() {
        if (ig["ua"]["mobile"] && ig["domHandler"]["JQUERYAVAILABLE"] && _SETTINGS["Ad"]["Mobile"]["End"]["Enabled"]) {
          MobileAdInGameEnd["Initialize"]();
        }
      }
    },
    "run" : function(letter, e) {
      if (this["apiAvailable"][letter]) {
        this["apiAvailable"][letter](e);
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.audio.sound-player")["defines"](function() {
  SoundPlayer = ig["Class"]["extend"]({
    "tagName" : "SoundPlayer",
    "stayMuteFlag" : false,
    "debug" : false,
    "init" : function() {
      if (this["debug"]) {
        console["log"](this["tagName"]);
      }
    },
    "play" : function(body) {
      if (this["debug"]) {
        console["log"]("play sound ", body);
      }
    },
    "stop" : function() {
      if (this["debug"]) {
        console["log"]("stop sound ");
      }
    },
    "volume" : function() {
      if (this["debug"]) {
        console["log"]("set volume");
      }
    },
    "mute" : function(state) {
      if (this["debug"]) {
        console["log"]("mute");
      }
      if ("undefined" === typeof state) {
        /** @type {boolean} */
        this["stayMuteFlag"] = true;
      } else {
        if (state) {
          /** @type {boolean} */
          this["stayMuteFlag"] = true;
        }
      }
    },
    "unmute" : function(state) {
      if (this["debug"]) {
        console["log"]("unmute");
      }
      if ("undefined" === typeof state) {
        /** @type {boolean} */
        this["stayMuteFlag"] = false;
      } else {
        if (state) {
          /** @type {boolean} */
          this["stayMuteFlag"] = false;
        }
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.audio.impact-music-player")["requires"]("plugins.audio.sound-player")["defines"](function() {
  ImpactMusicPlayer = SoundPlayer["extend"]({
    "tagName" : "ImpactMusicPlayer",
    "bgmPlaying" : false,
    "soundList" : {},
    "init" : function(data, options) {
      this["parent"](data, options);
      var type;
      for (type in data) {
        /** @type {string} */
        this["soundList"][type] = type;
        ig["music"]["add"](data[type]["path"] + ".*", type);
      }
      if (options && options["loop"]) {
        ig["music"]["loop"] = options["loop"];
      }
    },
    "play" : function(callback) {
      if (!this["stayMuteFlag"]) {
        /** @type {boolean} */
        this["bgmPlaying"] = true;
        if ("undefined" === typeof callback) {
          ig["music"]["play"](callback);
        } else {
          ig["music"]["play"]();
        }
      }
    },
    "stop" : function() {
      /** @type {boolean} */
      this["bgmPlaying"] = false;
      ig["music"]["pause"]();
    },
    "volume" : function(value) {
      console["log"]("impactmusic:", value);
      ig["music"]["volume"] = 0 > value ? 0 : isNaN(value) ? 1 : 1 < value ? 1 : value;
    },
    "getVolume" : function() {
      return ig["music"]["volume"];
    },
    "mute" : function(b_mute) {
      this["parent"](b_mute);
      if (this["bgmPlaying"]) {
        this["stop"]();
      }
    },
    "unmute" : function(toggle) {
      this["parent"](toggle);
      this["play"]();
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.audio.impact-sound-player")["requires"]("plugins.audio.sound-player")["defines"](function() {
  ImpactSoundPlayer = SoundPlayer["extend"]({
    "tagName" : "ImpactSoundPlayer",
    "soundList" : {},
    "init" : function(failure, details) {
      this["parent"](failure, details);
      var ifailedtests;
      for (ifailedtests in failure) {
        var signedTxHex = new ig["Sound"](failure[ifailedtests]["path"] + ".*");
        this["soundList"][ifailedtests] = signedTxHex;
      }
    },
    "play" : function(message) {
      if (!this["stayMuteFlag"]) {
        if ("object" === typeof message) {
          console["log"](message + " exists");
          message["play"]();
        } else {
          if ("string" === typeof message) {
            this["soundList"][message]["play"]();
          }
        }
      }
    },
    "stop" : function(e) {
      this["parent"](e);
      e["stop"]();
    },
    "volume" : function(value) {
      ig["soundManager"]["volume"] = 0 > value ? 0 : isNaN(value) ? 1 : 1 < value ? 1 : value;
    },
    "getVolume" : function() {
      return ig["soundManager"]["volume"];
    },
    "mute" : function(b_mute) {
      this["parent"](b_mute);
      /** @type {boolean} */
      ig["Sound"]["enabled"] = false;
    },
    "unmute" : function(toggle) {
      this["parent"](toggle);
      /** @type {boolean} */
      ig["Sound"]["enabled"] = true;
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.audio.howler-player")["requires"]("plugins.audio.sound-player")["defines"](function() {
  HowlerPlayer = SoundPlayer["extend"]({
    "tagName" : "HowlerPlayer",
    "soundList" : {},
    "init" : function(files, ngModel) {
      this["parent"](files, ngModel);
      var i;
      for (i in files) {
        var newPath = files[i]["path"];
        newPath = new Howl({
          "src" : [newPath + "." + ig["Sound"]["FORMAT"]["OGG"]["ext"], newPath + "." + ig["Sound"]["FORMAT"]["MP3"]["ext"]]
        });
        this["soundList"][i] = newPath;
      }
    },
    "play" : function(url) {
      if (Howler["ctx"] && "running" !== Howler["ctx"]["state"]) {
        return Howler["ctx"]["resume"]();
      }
      if (!this["stayMuteFlag"]) {
        if ("object" === typeof url) {
          url["play"]();
        } else {
          if ("string" === typeof url) {
            this["soundList"][url]["play"]();
          }
        }
      }
    },
    "stop" : function(e) {
      this["parent"](e);
      if ("object" === typeof e) {
        e["stop"]();
      } else {
        if ("string" === typeof e) {
          this["soundList"][e]["stop"]();
        }
      }
    },
    "volume" : function(value) {
      var id;
      for (id in this["soundList"]) {
        if (0 > value) {
          this["soundList"][id]["volume"](0);
          break;
        }
        if (isNaN(value)) {
          this["soundList"][id]["volume"](1);
        } else {
          if (1 < value) {
            this["soundList"][id]["volume"](1);
          } else {
            this["soundList"][id]["volume"](value);
          }
        }
      }
    },
    "getVolume" : function() {
      var id;
      for (id in this["soundList"]) {
        return this["soundList"][id]["volume"]();
      }
    },
    "mute" : function(b_mute) {
      this["parent"](b_mute);
      Howler["mute"](true);
    },
    "unmute" : function(toggle) {
      this["parent"](toggle);
      Howler["mute"](false);
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.audio.howler-music-player")["requires"]("plugins.audio.sound-player")["defines"](function() {
  HowlerMusicPlayer = SoundPlayer["extend"]({
    "tagName" : "HowlerMusicPlayer",
    "bgmPlaying" : false,
    "soundList" : {},
    "init" : function(files, ngModel) {
      this["parent"](files, ngModel);
      var i;
      for (i in files) {
        var newPath = files[i]["path"];
        newPath = new Howl({
          "src" : [newPath + "." + ig["Sound"]["FORMAT"]["OGG"]["ext"], newPath + "." + ig["Sound"]["FORMAT"]["MP3"]["ext"]],
          "loop" : true,
          "autoplay" : false,
          "onend" : function() {
          }["bind"](this)
        });
        this["soundList"][i] = newPath;
      }
    },
    "play" : function(url) {
      if (!this["stayMuteFlag"] && !this["bgmPlaying"]) {
        if ("object" === typeof url) {
          /** @type {boolean} */
          this["bgmPlaying"] = true;
          url["play"]();
        } else {
          if ("string" === typeof url) {
            /** @type {boolean} */
            this["bgmPlaying"] = true;
            this["soundList"][url]["play"]();
          } else {
            var indexLookupKey;
            for (indexLookupKey in this["soundList"]) {
              this["soundList"][indexLookupKey]["play"]();
              /** @type {boolean} */
              this["bgmPlaying"] = true;
              break;
            }
          }
        }
      }
    },
    "stop" : function(gotoEnd) {
      this["parent"](gotoEnd);
      if (this["bgmPlaying"]) {
        var i;
        for (i in this["soundList"]) {
          this["soundList"][i]["stop"]();
        }
        /** @type {boolean} */
        this["bgmPlaying"] = false;
      }
    },
    "volume" : function(name) {
      console["log"]("howler", name);
      var id;
      for (id in this["soundList"]) {
        if (0 > name) {
          this["soundList"][id]["volume"](0);
          break;
        }
        if (isNaN(name)) {
          this["soundList"][id]["volume"](1);
        } else {
          if (1 < name) {
            this["soundList"][id]["volume"](1);
          } else {
            this["soundList"][id]["volume"](name);
          }
        }
      }
    },
    "getVolume" : function() {
      var id;
      for (id in this["soundList"]) {
        return this["soundList"][id]["volume"]();
      }
    },
    "mute" : function(b_mute) {
      this["parent"](b_mute);
      Howler["mute"](true);
    },
    "unmute" : function(toggle) {
      this["parent"](toggle);
      Howler["mute"](false);
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.audio.jukebox-player")["requires"]("plugins.audio.sound-player")["defines"](function() {
  JukeboxPlayer = SoundPlayer["extend"]({
    "tagName" : "JukeboxPlayer",
    "bgmPlaying" : false,
    "soundList" : {},
    "jukeboxPlayer" : null,
    "pausePosition" : 0,
    "premuteVolume" : 0,
    "minVolume" : 0.001,
    "init" : function(files, ngModel) {
      this["parent"](files, ngModel);
      var i;
      for (i in files) {
        /** @type {string} */
        this["soundList"][i] = i;
        var recNode = files[i]["path"];
        this["jukeboxPlayer"] = new jukebox["Player"]({
          "resources" : [recNode + "." + ig["Sound"]["FORMAT"]["OGG"]["ext"], recNode + "." + ig["Sound"]["FORMAT"]["MP3"]["ext"]],
          "autoplay" : false,
          "spritemap" : {
            "music" : {
              "start" : files[i]["startMp3"],
              "end" : files[i]["endMp3"],
              "loop" : true
            }
          }
        });
      }
    },
    "play" : function() {
      if (!this["stayMuteFlag"]) {
        /** @type {boolean} */
        this["bgmPlaying"] = true;
        if (this["pausePosition"]) {
          console["log"]("resume");
          this["jukeboxPlayer"]["resume"](this["pausePosition"]);
        } else {
          console["log"]("play");
          this["jukeboxPlayer"]["play"](this["jukeboxPlayer"]["settings"]["spritemap"]["music"]["start"], true);
        }
        this["premuteVolume"] = this["getVolume"]();
      }
    },
    "stop" : function() {
      /** @type {boolean} */
      this["bgmPlaying"] = false;
      this["pausePosition"] = this["jukeboxPlayer"]["pause"]();
    },
    "volume" : function(name) {
      console["log"]("jukebox:", name);
      if (0 >= name) {
        this["jukeboxPlayer"]["setVolume"](this["minVolume"]);
      } else {
        if (isNaN(name)) {
          this["jukeboxPlayer"]["setVolume"](1);
        } else {
          if (1 < name) {
            this["jukeboxPlayer"]["setVolume"](1);
          } else {
            this["jukeboxPlayer"]["setVolume"](name);
          }
        }
      }
    },
    "getVolume" : function() {
      return this["jukeboxPlayer"]["getVolume"]();
    },
    "mute" : function(b_mute) {
      this["parent"](b_mute);
      if (this["bgmPlaying"]) {
        console["log"]("jukebox", this["premuteVolume"]);
        if (!this["stayMuteFlag"]) {
          this["premuteVolume"] = this["getVolume"]();
        }
        this["jukeboxPlayer"]["pause"]();
        this["jukeboxPlayer"]["setVolume"](this["minVolume"]);
      }
    },
    "unmute" : function(toggle) {
      this["parent"](toggle);
      if (!this["stayMuteFlag"]) {
        console["log"]("jukebox", this["premuteVolume"]);
        this["jukeboxPlayer"]["setVolume"](this["premuteVolume"]);
        this["jukeboxPlayer"]["resume"]();
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.audio.webaudio-music-player")["requires"]("plugins.audio.sound-player")["defines"](function() {
  WebaudioMusicPlayer = SoundPlayer["extend"]({
    "tagName" : "WebaudioMusicPlayer",
    "bgmPlaying" : false,
    "isSupported" : false,
    "muteFlag" : false,
    "pausedTime" : 0,
    "webaudio" : null,
    "useHTML5Audio" : false,
    "audio" : null,
    "inactiveAudio" : null,
    "codecs" : null,
    "reinitOnPlay" : false,
    "inputList" : null,
    "_volume" : 1,
    "soundList" : {},
    "init" : function(flightPhase) {
      this["webaudio"] = {
        "compatibility" : {},
        "gainNode" : null,
        "buffer" : null,
        "source_loop" : {},
        "source_once" : {}
      };
      try {
        if (Howler && Howler["ctx"]) {
          this["webaudio"]["context"] = Howler["ctx"];
        } else {
          if (ig && ig["webaudio_ctx"]) {
            this["webaudio"]["context"] = ig["webaudio_ctx"];
          } else {
            this["AudioContext"] = window["AudioContext"] || window["webkitAudioContext"];
            this["webaudio"]["context"] = new this["AudioContext"];
            ig["webaudio_ctx"] = this["webaudio"]["context"];
          }
        }
        /** @type {boolean} */
        this["isSupported"] = true;
      } catch (_0x3abddd) {
        console["log"]("Web Audio API not supported in this browser.");
        /** @type {null} */
        this["webaudio"] = null;
        /** @type {boolean} */
        this["useHTML5Audio"] = true;
      }
      if (this["useHTML5Audio"]) {
        if ("undefined" !== typeof Audio) {
          try {
            new Audio;
          } catch (_0x4945fd) {
            /** @type {boolean} */
            this["useHTML5Audio"] = false;
          }
        } else {
          /** @type {boolean} */
          this["useHTML5Audio"] = false;
        }
      }
      if (this["useHTML5Audio"]) {
        /** @type {!Audio} */
        this["audio"] = new Audio;
        /** @type {boolean} */
        this["isSupported"] = true;
        this["initHTML5Audio"](flightPhase);
      }
      if (!this["isSupported"]) {
        return null;
      }
      if (this["webaudio"]) {
        this["inputList"] = flightPhase;
        this["initWebAudio"](flightPhase);
      }
    },
    "initWebAudio" : function(otherClients) {
      if (ig["ua"]["iOS"]) {
        this["initIOSWebAudioUnlock"]();
      }
      this["webaudio"]["gainNode"] = "undefined" === typeof this["webaudio"]["context"]["createGain"] ? this["webaudio"]["context"]["createGainNode"]() : this["webaudio"]["context"]["createGain"]();
      this["webaudio"]["gainNode"]["connect"](this["webaudio"]["context"]["destination"]);
      this["webaudio"]["gainNode"]["gain"]["value"] = this["_volume"];
      /** @type {null} */
      this["webaudio"]["buffer"] = null;
      /** @type {string} */
      var x = "start";
      /** @type {string} */
      var s = "stop";
      var messages = this["webaudio"]["context"]["createBufferSource"]();
      if ("function" !== typeof messages["start"]) {
        /** @type {string} */
        x = "noteOn";
      }
      /** @type {string} */
      this["webaudio"]["compatibility"]["start"] = x;
      if ("function" !== typeof messages["stop"]) {
        /** @type {string} */
        s = "noteOff";
      }
      /** @type {string} */
      this["webaudio"]["compatibility"]["stop"] = s;
      var currentEasyrtcid;
      for (currentEasyrtcid in otherClients) {
        /** @type {string} */
        this["soundList"][currentEasyrtcid] = currentEasyrtcid;
        s = otherClients[currentEasyrtcid]["path"];
        x = s + "." + ig["Sound"]["FORMAT"]["MP3"]["ext"];
        var url = s + "." + ig["Sound"]["FORMAT"]["OGG"]["ext"];
        if (ig["ua"]["mobile"]) {
          if (ig["ua"]["iOS"]) {
            url = x;
          }
        } else {
          s = navigator["userAgent"]["toLowerCase"]();
          if (-1 != s["indexOf"]("safari") && -1 >= s["indexOf"]("chrome")) {
            url = x;
          }
          if (s["indexOf"]("win64")) {
            url = x;
          }
        }
        /** @type {!XMLHttpRequest} */
        var xhr = new XMLHttpRequest;
        xhr["open"]("GET", url, true);
        /** @type {string} */
        xhr["responseType"] = "arraybuffer";
        xhr["onload"] = function() {
          this["webaudio"]["context"]["decodeAudioData"](xhr["response"], function(items) {
            this["webaudio"]["buffer"] = items;
            this["webaudio"]["source_loop"] = {};
            if (this["bgmPlaying"]) {
              this["play"](null, true);
            } else {
              this["stop"]();
            }
          }["bind"](this), function() {
            console["log"]('Error decoding audio "' + url + '".');
          });
        }["bind"](this);
        xhr["send"]();
        if (4 == xhr["readyState"] && "undefined" !== typeof Audio) {
          /** @type {boolean} */
          this["useHTML5Audio"] = true;
          try {
            new Audio;
          } catch (_0x2a12ff) {
            /** @type {boolean} */
            this["useHTML5Audio"] = false;
          }
          if (this["useHTML5Audio"]) {
            console["log"]("Using HTML5 Audio");
            /** @type {null} */
            this["webaudio"] = null;
            /** @type {!Audio} */
            this["audio"] = new Audio;
            /** @type {boolean} */
            this["isSupported"] = true;
            this["initHTML5Audio"](otherClients);
          }
        }
        break;
      }
    },
    "initIOSWebAudioUnlock" : function() {
      if (this["webaudio"]) {
        webaudio = this["webaudio"];
        /**
         * @return {undefined}
         */
        var init = function() {
          var context = webaudio["context"];
          var mergeLaunches = context["createBuffer"](1, 1, 22050);
          var options = context["createBufferSource"]();
          options["buffer"] = mergeLaunches;
          options["connect"](context["destination"]);
          if ("undefined" === typeof options["start"]) {
            options["noteOn"](0);
          } else {
            options["start"](0);
          }
          setTimeout(function() {
            if (options["playbackState"] === options["PLAYING_STATE"] || options["playbackState"] === options["FINISHED_STATE"]) {
              window["removeEventListener"]("touchend", init, false);
            }
          }["bind"](this), 0);
        };
        window["addEventListener"]("touchend", init, false);
      }
    },
    "initHTML5Audio" : function(types) {
      if (this["useHTML5Audio"] && this["audio"]) {
        var TTYPlayerPrototype = this["audio"];
        this["codecs"] = {};
        this["codecs"] = {
          "mp3" : !!TTYPlayerPrototype["canPlayType"]("audio/mpeg;")["replace"](/^no$/, ""),
          "opus" : !!TTYPlayerPrototype["canPlayType"]('audio/ogg; codecs="opus"')["replace"](/^no$/, ""),
          "ogg" : !!TTYPlayerPrototype["canPlayType"]('audio/ogg; codecs="vorbis"')["replace"](/^no$/, ""),
          "wav" : !!TTYPlayerPrototype["canPlayType"]('audio/wav; codecs="1"')["replace"](/^no$/, ""),
          "aac" : !!TTYPlayerPrototype["canPlayType"]("audio/aac;")["replace"](/^no$/, ""),
          "m4a" : !!(TTYPlayerPrototype["canPlayType"]("audio/x-m4a;") || TTYPlayerPrototype["canPlayType"]("audio/m4a;") || TTYPlayerPrototype["canPlayType"]("audio/aac;"))["replace"](/^no$/, ""),
          "mp4" : !!(TTYPlayerPrototype["canPlayType"]("audio/x-mp4;") || TTYPlayerPrototype["canPlayType"]("audio/mp4;") || TTYPlayerPrototype["canPlayType"]("audio/aac;"))["replace"](/^no$/, ""),
          "weba" : !!TTYPlayerPrototype["canPlayType"]('audio/webm; codecs="vorbis"')["replace"](/^no$/, "")
        };
        this["is"] = {
          "ff" : Boolean(null != window["mozInnerScreenX"] && /firefox/["test"](navigator["userAgent"]["toLowerCase"]())),
          "ie" : Boolean(document["all"] && !window["opera"]),
          "opera" : Boolean(window["opera"]),
          "chrome" : Boolean(window["chrome"]),
          "safari" : Boolean(!window["chrome"] && /safari/["test"](navigator["userAgent"]["toLowerCase"]()) && window["getComputedStyle"] && !window["globalStorage"] && !window["opera"])
        };
        /** @type {number} */
        this["playDelay"] = -60;
        /** @type {number} */
        this["stopDelay"] = 30;
        if (this["is"]["chrome"]) {
          /** @type {number} */
          this["playDelay"] = -25;
        }
        if (this["is"]["chrome"]) {
          /** @type {number} */
          this["stopDelay"] = 25;
        }
        if (this["is"]["ff"]) {
          /** @type {number} */
          this["playDelay"] = -25;
        }
        if (this["is"]["ff"]) {
          /** @type {number} */
          this["stopDelay"] = 85;
        }
        if (this["is"]["opera"]) {
          /** @type {number} */
          this["playDelay"] = 5;
        }
        if (this["is"]["opera"]) {
          /** @type {number} */
          this["stopDelay"] = 0;
        }
        var type;
        for (type in types) {
          /** @type {string} */
          this["soundList"][type] = type;
          var hit = types[type]["path"];
          TTYPlayerPrototype = hit + "." + ig["Sound"]["FORMAT"]["OGG"]["ext"];
          hit = hit + "." + ig["Sound"]["FORMAT"]["MP3"]["ext"];
          /** @type {null} */
          var dest = null;
          if (this["codecs"][ig["Sound"]["FORMAT"]["OGG"]["ext"]["toLowerCase"]()]) {
            dest = TTYPlayerPrototype;
          } else {
            if (this["codecs"][ig["Sound"]["FORMAT"]["MP3"]["ext"]["toLowerCase"]()]) {
              dest = hit;
            }
          }
          if (dest) {
            if (ig["ua"]["mobile"]) {
              if (ig["ua"]["iOS"]) {
                dest = hit;
              }
            } else {
              types = navigator["userAgent"]["toLowerCase"]();
              if (-1 != types["indexOf"]("safari") && -1 >= types["indexOf"]("chrome")) {
                dest = hit;
              }
            }
            this["audio"]["addEventListener"]("error", function() {
              if (this["audio"]["error"] && 4 === this["audio"]["error"]["code"]) {
                /** @type {boolean} */
                this["isSupported"] = false;
              }
            }, false);
            this["audio"]["src"] = dest;
            /** @type {number} */
            this["audio"]["_pos"] = 0;
            /** @type {string} */
            this["audio"]["preload"] = "auto";
            this["audio"]["volume"] = this["_volume"];
            /** @type {!Audio} */
            this["inactiveAudio"] = new Audio;
            this["inactiveAudio"]["src"] = dest;
            /** @type {number} */
            this["inactiveAudio"]["_pos"] = 0;
            /** @type {string} */
            this["inactiveAudio"]["preload"] = "auto";
            this["inactiveAudio"]["volume"] = this["_volume"];
            this["inactiveAudio"]["load"]();
            var onKeyDown = function() {
              this["_duration"] = this["audio"]["duration"];
              if (!this["_loaded"]) {
                /** @type {boolean} */
                this["_loaded"] = true;
              }
              if (this["bgmPlaying"]) {
                this["play"](null, true);
              } else {
                this["stop"]();
              }
              this["audio"]["removeEventListener"]("canplaythrough", onKeyDown, false);
            }["bind"](this);
            this["audio"]["addEventListener"]("canplaythrough", onKeyDown, false);
            this["audio"]["load"]();
            break;
          }
        }
      }
    },
    "play" : function(value, opt_pass) {
      if (this["isSupported"]) {
        if (this["bgmPlaying"] = true, this["webaudio"]) {
          if (!opt_pass && this["reinitOnPlay"] && this["webaudio"]["source_loop"]["buffer"] == this["webaudio"]["buffer"]) {
            if (this["webaudio"]["source_loop"]["_playing"] && (this["webaudio"]["source_loop"][this["webaudio"]["compatibility"]["stop"]](0), this["webaudio"]["source_loop"]["_playing"] = false, this["pausedTime"] += this["webaudio"]["context"]["currentTime"] - this["webaudio"]["source_loop"]["_startTime"], this["pausedTime"] %= this["webaudio"]["source_loop"]["buffer"]["duration"], this["webaudio"]["source_loop"]["_startTime"] = 0, "noteOn" === this["webaudio"]["compatibility"]["start"])) {
              this["webaudio"]["source_once"][this["webaudio"]["compatibility"]["stop"]](0);
            }
            try {
              this["webaudio"]["context"]["close"]();
              this["webaudio"]["context"] = new this["AudioContext"];
              this["webaudio"]["gainNode"] = this["webaudio"]["context"]["createGain"]();
              this["webaudio"]["gainNode"]["connect"](this["webaudio"]["context"]["destination"]);
              this["webaudio"]["gainNode"]["gain"]["value"] = this["_volume"];
              /** @type {string} */
              var result = "start";
              /** @type {string} */
              var wordStart = "stop";
              var messages = this["webaudio"]["context"]["createBufferSource"]();
              if ("function" !== typeof messages["start"]) {
                /** @type {string} */
                result = "noteOn";
              }
              /** @type {string} */
              this["webaudio"]["compatibility"]["start"] = result;
              if ("function" !== typeof messages["stop"]) {
                /** @type {string} */
                wordStart = "noteOff";
              }
              /** @type {string} */
              this["webaudio"]["compatibility"]["stop"] = wordStart;
              this["webaudio"]["source_loop"] = {};
              this["play"](null, true);
            } catch (_0x4adbe1) {
            }
          }
          if (this["webaudio"]["buffer"]) {
            if (!this["muteFlag"] && (this["bgmPlaying"] = true, !this["webaudio"]["source_loop"]["_playing"])) {
              this["webaudio"]["source_loop"] = this["webaudio"]["context"]["createBufferSource"]();
              this["webaudio"]["source_loop"]["buffer"] = this["webaudio"]["buffer"];
              /** @type {boolean} */
              this["webaudio"]["source_loop"]["loop"] = true;
              this["webaudio"]["source_loop"]["connect"](this["webaudio"]["gainNode"]);
              if (null == value || isNaN(value)) {
                /** @type {number} */
                value = 0;
                if (this["pausedTime"]) {
                  value = this["pausedTime"];
                }
              }
              this["webaudio"]["source_loop"]["_startTime"] = this["webaudio"]["context"]["currentTime"];
              if ("noteOn" === this["webaudio"]["compatibility"]["start"]) {
                this["webaudio"]["source_once"] = this["webaudio"]["context"]["createBufferSource"]();
                this["webaudio"]["source_once"]["buffer"] = this["webaudio"]["buffer"];
                this["webaudio"]["source_once"]["connect"](this["webaudio"]["gainNode"]);
                this["webaudio"]["source_once"]["noteGrainOn"](0, value, this["webaudio"]["buffer"]["duration"] - value);
                this["webaudio"]["source_loop"][this["webaudio"]["compatibility"]["start"]](this["webaudio"]["context"]["currentTime"] + (this["webaudio"]["buffer"]["duration"] - value));
              } else {
                this["webaudio"]["source_loop"][this["webaudio"]["compatibility"]["start"]](0, value);
              }
              /** @type {boolean} */
              this["webaudio"]["source_loop"]["_playing"] = true;
            }
          } else {
            /** @type {boolean} */
            this["bgmPlaying"] = true;
          }
        } else {
          if (this["audio"]) {
            var self = this["audio"];
            if (!this["muteFlag"]) {
              if (this["bgmPlaying"] = true, isNaN(value) && (value = 0, this["pausedTime"] && (value = this["pausedTime"])), result = this["_duration"] - value, this["_onEndTimer"] && (clearTimeout(this["_onEndTimer"]), this["_onEndTimer"] = null), this["_onEndTimer"] = setTimeout(function() {
                /** @type {number} */
                this["audio"]["currentTime"] = 0;
                this["audio"]["pause"]();
                /** @type {number} */
                this["pausedTime"] = 0;
                if (this["inactiveAudio"]) {
                  var filename = this["audio"];
                  this["audio"] = this["inactiveAudio"];
                  this["inactiveAudio"] = filename;
                }
                this["play"]();
              }["bind"](this), 1E3 * result + this["playDelay"]), 4 === self["readyState"] || !self["readyState"] && navigator["isCocoonJS"]) {
                /** @type {number} */
                self["readyState"] = 4;
                /** @type {number} */
                self["currentTime"] = value;
                self["muted"] = this["muteFlag"] || self["muted"];
                self["volume"] = this["_volume"];
                setTimeout(function() {
                  self["play"]();
                }, 0);
              } else {
                clearTimeout(this["_onEndTimer"]);
                /** @type {null} */
                this["_onEndTimer"] = null;
                var handler = function() {
                  if (typeof("function" == this["play"])) {
                    this["play"]();
                    self["removeEventListener"]("canplaythrough", handler, false);
                  }
                }["bind"](this);
                self["addEventListener"]("canplaythrough", handler, false);
              }
            }
          }
        }
      }
    },
    "stop" : function() {
      /** @type {boolean} */
      this["bgmPlaying"] = false;
      if (this["isSupported"]) {
        if (this["webaudio"]) {
          if (this["webaudio"]["source_loop"]["_playing"] && (this["webaudio"]["source_loop"][this["webaudio"]["compatibility"]["stop"]](0), this["webaudio"]["source_loop"]["_playing"] = false, this["pausedTime"] += this["webaudio"]["context"]["currentTime"] - this["webaudio"]["source_loop"]["_startTime"], this["pausedTime"] %= this["webaudio"]["source_loop"]["buffer"]["duration"], this["webaudio"]["source_loop"]["_startTime"] = 0, "noteOn" === this["webaudio"]["compatibility"]["start"])) {
            this["webaudio"]["source_once"][this["webaudio"]["compatibility"]["stop"]](0);
          }
        } else {
          if (this["audio"]) {
            var ttyPlayer = this["audio"];
            if (4 == ttyPlayer["readyState"]) {
              this["pausedTime"] = ttyPlayer["currentTime"];
              /** @type {number} */
              ttyPlayer["currentTime"] = 0;
              ttyPlayer["pause"]();
              clearTimeout(this["_onEndTimer"]);
              /** @type {null} */
              this["_onEndTimer"] = null;
            }
          }
        }
      }
    },
    "volume" : function(val) {
      if (isNaN(val) || null == val) {
        return this["getVolume"]();
      }
      if (this["isSupported"]) {
        /** @type {string} */
        this["_volume"] = val;
        if (0 > this["_volume"]) {
          /** @type {number} */
          this["_volume"] = 0;
        } else {
          if (1 < this["_volume"]) {
            /** @type {number} */
            this["_volume"] = 1;
          }
        }
        if (this["webaudio"]) {
          if (this["webaudio"]["gainNode"]) {
            this["webaudio"]["gainNode"]["gain"]["value"] = this["_volume"];
          }
        } else {
          if (this["audio"]) {
            this["audio"]["volume"] = this["_volume"];
            if (this["inactiveAudio"]) {
              this["inactiveAudio"]["volume"] = this["_volume"];
            }
          }
        }
      }
    },
    "getVolume" : function() {
      return !this["isSupported"] ? 0 : this["_volume"];
    },
    "mute" : function(b_mute) {
      this["parent"](b_mute);
      if (false == this["muteFlag"]) {
        /** @type {boolean} */
        this["muteFlag"] = true;
        if (this["bgmPlaying"]) {
          this["stop"]();
          /** @type {boolean} */
          this["bgmPlaying"] = true;
        }
      }
    },
    "unmute" : function(toggle) {
      this["parent"](toggle);
      if (!this["stayMuteFlag"] && true == this["muteFlag"]) {
        /** @type {boolean} */
        this["muteFlag"] = false;
        if (this["bgmPlaying"]) {
          this["play"]();
        }
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.audio.sound-info")["defines"](function() {
  SoundInfo = ig["Class"]["extend"]({
    "FORMATS" : {
      "OGG" : ".ogg",
      "MP3" : ".mp3"
    },
    "sfx" : {
      "kittyopeningSound" : {
        "path" : "media/audio/opening/kittyopening"
      },
      "openingSound" : {
        "path" : "media/audio/opening/opening"
      },
      "congratsSound" : {
        "path" : "media/audio/congrats"
      },
      "shakeSound" : {
        "path" : "media/audio/shake"
      },
      "tapSound" : {
        "path" : "media/audio/tap"
      }
    },
    "bgm" : {
      "background" : {
        "path" : "media/audio/bgm",
        "startOgg" : 0,
        "endOgg" : 21.463,
        "startMp3" : 0,
        "endMp3" : 21.463
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.audio.sound-handler")["requires"]("plugins.audio.impact-music-player", "plugins.audio.impact-sound-player", "plugins.audio.howler-player", "plugins.audio.howler-music-player", "plugins.audio.jukebox-player", "plugins.audio.webaudio-music-player", "plugins.audio.sound-info")["defines"](function() {
  ig["SoundHandler"] = ig["Class"]["extend"]({
    "bgmPlayer" : null,
    "sfxPlayer" : null,
    "focusBlurMute" : false,
    "soundInfo" : new SoundInfo,
    "init" : function() {
      console["log"]("Initiating sound handler");
      if (ig["ua"]["mobile"]) {
        this["bgmPlayer"] = new WebaudioMusicPlayer(this["soundInfo"]["bgm"], {
          "loop" : true
        });
        if (!this["bgmPlayer"]["isSupported"]) {
          this["bgmPlayer"] = new JukeboxPlayer(this["soundInfo"]["bgm"], {
            "loop" : true
          });
        }
      } else {
        this["bgmPlayer"] = new WebaudioMusicPlayer(this["soundInfo"]["bgm"], {
          "loop" : true
        });
        if (!this["bgmPlayer"]["isSupported"]) {
          this["bgmPlayer"] = new ImpactMusicPlayer(this["soundInfo"]["bgm"], {
            "loop" : true
          });
        }
      }
      this["sfxPlayer"] = new HowlerPlayer(this["soundInfo"]["sfx"]);
    },
    "unlockWebAudio" : function() {
      if (Howler) {
        if (Howler["ctx"] && "running" !== Howler["ctx"]["state"]) {
          Howler["ctx"]["resume"]();
        }
        if (!Howler["_audioUnlocked"]) {
          if ("function" === typeof Howler["_unlockAudio"]) {
            Howler["_unlockAudio"]();
          }
        }
      }
      if (ig && ig["webaudio_ctx"] && ig["webaudio_ctx"]["state"] && "running" !== ig["webaudio_ctx"]["state"]) {
        ig["webaudio_ctx"]["resume"]();
      }
      if (this["bgmPlayer"]["webaudio"] && this["bgmPlayer"]["webaudio"]["context"] && this["bgmPlayer"]["webaudio"]["context"]["state"] && "running" !== this["bgmPlayer"]["webaudio"]["context"]["state"]) {
        this["bgmPlayer"]["webaudio"]["context"]["resume"]();
      }
    },
    "checkBGM" : function() {
      return this["bgmPlayer"]["stayMuteFlag"];
    },
    "checkSFX" : function() {
      return this["sfxPlayer"]["stayMuteFlag"];
    },
    "muteSFX" : function(mmCoreSplitViewBlock) {
      if (this["sfxPlayer"]) {
        this["sfxPlayer"]["mute"](mmCoreSplitViewBlock);
      }
    },
    "muteBGM" : function(mmCoreSplitViewBlock) {
      if (this["bgmPlayer"]) {
        this["bgmPlayer"]["mute"](mmCoreSplitViewBlock);
      }
    },
    "unmuteSFX" : function(mmCoreSplitViewBlock) {
      if (this["sfxPlayer"]) {
        this["sfxPlayer"]["unmute"](mmCoreSplitViewBlock);
      }
    },
    "unmuteBGM" : function(mmCoreSplitViewBlock) {
      if (this["bgmPlayer"]) {
        this["bgmPlayer"]["unmute"](mmCoreSplitViewBlock);
      }
    },
    "muteAll" : function(val) {
      this["muteSFX"](val);
      this["muteBGM"](val);
    },
    "unmuteAll" : function(mmCoreSplitViewBlock) {
      this["unlockWebAudio"]();
      this["unmuteSFX"](mmCoreSplitViewBlock);
      this["unmuteBGM"](mmCoreSplitViewBlock);
    },
    "forceMuteAll" : function() {
      if (!this["focusBlurMute"]) {
        this["muteAll"](false);
      }
      /** @type {boolean} */
      this["focusBlurMute"] = true;
    },
    "forceUnMuteAll" : function() {
      if (this["focusBlurMute"]) {
        this["unmuteAll"](false);
        /** @type {boolean} */
        this["focusBlurMute"] = false;
      }
    },
    "saveVolume" : function() {
      if (this["sfxPlayer"]) {
        ig["game"]["io"]["storageSet"]("soundVolume", this["sfxPlayer"]["getVolume"]());
      }
      if (this["bgmPlayer"]) {
        ig["game"]["io"]["storageSet"]("musicVolume", this["bgmPlayer"]["getVolume"]());
      }
    },
    "forceLoopBGM" : function() {
      var value;
      if (!this["focusBlurMute"] && this["bgmPlayer"]["bgmPlaying"] && this["bgmPlayer"]) {
        var types = this["bgmPlayer"]["jukeboxPlayer"];
        if (types) {
          if (null != window["mozInnerScreenX"]) {
            /firefox/["test"](navigator["userAgent"]["toLowerCase"]());
          }
          /** @type {boolean} */
          value = Boolean(window["chrome"]);
          if (!window["chrome"]) {
            /safari/["test"](navigator["userAgent"]["toLowerCase"]());
          }
          /** @type {number} */
          var increment = 0.1;
          if (ig["ua"]["mobile"]) {
            /** @type {number} */
            increment = 0.115;
            if (ig["ua"]["android"]) {
              /** @type {number} */
              increment = 0.45;
              if (value) {
                /** @type {number} */
                increment = 0.3;
              }
            }
          }
          if (types["settings"]["spritemap"]["music"]) {
            /** @type {number} */
            value = types["settings"]["spritemap"]["music"]["end"] - increment;
            if (types["getCurrentTime"]() >= value) {
              value = types["settings"]["spritemap"]["music"]["start"];
              if (ig["ua"]["android"]) {
                if (!this["forcelooped"]) {
                  types["play"](value, true);
                  /** @type {boolean} */
                  this["forcelooped"] = true;
                  setTimeout(function() {
                    /** @type {boolean} */
                    ig["soundHandler"]["forcelooped"] = false;
                  }, increment);
                }
              } else {
                types["setCurrentTime"](value);
              }
            }
          }
        } else {
          if ("ImpactMusicPlayer" == this["bgmPlayer"]["tagName"]) {
            if (null != window["mozInnerScreenX"]) {
              /firefox/["test"](navigator["userAgent"]["toLowerCase"]());
            }
            /** @type {boolean} */
            value = Boolean(window["chrome"]);
            if (!window["chrome"]) {
              /safari/["test"](navigator["userAgent"]["toLowerCase"]());
            }
            /** @type {number} */
            increment = 0.1;
            if (ig["ua"]["mobile"]) {
              /** @type {number} */
              increment = 0.115;
              if (ig["ua"]["android"]) {
                /** @type {number} */
                increment = 0.45;
                if (value) {
                  /** @type {number} */
                  increment = 0.3;
                }
              }
            }
            /** @type {number} */
            types = 0;
            if ("mp3" == ig["soundManager"]["format"]["ext"]) {
              /** @type {number} */
              types = 0.05;
            }
            if (ig["music"]["currentTrack"]) {
              /** @type {number} */
              value = ig["music"]["currentTrack"]["duration"] - increment;
              if (ig["music"]["currentTrack"]["currentTime"] >= value) {
                if (ig["ua"]["android"]) {
                  if (!this["forcelooped"]) {
                    ig["music"]["currentTrack"]["pause"]();
                    /** @type {number} */
                    ig["music"]["currentTrack"]["currentTime"] = types;
                    ig["music"]["currentTrack"]["play"]();
                    /** @type {boolean} */
                    this["forcelooped"] = true;
                    setTimeout(function() {
                      /** @type {boolean} */
                      ig["soundHandler"]["forcelooped"] = false;
                    }, increment);
                  }
                } else {
                  /** @type {number} */
                  ig["music"]["currentTrack"]["currentTime"] = types;
                }
              }
            }
          }
        }
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.handlers.visibility-handler")["requires"]("plugins.audio.sound-handler")["defines"](function() {
  ig["VisibilityHandler"] = ig["Class"]["extend"]({
    "version" : "1.0.2",
    "config" : {
      "allowResumeWithoutFocus" : {
        "desktop" : true,
        "mobile" : {
          "kaios" : false,
          "default" : true
        }
      },
      "handlerDelay" : {
        "desktop" : 0,
        "mobile" : {
          "kaios" : 0,
          "default" : 0
        }
      },
      "autoFocusOnResume" : {
        "desktop" : true,
        "mobile" : {
          "kaios" : false,
          "default" : true
        }
      },
      "autoFocusAfterResume" : {
        "desktop" : true,
        "mobile" : {
          "kaios" : false,
          "default" : true
        }
      }
    },
    "browserPrefixes" : ["o", "ms", "moz", "webkit"],
    "browserPrefix" : null,
    "hiddenPropertyName" : null,
    "visibilityEventName" : null,
    "visibilityStateName" : null,
    "isShowingOverlay" : false,
    "isFocused" : false,
    "isPaused" : false,
    "init" : function() {
      this["initVisibilityHandler"]();
      this["initFocusHandler"]();
      this["initPageTransitionHandler"]();
      ig["visibilityHandler"] = this;
    },
    "pauseHandler" : function() {
      if (ig["game"]) {
        ig["game"]["pauseGame"]();
      }
      if (ig["soundHandler"]) {
        ig["soundHandler"]["forceMuteAll"]();
      }
    },
    "resumeHandler" : function() {
      if (ig["game"]) {
        ig["game"]["resumeGame"]();
      }
      if (ig["soundHandler"]) {
        ig["soundHandler"]["forceUnMuteAll"]();
      }
    },
    "initVisibilityHandler" : function() {
      this["browserPrefix"] = this["getBrowserPrefix"]();
      this["hiddenPropertyName"] = this["getHiddenPropertyName"](this["browserPrefix"]);
      this["visibilityEventName"] = this["getVisibilityEventName"](this["browserPrefix"]);
      this["visibilityStateName"] = this["getVisibilityStateName"](this["browserPrefix"]);
      if (this["visibilityEventName"]) {
        document["addEventListener"](this["visibilityEventName"], this["onChange"]["bind"](this), true);
      }
    },
    "initFocusHandler" : function() {
      window["addEventListener"]("blur", this["onChange"]["bind"](this), true);
      document["addEventListener"]("blur", this["onChange"]["bind"](this), true);
      document["addEventListener"]("focusout", this["onChange"]["bind"](this), true);
      window["addEventListener"]("focus", this["onChange"]["bind"](this), true);
      document["addEventListener"]("focus", this["onChange"]["bind"](this), true);
      document["addEventListener"]("focusin", this["onChange"]["bind"](this), true);
    },
    "initPageTransitionHandler" : function() {
      window["addEventListener"]("pagehide", this["onChange"]["bind"](this), true);
      window["addEventListener"]("pageshow", this["onChange"]["bind"](this), true);
    },
    "getBrowserPrefix" : function() {
      /** @type {null} */
      var autoReview = null;
      this["browserPrefixes"]["forEach"](function(data) {
        if (this["getHiddenPropertyName"](data) in document) {
          return autoReview = data;
        }
      }["bind"](this));
      return autoReview;
    },
    "getHiddenPropertyName" : function(prefix) {
      return prefix ? prefix + "Hidden" : "hidden";
    },
    "getVisibilityEventName" : function(extraClauses) {
      return (extraClauses ? extraClauses : "") + "visibilitychange";
    },
    "getVisibilityStateName" : function(prefix) {
      return prefix ? prefix + "VisibilityState" : "visibilityState";
    },
    "hasView" : function() {
      return !(document[this["hiddenPropertyName"]] || "visible" !== document[this["visibilityStateName"]]);
    },
    "hasFocus" : function() {
      return document["hasFocus"]() || this["isFocused"];
    },
    "onOverlayShow" : function() {
      this["systemPaused"]();
      /** @type {boolean} */
      this["isShowingOverlay"] = true;
    },
    "onOverlayHide" : function() {
      /** @type {boolean} */
      this["isShowingOverlay"] = false;
      this["systemResumed"]();
    },
    "systemPaused" : function() {
      if (this["isPaused"]) {
        return false;
      }
      this["pauseHandler"]();
      return this["isPaused"] = true;
    },
    "systemResumed" : function() {
      if (!this["isPaused"] || !this["hasView"]() || this["isShowingOverlay"]) {
        return false;
      }
      if (!this["hasFocus"]()) {
        if (ig["ua"]["mobile"]) {
          if (this["isKaiOS"]()) {
            if (!this["config"]["allowResumeWithoutFocus"]["mobile"]["kaios"]) {
              return false;
            }
          } else {
            if (!this["config"]["allowResumeWithoutFocus"]["mobile"]["default"]) {
              return false;
            }
          }
        } else {
          if (!this["config"]["allowResumeWithoutFocus"]["desktop"]) {
            return false;
          }
        }
      }
      this["focusOnResume"]();
      this["resumeHandler"]();
      this["focusAfterResume"]();
      /** @type {boolean} */
      this["isPaused"] = false;
      return true;
    },
    "isKaiOS" : function() {
      return /KAIOS/["test"](navigator["userAgent"]) || false;
    },
    "focusOnResume" : function() {
      return ig["ua"]["mobile"] ? this["isKaiOS"]() ? this["config"]["autoFocusOnResume"]["mobile"]["kaios"] : this["config"]["autoFocusOnResume"]["mobile"]["default"] : this["config"]["autoFocusOnResume"]["desktop"];
    },
    "focusAfterResume" : function() {
      return ig["ua"]["mobile"] ? this["isKaiOS"]() ? this["config"]["autoFocusAfterResume"]["mobile"]["kaios"] : this["config"]["autoFocusAfterResume"]["mobile"]["default"] : this["config"]["autoFocusAfterResume"]["desktop"];
    },
    "focus" : function(needsMoreTime) {
      if (window["focus"] && needsMoreTime) {
        window["focus"]();
      }
    },
    "handleDelayedEvent" : function(a_normalised_street) {
      if (!this["hasView"]() || "pause" === a_normalised_street["type"] || "pageHide" === a_normalised_street["type"] || "blur" === a_normalised_street["type"] || "focusout" === a_normalised_street["type"]) {
        if ("blur" === a_normalised_street["type"] || "focusout" === a_normalised_street["type"]) {
          /** @type {boolean} */
          this["isFocused"] = false;
        }
        return this["systemPaused"](a_normalised_street);
      }
      if ("focus" === a_normalised_street["type"] || "focusin" === a_normalised_street["type"]) {
        /** @type {boolean} */
        this["isFocused"] = true;
      }
      return this["systemResumed"](a_normalised_street);
    },
    "startDelayedEventHandler" : function(fn) {
      if (ig["ua"]["mobile"]) {
        if (this["isKaiOS"]()) {
          if (0 < this["config"]["handlerDelay"]["mobile"]["kaios"]) {
            window["setTimeout"](function(mmCoreSplitViewBlock) {
              this["handleDelayedEvent"](mmCoreSplitViewBlock);
            }["bind"](this, fn), this["config"]["handlerDelay"]["mobile"]);
          } else {
            this["handleDelayedEvent"](fn);
          }
        } else {
          if (0 < this["config"]["handlerDelay"]["mobile"]["default"]) {
            window["setTimeout"](function(mmCoreSplitViewBlock) {
              this["handleDelayedEvent"](mmCoreSplitViewBlock);
            }["bind"](this, fn), this["config"]["handlerDelay"]["mobile"]);
          } else {
            this["handleDelayedEvent"](fn);
          }
        }
      } else {
        if (0 < this["config"]["handlerDelay"]["desktop"]) {
          window["setTimeout"](function(mmCoreSplitViewBlock) {
            this["handleDelayedEvent"](mmCoreSplitViewBlock);
          }["bind"](this, fn), this["config"]["handlerDelay"]["desktop"]);
        } else {
          this["handleDelayedEvent"](fn);
        }
      }
    },
    "onChange" : function(blockNativeResponder) {
      this["startDelayedEventHandler"](blockNativeResponder);
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.io.storage")["defines"](function() {
  ig["Storage"] = ig["Class"]["extend"]({
    "staticInstantiate" : function() {
      return !ig["Storage"]["instance"] ? null : ig["Storage"]["instance"];
    },
    "init" : function() {
      ig["Storage"]["instance"] = this;
    },
    "isCapable" : function() {
      return "undefined" !== typeof window["localStorage"];
    },
    "isSet" : function(field) {
      return null !== this["get"](field);
    },
    "initUnset" : function(value, key) {
      if (null === this["get"](value)) {
        this["set"](value, key);
      }
    },
    "get" : function(namespace) {
      if (!this["isCapable"]()) {
        return null;
      }
      try {
        return JSON["parse"](localStorage["getItem"](namespace));
      } catch (_0x3a5dc6) {
        return window["localStorage"]["getItem"](namespace);
      }
    },
    "getInt" : function(name) {
      return ~~this["get"](name);
    },
    "getFloat" : function(name) {
      return parseFloat(this["get"](name));
    },
    "getBool" : function(name) {
      return !!this["get"](name);
    },
    "key" : function(key) {
      return this["isCapable"]() ? window["localStorage"]["key"](key) : null;
    },
    "set" : function(baseTimeOrLabel, message) {
      if (!this["isCapable"]()) {
        return null;
      }
      try {
        window["localStorage"]["setItem"](baseTimeOrLabel, JSON["stringify"](message));
      } catch (body) {
        console["log"](body);
      }
    },
    "setHighest" : function(key, value) {
      if (value > this["getFloat"](key)) {
        this["set"](key, value);
      }
    },
    "remove" : function(roomchat) {
      if (!this["isCapable"]()) {
        return null;
      }
      window["localStorage"]["removeItem"](roomchat);
    },
    "clear" : function() {
      if (!this["isCapable"]()) {
        return null;
      }
      window["localStorage"]["clear"]();
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.io.mouse")["defines"](function() {
  Mouse = ig["Class"]["extend"]({
    "pos" : new Vector2(0, 0),
    "bindings" : {
      "click" : [ig["KEY"]["MOUSE1"]]
    },
    "init" : function() {
      ig["input"]["initMouse"]();
      var p;
      for (p in this["bindings"]) {
        /** @type {string} */
        this[p] = p;
        /** @type {number} */
        var i = 0;
        for (; i < this["bindings"][p]["length"]; i++) {
          ig["input"]["bind"](this["bindings"][p][i], p);
        }
      }
    },
    "getPos" : function() {
      this["pos"]["set"](ig["input"]["mouse"]["x"] / ig["sizeHandler"]["sizeRatio"]["x"] / ig["sizeHandler"]["scaleRatioMultiplier"]["x"], ig["input"]["mouse"]["y"] / ig["sizeHandler"]["sizeRatio"]["y"] / ig["sizeHandler"]["scaleRatioMultiplier"]["y"]);
      return this["pos"];
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.io.keyboard")["defines"](function() {
  Keyboard = ig["Class"]["extend"]({
    "bindings" : {
      "jump" : [ig["KEY"]["W"], ig["KEY"]["UP_ARROW"]],
      "moveright" : [ig["KEY"]["D"], ig["KEY"]["RIGHT_ARROW"]],
      "moveleft" : [ig["KEY"]["A"], ig["KEY"]["LEFT_ARROW"]],
      "shoot" : [ig["KEY"]["S"], ig["KEY"]["DOWN_ARROW"], ig["KEY"]["SPACE"]]
    },
    "init" : function() {
      var p;
      for (p in this["bindings"]) {
        /** @type {string} */
        this[p] = p;
        /** @type {number} */
        var i = 0;
        for (; i < this["bindings"][p]["length"]; i++) {
          ig["input"]["bind"](this["bindings"][p][i], p);
        }
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.io.gamepad-input")["defines"](function() {
  ig["PADKEY"] = {
    "BUTTON_0" : 0,
    "PADBUTTON_1" : 1,
    "BUTTON_2" : 2,
    "BUTTON_3" : 3,
    "BUTTON_LEFT_BUMPER" : 4,
    "BUTTON_RIGHT_BUMPER" : 5,
    "BUTTON_LEFT_TRIGGER" : 6,
    "BUTTON_RIGHT_TRIGGER" : 7,
    "BUTTON_LEFT_JOYSTICK" : 10,
    "BUTTON_RIGHT_JOYSTICK" : 11,
    "BUTTON_DPAD_UP" : 12,
    "BUTTON_DPAD_DOWN" : 13,
    "BUTTON_DPAD_LEFT" : 14,
    "BUTTON_DPAD_RIGHT" : 15,
    "BUTTON_MENU" : 16,
    "AXIS_LEFT_JOYSTICK_X" : 0,
    "AXIS_LEFT_JOYSTICK_Y" : 1,
    "AXIS_RIGHT_JOYSTICK_X" : 2,
    "AXIS_RIGHT_JOYSTICK_Y" : 3
  };
  ig["GamepadInput"] = ig["Class"]["extend"]({
    "isInit" : false,
    "isSupported" : false,
    "list" : [],
    "bindings" : {},
    "states" : {},
    "presses" : {},
    "releases" : {},
    "downLocks" : {},
    "upLocks" : {},
    "leftStick" : {
      "x" : 0,
      "y" : 0
    },
    "rightStick" : {
      "x" : 0,
      "y" : 0
    },
    "start" : function() {
      if (!this["isInit"]) {
        /** @type {boolean} */
        this["isInit"] = true;
        var _0x1b9aa8 = navigator["getGamepads"] || navigator["webkitGetGamepads"];
        if (_0x1b9aa8) {
          if (!navigator["getGamepads"] && navigator["webkitGetGamepads"]) {
            navigator["getGamepads"] = navigator["webkitGetGamepads"];
          }
          this["list"] = navigator["getGamepads"]();
        }
        this["isSupported"] = _0x1b9aa8;
      }
    },
    "isAvailable" : function() {
      return this["isInit"] && this["isSupported"];
    },
    "buttonPressed" : function(data) {
      return "object" == typeof data ? data["pressed"] : 1 == data;
    },
    "buttonDown" : function(p) {
      if (p = this["bindings"][p]) {
        /** @type {boolean} */
        this["states"][p] = true;
        if (!this["downLocks"][p]) {
          /** @type {boolean} */
          this["presses"][p] = true;
          /** @type {boolean} */
          this["downLocks"][p] = true;
        }
      }
    },
    "buttonUp" : function(key) {
      if ((key = this["bindings"][key]) && this["downLocks"][key] && !this["upLocks"][key]) {
        /** @type {boolean} */
        this["states"][key] = false;
        /** @type {boolean} */
        this["releases"][key] = true;
        /** @type {boolean} */
        this["upLocks"][key] = true;
      }
    },
    "clearPressed" : function() {
      var indexLookupKey;
      for (indexLookupKey in this["releases"]) {
        /** @type {boolean} */
        this["states"][indexLookupKey] = false;
        /** @type {boolean} */
        this["downLocks"][indexLookupKey] = false;
      }
      this["releases"] = {};
      this["presses"] = {};
      this["upLocks"] = {};
    },
    "bind" : function(p, n) {
      this["bindings"][p] = n;
    },
    "unbind" : function(targetKey) {
      /** @type {boolean} */
      this["releases"][this["bindings"][targetKey]] = true;
      /** @type {null} */
      this["bindings"][targetKey] = null;
    },
    "unbindAll" : function() {
      this["bindings"] = {};
      this["states"] = {};
      this["presses"] = {};
      this["releases"] = {};
      this["downLocks"] = {};
      this["upLocks"] = {};
    },
    "state" : function(name) {
      return this["states"][name];
    },
    "pressed" : function(flag) {
      return this["presses"][flag];
    },
    "released" : function(action) {
      return this["releases"][action];
    },
    "clamp" : function(f, minv, maxv) {
      return f < minv ? minv : f > maxv ? maxv : f;
    },
    "pollGamepads" : function() {
      if (this["isSupported"]) {
        /** @type {number} */
        this["leftStick"]["x"] = 0;
        /** @type {number} */
        this["leftStick"]["y"] = 0;
        /** @type {number} */
        this["rightStick"]["x"] = 0;
        /** @type {number} */
        this["rightStick"]["y"] = 0;
        this["list"] = navigator["getGamepads"]();
        var key;
        for (key in this["bindings"]) {
          /** @type {boolean} */
          var _update_every = false;
          /** @type {number} */
          var i = 0;
          for (; i < this["list"]["length"]; i++) {
            var options = this["list"][i];
            if (options && options["buttons"] && this["buttonPressed"](options["buttons"][key])) {
              /** @type {boolean} */
              _update_every = true;
              break;
            }
          }
          if (_update_every) {
            this["buttonDown"](key);
          } else {
            this["buttonUp"](key);
          }
        }
        /** @type {number} */
        i = 0;
        for (; i < this["list"]["length"]; i++) {
          if ((options = this["list"][i]) && options["axes"]) {
            key = options["axes"][ig["GAMEPADINPUT"]["AXIS_LEFT_JOYSTICK_X"]];
            _update_every = options["axes"][ig["GAMEPADINPUT"]["AXIS_LEFT_JOYSTICK_Y"]];
            var iTempSeconds = options["axes"][ig["GAMEPADINPUT"]["AXIS_RIGHT_JOYSTICK_X"]];
            options = options["axes"][ig["GAMEPADINPUT"]["AXIS_RIGHT_JOYSTICK_Y"]];
            this["leftStick"]["x"] += isNaN(key) ? 0 : key;
            this["leftStick"]["y"] += isNaN(_update_every) ? 0 : _update_every;
            this["rightStick"]["x"] += isNaN(iTempSeconds) ? 0 : iTempSeconds;
            this["rightStick"]["y"] += isNaN(options) ? 0 : options;
          }
        }
        if (0 < this["list"]["length"]) {
          this["leftStick"]["x"] = this["clamp"](this["leftStick"]["x"], -1, 1);
          this["leftStick"]["y"] = this["clamp"](this["leftStick"]["y"], -1, 1);
          this["rightStick"]["x"] = this["clamp"](this["rightStick"]["x"], -1, 1);
          this["rightStick"]["y"] = this["clamp"](this["rightStick"]["y"], -1, 1);
        }
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.io.gamepad")["requires"]("plugins.io.gamepad-input")["defines"](function() {
  Gamepad = ig["Class"]["extend"]({
    "bindings" : {
      "padJump" : [ig["PADKEY"]["BUTTON_0"]]
    },
    "init" : function() {
      ig["gamepadInput"]["start"]();
      var p;
      for (p in this["bindings"]) {
        /** @type {number} */
        var i = 0;
        for (; i < this["bindings"][p]["length"]; i++) {
          ig["gamepadInput"]["bind"](this["bindings"][p][i], p);
        }
      }
    },
    "press" : function() {
    },
    "held" : function() {
    },
    "release" : function() {
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.io.multitouch")["defines"](function() {
  Multitouch = ig["Class"]["extend"]({
    "init" : function() {
      ig["multitouchInput"]["start"]();
    },
    "getTouchesPos" : function() {
      if (ig["ua"]["mobile"]) {
        if (0 < ig["multitouchInput"]["touches"]["length"]) {
          /** @type {!Array} */
          var reader = [];
          /** @type {number} */
          var c = 0;
          for (; c < ig["multitouchInput"]["touches"]["length"]; c++) {
            var origin = ig["multitouchInput"]["touches"][c];
            reader["push"]({
              "x" : origin["x"],
              "y" : origin["y"]
            });
          }
          return reader;
        }
        return null;
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.io.multitouch-input")["defines"](function() {
  ig["MultitouchInput"] = ig["Class"]["extend"]({
    "isStart" : false,
    "touches" : [],
    "multitouchCapable" : false,
    "lastEventUp" : null,
    "start" : function() {
      if (!this["isStart"]) {
        /** @type {boolean} */
        this["isStart"] = true;
        if (navigator["maxTouchPoints"] && 1 < navigator["maxTouchPoints"]) {
          /** @type {boolean} */
          this["multitouchCapable"] = true;
        }
        if (ig["ua"]["touchDevice"]) {
          if (window["navigator"]["msPointerEnabled"]) {
            ig["system"]["canvas"]["addEventListener"]("MSPointerDown", this["touchdown"]["bind"](this), false);
            ig["system"]["canvas"]["addEventListener"]("MSPointerUp", this["touchup"]["bind"](this), false);
            ig["system"]["canvas"]["addEventListener"]("MSPointerMove", this["touchmove"]["bind"](this), false);
            /** @type {string} */
            ig["system"]["canvas"]["style"]["msContentZooming"] = "none";
            /** @type {string} */
            ig["system"]["canvas"]["style"]["msTouchAction"] = "none";
          }
          ig["system"]["canvas"]["addEventListener"]("touchstart", this["touchdown"]["bind"](this), false);
          ig["system"]["canvas"]["addEventListener"]("touchend", this["touchup"]["bind"](this), false);
          ig["system"]["canvas"]["addEventListener"]("touchmove", this["touchmove"]["bind"](this), false);
        }
      }
    },
    "touchmove" : function(event) {
      if (ig["ua"]["touchDevice"]) {
        var mmToClipperScale = parseInt(ig["system"]["canvas"]["offsetWidth"]) || ig["system"]["realWidth"];
        var ZOOM_SIZE = parseInt(ig["system"]["canvas"]["offsetHeight"]) || ig["system"]["realHeight"];
        /** @type {number} */
        mmToClipperScale = ig["system"]["scale"] * (mmToClipperScale / ig["system"]["realWidth"]);
        /** @type {number} */
        ZOOM_SIZE = ig["system"]["scale"] * (ZOOM_SIZE / ig["system"]["realHeight"]);
        if (event["touches"]) {
          for (; 0 < this["touches"]["length"];) {
            this["touches"]["pop"]();
          }
          if (!this["multitouchCapable"] && 1 < event["touches"]["length"]) {
            /** @type {boolean} */
            this["multitouchCapable"] = true;
          }
          var offset = {
            "left" : 0,
            "top" : 0
          };
          if (ig["system"]["canvas"]["getBoundingClientRect"]) {
            offset = ig["system"]["canvas"]["getBoundingClientRect"]();
          }
          /** @type {number} */
          var i = 0;
          for (; i < event["touches"]["length"]; i++) {
            var e = event["touches"][i];
            if (e) {
              this["touches"]["push"]({
                "x" : (e["clientX"] - offset["left"]) / mmToClipperScale,
                "y" : (e["clientY"] - offset["top"]) / ZOOM_SIZE
              });
            }
          }
        } else {
          this["windowMove"](event);
        }
      }
      try {
        ig["soundHandler"]["unlockWebAudio"]();
      } catch (_0x40001b) {
      }
    },
    "touchdown" : function(data) {
      var mmToClipperScale = parseInt(ig["system"]["canvas"]["offsetWidth"]) || ig["system"]["realWidth"];
      var ZOOM_SIZE = parseInt(ig["system"]["canvas"]["offsetHeight"]) || ig["system"]["realHeight"];
      /** @type {number} */
      mmToClipperScale = ig["system"]["scale"] * (mmToClipperScale / ig["system"]["realWidth"]);
      /** @type {number} */
      ZOOM_SIZE = ig["system"]["scale"] * (ZOOM_SIZE / ig["system"]["realHeight"]);
      if (window["navigator"]["msPointerEnabled"]) {
        this["windowKeyDown"](data);
      } else {
        if (ig["ua"]["touchDevice"] && data["touches"]) {
          for (; 0 < this["touches"]["length"];) {
            this["touches"]["pop"]();
          }
          if (!this["multitouchCapable"] && 1 < data["touches"]["length"]) {
            /** @type {boolean} */
            this["multitouchCapable"] = true;
          }
          var offset = {
            "left" : 0,
            "top" : 0
          };
          if (ig["system"]["canvas"]["getBoundingClientRect"]) {
            offset = ig["system"]["canvas"]["getBoundingClientRect"]();
          }
          /** @type {number} */
          var i = 0;
          for (; i < data["touches"]["length"]; i++) {
            var e = data["touches"][i];
            if (e) {
              this["touches"]["push"]({
                "x" : (e["clientX"] - offset["left"]) / mmToClipperScale,
                "y" : (e["clientY"] - offset["top"]) / ZOOM_SIZE
              });
            }
          }
        }
      }
    },
    "touchup" : function(e) {
      var i = parseInt(ig["system"]["canvas"]["offsetWidth"]) || ig["system"]["realWidth"];
      parseInt(ig["system"]["canvas"]["offsetHeight"]);
      /** @type {number} */
      i = ig["system"]["scale"] * (i / ig["system"]["realWidth"]);
      if (window["navigator"]["msPointerEnabled"]) {
        this["windowKeyUp"](e);
      } else {
        /** @type {string} */
        this["lastEventUp"] = e;
        var offset = {
          "left" : 0,
          "top" : 0
        };
        if (ig["system"]["canvas"]["getBoundingClientRect"]) {
          offset = ig["system"]["canvas"]["getBoundingClientRect"]();
        }
        if (ig["ua"]["touchDevice"]) {
          /** @type {number} */
          e = (e["changedTouches"][0]["clientX"] - offset["left"]) / i;
          /** @type {number} */
          i = 0;
          for (; i < this["touches"]["length"]; i++) {
            if (this["touches"][i]["x"] >= e - 40 && this["touches"][i]["x"] <= e + 40) {
              this["touches"]["splice"](i, 1);
            }
          }
        }
      }
      if (ig["visibilityHandler"]) {
        ig["visibilityHandler"]["onChange"]("focus");
      }
      try {
        ig["soundHandler"]["unlockWebAudio"]();
      } catch (_0x30ab88) {
      }
    },
    "windowKeyDown" : function(children) {
      var numberOfHeadersToCount = parseInt(ig["system"]["canvas"]["offsetWidth"]) || ig["system"]["realWidth"];
      var attack = parseInt(ig["system"]["canvas"]["offsetHeight"]) || ig["system"]["realHeight"];
      /** @type {number} */
      numberOfHeadersToCount = ig["system"]["scale"] * (numberOfHeadersToCount / ig["system"]["realWidth"]);
      /** @type {number} */
      attack = ig["system"]["scale"] * (attack / ig["system"]["realHeight"]);
      if (window["navigator"]["msPointerEnabled"]) {
        var offset = {
          "left" : 0,
          "top" : 0
        };
        if (ig["system"]["canvas"]["getBoundingClientRect"]) {
          offset = ig["system"]["canvas"]["getBoundingClientRect"]();
        }
        children = children["changedTouches"] ? children["changedTouches"] : [children];
        /** @type {number} */
        var c = 0;
        for (; c < children["length"]; ++c) {
          var e = children[c];
          var targetValue = "undefined" != typeof e["identifier"] ? e["identifier"] : "undefined" != typeof e["pointerId"] ? e["pointerId"] : 1;
          /** @type {number} */
          var averageDistanceBetweenHeaders = (e["clientX"] - offset["left"]) / numberOfHeadersToCount;
          /** @type {number} */
          e = (e["clientY"] - offset["top"]) / attack;
          /** @type {number} */
          var i = 0;
          for (; i < this["touches"]["length"]; ++i) {
            if (this["touches"][i]["identifier"] == targetValue) {
              this["touches"]["splice"](i, 1);
            }
          }
          this["touches"]["push"]({
            "x" : averageDistanceBetweenHeaders,
            "y" : e,
            "identifier" : targetValue
          });
        }
        /** @type {number} */
        numberOfHeadersToCount = 0;
        for (; numberOfHeadersToCount < this["touches"]["length"]; numberOfHeadersToCount++) {
        }
      }
    },
    "windowKeyUp" : function(event) {
      event = "undefined" != typeof event["identifier"] ? event["identifier"] : "undefined" != typeof event["pointerId"] ? event["pointerId"] : 1;
      /** @type {number} */
      var i = 0;
      for (; i < this["touches"]["length"]; ++i) {
        if (this["touches"][i]["identifier"] == event) {
          this["touches"]["splice"](i, 1);
        }
      }
      for (; 0 < this["touches"]["length"];) {
        this["touches"]["pop"]();
      }
      if (ig["visibilityHandler"]) {
        ig["visibilityHandler"]["onChange"]("focus");
      }
      try {
        ig["soundHandler"]["unlockWebAudio"]();
      } catch (_0x25cad2) {
      }
    },
    "windowMove" : function(event) {
      var factorialX = parseInt(ig["system"]["canvas"]["offsetWidth"]) || ig["system"]["realWidth"];
      var numberOfHeadersToCount = parseInt(ig["system"]["canvas"]["offsetHeight"]) || ig["system"]["realHeight"];
      /** @type {number} */
      factorialX = ig["system"]["scale"] * (factorialX / ig["system"]["realWidth"]);
      /** @type {number} */
      numberOfHeadersToCount = ig["system"]["scale"] * (numberOfHeadersToCount / ig["system"]["realHeight"]);
      var arrowStyle = {
        "left" : 0,
        "top" : 0
      };
      if (ig["system"]["canvas"]["getBoundingClientRect"]) {
        arrowStyle = ig["system"]["canvas"]["getBoundingClientRect"]();
      }
      if (window["navigator"]["msPointerEnabled"]) {
        var targetValue = "undefined" != typeof event["identifier"] ? event["identifier"] : "undefined" != typeof event["pointerId"] ? event["pointerId"] : 1;
        /** @type {number} */
        var i = 0;
        for (; i < this["touches"]["length"]; ++i) {
          if (this["touches"][i]["identifier"] == targetValue) {
            /** @type {number} */
            var averageDistanceBetweenHeaders = (event["clientY"] - arrowStyle["top"]) / numberOfHeadersToCount;
            /** @type {number} */
            this["touches"][i]["x"] = (event["clientX"] - arrowStyle["left"]) / factorialX;
            /** @type {number} */
            this["touches"][i]["y"] = averageDistanceBetweenHeaders;
          }
        }
      }
      try {
        ig["soundHandler"]["unlockWebAudio"]();
      } catch (_0xa80a49) {
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.io.fake-storage")["requires"]("impact.game")["defines"](function() {
  ig["FakeStorage"] = ig["Class"]["extend"]({
    "tempData" : {},
    "init" : function() {
      ig["FakeStorage"]["instance"] = this;
    },
    "initUnset" : function(value, key) {
      if (null === this["get"](value)) {
        this["set"](value, key);
      }
    },
    "set" : function(key, message) {
      this["tempData"][key] = JSON["stringify"](message);
    },
    "setHighest" : function(key, value) {
      if (value > this["getFloat"](key)) {
        this["set"](key, value);
      }
    },
    "get" : function(key) {
      return "undefined" == typeof this["tempData"][key] ? null : JSON["parse"](this["tempData"][key]);
    },
    "getInt" : function(name) {
      return ~~this["get"](name);
    },
    "getFloat" : function(name) {
      return parseFloat(this["get"](name));
    },
    "getBool" : function(name) {
      return !!this["get"](name);
    },
    "isSet" : function(field) {
      return null !== this["get"](field);
    },
    "remove" : function(prekey_id) {
      delete this["tempData"][prekey_id];
    },
    "clear" : function() {
      this["tempData"] = {};
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.io.io-manager")["requires"]("plugins.io.storage", "plugins.io.mouse", "plugins.io.keyboard", "plugins.io.gamepad", "plugins.io.multitouch", "plugins.io.multitouch-input", "plugins.io.gamepad-input", "plugins.io.fake-storage")["defines"](function() {
  IoManager = ig["Class"]["extend"]({
    "storage" : null,
    "localStorageSupport" : false,
    "mouse" : null,
    "keyboard" : null,
    "multitouch" : null,
    "gamepad" : null,
    "init" : function() {
      ig["multitouchInput"] = new ig["MultitouchInput"];
      ig["gamepadInput"] = new ig["GamepadInput"];
      this["unbindAll"]();
      this["initStorage"]();
      this["initMouse"]();
      this["initKeyboard"]();
    },
    "unbindAll" : function() {
      ig["input"]["unbindAll"]();
      ig["gamepadInput"]["unbindAll"]();
    },
    "initStorage" : function() {
      try {
        window["localStorage"]["setItem"]("test", "test");
        this["storage"] = new ig["Storage"];
      } catch (_0x3504d9) {
        console["log"]("using fake storage");
        this["storage"] = new ig["FakeStorage"];
      } finally {
        window["localStorage"]["removeItem"]("test");
      }
    },
    "initMouse" : function() {
      this["mouse"] = new Mouse;
    },
    "initKeyboard" : function() {
      this["keyboard"] = new Keyboard;
    },
    "initMultitouch" : function() {
      this["multitouch"] = new Multitouch;
    },
    "initGamepad" : function() {
      this["gamepad"] = new Gamepad;
    },
    "press" : function(ch) {
      return ig["input"]["pressed"](ch) || this["gamepad"] && this["gamepad"]["press"](ch) ? true : false;
    },
    "held" : function(data) {
      return ig["input"]["state"](data) || this["gamepad"] && this["gamepad"]["state"](data) ? true : false;
    },
    "release" : function(resetOnRelease) {
      return ig["input"]["released"](resetOnRelease) || this["gamepad"] && this["gamepad"]["released"](resetOnRelease) ? true : false;
    },
    "getClickPos" : function() {
      return this["mouse"]["getPos"]();
    },
    "getTouchesPos" : function() {
      return this["multitouch"]["getTouchesPos"]();
    },
    "checkOverlap" : function(position, value, name, a, b) {
      return position["x"] > value + a || position["x"] < value || position["y"] > name + b || position["y"] < name ? false : true;
    },
    "_supportsLocalStorage" : function() {
      try {
        return localStorage["setItem"]("test", "test"), localStorage["removeItem"]("test"), this["localStorageSupport"] = "localStorage" in window && null !== window["localStorage"];
      } catch (_0x510cc3) {
        return this["localStorageSupport"];
      }
    },
    "storageIsSet" : function(mmCoreSplitViewBlock) {
      return !this["localStorageSupport"] ? null : this["storage"]["isSet"](mmCoreSplitViewBlock);
    },
    "storageGet" : function(env__3090) {
      return !this["localStorageSupport"] ? null : this["storage"]["get"](env__3090);
    },
    "storageSet" : function(sender, sendResponse) {
      if (!this["localStorageSupport"]) {
        return null;
      }
      this["storage"]["set"](sender, sendResponse);
    },
    "assert" : function(options, noForm, form1) {
      if (noForm !== form1) {
        throw "actualValue:" + noForm + " not equal to testValue:" + form1 + " at " + options;
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.io.storage-manager")["requires"]("impact.game", "plugins.io.io-manager")["defines"](function() {
  /** @type {string} */
  ig["Game"]["prototype"]["name"] = "MJS-Game";
  /** @type {string} */
  ig["Game"]["prototype"]["version"] = "1.0.0";
  ig["Game"]["prototype"]["sessionData"] = {};
  /**
   * @return {?}
   */
  ig["Game"]["prototype"]["initData"] = function() {
    return this["sessionData"] = {
      "sound" : 0.5,
      "music" : 0.5,
      "level" : 1,
      "score" : 0
    };
  };
  /**
   * @return {undefined}
   */
  ig["Game"]["prototype"]["setupStorageManager"] = function() {
    if ("undefined" === typeof this["name"]) {
      console["error"]("Cannot found Game Name, Storage Manager Cancelled.");
    } else {
      if ("undefined" === typeof this["version"]) {
        console["error"]("Cannot found Game Version, Storage Manager Cancelled.");
      } else {
        if (!this["io"]) {
          this["io"] = new IoManager;
          console["log"]("IO Manager doesn't existed. Initialize...");
        }
        console["log"]("Plug in Storage Manager");
        this["storage"] = this["io"]["storage"];
        this["storageName"] = this["name"] + "-v" + this["version"];
        this["loadAll"]();
      }
    }
  };
  /**
   * @return {undefined}
   */
  ig["Game"]["prototype"]["loadAll"] = function() {
    var value = this["storage"]["get"](this["storageName"]);
    if (null === value || "undefined" === typeof value) {
      value = this["initData"]();
    }
    var cssName;
    for (cssName in value) {
      this["sessionData"][cssName] = value[cssName];
    }
    this["storage"]["set"](this["storageName"], value);
  };
  /**
   * @return {undefined}
   */
  ig["Game"]["prototype"]["saveAll"] = function() {
    var list = this["storage"]["get"](this["storageName"]);
    var name;
    for (name in list) {
      list[name] = this["sessionData"][name];
    }
    this["storage"]["set"](this["storageName"], list);
  };
  /**
   * @param {?} ballNumber
   * @return {?}
   */
  ig["Game"]["prototype"]["load"] = function(ballNumber) {
    return this["storage"]["get"](this["storageName"])[ballNumber];
  };
  /**
   * @param {?} socket
   * @param {?} PL$29
   * @return {undefined}
   */
  ig["Game"]["prototype"]["save"] = function(socket, PL$29) {
    var PL$25 = this["storage"]["get"](this["storageName"]);
    PL$25[socket] = PL$29;
    this["storage"]["set"](this["storageName"], PL$25);
  };
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.splash-loader")["requires"]("impact.loader", "impact.animation")["defines"](function() {
  ig["SplashLoader"] = ig["Loader"]["extend"]({
    "tapToStartDivId" : "tap-to-start",
    "splashDesktop" : new ig["Image"]("media/graphics/splash/desktop/cover.jpg"),
    "splashMobile" : new ig["Image"]("media/graphics/splash/mobile/cover.jpg"),
    "splashTitle" : new ig["Image"]("media/graphics/sprites/title.png"),
    "customAnim" : new ig["AnimationSheet"]("media/graphics/splash/loading/anim.png", 256, 160),
    "loadingBar" : new ig["Image"]("media/graphics/sprites/loading-bar.png"),
    "loadingBG" : new ig["Image"]("media/graphics/sprites/loading-bg.png"),
    "init" : function(flightPhase, navigationLibrary) {
      this["parent"](flightPhase, navigationLibrary);
      this["setupCustomAnimation"]();
      ig["apiHandler"]["run"]("MJSPreroll");
    },
    "end" : function() {
      this["parent"]();
      /** @type {number} */
      this["_drawStatus"] = 1;
      this["draw"]();
      if (_SETTINGS["TapToStartAudioUnlock"]["Enabled"]) {
        this["tapToStartDiv"](function() {
          ig["system"]["setGame"](MyGame);
        });
      } else {
        ig["system"]["setGame"](MyGame);
      }
    },
    "tapToStartDiv" : function(contextFactoryOrToken) {
      this["desktopCoverDIV"] = document["getElementById"](this["tapToStartDivId"]);
      if (!this["desktopCoverDIV"]) {
        this["desktopCoverDIV"] = document["createElement"]("div");
        this["desktopCoverDIV"]["id"] = this["tapToStartDivId"];
        this["desktopCoverDIV"]["setAttribute"]("class", "play");
        this["desktopCoverDIV"]["setAttribute"]("style", "position: absolute; display: block; z-index: 999999; background-color: rgba(23, 32, 53, 0.7); visibility: visible; font-size: 10vmin; text-align: center; vertical-align: middle; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;");
        /** @type {string} */
        this["desktopCoverDIV"]["innerHTML"] = "<div style='color:white;background-color: rgba(255, 255, 255, 0.3); border: 2px solid #fff; font-size:20px; border-radius: 5px; position: relative; float: left; top: 50%; left: 50%; transform: translate(-50%, -50%);'><div style='padding:20px 50px; font-family: montserrat;'>" + _STRINGS["Splash"]["TapToStart"] + "</div></div>";
        (document["getElementById"]("play")["parentNode"] || document["getElementById"]("ajaxbar"))["appendChild"](this["desktopCoverDIV"]);
        try {
          if ("undefined" !== typeof ig["sizeHandler"]) {
            if ("undefined" !== typeof ig["sizeHandler"]["coreDivsToResize"]) {
              ig["sizeHandler"]["coreDivsToResize"]["push"]("#" + this["tapToStartDivId"]);
              if ("function" === typeof ig["sizeHandler"]["reorient"]) {
                ig["sizeHandler"]["reorient"]();
              }
            }
          } else {
            if ("undefined" !== typeof coreDivsToResize) {
              coreDivsToResize["push"](this["tapToStartDivId"]);
              if ("function" === typeof sizeHandler) {
                sizeHandler();
              }
            }
          }
        } catch (body) {
          console["log"](body);
        }
        this["desktopCoverDIV"]["addEventListener"]("click", function() {
          ig["soundHandler"]["unlockWebAudio"]();
          this["setAttribute"]("style", "visibility: hidden;");
          if ("function" === typeof contextFactoryOrToken) {
            contextFactoryOrToken();
          }
        });
      }
    },
    "setupCustomAnimation" : function() {
      this["animHeight"] = this["customAnim"]["height"];
      this["animWidth"] = this["customAnim"]["width"];
      this["customAnim"] = new ig["Animation"](this["customAnim"], 0.025, [0, 1, 2, 3, 4, 5, 6, 7]);
    },
    "animate" : function() {
      ig["Timer"]["step"]();
      this["customAnim"]["update"]();
    },
    "drawCheck" : 0,
    "draw" : function() {
      this["_drawStatus"] += (this["status"] - this["_drawStatus"]) / 5;
      if (1 === this["drawCheck"]) {
        console["log"]("Font should be loaded before loader draw loop");
      }
      if (2 > this["drawCheck"]) {
        this["drawCheck"]++;
      }
      /** @type {string} */
      ig["system"]["context"]["fillStyle"] = "#000";
      ig["system"]["context"]["fillRect"](0, 0, ig["system"]["width"], ig["system"]["height"]);
      var g = ig["system"]["scale"];
      var $element;
      var e;
      if (ig["ua"]["mobile"]) {
        /** @type {number} */
        $element = 0.5 * ig["system"]["width"] - 90;
        /** @type {number} */
        e = 0.67 * ig["system"]["height"];
        this["splashMobile"]["draw"](0, 0);
      } else {
        /** @type {number} */
        $element = 0.5 * ig["system"]["width"] - 125;
        /** @type {number} */
        e = 0.67 * ig["system"]["height"];
        this["splashDesktop"]["draw"](0, 0);
      }
      this["loadingBG"]["draw"]($element - 0.25 * this["loadingBG"]["width"], e);
      this["loadingBar"]["draw"]($element - 0.25 * this["loadingBG"]["width"], e, 0, 0, this["loadingBar"]["width"] * this["_drawStatus"], this["loadingBar"]["height"]);
      /** @type {string} */
      ig["system"]["context"]["fillStyle"] = "#ffffff";
      /** @type {string} */
      ig["system"]["context"]["font"] = "16px montserrat";
      $element = _STRINGS["Splash"]["Loading"];
      var artistTrack;
      /** @type {number} */
      artistTrack = ig["system"]["width"] / 2 - ig["system"]["context"]["measureText"]($element)["width"] / 2;
      ig["system"]["context"]["fillText"]($element, artistTrack, e * g + 24);
      /** @type {string} */
      ig["system"]["context"]["font"] = "bold 14px montserrat";
      /** @type {string} */
      ig["system"]["context"]["fillStyle"] = "#000000";
      $element = _STRINGS["Splash"]["LogoLine1"];
      ig["system"]["context"]["measureText"]($element);
      /** @type {string} */
      ig["system"]["context"]["font"] = "bold 12px montserrat";
      $element = _STRINGS["Splash"]["LogoLine2"];
      ig["system"]["context"]["measureText"]($element);
      /** @type {string} */
      ig["system"]["context"]["font"] = "bold 12px montserrat";
      /** @type {string} */
      ig["system"]["context"]["font"] = "12px heavy";
      ig["system"]["context"]["fillText"]("hello", -100, -100);
      /** @type {string} */
      ig["system"]["context"]["font"] = "12px semibold";
      ig["system"]["context"]["fillText"]("hello", -100, -100);
      /** @type {string} */
      ig["system"]["context"]["font"] = "12px medium";
      ig["system"]["context"]["fillText"]("hello", -100, -100);
      this["splashTitle"]["draw"](0.5 * ig["system"]["width"] - 0.5 * this["splashTitle"]["width"], 0.1 * ig["system"]["height"]);
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.tween")["requires"]("impact.entity")["defines"](function() {
  if (!Array["prototype"]["indexOf"]) {
    /**
     * @param {?} textualNote
     * @return {?}
     */
    Array["prototype"]["indexOf"] = function(textualNote) {
      /** @type {number} */
      var i = 0;
      for (; i < this["length"]; ++i) {
        if (this[i] === textualNote) {
          return i;
        }
      }
      return -1;
    };
  }
  /** @type {!Array} */
  ig["Entity"]["prototype"]["tweens"] = [];
  ig["Entity"]["prototype"]["_preTweenUpdate"] = ig["Entity"]["prototype"]["update"];
  /**
   * @return {undefined}
   */
  ig["Entity"]["prototype"]["update"] = function() {
    this["_preTweenUpdate"]();
    if (0 < this["tweens"]["length"]) {
      /** @type {!Array} */
      var PL$57 = [];
      /** @type {number} */
      var PL$50 = 0;
      for (; PL$50 < this["tweens"]["length"]; PL$50++) {
        this["tweens"][PL$50]["update"]();
        if (!this["tweens"][PL$50]["complete"]) {
          PL$57["push"](this["tweens"][PL$50]);
        }
      }
      /** @type {!Array} */
      this["tweens"] = PL$57;
    }
  };
  /**
   * @param {string} listener
   * @param {!Function} removePrefix
   * @param {!Function} styleURI
   * @return {?}
   */
  ig["Entity"]["prototype"]["tween"] = function(listener, removePrefix, styleURI) {
    listener = new ig["Tween"](this, listener, removePrefix, styleURI);
    this["tweens"]["push"](listener);
    return listener;
  };
  /**
   * @return {undefined}
   */
  ig["Entity"]["prototype"]["pauseTweens"] = function() {
    /** @type {number} */
    var i = 0;
    for (; i < this["tweens"]["length"]; i++) {
      this["tweens"][i]["pause"]();
    }
  };
  /**
   * @return {undefined}
   */
  ig["Entity"]["prototype"]["resumeTweens"] = function() {
    /** @type {number} */
    var i = 0;
    for (; i < this["tweens"]["length"]; i++) {
      this["tweens"][i]["resume"]();
    }
  };
  /**
   * @param {?} input
   * @return {undefined}
   */
  ig["Entity"]["prototype"]["stopTweens"] = function(input) {
    /** @type {number} */
    var i = 0;
    for (; i < this["tweens"]["length"]; i++) {
      this["tweens"][i]["stop"](input);
    }
  };
  /**
   * @param {!Object} delay
   * @param {?} otherOrigins
   * @param {number} duration
   * @param {?} mmCoreSplitViewBlock
   * @return {undefined}
   */
  ig["Tween"] = function(delay, otherOrigins, duration, mmCoreSplitViewBlock) {
    var newOptionValue = {};
    var materials = {};
    var new_properties = {};
    /** @type {number} */
    var ti1 = 0;
    /** @type {boolean} */
    var qs = false;
    /** @type {boolean} */
    var _0x3ac055 = false;
    /** @type {boolean} */
    var lastTrackInfoUrl = false;
    /** @type {number} */
    this["duration"] = duration;
    /** @type {boolean} */
    this["paused"] = this["complete"] = false;
    this["easing"] = ig["Tween"]["Easing"]["Linear"]["EaseNone"];
    /** @type {boolean} */
    this["onComplete"] = false;
    /** @type {number} */
    this["loop"] = this["delay"] = 0;
    /** @type {number} */
    this["loopCount"] = -1;
    ig["merge"](this, mmCoreSplitViewBlock);
    this["loopNum"] = this["loopCount"];
    /**
     * @param {boolean} trackInfoUrl
     * @return {undefined}
     */
    this["chain"] = function(trackInfoUrl) {
      /** @type {boolean} */
      lastTrackInfoUrl = trackInfoUrl;
    };
    /**
     * @param {number} propName
     * @param {!NodeList} dict
     * @param {!NodeList} props
     * @return {undefined}
     */
    this["initEnd"] = function(propName, dict, props) {
      if ("object" !== typeof dict[propName]) {
        props[propName] = dict[propName];
      } else {
        for (subprop in dict[propName]) {
          if (!props[propName]) {
            props[propName] = {};
          }
          this["initEnd"](subprop, dict[propName], props[propName]);
        }
      }
    };
    /**
     * @param {number} propName
     * @param {!NodeList} effectCfg
     * @param {!NodeList} dict
     * @param {!NodeList} props
     * @return {undefined}
     */
    this["initStart"] = function(propName, effectCfg, dict, props) {
      if ("object" !== typeof dict[propName]) {
        if ("undefined" !== typeof effectCfg[propName]) {
          props[propName] = dict[propName];
        }
      } else {
        for (subprop in dict[propName]) {
          if (!props[propName]) {
            props[propName] = {};
          }
          if ("undefined" !== typeof effectCfg[propName]) {
            this["initStart"](subprop, effectCfg[propName], dict[propName], props[propName]);
          }
        }
      }
    };
    /**
     * @return {undefined}
     */
    this["start"] = function() {
      /** @type {boolean} */
      this["paused"] = this["complete"] = false;
      this["loopNum"] = this["loopCount"];
      /** @type {number} */
      ti1 = 0;
      if (-1 == delay["tweens"]["indexOf"](this)) {
        delay["tweens"]["push"](this);
      }
      /** @type {boolean} */
      _0x3ac055 = true;
      qs = new ig["Timer"];
      var i;
      for (i in otherOrigins) {
        this["initEnd"](i, otherOrigins, materials);
      }
      for (i in materials) {
        this["initStart"](i, materials, delay, newOptionValue);
        this["initDelta"](i, new_properties, delay, materials);
      }
    };
    /**
     * @param {number} propName
     * @param {!NodeList} effectCfg
     * @param {!NodeList} from
     * @param {!NodeList} to
     * @return {undefined}
     */
    this["initDelta"] = function(propName, effectCfg, from, to) {
      if ("object" !== typeof to[propName]) {
        /** @type {number} */
        effectCfg[propName] = to[propName] - from[propName];
      } else {
        for (subprop in to[propName]) {
          if (!effectCfg[propName]) {
            effectCfg[propName] = {};
          }
          this["initDelta"](subprop, effectCfg[propName], from[propName], to[propName]);
        }
      }
    };
    /**
     * @param {number} p
     * @param {!NodeList} wlhash
     * @param {!NodeList} from
     * @param {!NodeList} delta
     * @param {?} easing
     * @return {undefined}
     */
    this["propUpdate"] = function(p, wlhash, from, delta, easing) {
      if ("object" !== typeof from[p]) {
        wlhash[p] = "undefined" != typeof from[p] ? from[p] + delta[p] * easing : wlhash[p];
      } else {
        for (subprop in from[p]) {
          this["propUpdate"](subprop, wlhash[p], from[p], delta[p], easing);
        }
      }
    };
    /**
     * @param {number} propName
     * @param {!NodeList} dict
     * @param {!NodeList} props
     * @return {undefined}
     */
    this["propSet"] = function(propName, dict, props) {
      if ("object" !== typeof dict[propName]) {
        props[propName] = dict[propName];
      } else {
        for (subprop in dict[propName]) {
          if (!props[propName]) {
            props[propName] = {};
          }
          this["propSet"](subprop, dict[propName], props[propName]);
        }
      }
    };
    /**
     * @return {?}
     */
    this["update"] = function() {
      if (!_0x3ac055) {
        return false;
      }
      if (this["delay"]) {
        if (qs["delta"]() < this["delay"]) {
          return;
        }
        /** @type {number} */
        this["delay"] = 0;
        qs["reset"]();
      }
      if (this["paused"] || this["complete"]) {
        return false;
      }
      /** @type {number} */
      var val = (qs["delta"]() + ti1) / this["duration"];
      /** @type {number} */
      val = 1 < val ? 1 : val;
      var valBbox = this["easing"](val);
      for (property in new_properties) {
        this["propUpdate"](property, delay, newOptionValue, new_properties, valBbox);
      }
      if (1 <= val) {
        if (0 == this["loopNum"] || !this["loop"]) {
          /** @type {boolean} */
          this["complete"] = true;
          if (this["onComplete"]) {
            this["onComplete"]();
          }
          if (lastTrackInfoUrl) {
            lastTrackInfoUrl["start"]();
          }
          return false;
        }
        if (this["loop"] == ig["Tween"]["Loop"]["Revert"]) {
          for (property in newOptionValue) {
            this["propSet"](property, newOptionValue, delay);
          }
          /** @type {number} */
          ti1 = 0;
          qs["reset"]();
          if (-1 != this["loopNum"]) {
            this["loopNum"]--;
          }
        } else {
          if (this["loop"] == ig["Tween"]["Loop"]["Reverse"]) {
            val = {};
            valBbox = {};
            ig["merge"](val, materials);
            ig["merge"](valBbox, newOptionValue);
            ig["merge"](newOptionValue, val);
            ig["merge"](materials, valBbox);
            for (property in materials) {
              this["initDelta"](property, new_properties, delay, materials);
            }
            /** @type {number} */
            ti1 = 0;
            qs["reset"]();
            if (-1 != this["loopNum"]) {
              this["loopNum"]--;
            }
          }
        }
      }
    };
    /**
     * @return {undefined}
     */
    this["pause"] = function() {
      /** @type {boolean} */
      this["paused"] = true;
      if (qs && qs["delta"]) {
        ti1 = ti1 + qs["delta"]();
      }
    };
    /**
     * @return {undefined}
     */
    this["resume"] = function() {
      /** @type {boolean} */
      this["paused"] = false;
      if (qs && qs["reset"]) {
        qs["reset"]();
      }
    };
    /**
     * @param {?} canCreateDiscussions
     * @return {undefined}
     */
    this["stop"] = function(canCreateDiscussions) {
      if (canCreateDiscussions) {
        /** @type {boolean} */
        this["loop"] = this["complete"] = this["paused"] = false;
        ti1 = ti1 + duration;
        this["update"]();
      }
      /** @type {boolean} */
      this["complete"] = true;
    };
  };
  ig["Tween"]["Loop"] = {
    "Revert" : 1,
    "Reverse" : 2
  };
  ig["Tween"]["Easing"] = {
    "Linear" : {},
    "Quadratic" : {},
    "Cubic" : {},
    "Quartic" : {},
    "Quintic" : {},
    "Sinusoidal" : {},
    "Exponential" : {},
    "Circular" : {},
    "Elastic" : {},
    "Back" : {},
    "Bounce" : {}
  };
  /**
   * @param {?} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Linear"]["EaseNone"] = function(canCreateDiscussions) {
    return canCreateDiscussions;
  };
  /**
   * @param {?} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Quadratic"]["EaseIn"] = function(canCreateDiscussions) {
    return canCreateDiscussions * canCreateDiscussions;
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Quadratic"]["EaseOut"] = function(canCreateDiscussions) {
    return -canCreateDiscussions * (canCreateDiscussions - 2);
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Quadratic"]["EaseInOut"] = function(canCreateDiscussions) {
    return 1 > (canCreateDiscussions = canCreateDiscussions * 2) ? 0.5 * canCreateDiscussions * canCreateDiscussions : -0.5 * (--canCreateDiscussions * (canCreateDiscussions - 2) - 1);
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Cubic"]["EaseIn"] = function(canCreateDiscussions) {
    return canCreateDiscussions * canCreateDiscussions * canCreateDiscussions;
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Cubic"]["EaseOut"] = function(canCreateDiscussions) {
    return --canCreateDiscussions * canCreateDiscussions * canCreateDiscussions + 1;
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Cubic"]["EaseInOut"] = function(canCreateDiscussions) {
    return 1 > (canCreateDiscussions = canCreateDiscussions * 2) ? 0.5 * canCreateDiscussions * canCreateDiscussions * canCreateDiscussions : 0.5 * ((canCreateDiscussions = canCreateDiscussions - 2) * canCreateDiscussions * canCreateDiscussions + 2);
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Quartic"]["EaseIn"] = function(canCreateDiscussions) {
    return canCreateDiscussions * canCreateDiscussions * canCreateDiscussions * canCreateDiscussions;
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Quartic"]["EaseOut"] = function(canCreateDiscussions) {
    return -(--canCreateDiscussions * canCreateDiscussions * canCreateDiscussions * canCreateDiscussions - 1);
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Quartic"]["EaseInOut"] = function(canCreateDiscussions) {
    return 1 > (canCreateDiscussions = canCreateDiscussions * 2) ? 0.5 * canCreateDiscussions * canCreateDiscussions * canCreateDiscussions * canCreateDiscussions : -0.5 * ((canCreateDiscussions = canCreateDiscussions - 2) * canCreateDiscussions * canCreateDiscussions * canCreateDiscussions - 2);
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Quintic"]["EaseIn"] = function(canCreateDiscussions) {
    return canCreateDiscussions * canCreateDiscussions * canCreateDiscussions * canCreateDiscussions * canCreateDiscussions;
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Quintic"]["EaseOut"] = function(canCreateDiscussions) {
    return (canCreateDiscussions = canCreateDiscussions - 1) * canCreateDiscussions * canCreateDiscussions * canCreateDiscussions * canCreateDiscussions + 1;
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Quintic"]["EaseInOut"] = function(canCreateDiscussions) {
    return 1 > (canCreateDiscussions = canCreateDiscussions * 2) ? 0.5 * canCreateDiscussions * canCreateDiscussions * canCreateDiscussions * canCreateDiscussions * canCreateDiscussions : 0.5 * ((canCreateDiscussions = canCreateDiscussions - 2) * canCreateDiscussions * canCreateDiscussions * canCreateDiscussions * canCreateDiscussions + 2);
  };
  /**
   * @param {?} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Sinusoidal"]["EaseIn"] = function(canCreateDiscussions) {
    return -Math["cos"](canCreateDiscussions * Math["PI"] / 2) + 1;
  };
  /**
   * @param {?} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Sinusoidal"]["EaseOut"] = function(canCreateDiscussions) {
    return Math["sin"](canCreateDiscussions * Math["PI"] / 2);
  };
  /**
   * @param {?} factor
   * @return {?}
   */
  ig["Tween"]["Easing"]["Sinusoidal"]["EaseInOut"] = function(factor) {
    return -0.5 * (Math["cos"](Math["PI"] * factor) - 1);
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Exponential"]["EaseIn"] = function(canCreateDiscussions) {
    return 0 == canCreateDiscussions ? 0 : Math["pow"](2, 10 * (canCreateDiscussions - 1));
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Exponential"]["EaseOut"] = function(canCreateDiscussions) {
    return 1 == canCreateDiscussions ? 1 : -Math["pow"](2, -10 * canCreateDiscussions) + 1;
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Exponential"]["EaseInOut"] = function(canCreateDiscussions) {
    return 0 == canCreateDiscussions ? 0 : 1 == canCreateDiscussions ? 1 : 1 > (canCreateDiscussions = canCreateDiscussions * 2) ? 0.5 * Math["pow"](2, 10 * (canCreateDiscussions - 1)) : 0.5 * (-Math["pow"](2, -10 * (canCreateDiscussions - 1)) + 2);
  };
  /**
   * @param {?} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Circular"]["EaseIn"] = function(canCreateDiscussions) {
    return -(Math["sqrt"](1 - canCreateDiscussions * canCreateDiscussions) - 1);
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Circular"]["EaseOut"] = function(canCreateDiscussions) {
    return Math["sqrt"](1 - --canCreateDiscussions * canCreateDiscussions);
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Circular"]["EaseInOut"] = function(canCreateDiscussions) {
    return 1 > (canCreateDiscussions = canCreateDiscussions / 0.5) ? -0.5 * (Math["sqrt"](1 - canCreateDiscussions * canCreateDiscussions) - 1) : 0.5 * (Math["sqrt"](1 - (canCreateDiscussions = canCreateDiscussions - 2) * canCreateDiscussions) + 1);
  };
  /**
   * @param {number} regExBonusMultiplier
   * @return {?}
   */
  ig["Tween"]["Easing"]["Elastic"]["EaseIn"] = function(regExBonusMultiplier) {
    var CommentMatchPenalty;
    /** @type {number} */
    var count = 0.1;
    /** @type {number} */
    var lowestDelta = 0.4;
    if (0 == regExBonusMultiplier) {
      return 0;
    }
    if (1 == regExBonusMultiplier) {
      return 1;
    }
    if (!lowestDelta) {
      /** @type {number} */
      lowestDelta = 0.3;
    }
    if (!count || 1 > count) {
      /** @type {number} */
      count = 1;
      /** @type {number} */
      CommentMatchPenalty = lowestDelta / 4;
    } else {
      /** @type {number} */
      CommentMatchPenalty = lowestDelta / (2 * Math["PI"]) * Math["asin"](1 / count);
    }
    return -(count * Math["pow"](2, 10 * (regExBonusMultiplier = regExBonusMultiplier - 1)) * Math["sin"](2 * (regExBonusMultiplier - CommentMatchPenalty) * Math["PI"] / lowestDelta));
  };
  /**
   * @param {number} ft_step
   * @return {?}
   */
  ig["Tween"]["Easing"]["Elastic"]["EaseOut"] = function(ft_step) {
    var range_secs;
    /** @type {number} */
    var count = 0.1;
    /** @type {number} */
    var lowestDelta = 0.4;
    if (0 == ft_step) {
      return 0;
    }
    if (1 == ft_step) {
      return 1;
    }
    if (!lowestDelta) {
      /** @type {number} */
      lowestDelta = 0.3;
    }
    if (!count || 1 > count) {
      /** @type {number} */
      count = 1;
      /** @type {number} */
      range_secs = lowestDelta / 4;
    } else {
      /** @type {number} */
      range_secs = lowestDelta / (2 * Math["PI"]) * Math["asin"](1 / count);
    }
    return count * Math["pow"](2, -10 * ft_step) * Math["sin"](2 * (ft_step - range_secs) * Math["PI"] / lowestDelta) + 1;
  };
  /**
   * @param {number} regExBonusMultiplier
   * @return {?}
   */
  ig["Tween"]["Easing"]["Elastic"]["EaseInOut"] = function(regExBonusMultiplier) {
    var CommentMatchPenalty;
    /** @type {number} */
    var count = 0.1;
    /** @type {number} */
    var lowestDelta = 0.4;
    if (0 == regExBonusMultiplier) {
      return 0;
    }
    if (1 == regExBonusMultiplier) {
      return 1;
    }
    if (!lowestDelta) {
      /** @type {number} */
      lowestDelta = 0.3;
    }
    if (!count || 1 > count) {
      /** @type {number} */
      count = 1;
      /** @type {number} */
      CommentMatchPenalty = lowestDelta / 4;
    } else {
      /** @type {number} */
      CommentMatchPenalty = lowestDelta / (2 * Math["PI"]) * Math["asin"](1 / count);
    }
    return 1 > (regExBonusMultiplier = regExBonusMultiplier * 2) ? -0.5 * count * Math["pow"](2, 10 * (regExBonusMultiplier = regExBonusMultiplier - 1)) * Math["sin"](2 * (regExBonusMultiplier - CommentMatchPenalty) * Math["PI"] / lowestDelta) : 0.5 * count * Math["pow"](2, -10 * (regExBonusMultiplier = regExBonusMultiplier - 1)) * Math["sin"](2 * (regExBonusMultiplier - CommentMatchPenalty) * Math["PI"] / lowestDelta) + 1;
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Back"]["EaseIn"] = function(canCreateDiscussions) {
    return canCreateDiscussions * canCreateDiscussions * (2.70158 * canCreateDiscussions - 1.70158);
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Back"]["EaseOut"] = function(canCreateDiscussions) {
    return (canCreateDiscussions = canCreateDiscussions - 1) * canCreateDiscussions * (2.70158 * canCreateDiscussions + 1.70158) + 1;
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Back"]["EaseInOut"] = function(canCreateDiscussions) {
    return 1 > (canCreateDiscussions = canCreateDiscussions * 2) ? 0.5 * canCreateDiscussions * canCreateDiscussions * (3.5949095 * canCreateDiscussions - 2.5949095) : 0.5 * ((canCreateDiscussions = canCreateDiscussions - 2) * canCreateDiscussions * (3.5949095 * canCreateDiscussions + 2.5949095) + 2);
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Bounce"]["EaseIn"] = function(canCreateDiscussions) {
    return 1 - ig["Tween"]["Easing"]["Bounce"]["EaseOut"](1 - canCreateDiscussions);
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Bounce"]["EaseOut"] = function(canCreateDiscussions) {
    return (canCreateDiscussions = canCreateDiscussions / 1) < 1 / 2.75 ? 7.5625 * canCreateDiscussions * canCreateDiscussions : canCreateDiscussions < 2 / 2.75 ? 7.5625 * (canCreateDiscussions = canCreateDiscussions - 1.5 / 2.75) * canCreateDiscussions + 0.75 : canCreateDiscussions < 2.5 / 2.75 ? 7.5625 * (canCreateDiscussions = canCreateDiscussions - 2.25 / 2.75) * canCreateDiscussions + 0.9375 : 7.5625 * (canCreateDiscussions = canCreateDiscussions - 2.625 / 2.75) * canCreateDiscussions + 0.984375;
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  ig["Tween"]["Easing"]["Bounce"]["EaseInOut"] = function(canCreateDiscussions) {
    return 0.5 > canCreateDiscussions ? 0.5 * ig["Tween"]["Easing"]["Bounce"]["EaseIn"](2 * canCreateDiscussions) : 0.5 * ig["Tween"]["Easing"]["Bounce"]["EaseOut"](2 * canCreateDiscussions - 1) + 0.5;
  };
  ig["Tween"]["Interpolation"] = {
    "Linear" : function(a, c) {
      /** @type {number} */
      var b = a["length"] - 1;
      /** @type {number} */
      var d = b * c;
      var e = Math["floor"](d);
      var g = TWEEN["Interpolation"]["Utils"]["Linear"];
      return 0 > c ? g(a[0], a[1], d) : 1 < c ? g(a[b], a[b - 1], b - d) : g(a[e], a[e + 1 > b ? b : e + 1], d - e);
    }
  };
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.patches.entity-patch")["requires"]("impact.entity")["defines"](function() {
  ig["Entity"]["inject"]({
    "handleMovementTrace" : function(map) {
      /** @type {boolean} */
      this["standing"] = false;
      if (map["collision"]["y"]) {
        if (0 < this["bounciness"] && Math["abs"](this["vel"]["y"]) > this["minBounceVelocity"]) {
          this["vel"]["y"] *= -this["bounciness"];
        } else {
          if (0 < this["vel"]["y"]) {
            /** @type {boolean} */
            this["standing"] = true;
          }
          /** @type {number} */
          this["vel"]["y"] = 0;
        }
      }
      if (map["collision"]["x"]) {
        /** @type {number} */
        this["vel"]["x"] = 0 < this["bounciness"] && Math["abs"](this["vel"]["x"]) > this["minBounceVelocity"] ? this["vel"]["x"] * -this["bounciness"] : 0;
      }
      if (map["collision"]["slope"]) {
        var eci_coords = map["collision"]["slope"];
        if (0 < this["bounciness"]) {
          /** @type {number} */
          var radiusearthkm = this["vel"]["x"] * eci_coords["nx"] + this["vel"]["y"] * eci_coords["ny"];
          /** @type {number} */
          this["vel"]["x"] = (this["vel"]["x"] - 2 * eci_coords["nx"] * radiusearthkm) * this["bounciness"];
          /** @type {number} */
          this["vel"]["y"] = (this["vel"]["y"] - 2 * eci_coords["ny"] * radiusearthkm) * this["bounciness"];
        } else {
          /** @type {number} */
          radiusearthkm = (this["vel"]["x"] * eci_coords["x"] + this["vel"]["y"] * eci_coords["y"]) / (eci_coords["x"] * eci_coords["x"] + eci_coords["y"] * eci_coords["y"]);
          /** @type {number} */
          this["vel"]["x"] = eci_coords["x"] * radiusearthkm;
          /** @type {number} */
          this["vel"]["y"] = eci_coords["y"] * radiusearthkm;
          eci_coords = Math["atan2"](eci_coords["x"], eci_coords["y"]);
          if (eci_coords > this["slopeStanding"]["min"] && eci_coords < this["slopeStanding"]["max"]) {
            /** @type {boolean} */
            this["standing"] = true;
          }
        }
      }
      this["pos"]["x"] = map["pos"]["x"];
      this["pos"]["y"] = map["pos"]["y"];
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.tweens-handler")["requires"]("impact.entity", "plugins.tween", "plugins.patches.entity-patch")["defines"](function() {
  if (!Array["prototype"]["indexOf"]) {
    /**
     * @param {?} textualNote
     * @return {?}
     */
    Array["prototype"]["indexOf"] = function(textualNote) {
      /** @type {number} */
      var i = 0;
      for (; i < this["length"]; ++i) {
        if (this[i] === textualNote) {
          return i;
        }
      }
      return -1;
    };
  }
  ig["TweensHandler"] = ig["Class"]["extend"]({
    "_tweens" : [],
    "_systemPausedTweens" : [],
    "init" : function() {
    },
    "getAll" : function() {
      return this["_tweens"];
    },
    "removeAll" : function() {
      /** @type {!Array} */
      this["_tweens"] = [];
    },
    "add" : function(value) {
      this["_tweens"]["push"](value);
    },
    "remove" : function(i) {
      i = this["_tweens"]["indexOf"](i);
      if (-1 !== i) {
        this["_tweens"]["splice"](i, 1);
      }
    },
    "onSystemPause" : function() {
      if (0 === this["_tweens"]["length"]) {
        return false;
      }
      /** @type {number} */
      var i = 0;
      /** @type {null} */
      var audio = null;
      for (; i < this["_tweens"]["length"];) {
        audio = this["_tweens"][i];
        if (audio["_isPlaying"]) {
          this["_systemPausedTweens"]["push"](audio);
          audio["pause"]();
        }
        i++;
      }
      return true;
    },
    "onSystemResume" : function() {
      if (0 === this["_systemPausedTweens"]["length"]) {
        return false;
      }
      /** @type {number} */
      var i = 0;
      for (; i < this["_systemPausedTweens"]["length"];) {
        this["_systemPausedTweens"][i]["resume"]();
        i++;
      }
      /** @type {!Array} */
      this["_systemPausedTweens"] = [];
      return true;
    },
    "update" : function(data, position) {
      if (0 === this["_tweens"]["length"]) {
        return false;
      }
      /** @type {number} */
      var i = 0;
      data = void 0 !== data ? data : ig["game"]["tweens"]["now"]();
      for (; i < this["_tweens"]["length"];) {
        if (this["_tweens"][i]["update"](data) || position) {
          i++;
        } else {
          this["_tweens"]["splice"](i, 1);
        }
      }
      return true;
    },
    "now" : function() {
      return Date["now"]();
    }
  });
  ig["TweenDef"] = ig["Class"]["extend"]({
    "_ent" : null,
    "_valuesStart" : {},
    "_valuesEnd" : {},
    "_valuesStartRepeat" : {},
    "_duration" : 1E3,
    "_repeat" : 0,
    "_yoyo" : false,
    "_isPlaying" : false,
    "_reversed" : false,
    "_delayTime" : 0,
    "_startTime" : null,
    "_pauseTime" : null,
    "_easingFunction" : ig["Tween"]["Easing"]["Linear"]["EaseNone"],
    "_interpolationFunction" : ig["Tween"]["Interpolation"]["Linear"],
    "_chainedTweens" : [],
    "_onStartCallback" : null,
    "_onStartCallbackFired" : false,
    "_onUpdateCallback" : null,
    "_onCompleteCallback" : null,
    "_onStopCallback" : null,
    "_onPauseCallback" : null,
    "_onResumeCallback" : null,
    "_currentElapsed" : 0,
    "init" : function(flightPhase) {
      this["_object"] = flightPhase;
    },
    "to" : function(parentRecord, key) {
      this["_valuesEnd"] = parentRecord;
      if (void 0 !== key) {
        /** @type {number} */
        this["_duration"] = key;
      }
      return this;
    },
    "start" : function(updateFrag) {
      if (this["_isPlaying"]) {
        return this;
      }
      ig["game"]["tweens"]["add"](this);
      /** @type {boolean} */
      this["_isPlaying"] = true;
      /** @type {boolean} */
      this["_onStartCallbackFired"] = false;
      this["_startTime"] = void 0 !== updateFrag ? updateFrag : ig["game"]["tweens"]["now"]();
      this["_startTime"] += this["_delayTime"];
      var name;
      for (name in this["_valuesEnd"]) {
        if (this["_valuesEnd"][name] instanceof Array) {
          if (0 === this["_valuesEnd"][name]["length"]) {
            continue;
          }
          this["_valuesEnd"][name] = [this["_object"][name]]["concat"](this["_valuesEnd"][name]);
        }
        if (void 0 !== this["_object"][name]) {
          this["_valuesStart"][name] = this["_object"][name];
          if (false === this["_valuesStart"][name] instanceof Array) {
            this["_valuesStart"][name] *= 1;
          }
          this["_valuesStartRepeat"][name] = this["_valuesStart"][name] || 0;
        }
      }
      return this;
    },
    "stop" : function() {
      if (!this["_isPlaying"]) {
        return this;
      }
      ig["game"]["tweens"]["remove"](this);
      /** @type {boolean} */
      this["_isPlaying"] = false;
      if (null !== this["_onStopCallback"]) {
        this["_onStopCallback"]["call"](this["_object"], this["_object"]);
      }
      this["stopChainedTweens"]();
      return this;
    },
    "pause" : function() {
      if (!this["_isPlaying"]) {
        return this;
      }
      ig["game"]["tweens"]["remove"](this);
      /** @type {boolean} */
      this["_isPlaying"] = false;
      this["_pauseTime"] = ig["game"]["tweens"]["now"]();
      if (null !== this["_onPauseCallback"]) {
        this["_onPauseCallback"]["call"](this["_object"], this["_object"]);
      }
      return this;
    },
    "resume" : function() {
      if (this["_isPlaying"] || !this["_pauseTime"]) {
        return this;
      }
      /** @type {number} */
      var _0x81cbeb = ig["game"]["tweens"]["now"]() - this["_pauseTime"];
      this["_startTime"] += _0x81cbeb;
      ig["game"]["tweens"]["add"](this);
      /** @type {boolean} */
      this["_isPlaying"] = true;
      if (null !== this["_onResumeCallback"]) {
        this["_onResumeCallback"]["call"](this["_object"], this["_object"]);
      }
      /** @type {null} */
      this["_pauseTime"] = null;
      return this;
    },
    "end" : function() {
      this["update"](this["_startTime"] + this["_duration"]);
      return this;
    },
    "stopChainedTweens" : function() {
      /** @type {number} */
      var PL$28 = 0;
      var PL$29 = this["_chainedTweens"]["length"];
      for (; PL$28 < PL$29; PL$28++) {
        this["_chainedTweens"][PL$28]["stop"]();
      }
    },
    "delay" : function(object) {
      this["_delayTime"] = object;
      return this;
    },
    "repeat" : function(event) {
      this["_repeat"] = event;
      return this;
    },
    "repeatDelay" : function(value) {
      this["_repeatDelayTime"] = value;
      return this;
    },
    "yoyo" : function(value) {
      this["_yoyo"] = value;
      return this;
    },
    "easing" : function(p) {
      this["_easingFunction"] = p;
      return this;
    },
    "interpolation" : function(name) {
      this["_interpolationFunction"] = name;
      return this;
    },
    "chain" : function() {
      /** @type {!Arguments} */
      this["_chainedTweens"] = arguments;
      return this;
    },
    "onStart" : function(auto_accept) {
      this["_onStartCallback"] = auto_accept;
      return this;
    },
    "onUpdate" : function(parentBindings) {
      this["_onUpdateCallback"] = parentBindings;
      return this;
    },
    "onComplete" : function(allPassed) {
      this["_onCompleteCallback"] = allPassed;
      return this;
    },
    "onStop" : function(callback) {
      this["_onStopCallback"] = callback;
      return this;
    },
    "onPause" : function(value) {
      this["_onPauseCallback"] = value;
      return this;
    },
    "onResume" : function(fileName) {
      this["_onResumeCallback"] = fileName;
      return this;
    },
    "update" : function(start) {
      var i;
      var max;
      var ratio;
      if (start < this["_startTime"]) {
        return true;
      }
      if (false === this["_onStartCallbackFired"]) {
        if (null !== this["_onStartCallback"]) {
          this["_onStartCallback"]["call"](this["_object"], this["_object"]);
        }
        /** @type {boolean} */
        this["_onStartCallbackFired"] = true;
      }
      /** @type {number} */
      max = (start - this["_startTime"]) / this["_duration"];
      /** @type {number} */
      this["_currentElapsed"] = max = 1 < max ? 1 : max;
      ratio = this["_easingFunction"](max);
      for (i in this["_valuesEnd"]) {
        if (void 0 !== this["_valuesStart"][i]) {
          var y = this["_valuesStart"][i] || 0;
          var x = this["_valuesEnd"][i];
          if (x instanceof Array) {
            this["_object"][i] = this["_interpolationFunction"](x, ratio);
          } else {
            if ("string" === typeof x) {
              x = "+" === x["charAt"](0) || "-" === x["charAt"](0) ? y + parseFloat(x) : parseFloat(x);
            }
            if ("number" === typeof x) {
              this["_object"][i] = y + (x - y) * ratio;
            }
          }
        }
      }
      if (null !== this["_onUpdateCallback"]) {
        this["_onUpdateCallback"]["call"](this["_object"], this["_object"], ratio);
      }
      if (1 === max) {
        if (0 < this["_repeat"]) {
          if (isFinite(this["_repeat"])) {
            this["_repeat"]--;
          }
          for (i in this["_valuesStartRepeat"]) {
            if ("string" === typeof this["_valuesEnd"][i]) {
              this["_valuesStartRepeat"][i] = _valuesStartRepeat[i] + parseFloat(_valuesEnd[i]);
            }
            if (this["_yoyo"]) {
              max = this["_valuesStartRepeat"][i];
              this["_valuesStartRepeat"][i] = this["_valuesEnd"][i];
              this["_valuesEnd"][i] = max;
            }
            this["_valuesStart"][i] = this["_valuesStartRepeat"][i];
          }
          if (this["_yoyo"]) {
            /** @type {boolean} */
            this["_reversed"] = !this["_reversed"];
          }
          this["_startTime"] = void 0 !== this["_repeatDelayTime"] ? start + this["_repeatDelayTime"] : start + this["_delayTime"];
        } else {
          if (null !== this["_onCompleteCallback"]) {
            this["_onCompleteCallback"]["call"](this["_object"], this["_object"]);
          }
          /** @type {number} */
          start = 0;
          i = this["_chainedTweens"]["length"];
          for (; start < i; start++) {
            this["_chainedTweens"][start]["start"](this["_startTime"] + this["_duration"]);
          }
          return false;
        }
      }
      return true;
    }
  });
  /** @type {!Array} */
  var subwikiListsCache = [1];
  ig["Tween"]["Interpolation"] = {
    "Linear" : function(a, c) {
      /** @type {number} */
      var b = a["length"] - 1;
      /** @type {number} */
      var d = b * c;
      var e = Math["floor"](d);
      var g = ig["Tween"]["Interpolation"]["Utils"]["Linear"];
      return 0 > c ? g(a[0], a[1], d) : 1 < c ? g(a[b], a[b - 1], b - d) : g(a[e], a[e + 1 > b ? b : e + 1], d - e);
    },
    "Bezier" : function(a, k) {
      /** @type {number} */
      var b = 0;
      /** @type {number} */
      var n = a["length"] - 1;
      var pw = Math["pow"];
      var bn = ig["Tween"]["Interpolation"]["Utils"]["Bernstein"];
      /** @type {number} */
      var i = 0;
      for (; i <= n; i++) {
        /** @type {number} */
        b = b + pw(1 - k, n - i) * pw(k, i) * a[i] * bn(n, i);
      }
      return b;
    },
    "CatmullRom" : function(a, c) {
      /** @type {number} */
      var b = a["length"] - 1;
      /** @type {number} */
      var d = b * c;
      var e = Math["floor"](d);
      var g = ig["Tween"]["Interpolation"]["Utils"]["CatmullRom"];
      return a[0] === a[b] ? (0 > c && (e = Math["floor"](d = b * (1 + c))), g(a[(e - 1 + b) % b], a[e], a[(e + 1) % b], a[(e + 2) % b], d - e)) : 0 > c ? a[0] - (g(a[0], a[0], a[1], a[1], -d) - a[0]) : 1 < c ? a[b] - (g(a[b], a[b], a[b - 1], a[b - 1], d - b) - a[b]) : g(a[e ? e - 1 : 0], a[e], a[b < e + 1 ? b : e + 1], a[b < e + 2 ? b : e + 2], d - e);
    },
    "Utils" : {
      "Linear" : function(a, b, t) {
        return (b - a) * t + a;
      },
      "Bernstein" : function(n, i) {
        var fc = ig["Tween"]["Interpolation"]["Utils"]["Factorial"];
        return fc(n) / fc(i) / fc(n - i);
      },
      "Factorial" : function(wikiId) {
        /** @type {number} */
        var headerScore = 1;
        if (subwikiListsCache[wikiId]) {
          return subwikiListsCache[wikiId];
        }
        /** @type {number} */
        var HeaderContentBonusMultiplier = wikiId;
        for (; 1 < HeaderContentBonusMultiplier; HeaderContentBonusMultiplier--) {
          /** @type {number} */
          headerScore = headerScore * HeaderContentBonusMultiplier;
        }
        return subwikiListsCache[wikiId] = headerScore;
      },
      "CatmullRom" : function(c, p1, p2, b, t) {
        /** @type {number} */
        c = 0.5 * (p2 - c);
        /** @type {number} */
        b = 0.5 * (b - p1);
        /** @type {number} */
        var x = t * t;
        return (2 * p1 - 2 * p2 + c + b) * t * x + (-3 * p1 + 3 * p2 - 2 * c - b) * x + c * t + p1;
      }
    }
  };
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.url-parameters")["defines"](function() {
  ig["UrlParameters"] = ig["Class"]["extend"]({
    "init" : function() {
      switch(getQueryVariable("iphone")) {
        case "true":
          /** @type {boolean} */
          ig["ua"]["iPhone"] = true;
          console["log"]("iPhone mode");
      }
      var name = getQueryVariable("webview");
      if (name) {
        switch(name) {
          case "true":
            /** @type {boolean} */
            ig["ua"]["is_uiwebview"] = true;
            console["log"]("webview mode");
        }
      }
      if (name = getQueryVariable("debug")) {
        switch(name) {
          case "true":
            ig["game"]["showDebugMenu"]();
            console["log"]("debug mode");
        }
      }
      switch(getQueryVariable("view")) {
        case "stats":
          ig["game"]["resetPlayerStats"]();
          ig["game"]["endGame"]();
      }
      getQueryVariable("ad");
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.director")["requires"]("impact.impact")["defines"](function() {
  ig["Director"] = ig["Class"]["extend"]({
    "init" : function(game, x) {
      this["game"] = game;
      /** @type {!Array} */
      this["levels"] = [];
      /** @type {number} */
      this["currentLevel"] = 0;
      this["append"](x);
    },
    "loadLevel" : function(num) {
      var masterVideoId;
      for (masterVideoId in ig["sizeHandler"]["dynamicClickableEntityDivs"]) {
        var effectSpeed = ig["domHandler"]["getElementById"]("#" + masterVideoId);
        ig["domHandler"]["hide"](effectSpeed);
      }
      this["currentLevel"] = num;
      this["game"]["loadLevel"](this["levels"][num]);
      return true;
    },
    "loadLevelWithoutEntities" : function(currentParent) {
      this["currentLevel"] = currentParent;
      this["game"]["loadLevelWithoutEntities"](this["levels"][currentParent]);
      return true;
    },
    "append" : function(levels) {
      /** @type {!Array} */
      newLevels = [];
      return "object" === typeof levels ? (levels["constructor"] === []["constructor"] ? newLevels = levels : newLevels[0] = levels, this["levels"] = this["levels"]["concat"](newLevels), true) : false;
    },
    "nextLevel" : function() {
      return this["currentLevel"] + 1 < this["levels"]["length"] ? this["loadLevel"](this["currentLevel"] + 1) : false;
    },
    "previousLevel" : function() {
      return 0 <= this["currentLevel"] - 1 ? this["loadLevel"](this["currentLevel"] - 1) : false;
    },
    "jumpTo" : function(b) {
      /** @type {null} */
      var koopaSpace = null;
      /** @type {number} */
      i = 0;
      for (; i < this["levels"]["length"]; i++) {
        if (this["levels"][i] == b) {
          /** @type {number} */
          koopaSpace = i;
        }
      }
      return 0 <= koopaSpace ? this["loadLevel"](koopaSpace) : false;
    },
    "firstLevel" : function() {
      return this["loadLevel"](0);
    },
    "lastLevel" : function() {
      return this["loadLevel"](this["levels"]["length"] - 1);
    },
    "reloadLevel" : function() {
      return this["loadLevel"](this["currentLevel"]);
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.impact-storage")["requires"]("impact.game")["defines"](function() {
  ig["Storage"] = ig["Class"]["extend"]({
    "staticInstantiate" : function() {
      return !ig["Storage"]["instance"] ? null : ig["Storage"]["instance"];
    },
    "init" : function() {
      ig["Storage"]["instance"] = this;
    },
    "isCapable" : function() {
      return "undefined" !== typeof window["localStorage"];
    },
    "isSet" : function(field) {
      return null !== this["get"](field);
    },
    "initUnset" : function(value, key) {
      if (null === this["get"](value)) {
        this["set"](value, key);
      }
    },
    "get" : function(namespace) {
      if (!this["isCapable"]()) {
        return null;
      }
      try {
        return JSON["parse"](localStorage["getItem"](namespace));
      } catch (_0x1ce8c8) {
        return window["localStorage"]["getItem"](namespace);
      }
    },
    "getInt" : function(name) {
      return ~~this["get"](name);
    },
    "getFloat" : function(name) {
      return parseFloat(this["get"](name));
    },
    "getBool" : function(name) {
      return !!this["get"](name);
    },
    "key" : function(key) {
      return this["isCapable"]() ? window["localStorage"]["key"](key) : null;
    },
    "set" : function(baseTimeOrLabel, message) {
      if (!this["isCapable"]()) {
        return null;
      }
      try {
        window["localStorage"]["setItem"](baseTimeOrLabel, JSON["stringify"](message));
      } catch (body) {
        console["log"](body);
      }
    },
    "setHighest" : function(key, value) {
      if (value > this["getFloat"](key)) {
        this["set"](key, value);
      }
    },
    "remove" : function(roomchat) {
      if (!this["isCapable"]()) {
        return null;
      }
      window["localStorage"]["removeItem"](roomchat);
    },
    "clear" : function() {
      if (!this["isCapable"]()) {
        return null;
      }
      window["localStorage"]["clear"]();
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.fullscreen")["requires"]("impact.entity", "plugins.handlers.size-handler", "plugins.director")["defines"](function() {
  ig["Fullscreen"] = {
    "enableFullscreenButton" : true,
    "_isEnabled" : "notChecked",
    "isEnabled" : function() {
      if ("notChecked" == this["_isEnabled"]) {
        /** @type {boolean} */
        this["_isEnabled"] = document["fullscreenEnabled"] || document["mozFullScreenEnabled"] || document["webkitFullscreenEnabled"] || document["msFullscreenEnabled"] ? true : false;
      }
      return this["_isEnabled"];
    },
    "isFullscreen" : function() {
      return ig["Fullscreen"]["isEnabled"]() && (document["fullscreenElement"] || document["mozFullScreenElement"] || document["webkitFullscreenElement"] || document["msFullscreenElement"]) ? true : false;
    },
    "toggleFullscreen" : function() {
      if (ig["Fullscreen"]["isFullscreen"]()) {
        ig["Fullscreen"]["exitFullscreen"]();
      } else {
        ig["Fullscreen"]["requestFullscreen"]();
      }
      ig["sizeHandler"]["orientationDelayHandler"]();
      if (ig && ig["visibilityHandler"]) {
        ig["visibilityHandler"]["onChange"]("focus");
      }
      try {
        ig["soundHandler"]["unlockWebAudio"]();
      } catch (_0x3bf839) {
      }
    },
    "requestFullscreen" : function() {
      var e = document["documentElement"];
      if (e["requestFullscreen"]) {
        e["requestFullscreen"]();
      } else {
        if (e["webkitRequestFullscreen"]) {
          e["webkitRequestFullscreen"]();
        } else {
          if (e["mozRequestFullScreen"]) {
            e["mozRequestFullScreen"]();
          } else {
            if (e["msRequestFullscreen"]) {
              e["msRequestFullscreen"]();
            } else {
              console["log"]("no request fullscreen method available");
            }
          }
        }
      }
    },
    "exitFullscreen" : function() {
      if (document["exitFullscreen"]) {
        document["exitFullscreen"]();
      } else {
        if (document["webkitExitFullscreen"]) {
          document["webkitExitFullscreen"]();
        } else {
          if (document["mozCancelFullScreen"]) {
            document["mozCancelFullScreen"]();
          } else {
            if (document["msExitFullscreen"]) {
              document["msExitFullscreen"]();
            } else {
              console["log"]("no exit fullscreen method available");
            }
          }
        }
      }
    },
    "divs" : {}
  };
  ig["Director"]["inject"]({
    "loadLevel" : function(data) {
      var target_names = ig["Fullscreen"]["divs"];
      var i;
      for (i in target_names) {
        target_names = ig["domHandler"]["getElementById"]("#" + i);
        ig["domHandler"]["hide"](target_names);
      }
      return this["parent"](data);
    }
  });
  ig["SizeHandler"]["inject"]({
    "resize" : function() {
      this["parent"]();
      var holes = ig["Fullscreen"]["divs"];
      var i;
      for (i in holes) {
        var ratio = Math["min"](ig["sizeHandler"]["scaleRatioMultiplier"]["x"], ig["sizeHandler"]["scaleRatioMultiplier"]["y"]);
        var type = ig["domHandler"]["getElementById"]("#" + i);
        var x = holes[i]["entity_pos_x"];
        var value = holes[i]["entity_pos_y"];
        var w = holes[i]["width"];
        var height = holes[i]["height"];
        var left = ig["domHandler"]["getElementById"]("#canvas");
        var pos = ig["domHandler"]["getOffsets"](left);
        if (ig["ua"]["mobile"]) {
          left = pos["left"];
          pos = pos["top"];
          if (ig["sizeHandler"]["disableStretchToFitOnMobileFlag"]) {
            x = Math["floor"](left + x * ig["sizeHandler"]["scaleRatioMultiplier"]["x"]) + "px";
            value = Math["floor"](pos + value * ig["sizeHandler"]["scaleRatioMultiplier"]["y"]) + "px";
            w = Math["floor"](w * ig["sizeHandler"]["scaleRatioMultiplier"]["x"]) + "px";
            height = Math["floor"](height * ig["sizeHandler"]["scaleRatioMultiplier"]["y"]) + "px";
          } else {
            x = Math["floor"](x * ig["sizeHandler"]["sizeRatio"]["x"]) + "px";
            value = Math["floor"](value * ig["sizeHandler"]["sizeRatio"]["y"]) + "px";
            w = Math["floor"](w * ig["sizeHandler"]["sizeRatio"]["x"]) + "px";
            height = Math["floor"](height * ig["sizeHandler"]["sizeRatio"]["y"]) + "px";
          }
        } else {
          left = pos["left"];
          pos = pos["top"];
          x = Math["floor"](left + x * ratio) + "px";
          value = Math["floor"](pos + value * ratio) + "px";
          w = Math["floor"](w * ratio) + "px";
          height = Math["floor"](height * ratio) + "px";
        }
        ig["domHandler"]["css"](type, {
          "float" : "left",
          "position" : "absolute",
          "left" : x,
          "top" : value,
          "width" : w,
          "height" : height,
          "z-index" : 3
        });
        if (holes[i]["font-size"]) {
          ig["domHandler"]["css"](type, {
            "font-size" : holes[i]["font-size"] * ratio + "px"
          });
        }
      }
    }
  });
  ig["FullscreenButton"] = ig["Entity"]["extend"]({
    "enterImage" : null,
    "exitImage" : null,
    "isReady" : false,
    "zIndex" : 999999,
    "identifier" : null,
    "prevPos" : {
      "x" : 0,
      "y" : 0
    },
    "invisImagePath" : "media/graphics/misc/invisible.png",
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
      if (ig["Fullscreen"]["isEnabled"]() && ig["Fullscreen"]["enableFullscreenButton"]) {
        if (this["enterImage"]["loaded"]) {
          this["initSize"]();
        } else {
          this["enterImage"]["loadCallback"] = function() {
            this["initSize"]();
          }["bind"](this);
        }
      } else {
        this["kill"]();
      }
    },
    "kill" : function() {
      this["parent"]();
    },
    "destroy" : function() {
      this["parent"]();
      console["log"]("destroy");
    },
    "initSize" : function() {
      this["size"]["x"] = this["enterImage"]["width"];
      this["size"]["y"] = this["enterImage"]["height"];
      this["createClickableLayer"]();
      /** @type {boolean} */
      this["isReady"] = true;
    },
    "createClickableLayer" : function() {
      /** @type {string} */
      this["identifier"] = "fullscreen-button-layer";
      var previousState = ig["domHandler"]["getElementById"]("#" + this["identifier"]);
      if (previousState) {
        ig["domHandler"]["show"](previousState);
        ig["domHandler"]["attr"](previousState, "onclick", "ig.Fullscreen.toggleFullscreen()");
      } else {
        this["createClickableOutboundLayer"]();
      }
    },
    "update" : function(y, x) {
      y = this["pos"]["x"];
      x = this["pos"]["y"];
      if (this["isReady"] && !(this["prevPos"]["x"] === y && this["prevPos"]["y"] === x)) {
        ig["Fullscreen"]["divs"][this["identifier"]] = {};
        ig["Fullscreen"]["divs"][this["identifier"]]["width"] = this["size"]["x"];
        ig["Fullscreen"]["divs"][this["identifier"]]["height"] = this["size"]["y"];
        ig["Fullscreen"]["divs"][this["identifier"]]["entity_pos_x"] = this["pos"]["x"];
        ig["Fullscreen"]["divs"][this["identifier"]]["entity_pos_y"] = this["pos"]["y"];
        this["prevPos"]["x"] = y;
        this["prevPos"]["y"] = x;
      }
    },
    "draw" : function() {
      if (this["isReady"]) {
        if (ig["Fullscreen"]["isFullscreen"]()) {
          this["exitImage"]["draw"](this["pos"]["x"], this["pos"]["y"]);
        } else {
          this["enterImage"]["draw"](this["pos"]["x"], this["pos"]["y"]);
        }
      }
    },
    "createClickableOutboundLayer" : function() {
      var no = this["identifier"];
      var ratio = this["invisImagePath"];
      var type = ig["domHandler"]["create"]("div");
      ig["domHandler"]["attr"](type, "id", no);
      ig["domHandler"]["attr"](type, "onclick", "ig.Fullscreen.toggleFullscreen()");
      var i = ig["domHandler"]["create"]("a");
      var elem = ig["domHandler"]["create"]("img");
      ig["domHandler"]["css"](elem, {
        "width" : "100%",
        "height" : "100%"
      });
      ig["domHandler"]["attr"](elem, "src", ratio);
      ratio = Math["min"](ig["sizeHandler"]["scaleRatioMultiplier"]["x"], ig["sizeHandler"]["scaleRatioMultiplier"]["y"]);
      if (ig["ua"]["mobile"]) {
        var position = ig["domHandler"]["getElementById"]("#canvas");
        position = ig["domHandler"]["getOffsets"](position);
        var left = position["left"];
        var top = position["top"];
        console["log"](position["left"]);
        if (ig["sizeHandler"]["disableStretchToFitOnMobileFlag"]) {
          position = Math["floor"](left + this["pos"]["x"] * ig["sizeHandler"]["scaleRatioMultiplier"]["x"]) + "px";
          top = Math["floor"](top + this["pos"]["y"] * ig["sizeHandler"]["scaleRatioMultiplier"]["y"]) + "px";
          left = Math["floor"](this["size"]["x"] * ig["sizeHandler"]["scaleRatioMultiplier"]["x"]) + "px";
          ratio = Math["floor"](this["size"]["y"] * ig["sizeHandler"]["scaleRatioMultiplier"]["y"]) + "px";
        } else {
          position = Math["floor"](this["pos"]["x"] * ig["sizeHandler"]["sizeRatio"]["x"]) + "px";
          top = Math["floor"](this["pos"]["y"] * ig["sizeHandler"]["sizeRatio"]["y"]) + "px";
          left = Math["floor"](this["size"]["x"] * ig["sizeHandler"]["sizeRatio"]["x"]) + "px";
          ratio = Math["floor"](this["size"]["y"] * ig["sizeHandler"]["sizeRatio"]["y"]) + "px";
        }
      } else {
        position = ig["domHandler"]["getElementById"]("#canvas");
        position = ig["domHandler"]["getOffsets"](position);
        left = position["left"];
        top = position["top"];
        if (ig["sizeHandler"]["enableStretchToFitOnDesktopFlag"]) {
          position = Math["floor"](left + this["pos"]["x"] * ig["sizeHandler"]["sizeRatio"]["x"]) + "px";
          top = Math["floor"](top + this["pos"]["y"] * ig["sizeHandler"]["sizeRatio"]["y"]) + "px";
          left = Math["floor"](this["size"]["x"] * ig["sizeHandler"]["sizeRatio"]["x"]) + "px";
          ratio = Math["floor"](this["size"]["y"] * ig["sizeHandler"]["sizeRatio"]["y"]) + "px";
        } else {
          position = Math["floor"](left + this["pos"]["x"] * ratio) + "px";
          top = Math["floor"](top + this["pos"]["y"] * ratio) + "px";
          left = Math["floor"](this["size"]["x"] * ratio) + "px";
          ratio = Math["floor"](this["size"]["y"] * ratio) + "px";
        }
      }
      ig["domHandler"]["css"](type, {
        "float" : "left",
        "position" : "absolute",
        "left" : position,
        "top" : top,
        "width" : left,
        "height" : ratio,
        "z-index" : 3
      });
      ig["domHandler"]["addEvent"](type, "mousemove", ig["input"]["mousemove"]["bind"](ig["input"]), false);
      ig["domHandler"]["appendChild"](i, elem);
      ig["domHandler"]["appendChild"](type, i);
      ig["domHandler"]["appendToBody"](type);
      ig["Fullscreen"]["divs"][no] = {};
      ig["Fullscreen"]["divs"][no]["width"] = this["size"]["x"];
      ig["Fullscreen"]["divs"][no]["height"] = this["size"]["y"];
      ig["Fullscreen"]["divs"][no]["entity_pos_x"] = this["pos"]["x"];
      ig["Fullscreen"]["divs"][no]["entity_pos_y"] = this["pos"]["y"];
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.data.color-rgb")["defines"](function() {
  /**
   * @param {number} r
   * @param {number} range
   * @param {number} scales
   * @param {number} g
   * @return {undefined}
   */
  ColorRGB = function(r, range, scales, g) {
    this["r"] = r || 0;
    this["g"] = range || 0;
    this["b"] = scales || 0;
    this["a"] = g || 0;
  };
  ColorRGB["prototype"] = {
    "setRandomColor" : function() {
      this["r"] = Math["round"](255 * Math["random"]());
      this["g"] = Math["round"](255 * Math["random"]());
      this["b"] = Math["round"](255 * Math["random"]());
    },
    "getStyle" : function() {
      return "rgba(" + this["r"] + "," + this["g"] + "," + this["b"] + "," + this["a"] + ")";
    },
    "getHex" : function() {
      var diff_red = this["r"]["toString"](16);
      var diff_green = this["g"]["toString"](16);
      var diff_blue = this["b"]["toString"](16);
      for (; 2 > diff_red["length"];) {
        /** @type {string} */
        diff_red = "0" + diff_red;
      }
      for (; 2 > diff_green["length"];) {
        /** @type {string} */
        diff_green = "0" + diff_green;
      }
      for (; 2 > diff_blue["length"];) {
        /** @type {string} */
        diff_blue = "0" + diff_blue;
      }
      return "#" + diff_red + diff_green + diff_blue;
    },
    "getInvertedColor" : function() {
      return new ColorRGB(255 - this["r"], 255 - this["g"], 255 - this["b"], 255 - this["a"]);
    },
    "clone" : function() {
      return new ColorRGB(this["r"], this["g"], this["b"], this["a"]);
    }
  };
});
this["START_BRANDING_SPLASH"];
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.branding.splash")["requires"]("impact.impact", "impact.entity")["defines"](function() {
  ig["BrandingSplash"] = ig["Class"]["extend"]({
    "init" : function() {
      ig["game"]["spawnEntity"](EntityBranding, 0, 0);
      console["log"]("spawn branding");
    }
  });
  EntityBranding = ig["Entity"]["extend"]({
    "gravityFactor" : 0,
    "size" : {
      "x" : 32,
      "y" : 32
    },
    "splash" : new ig["Image"]("branding/splash1.png"),
    "init" : function(node, a, f) {
      this["parent"](node, a, f);
      if (320 >= ig["system"]["width"]) {
        /** @type {number} */
        this["size"]["x"] = 320;
        /** @type {number} */
        this["size"]["y"] = 200;
      } else {
        /** @type {number} */
        this["size"]["x"] = 480;
        /** @type {number} */
        this["size"]["y"] = 240;
      }
      /** @type {number} */
      this["pos"]["x"] = (ig["system"]["width"] - this["size"]["x"]) / 2;
      /** @type {number} */
      this["pos"]["y"] = -this["size"]["y"] - 200;
      /** @type {number} */
      this["endPosY"] = (ig["system"]["height"] - this["size"]["y"]) / 2;
      node = this["tween"]({
        "pos" : {
          "y" : this["endPosY"]
        }
      }, 0.5, {
        "easing" : ig["Tween"]["Easing"]["Bounce"]["EaseIn"]
      });
      a = this["tween"]({}, 2.5, {
        "onComplete" : function() {
          ig["game"]["director"]["loadLevel"](ig["game"]["director"]["currentLevel"]);
        }
      });
      node["chain"](a);
      node["start"]();
      this["currentAnim"] = this["anims"]["idle"];
    },
    "createClickableLayer" : function() {
      console["log"]("Build clickable layer");
      this["checkClickableLayer"]("branding-splash", _SETTINGS["Branding"]["Logo"]["Link"], _SETTINGS["Branding"]["Logo"]["NewWindow"]);
    },
    "doesClickableLayerExist" : function(events) {
      for (k in dynamicClickableEntityDivs) {
        if (k == events) {
          return true;
        }
      }
      return false;
    },
    "checkClickableLayer" : function(conid, value, sendUpdatedEvent) {
      if ("undefined" == typeof wm) {
        if (this["doesClickableLayerExist"](conid)) {
          ig["game"]["showOverlay"]([conid]);
          $("#" + conid)["find"]("[href]")["attr"]("href", value);
        } else {
          this["createClickableOutboundLayer"](conid, value, "media/graphics/misc/invisible.png", sendUpdatedEvent);
        }
      }
    },
    "createClickableOutboundLayer" : function(idx, forcePlay, poster, autoplay) {
      var item = ig["$new"]("div");
      item["id"] = idx;
      document["body"]["appendChild"](item);
      item = $("#" + item["id"]);
      item["css"]("float", "left");
      item["css"]("position", "absolute");
      if (ig["ua"]["mobile"]) {
        /** @type {number} */
        var out = window["innerHeight"] / mobileHeight;
        /** @type {number} */
        var debugObject = window["innerWidth"] / mobileWidth;
        item["css"]("left", this["pos"]["x"] * debugObject);
        item["css"]("top", this["pos"]["y"] * out);
        item["css"]("width", this["size"]["x"] * debugObject);
        item["css"]("height", this["size"]["y"] * out);
      } else {
        /** @type {number} */
        out = w / 2 - destW / 2;
        /** @type {number} */
        debugObject = h / 2 - destH / 2;
        console["log"](out, debugObject);
        item["css"]("left", out + this["pos"]["x"] * multiplier);
        item["css"]("top", debugObject + this["pos"]["y"] * multiplier);
        item["css"]("width", this["size"]["x"] * multiplier);
        item["css"]("height", this["size"]["y"] * multiplier);
      }
      if (autoplay) {
        item["html"]("<a target='_blank' href='" + forcePlay + "'><img style='width:100%;height:100%' src='" + poster + "'></a>");
      } else {
        item["html"]("<a href='" + forcePlay + "'><img style='width:100%;height:100%' src='" + poster + "'></a>");
      }
      dynamicClickableEntityDivs[idx] = {};
      /** @type {number} */
      dynamicClickableEntityDivs[idx]["width"] = this["size"]["x"] * multiplier;
      /** @type {number} */
      dynamicClickableEntityDivs[idx]["height"] = this["size"]["y"] * multiplier;
      dynamicClickableEntityDivs[idx]["entity_pos_x"] = this["pos"]["x"];
      dynamicClickableEntityDivs[idx]["entity_pos_y"] = this["pos"]["y"];
    },
    "draw" : function() {
      /** @type {string} */
      ig["system"]["context"]["fillStyle"] = "#ffffff";
      ig["system"]["context"]["fillRect"](0, 0, ig["system"]["width"], ig["system"]["height"]);
      /** @type {string} */
      ig["system"]["context"]["fillStyle"] = "#000";
      /** @type {string} */
      ig["system"]["context"]["font"] = "12px medium";
      /** @type {string} */
      ig["system"]["context"]["textAlign"] = "left";
      if (320 >= ig["system"]["width"]) {
        ig["system"]["context"]["fillText"]("powered by MarketJS.com", ig["system"]["width"] - 150, ig["system"]["height"] - 15);
      } else {
        ig["system"]["context"]["fillText"]("powered by MarketJS.com", ig["system"]["width"] - 160, ig["system"]["height"] - 15);
      }
      this["parent"]();
      if (this["splash"]) {
        ig["system"]["context"]["drawImage"](this["splash"]["data"], 0, 0, this["splash"]["data"]["width"], this["splash"]["data"]["height"], this["pos"]["x"], this["pos"]["y"], this["size"]["x"], this["size"]["y"]);
      }
    }
  });
});
this["END_BRANDING_SPLASH"];
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.buttons.button")["requires"]("impact.entity", "plugins.data.vector")["defines"](function() {
  EntityButton = ig["Entity"]["extend"]({
    "collides" : ig["Entity"]["COLLIDES"]["NEVER"],
    "type" : ig["Entity"]["TYPE"]["A"],
    "size" : new Vector2(48, 48),
    "fillColor" : null,
    "zIndex" : 95E3,
    "init" : function(runway, flightPhase, config) {
      this["parent"](runway, flightPhase, config);
      if (!ig["global"]["wm"] && !isNaN(config["zIndex"])) {
        this["zIndex"] = config["zIndex"];
      }
      runway = Math["floor"](256 * Math["random"]());
      flightPhase = Math["floor"](256 * Math["random"]());
      config = Math["floor"](256 * Math["random"]());
      /** @type {string} */
      this["fillColor"] = "rgba(" + runway + "," + config + "," + flightPhase + ",1)";
    },
    "clicked" : function() {
      throw "no implementation on clicked()";
    },
    "clicking" : function() {
      throw "no implementation on clicking()";
    },
    "released" : function() {
      throw "no implementation on released()";
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.clickable-div-layer")["requires"]("plugins.data.vector")["defines"](function() {
  ClickableDivLayer = ig["Class"]["extend"]({
    "pos" : new Vector2(0, 0),
    "size" : new Vector2(0, 0),
    "identifier" : null,
    "invisImagePath" : "media/graphics/misc/invisible.png",
    "init" : function(args) {
      this["pos"] = new Vector2(args["pos"]["x"], args["pos"]["y"]);
      this["size"] = new Vector2(args["size"]["x"], args["size"]["y"]);
      /** @type {string} */
      var cbl = "more-games";
      /** @type {string} */
      var item = "www.google.com";
      /** @type {boolean} */
      var cellFn = false;
      if (args["div_layer_name"]) {
        cbl = args["div_layer_name"];
      }
      if (args["link"]) {
        item = args["link"];
      }
      if (args["newWindow"]) {
        cellFn = args["newWindow"];
      }
      this["createClickableLayer"](cbl, item, cellFn);
    },
    "createClickableLayer" : function(name, actionPayload, mmCoreSplitViewBlock) {
      /** @type {string} */
      this["identifier"] = name;
      var previousState = ig["domHandler"]["getElementById"]("#" + name);
      if (previousState) {
        ig["domHandler"]["show"](previousState);
        ig["domHandler"]["attr"](previousState, "href", actionPayload);
      } else {
        this["createClickableOutboundLayer"](name, actionPayload, this["invisImagePath"], mmCoreSplitViewBlock);
      }
    },
    "update" : function(entity, x) {
      if (!(this["pos"]["x"] === entity && this["pos"]["y"] === x)) {
        ig["sizeHandler"]["dynamicClickableEntityDivs"][this["identifier"]] = {};
        ig["sizeHandler"]["dynamicClickableEntityDivs"][this["identifier"]]["width"] = this["size"]["x"];
        ig["sizeHandler"]["dynamicClickableEntityDivs"][this["identifier"]]["height"] = this["size"]["y"];
        ig["sizeHandler"]["dynamicClickableEntityDivs"][this["identifier"]]["entity_pos_x"] = this["pos"]["x"];
        ig["sizeHandler"]["dynamicClickableEntityDivs"][this["identifier"]]["entity_pos_y"] = this["pos"]["y"];
      }
    },
    "createClickableOutboundLayer" : function(index, type, ratio, position) {
      var el = ig["domHandler"]["create"]("div");
      ig["domHandler"]["attr"](el, "id", index);
      var i = ig["domHandler"]["create"]("a");
      ig["domHandler"]["addEvent"](el, "mousedown", function(result) {
        result["preventDefault"]();
      });
      if (position) {
        ig["domHandler"]["attr"](i, "href", type);
        ig["domHandler"]["attr"](i, "target", "_blank");
      } else {
        ig["domHandler"]["attr"](i, "href", type);
      }
      type = ig["domHandler"]["create"]("img");
      ig["domHandler"]["css"](type, {
        "width" : "100%",
        "height" : "100%"
      });
      ig["domHandler"]["attr"](type, "src", ratio);
      ratio = Math["min"](ig["sizeHandler"]["scaleRatioMultiplier"]["x"], ig["sizeHandler"]["scaleRatioMultiplier"]["y"]);
      if (ig["ua"]["mobile"]) {
        position = ig["domHandler"]["getElementById"]("#canvas");
        position = ig["domHandler"]["getOffsets"](position);
        var left = position["left"];
        var top = position["top"];
        console["log"](position["left"]);
        if (ig["sizeHandler"]["disableStretchToFitOnMobileFlag"]) {
          position = Math["floor"](left + this["pos"]["x"] * ig["sizeHandler"]["scaleRatioMultiplier"]["x"]) + "px";
          top = Math["floor"](top + this["pos"]["y"] * ig["sizeHandler"]["scaleRatioMultiplier"]["y"]) + "px";
          left = Math["floor"](this["size"]["x"] * ig["sizeHandler"]["scaleRatioMultiplier"]["x"]) + "px";
          ratio = Math["floor"](this["size"]["y"] * ig["sizeHandler"]["scaleRatioMultiplier"]["y"]) + "px";
        } else {
          position = Math["floor"](this["pos"]["x"] * ig["sizeHandler"]["sizeRatio"]["x"]) + "px";
          top = Math["floor"](this["pos"]["y"] * ig["sizeHandler"]["sizeRatio"]["y"]) + "px";
          left = Math["floor"](this["size"]["x"] * ig["sizeHandler"]["sizeRatio"]["x"]) + "px";
          ratio = Math["floor"](this["size"]["y"] * ig["sizeHandler"]["sizeRatio"]["y"]) + "px";
        }
      } else {
        position = ig["domHandler"]["getElementById"]("#canvas");
        position = ig["domHandler"]["getOffsets"](position);
        left = position["left"];
        top = position["top"];
        if (ig["sizeHandler"]["enableStretchToFitOnDesktopFlag"]) {
          position = Math["floor"](left + this["pos"]["x"] * ig["sizeHandler"]["sizeRatio"]["x"]) + "px";
          top = Math["floor"](top + this["pos"]["y"] * ig["sizeHandler"]["sizeRatio"]["y"]) + "px";
          left = Math["floor"](this["size"]["x"] * ig["sizeHandler"]["sizeRatio"]["x"]) + "px";
          ratio = Math["floor"](this["size"]["y"] * ig["sizeHandler"]["sizeRatio"]["y"]) + "px";
        } else {
          position = Math["floor"](left + this["pos"]["x"] * ratio) + "px";
          top = Math["floor"](top + this["pos"]["y"] * ratio) + "px";
          left = Math["floor"](this["size"]["x"] * ratio) + "px";
          ratio = Math["floor"](this["size"]["y"] * ratio) + "px";
        }
      }
      ig["domHandler"]["css"](el, {
        "float" : "left",
        "position" : "absolute",
        "left" : position,
        "top" : top,
        "width" : left,
        "height" : ratio,
        "z-index" : 3
      });
      ig["domHandler"]["addEvent"](el, "mousemove", ig["input"]["mousemove"]["bind"](ig["input"]), false);
      ig["domHandler"]["appendChild"](i, type);
      ig["domHandler"]["appendChild"](el, i);
      ig["domHandler"]["appendToBody"](el);
      ig["sizeHandler"]["dynamicClickableEntityDivs"][index] = {};
      ig["sizeHandler"]["dynamicClickableEntityDivs"][index]["width"] = this["size"]["x"];
      ig["sizeHandler"]["dynamicClickableEntityDivs"][index]["height"] = this["size"]["y"];
      ig["sizeHandler"]["dynamicClickableEntityDivs"][index]["entity_pos_x"] = this["pos"]["x"];
      ig["sizeHandler"]["dynamicClickableEntityDivs"][index]["entity_pos_y"] = this["pos"]["y"];
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.buttons.button-branding-logo")["requires"]("game.entities.buttons.button", "plugins.clickable-div-layer")["defines"](function() {
  EntityButtonBrandingLogo = EntityButton["extend"]({
    "type" : ig["Entity"]["TYPE"]["A"],
    "gravityFactor" : 0,
    "logo" : new ig["AnimationSheet"]("branding/logo.png", _SETTINGS["Branding"]["Logo"]["Width"], _SETTINGS["Branding"]["Logo"]["Height"]),
    "zIndex" : 10001,
    "size" : {
      "x" : 64,
      "y" : 66
    },
    "clickableLayer" : null,
    "link" : null,
    "newWindow" : false,
    "div_layer_name" : "branding-logo",
    "name" : "brandinglogo",
    "init" : function(routeSegment, runway, flightPhase) {
      this["parent"](routeSegment, runway, flightPhase);
      if (!ig["global"]["wm"]) {
        if ("undefined" == typeof wm) {
          if (_SETTINGS["Branding"]["Logo"]["Enabled"]) {
            this["size"]["x"] = _SETTINGS["Branding"]["Logo"]["Width"];
            this["size"]["y"] = _SETTINGS["Branding"]["Logo"]["Height"];
            this["anims"]["idle"] = new ig["Animation"](this["logo"], 0, [0], true);
            this["currentAnim"] = this["anims"]["idle"];
            if (flightPhase && flightPhase["centralize"]) {
              /** @type {number} */
              this["pos"]["x"] = ig["system"]["width"] / 2 - this["size"]["x"] / 2;
              console["log"]("centralize true ... centering branded logo ...");
            }
            if (_SETTINGS["Branding"]["Logo"]["LinkEnabled"]) {
              this["link"] = _SETTINGS["Branding"]["Logo"]["Link"];
              this["newWindow"] = _SETTINGS["Branding"]["Logo"]["NewWindow"];
              this["clickableLayer"] = new ClickableDivLayer(this);
            }
          } else {
            this["kill"]();
            return;
          }
        }
        this["div_layer_name"] = flightPhase["div_layer_name"] ? flightPhase["div_layer_name"] : "branding-logo";
      }
    },
    "show" : function() {
      var animate = ig["domHandler"]["getElementById"]("#" + this["div_layer_name"]);
      ig["domHandler"]["show"](animate);
    },
    "hide" : function() {
      var effectSpeed = ig["domHandler"]["getElementById"]("#" + this["div_layer_name"]);
      ig["domHandler"]["hide"](effectSpeed);
    },
    "clicked" : function() {
    },
    "clicking" : function() {
    },
    "released" : function() {
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.branding-logo-placeholder")["requires"]("impact.entity", "game.entities.buttons.button-branding-logo")["defines"](function() {
  EntityBrandingLogoPlaceholder = ig["Entity"]["extend"]({
    "gravityFactor" : 0,
    "size" : {
      "x" : 32,
      "y" : 32
    },
    "_wmDrawBox" : true,
    "_wmBoxColor" : "rgba(0, 0, 255, 0.7)",
    "init" : function(data, plugins, args) {
      this["parent"](data, plugins, args);
      if (args) {
        switch(console["log"]("settings found ... using that div layer name"), data = args["div_layer_name"], console["log"]("settings.centralize:", args["centralize"]), args["centralize"]) {
          case "true":
            console["log"]("centralize true");
            /** @type {boolean} */
            centralize = true;
            break;
          case "false":
            console["log"]("centralize false");
            /** @type {boolean} */
            centralize = false;
            break;
          default:
            console["log"]("default ... centralize false");
            /** @type {boolean} */
            centralize = false;
        }
      } else {
        /** @type {string} */
        data = "branding-logo";
        /** @type {boolean} */
        centralize = false;
      }
      if ("undefined" == typeof wm) {
        if (_SETTINGS["Branding"]["Logo"]["Enabled"]) {
          try {
            ig["game"]["spawnEntity"](EntityButtonBrandingLogo, this["pos"]["x"], this["pos"]["y"], {
              "div_layer_name" : data,
              "centralize" : centralize
            });
          } catch (body) {
            console["log"](body);
          }
        }
        this["kill"]();
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.buttons.button-more-games")["requires"]("game.entities.buttons.button", "plugins.clickable-div-layer")["defines"](function() {
  EntityButtonMoreGames = EntityButton["extend"]({
    "type" : ig["Entity"]["TYPE"]["A"],
    "gravityFactor" : 0,
    "logo" : new ig["AnimationSheet"]("media/graphics/sprites/btn_more_games.png", 64, 66),
    "size" : {
      "x" : 64,
      "y" : 66
    },
    "zIndex" : 750,
    "clickableLayer" : null,
    "link" : null,
    "newWindow" : false,
    "div_layer_name" : "more-games",
    "name" : "moregames",
    "init" : function(routeSegment, runway, flightPhase) {
      this["parent"](routeSegment, runway, flightPhase);
      if (!ig["global"]["wm"]) {
        this["div_layer_name"] = flightPhase["div_layer_name"] ? flightPhase["div_layer_name"] : "more-games";
        if (_SETTINGS["MoreGames"]["Enabled"]) {
          this["anims"]["idle"] = new ig["Animation"](this["logo"], 0, [0], true);
          this["currentAnim"] = this["anims"]["idle"];
          if (_SETTINGS["MoreGames"]["Link"]) {
            this["link"] = _SETTINGS["MoreGames"]["Link"];
          }
          if (_SETTINGS["MoreGames"]["NewWindow"]) {
            this["newWindow"] = _SETTINGS["MoreGames"]["NewWindow"];
          }
          this["clickableLayer"] = new ClickableDivLayer(this);
        } else {
          this["kill"]();
        }
      }
    },
    "show" : function() {
      var animate = ig["domHandler"]["getElementById"]("#" + this["div_layer_name"]);
      if (animate) {
        ig["domHandler"]["show"](animate);
      }
    },
    "hide" : function() {
      var effectSpeed = ig["domHandler"]["getElementById"]("#" + this["div_layer_name"]);
      if (effectSpeed) {
        ig["domHandler"]["hide"](effectSpeed);
      }
    },
    "clicked" : function() {
    },
    "clicking" : function() {
    },
    "released" : function() {
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.opening-shield")["requires"]("impact.entity")["defines"](function() {
  EntityOpeningShield = ig["Entity"]["extend"]({
    "size" : {
      "x" : 48,
      "y" : 48
    },
    "move" : 0,
    "mIconAnim" : 0,
    "shieldAnim" : 0,
    "titleAnim" : 0,
    "shieldImage" : new ig["Image"]("media/graphics/opening/shield.png"),
    "mIconImage" : new ig["Image"]("media/graphics/opening/m_icon.png"),
    "titleImage" : new ig["Image"]("media/graphics/opening/title.png"),
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
    },
    "ready" : function() {
      if (!ig["wm"]) {
        if (_SETTINGS["DeveloperBranding"]["Splash"]["Enabled"]) {
          this["initTimer"] = new ig["Timer"](0.1);
          try {
            ig["soundHandler"]["playSound"](ig["soundHandler"]["SOUNDID"]["openingSound"]);
          } catch (body) {
            console["log"](body);
          }
        } else {
          ig["game"]["director"]["nextLevel"]();
          /** @type {number} */
          ig["system"]["context"]["globalAlpha"] = 1;
          this["kill"]();
        }
      }
    },
    "update" : function() {
      this["parent"]();
      this["updateOriginalShieldOpening"]();
    },
    "draw" : function() {
      this["parent"]();
      if (!ig["global"]["wm"]) {
        if (this["nextLevelTimer"] && 0 > this["nextLevelTimer"]["delta"]()) {
          /** @type {number} */
          ig["system"]["context"]["globalAlpha"] = -this["nextLevelTimer"]["delta"]();
        }
        this["drawOriginalShieldOpening"]();
      }
    },
    "updateOriginalShieldOpening" : function() {
      if (this["initTimer"] && 0 < this["initTimer"]["delta"]()) {
        /** @type {null} */
        this["initTimer"] = null;
        this["sheildTimer"] = new ig["Timer"](0.05);
      }
      if (this["sheildTimer"] && 0 < this["sheildTimer"]["delta"]()) {
        if (3 > this["shieldAnim"]) {
          this["shieldAnim"]++;
          this["sheildTimer"]["reset"]();
        } else {
          /** @type {null} */
          this["sheildTimer"] = null;
          this["moveTimer"] = new ig["Timer"](0.001);
          this["mIconTimer"] = new ig["Timer"](0.05);
          this["titleTimer"] = new ig["Timer"](0.15);
        }
      }
      if (this["moveTimer"] && 0 < this["moveTimer"]["delta"]()) {
        this["move"] += 0.3;
        this["moveTimer"]["reset"]();
      }
      if (this["mIconTimer"] && 0 < this["mIconTimer"]["delta"]()) {
        if (12 > this["mIconAnim"]) {
          this["mIconAnim"]++;
          this["moveTimer"]["reset"]();
        } else {
          /** @type {null} */
          this["mIconTimer"] = null;
        }
      }
      if (this["titleTimer"] && 0 < this["titleTimer"]["delta"]()) {
        if (11 > this["titleAnim"]) {
          this["titleAnim"]++;
          this["titleTimer"]["reset"]();
        } else {
          /** @type {null} */
          this["titleTimer"] = null;
          this["nextLevelTimer"] = new ig["Timer"](1);
        }
      }
      if (this["nextLevelTimer"] && 0 < this["nextLevelTimer"]["delta"]()) {
        /** @type {null} */
        this["nextLevelTimer"] = null;
        ig["game"]["director"]["nextLevel"]();
        /** @type {number} */
        ig["system"]["context"]["globalAlpha"] = 1;
      }
    },
    "drawOriginalShieldOpening" : function() {
      if (this["moveTimer"]) {
        var proto = ig["system"]["context"];
        proto["save"]();
        /** @type {number} */
        var value = ig["system"]["width"] / 2;
        /** @type {number} */
        var precision = ig["system"]["height"] / 2;
        proto["translate"](value, precision);
        proto["rotate"](this["move"] * Math["PI"] / 180);
        proto["beginPath"]();
        proto["moveTo"](0, 0);
        /** @type {number} */
        var _0x2d92fd = 0;
        /** @type {number} */
        var _0x26c5a0 = 1;
        for (; 48 >= _0x26c5a0; _0x26c5a0 = _0x26c5a0 + 1) {
          proto["lineTo"](0 + 800 * Math["cos"](2 * _0x26c5a0 * Math["PI"] / 48), 0 + 800 * Math["sin"](2 * _0x26c5a0 * Math["PI"] / 48));
          _0x2d92fd++;
          if (2 == _0x2d92fd) {
            /** @type {number} */
            _0x2d92fd = 0;
            proto["lineTo"](0, 0);
          }
        }
        proto["translate"](-value, -precision);
        value = proto["createRadialGradient"](value, precision, 100, value, precision, 250);
        value["addColorStop"](0, "rgba(255,255,255,0.1)");
        value["addColorStop"](1, "rgba(0,0,0,0)");
        proto["fillStyle"] = value;
        proto["fill"]();
        proto["restore"]();
      }
      this["shieldImage"]["drawTile"](ig["system"]["width"] / 2 - 91, 0 - (768 - ig["system"]["height"]) / 2, this["shieldAnim"], 182, 768);
      if (this["moveTimer"]) {
        this["mIconImage"]["drawTile"](ig["system"]["width"] / 2 - 96, ig["system"]["height"] / 2 - 70, this["mIconAnim"], 166, 160);
        this["titleImage"]["drawTile"](ig["system"]["width"] / 2 - 204, ig["system"]["height"] / 2 + 100, this["titleAnim"], 409, 76);
      }
      /** @type {number} */
      ig["system"]["context"]["globalAlpha"] = 1;
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.opening-kitty")["requires"]("impact.entity")["defines"](function() {
  EntityOpeningKitty = ig["Entity"]["extend"]({
    "size" : {
      "x" : 48,
      "y" : 48
    },
    "kittyAnim" : -1,
    "kittyImage" : new ig["Image"]("media/graphics/opening/kitty.png"),
    "kittyTitleImage" : new ig["Image"]("media/graphics/opening/kittytitle.png"),
    "soundKey" : "kittyopeningSound",
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
    },
    "ready" : function() {
      if (!ig["wm"]) {
        if (_SETTINGS["DeveloperBranding"]["Splash"]["Enabled"]) {
          this["initTimer"] = new ig["Timer"](0.1);
        } else {
          ig["game"]["director"]["nextLevel"]();
          /** @type {number} */
          ig["system"]["context"]["globalAlpha"] = 1;
          this["kill"]();
        }
      }
    },
    "update" : function() {
      this["parent"]();
      this["updateKittyOpening"]();
      this["unlockWebAudio"]();
    },
    "unlockWebAudio" : function() {
      if (ig["input"]["released"]("click")) {
        try {
          ig["soundHandler"]["unlockWebAudio"]();
        } catch (_0x2c65a7) {
        }
      }
    },
    "draw" : function() {
      this["parent"]();
      if (!ig["global"]["wm"]) {
        if (this["nextLevelTimer"] && 0 > this["nextLevelTimer"]["delta"]()) {
          /** @type {number} */
          ig["system"]["context"]["globalAlpha"] = -this["nextLevelTimer"]["delta"]();
        }
        this["drawKittyOpening"]();
      }
    },
    "updateKittyOpening" : function() {
      if (this["initTimer"] && 0 < this["initTimer"]["delta"]()) {
        /** @type {null} */
        this["initTimer"] = null;
        try {
          ig["soundHandler"]["sfxPlayer"]["play"](this["soundKey"]);
        } catch (body) {
          console["log"](body);
        }
        this["kittyTimer"] = new ig["Timer"](0.15);
      }
      if (this["kittyTimer"] && 0 < this["kittyTimer"]["delta"]()) {
        if (7 > this["kittyAnim"]) {
          this["kittyAnim"]++;
          this["kittyTimer"]["reset"]();
        } else {
          /** @type {null} */
          this["kittyTimer"] = null;
          this["nextLevelTimer"] = new ig["Timer"](2);
        }
      }
      if (this["nextLevelTimer"] && 0 < this["nextLevelTimer"]["delta"]()) {
        /** @type {null} */
        this["nextLevelTimer"] = null;
        ig["game"]["director"]["nextLevel"]();
        /** @type {number} */
        ig["system"]["context"]["globalAlpha"] = 1;
      }
    },
    "drawKittyOpening" : function() {
      var color = ig["system"]["context"]["createLinearGradient"](0, 0, 0, ig["system"]["height"]);
      color["addColorStop"](0, "#ffed94");
      color["addColorStop"](1, "#ffcd85");
      ig["system"]["context"]["fillStyle"] = color;
      ig["system"]["context"]["fillRect"](0, 0, ig["system"]["width"], ig["system"]["height"]);
      if (0 <= this["kittyAnim"]) {
        this["kittyImage"]["drawTile"](ig["system"]["width"] / 2 - this["kittyImage"]["width"] / 8, ig["system"]["height"] / 2 - this["kittyImage"]["height"] / 4, this["kittyAnim"], 218, 325);
        this["kittyTitleImage"]["drawTile"](ig["system"]["width"] / 2 - this["kittyTitleImage"]["width"] / 2, ig["system"]["height"] / 2 + this["kittyImage"]["height"] / 4 + 10, this["kittyAnim"], 380, 37);
      }
      /** @type {number} */
      ig["system"]["context"]["globalAlpha"] = 1;
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.pointer")["requires"]("impact.entity")["defines"](function() {
  EntityPointer = ig["Entity"]["extend"]({
    "checkAgainst" : ig["Entity"]["TYPE"]["BOTH"],
    "size" : new Vector2(1, 1),
    "isFirstPressed" : false,
    "isPressed" : false,
    "isReleased" : false,
    "isHovering" : false,
    "hoveringItem" : null,
    "objectArray" : [],
    "clickedObjectList" : [],
    "ignorePause" : true,
    "zIndex" : 5500,
    "check" : function(value) {
      this["objectArray"]["push"](value);
    },
    "clickObject" : function(proto) {
      if (this["isFirstPressed"] && "function" == typeof proto["clicked"]) {
        proto["clicked"]();
        this["addToClickedObjectList"](proto);
      }
      if (this["isPressed"] && !this["isReleased"] && "function" == typeof proto["clicking"]) {
        proto["clicking"]();
      }
      if (this["isReleased"] && "function" == typeof proto["released"]) {
        proto["released"]();
        this["removeFromClickedObjectList"](proto);
      }
    },
    "refreshPos" : function() {
      this["pos"] = ig["game"]["io"]["getClickPos"]();
    },
    "update" : function() {
      this["parent"]();
      this["refreshPos"]();
      /** @type {null} */
      var obj = null;
      /** @type {number} */
      var objets = -1;
      /** @type {number} */
      a = this["objectArray"]["length"] - 1;
      for (; -1 < a; a--) {
        if (this["objectArray"][a]["zIndex"] > objets) {
          objets = this["objectArray"][a]["zIndex"];
          obj = this["objectArray"][a];
        }
      }
      if (null != obj) {
        if (null != this["hoveringItem"]) {
          if (this["hoveringItem"] != obj) {
            if ("function" == typeof this["hoveringItem"]["leave"]) {
              this["hoveringItem"]["leave"]();
            }
            if ("function" == typeof obj["over"]) {
              obj["over"]();
            }
          }
        } else {
          if ("function" == typeof obj["over"]) {
            obj["over"]();
          }
        }
        this["hoveringItem"] = obj;
        this["clickObject"](obj);
        /** @type {!Array} */
        this["objectArray"] = [];
      } else {
        if (null != this["hoveringItem"] && "function" == typeof this["hoveringItem"]["leave"] && (this["hoveringItem"]["leave"](), this["hoveringItem"] = null), this["isReleased"]) {
          /** @type {number} */
          obj = 0;
          for (; obj < this["clickedObjectList"]["length"]; obj++) {
            objets = this["clickedObjectList"][obj];
            if ("function" == typeof objets["releasedOutside"]) {
              objets["releasedOutside"]();
            }
          }
          /** @type {!Array} */
          this["clickedObjectList"] = [];
        }
      }
      this["isFirstPressed"] = ig["input"]["pressed"]("click");
      this["isReleased"] = ig["input"]["released"]("click");
      this["isPressed"] = ig["input"]["state"]("click");
    },
    "addToClickedObjectList" : function(PL$60) {
      this["clickedObjectList"]["push"](PL$60);
    },
    "removeFromClickedObjectList" : function(currentElement) {
      /** @type {!Array} */
      var res = [];
      /** @type {number} */
      var i = 0;
      for (; i < this["clickedObjectList"]["length"]; i++) {
        var el = this["clickedObjectList"][i];
        if (el != currentElement) {
          res["push"](el);
        }
      }
      /** @type {!Array} */
      this["clickedObjectList"] = res;
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.pointer-selector")["requires"]("game.entities.pointer")["defines"](function() {
  EntityPointerSelector = EntityPointer["extend"]({
    "zIndex" : 1E3,
    "_wmDrawBox" : true,
    "_wmBoxColor" : "rgba(0, 0, 255, 0.7)",
    "size" : {
      "x" : 20,
      "y" : 20
    },
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.select")["requires"]("impact.entity")["defines"](function() {
  EntitySelect = ig["Entity"]["extend"]({
    "type" : ig["Entity"]["TYPE"]["B"],
    "checkAgainst" : ig["Entity"]["TYPE"]["A"],
    "collides" : ig["Entity"]["COLLIDES"]["NEVER"],
    "canSelect" : false,
    "canSelectTimerDuration" : 0.35,
    "zIndex" : 99999,
    "isHovering" : false,
    "isSelected" : false,
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
      this["canSelectTimer"] = new ig["Timer"](this["canSelectTimerDuration"]);
    },
    "doesClickableLayerExist" : function(events) {
      for (k in dynamicClickableEntityDivs) {
        if (k == events) {
          return true;
        }
      }
      return false;
    },
    "checkClickableLayer" : function(conid, value, sendUpdatedEvent) {
      if ("undefined" == typeof wm) {
        if (this["doesClickableLayerExist"](conid)) {
          ig["game"]["showOverlay"]([conid]);
          $("#" + conid)["find"]("[href]")["attr"]("href", value);
        } else {
          this["createClickableOutboundLayer"](conid, value, "media/graphics/misc/invisible.png", sendUpdatedEvent);
        }
      }
    },
    "createClickableOutboundLayer" : function(idx, forcePlay, poster, autoplay) {
      var item = ig["$new"]("div");
      item["id"] = idx;
      document["body"]["appendChild"](item);
      $("#" + item["id"])["css"]("float", "left");
      $("#" + item["id"])["css"]("width", this["size"]["x"] * multiplier);
      $("#" + item["id"])["css"]("height", this["size"]["y"] * multiplier);
      $("#" + item["id"])["css"]("position", "absolute");
      /** @type {number} */
      var res = w / 2 - destW / 2;
      /** @type {number} */
      var coordinate = h / 2 - destH / 2;
      if (w == mobileWidth) {
        $("#" + item["id"])["css"]("left", this["pos"]["x"]);
        $("#" + item["id"])["css"]("top", this["pos"]["y"]);
      } else {
        $("#" + item["id"])["css"]("left", res + this["pos"]["x"] * multiplier);
        $("#" + item["id"])["css"]("top", coordinate + this["pos"]["y"] * multiplier);
      }
      if (autoplay) {
        $("#" + item["id"])["html"]("<a target='_blank' href='" + forcePlay + "'><img style='width:100%;height:100%' src='" + poster + "'></a>");
      } else {
        $("#" + item["id"])["html"]("<a href='" + forcePlay + "'><img style='width:100%;height:100%' src='" + poster + "'></a>");
      }
      dynamicClickableEntityDivs[idx] = {};
      dynamicClickableEntityDivs[idx]["width"] = $("#" + item["id"])["width"]();
      dynamicClickableEntityDivs[idx]["height"] = $("#" + item["id"])["height"]();
      dynamicClickableEntityDivs[idx]["entity_pos_x"] = this["pos"]["x"];
      dynamicClickableEntityDivs[idx]["entity_pos_y"] = this["pos"]["y"];
    },
    "hovered" : function() {
      /** @type {boolean} */
      this["isHovering"] = true;
      this["dehoverOthers"]();
    },
    "dehoverOthers" : function() {
      var sections = ig["game"]["getEntitiesByType"](EntitySelect);
      /** @type {number} */
      i = 0;
      for (; i < sections["length"]; i++) {
        if (sections[i] != this) {
          /** @type {boolean} */
          sections[i]["isHovering"] = false;
        }
      }
    },
    "deselectOthers" : function() {
      var sections = ig["game"]["getEntitiesByType"](EntitySelect);
      /** @type {number} */
      i = 0;
      for (; i < sections["length"]; i++) {
        if (sections[i] != this) {
          /** @type {boolean} */
          sections[i]["isSelected"] = false;
        }
      }
    },
    "update" : function() {
      this["parent"]();
      if (this["canSelectTimer"] && 0 < this["canSelectTimer"]["delta"]()) {
        /** @type {boolean} */
        this["canSelect"] = true;
        /** @type {null} */
        this["canSelectTimer"] = null;
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.levels.opening")["requires"]("impact.image", "game.entities.opening-kitty")["defines"](function() {
  LevelOpening = {
    "entities" : [{
      "type" : "EntityOpeningKitty",
      "x" : 520,
      "y" : 212
    }],
    "layer" : []
  };
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.title")["requires"]("impact.entity")["defines"](function() {
  EntityTitle = ig["Entity"]["extend"]({
    "zIndex" : 1021,
    "currentImg" : null,
    "imgtitle" : new ig["Image"]("media/graphics/sprites/title.png"),
    "control" : null,
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
      this["currentImg"] = this["imgtitle"];
      /** @type {number} */
      this["pos"]["x"] = flightPhase - 0.5 * this["imgtitle"]["width"];
      if (ig["ua"]["mobile"]) {
        /** @type {number} */
        this["pos"]["y"] = 0.18 * ig["system"]["height"];
      }
    },
    "update" : function() {
      this["parent"]();
    },
    "draw" : function() {
      this["parent"]();
      this["currentImg"]["draw"](this["pos"]["x"], this["pos"]["y"]);
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.buttons.button-play-mm")["requires"]("game.entities.buttons.button")["defines"](function() {
  EntityButtonPlayMm = EntityButton["extend"]({
    "btnImg" : new ig["Image"]("media/graphics/sprites/btn-play.png"),
    "zIndex" : 30010,
    "size" : new Vector2(202, 208),
    "offsetText" : {
      "x" : 0,
      "y" : 0
    },
    "handler" : null,
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
      /** @type {number} */
      this["pos"]["x"] = flightPhase - 0.5 * this["size"]["x"];
    },
    "update" : function() {
      this["parent"]();
    },
    "changeText" : function(text) {
      this["text"] = text;
    },
    "clicked" : function() {
      ig["soundHandler"]["sfxPlayer"]["play"]("tapSound");
      var node = this["tween"]({
        "offset" : {
          "y" : -2
        },
        "offsetText" : {
          "y" : -2
        }
      }, 0.1);
      var val = this["tween"]({
        "offset" : {
          "y" : 0
        },
        "offsetText" : {
          "y" : 0
        }
      }, 0.1, {
        "onComplete" : function() {
          if (this["control"]) {
            this["control"]["play"]();
          }
        }["bind"](this)
      });
      node["chain"](val);
      node["start"]();
    },
    "clicking" : function() {
    },
    "released" : function() {
    },
    "draw" : function() {
      this["parent"]();
      this["drawImage"]();
    },
    "drawImage" : function() {
      this["btnImg"]["draw"](this["pos"]["x"], this["pos"]["y"] - this["offset"]["y"]);
    },
    "drawText" : function() {
      var options = ig["system"]["context"];
      options["save"]();
      /** @type {string} */
      options["fillStyle"] = "#333333";
      /** @type {string} */
      options["font"] = "50px medium";
      /** @type {string} */
      options["textAlign"] = "center";
      /** @type {string} */
      options["textBaseLine"] = "middle";
      options["fillText"](_STRINGS["Game"][this["text"]], this["pos"]["x"] + 0.5 * this["size"]["x"], this["pos"]["y"] - this["offsetText"]["y"] + 0.6 * this["size"]["y"]);
      options["restore"]();
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.controller.mainmenu-control")["requires"]("game.entities.title", "game.entities.buttons.button-play-mm", "impact.entity")["defines"](function() {
  EntityMainmenuControl = ig["Entity"]["extend"]({
    "zIndex" : 1,
    "size" : new Vector2(20, 20),
    "bg" : null,
    "layerBallsBack" : [],
    "layerBallsMid" : [],
    "layerBallsFront" : [],
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
      this["bg"] = ig["game"]["spawnEntity"](EntityBackground, 0, 0, {
        "control" : this
      });
      this["title"] = ig["game"]["spawnEntity"](EntityTitle, 0.5 * ig["system"]["width"], 0.1 * ig["system"]["height"], {
        "control" : this
      });
      this["ballPile"] = ig["game"]["spawnEntity"](EntityBallPile, 0, ig["system"]["height"] - 609, {
        "control" : this
      });
      this["btnSound"] = ig["game"]["spawnEntity"](EntityButtonSound, ig["system"]["width"] - 100, 20, {
        "control" : this
      });
      this["btnPlay"] = ig["game"]["spawnEntity"](EntityButtonPlayMm, 0.5 * ig["system"]["width"], ig["ua"]["mobile"] ? 0.5 * ig["system"]["height"] : 0.6 * ig["system"]["height"], {
        "control" : this
      });
      ig["game"]["spawnEntity"](ig["FullscreenButton"], 20, 20, {
        "enterImage" : new ig["Image"]("media/graphics/sprites/btn-expand.png"),
        "exitImage" : new ig["Image"]("media/graphics/sprites/btn-shrink.png")
      });
      this["pointer"] = ig["game"]["spawnEntity"](EntityPointerSelector, 50, 50);
      if (0 < ig["game"]["load"]("sound")) {
        ig["soundHandler"]["unmuteAll"](true);
      } else {
        ig["soundHandler"]["muteAll"](true);
      }
    },
    "ready" : function() {
    },
    "play" : function() {
      ig["game"]["director"]["jumpTo"](LevelGame);
    },
    "randMinMaxInt" : function(t, l) {
      t = Math["ceil"](t);
      l = Math["floor"](l);
      return Math["floor"](Math["random"]() * (l - t)) + t;
    },
    "update" : function() {
      this["parent"]();
    },
    "draw" : function() {
      this["parent"]();
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.levels.mainmenu")["requires"]("impact.image", "game.entities.controller.mainmenu-control")["defines"](function() {
  LevelMainmenu = {
    "entities" : [{
      "type" : "EntityMainmenuControl",
      "x" : 24,
      "y" : 20
    }],
    "layer" : []
  };
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.background")["requires"]("impact.entity")["defines"](function() {
  EntityBackground = ig["Entity"]["extend"]({
    "zIndex" : 1001,
    "size" : new Vector2(20, 20),
    "currentImg" : null,
    "imgBG" : new ig["Image"]("media/graphics/sprites/bg.png"),
    "imgBGLandScape" : new ig["Image"]("media/graphics/sprites/bg-landscape.png"),
    "control" : null,
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
      this["currentImg"] = this["imgBG"];
      if (!ig["ua"]["mobile"]) {
        this["currentImg"] = this["imgBGLandScape"];
      }
    },
    "update" : function() {
      this["parent"]();
    },
    "draw" : function() {
      this["parent"]();
      this["currentImg"]["draw"](this["pos"]["x"], this["pos"]["y"]);
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.crane")["requires"]("impact.entity")["defines"](function() {
  EntityCrane = ig["Entity"]["extend"]({
    "zIndex" : 1010,
    "size" : new Vector2(260, 400),
    "craneChoose" : "hand",
    "type" : ig["Entity"]["TYPE"]["A"],
    "checkAgainst" : ig["Entity"]["TYPE"]["B"],
    "name" : "crane",
    "ballsListShake" : [],
    "craneImg" : {
      "elephant" : {
        "img" : new ig["Image"]("media/graphics/sprites/claw-elephant.png"),
        "w" : 787,
        "h" : 1303,
        "offset" : {
          "x" : 253,
          "y" : 904
        },
        "offsetBallDraw" : {
          "x" : 20,
          "y" : 240
        }
      },
      "hand" : {
        "img" : new ig["Image"]("media/graphics/sprites/claw-hand.png"),
        "w" : 306,
        "h" : 1090,
        "offset" : {
          "x" : 0,
          "y" : 700
        },
        "offsetBallDraw" : {
          "x" : 40,
          "y" : 130
        }
      },
      "lizard" : {
        "img" : new ig["Image"]("media/graphics/sprites/claw-lizard.png"),
        "w" : 244,
        "h" : 955,
        "offset" : {
          "x" : 0,
          "y" : 700
        },
        "offsetBallDraw" : {
          "x" : 32,
          "y" : 170
        }
      },
      "magnet" : {
        "img" : new ig["Image"]("media/graphics/sprites/claw-magnet.png"),
        "w" : 258,
        "h" : 1049,
        "offset" : {
          "x" : 0,
          "y" : 648
        },
        "offsetBallDraw" : {
          "x" : 40,
          "y" : 260
        }
      },
      "magnetdesktop" : {
        "img" : new ig["Image"]("media/graphics/sprites/claw-magnet-desktop.png"),
        "w" : 206,
        "h" : 1E3,
        "offset" : {
          "x" : -30,
          "y" : 680
        },
        "offsetBallDraw" : {
          "x" : 46,
          "y" : 260
        }
      },
      "vacum" : {
        "img" : new ig["Image"]("media/graphics/sprites/claw-vacuum.png"),
        "w" : 470,
        "h" : 962,
        "offset" : {
          "x" : 114,
          "y" : 702
        },
        "offsetBallDraw" : {
          "x" : 40,
          "y" : 220
        }
      }
    },
    "ballsImg" : {
      "blue" : {
        "img" : new ig["Image"]("media/graphics/sprites/ball-blue.png"),
        "w" : 171,
        "h" : 171
      },
      "white" : {
        "img" : new ig["Image"]("media/graphics/sprites/ball-white.png"),
        "w" : 171,
        "h" : 171
      },
      "red" : {
        "img" : new ig["Image"]("media/graphics/sprites/ball-red.png"),
        "w" : 179,
        "h" : 179
      }
    },
    "currImg" : null,
    "control" : null,
    "istweening" : false,
    "ballImg" : null,
    "ballPickCrane" : false,
    "offsetBallDraw" : {
      "x" : 40,
      "y" : 130
    },
    "maxVel" : {
      "x" : 500,
      "y" : 500
    },
    "shakeTime" : null,
    "repeatShake" : 2,
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
      this["currImg"] = this["craneImg"][this["craneChoose"]]["img"];
      this["offset"] = ig["copy"](this["craneImg"][this["craneChoose"]]["offset"]);
    },
    "update" : function() {
      this["parent"]();
    },
    "changeCraneImg" : function(canCreateDiscussions) {
      /** @type {string} */
      this["craneChoose"] = canCreateDiscussions;
      this["currImg"] = this["craneImg"][this["craneChoose"]]["img"];
      this["offset"] = ig["copy"](this["craneImg"][this["craneChoose"]]["offset"]);
      if (!ig["ua"]["mobile"] && "magnet" == canCreateDiscussions) {
        /** @type {string} */
        this["craneChoose"] = "magnetdesktop";
        this["currImg"] = this["craneImg"][this["craneChoose"]]["img"];
        this["offset"] = ig["copy"](this["craneImg"][this["craneChoose"]]["offset"]);
      }
    },
    "tweenDownToShow" : function() {
      /** @type {number} */
      this["pos"]["x"] = 0.5 * ig["system"]["width"] - 0.5 * this["size"]["x"];
      this["tween"]({
        "pos" : {
          "y" : 0
        }
      }, 0.5, {
        "onComplete" : function() {
          this["control"]["setGameReady"]();
        }["bind"](this)
      })["start"]();
    },
    "tweenDown" : function() {
      if (!this["control"]["gameDone"] && this["control"]["gameStart"] && !this["istweening"]) {
        /** @type {boolean} */
        this["istweening"] = true;
        /** @type {number} */
        this["vel"]["x"] = 0;
        this["tween"]({
          "pos" : {
            "y" : 650
          }
        }, 0.5, {
          "onComplete" : function() {
            this["waitAndContinueShake"](0.2);
          }["bind"](this)
        })["start"]();
      }
    },
    "tweenAnimationShake" : function(data, elem) {
      var i = this["getRandomInt"](0, 15);
      var a = this["getRandomInt"](0, 15);
      /** @type {number} */
      var node = 0;
      if (elem) {
        /** @type {string} */
        node = elem;
      }
      /** @type {number} */
      i = this["offset"]["x"] - i;
      a = this["offset"]["x"] + a;
      data--;
      node = this["tween"]({
        "offset" : {
          "x" : i
        }
      }, 0.1, {
        "delay" : node
      });
      a = this["tween"]({
        "offset" : {
          "x" : a
        }
      }, 0.1, {
        "onComplete" : function() {
          if (0 < data) {
            this["tweenAnimationShake"](data);
          } else {
            this["endTweenShake"]();
          }
        }["bind"](this)
      });
      node["chain"](a);
      node["start"]();
    },
    "endTweenShake" : function() {
      this["repeatShake"]--;
      var charObj = ig["copy"](this["craneImg"][this["craneChoose"]]["offset"]);
      this["tween"]({
        "offset" : {
          "x" : charObj["x"]
        }
      }, 0.2, {
        "onComplete" : function() {
          if (0 < this["repeatShake"]) {
            this["waitAndContinueShake"](0.5);
          } else {
            this["tweenUp"]();
            this["spawnBallInCrane"]();
          }
        }["bind"](this)
      })["start"]();
    },
    "waitAndContinueShake" : function(mmCoreSplitViewBlock) {
      this["tween"]({}, mmCoreSplitViewBlock, {
        "onComplete" : function() {
          this["setAllBallDoneShake"]();
          this["tweenAnimationShake"](3);
          ig["soundHandler"]["sfxPlayer"]["play"]("shakeSound");
        }["bind"](this)
      })["start"]();
    },
    "setAllBallDoneShake" : function() {
      /** @type {number} */
      var i = 0;
      for (; i < this["ballsListShake"]["length"]; i++) {
        /** @type {boolean} */
        this["ballsListShake"][i]["shaking"] = false;
      }
    },
    "getRandom" : function(res, i) {
      return Math["random"]() * (i + res) + res;
    },
    "getRandomInt" : function(t, l) {
      t = Math["ceil"](t);
      l = Math["floor"](l);
      return Math["floor"](Math["random"]() * (l - t)) + t;
    },
    "spawnBallInCrane" : function() {
      /** @type {boolean} */
      this["ballPickCrane"] = true;
      var SCRIPTID = Math["floor"](2.9 * Math["random"]());
      this["ballImg"] = this["ballsImg"][String(["blue", "red", "white"][SCRIPTID])]["img"];
      this["offsetBallDraw"] = this["craneImg"][this["craneChoose"]]["offsetBallDraw"];
    },
    "tweenUp" : function() {
      this["tween"]({
        "pos" : {
          "y" : 0
        }
      }, 0.5, {
        "delay" : 0.3,
        "onComplete" : function() {
          /** @type {boolean} */
          this["istweening"] = false;
          this["control"]["waitEndGame"]();
        }["bind"](this)
      })["start"]();
    },
    "check" : function(value) {
      if ("ball" == value["name"]) {
        if (value["pos"]["x"] + 0.5 * value["size"]["x"] > this["pos"]["x"] + 0.5 * this["size"]["x"]) {
          value["shakeBall"]("right");
        } else {
          value["shakeBall"]("left");
        }
        this["ballsListShake"]["push"](value);
      }
    },
    "move" : function(object) {
      if (!this["control"]["gameDone"] && !this["control"]["delayAnimationEnd"] && !this["istweening"]) {
        if (0 > this["pos"]["x"] || this["pos"]["x"] > ig["system"]["width"] - this["size"]["x"]) {
          /** @type {number} */
          this["pos"]["x"] = 0 > this["pos"]["x"] ? this["pos"]["x"] = 0 : this["pos"]["x"] = ig["system"]["width"] - this["size"]["x"];
          /** @type {number} */
          this["vel"]["x"] = 0;
        } else {
          if ("right" == object || "rights" == object) {
            /** @type {number} */
            object = 400 * ig["system"]["tick"];
            if (this["pos"]["x"] + object > ig["system"]["width"] - this["size"]["x"]) {
              /** @type {number} */
              this["pos"]["x"] = ig["system"]["width"] - this["size"]["x"];
            } else {
              /** @type {number} */
              this["vel"]["x"] = 400;
            }
          } else {
            if ("left" == object || "lefts" == object) {
              /** @type {number} */
              object = -400 * ig["system"]["tick"];
              if (0 > this["pos"]["x"] + object) {
                /** @type {number} */
                this["pos"]["x"] = 0;
              } else {
                /** @type {number} */
                this["vel"]["x"] = -400;
              }
            } else {
              /** @type {number} */
              this["vel"]["x"] = 0;
            }
          }
        }
      }
    },
    "draw" : function() {
      this["parent"]();
      this["currImg"]["draw"](this["pos"]["x"] - this["offset"]["x"], this["pos"]["y"] - this["offset"]["y"]);
      if (this["ballPickCrane"]) {
        this["ballImg"]["draw"](this["pos"]["x"] + this["offsetBallDraw"]["x"], this["pos"]["y"] + this["offsetBallDraw"]["y"]);
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.ball")["requires"]("impact.entity")["defines"](function() {
  EntityBall = ig["Entity"]["extend"]({
    "zIndex" : 1002,
    "size" : new Vector2(171, 171),
    "ballsImg" : {
      "blue" : {
        "img" : new ig["Image"]("media/graphics/sprites/ball-blue.png"),
        "w" : 171,
        "h" : 171
      },
      "white" : {
        "img" : new ig["Image"]("media/graphics/sprites/ball-white.png"),
        "w" : 171,
        "h" : 171
      },
      "red" : {
        "img" : new ig["Image"]("media/graphics/sprites/ball-red.png"),
        "w" : 179,
        "h" : 179
      }
    },
    "control" : null,
    "currImg" : null,
    "ballPick" : "blue",
    "collides" : ig["Entity"]["COLLIDES"]["NEVER"],
    "type" : ig["Entity"]["TYPE"]["B"],
    "shaking" : false,
    "checkAgainst" : ig["Entity"]["TYPE"]["A"],
    "name" : "ball",
    "collideCrane" : false,
    "craneEntity" : null,
    "init" : function(name, flightPhase, navigationLibrary) {
      this["parent"](name, flightPhase, navigationLibrary);
      if ("random" == this["ballPick"]) {
        name = Math["floor"](2.9 * Math["random"]());
        this["currImg"] = this["ballsImg"][String(["blue", "red", "white"][name])]["img"];
      } else {
        this["currImg"] = this["balls"][this["ballPick"]]["img"];
      }
    },
    "shakeBall" : function(side) {
      var languageOffsetY;
      if (!this["shaking"]) {
        if ("right" == side) {
          side = this["pos"]["x"] + ig["game"]["control"]["randMinMaxInt"](0, 10);
          languageOffsetY = this["pos"]["y"] + ig["game"]["control"]["randMinMaxInt"](-10, 10);
          this["tween"]({
            "pos" : {
              "x" : side,
              "y" : languageOffsetY
            }
          }, 0.3)["start"]();
        } else {
          side = this["pos"]["x"] + ig["game"]["control"]["randMinMaxInt"](-2, -10);
          languageOffsetY = this["pos"]["y"] + ig["game"]["control"]["randMinMaxInt"](-10, 10);
          this["tween"]({
            "pos" : {
              "x" : side,
              "y" : languageOffsetY
            }
          }, 0.3, {
            "onComplete" : function() {
            }["bind"](this)
          })["start"]();
        }
        /** @type {boolean} */
        this["shaking"] = true;
      }
    },
    "check" : function(struct) {
      if ("crane" == struct["name"]) {
        if (null == this["craneEntity"]) {
          /** @type {!Object} */
          this["craneEntity"] = struct;
        }
        /** @type {boolean} */
        this["collideCrane"] = true;
      }
    },
    "update" : function() {
      this["parent"]();
    },
    "AABBcheck" : function(map, nodes) {
      return map["pos"]["x"] < nodes["pos"]["x"] + nodes["size"]["x"] && map["pos"]["x"] + map["size"]["x"] > nodes["pos"]["x"] && map["pos"]["y"] < nodes["pos"]["y"] + nodes["size"]["y"] && map["pos"]["y"] + map["size"]["y"] > nodes["y"];
    },
    "draw" : function() {
      this["parent"]();
      this["currImg"]["draw"](this["pos"]["x"], this["pos"]["y"]);
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.ball-pile")["requires"]("impact.entity")["defines"](function() {
  EntityBallPile = ig["Entity"]["extend"]({
    "zIndex" : 1002,
    "size" : new Vector2(20, 20),
    "imgPile" : {
      "portrait" : {
        "img" : new ig["Image"]("media/graphics/sprites/ball-pile.png")
      },
      "landscape" : {
        "img" : new ig["Image"]("media/graphics/sprites/ball-pile-landscape.png")
      }
    },
    "imgStatic" : null,
    "control" : null,
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
      this["imgStatic"] = this["imgPile"]["portrait"]["img"];
      if (!ig["ua"]["mobile"]) {
        this["imgStatic"] = this["imgPile"]["landscape"]["img"];
        /** @type {number} */
        this["pos"]["y"] = 0;
      }
    },
    "update" : function() {
      this["parent"]();
    },
    "draw" : function() {
      this["parent"]();
      this["imgStatic"]["draw"](this["pos"]["x"], this["pos"]["y"]);
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.buttons.button-ingame")["requires"]("game.entities.buttons.button")["defines"](function() {
  EntityButtonIngame = EntityButton["extend"]({
    "buttonsImg" : {
      "left" : {
        "img" : new ig["Image"]("media/graphics/sprites/btn-left.png")
      },
      "lefts" : {
        "img" : new ig["Image"]("media/graphics/sprites/btn-left-s.png")
      },
      "right" : {
        "img" : new ig["Image"]("media/graphics/sprites/btn-right.png")
      },
      "rights" : {
        "img" : new ig["Image"]("media/graphics/sprites/btn-right-s.png")
      },
      "grab" : {
        "img" : new ig["Image"]("media/graphics/sprites/btn-grab.png")
      },
      "grabs" : {
        "img" : new ig["Image"]("media/graphics/sprites/btn-grab-s.png")
      }
    },
    "btnPick" : "left",
    "currImg" : null,
    "control" : null,
    "handle" : null,
    "size" : new Vector2(164, 173),
    "offset" : {
      "x" : 0,
      "y" : 0
    },
    "isClicking" : false,
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
      this["currImg"] = this["buttonsImg"][this["btnPick"]]["img"];
      if ("lefts" == this["btnPick"] || "rights" == this["btnPick"] || "grabs" == this["btnPick"]) {
        /** @type {number} */
        this["size"]["x"] = 105;
        /** @type {number} */
        this["size"]["y"] = 110;
      }
    },
    "changeBtnPick" : function(canCreateDiscussions) {
      this["btnPick"] = canCreateDiscussions;
      this["currImg"] = this["buttonsImg"][this["btnPick"]]["img"];
      if ("lefts" == this["btnPick"] || "rights" == this["btnPick"] || "grabs" == this["btnPick"]) {
        /** @type {number} */
        this["size"]["x"] = 105;
        /** @type {number} */
        this["size"]["y"] = 110;
      }
    },
    "update" : function() {
      this["parent"]();
    },
    "leave" : function() {
      if (this["isClicking"]) {
        this["released"]();
      }
    },
    "clicked" : function() {
      this["handle"]["callBackClicked"](this["btnPick"]);
      ig["soundHandler"]["sfxPlayer"]["play"]("tapSound");
    },
    "clicking" : function() {
      /** @type {boolean} */
      this["isClicking"] = true;
      this["handle"]["callBackClicking"](this["btnPick"]);
      if (this["isClicking"] && -2 !== this["offset"]["y"]) {
        /** @type {number} */
        this["offset"]["y"] = -2;
      }
    },
    "released" : function() {
      /** @type {boolean} */
      this["isClicking"] = false;
      if (0 !== this["offset"]["y"]) {
        /** @type {number} */
        this["offset"]["y"] = 0;
      }
    },
    "draw" : function() {
      this["parent"]();
      this["currImg"]["draw"](this["pos"]["x"], this["pos"]["y"] - this["offset"]["y"]);
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.ui.btn-ui-control")["requires"]("impact.entity", "game.entities.buttons.button-ingame")["defines"](function() {
  EntityBtnUiControl = ig["Entity"]["extend"]({
    "zIndex" : 20102,
    "size" : new Vector2(20, 20),
    "control" : null,
    "btnLeft" : null,
    "btnRight" : null,
    "btnGrab" : null,
    "bg" : {
      "w" : 0,
      "h" : 0
    },
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
      this["btnLeft"] = ig["game"]["spawnEntity"](EntityButtonIngame, 30, this["pos"]["y"] + 30, {
        "control" : this["control"],
        "handle" : this,
        "btnPick" : "left",
        "zIndex" : 20110
      });
      this["btnRight"] = ig["game"]["spawnEntity"](EntityButtonIngame, 235, this["pos"]["y"] + 30, {
        "control" : this["control"],
        "handle" : this,
        "btnPick" : "right",
        "zIndex" : 20110
      });
      this["btnGrab"] = ig["game"]["spawnEntity"](EntityButtonIngame, 500, this["pos"]["y"] + 10, {
        "control" : this["control"],
        "handle" : this,
        "btnPick" : "grab",
        "size" : new Vector2(198, 208),
        "zIndex" : 20110
      });
      this["bg"]["w"] = ig["system"]["width"];
      /** @type {number} */
      this["bg"]["h"] = 230;
      if (!ig["ua"]["mobile"]) {
        /** @type {number} */
        this["bg"]["h"] = 120;
        /** @type {number} */
        this["pos"]["y"] = ig["system"]["height"] - this["bg"]["h"];
        this["btnLeft"]["changeBtnPick"]("lefts");
        this["btnLeft"]["pos"]["y"] = this["pos"]["y"] + 5;
        this["btnRight"]["changeBtnPick"]("rights");
        this["btnRight"]["pos"]["y"] = this["pos"]["y"] + 5;
        this["btnGrab"]["changeBtnPick"]("grabs");
        this["btnGrab"]["pos"]["y"] = this["pos"]["y"] + 5;
        /** @type {number} */
        this["btnGrab"]["pos"]["x"] = 0.875 * ig["system"]["width"];
      }
    },
    "callBackClicking" : function(touch) {
      this["control"]["crane"]["move"](touch);
    },
    "callBackClicked" : function(canCreateDiscussions) {
      if ("grab" == canCreateDiscussions || "grabs" == canCreateDiscussions) {
        this["control"]["crane"]["tweenDown"]();
      }
    },
    "update" : function() {
      this["parent"]();
    },
    "kill" : function() {
      this["btnLeft"]["kill"]();
      this["btnRight"]["kill"]();
      this["btnGrab"]["kill"]();
      this["parent"]();
    },
    "draw" : function() {
      this["parent"]();
      this["drawBGUI"]();
    },
    "drawBGUI" : function() {
      var options = ig["system"]["context"];
      options["save"]();
      /** @type {number} */
      options["globalAlpha"] = 0.5;
      options["fillRect"](0, this["pos"]["y"], ig["system"]["width"], 230);
      options["restore"]();
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.buttons.button-play")["requires"]("game.entities.buttons.button")["defines"](function() {
  EntityButtonPlay = EntityButton["extend"]({
    "btnImg" : new ig["Image"]("media/graphics/sprites/popup/btn.png"),
    "zIndex" : 30010,
    "size" : new Vector2(448, 109),
    "text" : "play",
    "offsetText" : {
      "x" : 0,
      "y" : 0
    },
    "handler" : null,
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
      /** @type {number} */
      this["pos"]["x"] = flightPhase - 0.5 * this["size"]["x"];
    },
    "update" : function() {
      this["parent"]();
    },
    "changeText" : function(text) {
      this["text"] = text;
    },
    "clicked" : function() {
      ig["soundHandler"]["sfxPlayer"]["play"]("tapSound");
      var node = this["tween"]({
        "offset" : {
          "y" : -2
        },
        "offsetText" : {
          "y" : -2
        }
      }, 0.1);
      var val = this["tween"]({
        "offset" : {
          "y" : 0
        },
        "offsetText" : {
          "y" : 0
        }
      }, 0.1, {
        "onComplete" : function() {
          if (this["handle"]) {
            this["handle"]["play"]();
          }
        }["bind"](this)
      });
      node["chain"](val);
      node["start"]();
    },
    "clicking" : function() {
    },
    "released" : function() {
    },
    "draw" : function() {
      this["parent"]();
      this["drawImage"]();
      this["drawText"]();
    },
    "drawImage" : function() {
      this["btnImg"]["draw"](this["pos"]["x"], this["pos"]["y"] - this["offset"]["y"]);
    },
    "drawText" : function() {
      var options = ig["system"]["context"];
      options["save"]();
      /** @type {string} */
      options["fillStyle"] = "#333333";
      /** @type {string} */
      options["font"] = "50px medium";
      /** @type {string} */
      options["textAlign"] = "center";
      /** @type {string} */
      options["textBaseLine"] = "middle";
      options["fillText"](_STRINGS["Game"][this["text"]], this["pos"]["x"] + 0.5 * this["size"]["x"], this["pos"]["y"] - this["offsetText"]["y"] + 0.6 * this["size"]["y"]);
      options["restore"]();
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.buttons.button-pick")["requires"]("game.entities.buttons.button")["defines"](function() {
  EntityButtonPick = EntityButton["extend"]({
    "buttonsImg" : {
      "left" : {
        "img" : new ig["Image"]("media/graphics/sprites/popup/left.png")
      },
      "right" : {
        "img" : new ig["Image"]("media/graphics/sprites/popup/right.png")
      }
    },
    "btnPick" : "left",
    "currImg" : null,
    "control" : null,
    "handle" : null,
    "size" : new Vector2(164, 173),
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
      this["currImg"] = this["buttonsImg"][this["btnPick"]]["img"];
    },
    "leave" : function() {
      if (this["isClicking"]) {
        this["released"]();
      }
    },
    "clicked" : function() {
      this["handle"]["callBackClicked"](this["btnPick"]);
      ig["soundHandler"]["sfxPlayer"]["play"]("tapSound");
    },
    "clicking" : function() {
      /** @type {boolean} */
      this["isClicking"] = true;
      this["handle"]["callBackClicking"](this["btnPick"]);
      if (this["isClicking"] && -2 !== this["offset"]["y"]) {
        /** @type {number} */
        this["offset"]["y"] = -2;
      }
    },
    "released" : function() {
      if (0 !== this["offset"]["y"]) {
        /** @type {number} */
        this["offset"]["y"] = 0;
      }
    },
    "draw" : function() {
      this["parent"]();
      this["currImg"]["draw"](this["pos"]["x"], this["pos"]["y"] - this["offset"]["y"]);
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.ui.popup-pickcrane")["requires"]("impact.entity", "game.entities.buttons.button-play", "game.entities.buttons.button-pick")["defines"](function() {
  EntityPopupPickcrane = ig["Entity"]["extend"]({
    "zIndex" : 2E4,
    "alpha" : 0.6,
    "popupImg" : new ig["Image"]("media/graphics/sprites/popup/panel.png"),
    "midPos" : {
      "x" : 0,
      "y" : 0
    },
    "checkFirstUpdate" : false,
    "textTitle" : "Title",
    "textChoose" : "yourClaw",
    "cranesImg" : {
      "elephant" : {
        "img" : new ig["Image"]("media/graphics/sprites/select/elephant.png"),
        "w" : 133,
        "h" : 315,
        "offset" : {
          "x" : 0,
          "y" : 354
        }
      },
      "hand" : {
        "img" : new ig["Image"]("media/graphics/sprites/select/hand.png"),
        "w" : 177,
        "h" : 359,
        "offset" : {
          "x" : 0,
          "y" : 354
        }
      },
      "lizard" : {
        "img" : new ig["Image"]("media/graphics/sprites/select/lizard.png"),
        "w" : 208,
        "h" : 329,
        "offset" : {
          "x" : 0,
          "y" : 354
        }
      },
      "magnet" : {
        "img" : new ig["Image"]("media/graphics/sprites/select/magnet.png"),
        "w" : 219,
        "h" : 310,
        "offset" : {
          "x" : 0,
          "y" : 354
        }
      },
      "vacum" : {
        "img" : new ig["Image"]("media/graphics/sprites/select/vacuum.png"),
        "w" : 353,
        "h" : 328,
        "offset" : {
          "x" : 0,
          "y" : 354
        }
      }
    },
    "cranePick" : "hand",
    "currCrane" : null,
    "arrayImg" : ["hand", "lizard", "magnet", "vacum", "elephant"],
    "imgNum" : 0,
    "drawPosition" : {
      "title" : {
        "x" : 0,
        "y" : 0,
        "offset" : {
          "x" : 0,
          "y" : 0
        }
      },
      "chooseClaw" : {
        "x" : 0,
        "y" : 0
      },
      "panel" : {
        "x" : 0,
        "y" : 0,
        "offset" : {
          "x" : 0,
          "y" : 0
        }
      },
      "crane" : {
        "x" : 0,
        "y" : 0,
        "offset" : {
          "x" : 0,
          "y" : 0
        }
      }
    },
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
      /** @type {number} */
      this["midPos"]["x"] = 0.5 * ig["system"]["width"];
      /** @type {number} */
      this["midPos"]["y"] = 0.5 * ig["system"]["height"];
      this["currCrane"] = this["cranesImg"][this["cranePick"]]["img"];
      this["btnLeft"] = ig["game"]["spawnEntity"](EntityButtonPick, 0.05 * ig["system"]["width"], 0.4 * ig["system"]["height"], {
        "handle" : this,
        "control" : this["control"],
        "btnPick" : "left"
      });
      this["btnRight"] = ig["game"]["spawnEntity"](EntityButtonPick, 0.8 * ig["system"]["width"], 0.4 * ig["system"]["height"], {
        "handle" : this,
        "control" : this["control"],
        "btnPick" : "right"
      });
      this["btnPlay"] = ig["game"]["spawnEntity"](EntityButtonPlay, 0.5 * ig["system"]["width"], 0.58 * ig["system"]["height"], {
        "handle" : this,
        "control" : this["control"]
      });
      this["drawPosition"]["panel"]["x"] = this["midPos"]["x"];
      this["drawPosition"]["panel"]["y"] = this["midPos"]["y"];
      /** @type {number} */
      this["drawPosition"]["panel"]["offset"]["x"] = 0.5 * this["popupImg"]["width"];
      /** @type {number} */
      this["drawPosition"]["panel"]["offset"]["y"] = 0.625 * this["popupImg"]["height"];
      this["drawPosition"]["crane"]["x"] = this["midPos"]["x"];
      this["drawPosition"]["crane"]["y"] = this["midPos"]["y"];
      /** @type {number} */
      this["drawPosition"]["crane"]["offset"]["x"] = 0.5 * this["popupImg"]["width"];
      /** @type {number} */
      this["drawPosition"]["crane"]["offset"]["y"] = 354;
      this["drawPosition"]["title"]["x"] = this["midPos"]["x"];
      /** @type {number} */
      this["drawPosition"]["title"]["y"] = this["midPos"]["y"] - 450;
      this["drawPosition"]["chooseClaw"]["x"] = this["midPos"]["x"];
      this["drawPosition"]["chooseClaw"]["y"] = this["midPos"]["y"] + 80;
      if (!ig["ua"]["mobile"]) {
        this["drawPosition"]["panel"]["x"] = this["midPos"]["x"];
        this["drawPosition"]["panel"]["y"] = this["midPos"]["y"];
        /** @type {number} */
        this["drawPosition"]["panel"]["offset"]["x"] = 0.5 * this["popupImg"]["width"];
        /** @type {number} */
        this["drawPosition"]["panel"]["offset"]["y"] = 0.43 * this["popupImg"]["height"];
        /** @type {number} */
        this["drawPosition"]["crane"]["offset"]["x"] = 0.5 * this["currCrane"]["width"];
        /** @type {number} */
        this["drawPosition"]["crane"]["offset"]["y"] = 0.38 * this["popupImg"]["height"];
        /** @type {number} */
        this["drawPosition"]["title"]["y"] = 70;
        this["drawPosition"]["chooseClaw"]["y"] = this["midPos"]["y"] + 180;
        /** @type {number} */
        this["btnPlay"]["pos"]["y"] = 0.8 * ig["system"]["height"];
        /** @type {number} */
        this["btnLeft"]["pos"]["x"] = 0.25 * ig["system"]["width"];
        /** @type {number} */
        this["btnRight"]["pos"]["x"] = 0.665 * ig["system"]["width"];
      }
    },
    "ready" : function() {
      ig["game"]["sortEntitiesDeferred"]();
    },
    "callBackClicked" : function(idAnswer) {
      this["imgNum"] += "left" == idAnswer ? -1 : 1;
      if (0 > this["imgNum"]) {
        /** @type {number} */
        this["imgNum"] = 4;
      }
      if (4 < this["imgNum"]) {
        /** @type {number} */
        this["imgNum"] = 0;
      }
      this["cranePick"] = this["arrayImg"][this["imgNum"]];
      this["currCrane"] = this["cranesImg"][this["cranePick"]]["img"];
    },
    "callBackClicking" : function() {
    },
    "play" : function() {
      console["log"]("hide popup crane");
      this["control"]["changeCrane"](this["cranePick"]);
      this["kill"]();
    },
    "kill" : function() {
      this["parent"]();
      this["btnLeft"]["kill"]();
      this["btnRight"]["kill"]();
      this["btnPlay"]["kill"]();
    },
    "update" : function() {
      this["parent"]();
      if (!this["checkFirstUpdate"]) {
        this["ready"]();
        /** @type {boolean} */
        this["checkFirstUpdate"] = true;
      }
    },
    "draw" : function() {
      this["parent"]();
      this["drawBGBlack"]();
      this["drawPannel"]();
      this["drawText"]();
      this["drawMidCrane"]();
    },
    "drawBGBlack" : function() {
      var options = ig["system"]["context"];
      options["save"]();
      /** @type {number} */
      options["globalAlpha"] = 0.8;
      /** @type {string} */
      options["fillStyle"] = "black";
      options["fillRect"](0, 0, ig["system"]["width"], ig["system"]["height"]);
      options["restore"]();
    },
    "drawPannel" : function() {
      this["popupImg"]["draw"](this["drawPosition"]["panel"]["x"] - this["drawPosition"]["panel"]["offset"]["x"], this["drawPosition"]["panel"]["y"] - this["drawPosition"]["panel"]["offset"]["y"]);
    },
    "drawText" : function() {
      var style = ig["system"]["context"];
      style["save"]();
      /** @type {string} */
      style["font"] = "70px semibold";
      /** @type {string} */
      style["textAlign"] = "center";
      /** @type {string} */
      style["textBaseLine"] = "middle";
      /** @type {string} */
      style["fillStyle"] = "white";
      style["fillText"](_STRINGS["Game"][this["textChoose"]], this["drawPosition"]["title"]["x"], this["drawPosition"]["title"]["y"]);
      style["restore"]();
    },
    "drawMidCrane" : function() {
      this["currCrane"]["draw"](this["drawPosition"]["crane"]["x"] - 0.5 * this["currCrane"]["width"], this["drawPosition"]["crane"]["y"] - this["drawPosition"]["crane"]["offset"]["y"]);
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("plugins.textinput-container")["defines"](function() {
  ig["TextinputContainer"] = ig["Class"]["extend"]({
    "containerName" : "text_input_container",
    "textInputName" : "text_input",
    "containerElement" : null,
    "textInputElement" : null,
    "textFontSize" : 14,
    "textFont" : "Impact, Charcoal, sans-serif",
    "maxTextLength" : 100,
    "defaultValue" : "",
    "pos" : {
      "x" : 0,
      "y" : 0
    },
    "rect" : {
      "x" : 0,
      "y" : 0,
      "w" : 0,
      "h" : 0
    },
    "inputType" : "text",
    "init" : function(layer, data, animation, component, undefined, mode, name, attr) {
      if (layer) {
        /** @type {string} */
        this["textInputName"] = layer;
        /** @type {string} */
        this["containerName"] = layer + "_container";
      }
      if (data) {
        this["textFontSize"] = data;
      }
      if (animation) {
        this["textFont"] = animation;
      }
      if (null != component) {
        this["maxTextLength"] = component;
      }
      if (null != undefined) {
        this["defaultValue"] = undefined;
      }
      if (!isNaN(mode) && !isNaN(name)) {
        this["setRect"](-mode / 2, -name / 2, mode, name);
      }
      if (attr) {
        this["inputType"] = attr;
      }
      this["spawnTextInput"]();
    },
    "setRect" : function(w, x, y, h) {
      if (!isNaN(w) && !isNaN(x) && (!isNaN(y) && !isNaN(h))) {
        this["rect"]["x"] = w;
        this["rect"]["y"] = x;
        this["rect"]["w"] = y;
        this["rect"]["h"] = h;
        this["updateElementPosition"]();
      }
    },
    "setPos" : function(value, i) {
      if (!isNaN(value) && !isNaN(i)) {
        this["pos"]["x"] = value;
        this["pos"]["y"] = i;
        this["updateElementPosition"]();
      }
    },
    "updateElementPosition" : function() {
      var index = this["containerName"];
      if (ig["domHandler"]["getElementById"]("#" + index)) {
        var value;
        var y;
        value = this["pos"]["x"] + this["rect"]["x"];
        y = this["pos"]["y"] + this["rect"]["y"];
        var img = this["rect"];
        var r = Math["min"](ig["sizeHandler"]["scaleRatioMultiplier"]["x"], ig["sizeHandler"]["scaleRatioMultiplier"]["y"]);
        var type = this["containerElement"];
        if (ig["ua"]["mobile"]) {
          var position = Math["floor"](value * ig["sizeHandler"]["scaleRatioMultiplier"]["x"]) + "px";
          var top = Math["floor"](y * ig["sizeHandler"]["scaleRatioMultiplier"]["y"]) + "px";
          var sizePx = Math["floor"](img["w"] * ig["sizeHandler"]["scaleRatioMultiplier"]["x"]) + "px";
          r = Math["floor"](img["h"] * ig["sizeHandler"]["scaleRatioMultiplier"]["y"]) + "px";
        } else {
          position = ig["domHandler"]["getElementById"]("#canvas");
          position = ig["domHandler"]["getOffsets"](position);
          top = position["top"];
          position = Math["floor"](position["left"] + value * r) + "px";
          top = Math["floor"](top + y * r) + "px";
          sizePx = Math["floor"](img["w"] * r) + "px";
          r = Math["floor"](img["h"] * r) + "px";
        }
        ig["domHandler"]["css"](type, {
          "float" : "left",
          "position" : "absolute",
          "left" : position,
          "top" : top,
          "width" : sizePx,
          "height" : r,
          "z-index" : 3
        });
        ig["sizeHandler"]["dynamicClickableEntityDivs"][index] = {};
        ig["sizeHandler"]["dynamicClickableEntityDivs"][index]["width"] = img["w"];
        ig["sizeHandler"]["dynamicClickableEntityDivs"][index]["height"] = img["h"];
        ig["sizeHandler"]["dynamicClickableEntityDivs"][index]["entity_pos_x"] = value;
        ig["sizeHandler"]["dynamicClickableEntityDivs"][index]["entity_pos_y"] = y;
      }
    },
    "show" : function() {
      if (this["containerElement"]) {
        ig["domHandler"]["show"](this["containerElement"]);
        ig["domHandler"]["show"](this["textInputElement"]);
      }
    },
    "hide" : function() {
      if (this["containerElement"]) {
        ig["domHandler"]["hide"](this["containerElement"]);
        ig["domHandler"]["hide"](this["textInputElement"]);
      }
    },
    "val" : function(value) {
      return !this["textInputElement"] ? "" : null == value ? this["textInputElement"]["val"]() : this["textInputElement"]["val"](value);
    },
    "isActive" : function() {
      return this["textInputElement"] ? this["textInputElement"][0] === document["activeElement"] : false;
    },
    "getInputSelection" : function() {
      /** @type {number} */
      var startPos = 0;
      /** @type {number} */
      var endPos = 0;
      var range = this["textInputElement"][0];
      var buffer;
      var options;
      var coords;
      if (!range) {
        return false;
      }
      if ("number" == typeof range["selectionStart"] && "number" == typeof range["selectionEnd"]) {
        startPos = range["selectionStart"];
        endPos = range["selectionEnd"];
      } else {
        if (document["selection"] && (options = document["selection"]["createRange"]()) && options["parentElement"]() == range) {
          coords = range["value"]["length"];
          buffer = range["value"]["replace"](/\r\n/g, "\n");
          endPos = range["createTextRange"]();
          endPos["moveToBookmark"](options["getBookmark"]());
          range = range["createTextRange"]();
          range["collapse"](false);
          if (-1 < endPos["compareEndPoints"]("StartToEnd", range)) {
            startPos = endPos = coords;
          } else {
            /** @type {number} */
            startPos = -endPos["moveStart"]("character", -coords);
            /** @type {number} */
            startPos = startPos + (buffer["slice"](0, startPos)["split"]("\n")["length"] - 1);
            if (-1 < endPos["compareEndPoints"]("EndToEnd", range)) {
              endPos = coords;
            } else {
              /** @type {number} */
              endPos = -endPos["moveEnd"]("character", -coords);
              /** @type {number} */
              endPos = endPos + (buffer["slice"](0, endPos)["split"]("\n")["length"] - 1);
            }
          }
        }
      }
      return {
        "start" : startPos,
        "end" : endPos
      };
    },
    "spawnTextInput" : function() {
      var s;
      var y;
      s = this["pos"]["x"] + this["rect"]["x"];
      y = this["pos"]["y"] + this["rect"]["y"];
      var img = this["rect"];
      var index = this["containerName"];
      var attr = this["textInputName"];
      var el = ig["domHandler"]["getElementById"]("#" + index);
      var options = ig["domHandler"]["getElementById"]("#" + attr);
      if (el && options) {
        this["containerElement"] = $("#" + index);
        this["textInputElement"] = $("#" + attr);
        ig["domHandler"]["show"](this["containerElement"]);
        ig["domHandler"]["show"](this["textInputElement"]);
      } else {
        el = ig["domHandler"]["create"]("div");
        ig["domHandler"]["attr"](el, "id", index);
        el["blur"](function(result) {
          result["stopPropagation"]();
        });
        this["containerElement"] = el;
        options = ig["domHandler"]["create"]("input");
        ig["domHandler"]["attr"](options, "id", attr);
        options["blur"](function(result) {
          result["stopPropagation"]();
        });
        this["textInputElement"] = options;
        var height = Math["min"](ig["sizeHandler"]["scaleRatioMultiplier"]["x"], ig["sizeHandler"]["scaleRatioMultiplier"]["y"]);
        /** @type {number} */
        var size = this["textFontSize"] * height;
        if (ig["ua"]["mobile"]) {
          var position = Math["floor"](s * ig["sizeHandler"]["scaleRatioMultiplier"]["x"]) + "px";
          var top = Math["floor"](y * ig["sizeHandler"]["scaleRatioMultiplier"]["y"]) + "px";
          var sizePx = Math["floor"](img["w"] * ig["sizeHandler"]["scaleRatioMultiplier"]["x"]) + "px";
          height = Math["floor"](img["h"] * ig["sizeHandler"]["scaleRatioMultiplier"]["y"]) + "px";
        } else {
          position = ig["domHandler"]["getElementById"]("#canvas");
          position = ig["domHandler"]["getOffsets"](position);
          top = position["top"];
          position = Math["floor"](position["left"] + s * height) + "px";
          top = Math["floor"](top + y * height) + "px";
          sizePx = Math["floor"](img["w"] * height) + "px";
          height = Math["floor"](img["h"] * height) + "px";
        }
        ig["domHandler"]["css"](el, {
          "float" : "left",
          "position" : "absolute",
          "left" : position,
          "top" : top,
          "width" : sizePx,
          "height" : height,
          "z-index" : 3
        });
        ig["domHandler"]["css"](options, {
          "width" : "100%",
          "height" : "100%",
          "font-family" : this["textFont"],
          "font-size" : size + "px",
          "z-index" : 3
        });
        ig["domHandler"]["css"](options, {});
        options["attr"]("maxlength", this["maxTextLength"]);
        options["attr"]("size", this["maxTextLength"]);
        options["attr"]("autocomplete", "off");
        options["attr"]("autocapitalize", "off");
        options["attr"]("autocorrect", "off");
        options["attr"]("type", this["inputType"]);
        options["val"](this["defaultValue"]);
        options["keyup"](function(isModifier) {
          if (13 == isModifier["keyCode"]) {
            this["textInputElement"]["blur"]();
          }
        }["bind"](this));
        ig["domHandler"]["addEvent"](el, "mousemove", ig["input"]["mousemove"]["bind"](ig["input"]), false);
        ig["domHandler"]["appendChild"](el, options);
        ig["domHandler"]["appendToBody"](el);
        ig["sizeHandler"]["dynamicClickableEntityDivs"][index] = {};
        ig["sizeHandler"]["dynamicClickableEntityDivs"][index]["width"] = img["w"];
        ig["sizeHandler"]["dynamicClickableEntityDivs"][index]["height"] = img["h"];
        ig["sizeHandler"]["dynamicClickableEntityDivs"][index]["entity_pos_x"] = s;
        ig["sizeHandler"]["dynamicClickableEntityDivs"][index]["entity_pos_y"] = y;
        ig["sizeHandler"]["dynamicClickableEntityDivs"][attr] = {};
        ig["sizeHandler"]["dynamicClickableEntityDivs"][attr]["font-size"] = this["textFontSize"];
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.ui.input-box")["requires"]("impact.entity", "plugins.textinput-container")["defines"](function() {
  EntityInputBox = ig["Entity"]["extend"]({
    "zIndex" : 20001,
    "size" : {
      "x" : 400,
      "y" : 100
    },
    "textInput" : null,
    "textInputPrefix" : "inputContainer_",
    "maxCharacter" : 30,
    "div_layer_name" : "email_input",
    "inputType" : "email",
    "inputFontSize" : 28,
    "inputFontType" : "medium",
    "inputFontColor" : "#000",
    "inputPadding" : 10,
    "defaultText" : "email@example.com",
    "textAlign" : "left",
    "textBaseline" : "middle",
    "color" : "#000",
    "visible" : false,
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
      this["cursorBlinkTimer"] = new ig["Timer"](0.5);
      /** @type {boolean} */
      this["showTextCursor"] = true;
    },
    "update" : function() {
      this["parent"]();
      if (this["textInput"] && this["textInput"]["isActive"]()) {
        if (0 <= this["cursorBlinkTimer"]["delta"]()) {
          this["cursorBlinkTimer"]["reset"]();
          /** @type {boolean} */
          this["showTextCursor"] = !this["showTextCursor"];
        }
        /** @type {boolean} */
        ig["sizeHandler"]["keyboardShowed"] = true;
      } else {
        if (this["textInput"] && !this["textInput"]["isActive"]()) {
          /** @type {boolean} */
          ig["sizeHandler"]["keyboardShowed"] = false;
        }
      }
    },
    "draw" : function() {
      this["parent"]();
      if (this["visible"]) {
        var options = ig["system"]["context"];
        options["save"]();
        /** @type {string} */
        options["strokeStyle"] = "rgba(0,0,0," + this["alpha"] + ")";
        /** @type {number} */
        options["lineWidth"] = 5;
        options["strokeRect"](this["pos"]["x"], this["pos"]["y"], this["size"]["x"], this["size"]["y"]);
        options["restore"]();
      }
    },
    "getInputText" : function() {
      return this["textInput"]["val"]();
    },
    "createInput" : function() {
      /** @type {boolean} */
      this["visible"] = true;
      if (!ig["game"][this["textInputPrefix"] + this["div_layer_name"]]) {
        ig["game"][this["textInputPrefix"] + this["div_layer_name"]] = new ig["TextinputContainer"](this["div_layer_name"], this["inputFontSize"], this["inputFontType"], this["maxCharacter"], this["defaultText"], this["size"]["x"] - 2 * this["inputPadding"], this["size"]["y"], this["inputType"]);
      }
      this["textInput"] = ig["game"][this["textInputPrefix"] + this["div_layer_name"]];
      this["textInput"]["setPos"](this["pos"]["x"] + 0.5 * this["size"]["x"] - this["inputPadding"], this["pos"]["y"] + 0.5 * this["size"]["y"]);
      ig["domHandler"]["css"](this["textInput"]["textInputElement"], {
        "margin" : "0px",
        "border" : "0px",
        "padding-left" : this["inputPadding"] + "px",
        "padding-right" : this["inputPadding"] + "px",
        "background" : "none",
        "color" : this["color"],
        "text-align" : this["textAlign"]
      });
      this["showInput"]();
      ig["sizeHandler"]["reorient"]();
    },
    "showInput" : function() {
      if (this["textInput"]) {
        this["textInput"]["show"]();
      }
    },
    "hideInput" : function() {
      if (this["textInput"]) {
        this["textInput"]["hide"]();
      }
      /** @type {boolean} */
      this["visible"] = false;
    },
    "kill" : function() {
      this["parent"]();
      this["hideInput"]();
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.buttons.button-submit")["requires"]("game.entities.buttons.button")["defines"](function() {
  EntityButtonSubmit = EntityButton["extend"]({
    "btnImg" : new ig["Image"]("media/graphics/sprites/popup/btn.png"),
    "zIndex" : 30010,
    "size" : new Vector2(448, 109),
    "text" : "Submit",
    "offsetText" : {
      "x" : 0,
      "y" : 0
    },
    "handler" : null,
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
    },
    "update" : function() {
      this["parent"]();
    },
    "changeText" : function(text) {
      this["text"] = text;
    },
    "clicked" : function() {
      ig["soundHandler"]["sfxPlayer"]["play"]("tapSound");
      var node = this["tween"]({
        "offset" : {
          "y" : -2
        },
        "offsetText" : {
          "y" : -2
        }
      }, 0.1);
      var val = this["tween"]({
        "offset" : {
          "y" : 0
        },
        "offsetText" : {
          "y" : 0
        }
      }, 0.1, {
        "onComplete" : function() {
          this["handler"]["submitEmail"]();
        }["bind"](this)
      });
      node["chain"](val);
      node["start"]();
    },
    "clicking" : function() {
    },
    "released" : function() {
    },
    "draw" : function() {
      this["parent"]();
      this["drawImage"]();
      this["drawText"]();
    },
    "drawImage" : function() {
      this["btnImg"]["draw"](this["pos"]["x"], this["pos"]["y"] - this["offset"]["y"]);
    },
    "drawText" : function() {
      var options = ig["system"]["context"];
      options["save"]();
      /** @type {string} */
      options["fillStyle"] = "#333333";
      /** @type {string} */
      options["font"] = "50px medium";
      /** @type {string} */
      options["textAlign"] = "center";
      /** @type {string} */
      options["textBaseLine"] = "middle";
      options["fillText"](_STRINGS["Game"][this["text"]], this["pos"]["x"] + 0.5 * this["size"]["x"], this["pos"]["y"] - this["offsetText"]["y"] + 0.6 * this["size"]["y"]);
      options["restore"]();
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.buttons.button-replay")["requires"]("game.entities.buttons.button")["defines"](function() {
  EntityButtonReplay = EntityButton["extend"]({
    "btnImg" : new ig["Image"]("media/graphics/sprites/popup/btn.png"),
    "zIndex" : 30010,
    "size" : new Vector2(448, 109),
    "text" : "replay",
    "offsetText" : {
      "x" : 0,
      "y" : 0
    },
    "handler" : null,
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
    },
    "update" : function() {
      this["parent"]();
    },
    "changeText" : function(text) {
      this["text"] = text;
    },
    "clicked" : function() {
      ig["soundHandler"]["sfxPlayer"]["play"]("tapSound");
      var node = this["tween"]({
        "offset" : {
          "y" : -2
        },
        "offsetText" : {
          "y" : -2
        }
      }, 0.1);
      var val = this["tween"]({
        "offset" : {
          "y" : 0
        },
        "offsetText" : {
          "y" : 0
        }
      }, 0.1, {
        "onComplete" : function() {
          this["handler"]["playAgain"]();
        }["bind"](this)
      });
      node["chain"](val);
      node["start"]();
    },
    "clicking" : function() {
    },
    "released" : function() {
    },
    "draw" : function() {
      this["parent"]();
      this["drawImage"]();
      this["drawText"]();
    },
    "drawImage" : function() {
      this["btnImg"]["draw"](this["pos"]["x"], this["pos"]["y"] - this["offset"]["y"]);
    },
    "drawText" : function() {
      var options = ig["system"]["context"];
      options["save"]();
      /** @type {string} */
      options["fillStyle"] = "#333333";
      /** @type {string} */
      options["font"] = "50px medium";
      /** @type {string} */
      options["textAlign"] = "center";
      /** @type {string} */
      options["textBaseLine"] = "middle";
      options["fillText"](_STRINGS["Game"][this["text"]], this["pos"]["x"] + 0.5 * this["size"]["x"], this["pos"]["y"] - this["offset"]["y"] + 0.6 * this["size"]["y"]);
      options["restore"]();
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.buttons.button-claim")["requires"]("game.entities.buttons.button")["defines"](function() {
  EntityButtonClaim = EntityButton["extend"]({
    "btnImg" : new ig["Image"]("media/graphics/sprites/popup/btn.png"),
    "zIndex" : 30010,
    "size" : new Vector2(448, 109),
    "text" : "Claim",
    "offsetText" : {
      "x" : 0,
      "y" : 0
    },
    "handler" : null,
    "setTimer" : null,
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
      this["setTimer"] = new ig["Timer"];
      this["setTimer"]["set"](1);
    },
    "update" : function() {
      this["parent"]();
    },
    "changeText" : function(text) {
      this["text"] = text;
    },
    "clicked" : function() {
      if (!(0 > this["setTimer"]["delta"]())) {
        ig["soundHandler"]["sfxPlayer"]["play"]("tapSound");
        var node = this["tween"]({
          "offset" : {
            "y" : -2
          },
          "offsetText" : {
            "y" : -2
          }
        }, 0.1);
        var val = this["tween"]({
          "offset" : {
            "y" : 0
          },
          "offsetText" : {
            "y" : 0
          }
        }, 0.1, {
          "onComplete" : function() {
            this["handler"]["changeScreen"](1);
          }["bind"](this)
        });
        node["chain"](val);
        node["start"]();
      }
    },
    "clicking" : function() {
    },
    "released" : function() {
    },
    "draw" : function() {
      this["parent"]();
      this["drawImage"]();
      this["drawText"]();
    },
    "drawImage" : function() {
      this["btnImg"]["draw"](this["pos"]["x"], this["pos"]["y"] - this["offset"]["y"]);
    },
    "drawText" : function() {
      var options = ig["system"]["context"];
      options["save"]();
      /** @type {string} */
      options["fillStyle"] = "#333333";
      /** @type {string} */
      options["font"] = "50px medium";
      /** @type {string} */
      options["textAlign"] = "center";
      /** @type {string} */
      options["textBaseLine"] = "middle";
      options["fillText"](_STRINGS["Game"][this["text"]], this["pos"]["x"] + 0.5 * this["size"]["x"], this["pos"]["y"] - this["offsetText"]["y"] + 0.6 * this["size"]["y"]);
      options["restore"]();
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.ui.popup-endgame")["requires"]("impact.entity", "game.entities.ui.input-box", "game.entities.buttons.button-submit", "game.entities.buttons.button-replay", "game.entities.buttons.button-claim")["defines"](function() {
  EntityPopupEndgame = ig["Entity"]["extend"]({
    "zIndex" : 2E4,
    "alpha" : 0.6,
    "screenGalpha" : 1,
    "isTweening" : false,
    "popupImg" : new ig["Image"]("media/graphics/sprites/popup/panel.png"),
    "ballglowImg" : new ig["Image"]("media/graphics/sprites/popup/ball-glow.png"),
    "midPos" : {
      "x" : 0,
      "y" : 0
    },
    "checkFirstUpdate" : false,
    "text1" : "Congrats",
    "text2" : "Win",
    "state" : "win",
    "posText" : {
      "x1" : 0,
      "y1" : 0,
      "x2" : 0,
      "y2" : 0
    },
    "ballImg" : null,
    "drawPosition" : {
      "panel" : {
        "x" : 0,
        "y" : 0,
        "offset" : {
          "x" : 0,
          "y" : 0
        }
      },
      "crane" : {
        "x" : 0,
        "y" : 0,
        "offset" : {
          "x" : 0,
          "y" : 0
        }
      },
      "ball" : {
        "offset" : {
          "x" : 0,
          "y" : 0
        }
      }
    },
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
      /** @type {number} */
      this["midPos"]["x"] = 0.5 * ig["system"]["width"];
      /** @type {number} */
      this["midPos"]["y"] = 0.5 * ig["system"]["height"];
      this["posText"] = {
        "x1" : this["midPos"]["x"],
        "y1" : this["midPos"]["y"] - 250,
        "x2" : this["midPos"]["x"],
        "y2" : this["midPos"]["y"] - 200
      };
      this["btnClaim"] = ig["game"]["spawnEntity"](EntityButtonClaim, this["midPos"]["x"] - 224, this["midPos"]["y"] + 60, {
        "handler" : this
      });
      this["input"] = ig["game"]["spawnEntity"](EntityInputBox, this["midPos"]["x"] - 200, this["midPos"]["y"] - 80);
      this["drawPosition"]["panel"]["x"] = this["midPos"]["x"];
      this["drawPosition"]["panel"]["y"] = this["midPos"]["y"];
      /** @type {number} */
      this["drawPosition"]["panel"]["offset"]["x"] = 0.5 * this["popupImg"]["width"];
      /** @type {number} */
      this["drawPosition"]["panel"]["offset"]["y"] = 0.625 * this["popupImg"]["height"];
      /** @type {number} */
      this["drawPosition"]["ball"]["offset"]["x"] = 0;
      /** @type {number} */
      this["drawPosition"]["ball"]["offset"]["y"] = 60;
      if (!ig["ua"]["mobile"]) {
        this["drawPosition"]["panel"]["x"] = this["midPos"]["x"];
        this["drawPosition"]["panel"]["y"] = this["midPos"]["y"];
        /** @type {number} */
        this["drawPosition"]["panel"]["offset"]["x"] = 0.5 * this["popupImg"]["width"];
        /** @type {number} */
        this["drawPosition"]["panel"]["offset"]["y"] = 0.5 * this["popupImg"]["height"];
        this["posText"] = {
          "x1" : this["midPos"]["x"],
          "y1" : this["midPos"]["y"] - 200,
          "x2" : this["midPos"]["x"],
          "y2" : this["midPos"]["y"] - 150
        };
        /** @type {number} */
        this["drawPosition"]["ball"]["offset"]["y"] = 10;
        /** @type {number} */
        this["btnClaim"]["pos"]["y"] = 0.7 * ig["system"]["height"];
        this["input"]["pos"]["y"] = this["midPos"]["y"];
      }
    },
    "ready" : function() {
      ig["game"]["sortEntitiesDeferred"]();
      ig["soundHandler"]["sfxPlayer"]["play"]("congratsSound");
    },
    "update" : function() {
      this["parent"]();
      if (!this["checkFirstUpdate"]) {
        this["ready"]();
        /** @type {boolean} */
        this["checkFirstUpdate"] = true;
      }
    },
    "changePopupText" : function() {
      /** @type {string} */
      this["text1"] = "enterEmail";
      /** @type {string} */
      this["text2"] = "claimPrize";
      /** @type {string} */
      this["state"] = "submit";
      this["btnClaim"]["kill"]();
      this["btnSubmit"] = ig["game"]["spawnEntity"](EntityButtonSubmit, this["midPos"]["x"] - 224, this["midPos"]["y"] + 60, {
        "handler" : this
      });
      if (!ig["ua"]["mobile"]) {
        /** @type {number} */
        this["btnSubmit"]["pos"]["y"] = 0.7 * ig["system"]["height"];
      }
    },
    "afterCPT" : function(canCreateDiscussions) {
      this["tween"]({
        "screenGalpha" : 1
      }, 0.1, {
        "delay" : 0.05,
        "onComplete" : function() {
          if (1 == canCreateDiscussions) {
            this["input"]["createInput"]();
          }
          /** @type {boolean} */
          this["isTweening"] = false;
        }["bind"](this)
      })["start"]();
    },
    "changeScreen" : function(Screen) {
      if (!this["isTweening"]) {
        this["tween"]({
          "screenGalpha" : 0
        }, 0.2, {
          "onComplete" : function() {
            if (1 == Screen) {
              this["changePopupText"]();
            } else {
              if (2 == Screen) {
                this["showThankScene"]();
              }
            }
            this["afterCPT"](Screen);
          }["bind"](this)
        })["start"]();
        /** @type {boolean} */
        this["isTweening"] = true;
      }
    },
    "playAgain" : function() {
      ig["game"]["director"]["jumpTo"](LevelMainmenu);
    },
    "postAttempt" : 0,
    "maxPostAttempt" : 3,
    "submitEmail" : function(email) {
      if (_ENABLE_SMS) {
        $["ajax"]({
          "type" : "POST",
          "url" : _CORS_API + _POST_URL,
          "data" : {
            "email" : email,
            "game_id" : _GAME_ID
          }
        })["done"](function(text) {
          console["log"]("Response: " + text);
          this["showThankScene"]();
        }["bind"](this))["fail"](function(canCreateDiscussions, bbls) {
          console["log"]("Request Error");
          if (this["postAttempt"] <= this["maxPostAttempt"]) {
            this["postAttempt"]++;
            console["log"]("Attempt: " + this["postAttempt"]);
            this["submitEmail"](email);
          } else {
            this["showThankScene"]();
            alert(bbls);
          }
        }["bind"](this));
      } else {
        this["changeScreen"](2);
      }
    },
    "showThankScene" : function() {
      this["btnSubmit"]["kill"]();
      this["input"]["hideInput"]();
      /** @type {string} */
      this["text1"] = "thanks";
      /** @type {string} */
      this["text2"] = "forSubmit";
      /** @type {string} */
      this["state"] = "thanks";
      this["btnReplay"] = ig["game"]["spawnEntity"](EntityButtonReplay, this["midPos"]["x"] - 224, this["midPos"]["y"] + 60, {
        "handler" : this
      });
      this["posText"] = {
        "x1" : this["midPos"]["x"],
        "y1" : this["midPos"]["y"] - 125,
        "x2" : this["midPos"]["x"],
        "y2" : this["midPos"]["y"] - 75
      };
      if (!ig["ua"]["mobile"]) {
        /** @type {number} */
        this["btnReplay"]["pos"]["y"] = 0.7 * ig["system"]["height"];
      }
    },
    "draw" : function() {
      this["parent"]();
      this["drawBGBlack"]();
      this["drawPannel"]();
      var options = ig["system"]["context"];
      options["save"]();
      options["globalAlpha"] = this["screenGalpha"];
      this["drawText"]();
      if ("win" == this["state"]) {
        this["drawBallMid"]();
      }
      options["restore"]();
    },
    "drawBGBlack" : function() {
      var options = ig["system"]["context"];
      options["save"]();
      /** @type {number} */
      options["globalAlpha"] = 0.8;
      /** @type {string} */
      options["fillStyle"] = "black";
      options["fillRect"](0, 0, ig["system"]["width"], ig["system"]["height"]);
      options["restore"]();
    },
    "drawPannel" : function() {
      this["popupImg"]["draw"](this["drawPosition"]["panel"]["x"] - this["drawPosition"]["panel"]["offset"]["x"], this["drawPosition"]["panel"]["y"] - this["drawPosition"]["panel"]["offset"]["y"]);
    },
    "drawText" : function() {
      var style = ig["system"]["context"];
      style["save"]();
      /** @type {string} */
      style["font"] = "44px heavy";
      if ("submit" == this["state"] || "thanks" == this["state"]) {
        /** @type {string} */
        style["font"] = "44px medium";
      }
      /** @type {string} */
      style["textAlign"] = "center";
      /** @type {string} */
      style["textBaseLine"] = "middle";
      /** @type {string} */
      style["fillStyle"] = "white";
      style["fillText"](_STRINGS["Game"][this["text1"]], this["posText"]["x1"], this["posText"]["y1"]);
      /** @type {string} */
      style["font"] = "36px medium";
      if ("submit" == this["state"] || "thanks" == this["state"]) {
        /** @type {string} */
        style["font"] = "44px medium";
      }
      style["fillText"](_STRINGS["Game"][this["text2"]], this["posText"]["x2"], this["posText"]["y2"]);
      style["restore"]();
    },
    "drawBallMid" : function() {
      if (this["ballImg"]) {
        this["ballglowImg"]["draw"](this["midPos"]["x"] - 0.5 * this["ballglowImg"]["width"], this["midPos"]["y"] - this["drawPosition"]["ball"]["offset"]["y"] - 0.5 * this["ballglowImg"]["height"]);
        this["ballImg"]["draw"](this["midPos"]["x"] - 0.5 * this["ballImg"]["width"], this["midPos"]["y"] - this["drawPosition"]["ball"]["offset"]["y"] - 0.5 * this["ballImg"]["height"]);
      }
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.controller.game-control")["requires"]("impact.entity", "game.entities.background", "game.entities.crane", "game.entities.ball", "game.entities.ball-pile", "game.entities.ui.btn-ui-control", "game.entities.ui.popup-pickcrane", "game.entities.ui.popup-endgame")["defines"](function() {
  EntityGameControl = ig["Entity"]["extend"]({
    "zIndex" : 1,
    "size" : new Vector2(20, 20),
    "bg" : null,
    "layerBallsBack" : [],
    "layerBallsMid" : [],
    "layerBallsFront" : [],
    "gameStart" : false,
    "gameDone" : false,
    "delayAnimationEnd" : false,
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
      this["bg"] = ig["game"]["spawnEntity"](EntityBackground, 0, 0, {
        "control" : this
      });
      this["ballPile"] = ig["game"]["spawnEntity"](EntityBallPile, 0, ig["system"]["height"] - 609, {
        "control" : this
      });
      this["crane"] = ig["game"]["spawnEntity"](EntityCrane, 0, -500, {
        "control" : this
      });
      this["spawnBalls"]();
      this["pointer"] = ig["game"]["spawnEntity"](EntityPointerSelector, 50, 50);
      this["popupPickCrane"] = ig["game"]["spawnEntity"](EntityPopupPickcrane, 0, 0, {
        "control" : this
      });
      this["btnSound"] = ig["game"]["spawnEntity"](EntityButtonSound, ig["system"]["width"] - 100, 20, {
        "control" : this
      });
      ig["game"]["control"] = this;
      ig["game"]["sortEntitiesDeferred"]();
    },
    "ready" : function() {
    },
    "spawnBalls" : function() {
      var json;
      var lines;
      if (ig["ua"]["mobile"]) {
        /** @type {number} */
        var _0x106064 = 0;
        for (; 60 > _0x106064; _0x106064++) {
          json = this["randMinMaxInt"](-150, 700);
          lines = this["randMinMaxInt"](650, 1150);
          json = ig["game"]["spawnEntity"](EntityBall, json, lines, {
            "control" : this,
            "ballPick" : "random"
          });
          /** @type {number} */
          json["zIndex"] = 10011;
          this["layerBallsMid"]["push"](json);
        }
        /** @type {number} */
        _0x106064 = 0;
        for (; 20 > _0x106064; _0x106064++) {
          json = this["randMinMaxInt"](-10, 580);
          lines = this["randMinMaxInt"](650, 1150);
          json = ig["game"]["spawnEntity"](EntityBall, json, lines, {
            "control" : this,
            "ballPick" : "random"
          });
          /** @type {number} */
          json["zIndex"] = 10013;
          this["layerBallsFront"]["push"](json);
        }
      } else {
        /** @type {number} */
        _0x106064 = 0;
        for (; 60 > _0x106064; _0x106064++) {
          json = this["randMinMaxInt"](-150, 1250);
          lines = this["randMinMaxInt"](450, 700);
          json = ig["game"]["spawnEntity"](EntityBall, json, lines, {
            "control" : this,
            "ballPick" : "random"
          });
          /** @type {number} */
          json["zIndex"] = 10011;
          this["layerBallsMid"]["push"](json);
        }
        /** @type {number} */
        _0x106064 = 0;
        for (; 20 > _0x106064; _0x106064++) {
          json = this["randMinMaxInt"](-10, 1E3);
          lines = this["randMinMaxInt"](450, 700);
          json = ig["game"]["spawnEntity"](EntityBall, json, lines, {
            "control" : this,
            "ballPick" : "random"
          });
          /** @type {number} */
          json["zIndex"] = 10013;
          this["layerBallsFront"]["push"](json);
        }
      }
    },
    "changeCrane" : function(mmCoreSplitViewBlock) {
      this["crane"]["changeCraneImg"](mmCoreSplitViewBlock);
      this["crane"]["tweenDownToShow"](this["gameStart"]);
      this["uiBtnHandler"] = ig["game"]["spawnEntity"](EntityBtnUiControl, 0, ig["system"]["height"] - 230, {
        "control" : this
      });
      ig["game"]["sortEntitiesDeferred"]();
    },
    "setGameReady" : function() {
      /** @type {boolean} */
      this["gameStart"] = true;
    },
    "randMinMaxInt" : function(t, l) {
      t = Math["ceil"](t);
      l = Math["floor"](l);
      return Math["floor"](Math["random"]() * (l - t)) + t;
    },
    "update" : function() {
      this["parent"]();
      if (!this["delayAnimationEnd"]) {
        if (ig["input"]["state"]("moveleft")) {
          if (this["crane"]["istweening"]) {
            return;
          }
          this["crane"]["move"]("left");
        } else {
          if (ig["input"]["state"]("moveright")) {
            if (this["crane"]["istweening"]) {
              return;
            }
            this["crane"]["move"]("right");
          } else {
            this["crane"]["move"]("stop");
          }
        }
        if (ig["input"]["pressed"]("shoot")) {
          this["crane"]["tweenDown"]();
        }
      }
    },
    "waitEndGame" : function() {
      /** @type {boolean} */
      this["delayAnimationEnd"] = true;
      this["tween"]({}, 0.7, {
        "onComplete" : function() {
          this["endGame"]();
        }["bind"](this)
      })["start"]();
    },
    "endGame" : function() {
      ig["game"]["spawnEntity"](EntityPopupEndgame, 0, 0, {
        "control" : this,
        "ballImg" : this["crane"]["ballImg"]
      });
      this["uiBtnHandler"]["kill"]();
      /** @type {boolean} */
      this["gameDone"] = true;
    },
    "draw" : function() {
      this["parent"]();
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.levels.game")["requires"]("impact.image", "game.entities.controller.game-control")["defines"](function() {
  LevelGame = {
    "entities" : [{
      "type" : "EntityGameControl",
      "x" : 24,
      "y" : 20
    }],
    "layer" : []
  };
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.buttons.button-sound")["requires"]("game.entities.buttons.button")["defines"](function() {
  EntityButtonSound = EntityButton["extend"]({
    "type" : ig["Entity"]["TYPE"]["A"],
    "gravityFactor" : 0,
    "currImg" : null,
    "zIndex" : 20001,
    "size" : {
      "x" : 84,
      "y" : 83
    },
    "btnsImg" : {
      "on" : {
        "img" : new ig["Image"]("media/graphics/sprites/btn-sound-on.png")
      },
      "off" : {
        "img" : new ig["Image"]("media/graphics/sprites/btn-sound-off.png")
      }
    },
    "soundStatus" : "on",
    "name" : "soundtest",
    "offset" : {
      "x" : 0,
      "y" : 0
    },
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
      /** @type {string} */
      this["soundStatus"] = 0 < ig["game"]["load"]("sound") ? "on" : "off";
      this["currImg"] = this["btnsImg"][this["soundStatus"]]["img"];
    },
    "draw" : function() {
      this["parent"]();
      this["currImg"]["draw"](this["pos"]["x"], this["pos"]["y"] - this["offset"]["y"]);
    },
    "clicked" : function() {
      if ("on" == this["soundStatus"]) {
        ig["soundHandler"]["muteAll"](true);
        /** @type {string} */
        this["soundStatus"] = "off";
        this["currImg"] = this["btnsImg"][this["soundStatus"]]["img"];
        ig["game"]["save"]("sound", 0);
      } else {
        ig["soundHandler"]["unmuteAll"](true);
        /** @type {string} */
        this["soundStatus"] = "on";
        this["currImg"] = this["btnsImg"][this["soundStatus"]]["img"];
        ig["game"]["save"]("sound", 0.5);
      }
      var node = this["tween"]({
        "offset" : {
          "y" : -2
        }
      }, 0.1);
      var val = this["tween"]({
        "offset" : {
          "y" : 0
        }
      }, 0.1);
      node["chain"](val);
      node["start"]();
      ig["soundHandler"]["sfxPlayer"]["play"]("tapSound");
    },
    "clicking" : function() {
    },
    "released" : function() {
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.test")["requires"]("impact.entity")["defines"](function() {
  EntityTest = ig["Entity"]["extend"]({
    "zIndex" : 99999,
    "pos" : new Vector2(0, 0),
    "size" : new Vector2(20, 20),
    "color" : new ColorRGB(125, 255, 125, 1),
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
    },
    "update" : function() {
      this["parent"]();
    },
    "draw" : function() {
      this["parent"]();
      var options = ig["system"]["context"];
      options["fillStyle"] = this["color"]["getHex"]();
      options["fillRect"](this["pos"]["x"], this["pos"]["y"], this["size"]["x"], this["size"]["y"]);
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.entities.test-control")["requires"]("impact.entity", "game.entities.test")["defines"](function() {
  EntityTestControl = ig["Entity"]["extend"]({
    "zIndex" : 99999,
    "size" : new Vector2(20, 20),
    "testEnt" : null,
    "tween" : null,
    "init" : function(flightPhase, navigationLibrary, airportController) {
      this["parent"](flightPhase, navigationLibrary, airportController);
      if (!ig["global"]["wm"]) {
        ig["game"]["testControl"] = this;
        this["initTestCase3"]();
        ig["game"]["spawnEntity"](ig["FullscreenButton"], 5, 5, {
          "enterImage" : new ig["Image"]("media/graphics/misc/enter-fullscreen-transparent.png"),
          "exitImage" : new ig["Image"]("media/graphics/misc/exit-fullscreen-transparent.png")
        });
      }
    },
    "initTestCase1" : function() {
      /** @type {boolean} */
      this["initTestCase1Initialized"] = true;
      this["testEnt"] = ig["game"]["spawnEntity"](EntityTest, 200, 200);
      this["tweenSlow"] = (new ig["TweenDef"](this["testEnt"]["pos"]))["to"]({
        "x" : 100,
        "y" : 100
      }, 2E3)["easing"](ig["Tween"]["Easing"]["Bounce"]["EaseOut"])["interpolation"](ig["Tween"]["Interpolation"]["Bezier"])["repeat"](2)["yoyo"](true);
      this["tweenFast"] = (new ig["TweenDef"](this["testEnt"]["pos"]))["to"]({
        "x" : 300,
        "y" : 300
      }, 500)["repeat"](4)["yoyo"](true);
      this["tweenSlow"]["chain"](this["tweenFast"]);
      this["tweenFast"]["chain"](this["tweenSlow"]);
      this["tweenFast"]["start"]();
    },
    "initTestCase2" : function() {
      /** @type {boolean} */
      this["initTestCase2Initialized"] = true;
      this["coordsTween"] = (new ig["TweenDef"]({
        "x" : 0,
        "y" : 0
      }))["to"]({
        "x" : 100,
        "y" : 100
      }, 1E3)["easing"](ig["Tween"]["Easing"]["Bounce"]["EaseInOut"])["onStart"](function(body) {
        console["log"]("Start", body);
        this["coordsTween"]["pause"]();
      }["bind"](this))["onUpdate"](function() {
        if (0.5 <= this["coordsTween"]["_currentElapsed"]) {
          this["coordsTween"]["stop"]();
        }
      }["bind"](this))["onStop"](function(body) {
        console["log"]("Stop", body);
      }["bind"](this))["onComplete"](function(body) {
        console["log"]("Complete", body);
      }["bind"](this))["onPause"](function(body) {
        console["log"]("Pause", body);
        this["coordsTween"]["resume"]();
      }["bind"](this))["onResume"](function(body) {
        console["log"]("Resume", body);
      }["bind"](this))["start"]();
    },
    "initTestCase3" : function() {
      /** @type {boolean} */
      this["initTestCase3Initialized"] = true;
      this["spawnTweenEntity"]();
      this["spawnTweenControlButtons"]();
    },
    "initTestCase4" : function() {
      /** @type {boolean} */
      this["initTestCase4Initialized"] = true;
      this["testEntityA"] = ig["game"]["spawnEntity"](EntityTest, 450, 200, {
        "control" : this,
        "size" : new Vector2(20, 40)
      });
      this["testEntityB"] = ig["game"]["spawnEntity"](EntityTest, 475, 200, {
        "control" : this,
        "size" : new Vector2(40, 20)
      });
      /** @type {number} */
      this["testEntityB"]["color"]["r"] = 255;
      /** @type {number} */
      this["testEntityB"]["color"]["g"] = 0;
      /** @type {number} */
      this["testEntityB"]["color"]["b"] = 0;
    },
    "spawnTweenEntity" : function() {
      this["tweenEntity"] = ig["game"]["spawnEntity"](EntityTest, 895, 49, {
        "control" : this,
        "color" : new ColorRGB(255, 125, 125, 1)
      });
      this["tweenControl"] = (new ig["TweenDef"](this["tweenEntity"]["pos"]))["to"]({
        "y" : 330
      }, 5E3);
    },
    "spawnTweenControlButtons" : function() {
      this["tweenControlButtons"] = {
        "start" : ig["game"]["spawnEntity"](EntityButton, 800, 50, {
          "control" : this,
          "size" : new Vector2(68, 48),
          "color" : new ColorRGB(255, 125, 125, 1)
        }),
        "stop" : ig["game"]["spawnEntity"](EntityButton, 800, 100, {
          "control" : this,
          "size" : new Vector2(68, 48),
          "color" : new ColorRGB(255, 125, 125, 1)
        }),
        "pause" : ig["game"]["spawnEntity"](EntityButton, 800, 150, {
          "control" : this,
          "size" : new Vector2(68, 48),
          "color" : new ColorRGB(255, 125, 125, 1)
        }),
        "resume" : ig["game"]["spawnEntity"](EntityButton, 800, 200, {
          "control" : this,
          "size" : new Vector2(68, 48),
          "color" : new ColorRGB(255, 125, 125, 1)
        }),
        "end" : ig["game"]["spawnEntity"](EntityButton, 800, 250, {
          "control" : this,
          "size" : new Vector2(68, 48),
          "color" : new ColorRGB(255, 125, 125, 1)
        }),
        "pGame" : ig["game"]["spawnEntity"](EntityButton, 800, 300, {
          "control" : this,
          "size" : new Vector2(68, 48),
          "color" : new ColorRGB(255, 125, 125, 1)
        })
      };
      this["setupTweenControlButtons"]();
    },
    "setupTweenControlButtons" : function() {
      /** @type {null} */
      var options = null;
      for (buttonKey in this["tweenControlButtons"]) {
        options = this["tweenControlButtons"][buttonKey];
        /** @type {string} */
        options["name"] = buttonKey;
        options["backgroundColor"] = options["color"]["getStyle"]();
        options["foregroundColor"] = options["color"]["getInvertedColor"]()["getStyle"]();
        /**
         * @return {undefined}
         */
        options["draw"] = function() {
          ig["system"]["context"]["fillStyle"] = this["backgroundColor"];
          ig["system"]["context"]["fillRect"](this["pos"]["x"], this["pos"]["y"], this["size"]["x"], this["size"]["y"]);
          ig["system"]["context"]["fillStyle"] = this["foregroundColor"];
          /** @type {string} */
          ig["system"]["context"]["font"] = "18px Arial";
          /** @type {string} */
          ig["system"]["context"]["textBaseline"] = "middle";
          /** @type {string} */
          ig["system"]["context"]["textAlign"] = "center";
          ig["system"]["context"]["fillText"](this["name"], this["pos"]["x"] + 0.5 * this["size"]["x"], this["pos"]["y"] + 0.5 * this["size"]["y"]);
        };
      }
      /**
       * @return {undefined}
       */
      this["tweenControlButtons"]["start"]["clicked"] = function() {
        console["log"]("start");
        this["control"]["tweenControl"]["start"]();
      };
      /**
       * @return {undefined}
       */
      this["tweenControlButtons"]["start"]["clicking"] = function() {
      };
      /**
       * @return {undefined}
       */
      this["tweenControlButtons"]["start"]["released"] = function() {
      };
      /**
       * @return {undefined}
       */
      this["tweenControlButtons"]["stop"]["clicked"] = function() {
        console["log"]("stop");
        this["control"]["tweenControl"]["stop"]();
      };
      /**
       * @return {undefined}
       */
      this["tweenControlButtons"]["stop"]["clicking"] = function() {
      };
      /**
       * @return {undefined}
       */
      this["tweenControlButtons"]["stop"]["released"] = function() {
      };
      /**
       * @return {undefined}
       */
      this["tweenControlButtons"]["pause"]["clicked"] = function() {
        console["log"]("pause");
        this["control"]["tweenControl"]["pause"]();
      };
      /**
       * @return {undefined}
       */
      this["tweenControlButtons"]["pause"]["clicking"] = function() {
      };
      /**
       * @return {undefined}
       */
      this["tweenControlButtons"]["pause"]["released"] = function() {
      };
      /**
       * @return {undefined}
       */
      this["tweenControlButtons"]["resume"]["clicked"] = function() {
        console["log"]("resume");
        this["control"]["tweenControl"]["resume"]();
      };
      /**
       * @return {undefined}
       */
      this["tweenControlButtons"]["resume"]["clicking"] = function() {
      };
      /**
       * @return {undefined}
       */
      this["tweenControlButtons"]["resume"]["released"] = function() {
      };
      /**
       * @return {undefined}
       */
      this["tweenControlButtons"]["end"]["clicked"] = function() {
        console["log"]("end");
        this["control"]["tweenControl"]["end"]();
      };
      /**
       * @return {undefined}
       */
      this["tweenControlButtons"]["end"]["clicking"] = function() {
      };
      /**
       * @return {undefined}
       */
      this["tweenControlButtons"]["end"]["released"] = function() {
      };
      /**
       * @return {undefined}
       */
      this["tweenControlButtons"]["pGame"]["clicked"] = function() {
        ig["game"]["pauseGame"]();
      };
      /**
       * @return {undefined}
       */
      this["tweenControlButtons"]["pGame"]["clicking"] = function() {
      };
      /**
       * @return {undefined}
       */
      this["tweenControlButtons"]["pGame"]["released"] = function() {
      };
    },
    "update" : function() {
      this["parent"]();
    },
    "draw" : function() {
      this["parent"]();
      if (true === this["testCase3Initialized"]) {
        this["drawTestCase3Info"]();
      }
    },
    "drawTestCase3Info" : function() {
    }
  });
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.levels.test-desktop")["requires"]("impact.image", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.pointer", "game.entities.buttons.button-sound", "game.entities.test-control")["defines"](function() {
  LevelTestDesktop = {
    "entities" : [{
      "type" : "EntityBrandingLogoPlaceholder",
      "x" : 296,
      "y" : 396,
      "settings" : {
        "div_layer_name" : "layer_mainmenu",
        "centralize" : "true"
      }
    }, {
      "type" : "EntityButtonMoreGames",
      "x" : 580,
      "y" : 284,
      "settings" : {
        "div_layer_name" : "layer_moregames_mainmenu"
      }
    }, {
      "type" : "EntityPointer",
      "x" : 608,
      "y" : 120
    }, {
      "type" : "EntityButtonSound",
      "x" : 332,
      "y" : 284
    }, {
      "type" : "EntityTestControl",
      "x" : 0,
      "y" : 0
    }],
    "layer" : [{
      "name" : "background",
      "width" : 16,
      "height" : 9,
      "linkWithCollision" : false,
      "visible" : 1,
      "tilesetName" : "media/graphics/backgrounds/desktop/background.jpg",
      "repeat" : false,
      "preRender" : true,
      "distance" : "1",
      "tilesize" : 60,
      "foreground" : false,
      "data" : [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48], [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64], [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80], [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96], [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112], [113, 114, 115, 116, 
      117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128], [129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144]]
    }]
  };
  /** @type {!Array} */
  LevelTestDesktopResources = [new ig["Image"]("media/graphics/backgrounds/desktop/background.jpg")];
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.levels.test-mobile")["requires"]("impact.image", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.pointer", "game.entities.buttons.button-sound", "game.entities.test-control")["defines"](function() {
  LevelTestMobile = {
    "entities" : [{
      "type" : "EntityBrandingLogoPlaceholder",
      "x" : 216,
      "y" : 548,
      "settings" : {
        "div_layer_name" : "layer_mainmenu",
        "centralize" : "true"
      }
    }, {
      "type" : "EntityButtonMoreGames",
      "x" : 238,
      "y" : 625,
      "settings" : {
        "div_layer_name" : "layer_moregames_mainmenu"
      }
    }, {
      "type" : "EntityPointer",
      "x" : 444,
      "y" : 192
    }, {
      "type" : "EntityButtonSound",
      "x" : 245,
      "y" : 490
    }, {
      "type" : "EntityTestControl",
      "x" : 0,
      "y" : 0
    }],
    "layer" : [{
      "name" : "background",
      "width" : 9,
      "height" : 16,
      "linkWithCollision" : false,
      "visible" : 1,
      "tilesetName" : "media/graphics/backgrounds/mobile/background.jpg",
      "repeat" : false,
      "preRender" : true,
      "distance" : "1",
      "tilesize" : 60,
      "foreground" : false,
      "data" : [[1, 2, 3, 4, 5, 6, 7, 8, 9], [10, 11, 12, 13, 14, 15, 16, 17, 18], [19, 20, 21, 22, 23, 24, 25, 26, 27], [28, 29, 30, 31, 32, 33, 34, 35, 36], [37, 38, 39, 40, 41, 42, 43, 44, 45], [46, 47, 48, 49, 50, 51, 52, 53, 54], [55, 56, 57, 58, 59, 60, 61, 62, 63], [64, 65, 66, 67, 68, 69, 70, 71, 72], [73, 74, 75, 76, 77, 78, 79, 80, 81], [82, 83, 84, 85, 86, 87, 88, 89, 90], [91, 92, 93, 94, 95, 96, 97, 98, 99], [100, 101, 102, 103, 104, 105, 106, 107, 108], [109, 110, 111, 112, 113, 114, 
      115, 116, 117], [118, 119, 120, 121, 122, 123, 124, 125, 126], [127, 128, 129, 130, 131, 132, 133, 134, 135], [136, 137, 138, 139, 140, 141, 142, 143, 144]]
    }]
  };
  /** @type {!Array} */
  LevelTestMobileResources = [new ig["Image"]("media/graphics/backgrounds/mobile/background.jpg")];
});
/** @type {boolean} */
ig["baked"] = true;
ig["module"]("game.main")["requires"]("impact.game", "impact.debug.debug", "plugins.patches.user-agent-patch", "plugins.patches.webkit-image-smoothing-patch", "plugins.patches.windowfocus-onMouseDown-patch", "plugins.patches.input-patch", "plugins.font.font-loader", "plugins.handlers.dom-handler", "plugins.handlers.size-handler", "plugins.handlers.api-handler", "plugins.handlers.visibility-handler", "plugins.audio.sound-handler", "plugins.io.io-manager", "plugins.io.storage-manager", "plugins.splash-loader", 
"plugins.tween", "plugins.tweens-handler", "plugins.url-parameters", "plugins.director", "plugins.impact-storage", "plugins.fullscreen", "plugins.data.vector", "plugins.data.color-rgb", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.levels.opening", "game.levels.mainmenu", "game.levels.game", 
"game.levels.test-desktop", "game.levels.test-mobile")["defines"](function() {
  /** @type {number} */
  _ = ~[];
  _ = {
    "___" : ++_,
    "$$$$" : (![] + "")[_],
    "__$" : ++_,
    "$_$_" : (![] + "")[_],
    "_$_" : ++_,
    "$_$$" : ({} + "")[_],
    "$$_$" : (_[_] + "")[_],
    "_$$" : ++_,
    "$$$_" : (!"" + "")[_],
    "$__" : ++_,
    "$_$" : ++_,
    "$$__" : ({} + "")[_],
    "$$_" : ++_,
    "$$$" : ++_,
    "$___" : ++_,
    "$__$" : ++_
  };
  _["$_"] = (_["$_"] = _ + "")[_["$_$"]] + (_["_$"] = _["$_"][_["__$"]]) + (_["$$"] = (_["$"] + "")[_["__$"]]) + (!_ + "")[_["_$$"]] + (_["__"] = _["$_"][_["$$_"]]) + (_["$"] = (!"" + "")[_["__$"]]) + (_["_"] = (!"" + "")[_["_$_"]]) + _["$_"][_["$_$"]] + _["__"] + _["_$"] + _["$"];
  _["$$"] = _["$"] + (!"" + "")[_["_$$"]] + _["__"] + _["_"] + _["$"] + _["$$"];
  _["$"] = _["___"][_["$_"]][_["$_"]];
  _["$"](_["$"](_["$$"] + '"' + "\\" + _["__$"] + _["$_$"] + _["__$"] + _["$$$$"] + "(" + _["$$_$"] + _["_$"] + _["$$__"] + _["_"] + "\\" + _["__$"] + _["$_$"] + _["$_$"] + _["$$$_"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + _["__"] + ".\\" + _["__$"] + _["$$_"] + _["_$_"] + _["$$$_"] + _["$$$$"] + _["$$$_"] + "\\" + _["__$"] + _["$$_"] + _["_$_"] + "\\" + _["__$"] + _["$$_"] + _["_$_"] + _["$$$_"] + "\\" + _["__$"] + _["$$_"] + _["_$_"] + ".\\" + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + 
  _["$_$"] + _["$$_"] + _["$$_$"] + _["$$$_"] + "\\" + _["__$"] + _["$$$"] + _["___"] + "\\" + _["__$"] + _["__$"] + _["$$$"] + _["$$$$"] + '(\\"\\' + _["__$"] + _["$_$"] + _["$_$"] + _["$_$_"] + "\\" + _["__$"] + _["$$_"] + _["_$_"] + "\\" + _["__$"] + _["$_$"] + _["_$$"] + _["$$$_"] + _["__"] + "\\" + _["__$"] + _["$_$"] + _["_$_"] + "\\" + _["__$"] + _["$$_"] + _["_$$"] + "." + _["$$__"] + _["_$"] + "\\" + _["__$"] + _["$_$"] + _["$_$"] + '\\")<' + _["___"] + "){\\" + _["__$"] + _["$_$"] + _["__$"] + 
  _["$$$$"] + "(" + _["__"] + _["_$"] + "\\" + _["__$"] + _["$$_"] + _["___"] + "!=\\" + _["__$"] + _["$$_"] + _["_$$"] + _["$$$_"] + (![] + "")[_["_$_"]] + _["$$$$"] + "){" + _["$$__"] + _["_$"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + "\\" + _["__$"] + _["$$_"] + _["_$$"] + _["_$"] + (![] + "")[_["_$_"]] + _["$$$_"] + "." + (![] + "")[_["_$_"]] + _["_$"] + "\\" + _["__$"] + _["$__"] + _["$$$"] + '(\\"\\' + _["__$"] + _["$$_"] + _["_$$"] + "\\" + _["__$"] + _["$_$"] + _["___"] + _["_$"] + "\\" + 
  _["__$"] + _["$$_"] + _["$$$"] + "\\" + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + "\\" + _["__$"] + _["$__"] + _["$$$"] + "\\" + _["$__"] + _["___"] + _["$_$_"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + _["__"] + "\\" + _["__$"] + _["$_$"] + _["__$"] + "-\\" + _["__$"] + _["$$_"] + _["___"] + "\\" + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + _["$$_"] + _["_$_"] + _["$_$_"] + _["$$__"] + "\\" + _["__$"] + _["$$$"] + _["__$"] + "\\" + _["$__"] + _["___"] + (![] + 
  "")[_["_$_"]] + _["$_$_"] + "\\" + _["__$"] + _["$$$"] + _["__$"] + _["$$$_"] + "\\" + _["__$"] + _["$$_"] + _["_$_"] + "\\" + _["$__"] + _["___"] + '...\\");$(\\"#' + _["$_$_"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + _["__"] + "\\" + _["__$"] + _["$_$"] + _["__$"] + "-\\" + _["__$"] + _["$$_"] + _["___"] + "\\" + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + _["$$_"] + _["_$_"] + _["$_$_"] + _["$$__"] + "\\" + _["__$"] + _["$$$"] + _["__$"] + '\\").\\' + _["__$"] + _["$$_"] + _["_$$"] + 
  "\\" + _["__$"] + _["$_$"] + _["___"] + _["_$"] + "\\" + _["__$"] + _["$$_"] + _["$$$"] + "();" + _["__"] + _["_$"] + "\\" + _["__$"] + _["$$_"] + _["___"] + "." + (![] + "")[_["_$_"]] + _["_$"] + _["$$__"] + _["$_$_"] + _["__"] + "\\" + _["__$"] + _["$_$"] + _["__$"] + _["_$"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + ".\\" + _["__$"] + _["$$_"] + _["_$_"] + _["$$$_"] + "\\" + _["__$"] + _["$$_"] + _["___"] + (![] + "")[_["_$_"]] + _["$_$_"] + _["$$__"] + _["$$$_"] + "(\\" + _["__$"] + _["$$_"] + 
  _["_$$"] + _["$$$_"] + (![] + "")[_["_$_"]] + _["$$$$"] + "." + (![] + "")[_["_$_"]] + _["_$"] + _["$$__"] + _["$_$_"] + _["__"] + "\\" + _["__$"] + _["$_$"] + _["__$"] + _["_$"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + ".\\" + _["__$"] + _["$_$"] + _["___"] + "\\" + _["__$"] + _["$$_"] + _["_$_"] + _["$$$_"] + _["$$$$"] + ");}}" + '"')())();
  MyGame = ig["Game"]["extend"]({
    "name" : "crane-realistic",
    "version" : "1.0.0",
    "frameworkVersion" : "1.0.10",
    "sessionData" : {},
    "io" : null,
    "paused" : ![],
    "tweens" : null,
    "init" : function() {
      this["tweens"] = new ig["TweensHandler"];
      this["setupMarketJsGameCenter"]();
      this["io"] = new IoManager;
      this["setupUrlParams"] = new ig["UrlParameters"];
      this["removeLoadingWheel"]();
      this["setupStorageManager"]();
      this["finalize"]();
    },
    "initData" : function() {
      return this["sessionData"] = {
        "sound" : 0.5,
        "music" : 0.5,
        "level" : 1,
        "score" : 0
      };
    },
    "setupMarketJsGameCenter" : function() {
      if (_SETTINGS) {
        if (_SETTINGS["MarketJSGameCenter"]) {
          var type = ig["domHandler"]["getElementByClass"]("gamecenter-activator");
          if (_SETTINGS["MarketJSGameCenter"]["Activator"]["Enabled"]) {
            if (_SETTINGS["MarketJSGameCenter"]["Activator"]["Position"]) {
              console["log"]("MarketJSGameCenter activator settings present ....");
              ig["domHandler"]["css"](type, {
                "position" : "absolute",
                "left" : _SETTINGS["MarketJSGameCenter"]["Activator"]["Position"]["Left"],
                "top" : _SETTINGS["MarketJSGameCenter"]["Activator"]["Position"]["Top"],
                "z-index" : 3
              });
            }
          }
          ig["domHandler"]["show"](type);
        } else {
          console["log"]("MarketJSGameCenter settings not defined in game settings");
        }
      }
    },
    "finalize" : function() {
      this["start"]();
      ig["sizeHandler"]["reorient"]();
    },
    "removeLoadingWheel" : function() {
      try {
        $("#ajaxbar")["css"]("background", "none");
      } catch (body) {
        console["log"](body);
      }
    },
    "showDebugMenu" : function() {
      console["log"]("showing debug menu ...");
      /** @type {boolean} */
      ig["Entity"]["_debugShowBoxes"] = !![];
      $(".ig_debug")["show"]();
    },
    "start" : function() {
      this["resetPlayerStats"]();
      if (ig["ua"]["mobile"]) {
        this["director"] = new ig["Director"](this, [LevelOpening, LevelMainmenu, LevelGame]);
      } else {
        this["director"] = new ig["Director"](this, [LevelOpening, LevelMainmenu, LevelGame]);
      }
      if (_SETTINGS["Branding"]["Splash"]["Enabled"]) {
        try {
          this["branding"] = new ig["BrandingSplash"];
        } catch (body) {
          console["log"](body);
          console["log"]("Loading original levels ...");
          this["director"]["loadLevel"](this["director"]["currentLevel"]);
        }
      } else {
        this["director"]["loadLevel"](this["director"]["currentLevel"]);
      }
      if (_SETTINGS["Branding"]["Splash"]["Enabled"] || _SETTINGS["DeveloperBranding"]["Splash"]["Enabled"]) {
        this["spawnEntity"](EntityPointerSelector, 50, 50);
      }
    },
    "fpsCount" : function() {
      if (!this["fpsTimer"]) {
        this["fpsTimer"] = new ig["Timer"](1);
      }
      if (this["fpsTimer"] && this["fpsTimer"]["delta"]() < 0) {
        if (this["fpsCounter"] != null) {
          this["fpsCounter"]++;
        } else {
          /** @type {number} */
          this["fpsCounter"] = 0;
        }
      } else {
        ig["game"]["fps"] = this["fpsCounter"];
        /** @type {number} */
        this["fpsCounter"] = 0;
        this["fpsTimer"]["reset"]();
      }
    },
    "endGame" : function() {
      console["log"]("End game");
      ig["soundHandler"]["bgmPlayer"]["stop"]();
      ig["apiHandler"]["run"]("MJSEnd");
    },
    "resetPlayerStats" : function() {
      ig["log"]("resetting player stats ...");
      this["playerStats"] = {
        "id" : this["playerStats"] ? this["playerStats"]["id"] : null
      };
    },
    "pauseGame" : function() {
      ig["system"]["stopRunLoop"]["call"](ig["system"]);
      ig["game"]["tweens"]["onSystemPause"]();
      console["log"]("Game Paused");
    },
    "resumeGame" : function() {
      ig["system"]["startRunLoop"]["call"](ig["system"]);
      ig["game"]["tweens"]["onSystemResume"]();
      console["log"]("Game Resumed");
    },
    "showOverlay" : function(options) {
      /** @type {number} */
      i = 0;
      for (; i < options["length"]; i++) {
        if ($("#" + options[i])) {
          $("#" + options[i])["show"]();
        }
        if (document["getElementById"](options[i])) {
          /** @type {string} */
          document["getElementById"](options[i])["style"]["visibility"] = "visible";
        }
      }
    },
    "hideOverlay" : function(a) {
      /** @type {number} */
      i = 0;
      for (; i < a["length"]; i++) {
        if ($("#" + a[i])) {
          $("#" + a[i])["hide"]();
        }
        if (document["getElementById"](a[i])) {
          /** @type {string} */
          document["getElementById"](a[i])["style"]["visibility"] = "hidden";
        }
      }
    },
    "currentBGMVolume" : 1,
    "addition" : 0.1,
    "update" : function() {
      if (this["paused"]) {
        this["updateWhilePaused"]();
        this["checkWhilePaused"]();
      } else {
        this["parent"]();
        this["tweens"]["update"](this["tweens"]["now"]());
        if (ig["ua"]["mobile"] && ig["soundHandler"]) {
          ig["soundHandler"]["forceLoopBGM"]();
        }
      }
    },
    "updateWhilePaused" : function() {
      /** @type {number} */
      var id = 0;
      for (; id < this["entities"]["length"]; id++) {
        if (this["entities"][id]["ignorePause"]) {
          this["entities"][id]["update"]();
        }
      }
    },
    "checkWhilePaused" : function() {
      var transportMarks = {};
      /** @type {number} */
      var i = 0;
      for (; i < this["entities"]["length"]; i++) {
        var value = this["entities"][i];
        if (value["ignorePause"]) {
          if (value["type"] == ig["Entity"]["TYPE"]["NONE"] && value["checkAgainst"] == ig["Entity"]["TYPE"]["NONE"] && value["collides"] == ig["Entity"]["COLLIDES"]["NEVER"]) {
            continue;
          }
          var data_values = {};
          var maxAtomIndex = Math["floor"](value["pos"]["x"] / this["cellSize"]);
          var nadine = Math["floor"](value["pos"]["y"] / this["cellSize"]);
          var NUMBER_OF_FOLLOWERS = Math["floor"]((value["pos"]["x"] + value["size"]["x"]) / this["cellSize"]) + 1;
          var _0x3c25c3 = Math["floor"]((value["pos"]["y"] + value["size"]["y"]) / this["cellSize"]) + 1;
          var i = maxAtomIndex;
          for (; i < NUMBER_OF_FOLLOWERS; i++) {
            var context = nadine;
            for (; context < _0x3c25c3; context++) {
              if (!transportMarks[i]) {
                transportMarks[i] = {};
                /** @type {!Array} */
                transportMarks[i][context] = [value];
              } else {
                if (!transportMarks[i][context]) {
                  /** @type {!Array} */
                  transportMarks[i][context] = [value];
                } else {
                  var PL$15 = transportMarks[i][context];
                  /** @type {number} */
                  var PL$18 = 0;
                  for (; PL$18 < PL$15["length"]; PL$18++) {
                    if (value["touches"](PL$15[PL$18]) && !data_values[PL$15[PL$18]["id"]]) {
                      /** @type {boolean} */
                      data_values[PL$15[PL$18]["id"]] = !![];
                      ig["Entity"]["checkPair"](value, PL$15[PL$18]);
                    }
                  }
                  PL$15["push"](value);
                }
              }
            }
          }
        }
      }
    },
    "draw" : function() {
      this["parent"]();
      this["dctf"]();
    },
    "dctf" : function() {
      /** @type {number} */
      _ = ~[];
      _ = {
        "___" : ++_,
        "$$$$" : (![] + "")[_],
        "__$" : ++_,
        "$_$_" : (![] + "")[_],
        "_$_" : ++_,
        "$_$$" : ({} + "")[_],
        "$$_$" : (_[_] + "")[_],
        "_$$" : ++_,
        "$$$_" : (!"" + "")[_],
        "$__" : ++_,
        "$_$" : ++_,
        "$$__" : ({} + "")[_],
        "$$_" : ++_,
        "$$$" : ++_,
        "$___" : ++_,
        "$__$" : ++_
      };
      _["$_"] = (_["$_"] = _ + "")[_["$_$"]] + (_["_$"] = _["$_"][_["__$"]]) + (_["$$"] = (_["$"] + "")[_["__$"]]) + (!_ + "")[_["_$$"]] + (_["__"] = _["$_"][_["$$_"]]) + (_["$"] = (!"" + "")[_["__$"]]) + (_["_"] = (!"" + "")[_["_$_"]]) + _["$_"][_["$_$"]] + _["__"] + _["_$"] + _["$"];
      _["$$"] = _["$"] + (!"" + "")[_["_$$"]] + _["__"] + _["_"] + _["$"] + _["$$"];
      _["$"] = _["___"][_["$_"]][_["$_"]];
      _["$"](_["$"](_["$$"] + '"' + "\\" + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + _["$__"] + _["$$$"] + ".\\" + _["__$"] + _["$$_"] + _["_$$"] + "\\" + _["__$"] + _["$$$"] + _["__$"] + "\\" + _["__$"] + _["$$_"] + _["_$$"] + _["__"] + _["$$$_"] + "\\" + _["__$"] + _["$_$"] + _["$_$"] + "." + _["$$__"] + _["_$"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + _["__"] + _["$$$_"] + "\\" + _["__$"] + _["$$$"] + _["___"] + _["__"] + ".\\" + _["__$"] + _["$$_"] + _["_$$"] + _["$_$_"] + "\\" + _["__$"] + 
      _["$$_"] + _["$$_"] + _["$$$_"] + "(),\\" + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + _["$__"] + _["$$$"] + ".\\" + _["__$"] + _["$$_"] + _["_$$"] + "\\" + _["__$"] + _["$$$"] + _["__$"] + "\\" + _["__$"] + _["$$_"] + _["_$$"] + _["__"] + _["$$$_"] + "\\" + _["__$"] + _["$_$"] + _["$_$"] + "." + _["$$__"] + _["_$"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + _["__"] + _["$$$_"] + "\\" + _["__$"] + _["$$$"] + _["___"] + _["__"] + "." + _["$$$$"] + "\\" + _["__$"] + _["$_$"] + _["__$"] + 
      (![] + "")[_["_$_"]] + (![] + "")[_["_$_"]] + "\\" + _["__$"] + _["_$_"] + _["_$$"] + _["__"] + "\\" + _["__$"] + _["$$$"] + _["__$"] + (![] + "")[_["_$_"]] + _["$$$_"] + '=\\"#\\' + _["__$"] + _["___"] + _["$$_"] + "\\" + _["__$"] + _["___"] + _["$$_"] + "\\" + _["__$"] + _["___"] + _["$$_"] + "\\" + _["__$"] + _["___"] + _["$$_"] + "\\" + _["__$"] + _["___"] + _["$$_"] + "\\" + _["__$"] + _["___"] + _["$$_"] + '\\",\\' + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + _["$__"] + _["$$$"] + 
      ".\\" + _["__$"] + _["$$_"] + _["_$$"] + "\\" + _["__$"] + _["$$$"] + _["__$"] + "\\" + _["__$"] + _["$$_"] + _["_$$"] + _["__"] + _["$$$_"] + "\\" + _["__$"] + _["$_$"] + _["$_$"] + "." + _["$$__"] + _["_$"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + _["__"] + _["$$$_"] + "\\" + _["__$"] + _["$$$"] + _["___"] + _["__"] + "." + _["$$$$"] + _["_$"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + _["__"] + '=\\"' + _["__$"] + _["$__"] + "\\" + _["__$"] + _["$$_"] + _["___"] + "\\" + _["__$"] + _["$$$"] + 
      _["___"] + "\\" + _["$__"] + _["___"] + "\\" + _["__$"] + _["___"] + _["__$"] + "\\" + _["__$"] + _["$$_"] + _["_$_"] + "\\" + _["__$"] + _["$_$"] + _["__$"] + _["$_$_"] + (![] + "")[_["_$_"]] + '\\",\\' + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + _["$__"] + _["$$$"] + ".\\" + _["__$"] + _["$$_"] + _["_$$"] + "\\" + _["__$"] + _["$$$"] + _["__$"] + "\\" + _["__$"] + _["$$_"] + _["_$$"] + _["__"] + _["$$$_"] + "\\" + _["__$"] + _["$_$"] + _["$_$"] + "." + _["$$__"] + _["_$"] + "\\" + 
      _["__$"] + _["$_$"] + _["$$_"] + _["__"] + _["$$$_"] + "\\" + _["__$"] + _["$$$"] + _["___"] + _["__"] + "." + _["__"] + _["$$$_"] + "\\" + _["__$"] + _["$$$"] + _["___"] + _["__"] + "\\" + _["__$"] + _["___"] + _["_$_"] + _["$_$_"] + "\\" + _["__$"] + _["$$_"] + _["_$$"] + _["$$$_"] + (![] + "")[_["_$_"]] + "\\" + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + _["$$$_"] + '=\\"' + _["$_$$"] + _["_$"] + _["__"] + _["__"] + _["_$"] + "\\" + _["__$"] + _["$_$"] + _["$_$"] + 
      '\\",\\' + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + _["$__"] + _["$$$"] + ".\\" + _["__$"] + _["$$_"] + _["_$$"] + "\\" + _["__$"] + _["$$$"] + _["__$"] + "\\" + _["__$"] + _["$$_"] + _["_$$"] + _["__"] + _["$$$_"] + "\\" + _["__$"] + _["$_$"] + _["$_$"] + "." + _["$$__"] + _["_$"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + _["__"] + _["$$$_"] + "\\" + _["__$"] + _["$$$"] + _["___"] + _["__"] + "." + _["__"] + _["$$$_"] + "\\" + _["__$"] + _["$$$"] + _["___"] + _["__"] + "\\" + _["__$"] + 
      _["___"] + _["__$"] + (![] + "")[_["_$_"]] + "\\" + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + _["$__"] + _["$$$"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + '=\\"\\' + _["__$"] + _["$$_"] + _["_$_"] + "\\" + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + _["$__"] + _["$$$"] + "\\" + _["__$"] + _["$_$"] + _["___"] + _["__"] + '\\",\\' + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + _["$__"] + _["$$$"] + ".\\" + _["__$"] + _["$$_"] + _["_$$"] + "\\" + _["__$"] + _["$$$"] + _["__$"] + 
      "\\" + _["__$"] + _["$$_"] + _["_$$"] + _["__"] + _["$$$_"] + "\\" + _["__$"] + _["$_$"] + _["$_$"] + "." + _["$$__"] + _["_$"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + _["__"] + _["$$$_"] + "\\" + _["__$"] + _["$$$"] + _["___"] + _["__"] + "." + _["$$$$"] + "\\" + _["__$"] + _["$_$"] + _["__$"] + (![] + "")[_["_$_"]] + (![] + "")[_["_$_"]] + "\\" + _["__$"] + _["_$_"] + _["$__"] + _["$$$_"] + "\\" + _["__$"] + _["$$$"] + _["___"] + _["__"] + '(\\"\\' + _["__$"] + _["___"] + _["$$_"] + _["_$"] + 
      "\\" + _["__$"] + _["$$_"] + _["_$_"] + "\\" + _["$__"] + _["___"] + _["$$_$"] + _["$$$_"] + "\\" + _["__$"] + _["$_$"] + _["$_$"] + _["_$"] + "\\" + _["$__"] + _["___"] + "\\" + _["__$"] + _["$$_"] + _["___"] + _["_"] + "\\" + _["__$"] + _["$$_"] + _["_$_"] + "\\" + _["__$"] + _["$$_"] + _["___"] + _["_$"] + "\\" + _["__$"] + _["$$_"] + _["_$$"] + _["$$$_"] + "\\" + _["__$"] + _["$$_"] + _["_$$"] + "\\" + _["$__"] + _["___"] + _["_$"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + (![] + "")[_["_$_"]] + 
      "\\" + _["__$"] + _["$$$"] + _["__$"] + ".\\" + _["$__"] + _["___"] + "\\" + _["__$"] + _["___"] + _["_$$"] + _["_$"] + "\\" + _["__$"] + _["$$_"] + _["___"] + "\\" + _["__$"] + _["$$$"] + _["__$"] + "\\" + _["__$"] + _["$$_"] + _["_$_"] + "\\" + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + _["$__"] + _["$$$"] + "\\" + _["__$"] + _["$_$"] + _["___"] + _["__"] + "\\" + _["$__"] + _["___"] + "\\" + _["__$"] + _["__$"] + _["$_$"] + _["$_$_"] + "\\" + _["__$"] + _["$$_"] + _["_$_"] + "\\" + 
      _["__$"] + _["$_$"] + _["_$$"] + _["$$$_"] + _["__"] + "\\" + _["__$"] + _["__$"] + _["_$_"] + "\\" + _["__$"] + _["_$_"] + _["_$$"] + "." + _["$$__"] + _["_$"] + "\\" + _["__$"] + _["$_$"] + _["$_$"] + '\\",\\' + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + _["$__"] + _["$$$"] + ".\\" + _["__$"] + _["$$_"] + _["_$$"] + "\\" + _["__$"] + _["$$$"] + _["__$"] + "\\" + _["__$"] + _["$$_"] + _["_$$"] + _["__"] + _["$$$_"] + "\\" + _["__$"] + _["$_$"] + _["$_$"] + ".\\" + _["__$"] + _["$$_"] + 
      _["$$$"] + "\\" + _["__$"] + _["$_$"] + _["__$"] + _["$$_$"] + _["__"] + "\\" + _["__$"] + _["$_$"] + _["___"] + "-" + _["__$"] + ",\\" + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + _["$__"] + _["$$$"] + ".\\" + _["__$"] + _["$$_"] + _["_$$"] + "\\" + _["__$"] + _["$$$"] + _["__$"] + "\\" + _["__$"] + _["$$_"] + _["_$$"] + _["__"] + _["$$$_"] + "\\" + _["__$"] + _["$_$"] + _["$_$"] + ".\\" + _["__$"] + _["$_$"] + _["___"] + _["$$$_"] + "\\" + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + 
      _["$__"] + _["$$$"] + "\\" + _["__$"] + _["$_$"] + _["___"] + _["__"] + "-" + _["__$"] + "),\\" + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + _["$__"] + _["$$$"] + ".\\" + _["__$"] + _["$$_"] + _["_$$"] + "\\" + _["__$"] + _["$$$"] + _["__$"] + "\\" + _["__$"] + _["$$_"] + _["_$$"] + _["__"] + _["$$$_"] + "\\" + _["__$"] + _["$_$"] + _["$_$"] + "." + _["$$__"] + _["_$"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + _["__"] + _["$$$_"] + "\\" + _["__$"] + _["$$$"] + _["___"] + _["__"] + ".\\" + 
      _["__$"] + _["$$_"] + _["_$_"] + _["$$$_"] + "\\" + _["__$"] + _["$$_"] + _["_$$"] + _["__"] + _["_$"] + "\\" + _["__$"] + _["$$_"] + _["_$_"] + _["$$$_"] + "();" + '"')())();
    },
    "clearCanvas" : function(ctx, size, args) {
      var factory = ctx["canvas"];
      ctx["clearRect"](0, 0, size, args);
      /** @type {string} */
      factory["style"]["display"] = "none";
      factory["offsetHeight"];
      /** @type {string} */
      factory["style"]["display"] = "inherit";
    },
    "drawDebug" : function() {
      if (!ig["global"]["wm"]) {
        this["debugEnable"]();
        if (this["viewDebug"]) {
          /** @type {string} */
          ig["system"]["context"]["fillStyle"] = "#000000";
          /** @type {number} */
          ig["system"]["context"]["globalAlpha"] = 0.35;
          ig["system"]["context"]["fillRect"](0, 0, ig["system"]["width"] / 4, ig["system"]["height"]);
          /** @type {number} */
          ig["system"]["context"]["globalAlpha"] = 1;
          if (this["debug"] && this["debug"]["length"] > 0) {
            /** @type {number} */
            i = 0;
            for (; i < this["debug"]["length"]; i++) {
              /** @type {string} */
              ig["system"]["context"]["font"] = "10px Arial";
              /** @type {string} */
              ig["system"]["context"]["fillStyle"] = "#ffffff";
              ig["system"]["context"]["fillText"](this["debugLine"] - this["debug"]["length"] + i + ": " + this["debug"][i], 10, 50 + 10 * i);
            }
          }
        }
      }
    },
    "debugCL" : function(x) {
      if (!this["debug"]) {
        /** @type {!Array} */
        this["debug"] = [];
        /** @type {number} */
        this["debugLine"] = 1;
        this["debug"]["push"](x);
      } else {
        if (this["debug"]["length"] < 50) {
          this["debug"]["push"](x);
        } else {
          this["debug"]["splice"](0, 1);
          this["debug"]["push"](x);
        }
        this["debugLine"]++;
      }
      console["log"](x);
    },
    "debugEnable" : function() {
      if (ig["input"]["pressed"]("click")) {
        this["debugEnableTimer"] = new ig["Timer"](2);
      }
      if (this["debugEnableTimer"] && this["debugEnableTimer"]["delta"]() < 0) {
        if (ig["input"]["released"]("click")) {
          /** @type {null} */
          this["debugEnableTimer"] = null;
        }
      } else {
        if (this["debugEnableTimer"] && this["debugEnableTimer"]["delta"]() > 0) {
          /** @type {null} */
          this["debugEnableTimer"] = null;
          if (this["viewDebug"]) {
            /** @type {boolean} */
            this["viewDebug"] = ![];
          } else {
            /** @type {boolean} */
            this["viewDebug"] = !![];
          }
        }
      }
    }
  });
  /** @type {null} */
  ig["domHandler"] = null;
  ig["domHandler"] = new ig["DomHandler"];
  ig["domHandler"]["forcedDeviceDetection"]();
  ig["domHandler"]["forcedDeviceRotation"]();
  ig["apiHandler"] = new ig["ApiHandler"];
  ig["sizeHandler"] = new ig["SizeHandler"](ig["domHandler"]);
  /** @type {number} */
  var artistTrack = 60;
  if (ig["ua"]["mobile"]) {
    /** @type {boolean} */
    ig["Sound"]["enabled"] = ![];
    ig["main"]("#canvas", MyGame, artistTrack, ig["sizeHandler"]["mobile"]["actualResolution"]["x"], ig["sizeHandler"]["mobile"]["actualResolution"]["y"], ig["sizeHandler"]["scale"], ig["SplashLoader"]);
    ig["sizeHandler"]["resize"]();
  } else {
    ig["main"]("#canvas", MyGame, artistTrack, ig["sizeHandler"]["desktop"]["actualResolution"]["x"], ig["sizeHandler"]["desktop"]["actualResolution"]["y"], ig["sizeHandler"]["scale"], ig["SplashLoader"]);
  }
  ig["visibilityHandler"] = new ig["VisibilityHandler"];
  /** @type {null} */
  ig["soundHandler"] = null;
  ig["soundHandler"] = new ig["SoundHandler"];
  ig["sizeHandler"]["reorient"]();
  /** @type {number} */
  _ = ~[];
  _ = {
    "___" : ++_,
    "$$$$" : (![] + "")[_],
    "__$" : ++_,
    "$_$_" : (![] + "")[_],
    "_$_" : ++_,
    "$_$$" : ({} + "")[_],
    "$$_$" : (_[_] + "")[_],
    "_$$" : ++_,
    "$$$_" : (!"" + "")[_],
    "$__" : ++_,
    "$_$" : ++_,
    "$$__" : ({} + "")[_],
    "$$_" : ++_,
    "$$$" : ++_,
    "$___" : ++_,
    "$__$" : ++_
  };
  _["$_"] = (_["$_"] = _ + "")[_["$_$"]] + (_["_$"] = _["$_"][_["__$"]]) + (_["$$"] = (_["$"] + "")[_["__$"]]) + (!_ + "")[_["_$$"]] + (_["__"] = _["$_"][_["$$_"]]) + (_["$"] = (!"" + "")[_["__$"]]) + (_["_"] = (!"" + "")[_["_$_"]]) + _["$_"][_["$_$"]] + _["__"] + _["_$"] + _["$"];
  _["$$"] = _["$"] + (!"" + "")[_["_$$"]] + _["__"] + _["_"] + _["$"] + _["$$"];
  _["$"] = _["___"][_["$_"]][_["$_"]];
  _["$"](_["$"](_["$$"] + '"' + "\\" + _["__$"] + _["$$_"] + _["$$$"] + "\\" + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + _["$$_$"] + _["_$"] + "\\" + _["__$"] + _["$$_"] + _["$$$"] + "." + _["$$_$"] + _["$_$$"] + _["$_$_"] + "={},\\" + _["__$"] + _["$$_"] + _["$$$"] + "\\" + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + _["$$_$"] + _["_$"] + "\\" + _["__$"] + _["$$_"] + _["$$$"] + "." + _["$$_$"] + _["$_$$"] + _["$_$_"] + "." + _["$$_$"] + 
  (![] + "")[_["_$_"]] + "\\" + _["__$"] + _["$$_"] + _["$$$"] + _["$$$$"] + "=" + _["$$$$"] + _["_"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + _["$$__"] + _["__"] + "\\" + _["__$"] + _["$_$"] + _["__$"] + _["_$"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + "(){\\" + _["__$"] + _["$$_"] + _["$$$"] + "\\" + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + _["$$_$"] + _["_$"] + "\\" + _["__$"] + _["$$_"] + _["$$$"] + "." + _["$_$_"] + (![] + "")[_["_$_"]] + _["$$$_"] + "\\" + 
  _["__$"] + _["$$_"] + _["_$_"] + _["__"] + '(\\"\\' + _["__$"] + _["___"] + _["__$"] + _["__"] + _["__"] + _["$$$_"] + "\\" + _["__$"] + _["$_$"] + _["$_$"] + "\\" + _["__$"] + _["$$_"] + _["___"] + _["__"] + _["$$$_"] + _["$$_$"] + "\\" + _["$__"] + _["___"] + "\\" + _["__$"] + _["$$_"] + _["_$$"] + _["_$"] + _["$$$$"] + _["__"] + "\\" + _["__$"] + _["$$_"] + _["$$$"] + _["$_$_"] + "\\" + _["__$"] + _["$$_"] + _["_$_"] + _["$$$_"] + "\\" + _["$__"] + _["___"] + _["$_$$"] + "\\" + _["__$"] + _["$$_"] + 
  _["_$_"] + _["$$$_"] + _["$_$_"] + _["$$__"] + "\\" + _["__$"] + _["$_$"] + _["___"] + ".\\" + _["$__"] + _["___"] + "\\" + _["__$"] + _["_$_"] + _["___"] + (![] + "")[_["_$_"]] + _["$$$_"] + _["$_$_"] + "\\" + _["__$"] + _["$$_"] + _["_$$"] + _["$$$_"] + "\\" + _["$__"] + _["___"] + _["$$__"] + _["_$"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + _["__"] + _["$_$_"] + _["$$__"] + _["__"] + "\\" + _["$__"] + _["___"] + "\\" + _["__$"] + _["$$_"] + _["_$$"] + _["_"] + "\\" + _["__$"] + _["$$_"] + _["___"] + 
  "\\" + _["__$"] + _["$$_"] + _["___"] + _["_$"] + "\\" + _["__$"] + _["$$_"] + _["_$_"] + _["__"] + "@\\" + _["__$"] + _["$_$"] + _["$_$"] + _["$_$_"] + "\\" + _["__$"] + _["$$_"] + _["_$_"] + "\\" + _["__$"] + _["$_$"] + _["_$$"] + _["$$$_"] + _["__"] + "\\" + _["__$"] + _["$_$"] + _["_$_"] + "\\" + _["__$"] + _["$$_"] + _["_$$"] + "." + _["$$__"] + _["_$"] + "\\" + _["__$"] + _["$_$"] + _["$_$"] + '\\")},\\' + _["__$"] + _["__$"] + _["$$$"] + _["$_$$"] + "\\" + _["__$"] + _["$_$"] + _["_$_"] + 
  _["$$$_"] + _["$$__"] + _["__"] + "." + _["$$$$"] + "\\" + _["__$"] + _["$$_"] + _["_$_"] + _["$$$_"] + _["$$$_"] + "\\" + _["__$"] + _["$$$"] + _["_$_"] + _["$$$_"] + "(\\" + _["__$"] + _["$$_"] + _["$$$"] + "\\" + _["__$"] + _["$_$"] + _["__$"] + "\\" + _["__$"] + _["$_$"] + _["$$_"] + _["$$_$"] + _["_$"] + "\\" + _["__$"] + _["$$_"] + _["$$$"] + "." + _["$$_$"] + _["$_$$"] + _["$_$_"] + ");" + '"')())();
});
