"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaceSpot = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsExternal = require("ordering-components-external");
var _styles = require("./styles");
var _Confirm = require("../Confirm");
var _Buttons = require("../../styles/Buttons");
var _Inputs = require("../../styles/Inputs");
var _Select = require("../../styles/Select");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var PlaceSpotUI = function PlaceSpotUI(props) {
  var _orderState$options, _placesState$placeGro3, _orderState$options2, _placesState$places4, _getPlacesGroups, _getPlacesGroups2, _placesState$places5, _placesState$places6;
  var cart = props.cart,
    orderTypes = props.orderTypes,
    placesState = props.placesState,
    spotNumber = props.spotNumber,
    spotState = props.spotState,
    isCheckout = props.isCheckout,
    vehicle = props.vehicle,
    isInputMode = props.isInputMode,
    onClose = props.onClose,
    setSpotNumber = props.setSpotNumber,
    setVehicle = props.setVehicle,
    setSpotState = props.setSpotState,
    handleChangeSpot = props.handleChangeSpot,
    setHasBusinessPlaces = props.setHasBusinessPlaces,
    setPlaceSpotNumber = props.setPlaceSpotNumber;
  var el = (0, _react.useRef)();
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponentsExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    placeGroupSelected = _useState2[0],
    setPlaceGroupSelected = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var selectYourSpotString = (placeGroupSelected === null || placeGroupSelected === void 0 ? void 0 : placeGroupSelected.name) === 'Tables' ? t('SELECT_YOUR_TABLE', 'Select your table') : t('SELECT_YOUR_SPOT', 'Select your spot');
  var vehicleInputAllowed = [4, 5];
  var currentOrderType = isCheckout ? orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type : cart === null || cart === void 0 ? void 0 : cart.delivery_type;
  var isEatin = currentOrderType === 3;
  var isDriveThru = currentOrderType === 5;
  var placeholderText = isEatin ? t('EATIN_SPOT_NUMBER', 'Table number') : isDriveThru ? t('DRIVE_THRU_SPOT_NUMBER', 'Drive thru lane') : t('CURBSIDE_SPOT_NUMBER', 'Spot number');
  var vehicleTypeList = [{
    key: 'car',
    text: t('VEHICLE_TYPE_CAR', 'Car')
  }, {
    key: 'truck',
    text: t('VEHICLE_TYPE_TRUCK', 'Truck')
  }, {
    key: 'suv',
    text: t('VEHICLE_TYPE_SUV', 'SUV')
  }, {
    key: 'van',
    text: t('VEHICLE_TYPE_VAN', 'Van')
  }, {
    key: 'motorcycle',
    text: t('VEHICLE_TYPE_MOTORCYCLE', 'Motorcycle')
  }];
  var vehicleInputList = [{
    key: 'model',
    text: t('VEHICLE_MODEL', 'Model')
  }, {
    key: 'car_registration',
    text: t('VEHICLE_CAR_REGISTRATION', 'Car registration')
  }, {
    key: 'color',
    text: t('VEHICLE_COLOR', 'Color')
  }];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    setSpotState(_objectSpread(_objectSpread({}, spotState), {}, {
      error: null
    }));
  };
  var getVehicleTypeList = function getVehicleTypeList() {
    vehicleTypeList.unshift({
      key: null,
      text: t('SELECT_AN_OPTION', 'Select an option')
    });
    return vehicleTypeList.map(function (type) {
      return {
        value: type === null || type === void 0 ? void 0 : type.key,
        content: type === null || type === void 0 ? void 0 : type.text,
        showOnSelected: type === null || type === void 0 ? void 0 : type.text
      };
    });
  };
  var onChangeSpotNumber = function onChangeSpotNumber(e) {
    var _e$target;
    if (/^[\d]*$/.test(e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value)) {
      var _e$target2;
      var _spotNumber = parseFloat(e === null || e === void 0 || (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value);
      _spotNumber = isNaN(_spotNumber) ? null : _spotNumber;
      setSpotNumber(_spotNumber);
      setPlaceSpotNumber(_spotNumber);
    }
  };
  var onChangeSpot = function onChangeSpot() {
    if (orderState.loading) return;
    var isVehicle = Object.values(vehicle).every(function (e) {
      return e;
    });
    var bodyToSend = {};
    spotNumber && (bodyToSend.spot_number = spotNumber);
    isVehicle && (bodyToSend.vehicle = vehicle);
    if (Object.keys(bodyToSend).length) {
      handleChangeSpot({
        bodyToSend: bodyToSend,
        isCheckout: !!isCheckout
      });
    }
  };
  var getPlacesGroups = function getPlacesGroups() {
    var _placesState$placeGro;
    var groups = (_placesState$placeGro = placesState.placeGroups) === null || _placesState$placeGro === void 0 ? void 0 : _placesState$placeGro.filter(function (group) {
      var _placesState$places;
      return (group === null || group === void 0 ? void 0 : group.enabled) && (placesState === null || placesState === void 0 || (_placesState$places = placesState.places) === null || _placesState$places === void 0 ? void 0 : _placesState$places.find(function (place) {
        return (place === null || place === void 0 ? void 0 : place.enabled) && (place === null || place === void 0 ? void 0 : place.place_group_id) === (group === null || group === void 0 ? void 0 : group.id);
      }));
    });
    return groups.map(function (group) {
      return {
        value: group,
        content: group === null || group === void 0 ? void 0 : group.name,
        showOnSelected: group === null || group === void 0 ? void 0 : group.name
      };
    });
  };
  var getPlaces = function getPlaces() {
    var _placesState$places2;
    var places = placeGroupSelected && (placesState === null || placesState === void 0 || (_placesState$places2 = placesState.places) === null || _placesState$places2 === void 0 ? void 0 : _placesState$places2.filter(function (place) {
      return (place === null || place === void 0 ? void 0 : place.enabled) && (place === null || place === void 0 ? void 0 : place.place_group_id) === (placeGroupSelected === null || placeGroupSelected === void 0 ? void 0 : placeGroupSelected.id);
    }));
    return places.map(function (place) {
      return {
        value: place,
        content: place.name,
        showOnSelected: place.name
      };
    });
  };
  (0, _react.useEffect)(function () {
    if (!(placesState !== null && placesState !== void 0 && placesState.loading)) {
      var _placesState$placeGro2;
      var placeGroupOnCart = placesState === null || placesState === void 0 ? void 0 : placesState.placeGroups.find(function (group) {
        var _cart$place;
        return (group === null || group === void 0 ? void 0 : group.id) === (cart === null || cart === void 0 || (_cart$place = cart.place) === null || _cart$place === void 0 ? void 0 : _cart$place.place_group_id);
      });
      setPlaceGroupSelected(placeGroupOnCart);
      var groups = (_placesState$placeGro2 = placesState.placeGroups) === null || _placesState$placeGro2 === void 0 ? void 0 : _placesState$placeGro2.filter(function (group) {
        var _placesState$places3;
        return (group === null || group === void 0 ? void 0 : group.enabled) && (placesState === null || placesState === void 0 || (_placesState$places3 = placesState.places) === null || _placesState$places3 === void 0 ? void 0 : _placesState$places3.find(function (place) {
          return (place === null || place === void 0 ? void 0 : place.enabled) && (place === null || place === void 0 ? void 0 : place.place_group_id) === (group === null || group === void 0 ? void 0 : group.id);
        }));
      });
      if (groups.length === 0) {
        setHasBusinessPlaces && setHasBusinessPlaces(false);
      }
    }
  }, [placesState]);
  (0, _react.useEffect)(function () {
    el.current && (el.current.onkeyup = onChangeSpotNumber);
  }, []);
  (0, _react.useEffect)(function () {
    el.current && (el.current.value = spotNumber !== null && spotNumber !== void 0 ? spotNumber : '');
  }, [spotNumber]);
  (0, _react.useEffect)(function () {
    if (spotState !== null && spotState !== void 0 && spotState.error) {}
  }, [spotState]);
  (0, _react.useEffect)(function () {
    var _spotState$error;
    if ((spotState === null || spotState === void 0 || (_spotState$error = spotState.error) === null || _spotState$error === void 0 ? void 0 : _spotState$error.length) > 0) {
      setAlertState({
        open: true,
        content: spotState === null || spotState === void 0 ? void 0 : spotState.error
      });
    }
  }, [spotState === null || spotState === void 0 ? void 0 : spotState.error]);
  return /*#__PURE__*/_react.default.createElement(_styles.PlaceSpotContainer, {
    isCheckout: isCheckout,
    style: props.containerStyle
  }, isInputMode ? /*#__PURE__*/_react.default.createElement(_styles.PlaceGroupContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, orderTypes[currentOrderType]), vehicleInputAllowed.includes(currentOrderType) && /*#__PURE__*/_react.default.createElement(_styles.WrapperOptionList, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperOption, null, /*#__PURE__*/_react.default.createElement("p", null, t('VEHICLE_TYPE', 'Vehicle type')), /*#__PURE__*/_react.default.createElement(_Select.Select, {
    isHomeStyle: props.isHomeStyle,
    options: getVehicleTypeList(),
    defaultValue: (vehicle === null || vehicle === void 0 ? void 0 : vehicle.type) || null,
    onChange: function onChange(type) {
      return setVehicle(_objectSpread(_objectSpread({}, vehicle), {}, {
        type: type !== null && type !== void 0 ? type : ''
      }));
    },
    selectInputStyle: {
      paddingTop: 3.5,
      paddingBottom: 3.5
    }
  })), vehicleInputList.map(function (input) {
    return /*#__PURE__*/_react.default.createElement(_styles.WrapperOption, {
      key: input.key
    }, /*#__PURE__*/_react.default.createElement("p", null, input.text), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      type: "text",
      placeholder: input.text,
      defaultValue: vehicle[input.key],
      onChange: function onChange(val) {
        var _val$target;
        return setVehicle(_objectSpread(_objectSpread({}, vehicle), {}, _defineProperty({}, input.key, val === null || val === void 0 || (_val$target = val.target) === null || _val$target === void 0 ? void 0 : _val$target.value)));
      }
    }));
  })), /*#__PURE__*/_react.default.createElement("p", null, placeholderText), /*#__PURE__*/_react.default.createElement(_styles.WrapperInput, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    ref: el,
    name: "".concat(isEatin ? 'table' : 'spot', "_number"),
    type: "text",
    placeholder: placeholderText,
    onKeyPress: function onKeyPress(e) {
      if (!/^[\d]*$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true,
    disabled: !spotNumber && !Object.values(vehicle).every(function (e) {
      return e;
    }),
    onClick: function onClick() {
      return onChangeSpot();
    }
  }, t('UPDATE_SPOT_NUMBER', 'Update')))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (placesState === null || placesState === void 0 ? void 0 : placesState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.PlaceGroupContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 25,
    className: "title"
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 120,
    height: 25,
    className: "title"
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30
  }))), !(placesState.error || (placesState === null || placesState === void 0 || (_placesState$placeGro3 = placesState.placeGroups) === null || _placesState$placeGro3 === void 0 ? void 0 : _placesState$placeGro3.length) === 0) && !(placesState !== null && placesState !== void 0 && placesState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.PlaceGroupContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, props.isSelectDisabled ? t('PLACE_GROUP', 'Place group') : orderTypes[orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type]), props.isSelectDisabled ? /*#__PURE__*/_react.default.createElement("div", null, placeGroupSelected === null || placeGroupSelected === void 0 ? void 0 : placeGroupSelected.name, " - ", placesState === null || placesState === void 0 || (_placesState$places4 = placesState.places) === null || _placesState$places4 === void 0 || (_placesState$places4 = _placesState$places4.find(function (place) {
    return (place === null || place === void 0 ? void 0 : place.id) === (cart === null || cart === void 0 ? void 0 : cart.place_id);
  })) === null || _placesState$places4 === void 0 ? void 0 : _placesState$places4.name) : /*#__PURE__*/_react.default.createElement(_Select.Select, {
    isHomeStyle: !props.isCancelHomeStyle,
    isDisabled: props.isSelectDisabled,
    options: getPlacesGroups(),
    defaultValue: placeGroupSelected !== null && placeGroupSelected !== void 0 ? placeGroupSelected : cart === null || cart === void 0 ? void 0 : cart.place,
    placeholder: t('PLACE_GROUP', 'Place group'),
    isOneOption: ((_getPlacesGroups = getPlacesGroups()) === null || _getPlacesGroups === void 0 ? void 0 : _getPlacesGroups.length) === 1,
    disableOneOption: ((_getPlacesGroups2 = getPlacesGroups()) === null || _getPlacesGroups2 === void 0 ? void 0 : _getPlacesGroups2.length) > 1 || props.isSelectDisabled,
    onChange: function onChange(group) {
      return setPlaceGroupSelected(group);
    }
  })), placeGroupSelected && !props.isSelectDisabled && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, selectYourSpotString), /*#__PURE__*/_react.default.createElement(_Select.Select, {
    disableOneOption: true,
    options: getPlaces(),
    isHomeStyle: !props.isCancelHomeStyle,
    isDisabled: props.isSelectDisabled,
    placeholder: selectYourSpotString,
    defaultValue: placesState === null || placesState === void 0 || (_placesState$places5 = placesState.places) === null || _placesState$places5 === void 0 ? void 0 : _placesState$places5.find(function (place) {
      return (place === null || place === void 0 ? void 0 : place.id) === (cart === null || cart === void 0 ? void 0 : cart.place_id);
    }),
    onChange: function onChange(place) {
      return handleChangeSpot(place, props.isFetchOrder);
    }
  }))), placeGroupSelected && (placesState === null || placesState === void 0 || (_placesState$places6 = placesState.places) === null || _placesState$places6 === void 0 ? void 0 : _placesState$places6.find(function (place) {
    return (place === null || place === void 0 ? void 0 : place.id) === (cart === null || cart === void 0 ? void 0 : cart.place_id);
  })) && !isCheckout && /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: placesState !== null && placesState !== void 0 && placesState.loading ? 'secondary' : 'primary',
    disabled: placesState === null || placesState === void 0 ? void 0 : placesState.loading,
    onClick: function onClick() {
      return onClose && onClose();
    }
  }, t('CONTINUE', 'Continue')))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('PROFILE', 'Profile'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};
var PlaceSpot = exports.PlaceSpot = function PlaceSpot(props) {
  var _useLanguage3 = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var placeSpotProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PlaceSpotUI,
    onRemoveSpotNumber: function onRemoveSpotNumber(businessSlug) {
      var _JSON$parse;
      var spotNumberFromStorage = window.localStorage.getItem('table_number');
      if (!spotNumberFromStorage) return;
      var slug = (_JSON$parse = JSON.parse(spotNumberFromStorage)) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.slug;
      if (businessSlug === slug) {
        window.localStorage.removeItem('table_number');
      }
    },
    orderTypes: {
      1: t('DELIVERY', 'Delivery'),
      2: t('PICKUP', 'Pickup'),
      3: t('EAT_IN', 'Eat in'),
      4: t('CURBSIDE', 'Curbside'),
      5: t('DRIVE_THRU', 'Drive thru')
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsExternal.PlaceSpot, placeSpotProps);
};