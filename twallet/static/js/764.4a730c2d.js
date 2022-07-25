"use strict";
(self["webpackChunktwallet"] = self["webpackChunktwallet"] || []).push([[764],{

/***/ 3926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3633);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7094);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);


 // TODO: return `EventHandlerName extends `on${infer EventName}` ? Lowercase<EventName> : never` once generatePropTypes runs with TS 4.1



function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}

function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}

/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 *
 * Demos:
 *
 * - [Click away listener](https://mui.com/base/react-click-away-listener/)
 *
 * API:
 *
 * - [ClickAwayListener API](https://mui.com/base/api/click-away-listener/)
 */
function ClickAwayListener(props) {
  const {
    children,
    disableReactTree = false,
    mouseEvent = 'onClick',
    onClickAway,
    touchEvent = 'onTouchEnd'
  } = props;
  const movedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const nodeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const activatedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const syntheticEventRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    // Ensure that this component is not "activated" synchronously.
    // https://github.com/facebook/react/issues/20074
    setTimeout(() => {
      activatedRef.current = true;
    }, 0);
    return () => {
      activatedRef.current = false;
    };
  }, []);
  const handleRef = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)( // @ts-expect-error TODO upstream fix
  children.ref, nodeRef); // The handler doesn't take event.defaultPrevented into account:
  //
  // event.preventDefault() is meant to stop default behaviors like
  // clicking a checkbox to check it, hitting a button to submit a form,
  // and hitting left arrow to move the cursor in a text input etc.
  // Only special HTML elements have these default behaviors.

  const handleClickAway = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(event => {
    // Given developers can stop the propagation of the synthetic event,
    // we can only be confident with a positive value.
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(nodeRef.current); // 1. IE11 support, which trigger the handleClickAway even after the unbind
    // 2. The child might render null.
    // 3. Behave like a blur listener.

    if (!activatedRef.current || !nodeRef.current || 'clientX' in event && clickedRootScrollbar(event, doc)) {
      return;
    } // Do not act if user performed touchmove


    if (movedRef.current) {
      movedRef.current = false;
      return;
    }

    let insideDOM; // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js

    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains( // @ts-expect-error returns `false` as intended when not dispatched from a Node
      event.target) || nodeRef.current.contains( // @ts-expect-error returns `false` as intended when not dispatched from a Node
      event.target);
    }

    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  }); // Keep track of mouse/touch events that bubbled up through the portal.

  const createHandleSynthetic = handlerName => event => {
    syntheticEventRef.current = true;
    const childrenPropsHandler = children.props[handlerName];

    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };

  const childrenProps = {
    ref: handleRef
  };

  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(nodeRef.current);

      const handleTouchMove = () => {
        movedRef.current = true;
      };

      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener('touchmove', handleTouchMove);
      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener('touchmove', handleTouchMove);
      };
    }

    return undefined;
  }, [handleClickAway, touchEvent]);

  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }

    return undefined;
  }, [handleClickAway, mouseEvent]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, childrenProps)
  });
}

 false ? 0 : void 0;

if (false) {}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClickAwayListener);

/***/ }),

/***/ 1508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Box_Box)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@mui/styled-engine/index.js + 3 modules
var styled_engine = __webpack_require__(9868);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
var styleFunctionSx_styleFunctionSx = __webpack_require__(6523);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
var extendSxProp = __webpack_require__(9707);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/useTheme.js
var useTheme = __webpack_require__(6682);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/createBox.js


const _excluded = ["className", "component"];






function createBox(options = {}) {
  const {
    defaultTheme,
    defaultClassName = 'MuiBox-root',
    generateClassName,
    styleFunctionSx = styleFunctionSx_styleFunctionSx/* default */.Z
  } = options;
  const BoxRoot = (0,styled_engine/* default */.ZP)('div')(styleFunctionSx);
  const Box = /*#__PURE__*/react.forwardRef(function Box(inProps, ref) {
    const theme = (0,useTheme/* default */.Z)(defaultTheme);

    const _extendSxProp = (0,extendSxProp/* default */.Z)(inProps),
          {
      className,
      component = 'div'
    } = _extendSxProp,
          other = (0,objectWithoutPropertiesLoose/* default */.Z)(_extendSxProp, _excluded);

    return /*#__PURE__*/(0,jsx_runtime.jsx)(BoxRoot, (0,esm_extends/* default */.Z)({
      as: component,
      ref: ref,
      className: (0,clsx_m/* default */.Z)(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme: theme
    }, other));
  });
  return Box;
}
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js
var ClassNameGenerator = __webpack_require__(7078);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/createTheme.js + 12 modules
var createTheme = __webpack_require__(2267);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Box/Box.js




const defaultTheme = (0,createTheme/* default */.Z)();
const Box = createBox({
  defaultTheme,
  defaultClassName: 'MuiBox-root',
  generateClassName: ClassNameGenerator/* default.generate */.Z.generate
});
 false ? 0 : void 0;
/* harmony default export */ const Box_Box = (Box);

/***/ }),

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

/***/ 1098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CreateAccount_CreateAccount)
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
// EXTERNAL MODULE: ./node_modules/@mui/material/Tooltip/Tooltip.js + 55 modules
var Tooltip = __webpack_require__(6454);
// EXTERNAL MODULE: ./node_modules/@mui/material/Snackbar/Snackbar.js + 3 modules
var Snackbar = __webpack_require__(7608);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(1508);
// EXTERNAL MODULE: ./node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(6186);
// EXTERNAL MODULE: ./node_modules/@mui/material/LinearProgress/LinearProgress.js + 1 modules
var LinearProgress = __webpack_require__(3968);
// EXTERNAL MODULE: ./node_modules/@mui/material/colors/orange.js
var orange = __webpack_require__(5137);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/pages/CreateAccount/index.less
var CreateAccount = __webpack_require__(2013);
;// CONCATENATED MODULE: ./src/pages/CreateAccount/index.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(CreateAccount/* default */.Z, options);




       /* harmony default export */ const pages_CreateAccount = (CreateAccount/* default */.Z && CreateAccount/* default.locals */.Z.locals ? CreateAccount/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/pages/CreateAccount/index.tsx
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






















function CreateAccount_CreateAccount() {
  var _this = this;

  var state = (0,GlobalProvider/* useGlobalContext */.bN)().state;

  var _a = __read((0,react.useState)(''), 2),
      password = _a[0],
      setPassword = _a[1];

  var _b = __read((0,react.useState)(false), 2),
      loading = _b[0],
      setLoading = _b[1];

  var _c = __read((0,react.useState)(false), 2),
      passwordVisibility = _c[0],
      setPasswordVisible = _c[1];

  var _d = __read((0,react.useState)(0), 2),
      progress = _d[0],
      setProgress = _d[1];

  var _e = __read((0,react.useState)(''), 2),
      privateKey = _e[0],
      setPrivateKey = _e[1];

  var _f = __read((0,react.useState)(''), 2),
      mnemonic = _f[0],
      setMnemonic = _f[1];

  var _g = __read((0,react.useState)(false), 2),
      openState = _g[0],
      setOpenState = _g[1];

  var navigate = (0,react_router/* useNavigate */.s0)();
  var dispatch = (0,GlobalProvider/* useGlobalContext */.bN)().dispatch;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (!password) return;
    var wallet = lib_esm/* Wallet.createRandom */.w5.createRandom();
    setPrivateKey(wallet.privateKey);
    setMnemonic(wallet.mnemonic.phrase);
  };

  var handleCopy = function handleCopy(content) {
    return __awaiter(_this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , navigator.clipboard.writeText(content)];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  var handleEnter = function handleEnter() {
    return __awaiter(_this, void 0, void 0, function () {
      var wallet, result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!password) return [2
            /*return*/
            ];

            try {
              wallet = new lib_esm/* Wallet */.w5(privateKey);
              wallet.connect(state.provider);
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
    className: "create-account-container"
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
    })), (0,jsx_runtime.jsx)(Typography/* default */.Z, __assign({
      variant: "h5",
      component: "h5"
    }, {
      children: "\u6B22\u8FCE\u4F7F\u7528TWallet"
    })), (0,jsx_runtime.jsx)("form", __assign({
      onSubmit: handleSubmit
    }, {
      children: (0,jsx_runtime.jsxs)(FormControl/* default */.Z, __assign({
        fullWidth: true,
        sx: {
          mt: '40px'
        },
        color: "secondary"
      }, {
        children: [(0,jsx_runtime.jsx)(TextField/* default */.Z, {
          required: true,
          label: "\u8BBE\u7F6E\u94B1\u5305\u5BC6\u7801",
          variant: "standard",
          autoComplete: "off",
          className: "input",
          type: passwordVisibility ? 'text' : 'password',
          InputProps: {
            endAdornment: (0,jsx_runtime.jsx)(InputAdornment/* default */.Z, __assign({
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
        }), (0,jsx_runtime.jsx)(Button/* default */.Z, __assign({
          disableElevation: true,
          sx: {
            mt: '40px'
          },
          type: "submit",
          variant: "contained"
        }, {
          children: "\u521B\u5EFA\u8D26\u53F7"
        }))]
      }))
    })), privateKey && (0,jsx_runtime.jsxs)(Box/* default */.Z, __assign({
      sx: {
        mt: '40px'
      }
    }, {
      children: [(0,jsx_runtime.jsx)(Typography/* default */.Z, __assign({
        gutterBottom: true,
        sx: {
          wordBreak: 'break-all'
        }
      }, {
        children: "\u70B9\u51FB\u590D\u5236\u79C1\u94A5\u4E0E\u52A9\u8BB0\u8BCD\uFF0C\u8BF7\u59A5\u5584\u4FDD\u7BA1\uFF0C\u5E76\u5C06\u5176\u4FDD\u5B58\u5230\u79BB\u7EBF\u8BBE\u5907\u4E2D\u3002"
      })), (0,jsx_runtime.jsx)(Tooltip/* default */.Z, __assign({
        title: "\u70B9\u51FB\u590D\u5236\u79C1\u94A5",
        placement: "top"
      }, {
        children: (0,jsx_runtime.jsx)(Button/* default */.Z, __assign({
          onClick: function onClick() {
            return handleCopy(privateKey);
          }
        }, {
          children: (0,jsx_runtime.jsx)(Typography/* default */.Z, __assign({
            gutterBottom: true,
            sx: {
              wordBreak: 'break-all'
            }
          }, {
            children: privateKey
          }))
        }))
      })), (0,jsx_runtime.jsx)(Tooltip/* default */.Z, __assign({
        title: "\u70B9\u51FB\u590D\u5236\u52A9\u8BB0\u8BCD",
        placement: "top"
      }, {
        children: (0,jsx_runtime.jsx)(Button/* default */.Z, __assign({
          onClick: function onClick() {
            return handleCopy(mnemonic);
          }
        }, {
          children: (0,jsx_runtime.jsx)(Typography/* default */.Z, __assign({
            gutterBottom: true,
            sx: {
              wordBreak: 'break-all'
            }
          }, {
            children: mnemonic
          }))
        }))
      })), loading ? (0,jsx_runtime.jsx)(Box/* default */.Z, __assign({
        sx: {
          width: '100%',
          mt: '40px'
        }
      }, {
        children: (0,jsx_runtime.jsx)(LinearProgress/* default */.Z, {
          variant: "determinate",
          value: progress
        })
      })) : (0,jsx_runtime.jsx)(Button/* default */.Z, __assign({
        disableElevation: true,
        variant: "contained",
        sx: {
          mt: '10px',
          width: '100%',
          backgroundColor: orange/* default.300 */.Z[300],
          '&:hover': {
            backgroundColor: orange/* default.700 */.Z[700]
          }
        },
        onClick: handleEnter
      }, {
        children: "\u8FDB\u5165\u94B1\u5305"
      }))]
    }))]
  }));
}

/***/ }),

/***/ 2013:
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
___CSS_LOADER_EXPORT___.push([module.id, ".create-account-container {\n  padding: 16px;\n  height: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/pages/CreateAccount/index.less"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,YAAA;AACJ","sourcesContent":[".create-account-container {\n    padding: 16px;\n    height: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=764.4a730c2d.js.map