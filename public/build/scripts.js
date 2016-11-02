var scripts =
webpackJsonp_name_([0],{

/***/ 0:
/*!*************************************!*\
  !*** ./public/frontend-app/main.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _es6Shim = __webpack_require__(/*! ../../~/es6-shim/es6-shim.min */ 1);
	
	Object.keys(_es6Shim).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _es6Shim[key];
	    }
	  });
	});
	
	var _es6Promise = __webpack_require__(/*! ../../~/es6-promise/dist/es6-promise.min */ 3);
	
	Object.keys(_es6Promise).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _es6Promise[key];
	    }
	  });
	});
	
	var _Reflect = __webpack_require__(/*! ../../~/reflect-metadata/Reflect */ 5);
	
	Object.keys(_Reflect).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Reflect[key];
	    }
	  });
	});
	
	var _zone = __webpack_require__(/*! ../../~/zone.js/dist/zone.min */ 6);
	
	Object.keys(_zone).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _zone[key];
	    }
	  });
	});
	
	var _longStackTraceZone = __webpack_require__(/*! ../../~/zone.js/dist/long-stack-trace-zone.min */ 7);
	
	Object.keys(_longStackTraceZone).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _longStackTraceZone[key];
	    }
	  });
	});
	
	var _platformBrowserDynamic = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8);
	
	__webpack_require__(/*! rxjs */ 30);
	
	var _main = __webpack_require__(/*! ./main.module */ 357);
	
	(0, _platformBrowserDynamic.platformBrowserDynamic)().bootstrapModule(_main.MainModule);

/***/ },

/***/ 4:
/*!***********************!*\
  !*** vertx (ignored) ***!
  \***********************/
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 357:
/*!********************************************!*\
  !*** ./public/frontend-app/main.module.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MainModule = undefined;
	
	var _dec, _class;
	
	var _platformBrowser = __webpack_require__(/*! @angular/platform-browser */ 28);
	
	var _forms = __webpack_require__(/*! @angular/forms */ 358);
	
	var _http = __webpack_require__(/*! @angular/http */ 359);
	
	var _router = __webpack_require__(/*! @angular/router */ 360);
	
	var _core = __webpack_require__(/*! @angular/core */ 10);
	
	var _ajax = __webpack_require__(/*! ./helpers/ajax */ 361);
	
	var _media = __webpack_require__(/*! ./services/media.service */ 364);
	
	var _components = __webpack_require__(/*! ./components */ 366);
	
	var _core2 = __webpack_require__(/*! videogular2/core */ 382);
	
	var _controls = __webpack_require__(/*! videogular2/controls */ 444);
	
	var _overlayPlay = __webpack_require__(/*! videogular2/overlay-play */ 458);
	
	var _sidenav = __webpack_require__(/*! @angular2-material/sidenav */ 460);
	
	var _button = __webpack_require__(/*! @angular2-material/button */ 462);
	
	var _card = __webpack_require__(/*! @angular2-material/card */ 463);
	
	var _progressBar = __webpack_require__(/*! @angular2-material/progress-bar */ 464);
	
	var _input = __webpack_require__(/*! @angular2-material/input */ 465);
	
	var _preventHrefDirective = __webpack_require__(/*! ./directives/prevent-href.directive.js */ 466);
	
	var _audioPlayerDirective = __webpack_require__(/*! ./directives/audio-player.directive.js */ 467);
	
	var _ng2FileUpload = __webpack_require__(/*! ng2-file-upload */ 370);
	
	var _pipes = __webpack_require__(/*! ./pipes */ 470);
	
	var _app = __webpack_require__(/*! ./components/app.routes */ 472);
	
	var _user = __webpack_require__(/*! ./services/user.service */ 379);
	
	var _socket = __webpack_require__(/*! ./services/socket.service */ 392);
	
	var _config = __webpack_require__(/*! ../../config */ 473);
	
	var config = _interopRequireWildcard(_config);
	
	var _mediaList = __webpack_require__(/*! ./directives/media-list.directive */ 474);
	
	var _loadMedia = __webpack_require__(/*! ./broadcasters/load-media */ 441);
	
	var _broadcaster = __webpack_require__(/*! ./broadcasters/broadcaster */ 442);
	
	var _playMedia = __webpack_require__(/*! ./broadcasters/play-media */ 443);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainModule = exports.MainModule = (_dec = (0, _core.NgModule)({
	    bootstrap: [_components.AppComponent],
	    declarations: [_components.AppComponent, _components.MediaComponent, _components.SidenavComponent, _mediaList.MediaList,
	    //TodoHeaderComponent,
	    //TodoItemComponent,
	    _pipes.TrimPipe, _audioPlayerDirective.AudioPlayer, _preventHrefDirective.PreventHref],
	    imports: [_platformBrowser.BrowserModule, _core2.VgCore, _controls.VgControlsModule, _ng2FileUpload.FileUploadModule, _sidenav.MdSidenavModule, _button.MdButtonModule, _card.MdCardModule, _progressBar.MdProgressBarModule, _input.MdInputModule, _forms.FormsModule, _http.HttpModule, _router.RouterModule.forRoot(_app.routes, {
	        useHash: true
	    })],
	    providers: [_ajax.Ajax, _media.MediaService, _user.UserService, _socket.SocketService, _broadcaster.Broadcaster, _loadMedia.LoadMedia, _playMedia.PlayMedia, { provide: 'AppConfig', useValue: config.data }]
	}), _dec(_class = function MainModule() {
	    _classCallCheck(this, MainModule);
	}) || _class);

/***/ },

/***/ 361:
/*!*********************************************!*\
  !*** ./public/frontend-app/helpers/ajax.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Ajax = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _http = __webpack_require__(/*! @angular/http */ 359);
	
	var _core = __webpack_require__(/*! @angular/core */ 10);
	
	__webpack_require__(/*! rxjs/add/operator/toPromise */ 329);
	
	var _lodash = __webpack_require__(/*! lodash */ 362);
	
	var _ = _interopRequireWildcard(_lodash);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Ajax = exports.Ajax = function () {
	    function Ajax(http) {
	        _classCallCheck(this, Ajax);
	
	        this.http = http;
	    }
	
	    _createClass(Ajax, [{
	        key: 'get',
	        value: function get(url, params) {
	            var search_params = new _http.URLSearchParams();
	
	            if (params) {
	                _.forEach(params, function (value, name) {
	                    if (_.isNil(value)) return;
	
	                    if (_.isString(value) && !value) return;
	
	                    if (_.isArray(value) && !value.length) return;
	
	                    search_params.set(name, value);
	                });
	            }
	
	            return this.ajax('get', url, {
	                search: search_params
	            });
	        }
	    }, {
	        key: 'post',
	        value: function post(url, params) {
	            return this.ajax('post', url, params);
	        }
	    }, {
	        key: 'put',
	        value: function put(url, params) {
	            return this.ajax('put', url, params);
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(url) {
	            return this.ajax('delete', url);
	        }
	    }, {
	        key: 'ajax',
	        value: function ajax(method, url, params) {
	            var options = new _http.RequestOptions();
	            options.method = method;
	
	            if (method == 'post' || method == 'update') {
	                if (_.isObject(params)) params = JSON.stringify(params);
	
	                var headers = new _http.Headers();
	                headers.append('Content-Type', 'application/json');
	
	                options.headers = headers;
	            }
	
	            return this.http[method](url, params, options).toPromise().then(function (response) {
	                return response ? response.json() : null;
	            });
	            //.catch(AppHelper.handlePromiseError);
	        }
	    }]);
	
	    return Ajax;
	}();
	
	Reflect.defineMetadata('design:paramtypes', [_http.Http], Ajax);

/***/ },

/***/ 364:
/*!*******************************************************!*\
  !*** ./public/frontend-app/services/media.service.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MediaService = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp; //import localStorage from 'localStorage';
	
	var _media = __webpack_require__(/*! ../models/media.model */ 365);
	
	var _ajax = __webpack_require__(/*! ../helpers/ajax */ 361);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MediaService = exports.MediaService = (_temp = _class = function () {
	    function MediaService(ajax) {
	        _classCallCheck(this, MediaService);
	
	        this.ajax = ajax;
	        //let persistedMedia = JSON.parse(localStorage.getItem('media')) || [];
	    }
	
	    _createClass(MediaService, [{
	        key: 'query',
	        value: function query(params) {
	            return this.ajax.get('' + MediaService.API_URL, params).then(function (response) {
	                return _.map(response, function (object) {
	                    return new _media.MediaModel(object);
	                });
	            });
	        }
	    }]);
	
	    return MediaService;
	}(), _class.API_URL = 'api/media', _temp);
	Reflect.defineMetadata('design:paramtypes', [_ajax.Ajax], MediaService);

/***/ },

/***/ 365:
/*!***************************************************!*\
  !*** ./public/frontend-app/models/media.model.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MediaModel = undefined;
	
	var _lodash = __webpack_require__(/*! lodash */ 362);
	
	var _ = _interopRequireWildcard(_lodash);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MediaModel = exports.MediaModel = function MediaModel(data) {
	    var _this = this;
	
	    _classCallCheck(this, MediaModel);
	
	    this.id = this.id;
	    this.name = this.name;
	    this.src = this.src;
	    this.type = this.type;
	
	    _.forEach(data, function (value, name) {
	        _this[name] = value;
	    });
	};

/***/ },

/***/ 366:
/*!*************************************************!*\
  !*** ./public/frontend-app/components/index.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _app = __webpack_require__(/*! ./app/app.component */ 367);
	
	Object.keys(_app).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _app[key];
	    }
	  });
	});
	
	var _sidenav = __webpack_require__(/*! ./sidenav/sidenav.component */ 369);
	
	Object.keys(_sidenav).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _sidenav[key];
	    }
	  });
	});
	
	var _media = __webpack_require__(/*! ./media/media.component */ 381);
	
	Object.keys(_media).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _media[key];
	    }
	  });
	});

/***/ },

/***/ 367:
/*!*************************************************************!*\
  !*** ./public/frontend-app/components/app/app.component.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AppComponent = undefined;
	
	var _dec, _class;
	
	var _core = __webpack_require__(/*! @angular/core */ 10);
	
	var _appTemplate = __webpack_require__(/*! ./app.template.html */ 368);
	
	var _appTemplate2 = _interopRequireDefault(_appTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AppComponent = exports.AppComponent = (_dec = (0, _core.Component)({
	    selector: 'fronted-app',
	    template: _appTemplate2.default
	}), _dec(_class = function AppComponent() {
	    _classCallCheck(this, AppComponent);
	}) || _class);

/***/ },

/***/ 368:
/*!**************************************************************!*\
  !*** ./public/frontend-app/components/app/app.template.html ***!
  \**************************************************************/
/***/ function(module, exports) {

	module.exports = "<main class=\"mdl-layout__content\" style=\"height: 93vh;\">\n    <router-outlet></router-outlet>\n</main>\n<footer class=\"mdl-mini-footer\" style=\"height: 2vh;\">\n    <p>Awesome Media <a href=\"https://github.com/jonybang/Awesome-Media\">source code</a>. You can create your own media service.</p>\n</footer>"

/***/ },

/***/ 369:
/*!*********************************************************************!*\
  !*** ./public/frontend-app/components/sidenav/sidenav.component.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SidenavComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
	
	var _core = __webpack_require__(/*! @angular/core */ 10);
	
	var _router = __webpack_require__(/*! @angular/router */ 360);
	
	var _ng2FileUpload = __webpack_require__(/*! ng2-file-upload */ 370);
	
	var _ajax = __webpack_require__(/*! ../../helpers/ajax */ 361);
	
	var _user = __webpack_require__(/*! ../../models/user.model */ 378);
	
	var _user2 = __webpack_require__(/*! ../../services/user.service */ 379);
	
	var _sidenavTemplate = __webpack_require__(/*! ./sidenav.template.html */ 380);
	
	var _sidenavTemplate2 = _interopRequireDefault(_sidenavTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _initDefineProp(target, property, descriptor, context) {
	    if (!descriptor) return;
	    Object.defineProperty(target, property, {
	        enumerable: descriptor.enumerable,
	        configurable: descriptor.configurable,
	        writable: descriptor.writable,
	        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	    });
	}
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	    var desc = {};
	    Object['ke' + 'ys'](descriptor).forEach(function (key) {
	        desc[key] = descriptor[key];
	    });
	    desc.enumerable = !!desc.enumerable;
	    desc.configurable = !!desc.configurable;
	
	    if ('value' in desc || desc.initializer) {
	        desc.writable = true;
	    }
	
	    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	        return decorator(target, property, desc) || desc;
	    }, desc);
	
	    if (context && desc.initializer !== void 0) {
	        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	        desc.initializer = undefined;
	    }
	
	    if (desc.initializer === void 0) {
	        Object['define' + 'Property'](target, property, desc);
	        desc = null;
	    }
	
	    return desc;
	}
	
	function _initializerWarningHelper(descriptor, context) {
	    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}
	
	var SidenavComponent = exports.SidenavComponent = (_dec = (0, _core.Component)({
	    selector: 'sidenav',
	    template: _sidenavTemplate2.default
	}), _dec2 = (0, _core.Output)(), _dec3 = (0, _core.Output)(), _dec4 = (0, _core.Output)(), _dec5 = (0, _core.Output)(), _dec6 = (0, _core.Output)(), _dec7 = (0, _core.Input)(), _dec8 = (0, _core.Input)(), _dec9 = (0, _core.Input)(), _dec(_class = (_class2 = function () {
	    function SidenavComponent(route, ajax, user_service, app_config) {
	        _classCallCheck(this, SidenavComponent);
	
	        _initDefineProp(this, 'onVkAuth', _descriptor, this);
	
	        _initDefineProp(this, 'onUploadMedia', _descriptor2, this);
	
	        _initDefineProp(this, 'onSyncAudio', _descriptor3, this);
	
	        _initDefineProp(this, 'onSaveNewUser', _descriptor4, this);
	
	        _initDefineProp(this, 'onLogInUser', _descriptor5, this);
	
	        _initDefineProp(this, 'currentUser', _descriptor6, this);
	
	        _initDefineProp(this, 'message', _descriptor7, this);
	
	        _initDefineProp(this, 'allowToCreateFirstUser', _descriptor8, this);
	
	        this.uploader = new _ng2FileUpload.FileUploader({ url: '/api/media-upload' });
	        this.newUser = null;
	        this.logInUser = null;
	
	        this._route = route;
	        this._ajax = ajax;
	        this._user_service = user_service;
	        this._app_config = app_config;
	    }
	
	    _createClass(SidenavComponent, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            var _this = this;
	
	            this._route.params.map(function (params) {
	                return params.status;
	            }).subscribe(function (status) {});
	
	            this.uploader.onCompleteItem = function () {
	                _this.onUploadMedia.next();
	            };
	        }
	    }, {
	        key: 'saveNewUser',
	        value: function saveNewUser() {
	            this.onSaveNewUser.next(this.newUser);
	        }
	    }, {
	        key: 'logIn',
	        value: function logIn() {
	            this.onLogInUser.next(this.logInUser);
	        }
	    }, {
	        key: 'vkAuth',
	        value: function vkAuth() {
	            var _this2 = this;
	
	            var o = this._app_config.vk_api_options;
	
	            var vk_window = window.open('https://oauth.vk.com/authorize?client_id=' + o.app_id + '&display=popup&redirect_uri=' + o.redirect_uri + '&scope=' + o.scope + '&response_type=code&v=5.53', 'VK Auth', 'width=900,height=600');
	
	            vk_window.onunload = function () {
	                _this2.onVkAuth.next();
	                _this2._user_service.getCurrent(function (currentUser) {
	                    _this2.currentUser = currentUser;
	                });
	            };
	        }
	    }, {
	        key: 'syncAudio',
	        value: function syncAudio() {
	            this.onSyncAudio.next();
	        }
	    }]);
	
	    return SidenavComponent;
	}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'onVkAuth', [_dec2], {
	    enumerable: true,
	    initializer: function initializer() {
	        return new _core.EventEmitter();
	    }
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'onUploadMedia', [_dec3], {
	    enumerable: true,
	    initializer: function initializer() {
	        return new _core.EventEmitter();
	    }
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'onSyncAudio', [_dec4], {
	    enumerable: true,
	    initializer: function initializer() {
	        return new _core.EventEmitter();
	    }
	}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'onSaveNewUser', [_dec5], {
	    enumerable: true,
	    initializer: function initializer() {
	        return new _core.EventEmitter();
	    }
	}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'onLogInUser', [_dec6], {
	    enumerable: true,
	    initializer: function initializer() {
	        return new _core.EventEmitter();
	    }
	}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'currentUser', [_dec7], {
	    enumerable: true,
	    initializer: function initializer() {
	        return this.currentUser;
	    }
	}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'message', [_dec8], {
	    enumerable: true,
	    initializer: function initializer() {
	        return this.message;
	    }
	}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'allowToCreateFirstUser', [_dec9], {
	    enumerable: true,
	    initializer: function initializer() {
	        return this.allowToCreateFirstUser;
	    }
	})), _class2)) || _class);
	(0, _core.Inject)('AppConfig')(SidenavComponent, null, 3);
	Reflect.defineMetadata('design:paramtypes', [_router.ActivatedRoute, _ajax.Ajax, _user2.UserService,,], SidenavComponent);

/***/ },

/***/ 378:
/*!**************************************************!*\
  !*** ./public/frontend-app/models/user.model.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.UserModel = undefined;
	
	var _lodash = __webpack_require__(/*! lodash */ 362);
	
	var _ = _interopRequireWildcard(_lodash);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var UserModel = exports.UserModel = function UserModel(data) {
	    var _this = this;
	
	    _classCallCheck(this, UserModel);
	
	    this.login = this.login;
	    this.first_name = this.first_name;
	    this.last_name = this.last_name;
	    this.vk_id = this.vk_id;
	    this.vk = this.vk;
	
	    _.forEach(data, function (value, name) {
	        _this[name] = value;
	    });
	};

/***/ },

/***/ 379:
/*!******************************************************!*\
  !*** ./public/frontend-app/services/user.service.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.UserService = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _ajax = __webpack_require__(/*! ../helpers/ajax */ 361);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var UserService = exports.UserService = (_temp = _class = function () {
	    function UserService(ajax) {
	        _classCallCheck(this, UserService);
	
	        this._ajax = ajax;
	    }
	
	    _createClass(UserService, [{
	        key: 'getCurrent',
	        value: function getCurrent(callback) {
	            var _this = this;
	
	            var promise = void 0;
	            if (this.CurrentUser) {
	                return callback(this.CurrentUser);
	            } else if (this.currentPromise) {
	                promise = this.currentPromise;
	            } else {
	                promise = this._ajax.get('/api/current_user');
	            }
	            promise.then(function (user) {
	                _this.CurrentUser = user;
	                _this.currentPromise = null;
	                return callback(_this.CurrentUser);
	            });
	        }
	    }, {
	        key: 'list',
	        value: function list() {
	            return this._ajax.get('/api/users');
	        }
	    }, {
	        key: 'create',
	        value: function create(newUser) {
	            return this._ajax.post('/api/users', newUser);
	        }
	    }, {
	        key: 'auth',
	        value: function auth(logInUser) {
	            return this._ajax.post('/api/auth', logInUser);
	        }
	    }]);
	
	    return UserService;
	}(), _class.CurrentUser = null, _class.currentPromise = null, _temp);
	Reflect.defineMetadata('design:paramtypes', [_ajax.Ajax], UserService);

/***/ },

/***/ 380:
/*!**********************************************************************!*\
  !*** ./public/frontend-app/components/sidenav/sidenav.template.html ***!
  \**********************************************************************/
/***/ function(module, exports) {

	module.exports = "<h3>Control panel</h3>\n\n<div *ngIf=\"currentUser\">\n\t<h5>{{currentUser.login}}</h5>\n\n\t<h6>You can manual upload audio:</h6>\n\n\t<div>\n\t\t<input ng2FileSelect [uploader]=\"uploader\" multiple type=\"file\">\n\t\t<br><br>\n\t\t<button color=\"primary\" md-raised-button (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">Upload files</button>\n\t\t<br>\n\t\t<md-progress-bar *ngIf=\"uploader.isUploading\" mode=\"indeterminate\"></md-progress-bar>\n\t</div>\n\n\t<h6>Or load your audio from vk:</h6>\n\n\t<button *ngIf=\"currentUser.vk && currentUser.vk.id\" color=\"accent\" md-raised-button (click)=\"syncAudio()\">Sync VK Audio</button>\n\t<button *ngIf=\"!currentUser.vk || !currentUser.vk.id\" md-raised-button (click)=\"vkAuth()\">Bind vk profile</button>\n</div>\n\n<div *ngIf=\"!currentUser\">\n\t<button class=\"margin-bottom\" color=\"primary\" md-raised-button (click)=\"newUser = {}\" *ngIf=\"allowToCreateFirstUser && !newUser\">Manual create first user</button>\n\n\t<md-card *ngIf=\"newUser\" class=\"margin-bottom\">\n\t\t<md-card-subtitle>Manual create first user</md-card-subtitle>\n\t\t<md-card-content>\n\t\t\t<md-input placeholder=\"Login\" [(ngModel)]=\"newUser.login\"></md-input>\n\n\t\t\t<md-input placeholder=\"Password\" type=\"password\" [(ngModel)]=\"newUser.password\"></md-input>\n\t\t</md-card-content>\n\t\t<md-card-actions>\n\t\t\t<button md-raised-button color=\"warn\" (click)=\"newUser = null\">Cancel</button>\n\t\t\t<button md-raised-button color=\"primary\" (click)=\"saveNewUser()\">Save</button>\n\t\t</md-card-actions>\n\t</md-card>\n\t<br>\n\n\t<button class=\"margin-bottom\" color=\"primary\" md-raised-button (click)=\"logInUser = {}\" *ngIf=\"!allowToCreateFirstUser && !logInUser\">Login/password Auth</button>\n\n\t<md-card *ngIf=\"logInUser\" class=\"margin-bottom\">\n\t\t<md-card-subtitle>Login/password Auth</md-card-subtitle>\n\t\t<md-card-content>\n\t\t\t<md-input placeholder=\"Login\" [(ngModel)]=\"logInUser.login\"></md-input>\n\n\t\t\t<md-input placeholder=\"Password\" type=\"password\" [(ngModel)]=\"logInUser.password\"></md-input>\n\t\t</md-card-content>\n\t\t<md-card-actions>\n\t\t\t<button md-raised-button color=\"warn\" (click)=\"logInUser = null\">Cancel</button>\n\t\t\t<button md-raised-button color=\"primary\" (click)=\"logIn()\">Log in</button>\n\t\t</md-card-actions>\n\t</md-card>\n\t<br>\n\n\t<button color=\"primary\" md-raised-button (click)=\"vkAuth()\">VK Auth</button>\n</div>\n\n\n<p>{{message}}</p>"

/***/ },

/***/ 381:
/*!*****************************************************************!*\
  !*** ./public/frontend-app/components/media/media.component.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MediaComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(/*! @angular/core */ 10);
	
	var _router = __webpack_require__(/*! @angular/router */ 360);
	
	var _core2 = __webpack_require__(/*! videogular2/core */ 382);
	
	var _media = __webpack_require__(/*! ../../services/media.service */ 364);
	
	var _user = __webpack_require__(/*! ../../services/user.service */ 379);
	
	var _ajax = __webpack_require__(/*! ../../helpers/ajax */ 361);
	
	var _media2 = __webpack_require__(/*! ../../models/media.model */ 365);
	
	var _user2 = __webpack_require__(/*! ../../models/user.model */ 378);
	
	var _mediaTemplate = __webpack_require__(/*! ./media.template.html */ 391);
	
	var _mediaTemplate2 = _interopRequireDefault(_mediaTemplate);
	
	var _socket = __webpack_require__(/*! ../../services/socket.service */ 392);
	
	var _loadMedia = __webpack_require__(/*! ../../broadcasters/load-media */ 441);
	
	var _playMedia = __webpack_require__(/*! ../../broadcasters/play-media */ 443);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MediaComponent = exports.MediaComponent = (_dec = (0, _core.Component)({
	    selector: 'media',
	    template: _mediaTemplate2.default
	}), _dec(_class = function () {
	    function MediaComponent(media_service, user_service, socket_service, load_media, play_media) {
	        _classCallCheck(this, MediaComponent);
	
	        this.mediaList = this.mediaList;
	        this.currentMedia = this.currentMedia;
	        this.currentUser = this.currentUser;
	        this.sideNavMessage = '';
	
	        this._media_service = media_service;
	        this._user_service = user_service;
	        this._socket_service = socket_service;
	        this._load_media = load_media;
	        this._play_media = play_media;
	
	        this.zone = new _core.NgZone({ enableLongStackTrace: false });
	    }
	
	    _createClass(MediaComponent, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            var _this = this;
	
	            this._user_service.list().then(function (users) {
	                _this.users = users;
	            });
	
	            this._user_service.getCurrent(function (currentUser) {
	                _this.currentUser = currentUser;
	            });
	        }
	    }, {
	        key: 'mediaListLoaded',
	        value: function mediaListLoaded(media_list) {
	            this.mediaList = media_list;
	            this.loaded = true;
	        }
	    }, {
	        key: 'mediaSelected',
	        value: function mediaSelected(media) {
	            this.currentMedia = media;
	            this._play_media.fire();
	        }
	    }, {
	        key: 'nextMedia',
	        value: function nextMedia() {
	            var mediaIndex = this.mediaList.indexOf(this.currentMedia);
	            if (mediaIndex == this.mediaList.length - 1) {
	                mediaIndex = -1;
	            }
	            this.mediaSelected(this.mediaList[++mediaIndex]);
	        }
	    }, {
	        key: 'onVkAuth',
	        value: function onVkAuth() {
	            this._load_media.fire();
	        }
	    }, {
	        key: 'onUploadMedia',
	        value: function onUploadMedia() {
	            this._load_media.fire();
	        }
	    }, {
	        key: 'userError',
	        value: function userError(error) {
	            var _this2 = this;
	
	            this.zone.run(function () {
	                _this2.sideNavMessage = _.has(error, '_body') ? error._body : error;
	            });
	        }
	    }, {
	        key: 'onSaveNewUser',
	        value: function onSaveNewUser(newUser) {
	            var _this3 = this;
	
	            this._user_service.create(newUser).then(function (user) {
	                _this3.currentUser = user;
	            }, this.userError.bind(this));
	        }
	    }, {
	        key: 'onLogInUser',
	        value: function onLogInUser(logInUser) {
	            var _this4 = this;
	
	            this._user_service.auth(logInUser).then(function (user) {
	                _this4.currentUser = user;
	                _this4._load_media.fire();
	            }, this.userError.bind(this));
	        }
	    }, {
	        key: 'onSyncAudio',
	        value: function onSyncAudio() {
	            var _this5 = this;
	
	            var socket = this._socket_service.get("vk_audio_sync", function (response) {
	                if (response.error) {
	                    alert(response.message);
	                } else {
	                    _this5.listLabel = 'Local audio list:';
	                    _this5.mediaList = [];
	                    _this5.mediaListMessage = response.message;
	                    _this5.loaded = false;
	                }
	            });
	
	            socket.on("partial_success", function (response) {
	                if (response.data && response.data.object) {
	                    _this5.mediaList.push(response.data.object);
	                }
	                _this5.mediaListMessage = response.message;
	            });
	
	            socket.on("all_success", function (response) {
	                _this5.sync_success = true;
	                _this5.mediaListMessage = 'All media are synced! Refresh audio list...';
	
	                _this5._load_media.fire();
	            });
	
	            socket.on("disconnect", function (response) {
	                if (!_this5.sync_success) _this5.mediaListMessage = 'Something wrong, refresh page and try again.';
	            });
	        }
	    }]);
	
	    return MediaComponent;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_media.MediaService, _user.UserService, _socket.SocketService, _loadMedia.LoadMedia, _playMedia.PlayMedia], MediaComponent);

/***/ },

/***/ 391:
/*!******************************************************************!*\
  !*** ./public/frontend-app/components/media/media.template.html ***!
  \******************************************************************/
/***/ function(module, exports) {

	module.exports = "<md-sidenav-layout style=\"height: 100%;\">\n\t<md-sidenav opened=\"true\" mode=\"side\" align=\"start\" class=\"padding\">\n\t\t<sidenav\n\t\t\t\t[(currentUser)]=\"currentUser\"\n\t\t\t\t(onSaveNewUser)=\"onSaveNewUser($event)\"\n\t\t\t\t(onLogInUser)=\"onLogInUser($event)\"\n\t\t\t\t(onVkAuth)=\"onVkAuth()\"\n\t\t\t\t(onSyncAudio)=\"onSyncAudio()\"\n\t\t\t\t(onUploadMedia)=\"onUploadMedia()\"\n\t\t\t\t[message]=\"sideNavMessage\"\n\t\t\t\t[allowToCreateFirstUser]=\"users && users.length ? false : true\">\n\t\t</sidenav>\n\t</md-sidenav>\n\n\t<audio-player [audio]=\"currentMedia\" (onEnded)=\"nextMedia()\"></audio-player>\n\n\t<md-progress-bar *ngIf=\"!loaded\" mode=\"indeterminate\"></md-progress-bar>\n\n\t<media-list class=\"padding\" [(list)]=\"mediaList\" [(currentMedia)]=\"currentMedia\" [message]=\"mediaListMessage\" (mediaSelect)=\"mediaSelected($event)\" (onLoadList)=\"mediaListLoaded($event)\"></media-list>\n</md-sidenav-layout>\n\n"

/***/ },

/***/ 392:
/*!********************************************************!*\
  !*** ./public/frontend-app/services/socket.service.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SocketService = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _socket = __webpack_require__(/*! socket.io-client */ 393);
	
	var io = _interopRequireWildcard(_socket);
	
	var _Observable = __webpack_require__(/*! rxjs/Observable */ 12);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SocketService = exports.SocketService = function () {
		//socket: SocketIOClient.Socket;
	
		function SocketService() {
			_classCallCheck(this, SocketService);
	
			this.host = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;
		}
	
		_createClass(SocketService, [{
			key: "get",
			value: function get(name, callback) {
				var _this = this;
	
				this.name = name;
				var socketUrl = this.host + "/" + this.name;
				this.socket = io.connect(socketUrl);
				this.socket.on("connect", function () {
					return _this.connect(callback);
				});
				this.socket.on("disconnect", function () {
					return _this.disconnect();
				});
				this.socket.on("error", function (error) {
					console.log("ERROR: \"" + error + "\" (" + socketUrl + ")");
				});
	
				// Return observable which follows "create" and "remove" signals from socket stream
				return this.socket;
			}
			// Handle connection opening
	
		}, {
			key: "connect",
			value: function connect(callback) {
				console.log("Connected to \"" + (this.host + "/" + this.name) + "\"");
	
				// Request initial list when connected
				this.socket.emit("start");
				this.socket.on("start_response", callback);
			}
	
			// Handle connection closing
	
		}, {
			key: "disconnect",
			value: function disconnect() {
				console.log("Disconnected from \"" + this.name + "\"");
			}
		}]);

		return SocketService;
	}();

/***/ },

/***/ 430:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 441:
/*!********************************************************!*\
  !*** ./public/frontend-app/broadcasters/load-media.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.LoadMedia = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _broadcaster = __webpack_require__(/*! ./broadcaster */ 442);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LoadMedia = exports.LoadMedia = function () {
		/**
	  * Constructor
	  * @param broadcaster
	  */
		function LoadMedia(broadcaster) {
			_classCallCheck(this, LoadMedia);
	
			this._broadcaster = broadcaster;
		}
	
		_createClass(LoadMedia, [{
			key: 'fire',
			value: function fire(options, callback) {
				this._broadcaster.broadcast('LoadMedia', options, callback);
			}
		}, {
			key: 'on',
			value: function on() {
				return this._broadcaster.on('LoadMedia');
			}
		}]);
	
		return LoadMedia;
	}();
	
	Reflect.defineMetadata('design:paramtypes', [_broadcaster.Broadcaster], LoadMedia);

/***/ },

/***/ 442:
/*!*********************************************************!*\
  !*** ./public/frontend-app/broadcasters/broadcaster.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Broadcaster = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Subject = __webpack_require__(/*! rxjs/Subject */ 11);
	
	var _Observable = __webpack_require__(/*! rxjs/Observable */ 12);
	
	__webpack_require__(/*! rxjs/add/operator/filter */ 195);
	
	__webpack_require__(/*! rxjs/add/operator/map */ 225);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Broadcaster objects can perform broadcast of events among the application components
	 */
	var Broadcaster = exports.Broadcaster = function () {
		function Broadcaster() {
			_classCallCheck(this, Broadcaster);
	
			this._eventBus = this._eventBus;
	
			this._eventBus = new _Subject.Subject();
		}
	
		_createClass(Broadcaster, [{
			key: 'broadcast',
			value: function broadcast(key, data) {
				this._eventBus.next({ key: key, data: data });
			}
		}, {
			key: 'on',
			value: function on(key) {
				return this._eventBus.asObservable().filter(function (event) {
					return event.key === key;
				}).map(function (event) {
					return event.data;
				});
			}
		}]);

		return Broadcaster;
	}();

/***/ },

/***/ 443:
/*!********************************************************!*\
  !*** ./public/frontend-app/broadcasters/play-media.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.PlayMedia = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _broadcaster = __webpack_require__(/*! ./broadcaster */ 442);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PlayMedia = exports.PlayMedia = function () {
		/**
	  * Constructor
	  * @param broadcaster
	  */
		function PlayMedia(broadcaster) {
			_classCallCheck(this, PlayMedia);
	
			this._broadcaster = broadcaster;
		}
	
		_createClass(PlayMedia, [{
			key: 'fire',
			value: function fire() {
				var options = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	
				this._broadcaster.broadcast('PlayMedia', options);
			}
		}, {
			key: 'on',
			value: function on() {
				return this._broadcaster.on('PlayMedia');
			}
		}]);
	
		return PlayMedia;
	}();
	
	Reflect.defineMetadata('design:paramtypes', [_broadcaster.Broadcaster], PlayMedia);

/***/ },

/***/ 466:
/*!******************************************************************!*\
  !*** ./public/frontend-app/directives/prevent-href.directive.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.PreventHref = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(/*! @angular/core */ 10);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PreventHref = exports.PreventHref = (_dec = (0, _core.Component)({
		selector: '[href]',
		host: {
			'(click)': 'preventDefault($event)'
		},
		template: '<ng-content></ng-content>',
		inputs: ['href']
	}), _dec(_class = function () {
		function PreventHref() {
			_classCallCheck(this, PreventHref);
		}
	
		_createClass(PreventHref, [{
			key: 'preventDefault',
			value: function preventDefault(event) {
				if (this.href.length == 0) event.preventDefault();
			}
		}]);

		return PreventHref;
	}()) || _class);

/***/ },

/***/ 467:
/*!******************************************************************!*\
  !*** ./public/frontend-app/directives/audio-player.directive.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.AudioPlayer = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2;
	
	var _core = __webpack_require__(/*! @angular/core */ 10);
	
	var _audioPlayerTemplate = __webpack_require__(/*! ./audio-player.template.html */ 468);
	
	var _audioPlayerTemplate2 = _interopRequireDefault(_audioPlayerTemplate);
	
	var _core2 = __webpack_require__(/*! videogular2/core */ 382);
	
	var _media = __webpack_require__(/*! ../models/media.model */ 365);
	
	var _common = __webpack_require__(/*! ../helpers/common */ 469);
	
	var _playMedia = __webpack_require__(/*! ../broadcasters/play-media */ 443);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _initDefineProp(target, property, descriptor, context) {
		if (!descriptor) return;
		Object.defineProperty(target, property, {
			enumerable: descriptor.enumerable,
			configurable: descriptor.configurable,
			writable: descriptor.writable,
			value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
		});
	}
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
		var desc = {};
		Object['ke' + 'ys'](descriptor).forEach(function (key) {
			desc[key] = descriptor[key];
		});
		desc.enumerable = !!desc.enumerable;
		desc.configurable = !!desc.configurable;
	
		if ('value' in desc || desc.initializer) {
			desc.writable = true;
		}
	
		desc = decorators.slice().reverse().reduce(function (desc, decorator) {
			return decorator(target, property, desc) || desc;
		}, desc);
	
		if (context && desc.initializer !== void 0) {
			desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
			desc.initializer = undefined;
		}
	
		if (desc.initializer === void 0) {
			Object['define' + 'Property'](target, property, desc);
			desc = null;
		}
	
		return desc;
	}
	
	function _initializerWarningHelper(descriptor, context) {
		throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}
	
	var AudioPlayer = exports.AudioPlayer = (_dec = (0, _core.Component)({
		selector: 'audio-player',
		template: _audioPlayerTemplate2.default
	}), _dec2 = (0, _core.Input)(), _dec3 = (0, _core.Output)(), _dec(_class = (_class2 = function () {
		function AudioPlayer(vg_api, play_media) {
			var _this = this;
	
			_classCallCheck(this, AudioPlayer);
	
			_initDefineProp(this, 'audio', _descriptor, this);
	
			_initDefineProp(this, 'onEnded', _descriptor2, this);
	
			this.isFirst = true;
	
			this._vg_api = vg_api;
			this._play_media = play_media;
	
			this._play_media.on().subscribe(function (options) {
				setTimeout(function () {
					//https://github.com/videogular/videogular2/issues/112
					_this._vg_api.getDefaultMedia().elem.load();
					_this._vg_api.play();
				}.bind(_this), 300);
			});
		}
	
		_createClass(AudioPlayer, [{
			key: 'ngOnInit',
			value: function ngOnInit() {
				console.log('audio init', this.audio);
			}
		}, {
			key: 'ngOnChanges',
			value: function ngOnChanges(changes) {
				if (!this.audio) return;
	
				this._vg_api.getDefaultMedia().elem.load();
			}
		}, {
			key: 'onPlayerReady',
			value: function onPlayerReady() {
				var self = this;
				this._vg_api.subscriptions.ended._subscribe(_common.CommonHelper.handleEmitter(function (e) {
					self.onEnded.emit(self.audio);
				}));
			}
		}, {
			key: 'onEnterCuePoint',
			value: function onEnterCuePoint() {
				console.log("onEnterCuePoint");
			}
		}, {
			key: 'onExitCuePoint',
			value: function onExitCuePoint() {
				console.log("onExitCuePoint");
			}
		}, {
			key: 'onComplete',
			value: function onComplete() {
				console.log("onComplete");
			}
		}]);
	
		return AudioPlayer;
	}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'audio', [_dec2], {
		enumerable: true,
		initializer: function initializer() {
			return this.audio;
		}
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'onEnded', [_dec3], {
		enumerable: true,
		initializer: function initializer() {
			return new _core.EventEmitter();
		}
	})), _class2)) || _class);
	Reflect.defineMetadata('design:paramtypes', [_core2.VgAPI, _playMedia.PlayMedia], AudioPlayer);

/***/ },

/***/ 468:
/*!*******************************************************************!*\
  !*** ./public/frontend-app/directives/audio-player.template.html ***!
  \*******************************************************************/
/***/ function(module, exports) {

	module.exports = "<vg-player (onPlayerReady)=\"onPlayerReady($event)\" style=\"height: 50px;\">\n\t<vg-controls>\n\t\t<vg-play-pause></vg-play-pause>\n\t\t<vg-playback-button></vg-playback-button>\n\n\t\t<vg-time-display property=\"current\" format=\"mm:ss\"></vg-time-display>\n\n\t\t<vg-scrub-bar>\n\t\t\t<vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n\t\t\t<vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n\t\t</vg-scrub-bar>\n\n\t\t<vg-time-display property=\"left\" format=\"mm:ss\"></vg-time-display>\n\t\t<vg-time-display property=\"total\" format=\"mm:ss\"></vg-time-display>\n\n\t\t<vg-mute></vg-mute>\n\n\t\t<vg-volume></vg-volume>\n\t</vg-controls>\n\n\t<audio vg-media id=\"myAudio\" preload=\"auto\">\n\t\t<source [src]=\"audio.path || audio.remote_url\" [type]=\"audio.type\" *ngIf=\"audio\">\n\t</audio>\n\t<!--<vg-media (onComplete)=\"onComplete($event)\"></vg-media>-->\n</vg-player>"

/***/ },

/***/ 469:
/*!***********************************************!*\
  !*** ./public/frontend-app/helpers/common.js ***!
  \***********************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CommonHelper = exports.CommonHelper = function () {
		function CommonHelper() {
			_classCallCheck(this, CommonHelper);
		}
	
		_createClass(CommonHelper, null, [{
			key: "handleEmitter",
			value: function handleEmitter(nextCallback, addCallback) {
				return {
					add: addCallback || function () {},
					next: nextCallback
				};
			}
		}]);

		return CommonHelper;
	}();

/***/ },

/***/ 470:
/*!********************************************!*\
  !*** ./public/frontend-app/pipes/index.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trim = __webpack_require__(/*! ./trim/trim.pipe */ 471);
	
	Object.keys(_trim).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _trim[key];
	    }
	  });
	});

/***/ },

/***/ 471:
/*!*****************************************************!*\
  !*** ./public/frontend-app/pipes/trim/trim.pipe.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TrimPipe = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(/*! @angular/core */ 10);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TrimPipe = exports.TrimPipe = (_dec = (0, _core.Pipe)({ name: 'trim' }), _dec(_class = function () {
	    function TrimPipe() {
	        _classCallCheck(this, TrimPipe);
	    }
	
	    _createClass(TrimPipe, [{
	        key: 'transform',
	        value: function transform(value, args) {
	            return value.trim();
	        }
	    }]);

	    return TrimPipe;
	}()) || _class);

/***/ },

/***/ 472:
/*!******************************************************!*\
  !*** ./public/frontend-app/components/app.routes.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.routes = undefined;
	
	var _media = __webpack_require__(/*! ./media/media.component */ 381);
	
	var routes = exports.routes = [{ path: '', component: _media.MediaComponent, pathMatch: 'full' }];

/***/ },

/***/ 473:
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname, process) {"use strict";
	
	var application_root = __dirname;
	
	var media_path = "/media/";
	var config = {
		media_options: {
			relative_path: media_path,
			absolute_path: application_root + "/public" + media_path
		},
		vk_api_options: {
			app_id: 5638380, // public info placed to config.js
			app_secret: process.env.VK_APP_SECRET, // private info placed to env variables
			redirect_uri: 'http://media.jonybang.ru/api/vk_callback_auth',
			scope: 'audio,offline' //,nohttps
		},
		permissions: {
			vkUsersIds: [11204355, 179126482, 182778898, 1935590, 18365571]
		},
		multer_options: {
			dest: './public/' + media_path + 'temp/'
		}
	};
	
	module.exports.data = config;
	
	module.exports.setLocals = function (app) {
		var _ = __webpack_require__(/*! lodash */ 362);
		_.extend(app.locals, config);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, "/", __webpack_require__(/*! ./~/process/browser.js */ 2)))

/***/ },

/***/ 474:
/*!****************************************************************!*\
  !*** ./public/frontend-app/directives/media-list.directive.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.MediaList = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
	
	var _core = __webpack_require__(/*! @angular/core */ 10);
	
	var _mediaListTemplate = __webpack_require__(/*! ./media-list.template.html */ 475);
	
	var _mediaListTemplate2 = _interopRequireDefault(_mediaListTemplate);
	
	var _media = __webpack_require__(/*! ../services/media.service */ 364);
	
	var _loadMedia = __webpack_require__(/*! ../broadcasters/load-media */ 441);
	
	var _media2 = __webpack_require__(/*! ../models/media.model */ 365);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _initDefineProp(target, property, descriptor, context) {
		if (!descriptor) return;
		Object.defineProperty(target, property, {
			enumerable: descriptor.enumerable,
			configurable: descriptor.configurable,
			writable: descriptor.writable,
			value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
		});
	}
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
		var desc = {};
		Object['ke' + 'ys'](descriptor).forEach(function (key) {
			desc[key] = descriptor[key];
		});
		desc.enumerable = !!desc.enumerable;
		desc.configurable = !!desc.configurable;
	
		if ('value' in desc || desc.initializer) {
			desc.writable = true;
		}
	
		desc = decorators.slice().reverse().reduce(function (desc, decorator) {
			return decorator(target, property, desc) || desc;
		}, desc);
	
		if (context && desc.initializer !== void 0) {
			desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
			desc.initializer = undefined;
		}
	
		if (desc.initializer === void 0) {
			Object['define' + 'Property'](target, property, desc);
			desc = null;
		}
	
		return desc;
	}
	
	function _initializerWarningHelper(descriptor, context) {
		throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}
	
	var MediaList = exports.MediaList = (_dec = (0, _core.Component)({
		selector: 'media-list',
		template: _mediaListTemplate2.default
	}), _dec2 = (0, _core.Output)(), _dec3 = (0, _core.Output)(), _dec4 = (0, _core.Input)(), _dec5 = (0, _core.Input)(), _dec6 = (0, _core.Output)(), _dec7 = (0, _core.Output)(), _dec8 = (0, _core.Input)(), _dec(_class = (_class2 = function () {
		_createClass(MediaList, [{
			key: 'selectMedia',
			value: function selectMedia(media) {
				this.currentMedia = media;
				this.mediaSelect.emit(media);
			}
		}, {
			key: 'currentMedia',
			get: function get() {
				return this._currentMedia;
			},
			set: function set(value) {
				this._currentMedia = value;
				this.currentMediaChange.emit(value);
			}
		}]);
	
		function MediaList(media_service, load_media) {
			var _this = this;
	
			_classCallCheck(this, MediaList);
	
			_initDefineProp(this, 'onChangeCurrent', _descriptor, this);
	
			_initDefineProp(this, 'onLoadList', _descriptor2, this);
	
			_initDefineProp(this, 'list', _descriptor3, this);
	
			_initDefineProp(this, 'message', _descriptor4, this);
	
			_initDefineProp(this, 'mediaSelect', _descriptor5, this);
	
			_initDefineProp(this, 'currentMediaChange', _descriptor6, this);
	
			this._currentMedia = this._currentMedia;
	
			this._media_service = media_service;
			this._load_media = load_media;
			this.zone = new _core.NgZone({ enableLongStackTrace: false });
	
			this._load_media.on().subscribe(function (options, callback) {
				_this.loadUserMedia(callback);
			});
		}
	
		_createClass(MediaList, [{
			key: 'ngOnInit',
			value: function ngOnInit() {
				this.loadUserMedia();
			}
		}, {
			key: 'loadUserMedia',
			value: function loadUserMedia(callback) {
				var _this3 = this;
	
				this.loaded = false;
	
				function loadError(error) {
					var _this2 = this;
	
					this.zone.run(function () {
						initMedia.bind(_this2)([]);
						_this2.message = _.has(error, '_body') ? error._body : error;
					});
				}
				function initMedia(media_list) {
					this.list = media_list;
					if (media_list.length > 0) this.currentMedia = media_list[0];
	
					this.loaded = true;
					this.onLoadList.emit(media_list);
					if (callback) callback(media_list);
				}
				this._media_service.query().then(function (result) {
					if (result.length) {
						_this3.message = 'Local audio list:';
						initMedia.bind(_this3)(result);
					} else {
						_this3.message = 'No media :(';
						_this3.loaded = true;
						initMedia.bind(_this3)([]);
	
						//TODO: make it worked
						//this._ajax.get('/api/vk_audio_list').then((media_list) => {
						//    this.listLabel = 'VK audio list:';
						//    initMedia(media_list);
						//}, loadError.bind(this))
					}
				}, loadError.bind(this));
			}
		}]);
	
		return MediaList;
	}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'onChangeCurrent', [_dec2], {
		enumerable: true,
		initializer: function initializer() {
			return new _core.EventEmitter();
		}
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'onLoadList', [_dec3], {
		enumerable: true,
		initializer: function initializer() {
			return new _core.EventEmitter();
		}
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'list', [_dec4], {
		enumerable: true,
		initializer: function initializer() {
			return this.list;
		}
	}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'message', [_dec5], {
		enumerable: true,
		initializer: function initializer() {
			return this.message;
		}
	}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mediaSelect', [_dec6], {
		enumerable: true,
		initializer: function initializer() {
			return new _core.EventEmitter();
		}
	}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'currentMediaChange', [_dec7], {
		enumerable: true,
		initializer: function initializer() {
			return new _core.EventEmitter();
		}
	}), _applyDecoratedDescriptor(_class2.prototype, 'currentMedia', [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, 'currentMedia'), _class2.prototype)), _class2)) || _class);
	Reflect.defineMetadata('design:paramtypes', [_media.MediaService, _loadMedia.LoadMedia], MediaList);

/***/ },

/***/ 475:
/*!*****************************************************************!*\
  !*** ./public/frontend-app/directives/media-list.template.html ***!
  \*****************************************************************/
/***/ function(module, exports) {

	module.exports = "<div>\n\t<h3>{{listLabel || 'Audio list:'}}</h3>\n\t<p [hidden]=\"loaded && list && list.length\">{{message || 'No media :( You are logged in?'}}</p>\n\t<ul>\n\t\t<li *ngFor=\"let audio of list\" [ngClass]=\"{'bold': audio == currentMedia}\"><a href (click)=\"selectMedia(audio)\">{{audio.artist}} - {{audio.title}}</a></li>\n\t</ul>\n</div>"

/***/ }

});