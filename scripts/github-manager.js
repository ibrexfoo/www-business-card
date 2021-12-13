var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// @ts-ignore
var uuidv4 = require('uuid').v4;
var axios = require('axios').default;
var fs = require('fs');
// import { v4 as uuidv4 } from 'uuid';
// import pkg from 'axios';
var VERSION = 'v3';
var USER_ENDPOINT = 'https://api.github.com/users';
var DOMAIN = 'api.github.com';
var GIST_B64_PATH = "/application/vnd.github.".concat(VERSION, ".base64");
var PERSONAL_ACCESS_TOKEN = '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';
var BASIC_AUTH = "token ".concat(PERSONAL_ACCESS_TOKEN);
var HEADERS = {
    "User-Agent": "0rexer0",
    "Access-Control-Allow-Origin": "*",
    "Authorization": BASIC_AUTH
};
var OAUTH_REDIRECT = 'https://xer0rex.com/oauth';
var CLIENT_ID = 'eaabe3c2d11922cd669d';
var GIST_ENDPOINT = DOMAIN + GIST_B64_PATH;
// Preflight Headers // 
// "Access-Control-Allow-Headers": "Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With",
// "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE",
// "Access-Control-Expose-Headers": "ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval",
// "Access-Control-Max-Age": "86400",
// }
// For OAuth flow
// step 1 - get the code returned from a user signin
/**
 * Parameters
 *Name	Type	Description
 *¸client_id	string	Required. The client ID you received from GitHub when you registered.
 * ¸redirect_uri	string	The URL in your application where users will be sent after authorization. See details below about redirect urls.
 ¸login	string	Suggests a specific account to use for signing in and authorizing the app.
 scope	string	A space-delimited list of scopes. If not provided, scope defaults to an empty list for users that have not authorized any scopes for the application. For users who have authorized scopes for the application, the user won't be shown the OAuth authorization page with the list of scopes. Instead, this step of the flow will automatically complete with the set of scopes the user has authorized for the application. For example, if a user has already performed the web flow twice and has authorized one token with user scope and another token with repo scope, a third web flow that does not provide a scope will receive a token with user and repo scope.
 state	string	An unguessable random string. It is used to protect against cross-site request forgery attacks.
 allow_signup	string	Whether or not unauthenticated users will be offered an option to sign up for GitHub during the OAuth flow. The default is true. Use false when a policy prohibits signups.
 * */
// export async function getUserOAuthCode(): Promise<any> {
function getUserOAuthCode() {
    return __awaiter(this, void 0, void 0, function () {
        var signinURL, paramsObj, paramsF, params, url, request;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (localStorage.getItem('state')) {
                        return [2 /*return*/, localStorage.getItem('state')];
                    }
                    localStorage.setItem('state', uuidv4());
                    signinURL = 'https://github.com/login/oauth/authorize';
                    paramsObj = {
                        'client_id': CLIENT_ID,
                        'redirect_uri': OAUTH_REDIRECT,
                        'scope': ['public_repo']
                    };
                    paramsF = (function (params) {
                        return Object
                            .keys(params)
                            .reduce(function (accumulated, currentKey, i) {
                            return accumulated += i === 0
                                ? "".concat(currentKey, "=").concat(params[currentKey])
                                : "&".concat(currentKey, "=").concat(params[currentKey]);
                        }, '?');
                    });
                    params = paramsF(paramsObj);
                    url = encodeURI(signinURL + params);
                    request = {
                        url: url,
                        method: 'POST',
                        headers: {
                            'User-Agent': "0rexer0",
                            'Access-Control-Allow-Origin': '*',
                            'X-Rex': 'Loves You!'
                        }
                    };
                    return [4 /*yield*/, makeAsyncCall(request)
                            .then(function (result) { return result.data; })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
/**
 * fetches all the gists of the current service user and returns an array of Gists
 * @returns []GithubClient.Gist
 */
function getGists() {
    return __awaiter(this, void 0, void 0, function () {
        var requestConfig;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestConfig = {
                        url: URL,
                        method: 'POST',
                        headers: HEADERS,
                    };
                    return [4 /*yield*/, makeAsyncCall(requestConfig)
                            .then(function (_a) {
                            var data = _a.data;
                            return data;
                        }).catch(function (e) {
                            console.error('error: ' + e.message ? e.name + ': ' + e.message : 'failed to make async REST call');
                            console.log('Stack Trace:> ', e.stack);
                            return e;
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
/**
 * makes a fetch to github and returns userdata or error
 * @param user string
 * @param paths ...string | string[] | "repos" | "gists"
 */
function getGithubData(user) {
    var paths = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        paths[_i - 1] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var githubPath;
        var _this = this;
        return __generator(this, function (_a) {
            githubPath = function (p) { return encodeURI("".concat(USER_ENDPOINT, "/").concat(user, "/").concat(p)); };
            return [2 /*return*/, paths
                    .map(function (path) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, makeAsyncCall(githubPath(path))
                                    .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        // console.log('gitHu', res);
                                        return [2 /*return*/, res];
                                    });
                                }); })];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                }); })];
        });
    });
}
;
//   for (const path of paths) {
//     return await fetch(encodeURI(`${USER_ENDPOINT}/${user}/${path}`))
//     .then(async result => {
//       return await result.json()
//     })
//     .catch(e => e);
//   }
//  }
function makeAsyncCall(request) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios(request)
                        .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, response.data];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); }).catch(function (error) { return error; })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function saveFile(options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                        fs.writeFile(encodeURI(options.path), options.data, function (err) {
                            if (err)
                                return reject(err);
                            if (options.callback)
                                return options.callback(resolve);
                            return resolve(201);
                        });
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
module.exports = {
    makeAsyncCall: makeAsyncCall,
    getGists: getGists,
    getGithubData: getGithubData,
    getUserOAuthCode: getUserOAuthCode,
    saveFile: saveFile
};
//# sourceMappingURL=github-manager.js.map