"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessPreorder = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsExternal = require("ordering-components-external");
var _reactRouterDom = require("react-router-dom");
var _moment2 = _interopRequireDefault(require("moment"));
var _styledComponents = require("styled-components");
var _Select = require("../../styles/Select");
var _Buttons = require("../../styles/Buttons");
var _BsArrowRight = _interopRequireDefault(require("@meronex/icons/bs/BsArrowRight"));
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _SpinnerLoader = require("../../../../../components/SpinnerLoader");
var _BsCaretLeftFill = _interopRequireDefault(require("@meronex/icons/bs/BsCaretLeftFill"));
var _styles = require("./styles");
var _BusinessMenuList = require("../BusinessMenuList");
var _react2 = require("swiper/react");
var _swiper = _interopRequireWildcard(require("swiper"));
require("swiper/swiper-bundle.min.css");
require("swiper/swiper.min.css");
var _utils = require("../../../../../utils");
var _CgRadioCheck = _interopRequireDefault(require("@meronex/icons/cg/CgRadioCheck"));
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
_swiper.default.use([_swiper.Navigation]);
var BusinessPreorderUI = function BusinessPreorderUI(props) {
  var _configs$general_hour, _configs$preorder_sta, _theme$images, _configs$max_days_pre, _configs$max_days_pre2, _configs$max_days_pre3, _orderState$options;
  var business = props.business,
    handleClick = props.handleClick,
    datesList = props.datesList,
    dateSelected = props.dateSelected,
    timeSelected = props.timeSelected,
    handleChangeDate = props.handleChangeDate,
    handleChangeTime = props.handleChangeTime,
    showButton = props.showButton,
    isAsap = props.isAsap,
    handleAsap = props.handleAsap,
    isProfessional = props.isProfessional,
    isDisabled = props.isDisabled,
    maxDays = props.maxDays,
    hoursList = props.hoursList,
    cateringPreorder = props.cateringPreorder,
    preorderLeadTime = props.preorderLeadTime,
    getActualSchedule = props.getActualSchedule;
  var _useLocation = (0, _reactRouterDom.useLocation)(),
    pathname = _useLocation.pathname;
  var _useUtils = (0, _orderingComponentsExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    optimizeImage = _useUtils2$.optimizeImage,
    parseTime = _useUtils2$.parseTime;
  var theme = (0, _styledComponents.useTheme)();
  var _useConfig = (0, _orderingComponentsExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useOrder = (0, _orderingComponentsExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var _useState = (0, _react.useState)('business_hours'),
    _useState2 = _slicedToArray(_useState, 2),
    type = _useState2[0],
    setType = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    menu = _useState4[0],
    setMenu = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    timeList = _useState6[0],
    setTimeList = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isEnabled = _useState8[0],
    setIsEnabled = _useState8[1];
  var is12Hours = configs === null || configs === void 0 || (_configs$general_hour = configs.general_hour_format) === null || _configs$general_hour === void 0 || (_configs$general_hour = _configs$general_hour.value) === null || _configs$general_hour === void 0 ? void 0 : _configs$general_hour.includes('hh:mm');
  var isPreOrderSetting = (configs === null || configs === void 0 || (_configs$preorder_sta = configs.preorder_status_enabled) === null || _configs$preorder_sta === void 0 ? void 0 : _configs$preorder_sta.value) === '1';
  var preOrderType = [{
    value: 'business_menu',
    content: /*#__PURE__*/_react.default.createElement(_styles.TypeContent, null, t('BUSINESS_MENU', 'Business menu'))
  }, {
    value: 'business_hours',
    content: /*#__PURE__*/_react.default.createElement(_styles.TypeContent, null, t('BUSINESS_HOURS', 'Business hours'))
  }];
  var goToBusinessPage = function goToBusinessPage() {
    handleClick && handleClick(business);
  };
  var validateSelectedDate = function validateSelectedDate(curdate, menu) {
    var day = (0, _moment2.default)(curdate).format('d');
    setIsEnabled(menu.schedule[day].enabled || false);
  };
  var getMomentTime = function getMomentTime(time) {
    var _moment = (0, _moment2.default)("".concat((0, _moment2.default)(dateSelected).format('YYYY-MM-DD'), " ").concat(time), 'YYYY-MM-DD HH:mm').toDate();
    return _moment;
  };
  var isBusyTime = function isBusyTime(professional, selectedMoment) {
    var _professional$schedul, _professional$busy_ti;
    if (!selectedMoment) return false;
    var startDay = (0, _moment2.default)(selectedMoment).utc().format('d');
    var isStartScheduleEnabled = professional === null || professional === void 0 || (_professional$schedul = professional.schedule) === null || _professional$schedul === void 0 || (_professional$schedul = _professional$schedul[startDay]) === null || _professional$schedul === void 0 ? void 0 : _professional$schedul.enabled;
    if (!isStartScheduleEnabled) return true;
    if ((professional === null || professional === void 0 || (_professional$busy_ti = professional.busy_times) === null || _professional$busy_ti === void 0 ? void 0 : _professional$busy_ti.length) === 0) return false;
    var busyTimes = professional === null || professional === void 0 ? void 0 : professional.busy_times;
    var valid = busyTimes.some(function (item) {
      return _moment2.default.utc(item === null || item === void 0 ? void 0 : item.start).local().valueOf() <= (0, _moment2.default)(selectedMoment).valueOf() && (0, _moment2.default)(selectedMoment).valueOf() < _moment2.default.utc(item === null || item === void 0 ? void 0 : item.end).local().valueOf();
    });
    return valid;
  };
  var getTimeList = function getTimeList(curdate, menu) {
    validateSelectedDate(curdate, menu);
    var dateParts = curdate.split('-');
    var dateSeleted = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    var times = (0, _utils.getTimes)(dateSeleted, menu === null || menu === void 0 ? void 0 : menu.schedule, is12Hours);
    return times;
  };
  (0, _react.useEffect)(function () {
    if (cateringPreorder) {
      var _timeLists2;
      var _timeLists = [];
      var schedule = business && getActualSchedule();
      if (!schedule && business) {
        setTimeList([]);
        return;
      }
      _timeLists = hoursList.filter(function (hour) {
        var _Object$keys, _schedule$lapses;
        return (((_Object$keys = Object.keys(business || {})) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) === 0 || (schedule === null || schedule === void 0 || (_schedule$lapses = schedule.lapses) === null || _schedule$lapses === void 0 ? void 0 : _schedule$lapses.some(function (lapse) {
          var openHour = lapse.open.hour < 10 ? "0".concat(lapse.open.hour) : lapse.open.hour;
          var openMinute = lapse.open.minute < 10 ? "0".concat(lapse.open.minute) : lapse.open.minute;
          var closeHour = lapse.close.hour < 10 ? "0".concat(lapse.close.hour) : lapse.close.hour;
          var closeMinute = lapse.close.minute < 10 ? "0".concat(lapse.close.minute) : lapse.close.minute;
          return (0, _moment2.default)(dateSelected + " ".concat(hour.startTime)) >= (0, _moment2.default)(dateSelected + " ".concat(openHour, ":").concat(openMinute)).add(preorderLeadTime, 'minutes') && (0, _moment2.default)(dateSelected + " ".concat(hour.endTime)) <= (0, _moment2.default)(dateSelected + " ".concat(closeHour, ":").concat(closeMinute));
        }))) && (0, _moment2.default)(dateSelected + " ".concat(hour.startTime)) < (0, _moment2.default)(dateSelected + " ".concat(hour.endTime)) && ((0, _moment2.default)().add(preorderLeadTime, 'minutes') < (0, _moment2.default)(dateSelected + " ".concat(hour.startTime)) || !cateringPreorder);
      }).map(function (hour) {
        return {
          value: hour.startTime,
          text: is12Hours ? hour.startTime.includes('12') ? "".concat(hour.startTime, "PM") : parseTime((0, _moment2.default)(hour.startTime, 'HH:mm'), {
            outputFormat: 'hh:mma'
          }) : parseTime((0, _moment2.default)(hour.startTime, 'HH:mm'), {
            outputFormat: 'HH:mm'
          }),
          endText: is12Hours ? hour.endTime.includes('12') ? "".concat(hour.endTime, "PM") : parseTime((0, _moment2.default)(hour.endTime, 'HH:mm'), {
            outputFormat: 'hh:mma'
          }) : parseTime((0, _moment2.default)(hour.endTime, 'HH:mm'), {
            outputFormat: 'HH:mm'
          })
        };
      });
      if (((_timeLists2 = _timeLists) === null || _timeLists2 === void 0 ? void 0 : _timeLists2.length) > 0) {
        setTimeList(_timeLists);
      }
    } else {
      var selectedMenu = menu ? menu !== null && menu !== void 0 && menu.use_business_schedule ? business : menu : business;
      var _times = getTimeList(dateSelected, selectedMenu);
      setTimeList(_times);
    }
  }, [dateSelected, menu, JSON.stringify(business), cateringPreorder, JSON.stringify(hoursList), dateSelected]);
  (0, _react.useEffect)(function () {
    if (type === 'business_hours') setMenu(null);
  }, [type]);
  (0, _react.useEffect)(function () {
    if (pathname.includes('store') || isProfessional || cateringPreorder) return;
    handleAsap && handleAsap();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.BusinessPreorderContainer, null, !isProfessional && /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('PREORDER', 'Preorder')), !isProfessional && /*#__PURE__*/_react.default.createElement(_styles.LogoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_200,c_limit')
  }), /*#__PURE__*/_react.default.createElement("p", null, business.name)), !isProfessional && isPreOrderSetting && !cateringPreorder && /*#__PURE__*/_react.default.createElement(_styles.PreorderTypeWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('PREORDER_TYPE', 'Preorder type')), /*#__PURE__*/_react.default.createElement(_styles.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    defaultValue: type,
    options: preOrderType,
    placeholder: t('SELECT_A_TYPE', 'Select a type'),
    onChange: function onChange(value) {
      return setType(value);
    }
  }))), !isProfessional && type === 'business_menu' && /*#__PURE__*/_react.default.createElement(_BusinessMenuList.BusinessMenuList, {
    businessId: business.id,
    setMenu: setMenu
  }), (isPreOrderSetting || isProfessional) && /*#__PURE__*/_react.default.createElement(_styles.OrderTimeWrapper, null, !isProfessional && /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_TIME', 'Order time')), /*#__PURE__*/_react.default.createElement(_styles.DateWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.MonthYearLayer, null, /*#__PURE__*/_react.default.createElement("span", null, (0, _moment2.default)(dateSelected).format('MMMM, yyyy'))), /*#__PURE__*/_react.default.createElement(_styles.DaysSwiper, {
    left: /*#__PURE__*/_react.default.createElement(_BsCaretLeftFill.default, null)
  }, /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    spaceBetween: 0,
    navigation: true,
    breakpoints: {
      0: {
        slidesPerView: 4,
        spaceBetween: 0
      },
      400: {
        slidesPerView: 5,
        spaceBetween: 0
      },
      550: {
        slidesPerView: 6,
        spaceBetween: 0
      },
      769: {
        slidesPerView: (configs === null || configs === void 0 || (_configs$max_days_pre = configs.max_days_preorder) === null || _configs$max_days_pre === void 0 ? void 0 : _configs$max_days_pre.value) < 7 ? configs === null || configs === void 0 || (_configs$max_days_pre2 = configs.max_days_preorder) === null || _configs$max_days_pre2 === void 0 ? void 0 : _configs$max_days_pre2.value : 7,
        spaceBetween: 0
      }
    },
    freeMode: true,
    watchSlidesProgress: true,
    className: "swiper-datelist",
    preventClicksPropagation: false
  }, datesList.slice(0, Number(maxDays || (configs === null || configs === void 0 || (_configs$max_days_pre3 = configs.max_days_preorder) === null || _configs$max_days_pre3 === void 0 ? void 0 : _configs$max_days_pre3.value) || 6, 10)).map(function (date, i) {
    var dateParts = date.split('-');
    var _date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    var dayName = t('DAY' + (_date.getDay() >= 1 ? _date.getDay() : 7)).substring(0, 2);
    var dayNumber = (_date.getDate() < 10 ? '0' : '') + _date.getDate();
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.Day, {
      selected: dateSelected === date,
      onClick: function onClick() {
        return handleChangeDate(date);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.DayName, null, dayName), /*#__PURE__*/_react.default.createElement(_styles.DayNumber, null, dayNumber)));
  })))), /*#__PURE__*/_react.default.createElement(_styles.TimeListWrapper, null, (isEnabled || cateringPreorder) && (timeList === null || timeList === void 0 ? void 0 : timeList.length) > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, timeList.map(function (time, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.TimeItem, {
      key: i,
      active: timeSelected === time.value,
      onClick: function onClick() {
        return handleChangeTime(time.value);
      },
      isDisabled: isDisabled,
      isProfessional: isProfessional,
      busyTime: isProfessional && isBusyTime(business, getMomentTime(time.value)),
      cateringPreorder: cateringPreorder
    }, /*#__PURE__*/_react.default.createElement("span", null, cateringPreorder && /*#__PURE__*/_react.default.createElement(_styles.CheckIcon, null, timeSelected === time.value ? /*#__PURE__*/_react.default.createElement(_styles.CheckedIcon, {
      cateringPreorder: cateringPreorder
    }) : /*#__PURE__*/_react.default.createElement(_CgRadioCheck.default, null)), /*#__PURE__*/_react.default.createElement("p", {
      id: "time"
    }, time.text, " ", cateringPreorder && "- ".concat(time.endText))));
  })) : /*#__PURE__*/_react.default.createElement(_styles.ClosedBusinessMsg, null, !isProfessional ? t('ERROR_ADD_PRODUCT_BUSINESS_CLOSED', 'The business is closed at the moment') : t('PROFESSIONAL_NOT_AVAILABLE', 'Professional is not available at the moment')))), !isPreOrderSetting && !isProfessional && /*#__PURE__*/_react.default.createElement(_styles.ClosedBusinessMsg, null, t('ERROR_ADD_PRODUCT_BUSINESS_CLOSED', 'The business is closed at the moment')), showButton && /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: goToBusinessPage,
    disabled: isAsap || !(dateSelected && timeSelected)
  }, t('GO_TO_MENU', 'Go to menu'), /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null))), (orderState === null || orderState === void 0 ? void 0 : orderState.loading) && /*#__PURE__*/_react.default.createElement(_styles.Layer, {
    nobg: !!isProfessional
  }, (window.location.pathname !== '/search' || (orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 || (_orderState$options = _orderState$options.address) === null || _orderState$options === void 0 ? void 0 : _orderState$options.location)) && /*#__PURE__*/_react.default.createElement(_SpinnerLoader.SpinnerLoader, {
    style: {
      top: windowSize.width <= 768 ? '50%' : '40%',
      position: windowSize.width <= 768 ? 'absolute' : 'sticky',
      height: 'auto'
    }
  })));
};
var BusinessPreorder = exports.BusinessPreorder = function BusinessPreorder(props) {
  var _configs$max_days_pre4;
  var maxDays = props.maxDays;
  var _useConfig3 = (0, _orderingComponentsExternal.useConfig)(),
    _useConfig4 = _slicedToArray(_useConfig3, 1),
    configs = _useConfig4[0].configs;
  var limitDays = maxDays !== null && maxDays !== void 0 ? maxDays : parseInt(configs === null || configs === void 0 || (_configs$max_days_pre4 = configs.max_days_preorder) === null || _configs$max_days_pre4 === void 0 ? void 0 : _configs$max_days_pre4.value, 10);
  var currentDate = new Date();
  var time = limitDays > 1 ? currentDate.getTime() + (limitDays - 1) * 24 * 60 * 60 * 1000 : limitDays === 1 ? currentDate.getTime() : currentDate.getTime() + 6 * 24 * 60 * 60 * 1000;
  currentDate.setTime(time);
  currentDate.setHours(23);
  currentDate.setMinutes(59);
  var businessPreorderProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessPreorderUI,
    maxDate: currentDate
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsExternal.MomentOption, businessPreorderProps);
};