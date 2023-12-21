import me, { useRef as on, useDebugValue as Gt, createElement as an, useContext as sn, Fragment as cn } from "react";
var yt = { exports: {} }, je = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ht;
function un() {
  return Ht || (Ht = 1, process.env.NODE_ENV !== "production" && function() {
    var e = me, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), k = Symbol.iterator, N = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var s = k && n[k] || n[N];
      return typeof s == "function" ? s : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(n) {
      {
        for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), d = 1; d < s; d++)
          u[d - 1] = arguments[d];
        P("error", n, u);
      }
    }
    function P(n, s, u) {
      {
        var d = C.ReactDebugCurrentFrame, R = d.getStackAddendum();
        R !== "" && (s += "%s", u = u.concat([R]));
        var T = u.map(function(x) {
          return String(x);
        });
        T.unshift("Warning: " + s), Function.prototype.apply.call(console[n], console, T);
      }
    }
    var O = !1, I = !1, S = !1, m = !1, J = !1, Z;
    Z = Symbol.for("react.module.reference");
    function it(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === i || J || n === a || n === g || n === p || m || n === E || O || I || S || typeof n == "object" && n !== null && (n.$$typeof === b || n.$$typeof === h || n.$$typeof === c || n.$$typeof === f || n.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === Z || n.getModuleId !== void 0));
    }
    function st(n, s, u) {
      var d = n.displayName;
      if (d)
        return d;
      var R = s.displayName || s.name || "";
      return R !== "" ? u + "(" + R + ")" : u;
    }
    function Me(n) {
      return n.displayName || "Context";
    }
    function Y(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case g:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            var s = n;
            return Me(s) + ".Consumer";
          case c:
            var u = n;
            return Me(u._context) + ".Provider";
          case l:
            return st(n, n.render, "ForwardRef");
          case h:
            var d = n.displayName || null;
            return d !== null ? d : Y(n.type) || "Memo";
          case b: {
            var R = n, T = R._payload, x = R._init;
            try {
              return Y(x(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, se = 0, Le, ye, G, ne, oe, L, ve;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function we() {
      {
        if (se === 0) {
          Le = console.log, ye = console.info, G = console.warn, ne = console.error, oe = console.group, L = console.groupCollapsed, ve = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        se++;
      }
    }
    function ce() {
      {
        if (se--, se === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Q({}, n, {
              value: Le
            }),
            info: Q({}, n, {
              value: ye
            }),
            warn: Q({}, n, {
              value: G
            }),
            error: Q({}, n, {
              value: ne
            }),
            group: Q({}, n, {
              value: oe
            }),
            groupCollapsed: Q({}, n, {
              value: L
            }),
            groupEnd: Q({}, n, {
              value: ve
            })
          });
        }
        se < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = C.ReactCurrentDispatcher, q;
    function W(n, s, u) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (R) {
            var d = R.stack.trim().match(/\n( *(at )?)/);
            q = d && d[1] || "";
          }
        return `
` + q + n;
      }
    }
    var ue = !1, ee;
    {
      var X = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new X();
    }
    function It(n, s) {
      if (!n || ue)
        return "";
      {
        var u = ee.get(n);
        if (u !== void 0)
          return u;
      }
      var d;
      ue = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = ae.current, ae.current = null, we();
      try {
        if (s) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch (te) {
              d = te;
            }
            Reflect.construct(n, [], x);
          } else {
            try {
              x.call();
            } catch (te) {
              d = te;
            }
            n.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (te) {
            d = te;
          }
          n();
        }
      } catch (te) {
        if (te && d && typeof te.stack == "string") {
          for (var w = te.stack.split(`
`), z = d.stack.split(`
`), j = w.length - 1, D = z.length - 1; j >= 1 && D >= 0 && w[j] !== z[D]; )
            D--;
          for (; j >= 1 && D >= 0; j--, D--)
            if (w[j] !== z[D]) {
              if (j !== 1 || D !== 1)
                do
                  if (j--, D--, D < 0 || w[j] !== z[D]) {
                    var B = `
` + w[j].replace(" at new ", " at ");
                    return n.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", n.displayName)), typeof n == "function" && ee.set(n, B), B;
                  }
                while (j >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        ue = !1, ae.current = T, ce(), Error.prepareStackTrace = R;
      }
      var Ee = n ? n.displayName || n.name : "", Ut = Ee ? W(Ee) : "";
      return typeof n == "function" && ee.set(n, Ut), Ut;
    }
    function $r(n, s, u) {
      return It(n, !1);
    }
    function Fr(n) {
      var s = n.prototype;
      return !!(s && s.isReactComponent);
    }
    function ze(n, s, u) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return It(n, Fr(n));
      if (typeof n == "string")
        return W(n);
      switch (n) {
        case g:
          return W("Suspense");
        case p:
          return W("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            return $r(n.render);
          case h:
            return ze(n.type, s, u);
          case b: {
            var d = n, R = d._payload, T = d._init;
            try {
              return ze(T(R), s, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Ve = Object.prototype.hasOwnProperty, Nt = {}, jt = C.ReactDebugCurrentFrame;
    function Ye(n) {
      if (n) {
        var s = n._owner, u = ze(n.type, n._source, s ? s.type : null);
        jt.setExtraStackFrame(u);
      } else
        jt.setExtraStackFrame(null);
    }
    function Mr(n, s, u, d, R) {
      {
        var T = Function.call.bind(Ve);
        for (var x in n)
          if (T(n, x)) {
            var w = void 0;
            try {
              if (typeof n[x] != "function") {
                var z = Error((d || "React class") + ": " + u + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              w = n[x](s, x, d, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              w = j;
            }
            w && !(w instanceof Error) && (Ye(R), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", u, x, typeof w), Ye(null)), w instanceof Error && !(w.message in Nt) && (Nt[w.message] = !0, Ye(R), v("Failed %s type: %s", u, w.message), Ye(null));
          }
      }
    }
    var Lr = Array.isArray;
    function ct(n) {
      return Lr(n);
    }
    function zr(n) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, u = s && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return u;
      }
    }
    function Vr(n) {
      try {
        return Dt(n), !1;
      } catch {
        return !0;
      }
    }
    function Dt(n) {
      return "" + n;
    }
    function $t(n) {
      if (Vr(n))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", zr(n)), Dt(n);
    }
    var Ne = C.ReactCurrentOwner, Yr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ft, Mt, ut;
    ut = {};
    function Wr(n) {
      if (Ve.call(n, "ref")) {
        var s = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Br(n) {
      if (Ve.call(n, "key")) {
        var s = Object.getOwnPropertyDescriptor(n, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function Ur(n, s) {
      if (typeof n.ref == "string" && Ne.current && s && Ne.current.stateNode !== s) {
        var u = Y(Ne.current.type);
        ut[u] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(Ne.current.type), n.ref), ut[u] = !0);
      }
    }
    function Gr(n, s) {
      {
        var u = function() {
          Ft || (Ft = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Hr(n, s) {
      {
        var u = function() {
          Mt || (Mt = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var qr = function(n, s, u, d, R, T, x) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: s,
        ref: u,
        props: x,
        // Record the component responsible for creating this element.
        _owner: T
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function Xr(n, s, u, d, R) {
      {
        var T, x = {}, w = null, z = null;
        u !== void 0 && ($t(u), w = "" + u), Br(s) && ($t(s.key), w = "" + s.key), Wr(s) && (z = s.ref, Ur(s, R));
        for (T in s)
          Ve.call(s, T) && !Yr.hasOwnProperty(T) && (x[T] = s[T]);
        if (n && n.defaultProps) {
          var j = n.defaultProps;
          for (T in j)
            x[T] === void 0 && (x[T] = j[T]);
        }
        if (w || z) {
          var D = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          w && Gr(x, D), z && Hr(x, D);
        }
        return qr(n, w, z, R, d, Ne.current, x);
      }
    }
    var lt = C.ReactCurrentOwner, Lt = C.ReactDebugCurrentFrame;
    function Se(n) {
      if (n) {
        var s = n._owner, u = ze(n.type, n._source, s ? s.type : null);
        Lt.setExtraStackFrame(u);
      } else
        Lt.setExtraStackFrame(null);
    }
    var ft;
    ft = !1;
    function dt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function zt() {
      {
        if (lt.current) {
          var n = Y(lt.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Kr(n) {
      {
        if (n !== void 0) {
          var s = n.fileName.replace(/^.*[\\\/]/, ""), u = n.lineNumber;
          return `

Check your code at ` + s + ":" + u + ".";
        }
        return "";
      }
    }
    var Vt = {};
    function Jr(n) {
      {
        var s = zt();
        if (!s) {
          var u = typeof n == "string" ? n : n.displayName || n.name;
          u && (s = `

Check the top-level render call using <` + u + ">.");
        }
        return s;
      }
    }
    function Yt(n, s) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var u = Jr(s);
        if (Vt[u])
          return;
        Vt[u] = !0;
        var d = "";
        n && n._owner && n._owner !== lt.current && (d = " It was passed a child from " + Y(n._owner.type) + "."), Se(n), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, d), Se(null);
      }
    }
    function Wt(n, s) {
      {
        if (typeof n != "object")
          return;
        if (ct(n))
          for (var u = 0; u < n.length; u++) {
            var d = n[u];
            dt(d) && Yt(d, s);
          }
        else if (dt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var R = M(n);
          if (typeof R == "function" && R !== n.entries)
            for (var T = R.call(n), x; !(x = T.next()).done; )
              dt(x.value) && Yt(x.value, s);
        }
      }
    }
    function Zr(n) {
      {
        var s = n.type;
        if (s == null || typeof s == "string")
          return;
        var u;
        if (typeof s == "function")
          u = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === h))
          u = s.propTypes;
        else
          return;
        if (u) {
          var d = Y(s);
          Mr(u, n.props, "prop", d, n);
        } else if (s.PropTypes !== void 0 && !ft) {
          ft = !0;
          var R = Y(s);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qr(n) {
      {
        for (var s = Object.keys(n.props), u = 0; u < s.length; u++) {
          var d = s[u];
          if (d !== "children" && d !== "key") {
            Se(n), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), Se(null);
            break;
          }
        }
        n.ref !== null && (Se(n), v("Invalid attribute `ref` supplied to `React.Fragment`."), Se(null));
      }
    }
    function Bt(n, s, u, d, R, T) {
      {
        var x = it(n);
        if (!x) {
          var w = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Kr(R);
          z ? w += z : w += zt();
          var j;
          n === null ? j = "null" : ct(n) ? j = "array" : n !== void 0 && n.$$typeof === t ? (j = "<" + (Y(n.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : j = typeof n, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, w);
        }
        var D = Xr(n, s, u, R, T);
        if (D == null)
          return D;
        if (x) {
          var B = s.children;
          if (B !== void 0)
            if (d)
              if (ct(B)) {
                for (var Ee = 0; Ee < B.length; Ee++)
                  Wt(B[Ee], n);
                Object.freeze && Object.freeze(B);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wt(B, n);
        }
        return n === o ? Qr(D) : Zr(D), D;
      }
    }
    function en(n, s, u) {
      return Bt(n, s, u, !0);
    }
    function tn(n, s, u) {
      return Bt(n, s, u, !1);
    }
    var rn = tn, nn = en;
    je.Fragment = o, je.jsx = rn, je.jsxs = nn;
  }()), je;
}
var De = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function ln() {
  if (qt)
    return De;
  qt = 1;
  var e = me, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, l, g) {
    var p, h = {}, b = null, E = null;
    g !== void 0 && (b = "" + g), l.key !== void 0 && (b = "" + l.key), l.ref !== void 0 && (E = l.ref);
    for (p in l)
      o.call(l, p) && !i.hasOwnProperty(p) && (h[p] = l[p]);
    if (f && f.defaultProps)
      for (p in l = f.defaultProps, l)
        h[p] === void 0 && (h[p] = l[p]);
    return { $$typeof: t, type: f, key: b, ref: E, props: h, _owner: a.current };
  }
  return De.Fragment = r, De.jsx = c, De.jsxs = c, De;
}
process.env.NODE_ENV === "production" ? yt.exports = ln() : yt.exports = un();
var le = yt.exports, V = function() {
  return V = Object.assign || function(t) {
    for (var r, o = 1, a = arguments.length; o < a; o++) {
      r = arguments[o];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, V.apply(this, arguments);
};
function Re(e, t, r) {
  if (r || arguments.length === 2)
    for (var o = 0, a = t.length, i; o < a; o++)
      (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function fn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var dn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, pn = /* @__PURE__ */ fn(
  function(e) {
    return dn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), A = "-ms-", Fe = "-moz-", _ = "-webkit-", pr = "comm", et = "rule", kt = "decl", hn = "@import", hr = "@keyframes", mn = "@layer", gn = Math.abs, Ct = String.fromCharCode, vt = Object.assign;
function yn(e, t) {
  return F(e, 0) ^ 45 ? (((t << 2 ^ F(e, 0)) << 2 ^ F(e, 1)) << 2 ^ F(e, 2)) << 2 ^ F(e, 3) : 0;
}
function mr(e) {
  return e.trim();
}
function re(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function y(e, t, r) {
  return e.replace(t, r);
}
function He(e, t) {
  return e.indexOf(t);
}
function F(e, t) {
  return e.charCodeAt(t) | 0;
}
function _e(e, t, r) {
  return e.slice(t, r);
}
function K(e) {
  return e.length;
}
function gr(e) {
  return e.length;
}
function $e(e, t) {
  return t.push(e), e;
}
function vn(e, t) {
  return e.map(t).join("");
}
function Xt(e, t) {
  return e.filter(function(r) {
    return !re(r, t);
  });
}
var tt = 1, ke = 1, yr = 0, U = 0, $ = 0, Oe = "";
function rt(e, t, r, o, a, i, c, f) {
  return { value: e, root: t, parent: r, type: o, props: a, children: i, line: tt, column: ke, length: c, return: "", siblings: f };
}
function ie(e, t) {
  return vt(rt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function xe(e) {
  for (; e.root; )
    e = ie(e.root, { children: [e] });
  $e(e, e.siblings);
}
function bn() {
  return $;
}
function wn() {
  return $ = U > 0 ? F(Oe, --U) : 0, ke--, $ === 10 && (ke = 1, tt--), $;
}
function H() {
  return $ = U < yr ? F(Oe, U++) : 0, ke++, $ === 10 && (ke = 1, tt++), $;
}
function pe() {
  return F(Oe, U);
}
function qe() {
  return U;
}
function nt(e, t) {
  return _e(Oe, e, t);
}
function bt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Sn(e) {
  return tt = ke = 1, yr = K(Oe = e), U = 0, [];
}
function En(e) {
  return Oe = "", e;
}
function pt(e) {
  return mr(nt(U - 1, wt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function xn(e) {
  for (; ($ = pe()) && $ < 33; )
    H();
  return bt(e) > 2 || bt($) > 3 ? "" : " ";
}
function Rn(e, t) {
  for (; --t && H() && !($ < 48 || $ > 102 || $ > 57 && $ < 65 || $ > 70 && $ < 97); )
    ;
  return nt(e, qe() + (t < 6 && pe() == 32 && H() == 32));
}
function wt(e) {
  for (; H(); )
    switch ($) {
      case e:
        return U;
      case 34:
      case 39:
        e !== 34 && e !== 39 && wt($);
        break;
      case 40:
        e === 41 && wt(e);
        break;
      case 92:
        H();
        break;
    }
  return U;
}
function _n(e, t) {
  for (; H() && e + $ !== 57; )
    if (e + $ === 84 && pe() === 47)
      break;
  return "/*" + nt(t, U - 1) + "*" + Ct(e === 47 ? e : H());
}
function kn(e) {
  for (; !bt(pe()); )
    H();
  return nt(e, U);
}
function Cn(e) {
  return En(Xe("", null, null, null, [""], e = Sn(e), 0, [0], e));
}
function Xe(e, t, r, o, a, i, c, f, l) {
  for (var g = 0, p = 0, h = c, b = 0, E = 0, k = 0, N = 1, M = 1, C = 1, v = 0, P = "", O = a, I = i, S = o, m = P; M; )
    switch (k = v, v = H()) {
      case 40:
        if (k != 108 && F(m, h - 1) == 58) {
          He(m += y(pt(v), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        m += pt(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        m += xn(k);
        break;
      case 92:
        m += Rn(qe() - 1, 7);
        continue;
      case 47:
        switch (pe()) {
          case 42:
          case 47:
            $e(Pn(_n(H(), qe()), t, r, l), l);
            break;
          default:
            m += "/";
        }
        break;
      case 123 * N:
        f[g++] = K(m) * C;
      case 125 * N:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            M = 0;
          case 59 + p:
            C == -1 && (m = y(m, /\f/g, "")), E > 0 && K(m) - h && $e(E > 32 ? Jt(m + ";", o, r, h - 1, l) : Jt(y(m, " ", "") + ";", o, r, h - 2, l), l);
            break;
          case 59:
            m += ";";
          default:
            if ($e(S = Kt(m, t, r, g, p, a, f, P, O = [], I = [], h, i), i), v === 123)
              if (p === 0)
                Xe(m, t, S, S, O, i, h, f, I);
              else
                switch (b === 99 && F(m, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xe(e, S, S, o && $e(Kt(e, S, S, 0, 0, a, f, P, a, O = [], h, I), I), a, I, h, f, o ? O : I);
                    break;
                  default:
                    Xe(m, S, S, S, [""], I, 0, f, I);
                }
        }
        g = p = E = 0, N = C = 1, P = m = "", h = c;
        break;
      case 58:
        h = 1 + K(m), E = k;
      default:
        if (N < 1) {
          if (v == 123)
            --N;
          else if (v == 125 && N++ == 0 && wn() == 125)
            continue;
        }
        switch (m += Ct(v), v * N) {
          case 38:
            C = p > 0 ? 1 : (m += "\f", -1);
            break;
          case 44:
            f[g++] = (K(m) - 1) * C, C = 1;
            break;
          case 64:
            pe() === 45 && (m += pt(H())), b = pe(), p = h = K(P = m += kn(qe())), v++;
            break;
          case 45:
            k === 45 && K(m) == 2 && (N = 0);
        }
    }
  return i;
}
function Kt(e, t, r, o, a, i, c, f, l, g, p, h) {
  for (var b = a - 1, E = a === 0 ? i : [""], k = gr(E), N = 0, M = 0, C = 0; N < o; ++N)
    for (var v = 0, P = _e(e, b + 1, b = gn(M = c[N])), O = e; v < k; ++v)
      (O = mr(M > 0 ? E[v] + " " + P : y(P, /&\f/g, E[v]))) && (l[C++] = O);
  return rt(e, t, r, a === 0 ? et : f, l, g, p, h);
}
function Pn(e, t, r, o) {
  return rt(e, t, r, pr, Ct(bn()), _e(e, 2, -2), 0, o);
}
function Jt(e, t, r, o, a) {
  return rt(e, t, r, kt, _e(e, 0, o), _e(e, o + 1, -1), o, a);
}
function vr(e, t, r) {
  switch (yn(e, t)) {
    case 5103:
      return _ + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return _ + e + e;
    case 4789:
      return Fe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return _ + e + Fe + e + A + e + e;
    case 5936:
      switch (F(e, t + 11)) {
        case 114:
          return _ + e + A + y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return _ + e + A + y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return _ + e + A + y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return _ + e + A + e + e;
    case 6165:
      return _ + e + A + "flex-" + e + e;
    case 5187:
      return _ + e + y(e, /(\w+).+(:[^]+)/, _ + "box-$1$2" + A + "flex-$1$2") + e;
    case 5443:
      return _ + e + A + "flex-item-" + y(e, /flex-|-self/g, "") + (re(e, /flex-|baseline/) ? "" : A + "grid-row-" + y(e, /flex-|-self/g, "")) + e;
    case 4675:
      return _ + e + A + "flex-line-pack" + y(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return _ + e + A + y(e, "shrink", "negative") + e;
    case 5292:
      return _ + e + A + y(e, "basis", "preferred-size") + e;
    case 6060:
      return _ + "box-" + y(e, "-grow", "") + _ + e + A + y(e, "grow", "positive") + e;
    case 4554:
      return _ + y(e, /([^-])(transform)/g, "$1" + _ + "$2") + e;
    case 6187:
      return y(y(y(e, /(zoom-|grab)/, _ + "$1"), /(image-set)/, _ + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return y(e, /(image-set\([^]*)/, _ + "$1$`$1");
    case 4968:
      return y(y(e, /(.+:)(flex-)?(.*)/, _ + "box-pack:$3" + A + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + _ + e + e;
    case 4200:
      if (!re(e, /flex-|baseline/))
        return A + "grid-column-align" + _e(e, t) + e;
      break;
    case 2592:
    case 3360:
      return A + y(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(o, a) {
        return t = a, re(o.props, /grid-\w+-end/);
      }) ? ~He(e + (r = r[t].value), "span") ? e : A + y(e, "-start", "") + e + A + "grid-row-span:" + (~He(r, "span") ? re(r, /\d+/) : +re(r, /\d+/) - +re(e, /\d+/)) + ";" : A + y(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(o) {
        return re(o.props, /grid-\w+-start/);
      }) ? e : A + y(y(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y(e, /(.+)-inline(.+)/, _ + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (K(e) - 1 - t > 6)
        switch (F(e, t + 1)) {
          case 109:
            if (F(e, t + 4) !== 45)
              break;
          case 102:
            return y(e, /(.+:)(.+)-([^]+)/, "$1" + _ + "$2-$3$1" + Fe + (F(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~He(e, "stretch") ? vr(y(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return y(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(o, a, i, c, f, l, g) {
        return A + a + ":" + i + g + (c ? A + a + "-span:" + (f ? l : +l - +i) + g : "") + e;
      });
    case 4949:
      if (F(e, t + 6) === 121)
        return y(e, ":", ":" + _) + e;
      break;
    case 6444:
      switch (F(e, F(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return y(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + _ + (F(e, 14) === 45 ? "inline-" : "") + "box$3$1" + _ + "$2$3$1" + A + "$2box$3") + e;
        case 100:
          return y(e, ":", ":" + A) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return y(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Ze(e, t) {
  for (var r = "", o = 0; o < e.length; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Tn(e, t, r, o) {
  switch (e.type) {
    case mn:
      if (e.children.length)
        break;
    case hn:
    case kt:
      return e.return = e.return || e.value;
    case pr:
      return "";
    case hr:
      return e.return = e.value + "{" + Ze(e.children, o) + "}";
    case et:
      if (!K(e.value = e.props.join(",")))
        return "";
  }
  return K(r = Ze(e.children, o)) ? e.return = e.value + "{" + r + "}" : "";
}
function On(e) {
  var t = gr(e);
  return function(r, o, a, i) {
    for (var c = "", f = 0; f < t; f++)
      c += e[f](r, o, a, i) || "";
    return c;
  };
}
function An(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function In(e, t, r, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case kt:
        e.return = vr(e.value, e.length, r);
        return;
      case hr:
        return Ze([ie(e, { value: y(e.value, "@", "@" + _) })], o);
      case et:
        if (e.length)
          return vn(r = e.props, function(a) {
            switch (re(a, o = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                xe(ie(e, { props: [y(a, /:(read-\w+)/, ":" + Fe + "$1")] })), xe(ie(e, { props: [a] })), vt(e, { props: Xt(r, o) });
                break;
              case "::placeholder":
                xe(ie(e, { props: [y(a, /:(plac\w+)/, ":" + _ + "input-$1")] })), xe(ie(e, { props: [y(a, /:(plac\w+)/, ":" + Fe + "$1")] })), xe(ie(e, { props: [y(a, /:(plac\w+)/, A + "input-$1")] })), xe(ie(e, { props: [a] })), vt(e, { props: Xt(r, o) });
                break;
            }
            return "";
          });
    }
}
var Nn = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ge = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", br = "active", wr = "data-styled-version", ot = "6.1.2", Pt = `/*!sc*/
`, Tt = typeof window < "u" && "HTMLElement" in window, jn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Zt = /invalid hook call/i, We = /* @__PURE__ */ new Set(), Dn = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", o = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, a = console.error;
    try {
      var i = !0;
      console.error = function(c) {
        for (var f = [], l = 1; l < arguments.length; l++)
          f[l - 1] = arguments[l];
        Zt.test(c) ? (i = !1, We.delete(o)) : a.apply(void 0, Re([c], f, !1));
      }, on(), i && !We.has(o) && (console.warn(o), We.add(o));
    } catch (c) {
      Zt.test(c.message) && We.delete(o);
    } finally {
      console.error = a;
    }
  }
}, at = Object.freeze([]), Ce = Object.freeze({});
function $n(e, t, r) {
  return r === void 0 && (r = Ce), e.theme !== r.theme && e.theme || t || r.theme;
}
var St = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Fn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Mn = /(^-|-$)/g;
function Qt(e) {
  return e.replace(Fn, "-").replace(Mn, "");
}
var Ln = /(a)(d)/gi, Be = 52, er = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Et(e) {
  var t, r = "";
  for (t = Math.abs(e); t > Be; t = t / Be | 0)
    r = er(t % Be) + r;
  return (er(t % Be) + r).replace(Ln, "$1-$2");
}
var ht, Sr = 5381, fe = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Er = function(e) {
  return fe(Sr, e);
};
function zn(e) {
  return Et(Er(e) >>> 0);
}
function xr(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function mt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Rr = typeof Symbol == "function" && Symbol.for, _r = Rr ? Symbol.for("react.memo") : 60115, Vn = Rr ? Symbol.for("react.forward_ref") : 60112, Yn = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Wn = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, kr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Bn = ((ht = {})[Vn] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, ht[_r] = kr, ht);
function tr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === _r ? kr : "$$typeof" in e ? Bn[e.$$typeof] : Yn;
  var t;
}
var Un = Object.defineProperty, Gn = Object.getOwnPropertyNames, rr = Object.getOwnPropertySymbols, Hn = Object.getOwnPropertyDescriptor, qn = Object.getPrototypeOf, nr = Object.prototype;
function Cr(e, t, r) {
  if (typeof t != "string") {
    if (nr) {
      var o = qn(t);
      o && o !== nr && Cr(e, o, r);
    }
    var a = Gn(t);
    rr && (a = a.concat(rr(t)));
    for (var i = tr(e), c = tr(t), f = 0; f < a.length; ++f) {
      var l = a[f];
      if (!(l in Wn || r && r[l] || c && l in c || i && l in i)) {
        var g = Hn(t, l);
        try {
          Un(e, l, g);
        } catch {
        }
      }
    }
  }
  return e;
}
function Pe(e) {
  return typeof e == "function";
}
function Ot(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function de(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function or(e, t) {
  if (e.length === 0)
    return "";
  for (var r = e[0], o = 1; o < e.length; o++)
    r += t ? t + e[o] : e[o];
  return r;
}
function Te(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function xt(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Te(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      e[o] = xt(e[o], t[o]);
  else if (Te(t))
    for (var o in t)
      e[o] = xt(e[o], t[o]);
  return e;
}
function At(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Xn = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function Kn() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = e[0], o = [], a = 1, i = e.length; a < i; a += 1)
    o.push(e[a]);
  return o.forEach(function(c) {
    r = r.replace(/%[a-z]/, c);
  }), r;
}
function Ae(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Kn.apply(void 0, Re([Xn[e]], t, !1)).trim());
}
var Jn = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, o = 0; o < t; o++)
      r += this.groupSizes[o];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, a = o.length, i = a; t >= i; )
        if ((i <<= 1) < 0)
          throw Ae(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var c = a; c < i; c++)
        this.groupSizes[c] = 0;
    }
    for (var f = this.indexOfGroup(t + 1), l = (c = 0, r.length); c < l; c++)
      this.tag.insertRule(f, r[c]) && (this.groupSizes[t]++, f++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], o = this.indexOfGroup(t), a = o + r;
      this.groupSizes[t] = 0;
      for (var i = o; i < a; i++)
        this.tag.deleteRule(o);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var o = this.groupSizes[t], a = this.indexOfGroup(t), i = a + o, c = a; c < i; c++)
      r += "".concat(this.tag.getRule(c)).concat(Pt);
    return r;
  }, e;
}(), Ke = /* @__PURE__ */ new Map(), Qe = /* @__PURE__ */ new Map(), Je = 1, Ue = function(e) {
  if (Ke.has(e))
    return Ke.get(e);
  for (; Qe.has(Je); )
    Je++;
  var t = Je++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw Ae(16, "".concat(t));
  return Ke.set(e, t), Qe.set(t, e), t;
}, Zn = function(e, t) {
  Je = t + 1, Ke.set(e, t), Qe.set(t, e);
}, Qn = "style[".concat(ge, "][").concat(wr, '="').concat(ot, '"]'), eo = new RegExp("^".concat(ge, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), to = function(e, t, r) {
  for (var o, a = r.split(","), i = 0, c = a.length; i < c; i++)
    (o = a[i]) && e.registerName(t, o);
}, ro = function(e, t) {
  for (var r, o = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Pt), a = [], i = 0, c = o.length; i < c; i++) {
    var f = o[i].trim();
    if (f) {
      var l = f.match(eo);
      if (l) {
        var g = 0 | parseInt(l[1], 10), p = l[2];
        g !== 0 && (Zn(p, g), to(e, p, l[3]), e.getTag().insertRules(g, a)), a.length = 0;
      } else
        a.push(f);
    }
  }
};
function no() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Pr = function(e) {
  var t = document.head, r = e || t, o = document.createElement("style"), a = function(f) {
    var l = Array.from(f.querySelectorAll("style[".concat(ge, "]")));
    return l[l.length - 1];
  }(r), i = a !== void 0 ? a.nextSibling : null;
  o.setAttribute(ge, br), o.setAttribute(wr, ot);
  var c = no();
  return c && o.setAttribute("nonce", c), r.insertBefore(o, i), o;
}, oo = function() {
  function e(t) {
    this.element = Pr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet)
        return r.sheet;
      for (var o = document.styleSheets, a = 0, i = o.length; a < i; a++) {
        var c = o[a];
        if (c.ownerNode === r)
          return c;
      }
      throw Ae(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), ao = function() {
  function e(t) {
    this.element = Pr(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(r);
      return this.element.insertBefore(o, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), io = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), ar = Tt, so = { isServer: !Tt, useCSSOMInjection: !jn }, Tr = function() {
  function e(t, r, o) {
    t === void 0 && (t = Ce), r === void 0 && (r = {});
    var a = this;
    this.options = V(V({}, so), t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && Tt && ar && (ar = !1, function(i) {
      for (var c = document.querySelectorAll(Qn), f = 0, l = c.length; f < l; f++) {
        var g = c[f];
        g && g.getAttribute(ge) !== br && (ro(i, g), g.parentNode && g.parentNode.removeChild(g));
      }
    }(this)), At(this, function() {
      return function(i) {
        for (var c = i.getTag(), f = c.length, l = "", g = function(h) {
          var b = function(C) {
            return Qe.get(C);
          }(h);
          if (b === void 0)
            return "continue";
          var E = i.names.get(b), k = c.getGroup(h);
          if (E === void 0 || k.length === 0)
            return "continue";
          var N = "".concat(ge, ".g").concat(h, '[id="').concat(b, '"]'), M = "";
          E !== void 0 && E.forEach(function(C) {
            C.length > 0 && (M += "".concat(C, ","));
          }), l += "".concat(k).concat(N, '{content:"').concat(M, '"}').concat(Pt);
        }, p = 0; p < f; p++)
          g(p);
        return l;
      }(a);
    });
  }
  return e.registerId = function(t) {
    return Ue(t);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(V(V({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var o = r.useCSSOMInjection, a = r.target;
      return r.isServer ? new io(a) : o ? new oo(a) : new ao(a);
    }(this.options), new Jn(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (Ue(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, e.prototype.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(Ue(t), o);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Ue(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), co = /&/g, uo = /^\s*\/\/.*$/gm;
function Or(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(o) {
      return "".concat(t, " ").concat(o);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Or(r.children, t)), r;
  });
}
function lo(e) {
  var t, r, o, a = e === void 0 ? Ce : e, i = a.options, c = i === void 0 ? Ce : i, f = a.plugins, l = f === void 0 ? at : f, g = function(b, E, k) {
    return k === r || k.startsWith(r) && k.endsWith(r) && k.replaceAll(r, "").length > 0 ? ".".concat(t) : b;
  }, p = l.slice();
  p.push(function(b) {
    b.type === et && b.value.includes("&") && (b.props[0] = b.props[0].replace(co, r).replace(o, g));
  }), c.prefix && p.push(In), p.push(Tn);
  var h = function(b, E, k, N) {
    E === void 0 && (E = ""), k === void 0 && (k = ""), N === void 0 && (N = "&"), t = N, r = E, o = new RegExp("\\".concat(r, "\\b"), "g");
    var M = b.replace(uo, ""), C = Cn(k || E ? "".concat(k, " ").concat(E, " { ").concat(M, " }") : M);
    c.namespace && (C = Or(C, c.namespace));
    var v = [];
    return Ze(C, On(p.concat(An(function(P) {
      return v.push(P);
    })))), v;
  };
  return h.hash = l.length ? l.reduce(function(b, E) {
    return E.name || Ae(15), fe(b, E.name);
  }, Sr).toString() : "", h;
}
var fo = new Tr(), Rt = lo(), Ar = me.createContext({ shouldForwardProp: void 0, styleSheet: fo, stylis: Rt });
Ar.Consumer;
me.createContext(void 0);
function ir() {
  return sn(Ar);
}
var sr = function() {
  function e(t, r) {
    var o = this;
    this.inject = function(a, i) {
      i === void 0 && (i = Rt);
      var c = o.name + i.hash;
      a.hasNameForId(o.id, c) || a.insertRules(o.id, c, i(o.rules, c, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, At(this, function() {
      throw Ae(12, String(o.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Rt), this.name + t.hash;
  }, e;
}(), po = function(e) {
  return e >= "A" && e <= "Z";
};
function cr(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var o = e[r];
    if (r === 1 && o === "-" && e[0] === "-")
      return e;
    po(o) ? t += "-" + o.toLowerCase() : t += o;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Ir = function(e) {
  return e == null || e === !1 || e === "";
}, Nr = function(e) {
  var t, r, o = [];
  for (var a in e) {
    var i = e[a];
    e.hasOwnProperty(a) && !Ir(i) && (Array.isArray(i) && i.isCss || Pe(i) ? o.push("".concat(cr(a), ":"), i, ";") : Te(i) ? o.push.apply(o, Re(Re(["".concat(a, " {")], Nr(i), !1), ["}"], !1)) : o.push("".concat(cr(a), ": ").concat((t = a, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Nn || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return o;
};
function he(e, t, r, o) {
  if (Ir(e))
    return [];
  if (Ot(e))
    return [".".concat(e.styledComponentId)];
  if (Pe(e)) {
    if (!Pe(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var a = e(t);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof sr || Te(a) || a === null || console.error("".concat(xr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), he(a, t, r, o);
  }
  var i;
  return e instanceof sr ? r ? (e.inject(r, o), [e.getName(o)]) : [e] : Te(e) ? Nr(e) : Array.isArray(e) ? Array.prototype.concat.apply(at, e.map(function(c) {
    return he(c, t, r, o);
  })) : [e.toString()];
}
function ho(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Pe(r) && !Ot(r))
      return !1;
  }
  return !0;
}
var mo = Er(ot), go = function() {
  function e(t, r, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && ho(t), this.componentId = r, this.baseHash = fe(mo, r), this.baseStyle = o, Tr.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, o) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, o) : "";
    if (this.isStatic && !o.hash)
      if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
        a = de(a, this.staticRulesId);
      else {
        var i = or(he(this.rules, t, r, o)), c = Et(fe(this.baseHash, i) >>> 0);
        if (!r.hasNameForId(this.componentId, c)) {
          var f = o(i, ".".concat(c), void 0, this.componentId);
          r.insertRules(this.componentId, c, f);
        }
        a = de(a, c), this.staticRulesId = c;
      }
    else {
      for (var l = fe(this.baseHash, o.hash), g = "", p = 0; p < this.rules.length; p++) {
        var h = this.rules[p];
        if (typeof h == "string")
          g += h, process.env.NODE_ENV !== "production" && (l = fe(l, h));
        else if (h) {
          var b = or(he(h, t, r, o));
          l = fe(l, b + p), g += b;
        }
      }
      if (g) {
        var E = Et(l >>> 0);
        r.hasNameForId(this.componentId, E) || r.insertRules(this.componentId, E, o(g, ".".concat(E), void 0, this.componentId)), a = de(a, E);
      }
    }
    return a;
  }, e;
}(), jr = me.createContext(void 0);
jr.Consumer;
var gt = {}, ur = /* @__PURE__ */ new Set();
function yo(e, t, r) {
  var o = Ot(e), a = e, i = !mt(e), c = t.attrs, f = c === void 0 ? at : c, l = t.componentId, g = l === void 0 ? function(O, I) {
    var S = typeof O != "string" ? "sc" : Qt(O);
    gt[S] = (gt[S] || 0) + 1;
    var m = "".concat(S, "-").concat(zn(ot + S + gt[S]));
    return I ? "".concat(I, "-").concat(m) : m;
  }(t.displayName, t.parentComponentId) : l, p = t.displayName, h = p === void 0 ? function(O) {
    return mt(O) ? "styled.".concat(O) : "Styled(".concat(xr(O), ")");
  }(e) : p, b = t.displayName && t.componentId ? "".concat(Qt(t.displayName), "-").concat(t.componentId) : t.componentId || g, E = o && a.attrs ? a.attrs.concat(f).filter(Boolean) : f, k = t.shouldForwardProp;
  if (o && a.shouldForwardProp) {
    var N = a.shouldForwardProp;
    if (t.shouldForwardProp) {
      var M = t.shouldForwardProp;
      k = function(O, I) {
        return N(O, I) && M(O, I);
      };
    } else
      k = N;
  }
  var C = new go(r, b, o ? a.componentStyle : void 0);
  function v(O, I) {
    return function(S, m, J) {
      var Z = S.attrs, it = S.componentStyle, st = S.defaultProps, Me = S.foldedComponentIds, Y = S.styledComponentId, Q = S.target, se = me.useContext(jr), Le = ir(), ye = S.shouldForwardProp || Le.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Gt(Y);
      var G = function(we, ce, ae) {
        for (var q, W = V(V({}, ce), { className: void 0, theme: ae }), ue = 0; ue < we.length; ue += 1) {
          var ee = Pe(q = we[ue]) ? q(W) : q;
          for (var X in ee)
            W[X] = X === "className" ? de(W[X], ee[X]) : X === "style" ? V(V({}, W[X]), ee[X]) : ee[X];
        }
        return ce.className && (W.className = de(W.className, ce.className)), W;
      }(Z, m, $n(m, se, st) || Ce), ne = G.as || Q, oe = {};
      for (var L in G)
        G[L] === void 0 || L[0] === "$" || L === "as" || L === "theme" || (L === "forwardedAs" ? oe.as = G.forwardedAs : ye && !ye(L, ne) || (oe[L] = G[L], ye || process.env.NODE_ENV !== "development" || pn(L) || ur.has(L) || !St.has(ne) || (ur.add(L), console.warn('styled-components: it looks like an unknown prop "'.concat(L, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ve = function(we, ce) {
        var ae = ir(), q = we.generateAndInjectStyles(ce, ae.styleSheet, ae.stylis);
        return process.env.NODE_ENV !== "production" && Gt(q), q;
      }(it, G);
      process.env.NODE_ENV !== "production" && S.warnTooManyClasses && S.warnTooManyClasses(ve);
      var be = de(Me, Y);
      return ve && (be += " " + ve), G.className && (be += " " + G.className), oe[mt(ne) && !St.has(ne) ? "class" : "className"] = be, oe.ref = J, an(ne, oe);
    }(P, O, I);
  }
  v.displayName = h;
  var P = me.forwardRef(v);
  return P.attrs = E, P.componentStyle = C, P.displayName = h, P.shouldForwardProp = k, P.foldedComponentIds = o ? de(a.foldedComponentIds, a.styledComponentId) : "", P.styledComponentId = b, P.target = o ? a.target : e, Object.defineProperty(P, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(O) {
    this._foldedDefaultProps = o ? function(I) {
      for (var S = [], m = 1; m < arguments.length; m++)
        S[m - 1] = arguments[m];
      for (var J = 0, Z = S; J < Z.length; J++)
        xt(I, Z[J], !0);
      return I;
    }({}, a.defaultProps, O) : O;
  } }), process.env.NODE_ENV !== "production" && (Dn(h, b), P.warnTooManyClasses = /* @__PURE__ */ function(O, I) {
    var S = {}, m = !1;
    return function(J) {
      if (!m && (S[J] = !0, Object.keys(S).length >= 200)) {
        var Z = I ? ' with the id of "'.concat(I, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(O).concat(Z, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), m = !0, S = {};
      }
    };
  }(h, b)), At(P, function() {
    return ".".concat(P.styledComponentId);
  }), i && Cr(P, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), P;
}
function lr(e, t) {
  for (var r = [e[0]], o = 0, a = t.length; o < a; o += 1)
    r.push(t[o], e[o + 1]);
  return r;
}
var fr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function vo(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (Pe(e) || Te(e))
    return fr(he(lr(at, Re([e], t, !0))));
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? he(o) : fr(he(lr(o, t)));
}
function _t(e, t, r) {
  if (r === void 0 && (r = Ce), !t)
    throw Ae(1, t);
  var o = function(a) {
    for (var i = [], c = 1; c < arguments.length; c++)
      i[c - 1] = arguments[c];
    return e(t, r, vo.apply(void 0, Re([a], i, !1)));
  };
  return o.attrs = function(a) {
    return _t(e, t, V(V({}, r), { attrs: Array.prototype.concat(r.attrs, a).filter(Boolean) }));
  }, o.withConfig = function(a) {
    return _t(e, t, V(V({}, r), a));
  }, o;
}
var Dr = function(e) {
  return _t(yo, e);
}, Ie = Dr;
St.forEach(function(e) {
  Ie[e] = Dr(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ge = "__sc-".concat(ge, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Ge] || (window[Ge] = 0), window[Ge] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ge] += 1);
const bo = Ie.button`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 10px;
  display: inline-block;
  color: ${(e) => e.primary ? "#fff" : "#000"};
  background-color: ${(e) => e.primary ? "#FF5655" : "#f4c4c4"};
  padding: ${(e) => e.size === "small" ? "7px 25px 8px" : e.size === "medium" ? "9px 30px 11px" : "14px 30px 16px"};
`, Ro = ({
  size: e,
  primary: t,
  disabled: r,
  text: o,
  onClick: a,
  ...i
}) => /* @__PURE__ */ le.jsx(
  bo,
  {
    type: "button",
    onClick: a,
    primary: t,
    disabled: r,
    size: e,
    ...i,
    children: o
  }
), wo = Ie.input`
  height: 40px;
  width: 300px;
  border-radius: 3px;
  border: solid 2px
    ${(e) => e.disabled ? "#e4e3ea" : e.error ? "#a9150b" : e.success ? "#067d68" : "#353637"};
  background-color: #fff;
  &:focus {
    border: solid 2px #1b116e;
  }
`, So = Ie.div`
  font-size: 14px;
  color: ${(e) => e.disabled ? "#e4e3ea" : "#080808"};
  padding-bottom: 6px;
`, Eo = Ie.div`
  font-size: 14px;
  color: #a9150b8;
  padding-top: 4px;
`, dr = Ie.p`
  margin: 0px;
  color: ${(e) => e.disabled ? "#e4e3ea" : e.error ? "#a9150b" : "#080808"};
`, _o = ({
  id: e,
  disabled: t,
  label: r,
  message: o,
  error: a,
  success: i,
  onChange: c,
  placeholder: f,
  ...l
}) => /* @__PURE__ */ le.jsxs(cn, { children: [
  /* @__PURE__ */ le.jsx(So, { children: /* @__PURE__ */ le.jsx(dr, { disabled: t, error: a, children: r }) }),
  /* @__PURE__ */ le.jsx(
    wo,
    {
      id: e,
      type: "text",
      onChange: c,
      disabled: t,
      error: a,
      success: i,
      placeholder: f,
      ...l
    }
  ),
  /* @__PURE__ */ le.jsx(Eo, { children: /* @__PURE__ */ le.jsx(dr, { error: a, children: o }) })
] });
export {
  Ro as Button,
  _o as Input
};
//# sourceMappingURL=index.es.js.map
