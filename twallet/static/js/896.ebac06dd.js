"use strict";
(self["webpackChunktwallet"] = self["webpackChunktwallet"] || []).push([[896],{

/***/ 6186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Alert_Alert)
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
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(1796);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(1657);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(8216);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(6501);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(4867);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Alert/alertClasses.js

function getAlertUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiAlert', slot);
}
const alertClasses = (0,generateUtilityClasses/* default */.Z)('MuiAlert', ['root', 'action', 'icon', 'message', 'filled', 'filledSuccess', 'filledInfo', 'filledWarning', 'filledError', 'outlined', 'outlinedSuccess', 'outlinedInfo', 'outlinedWarning', 'outlinedError', 'standard', 'standardSuccess', 'standardInfo', 'standardWarning', 'standardError']);
/* harmony default export */ const Alert_alertClasses = (alertClasses);
// EXTERNAL MODULE: ./node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(6867);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(5949);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/svg-icons/SuccessOutlined.js


/**
 * @ignore - internal component.
 */


/* harmony default export */ const SuccessOutlined = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), 'SuccessOutlined'));
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/svg-icons/ReportProblemOutlined.js


/**
 * @ignore - internal component.
 */


/* harmony default export */ const ReportProblemOutlined = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), 'ReportProblemOutlined'));
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/svg-icons/ErrorOutline.js


/**
 * @ignore - internal component.
 */


/* harmony default export */ const ErrorOutline = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'ErrorOutline'));
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/svg-icons/InfoOutlined.js


/**
 * @ignore - internal component.
 */


/* harmony default export */ const InfoOutlined = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), 'InfoOutlined'));
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/svg-icons/Close.js


/**
 * @ignore - internal component.
 *
 * Alias to `Clear`.
 */


/* harmony default export */ const Close = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close'));
;// CONCATENATED MODULE: ./node_modules/@mui/material/Alert/Alert.js



var _CloseIcon;

const _excluded = ["action", "children", "className", "closeText", "color", "icon", "iconMapping", "onClose", "role", "severity", "variant"];



















const useUtilityClasses = ownerState => {
  const {
    variant,
    color,
    severity,
    classes
  } = ownerState;
  const slots = {
    root: ['root', `${variant}${(0,capitalize/* default */.Z)(color || severity)}`, `${variant}`],
    icon: ['icon'],
    message: ['message'],
    action: ['action']
  };
  return (0,composeClasses/* default */.Z)(slots, getAlertUtilityClass, classes);
};

const AlertRoot = (0,styled/* default */.ZP)(Paper/* default */.Z, {
  name: 'MuiAlert',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${(0,capitalize/* default */.Z)(ownerState.color || ownerState.severity)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  const getColor = theme.palette.mode === 'light' ? colorManipulator/* darken */._j : colorManipulator/* lighten */.$n;
  const getBackgroundColor = theme.palette.mode === 'light' ? colorManipulator/* lighten */.$n : colorManipulator/* darken */._j;
  const color = ownerState.color || ownerState.severity;
  return (0,esm_extends/* default */.Z)({}, theme.typography.body2, {
    backgroundColor: 'transparent',
    display: 'flex',
    padding: '6px 16px'
  }, color && ownerState.variant === 'standard' && {
    color: theme.vars ? theme.vars.palette.Alert[`${color}Color`] : getColor(theme.palette[color].light, 0.6),
    backgroundColor: theme.vars ? theme.vars.palette.Alert[`${color}StandardBg`] : getBackgroundColor(theme.palette[color].light, 0.9),
    [`& .${Alert_alertClasses.icon}`]: theme.vars ? {
      color: theme.vars.palette.Alert[`${color}IconColor`]
    } : {
      color: theme.palette.mode === 'dark' ? theme.palette[color].main : theme.palette[color].light
    }
  }, color && ownerState.variant === 'outlined' && {
    color: theme.vars ? theme.vars.palette.Alert[`${color}Color`] : getColor(theme.palette[color].light, 0.6),
    border: `1px solid ${(theme.vars || theme).palette[color].light}`,
    [`& .${Alert_alertClasses.icon}`]: theme.vars ? {
      color: theme.vars.palette.Alert[`${color}IconColor`]
    } : {
      color: theme.palette.mode === 'dark' ? theme.palette[color].main : theme.palette[color].light
    }
  }, color && ownerState.variant === 'filled' && (0,esm_extends/* default */.Z)({
    fontWeight: theme.typography.fontWeightMedium
  }, theme.vars ? {
    color: theme.vars.palette.Alert[`${color}FilledColor`],
    backgroundColor: theme.vars.palette.Alert[`${color}FilledBg`]
  } : {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette[color].dark : theme.palette[color].main,
    color: theme.palette.getContrastText(theme.palette.mode === 'dark' ? theme.palette[color].dark : theme.palette[color].main)
  }));
});
const AlertIcon = (0,styled/* default */.ZP)('div', {
  name: 'MuiAlert',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon
})({
  marginRight: 12,
  padding: '7px 0',
  display: 'flex',
  fontSize: 22,
  opacity: 0.9
});
const AlertMessage = (0,styled/* default */.ZP)('div', {
  name: 'MuiAlert',
  slot: 'Message',
  overridesResolver: (props, styles) => styles.message
})({
  padding: '8px 0',
  minWidth: 0,
  overflow: 'auto'
});
const AlertAction = (0,styled/* default */.ZP)('div', {
  name: 'MuiAlert',
  slot: 'Action',
  overridesResolver: (props, styles) => styles.action
})({
  display: 'flex',
  alignItems: 'flex-start',
  padding: '4px 0 0 16px',
  marginLeft: 'auto',
  marginRight: -8
});
const defaultIconMapping = {
  success: /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessOutlined, {
    fontSize: "inherit"
  }),
  warning: /*#__PURE__*/(0,jsx_runtime.jsx)(ReportProblemOutlined, {
    fontSize: "inherit"
  }),
  error: /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorOutline, {
    fontSize: "inherit"
  }),
  info: /*#__PURE__*/(0,jsx_runtime.jsx)(InfoOutlined, {
    fontSize: "inherit"
  })
};
const Alert = /*#__PURE__*/react.forwardRef(function Alert(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiAlert'
  });

  const {
    action,
    children,
    className,
    closeText = 'Close',
    color,
    icon,
    iconMapping = defaultIconMapping,
    onClose,
    role = 'alert',
    severity = 'success',
    variant = 'standard'
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    color,
    severity,
    variant
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(AlertRoot, (0,esm_extends/* default */.Z)({
    role: role,
    elevation: 0,
    ownerState: ownerState,
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ref: ref
  }, other, {
    children: [icon !== false ? /*#__PURE__*/(0,jsx_runtime.jsx)(AlertIcon, {
      ownerState: ownerState,
      className: classes.icon,
      children: icon || iconMapping[severity] || defaultIconMapping[severity]
    }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)(AlertMessage, {
      ownerState: ownerState,
      className: classes.message,
      children: children
    }), action != null ? /*#__PURE__*/(0,jsx_runtime.jsx)(AlertAction, {
      ownerState: ownerState,
      className: classes.action,
      children: action
    }) : null, action == null && onClose ? /*#__PURE__*/(0,jsx_runtime.jsx)(AlertAction, {
      ownerState: ownerState,
      className: classes.action,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.Z, {
        size: "small",
        "aria-label": closeText,
        title: closeText,
        color: "inherit",
        onClick: onClose,
        children: _CloseIcon || (_CloseIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(Close, {
          fontSize: "small"
        }))
      })
    }) : null]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const Alert_Alert = (Alert);

/***/ }),

/***/ 3968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LinearProgress_LinearProgress)
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
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__(917);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(1796);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(8216);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(2734);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(1657);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(4867);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
;// CONCATENATED MODULE: ./node_modules/@mui/material/LinearProgress/linearProgressClasses.js

function getLinearProgressUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiLinearProgress', slot);
}
const linearProgressClasses = (0,generateUtilityClasses/* default */.Z)('MuiLinearProgress', ['root', 'colorPrimary', 'colorSecondary', 'determinate', 'indeterminate', 'buffer', 'query', 'dashed', 'dashedColorPrimary', 'dashedColorSecondary', 'bar', 'barColorPrimary', 'barColorSecondary', 'bar1Indeterminate', 'bar1Determinate', 'bar1Buffer', 'bar2Indeterminate', 'bar2Buffer']);
/* harmony default export */ const LinearProgress_linearProgressClasses = ((/* unused pure expression or super */ null && (linearProgressClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/LinearProgress/LinearProgress.js


const _excluded = ["className", "color", "value", "valueBuffer", "variant"];

let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6;













const TRANSITION_DURATION = 4; // seconds

const indeterminate1Keyframe = (0,emotion_react_browser_esm/* keyframes */.F4)(_t || (_t = _`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`));
const indeterminate2Keyframe = (0,emotion_react_browser_esm/* keyframes */.F4)(_t2 || (_t2 = _`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`));
const bufferKeyframe = (0,emotion_react_browser_esm/* keyframes */.F4)(_t3 || (_t3 = _`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`));

const useUtilityClasses = ownerState => {
  const {
    classes,
    variant,
    color
  } = ownerState;
  const slots = {
    root: ['root', `color${(0,capitalize/* default */.Z)(color)}`, variant],
    dashed: ['dashed', `dashedColor${(0,capitalize/* default */.Z)(color)}`],
    bar1: ['bar', `barColor${(0,capitalize/* default */.Z)(color)}`, (variant === 'indeterminate' || variant === 'query') && 'bar1Indeterminate', variant === 'determinate' && 'bar1Determinate', variant === 'buffer' && 'bar1Buffer'],
    bar2: ['bar', variant !== 'buffer' && `barColor${(0,capitalize/* default */.Z)(color)}`, variant === 'buffer' && `color${(0,capitalize/* default */.Z)(color)}`, (variant === 'indeterminate' || variant === 'query') && 'bar2Indeterminate', variant === 'buffer' && 'bar2Buffer']
  };
  return (0,composeClasses/* default */.Z)(slots, getLinearProgressUtilityClass, classes);
};

const getColorShade = (theme, color) => {
  if (color === 'inherit') {
    return 'currentColor';
  }

  if (theme.vars) {
    return theme.vars.palette.LinearProgress[`${color}Bg`];
  }

  return theme.palette.mode === 'light' ? (0,colorManipulator/* lighten */.$n)(theme.palette[color].main, 0.62) : (0,colorManipulator/* darken */._j)(theme.palette[color].main, 0.5);
};

const LinearProgressRoot = (0,styled/* default */.ZP)('span', {
  name: 'MuiLinearProgress',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`color${(0,capitalize/* default */.Z)(ownerState.color)}`], styles[ownerState.variant]];
  }
})(({
  ownerState,
  theme
}) => (0,esm_extends/* default */.Z)({
  position: 'relative',
  overflow: 'hidden',
  display: 'block',
  height: 4,
  zIndex: 0,
  // Fix Safari's bug during composition of different paint.
  '@media print': {
    colorAdjust: 'exact'
  },
  backgroundColor: getColorShade(theme, ownerState.color)
}, ownerState.color === 'inherit' && ownerState.variant !== 'buffer' && {
  backgroundColor: 'none',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'currentColor',
    opacity: 0.3
  }
}, ownerState.variant === 'buffer' && {
  backgroundColor: 'transparent'
}, ownerState.variant === 'query' && {
  transform: 'rotate(180deg)'
}));
const LinearProgressDashed = (0,styled/* default */.ZP)('span', {
  name: 'MuiLinearProgress',
  slot: 'Dashed',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.dashed, styles[`dashedColor${(0,capitalize/* default */.Z)(ownerState.color)}`]];
  }
})(({
  ownerState,
  theme
}) => {
  const backgroundColor = getColorShade(theme, ownerState.color);
  return (0,esm_extends/* default */.Z)({
    position: 'absolute',
    marginTop: 0,
    height: '100%',
    width: '100%'
  }, ownerState.color === 'inherit' && {
    opacity: 0.3
  }, {
    backgroundImage: `radial-gradient(${backgroundColor} 0%, ${backgroundColor} 16%, transparent 42%)`,
    backgroundSize: '10px 10px',
    backgroundPosition: '0 -23px'
  });
}, (0,emotion_react_browser_esm/* css */.iv)(_t4 || (_t4 = _`
    animation: ${0} 3s infinite linear;
  `), bufferKeyframe));
const LinearProgressBar1 = (0,styled/* default */.ZP)('span', {
  name: 'MuiLinearProgress',
  slot: 'Bar1',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.bar, styles[`barColor${(0,capitalize/* default */.Z)(ownerState.color)}`], (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && styles.bar1Indeterminate, ownerState.variant === 'determinate' && styles.bar1Determinate, ownerState.variant === 'buffer' && styles.bar1Buffer];
  }
})(({
  ownerState,
  theme
}) => (0,esm_extends/* default */.Z)({
  width: '100%',
  position: 'absolute',
  left: 0,
  bottom: 0,
  top: 0,
  transition: 'transform 0.2s linear',
  transformOrigin: 'left',
  backgroundColor: ownerState.color === 'inherit' ? 'currentColor' : (theme.vars || theme).palette[ownerState.color].main
}, ownerState.variant === 'determinate' && {
  transition: `transform .${TRANSITION_DURATION}s linear`
}, ownerState.variant === 'buffer' && {
  zIndex: 1,
  transition: `transform .${TRANSITION_DURATION}s linear`
}), ({
  ownerState
}) => (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && (0,emotion_react_browser_esm/* css */.iv)(_t5 || (_t5 = _`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `), indeterminate1Keyframe));
const LinearProgressBar2 = (0,styled/* default */.ZP)('span', {
  name: 'MuiLinearProgress',
  slot: 'Bar2',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.bar, styles[`barColor${(0,capitalize/* default */.Z)(ownerState.color)}`], (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && styles.bar2Indeterminate, ownerState.variant === 'buffer' && styles.bar2Buffer];
  }
})(({
  ownerState,
  theme
}) => (0,esm_extends/* default */.Z)({
  width: '100%',
  position: 'absolute',
  left: 0,
  bottom: 0,
  top: 0,
  transition: 'transform 0.2s linear',
  transformOrigin: 'left'
}, ownerState.variant !== 'buffer' && {
  backgroundColor: ownerState.color === 'inherit' ? 'currentColor' : (theme.vars || theme).palette[ownerState.color].main
}, ownerState.color === 'inherit' && {
  opacity: 0.3
}, ownerState.variant === 'buffer' && {
  backgroundColor: getColorShade(theme, ownerState.color),
  transition: `transform .${TRANSITION_DURATION}s linear`
}), ({
  ownerState
}) => (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && (0,emotion_react_browser_esm/* css */.iv)(_t6 || (_t6 = _`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `), indeterminate2Keyframe));
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */

const LinearProgress = /*#__PURE__*/react.forwardRef(function LinearProgress(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiLinearProgress'
  });

  const {
    className,
    color = 'primary',
    value,
    valueBuffer,
    variant = 'indeterminate'
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    color,
    variant
  });

  const classes = useUtilityClasses(ownerState);
  const theme = (0,useTheme/* default */.Z)();
  const rootProps = {};
  const inlineStyles = {
    bar1: {},
    bar2: {}
  };

  if (variant === 'determinate' || variant === 'buffer') {
    if (value !== undefined) {
      rootProps['aria-valuenow'] = Math.round(value);
      rootProps['aria-valuemin'] = 0;
      rootProps['aria-valuemax'] = 100;
      let transform = value - 100;

      if (theme.direction === 'rtl') {
        transform = -transform;
      }

      inlineStyles.bar1.transform = `translateX(${transform}%)`;
    } else if (false) {}
  }

  if (variant === 'buffer') {
    if (valueBuffer !== undefined) {
      let transform = (valueBuffer || 0) - 100;

      if (theme.direction === 'rtl') {
        transform = -transform;
      }

      inlineStyles.bar2.transform = `translateX(${transform}%)`;
    } else if (false) {}
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(LinearProgressRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ownerState: ownerState,
    role: "progressbar"
  }, rootProps, {
    ref: ref
  }, other, {
    children: [variant === 'buffer' ? /*#__PURE__*/(0,jsx_runtime.jsx)(LinearProgressDashed, {
      className: classes.dashed,
      ownerState: ownerState
    }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)(LinearProgressBar1, {
      className: classes.bar1,
      ownerState: ownerState,
      style: inlineStyles.bar1
    }), variant === 'determinate' ? null : /*#__PURE__*/(0,jsx_runtime.jsx)(LinearProgressBar2, {
      className: classes.bar2,
      ownerState: ownerState,
      style: inlineStyles.bar2
    })]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const LinearProgress_LinearProgress = (LinearProgress);

/***/ }),

/***/ 7608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Snackbar_Snackbar)
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
// EXTERNAL MODULE: ./node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js
var ClickAwayListener = __webpack_require__(3926);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(2734);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(1657);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useEventCallback.js
var useEventCallback = __webpack_require__(2068);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(8216);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grow/Grow.js
var Grow = __webpack_require__(6514);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(1796);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(6501);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(4867);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
;// CONCATENATED MODULE: ./node_modules/@mui/material/SnackbarContent/snackbarContentClasses.js

function getSnackbarContentUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiSnackbarContent', slot);
}
const snackbarContentClasses = (0,generateUtilityClasses/* default */.Z)('MuiSnackbarContent', ['root', 'message', 'action']);
/* harmony default export */ const SnackbarContent_snackbarContentClasses = ((/* unused pure expression or super */ null && (snackbarContentClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/SnackbarContent/SnackbarContent.js


const _excluded = ["action", "className", "message", "role"];












const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    action: ['action'],
    message: ['message']
  };
  return (0,composeClasses/* default */.Z)(slots, getSnackbarContentUtilityClass, classes);
};

const SnackbarContentRoot = (0,styled/* default */.ZP)(Paper/* default */.Z, {
  name: 'MuiSnackbarContent',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => {
  const emphasis = theme.palette.mode === 'light' ? 0.8 : 0.98;
  const backgroundColor = (0,colorManipulator/* emphasize */._4)(theme.palette.background.default, emphasis);
  return (0,esm_extends/* default */.Z)({}, theme.typography.body2, {
    color: theme.vars ? theme.vars.palette.SnackbarContent.color : theme.palette.getContrastText(backgroundColor),
    backgroundColor: theme.vars ? theme.vars.palette.SnackbarContent.bg : backgroundColor,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '6px 16px',
    borderRadius: (theme.vars || theme).shape.borderRadius,
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      flexGrow: 'initial',
      minWidth: 288
    }
  });
});
const SnackbarContentMessage = (0,styled/* default */.ZP)('div', {
  name: 'MuiSnackbarContent',
  slot: 'Message',
  overridesResolver: (props, styles) => styles.message
})({
  padding: '8px 0'
});
const SnackbarContentAction = (0,styled/* default */.ZP)('div', {
  name: 'MuiSnackbarContent',
  slot: 'Action',
  overridesResolver: (props, styles) => styles.action
})({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  paddingLeft: 16,
  marginRight: -8
});
const SnackbarContent = /*#__PURE__*/react.forwardRef(function SnackbarContent(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiSnackbarContent'
  });

  const {
    action,
    className,
    message,
    role = 'alert'
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SnackbarContentRoot, (0,esm_extends/* default */.Z)({
    role: role,
    square: true,
    elevation: 6,
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SnackbarContentMessage, {
      className: classes.message,
      ownerState: ownerState,
      children: message
    }), action ? /*#__PURE__*/(0,jsx_runtime.jsx)(SnackbarContentAction, {
      className: classes.action,
      ownerState: ownerState,
      children: action
    }) : null]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const SnackbarContent_SnackbarContent = (SnackbarContent);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Snackbar/snackbarClasses.js

function getSnackbarUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiSnackbar', slot);
}
const snackbarClasses = (0,generateUtilityClasses/* default */.Z)('MuiSnackbar', ['root', 'anchorOriginTopCenter', 'anchorOriginBottomCenter', 'anchorOriginTopRight', 'anchorOriginBottomRight', 'anchorOriginTopLeft', 'anchorOriginBottomLeft']);
/* harmony default export */ const Snackbar_snackbarClasses = ((/* unused pure expression or super */ null && (snackbarClasses)));
;// CONCATENATED MODULE: ./node_modules/@mui/material/Snackbar/Snackbar.js


const Snackbar_excluded = ["onEnter", "onExited"],
      _excluded2 = ["action", "anchorOrigin", "autoHideDuration", "children", "className", "ClickAwayListenerProps", "ContentProps", "disableWindowBlurListener", "message", "onBlur", "onClose", "onFocus", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"];















const Snackbar_useUtilityClasses = ownerState => {
  const {
    classes,
    anchorOrigin
  } = ownerState;
  const slots = {
    root: ['root', `anchorOrigin${(0,capitalize/* default */.Z)(anchorOrigin.vertical)}${(0,capitalize/* default */.Z)(anchorOrigin.horizontal)}`]
  };
  return (0,composeClasses/* default */.Z)(slots, getSnackbarUtilityClass, classes);
};

const SnackbarRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiSnackbar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`anchorOrigin${(0,capitalize/* default */.Z)(ownerState.anchorOrigin.vertical)}${(0,capitalize/* default */.Z)(ownerState.anchorOrigin.horizontal)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  const center = {
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)'
  };
  return (0,esm_extends/* default */.Z)({
    zIndex: (theme.vars || theme).zIndex.snackbar,
    position: 'fixed',
    display: 'flex',
    left: 8,
    right: 8,
    justifyContent: 'center',
    alignItems: 'center'
  }, ownerState.anchorOrigin.vertical === 'top' ? {
    top: 8
  } : {
    bottom: 8
  }, ownerState.anchorOrigin.horizontal === 'left' && {
    justifyContent: 'flex-start'
  }, ownerState.anchorOrigin.horizontal === 'right' && {
    justifyContent: 'flex-end'
  }, {
    [theme.breakpoints.up('sm')]: (0,esm_extends/* default */.Z)({}, ownerState.anchorOrigin.vertical === 'top' ? {
      top: 24
    } : {
      bottom: 24
    }, ownerState.anchorOrigin.horizontal === 'center' && center, ownerState.anchorOrigin.horizontal === 'left' && {
      left: 24,
      right: 'auto'
    }, ownerState.anchorOrigin.horizontal === 'right' && {
      right: 24,
      left: 'auto'
    })
  });
});
const Snackbar = /*#__PURE__*/react.forwardRef(function Snackbar(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiSnackbar'
  });
  const theme = (0,useTheme/* default */.Z)();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };

  const {
    action,
    anchorOrigin: {
      vertical,
      horizontal
    } = {
      vertical: 'bottom',
      horizontal: 'left'
    },
    autoHideDuration = null,
    children,
    className,
    ClickAwayListenerProps,
    ContentProps,
    disableWindowBlurListener = false,
    message,
    onBlur,
    onClose,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    open,
    resumeHideDuration,
    TransitionComponent = Grow/* default */.Z,
    transitionDuration = defaultTransitionDuration,
    TransitionProps: {
      onEnter,
      onExited
    } = {}
  } = props,
        TransitionProps = (0,objectWithoutPropertiesLoose/* default */.Z)(props.TransitionProps, Snackbar_excluded),
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded2);

  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    anchorOrigin: {
      vertical,
      horizontal
    }
  });

  const classes = Snackbar_useUtilityClasses(ownerState);
  const timerAutoHide = react.useRef();
  const [exited, setExited] = react.useState(true);
  const handleClose = (0,useEventCallback/* default */.Z)((...args) => {
    if (onClose) {
      onClose(...args);
    }
  });
  const setAutoHideTimer = (0,useEventCallback/* default */.Z)(autoHideDurationParam => {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }

    clearTimeout(timerAutoHide.current);
    timerAutoHide.current = setTimeout(() => {
      handleClose(null, 'timeout');
    }, autoHideDurationParam);
  });
  react.useEffect(() => {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }

    return () => {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, autoHideDuration, setAutoHideTimer]); // Pause the timer when the user is interacting with the Snackbar
  // or when the user hide the window.

  const handlePause = () => {
    clearTimeout(timerAutoHide.current);
  }; // Restart the timer when the user is no longer interacting with the Snackbar
  // or when the window is shown back.


  const handleResume = react.useCallback(() => {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);

  const handleFocus = event => {
    if (onFocus) {
      onFocus(event);
    }

    handlePause();
  };

  const handleMouseEnter = event => {
    if (onMouseEnter) {
      onMouseEnter(event);
    }

    handlePause();
  };

  const handleBlur = event => {
    if (onBlur) {
      onBlur(event);
    }

    handleResume();
  };

  const handleMouseLeave = event => {
    if (onMouseLeave) {
      onMouseLeave(event);
    }

    handleResume();
  };

  const handleClickAway = event => {
    if (onClose) {
      onClose(event, 'clickaway');
    }
  };

  const handleExited = node => {
    setExited(true);

    if (onExited) {
      onExited(node);
    }
  };

  const handleEnter = (node, isAppearing) => {
    setExited(false);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  };

  react.useEffect(() => {
    // TODO: window global should be refactored here
    if (!disableWindowBlurListener && open) {
      window.addEventListener('focus', handleResume);
      window.addEventListener('blur', handlePause);
      return () => {
        window.removeEventListener('focus', handleResume);
        window.removeEventListener('blur', handlePause);
      };
    }

    return undefined;
  }, [disableWindowBlurListener, handleResume, open]);
  react.useEffect(() => {
    if (!open) {
      return undefined;
    }
    /**
     * @param {KeyboardEvent} nativeEvent
     */


    function handleKeyDown(nativeEvent) {
      if (!nativeEvent.defaultPrevented) {
        // IE11, Edge (prior to using Bink?) use 'Esc'
        if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
          // not calling `preventDefault` since we don't know if people may ignore this event e.g. a permanently open snackbar
          if (onClose) {
            onClose(nativeEvent, 'escapeKeyDown');
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [exited, open, onClose]); // So we only render active snackbars.

  if (!open && exited) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(ClickAwayListener/* default */.Z, (0,esm_extends/* default */.Z)({
    onClickAway: handleClickAway
  }, ClickAwayListenerProps, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(SnackbarRoot, (0,esm_extends/* default */.Z)({
      className: (0,clsx_m/* default */.Z)(classes.root, className),
      onBlur: handleBlur,
      onFocus: handleFocus,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      ownerState: ownerState,
      ref: ref // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
      // See https://github.com/mui/material-ui/issues/29080
      ,
      role: "presentation"
    }, other, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionComponent, (0,esm_extends/* default */.Z)({
        appear: true,
        in: open,
        timeout: transitionDuration,
        direction: vertical === 'top' ? 'down' : 'up',
        onEnter: handleEnter,
        onExited: handleExited
      }, TransitionProps, {
        children: children || /*#__PURE__*/(0,jsx_runtime.jsx)(SnackbarContent_SnackbarContent, (0,esm_extends/* default */.Z)({
          message: message,
          action: action
        }, ContentProps))
      }))
    }))
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const Snackbar_Snackbar = (Snackbar);

/***/ })

}]);
//# sourceMappingURL=896.ebac06dd.js.map