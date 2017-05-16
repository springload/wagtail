webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _wagtailClient = __webpack_require__(299);
	
	/**
	 * Admin JS entry point. Add in here code to run once the page is loaded.
	 */
	document.addEventListener('DOMContentLoaded', function () {
	  var explorerNode = document.querySelector('[data-explorer-menu]');
	  var toggleNode = document.querySelector('[data-explorer-start-page]');
	
	  if (explorerNode && toggleNode) {
	    (0, _wagtailClient.initExplorer)(explorerNode, toggleNode);
	  }
	});

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initExplorer = exports.ExplorerToggle = exports.Explorer = exports.Transition = exports.LoadingSpinner = exports.PublicationStatus = exports.Icon = exports.Button = undefined;
	
	var _Button = __webpack_require__(300);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Icon = __webpack_require__(339);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _PublicationStatus = __webpack_require__(340);
	
	var _PublicationStatus2 = _interopRequireDefault(_PublicationStatus);
	
	var _LoadingSpinner = __webpack_require__(341);
	
	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);
	
	var _Transition = __webpack_require__(343);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	var _Explorer = __webpack_require__(508);
	
	var _Explorer2 = _interopRequireDefault(_Explorer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Entry point for the wagtail package.
	 * Re-exports components and other modules via a cleaner API.
	 */
	
	exports.Button = _Button2.default;
	exports.Icon = _Icon2.default;
	exports.PublicationStatus = _PublicationStatus2.default;
	exports.LoadingSpinner = _LoadingSpinner2.default;
	exports.Transition = _Transition2.default;
	exports.Explorer = _Explorer2.default;
	exports.ExplorerToggle = _Explorer.ExplorerToggle;
	exports.initExplorer = _Explorer.initExplorer;

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(301);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(308);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getClassName = function getClassName(className, icon) {
	  var hasIcon = icon !== '';
	  var iconName = '';
	  if (hasIcon) {
	    if (typeof icon === 'string') {
	      iconName = ' icon-' + icon;
	    } else {
	      iconName = icon.map(function (val) {
	        return ' icon-' + val;
	      }).join('');
	    }
	  }
	  return className + ' ' + (hasIcon ? 'icon' : '') + iconName;
	};
	
	var handleClick = function handleClick(href, onClick, preventDefault, e) {
	  if (preventDefault && href === '#') {
	    e.preventDefault();
	    e.stopPropagation();
	  }
	
	  if (onClick) {
	    onClick(e);
	  }
	};
	
	/**
	 * A reusable button. Uses a <a> tag underneath.
	 */
	var Button = function Button(_ref) {
	  var className = _ref.className,
	      icon = _ref.icon,
	      children = _ref.children,
	      accessibleLabel = _ref.accessibleLabel,
	      isLoading = _ref.isLoading,
	      href = _ref.href,
	      target = _ref.target,
	      preventDefault = _ref.preventDefault,
	      onClick = _ref.onClick;
	
	  var hasText = children !== null;
	  var iconName = isLoading ? 'spinner' : icon;
	  var accessibleElt = accessibleLabel ? _react2.default.createElement(
	    'span',
	    { className: 'visuallyhidden' },
	    accessibleLabel
	  ) : null;
	
	  return _react2.default.createElement(
	    'a',
	    {
	      className: getClassName(className, iconName),
	      onClick: handleClick.bind(null, href, onClick, preventDefault),
	      rel: target === '_blank' ? 'noopener noreferrer' : null,
	      href: href,
	      target: target
	    },
	    hasText ? children : accessibleElt
	  );
	};
	
	Button.propTypes = {
	  href: _propTypes2.default.string,
	  className: _propTypes2.default.string,
	  icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
	  target: _propTypes2.default.string,
	  children: _propTypes2.default.node,
	  accessibleLabel: _propTypes2.default.string,
	  onClick: _propTypes2.default.func,
	  isLoading: _propTypes2.default.bool,
	  preventDefault: _propTypes2.default.bool
	};
	
	Button.defaultProps = {
	  href: '#',
	  className: '',
	  icon: '',
	  target: null,
	  children: null,
	  accessibleLabel: null,
	  onClick: null,
	  isLoading: false,
	  preventDefault: true
	};
	
	exports.default = Button;

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(301);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(308);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Abstracts away the actual icon implementation (font icons, SVG icons, CSS sprite).
	 * Provide a `title` as an accessible label intended for screen readers.
	 */
	var Icon = function Icon(_ref) {
	  var name = _ref.name,
	      className = _ref.className,
	      title = _ref.title;
	  return _react2.default.createElement(
	    'span',
	    null,
	    _react2.default.createElement('span', { className: 'icon icon-' + name + ' ' + (className || ''), 'aria-hidden': true }),
	    title ? _react2.default.createElement(
	      'span',
	      { className: 'visuallyhidden' },
	      title
	    ) : null
	  );
	};
	
	Icon.propTypes = {
	  name: _propTypes2.default.string.isRequired,
	  className: _propTypes2.default.string,
	  title: _propTypes2.default.string
	};
	
	Icon.defaultProps = {
	  className: null,
	  title: null
	};
	
	exports.default = Icon;

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(301);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(308);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Displays the publication status of a page in a pill.
	 */
	var PublicationStatus = function PublicationStatus(_ref) {
	  var status = _ref.status;
	  return _react2.default.createElement(
	    'span',
	    { className: 'o-pill c-status' + (status.live ? ' c-status--live' : '') },
	    status.status
	  );
	};
	
	PublicationStatus.propTypes = {
	  status: _propTypes2.default.shape({
	    live: _propTypes2.default.bool.isRequired,
	    status: _propTypes2.default.string.isRequired
	  }).isRequired
	};
	
	exports.default = PublicationStatus;

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(308);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wagtailConfig = __webpack_require__(342);
	
	var _Icon = __webpack_require__(339);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A loading indicator with a text label next to it.
	 */
	var LoadingSpinner = function LoadingSpinner() {
	  return _react2.default.createElement(
	    'span',
	    null,
	    _react2.default.createElement(_Icon2.default, { name: 'spinner', className: 'c-spinner' }),
	    ' ' + _wagtailConfig.STRINGS.LOADING
	  );
	};
	
	exports.default = LoadingSpinner;

/***/ },

/***/ 342:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ADMIN_API = exports.ADMIN_API = global.wagtailConfig.ADMIN_API;
	var STRINGS = exports.STRINGS = global.wagtailConfig.STRINGS;
	var ADMIN_URLS = exports.ADMIN_URLS = global.wagtailConfig.ADMIN_URLS;
	
	// Maximum number of pages to load inside the explorer menu.
	var MAX_EXPLORER_PAGES = exports.MAX_EXPLORER_PAGES = 200;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.POP = exports.PUSH = undefined;
	
	var _propTypes = __webpack_require__(301);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(308);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CSSTransitionGroup = __webpack_require__(344);
	
	var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TRANSITION_DURATION = 210;
	
	// The available transitions. Must match the class names in CSS.
	var PUSH = exports.PUSH = 'push';
	var POP = exports.POP = 'pop';
	
	/**
	 * Wrapper arround react-transition-group with default values.
	 */
	var Transition = function Transition(_ref) {
	  var name = _ref.name,
	      component = _ref.component,
	      className = _ref.className,
	      duration = _ref.duration,
	      children = _ref.children;
	  return _react2.default.createElement(
	    _CSSTransitionGroup2.default,
	    {
	      component: component,
	      transitionEnterTimeout: duration,
	      transitionLeaveTimeout: duration,
	      transitionName: 'c-transition-' + name,
	      className: className
	    },
	    children
	  );
	};
	
	Transition.propTypes = {
	  name: _propTypes2.default.oneOf([PUSH, POP]).isRequired,
	  component: _propTypes2.default.string,
	  className: _propTypes2.default.string,
	  duration: _propTypes2.default.number,
	  children: _propTypes2.default.node
	};
	
	Transition.defaultProps = {
	  component: 'div',
	  children: null,
	  className: null,
	  duration: TRANSITION_DURATION
	};
	
	exports.default = Transition;

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initExplorer = exports.ExplorerToggle = undefined;
	
	var _react = __webpack_require__(308);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(356);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(509);
	
	var _redux = __webpack_require__(520);
	
	var _reduxThunk = __webpack_require__(547);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _Explorer = __webpack_require__(548);
	
	var _Explorer2 = _interopRequireDefault(_Explorer);
	
	var _ExplorerToggle = __webpack_require__(644);
	
	var _ExplorerToggle2 = _interopRequireDefault(_ExplorerToggle);
	
	var _explorer = __webpack_require__(645);
	
	var _explorer2 = _interopRequireDefault(_explorer);
	
	var _nodes = __webpack_require__(646);
	
	var _nodes2 = _interopRequireDefault(_nodes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Initialises the explorer component on the given nodes.
	 */
	
	
	// import { perfMiddleware } from '../../utils/performance';
	var initExplorer = function initExplorer(explorerNode, toggleNode) {
	  var rootReducer = (0, _redux.combineReducers)({
	    explorer: _explorer2.default,
	    nodes: _nodes2.default
	  });
	
	  var middleware = [_reduxThunk2.default];
	
	  // Uncomment this to use performance measurements.
	  // if (process.env.NODE_ENV !== 'production') {
	  //   middleware.push(perfMiddleware);
	  // }
	
	  var store = (0, _redux.createStore)(rootReducer, {}, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware),
	  // Expose store to Redux DevTools extension.
	  window.devToolsExtension ? window.devToolsExtension() : function (func) {
	    return func;
	  }));
	
	  var startPage = parseInt(toggleNode.getAttribute('data-explorer-start-page'), 10);
	
	  _reactDom2.default.render(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(
	      _ExplorerToggle2.default,
	      { startPage: startPage },
	      toggleNode.textContent
	    )
	  ), toggleNode.parentNode);
	
	  _reactDom2.default.render(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(_Explorer2.default, null)
	  ), explorerNode);
	};
	
	exports.default = _Explorer2.default;
	exports.ExplorerToggle = _ExplorerToggle2.default;
	exports.initExplorer = initExplorer;

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(301);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(308);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(509);
	
	var _actions = __webpack_require__(549);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _ExplorerPanel = __webpack_require__(637);
	
	var _ExplorerPanel2 = _interopRequireDefault(_ExplorerPanel);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Explorer = function Explorer(_ref) {
	  var isVisible = _ref.isVisible,
	      nodes = _ref.nodes,
	      path = _ref.path,
	      pushPage = _ref.pushPage,
	      popPage = _ref.popPage,
	      onClose = _ref.onClose;
	
	  var page = nodes[path[path.length - 1]];
	
	  return isVisible ? _react2.default.createElement(_ExplorerPanel2.default, {
	    path: path,
	    page: page,
	    nodes: nodes,
	    onClose: onClose,
	    popPage: popPage,
	    pushPage: pushPage
	  }) : null;
	};
	
	Explorer.propTypes = {
	  isVisible: _propTypes2.default.bool.isRequired,
	  path: _propTypes2.default.array.isRequired,
	  nodes: _propTypes2.default.object.isRequired,
	
	  pushPage: _propTypes2.default.func.isRequired,
	  popPage: _propTypes2.default.func.isRequired,
	  onClose: _propTypes2.default.func.isRequired
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    isVisible: state.explorer.isVisible,
	    path: state.explorer.path,
	    nodes: state.nodes
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    pushPage: function pushPage(id) {
	      return dispatch(actions.pushPage(id));
	    },
	    popPage: function popPage() {
	      return dispatch(actions.popPage());
	    },
	    onClose: function onClose() {
	      return dispatch(actions.closeExplorer());
	    }
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Explorer);

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.popPage = exports.closeExplorer = undefined;
	exports.toggleExplorer = toggleExplorer;
	exports.pushPage = pushPage;
	
	var _reduxActions = __webpack_require__(550);
	
	var _admin = __webpack_require__(635);
	
	var admin = _interopRequireWildcard(_admin);
	
	var _wagtailConfig = __webpack_require__(342);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var getPageStart = (0, _reduxActions.createAction)('GET_PAGE_START');
	var getPageSuccess = (0, _reduxActions.createAction)('GET_PAGE_SUCCESS', function (id, data) {
	  return { id: id, data: data };
	});
	var getPageFailure = (0, _reduxActions.createAction)('GET_PAGE_FAILURE', function (id, error) {
	  return { id: id, error: error };
	});
	
	/**
	 * Gets a page from the API.
	 */
	function getPage(id) {
	  return function (dispatch) {
	    dispatch(getPageStart(id));
	
	    return admin.getPage(id).then(function (data) {
	      dispatch(getPageSuccess(id, data));
	    }, function (error) {
	      dispatch(getPageFailure(id, error));
	    });
	  };
	}
	
	var getChildrenStart = (0, _reduxActions.createAction)('GET_CHILDREN_START', function (id) {
	  return { id: id };
	});
	var getChildrenSuccess = (0, _reduxActions.createAction)('GET_CHILDREN_SUCCESS', function (id, items, meta) {
	  return { id: id, items: items, meta: meta };
	});
	var getChildrenFailure = (0, _reduxActions.createAction)('GET_CHILDREN_FAILURE', function (id, error) {
	  return { id: id, error: error };
	});
	
	/**
	 * Gets the children of a node from the API.
	 */
	function getChildren(id) {
	  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	  return function (dispatch) {
	    dispatch(getChildrenStart(id));
	
	    return admin.getPageChildren(id, {
	      offset: offset
	    }).then(function (_ref) {
	      var items = _ref.items,
	          meta = _ref.meta;
	
	      var nbPages = offset + items.length;
	      dispatch(getChildrenSuccess(id, items, meta));
	
	      // Load more pages if necessary. Only one request is created even though
	      // more might be needed, thus naturally throttling the loading.
	      if (nbPages < meta.total_count && nbPages < _wagtailConfig.MAX_EXPLORER_PAGES) {
	        dispatch(getChildren(id, nbPages));
	      }
	    }, function (error) {
	      dispatch(getChildrenFailure(id, error));
	    });
	  };
	}
	
	var openExplorer = (0, _reduxActions.createAction)('OPEN_EXPLORER', function (id) {
	  return { id: id };
	});
	var closeExplorer = exports.closeExplorer = (0, _reduxActions.createAction)('CLOSE_EXPLORER');
	
	function toggleExplorer(id) {
	  return function (dispatch, getState) {
	    var _getState = getState(),
	        explorer = _getState.explorer,
	        nodes = _getState.nodes;
	
	    if (explorer.isVisible) {
	      dispatch(closeExplorer());
	    } else {
	      var page = nodes[id];
	
	      dispatch(openExplorer(id));
	
	      if (!page) {
	        dispatch(getChildren(id));
	      }
	
	      // We need to get the title of the starting page, only if it is not the site's root.
	      var isNotRoot = id !== 1;
	      if (isNotRoot) {
	        dispatch(getPage(id));
	      }
	    }
	  };
	}
	
	var popPage = exports.popPage = (0, _reduxActions.createAction)('POP_PAGE');
	var pushPagePrivate = (0, _reduxActions.createAction)('PUSH_PAGE', function (id) {
	  return { id: id };
	});
	
	function pushPage(id) {
	  return function (dispatch, getState) {
	    var _getState2 = getState(),
	        nodes = _getState2.nodes;
	
	    var page = nodes[id];
	
	    dispatch(pushPagePrivate(id));
	
	    if (page && !page.isFetching && !page.children.count > 0) {
	      dispatch(getChildren(id));
	    }
	  };
	}

/***/ },

/***/ 635:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPageChildren = exports.getPage = undefined;
	
	var _client = __webpack_require__(636);
	
	var _wagtailConfig = __webpack_require__(342);
	
	var getPage = exports.getPage = function getPage(id) {
	  var url = '' + _wagtailConfig.ADMIN_API.PAGES + id + '/';
	
	  return (0, _client.get)(url);
	};
	
	var getPageChildren = exports.getPageChildren = function getPageChildren(id) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  var url = _wagtailConfig.ADMIN_API.PAGES + '?child_of=' + id;
	
	  if (options.fields) {
	    url += '&fields=' + global.encodeURIComponent(options.fields.join(','));
	  }
	
	  if (options.onlyWithChildren) {
	    url += '&has_children=1';
	  }
	
	  if (options.offset) {
	    url += '&offset=' + options.offset;
	  }
	
	  url += _wagtailConfig.ADMIN_API.EXTRA_CHILDREN_PARAMETERS;
	
	  return (0, _client.get)(url);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 636:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var fetch = global.fetch;
	var Headers = global.Headers;
	
	var REQUEST_TIMEOUT = 15000;
	
	var checkStatus = function checkStatus(response) {
	  if (response.status >= 200 && response.status < 300) {
	    return response;
	  }
	
	  var error = new Error(response.statusText);
	
	  throw error;
	};
	
	var parseJSON = function parseJSON(response) {
	  return response.json();
	};
	
	// Response timeout cancelling the promise (not the request).
	// See https://github.com/github/fetch/issues/175#issuecomment-216791333.
	var timeout = function timeout(ms, promise) {
	  var race = new Promise(function (resolve, reject) {
	    var timeoutId = setTimeout(function () {
	      reject(new Error('Response timeout'));
	    }, ms);
	
	    promise.then(function (res) {
	      clearTimeout(timeoutId);
	      resolve(res);
	    }, function (err) {
	      clearTimeout(timeoutId);
	      reject(err);
	    });
	  });
	
	  return race;
	};
	
	/**
	 * Wrapper around fetch with sane defaults for behavior in the face of
	 * errors.
	 */
	var request = function request(method, url) {
	  var options = {
	    credentials: 'same-origin',
	    headers: new Headers({
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    }),
	    method: method
	  };
	
	  return timeout(REQUEST_TIMEOUT, fetch(url, options)).then(checkStatus).then(parseJSON);
	};
	
	var get = exports.get = function get(url) {
	  return request('GET', url);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 637:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(301);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(308);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _focusTrapReact = __webpack_require__(638);
	
	var _focusTrapReact2 = _interopRequireDefault(_focusTrapReact);
	
	var _wagtailConfig = __webpack_require__(342);
	
	var _Button = __webpack_require__(300);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _LoadingSpinner = __webpack_require__(341);
	
	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);
	
	var _Transition = __webpack_require__(343);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	var _ExplorerHeader = __webpack_require__(641);
	
	var _ExplorerHeader2 = _interopRequireDefault(_ExplorerHeader);
	
	var _ExplorerItem = __webpack_require__(642);
	
	var _ExplorerItem2 = _interopRequireDefault(_ExplorerItem);
	
	var _PageCount = __webpack_require__(643);
	
	var _PageCount2 = _interopRequireDefault(_PageCount);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * The main panel of the page explorer menu, with heading,
	 * menu items, and special states.
	 */
	var ExplorerPanel = function (_React$Component) {
	  _inherits(ExplorerPanel, _React$Component);
	
	  function ExplorerPanel(props) {
	    _classCallCheck(this, ExplorerPanel);
	
	    var _this = _possibleConstructorReturn(this, (ExplorerPanel.__proto__ || Object.getPrototypeOf(ExplorerPanel)).call(this, props));
	
	    _this.state = {
	      transition: _Transition.PUSH,
	      paused: false
	    };
	
	    _this.onItemClick = _this.onItemClick.bind(_this);
	    _this.onHeaderClick = _this.onHeaderClick.bind(_this);
	    _this.clickOutside = _this.clickOutside.bind(_this);
	    return _this;
	  }
	
	  _createClass(ExplorerPanel, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var path = this.props.path;
	
	      var isPush = newProps.path.length > path.length;
	
	      this.setState({
	        transition: isPush ? _Transition.PUSH : _Transition.POP
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      document.querySelector('[data-explorer-menu-item]').classList.add('submenu-active');
	      document.body.classList.add('explorer-open');
	      document.addEventListener('mousedown', this.clickOutside);
	      document.addEventListener('touchend', this.clickOutside);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      document.querySelector('[data-explorer-menu-item]').classList.remove('submenu-active');
	      document.body.classList.remove('explorer-open');
	      document.removeEventListener('mousedown', this.clickOutside);
	      document.removeEventListener('touchend', this.clickOutside);
	    }
	  }, {
	    key: 'clickOutside',
	    value: function clickOutside(e) {
	      var onClose = this.props.onClose;
	
	      var explorer = document.querySelector('[data-explorer-menu]');
	      var toggle = document.querySelector('[data-explorer-menu-item]');
	
	      var isInside = explorer.contains(e.target) || toggle.contains(e.target);
	      if (!isInside) {
	        onClose();
	      }
	
	      if (toggle.contains(e.target)) {
	        this.setState({
	          paused: true
	        });
	      }
	    }
	  }, {
	    key: 'onItemClick',
	    value: function onItemClick(id, e) {
	      var pushPage = this.props.pushPage;
	
	
	      e.preventDefault();
	      e.stopPropagation();
	
	      pushPage(id);
	    }
	  }, {
	    key: 'onHeaderClick',
	    value: function onHeaderClick(e) {
	      var _props = this.props,
	          path = _props.path,
	          popPage = _props.popPage;
	
	      var hasBack = path.length > 1;
	
	      if (hasBack) {
	        e.preventDefault();
	        e.stopPropagation();
	
	        popPage();
	      }
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren() {
	      var _this2 = this;
	
	      var _props2 = this.props,
	          page = _props2.page,
	          nodes = _props2.nodes;
	
	      var children = void 0;
	
	      if (!page.isFetching && !page.children.items) {
	        children = _react2.default.createElement(
	          'div',
	          { key: 'empty', className: 'c-explorer__placeholder' },
	          _wagtailConfig.STRINGS.NO_RESULTS
	        );
	      } else {
	        children = _react2.default.createElement(
	          'div',
	          { key: 'children' },
	          page.children.items.map(function (id) {
	            return _react2.default.createElement(_ExplorerItem2.default, {
	              key: id,
	              item: nodes[id],
	              onClick: _this2.onItemClick.bind(null, id)
	            });
	          })
	        );
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'c-explorer__drawer' },
	        children,
	        page.isFetching ? _react2.default.createElement(
	          'div',
	          { key: 'fetching', className: 'c-explorer__placeholder' },
	          _react2.default.createElement(_LoadingSpinner2.default, null)
	        ) : null,
	        page.isError ? _react2.default.createElement(
	          'div',
	          { key: 'error', className: 'c-explorer__placeholder' },
	          _wagtailConfig.STRINGS.SERVER_ERROR
	        ) : null
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props,
	          page = _props3.page,
	          onClose = _props3.onClose,
	          path = _props3.path;
	      var _state = this.state,
	          transition = _state.transition,
	          paused = _state.paused;
	
	
	      return _react2.default.createElement(
	        _focusTrapReact2.default,
	        {
	          tag: 'nav',
	          className: 'explorer',
	          paused: paused || !page || page.isFetching,
	          focusTrapOptions: {
	            initialFocus: '.c-explorer__close',
	            onDeactivate: onClose
	          }
	        },
	        _react2.default.createElement(
	          _Button2.default,
	          { className: 'c-explorer__close u-hidden', onClick: onClose },
	          _wagtailConfig.STRINGS.CLOSE_EXPLORER
	        ),
	        _react2.default.createElement(
	          _Transition2.default,
	          { name: transition, className: 'c-explorer' },
	          _react2.default.createElement(
	            'div',
	            { key: path.length, className: 'c-transition-group' },
	            _react2.default.createElement(_ExplorerHeader2.default, {
	              depth: path.length,
	              page: page,
	              onClick: this.onHeaderClick
	            }),
	            this.renderChildren(),
	            page.isError || page.children.items && page.children.count > _wagtailConfig.MAX_EXPLORER_PAGES ? _react2.default.createElement(_PageCount2.default, { page: page }) : null
	          )
	        )
	      );
	    }
	  }]);
	
	  return ExplorerPanel;
	}(_react2.default.Component);
	
	ExplorerPanel.propTypes = {
	  nodes: _propTypes2.default.object.isRequired,
	  path: _propTypes2.default.array.isRequired,
	  page: _propTypes2.default.shape({
	    isFetching: _propTypes2.default.bool,
	    children: _propTypes2.default.shape({
	      count: _propTypes2.default.number,
	      items: _propTypes2.default.array
	    })
	  }).isRequired,
	  onClose: _propTypes2.default.func.isRequired,
	  popPage: _propTypes2.default.func.isRequired,
	  pushPage: _propTypes2.default.func.isRequired
	};
	
	exports.default = ExplorerPanel;

/***/ },

/***/ 641:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(301);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(308);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wagtailConfig = __webpack_require__(342);
	
	var _Button = __webpack_require__(300);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Icon = __webpack_require__(339);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * The bar at the top of the explorer, displaying the current level
	 * and allowing access back to the parent level.
	 */
	var ExplorerHeader = function ExplorerHeader(_ref) {
	  var page = _ref.page,
	      depth = _ref.depth,
	      onClick = _ref.onClick;
	
	  var isRoot = depth === 1;
	
	  return _react2.default.createElement(
	    _Button2.default,
	    {
	      href: page.id ? '' + _wagtailConfig.ADMIN_URLS.PAGES + page.id + '/' : _wagtailConfig.ADMIN_URLS.PAGES,
	      className: 'c-explorer__header',
	      onClick: onClick
	    },
	    _react2.default.createElement(
	      'div',
	      { className: 'c-explorer__header__inner' },
	      _react2.default.createElement(_Icon2.default, { name: isRoot ? 'home' : 'arrow-left' }),
	      _react2.default.createElement(
	        'span',
	        null,
	        page.title || _wagtailConfig.STRINGS.PAGES
	      )
	    )
	  );
	};
	
	ExplorerHeader.propTypes = {
	  page: _propTypes2.default.shape({
	    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	    title: _propTypes2.default.string
	  }).isRequired,
	  depth: _propTypes2.default.number.isRequired,
	  onClick: _propTypes2.default.func.isRequired
	};
	
	exports.default = ExplorerHeader;

/***/ },

/***/ 642:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(301);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(308);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wagtailConfig = __webpack_require__(342);
	
	var _Icon = __webpack_require__(339);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Button = __webpack_require__(300);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _PublicationStatus = __webpack_require__(340);
	
	var _PublicationStatus2 = _interopRequireDefault(_PublicationStatus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Hoist icons in the explorer item, as it is re-rendered many times.
	var childrenIcon = _react2.default.createElement(_Icon2.default, { name: 'folder-inverse' });
	
	var editIcon = _react2.default.createElement(_Icon2.default, { name: 'edit', title: _wagtailConfig.STRINGS.EDIT });
	
	var nextIcon = _react2.default.createElement(_Icon2.default, { name: 'arrow-right', title: _wagtailConfig.STRINGS.SEE_CHILDREN });
	
	/**
	 * One menu item in the page explorer, with different available actions
	 * and information depending on the metadata of the page.
	 */
	var ExplorerItem = function ExplorerItem(_ref) {
	  var item = _ref.item,
	      onClick = _ref.onClick;
	  var id = item.id,
	      title = item.title,
	      meta = item.meta;
	
	  var hasChildren = meta.children.count > 0;
	  var isPublished = meta.status.live && !meta.status.has_unpublished_changes;
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'c-explorer__item' },
	    _react2.default.createElement(
	      _Button2.default,
	      { href: '' + _wagtailConfig.ADMIN_URLS.PAGES + id + '/', className: 'c-explorer__item__link' },
	      hasChildren ? childrenIcon : null,
	      _react2.default.createElement(
	        'h3',
	        { className: 'c-explorer__item__title' },
	        title
	      ),
	      !isPublished ? _react2.default.createElement(
	        'span',
	        { className: 'c-explorer__meta' },
	        _react2.default.createElement(_PublicationStatus2.default, { status: meta.status })
	      ) : null
	    ),
	    _react2.default.createElement(
	      _Button2.default,
	      {
	        href: '' + _wagtailConfig.ADMIN_URLS.PAGES + id + '/edit/',
	        className: 'c-explorer__item__action c-explorer__item__action--small'
	      },
	      editIcon
	    ),
	    hasChildren ? _react2.default.createElement(
	      _Button2.default,
	      {
	        className: 'c-explorer__item__action',
	        onClick: onClick
	      },
	      nextIcon
	    ) : null
	  );
	};
	
	ExplorerItem.propTypes = {
	  item: _propTypes2.default.shape({
	    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
	    title: _propTypes2.default.string.isRequired,
	    meta: _propTypes2.default.shape({
	      status: _propTypes2.default.object.isRequired
	    }).isRequired
	  }).isRequired,
	  onClick: _propTypes2.default.func.isRequired
	};
	
	exports.default = ExplorerItem;

/***/ },

/***/ 643:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(301);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(308);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wagtailConfig = __webpack_require__(342);
	
	var _Icon = __webpack_require__(339);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PageCount = function PageCount(_ref) {
	  var page = _ref.page;
	
	  var count = page.children.count;
	
	  return _react2.default.createElement(
	    'a',
	    {
	      href: '' + _wagtailConfig.ADMIN_URLS.PAGES + page.id + '/',
	      className: 'c-explorer__see-more',
	      tabIndex: 0
	    },
	    _wagtailConfig.STRINGS.SEE_ALL,
	    _react2.default.createElement(
	      'span',
	      null,
	      ' ' + count + ' ' + (count === 1 ? _wagtailConfig.STRINGS.PAGE.toLowerCase() : _wagtailConfig.STRINGS.PAGES.toLowerCase())
	    ),
	    _react2.default.createElement(_Icon2.default, { name: 'arrow-right' })
	  );
	};
	
	PageCount.propTypes = {
	  page: _propTypes2.default.object.isRequired
	};
	
	exports.default = PageCount;

/***/ },

/***/ 644:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(301);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(308);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(509);
	
	var _actions = __webpack_require__(549);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _Button = __webpack_require__(300);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A Button which toggles the explorer.
	 */
	var ExplorerToggle = function ExplorerToggle(_ref) {
	  var children = _ref.children,
	      onToggle = _ref.onToggle;
	  return _react2.default.createElement(
	    _Button2.default,
	    {
	      icon: ['folder-open-inverse', 'arrow-right-after'],
	      onClick: onToggle
	    },
	    children
	  );
	};
	
	ExplorerToggle.propTypes = {
	  onToggle: _propTypes2.default.func.isRequired,
	  children: _propTypes2.default.node.isRequired
	};
	
	var mapStateToProps = function mapStateToProps() {
	  return {};
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    onToggle: function onToggle(page) {
	      return dispatch(actions.toggleExplorer(page));
	    }
	  };
	};
	
	var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
	  return {
	    children: ownProps.children,
	    onToggle: dispatchProps.onToggle.bind(null, ownProps.startPage)
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps)(ExplorerToggle);

/***/ },

/***/ 645:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = explorer;
	var defaultState = {
	  isVisible: false,
	  path: []
	};
	
	/**
	 * Oversees the state of the explorer. Defines:
	 * - Where in the page tree the explorer is at.
	 * - Whether the explorer is open or not.
	 */
	function explorer() {
	  var prevState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	  var _ref = arguments[1];
	  var type = _ref.type,
	      payload = _ref.payload;
	
	  switch (type) {
	    case 'OPEN_EXPLORER':
	      // Provide a starting page when opening the explorer.
	      return {
	        isVisible: true,
	        path: [payload.id]
	      };
	
	    case 'CLOSE_EXPLORER':
	      return defaultState;
	
	    case 'PUSH_PAGE':
	      return {
	        isVisible: prevState.isVisible,
	        path: prevState.path.concat([payload.id])
	      };
	
	    case 'POP_PAGE':
	      return {
	        isVisible: prevState.isVisible,
	        path: prevState.path.slice(0, -1)
	      };
	
	    default:
	      return prevState;
	  }
	}

/***/ },

/***/ 646:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = nodes;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var defaultPageState = {
	  isFetching: false,
	  isError: false,
	  children: {
	    items: [],
	    count: 0
	  },
	  meta: {
	    children: {}
	  }
	};
	
	/**
	 * A single page node in the explorer.
	 */
	var node = function node() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPageState;
	  var _ref = arguments[1];
	  var type = _ref.type,
	      payload = _ref.payload;
	
	  switch (type) {
	    case 'OPEN_EXPLORER':
	      return state || defaultPageState;
	
	    case 'GET_PAGE_SUCCESS':
	      return Object.assign({}, state, payload.data, {
	        isError: false
	      });
	
	    case 'GET_CHILDREN_START':
	      return Object.assign({}, state, {
	        isFetching: true
	      });
	
	    case 'GET_CHILDREN_SUCCESS':
	      return Object.assign({}, state, {
	        isFetching: false,
	        isError: false,
	        children: {
	          items: state.children.items.slice().concat(payload.items.map(function (item) {
	            return item.id;
	          })),
	          count: payload.meta.total_count
	        }
	      });
	
	    case 'GET_PAGE_FAILURE':
	    case 'GET_CHILDREN_FAILURE':
	      return Object.assign({}, state, {
	        isFetching: false,
	        isError: true
	      });
	
	    default:
	      return state;
	  }
	};
	
	var defaultState = {};
	
	/**
	 * Contains all of the page nodes in one object.
	 */
	function nodes() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	  var _ref2 = arguments[1];
	  var type = _ref2.type,
	      payload = _ref2.payload;
	
	  switch (type) {
	
	    case 'OPEN_EXPLORER':
	    case 'GET_PAGE_SUCCESS':
	    case 'GET_CHILDREN_START':
	    case 'GET_PAGE_FAILURE':
	    case 'GET_CHILDREN_FAILURE':
	      return Object.assign({}, state, _defineProperty({}, payload.id, node(state[payload.id], { type: type, payload: payload })));
	
	    // eslint-disable-next-line no-case-declarations
	    case 'GET_CHILDREN_SUCCESS':
	      var newState = Object.assign({}, state, _defineProperty({}, payload.id, node(state[payload.id], { type: type, payload: payload })));
	
	      payload.items.forEach(function (item) {
	        newState[item.id] = Object.assign({}, defaultPageState, item);
	      });
	
	      return newState;
	
	    default:
	      return state;
	  }
	}

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93YWd0YWlsL3dhZ3RhaWxhZG1pbi9zdGF0aWNfc3JjL3dhZ3RhaWxhZG1pbi9hcHAvd2FndGFpbGFkbWluLmVudHJ5LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0ljb24vSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUHVibGljYXRpb25TdGF0dXMvUHVibGljYXRpb25TdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0xvYWRpbmdTcGlubmVyL0xvYWRpbmdTcGlubmVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29uZmlnL3dhZ3RhaWxDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1RyYW5zaXRpb24vVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvRXhwbG9yZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0V4cGxvcmVyL0V4cGxvcmVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9FeHBsb3Jlci9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvYXBpL2FkbWluLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvYXBpL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvRXhwbG9yZXIvRXhwbG9yZXJQYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvRXhwbG9yZXIvRXhwbG9yZXJIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0V4cGxvcmVyL0V4cGxvcmVySXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvRXhwbG9yZXIvUGFnZUNvdW50LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9FeHBsb3Jlci9FeHBsb3JlclRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvRXhwbG9yZXIvcmVkdWNlcnMvZXhwbG9yZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0V4cGxvcmVyL3JlZHVjZXJzL25vZGVzLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV4cGxvcmVyTm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2dnbGVOb2RlIiwiQnV0dG9uIiwiSWNvbiIsIlB1YmxpY2F0aW9uU3RhdHVzIiwiTG9hZGluZ1NwaW5uZXIiLCJUcmFuc2l0aW9uIiwiRXhwbG9yZXIiLCJFeHBsb3JlclRvZ2dsZSIsImluaXRFeHBsb3JlciIsImdldENsYXNzTmFtZSIsImNsYXNzTmFtZSIsImljb24iLCJoYXNJY29uIiwiaWNvbk5hbWUiLCJtYXAiLCJ2YWwiLCJqb2luIiwiaGFuZGxlQ2xpY2siLCJocmVmIiwib25DbGljayIsInByZXZlbnREZWZhdWx0IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImNoaWxkcmVuIiwiYWNjZXNzaWJsZUxhYmVsIiwiaXNMb2FkaW5nIiwidGFyZ2V0IiwiaGFzVGV4dCIsImFjY2Vzc2libGVFbHQiLCJiaW5kIiwicHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsIm5vZGUiLCJmdW5jIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsIm5hbWUiLCJ0aXRsZSIsImlzUmVxdWlyZWQiLCJzdGF0dXMiLCJsaXZlIiwic2hhcGUiLCJMT0FESU5HIiwiQURNSU5fQVBJIiwiZ2xvYmFsIiwid2FndGFpbENvbmZpZyIsIlNUUklOR1MiLCJBRE1JTl9VUkxTIiwiTUFYX0VYUExPUkVSX1BBR0VTIiwiVFJBTlNJVElPTl9EVVJBVElPTiIsIlBVU0giLCJQT1AiLCJjb21wb25lbnQiLCJkdXJhdGlvbiIsIm9uZU9mIiwibnVtYmVyIiwicm9vdFJlZHVjZXIiLCJleHBsb3JlciIsIm5vZGVzIiwibWlkZGxld2FyZSIsInN0b3JlIiwid2luZG93IiwiZGV2VG9vbHNFeHRlbnNpb24iLCJzdGFydFBhZ2UiLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsInJlbmRlciIsInRleHRDb250ZW50IiwicGFyZW50Tm9kZSIsImFjdGlvbnMiLCJpc1Zpc2libGUiLCJwYXRoIiwicHVzaFBhZ2UiLCJwb3BQYWdlIiwib25DbG9zZSIsInBhZ2UiLCJsZW5ndGgiLCJhcnJheSIsIm9iamVjdCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJpZCIsImNsb3NlRXhwbG9yZXIiLCJ0b2dnbGVFeHBsb3JlciIsImFkbWluIiwiZ2V0UGFnZVN0YXJ0IiwiZ2V0UGFnZVN1Y2Nlc3MiLCJkYXRhIiwiZ2V0UGFnZUZhaWx1cmUiLCJlcnJvciIsImdldFBhZ2UiLCJ0aGVuIiwiZ2V0Q2hpbGRyZW5TdGFydCIsImdldENoaWxkcmVuU3VjY2VzcyIsIml0ZW1zIiwibWV0YSIsImdldENoaWxkcmVuRmFpbHVyZSIsImdldENoaWxkcmVuIiwib2Zmc2V0IiwiZ2V0UGFnZUNoaWxkcmVuIiwibmJQYWdlcyIsInRvdGFsX2NvdW50Iiwib3BlbkV4cGxvcmVyIiwiZ2V0U3RhdGUiLCJpc05vdFJvb3QiLCJwdXNoUGFnZVByaXZhdGUiLCJpc0ZldGNoaW5nIiwiY291bnQiLCJ1cmwiLCJQQUdFUyIsIm9wdGlvbnMiLCJmaWVsZHMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJvbmx5V2l0aENoaWxkcmVuIiwiRVhUUkFfQ0hJTERSRU5fUEFSQU1FVEVSUyIsImZldGNoIiwiSGVhZGVycyIsIlJFUVVFU1RfVElNRU9VVCIsImNoZWNrU3RhdHVzIiwicmVzcG9uc2UiLCJFcnJvciIsInN0YXR1c1RleHQiLCJwYXJzZUpTT04iLCJqc29uIiwidGltZW91dCIsIm1zIiwicHJvbWlzZSIsInJhY2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJyZXMiLCJjbGVhclRpbWVvdXQiLCJlcnIiLCJyZXF1ZXN0IiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiZ2V0IiwiRXhwbG9yZXJQYW5lbCIsInByb3BzIiwidHJhbnNpdGlvbiIsInBhdXNlZCIsIm9uSXRlbUNsaWNrIiwib25IZWFkZXJDbGljayIsImNsaWNrT3V0c2lkZSIsIm5ld1Byb3BzIiwiaXNQdXNoIiwic2V0U3RhdGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsImlzSW5zaWRlIiwiY29udGFpbnMiLCJoYXNCYWNrIiwiTk9fUkVTVUxUUyIsImlzRXJyb3IiLCJTRVJWRVJfRVJST1IiLCJpbml0aWFsRm9jdXMiLCJvbkRlYWN0aXZhdGUiLCJDTE9TRV9FWFBMT1JFUiIsInJlbmRlckNoaWxkcmVuIiwiQ29tcG9uZW50IiwiRXhwbG9yZXJIZWFkZXIiLCJkZXB0aCIsImlzUm9vdCIsImNoaWxkcmVuSWNvbiIsImVkaXRJY29uIiwiRURJVCIsIm5leHRJY29uIiwiU0VFX0NISUxEUkVOIiwiRXhwbG9yZXJJdGVtIiwiaXRlbSIsImhhc0NoaWxkcmVuIiwiaXNQdWJsaXNoZWQiLCJoYXNfdW5wdWJsaXNoZWRfY2hhbmdlcyIsIlBhZ2VDb3VudCIsIlNFRV9BTEwiLCJQQUdFIiwidG9Mb3dlckNhc2UiLCJvblRvZ2dsZSIsIm1lcmdlUHJvcHMiLCJzdGF0ZVByb3BzIiwiZGlzcGF0Y2hQcm9wcyIsIm93blByb3BzIiwiZGVmYXVsdFN0YXRlIiwicHJldlN0YXRlIiwidHlwZSIsInBheWxvYWQiLCJjb25jYXQiLCJzbGljZSIsImRlZmF1bHRQYWdlU3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJuZXdTdGF0ZSIsImZvckVhY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7O0FBR0FBLFVBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xELE9BQU1DLGVBQWVGLFNBQVNHLGFBQVQsQ0FBdUIsc0JBQXZCLENBQXJCO0FBQ0EsT0FBTUMsYUFBYUosU0FBU0csYUFBVCxDQUF1Qiw0QkFBdkIsQ0FBbkI7O0FBRUEsT0FBSUQsZ0JBQWdCRSxVQUFwQixFQUFnQztBQUM5QixzQ0FBYUYsWUFBYixFQUEyQkUsVUFBM0I7QUFDRDtBQUNGLEVBUEQsRTs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQVZBOzs7OztTQWdCRUMsTTtTQUNBQyxJO1NBQ0FDLGlCO1NBQ0FDLGM7U0FDQUMsVTtTQUNBQyxRO1NBQ0FDLGM7U0FDQUMsWTs7Ozs7Ozs7Ozs7OztBQ3ZCRjs7OztBQUNBOzs7Ozs7QUFFQSxLQUFNQyxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsU0FBRCxFQUFZQyxJQUFaLEVBQXFCO0FBQ3hDLE9BQU1DLFVBQVVELFNBQVMsRUFBekI7QUFDQSxPQUFJRSxXQUFXLEVBQWY7QUFDQSxPQUFJRCxPQUFKLEVBQWE7QUFDWCxTQUFJLE9BQU9ELElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDNUJFLDZCQUFvQkYsSUFBcEI7QUFDRCxNQUZELE1BRU87QUFDTEUsa0JBQVdGLEtBQUtHLEdBQUwsQ0FBUztBQUFBLDJCQUFnQkMsR0FBaEI7QUFBQSxRQUFULEVBQWdDQyxJQUFoQyxDQUFxQyxFQUFyQyxDQUFYO0FBQ0Q7QUFDRjtBQUNELFVBQVVOLFNBQVYsVUFBdUJFLFVBQVUsTUFBVixHQUFtQixFQUExQyxJQUErQ0MsUUFBL0M7QUFDRCxFQVhEOztBQWFBLEtBQU1JLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQU9DLE9BQVAsRUFB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dGF0aWMvd2FndGFpbGFkbWluL2pzL3dhZ3RhaWxhZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRFeHBsb3JlciB9IGZyb20gJ3dhZ3RhaWwtY2xpZW50JztcblxuLyoqXG4gKiBBZG1pbiBKUyBlbnRyeSBwb2ludC4gQWRkIGluIGhlcmUgY29kZSB0byBydW4gb25jZSB0aGUgcGFnZSBpcyBsb2FkZWQuXG4gKi9cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGV4cGxvcmVyTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWV4cGxvcmVyLW1lbnVdJyk7XG4gIGNvbnN0IHRvZ2dsZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1leHBsb3Jlci1zdGFydC1wYWdlXScpO1xuXG4gIGlmIChleHBsb3Jlck5vZGUgJiYgdG9nZ2xlTm9kZSkge1xuICAgIGluaXRFeHBsb3JlcihleHBsb3Jlck5vZGUsIHRvZ2dsZU5vZGUpO1xuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dhZ3RhaWwvd2FndGFpbGFkbWluL3N0YXRpY19zcmMvd2FndGFpbGFkbWluL2FwcC93YWd0YWlsYWRtaW4uZW50cnkuanMiLCIvKipcbiAqIEVudHJ5IHBvaW50IGZvciB0aGUgd2FndGFpbCBwYWNrYWdlLlxuICogUmUtZXhwb3J0cyBjb21wb25lbnRzIGFuZCBvdGhlciBtb2R1bGVzIHZpYSBhIGNsZWFuZXIgQVBJLlxuICovXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0IEljb24gZnJvbSAnLi9jb21wb25lbnRzL0ljb24vSWNvbic7XG5pbXBvcnQgUHVibGljYXRpb25TdGF0dXMgZnJvbSAnLi9jb21wb25lbnRzL1B1YmxpY2F0aW9uU3RhdHVzL1B1YmxpY2F0aW9uU3RhdHVzJztcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tICcuL2NvbXBvbmVudHMvTG9hZGluZ1NwaW5uZXIvTG9hZGluZ1NwaW5uZXInO1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAnLi9jb21wb25lbnRzL1RyYW5zaXRpb24vVHJhbnNpdGlvbic7XG5pbXBvcnQgRXhwbG9yZXIsIHtcbiAgRXhwbG9yZXJUb2dnbGUsXG4gIGluaXRFeHBsb3Jlcixcbn0gZnJvbSAnLi9jb21wb25lbnRzL0V4cGxvcmVyJztcblxuZXhwb3J0IHtcbiAgQnV0dG9uLFxuICBJY29uLFxuICBQdWJsaWNhdGlvblN0YXR1cyxcbiAgTG9hZGluZ1NwaW5uZXIsXG4gIFRyYW5zaXRpb24sXG4gIEV4cGxvcmVyLFxuICBFeHBsb3JlclRvZ2dsZSxcbiAgaW5pdEV4cGxvcmVyLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvaW5kZXguanMiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZ2V0Q2xhc3NOYW1lID0gKGNsYXNzTmFtZSwgaWNvbikgPT4ge1xuICBjb25zdCBoYXNJY29uID0gaWNvbiAhPT0gJyc7XG4gIGxldCBpY29uTmFtZSA9ICcnO1xuICBpZiAoaGFzSWNvbikge1xuICAgIGlmICh0eXBlb2YgaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGljb25OYW1lID0gYCBpY29uLSR7aWNvbn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBpY29uTmFtZSA9IGljb24ubWFwKHZhbCA9PiBgIGljb24tJHt2YWx9YCkuam9pbignJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBgJHtjbGFzc05hbWV9ICR7aGFzSWNvbiA/ICdpY29uJyA6ICcnfSR7aWNvbk5hbWV9YDtcbn07XG5cbmNvbnN0IGhhbmRsZUNsaWNrID0gKGhyZWYsIG9uQ2xpY2ssIHByZXZlbnREZWZhdWx0LCBlKSA9PiB7XG4gIGlmIChwcmV2ZW50RGVmYXVsdCAmJiBocmVmID09PSAnIycpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGlmIChvbkNsaWNrKSB7XG4gICAgb25DbGljayhlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBIHJldXNhYmxlIGJ1dHRvbi4gVXNlcyBhIDxhPiB0YWcgdW5kZXJuZWF0aC5cbiAqL1xuY29uc3QgQnV0dG9uID0gKHtcbiAgY2xhc3NOYW1lLFxuICBpY29uLFxuICBjaGlsZHJlbixcbiAgYWNjZXNzaWJsZUxhYmVsLFxuICBpc0xvYWRpbmcsXG4gIGhyZWYsXG4gIHRhcmdldCxcbiAgcHJldmVudERlZmF1bHQsXG4gIG9uQ2xpY2ssXG59KSA9PiB7XG4gIGNvbnN0IGhhc1RleHQgPSBjaGlsZHJlbiAhPT0gbnVsbDtcbiAgY29uc3QgaWNvbk5hbWUgPSBpc0xvYWRpbmcgPyAnc3Bpbm5lcicgOiBpY29uO1xuICBjb25zdCBhY2Nlc3NpYmxlRWx0ID0gYWNjZXNzaWJsZUxhYmVsID8gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc3VhbGx5aGlkZGVuXCI+XG4gICAgICB7YWNjZXNzaWJsZUxhYmVsfVxuICAgIDwvc3Bhbj5cbiAgKSA6IG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8YVxuICAgICAgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWUoY2xhc3NOYW1lLCBpY29uTmFtZSl9XG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGljay5iaW5kKG51bGwsIGhyZWYsIG9uQ2xpY2ssIHByZXZlbnREZWZhdWx0KX1cbiAgICAgIHJlbD17dGFyZ2V0ID09PSAnX2JsYW5rJyA/ICdub29wZW5lciBub3JlZmVycmVyJyA6IG51bGx9XG4gICAgICBocmVmPXtocmVmfVxuICAgICAgdGFyZ2V0PXt0YXJnZXR9XG4gICAgPlxuICAgICAge2hhc1RleHQgPyBjaGlsZHJlbiA6IGFjY2Vzc2libGVFbHR9XG4gICAgPC9hPlxuICApO1xufTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICBdKSxcbiAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGFjY2Vzc2libGVMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIHByZXZlbnREZWZhdWx0OiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGhyZWY6ICcjJyxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgaWNvbjogJycsXG4gIHRhcmdldDogbnVsbCxcbiAgY2hpbGRyZW46IG51bGwsXG4gIGFjY2Vzc2libGVMYWJlbDogbnVsbCxcbiAgb25DbGljazogbnVsbCxcbiAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgcHJldmVudERlZmF1bHQ6IHRydWUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qcyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIEFic3RyYWN0cyBhd2F5IHRoZSBhY3R1YWwgaWNvbiBpbXBsZW1lbnRhdGlvbiAoZm9udCBpY29ucywgU1ZHIGljb25zLCBDU1Mgc3ByaXRlKS5cbiAqIFByb3ZpZGUgYSBgdGl0bGVgIGFzIGFuIGFjY2Vzc2libGUgbGFiZWwgaW50ZW5kZWQgZm9yIHNjcmVlbiByZWFkZXJzLlxuICovXG5jb25zdCBJY29uID0gKHsgbmFtZSwgY2xhc3NOYW1lLCB0aXRsZSB9KSA9PiAoXG4gIDxzcGFuPlxuICAgIDxzcGFuIGNsYXNzTmFtZT17YGljb24gaWNvbi0ke25hbWV9ICR7Y2xhc3NOYW1lIHx8ICcnfWB9IGFyaWEtaGlkZGVuPjwvc3Bhbj5cbiAgICB7dGl0bGUgPyAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXN1YWxseWhpZGRlblwiPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L3NwYW4+XG4gICAgKSA6IG51bGx9XG4gIDwvc3Bhbj5cbik7XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5JY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBudWxsLFxuICB0aXRsZTogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvSWNvbi9JY29uLmpzIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogRGlzcGxheXMgdGhlIHB1YmxpY2F0aW9uIHN0YXR1cyBvZiBhIHBhZ2UgaW4gYSBwaWxsLlxuICovXG5jb25zdCBQdWJsaWNhdGlvblN0YXR1cyA9ICh7IHN0YXR1cyB9KSA9PiAoXG4gIDxzcGFuIGNsYXNzTmFtZT17YG8tcGlsbCBjLXN0YXR1cyR7c3RhdHVzLmxpdmUgPyAnIGMtc3RhdHVzLS1saXZlJyA6ICcnfWB9PlxuICAgIHtzdGF0dXMuc3RhdHVzfVxuICA8L3NwYW4+XG4pO1xuXG5QdWJsaWNhdGlvblN0YXR1cy5wcm9wVHlwZXMgPSB7XG4gIHN0YXR1czogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBsaXZlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHN0YXR1czogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9KS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHVibGljYXRpb25TdGF0dXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUHVibGljYXRpb25TdGF0dXMvUHVibGljYXRpb25TdGF0dXMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU1RSSU5HUyB9IGZyb20gJy4uLy4uL2NvbmZpZy93YWd0YWlsQ29uZmlnJztcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSWNvbi9JY29uJztcblxuLyoqXG4gKiBBIGxvYWRpbmcgaW5kaWNhdG9yIHdpdGggYSB0ZXh0IGxhYmVsIG5leHQgdG8gaXQuXG4gKi9cbmNvbnN0IExvYWRpbmdTcGlubmVyID0gKCkgPT4gKFxuICA8c3Bhbj5cbiAgICA8SWNvbiBuYW1lPVwic3Bpbm5lclwiIGNsYXNzTmFtZT1cImMtc3Bpbm5lclwiIC8+e2AgJHtTVFJJTkdTLkxPQURJTkd9YH1cbiAgPC9zcGFuPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1NwaW5uZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvTG9hZGluZ1NwaW5uZXIvTG9hZGluZ1NwaW5uZXIuanMiLCJleHBvcnQgY29uc3QgQURNSU5fQVBJID0gZ2xvYmFsLndhZ3RhaWxDb25maWcuQURNSU5fQVBJO1xuZXhwb3J0IGNvbnN0IFNUUklOR1MgPSBnbG9iYWwud2FndGFpbENvbmZpZy5TVFJJTkdTO1xuZXhwb3J0IGNvbnN0IEFETUlOX1VSTFMgPSBnbG9iYWwud2FndGFpbENvbmZpZy5BRE1JTl9VUkxTO1xuXG4vLyBNYXhpbXVtIG51bWJlciBvZiBwYWdlcyB0byBsb2FkIGluc2lkZSB0aGUgZXhwbG9yZXIgbWVudS5cbmV4cG9ydCBjb25zdCBNQVhfRVhQTE9SRVJfUEFHRVMgPSAyMDA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbmZpZy93YWd0YWlsQ29uZmlnLmpzIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uR3JvdXAnO1xuXG5jb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OID0gMjEwO1xuXG4vLyBUaGUgYXZhaWxhYmxlIHRyYW5zaXRpb25zLiBNdXN0IG1hdGNoIHRoZSBjbGFzcyBuYW1lcyBpbiBDU1MuXG5leHBvcnQgY29uc3QgUFVTSCA9ICdwdXNoJztcbmV4cG9ydCBjb25zdCBQT1AgPSAncG9wJztcblxuLyoqXG4gKiBXcmFwcGVyIGFycm91bmQgcmVhY3QtdHJhbnNpdGlvbi1ncm91cCB3aXRoIGRlZmF1bHQgdmFsdWVzLlxuICovXG5jb25zdCBUcmFuc2l0aW9uID0gKHtcbiAgbmFtZSxcbiAgY29tcG9uZW50LFxuICBjbGFzc05hbWUsXG4gIGR1cmF0aW9uLFxuICBjaGlsZHJlbixcbn0pID0+IChcbiAgPENTU1RyYW5zaXRpb25Hcm91cFxuICAgIGNvbXBvbmVudD17Y29tcG9uZW50fVxuICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9e2R1cmF0aW9ufVxuICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9e2R1cmF0aW9ufVxuICAgIHRyYW5zaXRpb25OYW1lPXtgYy10cmFuc2l0aW9uLSR7bmFtZX1gfVxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L0NTU1RyYW5zaXRpb25Hcm91cD5cbik7XG5cblRyYW5zaXRpb24ucHJvcFR5cGVzID0ge1xuICBuYW1lOiBQcm9wVHlwZXMub25lT2YoW1BVU0gsIFBPUF0pLmlzUmVxdWlyZWQsXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ2RpdicsXG4gIGNoaWxkcmVuOiBudWxsLFxuICBjbGFzc05hbWU6IG51bGwsXG4gIGR1cmF0aW9uOiBUUkFOU0lUSU9OX0RVUkFUSU9OLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNpdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9UcmFuc2l0aW9uL1RyYW5zaXRpb24uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG4vLyBpbXBvcnQgeyBwZXJmTWlkZGxld2FyZSB9IGZyb20gJy4uLy4uL3V0aWxzL3BlcmZvcm1hbmNlJztcbmltcG9ydCBFeHBsb3JlciBmcm9tICcuL0V4cGxvcmVyJztcbmltcG9ydCBFeHBsb3JlclRvZ2dsZSBmcm9tICcuL0V4cGxvcmVyVG9nZ2xlJztcbmltcG9ydCBleHBsb3JlciBmcm9tICcuL3JlZHVjZXJzL2V4cGxvcmVyJztcbmltcG9ydCBub2RlcyBmcm9tICcuL3JlZHVjZXJzL25vZGVzJztcblxuLyoqXG4gKiBJbml0aWFsaXNlcyB0aGUgZXhwbG9yZXIgY29tcG9uZW50IG9uIHRoZSBnaXZlbiBub2Rlcy5cbiAqL1xuY29uc3QgaW5pdEV4cGxvcmVyID0gKGV4cGxvcmVyTm9kZSwgdG9nZ2xlTm9kZSkgPT4ge1xuICBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgZXhwbG9yZXIsXG4gICAgbm9kZXMsXG4gIH0pO1xuXG4gIGNvbnN0IG1pZGRsZXdhcmUgPSBbXG4gICAgdGh1bmtNaWRkbGV3YXJlLFxuICBdO1xuXG4gIC8vIFVuY29tbWVudCB0aGlzIHRvIHVzZSBwZXJmb3JtYW5jZSBtZWFzdXJlbWVudHMuXG4gIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIC8vICAgbWlkZGxld2FyZS5wdXNoKHBlcmZNaWRkbGV3YXJlKTtcbiAgLy8gfVxuXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIHt9LCBjb21wb3NlKFxuICAgIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSxcbiAgICAvLyBFeHBvc2Ugc3RvcmUgdG8gUmVkdXggRGV2VG9vbHMgZXh0ZW5zaW9uLlxuICAgIHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbiA/IHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbigpIDogZnVuYyA9PiBmdW5jXG4gICkpO1xuXG4gIGNvbnN0IHN0YXJ0UGFnZSA9IHBhcnNlSW50KHRvZ2dsZU5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWV4cGxvcmVyLXN0YXJ0LXBhZ2UnKSwgMTApO1xuXG4gIFJlYWN0RE9NLnJlbmRlcigoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8RXhwbG9yZXJUb2dnbGUgc3RhcnRQYWdlPXtzdGFydFBhZ2V9Pnt0b2dnbGVOb2RlLnRleHRDb250ZW50fTwvRXhwbG9yZXJUb2dnbGU+XG4gICAgPC9Qcm92aWRlcj5cbiAgKSwgdG9nZ2xlTm9kZS5wYXJlbnROb2RlKTtcblxuICBSZWFjdERPTS5yZW5kZXIoKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPEV4cGxvcmVyIC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKSwgZXhwbG9yZXJOb2RlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxvcmVyO1xuXG5leHBvcnQge1xuICBFeHBsb3JlclRvZ2dsZSxcbiAgaW5pdEV4cGxvcmVyLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9FeHBsb3Jlci9pbmRleC5qcyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuXG5pbXBvcnQgRXhwbG9yZXJQYW5lbCBmcm9tICcuL0V4cGxvcmVyUGFuZWwnO1xuXG5jb25zdCBFeHBsb3JlciA9ICh7XG4gIGlzVmlzaWJsZSxcbiAgbm9kZXMsXG4gIHBhdGgsXG4gIHB1c2hQYWdlLFxuICBwb3BQYWdlLFxuICBvbkNsb3NlLFxufSkgPT4ge1xuICBjb25zdCBwYWdlID0gbm9kZXNbcGF0aFtwYXRoLmxlbmd0aCAtIDFdXTtcblxuICByZXR1cm4gaXNWaXNpYmxlID8gKFxuICAgIDxFeHBsb3JlclBhbmVsXG4gICAgICBwYXRoPXtwYXRofVxuICAgICAgcGFnZT17cGFnZX1cbiAgICAgIG5vZGVzPXtub2Rlc31cbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICBwb3BQYWdlPXtwb3BQYWdlfVxuICAgICAgcHVzaFBhZ2U9e3B1c2hQYWdlfVxuICAgIC8+XG4gICkgOiBudWxsO1xufTtcblxuRXhwbG9yZXIucHJvcFR5cGVzID0ge1xuICBpc1Zpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHBhdGg6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBub2RlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIHB1c2hQYWdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwb3BQYWdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBpc1Zpc2libGU6IHN0YXRlLmV4cGxvcmVyLmlzVmlzaWJsZSxcbiAgcGF0aDogc3RhdGUuZXhwbG9yZXIucGF0aCxcbiAgbm9kZXM6IHN0YXRlLm5vZGVzLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgcHVzaFBhZ2U6IChpZCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5wdXNoUGFnZShpZCkpLFxuICBwb3BQYWdlOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLnBvcFBhZ2UoKSksXG4gIG9uQ2xvc2U6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMuY2xvc2VFeHBsb3JlcigpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShFeHBsb3Jlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvRXhwbG9yZXIvRXhwbG9yZXIuanMiLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcblxuaW1wb3J0ICogYXMgYWRtaW4gZnJvbSAnLi4vLi4vYXBpL2FkbWluJztcbmltcG9ydCB7IE1BWF9FWFBMT1JFUl9QQUdFUyB9IGZyb20gJy4uLy4uL2NvbmZpZy93YWd0YWlsQ29uZmlnJztcblxuY29uc3QgZ2V0UGFnZVN0YXJ0ID0gY3JlYXRlQWN0aW9uKCdHRVRfUEFHRV9TVEFSVCcpO1xuY29uc3QgZ2V0UGFnZVN1Y2Nlc3MgPSBjcmVhdGVBY3Rpb24oJ0dFVF9QQUdFX1NVQ0NFU1MnLCAoaWQsIGRhdGEpID0+ICh7IGlkLCBkYXRhIH0pKTtcbmNvbnN0IGdldFBhZ2VGYWlsdXJlID0gY3JlYXRlQWN0aW9uKCdHRVRfUEFHRV9GQUlMVVJFJywgKGlkLCBlcnJvcikgPT4gKHsgaWQsIGVycm9yIH0pKTtcblxuLyoqXG4gKiBHZXRzIGEgcGFnZSBmcm9tIHRoZSBBUEkuXG4gKi9cbmZ1bmN0aW9uIGdldFBhZ2UoaWQpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGdldFBhZ2VTdGFydChpZCkpO1xuXG4gICAgcmV0dXJuIGFkbWluLmdldFBhZ2UoaWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGRpc3BhdGNoKGdldFBhZ2VTdWNjZXNzKGlkLCBkYXRhKSk7XG4gICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICBkaXNwYXRjaChnZXRQYWdlRmFpbHVyZShpZCwgZXJyb3IpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuY29uc3QgZ2V0Q2hpbGRyZW5TdGFydCA9IGNyZWF0ZUFjdGlvbignR0VUX0NISUxEUkVOX1NUQVJUJywgaWQgPT4gKHsgaWQgfSkpO1xuY29uc3QgZ2V0Q2hpbGRyZW5TdWNjZXNzID0gY3JlYXRlQWN0aW9uKCdHRVRfQ0hJTERSRU5fU1VDQ0VTUycsIChpZCwgaXRlbXMsIG1ldGEpID0+ICh7IGlkLCBpdGVtcywgbWV0YSB9KSk7XG5jb25zdCBnZXRDaGlsZHJlbkZhaWx1cmUgPSBjcmVhdGVBY3Rpb24oJ0dFVF9DSElMRFJFTl9GQUlMVVJFJywgKGlkLCBlcnJvcikgPT4gKHsgaWQsIGVycm9yIH0pKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBjaGlsZHJlbiBvZiBhIG5vZGUgZnJvbSB0aGUgQVBJLlxuICovXG5mdW5jdGlvbiBnZXRDaGlsZHJlbihpZCwgb2Zmc2V0ID0gMCkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZ2V0Q2hpbGRyZW5TdGFydChpZCkpO1xuXG4gICAgcmV0dXJuIGFkbWluLmdldFBhZ2VDaGlsZHJlbihpZCwge1xuICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgfSkudGhlbigoeyBpdGVtcywgbWV0YSB9KSA9PiB7XG4gICAgICBjb25zdCBuYlBhZ2VzID0gb2Zmc2V0ICsgaXRlbXMubGVuZ3RoO1xuICAgICAgZGlzcGF0Y2goZ2V0Q2hpbGRyZW5TdWNjZXNzKGlkLCBpdGVtcywgbWV0YSkpO1xuXG4gICAgICAvLyBMb2FkIG1vcmUgcGFnZXMgaWYgbmVjZXNzYXJ5LiBPbmx5IG9uZSByZXF1ZXN0IGlzIGNyZWF0ZWQgZXZlbiB0aG91Z2hcbiAgICAgIC8vIG1vcmUgbWlnaHQgYmUgbmVlZGVkLCB0aHVzIG5hdHVyYWxseSB0aHJvdHRsaW5nIHRoZSBsb2FkaW5nLlxuICAgICAgaWYgKG5iUGFnZXMgPCBtZXRhLnRvdGFsX2NvdW50ICYmIG5iUGFnZXMgPCBNQVhfRVhQTE9SRVJfUEFHRVMpIHtcbiAgICAgICAgZGlzcGF0Y2goZ2V0Q2hpbGRyZW4oaWQsIG5iUGFnZXMpKTtcbiAgICAgIH1cbiAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgIGRpc3BhdGNoKGdldENoaWxkcmVuRmFpbHVyZShpZCwgZXJyb3IpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuY29uc3Qgb3BlbkV4cGxvcmVyID0gY3JlYXRlQWN0aW9uKCdPUEVOX0VYUExPUkVSJywgaWQgPT4gKHsgaWQgfSkpO1xuZXhwb3J0IGNvbnN0IGNsb3NlRXhwbG9yZXIgPSBjcmVhdGVBY3Rpb24oJ0NMT1NFX0VYUExPUkVSJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVFeHBsb3JlcihpZCkge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgZXhwbG9yZXIsIG5vZGVzIH0gPSBnZXRTdGF0ZSgpO1xuXG4gICAgaWYgKGV4cGxvcmVyLmlzVmlzaWJsZSkge1xuICAgICAgZGlzcGF0Y2goY2xvc2VFeHBsb3JlcigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGFnZSA9IG5vZGVzW2lkXTtcblxuICAgICAgZGlzcGF0Y2gob3BlbkV4cGxvcmVyKGlkKSk7XG5cbiAgICAgIGlmICghcGFnZSkge1xuICAgICAgICBkaXNwYXRjaChnZXRDaGlsZHJlbihpZCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSBuZWVkIHRvIGdldCB0aGUgdGl0bGUgb2YgdGhlIHN0YXJ0aW5nIHBhZ2UsIG9ubHkgaWYgaXQgaXMgbm90IHRoZSBzaXRlJ3Mgcm9vdC5cbiAgICAgIGNvbnN0IGlzTm90Um9vdCA9IGlkICE9PSAxO1xuICAgICAgaWYgKGlzTm90Um9vdCkge1xuICAgICAgICBkaXNwYXRjaChnZXRQYWdlKGlkKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgcG9wUGFnZSA9IGNyZWF0ZUFjdGlvbignUE9QX1BBR0UnKTtcbmNvbnN0IHB1c2hQYWdlUHJpdmF0ZSA9IGNyZWF0ZUFjdGlvbignUFVTSF9QQUdFJywgaWQgPT4gKHsgaWQgfSkpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHVzaFBhZ2UoaWQpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBjb25zdCB7IG5vZGVzIH0gPSBnZXRTdGF0ZSgpO1xuICAgIGNvbnN0IHBhZ2UgPSBub2Rlc1tpZF07XG5cbiAgICBkaXNwYXRjaChwdXNoUGFnZVByaXZhdGUoaWQpKTtcblxuICAgIGlmIChwYWdlICYmICFwYWdlLmlzRmV0Y2hpbmcgJiYgIXBhZ2UuY2hpbGRyZW4uY291bnQgPiAwKSB7XG4gICAgICBkaXNwYXRjaChnZXRDaGlsZHJlbihpZCkpO1xuICAgIH1cbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9FeHBsb3Jlci9hY3Rpb25zLmpzIiwiaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi4vYXBpL2NsaWVudCc7XG5cbmltcG9ydCB7IEFETUlOX0FQSSB9IGZyb20gJy4uL2NvbmZpZy93YWd0YWlsQ29uZmlnJztcblxuXG5leHBvcnQgY29uc3QgZ2V0UGFnZSA9IChpZCkgPT4ge1xuICBjb25zdCB1cmwgPSBgJHtBRE1JTl9BUEkuUEFHRVN9JHtpZH0vYDtcblxuICByZXR1cm4gZ2V0KHVybCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZUNoaWxkcmVuID0gKGlkLCBvcHRpb25zID0ge30pID0+IHtcbiAgbGV0IHVybCA9IGAke0FETUlOX0FQSS5QQUdFU30/Y2hpbGRfb2Y9JHtpZH1gO1xuXG4gIGlmIChvcHRpb25zLmZpZWxkcykge1xuICAgIHVybCArPSBgJmZpZWxkcz0ke2dsb2JhbC5lbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5maWVsZHMuam9pbignLCcpKX1gO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMub25seVdpdGhDaGlsZHJlbikge1xuICAgIHVybCArPSAnJmhhc19jaGlsZHJlbj0xJztcbiAgfVxuXG4gIGlmIChvcHRpb25zLm9mZnNldCkge1xuICAgIHVybCArPSBgJm9mZnNldD0ke29wdGlvbnMub2Zmc2V0fWA7XG4gIH1cblxuICB1cmwgKz0gQURNSU5fQVBJLkVYVFJBX0NISUxEUkVOX1BBUkFNRVRFUlM7XG5cbiAgcmV0dXJuIGdldCh1cmwpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvYXBpL2FkbWluLmpzIiwiY29uc3QgZmV0Y2ggPSBnbG9iYWwuZmV0Y2g7XG5jb25zdCBIZWFkZXJzID0gZ2xvYmFsLkhlYWRlcnM7XG5cbmNvbnN0IFJFUVVFU1RfVElNRU9VVCA9IDE1MDAwO1xuXG5jb25zdCBjaGVja1N0YXR1cyA9IChyZXNwb25zZSkgPT4gIHtcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG5cbiAgdGhyb3cgZXJyb3I7XG59O1xuXG5jb25zdCBwYXJzZUpTT04gPSByZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCk7XG5cbi8vIFJlc3BvbnNlIHRpbWVvdXQgY2FuY2VsbGluZyB0aGUgcHJvbWlzZSAobm90IHRoZSByZXF1ZXN0KS5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoL2lzc3Vlcy8xNzUjaXNzdWVjb21tZW50LTIxNjc5MTMzMy5cbmNvbnN0IHRpbWVvdXQgPSAobXMsIHByb21pc2UpID0+IHtcbiAgY29uc3QgcmFjZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1Jlc3BvbnNlIHRpbWVvdXQnKSk7XG4gICAgfSwgbXMpO1xuXG4gICAgcHJvbWlzZS50aGVuKChyZXMpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgcmVzb2x2ZShyZXMpO1xuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiByYWNlO1xufTtcblxuLyoqXG4gKiBXcmFwcGVyIGFyb3VuZCBmZXRjaCB3aXRoIHNhbmUgZGVmYXVsdHMgZm9yIGJlaGF2aW9yIGluIHRoZSBmYWNlIG9mXG4gKiBlcnJvcnMuXG4gKi9cbmNvbnN0IHJlcXVlc3QgPSAobWV0aG9kLCB1cmwpID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KSxcbiAgICBtZXRob2Q6IG1ldGhvZFxuICB9O1xuXG4gIHJldHVybiB0aW1lb3V0KFJFUVVFU1RfVElNRU9VVCwgZmV0Y2godXJsLCBvcHRpb25zKSlcbiAgICAudGhlbihjaGVja1N0YXR1cylcbiAgICAudGhlbihwYXJzZUpTT04pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldCA9IHVybCA9PiByZXF1ZXN0KCdHRVQnLCB1cmwpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9hcGkvY2xpZW50LmpzIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9jdXNUcmFwIGZyb20gJ2ZvY3VzLXRyYXAtcmVhY3QnO1xuXG5pbXBvcnQgeyBTVFJJTkdTLCBNQVhfRVhQTE9SRVJfUEFHRVMgfSBmcm9tICcuLi8uLi9jb25maWcvd2FndGFpbENvbmZpZyc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSAnLi4vTG9hZGluZ1NwaW5uZXIvTG9hZGluZ1NwaW5uZXInO1xuaW1wb3J0IFRyYW5zaXRpb24sIHsgUFVTSCwgUE9QIH0gZnJvbSAnLi4vVHJhbnNpdGlvbi9UcmFuc2l0aW9uJztcbmltcG9ydCBFeHBsb3JlckhlYWRlciBmcm9tICcuL0V4cGxvcmVySGVhZGVyJztcbmltcG9ydCBFeHBsb3Jlckl0ZW0gZnJvbSAnLi9FeHBsb3Jlckl0ZW0nO1xuaW1wb3J0IFBhZ2VDb3VudCBmcm9tICcuL1BhZ2VDb3VudCc7XG5cbi8qKlxuICogVGhlIG1haW4gcGFuZWwgb2YgdGhlIHBhZ2UgZXhwbG9yZXIgbWVudSwgd2l0aCBoZWFkaW5nLFxuICogbWVudSBpdGVtcywgYW5kIHNwZWNpYWwgc3RhdGVzLlxuICovXG5jbGFzcyBFeHBsb3JlclBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdHJhbnNpdGlvbjogUFVTSCxcbiAgICAgIHBhdXNlZDogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMub25JdGVtQ2xpY2sgPSB0aGlzLm9uSXRlbUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkhlYWRlckNsaWNrID0gdGhpcy5vbkhlYWRlckNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbGlja091dHNpZGUgPSB0aGlzLmNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgIGNvbnN0IHsgcGF0aCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpc1B1c2ggPSBuZXdQcm9wcy5wYXRoLmxlbmd0aCA+IHBhdGgubGVuZ3RoO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0cmFuc2l0aW9uOiBpc1B1c2ggPyBQVVNIIDogUE9QLFxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZXhwbG9yZXItbWVudS1pdGVtXScpLmNsYXNzTGlzdC5hZGQoJ3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdleHBsb3Jlci1vcGVuJyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5jbGlja091dHNpZGUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5jbGlja091dHNpZGUpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZXhwbG9yZXItbWVudS1pdGVtXScpLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Ym1lbnUtYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdleHBsb3Jlci1vcGVuJyk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5jbGlja091dHNpZGUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5jbGlja091dHNpZGUpO1xuICB9XG5cbiAgY2xpY2tPdXRzaWRlKGUpIHtcbiAgICBjb25zdCB7IG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZXhwbG9yZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1leHBsb3Jlci1tZW51XScpO1xuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWV4cGxvcmVyLW1lbnUtaXRlbV0nKTtcblxuICAgIGNvbnN0IGlzSW5zaWRlID0gZXhwbG9yZXIuY29udGFpbnMoZS50YXJnZXQpIHx8IHRvZ2dsZS5jb250YWlucyhlLnRhcmdldCk7XG4gICAgaWYgKCFpc0luc2lkZSkge1xuICAgICAgb25DbG9zZSgpO1xuICAgIH1cblxuICAgIGlmICh0b2dnbGUuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25JdGVtQ2xpY2soaWQsIGUpIHtcbiAgICBjb25zdCB7IHB1c2hQYWdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBwdXNoUGFnZShpZCk7XG4gIH1cblxuICBvbkhlYWRlckNsaWNrKGUpIHtcbiAgICBjb25zdCB7IHBhdGgsIHBvcFBhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaGFzQmFjayA9IHBhdGgubGVuZ3RoID4gMTtcblxuICAgIGlmIChoYXNCYWNrKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBwb3BQYWdlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4oKSB7XG4gICAgY29uc3QgeyBwYWdlLCBub2RlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgY2hpbGRyZW47XG5cbiAgICBpZiAoIXBhZ2UuaXNGZXRjaGluZyAmJiAhcGFnZS5jaGlsZHJlbi5pdGVtcykge1xuICAgICAgY2hpbGRyZW4gPSAoXG4gICAgICAgIDxkaXYga2V5PVwiZW1wdHlcIiBjbGFzc05hbWU9XCJjLWV4cGxvcmVyX19wbGFjZWhvbGRlclwiPlxuICAgICAgICAgIHtTVFJJTkdTLk5PX1JFU1VMVFN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRyZW4gPSAoXG4gICAgICAgIDxkaXYga2V5PVwiY2hpbGRyZW5cIj5cbiAgICAgICAgICB7cGFnZS5jaGlsZHJlbi5pdGVtcy5tYXAoKGlkKSA9PiAoXG4gICAgICAgICAgICA8RXhwbG9yZXJJdGVtXG4gICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgIGl0ZW09e25vZGVzW2lkXX1cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkl0ZW1DbGljay5iaW5kKG51bGwsIGlkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLWV4cGxvcmVyX19kcmF3ZXJcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7cGFnZS5pc0ZldGNoaW5nID8gKFxuICAgICAgICAgIDxkaXYga2V5PVwiZmV0Y2hpbmdcIiBjbGFzc05hbWU9XCJjLWV4cGxvcmVyX19wbGFjZWhvbGRlclwiPlxuICAgICAgICAgICAgPExvYWRpbmdTcGlubmVyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7cGFnZS5pc0Vycm9yID8gKFxuICAgICAgICAgIDxkaXYga2V5PVwiZXJyb3JcIiBjbGFzc05hbWU9XCJjLWV4cGxvcmVyX19wbGFjZWhvbGRlclwiPlxuICAgICAgICAgICAge1NUUklOR1MuU0VSVkVSX0VSUk9SfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYWdlLCBvbkNsb3NlLCBwYXRoIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdHJhbnNpdGlvbiwgcGF1c2VkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb2N1c1RyYXBcbiAgICAgICAgdGFnPVwibmF2XCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZXhwbG9yZXJcIlxuICAgICAgICBwYXVzZWQ9e3BhdXNlZCB8fCAhcGFnZSB8fCBwYWdlLmlzRmV0Y2hpbmd9XG4gICAgICAgIGZvY3VzVHJhcE9wdGlvbnM9e3tcbiAgICAgICAgICBpbml0aWFsRm9jdXM6ICcuYy1leHBsb3Jlcl9fY2xvc2UnLFxuICAgICAgICAgIG9uRGVhY3RpdmF0ZTogb25DbG9zZSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJjLWV4cGxvcmVyX19jbG9zZSB1LWhpZGRlblwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgIHtTVFJJTkdTLkNMT1NFX0VYUExPUkVSfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPFRyYW5zaXRpb24gbmFtZT17dHJhbnNpdGlvbn0gY2xhc3NOYW1lPVwiYy1leHBsb3JlclwiPlxuICAgICAgICAgIDxkaXYga2V5PXtwYXRoLmxlbmd0aH0gY2xhc3NOYW1lPVwiYy10cmFuc2l0aW9uLWdyb3VwXCI+XG4gICAgICAgICAgICA8RXhwbG9yZXJIZWFkZXJcbiAgICAgICAgICAgICAgZGVwdGg9e3BhdGgubGVuZ3RofVxuICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uSGVhZGVyQ2xpY2t9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJDaGlsZHJlbigpfVxuXG4gICAgICAgICAgICB7cGFnZS5pc0Vycm9yIHx8IHBhZ2UuY2hpbGRyZW4uaXRlbXMgJiYgcGFnZS5jaGlsZHJlbi5jb3VudCA+IE1BWF9FWFBMT1JFUl9QQUdFUyA/IChcbiAgICAgICAgICAgICAgPFBhZ2VDb3VudCBwYWdlPXtwYWdlfSAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgIDwvRm9jdXNUcmFwPlxuICAgICk7XG4gIH1cbn1cblxuRXhwbG9yZXJQYW5lbC5wcm9wVHlwZXMgPSB7XG4gIG5vZGVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHBhdGg6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBwYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlzRmV0Y2hpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LFxuICAgIH0pLFxuICB9KS5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwb3BQYWdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwdXNoUGFnZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxvcmVyUGFuZWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvRXhwbG9yZXIvRXhwbG9yZXJQYW5lbC5qcyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQURNSU5fVVJMUywgU1RSSU5HUyB9IGZyb20gJy4uLy4uL2NvbmZpZy93YWd0YWlsQ29uZmlnJztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JY29uL0ljb24nO1xuXG4vKipcbiAqIFRoZSBiYXIgYXQgdGhlIHRvcCBvZiB0aGUgZXhwbG9yZXIsIGRpc3BsYXlpbmcgdGhlIGN1cnJlbnQgbGV2ZWxcbiAqIGFuZCBhbGxvd2luZyBhY2Nlc3MgYmFjayB0byB0aGUgcGFyZW50IGxldmVsLlxuICovXG5jb25zdCBFeHBsb3JlckhlYWRlciA9ICh7IHBhZ2UsIGRlcHRoLCBvbkNsaWNrIH0pID0+IHtcbiAgY29uc3QgaXNSb290ID0gZGVwdGggPT09IDE7XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uXG4gICAgICBocmVmPXtwYWdlLmlkID8gYCR7QURNSU5fVVJMUy5QQUdFU30ke3BhZ2UuaWR9L2AgOiBBRE1JTl9VUkxTLlBBR0VTfVxuICAgICAgY2xhc3NOYW1lPVwiYy1leHBsb3Jlcl9faGVhZGVyXCJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLWV4cGxvcmVyX19oZWFkZXJfX2lubmVyXCI+XG4gICAgICAgIDxJY29uIG5hbWU9e2lzUm9vdCA/ICdob21lJyA6ICdhcnJvdy1sZWZ0J30gLz5cbiAgICAgICAgPHNwYW4+e3BhZ2UudGl0bGUgfHwgU1RSSU5HUy5QQUdFU308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L0J1dHRvbj5cbiAgKTtcbn07XG5cbkV4cGxvcmVySGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgcGFnZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9KS5pc1JlcXVpcmVkLFxuICBkZXB0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwbG9yZXJIZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvRXhwbG9yZXIvRXhwbG9yZXJIZWFkZXIuanMiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQURNSU5fVVJMUywgU1RSSU5HUyB9IGZyb20gJy4uLy4uL2NvbmZpZy93YWd0YWlsQ29uZmlnJztcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSWNvbi9JY29uJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJztcbmltcG9ydCBQdWJsaWNhdGlvblN0YXR1cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1B1YmxpY2F0aW9uU3RhdHVzL1B1YmxpY2F0aW9uU3RhdHVzJztcblxuLy8gSG9pc3QgaWNvbnMgaW4gdGhlIGV4cGxvcmVyIGl0ZW0sIGFzIGl0IGlzIHJlLXJlbmRlcmVkIG1hbnkgdGltZXMuXG5jb25zdCBjaGlsZHJlbkljb24gPSAoXG4gIDxJY29uIG5hbWU9XCJmb2xkZXItaW52ZXJzZVwiIC8+XG4pO1xuXG5jb25zdCBlZGl0SWNvbiA9IChcbiAgPEljb24gbmFtZT1cImVkaXRcIiB0aXRsZT17U1RSSU5HUy5FRElUfSAvPlxuKTtcblxuY29uc3QgbmV4dEljb24gPSAoXG4gIDxJY29uIG5hbWU9XCJhcnJvdy1yaWdodFwiIHRpdGxlPXtTVFJJTkdTLlNFRV9DSElMRFJFTn0gLz5cbik7XG5cbi8qKlxuICogT25lIG1lbnUgaXRlbSBpbiB0aGUgcGFnZSBleHBsb3Jlciwgd2l0aCBkaWZmZXJlbnQgYXZhaWxhYmxlIGFjdGlvbnNcbiAqIGFuZCBpbmZvcm1hdGlvbiBkZXBlbmRpbmcgb24gdGhlIG1ldGFkYXRhIG9mIHRoZSBwYWdlLlxuICovXG5jb25zdCBFeHBsb3Jlckl0ZW0gPSAoeyBpdGVtLCBvbkNsaWNrIH0pID0+IHtcbiAgY29uc3QgeyBpZCwgdGl0bGUsIG1ldGEgfSA9IGl0ZW07XG4gIGNvbnN0IGhhc0NoaWxkcmVuID0gbWV0YS5jaGlsZHJlbi5jb3VudCA+IDA7XG4gIGNvbnN0IGlzUHVibGlzaGVkID0gbWV0YS5zdGF0dXMubGl2ZSAmJiAhbWV0YS5zdGF0dXMuaGFzX3VucHVibGlzaGVkX2NoYW5nZXM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImMtZXhwbG9yZXJfX2l0ZW1cIj5cbiAgICAgIDxCdXR0b24gaHJlZj17YCR7QURNSU5fVVJMUy5QQUdFU30ke2lkfS9gfSBjbGFzc05hbWU9XCJjLWV4cGxvcmVyX19pdGVtX19saW5rXCI+XG4gICAgICAgIHtoYXNDaGlsZHJlbiA/IGNoaWxkcmVuSWNvbiA6IG51bGx9XG5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImMtZXhwbG9yZXJfX2l0ZW1fX3RpdGxlXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2gzPlxuXG4gICAgICAgIHshaXNQdWJsaXNoZWQgPyAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYy1leHBsb3Jlcl9fbWV0YVwiPlxuICAgICAgICAgICAgPFB1YmxpY2F0aW9uU3RhdHVzIHN0YXR1cz17bWV0YS5zdGF0dXN9IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBocmVmPXtgJHtBRE1JTl9VUkxTLlBBR0VTfSR7aWR9L2VkaXQvYH1cbiAgICAgICAgY2xhc3NOYW1lPVwiYy1leHBsb3Jlcl9faXRlbV9fYWN0aW9uIGMtZXhwbG9yZXJfX2l0ZW1fX2FjdGlvbi0tc21hbGxcIlxuICAgICAgPlxuICAgICAgICB7ZWRpdEljb259XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIHtoYXNDaGlsZHJlbiA/IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImMtZXhwbG9yZXJfX2l0ZW1fX2FjdGlvblwiXG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIHtuZXh0SWNvbn1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkV4cGxvcmVySXRlbS5wcm9wVHlwZXMgPSB7XG4gIGl0ZW06IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbWV0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHN0YXR1czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gIH0pLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBsb3Jlckl0ZW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvRXhwbG9yZXIvRXhwbG9yZXJJdGVtLmpzIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEFETUlOX1VSTFMsIFNUUklOR1MgfSBmcm9tICcuLi8uLi9jb25maWcvd2FndGFpbENvbmZpZyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uL0ljb24nO1xuXG5jb25zdCBQYWdlQ291bnQgPSAoeyBwYWdlIH0pID0+IHtcbiAgY29uc3QgY291bnQgPSBwYWdlLmNoaWxkcmVuLmNvdW50O1xuXG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIGhyZWY9e2Ake0FETUlOX1VSTFMuUEFHRVN9JHtwYWdlLmlkfS9gfVxuICAgICAgY2xhc3NOYW1lPVwiYy1leHBsb3Jlcl9fc2VlLW1vcmVcIlxuICAgICAgdGFiSW5kZXg9ezB9XG4gICAgPlxuICAgICAge1NUUklOR1MuU0VFX0FMTH1cbiAgICAgIDxzcGFuPntgICR7Y291bnR9ICR7Y291bnQgPT09IDEgPyBTVFJJTkdTLlBBR0UudG9Mb3dlckNhc2UoKSA6IFNUUklOR1MuUEFHRVMudG9Mb3dlckNhc2UoKX1gfTwvc3Bhbj5cbiAgICAgIDxJY29uIG5hbWU9XCJhcnJvdy1yaWdodFwiIC8+XG4gICAgPC9hPlxuICApO1xufTtcblxuUGFnZUNvdW50LnByb3BUeXBlcyA9IHtcbiAgcGFnZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUNvdW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL0V4cGxvcmVyL1BhZ2VDb3VudC5qcyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbic7XG5cbi8qKlxuICogQSBCdXR0b24gd2hpY2ggdG9nZ2xlcyB0aGUgZXhwbG9yZXIuXG4gKi9cbmNvbnN0IEV4cGxvcmVyVG9nZ2xlID0gKHsgY2hpbGRyZW4sIG9uVG9nZ2xlIH0pID0+IChcbiAgPEJ1dHRvblxuICAgIGljb249e1snZm9sZGVyLW9wZW4taW52ZXJzZScsICdhcnJvdy1yaWdodC1hZnRlciddfVxuICAgIG9uQ2xpY2s9e29uVG9nZ2xlfVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L0J1dHRvbj5cbik7XG5cbkV4cGxvcmVyVG9nZ2xlLnByb3BUeXBlcyA9IHtcbiAgb25Ub2dnbGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKCkgPT4gKHt9KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvblRvZ2dsZTogKHBhZ2UpID0+IGRpc3BhdGNoKGFjdGlvbnMudG9nZ2xlRXhwbG9yZXIocGFnZSkpLFxufSk7XG5cbmNvbnN0IG1lcmdlUHJvcHMgPSAoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpID0+ICh7XG4gIGNoaWxkcmVuOiBvd25Qcm9wcy5jaGlsZHJlbixcbiAgb25Ub2dnbGU6IGRpc3BhdGNoUHJvcHMub25Ub2dnbGUuYmluZChudWxsLCBvd25Qcm9wcy5zdGFydFBhZ2UpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMpKEV4cGxvcmVyVG9nZ2xlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9FeHBsb3Jlci9FeHBsb3JlclRvZ2dsZS5qcyIsImNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcbiAgaXNWaXNpYmxlOiBmYWxzZSxcbiAgcGF0aDogW10sXG59O1xuXG4vKipcbiAqIE92ZXJzZWVzIHRoZSBzdGF0ZSBvZiB0aGUgZXhwbG9yZXIuIERlZmluZXM6XG4gKiAtIFdoZXJlIGluIHRoZSBwYWdlIHRyZWUgdGhlIGV4cGxvcmVyIGlzIGF0LlxuICogLSBXaGV0aGVyIHRoZSBleHBsb3JlciBpcyBvcGVuIG9yIG5vdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhwbG9yZXIocHJldlN0YXRlID0gZGVmYXVsdFN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSAnT1BFTl9FWFBMT1JFUic6XG4gICAgLy8gUHJvdmlkZSBhIHN0YXJ0aW5nIHBhZ2Ugd2hlbiBvcGVuaW5nIHRoZSBleHBsb3Jlci5cbiAgICByZXR1cm4ge1xuICAgICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgICAgcGF0aDogW3BheWxvYWQuaWRdLFxuICAgIH07XG5cbiAgY2FzZSAnQ0xPU0VfRVhQTE9SRVInOlxuICAgIHJldHVybiBkZWZhdWx0U3RhdGU7XG5cbiAgY2FzZSAnUFVTSF9QQUdFJzpcbiAgICByZXR1cm4ge1xuICAgICAgaXNWaXNpYmxlOiBwcmV2U3RhdGUuaXNWaXNpYmxlLFxuICAgICAgcGF0aDogcHJldlN0YXRlLnBhdGguY29uY2F0KFtwYXlsb2FkLmlkXSksXG4gICAgfTtcblxuICBjYXNlICdQT1BfUEFHRSc6XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzVmlzaWJsZTogcHJldlN0YXRlLmlzVmlzaWJsZSxcbiAgICAgIHBhdGg6IHByZXZTdGF0ZS5wYXRoLnNsaWNlKDAsIC0xKSxcbiAgICB9O1xuXG4gIGRlZmF1bHQ6XG4gICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL0V4cGxvcmVyL3JlZHVjZXJzL2V4cGxvcmVyLmpzIiwiY29uc3QgZGVmYXVsdFBhZ2VTdGF0ZSA9IHtcbiAgaXNGZXRjaGluZzogZmFsc2UsXG4gIGlzRXJyb3I6IGZhbHNlLFxuICBjaGlsZHJlbjoge1xuICAgIGl0ZW1zOiBbXSxcbiAgICBjb3VudDogMCxcbiAgfSxcbiAgbWV0YToge1xuICAgIGNoaWxkcmVuOiB7fSxcbiAgfSxcbn07XG5cbi8qKlxuICogQSBzaW5nbGUgcGFnZSBub2RlIGluIHRoZSBleHBsb3Jlci5cbiAqL1xuY29uc3Qgbm9kZSA9IChzdGF0ZSA9IGRlZmF1bHRQYWdlU3RhdGUsIHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICBjYXNlICdPUEVOX0VYUExPUkVSJzpcbiAgICByZXR1cm4gc3RhdGUgfHwgZGVmYXVsdFBhZ2VTdGF0ZTtcblxuICBjYXNlICdHRVRfUEFHRV9TVUNDRVNTJzpcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHBheWxvYWQuZGF0YSwge1xuICAgICAgaXNFcnJvcjogZmFsc2UsXG4gICAgfSk7XG5cbiAgY2FzZSAnR0VUX0NISUxEUkVOX1NUQVJUJzpcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgfSk7XG5cbiAgY2FzZSAnR0VUX0NISUxEUkVOX1NVQ0NFU1MnOlxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICBpc0Vycm9yOiBmYWxzZSxcbiAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5jaGlsZHJlbi5pdGVtcy5zbGljZSgpLmNvbmNhdChwYXlsb2FkLml0ZW1zLm1hcChpdGVtID0+IGl0ZW0uaWQpKSxcbiAgICAgICAgY291bnQ6IHBheWxvYWQubWV0YS50b3RhbF9jb3VudCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgY2FzZSAnR0VUX1BBR0VfRkFJTFVSRSc6XG4gIGNhc2UgJ0dFVF9DSElMRFJFTl9GQUlMVVJFJzpcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgaXNFcnJvcjogdHJ1ZSxcbiAgICB9KTtcblxuICBkZWZhdWx0OlxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgZGVmYXVsdFN0YXRlID0ge307XG5cbi8qKlxuICogQ29udGFpbnMgYWxsIG9mIHRoZSBwYWdlIG5vZGVzIGluIG9uZSBvYmplY3QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vZGVzKHN0YXRlID0gZGVmYXVsdFN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcblxuICBjYXNlICdPUEVOX0VYUExPUkVSJzpcbiAgY2FzZSAnR0VUX1BBR0VfU1VDQ0VTUyc6XG4gIGNhc2UgJ0dFVF9DSElMRFJFTl9TVEFSVCc6XG4gIGNhc2UgJ0dFVF9QQUdFX0ZBSUxVUkUnOlxuICBjYXNlICdHRVRfQ0hJTERSRU5fRkFJTFVSRSc6XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAvLyBEZWxlZ2F0ZSBsb2dpYyB0byBzaW5nbGUtbm9kZSByZWR1Y2VyLlxuICAgICAgW3BheWxvYWQuaWRdOiBub2RlKHN0YXRlW3BheWxvYWQuaWRdLCB7IHR5cGUsIHBheWxvYWQgfSksXG4gICAgfSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNhc2UtZGVjbGFyYXRpb25zXG4gIGNhc2UgJ0dFVF9DSElMRFJFTl9TVUNDRVNTJzpcbiAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICBbcGF5bG9hZC5pZF06IG5vZGUoc3RhdGVbcGF5bG9hZC5pZF0sIHsgdHlwZSwgcGF5bG9hZCB9KSxcbiAgICB9KTtcblxuICAgIHBheWxvYWQuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgbmV3U3RhdGVbaXRlbS5pZF0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UGFnZVN0YXRlLCBpdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdTdGF0ZTtcblxuICBkZWZhdWx0OlxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL0V4cGxvcmVyL3JlZHVjZXJzL25vZGVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==