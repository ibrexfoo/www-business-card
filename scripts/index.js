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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// import { getGithubData } from './github-manager.js';
var github = require("./github-manager");
/**
 * starts the process
 */
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var results, _a;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    results = {};
                    _a = results;
                    return [4 /*yield*/, github
                            .getGithubData('rbeatie', 'repos', 'gists')
                            .then(function (githubResponse) { return __awaiter(_this, void 0, void 0, function () {
                            var templates;
                            return __generator(this, function (_a) {
                                templates = [];
                                console.log('github responese', githubResponse);
                                if (githubResponse && githubResponse.length > 0) {
                                    githubResponse
                                        .forEach(function (gitHubData) {
                                        console.log('DATA', gitHubData);
                                        console.log('END // DATA');
                                        gitHubData
                                            .then(function (ProjectData) {
                                            var template = populateTemplate(ProjectData);
                                            templates = __spreadArray(__spreadArray([], templates, true), [template], false);
                                        });
                                    });
                                }
                                return [2 /*return*/, templates];
                            });
                        }); })];
                case 1:
                    _a.rbeatie = _b.sent();
                    console.log(results.rbeatie);
                    return [2 /*return*/];
            }
        });
    });
}
;
/**
 * Sample Pulled Data
 * REPO
 * [
{
  "id": 163477590,
  "node_id": "MDEwOlJlcG9zaXRvcnkxNjM0Nzc1OTA=",
  "name": "Access2.0Justice",
  "full_name": "rbeatie/Access2.0Justice",
  "private": false,
  "owner": {
    "login": "rbeatie",
    "id": 45648604,
    "node_id": "MDQ6VXNlcjQ1NjQ4NjA0",
    "avatar_url": "https://avatars.githubusercontent.com/u/45648604?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/rbeatie",
    "html_url": "https://github.com/rbeatie",
    "followers_url": "https://api.github.com/users/rbeatie/followers",
    "following_url": "https://api.github.com/users/rbeatie/following{/other_user}",
    "gists_url": "https://api.github.com/users/rbeatie/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/rbeatie/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/rbeatie/subscriptions",
    "organizations_url": "https://api.github.com/users/rbeatie/orgs",
    "repos_url": "https://api.github.com/users/rbeatie/repos",
    "events_url": "https://api.github.com/users/rbeatie/events{/privacy}",
    "received_events_url": "https://api.github.com/users/rbeatie/received_events",
    "type": "User",
    "site_admin": false
  },
  "html_url": "https://github.com/rbeatie/Access2.0Justice",
  "description": "A progressive project for The Commons Law center. ",
  "fork": false,
  "url": "https://api.github.com/repos/rbeatie/Access2.0Justice",
  "forks_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/forks",
  "keys_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/teams",
  "hooks_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/hooks",
  "issue_events_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/issues/events{/number}",
  "events_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/events",
  "assignees_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/assignees{/user}",
  "branches_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/branches{/branch}",
  "tags_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/tags",
  "blobs_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/languages",
  "stargazers_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/stargazers",
  "contributors_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/contributors",
  "subscribers_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/subscribers",
  "subscription_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/subscription",
  "commits_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/contents/{+path}",
  "compare_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/merges",
  "archive_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/downloads",
  "issues_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/issues{/number}",
  "pulls_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/labels{/name}",
  "releases_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/releases{/id}",
  "deployments_url": "https://api.github.com/repos/rbeatie/Access2.0Justice/deployments",
  "created_at": "2018-12-29T05:04:32Z",
  "updated_at": "2019-10-04T21:59:25Z",
  "pushed_at": "2019-01-02T02:12:46Z",
  "git_url": "git://github.com/rbeatie/Access2.0Justice.git",
  "ssh_url": "git@github.com:rbeatie/Access2.0Justice.git",
  "clone_url": "https://github.com/rbeatie/Access2.0Justice.git",
  "svn_url": "https://github.com/rbeatie/Access2.0Justice",
  "homepage": null,
  "size": 316,
  "stargazers_count": 0,
  "watchers_count": 0,
  "language": "TypeScript",
  "has_issues": true,
  "has_projects": true,
  "has_downloads": true,
  "has_wiki": true,
  "has_pages": false,
  "forks_count": 0,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 0,
  "license": null,
  "allow_forking": true,
  "is_template": false,
  "topics": [

  ],
  "visibility": "public",
  "forks": 0,
  "open_issues": 0,
  "watchers": 0,
  "default_branch": "master"
},
 *
 * GIST
 * {
  "url": "https://api.github.com/gists/9eeecb7adf321f78210ac0fb6b396188",
  "forks_url": "https://api.github.com/gists/9eeecb7adf321f78210ac0fb6b396188/forks",
  "commits_url": "https://api.github.com/gists/9eeecb7adf321f78210ac0fb6b396188/commits",
  "id": "9eeecb7adf321f78210ac0fb6b396188",
  "node_id": "MDQ6R2lzdDllZWVjYjdhZGYzMjFmNzgyMTBhYzBmYjZiMzk2MTg4",
  "git_pull_url": "https://gist.github.com/9eeecb7adf321f78210ac0fb6b396188.git",
  "git_push_url": "https://gist.github.com/9eeecb7adf321f78210ac0fb6b396188.git",
  "html_url": "https://gist.github.com/9eeecb7adf321f78210ac0fb6b396188",
  "files": {
    "DisconnectOnRejectPlugin.js": {
      "filename": "DisconnectOnRejectPlugin.js",
      "type": "application/javascript",
      "language": "JavaScript",
      "raw_url": "https://gist.githubusercontent.com/rbeatie/9eeecb7adf321f78210ac0fb6b396188/raw/484aff71e6545712e2fdbd64501bec01cbf81f6e/DisconnectOnRejectPlugin.js",
      "size": 1800
    },
    "hang-up-call.js": {
      "filename": "hang-up-call.js",
      "type": "application/javascript",
      "language": "JavaScript",
      "raw_url": "https://gist.githubusercontent.com/rbeatie/9eeecb7adf321f78210ac0fb6b396188/raw/1508cb1bdc23ce10de2f848c167eebb4ace68515/hang-up-call.js",
      "size": 1861
    }
  },
  "public": true,
  "created_at": "2021-01-14T00:19:46Z",
  "updated_at": "2021-01-14T00:20:25Z",
  "description": "hanging up a call when an Agent rejects the task",
  "comments": 0,
  "user": null,
  "comments_url": "https://api.github.com/gists/9eeecb7adf321f78210ac0fb6b396188/comments",
  "owner": {
    "login": "rbeatie",
    "id": ***,
    "node_id": "****",
    "avatar_url": "https://avatars.githubusercontent.com/u/45648604?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/rbeatie",
    "html_url": "https://github.com/rbeatie",
    "followers_url": "https://api.github.com/users/rbeatie/followers",
    "following_url": "https://api.github.com/users/rbeatie/following{/other_user}",
    "gists_url": "https://api.github.com/users/rbeatie/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/rbeatie/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/rbeatie/subscriptions",
    "organizations_url": "https://api.github.com/users/rbeatie/orgs",
    "repos_url": "https://api.github.com/users/rbeatie/repos",
    "events_url": "https://api.github.com/users/rbeatie/events{/privacy}",
    "received_events_url": "https://api.github.com/users/rbeatie/received_events",
    "type": "User",
    "site_admin": false
  },
  "truncated": false
},
 * @param content
 * @returns
 */
function populateTemplate(content) {
    try {
        var mdTemplate = "\n\t\t\t---\n\t\t\ttitle: \"".concat(content.name, "\"\n\t\t\tdate: ").concat(content.created_at, "\n\t\t\timage: ").concat(content.image, "\n\t\t\tcategories: ").concat(content.categories, "\n\t\t\tdescription: ").concat(content.description, "\n\t\t\tdraft: ").concat(content.isDraft, "\n\t\t\tproject_info:");
        for (var _i = 0, _a = content.info; _i < _a.length; _i++) {
            var info = _a[_i];
            mdTemplate = mdTemplate + "\n\t\t\t\t- name: \"".concat(info.name, "\"\n\t\t\t\ticon: \"").concat(info.icon, "\" \n\t\t\t\tcontent: \"").concat(info.content, "\" \n\t\t\t\t");
        }
        mdTemplate = mdTemplate + "\n\t\t\t---\n\t\t\t\n\t\t\t".concat(content.body, "\n\t\t\t").concat(content.footer, "\t\t\t  \n\t\t\t");
        return mdTemplate;
    }
    catch (e) {
        console.error('templating failed');
        // Promise.resolve(content)
        //   .then((data: any) => {
        //     // console.error('template failed with content: ', data)
        //     return e;
        //   });
    }
    // data.rdev0rigin = getGithubData('rdev0rigin', 'repos', 'gists')
    // 	.then(response => {
    // 		console.log('rdev0rigin', response);
    // 		return response;
    // 	});
    // console.log('data', data);
}
main();
//# sourceMappingURL=index.js.map