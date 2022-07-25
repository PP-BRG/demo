"use strict";
(self["webpackChunktwallet"] = self["webpackChunktwallet"] || []).push([[28],{

/***/ 270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ InputAdornment_InputAdornment)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(4780);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(8216);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControlContext.js
var FormControlContext = __webpack_require__(7167);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/useFormControl.js
var useFormControl = __webpack_require__(4423);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(948);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(4867);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
;// CONCATENATED MODULE: ./node_modules/@mui/material/InputAdornment/inputAdornmentClasses.js

function getInputAdornmentUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiInputAdornment', slot);
}
const inputAdornmentClasses = (0,generateUtilityClasses/* default */.Z)('MuiInputAdornment', ['root', 'filled', 'standard', 'outlined', 'positionStart', 'positionEnd', 'disablePointerEvents', 'hiddenLabel', 'sizeSmall']);
/* harmony default export */ const InputAdornment_inputAdornmentClasses = (inputAdornmentClasses);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(1657);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/InputAdornment/InputAdornment.js



var _span;

const _excluded = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"];














const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, styles[`position${(0,capitalize/* default */.Z)(ownerState.position)}`], ownerState.disablePointerEvents === true && styles.disablePointerEvents, styles[ownerState.variant]];
};

const useUtilityClasses = ownerState => {
  const {
    classes,
    disablePointerEvents,
    hiddenLabel,
    position,
    size,
    variant
  } = ownerState;
  const slots = {
    root: ['root', disablePointerEvents && 'disablePointerEvents', position && `position${(0,capitalize/* default */.Z)(position)}`, variant, hiddenLabel && 'hiddenLabel', size && `size${(0,capitalize/* default */.Z)(size)}`]
  };
  return (0,composeClasses/* default */.Z)(slots, getInputAdornmentUtilityClass, classes);
};

const InputAdornmentRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiInputAdornment',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({
  display: 'flex',
  height: '0.01em',
  // Fix IE11 flexbox alignment. To remove at some point.
  maxHeight: '2em',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  color: (theme.vars || theme).palette.action.active
}, ownerState.variant === 'filled' && {
  // Styles applied to the root element if `variant="filled"`.
  [`&.${InputAdornment_inputAdornmentClasses.positionStart}&:not(.${InputAdornment_inputAdornmentClasses.hiddenLabel})`]: {
    marginTop: 16
  }
}, ownerState.position === 'start' && {
  // Styles applied to the root element if `position="start"`.
  marginRight: 8
}, ownerState.position === 'end' && {
  // Styles applied to the root element if `position="end"`.
  marginLeft: 8
}, ownerState.disablePointerEvents === true && {
  // Styles applied to the root element if `disablePointerEvents={true}`.
  pointerEvents: 'none'
}));
const InputAdornment = /*#__PURE__*/react.forwardRef(function InputAdornment(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiInputAdornment'
  });

  const {
    children,
    className,
    component = 'div',
    disablePointerEvents = false,
    disableTypography = false,
    position,
    variant: variantProp
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const muiFormControl = (0,useFormControl/* default */.Z)() || {};
  let variant = variantProp;

  if (variantProp && muiFormControl.variant) {
    if (false) {}
  }

  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }

  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    hiddenLabel: muiFormControl.hiddenLabel,
    size: muiFormControl.size,
    disablePointerEvents,
    position,
    variant
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(FormControlContext/* default.Provider */.Z.Provider, {
    value: null,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputAdornmentRoot, (0,esm_extends/* default */.Z)({
      as: component,
      ownerState: ownerState,
      className: (0,clsx_m/* default */.Z)(classes.root, className),
      ref: ref
    }, other, {
      children: typeof children === 'string' && !disableTypography ? /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
        color: "text.secondary",
        children: children
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [position === 'start' ?
        /* notranslate needed while Google Translate will not fix zero-width space issue */
        _span || (_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "notranslate",
          children: "\u200B"
        })) : null, children]
      })
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ const InputAdornment_InputAdornment = (InputAdornment);

/***/ }),

/***/ 28:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Login_Login)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@ethersproject/wallet/lib.esm/index.js + 17 modules
var lib_esm = __webpack_require__(9545);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(6974);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 26 modules
var TextField = __webpack_require__(1088);
// EXTERNAL MODULE: ./node_modules/@mui/material/InputAdornment/InputAdornment.js + 1 modules
var InputAdornment = __webpack_require__(270);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 2 modules
var Button = __webpack_require__(6914);
// EXTERNAL MODULE: ./node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(6867);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Visibility.js
var Visibility = __webpack_require__(2961);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/VisibilityOff.js
var VisibilityOff = __webpack_require__(2450);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(6446);
// EXTERNAL MODULE: ./src/common/models/index.ts
var models = __webpack_require__(146);
// EXTERNAL MODULE: ./src/contexts/GlobalProvider.tsx
var GlobalProvider = __webpack_require__(5708);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/pages/Login/index.less
var Login = __webpack_require__(4922);
;// CONCATENATED MODULE: ./src/pages/Login/index.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Login/* default */.Z, options);




       /* harmony default export */ const pages_Login = (Login/* default */.Z && Login/* default.locals */.Z.locals ? Login/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/pages/Login/index.tsx
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
















function Login_Login() {
  var state = (0,GlobalProvider/* useGlobalContext */.bN)().state;

  var _a = __read((0,react.useState)(''), 2),
      password = _a[0],
      setPassword = _a[1];

  var _b = __read((0,react.useState)(false), 2),
      privateKeyVisibility = _b[0],
      setPrivateKeyVisibility = _b[1];

  var navigate = (0,react_router/* useNavigate */.s0)();
  var dispatch = (0,GlobalProvider/* useGlobalContext */.bN)().dispatch;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (!password) return;

    try {
      var encryptedWallet = window.localStorage.getItem(models/* STORAGE_KEY.ENCRYPTED_JSON_WALLET */.U.ENCRYPTED_JSON_WALLET);
      if (!encryptedWallet) return;
      var wallet = lib_esm/* Wallet.fromEncryptedJsonSync */.w5.fromEncryptedJsonSync(encryptedWallet, password);
      wallet = wallet.connect(state.provider);
      dispatch({
        type: GlobalProvider/* Actions.RECOVER_WALLET_ADN_ERC20 */.eX.RECOVER_WALLET_ADN_ERC20,
        payload: {
          wallet: wallet
        }
      });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (0,jsx_runtime.jsx)("div", __assign({
    className: "login-account-container"
  }, {
    children: (0,jsx_runtime.jsx)("form", __assign({
      onSubmit: handleSubmit
    }, {
      children: (0,jsx_runtime.jsxs)(FormControl/* default */.Z, __assign({
        fullWidth: true,
        color: "secondary"
      }, {
        children: [(0,jsx_runtime.jsx)(Typography/* default */.Z, __assign({
          variant: "h5",
          component: "h5"
        }, {
          children: "\u8F93\u5165\u5BC6\u7801\u4EE5\u89E3\u9501\u94B1\u5305"
        })), (0,jsx_runtime.jsx)(TextField/* default */.Z, {
          required: true,
          label: "\u8BF7\u8F93\u5165\u5BC6\u7801",
          variant: "standard",
          autoComplete: "off",
          sx: {
            mt: '40px'
          },
          type: privateKeyVisibility ? 'text' : 'password',
          InputProps: {
            endAdornment: (0,jsx_runtime.jsx)(InputAdornment/* default */.Z, __assign({
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
            return setPassword(e.target.value);
          }
        }), (0,jsx_runtime.jsx)(Button/* default */.Z, __assign({
          fullWidth: true,
          type: "submit",
          color: "secondary",
          sx: {
            mt: '40px'
          },
          onClick: handleSubmit
        }, {
          children: "\u767B\u5F55"
        }))]
      }))
    }))
  }));
}

/***/ }),

/***/ 4922:
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
___CSS_LOADER_EXPORT___.push([module.id, ".login-account-container {\n  padding: 16px;\n  height: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/pages/Login/index.less"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,YAAA;AACJ","sourcesContent":[".login-account-container {\n    padding: 16px;\n    height: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=28.22c75918.js.map