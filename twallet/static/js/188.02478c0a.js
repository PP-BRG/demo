"use strict";
(self["webpackChunktwallet"] = self["webpackChunktwallet"] || []).push([[188],{

/***/ 1729:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(4836);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(4938));

var _jsxRuntime = __webpack_require__(5893);

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M10 4h4v4h-4zM4 16h4v4H4zm0-6h4v4H4zm0-6h4v4H4zm10 8.42V10h-4v4h2.42zm6.88-1.13-1.17-1.17c-.16-.16-.42-.16-.58 0l-.88.88L20 12.75l.88-.88c.16-.16.16-.42 0-.58zM11 18.25V20h1.75l6.67-6.67-1.75-1.75zM16 4h4v4h-4z"
}), 'AppRegistration');

exports.Z = _default;

/***/ }),

/***/ 3390:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(4836);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(4938));

var _jsxRuntime = __webpack_require__(5893);

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
}), 'VpnKey');

exports.Z = _default;

/***/ }),

/***/ 8188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ImportAccount_ImportAccount)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(6974);
// EXTERNAL MODULE: ./node_modules/@ethersproject/wallet/lib.esm/index.js + 17 modules
var lib_esm = __webpack_require__(9545);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(3711);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js + 21 modules
var withStyles = __webpack_require__(5565);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(3871);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      margin: 0
    },

    /* Styles applied to the root element if `variant="body2"`. */
    body2: theme.typography.body2,

    /* Styles applied to the root element if `variant="body1"`. */
    body1: theme.typography.body1,

    /* Styles applied to the root element if `variant="caption"`. */
    caption: theme.typography.caption,

    /* Styles applied to the root element if `variant="button"`. */
    button: theme.typography.button,

    /* Styles applied to the root element if `variant="h1"`. */
    h1: theme.typography.h1,

    /* Styles applied to the root element if `variant="h2"`. */
    h2: theme.typography.h2,

    /* Styles applied to the root element if `variant="h3"`. */
    h3: theme.typography.h3,

    /* Styles applied to the root element if `variant="h4"`. */
    h4: theme.typography.h4,

    /* Styles applied to the root element if `variant="h5"`. */
    h5: theme.typography.h5,

    /* Styles applied to the root element if `variant="h6"`. */
    h6: theme.typography.h6,

    /* Styles applied to the root element if `variant="subtitle1"`. */
    subtitle1: theme.typography.subtitle1,

    /* Styles applied to the root element if `variant="subtitle2"`. */
    subtitle2: theme.typography.subtitle2,

    /* Styles applied to the root element if `variant="overline"`. */
    overline: theme.typography.overline,

    /* Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers. */
    srOnly: {
      position: 'absolute',
      height: 1,
      width: 1,
      overflow: 'hidden'
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: 'left'
    },

    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: 'center'
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right'
    },

    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: 'justify'
    },

    /* Styles applied to the root element if `nowrap={true}`. */
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the root element if `gutterBottom={true}`. */
    gutterBottom: {
      marginBottom: '0.35em'
    },

    /* Styles applied to the root element if `paragraph={true}`. */
    paragraph: {
      marginBottom: 16
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="textPrimary"`. */
    colorTextPrimary: {
      color: theme.palette.text.primary
    },

    /* Styles applied to the root element if `color="textSecondary"`. */
    colorTextSecondary: {
      color: theme.palette.text.secondary
    },

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },

    /* Styles applied to the root element if `display="inline"`. */
    displayInline: {
      display: 'inline'
    },

    /* Styles applied to the root element if `display="block"`. */
    displayBlock: {
      display: 'block'
    }
  };
};
var defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p'
};
var Typography = /*#__PURE__*/react.forwardRef(function Typography(props, ref) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'inherit' : _props$align,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'initial' : _props$color,
      component = props.component,
      _props$display = props.display,
      display = _props$display === void 0 ? 'initial' : _props$display,
      _props$gutterBottom = props.gutterBottom,
      gutterBottom = _props$gutterBottom === void 0 ? false : _props$gutterBottom,
      _props$noWrap = props.noWrap,
      noWrap = _props$noWrap === void 0 ? false : _props$noWrap,
      _props$paragraph = props.paragraph,
      paragraph = _props$paragraph === void 0 ? false : _props$paragraph,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'body1' : _props$variant,
      _props$variantMapping = props.variantMapping,
      variantMapping = _props$variantMapping === void 0 ? defaultVariantMapping : _props$variantMapping,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);

  var Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className, variant !== 'inherit' && classes[variant], color !== 'initial' && classes["color".concat((0,capitalize/* default */.Z)(color))], noWrap && classes.noWrap, gutterBottom && classes.gutterBottom, paragraph && classes.paragraph, align !== 'inherit' && classes["align".concat((0,capitalize/* default */.Z)(align))], display !== 'initial' && classes["display".concat((0,capitalize/* default */.Z)(display))]),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const Typography_Typography = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiTypography'
})(Typography));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js
var FormControlContext = __webpack_require__(5736);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js








var InputAdornment_styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    height: '0.01em',
    // Fix IE 11 flexbox alignment. To remove at some point.
    maxHeight: '2em',
    alignItems: 'center',
    whiteSpace: 'nowrap'
  },

  /* Styles applied to the root element if `variant="filled"`. */
  filled: {
    '&$positionStart:not($hiddenLabel)': {
      marginTop: 16
    }
  },

  /* Styles applied to the root element if `position="start"`. */
  positionStart: {
    marginRight: 8
  },

  /* Styles applied to the root element if `position="end"`. */
  positionEnd: {
    marginLeft: 8
  },

  /* Styles applied to the root element if `disablePointerEvents=true`. */
  disablePointerEvents: {
    pointerEvents: 'none'
  },

  /* Styles applied if the adornment is used inside <FormControl hiddenLabel />. */
  hiddenLabel: {},

  /* Styles applied if the adornment is used inside <FormControl margin="dense" />. */
  marginDense: {}
};
var InputAdornment = /*#__PURE__*/react.forwardRef(function InputAdornment(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disablePointer = props.disablePointerEvents,
      disablePointerEvents = _props$disablePointer === void 0 ? false : _props$disablePointer,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      position = props.position,
      variantProp = props.variant,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["children", "classes", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"]);

  var muiFormControl = (0,FormControlContext/* useFormControl */.Y)() || {};
  var variant = variantProp;

  if (variantProp && muiFormControl.variant) {
    if (false) {}
  }

  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }

  return /*#__PURE__*/react.createElement(FormControlContext/* default.Provider */.Z.Provider, {
    value: null
  }, /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className, position === 'end' ? classes.positionEnd : classes.positionStart, disablePointerEvents && classes.disablePointerEvents, muiFormControl.hiddenLabel && classes.hiddenLabel, variant === 'filled' && classes.filled, muiFormControl.margin === 'dense' && classes.marginDense),
    ref: ref
  }, other), typeof children === 'string' && !disableTypography ? /*#__PURE__*/react.createElement(Typography_Typography, {
    color: "textSecondary"
  }, children) : children));
});
 false ? 0 : void 0;
/* harmony default export */ const InputAdornment_InputAdornment = ((0,withStyles/* default */.Z)(InputAdornment_styles, {
  name: 'MuiInputAdornment'
})(InputAdornment));
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 26 modules
var TextField = __webpack_require__(1088);
// EXTERNAL MODULE: ./node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(6867);
// EXTERNAL MODULE: ./node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(7109);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 2 modules
var Button = __webpack_require__(6914);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(1508);
// EXTERNAL MODULE: ./node_modules/@mui/material/LinearProgress/LinearProgress.js + 1 modules
var LinearProgress = __webpack_require__(3968);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Visibility.js
var Visibility = __webpack_require__(2961);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/VisibilityOff.js
var VisibilityOff = __webpack_require__(2450);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/VpnKey.js
var VpnKey = __webpack_require__(3390);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/AppRegistration.js
var AppRegistration = __webpack_require__(1729);
// EXTERNAL MODULE: ./node_modules/@mui/material/Snackbar/Snackbar.js + 3 modules
var Snackbar = __webpack_require__(7608);
// EXTERNAL MODULE: ./node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(6186);
// EXTERNAL MODULE: ./node_modules/@mui/material/colors/orange.js
var orange = __webpack_require__(5137);
// EXTERNAL MODULE: ./src/contexts/GlobalProvider.tsx
var GlobalProvider = __webpack_require__(5708);
// EXTERNAL MODULE: ./src/common/models/index.ts
var models = __webpack_require__(146);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/pages/ImportAccount/index.less
var ImportAccount = __webpack_require__(5811);
;// CONCATENATED MODULE: ./src/pages/ImportAccount/index.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ImportAccount/* default */.Z, options);




       /* harmony default export */ const pages_ImportAccount = (ImportAccount/* default */.Z && ImportAccount/* default.locals */.Z.locals ? ImportAccount/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/pages/ImportAccount/index.tsx
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};























function ImportAccount_ImportAccount() {
  var _this = this;

  var state = (0,GlobalProvider/* useGlobalContext */.bN)().state;

  var _a = __read((0,react.useState)(false), 2),
      loading = _a[0],
      setLoading = _a[1];

  var _b = __read((0,react.useState)(0), 2),
      progress = _b[0],
      setProgress = _b[1];

  var _c = __read((0,react.useState)(false), 2),
      openState = _c[0],
      setOpenState = _c[1];

  var _d = __read((0,react.useState)(true), 2),
      isPrivateKey = _d[0],
      setIsPrivateKey = _d[1];

  var _e = __read((0,react.useState)(false), 2),
      privateKeyVisibility = _e[0],
      setPrivateKeyVisibility = _e[1];

  var _f = __read((0,react.useState)(false), 2),
      passwordVisibility = _f[0],
      setPasswordVisible = _f[1];

  var _g = __read((0,react.useState)(''), 2),
      privateKey = _g[0],
      setPrivateKey = _g[1];

  var _h = __read((0,react.useState)(''), 2),
      password = _h[0],
      setPassword = _h[1];

  var dispatch = (0,GlobalProvider/* useGlobalContext */.bN)().dispatch;
  var navigate = (0,react_router/* useNavigate */.s0)();

  var handleSubmit = function handleSubmit(e) {
    return __awaiter(_this, void 0, void 0, function () {
      var wallet, w, result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            e.preventDefault();
            if (!password) return [2
            /*return*/
            ];

            try {
              if (isPrivateKey) {
                wallet = new lib_esm/* Wallet */.w5(privateKey);
                wallet.connect(state.provider);
              } else {
                w = lib_esm/* Wallet.fromMnemonic */.w5.fromMnemonic(privateKey);
                wallet = w.connect(state.provider);
                wallet.connect(state.provider);
              }
            } catch (err) {
              setOpenState(true);
              return [2
              /*return*/
              ];
            }

            if (!wallet) return [2
            /*return*/
            ];
            setLoading(true);
            return [4
            /*yield*/
            , wallet.encrypt(password, null, function (percent) {
              setProgress(percent * 100);
            })];

          case 1:
            result = _a.sent();
            window.localStorage.setItem(models/* STORAGE_KEY.ENCRYPTED_JSON_WALLET */.U.ENCRYPTED_JSON_WALLET, result);
            dispatch({
              type: GlobalProvider/* Actions.SET_WALLAT */.eX.SET_WALLAT,
              payload: {
                wallet: wallet
              }
            });
            setLoading(false);
            navigate('/');
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  return (0,jsx_runtime.jsxs)("div", __assign({
    className: "import-account-container"
  }, {
    children: [(0,jsx_runtime.jsx)(Snackbar/* default */.Z, __assign({
      open: openState,
      autoHideDuration: 1000,
      anchorOrigin: {
        horizontal: 'center',
        vertical: 'top'
      }
    }, {
      children: (0,jsx_runtime.jsx)(Alert/* default */.Z, __assign({
        severity: "error",
        sx: {
          width: '100%'
        }
      }, {
        children: "\u9519\u8BEF\uFF01\u8BF7\u91CD\u8BD5\uFF01"
      }))
    })), isPrivateKey ? (0,jsx_runtime.jsxs)("div", __assign({
      className: "header"
    }, {
      children: [(0,jsx_runtime.jsx)(Avatar/* default */.Z, __assign({
        sx: {
          backgroundColor: orange/* default.600 */.Z[600]
        }
      }, {
        children: (0,jsx_runtime.jsx)(VpnKey/* default */.Z, {})
      })), (0,jsx_runtime.jsx)("p", {
        children: "\u8BF7\u8F93\u5165\u79C1\u94A5\u5E76\u8BBE\u7F6E\u94B1\u5305\u5BC6\u7801"
      })]
    })) : (0,jsx_runtime.jsxs)("div", __assign({
      className: "header"
    }, {
      children: [(0,jsx_runtime.jsx)(Avatar/* default */.Z, __assign({
        sx: {
          backgroundColor: orange/* default.600 */.Z[600]
        }
      }, {
        children: (0,jsx_runtime.jsx)(AppRegistration/* default */.Z, {})
      })), (0,jsx_runtime.jsx)("p", {
        children: "\u8BF7\u8F93\u5165\u52A9\u8BB0\u8BCD\u5E76\u8BBE\u7F6E\u94B1\u5305\u5BC6\u7801"
      })]
    })), (0,jsx_runtime.jsx)("form", __assign({
      onSubmit: handleSubmit
    }, {
      children: (0,jsx_runtime.jsxs)(FormControl/* default */.Z, __assign({
        fullWidth: true,
        color: "secondary"
      }, {
        children: [(0,jsx_runtime.jsx)(TextField/* default */.Z, {
          required: true,
          label: isPrivateKey ? '私钥' : '助记词',
          variant: "standard",
          autoComplete: "off",
          className: "input",
          type: privateKeyVisibility ? 'text' : 'password',
          InputProps: {
            endAdornment: (0,jsx_runtime.jsx)(InputAdornment_InputAdornment, __assign({
              position: "end"
            }, {
              children: (0,jsx_runtime.jsx)(IconButton/* default */.Z, __assign({
                "aria-label": "toggle key visibility",
                onClick: function onClick() {
                  return setPrivateKeyVisibility(!privateKeyVisibility);
                }
              }, {
                children: privateKeyVisibility ? (0,jsx_runtime.jsx)(Visibility/* default */.Z, {}) : (0,jsx_runtime.jsx)(VisibilityOff/* default */.Z, {})
              }))
            }))
          },
          onChange: function onChange(e) {
            return setPrivateKey(e.target.value);
          }
        }), (0,jsx_runtime.jsx)(TextField/* default */.Z, {
          required: true,
          label: "\u8BBE\u7F6E\u94B1\u5305\u5BC6\u7801",
          variant: "standard",
          autoComplete: "off",
          className: "input",
          type: passwordVisibility ? 'text' : 'password',
          InputProps: {
            endAdornment: (0,jsx_runtime.jsx)(InputAdornment_InputAdornment, __assign({
              position: "end"
            }, {
              children: (0,jsx_runtime.jsx)(IconButton/* default */.Z, __assign({
                "aria-label": "toggle key visibility",
                onClick: function onClick() {
                  return setPasswordVisible(!passwordVisibility);
                }
              }, {
                children: passwordVisibility ? (0,jsx_runtime.jsx)(Visibility/* default */.Z, {}) : (0,jsx_runtime.jsx)(VisibilityOff/* default */.Z, {})
              }))
            }))
          },
          onChange: function onChange(e) {
            return setPassword(e.target.value);
          }
        }), loading ? (0,jsx_runtime.jsx)(Box/* default */.Z, __assign({
          sx: {
            width: '100%',
            mt: '40px'
          }
        }, {
          children: (0,jsx_runtime.jsx)(LinearProgress/* default */.Z, {
            variant: "determinate",
            value: progress
          })
        })) : (0,jsx_runtime.jsxs)(Box/* default */.Z, {
          children: [(0,jsx_runtime.jsx)(Button/* default */.Z, __assign({
            disableElevation: true,
            className: "button mgt-40",
            type: "submit",
            variant: "contained"
          }, {
            children: "\u5BFC\u5165\u8D26\u53F7"
          })), (0,jsx_runtime.jsx)(Button/* default */.Z, __assign({
            disableElevation: true,
            className: "button",
            variant: "contained"
          }, {
            children: "\u53D6\u6D88"
          })), (0,jsx_runtime.jsx)(Button/* default */.Z, __assign({
            sx: {
              width: '100%'
            },
            onClick: function onClick() {
              return setIsPrivateKey(!isPrivateKey);
            }
          }, {
            children: isPrivateKey ? '从助记词导入' : '从私钥导入'
          }))]
        }), (0,jsx_runtime.jsx)(Button/* default */.Z, __assign({
          sx: {
            width: '100%'
          },
          onClick: function onClick() {
            return navigate('/create');
          }
        }, {
          children: "\u8FD8\u6CA1\u6709\u8D26\u53F7\uFF1F\u70B9\u51FB\u521B\u5EFA"
        }))]
      }))
    }))]
  }));
}

/***/ }),

/***/ 5811:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".import-account-container {\n  padding: 0 16px;\n  height: 100%;\n}\n.import-account-container .header {\n  display: flex;\n  margin-top: 20px;\n  height: 70px;\n  text-align: center;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n.import-account-container .input {\n  margin: 20px 0 0;\n}\n.import-account-container .button {\n  width: 100%;\n  margin: 10px 0;\n}\n.import-account-container .mgt-40 {\n  margin-top: 40px;\n}\n", "",{"version":3,"sources":["webpack://./src/pages/ImportAccount/index.less"],"names":[],"mappings":"AAAA;EACI,eAAA;EACA,YAAA;AACJ;AAHA;EAIQ,aAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,mBAAA;EACA,8BAAA;AAER;AAZA;EAaQ,gBAAA;AAER;AAfA;EAgBQ,WAAA;EACA,cAAA;AAER;AAnBA;EAoBQ,gBAAA;AAER","sourcesContent":[".import-account-container {\n    padding: 0 16px;\n    height: 100%;\n    .header {\n        display: flex;\n        margin-top: 20px;\n        height: 70px;\n        text-align: center;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-between;\n    }\n    .input {\n        margin: 20px 0 0;\n    }\n    .button {\n        width: 100%;\n        margin: 10px 0;\n    }\n    .mgt-40 {\n        margin-top: 40px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=188.02478c0a.js.map