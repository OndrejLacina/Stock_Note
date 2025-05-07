"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 40:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortedDeferredError": () => (/* binding */ AbortedDeferredError),
/* harmony export */   "Action": () => (/* binding */ Action),
/* harmony export */   "IDLE_BLOCKER": () => (/* binding */ IDLE_BLOCKER),
/* harmony export */   "IDLE_FETCHER": () => (/* binding */ IDLE_FETCHER),
/* harmony export */   "IDLE_NAVIGATION": () => (/* binding */ IDLE_NAVIGATION),
/* harmony export */   "UNSAFE_DEFERRED_SYMBOL": () => (/* binding */ UNSAFE_DEFERRED_SYMBOL),
/* harmony export */   "UNSAFE_DeferredData": () => (/* binding */ DeferredData),
/* harmony export */   "UNSAFE_ErrorResponseImpl": () => (/* binding */ ErrorResponseImpl),
/* harmony export */   "UNSAFE_convertRouteMatchToUiMatch": () => (/* binding */ convertRouteMatchToUiMatch),
/* harmony export */   "UNSAFE_convertRoutesToDataRoutes": () => (/* binding */ convertRoutesToDataRoutes),
/* harmony export */   "UNSAFE_decodePath": () => (/* binding */ decodePath),
/* harmony export */   "UNSAFE_getResolveToMatches": () => (/* binding */ getResolveToMatches),
/* harmony export */   "UNSAFE_invariant": () => (/* binding */ invariant),
/* harmony export */   "UNSAFE_warning": () => (/* binding */ warning),
/* harmony export */   "createBrowserHistory": () => (/* binding */ createBrowserHistory),
/* harmony export */   "createHashHistory": () => (/* binding */ createHashHistory),
/* harmony export */   "createMemoryHistory": () => (/* binding */ createMemoryHistory),
/* harmony export */   "createPath": () => (/* binding */ createPath),
/* harmony export */   "createRouter": () => (/* binding */ createRouter),
/* harmony export */   "createStaticHandler": () => (/* binding */ createStaticHandler),
/* harmony export */   "data": () => (/* binding */ data),
/* harmony export */   "defer": () => (/* binding */ defer),
/* harmony export */   "generatePath": () => (/* binding */ generatePath),
/* harmony export */   "getStaticContextFromError": () => (/* binding */ getStaticContextFromError),
/* harmony export */   "getToPathname": () => (/* binding */ getToPathname),
/* harmony export */   "isDataWithResponseInit": () => (/* binding */ isDataWithResponseInit),
/* harmony export */   "isDeferredData": () => (/* binding */ isDeferredData),
/* harmony export */   "isRouteErrorResponse": () => (/* binding */ isRouteErrorResponse),
/* harmony export */   "joinPaths": () => (/* binding */ joinPaths),
/* harmony export */   "json": () => (/* binding */ json),
/* harmony export */   "matchPath": () => (/* binding */ matchPath),
/* harmony export */   "matchRoutes": () => (/* binding */ matchRoutes),
/* harmony export */   "normalizePathname": () => (/* binding */ normalizePathname),
/* harmony export */   "parsePath": () => (/* binding */ parsePath),
/* harmony export */   "redirect": () => (/* binding */ redirect),
/* harmony export */   "redirectDocument": () => (/* binding */ redirectDocument),
/* harmony export */   "replace": () => (/* binding */ replace),
/* harmony export */   "resolvePath": () => (/* binding */ resolvePath),
/* harmony export */   "resolveTo": () => (/* binding */ resolveTo),
/* harmony export */   "stripBasename": () => (/* binding */ stripBasename)
/* harmony export */ });
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */
var Action;
(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */
  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */
  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */
function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }
  let {
    initialEntries = ["/"],
    initialIndex,
    v5Compat = false
  } = options;
  let entries; // Declare so we can access from createMemoryLocation
  entries = initialEntries.map((entry, index) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
  let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
  let action = Action.Pop;
  let listener = null;
  function clampIndex(n) {
    return Math.min(Math.max(n, 0), entries.length - 1);
  }
  function getCurrentLocation() {
    return entries[index];
  }
  function createMemoryLocation(to, state, key) {
    if (state === void 0) {
      state = null;
    }
    let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
    return location;
  }
  function createHref(to) {
    return typeof to === "string" ? to : createPath(to);
  }
  let history = {
    get index() {
      return index;
    },
    get action() {
      return action;
    },
    get location() {
      return getCurrentLocation();
    },
    createHref,
    createURL(to) {
      return new URL(createHref(to), "http://localhost");
    },
    encodeLocation(to) {
      let path = typeof to === "string" ? parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    },
    push(to, state) {
      action = Action.Push;
      let nextLocation = createMemoryLocation(to, state);
      index += 1;
      entries.splice(index, entries.length, nextLocation);
      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 1
        });
      }
    },
    replace(to, state) {
      action = Action.Replace;
      let nextLocation = createMemoryLocation(to, state);
      entries[index] = nextLocation;
      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 0
        });
      }
    },
    go(delta) {
      action = Action.Pop;
      let nextIndex = clampIndex(index + delta);
      let nextLocation = entries[nextIndex];
      index = nextIndex;
      if (listener) {
        listener({
          action,
          location: nextLocation,
          delta
        });
      }
    },
    listen(fn) {
      listener = fn;
      return () => {
        listener = null;
      };
    }
  };
  return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window.location;
    return createLocation("", {
      pathname,
      search,
      hash
    },
    // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }
  function createBrowserHref(window, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */
function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createHashLocation(window, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window.location.hash.substr(1));
    // Hash URL should always have a leading / just like window.location.pathname
    // does, so if an app ends up at a route like /#something then we add a
    // leading slash so all of our path-matching behaves the same as if it would
    // in a browser router.  This is particularly important when there exists a
    // root splat route (<Route path="*">) since that matches internally against
    // "/*" and we'd expect /#something to 404 in a hash router app.
    if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
      pathname = "/" + pathname;
    }
    return createLocation("", {
      pathname,
      search,
      hash
    },
    // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }
  function createHashHref(window, to) {
    let base = window.document.querySelector("base");
    let href = "";
    if (base && base.getAttribute("href")) {
      let url = window.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }
    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }
  function validateHashLocation(location, to) {
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
  }
  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);
    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience, so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message);
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
/**
 * Creates a Location object with a unique key from the given Path
 */
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex();
  // Index should only be null when we initialize. If not, it's because the
  // user called history.pushState or history.replaceState directly, in which
  // case we should log a warning as it will result in bugs.
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    // try...catch because iOS limits us to 100 pushState calls :/
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      // If the exception is because `state` can't be serialized, let that throw
      // outwards just like a replace call would so the dev knows the cause
      // https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
      // https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      // They are going to lose state here, but there is no real
      // way to warn them about it since the page will refresh...
      window.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    // window.location.origin is "null" (the literal string value) in Firefox
    // under certain conditions, notably when serving from a local HTML file
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
    let base = window.location.origin !== "null" ? window.location.origin : window.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    // Treating this as a full URL will strip any trailing spaces so we need to
    // pre-encode them since they might be part of a matching splat param from
    // an ancestor route
    href = href.replace(/ $/, "%20");
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window, to);
    },
    createURL,
    encodeLocation(to) {
      // Encode a Location the same way window.location would
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n) {
      return globalHistory.go(n);
    }
  };
  return history;
}
//#endregion

var ResultType;
(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
const immutableRouteKeys = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function isIndexRoute(route) {
  return route.index === true;
}
// Walk the route tree generating unique IDs where necessary, so we are working
// solely with AgnosticDataRouteObject's within the Router
function convertRoutesToDataRoutes(routes, mapRouteProperties, parentPath, manifest) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  if (manifest === void 0) {
    manifest = {};
  }
  return routes.map((route, index) => {
    let treePath = [...parentPath, String(index)];
    let id = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
    invariant(!manifest[id], "Found a route id collision on id \"" + id + "\".  Route " + "id's must be globally unique within Data Router usages");
    if (isIndexRoute(route)) {
      let indexRoute = _extends({}, route, mapRouteProperties(route), {
        id
      });
      manifest[id] = indexRoute;
      return indexRoute;
    } else {
      let pathOrLayoutRoute = _extends({}, route, mapRouteProperties(route), {
        id,
        children: undefined
      });
      manifest[id] = pathOrLayoutRoute;
      if (route.children) {
        pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties, treePath, manifest);
      }
      return pathOrLayoutRoute;
    }
  });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/v6/utils/match-routes
 */
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  return matchRoutesImpl(routes, locationArg, basename, false);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    // Incoming pathnames are generally encoded from either window.location
    // or from router.navigate, but we want to match against the unencoded
    // paths in the route definitions.  Memory router locations won't be
    // encoded here but there also shouldn't be anything to decode so this
    // should be a safe operation.  This avoids needing matchRoutes to be
    // history-aware.
    let decoded = decodePath(pathname);
    matches = matchRouteBranch(branches[i], decoded, allowPartial);
  }
  return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
  let {
    route,
    pathname,
    params
  } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === undefined ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    // Add the children before adding this route to the array, so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.
    if (route.children && route.children.length > 0) {
      invariant(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    var _route$path;
    // coarse-grain check for optional params
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  // Optional path segments are denoted by a trailing `?`
  let isOptional = first.endsWith("?");
  // Compute the corresponding required segment: `foo?` -> `foo`
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  // All child paths with the prefix.  Do this for all children before the
  // optional version for all children, so we get consistent ordering where the
  // parent optional aspect is preferred as required.  Otherwise, we can get
  // child sections interspersed where deeper optional segments are higher than
  // parent optional segments, where for example, /:two would explode _earlier_
  // then /:one.  By always including the parent as required _for all children_
  // first, we avoid this issue
  result.push(...restExploded.map(subpath => subpath === "" ? required : [required, subpath].join("/")));
  // Then, if this is an optional value, add all child versions without
  if (isOptional) {
    result.push(...restExploded);
  }
  // for absolute paths, ensure `/` instead of empty segment
  return result.map(exploded => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}
const paramRe = /^:[\w-]+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = s => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ?
  // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] :
  // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}
function matchRouteBranch(branch, pathname, allowPartial) {
  if (allowPartial === void 0) {
    allowPartial = false;
  }
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    let route = meta.route;
    if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
      match = matchPath({
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end: false
      }, remainingPathname);
    }
    if (!match) {
      return null;
    }
    Object.assign(matchedParams, match.params);
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/v6/utils/generate-path
 */
function generatePath(originalPath, params) {
  if (params === void 0) {
    params = {};
  }
  let path = originalPath;
  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
    warning(false, "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
    path = path.replace(/\*$/, "/*");
  }
  // ensure `/` is added at the beginning if the path is absolute
  const prefix = path.startsWith("/") ? "/" : "";
  const stringify = p => p == null ? "" : typeof p === "string" ? p : String(p);
  const segments = path.split(/\/+/).map((segment, index, array) => {
    const isLastSegment = index === array.length - 1;
    // only apply the splat if it's the last segment
    if (isLastSegment && segment === "*") {
      const star = "*";
      // Apply the splat
      return stringify(params[star]);
    }
    const keyMatch = segment.match(/^:([\w-]+)(\??)$/);
    if (keyMatch) {
      const [, key, optional] = keyMatch;
      let param = params[key];
      invariant(optional === "?" || param != null, "Missing \":" + key + "\" param");
      return stringify(param);
    }
    // Remove any optional markers from optional static segments
    return segment.replace(/\?$/g, "");
  })
  // Remove empty segments
  .filter(segment => !!segment);
  return prefix + segments.join("/");
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/v6/utils/match-path
 */
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce((memo, _ref, index) => {
    let {
      paramName,
      isOptional
    } = _ref;
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    const value = captureGroups[index];
    if (isOptional && !value) {
      memo[paramName] = undefined;
    } else {
      memo[paramName] = (value || "").replace(/%2F/g, "/");
    }
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^${}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional) => {
    params.push({
      paramName,
      isOptional: isOptional != null
    });
    return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    params.push({
      paramName: "*"
    });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else if (end) {
    // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex, so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
  } else ;
  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, params];
}
function decodePath(value) {
  try {
    return value.split("/").map(v => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
  } catch (error) {
    warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
    return value;
  }
}
/**
 * @private
 */
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/v6/utils/resolve-path
 */
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
// Return the array of pathnames for the current route matches - used to
// generate the routePathnames input for resolveTo()
function getResolveToMatches(matches, v7_relativeSplatPath) {
  let pathMatches = getPathContributingMatches(matches);
  // When v7_relativeSplatPath is enabled, use the full pathname for the leaf
  // match so we include splat values for "." links.  See:
  // https://github.com/remix-run/react-router/issues/11052#issuecomment-1836589329
  if (v7_relativeSplatPath) {
    return pathMatches.map((match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
  }
  return pathMatches.map(match => match.pathnameBase);
}
/**
 * @private
 */
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    // With relative="route" (the default), each leading .. segment means
    // "go up one route" instead of "go up one URL segment".  This is a key
    // difference from how <a href> works and a major reason we call this a
    // "to" value instead of a "href".
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  // Ensure the pathname has a trailing slash if the original "to" had one
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  // Or if this was a link to the current path which has a trailing slash
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
/**
 * @private
 */
function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
/**
 * @private
 */
const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */
const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */
const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */
const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 *
 * @deprecated The `json` method is deprecated in favor of returning raw objects.
 * This method will be removed in v7.
 */
const json = function json(data, init) {
  if (init === void 0) {
    init = {};
  }
  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  let headers = new Headers(responseInit.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json; charset=utf-8");
  }
  return new Response(JSON.stringify(data), _extends({}, responseInit, {
    headers
  }));
};
class DataWithResponseInit {
  constructor(data, init) {
    this.type = "DataWithResponseInit";
    this.data = data;
    this.init = init || null;
  }
}
/**
 * Create "responses" that contain `status`/`headers` without forcing
 * serialization into an actual `Response` - used by Remix single fetch
 */
function data(data, init) {
  return new DataWithResponseInit(data, typeof init === "number" ? {
    status: init
  } : init);
}
class AbortedDeferredError extends Error {}
class DeferredData {
  constructor(data, responseInit) {
    this.pendingKeysSet = new Set();
    this.subscribers = new Set();
    this.deferredKeys = [];
    invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects");
    // Set up an AbortController + Promise we can race against to exit early
    // cancellation
    let reject;
    this.abortPromise = new Promise((_, r) => reject = r);
    this.controller = new AbortController();
    let onAbort = () => reject(new AbortedDeferredError("Deferred data aborted"));
    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort);
    this.controller.signal.addEventListener("abort", onAbort);
    this.data = Object.entries(data).reduce((acc, _ref2) => {
      let [key, value] = _ref2;
      return Object.assign(acc, {
        [key]: this.trackPromise(key, value)
      });
    }, {});
    if (this.done) {
      // All incoming values were resolved
      this.unlistenAbortSignal();
    }
    this.init = responseInit;
  }
  trackPromise(key, value) {
    if (!(value instanceof Promise)) {
      return value;
    }
    this.deferredKeys.push(key);
    this.pendingKeysSet.add(key);
    // We store a little wrapper promise that will be extended with
    // _data/_error props upon resolve/reject
    let promise = Promise.race([value, this.abortPromise]).then(data => this.onSettle(promise, key, undefined, data), error => this.onSettle(promise, key, error));
    // Register rejection listeners to avoid uncaught promise rejections on
    // errors or aborted deferred values
    promise.catch(() => {});
    Object.defineProperty(promise, "_tracked", {
      get: () => true
    });
    return promise;
  }
  onSettle(promise, key, error, data) {
    if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
      this.unlistenAbortSignal();
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      return Promise.reject(error);
    }
    this.pendingKeysSet.delete(key);
    if (this.done) {
      // Nothing left to abort!
      this.unlistenAbortSignal();
    }
    // If the promise was resolved/rejected with undefined, we'll throw an error as you
    // should always resolve with a value or null
    if (error === undefined && data === undefined) {
      let undefinedError = new Error("Deferred data for key \"" + key + "\" resolved/rejected with `undefined`, " + "you must resolve/reject with a value or `null`.");
      Object.defineProperty(promise, "_error", {
        get: () => undefinedError
      });
      this.emit(false, key);
      return Promise.reject(undefinedError);
    }
    if (data === undefined) {
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      this.emit(false, key);
      return Promise.reject(error);
    }
    Object.defineProperty(promise, "_data", {
      get: () => data
    });
    this.emit(false, key);
    return data;
  }
  emit(aborted, settledKey) {
    this.subscribers.forEach(subscriber => subscriber(aborted, settledKey));
  }
  subscribe(fn) {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }
  cancel() {
    this.controller.abort();
    this.pendingKeysSet.forEach((v, k) => this.pendingKeysSet.delete(k));
    this.emit(true);
  }
  async resolveData(signal) {
    let aborted = false;
    if (!this.done) {
      let onAbort = () => this.cancel();
      signal.addEventListener("abort", onAbort);
      aborted = await new Promise(resolve => {
        this.subscribe(aborted => {
          signal.removeEventListener("abort", onAbort);
          if (aborted || this.done) {
            resolve(aborted);
          }
        });
      });
    }
    return aborted;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
    return Object.entries(this.data).reduce((acc, _ref3) => {
      let [key, value] = _ref3;
      return Object.assign(acc, {
        [key]: unwrapTrackedPromise(value)
      });
    }, {});
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function isTrackedPromise(value) {
  return value instanceof Promise && value._tracked === true;
}
function unwrapTrackedPromise(value) {
  if (!isTrackedPromise(value)) {
    return value;
  }
  if (value._error) {
    throw value._error;
  }
  return value._data;
}
/**
 * @deprecated The `defer` method is deprecated in favor of returning raw
 * objects. This method will be removed in v7.
 */
const defer = function defer(data, init) {
  if (init === void 0) {
    init = {};
  }
  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  return new DeferredData(data, responseInit);
};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */
const redirect = function redirect(url, init) {
  if (init === void 0) {
    init = 302;
  }
  let responseInit = init;
  if (typeof responseInit === "number") {
    responseInit = {
      status: responseInit
    };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }
  let headers = new Headers(responseInit.headers);
  headers.set("Location", url);
  return new Response(null, _extends({}, responseInit, {
    headers
  }));
};
/**
 * A redirect response that will force a document reload to the new location.
 * Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */
const redirectDocument = (url, init) => {
  let response = redirect(url, init);
  response.headers.set("X-Remix-Reload-Document", "true");
  return response;
};
/**
 * A redirect response that will perform a `history.replaceState` instead of a
 * `history.pushState` for client-side navigation redirects.
 * Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */
const replace = (url, init) => {
  let response = redirect(url, init);
  response.headers.set("X-Remix-Replace", "true");
  return response;
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 *
 * We don't export the class for public use since it's an implementation
 * detail, but we export the interface above so folks can build their own
 * abstractions around instances via isRouteErrorResponse()
 */
class ErrorResponseImpl {
  constructor(status, statusText, data, internal) {
    if (internal === void 0) {
      internal = false;
    }
    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;
    if (data instanceof Error) {
      this.data = data.toString();
      this.error = data;
    } else {
      this.data = data;
    }
  }
}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}

const validMutationMethodsArr = ["post", "put", "patch", "delete"];
const validMutationMethods = new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
const validRequestMethods = new Set(validRequestMethodsArr);
const redirectStatusCodes = new Set([301, 302, 303, 307, 308]);
const redirectPreserveMethodStatusCodes = new Set([307, 308]);
const IDLE_NAVIGATION = {
  state: "idle",
  location: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined,
  json: undefined,
  text: undefined
};
const IDLE_FETCHER = {
  state: "idle",
  data: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined,
  json: undefined,
  text: undefined
};
const IDLE_BLOCKER = {
  state: "unblocked",
  proceed: undefined,
  reset: undefined,
  location: undefined
};
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const defaultMapRouteProperties = route => ({
  hasErrorBoundary: Boolean(route.hasErrorBoundary)
});
const TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a router and listen to history POP navigations
 */
function createRouter(init) {
  const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : undefined;
  const isBrowser = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
  const isServer = !isBrowser;
  invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let mapRouteProperties;
  if (init.mapRouteProperties) {
    mapRouteProperties = init.mapRouteProperties;
  } else if (init.detectErrorBoundary) {
    // If they are still using the deprecated version, wrap it with the new API
    let detectErrorBoundary = init.detectErrorBoundary;
    mapRouteProperties = route => ({
      hasErrorBoundary: detectErrorBoundary(route)
    });
  } else {
    mapRouteProperties = defaultMapRouteProperties;
  }
  // Routes keyed by ID
  let manifest = {};
  // Routes in tree format for matching
  let dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties, undefined, manifest);
  let inFlightDataRoutes;
  let basename = init.basename || "/";
  let dataStrategyImpl = init.dataStrategy || defaultDataStrategy;
  let patchRoutesOnNavigationImpl = init.patchRoutesOnNavigation;
  // Config driven behavior flags
  let future = _extends({
    v7_fetcherPersist: false,
    v7_normalizeFormMethod: false,
    v7_partialHydration: false,
    v7_prependBasename: false,
    v7_relativeSplatPath: false,
    v7_skipActionErrorRevalidation: false
  }, init.future);
  // Cleanup function for history
  let unlistenHistory = null;
  // Externally-provided functions to call on all state changes
  let subscribers = new Set();
  // Externally-provided object to hold scroll restoration locations during routing
  let savedScrollPositions = null;
  // Externally-provided function to get scroll restoration keys
  let getScrollRestorationKey = null;
  // Externally-provided function to get current scroll position
  let getScrollPosition = null;
  // One-time flag to control the initial hydration scroll restoration.  Because
  // we don't get the saved positions from <ScrollRestoration /> until _after_
  // the initial render, we need to manually trigger a separate updateState to
  // send along the restoreScrollPosition
  // Set to true if we have `hydrationData` since we assume we were SSR'd and that
  // SSR did the initial scroll restoration.
  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
  let initialMatchesIsFOW = false;
  let initialErrors = null;
  if (initialMatches == null && !patchRoutesOnNavigationImpl) {
    // If we do not match a user-provided-route, fall back to the root
    // to allow the error boundary to take over
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let {
      matches,
      route
    } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = {
      [route.id]: error
    };
  }
  // In SPA apps, if the user provided a patchRoutesOnNavigation implementation and
  // our initial match is a splat route, clear them out so we run through lazy
  // discovery on hydration in case there's a more accurate lazy route match.
  // In SSR apps (with `hydrationData`), we expect that the server will send
  // up the proper matched routes so we don't want to run lazy discovery on
  // initial hydration and want to hydrate into the splat route.
  if (initialMatches && !init.hydrationData) {
    let fogOfWar = checkFogOfWar(initialMatches, dataRoutes, init.history.location.pathname);
    if (fogOfWar.active) {
      initialMatches = null;
    }
  }
  let initialized;
  if (!initialMatches) {
    initialized = false;
    initialMatches = [];
    // If partial hydration and fog of war is enabled, we will be running
    // `patchRoutesOnNavigation` during hydration so include any partial matches as
    // the initial matches so we can properly render `HydrateFallback`'s
    if (future.v7_partialHydration) {
      let fogOfWar = checkFogOfWar(null, dataRoutes, init.history.location.pathname);
      if (fogOfWar.active && fogOfWar.matches) {
        initialMatchesIsFOW = true;
        initialMatches = fogOfWar.matches;
      }
    }
  } else if (initialMatches.some(m => m.route.lazy)) {
    // All initialMatches need to be loaded before we're ready.  If we have lazy
    // functions around still then we'll need to run them in initialize()
    initialized = false;
  } else if (!initialMatches.some(m => m.route.loader)) {
    // If we've got no loaders to run, then we're good to go
    initialized = true;
  } else if (future.v7_partialHydration) {
    // If partial hydration is enabled, we're initialized so long as we were
    // provided with hydrationData for every route with a loader, and no loaders
    // were marked for explicit hydration
    let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
    let errors = init.hydrationData ? init.hydrationData.errors : null;
    // If errors exist, don't consider routes below the boundary
    if (errors) {
      let idx = initialMatches.findIndex(m => errors[m.route.id] !== undefined);
      initialized = initialMatches.slice(0, idx + 1).every(m => !shouldLoadRouteOnHydration(m.route, loaderData, errors));
    } else {
      initialized = initialMatches.every(m => !shouldLoadRouteOnHydration(m.route, loaderData, errors));
    }
  } else {
    // Without partial hydration - we're initialized if we were provided any
    // hydrationData - which is expected to be complete
    initialized = init.hydrationData != null;
  }
  let router;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: new Map(),
    blockers: new Map()
  };
  // -- Stateful internal variables to manage navigations --
  // Current navigation in progress (to be committed in completeNavigation)
  let pendingAction = Action.Pop;
  // Should the current navigation prevent the scroll reset if scroll cannot
  // be restored?
  let pendingPreventScrollReset = false;
  // AbortController for the active navigation
  let pendingNavigationController;
  // Should the current navigation enable document.startViewTransition?
  let pendingViewTransitionEnabled = false;
  // Store applied view transitions so we can apply them on POP
  let appliedViewTransitions = new Map();
  // Cleanup function for persisting applied transitions to sessionStorage
  let removePageHideEventListener = null;
  // We use this to avoid touching history in completeNavigation if a
  // revalidation is entirely uninterrupted
  let isUninterruptedRevalidation = false;
  // Use this internal flag to force revalidation of all loaders:
  //  - submissions (completed or interrupted)
  //  - useRevalidator()
  //  - X-Remix-Revalidate (from redirect)
  let isRevalidationRequired = false;
  // Use this internal array to capture routes that require revalidation due
  // to a cancelled deferred on action submission
  let cancelledDeferredRoutes = [];
  // Use this internal array to capture fetcher loads that were cancelled by an
  // action navigation and require revalidation
  let cancelledFetcherLoads = new Set();
  // AbortControllers for any in-flight fetchers
  let fetchControllers = new Map();
  // Track loads based on the order in which they started
  let incrementingLoadId = 0;
  // Track the outstanding pending navigation data load to be compared against
  // the globally incrementing load when a fetcher load lands after a completed
  // navigation
  let pendingNavigationLoadId = -1;
  // Fetchers that triggered data reloads as a result of their actions
  let fetchReloadIds = new Map();
  // Fetchers that triggered redirect navigations
  let fetchRedirectIds = new Set();
  // Most recent href/match for fetcher.load calls for fetchers
  let fetchLoadMatches = new Map();
  // Ref-count mounted fetchers so we know when it's ok to clean them up
  let activeFetchers = new Map();
  // Fetchers that have requested a delete when using v7_fetcherPersist,
  // they'll be officially removed after they return to idle
  let deletedFetchers = new Set();
  // Store DeferredData instances for active route matches.  When a
  // route loader returns defer() we stick one in here.  Then, when a nested
  // promise resolves we update loaderData.  If a new navigation starts we
  // cancel active deferreds for eliminated routes.
  let activeDeferreds = new Map();
  // Store blocker functions in a separate Map outside of router state since
  // we don't need to update UI state if they change
  let blockerFunctions = new Map();
  // Flag to ignore the next history update, so we can revert the URL change on
  // a POP navigation that was blocked by the user without touching router state
  let unblockBlockerHistoryUpdate = undefined;
  // Initialize the router, all side effects should be kicked off from here.
  // Implemented as a Fluent API for ease of:
  //   let router = createRouter(init).initialize();
  function initialize() {
    // If history informs us of a POP navigation, start the navigation but do not update
    // state.  We'll update our own state once the navigation completes
    unlistenHistory = init.history.listen(_ref => {
      let {
        action: historyAction,
        location,
        delta
      } = _ref;
      // Ignore this event if it was just us resetting the URL from a
      // blocked POP navigation
      if (unblockBlockerHistoryUpdate) {
        unblockBlockerHistoryUpdate();
        unblockBlockerHistoryUpdate = undefined;
        return;
      }
      warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location " + "that was not created by @remix-run/router. This will fail silently in " + "production. This can happen if you are navigating outside the router " + "via `window.history.pushState`/`window.location.hash` instead of using " + "router navigation APIs.  This can also happen if you are using " + "createHashRouter and the user manually changes the URL.");
      let blockerKey = shouldBlockNavigation({
        currentLocation: state.location,
        nextLocation: location,
        historyAction
      });
      if (blockerKey && delta != null) {
        // Restore the URL to match the current UI, but don't update router state
        let nextHistoryUpdatePromise = new Promise(resolve => {
          unblockBlockerHistoryUpdate = resolve;
        });
        init.history.go(delta * -1);
        // Put the blocker into a blocked state
        updateBlocker(blockerKey, {
          state: "blocked",
          location,
          proceed() {
            updateBlocker(blockerKey, {
              state: "proceeding",
              proceed: undefined,
              reset: undefined,
              location
            });
            // Re-do the same POP navigation we just blocked, after the url
            // restoration is also complete.  See:
            // https://github.com/remix-run/react-router/issues/11613
            nextHistoryUpdatePromise.then(() => init.history.go(delta));
          },
          reset() {
            let blockers = new Map(state.blockers);
            blockers.set(blockerKey, IDLE_BLOCKER);
            updateState({
              blockers
            });
          }
        });
        return;
      }
      return startNavigation(historyAction, location);
    });
    if (isBrowser) {
      // FIXME: This feels gross.  How can we cleanup the lines between
      // scrollRestoration/appliedTransitions persistance?
      restoreAppliedTransitions(routerWindow, appliedViewTransitions);
      let _saveAppliedTransitions = () => persistAppliedTransitions(routerWindow, appliedViewTransitions);
      routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
      removePageHideEventListener = () => routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
    }
    // Kick off initial data load if needed.  Use Pop to avoid modifying history
    // Note we don't do any handling of lazy here.  For SPA's it'll get handled
    // in the normal navigation flow.  For SSR it's expected that lazy modules are
    // resolved prior to router creation since we can't go into a fallbackElement
    // UI for SSR'd apps
    if (!state.initialized) {
      startNavigation(Action.Pop, state.location, {
        initialHydration: true
      });
    }
    return router;
  }
  // Clean up a router and it's side effects
  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }
    if (removePageHideEventListener) {
      removePageHideEventListener();
    }
    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
    state.blockers.forEach((_, key) => deleteBlocker(key));
  }
  // Subscribe to state updates for the router
  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  }
  // Update our state and notify the calling context of the change
  function updateState(newState, opts) {
    if (opts === void 0) {
      opts = {};
    }
    state = _extends({}, state, newState);
    // Prep fetcher cleanup so we can tell the UI which fetcher data entries
    // can be removed
    let completedFetchers = [];
    let deletedFetchersKeys = [];
    if (future.v7_fetcherPersist) {
      state.fetchers.forEach((fetcher, key) => {
        if (fetcher.state === "idle") {
          if (deletedFetchers.has(key)) {
            // Unmounted from the UI and can be totally removed
            deletedFetchersKeys.push(key);
          } else {
            // Returned to idle but still mounted in the UI, so semi-remains for
            // revalidations and such
            completedFetchers.push(key);
          }
        }
      });
    }
    // Remove any lingering deleted fetchers that have already been removed
    // from state.fetchers
    deletedFetchers.forEach(key => {
      if (!state.fetchers.has(key) && !fetchControllers.has(key)) {
        deletedFetchersKeys.push(key);
      }
    });
    // Iterate over a local copy so that if flushSync is used and we end up
    // removing and adding a new subscriber due to the useCallback dependencies,
    // we don't get ourselves into a loop calling the new subscriber immediately
    [...subscribers].forEach(subscriber => subscriber(state, {
      deletedFetchers: deletedFetchersKeys,
      viewTransitionOpts: opts.viewTransitionOpts,
      flushSync: opts.flushSync === true
    }));
    // Remove idle fetchers from state since we only care about in-flight fetchers.
    if (future.v7_fetcherPersist) {
      completedFetchers.forEach(key => state.fetchers.delete(key));
      deletedFetchersKeys.forEach(key => deleteFetcher(key));
    } else {
      // We already called deleteFetcher() on these, can remove them from this
      // Set now that we've handed the keys off to the data layer
      deletedFetchersKeys.forEach(key => deletedFetchers.delete(key));
    }
  }
  // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
  // and setting state.[historyAction/location/matches] to the new route.
  // - Location is a required param
  // - Navigation will always be set to IDLE_NAVIGATION
  // - Can pass any other state in newState
  function completeNavigation(location, newState, _temp) {
    var _location$state, _location$state2;
    let {
      flushSync
    } = _temp === void 0 ? {} : _temp;
    // Deduce if we're in a loading/actionReload state:
    // - We have committed actionData in the store
    // - The current navigation was a mutation submission
    // - We're past the submitting state and into the loading state
    // - The location being loaded is not the result of a redirect
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
    let actionData;
    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        // Empty actionData -> clear prior actionData due to an action error
        actionData = null;
      }
    } else if (isActionReload) {
      // Keep the current data if we're wrapping up the action reload
      actionData = state.actionData;
    } else {
      // Clear actionData on any other completed navigations
      actionData = null;
    }
    // Always preserve any existing loaderData from re-used routes
    let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
    // On a successful navigation we can assume we got through all blockers
    // so we can start fresh
    let blockers = state.blockers;
    if (blockers.size > 0) {
      blockers = new Map(blockers);
      blockers.forEach((_, k) => blockers.set(k, IDLE_BLOCKER));
    }
    // Always respect the user flag.  Otherwise don't reset on mutation
    // submission navigations unless they redirect
    let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
    // Commit any in-flight routes at the end of the HMR revalidation "navigation"
    if (inFlightDataRoutes) {
      dataRoutes = inFlightDataRoutes;
      inFlightDataRoutes = undefined;
    }
    if (isUninterruptedRevalidation) ; else if (pendingAction === Action.Pop) ; else if (pendingAction === Action.Push) {
      init.history.push(location, location.state);
    } else if (pendingAction === Action.Replace) {
      init.history.replace(location, location.state);
    }
    let viewTransitionOpts;
    // On POP, enable transitions if they were enabled on the original navigation
    if (pendingAction === Action.Pop) {
      // Forward takes precedence so they behave like the original navigation
      let priorPaths = appliedViewTransitions.get(state.location.pathname);
      if (priorPaths && priorPaths.has(location.pathname)) {
        viewTransitionOpts = {
          currentLocation: state.location,
          nextLocation: location
        };
      } else if (appliedViewTransitions.has(location.pathname)) {
        // If we don't have a previous forward nav, assume we're popping back to
        // the new location and enable if that location previously enabled
        viewTransitionOpts = {
          currentLocation: location,
          nextLocation: state.location
        };
      }
    } else if (pendingViewTransitionEnabled) {
      // Store the applied transition on PUSH/REPLACE
      let toPaths = appliedViewTransitions.get(state.location.pathname);
      if (toPaths) {
        toPaths.add(location.pathname);
      } else {
        toPaths = new Set([location.pathname]);
        appliedViewTransitions.set(state.location.pathname, toPaths);
      }
      viewTransitionOpts = {
        currentLocation: state.location,
        nextLocation: location
      };
    }
    updateState(_extends({}, newState, {
      actionData,
      loaderData,
      historyAction: pendingAction,
      location,
      initialized: true,
      navigation: IDLE_NAVIGATION,
      revalidation: "idle",
      restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
      preventScrollReset,
      blockers
    }), {
      viewTransitionOpts,
      flushSync: flushSync === true
    });
    // Reset stateful navigation vars
    pendingAction = Action.Pop;
    pendingPreventScrollReset = false;
    pendingViewTransitionEnabled = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    cancelledDeferredRoutes = [];
  }
  // Trigger a navigation event, which can either be a numerical POP or a PUSH
  // replace with an optional submission
  async function navigate(to, opts) {
    if (typeof to === "number") {
      init.history.go(to);
      return;
    }
    let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to, future.v7_relativeSplatPath, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts);
    let currentLocation = state.location;
    let nextLocation = createLocation(state.location, path, opts && opts.state);
    // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
    // URL from window.location, so we need to encode it here so the behavior
    // remains the same as POP and non-data-router usages.  new URL() does all
    // the same encoding we'd get from a history.pushState/window.location read
    // without having to touch history
    nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
    let userReplace = opts && opts.replace != null ? opts.replace : undefined;
    let historyAction = Action.Push;
    if (userReplace === true) {
      historyAction = Action.Replace;
    } else if (userReplace === false) ; else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      // By default on submissions to the current location we REPLACE so that
      // users don't have to double-click the back button to get to the prior
      // location.  If the user redirects to a different location from the
      // action/loader this will be ignored and the redirect will be a PUSH
      historyAction = Action.Replace;
    }
    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
    let flushSync = (opts && opts.flushSync) === true;
    let blockerKey = shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    });
    if (blockerKey) {
      // Put the blocker into a blocked state
      updateBlocker(blockerKey, {
        state: "blocked",
        location: nextLocation,
        proceed() {
          updateBlocker(blockerKey, {
            state: "proceeding",
            proceed: undefined,
            reset: undefined,
            location: nextLocation
          });
          // Send the same navigation through
          navigate(to, opts);
        },
        reset() {
          let blockers = new Map(state.blockers);
          blockers.set(blockerKey, IDLE_BLOCKER);
          updateState({
            blockers
          });
        }
      });
      return;
    }
    return await startNavigation(historyAction, nextLocation, {
      submission,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace,
      enableViewTransition: opts && opts.viewTransition,
      flushSync
    });
  }
  // Revalidate all current loaders.  If a navigation is in progress or if this
  // is interrupted by a navigation, allow this to "succeed" by calling all
  // loaders during the next loader round
  function revalidate() {
    interruptActiveLoads();
    updateState({
      revalidation: "loading"
    });
    // If we're currently submitting an action, we don't need to start a new
    // navigation, we'll just let the follow up loader execution call all loaders
    if (state.navigation.state === "submitting") {
      return;
    }
    // If we're currently in an idle state, start a new navigation for the current
    // action/location and mark it as uninterrupted, which will skip the history
    // update in completeNavigation
    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return;
    }
    // Otherwise, if we're currently in a loading state, just start a new
    // navigation to the navigation.location but do not trigger an uninterrupted
    // revalidation so that history correctly updates once the navigation completes
    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
      overrideNavigation: state.navigation,
      // Proxy through any rending view transition
      enableViewTransition: pendingViewTransitionEnabled === true
    });
  }
  // Start a navigation to the given action/location.  Can optionally provide a
  // overrideNavigation which will override the normalLoad in the case of a redirect
  // navigation
  async function startNavigation(historyAction, location, opts) {
    // Abort any in-progress navigations and start a new one. Unset any ongoing
    // uninterrupted revalidations unless told otherwise, since we want this
    // new navigation to update history normally
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
    // Save the current scroll position every time we start a new navigation,
    // and track whether we should reset scroll on completion
    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = opts != null && opts.initialHydration && state.matches && state.matches.length > 0 && !initialMatchesIsFOW ?
    // `matchRoutes()` has already been called if we're in here via `router.initialize()`
    state.matches : matchRoutes(routesToUse, location, basename);
    let flushSync = (opts && opts.flushSync) === true;
    // Short circuit if it's only a hash change and not a revalidation or
    // mutation submission.
    //
    // Ignore on initial page loads because since the initial hydration will always
    // be "same hash".  For example, on /page#hash and submit a <Form method="post">
    // which will default to a navigation to /page
    if (matches && state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
      completeNavigation(location, {
        matches
      }, {
        flushSync
      });
      return;
    }
    let fogOfWar = checkFogOfWar(matches, routesToUse, location.pathname);
    if (fogOfWar.active && fogOfWar.matches) {
      matches = fogOfWar.matches;
    }
    // Short circuit with a 404 on the root error boundary if we match nothing
    if (!matches) {
      let {
        error,
        notFoundMatches,
        route
      } = handleNavigational404(location.pathname);
      completeNavigation(location, {
        matches: notFoundMatches,
        loaderData: {},
        errors: {
          [route.id]: error
        }
      }, {
        flushSync
      });
      return;
    }
    // Create a controller/Request for this navigation
    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
    let pendingActionResult;
    if (opts && opts.pendingError) {
      // If we have a pendingError, it means the user attempted a GET submission
      // with binary FormData so assign here and skip to handleLoaders.  That
      // way we handle calling loaders above the boundary etc.  It's not really
      // different from an actionError in that sense.
      pendingActionResult = [findNearestBoundary(matches).route.id, {
        type: ResultType.error,
        error: opts.pendingError
      }];
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      // Call action if we received an action submission
      let actionResult = await handleAction(request, location, opts.submission, matches, fogOfWar.active, {
        replace: opts.replace,
        flushSync
      });
      if (actionResult.shortCircuited) {
        return;
      }
      // If we received a 404 from handleAction, it's because we couldn't lazily
      // discover the destination route so we don't want to call loaders
      if (actionResult.pendingActionResult) {
        let [routeId, result] = actionResult.pendingActionResult;
        if (isErrorResult(result) && isRouteErrorResponse(result.error) && result.error.status === 404) {
          pendingNavigationController = null;
          completeNavigation(location, {
            matches: actionResult.matches,
            loaderData: {},
            errors: {
              [routeId]: result.error
            }
          });
          return;
        }
      }
      matches = actionResult.matches || matches;
      pendingActionResult = actionResult.pendingActionResult;
      loadingNavigation = getLoadingNavigation(location, opts.submission);
      flushSync = false;
      // No need to do fog of war matching again on loader execution
      fogOfWar.active = false;
      // Create a GET request for the loaders
      request = createClientSideRequest(init.history, request.url, request.signal);
    }
    // Call loaders
    let {
      shortCircuited,
      matches: updatedMatches,
      loaderData,
      errors
    } = await handleLoaders(request, location, matches, fogOfWar.active, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync, pendingActionResult);
    if (shortCircuited) {
      return;
    }
    // Clean up now that the action/loaders have completed.  Don't clean up if
    // we short circuited because pendingNavigationController will have already
    // been assigned to a new controller for the next navigation
    pendingNavigationController = null;
    completeNavigation(location, _extends({
      matches: updatedMatches || matches
    }, getActionDataForCommit(pendingActionResult), {
      loaderData,
      errors
    }));
  }
  // Call the action matched by the leaf route for this navigation and handle
  // redirects/errors
  async function handleAction(request, location, submission, matches, isFogOfWar, opts) {
    if (opts === void 0) {
      opts = {};
    }
    interruptActiveLoads();
    // Put us in a submitting state
    let navigation = getSubmittingNavigation(location, submission);
    updateState({
      navigation
    }, {
      flushSync: opts.flushSync === true
    });
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(matches, location.pathname, request.signal);
      if (discoverResult.type === "aborted") {
        return {
          shortCircuited: true
        };
      } else if (discoverResult.type === "error") {
        let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
        return {
          matches: discoverResult.partialMatches,
          pendingActionResult: [boundaryId, {
            type: ResultType.error,
            error: discoverResult.error
          }]
        };
      } else if (!discoverResult.matches) {
        let {
          notFoundMatches,
          error,
          route
        } = handleNavigational404(location.pathname);
        return {
          matches: notFoundMatches,
          pendingActionResult: [route.id, {
            type: ResultType.error,
            error
          }]
        };
      } else {
        matches = discoverResult.matches;
      }
    }
    // Call our action and get the result
    let result;
    let actionMatch = getTargetMatch(matches, location);
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      result = {
        type: ResultType.error,
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      let results = await callDataStrategy("action", state, request, [actionMatch], matches, null);
      result = results[actionMatch.route.id];
      if (request.signal.aborted) {
        return {
          shortCircuited: true
        };
      }
    }
    if (isRedirectResult(result)) {
      let replace;
      if (opts && opts.replace != null) {
        replace = opts.replace;
      } else {
        // If the user didn't explicity indicate replace behavior, replace if
        // we redirected to the exact same location we're currently at to avoid
        // double back-buttons
        let location = normalizeRedirectLocation(result.response.headers.get("Location"), new URL(request.url), basename);
        replace = location === state.location.pathname + state.location.search;
      }
      await startRedirectNavigation(request, result, true, {
        submission,
        replace
      });
      return {
        shortCircuited: true
      };
    }
    if (isDeferredResult(result)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }
    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      // By default, all submissions to the current location are REPLACE
      // navigations, but if the action threw an error that'll be rendered in
      // an errorElement, we fall back to PUSH so that the user can use the
      // back button to get back to the pre-submission form location to try
      // again
      if ((opts && opts.replace) !== true) {
        pendingAction = Action.Push;
      }
      return {
        matches,
        pendingActionResult: [boundaryMatch.route.id, result]
      };
    }
    return {
      matches,
      pendingActionResult: [actionMatch.route.id, result]
    };
  }
  // Call all applicable loaders for the given matches, handling redirects,
  // errors, etc.
  async function handleLoaders(request, location, matches, isFogOfWar, overrideNavigation, submission, fetcherSubmission, replace, initialHydration, flushSync, pendingActionResult) {
    // Figure out the right navigation we want to use for data loading
    let loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
    // If this was a redirect from an action we don't have a "submission" but
    // we have it on the loading navigation so use that if available
    let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
    // If this is an uninterrupted revalidation, we remain in our current idle
    // state.  If not, we need to switch to our loading state and load data,
    // preserving any new action data or existing action data (in the case of
    // a revalidation interrupting an actionReload)
    // If we have partialHydration enabled, then don't update the state for the
    // initial data load since it's not a "navigation"
    let shouldUpdateNavigationState = !isUninterruptedRevalidation && (!future.v7_partialHydration || !initialHydration);
    // When fog of war is enabled, we enter our `loading` state earlier so we
    // can discover new routes during the `loading` state.  We skip this if
    // we've already run actions since we would have done our matching already.
    // If the children() function threw then, we want to proceed with the
    // partial matches it discovered.
    if (isFogOfWar) {
      if (shouldUpdateNavigationState) {
        let actionData = getUpdatedActionData(pendingActionResult);
        updateState(_extends({
          navigation: loadingNavigation
        }, actionData !== undefined ? {
          actionData
        } : {}), {
          flushSync
        });
      }
      let discoverResult = await discoverRoutes(matches, location.pathname, request.signal);
      if (discoverResult.type === "aborted") {
        return {
          shortCircuited: true
        };
      } else if (discoverResult.type === "error") {
        let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
        return {
          matches: discoverResult.partialMatches,
          loaderData: {},
          errors: {
            [boundaryId]: discoverResult.error
          }
        };
      } else if (!discoverResult.matches) {
        let {
          error,
          notFoundMatches,
          route
        } = handleNavigational404(location.pathname);
        return {
          matches: notFoundMatches,
          loaderData: {},
          errors: {
            [route.id]: error
          }
        };
      } else {
        matches = discoverResult.matches;
      }
    }
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, future.v7_partialHydration && initialHydration === true, future.v7_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult);
    // Cancel pending deferreds for no-longer-matched routes or routes we're
    // about to reload.  Note that if this is an action reload we would have
    // already cancelled all pending deferreds so this would be a no-op
    cancelActiveDeferreds(routeId => !(matches && matches.some(m => m.route.id === routeId)) || matchesToLoad && matchesToLoad.some(m => m.route.id === routeId));
    pendingNavigationLoadId = ++incrementingLoadId;
    // Short circuit if we have no loaders to run
    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      let updatedFetchers = markFetchRedirectsDone();
      completeNavigation(location, _extends({
        matches,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
          [pendingActionResult[0]]: pendingActionResult[1].error
        } : null
      }, getActionDataForCommit(pendingActionResult), updatedFetchers ? {
        fetchers: new Map(state.fetchers)
      } : {}), {
        flushSync
      });
      return {
        shortCircuited: true
      };
    }
    if (shouldUpdateNavigationState) {
      let updates = {};
      if (!isFogOfWar) {
        // Only update navigation/actionNData if we didn't already do it above
        updates.navigation = loadingNavigation;
        let actionData = getUpdatedActionData(pendingActionResult);
        if (actionData !== undefined) {
          updates.actionData = actionData;
        }
      }
      if (revalidatingFetchers.length > 0) {
        updates.fetchers = getUpdatedRevalidatingFetchers(revalidatingFetchers);
      }
      updateState(updates, {
        flushSync
      });
    }
    revalidatingFetchers.forEach(rf => {
      abortFetcher(rf.key);
      if (rf.controller) {
        // Fetchers use an independent AbortController so that aborting a fetcher
        // (via deleteFetcher) does not abort the triggering navigation that
        // triggered the revalidation
        fetchControllers.set(rf.key, rf.controller);
      }
    });
    // Proxy navigation abort through to revalidation fetchers
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach(f => abortFetcher(f.key));
    if (pendingNavigationController) {
      pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    }
    let {
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state, matches, matchesToLoad, revalidatingFetchers, request);
    if (request.signal.aborted) {
      return {
        shortCircuited: true
      };
    }
    // Clean up _after_ loaders have completed.  Don't clean up if we short
    // circuited because fetchControllers would have been aborted and
    // reassigned to new controllers for the next navigation
    if (pendingNavigationController) {
      pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
    }
    revalidatingFetchers.forEach(rf => fetchControllers.delete(rf.key));
    // If any loaders returned a redirect Response, start a new REPLACE navigation
    let redirect = findRedirect(loaderResults);
    if (redirect) {
      await startRedirectNavigation(request, redirect.result, true, {
        replace
      });
      return {
        shortCircuited: true
      };
    }
    redirect = findRedirect(fetcherResults);
    if (redirect) {
      // If this redirect came from a fetcher make sure we mark it in
      // fetchRedirectIds so it doesn't get revalidated on the next set of
      // loader executions
      fetchRedirectIds.add(redirect.key);
      await startRedirectNavigation(request, redirect.result, true, {
        replace
      });
      return {
        shortCircuited: true
      };
    }
    // Process and commit output from loaders
    let {
      loaderData,
      errors
    } = processLoaderData(state, matches, loaderResults, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds);
    // Wire up subscribers to update loaderData as promises settle
    activeDeferreds.forEach((deferredData, routeId) => {
      deferredData.subscribe(aborted => {
        // Note: No need to updateState here since the TrackedPromise on
        // loaderData is stable across resolve/reject
        // Remove this instance if we were aborted or if promises have settled
        if (aborted || deferredData.done) {
          activeDeferreds.delete(routeId);
        }
      });
    });
    // Preserve SSR errors during partial hydration
    if (future.v7_partialHydration && initialHydration && state.errors) {
      errors = _extends({}, state.errors, errors);
    }
    let updatedFetchers = markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
    return _extends({
      matches,
      loaderData,
      errors
    }, shouldUpdateFetchers ? {
      fetchers: new Map(state.fetchers)
    } : {});
  }
  function getUpdatedActionData(pendingActionResult) {
    if (pendingActionResult && !isErrorResult(pendingActionResult[1])) {
      // This is cast to `any` currently because `RouteData`uses any and it
      // would be a breaking change to use any.
      // TODO: v7 - change `RouteData` to use `unknown` instead of `any`
      return {
        [pendingActionResult[0]]: pendingActionResult[1].data
      };
    } else if (state.actionData) {
      if (Object.keys(state.actionData).length === 0) {
        return null;
      } else {
        return state.actionData;
      }
    }
  }
  function getUpdatedRevalidatingFetchers(revalidatingFetchers) {
    revalidatingFetchers.forEach(rf => {
      let fetcher = state.fetchers.get(rf.key);
      let revalidatingFetcher = getLoadingFetcher(undefined, fetcher ? fetcher.data : undefined);
      state.fetchers.set(rf.key, revalidatingFetcher);
    });
    return new Map(state.fetchers);
  }
  // Trigger a fetcher load/submit for the given fetcher key
  function fetch(key, routeId, href, opts) {
    if (isServer) {
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. " + "You are likely calling a useFetcher() method in the body of your component. " + "Try moving it to a useEffect or a callback.");
    }
    abortFetcher(key);
    let flushSync = (opts && opts.flushSync) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, future.v7_relativeSplatPath, routeId, opts == null ? void 0 : opts.relative);
    let matches = matchRoutes(routesToUse, normalizedPath, basename);
    let fogOfWar = checkFogOfWar(matches, routesToUse, normalizedPath);
    if (fogOfWar.active && fogOfWar.matches) {
      matches = fogOfWar.matches;
    }
    if (!matches) {
      setFetcherError(key, routeId, getInternalRouterError(404, {
        pathname: normalizedPath
      }), {
        flushSync
      });
      return;
    }
    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts);
    if (error) {
      setFetcherError(key, routeId, error, {
        flushSync
      });
      return;
    }
    let match = getTargetMatch(matches, path);
    let preventScrollReset = (opts && opts.preventScrollReset) === true;
    if (submission && isMutationMethod(submission.formMethod)) {
      handleFetcherAction(key, routeId, path, match, matches, fogOfWar.active, flushSync, preventScrollReset, submission);
      return;
    }
    // Store off the match so we can call it's shouldRevalidate on subsequent
    // revalidations
    fetchLoadMatches.set(key, {
      routeId,
      path
    });
    handleFetcherLoader(key, routeId, path, match, matches, fogOfWar.active, flushSync, preventScrollReset, submission);
  }
  // Call the action for the matched fetcher.submit(), and then handle redirects,
  // errors, and revalidation
  async function handleFetcherAction(key, routeId, path, match, requestMatches, isFogOfWar, flushSync, preventScrollReset, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);
    function detectAndHandle405Error(m) {
      if (!m.route.action && !m.route.lazy) {
        let error = getInternalRouterError(405, {
          method: submission.formMethod,
          pathname: path,
          routeId: routeId
        });
        setFetcherError(key, routeId, error, {
          flushSync
        });
        return true;
      }
      return false;
    }
    if (!isFogOfWar && detectAndHandle405Error(match)) {
      return;
    }
    // Put this fetcher into it's submitting state
    let existingFetcher = state.fetchers.get(key);
    updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
      flushSync
    });
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(requestMatches, new URL(fetchRequest.url).pathname, fetchRequest.signal, key);
      if (discoverResult.type === "aborted") {
        return;
      } else if (discoverResult.type === "error") {
        setFetcherError(key, routeId, discoverResult.error, {
          flushSync
        });
        return;
      } else if (!discoverResult.matches) {
        setFetcherError(key, routeId, getInternalRouterError(404, {
          pathname: path
        }), {
          flushSync
        });
        return;
      } else {
        requestMatches = discoverResult.matches;
        match = getTargetMatch(requestMatches, path);
        if (detectAndHandle405Error(match)) {
          return;
        }
      }
    }
    // Call the action for the fetcher
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let actionResults = await callDataStrategy("action", state, fetchRequest, [match], requestMatches, key);
    let actionResult = actionResults[match.route.id];
    if (fetchRequest.signal.aborted) {
      // We can delete this so long as we weren't aborted by our own fetcher
      // re-submit which would have put _new_ controller is in fetchControllers
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }
      return;
    }
    // When using v7_fetcherPersist, we don't want errors bubbling up to the UI
    // or redirects processed for unmounted fetchers so we just revert them to
    // idle
    if (future.v7_fetcherPersist && deletedFetchers.has(key)) {
      if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
        updateFetcherState(key, getDoneFetcher(undefined));
        return;
      }
      // Let SuccessResult's fall through for revalidation
    } else {
      if (isRedirectResult(actionResult)) {
        fetchControllers.delete(key);
        if (pendingNavigationLoadId > originatingLoadId) {
          // A new navigation was kicked off after our action started, so that
          // should take precedence over this redirect navigation.  We already
          // set isRevalidationRequired so all loaders for the new route should
          // fire unless opted out via shouldRevalidate
          updateFetcherState(key, getDoneFetcher(undefined));
          return;
        } else {
          fetchRedirectIds.add(key);
          updateFetcherState(key, getLoadingFetcher(submission));
          return startRedirectNavigation(fetchRequest, actionResult, false, {
            fetcherSubmission: submission,
            preventScrollReset
          });
        }
      }
      // Process any non-redirect errors thrown
      if (isErrorResult(actionResult)) {
        setFetcherError(key, routeId, actionResult.error);
        return;
      }
    }
    if (isDeferredResult(actionResult)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }
    // Start the data load for current matches, or the next location if we're
    // in the middle of a navigation
    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let loadFetcher = getLoadingFetcher(submission, actionResult.data);
    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, submission, nextLocation, false, future.v7_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, [match.route.id, actionResult]);
    // Put all revalidating fetchers into the loading state, except for the
    // current fetcher which we want to keep in it's current loading state which
    // contains it's action submission info + action data
    revalidatingFetchers.filter(rf => rf.key !== key).forEach(rf => {
      let staleKey = rf.key;
      let existingFetcher = state.fetchers.get(staleKey);
      let revalidatingFetcher = getLoadingFetcher(undefined, existingFetcher ? existingFetcher.data : undefined);
      state.fetchers.set(staleKey, revalidatingFetcher);
      abortFetcher(staleKey);
      if (rf.controller) {
        fetchControllers.set(staleKey, rf.controller);
      }
    });
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach(rf => abortFetcher(rf.key));
    abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    let {
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
    if (abortController.signal.aborted) {
      return;
    }
    abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach(r => fetchControllers.delete(r.key));
    let redirect = findRedirect(loaderResults);
    if (redirect) {
      return startRedirectNavigation(revalidationRequest, redirect.result, false, {
        preventScrollReset
      });
    }
    redirect = findRedirect(fetcherResults);
    if (redirect) {
      // If this redirect came from a fetcher make sure we mark it in
      // fetchRedirectIds so it doesn't get revalidated on the next set of
      // loader executions
      fetchRedirectIds.add(redirect.key);
      return startRedirectNavigation(revalidationRequest, redirect.result, false, {
        preventScrollReset
      });
    }
    // Process and commit output from loaders
    let {
      loaderData,
      errors
    } = processLoaderData(state, matches, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
    // Since we let revalidations complete even if the submitting fetcher was
    // deleted, only put it back to idle if it hasn't been deleted
    if (state.fetchers.has(key)) {
      let doneFetcher = getDoneFetcher(actionResult.data);
      state.fetchers.set(key, doneFetcher);
    }
    abortStaleFetchLoads(loadId);
    // If we are currently in a navigation loading state and this fetcher is
    // more recent than the navigation, we want the newer data so abort the
    // navigation and complete it with the fetcher data
    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      // otherwise just update with the fetcher data, preserving any existing
      // loaderData for loaders that did not need to reload.  We have to
      // manually merge here since we aren't going through completeNavigation
      updateState({
        errors,
        loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors),
        fetchers: new Map(state.fetchers)
      });
      isRevalidationRequired = false;
    }
  }
  // Call the matched loader for fetcher.load(), handling redirects, errors, etc.
  async function handleFetcherLoader(key, routeId, path, match, matches, isFogOfWar, flushSync, preventScrollReset, submission) {
    let existingFetcher = state.fetchers.get(key);
    updateFetcherState(key, getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : undefined), {
      flushSync
    });
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(matches, new URL(fetchRequest.url).pathname, fetchRequest.signal, key);
      if (discoverResult.type === "aborted") {
        return;
      } else if (discoverResult.type === "error") {
        setFetcherError(key, routeId, discoverResult.error, {
          flushSync
        });
        return;
      } else if (!discoverResult.matches) {
        setFetcherError(key, routeId, getInternalRouterError(404, {
          pathname: path
        }), {
          flushSync
        });
        return;
      } else {
        matches = discoverResult.matches;
        match = getTargetMatch(matches, path);
      }
    }
    // Call the loader for this fetcher route match
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let results = await callDataStrategy("loader", state, fetchRequest, [match], matches, key);
    let result = results[match.route.id];
    // Deferred isn't supported for fetcher loads, await everything and treat it
    // as a normal load.  resolveDeferredData will return undefined if this
    // fetcher gets aborted, so we just leave result untouched and short circuit
    // below if that happens
    if (isDeferredResult(result)) {
      result = (await resolveDeferredData(result, fetchRequest.signal, true)) || result;
    }
    // We can delete this so long as we weren't aborted by our our own fetcher
    // re-load which would have put _new_ controller is in fetchControllers
    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }
    if (fetchRequest.signal.aborted) {
      return;
    }
    // We don't want errors bubbling up or redirects followed for unmounted
    // fetchers, so short circuit here if it was removed from the UI
    if (deletedFetchers.has(key)) {
      updateFetcherState(key, getDoneFetcher(undefined));
      return;
    }
    // If the loader threw a redirect Response, start a new REPLACE navigation
    if (isRedirectResult(result)) {
      if (pendingNavigationLoadId > originatingLoadId) {
        // A new navigation was kicked off after our loader started, so that
        // should take precedence over this redirect navigation
        updateFetcherState(key, getDoneFetcher(undefined));
        return;
      } else {
        fetchRedirectIds.add(key);
        await startRedirectNavigation(fetchRequest, result, false, {
          preventScrollReset
        });
        return;
      }
    }
    // Process any non-redirect errors thrown
    if (isErrorResult(result)) {
      setFetcherError(key, routeId, result.error);
      return;
    }
    invariant(!isDeferredResult(result), "Unhandled fetcher deferred data");
    // Put the fetcher back into an idle state
    updateFetcherState(key, getDoneFetcher(result.data));
  }
  /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */
  async function startRedirectNavigation(request, redirect, isNavigation, _temp2) {
    let {
      submission,
      fetcherSubmission,
      preventScrollReset,
      replace
    } = _temp2 === void 0 ? {} : _temp2;
    if (redirect.response.headers.has("X-Remix-Revalidate")) {
      isRevalidationRequired = true;
    }
    let location = redirect.response.headers.get("Location");
    invariant(location, "Expected a Location header on the redirect Response");
    location = normalizeRedirectLocation(location, new URL(request.url), basename);
    let redirectLocation = createLocation(state.location, location, {
      _isRedirect: true
    });
    if (isBrowser) {
      let isDocumentReload = false;
      if (redirect.response.headers.has("X-Remix-Reload-Document")) {
        // Hard reload if the response contained X-Remix-Reload-Document
        isDocumentReload = true;
      } else if (ABSOLUTE_URL_REGEX.test(location)) {
        const url = init.history.createURL(location);
        isDocumentReload =
        // Hard reload if it's an absolute URL to a new origin
        url.origin !== routerWindow.location.origin ||
        // Hard reload if it's an absolute URL that does not match our basename
        stripBasename(url.pathname, basename) == null;
      }
      if (isDocumentReload) {
        if (replace) {
          routerWindow.location.replace(location);
        } else {
          routerWindow.location.assign(location);
        }
        return;
      }
    }
    // There's no need to abort on redirects, since we don't detect the
    // redirect until the action/loaders have settled
    pendingNavigationController = null;
    let redirectHistoryAction = replace === true || redirect.response.headers.has("X-Remix-Replace") ? Action.Replace : Action.Push;
    // Use the incoming submission if provided, fallback on the active one in
    // state.navigation
    let {
      formMethod,
      formAction,
      formEncType
    } = state.navigation;
    if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
      submission = getSubmissionFromNavigation(state.navigation);
    }
    // If this was a 307/308 submission we want to preserve the HTTP method and
    // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
    // redirected location
    let activeSubmission = submission || fetcherSubmission;
    if (redirectPreserveMethodStatusCodes.has(redirect.response.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
      await startNavigation(redirectHistoryAction, redirectLocation, {
        submission: _extends({}, activeSubmission, {
          formAction: location
        }),
        // Preserve these flags across redirects
        preventScrollReset: preventScrollReset || pendingPreventScrollReset,
        enableViewTransition: isNavigation ? pendingViewTransitionEnabled : undefined
      });
    } else {
      // If we have a navigation submission, we will preserve it through the
      // redirect navigation
      let overrideNavigation = getLoadingNavigation(redirectLocation, submission);
      await startNavigation(redirectHistoryAction, redirectLocation, {
        overrideNavigation,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission,
        // Preserve these flags across redirects
        preventScrollReset: preventScrollReset || pendingPreventScrollReset,
        enableViewTransition: isNavigation ? pendingViewTransitionEnabled : undefined
      });
    }
  }
  // Utility wrapper for calling dataStrategy client-side without having to
  // pass around the manifest, mapRouteProperties, etc.
  async function callDataStrategy(type, state, request, matchesToLoad, matches, fetcherKey) {
    let results;
    let dataResults = {};
    try {
      results = await callDataStrategyImpl(dataStrategyImpl, type, state, request, matchesToLoad, matches, fetcherKey, manifest, mapRouteProperties);
    } catch (e) {
      // If the outer dataStrategy method throws, just return the error for all
      // matches - and it'll naturally bubble to the root
      matchesToLoad.forEach(m => {
        dataResults[m.route.id] = {
          type: ResultType.error,
          error: e
        };
      });
      return dataResults;
    }
    for (let [routeId, result] of Object.entries(results)) {
      if (isRedirectDataStrategyResultResult(result)) {
        let response = result.result;
        dataResults[routeId] = {
          type: ResultType.redirect,
          response: normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename, future.v7_relativeSplatPath)
        };
      } else {
        dataResults[routeId] = await convertDataStrategyResultToDataResult(result);
      }
    }
    return dataResults;
  }
  async function callLoadersAndMaybeResolveData(state, matches, matchesToLoad, fetchersToLoad, request) {
    let currentMatches = state.matches;
    // Kick off loaders and fetchers in parallel
    let loaderResultsPromise = callDataStrategy("loader", state, request, matchesToLoad, matches, null);
    let fetcherResultsPromise = Promise.all(fetchersToLoad.map(async f => {
      if (f.matches && f.match && f.controller) {
        let results = await callDataStrategy("loader", state, createClientSideRequest(init.history, f.path, f.controller.signal), [f.match], f.matches, f.key);
        let result = results[f.match.route.id];
        // Fetcher results are keyed by fetcher key from here on out, not routeId
        return {
          [f.key]: result
        };
      } else {
        return Promise.resolve({
          [f.key]: {
            type: ResultType.error,
            error: getInternalRouterError(404, {
              pathname: f.path
            })
          }
        });
      }
    }));
    let loaderResults = await loaderResultsPromise;
    let fetcherResults = (await fetcherResultsPromise).reduce((acc, r) => Object.assign(acc, r), {});
    await Promise.all([resolveNavigationDeferredResults(matches, loaderResults, request.signal, currentMatches, state.loaderData), resolveFetcherDeferredResults(matches, fetcherResults, fetchersToLoad)]);
    return {
      loaderResults,
      fetcherResults
    };
  }
  function interruptActiveLoads() {
    // Every interruption triggers a revalidation
    isRevalidationRequired = true;
    // Cancel pending route-level deferreds and mark cancelled routes for
    // revalidation
    cancelledDeferredRoutes.push(...cancelActiveDeferreds());
    // Abort in-flight fetcher loads
    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.add(key);
      }
      abortFetcher(key);
    });
  }
  function updateFetcherState(key, fetcher, opts) {
    if (opts === void 0) {
      opts = {};
    }
    state.fetchers.set(key, fetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    }, {
      flushSync: (opts && opts.flushSync) === true
    });
  }
  function setFetcherError(key, routeId, error, opts) {
    if (opts === void 0) {
      opts = {};
    }
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState({
      errors: {
        [boundaryMatch.route.id]: error
      },
      fetchers: new Map(state.fetchers)
    }, {
      flushSync: (opts && opts.flushSync) === true
    });
  }
  function getFetcher(key) {
    activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
    // If this fetcher was previously marked for deletion, unmark it since we
    // have a new instance
    if (deletedFetchers.has(key)) {
      deletedFetchers.delete(key);
    }
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  function deleteFetcher(key) {
    let fetcher = state.fetchers.get(key);
    // Don't abort the controller if this is a deletion of a fetcher.submit()
    // in it's loading phase since - we don't want to abort the corresponding
    // revalidation and want them to complete and land
    if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
      abortFetcher(key);
    }
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    // If we opted into the flag we can clear this now since we're calling
    // deleteFetcher() at the end of updateState() and we've already handed the
    // deleted fetcher keys off to the data layer.
    // If not, we're eagerly calling deleteFetcher() and we need to keep this
    // Set populated until the next updateState call, and we'll clear
    // `deletedFetchers` then
    if (future.v7_fetcherPersist) {
      deletedFetchers.delete(key);
    }
    cancelledFetcherLoads.delete(key);
    state.fetchers.delete(key);
  }
  function deleteFetcherAndUpdateState(key) {
    let count = (activeFetchers.get(key) || 0) - 1;
    if (count <= 0) {
      activeFetchers.delete(key);
      deletedFetchers.add(key);
      if (!future.v7_fetcherPersist) {
        deleteFetcher(key);
      }
    } else {
      activeFetchers.set(key, count);
    }
    updateState({
      fetchers: new Map(state.fetchers)
    });
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    if (controller) {
      controller.abort();
      fetchControllers.delete(key);
    }
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = getDoneFetcher(fetcher.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  function markFetchRedirectsDone() {
    let doneKeys = [];
    let updatedFetchers = false;
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, "Expected fetcher: " + key);
      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
        updatedFetchers = true;
      }
    }
    markFetchersDone(doneKeys);
    return updatedFetchers;
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, "Expected fetcher: " + key);
        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }
    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }
  function getBlocker(key, fn) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    if (blockerFunctions.get(key) !== fn) {
      blockerFunctions.set(key, fn);
    }
    return blocker;
  }
  function deleteBlocker(key) {
    state.blockers.delete(key);
    blockerFunctions.delete(key);
  }
  // Utility function to update blockers, ensuring valid state transitions
  function updateBlocker(key, newBlocker) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    // Poor mans state machine :)
    // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
    invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
    let blockers = new Map(state.blockers);
    blockers.set(key, newBlocker);
    updateState({
      blockers
    });
  }
  function shouldBlockNavigation(_ref2) {
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = _ref2;
    if (blockerFunctions.size === 0) {
      return;
    }
    // We ony support a single active blocker at the moment since we don't have
    // any compelling use cases for multi-blocker yet
    if (blockerFunctions.size > 1) {
      warning(false, "A router only supports one blocker at a time");
    }
    let entries = Array.from(blockerFunctions.entries());
    let [blockerKey, blockerFunction] = entries[entries.length - 1];
    let blocker = state.blockers.get(blockerKey);
    if (blocker && blocker.state === "proceeding") {
      // If the blocker is currently proceeding, we don't need to re-check
      // it and can let this navigation continue
      return;
    }
    // At this point, we know we're unblocked/blocked so we need to check the
    // user-provided blocker function
    if (blockerFunction({
      currentLocation,
      nextLocation,
      historyAction
    })) {
      return blockerKey;
    }
  }
  function handleNavigational404(pathname) {
    let error = getInternalRouterError(404, {
      pathname
    });
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let {
      matches,
      route
    } = getShortCircuitMatches(routesToUse);
    // Cancel all pending deferred on 404s since we don't keep any routes
    cancelActiveDeferreds();
    return {
      notFoundMatches: matches,
      route,
      error
    };
  }
  function cancelActiveDeferreds(predicate) {
    let cancelledRouteIds = [];
    activeDeferreds.forEach((dfd, routeId) => {
      if (!predicate || predicate(routeId)) {
        // Cancel the deferred - but do not remove from activeDeferreds here -
        // we rely on the subscribers to do that so our tests can assert proper
        // cleanup via _internalActiveDeferreds
        dfd.cancel();
        cancelledRouteIds.push(routeId);
        activeDeferreds.delete(routeId);
      }
    });
    return cancelledRouteIds;
  }
  // Opt in to capturing and reporting scroll positions during navigations,
  // used by the <ScrollRestoration> component
  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions = positions;
    getScrollPosition = getPosition;
    getScrollRestorationKey = getKey || null;
    // Perform initial hydration scroll restoration, since we miss the boat on
    // the initial updateState() because we've not yet rendered <ScrollRestoration/>
    // and therefore have no savedScrollPositions available
    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);
      if (y != null) {
        updateState({
          restoreScrollPosition: y
        });
      }
    }
    return () => {
      savedScrollPositions = null;
      getScrollPosition = null;
      getScrollRestorationKey = null;
    };
  }
  function getScrollKey(location, matches) {
    if (getScrollRestorationKey) {
      let key = getScrollRestorationKey(location, matches.map(m => convertRouteMatchToUiMatch(m, state.loaderData)));
      return key || location.key;
    }
    return location.key;
  }
  function saveScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollPosition) {
      let key = getScrollKey(location, matches);
      savedScrollPositions[key] = getScrollPosition();
    }
  }
  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions) {
      let key = getScrollKey(location, matches);
      let y = savedScrollPositions[key];
      if (typeof y === "number") {
        return y;
      }
    }
    return null;
  }
  function checkFogOfWar(matches, routesToUse, pathname) {
    if (patchRoutesOnNavigationImpl) {
      if (!matches) {
        let fogMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
        return {
          active: true,
          matches: fogMatches || []
        };
      } else {
        if (Object.keys(matches[0].params).length > 0) {
          // If we matched a dynamic param or a splat, it might only be because
          // we haven't yet discovered other routes that would match with a
          // higher score.  Call patchRoutesOnNavigation just to be sure
          let partialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
          return {
            active: true,
            matches: partialMatches
          };
        }
      }
    }
    return {
      active: false,
      matches: null
    };
  }
  async function discoverRoutes(matches, pathname, signal, fetcherKey) {
    if (!patchRoutesOnNavigationImpl) {
      return {
        type: "success",
        matches
      };
    }
    let partialMatches = matches;
    while (true) {
      let isNonHMR = inFlightDataRoutes == null;
      let routesToUse = inFlightDataRoutes || dataRoutes;
      let localManifest = manifest;
      try {
        await patchRoutesOnNavigationImpl({
          signal,
          path: pathname,
          matches: partialMatches,
          fetcherKey,
          patch: (routeId, children) => {
            if (signal.aborted) return;
            patchRoutesImpl(routeId, children, routesToUse, localManifest, mapRouteProperties);
          }
        });
      } catch (e) {
        return {
          type: "error",
          error: e,
          partialMatches
        };
      } finally {
        // If we are not in the middle of an HMR revalidation and we changed the
        // routes, provide a new identity so when we `updateState` at the end of
        // this navigation/fetch `router.routes` will be a new identity and
        // trigger a re-run of memoized `router.routes` dependencies.
        // HMR will already update the identity and reflow when it lands
        // `inFlightDataRoutes` in `completeNavigation`
        if (isNonHMR && !signal.aborted) {
          dataRoutes = [...dataRoutes];
        }
      }
      if (signal.aborted) {
        return {
          type: "aborted"
        };
      }
      let newMatches = matchRoutes(routesToUse, pathname, basename);
      if (newMatches) {
        return {
          type: "success",
          matches: newMatches
        };
      }
      let newPartialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
      // Avoid loops if the second pass results in the same partial matches
      if (!newPartialMatches || partialMatches.length === newPartialMatches.length && partialMatches.every((m, i) => m.route.id === newPartialMatches[i].route.id)) {
        return {
          type: "success",
          matches: null
        };
      }
      partialMatches = newPartialMatches;
    }
  }
  function _internalSetRoutes(newRoutes) {
    manifest = {};
    inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties, undefined, manifest);
  }
  function patchRoutes(routeId, children) {
    let isNonHMR = inFlightDataRoutes == null;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties);
    // If we are not in the middle of an HMR revalidation and we changed the
    // routes, provide a new identity and trigger a reflow via `updateState`
    // to re-run memoized `router.routes` dependencies.
    // HMR will already update the identity and reflow when it lands
    // `inFlightDataRoutes` in `completeNavigation`
    if (isNonHMR) {
      dataRoutes = [...dataRoutes];
      updateState({});
    }
  }
  router = {
    get basename() {
      return basename;
    },
    get future() {
      return future;
    },
    get state() {
      return state;
    },
    get routes() {
      return dataRoutes;
    },
    get window() {
      return routerWindow;
    },
    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch,
    revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: to => init.history.createHref(to),
    encodeLocation: to => init.history.encodeLocation(to),
    getFetcher,
    deleteFetcher: deleteFetcherAndUpdateState,
    dispose,
    getBlocker,
    deleteBlocker,
    patchRoutes,
    _internalFetchControllers: fetchControllers,
    _internalActiveDeferreds: activeDeferreds,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes
  };
  return router;
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////
const UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
function createStaticHandler(routes, opts) {
  invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
  let manifest = {};
  let basename = (opts ? opts.basename : null) || "/";
  let mapRouteProperties;
  if (opts != null && opts.mapRouteProperties) {
    mapRouteProperties = opts.mapRouteProperties;
  } else if (opts != null && opts.detectErrorBoundary) {
    // If they are still using the deprecated version, wrap it with the new API
    let detectErrorBoundary = opts.detectErrorBoundary;
    mapRouteProperties = route => ({
      hasErrorBoundary: detectErrorBoundary(route)
    });
  } else {
    mapRouteProperties = defaultMapRouteProperties;
  }
  // Config driven behavior flags
  let future = _extends({
    v7_relativeSplatPath: false,
    v7_throwAbortReason: false
  }, opts ? opts.future : null);
  let dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties, undefined, manifest);
  /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   *
   * - `opts.requestContext` is an optional server context that will be passed
   *   to actions/loaders in the `context` parameter
   * - `opts.skipLoaderErrorBubbling` is an optional parameter that will prevent
   *   the bubbling of errors which allows single-fetch-type implementations
   *   where the client will handle the bubbling and we may need to return data
   *   for the handling route
   */
  async function query(request, _temp3) {
    let {
      requestContext,
      skipLoaderErrorBubbling,
      dataStrategy
    } = _temp3 === void 0 ? {} : _temp3;
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    // SSR supports HEAD requests while SPA doesn't
    if (!isValidMethod(method) && method !== "HEAD") {
      let error = getInternalRouterError(405, {
        method
      });
      let {
        matches: methodNotAllowedMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: methodNotAllowedMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    } else if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: notFoundMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }
    let result = await queryImpl(request, location, matches, requestContext, dataStrategy || null, skipLoaderErrorBubbling === true, null);
    if (isResponse(result)) {
      return result;
    }
    // When returning StaticHandlerContext, we patch back in the location here
    // since we need it for React Context.  But this helps keep our submit and
    // loadRouteData operating on a Request instead of a Location
    return _extends({
      location,
      basename
    }, result);
  }
  /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   *
   * - `opts.routeId` allows you to specify the specific route handler to call.
   *   If not provided the handler will determine the proper route by matching
   *   against `request.url`
   * - `opts.requestContext` is an optional server context that will be passed
   *    to actions/loaders in the `context` parameter
   */
  async function queryRoute(request, _temp4) {
    let {
      routeId,
      requestContext,
      dataStrategy
    } = _temp4 === void 0 ? {} : _temp4;
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    // SSR supports HEAD requests while SPA doesn't
    if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
      throw getInternalRouterError(405, {
        method
      });
    } else if (!matches) {
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }
    let match = routeId ? matches.find(m => m.route.id === routeId) : getTargetMatch(matches, location);
    if (routeId && !match) {
      throw getInternalRouterError(403, {
        pathname: location.pathname,
        routeId
      });
    } else if (!match) {
      // This should never hit I don't think?
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }
    let result = await queryImpl(request, location, matches, requestContext, dataStrategy || null, false, match);
    if (isResponse(result)) {
      return result;
    }
    let error = result.errors ? Object.values(result.errors)[0] : undefined;
    if (error !== undefined) {
      // If we got back result.errors, that means the loader/action threw
      // _something_ that wasn't a Response, but it's not guaranteed/required
      // to be an `instanceof Error` either, so we have to use throw here to
      // preserve the "error" state outside of queryImpl.
      throw error;
    }
    // Pick off the right state value to return
    if (result.actionData) {
      return Object.values(result.actionData)[0];
    }
    if (result.loaderData) {
      var _result$activeDeferre;
      let data = Object.values(result.loaderData)[0];
      if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) {
        data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
      }
      return data;
    }
    return undefined;
  }
  async function queryImpl(request, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch) {
    invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
    try {
      if (isMutationMethod(request.method.toLowerCase())) {
        let result = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch != null);
        return result;
      }
      let result = await loadRouteData(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch);
      return isResponse(result) ? result : _extends({}, result, {
        actionData: null,
        actionHeaders: {}
      });
    } catch (e) {
      // If the user threw/returned a Response in callLoaderOrAction for a
      // `queryRoute` call, we throw the `DataStrategyResult` to bail out early
      // and then return or throw the raw Response here accordingly
      if (isDataStrategyResult(e) && isResponse(e.result)) {
        if (e.type === ResultType.error) {
          throw e.result;
        }
        return e.result;
      }
      // Redirects are always returned since they don't propagate to catch
      // boundaries
      if (isRedirectResponse(e)) {
        return e;
      }
      throw e;
    }
  }
  async function submit(request, matches, actionMatch, requestContext, dataStrategy, skipLoaderErrorBubbling, isRouteRequest) {
    let result;
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      let error = getInternalRouterError(405, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: actionMatch.route.id
      });
      if (isRouteRequest) {
        throw error;
      }
      result = {
        type: ResultType.error,
        error
      };
    } else {
      let results = await callDataStrategy("action", request, [actionMatch], matches, isRouteRequest, requestContext, dataStrategy);
      result = results[actionMatch.route.id];
      if (request.signal.aborted) {
        throwStaticHandlerAbortedError(request, isRouteRequest, future);
      }
    }
    if (isRedirectResult(result)) {
      // Uhhhh - this should never happen, we should always throw these from
      // callLoaderOrAction, but the type narrowing here keeps TS happy and we
      // can get back on the "throw all redirect responses" train here should
      // this ever happen :/
      throw new Response(null, {
        status: result.response.status,
        headers: {
          Location: result.response.headers.get("Location")
        }
      });
    }
    if (isDeferredResult(result)) {
      let error = getInternalRouterError(400, {
        type: "defer-action"
      });
      if (isRouteRequest) {
        throw error;
      }
      result = {
        type: ResultType.error,
        error
      };
    }
    if (isRouteRequest) {
      // Note: This should only be non-Response values if we get here, since
      // isRouteRequest should throw any Response received in callLoaderOrAction
      if (isErrorResult(result)) {
        throw result.error;
      }
      return {
        matches: [actionMatch],
        loaderData: {},
        actionData: {
          [actionMatch.route.id]: result.data
        },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }
    // Create a GET request for the loaders
    let loaderRequest = new Request(request.url, {
      headers: request.headers,
      redirect: request.redirect,
      signal: request.signal
    });
    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
      let context = await loadRouteData(loaderRequest, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, null, [boundaryMatch.route.id, result]);
      // action status codes take precedence over loader status codes
      return _extends({}, context, {
        statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
        actionData: null,
        actionHeaders: _extends({}, result.headers ? {
          [actionMatch.route.id]: result.headers
        } : {})
      });
    }
    let context = await loadRouteData(loaderRequest, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, null);
    return _extends({}, context, {
      actionData: {
        [actionMatch.route.id]: result.data
      }
    }, result.statusCode ? {
      statusCode: result.statusCode
    } : {}, {
      actionHeaders: result.headers ? {
        [actionMatch.route.id]: result.headers
      } : {}
    });
  }
  async function loadRouteData(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, pendingActionResult) {
    let isRouteRequest = routeMatch != null;
    // Short circuit if we have no loaders to run (queryRoute())
    if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) {
      throw getInternalRouterError(400, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: routeMatch == null ? void 0 : routeMatch.route.id
      });
    }
    let requestMatches = routeMatch ? [routeMatch] : pendingActionResult && isErrorResult(pendingActionResult[1]) ? getLoaderMatchesUntilBoundary(matches, pendingActionResult[0]) : matches;
    let matchesToLoad = requestMatches.filter(m => m.route.loader || m.route.lazy);
    // Short circuit if we have no loaders to run (query())
    if (matchesToLoad.length === 0) {
      return {
        matches,
        // Add a null for all matched routes for proper revalidation on the client
        loaderData: matches.reduce((acc, m) => Object.assign(acc, {
          [m.route.id]: null
        }), {}),
        errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
          [pendingActionResult[0]]: pendingActionResult[1].error
        } : null,
        statusCode: 200,
        loaderHeaders: {},
        activeDeferreds: null
      };
    }
    let results = await callDataStrategy("loader", request, matchesToLoad, matches, isRouteRequest, requestContext, dataStrategy);
    if (request.signal.aborted) {
      throwStaticHandlerAbortedError(request, isRouteRequest, future);
    }
    // Process and commit output from loaders
    let activeDeferreds = new Map();
    let context = processRouteLoaderData(matches, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling);
    // Add a null for any non-loader matches for proper revalidation on the client
    let executedLoaders = new Set(matchesToLoad.map(match => match.route.id));
    matches.forEach(match => {
      if (!executedLoaders.has(match.route.id)) {
        context.loaderData[match.route.id] = null;
      }
    });
    return _extends({}, context, {
      matches,
      activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
    });
  }
  // Utility wrapper for calling dataStrategy server-side without having to
  // pass around the manifest, mapRouteProperties, etc.
  async function callDataStrategy(type, request, matchesToLoad, matches, isRouteRequest, requestContext, dataStrategy) {
    let results = await callDataStrategyImpl(dataStrategy || defaultDataStrategy, type, null, request, matchesToLoad, matches, null, manifest, mapRouteProperties, requestContext);
    let dataResults = {};
    await Promise.all(matches.map(async match => {
      if (!(match.route.id in results)) {
        return;
      }
      let result = results[match.route.id];
      if (isRedirectDataStrategyResultResult(result)) {
        let response = result.result;
        // Throw redirects and let the server handle them with an HTTP redirect
        throw normalizeRelativeRoutingRedirectResponse(response, request, match.route.id, matches, basename, future.v7_relativeSplatPath);
      }
      if (isResponse(result.result) && isRouteRequest) {
        // For SSR single-route requests, we want to hand Responses back
        // directly without unwrapping
        throw result;
      }
      dataResults[match.route.id] = await convertDataStrategyResultToDataResult(result);
    }));
    return dataResults;
  }
  return {
    dataRoutes,
    query,
    queryRoute
  };
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////
/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */
function getStaticContextFromError(routes, context, error) {
  let newContext = _extends({}, context, {
    statusCode: isRouteErrorResponse(error) ? error.status : 500,
    errors: {
      [context._deepestRenderedBoundaryId || routes[0].id]: error
    }
  });
  return newContext;
}
function throwStaticHandlerAbortedError(request, isRouteRequest, future) {
  if (future.v7_throwAbortReason && request.signal.reason !== undefined) {
    throw request.signal.reason;
  }
  let method = isRouteRequest ? "queryRoute" : "query";
  throw new Error(method + "() call aborted: " + request.method + " " + request.url);
}
function isSubmissionNavigation(opts) {
  return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== undefined);
}
function normalizeTo(location, matches, basename, prependBasename, to, v7_relativeSplatPath, fromRouteId, relative) {
  let contextualMatches;
  let activeRouteMatch;
  if (fromRouteId) {
    // Grab matches up to the calling route so our route-relative logic is
    // relative to the correct source route
    contextualMatches = [];
    for (let match of matches) {
      contextualMatches.push(match);
      if (match.route.id === fromRouteId) {
        activeRouteMatch = match;
        break;
      }
    }
  } else {
    contextualMatches = matches;
    activeRouteMatch = matches[matches.length - 1];
  }
  // Resolve the relative path
  let path = resolveTo(to ? to : ".", getResolveToMatches(contextualMatches, v7_relativeSplatPath), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
  // When `to` is not specified we inherit search/hash from the current
  // location, unlike when to="." and we just inherit the path.
  // See https://github.com/remix-run/remix/issues/927
  if (to == null) {
    path.search = location.search;
    path.hash = location.hash;
  }
  // Account for `?index` params when routing to the current location
  if ((to == null || to === "" || to === ".") && activeRouteMatch) {
    let nakedIndex = hasNakedIndexQuery(path.search);
    if (activeRouteMatch.route.index && !nakedIndex) {
      // Add one when we're targeting an index route
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    } else if (!activeRouteMatch.route.index && nakedIndex) {
      // Remove existing ones when we're not
      let params = new URLSearchParams(path.search);
      let indexValues = params.getAll("index");
      params.delete("index");
      indexValues.filter(v => v).forEach(v => params.append("index", v));
      let qs = params.toString();
      path.search = qs ? "?" + qs : "";
    }
  }
  // If we're operating within a basename, prepend it to the pathname.  If
  // this is a root navigation, then just use the raw basename which allows
  // the basename to have full control over the presence of a trailing slash
  // on root actions
  if (prependBasename && basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
// Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
  // Return location verbatim on non-submission navigations
  if (!opts || !isSubmissionNavigation(opts)) {
    return {
      path
    };
  }
  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, {
        method: opts.formMethod
      })
    };
  }
  let getInvalidBodyError = () => ({
    path,
    error: getInternalRouterError(400, {
      type: "invalid-body"
    })
  });
  // Create a Submission on non-GET navigations
  let rawFormMethod = opts.formMethod || "get";
  let formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase();
  let formAction = stripHashFromPath(path);
  if (opts.body !== undefined) {
    if (opts.formEncType === "text/plain") {
      // text only support POST/PUT/PATCH/DELETE submissions
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ?
      // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
      Array.from(opts.body.entries()).reduce((acc, _ref3) => {
        let [name, value] = _ref3;
        return "" + acc + name + "=" + value + "\n";
      }, "") : String(opts.body);
      return {
        path,
        submission: {
          formMethod,
          formAction,
          formEncType: opts.formEncType,
          formData: undefined,
          json: undefined,
          text
        }
      };
    } else if (opts.formEncType === "application/json") {
      // json only supports POST/PUT/PATCH/DELETE submissions
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      try {
        let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
        return {
          path,
          submission: {
            formMethod,
            formAction,
            formEncType: opts.formEncType,
            formData: undefined,
            json,
            text: undefined
          }
        };
      } catch (e) {
        return getInvalidBodyError();
      }
    }
  }
  invariant(typeof FormData === "function", "FormData is not available in this environment");
  let searchParams;
  let formData;
  if (opts.formData) {
    searchParams = convertFormDataToSearchParams(opts.formData);
    formData = opts.formData;
  } else if (opts.body instanceof FormData) {
    searchParams = convertFormDataToSearchParams(opts.body);
    formData = opts.body;
  } else if (opts.body instanceof URLSearchParams) {
    searchParams = opts.body;
    formData = convertSearchParamsToFormData(searchParams);
  } else if (opts.body == null) {
    searchParams = new URLSearchParams();
    formData = new FormData();
  } else {
    try {
      searchParams = new URLSearchParams(opts.body);
      formData = convertSearchParamsToFormData(searchParams);
    } catch (e) {
      return getInvalidBodyError();
    }
  }
  let submission = {
    formMethod,
    formAction,
    formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
    formData,
    json: undefined,
    text: undefined
  };
  if (isMutationMethod(submission.formMethod)) {
    return {
      path,
      submission
    };
  }
  // Flatten submission onto URLSearchParams for GET submissions
  let parsedPath = parsePath(path);
  // On GET navigation submissions we can drop the ?index param from the
  // resulting location since all loaders will run.  But fetcher GET submissions
  // only run a single loader so we need to preserve any incoming ?index params
  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
    searchParams.append("index", "");
  }
  parsedPath.search = "?" + searchParams;
  return {
    path: createPath(parsedPath),
    submission
  };
}
// Filter out all routes at/below any caught error as they aren't going to
// render so we don't need to load them
function getLoaderMatchesUntilBoundary(matches, boundaryId, includeBoundary) {
  if (includeBoundary === void 0) {
    includeBoundary = false;
  }
  let index = matches.findIndex(m => m.route.id === boundaryId);
  if (index >= 0) {
    return matches.slice(0, includeBoundary ? index + 1 : index);
  }
  return matches;
}
function getMatchesToLoad(history, state, matches, submission, location, initialHydration, skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult) {
  let actionResult = pendingActionResult ? isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : undefined;
  let currentUrl = history.createURL(state.location);
  let nextUrl = history.createURL(location);
  // Pick navigation matches that are net-new or qualify for revalidation
  let boundaryMatches = matches;
  if (initialHydration && state.errors) {
    // On initial hydration, only consider matches up to _and including_ the boundary.
    // This is inclusive to handle cases where a server loader ran successfully,
    // a child server loader bubbled up to this route, but this route has
    // `clientLoader.hydrate` so we want to still run the `clientLoader` so that
    // we have a complete version of `loaderData`
    boundaryMatches = getLoaderMatchesUntilBoundary(matches, Object.keys(state.errors)[0], true);
  } else if (pendingActionResult && isErrorResult(pendingActionResult[1])) {
    // If an action threw an error, we call loaders up to, but not including the
    // boundary
    boundaryMatches = getLoaderMatchesUntilBoundary(matches, pendingActionResult[0]);
  }
  // Don't revalidate loaders by default after action 4xx/5xx responses
  // when the flag is enabled.  They can still opt-into revalidation via
  // `shouldRevalidate` via `actionResult`
  let actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : undefined;
  let shouldSkipRevalidation = skipActionErrorRevalidation && actionStatus && actionStatus >= 400;
  let navigationMatches = boundaryMatches.filter((match, index) => {
    let {
      route
    } = match;
    if (route.lazy) {
      // We haven't loaded this route yet so we don't know if it's got a loader!
      return true;
    }
    if (route.loader == null) {
      return false;
    }
    if (initialHydration) {
      return shouldLoadRouteOnHydration(route, state.loaderData, state.errors);
    }
    // Always call the loader on new route instances and pending defer cancellations
    if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some(id => id === match.route.id)) {
      return true;
    }
    // This is the default implementation for when we revalidate.  If the route
    // provides it's own implementation, then we give them full control but
    // provide this value so they can leverage it if needed after they check
    // their own specific use cases
    let currentRouteMatch = state.matches[index];
    let nextRouteMatch = match;
    return shouldRevalidateLoader(match, _extends({
      currentUrl,
      currentParams: currentRouteMatch.params,
      nextUrl,
      nextParams: nextRouteMatch.params
    }, submission, {
      actionResult,
      actionStatus,
      defaultShouldRevalidate: shouldSkipRevalidation ? false :
      // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
      isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search ||
      // Search params affect all loaders
      currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
    }));
  });
  // Pick fetcher.loads that need to be revalidated
  let revalidatingFetchers = [];
  fetchLoadMatches.forEach((f, key) => {
    // Don't revalidate:
    //  - on initial hydration (shouldn't be any fetchers then anyway)
    //  - if fetcher won't be present in the subsequent render
    //    - no longer matches the URL (v7_fetcherPersist=false)
    //    - was unmounted but persisted due to v7_fetcherPersist=true
    if (initialHydration || !matches.some(m => m.route.id === f.routeId) || deletedFetchers.has(key)) {
      return;
    }
    let fetcherMatches = matchRoutes(routesToUse, f.path, basename);
    // If the fetcher path no longer matches, push it in with null matches so
    // we can trigger a 404 in callLoadersAndMaybeResolveData.  Note this is
    // currently only a use-case for Remix HMR where the route tree can change
    // at runtime and remove a route previously loaded via a fetcher
    if (!fetcherMatches) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: null,
        match: null,
        controller: null
      });
      return;
    }
    // Revalidating fetchers are decoupled from the route matches since they
    // load from a static href.  They revalidate based on explicit revalidation
    // (submission, useRevalidator, or X-Remix-Revalidate)
    let fetcher = state.fetchers.get(key);
    let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
    let shouldRevalidate = false;
    if (fetchRedirectIds.has(key)) {
      // Never trigger a revalidation of an actively redirecting fetcher
      shouldRevalidate = false;
    } else if (cancelledFetcherLoads.has(key)) {
      // Always mark for revalidation if the fetcher was cancelled
      cancelledFetcherLoads.delete(key);
      shouldRevalidate = true;
    } else if (fetcher && fetcher.state !== "idle" && fetcher.data === undefined) {
      // If the fetcher hasn't ever completed loading yet, then this isn't a
      // revalidation, it would just be a brand new load if an explicit
      // revalidation is required
      shouldRevalidate = isRevalidationRequired;
    } else {
      // Otherwise fall back on any user-defined shouldRevalidate, defaulting
      // to explicit revalidations only
      shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
        currentUrl,
        currentParams: state.matches[state.matches.length - 1].params,
        nextUrl,
        nextParams: matches[matches.length - 1].params
      }, submission, {
        actionResult,
        actionStatus,
        defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired
      }));
    }
    if (shouldRevalidate) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: fetcherMatches,
        match: fetcherMatch,
        controller: new AbortController()
      });
    }
  });
  return [navigationMatches, revalidatingFetchers];
}
function shouldLoadRouteOnHydration(route, loaderData, errors) {
  // We dunno if we have a loader - gotta find out!
  if (route.lazy) {
    return true;
  }
  // No loader, nothing to initialize
  if (!route.loader) {
    return false;
  }
  let hasData = loaderData != null && loaderData[route.id] !== undefined;
  let hasError = errors != null && errors[route.id] !== undefined;
  // Don't run if we error'd during SSR
  if (!hasData && hasError) {
    return false;
  }
  // Explicitly opting-in to running on hydration
  if (typeof route.loader === "function" && route.loader.hydrate === true) {
    return true;
  }
  // Otherwise, run if we're not yet initialized with anything
  return !hasData && !hasError;
}
function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew =
  // [a] -> [a, b]
  !currentMatch ||
  // [a, b] -> [a, c]
  match.route.id !== currentMatch.route.id;
  // Handle the case that we don't have data for a re-used route, potentially
  // from a prior error or from a cancelled pending deferred
  let isMissingData = currentLoaderData[match.route.id] === undefined;
  // Always load if this is a net-new route or we don't yet have data
  return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname ||
    // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}
function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    let routeChoice = loaderMatch.route.shouldRevalidate(arg);
    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }
  return arg.defaultShouldRevalidate;
}
function patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties) {
  var _childrenToPatch;
  let childrenToPatch;
  if (routeId) {
    let route = manifest[routeId];
    invariant(route, "No route found to patch children into: routeId = " + routeId);
    if (!route.children) {
      route.children = [];
    }
    childrenToPatch = route.children;
  } else {
    childrenToPatch = routesToUse;
  }
  // Don't patch in routes we already know about so that `patch` is idempotent
  // to simplify user-land code. This is useful because we re-call the
  // `patchRoutesOnNavigation` function for matched routes with params.
  let uniqueChildren = children.filter(newRoute => !childrenToPatch.some(existingRoute => isSameRoute(newRoute, existingRoute)));
  let newRoutes = convertRoutesToDataRoutes(uniqueChildren, mapRouteProperties, [routeId || "_", "patch", String(((_childrenToPatch = childrenToPatch) == null ? void 0 : _childrenToPatch.length) || "0")], manifest);
  childrenToPatch.push(...newRoutes);
}
function isSameRoute(newRoute, existingRoute) {
  // Most optimal check is by id
  if ("id" in newRoute && "id" in existingRoute && newRoute.id === existingRoute.id) {
    return true;
  }
  // Second is by pathing differences
  if (!(newRoute.index === existingRoute.index && newRoute.path === existingRoute.path && newRoute.caseSensitive === existingRoute.caseSensitive)) {
    return false;
  }
  // Pathless layout routes are trickier since we need to check children.
  // If they have no children then they're the same as far as we can tell
  if ((!newRoute.children || newRoute.children.length === 0) && (!existingRoute.children || existingRoute.children.length === 0)) {
    return true;
  }
  // Otherwise, we look to see if every child in the new route is already
  // represented in the existing route's children
  return newRoute.children.every((aChild, i) => {
    var _existingRoute$childr;
    return (_existingRoute$childr = existingRoute.children) == null ? void 0 : _existingRoute$childr.some(bChild => isSameRoute(aChild, bChild));
  });
}
/**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */
async function loadLazyRouteModule(route, mapRouteProperties, manifest) {
  if (!route.lazy) {
    return;
  }
  let lazyRoute = await route.lazy();
  // If the lazy route function was executed and removed by another parallel
  // call then we can return - first lazy() to finish wins because the return
  // value of lazy is expected to be static
  if (!route.lazy) {
    return;
  }
  let routeToUpdate = manifest[route.id];
  invariant(routeToUpdate, "No route found in manifest");
  // Update the route in place.  This should be safe because there's no way
  // we could yet be sitting on this route as we can't get there without
  // resolving lazy() first.
  //
  // This is different than the HMR "update" use-case where we may actively be
  // on the route being updated.  The main concern boils down to "does this
  // mutation affect any ongoing navigations or any current state.matches
  // values?".  If not, it should be safe to update in place.
  let routeUpdates = {};
  for (let lazyRouteProperty in lazyRoute) {
    let staticRouteValue = routeToUpdate[lazyRouteProperty];
    let isPropertyStaticallyDefined = staticRouteValue !== undefined &&
    // This property isn't static since it should always be updated based
    // on the route updates
    lazyRouteProperty !== "hasErrorBoundary";
    warning(!isPropertyStaticallyDefined, "Route \"" + routeToUpdate.id + "\" has a static property \"" + lazyRouteProperty + "\" " + "defined but its lazy function is also returning a value for this property. " + ("The lazy route property \"" + lazyRouteProperty + "\" will be ignored."));
    if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
      routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    }
  }
  // Mutate the route with the provided updates.  Do this first so we pass
  // the updated version to mapRouteProperties
  Object.assign(routeToUpdate, routeUpdates);
  // Mutate the `hasErrorBoundary` property on the route based on the route
  // updates and remove the `lazy` function so we don't resolve the lazy
  // route again.
  Object.assign(routeToUpdate, _extends({}, mapRouteProperties(routeToUpdate), {
    lazy: undefined
  }));
}
// Default implementation of `dataStrategy` which fetches all loaders in parallel
async function defaultDataStrategy(_ref4) {
  let {
    matches
  } = _ref4;
  let matchesToLoad = matches.filter(m => m.shouldLoad);
  let results = await Promise.all(matchesToLoad.map(m => m.resolve()));
  return results.reduce((acc, result, i) => Object.assign(acc, {
    [matchesToLoad[i].route.id]: result
  }), {});
}
async function callDataStrategyImpl(dataStrategyImpl, type, state, request, matchesToLoad, matches, fetcherKey, manifest, mapRouteProperties, requestContext) {
  let loadRouteDefinitionsPromises = matches.map(m => m.route.lazy ? loadLazyRouteModule(m.route, mapRouteProperties, manifest) : undefined);
  let dsMatches = matches.map((match, i) => {
    let loadRoutePromise = loadRouteDefinitionsPromises[i];
    let shouldLoad = matchesToLoad.some(m => m.route.id === match.route.id);
    // `resolve` encapsulates route.lazy(), executing the loader/action,
    // and mapping return values/thrown errors to a `DataStrategyResult`.  Users
    // can pass a callback to take fine-grained control over the execution
    // of the loader/action
    let resolve = async handlerOverride => {
      if (handlerOverride && request.method === "GET" && (match.route.lazy || match.route.loader)) {
        shouldLoad = true;
      }
      return shouldLoad ? callLoaderOrAction(type, request, match, loadRoutePromise, handlerOverride, requestContext) : Promise.resolve({
        type: ResultType.data,
        result: undefined
      });
    };
    return _extends({}, match, {
      shouldLoad,
      resolve
    });
  });
  // Send all matches here to allow for a middleware-type implementation.
  // handler will be a no-op for unneeded routes and we filter those results
  // back out below.
  let results = await dataStrategyImpl({
    matches: dsMatches,
    request,
    params: matches[0].params,
    fetcherKey,
    context: requestContext
  });
  // Wait for all routes to load here but 'swallow the error since we want
  // it to bubble up from the `await loadRoutePromise` in `callLoaderOrAction` -
  // called from `match.resolve()`
  try {
    await Promise.all(loadRouteDefinitionsPromises);
  } catch (e) {
    // No-op
  }
  return results;
}
// Default logic for calling a loader/action is the user has no specified a dataStrategy
async function callLoaderOrAction(type, request, match, loadRoutePromise, handlerOverride, staticContext) {
  let result;
  let onReject;
  let runHandler = handler => {
    // Setup a promise we can race against so that abort signals short circuit
    let reject;
    // This will never resolve so safe to type it as Promise<DataStrategyResult> to
    // satisfy the function return value
    let abortPromise = new Promise((_, r) => reject = r);
    onReject = () => reject();
    request.signal.addEventListener("abort", onReject);
    let actualHandler = ctx => {
      if (typeof handler !== "function") {
        return Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ("\"" + type + "\" [routeId: " + match.route.id + "]")));
      }
      return handler({
        request,
        params: match.params,
        context: staticContext
      }, ...(ctx !== undefined ? [ctx] : []));
    };
    let handlerPromise = (async () => {
      try {
        let val = await (handlerOverride ? handlerOverride(ctx => actualHandler(ctx)) : actualHandler());
        return {
          type: "data",
          result: val
        };
      } catch (e) {
        return {
          type: "error",
          result: e
        };
      }
    })();
    return Promise.race([handlerPromise, abortPromise]);
  };
  try {
    let handler = match.route[type];
    // If we have a route.lazy promise, await that first
    if (loadRoutePromise) {
      if (handler) {
        // Run statically defined handler in parallel with lazy()
        let handlerError;
        let [value] = await Promise.all([
        // If the handler throws, don't let it immediately bubble out,
        // since we need to let the lazy() execution finish so we know if this
        // route has a boundary that can handle the error
        runHandler(handler).catch(e => {
          handlerError = e;
        }), loadRoutePromise]);
        if (handlerError !== undefined) {
          throw handlerError;
        }
        result = value;
      } else {
        // Load lazy route module, then run any returned handler
        await loadRoutePromise;
        handler = match.route[type];
        if (handler) {
          // Handler still runs even if we got interrupted to maintain consistency
          // with un-abortable behavior of handler execution on non-lazy or
          // previously-lazy-loaded routes
          result = await runHandler(handler);
        } else if (type === "action") {
          let url = new URL(request.url);
          let pathname = url.pathname + url.search;
          throw getInternalRouterError(405, {
            method: request.method,
            pathname,
            routeId: match.route.id
          });
        } else {
          // lazy() route has no loader to run.  Short circuit here so we don't
          // hit the invariant below that errors on returning undefined.
          return {
            type: ResultType.data,
            result: undefined
          };
        }
      }
    } else if (!handler) {
      let url = new URL(request.url);
      let pathname = url.pathname + url.search;
      throw getInternalRouterError(404, {
        pathname
      });
    } else {
      result = await runHandler(handler);
    }
    invariant(result.result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ("\"" + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
  } catch (e) {
    // We should already be catching and converting normal handler executions to
    // DataStrategyResults and returning them, so anything that throws here is an
    // unexpected error we still need to wrap
    return {
      type: ResultType.error,
      result: e
    };
  } finally {
    if (onReject) {
      request.signal.removeEventListener("abort", onReject);
    }
  }
  return result;
}
async function convertDataStrategyResultToDataResult(dataStrategyResult) {
  let {
    result,
    type
  } = dataStrategyResult;
  if (isResponse(result)) {
    let data;
    try {
      let contentType = result.headers.get("Content-Type");
      // Check between word boundaries instead of startsWith() due to the last
      // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type
      if (contentType && /\bapplication\/json\b/.test(contentType)) {
        if (result.body == null) {
          data = null;
        } else {
          data = await result.json();
        }
      } else {
        data = await result.text();
      }
    } catch (e) {
      return {
        type: ResultType.error,
        error: e
      };
    }
    if (type === ResultType.error) {
      return {
        type: ResultType.error,
        error: new ErrorResponseImpl(result.status, result.statusText, data),
        statusCode: result.status,
        headers: result.headers
      };
    }
    return {
      type: ResultType.data,
      data,
      statusCode: result.status,
      headers: result.headers
    };
  }
  if (type === ResultType.error) {
    if (isDataWithResponseInit(result)) {
      var _result$init3, _result$init4;
      if (result.data instanceof Error) {
        var _result$init, _result$init2;
        return {
          type: ResultType.error,
          error: result.data,
          statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
          headers: (_result$init2 = result.init) != null && _result$init2.headers ? new Headers(result.init.headers) : undefined
        };
      }
      // Convert thrown data() to ErrorResponse instances
      return {
        type: ResultType.error,
        error: new ErrorResponseImpl(((_result$init3 = result.init) == null ? void 0 : _result$init3.status) || 500, undefined, result.data),
        statusCode: isRouteErrorResponse(result) ? result.status : undefined,
        headers: (_result$init4 = result.init) != null && _result$init4.headers ? new Headers(result.init.headers) : undefined
      };
    }
    return {
      type: ResultType.error,
      error: result,
      statusCode: isRouteErrorResponse(result) ? result.status : undefined
    };
  }
  if (isDeferredData(result)) {
    var _result$init5, _result$init6;
    return {
      type: ResultType.deferred,
      deferredData: result,
      statusCode: (_result$init5 = result.init) == null ? void 0 : _result$init5.status,
      headers: ((_result$init6 = result.init) == null ? void 0 : _result$init6.headers) && new Headers(result.init.headers)
    };
  }
  if (isDataWithResponseInit(result)) {
    var _result$init7, _result$init8;
    return {
      type: ResultType.data,
      data: result.data,
      statusCode: (_result$init7 = result.init) == null ? void 0 : _result$init7.status,
      headers: (_result$init8 = result.init) != null && _result$init8.headers ? new Headers(result.init.headers) : undefined
    };
  }
  return {
    type: ResultType.data,
    data: result
  };
}
// Support relative routing in internal redirects
function normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename, v7_relativeSplatPath) {
  let location = response.headers.get("Location");
  invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
  if (!ABSOLUTE_URL_REGEX.test(location)) {
    let trimmedMatches = matches.slice(0, matches.findIndex(m => m.route.id === routeId) + 1);
    location = normalizeTo(new URL(request.url), trimmedMatches, basename, true, location, v7_relativeSplatPath);
    response.headers.set("Location", location);
  }
  return response;
}
function normalizeRedirectLocation(location, currentUrl, basename) {
  if (ABSOLUTE_URL_REGEX.test(location)) {
    // Strip off the protocol+origin for same-origin + same-basename absolute redirects
    let normalizedLocation = location;
    let url = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
    let isSameBasename = stripBasename(url.pathname, basename) != null;
    if (url.origin === currentUrl.origin && isSameBasename) {
      return url.pathname + url.search + url.hash;
    }
  }
  return location;
}
// Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function createClientSideRequest(history, location, signal, submission) {
  let url = history.createURL(stripHashFromPath(location)).toString();
  let init = {
    signal
  };
  if (submission && isMutationMethod(submission.formMethod)) {
    let {
      formMethod,
      formEncType
    } = submission;
    // Didn't think we needed this but it turns out unlike other methods, patch
    // won't be properly normalized to uppercase and results in a 405 error.
    // See: https://fetch.spec.whatwg.org/#concept-method
    init.method = formMethod.toUpperCase();
    if (formEncType === "application/json") {
      init.headers = new Headers({
        "Content-Type": formEncType
      });
      init.body = JSON.stringify(submission.json);
    } else if (formEncType === "text/plain") {
      // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
      init.body = submission.text;
    } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
      // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
      init.body = convertFormDataToSearchParams(submission.formData);
    } else {
      // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
      init.body = submission.formData;
    }
  }
  return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();
  for (let [key, value] of formData.entries()) {
    // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
    searchParams.append(key, typeof value === "string" ? value : value.name);
  }
  return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
  let formData = new FormData();
  for (let [key, value] of searchParams.entries()) {
    formData.append(key, value);
  }
  return formData;
}
function processRouteLoaderData(matches, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling) {
  // Fill in loaderData/errors from our loaders
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {};
  let pendingError = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : undefined;
  // Process loader results into state.loaderData/state.errors
  matches.forEach(match => {
    if (!(match.route.id in results)) {
      return;
    }
    let id = match.route.id;
    let result = results[id];
    invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
    if (isErrorResult(result)) {
      let error = result.error;
      // If we have a pending action error, we report it at the highest-route
      // that throws a loader error, and then clear it out to indicate that
      // it was consumed
      if (pendingError !== undefined) {
        error = pendingError;
        pendingError = undefined;
      }
      errors = errors || {};
      if (skipLoaderErrorBubbling) {
        errors[id] = error;
      } else {
        // Look upwards from the matched route for the closest ancestor error
        // boundary, defaulting to the root match.  Prefer higher error values
        // if lower errors bubble to the same boundary
        let boundaryMatch = findNearestBoundary(matches, id);
        if (errors[boundaryMatch.route.id] == null) {
          errors[boundaryMatch.route.id] = error;
        }
      }
      // Clear our any prior loaderData for the throwing route
      loaderData[id] = undefined;
      // Once we find our first (highest) error, we set the status code and
      // prevent deeper status codes from overriding
      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else {
      if (isDeferredResult(result)) {
        activeDeferreds.set(id, result.deferredData);
        loaderData[id] = result.deferredData.data;
        // Error status codes always override success status codes, but if all
        // loaders are successful we take the deepest status code.
        if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
          statusCode = result.statusCode;
        }
        if (result.headers) {
          loaderHeaders[id] = result.headers;
        }
      } else {
        loaderData[id] = result.data;
        // Error status codes always override success status codes, but if all
        // loaders are successful we take the deepest status code.
        if (result.statusCode && result.statusCode !== 200 && !foundError) {
          statusCode = result.statusCode;
        }
        if (result.headers) {
          loaderHeaders[id] = result.headers;
        }
      }
    }
  });
  // If we didn't consume the pending action error (i.e., all loaders
  // resolved), then consume it here.  Also clear out any loaderData for the
  // throwing route
  if (pendingError !== undefined && pendingActionResult) {
    errors = {
      [pendingActionResult[0]]: pendingError
    };
    loaderData[pendingActionResult[0]] = undefined;
  }
  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}
function processLoaderData(state, matches, results, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds) {
  let {
    loaderData,
    errors
  } = processRouteLoaderData(matches, results, pendingActionResult, activeDeferreds, false // This method is only called client side so we always want to bubble
  );
  // Process results from our revalidating fetchers
  revalidatingFetchers.forEach(rf => {
    let {
      key,
      match,
      controller
    } = rf;
    let result = fetcherResults[key];
    invariant(result, "Did not find corresponding fetcher result");
    // Process fetcher non-redirect errors
    if (controller && controller.signal.aborted) {
      // Nothing to do for aborted fetchers
      return;
    } else if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = _extends({}, errors, {
          [boundaryMatch.route.id]: result.error
        });
      }
      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      // Should never get here, redirects should get processed above, but we
      // keep this to type narrow to a success result in the else
      invariant(false, "Unhandled fetcher revalidation redirect");
    } else if (isDeferredResult(result)) {
      // Should never get here, deferred data should be awaited for fetchers
      // in resolveDeferredResults
      invariant(false, "Unhandled fetcher deferred data");
    } else {
      let doneFetcher = getDoneFetcher(result.data);
      state.fetchers.set(key, doneFetcher);
    }
  });
  return {
    loaderData,
    errors
  };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = _extends({}, newLoaderData);
  for (let match of matches) {
    let id = match.route.id;
    if (newLoaderData.hasOwnProperty(id)) {
      if (newLoaderData[id] !== undefined) {
        mergedLoaderData[id] = newLoaderData[id];
      }
    } else if (loaderData[id] !== undefined && match.route.loader) {
      // Preserve existing keys not included in newLoaderData and where a loader
      // wasn't removed by HMR
      mergedLoaderData[id] = loaderData[id];
    }
    if (errors && errors.hasOwnProperty(id)) {
      // Don't keep any loader data below the boundary
      break;
    }
  }
  return mergedLoaderData;
}
function getActionDataForCommit(pendingActionResult) {
  if (!pendingActionResult) {
    return {};
  }
  return isErrorResult(pendingActionResult[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [pendingActionResult[0]]: pendingActionResult[1].data
    }
  };
}
// Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex(m => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find(m => m.route.hasErrorBoundary === true) || matches[0];
}
function getShortCircuitMatches(routes) {
  // Prefer a root layout route if present, otherwise shim in a route object
  let route = routes.length === 1 ? routes[0] : routes.find(r => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route
    }],
    route
  };
}
function getInternalRouterError(status, _temp5) {
  let {
    pathname,
    routeId,
    method,
    type,
    message
  } = _temp5 === void 0 ? {} : _temp5;
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";
  if (status === 400) {
    statusText = "Bad Request";
    if (method && pathname && routeId) {
      errorMessage = "You made a " + method + " request to \"" + pathname + "\" but " + ("did not provide a `loader` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (type === "defer-action") {
      errorMessage = "defer() is not supported in actions";
    } else if (type === "invalid-body") {
      errorMessage = "Unable to encode submission body";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = "Route \"" + routeId + "\" does not match URL \"" + pathname + "\"";
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = "No route matches URL \"" + pathname + "\"";
  } else if (status === 405) {
    statusText = "Method Not Allowed";
    if (method && pathname && routeId) {
      errorMessage = "You made a " + method.toUpperCase() + " request to \"" + pathname + "\" but " + ("did not provide an `action` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (method) {
      errorMessage = "Invalid request method \"" + method.toUpperCase() + "\"";
    }
  }
  return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
}
// Find any returned redirect errors, starting from the lowest match
function findRedirect(results) {
  let entries = Object.entries(results);
  for (let i = entries.length - 1; i >= 0; i--) {
    let [key, result] = entries[i];
    if (isRedirectResult(result)) {
      return {
        key,
        result
      };
    }
  }
}
function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath(_extends({}, parsedPath, {
    hash: ""
  }));
}
function isHashChangeOnly(a, b) {
  if (a.pathname !== b.pathname || a.search !== b.search) {
    return false;
  }
  if (a.hash === "") {
    // /page -> /page#hash
    return b.hash !== "";
  } else if (a.hash === b.hash) {
    // /page#hash -> /page#hash
    return true;
  } else if (b.hash !== "") {
    // /page#hash -> /page#other
    return true;
  }
  // If the hash is removed the browser will re-perform a request to the server
  // /page#hash -> /page
  return false;
}
function isDataStrategyResult(result) {
  return result != null && typeof result === "object" && "type" in result && "result" in result && (result.type === ResultType.data || result.type === ResultType.error);
}
function isRedirectDataStrategyResultResult(result) {
  return isResponse(result.result) && redirectStatusCodes.has(result.result.status);
}
function isDeferredResult(result) {
  return result.type === ResultType.deferred;
}
function isErrorResult(result) {
  return result.type === ResultType.error;
}
function isRedirectResult(result) {
  return (result && result.type) === ResultType.redirect;
}
function isDataWithResponseInit(value) {
  return typeof value === "object" && value != null && "type" in value && "data" in value && "init" in value && value.type === "DataWithResponseInit";
}
function isDeferredData(value) {
  let deferred = value;
  return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectResponse(result) {
  if (!isResponse(result)) {
    return false;
  }
  let status = result.status;
  let location = result.headers.get("Location");
  return status >= 300 && status <= 399 && location != null;
}
function isValidMethod(method) {
  return validRequestMethods.has(method.toLowerCase());
}
function isMutationMethod(method) {
  return validMutationMethods.has(method.toLowerCase());
}
async function resolveNavigationDeferredResults(matches, results, signal, currentMatches, currentLoaderData) {
  let entries = Object.entries(results);
  for (let index = 0; index < entries.length; index++) {
    let [routeId, result] = entries[index];
    let match = matches.find(m => (m == null ? void 0 : m.route.id) === routeId);
    // If we don't have a match, then we can have a deferred result to do
    // anything with.  This is for revalidating fetchers where the route was
    // removed during HMR
    if (!match) {
      continue;
    }
    let currentMatch = currentMatches.find(m => m.route.id === match.route.id);
    let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;
    if (isDeferredResult(result) && isRevalidatingLoader) {
      // Note: we do not have to touch activeDeferreds here since we race them
      // against the signal in resolveDeferredData and they'll get aborted
      // there if needed
      await resolveDeferredData(result, signal, false).then(result => {
        if (result) {
          results[routeId] = result;
        }
      });
    }
  }
}
async function resolveFetcherDeferredResults(matches, results, revalidatingFetchers) {
  for (let index = 0; index < revalidatingFetchers.length; index++) {
    let {
      key,
      routeId,
      controller
    } = revalidatingFetchers[index];
    let result = results[key];
    let match = matches.find(m => (m == null ? void 0 : m.route.id) === routeId);
    // If we don't have a match, then we can have a deferred result to do
    // anything with.  This is for revalidating fetchers where the route was
    // removed during HMR
    if (!match) {
      continue;
    }
    if (isDeferredResult(result)) {
      // Note: we do not have to touch activeDeferreds here since we race them
      // against the signal in resolveDeferredData and they'll get aborted
      // there if needed
      invariant(controller, "Expected an AbortController for revalidating fetcher deferred result");
      await resolveDeferredData(result, controller.signal, true).then(result => {
        if (result) {
          results[key] = result;
        }
      });
    }
  }
}
async function resolveDeferredData(result, signal, unwrap) {
  if (unwrap === void 0) {
    unwrap = false;
  }
  let aborted = await result.deferredData.resolveData(signal);
  if (aborted) {
    return;
  }
  if (unwrap) {
    try {
      return {
        type: ResultType.data,
        data: result.deferredData.unwrappedData
      };
    } catch (e) {
      // Handle any TrackedPromise._error values encountered while unwrapping
      return {
        type: ResultType.error,
        error: e
      };
    }
  }
  return {
    type: ResultType.data,
    data: result.deferredData.data
  };
}
function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some(v => v === "");
}
function getTargetMatch(matches, location) {
  let search = typeof location === "string" ? parsePath(location).search : location.search;
  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    // Return the leaf index route when index is present
    return matches[matches.length - 1];
  }
  // Otherwise grab the deepest "path contributing" match (ignoring index and
  // pathless layout routes)
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
  let {
    formMethod,
    formAction,
    formEncType,
    text,
    formData,
    json
  } = navigation;
  if (!formMethod || !formAction || !formEncType) {
    return;
  }
  if (text != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: undefined,
      json: undefined,
      text
    };
  } else if (formData != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData,
      json: undefined,
      text: undefined
    };
  } else if (json !== undefined) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: undefined,
      json,
      text: undefined
    };
  }
}
function getLoadingNavigation(location, submission) {
  if (submission) {
    let navigation = {
      state: "loading",
      location,
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text
    };
    return navigation;
  } else {
    let navigation = {
      state: "loading",
      location,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      json: undefined,
      text: undefined
    };
    return navigation;
  }
}
function getSubmittingNavigation(location, submission) {
  let navigation = {
    state: "submitting",
    location,
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text
  };
  return navigation;
}
function getLoadingFetcher(submission, data) {
  if (submission) {
    let fetcher = {
      state: "loading",
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text,
      data
    };
    return fetcher;
  } else {
    let fetcher = {
      state: "loading",
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      json: undefined,
      text: undefined,
      data
    };
    return fetcher;
  }
}
function getSubmittingFetcher(submission, existingFetcher) {
  let fetcher = {
    state: "submitting",
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text,
    data: existingFetcher ? existingFetcher.data : undefined
  };
  return fetcher;
}
function getDoneFetcher(data) {
  let fetcher = {
    state: "idle",
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined,
    data
  };
  return fetcher;
}
function restoreAppliedTransitions(_window, transitions) {
  try {
    let sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
    if (sessionPositions) {
      let json = JSON.parse(sessionPositions);
      for (let [k, v] of Object.entries(json || {})) {
        if (v && Array.isArray(v)) {
          transitions.set(k, new Set(v || []));
        }
      }
    }
  } catch (e) {
    // no-op, use default empty object
  }
}
function persistAppliedTransitions(_window, transitions) {
  if (transitions.size > 0) {
    let json = {};
    for (let [k, v] of transitions) {
      json[k] = [...v];
    }
    try {
      _window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json));
    } catch (error) {
      warning(false, "Failed to save applied view transitions in sessionStorage (" + error + ").");
    }
  }
}
//#endregion


//# sourceMappingURL=router.js.map


/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41);
/* harmony import */ var _components_Navigace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _pages_Portfolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var _pages_Denik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42);
/* harmony import */ var _pages_SearchAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48);
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45);
/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }










function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    prispevky = _useState2[0],
    setPrispevky = _useState2[1];
  var pridejPrispevek = function pridejPrispevek(ticker) {
    if (!ticker.trim()) {
      alert("Prosím vyplň název akcie!");
      return;
    }
    setPrispevky([].concat(_toConsumableArray(prispevky), [{
      ticker: ticker,
      operace: []
    }]));
  };
  var smazPrispevek = function smazPrispevek(index) {
    setPrispevky(prispevky.filter(function (_, indexP) {
      return indexP !== index;
    }));
  };
  var pridejOperaci = function pridejOperaci(indexPrispevku, novaOperace) {
    setPrispevky(function (prevPrispevky) {
      return prevPrispevky.map(function (prispevek, index) {
        if (index === indexPrispevku) {
          return _objectSpread(_objectSpread({}, prispevek), {}, {
            operace: [].concat(_toConsumableArray(prispevek.operace), [novaOperace])
          });
        }
        return prispevek;
      });
    });
  };
  var smazOperaci = function smazOperaci(indexPrispevku, indexOperace) {
    setPrispevky(prispevky.map(function (prispevek, index) {
      if (index === indexPrispevku) {
        return _objectSpread(_objectSpread({}, prispevek), {}, {
          operace: prispevek.operace.filter(function (_, i) {
            return i !== indexOperace;
          })
        });
      }
      return prispevek;
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navigace__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/portfolio",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Portfolio__WEBPACK_IMPORTED_MODULE_4__["default"], {
      prispevky: prispevky
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/denik",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Denik__WEBPACK_IMPORTED_MODULE_5__["default"], {
      prispevky: prispevky,
      pridejPrispevek: pridejPrispevek,
      smazPrispevek: smazPrispevek,
      pridejOperaci: pridejOperaci,
      smazOperaci: smazOperaci
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/vyhledavani",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_SearchAPI__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/about",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_About__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_NotFound__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }))));
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);


function Navigace() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    className: "navbar-brand"
  }, "Stock Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarNav",
    "aria-controls": "navbarNav",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarNav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "navbar-nav ms-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/portfolio",
    className: "nav-link"
  }, "Portfolio")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/denik",
    className: "nav-link"
  }, "Den\xEDk")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/vyhledavani",
    className: "nav-link"
  }, "Vyhled\xE1v\xE1n\xED")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/about",
    className: "nav-link"
  }, "O aplikaci"))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigace);

/***/ }),

/***/ 44:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

// import ButtonSmazatOperaci nepoužívám zatím

function Operations(_ref) {
  var operace = _ref.operace,
    indexPrispevku = _ref.indexPrispevku,
    onAddOperace = _ref.onAddOperace,
    onDeleteOperace = _ref.onDeleteOperace;
  // Odsud počítám průměr a vytváří se mi jednotlivé řádky transakcí
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      cena: "",
      kusy: "",
      poplatek: "",
      datum: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    novaOperace = _useState2[0],
    setNovaOperace = _useState2[1];

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setNovaOperace({ ...novaOperace, [name]: value });
  // };

  var handleChange = function handleChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    setNovaOperace(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, name === "cena" || name === "kusy" || name === "poplatek" ? parseFloat(value) : value));
    });
  };
  var pridejNovouOperaci = function pridejNovouOperaci() {
    if (!novaOperace.cena || !novaOperace.kusy) {
      alert("Vyplň cenu a počet kusů!");
      return;
    }
    onAddOperace(indexPrispevku, {
      cena: novaOperace.cena,
      //před tím jsem tu měl cena: parseFloat(novaOperace.cena),
      kusy: novaOperace.kusy,
      poplatek: novaOperace.poplatek || 0,
      datum: novaOperace.datum || "-"
    });
    setNovaOperace({
      cena: "",
      kusy: "",
      poplatek: "",
      datum: ""
    });
  };
  var vypocitejPrumer = function vypocitejPrumer() {
    var nakupniCena = 0; // celkové náklady na nákupy
    var celkemKusu = 0; // aktuální počet kusů
    var celkemPoplatku = 0; // součet všech poplatků

    operace.forEach(function (_ref2) {
      var cena = _ref2.cena,
        kusy = _ref2.kusy,
        poplatek = _ref2.poplatek;
      if (kusy > 0) {
        // Nákup: započítáme cenu i poplatek
        nakupniCena += cena * kusy + poplatek;
        celkemKusu += kusy;
        celkemPoplatku += poplatek;
      } else {
        // Prodej
        celkemKusu += kusy;
        nakupniCena += poplatek;
      }
    });

    // Výpočet průměrné ceny: celkové náklady děleno počet kusů
    var prumernaCena = celkemKusu > 0 ? (nakupniCena / celkemKusu).toFixed(2) : "-";
    return {
      prumernaCena: prumernaCena,
      celkemKusu: celkemKusu,
      celkemPoplatku: celkemPoplatku
    };
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mb-3"
  }, "Pr\u016Fm\u011Brn\xE1 n\xE1kupn\xED cena: ", vypocitejPrumer().prumernaCena), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mb-3"
  }, "Po\u010Det kus\u016F: ", vypocitejPrumer().celkemKusu, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mb-3"
  }, "Sou\u010Det poplatk\u016F: ", vypocitejPrumer().celkemPoplatku)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Nov\xE1 operace"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row g-2 align-items-center mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    name: "cena",
    value: novaOperace.cena,
    onChange: handleChange,
    placeholder: "Cena za kus",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    name: "kusy",
    value: novaOperace.kusy,
    onChange: handleChange,
    placeholder: "Po\u010Det kus\u016F",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    name: "poplatek",
    value: novaOperace.poplatek,
    onChange: handleChange,
    placeholder: "Poplatek",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "date",
    name: "datum",
    value: novaOperace.datum,
    onChange: handleChange,
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-primary",
    onClick: pridejNovouOperaci
  }, "P\u0159idat"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table table-striped"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Datum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Typ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Kusy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Cena"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Poplatek"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Akce"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, operace.map(function (op, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, op.datum || "—"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, op.kusy > 0 ? "Nákup" : "Prodej"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, op.kusy), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, op.cena, " K\u010D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, op.poplatek, " K\u010D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return onDeleteOperace(indexPrispevku, index);
      },
      className: "btn btn-sm btn-danger"
    }, "Smazat")));
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Operations);

/***/ }),

/***/ 43:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);


function PrispevekAkcie(_ref) {
  var prispevek = _ref.prispevek,
    indexPrispevku = _ref.indexPrispevku,
    onDelete = _ref.onDelete,
    onAddOperace = _ref.onAddOperace,
    onDeleteOperace = _ref.onDeleteOperace;
  // tady budu mít prázdný pole aka [] a sem budu pushovat po kliknutí na zadání akcie, zadání příspěvěku, sem to potřebuju odeslat a to se pak odešle do app.js celá tato funkce --- NA KOMUNIKACI MEZI KOMPONENTAMI POUŽÍVÁM `PROPS` - PROPS  nemusím pouřívat jen jako atributy těch html značek, ale můžu je použít i ve funkcích

  // Kód pro přidání jednotlivé operace Nákup/Prodej pro akcii

  // 1. parametr - callback
  // 2. paramter - dependencies - závislosti
  // useEffect(() => {
  //   // mount komponentu
  //   console.log("Prispevek začal cestu");

  //   // unmount komponentu
  //   return () => {
  //     alert("Prispevěk se vymaže");
  //     console.log("prispevek zanikl");
  //   };
  // }, []);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card m-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, prispevek.ticker), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-danger btn-sm",
    onClick: onDelete
  }, "Vymazat akcii")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Operations__WEBPACK_IMPORTED_MODULE_1__["default"], {
    operace: prispevek.operace,
    indexPrispevku: indexPrispevku,
    onAddOperace: onAddOperace,
    onDeleteOperace: onDeleteOperace
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrispevekAkcie);

/***/ }),

/***/ 45:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function About() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "O aplikaci"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Stock Note je jednoduch\xFD investi\u010Dn\xED z\xE1pisn\xEDk vyvinut\xFD jako projekt v Reactu. Umo\u017E\u0148uje sledovat n\xE1kupy a prodeje akci\xED a ETF."));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ 42:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FormularAkcie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);



function Denik(_ref) {
  var prispevky = _ref.prispevky,
    pridejPrispevek = _ref.pridejPrispevek,
    smazPrispevek = _ref.smazPrispevek,
    pridejOperaci = _ref.pridejOperaci,
    smazOperaci = _ref.smazOperaci;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Den\xEDk"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormularAkcie__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onSubmitForm: pridejPrispevek
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "list"
  }, prispevky.map(function (prispevek, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      prispevek: prispevek,
      indexPrispevku: index,
      onDelete: function onDelete() {
        return smazPrispevek(index);
      },
      onAddOperace: pridejOperaci,
      onDeleteOperace: smazOperaci
    });
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Denik);

/***/ }),

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);


function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "V\xEDtejte ve Stock Note \uD83D\uDCC8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "lead"
  }, "Investi\u010Dn\xED z\xE1pisn\xEDk pro spr\xE1vu va\u0161ich akci\xED a ETF."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/portfolio",
    className: "btn btn-success m-2"
  }, "P\u0159ej\xEDt do Portfolia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/denik",
    className: "btn btn-primary m-2"
  }, "P\u0159ej\xEDt do Den\xEDku")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ 46:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "404"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Str\xE1nka nebyla nalezena."));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ }),

/***/ 38:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Portfolio(_ref) {
  var prispevky = _ref.prispevky;
  // Spočítat průměrnou cenu
  var spocitejPrumer = function spocitejPrumer(prispevek) {
    var operace = prispevek.operace;
    var totalNaklady = 0;
    var celkemKusu = 0;
    operace.forEach(function (_ref2) {
      var cena = _ref2.cena,
        kusy = _ref2.kusy,
        poplatek = _ref2.poplatek;
      if (kusy > 0) {
        totalNaklady += cena * kusy + poplatek;
        celkemKusu += kusy;
      }
    });
    return celkemKusu > 0 ? (totalNaklady / celkemKusu).toFixed(2) : "-";
  };

  // Spočítat celkový počet kusů (počítá i prodeje, tedy záporné kusy)
  var spocitejTotalKusy = function spocitejTotalKusy(prispevek) {
    return prispevek.operace.reduce(function (sum, op) {
      return sum + op.kusy;
    }, 0);
  };

  // Spočítat součet všech poplatků (náklady)
  var spocitejPoplatky = function spocitejPoplatky(prispevek) {
    return prispevek.operace.reduce(function (sum, op) {
      return sum + op.poplatek;
    }, 0);
  };

  // Spočítat celkově zainvestované peníze (jen nákupy)
  var spocitejTotalInvestovano = function spocitejTotalInvestovano(prispevek) {
    return prispevek.operace.filter(function (op) {
      return op.kusy > 0;
    }) // jen nákupy
    .reduce(function (sum, op) {
      return sum + op.cena * op.kusy + op.poplatek;
    }, 0).toFixed(2);
  };

  // (VOLITELNÉ) Alokaci dopočítáme až budeme mít total portfolio value

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "mb-4"
  }, "Portfolio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "table-responsive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table table-striped table-bordered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", {
    className: "table-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Ticker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Pr\u016Fm\u011Brn\xE1 cena [K\u010D]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Po\u010Det kus\u016F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Sou\u010Det poplatk\u016F [K\u010D]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Celkem investov\xE1no [K\u010D]"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, prispevky.map(function (prispevek, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, prispevek.ticker), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, spocitejPrumer(prispevek)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, spocitejTotalKusy(prispevek)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, spocitejPoplatky(prispevek)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, spocitejTotalInvestovano(prispevek)));
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);

// function Portfolio({ prispevky }) {
//   return (
//     <div className="container mt-5">
//       <h2>Portfolio</h2>
//       {prispevky.length === 0 ? (
//         <p>Nemáte žádné přidané akcie</p>
//       ) : (
//         <ul className="list-group">
//           {prispevky.map((prispevek, index) => (
//             <li key={index} className="list-group-item">
//               {prispevek.ticker} - počet operací : {prispevek.operace.length}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

/***/ }),

/***/ 48:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// src/pages/Search.js

function Search() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    query = _useState2[0],
    setQuery = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    results = _useState4[0],
    setResults = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoading = _useState6[0],
    setIsLoading = _useState6[1];
  var handleSearch = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (query.trim()) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            setIsLoading(true);
            _context.prev = 3;
            _context.next = 6;
            return fetch("https://api.polygon.io/v3/reference/tickers?search=".concat(query, "&active=true&apiKey=G0hYyTaQqFGsXxD994OWJOzP4_s5tlVd"));
          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();
          case 9:
            data = _context.sent;
            setResults(data.results.slice(0, 5)); // omezíme na 5 výsledků
            _context.next = 16;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](3);
            console.error("Chyba při načítání dat:", _context.t0);
          case 16:
            setIsLoading(false);
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 13]]);
    }));
    return function handleSearch() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleInputChange = function handleInputChange(e) {
    setQuery(e.target.value);
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    handleSearch();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Vyhled\xE1v\xE1n\xED akci\xED"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit,
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: query,
    onChange: handleInputChange,
    className: "form-control",
    placeholder: "Zadej ticker..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Vyhledat"))), isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Na\u010D\xEDt\xE1m data...") : results.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list-group"
  }, results.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: item.ticker,
      className: "list-group-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "card mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
      className: "card-title"
    }, item.ticker), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card-text"
    }, item.name))));
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Nebyly nalezeny \u017E\xE1dn\xE9 v\xFDsledky."));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ 39:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var react_dom__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortedDeferredError": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.AbortedDeferredError),
/* harmony export */   "Await": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Await),
/* harmony export */   "BrowserRouter": () => (/* binding */ BrowserRouter),
/* harmony export */   "Form": () => (/* binding */ Form),
/* harmony export */   "HashRouter": () => (/* binding */ HashRouter),
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "MemoryRouter": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.MemoryRouter),
/* harmony export */   "NavLink": () => (/* binding */ NavLink),
/* harmony export */   "Navigate": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Navigate),
/* harmony export */   "NavigationType": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Action),
/* harmony export */   "Outlet": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Outlet),
/* harmony export */   "Route": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Route),
/* harmony export */   "Router": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Router),
/* harmony export */   "RouterProvider": () => (/* binding */ RouterProvider),
/* harmony export */   "Routes": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Routes),
/* harmony export */   "ScrollRestoration": () => (/* binding */ ScrollRestoration),
/* harmony export */   "UNSAFE_DataRouterContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterContext),
/* harmony export */   "UNSAFE_DataRouterStateContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterStateContext),
/* harmony export */   "UNSAFE_ErrorResponseImpl": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_ErrorResponseImpl),
/* harmony export */   "UNSAFE_FetchersContext": () => (/* binding */ FetchersContext),
/* harmony export */   "UNSAFE_LocationContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_LocationContext),
/* harmony export */   "UNSAFE_NavigationContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext),
/* harmony export */   "UNSAFE_RouteContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_RouteContext),
/* harmony export */   "UNSAFE_ViewTransitionContext": () => (/* binding */ ViewTransitionContext),
/* harmony export */   "UNSAFE_useRouteId": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_useRouteId),
/* harmony export */   "UNSAFE_useScrollRestoration": () => (/* binding */ useScrollRestoration),
/* harmony export */   "createBrowserRouter": () => (/* binding */ createBrowserRouter),
/* harmony export */   "createHashRouter": () => (/* binding */ createHashRouter),
/* harmony export */   "createMemoryRouter": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.createMemoryRouter),
/* harmony export */   "createPath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.createPath),
/* harmony export */   "createRoutesFromChildren": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.createRoutesFromChildren),
/* harmony export */   "createRoutesFromElements": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.createRoutesFromElements),
/* harmony export */   "createSearchParams": () => (/* binding */ createSearchParams),
/* harmony export */   "defer": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.defer),
/* harmony export */   "generatePath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.generatePath),
/* harmony export */   "isRouteErrorResponse": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.isRouteErrorResponse),
/* harmony export */   "json": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.json),
/* harmony export */   "matchPath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.matchPath),
/* harmony export */   "matchRoutes": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.matchRoutes),
/* harmony export */   "parsePath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.parsePath),
/* harmony export */   "redirect": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.redirect),
/* harmony export */   "redirectDocument": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.redirectDocument),
/* harmony export */   "renderMatches": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.renderMatches),
/* harmony export */   "replace": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.replace),
/* harmony export */   "resolvePath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.resolvePath),
/* harmony export */   "unstable_HistoryRouter": () => (/* binding */ HistoryRouter),
/* harmony export */   "unstable_usePrompt": () => (/* binding */ usePrompt),
/* harmony export */   "useActionData": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useActionData),
/* harmony export */   "useAsyncError": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useAsyncError),
/* harmony export */   "useAsyncValue": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useAsyncValue),
/* harmony export */   "useBeforeUnload": () => (/* binding */ useBeforeUnload),
/* harmony export */   "useBlocker": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useBlocker),
/* harmony export */   "useFetcher": () => (/* binding */ useFetcher),
/* harmony export */   "useFetchers": () => (/* binding */ useFetchers),
/* harmony export */   "useFormAction": () => (/* binding */ useFormAction),
/* harmony export */   "useHref": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useHref),
/* harmony export */   "useInRouterContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useInRouterContext),
/* harmony export */   "useLinkClickHandler": () => (/* binding */ useLinkClickHandler),
/* harmony export */   "useLoaderData": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useLoaderData),
/* harmony export */   "useLocation": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation),
/* harmony export */   "useMatch": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useMatch),
/* harmony export */   "useMatches": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useMatches),
/* harmony export */   "useNavigate": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate),
/* harmony export */   "useNavigation": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigation),
/* harmony export */   "useNavigationType": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigationType),
/* harmony export */   "useOutlet": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useOutlet),
/* harmony export */   "useOutletContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useOutletContext),
/* harmony export */   "useParams": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useParams),
/* harmony export */   "useResolvedPath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath),
/* harmony export */   "useRevalidator": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useRevalidator),
/* harmony export */   "useRouteError": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useRouteError),
/* harmony export */   "useRouteLoaderData": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useRouteLoaderData),
/* harmony export */   "useRoutes": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useRoutes),
/* harmony export */   "useSearchParams": () => (/* binding */ useSearchParams),
/* harmony export */   "useSubmit": () => (/* binding */ useSubmit),
/* harmony export */   "useViewTransitionState": () => (/* binding */ useViewTransitionState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* provided dependency */ var process = __webpack_require__(9);
/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */







function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

const defaultMethod = "get";
const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && (
  // Ignore everything but left clicks
  !target || target === "_self") &&
  // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // Ignore clicks with modifier keys
  ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */
function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }
  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  let searchParams = createSearchParams(locationSearch);
  if (defaultSearchParams) {
    // Use `defaultSearchParams.forEach(...)` here instead of iterating of
    // `defaultSearchParams.keys()` to work-around a bug in Firefox related to
    // web extensions. Relevant Bugzilla tickets:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1414602
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1023984
    defaultSearchParams.forEach((_, key) => {
      if (!searchParams.has(key)) {
        defaultSearchParams.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    });
  }
  return searchParams;
}
// One-time check for submitter support
let _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null) {
    try {
      new FormData(document.createElement("form"),
      // @ts-expect-error if FormData supports the submitter parameter, this will throw
      0);
      _formDataSupportsSubmitter = false;
    } catch (e) {
      _formDataSupportsSubmitter = true;
    }
  }
  return _formDataSupportsSubmitter;
}
const supportedFormEncTypes = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function getFormEncType(encType) {
  if (encType != null && !supportedFormEncTypes.has(encType)) {
    process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(false, "\"" + encType + "\" is not a valid `encType` for `<Form>`/`<fetcher.Form>` " + ("and will default to \"" + defaultEncType + "\"")) : void 0;
    return null;
  }
  return encType;
}
function getFormSubmissionInfo(target, basename) {
  let method;
  let action;
  let encType;
  let formData;
  let body;
  if (isFormElement(target)) {
    // When grabbing the action from the element, it will have had the basename
    // prefixed to ensure non-JS scenarios work, so strip it since we'll
    // re-prefix in the router
    let attr = target.getAttribute("action");
    action = attr ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(attr, basename) : null;
    method = target.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(target);
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
    }
    // <button>/<input type="submit"> may override attributes of <form>
    // When grabbing the action from the element, it will have had the basename
    // prefixed to ensure non-JS scenarios work, so strip it since we'll
    // re-prefix in the router
    let attr = target.getAttribute("formaction") || form.getAttribute("action");
    action = attr ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(attr, basename) : null;
    method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
    // Build a FormData object populated from a form and submitter
    formData = new FormData(form, target);
    // If this browser doesn't support the `FormData(el, submitter)` format,
    // then tack on the submitter value at the end.  This is a lightweight
    // solution that is not 100% spec compliant.  For complete support in older
    // browsers, consider using the `formdata-submitter-polyfill` package
    if (!isFormDataSubmitterSupported()) {
      let {
        name,
        type,
        value
      } = target;
      if (type === "image") {
        let prefix = name ? name + "." : "";
        formData.append(prefix + "x", "0");
        formData.append(prefix + "y", "0");
      } else if (name) {
        formData.append(name, value);
      }
    }
  } else if (isHtmlElement(target)) {
    throw new Error("Cannot submit element that is not <form>, <button>, or " + "<input type=\"submit|image\">");
  } else {
    method = defaultMethod;
    action = null;
    encType = defaultEncType;
    body = target;
  }
  // Send body for <Form encType="text/plain" so we encode it into text
  if (formData && encType === "text/plain") {
    body = formData;
    formData = undefined;
  }
  return {
    action,
    method: method.toLowerCase(),
    encType,
    formData,
    body
  };
}

const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
  _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"],
  _excluded3 = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"];
// HEY YOU! DON'T TOUCH THIS VARIABLE!
//
// It is replaced with the proper version at build time via a babel plugin in
// the rollup config.
//
// Export a global property onto the window for React Router detection by the
// Core Web Vitals Technology Report.  This way they can configure the `wappalyzer`
// to detect and properly classify live websites as being built with React Router:
// https://github.com/HTTPArchive/wappalyzer/blob/main/src/technologies/r.json
const REACT_ROUTER_VERSION = "6";
try {
  window.__reactRouterVersion = REACT_ROUTER_VERSION;
} catch (e) {
  // no-op
}
function createBrowserRouter(routes, opts) {
  return (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createBrowserHistory)({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes,
    mapRouteProperties: react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_mapRouteProperties,
    dataStrategy: opts == null ? void 0 : opts.dataStrategy,
    patchRoutesOnNavigation: opts == null ? void 0 : opts.patchRoutesOnNavigation,
    window: opts == null ? void 0 : opts.window
  }).initialize();
}
function createHashRouter(routes, opts) {
  return (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createHashHistory)({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes,
    mapRouteProperties: react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_mapRouteProperties,
    dataStrategy: opts == null ? void 0 : opts.dataStrategy,
    patchRoutesOnNavigation: opts == null ? void 0 : opts.patchRoutesOnNavigation,
    window: opts == null ? void 0 : opts.window
  }).initialize();
}
function parseHydrationData() {
  var _window;
  let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
  if (state && state.errors) {
    state = _extends({}, state, {
      errors: deserializeErrors(state.errors)
    });
  }
  return state;
}
function deserializeErrors(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    // Hey you!  If you change this, please change the corresponding logic in
    // serializeErrors in react-router-dom/server.tsx :)
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_ErrorResponseImpl(val.status, val.statusText, val.data, val.internal === true);
    } else if (val && val.__type === "Error") {
      // Attempt to reconstruct the right type of Error (i.e., ReferenceError)
      if (val.__subType) {
        let ErrorConstructor = window[val.__subType];
        if (typeof ErrorConstructor === "function") {
          try {
            // @ts-expect-error
            let error = new ErrorConstructor(val.message);
            // Wipe away the client-side stack trace.  Nothing to fill it in with
            // because we don't serialize SSR stack traces for security reasons
            error.stack = "";
            serialized[key] = error;
          } catch (e) {
            // no-op - fall through and create a normal Error
          }
        }
      }
      if (serialized[key] == null) {
        let error = new Error(val.message);
        // Wipe away the client-side stack trace.  Nothing to fill it in with
        // because we don't serialize SSR stack traces for security reasons
        error.stack = "";
        serialized[key] = error;
      }
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}
const ViewTransitionContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  isTransitioning: false
});
if (process.env.NODE_ENV !== "production") {
  ViewTransitionContext.displayName = "ViewTransition";
}
const FetchersContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(new Map());
if (process.env.NODE_ENV !== "production") {
  FetchersContext.displayName = "Fetchers";
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Components
////////////////////////////////////////////////////////////////////////////////
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/
const START_TRANSITION = "startTransition";
const startTransitionImpl = react__WEBPACK_IMPORTED_MODULE_0__[START_TRANSITION];
const FLUSH_SYNC = "flushSync";
const flushSyncImpl = /*#__PURE__*/ (react_dom__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (react_dom__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(react_dom__WEBPACK_IMPORTED_MODULE_1__, 2)))[FLUSH_SYNC];
const USE_ID = "useId";
const useIdImpl = react__WEBPACK_IMPORTED_MODULE_0__[USE_ID];
function startTransitionSafe(cb) {
  if (startTransitionImpl) {
    startTransitionImpl(cb);
  } else {
    cb();
  }
}
function flushSyncSafe(cb) {
  if (flushSyncImpl) {
    flushSyncImpl(cb);
  } else {
    cb();
  }
}
class Deferred {
  constructor() {
    this.status = "pending";
    this.promise = new Promise((resolve, reject) => {
      this.resolve = value => {
        if (this.status === "pending") {
          this.status = "resolved";
          resolve(value);
        }
      };
      this.reject = reason => {
        if (this.status === "pending") {
          this.status = "rejected";
          reject(reason);
        }
      };
    });
  }
}
/**
 * Given a Remix Router instance, render the appropriate UI
 */
function RouterProvider(_ref) {
  let {
    fallbackElement,
    router,
    future
  } = _ref;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(router.state);
  let [pendingState, setPendingState] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let [vtContext, setVtContext] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    isTransitioning: false
  });
  let [renderDfd, setRenderDfd] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let [transition, setTransition] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let [interruption, setInterruption] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let fetcherData = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Map());
  let {
    v7_startTransition
  } = future || {};
  let optInStartTransition = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(cb => {
    if (v7_startTransition) {
      startTransitionSafe(cb);
    } else {
      cb();
    }
  }, [v7_startTransition]);
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newState, _ref2) => {
    let {
      deletedFetchers,
      flushSync: flushSync,
      viewTransitionOpts: viewTransitionOpts
    } = _ref2;
    newState.fetchers.forEach((fetcher, key) => {
      if (fetcher.data !== undefined) {
        fetcherData.current.set(key, fetcher.data);
      }
    });
    deletedFetchers.forEach(key => fetcherData.current.delete(key));
    let isViewTransitionUnavailable = router.window == null || router.window.document == null || typeof router.window.document.startViewTransition !== "function";
    // If this isn't a view transition or it's not available in this browser,
    // just update and be done with it
    if (!viewTransitionOpts || isViewTransitionUnavailable) {
      if (flushSync) {
        flushSyncSafe(() => setStateImpl(newState));
      } else {
        optInStartTransition(() => setStateImpl(newState));
      }
      return;
    }
    // flushSync + startViewTransition
    if (flushSync) {
      // Flush through the context to mark DOM elements as transition=ing
      flushSyncSafe(() => {
        // Cancel any pending transitions
        if (transition) {
          renderDfd && renderDfd.resolve();
          transition.skipTransition();
        }
        setVtContext({
          isTransitioning: true,
          flushSync: true,
          currentLocation: viewTransitionOpts.currentLocation,
          nextLocation: viewTransitionOpts.nextLocation
        });
      });
      // Update the DOM
      let t = router.window.document.startViewTransition(() => {
        flushSyncSafe(() => setStateImpl(newState));
      });
      // Clean up after the animation completes
      t.finished.finally(() => {
        flushSyncSafe(() => {
          setRenderDfd(undefined);
          setTransition(undefined);
          setPendingState(undefined);
          setVtContext({
            isTransitioning: false
          });
        });
      });
      flushSyncSafe(() => setTransition(t));
      return;
    }
    // startTransition + startViewTransition
    if (transition) {
      // Interrupting an in-progress transition, cancel and let everything flush
      // out, and then kick off a new transition from the interruption state
      renderDfd && renderDfd.resolve();
      transition.skipTransition();
      setInterruption({
        state: newState,
        currentLocation: viewTransitionOpts.currentLocation,
        nextLocation: viewTransitionOpts.nextLocation
      });
    } else {
      // Completed navigation update with opted-in view transitions, let 'er rip
      setPendingState(newState);
      setVtContext({
        isTransitioning: true,
        flushSync: false,
        currentLocation: viewTransitionOpts.currentLocation,
        nextLocation: viewTransitionOpts.nextLocation
      });
    }
  }, [router.window, transition, renderDfd, fetcherData, optInStartTransition]);
  // Need to use a layout effect here so we are subscribed early enough to
  // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => router.subscribe(setState), [router, setState]);
  // When we start a view transition, create a Deferred we can use for the
  // eventual "completed" render
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (vtContext.isTransitioning && !vtContext.flushSync) {
      setRenderDfd(new Deferred());
    }
  }, [vtContext]);
  // Once the deferred is created, kick off startViewTransition() to update the
  // DOM and then wait on the Deferred to resolve (indicating the DOM update has
  // happened)
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (renderDfd && pendingState && router.window) {
      let newState = pendingState;
      let renderPromise = renderDfd.promise;
      let transition = router.window.document.startViewTransition(async () => {
        optInStartTransition(() => setStateImpl(newState));
        await renderPromise;
      });
      transition.finished.finally(() => {
        setRenderDfd(undefined);
        setTransition(undefined);
        setPendingState(undefined);
        setVtContext({
          isTransitioning: false
        });
      });
      setTransition(transition);
    }
  }, [optInStartTransition, pendingState, renderDfd, router.window]);
  // When the new location finally renders and is committed to the DOM, this
  // effect will run to resolve the transition
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (renderDfd && pendingState && state.location.key === pendingState.location.key) {
      renderDfd.resolve();
    }
  }, [renderDfd, transition, state.location, pendingState]);
  // If we get interrupted with a new navigation during a transition, we skip
  // the active transition, let it cleanup, then kick it off again here
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!vtContext.isTransitioning && interruption) {
      setPendingState(interruption.state);
      setVtContext({
        isTransitioning: true,
        flushSync: false,
        currentLocation: interruption.currentLocation,
        nextLocation: interruption.nextLocation
      });
      setInterruption(undefined);
    }
  }, [vtContext.isTransitioning, interruption]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(fallbackElement == null || !router.future.v7_partialHydration, "`<RouterProvider fallbackElement>` is deprecated when using " + "`v7_partialHydration`, use a `HydrateFallback` component instead") : void 0;
    // Only log this once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let navigator = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: n => router.navigate(n),
      push: (to, state, opts) => router.navigate(to, {
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      }),
      replace: (to, state, opts) => router.navigate(to, {
        replace: true,
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      })
    };
  }, [router]);
  let basename = router.basename || "/";
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    router,
    navigator,
    static: false,
    basename
  }), [router, navigator, basename]);
  let routerFuture = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    v7_relativeSplatPath: router.future.v7_relativeSplatPath
  }), [router.future.v7_relativeSplatPath]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => (0,react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_logV6DeprecationWarnings)(future, router.future), [future, router.future]);
  // The fragment and {null} here are important!  We need them to keep React 18's
  // useId happy when we are server-rendering since we may have a <script> here
  // containing the hydrated server-side staticContext (from StaticRouterProvider).
  // useId relies on the component tree structure to generate deterministic id's
  // so we need to ensure it remains the same on the client even though
  // we don't need the <script> tag
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterContext.Provider, {
    value: dataRouterContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterStateContext.Provider, {
    value: state
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FetchersContext.Provider, {
    value: fetcherData.current
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTransitionContext.Provider, {
    value: vtContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Router, {
    basename: basename,
    location: state.location,
    navigationType: state.historyAction,
    navigator: navigator,
    future: routerFuture
  }, state.initialized || router.future.v7_partialHydration ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MemoizedDataRoutes, {
    routes: router.routes,
    future: router.future,
    state: state
  }) : fallbackElement))))), null);
}
// Memoize to avoid re-renders when updating `ViewTransitionContext`
const MemoizedDataRoutes = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(DataRoutes);
function DataRoutes(_ref3) {
  let {
    routes,
    future,
    state
  } = _ref3;
  return (0,react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_useRoutesImpl)(routes, undefined, state, future);
}
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */
function BrowserRouter(_ref4) {
  let {
    basename,
    children,
    future,
    window
  } = _ref4;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createBrowserHistory)({
      window,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => (0,react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_logV6DeprecationWarnings)(future), [future]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
    future: future
  });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */
function HashRouter(_ref5) {
  let {
    basename,
    children,
    future,
    window
  } = _ref5;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createHashHistory)({
      window,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => (0,react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_logV6DeprecationWarnings)(future), [future]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
    future: future
  });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */
function HistoryRouter(_ref6) {
  let {
    basename,
    children,
    future,
    history
  } = _ref6;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => (0,react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_logV6DeprecationWarnings)(future), [future]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
    future: future
  });
}
if (process.env.NODE_ENV !== "production") {
  HistoryRouter.displayName = "unstable_HistoryRouter";
}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware `<a>`.
 */
const Link = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function LinkWithRef(_ref7, ref) {
  let {
      onClick,
      relative,
      reloadDocument,
      replace,
      state,
      target,
      to,
      preventScrollReset,
      viewTransition
    } = _ref7,
    rest = _objectWithoutPropertiesLoose(_ref7, _excluded);
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext);
  // Rendered into <a href> for absolute URLs
  let absoluteHref;
  let isExternal = false;
  if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
    // Render the absolute href server- and client-side
    absoluteHref = to;
    // Only check for external origins client-side
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
        let path = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          // Strip the protocol/origin/basename for same-origin absolute URLs
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e) {
        // We can't do external URL detection without a valid URL
        process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(false, "<Link to=\"" + to + "\"> contains an invalid URL which will probably break " + "when clicked - please update to a valid URL path.") : void 0;
      }
    }
  }
  // Rendered into <a href> for relative URLs
  let href = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useHref)(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative,
    viewTransition
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref: ref,
      target: target
    }))
  );
});
if (process.env.NODE_ENV !== "production") {
  Link.displayName = "Link";
}
/**
 * A `<Link>` wrapper that knows if it's "active" or not.
 */
const NavLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function NavLinkWithRef(_ref8, ref) {
  let {
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to,
      viewTransition,
      children
    } = _ref8,
    rest = _objectWithoutPropertiesLoose(_ref8, _excluded2);
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath)(to, {
    relative: rest.relative
  });
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  let routerState = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterStateContext);
  let {
    navigator,
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext);
  let isTransitioning = routerState != null &&
  // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useViewTransitionState(path) && viewTransition === true;
  let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }
  if (nextLocationPathname && basename) {
    nextLocationPathname = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(nextLocationPathname, basename) || nextLocationPathname;
  }
  // If the `to` has a trailing slash, look at that exact spot.  Otherwise,
  // we're looking for a slash _after_ what's in `to`.  For example:
  //
  // <NavLink to="/users"> and <NavLink to="/users/">
  // both want to look for a / at index 6 to match URL `/users/matt`
  const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let renderProps = {
    isActive,
    isPending,
    isTransitioning
  };
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp(renderProps);
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null, isTransitioning ? "transitioning" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to,
    viewTransition: viewTransition
  }), typeof children === "function" ? children(renderProps) : children);
});
if (process.env.NODE_ENV !== "production") {
  NavLink.displayName = "NavLink";
}
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */
const Form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref9, forwardedRef) => {
  let {
      fetcherKey,
      navigate,
      reloadDocument,
      replace,
      state,
      method = defaultMethod,
      action,
      onSubmit,
      relative,
      preventScrollReset,
      viewTransition
    } = _ref9,
    props = _objectWithoutPropertiesLoose(_ref9, _excluded3);
  let submit = useSubmit();
  let formAction = useFormAction(action, {
    relative
  });
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let submitHandler = event => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
    submit(submitter || event.currentTarget, {
      fetcherKey,
      method: submitMethod,
      navigate,
      replace,
      state,
      relative,
      preventScrollReset,
      viewTransition
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", _extends({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
});
if (process.env.NODE_ENV !== "production") {
  Form.displayName = "Form";
}
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */
function ScrollRestoration(_ref10) {
  let {
    getKey,
    storageKey
  } = _ref10;
  useScrollRestoration({
    getKey,
    storageKey
  });
  return null;
}
if (process.env.NODE_ENV !== "production") {
  ScrollRestoration.displayName = "ScrollRestoration";
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var DataRouterHook;
(function (DataRouterHook) {
  DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook["UseSubmit"] = "useSubmit";
  DataRouterHook["UseSubmitFetcher"] = "useSubmitFetcher";
  DataRouterHook["UseFetcher"] = "useFetcher";
  DataRouterHook["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function (DataRouterStateHook) {
  DataRouterStateHook["UseFetcher"] = "useFetcher";
  DataRouterStateHook["UseFetchers"] = "useFetchers";
  DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
// Internal hooks
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterContext);
  !ctx ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false) : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterStateContext);
  !state ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false) : void 0;
  return state;
}
// External hooks
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative,
    viewTransition
  } = _temp === void 0 ? {} : _temp;
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath)(to, {
    relative
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(event => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here unless the replace prop is explicitly set
      let replace = replaceProp !== undefined ? replaceProp : (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createPath)(location) === (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createPath)(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative,
        viewTransition
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative, viewTransition]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */
function useSearchParams(defaultInit) {
  process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not " + "support the URLSearchParams API. If you need to support Internet " + "Explorer 11, we recommend you load a polyfill such as " + "https://github.com/ungap/url-search-params.") : void 0;
  let defaultSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(createSearchParams(defaultInit));
  let hasSetSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  let searchParams = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() =>
  // Only merge in the defaults if we haven't yet called setSearchParams.
  // Once we call that we want those to take precedence, otherwise you can't
  // remove a param with setSearchParams({}) if it has an initial value
  getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [location.search]);
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  let setSearchParams = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((nextInit, navigateOptions) => {
    const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
    hasSetSearchParamsRef.current = true;
    navigate("?" + newSearchParams, navigateOptions);
  }, [navigate, searchParams]);
  return [searchParams, setSearchParams];
}
function validateClientSideSubmission() {
  if (typeof document === "undefined") {
    throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
  }
}
let fetcherId = 0;
let getUniqueFetcherId = () => "__" + String(++fetcherId) + "__";
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */
function useSubmit() {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseSubmit);
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext);
  let currentRouteId = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_useRouteId)();
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (target, options) {
    if (options === void 0) {
      options = {};
    }
    validateClientSideSubmission();
    let {
      action,
      method,
      encType,
      formData,
      body
    } = getFormSubmissionInfo(target, basename);
    if (options.navigate === false) {
      let key = options.fetcherKey || getUniqueFetcherId();
      router.fetch(key, currentRouteId, options.action || action, {
        preventScrollReset: options.preventScrollReset,
        formData,
        body,
        formMethod: options.method || method,
        formEncType: options.encType || encType,
        flushSync: options.flushSync
      });
    } else {
      router.navigate(options.action || action, {
        preventScrollReset: options.preventScrollReset,
        formData,
        body,
        formMethod: options.method || method,
        formEncType: options.encType || encType,
        replace: options.replace,
        state: options.state,
        fromRouteId: currentRouteId,
        flushSync: options.flushSync,
        viewTransition: options.viewTransition
      });
    }
  }, [router, basename, currentRouteId]);
}
// v7: Eventually we should deprecate this entirely in favor of using the
// router method directly?
function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext);
  let routeContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_RouteContext);
  !routeContext ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "useFormAction must be used inside a RouteContext") : (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false) : void 0;
  let [match] = routeContext.matches.slice(-1);
  // Shallow clone path so we can modify it below, otherwise we modify the
  // object referenced by useMemo inside useResolvedPath
  let path = _extends({}, (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath)(action ? action : ".", {
    relative
  }));
  // If no action was specified, browsers will persist current search params
  // when determining the path, so match that behavior
  // https://github.com/remix-run/remix/issues/927
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  if (action == null) {
    // Safe to write to this directly here since if action was undefined, we
    // would have called useResolvedPath(".") which will never include a search
    path.search = location.search;
    // When grabbing search params from the URL, remove any included ?index param
    // since it might not apply to our contextual route.  We add it back based
    // on match.route.index below
    let params = new URLSearchParams(path.search);
    let indexValues = params.getAll("index");
    let hasNakedIndexParam = indexValues.some(v => v === "");
    if (hasNakedIndexParam) {
      params.delete("index");
      indexValues.filter(v => v).forEach(v => params.append("index", v));
      let qs = params.toString();
      path.search = qs ? "?" + qs : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  // If we're operating within a basename, prepend it to the pathname prior
  // to creating the form action.  If this is a root navigation, then just use
  // the raw basename which allows the basename to have full control over the
  // presence of a trailing slash on root actions
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : (0,react_router__WEBPACK_IMPORTED_MODULE_2__.joinPaths)([basename, path.pathname]);
  }
  return (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createPath)(path);
}
// TODO: (v7) Change the useFetcher generic default from `any` to `unknown`
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */
function useFetcher(_temp3) {
  var _route$matches;
  let {
    key
  } = _temp3 === void 0 ? {} : _temp3;
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseFetcher);
  let state = useDataRouterState(DataRouterStateHook.UseFetcher);
  let fetcherData = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FetchersContext);
  let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_RouteContext);
  let routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
  !fetcherData ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "useFetcher must be used inside a FetchersContext") : (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false) : void 0;
  !route ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "useFetcher must be used inside a RouteContext") : (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false) : void 0;
  !(routeId != null) ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "useFetcher can only be used on routes that contain a unique \"id\"") : (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false) : void 0;
  // Fetcher key handling
  // OK to call conditionally to feature detect `useId`
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let defaultKey = useIdImpl ? useIdImpl() : "";
  let [fetcherKey, setFetcherKey] = react__WEBPACK_IMPORTED_MODULE_0__.useState(key || defaultKey);
  if (key && key !== fetcherKey) {
    setFetcherKey(key);
  } else if (!fetcherKey) {
    // We will only fall through here when `useId` is not available
    setFetcherKey(getUniqueFetcherId());
  }
  // Registration/cleanup
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    router.getFetcher(fetcherKey);
    return () => {
      // Tell the router we've unmounted - if v7_fetcherPersist is enabled this
      // will not delete immediately but instead queue up a delete after the
      // fetcher returns to an `idle` state
      router.deleteFetcher(fetcherKey);
    };
  }, [router, fetcherKey]);
  // Fetcher additions
  let load = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((href, opts) => {
    !routeId ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "No routeId available for fetcher.load()") : (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false) : void 0;
    router.fetch(fetcherKey, routeId, href, opts);
  }, [fetcherKey, routeId, router]);
  let submitImpl = useSubmit();
  let submit = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((target, opts) => {
    submitImpl(target, _extends({}, opts, {
      navigate: false,
      fetcherKey
    }));
  }, [fetcherKey, submitImpl]);
  let FetcherForm = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    let FetcherForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Form, _extends({}, props, {
        navigate: false,
        fetcherKey: fetcherKey,
        ref: ref
      }));
    });
    if (process.env.NODE_ENV !== "production") {
      FetcherForm.displayName = "fetcher.Form";
    }
    return FetcherForm;
  }, [fetcherKey]);
  // Exposed FetcherWithComponents
  let fetcher = state.fetchers.get(fetcherKey) || react_router__WEBPACK_IMPORTED_MODULE_2__.IDLE_FETCHER;
  let data = fetcherData.get(fetcherKey);
  let fetcherWithComponents = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => _extends({
    Form: FetcherForm,
    submit,
    load
  }, fetcher, {
    data
  }), [FetcherForm, submit, load, fetcher, data]);
  return fetcherWithComponents;
}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */
function useFetchers() {
  let state = useDataRouterState(DataRouterStateHook.UseFetchers);
  return Array.from(state.fetchers.entries()).map(_ref11 => {
    let [key, fetcher] = _ref11;
    return _extends({}, fetcher, {
      key
    });
  });
}
const SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
let savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */
function useScrollRestoration(_temp4) {
  let {
    getKey,
    storageKey
  } = _temp4 === void 0 ? {} : _temp4;
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseScrollRestoration);
  let {
    restoreScrollPosition,
    preventScrollReset
  } = useDataRouterState(DataRouterStateHook.UseScrollRestoration);
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext);
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  let matches = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useMatches)();
  let navigation = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigation)();
  // Trigger manual scroll restoration while we're active
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);
  // Save positions on pagehide
  usePageHide(react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    if (navigation.state === "idle") {
      let key = (getKey ? getKey(location, matches) : null) || location.key;
      savedScrollPositions[key] = window.scrollY;
    }
    try {
      sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
    } catch (error) {
      process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(false, "Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (" + error + ").") : void 0;
    }
    window.history.scrollRestoration = "auto";
  }, [storageKey, getKey, navigation.state, location, matches]));
  // Read in any saved scroll locations
  if (typeof document !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      try {
        let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
        if (sessionPositions) {
          savedScrollPositions = JSON.parse(sessionPositions);
        }
      } catch (e) {
        // no-op, use default empty object
      }
    }, [storageKey]);
    // Enable scroll restoration in the router
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      let getKeyWithoutBasename = getKey && basename !== "/" ? (location, matches) => getKey( // Strip the basename to match useLocation()
      _extends({}, location, {
        pathname: (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(location.pathname, basename) || location.pathname
      }), matches) : getKey;
      let disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, () => window.scrollY, getKeyWithoutBasename);
      return () => disableScrollRestoration && disableScrollRestoration();
    }, [router, basename, getKey]);
    // Restore scrolling when state.restoreScrollPosition changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      // Explicit false means don't do anything (used for submissions)
      if (restoreScrollPosition === false) {
        return;
      }
      // been here before, scroll to it
      if (typeof restoreScrollPosition === "number") {
        window.scrollTo(0, restoreScrollPosition);
        return;
      }
      // try to scroll to the hash
      if (location.hash) {
        let el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (el) {
          el.scrollIntoView();
          return;
        }
      }
      // Don't reset if this navigation opted out
      if (preventScrollReset === true) {
        return;
      }
      // otherwise go to the top on new locations
      window.scrollTo(0, 0);
    }, [location, restoreScrollPosition, preventScrollReset]);
  }
}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */
function useBeforeUnload(callback, options) {
  let {
    capture
  } = options || {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("beforeunload", callback, opts);
    return () => {
      window.removeEventListener("beforeunload", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */
function usePageHide(callback, options) {
  let {
    capture
  } = options || {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("pagehide", callback, opts);
    return () => {
      window.removeEventListener("pagehide", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */
function usePrompt(_ref12) {
  let {
    when,
    message
  } = _ref12;
  let blocker = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useBlocker)(when);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blocker.state === "blocked") {
      let proceed = window.confirm(message);
      if (proceed) {
        // This timeout is needed to avoid a weird "race" on POP navigations
        // between the `window.history` revert navigation and the result of
        // `window.confirm`
        setTimeout(blocker.proceed, 0);
      } else {
        blocker.reset();
      }
    }
  }, [blocker, message]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blocker.state === "blocked" && !when) {
      blocker.reset();
    }
  }, [blocker, when]);
}
/**
 * Return a boolean indicating if there is an active view transition to the
 * given href.  You can use this value to render CSS classes or viewTransitionName
 * styles onto your elements
 *
 * @param href The destination href
 * @param [opts.relative] Relative routing type ("route" | "path")
 */
function useViewTransitionState(to, opts) {
  if (opts === void 0) {
    opts = {};
  }
  let vtContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ViewTransitionContext);
  !(vtContext != null) ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  " + "Did you accidentally import `RouterProvider` from `react-router`?") : (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false) : void 0;
  let {
    basename
  } = useDataRouterContext(DataRouterHook.useViewTransitionState);
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath)(to, {
    relative: opts.relative
  });
  if (!vtContext.isTransitioning) {
    return false;
  }
  let currentPath = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
  let nextPath = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
  // Transition is active if we're going to or coming from the indicated
  // destination.  This ensures that other PUSH navigations that reverse
  // an indicated transition apply.  I.e., on the list view you have:
  //
  //   <NavLink to="/details/1" viewTransition>
  //
  // If you click the breadcrumb back to the list view:
  //
  //   <NavLink to="/list" viewTransition>
  //
  // We should apply the transition because it's indicated as active going
  // from /list -> /details/1 and therefore should be active on the reverse
  // (even though this isn't strictly a POP reverse)
  return (0,react_router__WEBPACK_IMPORTED_MODULE_2__.matchPath)(path.pathname, nextPath) != null || (0,react_router__WEBPACK_IMPORTED_MODULE_2__.matchPath)(path.pathname, currentPath) != null;
}
//#endregion


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 41:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortedDeferredError": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.AbortedDeferredError),
/* harmony export */   "Await": () => (/* binding */ Await),
/* harmony export */   "MemoryRouter": () => (/* binding */ MemoryRouter),
/* harmony export */   "Navigate": () => (/* binding */ Navigate),
/* harmony export */   "NavigationType": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action),
/* harmony export */   "Outlet": () => (/* binding */ Outlet),
/* harmony export */   "Route": () => (/* binding */ Route),
/* harmony export */   "Router": () => (/* binding */ Router),
/* harmony export */   "RouterProvider": () => (/* binding */ RouterProvider),
/* harmony export */   "Routes": () => (/* binding */ Routes),
/* harmony export */   "UNSAFE_DataRouterContext": () => (/* binding */ DataRouterContext),
/* harmony export */   "UNSAFE_DataRouterStateContext": () => (/* binding */ DataRouterStateContext),
/* harmony export */   "UNSAFE_LocationContext": () => (/* binding */ LocationContext),
/* harmony export */   "UNSAFE_NavigationContext": () => (/* binding */ NavigationContext),
/* harmony export */   "UNSAFE_RouteContext": () => (/* binding */ RouteContext),
/* harmony export */   "UNSAFE_logV6DeprecationWarnings": () => (/* binding */ logV6DeprecationWarnings),
/* harmony export */   "UNSAFE_mapRouteProperties": () => (/* binding */ mapRouteProperties),
/* harmony export */   "UNSAFE_useRouteId": () => (/* binding */ useRouteId),
/* harmony export */   "UNSAFE_useRoutesImpl": () => (/* binding */ useRoutesImpl),
/* harmony export */   "createMemoryRouter": () => (/* binding */ createMemoryRouter),
/* harmony export */   "createPath": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createPath),
/* harmony export */   "createRoutesFromChildren": () => (/* binding */ createRoutesFromChildren),
/* harmony export */   "createRoutesFromElements": () => (/* binding */ createRoutesFromChildren),
/* harmony export */   "defer": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.defer),
/* harmony export */   "generatePath": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.generatePath),
/* harmony export */   "isRouteErrorResponse": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.isRouteErrorResponse),
/* harmony export */   "json": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.json),
/* harmony export */   "matchPath": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchPath),
/* harmony export */   "matchRoutes": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes),
/* harmony export */   "parsePath": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath),
/* harmony export */   "redirect": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.redirect),
/* harmony export */   "redirectDocument": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.redirectDocument),
/* harmony export */   "renderMatches": () => (/* binding */ renderMatches),
/* harmony export */   "replace": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.replace),
/* harmony export */   "resolvePath": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolvePath),
/* harmony export */   "useActionData": () => (/* binding */ useActionData),
/* harmony export */   "useAsyncError": () => (/* binding */ useAsyncError),
/* harmony export */   "useAsyncValue": () => (/* binding */ useAsyncValue),
/* harmony export */   "useBlocker": () => (/* binding */ useBlocker),
/* harmony export */   "useHref": () => (/* binding */ useHref),
/* harmony export */   "useInRouterContext": () => (/* binding */ useInRouterContext),
/* harmony export */   "useLoaderData": () => (/* binding */ useLoaderData),
/* harmony export */   "useLocation": () => (/* binding */ useLocation),
/* harmony export */   "useMatch": () => (/* binding */ useMatch),
/* harmony export */   "useMatches": () => (/* binding */ useMatches),
/* harmony export */   "useNavigate": () => (/* binding */ useNavigate),
/* harmony export */   "useNavigation": () => (/* binding */ useNavigation),
/* harmony export */   "useNavigationType": () => (/* binding */ useNavigationType),
/* harmony export */   "useOutlet": () => (/* binding */ useOutlet),
/* harmony export */   "useOutletContext": () => (/* binding */ useOutletContext),
/* harmony export */   "useParams": () => (/* binding */ useParams),
/* harmony export */   "useResolvedPath": () => (/* binding */ useResolvedPath),
/* harmony export */   "useRevalidator": () => (/* binding */ useRevalidator),
/* harmony export */   "useRouteError": () => (/* binding */ useRouteError),
/* harmony export */   "useRouteLoaderData": () => (/* binding */ useRouteLoaderData),
/* harmony export */   "useRoutes": () => (/* binding */ useRoutes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remix_run_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* provided dependency */ var process = __webpack_require__(9);
/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */




function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
const DataRouterContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataRouterContext.displayName = "DataRouter";
}
const DataRouterStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataRouterStateContext.displayName = "DataRouterState";
}
const AwaitContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (process.env.NODE_ENV !== "production") {
  AwaitContext.displayName = "Await";
}

/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level `<Router>` API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */

const NavigationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (process.env.NODE_ENV !== "production") {
  NavigationContext.displayName = "Navigation";
}
const LocationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (process.env.NODE_ENV !== "production") {
  LocationContext.displayName = "Location";
}
const RouteContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
if (process.env.NODE_ENV !== "production") {
  RouteContext.displayName = "Route";
}
const RouteErrorContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (process.env.NODE_ENV !== "production") {
  RouteErrorContext.displayName = "RouteError";
}

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/v6/hooks/use-href
 */
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useHref() may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
  let {
    basename,
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;

  // If we're operating within a basename, prepend it to the pathname prior
  // to creating the href.  If this is a root navigation, then just use the raw
  // basename which allows the basename to have full control over the presence
  // of a trailing slash on root links
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}

/**
 * Returns true if this component is a descendant of a `<Router>`.
 *
 * @see https://reactrouter.com/v6/hooks/use-in-router-context
 */
function useInRouterContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext) != null;
}

/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/v6/hooks/use-location
 */
function useLocation() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useLocation() may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).location;
}

/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/v6/hooks/use-navigation-type
 */
function useNavigationType() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).navigationType;
}

/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * `<NavLink>`.
 *
 * @see https://reactrouter.com/v6/hooks/use-match
 */
function useMatch(pattern) {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useMatch() may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
  let {
    pathname
  } = useLocation();
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchPath)(pattern, (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_decodePath)(pathname)), [pathname, pattern]);
}

/**
 * The interface for the navigate() function returned from useNavigate().
 */

const navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.";

// Mute warnings for calls to useNavigate in SSR environments
function useIsomorphicLayoutEffect(cb) {
  let isStatic = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext).static;
  if (!isStatic) {
    // We should be able to get rid of this once react 18.3 is released
    // See: https://github.com/facebook/react/pull/26395
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(cb);
  }
}

/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/v6/hooks/use-navigate
 */
function useNavigate() {
  let {
    isDataRoute
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useNavigate() may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  let {
    basename,
    future,
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath));
  let activeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }
    process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(activeRef.current, navigateEffectWarning) : void 0;

    // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our history listener yet
    if (!activeRef.current) return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    let path = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");

    // If we're operating within a basename, prepend it to the pathname prior
    // to handing off to history (but only if we're not in a data router,
    // otherwise it'll prepend the basename inside of the router).
    // If this is a root navigation, then we navigate to the raw basename
    // which allows the basename to have full control over the presence of a
    // trailing slash on root links
    if (dataRouterContext == null && basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([basename, path.pathname]);
    }
    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname, dataRouterContext]);
  return navigate;
}
const OutletContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/v6/hooks/use-outlet-context
 */
function useOutletContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(OutletContext);
}

/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by `<Outlet>` to render child routes.
 *
 * @see https://reactrouter.com/v6/hooks/use-outlet
 */
function useOutlet(context) {
  let outlet = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext).outlet;
  if (outlet) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }
  return outlet;
}

/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/v6/hooks/use-params
 */
function useParams() {
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}

/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/v6/hooks/use-resolved-path
 */
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    future
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath));
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}

/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an `<Outlet>` to render their child route's
 * element.
 *
 * @see https://reactrouter.com/v6/hooks/use-routes
 */
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}

// Internal implementation with accept optional param for RouterProvider usage
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useRoutes() may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
  let {
    navigator,
    static: isStatic
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    matches: parentMatches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (process.env.NODE_ENV !== "production") {
    // You won't get a warning about 2 different <Routes> under a <Route>
    // without a trailing *, but this is a best-effort warning anyway since we
    // cannot even give the warning unless they land at the parent route.
    //
    // Example:
    //
    // <Routes>
    //   {/* This route path MUST end with /* because otherwise
    //       it will never match /blog/post/123 */}
    //   <Route path="blog" element={<Blog />} />
    //   <Route path="blog/feed" element={<BlogFeed />} />
    // </Routes>
    //
    // function Blog() {
    //   return (
    //     <Routes>
    //       <Route path="post/:id" element={<Post />} />
    //     </Routes>
    //   );
    // }
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath)(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, " + "the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop.")) : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    // Determine the remaining pathname by removing the # of URL segments the
    // parentPathnameBase has, instead of removing based on character count.
    // This is because we can't guarantee that incoming/outgoing encodings/
    // decodings will match exactly.
    // We decode paths before matching on a per-segment basis with
    // decodeURIComponent(), but we re-encode pathnames via `new URL()` so they
    // match what `window.location.pathname` would reflect.  Those don't 100%
    // align when it comes to encoded URI characters such as % and &.
    //
    // So we may end up with:
    //   pathname:           "/descendant/a%25b/match"
    //   parentPathnameBase: "/descendant/a%b"
    //
    // And the direct substring removal approach won't work :/
    let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
    let segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  let matches = !isStatic && dataRouterState && dataRouterState.matches && dataRouterState.matches.length > 0 ? dataRouterState.matches : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes)(routes, {
    pathname: remainingPathname
  });
  if (process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ") : void 0;
    process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(matches == null || matches[matches.length - 1].route.element !== undefined || matches[matches.length - 1].route.Component !== undefined || matches[matches.length - 1].route.lazy !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" " + "does not have an element or Component. This means it will render an <Outlet /> with a " + "null value by default resulting in an \"empty\" page.") : void 0;
  }
  let renderedMatches = _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([parentPathnameBase,
    // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([parentPathnameBase,
    // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase])
  })), parentMatches, dataRouterState, future);

  // When a user passes in a `locationArg`, the associated routes need to
  // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
  // to use the scoped location instead of the global location.
  if (locationArg && renderedMatches) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider, {
      value: {
        location: _extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.isRouteErrorResponse)(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  if (process.env.NODE_ENV !== "production") {
    console.error("Error handled by React Router default ErrorBoundary:", error);
    devInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
      style: codeStyles
    }, "ErrorBoundary"), " or", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
      style: codeStyles
    }, "errorElement"), " prop on your route."));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
const defaultErrorElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error: error
    };
  }
  static getDerivedStateFromProps(props, state) {
    // When we get into an error state, the user will likely click "back" to the
    // previous page that didn't have an error. Because this wraps the entire
    // application, that will have no effect--the error page continues to display.
    // This gives us a mechanism to recover from the error when the location changes.
    //
    // Whether we're in an error state or not, we update the location in state
    // so that when we are in an error state, it gets reset when a new location
    // comes in and the user recovers from the error.
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }

    // If we're not changing locations, preserve the location but still surface
    // any new errors that may come through. We retain the existing error, we do
    // this because the error provided from the app state may be cleared without
    // the location changing.
    return {
      error: props.error !== undefined ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);

  // Track how deep we got in our render pass to emulate SSR componentDidCatch
  // in a DataStaticRouter
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState, future) {
  var _dataRouterState;
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (dataRouterState === void 0) {
    dataRouterState = null;
  }
  if (future === void 0) {
    future = null;
  }
  if (matches == null) {
    var _future;
    if (!dataRouterState) {
      return null;
    }
    if (dataRouterState.errors) {
      // Don't bail if we have data router errors so we can render them in the
      // boundary.  Use the pre-matched (or shimmed) matches
      matches = dataRouterState.matches;
    } else if ((_future = future) != null && _future.v7_partialHydration && parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
      // Don't bail if we're initializing with partial hydration and we have
      // router matches.  That means we're actively running `patchRoutesOnNavigation`
      // so we should render down the partial matches to the appropriate
      // `HydrateFallback`.  We only do this if `parentMatches` is empty so it
      // only impacts the root matches for `RouterProvider` and no descendant
      // `<Routes>`
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;

  // If we have data errors, trim matches to the highest error boundary
  let errors = (_dataRouterState = dataRouterState) == null ? void 0 : _dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(m => m.route.id && (errors == null ? void 0 : errors[m.route.id]) !== undefined);
    !(errorIndex >= 0) ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "Could not find a matching route for errors on route IDs: " + Object.keys(errors).join(",")) : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }

  // If we're in a partial hydration mode, detect if we need to render down to
  // a given HydrateFallback while we load the rest of the hydration data
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState && future && future.v7_partialHydration) {
    for (let i = 0; i < renderedMatches.length; i++) {
      let match = renderedMatches[i];
      // Track the deepest fallback up until the first route without data
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i;
      }
      if (match.route.id) {
        let {
          loaderData,
          errors
        } = dataRouterState;
        let needsToRunLoader = match.route.loader && loaderData[match.route.id] === undefined && (!errors || errors[match.route.id] === undefined);
        if (match.route.lazy || needsToRunLoader) {
          // We found the first route that's not ready to render (waiting on
          // lazy, or has a loader that hasn't run yet).  Flag that we need to
          // render a fallback and render up until the appropriate fallback
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    // Only data routers handle errors/fallbacks
    let error;
    let shouldRenderHydrateFallback = false;
    let errorElement = null;
    let hydrateFallbackElement = null;
    if (dataRouterState) {
      error = errors && match.route.id ? errors[match.route.id] : undefined;
      errorElement = match.route.errorElement || defaultErrorElement;
      if (renderFallback) {
        if (fallbackIndex < 0 && index === 0) {
          warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = null;
        } else if (fallbackIndex === index) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = match.route.hydrateFallbackElement || null;
        }
      }
    }
    let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (shouldRenderHydrateFallback) {
        children = hydrateFallbackElement;
      } else if (match.route.Component) {
        // Note: This is a de-optimized path since React won't re-use the
        // ReactElement since it's identity changes with each new
        // React.createElement call.  We keep this so folks can use
        // `<Route Component={...}>` in `<Routes>` but generally `Component`
        // usage is only advised in `RouterProvider` when we can convert it to
        // `element` ahead of time.
        children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderedRoute, {
        match: match,
        routeContext: {
          outlet,
          matches,
          isDataRoute: dataRouterState != null
        },
        children: children
      });
    };
    // Only wrap in an error boundary within data router usages when we have an
    // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
    // an ancestor ErrorBoundary/errorElement
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error: error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches,
        isDataRoute: true
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook = /*#__PURE__*/function (DataRouterHook) {
  DataRouterHook["UseBlocker"] = "useBlocker";
  DataRouterHook["UseRevalidator"] = "useRevalidator";
  DataRouterHook["UseNavigateStable"] = "useNavigate";
  return DataRouterHook;
}(DataRouterHook || {});
var DataRouterStateHook = /*#__PURE__*/function (DataRouterStateHook) {
  DataRouterStateHook["UseBlocker"] = "useBlocker";
  DataRouterStateHook["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook["UseActionData"] = "useActionData";
  DataRouterStateHook["UseRouteError"] = "useRouteError";
  DataRouterStateHook["UseNavigation"] = "useNavigation";
  DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook["UseMatches"] = "useMatches";
  DataRouterStateHook["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook["UseRouteId"] = "useRouteId";
  return DataRouterStateHook;
}(DataRouterStateHook || {});
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  !ctx ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterStateContext);
  !state ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  !route ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
  return route;
}

// Internal version with hookName-aware debugging
function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, hookName + " can only be used on routes that contain a unique \"id\"") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
  return thisRoute.route.id;
}

/**
 * Returns the ID for the nearest contextual route
 */
function useRouteId() {
  return useCurrentRouteId(DataRouterStateHook.UseRouteId);
}

/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */
function useNavigation() {
  let state = useDataRouterState(DataRouterStateHook.UseNavigation);
  return state.navigation;
}

/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */
function useRevalidator() {
  let dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
  let state = useDataRouterState(DataRouterStateHook.UseRevalidator);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    revalidate: dataRouterContext.router.revalidate,
    state: state.revalidation
  }), [dataRouterContext.router.revalidate, state.revalidation]);
}

/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */
function useMatches() {
  let {
    matches,
    loaderData
  } = useDataRouterState(DataRouterStateHook.UseMatches);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => matches.map(m => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_convertRouteMatchToUiMatch)(m, loaderData)), [matches, loaderData]);
}

/**
 * Returns the loader data for the nearest ancestor Route loader
 */
function useLoaderData() {
  let state = useDataRouterState(DataRouterStateHook.UseLoaderData);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
  if (state.errors && state.errors[routeId] != null) {
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
    return undefined;
  }
  return state.loaderData[routeId];
}

/**
 * Returns the loaderData for the given routeId
 */
function useRouteLoaderData(routeId) {
  let state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
  return state.loaderData[routeId];
}

/**
 * Returns the action data for the nearest ancestor Route action
 */
function useActionData() {
  let state = useDataRouterState(DataRouterStateHook.UseActionData);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
  return state.actionData ? state.actionData[routeId] : undefined;
}

/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */
function useRouteError() {
  var _state$errors;
  let error = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);

  // If this was a render error, we put it in a RouteError context inside
  // of RenderErrorBoundary
  if (error !== undefined) {
    return error;
  }

  // Otherwise look for errors from our data router state
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}

/**
 * Returns the happy-path data from the nearest ancestor `<Await />` value
 */
function useAsyncValue() {
  let value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(AwaitContext);
  return value == null ? void 0 : value._data;
}

/**
 * Returns the error from the nearest ancestor `<Await />` value
 */
function useAsyncError() {
  let value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(AwaitContext);
  return value == null ? void 0 : value._error;
}
let blockerId = 0;

/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */
function useBlocker(shouldBlock) {
  let {
    router,
    basename
  } = useDataRouterContext(DataRouterHook.UseBlocker);
  let state = useDataRouterState(DataRouterStateHook.UseBlocker);
  let [blockerKey, setBlockerKey] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
  let blockerFunction = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(arg => {
    if (typeof shouldBlock !== "function") {
      return !!shouldBlock;
    }
    if (basename === "/") {
      return shouldBlock(arg);
    }

    // If they provided us a function and we've got an active basename, strip
    // it from the locations we expose to the user to match the behavior of
    // useLocation
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = arg;
    return shouldBlock({
      currentLocation: _extends({}, currentLocation, {
        pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(currentLocation.pathname, basename) || currentLocation.pathname
      }),
      nextLocation: _extends({}, nextLocation, {
        pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(nextLocation.pathname, basename) || nextLocation.pathname
      }),
      historyAction
    });
  }, [basename, shouldBlock]);

  // This effect is in charge of blocker key assignment and deletion (which is
  // tightly coupled to the key)
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let key = String(++blockerId);
    setBlockerKey(key);
    return () => router.deleteBlocker(key);
  }, [router]);

  // This effect handles assigning the blockerFunction.  This is to handle
  // unstable blocker function identities, and happens only after the prior
  // effect so we don't get an orphaned blockerFunction in the router with a
  // key of "".  Until then we just have the IDLE_BLOCKER.
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blockerKey !== "") {
      router.getBlocker(blockerKey, blockerFunction);
    }
  }, [router, blockerKey, blockerFunction]);

  // Prefer the blocker from `state` not `router.state` since DataRouterContext
  // is memoized so this ensures we update on blocker state updates
  return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.IDLE_BLOCKER;
}

/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */
function useNavigateStable() {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseNavigateStable);
  let id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
  let activeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }
    process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(activeRef.current, navigateEffectWarning) : void 0;

    // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our router subscriber yet
    if (!activeRef.current) return;
    if (typeof to === "number") {
      router.navigate(to);
    } else {
      router.navigate(to, _extends({
        fromRouteId: id
      }, options));
    }
  }, [router, id]);
  return navigate;
}
const alreadyWarned$1 = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned$1[key]) {
    alreadyWarned$1[key] = true;
    process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, message) : void 0;
  }
}

const alreadyWarned = {};
function warnOnce(key, message) {
  if (process.env.NODE_ENV !== "production" && !alreadyWarned[message]) {
    alreadyWarned[message] = true;
    console.warn(message);
  }
}
const logDeprecation = (flag, msg, link) => warnOnce(flag, "\u26A0\uFE0F React Router Future Flag Warning: " + msg + ". " + ("You can use the `" + flag + "` future flag to opt-in early. ") + ("For more information, see " + link + "."));
function logV6DeprecationWarnings(renderFuture, routerFuture) {
  if ((renderFuture == null ? void 0 : renderFuture.v7_startTransition) === undefined) {
    logDeprecation("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition");
  }
  if ((renderFuture == null ? void 0 : renderFuture.v7_relativeSplatPath) === undefined && (!routerFuture || !routerFuture.v7_relativeSplatPath)) {
    logDeprecation("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath");
  }
  if (routerFuture) {
    if (routerFuture.v7_fetcherPersist === undefined) {
      logDeprecation("v7_fetcherPersist", "The persistence behavior of fetchers is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist");
    }
    if (routerFuture.v7_normalizeFormMethod === undefined) {
      logDeprecation("v7_normalizeFormMethod", "Casing of `formMethod` fields is being normalized to uppercase in v7", "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod");
    }
    if (routerFuture.v7_partialHydration === undefined) {
      logDeprecation("v7_partialHydration", "`RouterProvider` hydration behavior is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_partialhydration");
    }
    if (routerFuture.v7_skipActionErrorRevalidation === undefined) {
      logDeprecation("v7_skipActionErrorRevalidation", "The revalidation behavior after 4xx/5xx `action` responses is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation");
    }
  }
}

/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/
const START_TRANSITION = "startTransition";
const startTransitionImpl = react__WEBPACK_IMPORTED_MODULE_0__[START_TRANSITION];

/**
 * Given a Remix Router instance, render the appropriate UI
 */
function RouterProvider(_ref) {
  let {
    fallbackElement,
    router,
    future
  } = _ref;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(router.state);
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    if (v7_startTransition && startTransitionImpl) {
      startTransitionImpl(() => setStateImpl(newState));
    } else {
      setStateImpl(newState);
    }
  }, [setStateImpl, v7_startTransition]);

  // Need to use a layout effect here so we are subscribed early enough to
  // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => router.subscribe(setState), [router, setState]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(fallbackElement == null || !router.future.v7_partialHydration, "`<RouterProvider fallbackElement>` is deprecated when using " + "`v7_partialHydration`, use a `HydrateFallback` component instead") : void 0;
    // Only log this once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let navigator = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: n => router.navigate(n),
      push: (to, state, opts) => router.navigate(to, {
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      }),
      replace: (to, state, opts) => router.navigate(to, {
        replace: true,
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      })
    };
  }, [router]);
  let basename = router.basename || "/";
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    router,
    navigator,
    static: false,
    basename
  }), [router, navigator, basename]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => logV6DeprecationWarnings(future, router.future), [router, future]);

  // The fragment and {null} here are important!  We need them to keep React 18's
  // useId happy when we are server-rendering since we may have a <script> here
  // containing the hydrated server-side staticContext (from StaticRouterProvider).
  // useId relies on the component tree structure to generate deterministic id's
  // so we need to ensure it remains the same on the client even though
  // we don't need the <script> tag
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterContext.Provider, {
    value: dataRouterContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterStateContext.Provider, {
    value: state
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, {
    basename: basename,
    location: state.location,
    navigationType: state.historyAction,
    navigator: navigator,
    future: {
      v7_relativeSplatPath: router.future.v7_relativeSplatPath
    }
  }, state.initialized || router.future.v7_partialHydration ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRoutes, {
    routes: router.routes,
    future: router.future,
    state: state
  }) : fallbackElement))), null);
}
function DataRoutes(_ref2) {
  let {
    routes,
    future,
    state
  } = _ref2;
  return useRoutesImpl(routes, undefined, state, future);
}
/**
 * A `<Router>` that stores all entries in memory.
 *
 * @see https://reactrouter.com/v6/router-components/memory-router
 */
function MemoryRouter(_ref3) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex,
    future
  } = _ref3;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createMemoryHistory)({
      initialEntries,
      initialIndex,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => logV6DeprecationWarnings(future), [future]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
    future: future
  });
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/v6/components/navigate
 */
function Navigate(_ref4) {
  let {
    to,
    replace,
    state,
    relative
  } = _ref4;
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of
  // the router loaded. We can help them understand how to avoid that.
  "<Navigate> may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
  let {
    future,
    static: isStatic
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(!isStatic, "<Navigate> must not be used on the initial render in a <StaticRouter>. " + "This is a no-op, but you should modify your code so the <Navigate> is " + "only ever rendered in response to some user interaction or state change.") : void 0;
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let navigate = useNavigate();

  // Resolve the path outside of the effect so that when effects run twice in
  // StrictMode they navigate to the same place
  let path = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath), locationPathname, relative === "path");
  let jsonPath = JSON.stringify(path);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => navigate(JSON.parse(jsonPath), {
    replace,
    state,
    relative
  }), [navigate, jsonPath, relative, replace, state]);
  return null;
}
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/v6/components/outlet
 */
function Outlet(props) {
  return useOutlet(props.context);
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/v6/components/route
 */
function Route(_props) {
  process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "A <Route> is only ever to be used as the child of <Routes> element, " + "never rendered directly. Please wrap your <Route> in a <Routes>.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) ;
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @see https://reactrouter.com/v6/router-components/router
 */
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action.Pop,
    navigator,
    static: staticProp = false,
    future
  } = _ref5;
  !!useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "You cannot render a <Router> inside another <Router>." + " You should never have more than one in your app.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;

  // Preserve trailing slashes on basename, so we can let the user control
  // the enforcement of trailing slashes throughout the app
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    basename,
    navigator,
    static: staticProp,
    future: _extends({
      v7_relativeSplatPath: false
    }, future)
  }), [basename, future, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath)(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    let trailingPathname = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(locationContext != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.") : void 0;
  if (locationContext == null) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider, {
    children: children,
    value: locationContext
  }));
}
/**
 * A container for a nested tree of `<Route>` elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/v6/components/routes
 */
function Routes(_ref6) {
  let {
    children,
    location
  } = _ref6;
  return useRoutes(createRoutesFromChildren(children), location);
}
/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */
function Await(_ref7) {
  let {
    children,
    errorElement,
    resolve
  } = _ref7;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitErrorBoundary, {
    resolve: resolve,
    errorElement: errorElement
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ResolveAwait, null, children));
}
var AwaitRenderStatus = /*#__PURE__*/function (AwaitRenderStatus) {
  AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
  AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
  AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
  return AwaitRenderStatus;
}(AwaitRenderStatus || {});
const neverSettledPromise = new Promise(() => {});
class AwaitErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("<Await> caught the following error during render", error, errorInfo);
  }
  render() {
    let {
      children,
      errorElement,
      resolve
    } = this.props;
    let promise = null;
    let status = AwaitRenderStatus.pending;
    if (!(resolve instanceof Promise)) {
      // Didn't get a promise - provide as a resolved promise
      status = AwaitRenderStatus.success;
      promise = Promise.resolve();
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_data", {
        get: () => resolve
      });
    } else if (this.state.error) {
      // Caught a render error, provide it as a rejected promise
      status = AwaitRenderStatus.error;
      let renderError = this.state.error;
      promise = Promise.reject().catch(() => {}); // Avoid unhandled rejection warnings
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_error", {
        get: () => renderError
      });
    } else if (resolve._tracked) {
      // Already tracked promise - check contents
      promise = resolve;
      status = "_error" in promise ? AwaitRenderStatus.error : "_data" in promise ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
    } else {
      // Raw (untracked) promise - track it
      status = AwaitRenderStatus.pending;
      Object.defineProperty(resolve, "_tracked", {
        get: () => true
      });
      promise = resolve.then(data => Object.defineProperty(resolve, "_data", {
        get: () => data
      }), error => Object.defineProperty(resolve, "_error", {
        get: () => error
      }));
    }
    if (status === AwaitRenderStatus.error && promise._error instanceof _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.AbortedDeferredError) {
      // Freeze the UI by throwing a never resolved promise
      throw neverSettledPromise;
    }
    if (status === AwaitRenderStatus.error && !errorElement) {
      // No errorElement, throw to the nearest route-level error boundary
      throw promise._error;
    }
    if (status === AwaitRenderStatus.error) {
      // Render via our errorElement
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, {
        value: promise,
        children: errorElement
      });
    }
    if (status === AwaitRenderStatus.success) {
      // Render children with resolved value
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, {
        value: promise,
        children: children
      });
    }

    // Throw to the suspense boundary
    throw promise;
  }
}

/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on `<Await>`
 */
function ResolveAwait(_ref8) {
  let {
    children
  } = _ref8;
  let data = useAsyncValue();
  let toRender = typeof children === "function" ? children(data) : children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, toRender);
}

///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/v6/utils/create-routes-from-children
 */
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes = [];
  react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, (element, index) => {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
      return;
    }
    !(element.type === Route) ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
    !(!element.props.index || !element.props.children) ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "An index route cannot have child routes.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}

/**
 * Renders the result of `matchRoutes()` into a React element.
 */
function renderMatches(matches) {
  return _renderMatches(matches);
}

function mapRouteProperties(route) {
  let updates = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
  };
  if (route.Component) {
    if (process.env.NODE_ENV !== "production") {
      if (route.element) {
        process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "You should not include both `Component` and `element` on your route - " + "`Component` will be used.") : void 0;
      }
    }
    Object.assign(updates, {
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.Component),
      Component: undefined
    });
  }
  if (route.HydrateFallback) {
    if (process.env.NODE_ENV !== "production") {
      if (route.hydrateFallbackElement) {
        process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - " + "`HydrateFallback` will be used.") : void 0;
      }
    }
    Object.assign(updates, {
      hydrateFallbackElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.HydrateFallback),
      HydrateFallback: undefined
    });
  }
  if (route.ErrorBoundary) {
    if (process.env.NODE_ENV !== "production") {
      if (route.errorElement) {
        process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - " + "`ErrorBoundary` will be used.") : void 0;
      }
    }
    Object.assign(updates, {
      errorElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.ErrorBoundary),
      ErrorBoundary: undefined
    });
  }
  return updates;
}
function createMemoryRouter(routes, opts) {
  return (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createMemoryHistory)({
      initialEntries: opts == null ? void 0 : opts.initialEntries,
      initialIndex: opts == null ? void 0 : opts.initialIndex
    }),
    hydrationData: opts == null ? void 0 : opts.hydrationData,
    routes,
    mapRouteProperties,
    dataStrategy: opts == null ? void 0 : opts.dataStrategy,
    patchRoutesOnNavigation: opts == null ? void 0 : opts.patchRoutesOnNavigation
  }).initialize();
}


//# sourceMappingURL=index.js.map


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/create fake namespace object */
/******/ (() => {
/******/ 	var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 	var leafPrototypes;
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 16: return value when it's Promise-like
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = this(value);
/******/ 		if(mode & 8) return value;
/******/ 		if(typeof value === 'object' && value) {
/******/ 			if((mode & 4) && value.__esModule) return value;
/******/ 			if((mode & 16) && typeof value.then === 'function') return value;
/******/ 		}
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		var def = {};
/******/ 		leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 		for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 			Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 		}
/******/ 		def['default'] = () => (value);
/******/ 		__webpack_require__.d(ns, def);
/******/ 		return ns;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("db89a94c959574ab2967")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kYWQxMzEyM2RjOTVlMjBjYWI3MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3QkFBd0I7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTTtBQUNOLHlDQUF5QztBQUN6QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0NBQXdDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDJCQUEyQjtBQUMzQixJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGNBQWM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbUJBQW1CO0FBQzVDLGlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUssSUFBSTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0JBQXdCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMseUNBQXlDO0FBQ2hGO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sa0NBQWtDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxVQUFVLElBQUk7QUFDZDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixPQUFPO0FBQ1A7QUFDQSxRQUFRLElBQUk7QUFDWjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsTUFBTSxJQUFJO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seUJBQXlCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtR0FBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlCQUF5QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5QkFBeUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0EsVUFBVSxJQUFJO0FBQ2QsT0FBTztBQUNQO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsTUFBTSxJQUFJO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxLQUFLO0FBQ2Q7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsS0FBSztBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5QkFBeUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFFBQVE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdCQUF3QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUNBQXFDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrMUI7QUFDbDFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNzZK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QTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRXM1QjtBQUN0NUI7Ozs7Ozs7OztVQzU5Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0Esc0RBQXNEO1VBQ3RELHNDQUFzQyxpRUFBaUU7VUFDdkc7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOzs7OztVQ3pCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9AcmVtaXgtcnVuL3JvdXRlci9kaXN0L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL2NvbXBvbmVudHMvTmF2aWdhY2UuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9jb21wb25lbnRzL09wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9jb21wb25lbnRzL1ByaXNwZXZla0FrY2llLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvcGFnZXMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9wYWdlcy9EZW5pay5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL3BhZ2VzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9wYWdlcy9Ob3RGb3VuZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL3BhZ2VzL1BvcnRmb2xpby5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL3BhZ2VzL1NlYXJjaEFQSS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEByZW1peC1ydW4vcm91dGVyIHYxLjIzLjBcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyNyZWdpb24gVHlwZXMgYW5kIENvbnN0YW50c1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8qKlxuICogQWN0aW9ucyByZXByZXNlbnQgdGhlIHR5cGUgb2YgY2hhbmdlIHRvIGEgbG9jYXRpb24gdmFsdWUuXG4gKi9cbnZhciBBY3Rpb247XG4oZnVuY3Rpb24gKEFjdGlvbikge1xuICAvKipcbiAgICogQSBQT1AgaW5kaWNhdGVzIGEgY2hhbmdlIHRvIGFuIGFyYml0cmFyeSBpbmRleCBpbiB0aGUgaGlzdG9yeSBzdGFjaywgc3VjaFxuICAgKiBhcyBhIGJhY2sgb3IgZm9yd2FyZCBuYXZpZ2F0aW9uLiBJdCBkb2VzIG5vdCBkZXNjcmliZSB0aGUgZGlyZWN0aW9uIG9mIHRoZVxuICAgKiBuYXZpZ2F0aW9uLCBvbmx5IHRoYXQgdGhlIGN1cnJlbnQgaW5kZXggY2hhbmdlZC5cbiAgICpcbiAgICogTm90ZTogVGhpcyBpcyB0aGUgZGVmYXVsdCBhY3Rpb24gZm9yIG5ld2x5IGNyZWF0ZWQgaGlzdG9yeSBvYmplY3RzLlxuICAgKi9cbiAgQWN0aW9uW1wiUG9wXCJdID0gXCJQT1BcIjtcbiAgLyoqXG4gICAqIEEgUFVTSCBpbmRpY2F0ZXMgYSBuZXcgZW50cnkgYmVpbmcgYWRkZWQgdG8gdGhlIGhpc3Rvcnkgc3RhY2ssIHN1Y2ggYXMgd2hlblxuICAgKiBhIGxpbmsgaXMgY2xpY2tlZCBhbmQgYSBuZXcgcGFnZSBsb2Fkcy4gV2hlbiB0aGlzIGhhcHBlbnMsIGFsbCBzdWJzZXF1ZW50XG4gICAqIGVudHJpZXMgaW4gdGhlIHN0YWNrIGFyZSBsb3N0LlxuICAgKi9cbiAgQWN0aW9uW1wiUHVzaFwiXSA9IFwiUFVTSFwiO1xuICAvKipcbiAgICogQSBSRVBMQUNFIGluZGljYXRlcyB0aGUgZW50cnkgYXQgdGhlIGN1cnJlbnQgaW5kZXggaW4gdGhlIGhpc3Rvcnkgc3RhY2tcbiAgICogYmVpbmcgcmVwbGFjZWQgYnkgYSBuZXcgb25lLlxuICAgKi9cbiAgQWN0aW9uW1wiUmVwbGFjZVwiXSA9IFwiUkVQTEFDRVwiO1xufSkoQWN0aW9uIHx8IChBY3Rpb24gPSB7fSkpO1xuY29uc3QgUG9wU3RhdGVFdmVudFR5cGUgPSBcInBvcHN0YXRlXCI7XG4vKipcbiAqIE1lbW9yeSBoaXN0b3J5IHN0b3JlcyB0aGUgY3VycmVudCBsb2NhdGlvbiBpbiBtZW1vcnkuIEl0IGlzIGRlc2lnbmVkIGZvciB1c2VcbiAqIGluIHN0YXRlZnVsIG5vbi1icm93c2VyIGVudmlyb25tZW50cyBsaWtlIHRlc3RzIGFuZCBSZWFjdCBOYXRpdmUuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU1lbW9yeUhpc3Rvcnkob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGxldCB7XG4gICAgaW5pdGlhbEVudHJpZXMgPSBbXCIvXCJdLFxuICAgIGluaXRpYWxJbmRleCxcbiAgICB2NUNvbXBhdCA9IGZhbHNlXG4gIH0gPSBvcHRpb25zO1xuICBsZXQgZW50cmllczsgLy8gRGVjbGFyZSBzbyB3ZSBjYW4gYWNjZXNzIGZyb20gY3JlYXRlTWVtb3J5TG9jYXRpb25cbiAgZW50cmllcyA9IGluaXRpYWxFbnRyaWVzLm1hcCgoZW50cnksIGluZGV4KSA9PiBjcmVhdGVNZW1vcnlMb2NhdGlvbihlbnRyeSwgdHlwZW9mIGVudHJ5ID09PSBcInN0cmluZ1wiID8gbnVsbCA6IGVudHJ5LnN0YXRlLCBpbmRleCA9PT0gMCA/IFwiZGVmYXVsdFwiIDogdW5kZWZpbmVkKSk7XG4gIGxldCBpbmRleCA9IGNsYW1wSW5kZXgoaW5pdGlhbEluZGV4ID09IG51bGwgPyBlbnRyaWVzLmxlbmd0aCAtIDEgOiBpbml0aWFsSW5kZXgpO1xuICBsZXQgYWN0aW9uID0gQWN0aW9uLlBvcDtcbiAgbGV0IGxpc3RlbmVyID0gbnVsbDtcbiAgZnVuY3Rpb24gY2xhbXBJbmRleChuKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG4sIDApLCBlbnRyaWVzLmxlbmd0aCAtIDEpO1xuICB9XG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gZW50cmllc1tpbmRleF07XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlTWVtb3J5TG9jYXRpb24odG8sIHN0YXRlLCBrZXkpIHtcbiAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgICAgc3RhdGUgPSBudWxsO1xuICAgIH1cbiAgICBsZXQgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihlbnRyaWVzID8gZ2V0Q3VycmVudExvY2F0aW9uKCkucGF0aG5hbWUgOiBcIi9cIiwgdG8sIHN0YXRlLCBrZXkpO1xuICAgIHdhcm5pbmcobG9jYXRpb24ucGF0aG5hbWUuY2hhckF0KDApID09PSBcIi9cIiwgXCJyZWxhdGl2ZSBwYXRobmFtZXMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gbWVtb3J5IGhpc3Rvcnk6IFwiICsgSlNPTi5zdHJpbmdpZnkodG8pKTtcbiAgICByZXR1cm4gbG9jYXRpb247XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlSHJlZih0bykge1xuICAgIHJldHVybiB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyB0byA6IGNyZWF0ZVBhdGgodG8pO1xuICB9XG4gIGxldCBoaXN0b3J5ID0ge1xuICAgIGdldCBpbmRleCgpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9LFxuICAgIGdldCBhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH0sXG4gICAgZ2V0IGxvY2F0aW9uKCkge1xuICAgICAgcmV0dXJuIGdldEN1cnJlbnRMb2NhdGlvbigpO1xuICAgIH0sXG4gICAgY3JlYXRlSHJlZixcbiAgICBjcmVhdGVVUkwodG8pIHtcbiAgICAgIHJldHVybiBuZXcgVVJMKGNyZWF0ZUhyZWYodG8pLCBcImh0dHA6Ly9sb2NhbGhvc3RcIik7XG4gICAgfSxcbiAgICBlbmNvZGVMb2NhdGlvbih0bykge1xuICAgICAgbGV0IHBhdGggPSB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgodG8pIDogdG87XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXRobmFtZTogcGF0aC5wYXRobmFtZSB8fCBcIlwiLFxuICAgICAgICBzZWFyY2g6IHBhdGguc2VhcmNoIHx8IFwiXCIsXG4gICAgICAgIGhhc2g6IHBhdGguaGFzaCB8fCBcIlwiXG4gICAgICB9O1xuICAgIH0sXG4gICAgcHVzaCh0bywgc3RhdGUpIHtcbiAgICAgIGFjdGlvbiA9IEFjdGlvbi5QdXNoO1xuICAgICAgbGV0IG5leHRMb2NhdGlvbiA9IGNyZWF0ZU1lbW9yeUxvY2F0aW9uKHRvLCBzdGF0ZSk7XG4gICAgICBpbmRleCArPSAxO1xuICAgICAgZW50cmllcy5zcGxpY2UoaW5kZXgsIGVudHJpZXMubGVuZ3RoLCBuZXh0TG9jYXRpb24pO1xuICAgICAgaWYgKHY1Q29tcGF0ICYmIGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgbG9jYXRpb246IG5leHRMb2NhdGlvbixcbiAgICAgICAgICBkZWx0YTogMVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlcGxhY2UodG8sIHN0YXRlKSB7XG4gICAgICBhY3Rpb24gPSBBY3Rpb24uUmVwbGFjZTtcbiAgICAgIGxldCBuZXh0TG9jYXRpb24gPSBjcmVhdGVNZW1vcnlMb2NhdGlvbih0bywgc3RhdGUpO1xuICAgICAgZW50cmllc1tpbmRleF0gPSBuZXh0TG9jYXRpb247XG4gICAgICBpZiAodjVDb21wYXQgJiYgbGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIoe1xuICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICBsb2NhdGlvbjogbmV4dExvY2F0aW9uLFxuICAgICAgICAgIGRlbHRhOiAwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ28oZGVsdGEpIHtcbiAgICAgIGFjdGlvbiA9IEFjdGlvbi5Qb3A7XG4gICAgICBsZXQgbmV4dEluZGV4ID0gY2xhbXBJbmRleChpbmRleCArIGRlbHRhKTtcbiAgICAgIGxldCBuZXh0TG9jYXRpb24gPSBlbnRyaWVzW25leHRJbmRleF07XG4gICAgICBpbmRleCA9IG5leHRJbmRleDtcbiAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBuZXh0TG9jYXRpb24sXG4gICAgICAgICAgZGVsdGFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBsaXN0ZW4oZm4pIHtcbiAgICAgIGxpc3RlbmVyID0gZm47XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBsaXN0ZW5lciA9IG51bGw7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGhpc3Rvcnk7XG59XG4vKipcbiAqIEJyb3dzZXIgaGlzdG9yeSBzdG9yZXMgdGhlIGxvY2F0aW9uIGluIHJlZ3VsYXIgVVJMcy4gVGhpcyBpcyB0aGUgc3RhbmRhcmQgZm9yXG4gKiBtb3N0IHdlYiBhcHBzLCBidXQgaXQgcmVxdWlyZXMgc29tZSBjb25maWd1cmF0aW9uIG9uIHRoZSBzZXJ2ZXIgdG8gZW5zdXJlIHlvdVxuICogc2VydmUgdGhlIHNhbWUgYXBwIGF0IG11bHRpcGxlIFVSTHMuXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVtaXgtcnVuL2hpc3RvcnkvdHJlZS9tYWluL2RvY3MvYXBpLXJlZmVyZW5jZS5tZCNjcmVhdGVicm93c2VyaGlzdG9yeVxuICovXG5mdW5jdGlvbiBjcmVhdGVCcm93c2VySGlzdG9yeShvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlQnJvd3NlckxvY2F0aW9uKHdpbmRvdywgZ2xvYmFsSGlzdG9yeSkge1xuICAgIGxldCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhhc2hcbiAgICB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHJldHVybiBjcmVhdGVMb2NhdGlvbihcIlwiLCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhhc2hcbiAgICB9LFxuICAgIC8vIHN0YXRlIGRlZmF1bHRzIHRvIGBudWxsYCBiZWNhdXNlIGB3aW5kb3cuaGlzdG9yeS5zdGF0ZWAgZG9lc1xuICAgIGdsb2JhbEhpc3Rvcnkuc3RhdGUgJiYgZ2xvYmFsSGlzdG9yeS5zdGF0ZS51c3IgfHwgbnVsbCwgZ2xvYmFsSGlzdG9yeS5zdGF0ZSAmJiBnbG9iYWxIaXN0b3J5LnN0YXRlLmtleSB8fCBcImRlZmF1bHRcIik7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlQnJvd3NlckhyZWYod2luZG93LCB0bykge1xuICAgIHJldHVybiB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyB0byA6IGNyZWF0ZVBhdGgodG8pO1xuICB9XG4gIHJldHVybiBnZXRVcmxCYXNlZEhpc3RvcnkoY3JlYXRlQnJvd3NlckxvY2F0aW9uLCBjcmVhdGVCcm93c2VySHJlZiwgbnVsbCwgb3B0aW9ucyk7XG59XG4vKipcbiAqIEhhc2ggaGlzdG9yeSBzdG9yZXMgdGhlIGxvY2F0aW9uIGluIHdpbmRvdy5sb2NhdGlvbi5oYXNoLiBUaGlzIG1ha2VzIGl0IGlkZWFsXG4gKiBmb3Igc2l0dWF0aW9ucyB3aGVyZSB5b3UgZG9uJ3Qgd2FudCB0byBzZW5kIHRoZSBsb2NhdGlvbiB0byB0aGUgc2VydmVyIGZvclxuICogc29tZSByZWFzb24sIGVpdGhlciBiZWNhdXNlIHlvdSBkbyBjYW5ub3QgY29uZmlndXJlIGl0IG9yIHRoZSBVUkwgc3BhY2UgaXNcbiAqIHJlc2VydmVkIGZvciBzb21ldGhpbmcgZWxzZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZW1peC1ydW4vaGlzdG9yeS90cmVlL21haW4vZG9jcy9hcGktcmVmZXJlbmNlLm1kI2NyZWF0ZWhhc2hoaXN0b3J5XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUhhc2hIaXN0b3J5KG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVIYXNoTG9jYXRpb24od2luZG93LCBnbG9iYWxIaXN0b3J5KSB7XG4gICAgbGV0IHtcbiAgICAgIHBhdGhuYW1lID0gXCIvXCIsXG4gICAgICBzZWFyY2ggPSBcIlwiLFxuICAgICAgaGFzaCA9IFwiXCJcbiAgICB9ID0gcGFyc2VQYXRoKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSk7XG4gICAgLy8gSGFzaCBVUkwgc2hvdWxkIGFsd2F5cyBoYXZlIGEgbGVhZGluZyAvIGp1c3QgbGlrZSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAvLyBkb2VzLCBzbyBpZiBhbiBhcHAgZW5kcyB1cCBhdCBhIHJvdXRlIGxpa2UgLyNzb21ldGhpbmcgdGhlbiB3ZSBhZGQgYVxuICAgIC8vIGxlYWRpbmcgc2xhc2ggc28gYWxsIG9mIG91ciBwYXRoLW1hdGNoaW5nIGJlaGF2ZXMgdGhlIHNhbWUgYXMgaWYgaXQgd291bGRcbiAgICAvLyBpbiBhIGJyb3dzZXIgcm91dGVyLiAgVGhpcyBpcyBwYXJ0aWN1bGFybHkgaW1wb3J0YW50IHdoZW4gdGhlcmUgZXhpc3RzIGFcbiAgICAvLyByb290IHNwbGF0IHJvdXRlICg8Um91dGUgcGF0aD1cIipcIj4pIHNpbmNlIHRoYXQgbWF0Y2hlcyBpbnRlcm5hbGx5IGFnYWluc3RcbiAgICAvLyBcIi8qXCIgYW5kIHdlJ2QgZXhwZWN0IC8jc29tZXRoaW5nIHRvIDQwNCBpbiBhIGhhc2ggcm91dGVyIGFwcC5cbiAgICBpZiAoIXBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvXCIpICYmICFwYXRobmFtZS5zdGFydHNXaXRoKFwiLlwiKSkge1xuICAgICAgcGF0aG5hbWUgPSBcIi9cIiArIHBhdGhuYW1lO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlTG9jYXRpb24oXCJcIiwge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2gsXG4gICAgICBoYXNoXG4gICAgfSxcbiAgICAvLyBzdGF0ZSBkZWZhdWx0cyB0byBgbnVsbGAgYmVjYXVzZSBgd2luZG93Lmhpc3Rvcnkuc3RhdGVgIGRvZXNcbiAgICBnbG9iYWxIaXN0b3J5LnN0YXRlICYmIGdsb2JhbEhpc3Rvcnkuc3RhdGUudXNyIHx8IG51bGwsIGdsb2JhbEhpc3Rvcnkuc3RhdGUgJiYgZ2xvYmFsSGlzdG9yeS5zdGF0ZS5rZXkgfHwgXCJkZWZhdWx0XCIpO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZUhhc2hIcmVmKHdpbmRvdywgdG8pIHtcbiAgICBsZXQgYmFzZSA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYmFzZVwiKTtcbiAgICBsZXQgaHJlZiA9IFwiXCI7XG4gICAgaWYgKGJhc2UgJiYgYmFzZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpKSB7XG4gICAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICBsZXQgaGFzaEluZGV4ID0gdXJsLmluZGV4T2YoXCIjXCIpO1xuICAgICAgaHJlZiA9IGhhc2hJbmRleCA9PT0gLTEgPyB1cmwgOiB1cmwuc2xpY2UoMCwgaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIGhyZWYgKyBcIiNcIiArICh0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyB0byA6IGNyZWF0ZVBhdGgodG8pKTtcbiAgfVxuICBmdW5jdGlvbiB2YWxpZGF0ZUhhc2hMb2NhdGlvbihsb2NhdGlvbiwgdG8pIHtcbiAgICB3YXJuaW5nKGxvY2F0aW9uLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gXCIvXCIsIFwicmVsYXRpdmUgcGF0aG5hbWVzIGFyZSBub3Qgc3VwcG9ydGVkIGluIGhhc2ggaGlzdG9yeS5wdXNoKFwiICsgSlNPTi5zdHJpbmdpZnkodG8pICsgXCIpXCIpO1xuICB9XG4gIHJldHVybiBnZXRVcmxCYXNlZEhpc3RvcnkoY3JlYXRlSGFzaExvY2F0aW9uLCBjcmVhdGVIYXNoSHJlZiwgdmFsaWRhdGVIYXNoTG9jYXRpb24sIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gaW52YXJpYW50KHZhbHVlLCBtZXNzYWdlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG59XG5mdW5jdGlvbiB3YXJuaW5nKGNvbmQsIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIpIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB0cnkge1xuICAgICAgLy8gV2VsY29tZSB0byBkZWJ1Z2dpbmcgaGlzdG9yeSFcbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIGVycm9yIGlzIHRocm93biBhcyBhIGNvbnZlbmllbmNlLCBzbyB5b3UgY2FuIG1vcmUgZWFzaWx5XG4gICAgICAvLyBmaW5kIHRoZSBzb3VyY2UgZm9yIGEgd2FybmluZyB0aGF0IGFwcGVhcnMgaW4gdGhlIGNvbnNvbGUgYnlcbiAgICAgIC8vIGVuYWJsaW5nIFwicGF1c2Ugb24gZXhjZXB0aW9uc1wiIGluIHlvdXIgSmF2YVNjcmlwdCBkZWJ1Z2dlci5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUtleSgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA4KTtcbn1cbi8qKlxuICogRm9yIGJyb3dzZXItYmFzZWQgaGlzdG9yaWVzLCB3ZSBjb21iaW5lIHRoZSBzdGF0ZSBhbmQga2V5IGludG8gYW4gb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGdldEhpc3RvcnlTdGF0ZShsb2NhdGlvbiwgaW5kZXgpIHtcbiAgcmV0dXJuIHtcbiAgICB1c3I6IGxvY2F0aW9uLnN0YXRlLFxuICAgIGtleTogbG9jYXRpb24ua2V5LFxuICAgIGlkeDogaW5kZXhcbiAgfTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIExvY2F0aW9uIG9iamVjdCB3aXRoIGEgdW5pcXVlIGtleSBmcm9tIHRoZSBnaXZlbiBQYXRoXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKGN1cnJlbnQsIHRvLCBzdGF0ZSwga2V5KSB7XG4gIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgc3RhdGUgPSBudWxsO1xuICB9XG4gIGxldCBsb2NhdGlvbiA9IF9leHRlbmRzKHtcbiAgICBwYXRobmFtZTogdHlwZW9mIGN1cnJlbnQgPT09IFwic3RyaW5nXCIgPyBjdXJyZW50IDogY3VycmVudC5wYXRobmFtZSxcbiAgICBzZWFyY2g6IFwiXCIsXG4gICAgaGFzaDogXCJcIlxuICB9LCB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgodG8pIDogdG8sIHtcbiAgICBzdGF0ZSxcbiAgICAvLyBUT0RPOiBUaGlzIGNvdWxkIGJlIGNsZWFuZWQgdXAuICBwdXNoL3JlcGxhY2Ugc2hvdWxkIHByb2JhYmx5IGp1c3QgdGFrZVxuICAgIC8vIGZ1bGwgTG9jYXRpb25zIG5vdyBhbmQgYXZvaWQgdGhlIG5lZWQgdG8gcnVuIHRocm91Z2ggdGhpcyBmbG93IGF0IGFsbFxuICAgIC8vIEJ1dCB0aGF0J3MgYSBwcmV0dHkgYmlnIHJlZmFjdG9yIHRvIHRoZSBjdXJyZW50IHRlc3Qgc3VpdGUgc28gZ29pbmcgdG9cbiAgICAvLyBrZWVwIGFzIGlzIGZvciB0aGUgdGltZSBiZWluZyBhbmQganVzdCBsZXQgYW55IGluY29taW5nIGtleXMgdGFrZSBwcmVjZWRlbmNlXG4gICAga2V5OiB0byAmJiB0by5rZXkgfHwga2V5IHx8IGNyZWF0ZUtleSgpXG4gIH0pO1xuICByZXR1cm4gbG9jYXRpb247XG59XG4vKipcbiAqIENyZWF0ZXMgYSBzdHJpbmcgVVJMIHBhdGggZnJvbSB0aGUgZ2l2ZW4gcGF0aG5hbWUsIHNlYXJjaCwgYW5kIGhhc2ggY29tcG9uZW50cy5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUGF0aChfcmVmKSB7XG4gIGxldCB7XG4gICAgcGF0aG5hbWUgPSBcIi9cIixcbiAgICBzZWFyY2ggPSBcIlwiLFxuICAgIGhhc2ggPSBcIlwiXG4gIH0gPSBfcmVmO1xuICBpZiAoc2VhcmNoICYmIHNlYXJjaCAhPT0gXCI/XCIpIHBhdGhuYW1lICs9IHNlYXJjaC5jaGFyQXQoMCkgPT09IFwiP1wiID8gc2VhcmNoIDogXCI/XCIgKyBzZWFyY2g7XG4gIGlmIChoYXNoICYmIGhhc2ggIT09IFwiI1wiKSBwYXRobmFtZSArPSBoYXNoLmNoYXJBdCgwKSA9PT0gXCIjXCIgPyBoYXNoIDogXCIjXCIgKyBoYXNoO1xuICByZXR1cm4gcGF0aG5hbWU7XG59XG4vKipcbiAqIFBhcnNlcyBhIHN0cmluZyBVUkwgcGF0aCBpbnRvIGl0cyBzZXBhcmF0ZSBwYXRobmFtZSwgc2VhcmNoLCBhbmQgaGFzaCBjb21wb25lbnRzLlxuICovXG5mdW5jdGlvbiBwYXJzZVBhdGgocGF0aCkge1xuICBsZXQgcGFyc2VkUGF0aCA9IHt9O1xuICBpZiAocGF0aCkge1xuICAgIGxldCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoXCIjXCIpO1xuICAgIGlmIChoYXNoSW5kZXggPj0gMCkge1xuICAgICAgcGFyc2VkUGF0aC5oYXNoID0gcGF0aC5zdWJzdHIoaGFzaEluZGV4KTtcbiAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigwLCBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICBsZXQgc2VhcmNoSW5kZXggPSBwYXRoLmluZGV4T2YoXCI/XCIpO1xuICAgIGlmIChzZWFyY2hJbmRleCA+PSAwKSB7XG4gICAgICBwYXJzZWRQYXRoLnNlYXJjaCA9IHBhdGguc3Vic3RyKHNlYXJjaEluZGV4KTtcbiAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigwLCBzZWFyY2hJbmRleCk7XG4gICAgfVxuICAgIGlmIChwYXRoKSB7XG4gICAgICBwYXJzZWRQYXRoLnBhdGhuYW1lID0gcGF0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhcnNlZFBhdGg7XG59XG5mdW5jdGlvbiBnZXRVcmxCYXNlZEhpc3RvcnkoZ2V0TG9jYXRpb24sIGNyZWF0ZUhyZWYsIHZhbGlkYXRlTG9jYXRpb24sIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBsZXQge1xuICAgIHdpbmRvdyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LFxuICAgIHY1Q29tcGF0ID0gZmFsc2VcbiAgfSA9IG9wdGlvbnM7XG4gIGxldCBnbG9iYWxIaXN0b3J5ID0gd2luZG93Lmhpc3Rvcnk7XG4gIGxldCBhY3Rpb24gPSBBY3Rpb24uUG9wO1xuICBsZXQgbGlzdGVuZXIgPSBudWxsO1xuICBsZXQgaW5kZXggPSBnZXRJbmRleCgpO1xuICAvLyBJbmRleCBzaG91bGQgb25seSBiZSBudWxsIHdoZW4gd2UgaW5pdGlhbGl6ZS4gSWYgbm90LCBpdCdzIGJlY2F1c2UgdGhlXG4gIC8vIHVzZXIgY2FsbGVkIGhpc3RvcnkucHVzaFN0YXRlIG9yIGhpc3RvcnkucmVwbGFjZVN0YXRlIGRpcmVjdGx5LCBpbiB3aGljaFxuICAvLyBjYXNlIHdlIHNob3VsZCBsb2cgYSB3YXJuaW5nIGFzIGl0IHdpbGwgcmVzdWx0IGluIGJ1Z3MuXG4gIGlmIChpbmRleCA9PSBudWxsKSB7XG4gICAgaW5kZXggPSAwO1xuICAgIGdsb2JhbEhpc3RvcnkucmVwbGFjZVN0YXRlKF9leHRlbmRzKHt9LCBnbG9iYWxIaXN0b3J5LnN0YXRlLCB7XG4gICAgICBpZHg6IGluZGV4XG4gICAgfSksIFwiXCIpO1xuICB9XG4gIGZ1bmN0aW9uIGdldEluZGV4KCkge1xuICAgIGxldCBzdGF0ZSA9IGdsb2JhbEhpc3Rvcnkuc3RhdGUgfHwge1xuICAgICAgaWR4OiBudWxsXG4gICAgfTtcbiAgICByZXR1cm4gc3RhdGUuaWR4O1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZVBvcCgpIHtcbiAgICBhY3Rpb24gPSBBY3Rpb24uUG9wO1xuICAgIGxldCBuZXh0SW5kZXggPSBnZXRJbmRleCgpO1xuICAgIGxldCBkZWx0YSA9IG5leHRJbmRleCA9PSBudWxsID8gbnVsbCA6IG5leHRJbmRleCAtIGluZGV4O1xuICAgIGluZGV4ID0gbmV4dEluZGV4O1xuICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoe1xuICAgICAgICBhY3Rpb24sXG4gICAgICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uLFxuICAgICAgICBkZWx0YVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHB1c2godG8sIHN0YXRlKSB7XG4gICAgYWN0aW9uID0gQWN0aW9uLlB1c2g7XG4gICAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oaGlzdG9yeS5sb2NhdGlvbiwgdG8sIHN0YXRlKTtcbiAgICBpZiAodmFsaWRhdGVMb2NhdGlvbikgdmFsaWRhdGVMb2NhdGlvbihsb2NhdGlvbiwgdG8pO1xuICAgIGluZGV4ID0gZ2V0SW5kZXgoKSArIDE7XG4gICAgbGV0IGhpc3RvcnlTdGF0ZSA9IGdldEhpc3RvcnlTdGF0ZShsb2NhdGlvbiwgaW5kZXgpO1xuICAgIGxldCB1cmwgPSBoaXN0b3J5LmNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgIC8vIHRyeS4uLmNhdGNoIGJlY2F1c2UgaU9TIGxpbWl0cyB1cyB0byAxMDAgcHVzaFN0YXRlIGNhbGxzIDovXG4gICAgdHJ5IHtcbiAgICAgIGdsb2JhbEhpc3RvcnkucHVzaFN0YXRlKGhpc3RvcnlTdGF0ZSwgXCJcIiwgdXJsKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSWYgdGhlIGV4Y2VwdGlvbiBpcyBiZWNhdXNlIGBzdGF0ZWAgY2FuJ3QgYmUgc2VyaWFsaXplZCwgbGV0IHRoYXQgdGhyb3dcbiAgICAgIC8vIG91dHdhcmRzIGp1c3QgbGlrZSBhIHJlcGxhY2UgY2FsbCB3b3VsZCBzbyB0aGUgZGV2IGtub3dzIHRoZSBjYXVzZVxuICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvbmF2LWhpc3RvcnktYXBpcy5odG1sI3NoYXJlZC1oaXN0b3J5LXB1c2gvcmVwbGFjZS1zdGF0ZS1zdGVwc1xuICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3RydWN0dXJlZC1kYXRhLmh0bWwjc3RydWN0dXJlZHNlcmlhbGl6ZWludGVybmFsXG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgZXJyb3IubmFtZSA9PT0gXCJEYXRhQ2xvbmVFcnJvclwiKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgICAgLy8gVGhleSBhcmUgZ29pbmcgdG8gbG9zZSBzdGF0ZSBoZXJlLCBidXQgdGhlcmUgaXMgbm8gcmVhbFxuICAgICAgLy8gd2F5IHRvIHdhcm4gdGhlbSBhYm91dCBpdCBzaW5jZSB0aGUgcGFnZSB3aWxsIHJlZnJlc2guLi5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odXJsKTtcbiAgICB9XG4gICAgaWYgKHY1Q29tcGF0ICYmIGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcih7XG4gICAgICAgIGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb24sXG4gICAgICAgIGRlbHRhOiAxXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcmVwbGFjZSh0bywgc3RhdGUpIHtcbiAgICBhY3Rpb24gPSBBY3Rpb24uUmVwbGFjZTtcbiAgICBsZXQgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihoaXN0b3J5LmxvY2F0aW9uLCB0bywgc3RhdGUpO1xuICAgIGlmICh2YWxpZGF0ZUxvY2F0aW9uKSB2YWxpZGF0ZUxvY2F0aW9uKGxvY2F0aW9uLCB0byk7XG4gICAgaW5kZXggPSBnZXRJbmRleCgpO1xuICAgIGxldCBoaXN0b3J5U3RhdGUgPSBnZXRIaXN0b3J5U3RhdGUobG9jYXRpb24sIGluZGV4KTtcbiAgICBsZXQgdXJsID0gaGlzdG9yeS5jcmVhdGVIcmVmKGxvY2F0aW9uKTtcbiAgICBnbG9iYWxIaXN0b3J5LnJlcGxhY2VTdGF0ZShoaXN0b3J5U3RhdGUsIFwiXCIsIHVybCk7XG4gICAgaWYgKHY1Q29tcGF0ICYmIGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcih7XG4gICAgICAgIGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb24sXG4gICAgICAgIGRlbHRhOiAwXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlVVJMKHRvKSB7XG4gICAgLy8gd2luZG93LmxvY2F0aW9uLm9yaWdpbiBpcyBcIm51bGxcIiAodGhlIGxpdGVyYWwgc3RyaW5nIHZhbHVlKSBpbiBGaXJlZm94XG4gICAgLy8gdW5kZXIgY2VydGFpbiBjb25kaXRpb25zLCBub3RhYmx5IHdoZW4gc2VydmluZyBmcm9tIGEgbG9jYWwgSFRNTCBmaWxlXG4gICAgLy8gU2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg3ODI5N1xuICAgIGxldCBiYXNlID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiAhPT0gXCJudWxsXCIgPyB3aW5kb3cubG9jYXRpb24ub3JpZ2luIDogd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgbGV0IGhyZWYgPSB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyB0byA6IGNyZWF0ZVBhdGgodG8pO1xuICAgIC8vIFRyZWF0aW5nIHRoaXMgYXMgYSBmdWxsIFVSTCB3aWxsIHN0cmlwIGFueSB0cmFpbGluZyBzcGFjZXMgc28gd2UgbmVlZCB0b1xuICAgIC8vIHByZS1lbmNvZGUgdGhlbSBzaW5jZSB0aGV5IG1pZ2h0IGJlIHBhcnQgb2YgYSBtYXRjaGluZyBzcGxhdCBwYXJhbSBmcm9tXG4gICAgLy8gYW4gYW5jZXN0b3Igcm91dGVcbiAgICBocmVmID0gaHJlZi5yZXBsYWNlKC8gJC8sIFwiJTIwXCIpO1xuICAgIGludmFyaWFudChiYXNlLCBcIk5vIHdpbmRvdy5sb2NhdGlvbi4ob3JpZ2lufGhyZWYpIGF2YWlsYWJsZSB0byBjcmVhdGUgVVJMIGZvciBocmVmOiBcIiArIGhyZWYpO1xuICAgIHJldHVybiBuZXcgVVJMKGhyZWYsIGJhc2UpO1xuICB9XG4gIGxldCBoaXN0b3J5ID0ge1xuICAgIGdldCBhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH0sXG4gICAgZ2V0IGxvY2F0aW9uKCkge1xuICAgICAgcmV0dXJuIGdldExvY2F0aW9uKHdpbmRvdywgZ2xvYmFsSGlzdG9yeSk7XG4gICAgfSxcbiAgICBsaXN0ZW4oZm4pIHtcbiAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGhpc3Rvcnkgb25seSBhY2NlcHRzIG9uZSBhY3RpdmUgbGlzdGVuZXJcIik7XG4gICAgICB9XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihQb3BTdGF0ZUV2ZW50VHlwZSwgaGFuZGxlUG9wKTtcbiAgICAgIGxpc3RlbmVyID0gZm47XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihQb3BTdGF0ZUV2ZW50VHlwZSwgaGFuZGxlUG9wKTtcbiAgICAgICAgbGlzdGVuZXIgPSBudWxsO1xuICAgICAgfTtcbiAgICB9LFxuICAgIGNyZWF0ZUhyZWYodG8pIHtcbiAgICAgIHJldHVybiBjcmVhdGVIcmVmKHdpbmRvdywgdG8pO1xuICAgIH0sXG4gICAgY3JlYXRlVVJMLFxuICAgIGVuY29kZUxvY2F0aW9uKHRvKSB7XG4gICAgICAvLyBFbmNvZGUgYSBMb2NhdGlvbiB0aGUgc2FtZSB3YXkgd2luZG93LmxvY2F0aW9uIHdvdWxkXG4gICAgICBsZXQgdXJsID0gY3JlYXRlVVJMKHRvKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsXG4gICAgICAgIHNlYXJjaDogdXJsLnNlYXJjaCxcbiAgICAgICAgaGFzaDogdXJsLmhhc2hcbiAgICAgIH07XG4gICAgfSxcbiAgICBwdXNoLFxuICAgIHJlcGxhY2UsXG4gICAgZ28obikge1xuICAgICAgcmV0dXJuIGdsb2JhbEhpc3RvcnkuZ28obik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gaGlzdG9yeTtcbn1cbi8vI2VuZHJlZ2lvblxuXG52YXIgUmVzdWx0VHlwZTtcbihmdW5jdGlvbiAoUmVzdWx0VHlwZSkge1xuICBSZXN1bHRUeXBlW1wiZGF0YVwiXSA9IFwiZGF0YVwiO1xuICBSZXN1bHRUeXBlW1wiZGVmZXJyZWRcIl0gPSBcImRlZmVycmVkXCI7XG4gIFJlc3VsdFR5cGVbXCJyZWRpcmVjdFwiXSA9IFwicmVkaXJlY3RcIjtcbiAgUmVzdWx0VHlwZVtcImVycm9yXCJdID0gXCJlcnJvclwiO1xufSkoUmVzdWx0VHlwZSB8fCAoUmVzdWx0VHlwZSA9IHt9KSk7XG5jb25zdCBpbW11dGFibGVSb3V0ZUtleXMgPSBuZXcgU2V0KFtcImxhenlcIiwgXCJjYXNlU2Vuc2l0aXZlXCIsIFwicGF0aFwiLCBcImlkXCIsIFwiaW5kZXhcIiwgXCJjaGlsZHJlblwiXSk7XG5mdW5jdGlvbiBpc0luZGV4Um91dGUocm91dGUpIHtcbiAgcmV0dXJuIHJvdXRlLmluZGV4ID09PSB0cnVlO1xufVxuLy8gV2FsayB0aGUgcm91dGUgdHJlZSBnZW5lcmF0aW5nIHVuaXF1ZSBJRHMgd2hlcmUgbmVjZXNzYXJ5LCBzbyB3ZSBhcmUgd29ya2luZ1xuLy8gc29sZWx5IHdpdGggQWdub3N0aWNEYXRhUm91dGVPYmplY3QncyB3aXRoaW4gdGhlIFJvdXRlclxuZnVuY3Rpb24gY29udmVydFJvdXRlc1RvRGF0YVJvdXRlcyhyb3V0ZXMsIG1hcFJvdXRlUHJvcGVydGllcywgcGFyZW50UGF0aCwgbWFuaWZlc3QpIHtcbiAgaWYgKHBhcmVudFBhdGggPT09IHZvaWQgMCkge1xuICAgIHBhcmVudFBhdGggPSBbXTtcbiAgfVxuICBpZiAobWFuaWZlc3QgPT09IHZvaWQgMCkge1xuICAgIG1hbmlmZXN0ID0ge307XG4gIH1cbiAgcmV0dXJuIHJvdXRlcy5tYXAoKHJvdXRlLCBpbmRleCkgPT4ge1xuICAgIGxldCB0cmVlUGF0aCA9IFsuLi5wYXJlbnRQYXRoLCBTdHJpbmcoaW5kZXgpXTtcbiAgICBsZXQgaWQgPSB0eXBlb2Ygcm91dGUuaWQgPT09IFwic3RyaW5nXCIgPyByb3V0ZS5pZCA6IHRyZWVQYXRoLmpvaW4oXCItXCIpO1xuICAgIGludmFyaWFudChyb3V0ZS5pbmRleCAhPT0gdHJ1ZSB8fCAhcm91dGUuY2hpbGRyZW4sIFwiQ2Fubm90IHNwZWNpZnkgY2hpbGRyZW4gb24gYW4gaW5kZXggcm91dGVcIik7XG4gICAgaW52YXJpYW50KCFtYW5pZmVzdFtpZF0sIFwiRm91bmQgYSByb3V0ZSBpZCBjb2xsaXNpb24gb24gaWQgXFxcIlwiICsgaWQgKyBcIlxcXCIuICBSb3V0ZSBcIiArIFwiaWQncyBtdXN0IGJlIGdsb2JhbGx5IHVuaXF1ZSB3aXRoaW4gRGF0YSBSb3V0ZXIgdXNhZ2VzXCIpO1xuICAgIGlmIChpc0luZGV4Um91dGUocm91dGUpKSB7XG4gICAgICBsZXQgaW5kZXhSb3V0ZSA9IF9leHRlbmRzKHt9LCByb3V0ZSwgbWFwUm91dGVQcm9wZXJ0aWVzKHJvdXRlKSwge1xuICAgICAgICBpZFxuICAgICAgfSk7XG4gICAgICBtYW5pZmVzdFtpZF0gPSBpbmRleFJvdXRlO1xuICAgICAgcmV0dXJuIGluZGV4Um91dGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwYXRoT3JMYXlvdXRSb3V0ZSA9IF9leHRlbmRzKHt9LCByb3V0ZSwgbWFwUm91dGVQcm9wZXJ0aWVzKHJvdXRlKSwge1xuICAgICAgICBpZCxcbiAgICAgICAgY2hpbGRyZW46IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgICBtYW5pZmVzdFtpZF0gPSBwYXRoT3JMYXlvdXRSb3V0ZTtcbiAgICAgIGlmIChyb3V0ZS5jaGlsZHJlbikge1xuICAgICAgICBwYXRoT3JMYXlvdXRSb3V0ZS5jaGlsZHJlbiA9IGNvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMocm91dGUuY2hpbGRyZW4sIG1hcFJvdXRlUHJvcGVydGllcywgdHJlZVBhdGgsIG1hbmlmZXN0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXRoT3JMYXlvdXRSb3V0ZTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXG4gKiBNYXRjaGVzIHRoZSBnaXZlbiByb3V0ZXMgdG8gYSBsb2NhdGlvbiBhbmQgcmV0dXJucyB0aGUgbWF0Y2ggZGF0YS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3Y2L3V0aWxzL21hdGNoLXJvdXRlc1xuICovXG5mdW5jdGlvbiBtYXRjaFJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uQXJnLCBiYXNlbmFtZSkge1xuICBpZiAoYmFzZW5hbWUgPT09IHZvaWQgMCkge1xuICAgIGJhc2VuYW1lID0gXCIvXCI7XG4gIH1cbiAgcmV0dXJuIG1hdGNoUm91dGVzSW1wbChyb3V0ZXMsIGxvY2F0aW9uQXJnLCBiYXNlbmFtZSwgZmFsc2UpO1xufVxuZnVuY3Rpb24gbWF0Y2hSb3V0ZXNJbXBsKHJvdXRlcywgbG9jYXRpb25BcmcsIGJhc2VuYW1lLCBhbGxvd1BhcnRpYWwpIHtcbiAgbGV0IGxvY2F0aW9uID0gdHlwZW9mIGxvY2F0aW9uQXJnID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKGxvY2F0aW9uQXJnKSA6IGxvY2F0aW9uQXJnO1xuICBsZXQgcGF0aG5hbWUgPSBzdHJpcEJhc2VuYW1lKGxvY2F0aW9uLnBhdGhuYW1lIHx8IFwiL1wiLCBiYXNlbmFtZSk7XG4gIGlmIChwYXRobmFtZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgbGV0IGJyYW5jaGVzID0gZmxhdHRlblJvdXRlcyhyb3V0ZXMpO1xuICByYW5rUm91dGVCcmFuY2hlcyhicmFuY2hlcyk7XG4gIGxldCBtYXRjaGVzID0gbnVsbDtcbiAgZm9yIChsZXQgaSA9IDA7IG1hdGNoZXMgPT0gbnVsbCAmJiBpIDwgYnJhbmNoZXMubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBJbmNvbWluZyBwYXRobmFtZXMgYXJlIGdlbmVyYWxseSBlbmNvZGVkIGZyb20gZWl0aGVyIHdpbmRvdy5sb2NhdGlvblxuICAgIC8vIG9yIGZyb20gcm91dGVyLm5hdmlnYXRlLCBidXQgd2Ugd2FudCB0byBtYXRjaCBhZ2FpbnN0IHRoZSB1bmVuY29kZWRcbiAgICAvLyBwYXRocyBpbiB0aGUgcm91dGUgZGVmaW5pdGlvbnMuICBNZW1vcnkgcm91dGVyIGxvY2F0aW9ucyB3b24ndCBiZVxuICAgIC8vIGVuY29kZWQgaGVyZSBidXQgdGhlcmUgYWxzbyBzaG91bGRuJ3QgYmUgYW55dGhpbmcgdG8gZGVjb2RlIHNvIHRoaXNcbiAgICAvLyBzaG91bGQgYmUgYSBzYWZlIG9wZXJhdGlvbi4gIFRoaXMgYXZvaWRzIG5lZWRpbmcgbWF0Y2hSb3V0ZXMgdG8gYmVcbiAgICAvLyBoaXN0b3J5LWF3YXJlLlxuICAgIGxldCBkZWNvZGVkID0gZGVjb2RlUGF0aChwYXRobmFtZSk7XG4gICAgbWF0Y2hlcyA9IG1hdGNoUm91dGVCcmFuY2goYnJhbmNoZXNbaV0sIGRlY29kZWQsIGFsbG93UGFydGlhbCk7XG4gIH1cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5mdW5jdGlvbiBjb252ZXJ0Um91dGVNYXRjaFRvVWlNYXRjaChtYXRjaCwgbG9hZGVyRGF0YSkge1xuICBsZXQge1xuICAgIHJvdXRlLFxuICAgIHBhdGhuYW1lLFxuICAgIHBhcmFtc1xuICB9ID0gbWF0Y2g7XG4gIHJldHVybiB7XG4gICAgaWQ6IHJvdXRlLmlkLFxuICAgIHBhdGhuYW1lLFxuICAgIHBhcmFtcyxcbiAgICBkYXRhOiBsb2FkZXJEYXRhW3JvdXRlLmlkXSxcbiAgICBoYW5kbGU6IHJvdXRlLmhhbmRsZVxuICB9O1xufVxuZnVuY3Rpb24gZmxhdHRlblJvdXRlcyhyb3V0ZXMsIGJyYW5jaGVzLCBwYXJlbnRzTWV0YSwgcGFyZW50UGF0aCkge1xuICBpZiAoYnJhbmNoZXMgPT09IHZvaWQgMCkge1xuICAgIGJyYW5jaGVzID0gW107XG4gIH1cbiAgaWYgKHBhcmVudHNNZXRhID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnRzTWV0YSA9IFtdO1xuICB9XG4gIGlmIChwYXJlbnRQYXRoID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnRQYXRoID0gXCJcIjtcbiAgfVxuICBsZXQgZmxhdHRlblJvdXRlID0gKHJvdXRlLCBpbmRleCwgcmVsYXRpdmVQYXRoKSA9PiB7XG4gICAgbGV0IG1ldGEgPSB7XG4gICAgICByZWxhdGl2ZVBhdGg6IHJlbGF0aXZlUGF0aCA9PT0gdW5kZWZpbmVkID8gcm91dGUucGF0aCB8fCBcIlwiIDogcmVsYXRpdmVQYXRoLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogcm91dGUuY2FzZVNlbnNpdGl2ZSA9PT0gdHJ1ZSxcbiAgICAgIGNoaWxkcmVuSW5kZXg6IGluZGV4LFxuICAgICAgcm91dGVcbiAgICB9O1xuICAgIGlmIChtZXRhLnJlbGF0aXZlUGF0aC5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgICAgaW52YXJpYW50KG1ldGEucmVsYXRpdmVQYXRoLnN0YXJ0c1dpdGgocGFyZW50UGF0aCksIFwiQWJzb2x1dGUgcm91dGUgcGF0aCBcXFwiXCIgKyBtZXRhLnJlbGF0aXZlUGF0aCArIFwiXFxcIiBuZXN0ZWQgdW5kZXIgcGF0aCBcIiArIChcIlxcXCJcIiArIHBhcmVudFBhdGggKyBcIlxcXCIgaXMgbm90IHZhbGlkLiBBbiBhYnNvbHV0ZSBjaGlsZCByb3V0ZSBwYXRoIFwiKSArIFwibXVzdCBzdGFydCB3aXRoIHRoZSBjb21iaW5lZCBwYXRoIG9mIGFsbCBpdHMgcGFyZW50IHJvdXRlcy5cIik7XG4gICAgICBtZXRhLnJlbGF0aXZlUGF0aCA9IG1ldGEucmVsYXRpdmVQYXRoLnNsaWNlKHBhcmVudFBhdGgubGVuZ3RoKTtcbiAgICB9XG4gICAgbGV0IHBhdGggPSBqb2luUGF0aHMoW3BhcmVudFBhdGgsIG1ldGEucmVsYXRpdmVQYXRoXSk7XG4gICAgbGV0IHJvdXRlc01ldGEgPSBwYXJlbnRzTWV0YS5jb25jYXQobWV0YSk7XG4gICAgLy8gQWRkIHRoZSBjaGlsZHJlbiBiZWZvcmUgYWRkaW5nIHRoaXMgcm91dGUgdG8gdGhlIGFycmF5LCBzbyB3ZSB0cmF2ZXJzZSB0aGVcbiAgICAvLyByb3V0ZSB0cmVlIGRlcHRoLWZpcnN0IGFuZCBjaGlsZCByb3V0ZXMgYXBwZWFyIGJlZm9yZSB0aGVpciBwYXJlbnRzIGluXG4gICAgLy8gdGhlIFwiZmxhdHRlbmVkXCIgdmVyc2lvbi5cbiAgICBpZiAocm91dGUuY2hpbGRyZW4gJiYgcm91dGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgaW52YXJpYW50KFxuICAgICAgLy8gT3VyIHR5cGVzIGtub3cgYmV0dGVyLCBidXQgcnVudGltZSBKUyBtYXkgbm90IVxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgcm91dGUuaW5kZXggIT09IHRydWUsIFwiSW5kZXggcm91dGVzIG11c3Qgbm90IGhhdmUgY2hpbGQgcm91dGVzLiBQbGVhc2UgcmVtb3ZlIFwiICsgKFwiYWxsIGNoaWxkIHJvdXRlcyBmcm9tIHJvdXRlIHBhdGggXFxcIlwiICsgcGF0aCArIFwiXFxcIi5cIikpO1xuICAgICAgZmxhdHRlblJvdXRlcyhyb3V0ZS5jaGlsZHJlbiwgYnJhbmNoZXMsIHJvdXRlc01ldGEsIHBhdGgpO1xuICAgIH1cbiAgICAvLyBSb3V0ZXMgd2l0aG91dCBhIHBhdGggc2hvdWxkbid0IGV2ZXIgbWF0Y2ggYnkgdGhlbXNlbHZlcyB1bmxlc3MgdGhleSBhcmVcbiAgICAvLyBpbmRleCByb3V0ZXMsIHNvIGRvbid0IGFkZCB0aGVtIHRvIHRoZSBsaXN0IG9mIHBvc3NpYmxlIGJyYW5jaGVzLlxuICAgIGlmIChyb3V0ZS5wYXRoID09IG51bGwgJiYgIXJvdXRlLmluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGJyYW5jaGVzLnB1c2goe1xuICAgICAgcGF0aCxcbiAgICAgIHNjb3JlOiBjb21wdXRlU2NvcmUocGF0aCwgcm91dGUuaW5kZXgpLFxuICAgICAgcm91dGVzTWV0YVxuICAgIH0pO1xuICB9O1xuICByb3V0ZXMuZm9yRWFjaCgocm91dGUsIGluZGV4KSA9PiB7XG4gICAgdmFyIF9yb3V0ZSRwYXRoO1xuICAgIC8vIGNvYXJzZS1ncmFpbiBjaGVjayBmb3Igb3B0aW9uYWwgcGFyYW1zXG4gICAgaWYgKHJvdXRlLnBhdGggPT09IFwiXCIgfHwgISgoX3JvdXRlJHBhdGggPSByb3V0ZS5wYXRoKSAhPSBudWxsICYmIF9yb3V0ZSRwYXRoLmluY2x1ZGVzKFwiP1wiKSkpIHtcbiAgICAgIGZsYXR0ZW5Sb3V0ZShyb3V0ZSwgaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBleHBsb2RlZCBvZiBleHBsb2RlT3B0aW9uYWxTZWdtZW50cyhyb3V0ZS5wYXRoKSkge1xuICAgICAgICBmbGF0dGVuUm91dGUocm91dGUsIGluZGV4LCBleHBsb2RlZCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGJyYW5jaGVzO1xufVxuLyoqXG4gKiBDb21wdXRlcyBhbGwgY29tYmluYXRpb25zIG9mIG9wdGlvbmFsIHBhdGggc2VnbWVudHMgZm9yIGEgZ2l2ZW4gcGF0aCxcbiAqIGV4Y2x1ZGluZyBjb21iaW5hdGlvbnMgdGhhdCBhcmUgYW1iaWd1b3VzIGFuZCBvZiBsb3dlciBwcmlvcml0eS5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgYC9vbmUvOnR3bz8vdGhyZWUvOmZvdXI/LzpmaXZlP2AgZXhwbG9kZXMgdG86XG4gKiAtIGAvb25lL3RocmVlYFxuICogLSBgL29uZS86dHdvL3RocmVlYFxuICogLSBgL29uZS90aHJlZS86Zm91cmBcbiAqIC0gYC9vbmUvdGhyZWUvOmZpdmVgXG4gKiAtIGAvb25lLzp0d28vdGhyZWUvOmZvdXJgXG4gKiAtIGAvb25lLzp0d28vdGhyZWUvOmZpdmVgXG4gKiAtIGAvb25lL3RocmVlLzpmb3VyLzpmaXZlYFxuICogLSBgL29uZS86dHdvL3RocmVlLzpmb3VyLzpmaXZlYFxuICovXG5mdW5jdGlvbiBleHBsb2RlT3B0aW9uYWxTZWdtZW50cyhwYXRoKSB7XG4gIGxldCBzZWdtZW50cyA9IHBhdGguc3BsaXQoXCIvXCIpO1xuICBpZiAoc2VnbWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG4gIGxldCBbZmlyc3QsIC4uLnJlc3RdID0gc2VnbWVudHM7XG4gIC8vIE9wdGlvbmFsIHBhdGggc2VnbWVudHMgYXJlIGRlbm90ZWQgYnkgYSB0cmFpbGluZyBgP2BcbiAgbGV0IGlzT3B0aW9uYWwgPSBmaXJzdC5lbmRzV2l0aChcIj9cIik7XG4gIC8vIENvbXB1dGUgdGhlIGNvcnJlc3BvbmRpbmcgcmVxdWlyZWQgc2VnbWVudDogYGZvbz9gIC0+IGBmb29gXG4gIGxldCByZXF1aXJlZCA9IGZpcnN0LnJlcGxhY2UoL1xcPyQvLCBcIlwiKTtcbiAgaWYgKHJlc3QubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gSW50ZXByZXQgZW1wdHkgc3RyaW5nIGFzIG9taXR0aW5nIGFuIG9wdGlvbmFsIHNlZ21lbnRcbiAgICAvLyBgW1wib25lXCIsIFwiXCIsIFwidGhyZWVcIl1gIGNvcnJlc3BvbmRzIHRvIG9taXR0aW5nIGA6dHdvYCBmcm9tIGAvb25lLzp0d28/L3RocmVlYCAtPiBgL29uZS90aHJlZWBcbiAgICByZXR1cm4gaXNPcHRpb25hbCA/IFtyZXF1aXJlZCwgXCJcIl0gOiBbcmVxdWlyZWRdO1xuICB9XG4gIGxldCByZXN0RXhwbG9kZWQgPSBleHBsb2RlT3B0aW9uYWxTZWdtZW50cyhyZXN0LmpvaW4oXCIvXCIpKTtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICAvLyBBbGwgY2hpbGQgcGF0aHMgd2l0aCB0aGUgcHJlZml4LiAgRG8gdGhpcyBmb3IgYWxsIGNoaWxkcmVuIGJlZm9yZSB0aGVcbiAgLy8gb3B0aW9uYWwgdmVyc2lvbiBmb3IgYWxsIGNoaWxkcmVuLCBzbyB3ZSBnZXQgY29uc2lzdGVudCBvcmRlcmluZyB3aGVyZSB0aGVcbiAgLy8gcGFyZW50IG9wdGlvbmFsIGFzcGVjdCBpcyBwcmVmZXJyZWQgYXMgcmVxdWlyZWQuICBPdGhlcndpc2UsIHdlIGNhbiBnZXRcbiAgLy8gY2hpbGQgc2VjdGlvbnMgaW50ZXJzcGVyc2VkIHdoZXJlIGRlZXBlciBvcHRpb25hbCBzZWdtZW50cyBhcmUgaGlnaGVyIHRoYW5cbiAgLy8gcGFyZW50IG9wdGlvbmFsIHNlZ21lbnRzLCB3aGVyZSBmb3IgZXhhbXBsZSwgLzp0d28gd291bGQgZXhwbG9kZSBfZWFybGllcl9cbiAgLy8gdGhlbiAvOm9uZS4gIEJ5IGFsd2F5cyBpbmNsdWRpbmcgdGhlIHBhcmVudCBhcyByZXF1aXJlZCBfZm9yIGFsbCBjaGlsZHJlbl9cbiAgLy8gZmlyc3QsIHdlIGF2b2lkIHRoaXMgaXNzdWVcbiAgcmVzdWx0LnB1c2goLi4ucmVzdEV4cGxvZGVkLm1hcChzdWJwYXRoID0+IHN1YnBhdGggPT09IFwiXCIgPyByZXF1aXJlZCA6IFtyZXF1aXJlZCwgc3VicGF0aF0uam9pbihcIi9cIikpKTtcbiAgLy8gVGhlbiwgaWYgdGhpcyBpcyBhbiBvcHRpb25hbCB2YWx1ZSwgYWRkIGFsbCBjaGlsZCB2ZXJzaW9ucyB3aXRob3V0XG4gIGlmIChpc09wdGlvbmFsKSB7XG4gICAgcmVzdWx0LnB1c2goLi4ucmVzdEV4cGxvZGVkKTtcbiAgfVxuICAvLyBmb3IgYWJzb2x1dGUgcGF0aHMsIGVuc3VyZSBgL2AgaW5zdGVhZCBvZiBlbXB0eSBzZWdtZW50XG4gIHJldHVybiByZXN1bHQubWFwKGV4cGxvZGVkID0+IHBhdGguc3RhcnRzV2l0aChcIi9cIikgJiYgZXhwbG9kZWQgPT09IFwiXCIgPyBcIi9cIiA6IGV4cGxvZGVkKTtcbn1cbmZ1bmN0aW9uIHJhbmtSb3V0ZUJyYW5jaGVzKGJyYW5jaGVzKSB7XG4gIGJyYW5jaGVzLnNvcnQoKGEsIGIpID0+IGEuc2NvcmUgIT09IGIuc2NvcmUgPyBiLnNjb3JlIC0gYS5zY29yZSAvLyBIaWdoZXIgc2NvcmUgZmlyc3RcbiAgOiBjb21wYXJlSW5kZXhlcyhhLnJvdXRlc01ldGEubWFwKG1ldGEgPT4gbWV0YS5jaGlsZHJlbkluZGV4KSwgYi5yb3V0ZXNNZXRhLm1hcChtZXRhID0+IG1ldGEuY2hpbGRyZW5JbmRleCkpKTtcbn1cbmNvbnN0IHBhcmFtUmUgPSAvXjpbXFx3LV0rJC87XG5jb25zdCBkeW5hbWljU2VnbWVudFZhbHVlID0gMztcbmNvbnN0IGluZGV4Um91dGVWYWx1ZSA9IDI7XG5jb25zdCBlbXB0eVNlZ21lbnRWYWx1ZSA9IDE7XG5jb25zdCBzdGF0aWNTZWdtZW50VmFsdWUgPSAxMDtcbmNvbnN0IHNwbGF0UGVuYWx0eSA9IC0yO1xuY29uc3QgaXNTcGxhdCA9IHMgPT4gcyA9PT0gXCIqXCI7XG5mdW5jdGlvbiBjb21wdXRlU2NvcmUocGF0aCwgaW5kZXgpIHtcbiAgbGV0IHNlZ21lbnRzID0gcGF0aC5zcGxpdChcIi9cIik7XG4gIGxldCBpbml0aWFsU2NvcmUgPSBzZWdtZW50cy5sZW5ndGg7XG4gIGlmIChzZWdtZW50cy5zb21lKGlzU3BsYXQpKSB7XG4gICAgaW5pdGlhbFNjb3JlICs9IHNwbGF0UGVuYWx0eTtcbiAgfVxuICBpZiAoaW5kZXgpIHtcbiAgICBpbml0aWFsU2NvcmUgKz0gaW5kZXhSb3V0ZVZhbHVlO1xuICB9XG4gIHJldHVybiBzZWdtZW50cy5maWx0ZXIocyA9PiAhaXNTcGxhdChzKSkucmVkdWNlKChzY29yZSwgc2VnbWVudCkgPT4gc2NvcmUgKyAocGFyYW1SZS50ZXN0KHNlZ21lbnQpID8gZHluYW1pY1NlZ21lbnRWYWx1ZSA6IHNlZ21lbnQgPT09IFwiXCIgPyBlbXB0eVNlZ21lbnRWYWx1ZSA6IHN0YXRpY1NlZ21lbnRWYWx1ZSksIGluaXRpYWxTY29yZSk7XG59XG5mdW5jdGlvbiBjb21wYXJlSW5kZXhlcyhhLCBiKSB7XG4gIGxldCBzaWJsaW5ncyA9IGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLnNsaWNlKDAsIC0xKS5ldmVyeSgobiwgaSkgPT4gbiA9PT0gYltpXSk7XG4gIHJldHVybiBzaWJsaW5ncyA/XG4gIC8vIElmIHR3byByb3V0ZXMgYXJlIHNpYmxpbmdzLCB3ZSBzaG91bGQgdHJ5IHRvIG1hdGNoIHRoZSBlYXJsaWVyIHNpYmxpbmdcbiAgLy8gZmlyc3QuIFRoaXMgYWxsb3dzIHBlb3BsZSB0byBoYXZlIGZpbmUtZ3JhaW5lZCBjb250cm9sIG92ZXIgdGhlIG1hdGNoaW5nXG4gIC8vIGJlaGF2aW9yIGJ5IHNpbXBseSBwdXR0aW5nIHJvdXRlcyB3aXRoIGlkZW50aWNhbCBwYXRocyBpbiB0aGUgb3JkZXIgdGhleVxuICAvLyB3YW50IHRoZW0gdHJpZWQuXG4gIGFbYS5sZW5ndGggLSAxXSAtIGJbYi5sZW5ndGggLSAxXSA6XG4gIC8vIE90aGVyd2lzZSwgaXQgZG9lc24ndCByZWFsbHkgbWFrZSBzZW5zZSB0byByYW5rIG5vbi1zaWJsaW5ncyBieSBpbmRleCxcbiAgLy8gc28gdGhleSBzb3J0IGVxdWFsbHkuXG4gIDA7XG59XG5mdW5jdGlvbiBtYXRjaFJvdXRlQnJhbmNoKGJyYW5jaCwgcGF0aG5hbWUsIGFsbG93UGFydGlhbCkge1xuICBpZiAoYWxsb3dQYXJ0aWFsID09PSB2b2lkIDApIHtcbiAgICBhbGxvd1BhcnRpYWwgPSBmYWxzZTtcbiAgfVxuICBsZXQge1xuICAgIHJvdXRlc01ldGFcbiAgfSA9IGJyYW5jaDtcbiAgbGV0IG1hdGNoZWRQYXJhbXMgPSB7fTtcbiAgbGV0IG1hdGNoZWRQYXRobmFtZSA9IFwiL1wiO1xuICBsZXQgbWF0Y2hlcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlc01ldGEubGVuZ3RoOyArK2kpIHtcbiAgICBsZXQgbWV0YSA9IHJvdXRlc01ldGFbaV07XG4gICAgbGV0IGVuZCA9IGkgPT09IHJvdXRlc01ldGEubGVuZ3RoIC0gMTtcbiAgICBsZXQgcmVtYWluaW5nUGF0aG5hbWUgPSBtYXRjaGVkUGF0aG5hbWUgPT09IFwiL1wiID8gcGF0aG5hbWUgOiBwYXRobmFtZS5zbGljZShtYXRjaGVkUGF0aG5hbWUubGVuZ3RoKSB8fCBcIi9cIjtcbiAgICBsZXQgbWF0Y2ggPSBtYXRjaFBhdGgoe1xuICAgICAgcGF0aDogbWV0YS5yZWxhdGl2ZVBhdGgsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiBtZXRhLmNhc2VTZW5zaXRpdmUsXG4gICAgICBlbmRcbiAgICB9LCByZW1haW5pbmdQYXRobmFtZSk7XG4gICAgbGV0IHJvdXRlID0gbWV0YS5yb3V0ZTtcbiAgICBpZiAoIW1hdGNoICYmIGVuZCAmJiBhbGxvd1BhcnRpYWwgJiYgIXJvdXRlc01ldGFbcm91dGVzTWV0YS5sZW5ndGggLSAxXS5yb3V0ZS5pbmRleCkge1xuICAgICAgbWF0Y2ggPSBtYXRjaFBhdGgoe1xuICAgICAgICBwYXRoOiBtZXRhLnJlbGF0aXZlUGF0aCxcbiAgICAgICAgY2FzZVNlbnNpdGl2ZTogbWV0YS5jYXNlU2Vuc2l0aXZlLFxuICAgICAgICBlbmQ6IGZhbHNlXG4gICAgICB9LCByZW1haW5pbmdQYXRobmFtZSk7XG4gICAgfVxuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKG1hdGNoZWRQYXJhbXMsIG1hdGNoLnBhcmFtcyk7XG4gICAgbWF0Y2hlcy5wdXNoKHtcbiAgICAgIC8vIFRPRE86IENhbiB0aGlzIGFzIGJlIGF2b2lkZWQ/XG4gICAgICBwYXJhbXM6IG1hdGNoZWRQYXJhbXMsXG4gICAgICBwYXRobmFtZTogam9pblBhdGhzKFttYXRjaGVkUGF0aG5hbWUsIG1hdGNoLnBhdGhuYW1lXSksXG4gICAgICBwYXRobmFtZUJhc2U6IG5vcm1hbGl6ZVBhdGhuYW1lKGpvaW5QYXRocyhbbWF0Y2hlZFBhdGhuYW1lLCBtYXRjaC5wYXRobmFtZUJhc2VdKSksXG4gICAgICByb3V0ZVxuICAgIH0pO1xuICAgIGlmIChtYXRjaC5wYXRobmFtZUJhc2UgIT09IFwiL1wiKSB7XG4gICAgICBtYXRjaGVkUGF0aG5hbWUgPSBqb2luUGF0aHMoW21hdGNoZWRQYXRobmFtZSwgbWF0Y2gucGF0aG5hbWVCYXNlXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXRjaGVzO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgcGF0aCB3aXRoIHBhcmFtcyBpbnRlcnBvbGF0ZWQuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS92Ni91dGlscy9nZW5lcmF0ZS1wYXRoXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlUGF0aChvcmlnaW5hbFBhdGgsIHBhcmFtcykge1xuICBpZiAocGFyYW1zID09PSB2b2lkIDApIHtcbiAgICBwYXJhbXMgPSB7fTtcbiAgfVxuICBsZXQgcGF0aCA9IG9yaWdpbmFsUGF0aDtcbiAgaWYgKHBhdGguZW5kc1dpdGgoXCIqXCIpICYmIHBhdGggIT09IFwiKlwiICYmICFwYXRoLmVuZHNXaXRoKFwiLypcIikpIHtcbiAgICB3YXJuaW5nKGZhbHNlLCBcIlJvdXRlIHBhdGggXFxcIlwiICsgcGF0aCArIFwiXFxcIiB3aWxsIGJlIHRyZWF0ZWQgYXMgaWYgaXQgd2VyZSBcIiArIChcIlxcXCJcIiArIHBhdGgucmVwbGFjZSgvXFwqJC8sIFwiLypcIikgKyBcIlxcXCIgYmVjYXVzZSB0aGUgYCpgIGNoYXJhY3RlciBtdXN0IFwiKSArIFwiYWx3YXlzIGZvbGxvdyBhIGAvYCBpbiB0aGUgcGF0dGVybi4gVG8gZ2V0IHJpZCBvZiB0aGlzIHdhcm5pbmcsIFwiICsgKFwicGxlYXNlIGNoYW5nZSB0aGUgcm91dGUgcGF0aCB0byBcXFwiXCIgKyBwYXRoLnJlcGxhY2UoL1xcKiQvLCBcIi8qXCIpICsgXCJcXFwiLlwiKSk7XG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwqJC8sIFwiLypcIik7XG4gIH1cbiAgLy8gZW5zdXJlIGAvYCBpcyBhZGRlZCBhdCB0aGUgYmVnaW5uaW5nIGlmIHRoZSBwYXRoIGlzIGFic29sdXRlXG4gIGNvbnN0IHByZWZpeCA9IHBhdGguc3RhcnRzV2l0aChcIi9cIikgPyBcIi9cIiA6IFwiXCI7XG4gIGNvbnN0IHN0cmluZ2lmeSA9IHAgPT4gcCA9PSBudWxsID8gXCJcIiA6IHR5cGVvZiBwID09PSBcInN0cmluZ1wiID8gcCA6IFN0cmluZyhwKTtcbiAgY29uc3Qgc2VnbWVudHMgPSBwYXRoLnNwbGl0KC9cXC8rLykubWFwKChzZWdtZW50LCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICBjb25zdCBpc0xhc3RTZWdtZW50ID0gaW5kZXggPT09IGFycmF5Lmxlbmd0aCAtIDE7XG4gICAgLy8gb25seSBhcHBseSB0aGUgc3BsYXQgaWYgaXQncyB0aGUgbGFzdCBzZWdtZW50XG4gICAgaWYgKGlzTGFzdFNlZ21lbnQgJiYgc2VnbWVudCA9PT0gXCIqXCIpIHtcbiAgICAgIGNvbnN0IHN0YXIgPSBcIipcIjtcbiAgICAgIC8vIEFwcGx5IHRoZSBzcGxhdFxuICAgICAgcmV0dXJuIHN0cmluZ2lmeShwYXJhbXNbc3Rhcl0pO1xuICAgIH1cbiAgICBjb25zdCBrZXlNYXRjaCA9IHNlZ21lbnQubWF0Y2goL146KFtcXHctXSspKFxcPz8pJC8pO1xuICAgIGlmIChrZXlNYXRjaCkge1xuICAgICAgY29uc3QgWywga2V5LCBvcHRpb25hbF0gPSBrZXlNYXRjaDtcbiAgICAgIGxldCBwYXJhbSA9IHBhcmFtc1trZXldO1xuICAgICAgaW52YXJpYW50KG9wdGlvbmFsID09PSBcIj9cIiB8fCBwYXJhbSAhPSBudWxsLCBcIk1pc3NpbmcgXFxcIjpcIiArIGtleSArIFwiXFxcIiBwYXJhbVwiKTtcbiAgICAgIHJldHVybiBzdHJpbmdpZnkocGFyYW0pO1xuICAgIH1cbiAgICAvLyBSZW1vdmUgYW55IG9wdGlvbmFsIG1hcmtlcnMgZnJvbSBvcHRpb25hbCBzdGF0aWMgc2VnbWVudHNcbiAgICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9cXD8kL2csIFwiXCIpO1xuICB9KVxuICAvLyBSZW1vdmUgZW1wdHkgc2VnbWVudHNcbiAgLmZpbHRlcihzZWdtZW50ID0+ICEhc2VnbWVudCk7XG4gIHJldHVybiBwcmVmaXggKyBzZWdtZW50cy5qb2luKFwiL1wiKTtcbn1cbi8qKlxuICogUGVyZm9ybXMgcGF0dGVybiBtYXRjaGluZyBvbiBhIFVSTCBwYXRobmFtZSBhbmQgcmV0dXJucyBpbmZvcm1hdGlvbiBhYm91dFxuICogdGhlIG1hdGNoLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vdjYvdXRpbHMvbWF0Y2gtcGF0aFxuICovXG5mdW5jdGlvbiBtYXRjaFBhdGgocGF0dGVybiwgcGF0aG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSBcInN0cmluZ1wiKSB7XG4gICAgcGF0dGVybiA9IHtcbiAgICAgIHBhdGg6IHBhdHRlcm4sXG4gICAgICBjYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgICAgIGVuZDogdHJ1ZVxuICAgIH07XG4gIH1cbiAgbGV0IFttYXRjaGVyLCBjb21waWxlZFBhcmFtc10gPSBjb21waWxlUGF0aChwYXR0ZXJuLnBhdGgsIHBhdHRlcm4uY2FzZVNlbnNpdGl2ZSwgcGF0dGVybi5lbmQpO1xuICBsZXQgbWF0Y2ggPSBwYXRobmFtZS5tYXRjaChtYXRjaGVyKTtcbiAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG4gIGxldCBtYXRjaGVkUGF0aG5hbWUgPSBtYXRjaFswXTtcbiAgbGV0IHBhdGhuYW1lQmFzZSA9IG1hdGNoZWRQYXRobmFtZS5yZXBsYWNlKC8oLilcXC8rJC8sIFwiJDFcIik7XG4gIGxldCBjYXB0dXJlR3JvdXBzID0gbWF0Y2guc2xpY2UoMSk7XG4gIGxldCBwYXJhbXMgPSBjb21waWxlZFBhcmFtcy5yZWR1Y2UoKG1lbW8sIF9yZWYsIGluZGV4KSA9PiB7XG4gICAgbGV0IHtcbiAgICAgIHBhcmFtTmFtZSxcbiAgICAgIGlzT3B0aW9uYWxcbiAgICB9ID0gX3JlZjtcbiAgICAvLyBXZSBuZWVkIHRvIGNvbXB1dGUgdGhlIHBhdGhuYW1lQmFzZSBoZXJlIHVzaW5nIHRoZSByYXcgc3BsYXQgdmFsdWVcbiAgICAvLyBpbnN0ZWFkIG9mIHVzaW5nIHBhcmFtc1tcIipcIl0gbGF0ZXIgYmVjYXVzZSBpdCB3aWxsIGJlIGRlY29kZWQgdGhlblxuICAgIGlmIChwYXJhbU5hbWUgPT09IFwiKlwiKSB7XG4gICAgICBsZXQgc3BsYXRWYWx1ZSA9IGNhcHR1cmVHcm91cHNbaW5kZXhdIHx8IFwiXCI7XG4gICAgICBwYXRobmFtZUJhc2UgPSBtYXRjaGVkUGF0aG5hbWUuc2xpY2UoMCwgbWF0Y2hlZFBhdGhuYW1lLmxlbmd0aCAtIHNwbGF0VmFsdWUubGVuZ3RoKS5yZXBsYWNlKC8oLilcXC8rJC8sIFwiJDFcIik7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gY2FwdHVyZUdyb3Vwc1tpbmRleF07XG4gICAgaWYgKGlzT3B0aW9uYWwgJiYgIXZhbHVlKSB7XG4gICAgICBtZW1vW3BhcmFtTmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbW9bcGFyYW1OYW1lXSA9ICh2YWx1ZSB8fCBcIlwiKS5yZXBsYWNlKC8lMkYvZywgXCIvXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbWVtbztcbiAgfSwge30pO1xuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICBwYXRobmFtZTogbWF0Y2hlZFBhdGhuYW1lLFxuICAgIHBhdGhuYW1lQmFzZSxcbiAgICBwYXR0ZXJuXG4gIH07XG59XG5mdW5jdGlvbiBjb21waWxlUGF0aChwYXRoLCBjYXNlU2Vuc2l0aXZlLCBlbmQpIHtcbiAgaWYgKGNhc2VTZW5zaXRpdmUgPT09IHZvaWQgMCkge1xuICAgIGNhc2VTZW5zaXRpdmUgPSBmYWxzZTtcbiAgfVxuICBpZiAoZW5kID09PSB2b2lkIDApIHtcbiAgICBlbmQgPSB0cnVlO1xuICB9XG4gIHdhcm5pbmcocGF0aCA9PT0gXCIqXCIgfHwgIXBhdGguZW5kc1dpdGgoXCIqXCIpIHx8IHBhdGguZW5kc1dpdGgoXCIvKlwiKSwgXCJSb3V0ZSBwYXRoIFxcXCJcIiArIHBhdGggKyBcIlxcXCIgd2lsbCBiZSB0cmVhdGVkIGFzIGlmIGl0IHdlcmUgXCIgKyAoXCJcXFwiXCIgKyBwYXRoLnJlcGxhY2UoL1xcKiQvLCBcIi8qXCIpICsgXCJcXFwiIGJlY2F1c2UgdGhlIGAqYCBjaGFyYWN0ZXIgbXVzdCBcIikgKyBcImFsd2F5cyBmb2xsb3cgYSBgL2AgaW4gdGhlIHBhdHRlcm4uIFRvIGdldCByaWQgb2YgdGhpcyB3YXJuaW5nLCBcIiArIChcInBsZWFzZSBjaGFuZ2UgdGhlIHJvdXRlIHBhdGggdG8gXFxcIlwiICsgcGF0aC5yZXBsYWNlKC9cXCokLywgXCIvKlwiKSArIFwiXFxcIi5cIikpO1xuICBsZXQgcGFyYW1zID0gW107XG4gIGxldCByZWdleHBTb3VyY2UgPSBcIl5cIiArIHBhdGgucmVwbGFjZSgvXFwvKlxcKj8kLywgXCJcIikgLy8gSWdub3JlIHRyYWlsaW5nIC8gYW5kIC8qLCB3ZSdsbCBoYW5kbGUgaXQgYmVsb3dcbiAgLnJlcGxhY2UoL15cXC8qLywgXCIvXCIpIC8vIE1ha2Ugc3VyZSBpdCBoYXMgYSBsZWFkaW5nIC9cbiAgLnJlcGxhY2UoL1tcXFxcLiorXiR7fXwoKVtcXF1dL2csIFwiXFxcXCQmXCIpIC8vIEVzY2FwZSBzcGVjaWFsIHJlZ2V4IGNoYXJzXG4gIC5yZXBsYWNlKC9cXC86KFtcXHctXSspKFxcPyk/L2csIChfLCBwYXJhbU5hbWUsIGlzT3B0aW9uYWwpID0+IHtcbiAgICBwYXJhbXMucHVzaCh7XG4gICAgICBwYXJhbU5hbWUsXG4gICAgICBpc09wdGlvbmFsOiBpc09wdGlvbmFsICE9IG51bGxcbiAgICB9KTtcbiAgICByZXR1cm4gaXNPcHRpb25hbCA/IFwiLz8oW15cXFxcL10rKT9cIiA6IFwiLyhbXlxcXFwvXSspXCI7XG4gIH0pO1xuICBpZiAocGF0aC5lbmRzV2l0aChcIipcIikpIHtcbiAgICBwYXJhbXMucHVzaCh7XG4gICAgICBwYXJhbU5hbWU6IFwiKlwiXG4gICAgfSk7XG4gICAgcmVnZXhwU291cmNlICs9IHBhdGggPT09IFwiKlwiIHx8IHBhdGggPT09IFwiLypcIiA/IFwiKC4qKSRcIiAvLyBBbHJlYWR5IG1hdGNoZWQgdGhlIGluaXRpYWwgLywganVzdCBtYXRjaCB0aGUgcmVzdFxuICAgIDogXCIoPzpcXFxcLyguKyl8XFxcXC8qKSRcIjsgLy8gRG9uJ3QgaW5jbHVkZSB0aGUgLyBpbiBwYXJhbXNbXCIqXCJdXG4gIH0gZWxzZSBpZiAoZW5kKSB7XG4gICAgLy8gV2hlbiBtYXRjaGluZyB0byB0aGUgZW5kLCBpZ25vcmUgdHJhaWxpbmcgc2xhc2hlc1xuICAgIHJlZ2V4cFNvdXJjZSArPSBcIlxcXFwvKiRcIjtcbiAgfSBlbHNlIGlmIChwYXRoICE9PSBcIlwiICYmIHBhdGggIT09IFwiL1wiKSB7XG4gICAgLy8gSWYgb3VyIHBhdGggaXMgbm9uLWVtcHR5IGFuZCBjb250YWlucyBhbnl0aGluZyBiZXlvbmQgYW4gaW5pdGlhbCBzbGFzaCxcbiAgICAvLyB0aGVuIHdlIGhhdmUgX3NvbWVfIGZvcm0gb2YgcGF0aCBpbiBvdXIgcmVnZXgsIHNvIHdlIHNob3VsZCBleHBlY3QgdG9cbiAgICAvLyBtYXRjaCBvbmx5IGlmIHdlIGZpbmQgdGhlIGVuZCBvZiB0aGlzIHBhdGggc2VnbWVudC4gIExvb2sgZm9yIGFuIG9wdGlvbmFsXG4gICAgLy8gbm9uLWNhcHR1cmVkIHRyYWlsaW5nIHNsYXNoICh0byBtYXRjaCBhIHBvcnRpb24gb2YgdGhlIFVSTCkgb3IgdGhlIGVuZFxuICAgIC8vIG9mIHRoZSBwYXRoIChpZiB3ZSd2ZSBtYXRjaGVkIHRvIHRoZSBlbmQpLiAgV2UgdXNlZCB0byBkbyB0aGlzIHdpdGggYVxuICAgIC8vIHdvcmQgYm91bmRhcnkgYnV0IHRoYXQgZ2l2ZXMgZmFsc2UgcG9zaXRpdmVzIG9uIHJvdXRlcyBsaWtlXG4gICAgLy8gL3VzZXItcHJlZmVyZW5jZXMgc2luY2UgYC1gIGNvdW50cyBhcyBhIHdvcmQgYm91bmRhcnkuXG4gICAgcmVnZXhwU291cmNlICs9IFwiKD86KD89XFxcXC98JCkpXCI7XG4gIH0gZWxzZSA7XG4gIGxldCBtYXRjaGVyID0gbmV3IFJlZ0V4cChyZWdleHBTb3VyY2UsIGNhc2VTZW5zaXRpdmUgPyB1bmRlZmluZWQgOiBcImlcIik7XG4gIHJldHVybiBbbWF0Y2hlciwgcGFyYW1zXTtcbn1cbmZ1bmN0aW9uIGRlY29kZVBhdGgodmFsdWUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdmFsdWUuc3BsaXQoXCIvXCIpLm1hcCh2ID0+IGRlY29kZVVSSUNvbXBvbmVudCh2KS5yZXBsYWNlKC9cXC8vZywgXCIlMkZcIikpLmpvaW4oXCIvXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHdhcm5pbmcoZmFsc2UsIFwiVGhlIFVSTCBwYXRoIFxcXCJcIiArIHZhbHVlICsgXCJcXFwiIGNvdWxkIG5vdCBiZSBkZWNvZGVkIGJlY2F1c2UgaXQgaXMgaXMgYSBcIiArIFwibWFsZm9ybWVkIFVSTCBzZWdtZW50LiBUaGlzIGlzIHByb2JhYmx5IGR1ZSB0byBhIGJhZCBwZXJjZW50IFwiICsgKFwiZW5jb2RpbmcgKFwiICsgZXJyb3IgKyBcIikuXCIpKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc3RyaXBCYXNlbmFtZShwYXRobmFtZSwgYmFzZW5hbWUpIHtcbiAgaWYgKGJhc2VuYW1lID09PSBcIi9cIikgcmV0dXJuIHBhdGhuYW1lO1xuICBpZiAoIXBhdGhuYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChiYXNlbmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vIFdlIHdhbnQgdG8gbGVhdmUgdHJhaWxpbmcgc2xhc2ggYmVoYXZpb3IgaW4gdGhlIHVzZXIncyBjb250cm9sLCBzbyBpZiB0aGV5XG4gIC8vIHNwZWNpZnkgYSBiYXNlbmFtZSB3aXRoIGEgdHJhaWxpbmcgc2xhc2gsIHdlIHNob3VsZCBzdXBwb3J0IGl0XG4gIGxldCBzdGFydEluZGV4ID0gYmFzZW5hbWUuZW5kc1dpdGgoXCIvXCIpID8gYmFzZW5hbWUubGVuZ3RoIC0gMSA6IGJhc2VuYW1lLmxlbmd0aDtcbiAgbGV0IG5leHRDaGFyID0gcGF0aG5hbWUuY2hhckF0KHN0YXJ0SW5kZXgpO1xuICBpZiAobmV4dENoYXIgJiYgbmV4dENoYXIgIT09IFwiL1wiKSB7XG4gICAgLy8gcGF0aG5hbWUgZG9lcyBub3Qgc3RhcnQgd2l0aCBiYXNlbmFtZS9cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gcGF0aG5hbWUuc2xpY2Uoc3RhcnRJbmRleCkgfHwgXCIvXCI7XG59XG4vKipcbiAqIFJldHVybnMgYSByZXNvbHZlZCBwYXRoIG9iamVjdCByZWxhdGl2ZSB0byB0aGUgZ2l2ZW4gcGF0aG5hbWUuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS92Ni91dGlscy9yZXNvbHZlLXBhdGhcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZVBhdGgodG8sIGZyb21QYXRobmFtZSkge1xuICBpZiAoZnJvbVBhdGhuYW1lID09PSB2b2lkIDApIHtcbiAgICBmcm9tUGF0aG5hbWUgPSBcIi9cIjtcbiAgfVxuICBsZXQge1xuICAgIHBhdGhuYW1lOiB0b1BhdGhuYW1lLFxuICAgIHNlYXJjaCA9IFwiXCIsXG4gICAgaGFzaCA9IFwiXCJcbiAgfSA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aCh0bykgOiB0bztcbiAgbGV0IHBhdGhuYW1lID0gdG9QYXRobmFtZSA/IHRvUGF0aG5hbWUuc3RhcnRzV2l0aChcIi9cIikgPyB0b1BhdGhuYW1lIDogcmVzb2x2ZVBhdGhuYW1lKHRvUGF0aG5hbWUsIGZyb21QYXRobmFtZSkgOiBmcm9tUGF0aG5hbWU7XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBub3JtYWxpemVTZWFyY2goc2VhcmNoKSxcbiAgICBoYXNoOiBub3JtYWxpemVIYXNoKGhhc2gpXG4gIH07XG59XG5mdW5jdGlvbiByZXNvbHZlUGF0aG5hbWUocmVsYXRpdmVQYXRoLCBmcm9tUGF0aG5hbWUpIHtcbiAgbGV0IHNlZ21lbnRzID0gZnJvbVBhdGhuYW1lLnJlcGxhY2UoL1xcLyskLywgXCJcIikuc3BsaXQoXCIvXCIpO1xuICBsZXQgcmVsYXRpdmVTZWdtZW50cyA9IHJlbGF0aXZlUGF0aC5zcGxpdChcIi9cIik7XG4gIHJlbGF0aXZlU2VnbWVudHMuZm9yRWFjaChzZWdtZW50ID0+IHtcbiAgICBpZiAoc2VnbWVudCA9PT0gXCIuLlwiKSB7XG4gICAgICAvLyBLZWVwIHRoZSByb290IFwiXCIgc2VnbWVudCBzbyB0aGUgcGF0aG5hbWUgc3RhcnRzIGF0IC9cbiAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAxKSBzZWdtZW50cy5wb3AoKTtcbiAgICB9IGVsc2UgaWYgKHNlZ21lbnQgIT09IFwiLlwiKSB7XG4gICAgICBzZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzZWdtZW50cy5sZW5ndGggPiAxID8gc2VnbWVudHMuam9pbihcIi9cIikgOiBcIi9cIjtcbn1cbmZ1bmN0aW9uIGdldEludmFsaWRQYXRoRXJyb3IoY2hhciwgZmllbGQsIGRlc3QsIHBhdGgpIHtcbiAgcmV0dXJuIFwiQ2Fubm90IGluY2x1ZGUgYSAnXCIgKyBjaGFyICsgXCInIGNoYXJhY3RlciBpbiBhIG1hbnVhbGx5IHNwZWNpZmllZCBcIiArIChcImB0by5cIiArIGZpZWxkICsgXCJgIGZpZWxkIFtcIiArIEpTT04uc3RyaW5naWZ5KHBhdGgpICsgXCJdLiAgUGxlYXNlIHNlcGFyYXRlIGl0IG91dCB0byB0aGUgXCIpICsgKFwiYHRvLlwiICsgZGVzdCArIFwiYCBmaWVsZC4gQWx0ZXJuYXRpdmVseSB5b3UgbWF5IHByb3ZpZGUgdGhlIGZ1bGwgcGF0aCBhcyBcIikgKyBcImEgc3RyaW5nIGluIDxMaW5rIHRvPVxcXCIuLi5cXFwiPiBhbmQgdGhlIHJvdXRlciB3aWxsIHBhcnNlIGl0IGZvciB5b3UuXCI7XG59XG4vKipcbiAqIEBwcml2YXRlXG4gKlxuICogV2hlbiBwcm9jZXNzaW5nIHJlbGF0aXZlIG5hdmlnYXRpb24gd2Ugd2FudCB0byBpZ25vcmUgYW5jZXN0b3Igcm91dGVzIHRoYXRcbiAqIGRvIG5vdCBjb250cmlidXRlIHRvIHRoZSBwYXRoLCBzdWNoIHRoYXQgaW5kZXgvcGF0aGxlc3MgbGF5b3V0IHJvdXRlcyBkb24ndFxuICogaW50ZXJmZXJlLlxuICpcbiAqIEZvciBleGFtcGxlLCB3aGVuIG1vdmluZyBhIHJvdXRlIGVsZW1lbnQgaW50byBhbiBpbmRleCByb3V0ZSBhbmQvb3IgYVxuICogcGF0aGxlc3MgbGF5b3V0IHJvdXRlLCByZWxhdGl2ZSBsaW5rIGJlaGF2aW9yIGNvbnRhaW5lZCB3aXRoaW4gc2hvdWxkIHN0YXlcbiAqIHRoZSBzYW1lLiAgQm90aCBvZiB0aGUgZm9sbG93aW5nIGV4YW1wbGVzIHNob3VsZCBsaW5rIGJhY2sgdG8gdGhlIHJvb3Q6XG4gKlxuICogICA8Um91dGUgcGF0aD1cIi9cIj5cbiAqICAgICA8Um91dGUgcGF0aD1cImFjY291bnRzXCIgZWxlbWVudD17PExpbmsgdG89XCIuLlwifT5cbiAqICAgPC9Sb3V0ZT5cbiAqXG4gKiAgIDxSb3V0ZSBwYXRoPVwiL1wiPlxuICogICAgIDxSb3V0ZSBwYXRoPVwiYWNjb3VudHNcIj5cbiAqICAgICAgIDxSb3V0ZSBlbGVtZW50PXs8QWNjb3VudHNMYXlvdXQgLz59PiAgICAgICAvLyA8LS0gRG9lcyBub3QgY29udHJpYnV0ZVxuICogICAgICAgICA8Um91dGUgaW5kZXggZWxlbWVudD17PExpbmsgdG89XCIuLlwifSAvPiAgLy8gPC0tIERvZXMgbm90IGNvbnRyaWJ1dGVcbiAqICAgICAgIDwvUm91dGVcbiAqICAgICA8L1JvdXRlPlxuICogICA8L1JvdXRlPlxuICovXG5mdW5jdGlvbiBnZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcyhtYXRjaGVzKSB7XG4gIHJldHVybiBtYXRjaGVzLmZpbHRlcigobWF0Y2gsIGluZGV4KSA9PiBpbmRleCA9PT0gMCB8fCBtYXRjaC5yb3V0ZS5wYXRoICYmIG1hdGNoLnJvdXRlLnBhdGgubGVuZ3RoID4gMCk7XG59XG4vLyBSZXR1cm4gdGhlIGFycmF5IG9mIHBhdGhuYW1lcyBmb3IgdGhlIGN1cnJlbnQgcm91dGUgbWF0Y2hlcyAtIHVzZWQgdG9cbi8vIGdlbmVyYXRlIHRoZSByb3V0ZVBhdGhuYW1lcyBpbnB1dCBmb3IgcmVzb2x2ZVRvKClcbmZ1bmN0aW9uIGdldFJlc29sdmVUb01hdGNoZXMobWF0Y2hlcywgdjdfcmVsYXRpdmVTcGxhdFBhdGgpIHtcbiAgbGV0IHBhdGhNYXRjaGVzID0gZ2V0UGF0aENvbnRyaWJ1dGluZ01hdGNoZXMobWF0Y2hlcyk7XG4gIC8vIFdoZW4gdjdfcmVsYXRpdmVTcGxhdFBhdGggaXMgZW5hYmxlZCwgdXNlIHRoZSBmdWxsIHBhdGhuYW1lIGZvciB0aGUgbGVhZlxuICAvLyBtYXRjaCBzbyB3ZSBpbmNsdWRlIHNwbGF0IHZhbHVlcyBmb3IgXCIuXCIgbGlua3MuICBTZWU6XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZW1peC1ydW4vcmVhY3Qtcm91dGVyL2lzc3Vlcy8xMTA1MiNpc3N1ZWNvbW1lbnQtMTgzNjU4OTMyOVxuICBpZiAodjdfcmVsYXRpdmVTcGxhdFBhdGgpIHtcbiAgICByZXR1cm4gcGF0aE1hdGNoZXMubWFwKChtYXRjaCwgaWR4KSA9PiBpZHggPT09IHBhdGhNYXRjaGVzLmxlbmd0aCAtIDEgPyBtYXRjaC5wYXRobmFtZSA6IG1hdGNoLnBhdGhuYW1lQmFzZSk7XG4gIH1cbiAgcmV0dXJuIHBhdGhNYXRjaGVzLm1hcChtYXRjaCA9PiBtYXRjaC5wYXRobmFtZUJhc2UpO1xufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZXNvbHZlVG8odG9BcmcsIHJvdXRlUGF0aG5hbWVzLCBsb2NhdGlvblBhdGhuYW1lLCBpc1BhdGhSZWxhdGl2ZSkge1xuICBpZiAoaXNQYXRoUmVsYXRpdmUgPT09IHZvaWQgMCkge1xuICAgIGlzUGF0aFJlbGF0aXZlID0gZmFsc2U7XG4gIH1cbiAgbGV0IHRvO1xuICBpZiAodHlwZW9mIHRvQXJnID09PSBcInN0cmluZ1wiKSB7XG4gICAgdG8gPSBwYXJzZVBhdGgodG9BcmcpO1xuICB9IGVsc2Uge1xuICAgIHRvID0gX2V4dGVuZHMoe30sIHRvQXJnKTtcbiAgICBpbnZhcmlhbnQoIXRvLnBhdGhuYW1lIHx8ICF0by5wYXRobmFtZS5pbmNsdWRlcyhcIj9cIiksIGdldEludmFsaWRQYXRoRXJyb3IoXCI/XCIsIFwicGF0aG5hbWVcIiwgXCJzZWFyY2hcIiwgdG8pKTtcbiAgICBpbnZhcmlhbnQoIXRvLnBhdGhuYW1lIHx8ICF0by5wYXRobmFtZS5pbmNsdWRlcyhcIiNcIiksIGdldEludmFsaWRQYXRoRXJyb3IoXCIjXCIsIFwicGF0aG5hbWVcIiwgXCJoYXNoXCIsIHRvKSk7XG4gICAgaW52YXJpYW50KCF0by5zZWFyY2ggfHwgIXRvLnNlYXJjaC5pbmNsdWRlcyhcIiNcIiksIGdldEludmFsaWRQYXRoRXJyb3IoXCIjXCIsIFwic2VhcmNoXCIsIFwiaGFzaFwiLCB0bykpO1xuICB9XG4gIGxldCBpc0VtcHR5UGF0aCA9IHRvQXJnID09PSBcIlwiIHx8IHRvLnBhdGhuYW1lID09PSBcIlwiO1xuICBsZXQgdG9QYXRobmFtZSA9IGlzRW1wdHlQYXRoID8gXCIvXCIgOiB0by5wYXRobmFtZTtcbiAgbGV0IGZyb207XG4gIC8vIFJvdXRpbmcgaXMgcmVsYXRpdmUgdG8gdGhlIGN1cnJlbnQgcGF0aG5hbWUgaWYgZXhwbGljaXRseSByZXF1ZXN0ZWQuXG4gIC8vXG4gIC8vIElmIGEgcGF0aG5hbWUgaXMgZXhwbGljaXRseSBwcm92aWRlZCBpbiBgdG9gLCBpdCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlXG4gIC8vIHJvdXRlIGNvbnRleHQuIFRoaXMgaXMgZXhwbGFpbmVkIGluIGBOb3RlIG9uIGA8TGluayB0bz5gIHZhbHVlc2AgaW4gb3VyXG4gIC8vIG1pZ3JhdGlvbiBndWlkZSBmcm9tIHY1IGFzIGEgbWVhbnMgb2YgZGlzYW1iaWd1YXRpb24gYmV0d2VlbiBgdG9gIHZhbHVlc1xuICAvLyB0aGF0IGJlZ2luIHdpdGggYC9gIGFuZCB0aG9zZSB0aGF0IGRvIG5vdC4gSG93ZXZlciwgdGhpcyBpcyBwcm9ibGVtYXRpYyBmb3JcbiAgLy8gYHRvYCB2YWx1ZXMgdGhhdCBkbyBub3QgcHJvdmlkZSBhIHBhdGhuYW1lLiBgdG9gIGNhbiBzaW1wbHkgYmUgYSBzZWFyY2ggb3JcbiAgLy8gaGFzaCBzdHJpbmcsIGluIHdoaWNoIGNhc2Ugd2Ugc2hvdWxkIGFzc3VtZSB0aGF0IHRoZSBuYXZpZ2F0aW9uIGlzIHJlbGF0aXZlXG4gIC8vIHRvIHRoZSBjdXJyZW50IGxvY2F0aW9uJ3MgcGF0aG5hbWUgYW5kICpub3QqIHRoZSByb3V0ZSBwYXRobmFtZS5cbiAgaWYgKHRvUGF0aG5hbWUgPT0gbnVsbCkge1xuICAgIGZyb20gPSBsb2NhdGlvblBhdGhuYW1lO1xuICB9IGVsc2Uge1xuICAgIGxldCByb3V0ZVBhdGhuYW1lSW5kZXggPSByb3V0ZVBhdGhuYW1lcy5sZW5ndGggLSAxO1xuICAgIC8vIFdpdGggcmVsYXRpdmU9XCJyb3V0ZVwiICh0aGUgZGVmYXVsdCksIGVhY2ggbGVhZGluZyAuLiBzZWdtZW50IG1lYW5zXG4gICAgLy8gXCJnbyB1cCBvbmUgcm91dGVcIiBpbnN0ZWFkIG9mIFwiZ28gdXAgb25lIFVSTCBzZWdtZW50XCIuICBUaGlzIGlzIGEga2V5XG4gICAgLy8gZGlmZmVyZW5jZSBmcm9tIGhvdyA8YSBocmVmPiB3b3JrcyBhbmQgYSBtYWpvciByZWFzb24gd2UgY2FsbCB0aGlzIGFcbiAgICAvLyBcInRvXCIgdmFsdWUgaW5zdGVhZCBvZiBhIFwiaHJlZlwiLlxuICAgIGlmICghaXNQYXRoUmVsYXRpdmUgJiYgdG9QYXRobmFtZS5zdGFydHNXaXRoKFwiLi5cIikpIHtcbiAgICAgIGxldCB0b1NlZ21lbnRzID0gdG9QYXRobmFtZS5zcGxpdChcIi9cIik7XG4gICAgICB3aGlsZSAodG9TZWdtZW50c1swXSA9PT0gXCIuLlwiKSB7XG4gICAgICAgIHRvU2VnbWVudHMuc2hpZnQoKTtcbiAgICAgICAgcm91dGVQYXRobmFtZUluZGV4IC09IDE7XG4gICAgICB9XG4gICAgICB0by5wYXRobmFtZSA9IHRvU2VnbWVudHMuam9pbihcIi9cIik7XG4gICAgfVxuICAgIGZyb20gPSByb3V0ZVBhdGhuYW1lSW5kZXggPj0gMCA/IHJvdXRlUGF0aG5hbWVzW3JvdXRlUGF0aG5hbWVJbmRleF0gOiBcIi9cIjtcbiAgfVxuICBsZXQgcGF0aCA9IHJlc29sdmVQYXRoKHRvLCBmcm9tKTtcbiAgLy8gRW5zdXJlIHRoZSBwYXRobmFtZSBoYXMgYSB0cmFpbGluZyBzbGFzaCBpZiB0aGUgb3JpZ2luYWwgXCJ0b1wiIGhhZCBvbmVcbiAgbGV0IGhhc0V4cGxpY2l0VHJhaWxpbmdTbGFzaCA9IHRvUGF0aG5hbWUgJiYgdG9QYXRobmFtZSAhPT0gXCIvXCIgJiYgdG9QYXRobmFtZS5lbmRzV2l0aChcIi9cIik7XG4gIC8vIE9yIGlmIHRoaXMgd2FzIGEgbGluayB0byB0aGUgY3VycmVudCBwYXRoIHdoaWNoIGhhcyBhIHRyYWlsaW5nIHNsYXNoXG4gIGxldCBoYXNDdXJyZW50VHJhaWxpbmdTbGFzaCA9IChpc0VtcHR5UGF0aCB8fCB0b1BhdGhuYW1lID09PSBcIi5cIikgJiYgbG9jYXRpb25QYXRobmFtZS5lbmRzV2l0aChcIi9cIik7XG4gIGlmICghcGF0aC5wYXRobmFtZS5lbmRzV2l0aChcIi9cIikgJiYgKGhhc0V4cGxpY2l0VHJhaWxpbmdTbGFzaCB8fCBoYXNDdXJyZW50VHJhaWxpbmdTbGFzaCkpIHtcbiAgICBwYXRoLnBhdGhuYW1lICs9IFwiL1wiO1xuICB9XG4gIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRUb1BhdGhuYW1lKHRvKSB7XG4gIC8vIEVtcHR5IHN0cmluZ3Mgc2hvdWxkIGJlIHRyZWF0ZWQgdGhlIHNhbWUgYXMgLyBwYXRoc1xuICByZXR1cm4gdG8gPT09IFwiXCIgfHwgdG8ucGF0aG5hbWUgPT09IFwiXCIgPyBcIi9cIiA6IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aCh0bykucGF0aG5hbWUgOiB0by5wYXRobmFtZTtcbn1cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3Qgam9pblBhdGhzID0gcGF0aHMgPT4gcGF0aHMuam9pbihcIi9cIikucmVwbGFjZSgvXFwvXFwvKy9nLCBcIi9cIik7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IG5vcm1hbGl6ZVBhdGhuYW1lID0gcGF0aG5hbWUgPT4gcGF0aG5hbWUucmVwbGFjZSgvXFwvKyQvLCBcIlwiKS5yZXBsYWNlKC9eXFwvKi8sIFwiL1wiKTtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3Qgbm9ybWFsaXplU2VhcmNoID0gc2VhcmNoID0+ICFzZWFyY2ggfHwgc2VhcmNoID09PSBcIj9cIiA/IFwiXCIgOiBzZWFyY2guc3RhcnRzV2l0aChcIj9cIikgPyBzZWFyY2ggOiBcIj9cIiArIHNlYXJjaDtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3Qgbm9ybWFsaXplSGFzaCA9IGhhc2ggPT4gIWhhc2ggfHwgaGFzaCA9PT0gXCIjXCIgPyBcIlwiIDogaGFzaC5zdGFydHNXaXRoKFwiI1wiKSA/IGhhc2ggOiBcIiNcIiArIGhhc2g7XG4vKipcbiAqIFRoaXMgaXMgYSBzaG9ydGN1dCBmb3IgY3JlYXRpbmcgYGFwcGxpY2F0aW9uL2pzb25gIHJlc3BvbnNlcy4gQ29udmVydHMgYGRhdGFgXG4gKiB0byBKU09OIGFuZCBzZXRzIHRoZSBgQ29udGVudC1UeXBlYCBoZWFkZXIuXG4gKlxuICogQGRlcHJlY2F0ZWQgVGhlIGBqc29uYCBtZXRob2QgaXMgZGVwcmVjYXRlZCBpbiBmYXZvciBvZiByZXR1cm5pbmcgcmF3IG9iamVjdHMuXG4gKiBUaGlzIG1ldGhvZCB3aWxsIGJlIHJlbW92ZWQgaW4gdjcuXG4gKi9cbmNvbnN0IGpzb24gPSBmdW5jdGlvbiBqc29uKGRhdGEsIGluaXQpIHtcbiAgaWYgKGluaXQgPT09IHZvaWQgMCkge1xuICAgIGluaXQgPSB7fTtcbiAgfVxuICBsZXQgcmVzcG9uc2VJbml0ID0gdHlwZW9mIGluaXQgPT09IFwibnVtYmVyXCIgPyB7XG4gICAgc3RhdHVzOiBpbml0XG4gIH0gOiBpbml0O1xuICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHJlc3BvbnNlSW5pdC5oZWFkZXJzKTtcbiAgaWYgKCFoZWFkZXJzLmhhcyhcIkNvbnRlbnQtVHlwZVwiKSkge1xuICAgIGhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiKTtcbiAgfVxuICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpLCBfZXh0ZW5kcyh7fSwgcmVzcG9uc2VJbml0LCB7XG4gICAgaGVhZGVyc1xuICB9KSk7XG59O1xuY2xhc3MgRGF0YVdpdGhSZXNwb25zZUluaXQge1xuICBjb25zdHJ1Y3RvcihkYXRhLCBpbml0KSB7XG4gICAgdGhpcy50eXBlID0gXCJEYXRhV2l0aFJlc3BvbnNlSW5pdFwiO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5pbml0ID0gaW5pdCB8fCBudWxsO1xuICB9XG59XG4vKipcbiAqIENyZWF0ZSBcInJlc3BvbnNlc1wiIHRoYXQgY29udGFpbiBgc3RhdHVzYC9gaGVhZGVyc2Agd2l0aG91dCBmb3JjaW5nXG4gKiBzZXJpYWxpemF0aW9uIGludG8gYW4gYWN0dWFsIGBSZXNwb25zZWAgLSB1c2VkIGJ5IFJlbWl4IHNpbmdsZSBmZXRjaFxuICovXG5mdW5jdGlvbiBkYXRhKGRhdGEsIGluaXQpIHtcbiAgcmV0dXJuIG5ldyBEYXRhV2l0aFJlc3BvbnNlSW5pdChkYXRhLCB0eXBlb2YgaW5pdCA9PT0gXCJudW1iZXJcIiA/IHtcbiAgICBzdGF0dXM6IGluaXRcbiAgfSA6IGluaXQpO1xufVxuY2xhc3MgQWJvcnRlZERlZmVycmVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuY2xhc3MgRGVmZXJyZWREYXRhIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgcmVzcG9uc2VJbml0KSB7XG4gICAgdGhpcy5wZW5kaW5nS2V5c1NldCA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLnN1YnNjcmliZXJzID0gbmV3IFNldCgpO1xuICAgIHRoaXMuZGVmZXJyZWRLZXlzID0gW107XG4gICAgaW52YXJpYW50KGRhdGEgJiYgdHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoZGF0YSksIFwiZGVmZXIoKSBvbmx5IGFjY2VwdHMgcGxhaW4gb2JqZWN0c1wiKTtcbiAgICAvLyBTZXQgdXAgYW4gQWJvcnRDb250cm9sbGVyICsgUHJvbWlzZSB3ZSBjYW4gcmFjZSBhZ2FpbnN0IHRvIGV4aXQgZWFybHlcbiAgICAvLyBjYW5jZWxsYXRpb25cbiAgICBsZXQgcmVqZWN0O1xuICAgIHRoaXMuYWJvcnRQcm9taXNlID0gbmV3IFByb21pc2UoKF8sIHIpID0+IHJlamVjdCA9IHIpO1xuICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICBsZXQgb25BYm9ydCA9ICgpID0+IHJlamVjdChuZXcgQWJvcnRlZERlZmVycmVkRXJyb3IoXCJEZWZlcnJlZCBkYXRhIGFib3J0ZWRcIikpO1xuICAgIHRoaXMudW5saXN0ZW5BYm9ydFNpZ25hbCA9ICgpID0+IHRoaXMuY29udHJvbGxlci5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uQWJvcnQpO1xuICAgIHRoaXMuY29udHJvbGxlci5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uQWJvcnQpO1xuICAgIHRoaXMuZGF0YSA9IE9iamVjdC5lbnRyaWVzKGRhdGEpLnJlZHVjZSgoYWNjLCBfcmVmMikgPT4ge1xuICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IF9yZWYyO1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWNjLCB7XG4gICAgICAgIFtrZXldOiB0aGlzLnRyYWNrUHJvbWlzZShrZXksIHZhbHVlKVxuICAgICAgfSk7XG4gICAgfSwge30pO1xuICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgIC8vIEFsbCBpbmNvbWluZyB2YWx1ZXMgd2VyZSByZXNvbHZlZFxuICAgICAgdGhpcy51bmxpc3RlbkFib3J0U2lnbmFsKCk7XG4gICAgfVxuICAgIHRoaXMuaW5pdCA9IHJlc3BvbnNlSW5pdDtcbiAgfVxuICB0cmFja1Byb21pc2Uoa2V5LCB2YWx1ZSkge1xuICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5kZWZlcnJlZEtleXMucHVzaChrZXkpO1xuICAgIHRoaXMucGVuZGluZ0tleXNTZXQuYWRkKGtleSk7XG4gICAgLy8gV2Ugc3RvcmUgYSBsaXR0bGUgd3JhcHBlciBwcm9taXNlIHRoYXQgd2lsbCBiZSBleHRlbmRlZCB3aXRoXG4gICAgLy8gX2RhdGEvX2Vycm9yIHByb3BzIHVwb24gcmVzb2x2ZS9yZWplY3RcbiAgICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmFjZShbdmFsdWUsIHRoaXMuYWJvcnRQcm9taXNlXSkudGhlbihkYXRhID0+IHRoaXMub25TZXR0bGUocHJvbWlzZSwga2V5LCB1bmRlZmluZWQsIGRhdGEpLCBlcnJvciA9PiB0aGlzLm9uU2V0dGxlKHByb21pc2UsIGtleSwgZXJyb3IpKTtcbiAgICAvLyBSZWdpc3RlciByZWplY3Rpb24gbGlzdGVuZXJzIHRvIGF2b2lkIHVuY2F1Z2h0IHByb21pc2UgcmVqZWN0aW9ucyBvblxuICAgIC8vIGVycm9ycyBvciBhYm9ydGVkIGRlZmVycmVkIHZhbHVlc1xuICAgIHByb21pc2UuY2F0Y2goKCkgPT4ge30pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl90cmFja2VkXCIsIHtcbiAgICAgIGdldDogKCkgPT4gdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG4gIG9uU2V0dGxlKHByb21pc2UsIGtleSwgZXJyb3IsIGRhdGEpIHtcbiAgICBpZiAodGhpcy5jb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkICYmIGVycm9yIGluc3RhbmNlb2YgQWJvcnRlZERlZmVycmVkRXJyb3IpIHtcbiAgICAgIHRoaXMudW5saXN0ZW5BYm9ydFNpZ25hbCgpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX2Vycm9yXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiBlcnJvclxuICAgICAgfSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgICB0aGlzLnBlbmRpbmdLZXlzU2V0LmRlbGV0ZShrZXkpO1xuICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgIC8vIE5vdGhpbmcgbGVmdCB0byBhYm9ydCFcbiAgICAgIHRoaXMudW5saXN0ZW5BYm9ydFNpZ25hbCgpO1xuICAgIH1cbiAgICAvLyBJZiB0aGUgcHJvbWlzZSB3YXMgcmVzb2x2ZWQvcmVqZWN0ZWQgd2l0aCB1bmRlZmluZWQsIHdlJ2xsIHRocm93IGFuIGVycm9yIGFzIHlvdVxuICAgIC8vIHNob3VsZCBhbHdheXMgcmVzb2x2ZSB3aXRoIGEgdmFsdWUgb3IgbnVsbFxuICAgIGlmIChlcnJvciA9PT0gdW5kZWZpbmVkICYmIGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHVuZGVmaW5lZEVycm9yID0gbmV3IEVycm9yKFwiRGVmZXJyZWQgZGF0YSBmb3Iga2V5IFxcXCJcIiArIGtleSArIFwiXFxcIiByZXNvbHZlZC9yZWplY3RlZCB3aXRoIGB1bmRlZmluZWRgLCBcIiArIFwieW91IG11c3QgcmVzb2x2ZS9yZWplY3Qgd2l0aCBhIHZhbHVlIG9yIGBudWxsYC5cIik7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfZXJyb3JcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IHVuZGVmaW5lZEVycm9yXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZW1pdChmYWxzZSwga2V5KTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh1bmRlZmluZWRFcnJvcik7XG4gICAgfVxuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl9lcnJvclwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gZXJyb3JcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbWl0KGZhbHNlLCBrZXkpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX2RhdGFcIiwge1xuICAgICAgZ2V0OiAoKSA9PiBkYXRhXG4gICAgfSk7XG4gICAgdGhpcy5lbWl0KGZhbHNlLCBrZXkpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG4gIGVtaXQoYWJvcnRlZCwgc2V0dGxlZEtleSkge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaChzdWJzY3JpYmVyID0+IHN1YnNjcmliZXIoYWJvcnRlZCwgc2V0dGxlZEtleSkpO1xuICB9XG4gIHN1YnNjcmliZShmbikge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMuYWRkKGZuKTtcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5zdWJzY3JpYmVycy5kZWxldGUoZm4pO1xuICB9XG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLmNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICB0aGlzLnBlbmRpbmdLZXlzU2V0LmZvckVhY2goKHYsIGspID0+IHRoaXMucGVuZGluZ0tleXNTZXQuZGVsZXRlKGspKTtcbiAgICB0aGlzLmVtaXQodHJ1ZSk7XG4gIH1cbiAgYXN5bmMgcmVzb2x2ZURhdGEoc2lnbmFsKSB7XG4gICAgbGV0IGFib3J0ZWQgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuZG9uZSkge1xuICAgICAgbGV0IG9uQWJvcnQgPSAoKSA9PiB0aGlzLmNhbmNlbCgpO1xuICAgICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgICAgIGFib3J0ZWQgPSBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoYWJvcnRlZCA9PiB7XG4gICAgICAgICAgc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgICAgICAgICBpZiAoYWJvcnRlZCB8fCB0aGlzLmRvbmUpIHtcbiAgICAgICAgICAgIHJlc29sdmUoYWJvcnRlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWJvcnRlZDtcbiAgfVxuICBnZXQgZG9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wZW5kaW5nS2V5c1NldC5zaXplID09PSAwO1xuICB9XG4gIGdldCB1bndyYXBwZWREYXRhKCkge1xuICAgIGludmFyaWFudCh0aGlzLmRhdGEgIT09IG51bGwgJiYgdGhpcy5kb25lLCBcIkNhbiBvbmx5IHVud3JhcCBkYXRhIG9uIGluaXRpYWxpemVkIGFuZCBzZXR0bGVkIGRlZmVycmVkc1wiKTtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5kYXRhKS5yZWR1Y2UoKGFjYywgX3JlZjMpID0+IHtcbiAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBfcmVmMztcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFjYywge1xuICAgICAgICBba2V5XTogdW53cmFwVHJhY2tlZFByb21pc2UodmFsdWUpXG4gICAgICB9KTtcbiAgICB9LCB7fSk7XG4gIH1cbiAgZ2V0IHBlbmRpbmdLZXlzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMucGVuZGluZ0tleXNTZXQpO1xuICB9XG59XG5mdW5jdGlvbiBpc1RyYWNrZWRQcm9taXNlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UgJiYgdmFsdWUuX3RyYWNrZWQgPT09IHRydWU7XG59XG5mdW5jdGlvbiB1bndyYXBUcmFja2VkUHJvbWlzZSh2YWx1ZSkge1xuICBpZiAoIWlzVHJhY2tlZFByb21pc2UodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmICh2YWx1ZS5fZXJyb3IpIHtcbiAgICB0aHJvdyB2YWx1ZS5fZXJyb3I7XG4gIH1cbiAgcmV0dXJuIHZhbHVlLl9kYXRhO1xufVxuLyoqXG4gKiBAZGVwcmVjYXRlZCBUaGUgYGRlZmVyYCBtZXRob2QgaXMgZGVwcmVjYXRlZCBpbiBmYXZvciBvZiByZXR1cm5pbmcgcmF3XG4gKiBvYmplY3RzLiBUaGlzIG1ldGhvZCB3aWxsIGJlIHJlbW92ZWQgaW4gdjcuXG4gKi9cbmNvbnN0IGRlZmVyID0gZnVuY3Rpb24gZGVmZXIoZGF0YSwgaW5pdCkge1xuICBpZiAoaW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgaW5pdCA9IHt9O1xuICB9XG4gIGxldCByZXNwb25zZUluaXQgPSB0eXBlb2YgaW5pdCA9PT0gXCJudW1iZXJcIiA/IHtcbiAgICBzdGF0dXM6IGluaXRcbiAgfSA6IGluaXQ7XG4gIHJldHVybiBuZXcgRGVmZXJyZWREYXRhKGRhdGEsIHJlc3BvbnNlSW5pdCk7XG59O1xuLyoqXG4gKiBBIHJlZGlyZWN0IHJlc3BvbnNlLiBTZXRzIHRoZSBzdGF0dXMgY29kZSBhbmQgdGhlIGBMb2NhdGlvbmAgaGVhZGVyLlxuICogRGVmYXVsdHMgdG8gXCIzMDIgRm91bmRcIi5cbiAqL1xuY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbiByZWRpcmVjdCh1cmwsIGluaXQpIHtcbiAgaWYgKGluaXQgPT09IHZvaWQgMCkge1xuICAgIGluaXQgPSAzMDI7XG4gIH1cbiAgbGV0IHJlc3BvbnNlSW5pdCA9IGluaXQ7XG4gIGlmICh0eXBlb2YgcmVzcG9uc2VJbml0ID09PSBcIm51bWJlclwiKSB7XG4gICAgcmVzcG9uc2VJbml0ID0ge1xuICAgICAgc3RhdHVzOiByZXNwb25zZUluaXRcbiAgICB9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiByZXNwb25zZUluaXQuc3RhdHVzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmVzcG9uc2VJbml0LnN0YXR1cyA9IDMwMjtcbiAgfVxuICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHJlc3BvbnNlSW5pdC5oZWFkZXJzKTtcbiAgaGVhZGVycy5zZXQoXCJMb2NhdGlvblwiLCB1cmwpO1xuICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIF9leHRlbmRzKHt9LCByZXNwb25zZUluaXQsIHtcbiAgICBoZWFkZXJzXG4gIH0pKTtcbn07XG4vKipcbiAqIEEgcmVkaXJlY3QgcmVzcG9uc2UgdGhhdCB3aWxsIGZvcmNlIGEgZG9jdW1lbnQgcmVsb2FkIHRvIHRoZSBuZXcgbG9jYXRpb24uXG4gKiBTZXRzIHRoZSBzdGF0dXMgY29kZSBhbmQgdGhlIGBMb2NhdGlvbmAgaGVhZGVyLlxuICogRGVmYXVsdHMgdG8gXCIzMDIgRm91bmRcIi5cbiAqL1xuY29uc3QgcmVkaXJlY3REb2N1bWVudCA9ICh1cmwsIGluaXQpID0+IHtcbiAgbGV0IHJlc3BvbnNlID0gcmVkaXJlY3QodXJsLCBpbml0KTtcbiAgcmVzcG9uc2UuaGVhZGVycy5zZXQoXCJYLVJlbWl4LVJlbG9hZC1Eb2N1bWVudFwiLCBcInRydWVcIik7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG4vKipcbiAqIEEgcmVkaXJlY3QgcmVzcG9uc2UgdGhhdCB3aWxsIHBlcmZvcm0gYSBgaGlzdG9yeS5yZXBsYWNlU3RhdGVgIGluc3RlYWQgb2YgYVxuICogYGhpc3RvcnkucHVzaFN0YXRlYCBmb3IgY2xpZW50LXNpZGUgbmF2aWdhdGlvbiByZWRpcmVjdHMuXG4gKiBTZXRzIHRoZSBzdGF0dXMgY29kZSBhbmQgdGhlIGBMb2NhdGlvbmAgaGVhZGVyLlxuICogRGVmYXVsdHMgdG8gXCIzMDIgRm91bmRcIi5cbiAqL1xuY29uc3QgcmVwbGFjZSA9ICh1cmwsIGluaXQpID0+IHtcbiAgbGV0IHJlc3BvbnNlID0gcmVkaXJlY3QodXJsLCBpbml0KTtcbiAgcmVzcG9uc2UuaGVhZGVycy5zZXQoXCJYLVJlbWl4LVJlcGxhY2VcIiwgXCJ0cnVlXCIpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuLyoqXG4gKiBAcHJpdmF0ZVxuICogVXRpbGl0eSBjbGFzcyB3ZSB1c2UgdG8gaG9sZCBhdXRvLXVud3JhcHBlZCA0eHgvNXh4IFJlc3BvbnNlIGJvZGllc1xuICpcbiAqIFdlIGRvbid0IGV4cG9ydCB0aGUgY2xhc3MgZm9yIHB1YmxpYyB1c2Ugc2luY2UgaXQncyBhbiBpbXBsZW1lbnRhdGlvblxuICogZGV0YWlsLCBidXQgd2UgZXhwb3J0IHRoZSBpbnRlcmZhY2UgYWJvdmUgc28gZm9sa3MgY2FuIGJ1aWxkIHRoZWlyIG93blxuICogYWJzdHJhY3Rpb25zIGFyb3VuZCBpbnN0YW5jZXMgdmlhIGlzUm91dGVFcnJvclJlc3BvbnNlKClcbiAqL1xuY2xhc3MgRXJyb3JSZXNwb25zZUltcGwge1xuICBjb25zdHJ1Y3RvcihzdGF0dXMsIHN0YXR1c1RleHQsIGRhdGEsIGludGVybmFsKSB7XG4gICAgaWYgKGludGVybmFsID09PSB2b2lkIDApIHtcbiAgICAgIGludGVybmFsID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQgfHwgXCJcIjtcbiAgICB0aGlzLmludGVybmFsID0gaW50ZXJuYWw7XG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgdGhpcy5kYXRhID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgdGhpcy5lcnJvciA9IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiBlcnJvciBpcyBhbiBFcnJvclJlc3BvbnNlIGdlbmVyYXRlZCBmcm9tIGEgNHh4LzV4eFxuICogUmVzcG9uc2UgdGhyb3duIGZyb20gYW4gYWN0aW9uL2xvYWRlclxuICovXG5mdW5jdGlvbiBpc1JvdXRlRXJyb3JSZXNwb25zZShlcnJvcikge1xuICByZXR1cm4gZXJyb3IgIT0gbnVsbCAmJiB0eXBlb2YgZXJyb3Iuc3RhdHVzID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBlcnJvci5zdGF0dXNUZXh0ID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBlcnJvci5pbnRlcm5hbCA9PT0gXCJib29sZWFuXCIgJiYgXCJkYXRhXCIgaW4gZXJyb3I7XG59XG5cbmNvbnN0IHZhbGlkTXV0YXRpb25NZXRob2RzQXJyID0gW1wicG9zdFwiLCBcInB1dFwiLCBcInBhdGNoXCIsIFwiZGVsZXRlXCJdO1xuY29uc3QgdmFsaWRNdXRhdGlvbk1ldGhvZHMgPSBuZXcgU2V0KHZhbGlkTXV0YXRpb25NZXRob2RzQXJyKTtcbmNvbnN0IHZhbGlkUmVxdWVzdE1ldGhvZHNBcnIgPSBbXCJnZXRcIiwgLi4udmFsaWRNdXRhdGlvbk1ldGhvZHNBcnJdO1xuY29uc3QgdmFsaWRSZXF1ZXN0TWV0aG9kcyA9IG5ldyBTZXQodmFsaWRSZXF1ZXN0TWV0aG9kc0Fycik7XG5jb25zdCByZWRpcmVjdFN0YXR1c0NvZGVzID0gbmV3IFNldChbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdKTtcbmNvbnN0IHJlZGlyZWN0UHJlc2VydmVNZXRob2RTdGF0dXNDb2RlcyA9IG5ldyBTZXQoWzMwNywgMzA4XSk7XG5jb25zdCBJRExFX05BVklHQVRJT04gPSB7XG4gIHN0YXRlOiBcImlkbGVcIixcbiAgbG9jYXRpb246IHVuZGVmaW5lZCxcbiAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gIGpzb246IHVuZGVmaW5lZCxcbiAgdGV4dDogdW5kZWZpbmVkXG59O1xuY29uc3QgSURMRV9GRVRDSEVSID0ge1xuICBzdGF0ZTogXCJpZGxlXCIsXG4gIGRhdGE6IHVuZGVmaW5lZCxcbiAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gIGpzb246IHVuZGVmaW5lZCxcbiAgdGV4dDogdW5kZWZpbmVkXG59O1xuY29uc3QgSURMRV9CTE9DS0VSID0ge1xuICBzdGF0ZTogXCJ1bmJsb2NrZWRcIixcbiAgcHJvY2VlZDogdW5kZWZpbmVkLFxuICByZXNldDogdW5kZWZpbmVkLFxuICBsb2NhdGlvbjogdW5kZWZpbmVkXG59O1xuY29uc3QgQUJTT0xVVEVfVVJMX1JFR0VYID0gL14oPzpbYS16XVthLXowLTkrLi1dKjp8XFwvXFwvKS9pO1xuY29uc3QgZGVmYXVsdE1hcFJvdXRlUHJvcGVydGllcyA9IHJvdXRlID0+ICh7XG4gIGhhc0Vycm9yQm91bmRhcnk6IEJvb2xlYW4ocm91dGUuaGFzRXJyb3JCb3VuZGFyeSlcbn0pO1xuY29uc3QgVFJBTlNJVElPTlNfU1RPUkFHRV9LRVkgPSBcInJlbWl4LXJvdXRlci10cmFuc2l0aW9uc1wiO1xuLy8jZW5kcmVnaW9uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8jcmVnaW9uIGNyZWF0ZVJvdXRlclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8qKlxuICogQ3JlYXRlIGEgcm91dGVyIGFuZCBsaXN0ZW4gdG8gaGlzdG9yeSBQT1AgbmF2aWdhdGlvbnNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUm91dGVyKGluaXQpIHtcbiAgY29uc3Qgcm91dGVyV2luZG93ID0gaW5pdC53aW5kb3cgPyBpbml0LndpbmRvdyA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiByb3V0ZXJXaW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHJvdXRlcldpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygcm91dGVyV2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCI7XG4gIGNvbnN0IGlzU2VydmVyID0gIWlzQnJvd3NlcjtcbiAgaW52YXJpYW50KGluaXQucm91dGVzLmxlbmd0aCA+IDAsIFwiWW91IG11c3QgcHJvdmlkZSBhIG5vbi1lbXB0eSByb3V0ZXMgYXJyYXkgdG8gY3JlYXRlUm91dGVyXCIpO1xuICBsZXQgbWFwUm91dGVQcm9wZXJ0aWVzO1xuICBpZiAoaW5pdC5tYXBSb3V0ZVByb3BlcnRpZXMpIHtcbiAgICBtYXBSb3V0ZVByb3BlcnRpZXMgPSBpbml0Lm1hcFJvdXRlUHJvcGVydGllcztcbiAgfSBlbHNlIGlmIChpbml0LmRldGVjdEVycm9yQm91bmRhcnkpIHtcbiAgICAvLyBJZiB0aGV5IGFyZSBzdGlsbCB1c2luZyB0aGUgZGVwcmVjYXRlZCB2ZXJzaW9uLCB3cmFwIGl0IHdpdGggdGhlIG5ldyBBUElcbiAgICBsZXQgZGV0ZWN0RXJyb3JCb3VuZGFyeSA9IGluaXQuZGV0ZWN0RXJyb3JCb3VuZGFyeTtcbiAgICBtYXBSb3V0ZVByb3BlcnRpZXMgPSByb3V0ZSA9PiAoe1xuICAgICAgaGFzRXJyb3JCb3VuZGFyeTogZGV0ZWN0RXJyb3JCb3VuZGFyeShyb3V0ZSlcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBtYXBSb3V0ZVByb3BlcnRpZXMgPSBkZWZhdWx0TWFwUm91dGVQcm9wZXJ0aWVzO1xuICB9XG4gIC8vIFJvdXRlcyBrZXllZCBieSBJRFxuICBsZXQgbWFuaWZlc3QgPSB7fTtcbiAgLy8gUm91dGVzIGluIHRyZWUgZm9ybWF0IGZvciBtYXRjaGluZ1xuICBsZXQgZGF0YVJvdXRlcyA9IGNvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMoaW5pdC5yb3V0ZXMsIG1hcFJvdXRlUHJvcGVydGllcywgdW5kZWZpbmVkLCBtYW5pZmVzdCk7XG4gIGxldCBpbkZsaWdodERhdGFSb3V0ZXM7XG4gIGxldCBiYXNlbmFtZSA9IGluaXQuYmFzZW5hbWUgfHwgXCIvXCI7XG4gIGxldCBkYXRhU3RyYXRlZ3lJbXBsID0gaW5pdC5kYXRhU3RyYXRlZ3kgfHwgZGVmYXVsdERhdGFTdHJhdGVneTtcbiAgbGV0IHBhdGNoUm91dGVzT25OYXZpZ2F0aW9uSW1wbCA9IGluaXQucGF0Y2hSb3V0ZXNPbk5hdmlnYXRpb247XG4gIC8vIENvbmZpZyBkcml2ZW4gYmVoYXZpb3IgZmxhZ3NcbiAgbGV0IGZ1dHVyZSA9IF9leHRlbmRzKHtcbiAgICB2N19mZXRjaGVyUGVyc2lzdDogZmFsc2UsXG4gICAgdjdfbm9ybWFsaXplRm9ybU1ldGhvZDogZmFsc2UsXG4gICAgdjdfcGFydGlhbEh5ZHJhdGlvbjogZmFsc2UsXG4gICAgdjdfcHJlcGVuZEJhc2VuYW1lOiBmYWxzZSxcbiAgICB2N19yZWxhdGl2ZVNwbGF0UGF0aDogZmFsc2UsXG4gICAgdjdfc2tpcEFjdGlvbkVycm9yUmV2YWxpZGF0aW9uOiBmYWxzZVxuICB9LCBpbml0LmZ1dHVyZSk7XG4gIC8vIENsZWFudXAgZnVuY3Rpb24gZm9yIGhpc3RvcnlcbiAgbGV0IHVubGlzdGVuSGlzdG9yeSA9IG51bGw7XG4gIC8vIEV4dGVybmFsbHktcHJvdmlkZWQgZnVuY3Rpb25zIHRvIGNhbGwgb24gYWxsIHN0YXRlIGNoYW5nZXNcbiAgbGV0IHN1YnNjcmliZXJzID0gbmV3IFNldCgpO1xuICAvLyBFeHRlcm5hbGx5LXByb3ZpZGVkIG9iamVjdCB0byBob2xkIHNjcm9sbCByZXN0b3JhdGlvbiBsb2NhdGlvbnMgZHVyaW5nIHJvdXRpbmdcbiAgbGV0IHNhdmVkU2Nyb2xsUG9zaXRpb25zID0gbnVsbDtcbiAgLy8gRXh0ZXJuYWxseS1wcm92aWRlZCBmdW5jdGlvbiB0byBnZXQgc2Nyb2xsIHJlc3RvcmF0aW9uIGtleXNcbiAgbGV0IGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5ID0gbnVsbDtcbiAgLy8gRXh0ZXJuYWxseS1wcm92aWRlZCBmdW5jdGlvbiB0byBnZXQgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgbGV0IGdldFNjcm9sbFBvc2l0aW9uID0gbnVsbDtcbiAgLy8gT25lLXRpbWUgZmxhZyB0byBjb250cm9sIHRoZSBpbml0aWFsIGh5ZHJhdGlvbiBzY3JvbGwgcmVzdG9yYXRpb24uICBCZWNhdXNlXG4gIC8vIHdlIGRvbid0IGdldCB0aGUgc2F2ZWQgcG9zaXRpb25zIGZyb20gPFNjcm9sbFJlc3RvcmF0aW9uIC8+IHVudGlsIF9hZnRlcl9cbiAgLy8gdGhlIGluaXRpYWwgcmVuZGVyLCB3ZSBuZWVkIHRvIG1hbnVhbGx5IHRyaWdnZXIgYSBzZXBhcmF0ZSB1cGRhdGVTdGF0ZSB0b1xuICAvLyBzZW5kIGFsb25nIHRoZSByZXN0b3JlU2Nyb2xsUG9zaXRpb25cbiAgLy8gU2V0IHRvIHRydWUgaWYgd2UgaGF2ZSBgaHlkcmF0aW9uRGF0YWAgc2luY2Ugd2UgYXNzdW1lIHdlIHdlcmUgU1NSJ2QgYW5kIHRoYXRcbiAgLy8gU1NSIGRpZCB0aGUgaW5pdGlhbCBzY3JvbGwgcmVzdG9yYXRpb24uXG4gIGxldCBpbml0aWFsU2Nyb2xsUmVzdG9yZWQgPSBpbml0Lmh5ZHJhdGlvbkRhdGEgIT0gbnVsbDtcbiAgbGV0IGluaXRpYWxNYXRjaGVzID0gbWF0Y2hSb3V0ZXMoZGF0YVJvdXRlcywgaW5pdC5oaXN0b3J5LmxvY2F0aW9uLCBiYXNlbmFtZSk7XG4gIGxldCBpbml0aWFsTWF0Y2hlc0lzRk9XID0gZmFsc2U7XG4gIGxldCBpbml0aWFsRXJyb3JzID0gbnVsbDtcbiAgaWYgKGluaXRpYWxNYXRjaGVzID09IG51bGwgJiYgIXBhdGNoUm91dGVzT25OYXZpZ2F0aW9uSW1wbCkge1xuICAgIC8vIElmIHdlIGRvIG5vdCBtYXRjaCBhIHVzZXItcHJvdmlkZWQtcm91dGUsIGZhbGwgYmFjayB0byB0aGUgcm9vdFxuICAgIC8vIHRvIGFsbG93IHRoZSBlcnJvciBib3VuZGFyeSB0byB0YWtlIG92ZXJcbiAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgcGF0aG5hbWU6IGluaXQuaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZVxuICAgIH0pO1xuICAgIGxldCB7XG4gICAgICBtYXRjaGVzLFxuICAgICAgcm91dGVcbiAgICB9ID0gZ2V0U2hvcnRDaXJjdWl0TWF0Y2hlcyhkYXRhUm91dGVzKTtcbiAgICBpbml0aWFsTWF0Y2hlcyA9IG1hdGNoZXM7XG4gICAgaW5pdGlhbEVycm9ycyA9IHtcbiAgICAgIFtyb3V0ZS5pZF06IGVycm9yXG4gICAgfTtcbiAgfVxuICAvLyBJbiBTUEEgYXBwcywgaWYgdGhlIHVzZXIgcHJvdmlkZWQgYSBwYXRjaFJvdXRlc09uTmF2aWdhdGlvbiBpbXBsZW1lbnRhdGlvbiBhbmRcbiAgLy8gb3VyIGluaXRpYWwgbWF0Y2ggaXMgYSBzcGxhdCByb3V0ZSwgY2xlYXIgdGhlbSBvdXQgc28gd2UgcnVuIHRocm91Z2ggbGF6eVxuICAvLyBkaXNjb3Zlcnkgb24gaHlkcmF0aW9uIGluIGNhc2UgdGhlcmUncyBhIG1vcmUgYWNjdXJhdGUgbGF6eSByb3V0ZSBtYXRjaC5cbiAgLy8gSW4gU1NSIGFwcHMgKHdpdGggYGh5ZHJhdGlvbkRhdGFgKSwgd2UgZXhwZWN0IHRoYXQgdGhlIHNlcnZlciB3aWxsIHNlbmRcbiAgLy8gdXAgdGhlIHByb3BlciBtYXRjaGVkIHJvdXRlcyBzbyB3ZSBkb24ndCB3YW50IHRvIHJ1biBsYXp5IGRpc2NvdmVyeSBvblxuICAvLyBpbml0aWFsIGh5ZHJhdGlvbiBhbmQgd2FudCB0byBoeWRyYXRlIGludG8gdGhlIHNwbGF0IHJvdXRlLlxuICBpZiAoaW5pdGlhbE1hdGNoZXMgJiYgIWluaXQuaHlkcmF0aW9uRGF0YSkge1xuICAgIGxldCBmb2dPZldhciA9IGNoZWNrRm9nT2ZXYXIoaW5pdGlhbE1hdGNoZXMsIGRhdGFSb3V0ZXMsIGluaXQuaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgaWYgKGZvZ09mV2FyLmFjdGl2ZSkge1xuICAgICAgaW5pdGlhbE1hdGNoZXMgPSBudWxsO1xuICAgIH1cbiAgfVxuICBsZXQgaW5pdGlhbGl6ZWQ7XG4gIGlmICghaW5pdGlhbE1hdGNoZXMpIHtcbiAgICBpbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIGluaXRpYWxNYXRjaGVzID0gW107XG4gICAgLy8gSWYgcGFydGlhbCBoeWRyYXRpb24gYW5kIGZvZyBvZiB3YXIgaXMgZW5hYmxlZCwgd2Ugd2lsbCBiZSBydW5uaW5nXG4gICAgLy8gYHBhdGNoUm91dGVzT25OYXZpZ2F0aW9uYCBkdXJpbmcgaHlkcmF0aW9uIHNvIGluY2x1ZGUgYW55IHBhcnRpYWwgbWF0Y2hlcyBhc1xuICAgIC8vIHRoZSBpbml0aWFsIG1hdGNoZXMgc28gd2UgY2FuIHByb3Blcmx5IHJlbmRlciBgSHlkcmF0ZUZhbGxiYWNrYCdzXG4gICAgaWYgKGZ1dHVyZS52N19wYXJ0aWFsSHlkcmF0aW9uKSB7XG4gICAgICBsZXQgZm9nT2ZXYXIgPSBjaGVja0ZvZ09mV2FyKG51bGwsIGRhdGFSb3V0ZXMsIGluaXQuaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICBpZiAoZm9nT2ZXYXIuYWN0aXZlICYmIGZvZ09mV2FyLm1hdGNoZXMpIHtcbiAgICAgICAgaW5pdGlhbE1hdGNoZXNJc0ZPVyA9IHRydWU7XG4gICAgICAgIGluaXRpYWxNYXRjaGVzID0gZm9nT2ZXYXIubWF0Y2hlcztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaW5pdGlhbE1hdGNoZXMuc29tZShtID0+IG0ucm91dGUubGF6eSkpIHtcbiAgICAvLyBBbGwgaW5pdGlhbE1hdGNoZXMgbmVlZCB0byBiZSBsb2FkZWQgYmVmb3JlIHdlJ3JlIHJlYWR5LiAgSWYgd2UgaGF2ZSBsYXp5XG4gICAgLy8gZnVuY3Rpb25zIGFyb3VuZCBzdGlsbCB0aGVuIHdlJ2xsIG5lZWQgdG8gcnVuIHRoZW0gaW4gaW5pdGlhbGl6ZSgpXG4gICAgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgfSBlbHNlIGlmICghaW5pdGlhbE1hdGNoZXMuc29tZShtID0+IG0ucm91dGUubG9hZGVyKSkge1xuICAgIC8vIElmIHdlJ3ZlIGdvdCBubyBsb2FkZXJzIHRvIHJ1biwgdGhlbiB3ZSdyZSBnb29kIHRvIGdvXG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGZ1dHVyZS52N19wYXJ0aWFsSHlkcmF0aW9uKSB7XG4gICAgLy8gSWYgcGFydGlhbCBoeWRyYXRpb24gaXMgZW5hYmxlZCwgd2UncmUgaW5pdGlhbGl6ZWQgc28gbG9uZyBhcyB3ZSB3ZXJlXG4gICAgLy8gcHJvdmlkZWQgd2l0aCBoeWRyYXRpb25EYXRhIGZvciBldmVyeSByb3V0ZSB3aXRoIGEgbG9hZGVyLCBhbmQgbm8gbG9hZGVyc1xuICAgIC8vIHdlcmUgbWFya2VkIGZvciBleHBsaWNpdCBoeWRyYXRpb25cbiAgICBsZXQgbG9hZGVyRGF0YSA9IGluaXQuaHlkcmF0aW9uRGF0YSA/IGluaXQuaHlkcmF0aW9uRGF0YS5sb2FkZXJEYXRhIDogbnVsbDtcbiAgICBsZXQgZXJyb3JzID0gaW5pdC5oeWRyYXRpb25EYXRhID8gaW5pdC5oeWRyYXRpb25EYXRhLmVycm9ycyA6IG51bGw7XG4gICAgLy8gSWYgZXJyb3JzIGV4aXN0LCBkb24ndCBjb25zaWRlciByb3V0ZXMgYmVsb3cgdGhlIGJvdW5kYXJ5XG4gICAgaWYgKGVycm9ycykge1xuICAgICAgbGV0IGlkeCA9IGluaXRpYWxNYXRjaGVzLmZpbmRJbmRleChtID0+IGVycm9yc1ttLnJvdXRlLmlkXSAhPT0gdW5kZWZpbmVkKTtcbiAgICAgIGluaXRpYWxpemVkID0gaW5pdGlhbE1hdGNoZXMuc2xpY2UoMCwgaWR4ICsgMSkuZXZlcnkobSA9PiAhc2hvdWxkTG9hZFJvdXRlT25IeWRyYXRpb24obS5yb3V0ZSwgbG9hZGVyRGF0YSwgZXJyb3JzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXRpYWxpemVkID0gaW5pdGlhbE1hdGNoZXMuZXZlcnkobSA9PiAhc2hvdWxkTG9hZFJvdXRlT25IeWRyYXRpb24obS5yb3V0ZSwgbG9hZGVyRGF0YSwgZXJyb3JzKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFdpdGhvdXQgcGFydGlhbCBoeWRyYXRpb24gLSB3ZSdyZSBpbml0aWFsaXplZCBpZiB3ZSB3ZXJlIHByb3ZpZGVkIGFueVxuICAgIC8vIGh5ZHJhdGlvbkRhdGEgLSB3aGljaCBpcyBleHBlY3RlZCB0byBiZSBjb21wbGV0ZVxuICAgIGluaXRpYWxpemVkID0gaW5pdC5oeWRyYXRpb25EYXRhICE9IG51bGw7XG4gIH1cbiAgbGV0IHJvdXRlcjtcbiAgbGV0IHN0YXRlID0ge1xuICAgIGhpc3RvcnlBY3Rpb246IGluaXQuaGlzdG9yeS5hY3Rpb24sXG4gICAgbG9jYXRpb246IGluaXQuaGlzdG9yeS5sb2NhdGlvbixcbiAgICBtYXRjaGVzOiBpbml0aWFsTWF0Y2hlcyxcbiAgICBpbml0aWFsaXplZCxcbiAgICBuYXZpZ2F0aW9uOiBJRExFX05BVklHQVRJT04sXG4gICAgLy8gRG9uJ3QgcmVzdG9yZSBvbiBpbml0aWFsIHVwZGF0ZVN0YXRlKCkgaWYgd2Ugd2VyZSBTU1InZFxuICAgIHJlc3RvcmVTY3JvbGxQb3NpdGlvbjogaW5pdC5oeWRyYXRpb25EYXRhICE9IG51bGwgPyBmYWxzZSA6IG51bGwsXG4gICAgcHJldmVudFNjcm9sbFJlc2V0OiBmYWxzZSxcbiAgICByZXZhbGlkYXRpb246IFwiaWRsZVwiLFxuICAgIGxvYWRlckRhdGE6IGluaXQuaHlkcmF0aW9uRGF0YSAmJiBpbml0Lmh5ZHJhdGlvbkRhdGEubG9hZGVyRGF0YSB8fCB7fSxcbiAgICBhY3Rpb25EYXRhOiBpbml0Lmh5ZHJhdGlvbkRhdGEgJiYgaW5pdC5oeWRyYXRpb25EYXRhLmFjdGlvbkRhdGEgfHwgbnVsbCxcbiAgICBlcnJvcnM6IGluaXQuaHlkcmF0aW9uRGF0YSAmJiBpbml0Lmh5ZHJhdGlvbkRhdGEuZXJyb3JzIHx8IGluaXRpYWxFcnJvcnMsXG4gICAgZmV0Y2hlcnM6IG5ldyBNYXAoKSxcbiAgICBibG9ja2VyczogbmV3IE1hcCgpXG4gIH07XG4gIC8vIC0tIFN0YXRlZnVsIGludGVybmFsIHZhcmlhYmxlcyB0byBtYW5hZ2UgbmF2aWdhdGlvbnMgLS1cbiAgLy8gQ3VycmVudCBuYXZpZ2F0aW9uIGluIHByb2dyZXNzICh0byBiZSBjb21taXR0ZWQgaW4gY29tcGxldGVOYXZpZ2F0aW9uKVxuICBsZXQgcGVuZGluZ0FjdGlvbiA9IEFjdGlvbi5Qb3A7XG4gIC8vIFNob3VsZCB0aGUgY3VycmVudCBuYXZpZ2F0aW9uIHByZXZlbnQgdGhlIHNjcm9sbCByZXNldCBpZiBzY3JvbGwgY2Fubm90XG4gIC8vIGJlIHJlc3RvcmVkP1xuICBsZXQgcGVuZGluZ1ByZXZlbnRTY3JvbGxSZXNldCA9IGZhbHNlO1xuICAvLyBBYm9ydENvbnRyb2xsZXIgZm9yIHRoZSBhY3RpdmUgbmF2aWdhdGlvblxuICBsZXQgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyO1xuICAvLyBTaG91bGQgdGhlIGN1cnJlbnQgbmF2aWdhdGlvbiBlbmFibGUgZG9jdW1lbnQuc3RhcnRWaWV3VHJhbnNpdGlvbj9cbiAgbGV0IHBlbmRpbmdWaWV3VHJhbnNpdGlvbkVuYWJsZWQgPSBmYWxzZTtcbiAgLy8gU3RvcmUgYXBwbGllZCB2aWV3IHRyYW5zaXRpb25zIHNvIHdlIGNhbiBhcHBseSB0aGVtIG9uIFBPUFxuICBsZXQgYXBwbGllZFZpZXdUcmFuc2l0aW9ucyA9IG5ldyBNYXAoKTtcbiAgLy8gQ2xlYW51cCBmdW5jdGlvbiBmb3IgcGVyc2lzdGluZyBhcHBsaWVkIHRyYW5zaXRpb25zIHRvIHNlc3Npb25TdG9yYWdlXG4gIGxldCByZW1vdmVQYWdlSGlkZUV2ZW50TGlzdGVuZXIgPSBudWxsO1xuICAvLyBXZSB1c2UgdGhpcyB0byBhdm9pZCB0b3VjaGluZyBoaXN0b3J5IGluIGNvbXBsZXRlTmF2aWdhdGlvbiBpZiBhXG4gIC8vIHJldmFsaWRhdGlvbiBpcyBlbnRpcmVseSB1bmludGVycnVwdGVkXG4gIGxldCBpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24gPSBmYWxzZTtcbiAgLy8gVXNlIHRoaXMgaW50ZXJuYWwgZmxhZyB0byBmb3JjZSByZXZhbGlkYXRpb24gb2YgYWxsIGxvYWRlcnM6XG4gIC8vICAtIHN1Ym1pc3Npb25zIChjb21wbGV0ZWQgb3IgaW50ZXJydXB0ZWQpXG4gIC8vICAtIHVzZVJldmFsaWRhdG9yKClcbiAgLy8gIC0gWC1SZW1peC1SZXZhbGlkYXRlIChmcm9tIHJlZGlyZWN0KVxuICBsZXQgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCA9IGZhbHNlO1xuICAvLyBVc2UgdGhpcyBpbnRlcm5hbCBhcnJheSB0byBjYXB0dXJlIHJvdXRlcyB0aGF0IHJlcXVpcmUgcmV2YWxpZGF0aW9uIGR1ZVxuICAvLyB0byBhIGNhbmNlbGxlZCBkZWZlcnJlZCBvbiBhY3Rpb24gc3VibWlzc2lvblxuICBsZXQgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMgPSBbXTtcbiAgLy8gVXNlIHRoaXMgaW50ZXJuYWwgYXJyYXkgdG8gY2FwdHVyZSBmZXRjaGVyIGxvYWRzIHRoYXQgd2VyZSBjYW5jZWxsZWQgYnkgYW5cbiAgLy8gYWN0aW9uIG5hdmlnYXRpb24gYW5kIHJlcXVpcmUgcmV2YWxpZGF0aW9uXG4gIGxldCBjYW5jZWxsZWRGZXRjaGVyTG9hZHMgPSBuZXcgU2V0KCk7XG4gIC8vIEFib3J0Q29udHJvbGxlcnMgZm9yIGFueSBpbi1mbGlnaHQgZmV0Y2hlcnNcbiAgbGV0IGZldGNoQ29udHJvbGxlcnMgPSBuZXcgTWFwKCk7XG4gIC8vIFRyYWNrIGxvYWRzIGJhc2VkIG9uIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHN0YXJ0ZWRcbiAgbGV0IGluY3JlbWVudGluZ0xvYWRJZCA9IDA7XG4gIC8vIFRyYWNrIHRoZSBvdXRzdGFuZGluZyBwZW5kaW5nIG5hdmlnYXRpb24gZGF0YSBsb2FkIHRvIGJlIGNvbXBhcmVkIGFnYWluc3RcbiAgLy8gdGhlIGdsb2JhbGx5IGluY3JlbWVudGluZyBsb2FkIHdoZW4gYSBmZXRjaGVyIGxvYWQgbGFuZHMgYWZ0ZXIgYSBjb21wbGV0ZWRcbiAgLy8gbmF2aWdhdGlvblxuICBsZXQgcGVuZGluZ05hdmlnYXRpb25Mb2FkSWQgPSAtMTtcbiAgLy8gRmV0Y2hlcnMgdGhhdCB0cmlnZ2VyZWQgZGF0YSByZWxvYWRzIGFzIGEgcmVzdWx0IG9mIHRoZWlyIGFjdGlvbnNcbiAgbGV0IGZldGNoUmVsb2FkSWRzID0gbmV3IE1hcCgpO1xuICAvLyBGZXRjaGVycyB0aGF0IHRyaWdnZXJlZCByZWRpcmVjdCBuYXZpZ2F0aW9uc1xuICBsZXQgZmV0Y2hSZWRpcmVjdElkcyA9IG5ldyBTZXQoKTtcbiAgLy8gTW9zdCByZWNlbnQgaHJlZi9tYXRjaCBmb3IgZmV0Y2hlci5sb2FkIGNhbGxzIGZvciBmZXRjaGVyc1xuICBsZXQgZmV0Y2hMb2FkTWF0Y2hlcyA9IG5ldyBNYXAoKTtcbiAgLy8gUmVmLWNvdW50IG1vdW50ZWQgZmV0Y2hlcnMgc28gd2Uga25vdyB3aGVuIGl0J3Mgb2sgdG8gY2xlYW4gdGhlbSB1cFxuICBsZXQgYWN0aXZlRmV0Y2hlcnMgPSBuZXcgTWFwKCk7XG4gIC8vIEZldGNoZXJzIHRoYXQgaGF2ZSByZXF1ZXN0ZWQgYSBkZWxldGUgd2hlbiB1c2luZyB2N19mZXRjaGVyUGVyc2lzdCxcbiAgLy8gdGhleSdsbCBiZSBvZmZpY2lhbGx5IHJlbW92ZWQgYWZ0ZXIgdGhleSByZXR1cm4gdG8gaWRsZVxuICBsZXQgZGVsZXRlZEZldGNoZXJzID0gbmV3IFNldCgpO1xuICAvLyBTdG9yZSBEZWZlcnJlZERhdGEgaW5zdGFuY2VzIGZvciBhY3RpdmUgcm91dGUgbWF0Y2hlcy4gIFdoZW4gYVxuICAvLyByb3V0ZSBsb2FkZXIgcmV0dXJucyBkZWZlcigpIHdlIHN0aWNrIG9uZSBpbiBoZXJlLiAgVGhlbiwgd2hlbiBhIG5lc3RlZFxuICAvLyBwcm9taXNlIHJlc29sdmVzIHdlIHVwZGF0ZSBsb2FkZXJEYXRhLiAgSWYgYSBuZXcgbmF2aWdhdGlvbiBzdGFydHMgd2VcbiAgLy8gY2FuY2VsIGFjdGl2ZSBkZWZlcnJlZHMgZm9yIGVsaW1pbmF0ZWQgcm91dGVzLlxuICBsZXQgYWN0aXZlRGVmZXJyZWRzID0gbmV3IE1hcCgpO1xuICAvLyBTdG9yZSBibG9ja2VyIGZ1bmN0aW9ucyBpbiBhIHNlcGFyYXRlIE1hcCBvdXRzaWRlIG9mIHJvdXRlciBzdGF0ZSBzaW5jZVxuICAvLyB3ZSBkb24ndCBuZWVkIHRvIHVwZGF0ZSBVSSBzdGF0ZSBpZiB0aGV5IGNoYW5nZVxuICBsZXQgYmxvY2tlckZ1bmN0aW9ucyA9IG5ldyBNYXAoKTtcbiAgLy8gRmxhZyB0byBpZ25vcmUgdGhlIG5leHQgaGlzdG9yeSB1cGRhdGUsIHNvIHdlIGNhbiByZXZlcnQgdGhlIFVSTCBjaGFuZ2Ugb25cbiAgLy8gYSBQT1AgbmF2aWdhdGlvbiB0aGF0IHdhcyBibG9ja2VkIGJ5IHRoZSB1c2VyIHdpdGhvdXQgdG91Y2hpbmcgcm91dGVyIHN0YXRlXG4gIGxldCB1bmJsb2NrQmxvY2tlckhpc3RvcnlVcGRhdGUgPSB1bmRlZmluZWQ7XG4gIC8vIEluaXRpYWxpemUgdGhlIHJvdXRlciwgYWxsIHNpZGUgZWZmZWN0cyBzaG91bGQgYmUga2lja2VkIG9mZiBmcm9tIGhlcmUuXG4gIC8vIEltcGxlbWVudGVkIGFzIGEgRmx1ZW50IEFQSSBmb3IgZWFzZSBvZjpcbiAgLy8gICBsZXQgcm91dGVyID0gY3JlYXRlUm91dGVyKGluaXQpLmluaXRpYWxpemUoKTtcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBJZiBoaXN0b3J5IGluZm9ybXMgdXMgb2YgYSBQT1AgbmF2aWdhdGlvbiwgc3RhcnQgdGhlIG5hdmlnYXRpb24gYnV0IGRvIG5vdCB1cGRhdGVcbiAgICAvLyBzdGF0ZS4gIFdlJ2xsIHVwZGF0ZSBvdXIgb3duIHN0YXRlIG9uY2UgdGhlIG5hdmlnYXRpb24gY29tcGxldGVzXG4gICAgdW5saXN0ZW5IaXN0b3J5ID0gaW5pdC5oaXN0b3J5Lmxpc3RlbihfcmVmID0+IHtcbiAgICAgIGxldCB7XG4gICAgICAgIGFjdGlvbjogaGlzdG9yeUFjdGlvbixcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIGRlbHRhXG4gICAgICB9ID0gX3JlZjtcbiAgICAgIC8vIElnbm9yZSB0aGlzIGV2ZW50IGlmIGl0IHdhcyBqdXN0IHVzIHJlc2V0dGluZyB0aGUgVVJMIGZyb20gYVxuICAgICAgLy8gYmxvY2tlZCBQT1AgbmF2aWdhdGlvblxuICAgICAgaWYgKHVuYmxvY2tCbG9ja2VySGlzdG9yeVVwZGF0ZSkge1xuICAgICAgICB1bmJsb2NrQmxvY2tlckhpc3RvcnlVcGRhdGUoKTtcbiAgICAgICAgdW5ibG9ja0Jsb2NrZXJIaXN0b3J5VXBkYXRlID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB3YXJuaW5nKGJsb2NrZXJGdW5jdGlvbnMuc2l6ZSA9PT0gMCB8fCBkZWx0YSAhPSBudWxsLCBcIllvdSBhcmUgdHJ5aW5nIHRvIHVzZSBhIGJsb2NrZXIgb24gYSBQT1AgbmF2aWdhdGlvbiB0byBhIGxvY2F0aW9uIFwiICsgXCJ0aGF0IHdhcyBub3QgY3JlYXRlZCBieSBAcmVtaXgtcnVuL3JvdXRlci4gVGhpcyB3aWxsIGZhaWwgc2lsZW50bHkgaW4gXCIgKyBcInByb2R1Y3Rpb24uIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgYXJlIG5hdmlnYXRpbmcgb3V0c2lkZSB0aGUgcm91dGVyIFwiICsgXCJ2aWEgYHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZWAvYHdpbmRvdy5sb2NhdGlvbi5oYXNoYCBpbnN0ZWFkIG9mIHVzaW5nIFwiICsgXCJyb3V0ZXIgbmF2aWdhdGlvbiBBUElzLiAgVGhpcyBjYW4gYWxzbyBoYXBwZW4gaWYgeW91IGFyZSB1c2luZyBcIiArIFwiY3JlYXRlSGFzaFJvdXRlciBhbmQgdGhlIHVzZXIgbWFudWFsbHkgY2hhbmdlcyB0aGUgVVJMLlwiKTtcbiAgICAgIGxldCBibG9ja2VyS2V5ID0gc2hvdWxkQmxvY2tOYXZpZ2F0aW9uKHtcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICAgICAgbmV4dExvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgaGlzdG9yeUFjdGlvblxuICAgICAgfSk7XG4gICAgICBpZiAoYmxvY2tlcktleSAmJiBkZWx0YSAhPSBudWxsKSB7XG4gICAgICAgIC8vIFJlc3RvcmUgdGhlIFVSTCB0byBtYXRjaCB0aGUgY3VycmVudCBVSSwgYnV0IGRvbid0IHVwZGF0ZSByb3V0ZXIgc3RhdGVcbiAgICAgICAgbGV0IG5leHRIaXN0b3J5VXBkYXRlUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgIHVuYmxvY2tCbG9ja2VySGlzdG9yeVVwZGF0ZSA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuICAgICAgICBpbml0Lmhpc3RvcnkuZ28oZGVsdGEgKiAtMSk7XG4gICAgICAgIC8vIFB1dCB0aGUgYmxvY2tlciBpbnRvIGEgYmxvY2tlZCBzdGF0ZVxuICAgICAgICB1cGRhdGVCbG9ja2VyKGJsb2NrZXJLZXksIHtcbiAgICAgICAgICBzdGF0ZTogXCJibG9ja2VkXCIsXG4gICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgcHJvY2VlZCgpIHtcbiAgICAgICAgICAgIHVwZGF0ZUJsb2NrZXIoYmxvY2tlcktleSwge1xuICAgICAgICAgICAgICBzdGF0ZTogXCJwcm9jZWVkaW5nXCIsXG4gICAgICAgICAgICAgIHByb2NlZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgcmVzZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgbG9jYXRpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gUmUtZG8gdGhlIHNhbWUgUE9QIG5hdmlnYXRpb24gd2UganVzdCBibG9ja2VkLCBhZnRlciB0aGUgdXJsXG4gICAgICAgICAgICAvLyByZXN0b3JhdGlvbiBpcyBhbHNvIGNvbXBsZXRlLiAgU2VlOlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlbWl4LXJ1bi9yZWFjdC1yb3V0ZXIvaXNzdWVzLzExNjEzXG4gICAgICAgICAgICBuZXh0SGlzdG9yeVVwZGF0ZVByb21pc2UudGhlbigoKSA9PiBpbml0Lmhpc3RvcnkuZ28oZGVsdGEpKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgICAgbGV0IGJsb2NrZXJzID0gbmV3IE1hcChzdGF0ZS5ibG9ja2Vycyk7XG4gICAgICAgICAgICBibG9ja2Vycy5zZXQoYmxvY2tlcktleSwgSURMRV9CTE9DS0VSKTtcbiAgICAgICAgICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgICAgYmxvY2tlcnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGFydE5hdmlnYXRpb24oaGlzdG9yeUFjdGlvbiwgbG9jYXRpb24pO1xuICAgIH0pO1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIC8vIEZJWE1FOiBUaGlzIGZlZWxzIGdyb3NzLiAgSG93IGNhbiB3ZSBjbGVhbnVwIHRoZSBsaW5lcyBiZXR3ZWVuXG4gICAgICAvLyBzY3JvbGxSZXN0b3JhdGlvbi9hcHBsaWVkVHJhbnNpdGlvbnMgcGVyc2lzdGFuY2U/XG4gICAgICByZXN0b3JlQXBwbGllZFRyYW5zaXRpb25zKHJvdXRlcldpbmRvdywgYXBwbGllZFZpZXdUcmFuc2l0aW9ucyk7XG4gICAgICBsZXQgX3NhdmVBcHBsaWVkVHJhbnNpdGlvbnMgPSAoKSA9PiBwZXJzaXN0QXBwbGllZFRyYW5zaXRpb25zKHJvdXRlcldpbmRvdywgYXBwbGllZFZpZXdUcmFuc2l0aW9ucyk7XG4gICAgICByb3V0ZXJXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsIF9zYXZlQXBwbGllZFRyYW5zaXRpb25zKTtcbiAgICAgIHJlbW92ZVBhZ2VIaWRlRXZlbnRMaXN0ZW5lciA9ICgpID0+IHJvdXRlcldpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicGFnZWhpZGVcIiwgX3NhdmVBcHBsaWVkVHJhbnNpdGlvbnMpO1xuICAgIH1cbiAgICAvLyBLaWNrIG9mZiBpbml0aWFsIGRhdGEgbG9hZCBpZiBuZWVkZWQuICBVc2UgUG9wIHRvIGF2b2lkIG1vZGlmeWluZyBoaXN0b3J5XG4gICAgLy8gTm90ZSB3ZSBkb24ndCBkbyBhbnkgaGFuZGxpbmcgb2YgbGF6eSBoZXJlLiAgRm9yIFNQQSdzIGl0J2xsIGdldCBoYW5kbGVkXG4gICAgLy8gaW4gdGhlIG5vcm1hbCBuYXZpZ2F0aW9uIGZsb3cuICBGb3IgU1NSIGl0J3MgZXhwZWN0ZWQgdGhhdCBsYXp5IG1vZHVsZXMgYXJlXG4gICAgLy8gcmVzb2x2ZWQgcHJpb3IgdG8gcm91dGVyIGNyZWF0aW9uIHNpbmNlIHdlIGNhbid0IGdvIGludG8gYSBmYWxsYmFja0VsZW1lbnRcbiAgICAvLyBVSSBmb3IgU1NSJ2QgYXBwc1xuICAgIGlmICghc3RhdGUuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHN0YXJ0TmF2aWdhdGlvbihBY3Rpb24uUG9wLCBzdGF0ZS5sb2NhdGlvbiwge1xuICAgICAgICBpbml0aWFsSHlkcmF0aW9uOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJvdXRlcjtcbiAgfVxuICAvLyBDbGVhbiB1cCBhIHJvdXRlciBhbmQgaXQncyBzaWRlIGVmZmVjdHNcbiAgZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICBpZiAodW5saXN0ZW5IaXN0b3J5KSB7XG4gICAgICB1bmxpc3Rlbkhpc3RvcnkoKTtcbiAgICB9XG4gICAgaWYgKHJlbW92ZVBhZ2VIaWRlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgcmVtb3ZlUGFnZUhpZGVFdmVudExpc3RlbmVyKCk7XG4gICAgfVxuICAgIHN1YnNjcmliZXJzLmNsZWFyKCk7XG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyICYmIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlci5hYm9ydCgpO1xuICAgIHN0YXRlLmZldGNoZXJzLmZvckVhY2goKF8sIGtleSkgPT4gZGVsZXRlRmV0Y2hlcihrZXkpKTtcbiAgICBzdGF0ZS5ibG9ja2Vycy5mb3JFYWNoKChfLCBrZXkpID0+IGRlbGV0ZUJsb2NrZXIoa2V5KSk7XG4gIH1cbiAgLy8gU3Vic2NyaWJlIHRvIHN0YXRlIHVwZGF0ZXMgZm9yIHRoZSByb3V0ZXJcbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGZuKSB7XG4gICAgc3Vic2NyaWJlcnMuYWRkKGZuKTtcbiAgICByZXR1cm4gKCkgPT4gc3Vic2NyaWJlcnMuZGVsZXRlKGZuKTtcbiAgfVxuICAvLyBVcGRhdGUgb3VyIHN0YXRlIGFuZCBub3RpZnkgdGhlIGNhbGxpbmcgY29udGV4dCBvZiB0aGUgY2hhbmdlXG4gIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKG5ld1N0YXRlLCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICBzdGF0ZSA9IF9leHRlbmRzKHt9LCBzdGF0ZSwgbmV3U3RhdGUpO1xuICAgIC8vIFByZXAgZmV0Y2hlciBjbGVhbnVwIHNvIHdlIGNhbiB0ZWxsIHRoZSBVSSB3aGljaCBmZXRjaGVyIGRhdGEgZW50cmllc1xuICAgIC8vIGNhbiBiZSByZW1vdmVkXG4gICAgbGV0IGNvbXBsZXRlZEZldGNoZXJzID0gW107XG4gICAgbGV0IGRlbGV0ZWRGZXRjaGVyc0tleXMgPSBbXTtcbiAgICBpZiAoZnV0dXJlLnY3X2ZldGNoZXJQZXJzaXN0KSB7XG4gICAgICBzdGF0ZS5mZXRjaGVycy5mb3JFYWNoKChmZXRjaGVyLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKGZldGNoZXIuc3RhdGUgPT09IFwiaWRsZVwiKSB7XG4gICAgICAgICAgaWYgKGRlbGV0ZWRGZXRjaGVycy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgLy8gVW5tb3VudGVkIGZyb20gdGhlIFVJIGFuZCBjYW4gYmUgdG90YWxseSByZW1vdmVkXG4gICAgICAgICAgICBkZWxldGVkRmV0Y2hlcnNLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUmV0dXJuZWQgdG8gaWRsZSBidXQgc3RpbGwgbW91bnRlZCBpbiB0aGUgVUksIHNvIHNlbWktcmVtYWlucyBmb3JcbiAgICAgICAgICAgIC8vIHJldmFsaWRhdGlvbnMgYW5kIHN1Y2hcbiAgICAgICAgICAgIGNvbXBsZXRlZEZldGNoZXJzLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBSZW1vdmUgYW55IGxpbmdlcmluZyBkZWxldGVkIGZldGNoZXJzIHRoYXQgaGF2ZSBhbHJlYWR5IGJlZW4gcmVtb3ZlZFxuICAgIC8vIGZyb20gc3RhdGUuZmV0Y2hlcnNcbiAgICBkZWxldGVkRmV0Y2hlcnMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKCFzdGF0ZS5mZXRjaGVycy5oYXMoa2V5KSAmJiAhZmV0Y2hDb250cm9sbGVycy5oYXMoa2V5KSkge1xuICAgICAgICBkZWxldGVkRmV0Y2hlcnNLZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYSBsb2NhbCBjb3B5IHNvIHRoYXQgaWYgZmx1c2hTeW5jIGlzIHVzZWQgYW5kIHdlIGVuZCB1cFxuICAgIC8vIHJlbW92aW5nIGFuZCBhZGRpbmcgYSBuZXcgc3Vic2NyaWJlciBkdWUgdG8gdGhlIHVzZUNhbGxiYWNrIGRlcGVuZGVuY2llcyxcbiAgICAvLyB3ZSBkb24ndCBnZXQgb3Vyc2VsdmVzIGludG8gYSBsb29wIGNhbGxpbmcgdGhlIG5ldyBzdWJzY3JpYmVyIGltbWVkaWF0ZWx5XG4gICAgWy4uLnN1YnNjcmliZXJzXS5mb3JFYWNoKHN1YnNjcmliZXIgPT4gc3Vic2NyaWJlcihzdGF0ZSwge1xuICAgICAgZGVsZXRlZEZldGNoZXJzOiBkZWxldGVkRmV0Y2hlcnNLZXlzLFxuICAgICAgdmlld1RyYW5zaXRpb25PcHRzOiBvcHRzLnZpZXdUcmFuc2l0aW9uT3B0cyxcbiAgICAgIGZsdXNoU3luYzogb3B0cy5mbHVzaFN5bmMgPT09IHRydWVcbiAgICB9KSk7XG4gICAgLy8gUmVtb3ZlIGlkbGUgZmV0Y2hlcnMgZnJvbSBzdGF0ZSBzaW5jZSB3ZSBvbmx5IGNhcmUgYWJvdXQgaW4tZmxpZ2h0IGZldGNoZXJzLlxuICAgIGlmIChmdXR1cmUudjdfZmV0Y2hlclBlcnNpc3QpIHtcbiAgICAgIGNvbXBsZXRlZEZldGNoZXJzLmZvckVhY2goa2V5ID0+IHN0YXRlLmZldGNoZXJzLmRlbGV0ZShrZXkpKTtcbiAgICAgIGRlbGV0ZWRGZXRjaGVyc0tleXMuZm9yRWFjaChrZXkgPT4gZGVsZXRlRmV0Y2hlcihrZXkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2UgYWxyZWFkeSBjYWxsZWQgZGVsZXRlRmV0Y2hlcigpIG9uIHRoZXNlLCBjYW4gcmVtb3ZlIHRoZW0gZnJvbSB0aGlzXG4gICAgICAvLyBTZXQgbm93IHRoYXQgd2UndmUgaGFuZGVkIHRoZSBrZXlzIG9mZiB0byB0aGUgZGF0YSBsYXllclxuICAgICAgZGVsZXRlZEZldGNoZXJzS2V5cy5mb3JFYWNoKGtleSA9PiBkZWxldGVkRmV0Y2hlcnMuZGVsZXRlKGtleSkpO1xuICAgIH1cbiAgfVxuICAvLyBDb21wbGV0ZSBhIG5hdmlnYXRpb24gcmV0dXJuaW5nIHRoZSBzdGF0ZS5uYXZpZ2F0aW9uIGJhY2sgdG8gdGhlIElETEVfTkFWSUdBVElPTlxuICAvLyBhbmQgc2V0dGluZyBzdGF0ZS5baGlzdG9yeUFjdGlvbi9sb2NhdGlvbi9tYXRjaGVzXSB0byB0aGUgbmV3IHJvdXRlLlxuICAvLyAtIExvY2F0aW9uIGlzIGEgcmVxdWlyZWQgcGFyYW1cbiAgLy8gLSBOYXZpZ2F0aW9uIHdpbGwgYWx3YXlzIGJlIHNldCB0byBJRExFX05BVklHQVRJT05cbiAgLy8gLSBDYW4gcGFzcyBhbnkgb3RoZXIgc3RhdGUgaW4gbmV3U3RhdGVcbiAgZnVuY3Rpb24gY29tcGxldGVOYXZpZ2F0aW9uKGxvY2F0aW9uLCBuZXdTdGF0ZSwgX3RlbXApIHtcbiAgICB2YXIgX2xvY2F0aW9uJHN0YXRlLCBfbG9jYXRpb24kc3RhdGUyO1xuICAgIGxldCB7XG4gICAgICBmbHVzaFN5bmNcbiAgICB9ID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA7XG4gICAgLy8gRGVkdWNlIGlmIHdlJ3JlIGluIGEgbG9hZGluZy9hY3Rpb25SZWxvYWQgc3RhdGU6XG4gICAgLy8gLSBXZSBoYXZlIGNvbW1pdHRlZCBhY3Rpb25EYXRhIGluIHRoZSBzdG9yZVxuICAgIC8vIC0gVGhlIGN1cnJlbnQgbmF2aWdhdGlvbiB3YXMgYSBtdXRhdGlvbiBzdWJtaXNzaW9uXG4gICAgLy8gLSBXZSdyZSBwYXN0IHRoZSBzdWJtaXR0aW5nIHN0YXRlIGFuZCBpbnRvIHRoZSBsb2FkaW5nIHN0YXRlXG4gICAgLy8gLSBUaGUgbG9jYXRpb24gYmVpbmcgbG9hZGVkIGlzIG5vdCB0aGUgcmVzdWx0IG9mIGEgcmVkaXJlY3RcbiAgICBsZXQgaXNBY3Rpb25SZWxvYWQgPSBzdGF0ZS5hY3Rpb25EYXRhICE9IG51bGwgJiYgc3RhdGUubmF2aWdhdGlvbi5mb3JtTWV0aG9kICE9IG51bGwgJiYgaXNNdXRhdGlvbk1ldGhvZChzdGF0ZS5uYXZpZ2F0aW9uLmZvcm1NZXRob2QpICYmIHN0YXRlLm5hdmlnYXRpb24uc3RhdGUgPT09IFwibG9hZGluZ1wiICYmICgoX2xvY2F0aW9uJHN0YXRlID0gbG9jYXRpb24uc3RhdGUpID09IG51bGwgPyB2b2lkIDAgOiBfbG9jYXRpb24kc3RhdGUuX2lzUmVkaXJlY3QpICE9PSB0cnVlO1xuICAgIGxldCBhY3Rpb25EYXRhO1xuICAgIGlmIChuZXdTdGF0ZS5hY3Rpb25EYXRhKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMobmV3U3RhdGUuYWN0aW9uRGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICBhY3Rpb25EYXRhID0gbmV3U3RhdGUuYWN0aW9uRGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEVtcHR5IGFjdGlvbkRhdGEgLT4gY2xlYXIgcHJpb3IgYWN0aW9uRGF0YSBkdWUgdG8gYW4gYWN0aW9uIGVycm9yXG4gICAgICAgIGFjdGlvbkRhdGEgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNBY3Rpb25SZWxvYWQpIHtcbiAgICAgIC8vIEtlZXAgdGhlIGN1cnJlbnQgZGF0YSBpZiB3ZSdyZSB3cmFwcGluZyB1cCB0aGUgYWN0aW9uIHJlbG9hZFxuICAgICAgYWN0aW9uRGF0YSA9IHN0YXRlLmFjdGlvbkRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENsZWFyIGFjdGlvbkRhdGEgb24gYW55IG90aGVyIGNvbXBsZXRlZCBuYXZpZ2F0aW9uc1xuICAgICAgYWN0aW9uRGF0YSA9IG51bGw7XG4gICAgfVxuICAgIC8vIEFsd2F5cyBwcmVzZXJ2ZSBhbnkgZXhpc3RpbmcgbG9hZGVyRGF0YSBmcm9tIHJlLXVzZWQgcm91dGVzXG4gICAgbGV0IGxvYWRlckRhdGEgPSBuZXdTdGF0ZS5sb2FkZXJEYXRhID8gbWVyZ2VMb2FkZXJEYXRhKHN0YXRlLmxvYWRlckRhdGEsIG5ld1N0YXRlLmxvYWRlckRhdGEsIG5ld1N0YXRlLm1hdGNoZXMgfHwgW10sIG5ld1N0YXRlLmVycm9ycykgOiBzdGF0ZS5sb2FkZXJEYXRhO1xuICAgIC8vIE9uIGEgc3VjY2Vzc2Z1bCBuYXZpZ2F0aW9uIHdlIGNhbiBhc3N1bWUgd2UgZ290IHRocm91Z2ggYWxsIGJsb2NrZXJzXG4gICAgLy8gc28gd2UgY2FuIHN0YXJ0IGZyZXNoXG4gICAgbGV0IGJsb2NrZXJzID0gc3RhdGUuYmxvY2tlcnM7XG4gICAgaWYgKGJsb2NrZXJzLnNpemUgPiAwKSB7XG4gICAgICBibG9ja2VycyA9IG5ldyBNYXAoYmxvY2tlcnMpO1xuICAgICAgYmxvY2tlcnMuZm9yRWFjaCgoXywgaykgPT4gYmxvY2tlcnMuc2V0KGssIElETEVfQkxPQ0tFUikpO1xuICAgIH1cbiAgICAvLyBBbHdheXMgcmVzcGVjdCB0aGUgdXNlciBmbGFnLiAgT3RoZXJ3aXNlIGRvbid0IHJlc2V0IG9uIG11dGF0aW9uXG4gICAgLy8gc3VibWlzc2lvbiBuYXZpZ2F0aW9ucyB1bmxlc3MgdGhleSByZWRpcmVjdFxuICAgIGxldCBwcmV2ZW50U2Nyb2xsUmVzZXQgPSBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0ID09PSB0cnVlIHx8IHN0YXRlLm5hdmlnYXRpb24uZm9ybU1ldGhvZCAhPSBudWxsICYmIGlzTXV0YXRpb25NZXRob2Qoc3RhdGUubmF2aWdhdGlvbi5mb3JtTWV0aG9kKSAmJiAoKF9sb2NhdGlvbiRzdGF0ZTIgPSBsb2NhdGlvbi5zdGF0ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9sb2NhdGlvbiRzdGF0ZTIuX2lzUmVkaXJlY3QpICE9PSB0cnVlO1xuICAgIC8vIENvbW1pdCBhbnkgaW4tZmxpZ2h0IHJvdXRlcyBhdCB0aGUgZW5kIG9mIHRoZSBITVIgcmV2YWxpZGF0aW9uIFwibmF2aWdhdGlvblwiXG4gICAgaWYgKGluRmxpZ2h0RGF0YVJvdXRlcykge1xuICAgICAgZGF0YVJvdXRlcyA9IGluRmxpZ2h0RGF0YVJvdXRlcztcbiAgICAgIGluRmxpZ2h0RGF0YVJvdXRlcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKGlzVW5pbnRlcnJ1cHRlZFJldmFsaWRhdGlvbikgOyBlbHNlIGlmIChwZW5kaW5nQWN0aW9uID09PSBBY3Rpb24uUG9wKSA7IGVsc2UgaWYgKHBlbmRpbmdBY3Rpb24gPT09IEFjdGlvbi5QdXNoKSB7XG4gICAgICBpbml0Lmhpc3RvcnkucHVzaChsb2NhdGlvbiwgbG9jYXRpb24uc3RhdGUpO1xuICAgIH0gZWxzZSBpZiAocGVuZGluZ0FjdGlvbiA9PT0gQWN0aW9uLlJlcGxhY2UpIHtcbiAgICAgIGluaXQuaGlzdG9yeS5yZXBsYWNlKGxvY2F0aW9uLCBsb2NhdGlvbi5zdGF0ZSk7XG4gICAgfVxuICAgIGxldCB2aWV3VHJhbnNpdGlvbk9wdHM7XG4gICAgLy8gT24gUE9QLCBlbmFibGUgdHJhbnNpdGlvbnMgaWYgdGhleSB3ZXJlIGVuYWJsZWQgb24gdGhlIG9yaWdpbmFsIG5hdmlnYXRpb25cbiAgICBpZiAocGVuZGluZ0FjdGlvbiA9PT0gQWN0aW9uLlBvcCkge1xuICAgICAgLy8gRm9yd2FyZCB0YWtlcyBwcmVjZWRlbmNlIHNvIHRoZXkgYmVoYXZlIGxpa2UgdGhlIG9yaWdpbmFsIG5hdmlnYXRpb25cbiAgICAgIGxldCBwcmlvclBhdGhzID0gYXBwbGllZFZpZXdUcmFuc2l0aW9ucy5nZXQoc3RhdGUubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgaWYgKHByaW9yUGF0aHMgJiYgcHJpb3JQYXRocy5oYXMobG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICAgIHZpZXdUcmFuc2l0aW9uT3B0cyA9IHtcbiAgICAgICAgICBjdXJyZW50TG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgICAgICAgIG5leHRMb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoYXBwbGllZFZpZXdUcmFuc2l0aW9ucy5oYXMobG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBwcmV2aW91cyBmb3J3YXJkIG5hdiwgYXNzdW1lIHdlJ3JlIHBvcHBpbmcgYmFjayB0b1xuICAgICAgICAvLyB0aGUgbmV3IGxvY2F0aW9uIGFuZCBlbmFibGUgaWYgdGhhdCBsb2NhdGlvbiBwcmV2aW91c2x5IGVuYWJsZWRcbiAgICAgICAgdmlld1RyYW5zaXRpb25PcHRzID0ge1xuICAgICAgICAgIGN1cnJlbnRMb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgICAgbmV4dExvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvblxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGVuZGluZ1ZpZXdUcmFuc2l0aW9uRW5hYmxlZCkge1xuICAgICAgLy8gU3RvcmUgdGhlIGFwcGxpZWQgdHJhbnNpdGlvbiBvbiBQVVNIL1JFUExBQ0VcbiAgICAgIGxldCB0b1BhdGhzID0gYXBwbGllZFZpZXdUcmFuc2l0aW9ucy5nZXQoc3RhdGUubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgaWYgKHRvUGF0aHMpIHtcbiAgICAgICAgdG9QYXRocy5hZGQobG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9QYXRocyA9IG5ldyBTZXQoW2xvY2F0aW9uLnBhdGhuYW1lXSk7XG4gICAgICAgIGFwcGxpZWRWaWV3VHJhbnNpdGlvbnMuc2V0KHN0YXRlLmxvY2F0aW9uLnBhdGhuYW1lLCB0b1BhdGhzKTtcbiAgICAgIH1cbiAgICAgIHZpZXdUcmFuc2l0aW9uT3B0cyA9IHtcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICAgICAgbmV4dExvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgfTtcbiAgICB9XG4gICAgdXBkYXRlU3RhdGUoX2V4dGVuZHMoe30sIG5ld1N0YXRlLCB7XG4gICAgICBhY3Rpb25EYXRhLFxuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGhpc3RvcnlBY3Rpb246IHBlbmRpbmdBY3Rpb24sXG4gICAgICBsb2NhdGlvbixcbiAgICAgIGluaXRpYWxpemVkOiB0cnVlLFxuICAgICAgbmF2aWdhdGlvbjogSURMRV9OQVZJR0FUSU9OLFxuICAgICAgcmV2YWxpZGF0aW9uOiBcImlkbGVcIixcbiAgICAgIHJlc3RvcmVTY3JvbGxQb3NpdGlvbjogZ2V0U2F2ZWRTY3JvbGxQb3NpdGlvbihsb2NhdGlvbiwgbmV3U3RhdGUubWF0Y2hlcyB8fCBzdGF0ZS5tYXRjaGVzKSxcbiAgICAgIHByZXZlbnRTY3JvbGxSZXNldCxcbiAgICAgIGJsb2NrZXJzXG4gICAgfSksIHtcbiAgICAgIHZpZXdUcmFuc2l0aW9uT3B0cyxcbiAgICAgIGZsdXNoU3luYzogZmx1c2hTeW5jID09PSB0cnVlXG4gICAgfSk7XG4gICAgLy8gUmVzZXQgc3RhdGVmdWwgbmF2aWdhdGlvbiB2YXJzXG4gICAgcGVuZGluZ0FjdGlvbiA9IEFjdGlvbi5Qb3A7XG4gICAgcGVuZGluZ1ByZXZlbnRTY3JvbGxSZXNldCA9IGZhbHNlO1xuICAgIHBlbmRpbmdWaWV3VHJhbnNpdGlvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICBpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24gPSBmYWxzZTtcbiAgICBpc1JldmFsaWRhdGlvblJlcXVpcmVkID0gZmFsc2U7XG4gICAgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMgPSBbXTtcbiAgfVxuICAvLyBUcmlnZ2VyIGEgbmF2aWdhdGlvbiBldmVudCwgd2hpY2ggY2FuIGVpdGhlciBiZSBhIG51bWVyaWNhbCBQT1Agb3IgYSBQVVNIXG4gIC8vIHJlcGxhY2Ugd2l0aCBhbiBvcHRpb25hbCBzdWJtaXNzaW9uXG4gIGFzeW5jIGZ1bmN0aW9uIG5hdmlnYXRlKHRvLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiB0byA9PT0gXCJudW1iZXJcIikge1xuICAgICAgaW5pdC5oaXN0b3J5LmdvKHRvKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IG5vcm1hbGl6ZWRQYXRoID0gbm9ybWFsaXplVG8oc3RhdGUubG9jYXRpb24sIHN0YXRlLm1hdGNoZXMsIGJhc2VuYW1lLCBmdXR1cmUudjdfcHJlcGVuZEJhc2VuYW1lLCB0bywgZnV0dXJlLnY3X3JlbGF0aXZlU3BsYXRQYXRoLCBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmZyb21Sb3V0ZUlkLCBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLnJlbGF0aXZlKTtcbiAgICBsZXQge1xuICAgICAgcGF0aCxcbiAgICAgIHN1Ym1pc3Npb24sXG4gICAgICBlcnJvclxuICAgIH0gPSBub3JtYWxpemVOYXZpZ2F0ZU9wdGlvbnMoZnV0dXJlLnY3X25vcm1hbGl6ZUZvcm1NZXRob2QsIGZhbHNlLCBub3JtYWxpemVkUGF0aCwgb3B0cyk7XG4gICAgbGV0IGN1cnJlbnRMb2NhdGlvbiA9IHN0YXRlLmxvY2F0aW9uO1xuICAgIGxldCBuZXh0TG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihzdGF0ZS5sb2NhdGlvbiwgcGF0aCwgb3B0cyAmJiBvcHRzLnN0YXRlKTtcbiAgICAvLyBXaGVuIHVzaW5nIG5hdmlnYXRlIGFzIGEgUFVTSC9SRVBMQUNFIHdlIGFyZW4ndCByZWFkaW5nIGFuIGFscmVhZHktZW5jb2RlZFxuICAgIC8vIFVSTCBmcm9tIHdpbmRvdy5sb2NhdGlvbiwgc28gd2UgbmVlZCB0byBlbmNvZGUgaXQgaGVyZSBzbyB0aGUgYmVoYXZpb3JcbiAgICAvLyByZW1haW5zIHRoZSBzYW1lIGFzIFBPUCBhbmQgbm9uLWRhdGEtcm91dGVyIHVzYWdlcy4gIG5ldyBVUkwoKSBkb2VzIGFsbFxuICAgIC8vIHRoZSBzYW1lIGVuY29kaW5nIHdlJ2QgZ2V0IGZyb20gYSBoaXN0b3J5LnB1c2hTdGF0ZS93aW5kb3cubG9jYXRpb24gcmVhZFxuICAgIC8vIHdpdGhvdXQgaGF2aW5nIHRvIHRvdWNoIGhpc3RvcnlcbiAgICBuZXh0TG9jYXRpb24gPSBfZXh0ZW5kcyh7fSwgbmV4dExvY2F0aW9uLCBpbml0Lmhpc3RvcnkuZW5jb2RlTG9jYXRpb24obmV4dExvY2F0aW9uKSk7XG4gICAgbGV0IHVzZXJSZXBsYWNlID0gb3B0cyAmJiBvcHRzLnJlcGxhY2UgIT0gbnVsbCA/IG9wdHMucmVwbGFjZSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgaGlzdG9yeUFjdGlvbiA9IEFjdGlvbi5QdXNoO1xuICAgIGlmICh1c2VyUmVwbGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgaGlzdG9yeUFjdGlvbiA9IEFjdGlvbi5SZXBsYWNlO1xuICAgIH0gZWxzZSBpZiAodXNlclJlcGxhY2UgPT09IGZhbHNlKSA7IGVsc2UgaWYgKHN1Ym1pc3Npb24gIT0gbnVsbCAmJiBpc011dGF0aW9uTWV0aG9kKHN1Ym1pc3Npb24uZm9ybU1ldGhvZCkgJiYgc3VibWlzc2lvbi5mb3JtQWN0aW9uID09PSBzdGF0ZS5sb2NhdGlvbi5wYXRobmFtZSArIHN0YXRlLmxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgLy8gQnkgZGVmYXVsdCBvbiBzdWJtaXNzaW9ucyB0byB0aGUgY3VycmVudCBsb2NhdGlvbiB3ZSBSRVBMQUNFIHNvIHRoYXRcbiAgICAgIC8vIHVzZXJzIGRvbid0IGhhdmUgdG8gZG91YmxlLWNsaWNrIHRoZSBiYWNrIGJ1dHRvbiB0byBnZXQgdG8gdGhlIHByaW9yXG4gICAgICAvLyBsb2NhdGlvbi4gIElmIHRoZSB1c2VyIHJlZGlyZWN0cyB0byBhIGRpZmZlcmVudCBsb2NhdGlvbiBmcm9tIHRoZVxuICAgICAgLy8gYWN0aW9uL2xvYWRlciB0aGlzIHdpbGwgYmUgaWdub3JlZCBhbmQgdGhlIHJlZGlyZWN0IHdpbGwgYmUgYSBQVVNIXG4gICAgICBoaXN0b3J5QWN0aW9uID0gQWN0aW9uLlJlcGxhY2U7XG4gICAgfVxuICAgIGxldCBwcmV2ZW50U2Nyb2xsUmVzZXQgPSBvcHRzICYmIFwicHJldmVudFNjcm9sbFJlc2V0XCIgaW4gb3B0cyA/IG9wdHMucHJldmVudFNjcm9sbFJlc2V0ID09PSB0cnVlIDogdW5kZWZpbmVkO1xuICAgIGxldCBmbHVzaFN5bmMgPSAob3B0cyAmJiBvcHRzLmZsdXNoU3luYykgPT09IHRydWU7XG4gICAgbGV0IGJsb2NrZXJLZXkgPSBzaG91bGRCbG9ja05hdmlnYXRpb24oe1xuICAgICAgY3VycmVudExvY2F0aW9uLFxuICAgICAgbmV4dExvY2F0aW9uLFxuICAgICAgaGlzdG9yeUFjdGlvblxuICAgIH0pO1xuICAgIGlmIChibG9ja2VyS2V5KSB7XG4gICAgICAvLyBQdXQgdGhlIGJsb2NrZXIgaW50byBhIGJsb2NrZWQgc3RhdGVcbiAgICAgIHVwZGF0ZUJsb2NrZXIoYmxvY2tlcktleSwge1xuICAgICAgICBzdGF0ZTogXCJibG9ja2VkXCIsXG4gICAgICAgIGxvY2F0aW9uOiBuZXh0TG9jYXRpb24sXG4gICAgICAgIHByb2NlZWQoKSB7XG4gICAgICAgICAgdXBkYXRlQmxvY2tlcihibG9ja2VyS2V5LCB7XG4gICAgICAgICAgICBzdGF0ZTogXCJwcm9jZWVkaW5nXCIsXG4gICAgICAgICAgICBwcm9jZWVkOiB1bmRlZmluZWQsXG4gICAgICAgICAgICByZXNldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbG9jYXRpb246IG5leHRMb2NhdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIFNlbmQgdGhlIHNhbWUgbmF2aWdhdGlvbiB0aHJvdWdoXG4gICAgICAgICAgbmF2aWdhdGUodG8sIG9wdHMpO1xuICAgICAgICB9LFxuICAgICAgICByZXNldCgpIHtcbiAgICAgICAgICBsZXQgYmxvY2tlcnMgPSBuZXcgTWFwKHN0YXRlLmJsb2NrZXJzKTtcbiAgICAgICAgICBibG9ja2Vycy5zZXQoYmxvY2tlcktleSwgSURMRV9CTE9DS0VSKTtcbiAgICAgICAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICBibG9ja2Vyc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGF3YWl0IHN0YXJ0TmF2aWdhdGlvbihoaXN0b3J5QWN0aW9uLCBuZXh0TG9jYXRpb24sIHtcbiAgICAgIHN1Ym1pc3Npb24sXG4gICAgICAvLyBTZW5kIHRocm91Z2ggdGhlIGZvcm1EYXRhIHNlcmlhbGl6YXRpb24gZXJyb3IgaWYgd2UgaGF2ZSBvbmUgc28gd2UgY2FuXG4gICAgICAvLyByZW5kZXIgYXQgdGhlIHJpZ2h0IGVycm9yIGJvdW5kYXJ5IGFmdGVyIHdlIG1hdGNoIHJvdXRlc1xuICAgICAgcGVuZGluZ0Vycm9yOiBlcnJvcixcbiAgICAgIHByZXZlbnRTY3JvbGxSZXNldCxcbiAgICAgIHJlcGxhY2U6IG9wdHMgJiYgb3B0cy5yZXBsYWNlLFxuICAgICAgZW5hYmxlVmlld1RyYW5zaXRpb246IG9wdHMgJiYgb3B0cy52aWV3VHJhbnNpdGlvbixcbiAgICAgIGZsdXNoU3luY1xuICAgIH0pO1xuICB9XG4gIC8vIFJldmFsaWRhdGUgYWxsIGN1cnJlbnQgbG9hZGVycy4gIElmIGEgbmF2aWdhdGlvbiBpcyBpbiBwcm9ncmVzcyBvciBpZiB0aGlzXG4gIC8vIGlzIGludGVycnVwdGVkIGJ5IGEgbmF2aWdhdGlvbiwgYWxsb3cgdGhpcyB0byBcInN1Y2NlZWRcIiBieSBjYWxsaW5nIGFsbFxuICAvLyBsb2FkZXJzIGR1cmluZyB0aGUgbmV4dCBsb2FkZXIgcm91bmRcbiAgZnVuY3Rpb24gcmV2YWxpZGF0ZSgpIHtcbiAgICBpbnRlcnJ1cHRBY3RpdmVMb2FkcygpO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIHJldmFsaWRhdGlvbjogXCJsb2FkaW5nXCJcbiAgICB9KTtcbiAgICAvLyBJZiB3ZSdyZSBjdXJyZW50bHkgc3VibWl0dGluZyBhbiBhY3Rpb24sIHdlIGRvbid0IG5lZWQgdG8gc3RhcnQgYSBuZXdcbiAgICAvLyBuYXZpZ2F0aW9uLCB3ZSdsbCBqdXN0IGxldCB0aGUgZm9sbG93IHVwIGxvYWRlciBleGVjdXRpb24gY2FsbCBhbGwgbG9hZGVyc1xuICAgIGlmIChzdGF0ZS5uYXZpZ2F0aW9uLnN0YXRlID09PSBcInN1Ym1pdHRpbmdcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBJZiB3ZSdyZSBjdXJyZW50bHkgaW4gYW4gaWRsZSBzdGF0ZSwgc3RhcnQgYSBuZXcgbmF2aWdhdGlvbiBmb3IgdGhlIGN1cnJlbnRcbiAgICAvLyBhY3Rpb24vbG9jYXRpb24gYW5kIG1hcmsgaXQgYXMgdW5pbnRlcnJ1cHRlZCwgd2hpY2ggd2lsbCBza2lwIHRoZSBoaXN0b3J5XG4gICAgLy8gdXBkYXRlIGluIGNvbXBsZXRlTmF2aWdhdGlvblxuICAgIGlmIChzdGF0ZS5uYXZpZ2F0aW9uLnN0YXRlID09PSBcImlkbGVcIikge1xuICAgICAgc3RhcnROYXZpZ2F0aW9uKHN0YXRlLmhpc3RvcnlBY3Rpb24sIHN0YXRlLmxvY2F0aW9uLCB7XG4gICAgICAgIHN0YXJ0VW5pbnRlcnJ1cHRlZFJldmFsaWRhdGlvbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgaWYgd2UncmUgY3VycmVudGx5IGluIGEgbG9hZGluZyBzdGF0ZSwganVzdCBzdGFydCBhIG5ld1xuICAgIC8vIG5hdmlnYXRpb24gdG8gdGhlIG5hdmlnYXRpb24ubG9jYXRpb24gYnV0IGRvIG5vdCB0cmlnZ2VyIGFuIHVuaW50ZXJydXB0ZWRcbiAgICAvLyByZXZhbGlkYXRpb24gc28gdGhhdCBoaXN0b3J5IGNvcnJlY3RseSB1cGRhdGVzIG9uY2UgdGhlIG5hdmlnYXRpb24gY29tcGxldGVzXG4gICAgc3RhcnROYXZpZ2F0aW9uKHBlbmRpbmdBY3Rpb24gfHwgc3RhdGUuaGlzdG9yeUFjdGlvbiwgc3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbiwge1xuICAgICAgb3ZlcnJpZGVOYXZpZ2F0aW9uOiBzdGF0ZS5uYXZpZ2F0aW9uLFxuICAgICAgLy8gUHJveHkgdGhyb3VnaCBhbnkgcmVuZGluZyB2aWV3IHRyYW5zaXRpb25cbiAgICAgIGVuYWJsZVZpZXdUcmFuc2l0aW9uOiBwZW5kaW5nVmlld1RyYW5zaXRpb25FbmFibGVkID09PSB0cnVlXG4gICAgfSk7XG4gIH1cbiAgLy8gU3RhcnQgYSBuYXZpZ2F0aW9uIHRvIHRoZSBnaXZlbiBhY3Rpb24vbG9jYXRpb24uICBDYW4gb3B0aW9uYWxseSBwcm92aWRlIGFcbiAgLy8gb3ZlcnJpZGVOYXZpZ2F0aW9uIHdoaWNoIHdpbGwgb3ZlcnJpZGUgdGhlIG5vcm1hbExvYWQgaW4gdGhlIGNhc2Ugb2YgYSByZWRpcmVjdFxuICAvLyBuYXZpZ2F0aW9uXG4gIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0TmF2aWdhdGlvbihoaXN0b3J5QWN0aW9uLCBsb2NhdGlvbiwgb3B0cykge1xuICAgIC8vIEFib3J0IGFueSBpbi1wcm9ncmVzcyBuYXZpZ2F0aW9ucyBhbmQgc3RhcnQgYSBuZXcgb25lLiBVbnNldCBhbnkgb25nb2luZ1xuICAgIC8vIHVuaW50ZXJydXB0ZWQgcmV2YWxpZGF0aW9ucyB1bmxlc3MgdG9sZCBvdGhlcndpc2UsIHNpbmNlIHdlIHdhbnQgdGhpc1xuICAgIC8vIG5ldyBuYXZpZ2F0aW9uIHRvIHVwZGF0ZSBoaXN0b3J5IG5vcm1hbGx5XG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyICYmIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlci5hYm9ydCgpO1xuICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciA9IG51bGw7XG4gICAgcGVuZGluZ0FjdGlvbiA9IGhpc3RvcnlBY3Rpb247XG4gICAgaXNVbmludGVycnVwdGVkUmV2YWxpZGF0aW9uID0gKG9wdHMgJiYgb3B0cy5zdGFydFVuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24pID09PSB0cnVlO1xuICAgIC8vIFNhdmUgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIGV2ZXJ5IHRpbWUgd2Ugc3RhcnQgYSBuZXcgbmF2aWdhdGlvbixcbiAgICAvLyBhbmQgdHJhY2sgd2hldGhlciB3ZSBzaG91bGQgcmVzZXQgc2Nyb2xsIG9uIGNvbXBsZXRpb25cbiAgICBzYXZlU2Nyb2xsUG9zaXRpb24oc3RhdGUubG9jYXRpb24sIHN0YXRlLm1hdGNoZXMpO1xuICAgIHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXQgPSAob3B0cyAmJiBvcHRzLnByZXZlbnRTY3JvbGxSZXNldCkgPT09IHRydWU7XG4gICAgcGVuZGluZ1ZpZXdUcmFuc2l0aW9uRW5hYmxlZCA9IChvcHRzICYmIG9wdHMuZW5hYmxlVmlld1RyYW5zaXRpb24pID09PSB0cnVlO1xuICAgIGxldCByb3V0ZXNUb1VzZSA9IGluRmxpZ2h0RGF0YVJvdXRlcyB8fCBkYXRhUm91dGVzO1xuICAgIGxldCBsb2FkaW5nTmF2aWdhdGlvbiA9IG9wdHMgJiYgb3B0cy5vdmVycmlkZU5hdmlnYXRpb247XG4gICAgbGV0IG1hdGNoZXMgPSBvcHRzICE9IG51bGwgJiYgb3B0cy5pbml0aWFsSHlkcmF0aW9uICYmIHN0YXRlLm1hdGNoZXMgJiYgc3RhdGUubWF0Y2hlcy5sZW5ndGggPiAwICYmICFpbml0aWFsTWF0Y2hlc0lzRk9XID9cbiAgICAvLyBgbWF0Y2hSb3V0ZXMoKWAgaGFzIGFscmVhZHkgYmVlbiBjYWxsZWQgaWYgd2UncmUgaW4gaGVyZSB2aWEgYHJvdXRlci5pbml0aWFsaXplKClgXG4gICAgc3RhdGUubWF0Y2hlcyA6IG1hdGNoUm91dGVzKHJvdXRlc1RvVXNlLCBsb2NhdGlvbiwgYmFzZW5hbWUpO1xuICAgIGxldCBmbHVzaFN5bmMgPSAob3B0cyAmJiBvcHRzLmZsdXNoU3luYykgPT09IHRydWU7XG4gICAgLy8gU2hvcnQgY2lyY3VpdCBpZiBpdCdzIG9ubHkgYSBoYXNoIGNoYW5nZSBhbmQgbm90IGEgcmV2YWxpZGF0aW9uIG9yXG4gICAgLy8gbXV0YXRpb24gc3VibWlzc2lvbi5cbiAgICAvL1xuICAgIC8vIElnbm9yZSBvbiBpbml0aWFsIHBhZ2UgbG9hZHMgYmVjYXVzZSBzaW5jZSB0aGUgaW5pdGlhbCBoeWRyYXRpb24gd2lsbCBhbHdheXNcbiAgICAvLyBiZSBcInNhbWUgaGFzaFwiLiAgRm9yIGV4YW1wbGUsIG9uIC9wYWdlI2hhc2ggYW5kIHN1Ym1pdCBhIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAvLyB3aGljaCB3aWxsIGRlZmF1bHQgdG8gYSBuYXZpZ2F0aW9uIHRvIC9wYWdlXG4gICAgaWYgKG1hdGNoZXMgJiYgc3RhdGUuaW5pdGlhbGl6ZWQgJiYgIWlzUmV2YWxpZGF0aW9uUmVxdWlyZWQgJiYgaXNIYXNoQ2hhbmdlT25seShzdGF0ZS5sb2NhdGlvbiwgbG9jYXRpb24pICYmICEob3B0cyAmJiBvcHRzLnN1Ym1pc3Npb24gJiYgaXNNdXRhdGlvbk1ldGhvZChvcHRzLnN1Ym1pc3Npb24uZm9ybU1ldGhvZCkpKSB7XG4gICAgICBjb21wbGV0ZU5hdmlnYXRpb24obG9jYXRpb24sIHtcbiAgICAgICAgbWF0Y2hlc1xuICAgICAgfSwge1xuICAgICAgICBmbHVzaFN5bmNcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZm9nT2ZXYXIgPSBjaGVja0ZvZ09mV2FyKG1hdGNoZXMsIHJvdXRlc1RvVXNlLCBsb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgaWYgKGZvZ09mV2FyLmFjdGl2ZSAmJiBmb2dPZldhci5tYXRjaGVzKSB7XG4gICAgICBtYXRjaGVzID0gZm9nT2ZXYXIubWF0Y2hlcztcbiAgICB9XG4gICAgLy8gU2hvcnQgY2lyY3VpdCB3aXRoIGEgNDA0IG9uIHRoZSByb290IGVycm9yIGJvdW5kYXJ5IGlmIHdlIG1hdGNoIG5vdGhpbmdcbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGxldCB7XG4gICAgICAgIGVycm9yLFxuICAgICAgICBub3RGb3VuZE1hdGNoZXMsXG4gICAgICAgIHJvdXRlXG4gICAgICB9ID0gaGFuZGxlTmF2aWdhdGlvbmFsNDA0KGxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgIGNvbXBsZXRlTmF2aWdhdGlvbihsb2NhdGlvbiwge1xuICAgICAgICBtYXRjaGVzOiBub3RGb3VuZE1hdGNoZXMsXG4gICAgICAgIGxvYWRlckRhdGE6IHt9LFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBbcm91dGUuaWRdOiBlcnJvclxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGZsdXNoU3luY1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIENyZWF0ZSBhIGNvbnRyb2xsZXIvUmVxdWVzdCBmb3IgdGhpcyBuYXZpZ2F0aW9uXG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGxldCByZXF1ZXN0ID0gY3JlYXRlQ2xpZW50U2lkZVJlcXVlc3QoaW5pdC5oaXN0b3J5LCBsb2NhdGlvbiwgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyLnNpZ25hbCwgb3B0cyAmJiBvcHRzLnN1Ym1pc3Npb24pO1xuICAgIGxldCBwZW5kaW5nQWN0aW9uUmVzdWx0O1xuICAgIGlmIChvcHRzICYmIG9wdHMucGVuZGluZ0Vycm9yKSB7XG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcGVuZGluZ0Vycm9yLCBpdCBtZWFucyB0aGUgdXNlciBhdHRlbXB0ZWQgYSBHRVQgc3VibWlzc2lvblxuICAgICAgLy8gd2l0aCBiaW5hcnkgRm9ybURhdGEgc28gYXNzaWduIGhlcmUgYW5kIHNraXAgdG8gaGFuZGxlTG9hZGVycy4gIFRoYXRcbiAgICAgIC8vIHdheSB3ZSBoYW5kbGUgY2FsbGluZyBsb2FkZXJzIGFib3ZlIHRoZSBib3VuZGFyeSBldGMuICBJdCdzIG5vdCByZWFsbHlcbiAgICAgIC8vIGRpZmZlcmVudCBmcm9tIGFuIGFjdGlvbkVycm9yIGluIHRoYXQgc2Vuc2UuXG4gICAgICBwZW5kaW5nQWN0aW9uUmVzdWx0ID0gW2ZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcykucm91dGUuaWQsIHtcbiAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5lcnJvcixcbiAgICAgICAgZXJyb3I6IG9wdHMucGVuZGluZ0Vycm9yXG4gICAgICB9XTtcbiAgICB9IGVsc2UgaWYgKG9wdHMgJiYgb3B0cy5zdWJtaXNzaW9uICYmIGlzTXV0YXRpb25NZXRob2Qob3B0cy5zdWJtaXNzaW9uLmZvcm1NZXRob2QpKSB7XG4gICAgICAvLyBDYWxsIGFjdGlvbiBpZiB3ZSByZWNlaXZlZCBhbiBhY3Rpb24gc3VibWlzc2lvblxuICAgICAgbGV0IGFjdGlvblJlc3VsdCA9IGF3YWl0IGhhbmRsZUFjdGlvbihyZXF1ZXN0LCBsb2NhdGlvbiwgb3B0cy5zdWJtaXNzaW9uLCBtYXRjaGVzLCBmb2dPZldhci5hY3RpdmUsIHtcbiAgICAgICAgcmVwbGFjZTogb3B0cy5yZXBsYWNlLFxuICAgICAgICBmbHVzaFN5bmNcbiAgICAgIH0pO1xuICAgICAgaWYgKGFjdGlvblJlc3VsdC5zaG9ydENpcmN1aXRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBJZiB3ZSByZWNlaXZlZCBhIDQwNCBmcm9tIGhhbmRsZUFjdGlvbiwgaXQncyBiZWNhdXNlIHdlIGNvdWxkbid0IGxhemlseVxuICAgICAgLy8gZGlzY292ZXIgdGhlIGRlc3RpbmF0aW9uIHJvdXRlIHNvIHdlIGRvbid0IHdhbnQgdG8gY2FsbCBsb2FkZXJzXG4gICAgICBpZiAoYWN0aW9uUmVzdWx0LnBlbmRpbmdBY3Rpb25SZXN1bHQpIHtcbiAgICAgICAgbGV0IFtyb3V0ZUlkLCByZXN1bHRdID0gYWN0aW9uUmVzdWx0LnBlbmRpbmdBY3Rpb25SZXN1bHQ7XG4gICAgICAgIGlmIChpc0Vycm9yUmVzdWx0KHJlc3VsdCkgJiYgaXNSb3V0ZUVycm9yUmVzcG9uc2UocmVzdWx0LmVycm9yKSAmJiByZXN1bHQuZXJyb3Iuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgPSBudWxsO1xuICAgICAgICAgIGNvbXBsZXRlTmF2aWdhdGlvbihsb2NhdGlvbiwge1xuICAgICAgICAgICAgbWF0Y2hlczogYWN0aW9uUmVzdWx0Lm1hdGNoZXMsXG4gICAgICAgICAgICBsb2FkZXJEYXRhOiB7fSxcbiAgICAgICAgICAgIGVycm9yczoge1xuICAgICAgICAgICAgICBbcm91dGVJZF06IHJlc3VsdC5lcnJvclxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbWF0Y2hlcyA9IGFjdGlvblJlc3VsdC5tYXRjaGVzIHx8IG1hdGNoZXM7XG4gICAgICBwZW5kaW5nQWN0aW9uUmVzdWx0ID0gYWN0aW9uUmVzdWx0LnBlbmRpbmdBY3Rpb25SZXN1bHQ7XG4gICAgICBsb2FkaW5nTmF2aWdhdGlvbiA9IGdldExvYWRpbmdOYXZpZ2F0aW9uKGxvY2F0aW9uLCBvcHRzLnN1Ym1pc3Npb24pO1xuICAgICAgZmx1c2hTeW5jID0gZmFsc2U7XG4gICAgICAvLyBObyBuZWVkIHRvIGRvIGZvZyBvZiB3YXIgbWF0Y2hpbmcgYWdhaW4gb24gbG9hZGVyIGV4ZWN1dGlvblxuICAgICAgZm9nT2ZXYXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAvLyBDcmVhdGUgYSBHRVQgcmVxdWVzdCBmb3IgdGhlIGxvYWRlcnNcbiAgICAgIHJlcXVlc3QgPSBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChpbml0Lmhpc3RvcnksIHJlcXVlc3QudXJsLCByZXF1ZXN0LnNpZ25hbCk7XG4gICAgfVxuICAgIC8vIENhbGwgbG9hZGVyc1xuICAgIGxldCB7XG4gICAgICBzaG9ydENpcmN1aXRlZCxcbiAgICAgIG1hdGNoZXM6IHVwZGF0ZWRNYXRjaGVzLFxuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0gPSBhd2FpdCBoYW5kbGVMb2FkZXJzKHJlcXVlc3QsIGxvY2F0aW9uLCBtYXRjaGVzLCBmb2dPZldhci5hY3RpdmUsIGxvYWRpbmdOYXZpZ2F0aW9uLCBvcHRzICYmIG9wdHMuc3VibWlzc2lvbiwgb3B0cyAmJiBvcHRzLmZldGNoZXJTdWJtaXNzaW9uLCBvcHRzICYmIG9wdHMucmVwbGFjZSwgb3B0cyAmJiBvcHRzLmluaXRpYWxIeWRyYXRpb24gPT09IHRydWUsIGZsdXNoU3luYywgcGVuZGluZ0FjdGlvblJlc3VsdCk7XG4gICAgaWYgKHNob3J0Q2lyY3VpdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIENsZWFuIHVwIG5vdyB0aGF0IHRoZSBhY3Rpb24vbG9hZGVycyBoYXZlIGNvbXBsZXRlZC4gIERvbid0IGNsZWFuIHVwIGlmXG4gICAgLy8gd2Ugc2hvcnQgY2lyY3VpdGVkIGJlY2F1c2UgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyIHdpbGwgaGF2ZSBhbHJlYWR5XG4gICAgLy8gYmVlbiBhc3NpZ25lZCB0byBhIG5ldyBjb250cm9sbGVyIGZvciB0aGUgbmV4dCBuYXZpZ2F0aW9uXG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyID0gbnVsbDtcbiAgICBjb21wbGV0ZU5hdmlnYXRpb24obG9jYXRpb24sIF9leHRlbmRzKHtcbiAgICAgIG1hdGNoZXM6IHVwZGF0ZWRNYXRjaGVzIHx8IG1hdGNoZXNcbiAgICB9LCBnZXRBY3Rpb25EYXRhRm9yQ29tbWl0KHBlbmRpbmdBY3Rpb25SZXN1bHQpLCB7XG4gICAgICBsb2FkZXJEYXRhLFxuICAgICAgZXJyb3JzXG4gICAgfSkpO1xuICB9XG4gIC8vIENhbGwgdGhlIGFjdGlvbiBtYXRjaGVkIGJ5IHRoZSBsZWFmIHJvdXRlIGZvciB0aGlzIG5hdmlnYXRpb24gYW5kIGhhbmRsZVxuICAvLyByZWRpcmVjdHMvZXJyb3JzXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFjdGlvbihyZXF1ZXN0LCBsb2NhdGlvbiwgc3VibWlzc2lvbiwgbWF0Y2hlcywgaXNGb2dPZldhciwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgaW50ZXJydXB0QWN0aXZlTG9hZHMoKTtcbiAgICAvLyBQdXQgdXMgaW4gYSBzdWJtaXR0aW5nIHN0YXRlXG4gICAgbGV0IG5hdmlnYXRpb24gPSBnZXRTdWJtaXR0aW5nTmF2aWdhdGlvbihsb2NhdGlvbiwgc3VibWlzc2lvbik7XG4gICAgdXBkYXRlU3RhdGUoe1xuICAgICAgbmF2aWdhdGlvblxuICAgIH0sIHtcbiAgICAgIGZsdXNoU3luYzogb3B0cy5mbHVzaFN5bmMgPT09IHRydWVcbiAgICB9KTtcbiAgICBpZiAoaXNGb2dPZldhcikge1xuICAgICAgbGV0IGRpc2NvdmVyUmVzdWx0ID0gYXdhaXQgZGlzY292ZXJSb3V0ZXMobWF0Y2hlcywgbG9jYXRpb24ucGF0aG5hbWUsIHJlcXVlc3Quc2lnbmFsKTtcbiAgICAgIGlmIChkaXNjb3ZlclJlc3VsdC50eXBlID09PSBcImFib3J0ZWRcIikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNob3J0Q2lyY3VpdGVkOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKGRpc2NvdmVyUmVzdWx0LnR5cGUgPT09IFwiZXJyb3JcIikge1xuICAgICAgICBsZXQgYm91bmRhcnlJZCA9IGZpbmROZWFyZXN0Qm91bmRhcnkoZGlzY292ZXJSZXN1bHQucGFydGlhbE1hdGNoZXMpLnJvdXRlLmlkO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1hdGNoZXM6IGRpc2NvdmVyUmVzdWx0LnBhcnRpYWxNYXRjaGVzLFxuICAgICAgICAgIHBlbmRpbmdBY3Rpb25SZXN1bHQ6IFtib3VuZGFyeUlkLCB7XG4gICAgICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLmVycm9yLFxuICAgICAgICAgICAgZXJyb3I6IGRpc2NvdmVyUmVzdWx0LmVycm9yXG4gICAgICAgICAgfV1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoIWRpc2NvdmVyUmVzdWx0Lm1hdGNoZXMpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICBub3RGb3VuZE1hdGNoZXMsXG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgcm91dGVcbiAgICAgICAgfSA9IGhhbmRsZU5hdmlnYXRpb25hbDQwNChsb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWF0Y2hlczogbm90Rm91bmRNYXRjaGVzLFxuICAgICAgICAgIHBlbmRpbmdBY3Rpb25SZXN1bHQ6IFtyb3V0ZS5pZCwge1xuICAgICAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5lcnJvcixcbiAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgfV1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hdGNoZXMgPSBkaXNjb3ZlclJlc3VsdC5tYXRjaGVzO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBDYWxsIG91ciBhY3Rpb24gYW5kIGdldCB0aGUgcmVzdWx0XG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgYWN0aW9uTWF0Y2ggPSBnZXRUYXJnZXRNYXRjaChtYXRjaGVzLCBsb2NhdGlvbik7XG4gICAgaWYgKCFhY3Rpb25NYXRjaC5yb3V0ZS5hY3Rpb24gJiYgIWFjdGlvbk1hdGNoLnJvdXRlLmxhenkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5lcnJvcixcbiAgICAgICAgZXJyb3I6IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgICAgbWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgICAgcm91dGVJZDogYWN0aW9uTWF0Y2gucm91dGUuaWRcbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByZXN1bHRzID0gYXdhaXQgY2FsbERhdGFTdHJhdGVneShcImFjdGlvblwiLCBzdGF0ZSwgcmVxdWVzdCwgW2FjdGlvbk1hdGNoXSwgbWF0Y2hlcywgbnVsbCk7XG4gICAgICByZXN1bHQgPSByZXN1bHRzW2FjdGlvbk1hdGNoLnJvdXRlLmlkXTtcbiAgICAgIGlmIChyZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc2hvcnRDaXJjdWl0ZWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSkge1xuICAgICAgbGV0IHJlcGxhY2U7XG4gICAgICBpZiAob3B0cyAmJiBvcHRzLnJlcGxhY2UgIT0gbnVsbCkge1xuICAgICAgICByZXBsYWNlID0gb3B0cy5yZXBsYWNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgZGlkbid0IGV4cGxpY2l0eSBpbmRpY2F0ZSByZXBsYWNlIGJlaGF2aW9yLCByZXBsYWNlIGlmXG4gICAgICAgIC8vIHdlIHJlZGlyZWN0ZWQgdG8gdGhlIGV4YWN0IHNhbWUgbG9jYXRpb24gd2UncmUgY3VycmVudGx5IGF0IHRvIGF2b2lkXG4gICAgICAgIC8vIGRvdWJsZSBiYWNrLWJ1dHRvbnNcbiAgICAgICAgbGV0IGxvY2F0aW9uID0gbm9ybWFsaXplUmVkaXJlY3RMb2NhdGlvbihyZXN1bHQucmVzcG9uc2UuaGVhZGVycy5nZXQoXCJMb2NhdGlvblwiKSwgbmV3IFVSTChyZXF1ZXN0LnVybCksIGJhc2VuYW1lKTtcbiAgICAgICAgcmVwbGFjZSA9IGxvY2F0aW9uID09PSBzdGF0ZS5sb2NhdGlvbi5wYXRobmFtZSArIHN0YXRlLmxvY2F0aW9uLnNlYXJjaDtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKHJlcXVlc3QsIHJlc3VsdCwgdHJ1ZSwge1xuICAgICAgICBzdWJtaXNzaW9uLFxuICAgICAgICByZXBsYWNlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNob3J0Q2lyY3VpdGVkOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwMCwge1xuICAgICAgICB0eXBlOiBcImRlZmVyLWFjdGlvblwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3JSZXN1bHQocmVzdWx0KSkge1xuICAgICAgLy8gU3RvcmUgb2ZmIHRoZSBwZW5kaW5nIGVycm9yIC0gd2UgdXNlIGl0IHRvIGRldGVybWluZSB3aGljaCBsb2FkZXJzXG4gICAgICAvLyB0byBjYWxsIGFuZCB3aWxsIGNvbW1pdCBpdCB3aGVuIHdlIGNvbXBsZXRlIHRoZSBuYXZpZ2F0aW9uXG4gICAgICBsZXQgYm91bmRhcnlNYXRjaCA9IGZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcywgYWN0aW9uTWF0Y2gucm91dGUuaWQpO1xuICAgICAgLy8gQnkgZGVmYXVsdCwgYWxsIHN1Ym1pc3Npb25zIHRvIHRoZSBjdXJyZW50IGxvY2F0aW9uIGFyZSBSRVBMQUNFXG4gICAgICAvLyBuYXZpZ2F0aW9ucywgYnV0IGlmIHRoZSBhY3Rpb24gdGhyZXcgYW4gZXJyb3IgdGhhdCdsbCBiZSByZW5kZXJlZCBpblxuICAgICAgLy8gYW4gZXJyb3JFbGVtZW50LCB3ZSBmYWxsIGJhY2sgdG8gUFVTSCBzbyB0aGF0IHRoZSB1c2VyIGNhbiB1c2UgdGhlXG4gICAgICAvLyBiYWNrIGJ1dHRvbiB0byBnZXQgYmFjayB0byB0aGUgcHJlLXN1Ym1pc3Npb24gZm9ybSBsb2NhdGlvbiB0byB0cnlcbiAgICAgIC8vIGFnYWluXG4gICAgICBpZiAoKG9wdHMgJiYgb3B0cy5yZXBsYWNlKSAhPT0gdHJ1ZSkge1xuICAgICAgICBwZW5kaW5nQWN0aW9uID0gQWN0aW9uLlB1c2g7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXRjaGVzLFxuICAgICAgICBwZW5kaW5nQWN0aW9uUmVzdWx0OiBbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZCwgcmVzdWx0XVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG1hdGNoZXMsXG4gICAgICBwZW5kaW5nQWN0aW9uUmVzdWx0OiBbYWN0aW9uTWF0Y2gucm91dGUuaWQsIHJlc3VsdF1cbiAgICB9O1xuICB9XG4gIC8vIENhbGwgYWxsIGFwcGxpY2FibGUgbG9hZGVycyBmb3IgdGhlIGdpdmVuIG1hdGNoZXMsIGhhbmRsaW5nIHJlZGlyZWN0cyxcbiAgLy8gZXJyb3JzLCBldGMuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUxvYWRlcnMocmVxdWVzdCwgbG9jYXRpb24sIG1hdGNoZXMsIGlzRm9nT2ZXYXIsIG92ZXJyaWRlTmF2aWdhdGlvbiwgc3VibWlzc2lvbiwgZmV0Y2hlclN1Ym1pc3Npb24sIHJlcGxhY2UsIGluaXRpYWxIeWRyYXRpb24sIGZsdXNoU3luYywgcGVuZGluZ0FjdGlvblJlc3VsdCkge1xuICAgIC8vIEZpZ3VyZSBvdXQgdGhlIHJpZ2h0IG5hdmlnYXRpb24gd2Ugd2FudCB0byB1c2UgZm9yIGRhdGEgbG9hZGluZ1xuICAgIGxldCBsb2FkaW5nTmF2aWdhdGlvbiA9IG92ZXJyaWRlTmF2aWdhdGlvbiB8fCBnZXRMb2FkaW5nTmF2aWdhdGlvbihsb2NhdGlvbiwgc3VibWlzc2lvbik7XG4gICAgLy8gSWYgdGhpcyB3YXMgYSByZWRpcmVjdCBmcm9tIGFuIGFjdGlvbiB3ZSBkb24ndCBoYXZlIGEgXCJzdWJtaXNzaW9uXCIgYnV0XG4gICAgLy8gd2UgaGF2ZSBpdCBvbiB0aGUgbG9hZGluZyBuYXZpZ2F0aW9uIHNvIHVzZSB0aGF0IGlmIGF2YWlsYWJsZVxuICAgIGxldCBhY3RpdmVTdWJtaXNzaW9uID0gc3VibWlzc2lvbiB8fCBmZXRjaGVyU3VibWlzc2lvbiB8fCBnZXRTdWJtaXNzaW9uRnJvbU5hdmlnYXRpb24obG9hZGluZ05hdmlnYXRpb24pO1xuICAgIC8vIElmIHRoaXMgaXMgYW4gdW5pbnRlcnJ1cHRlZCByZXZhbGlkYXRpb24sIHdlIHJlbWFpbiBpbiBvdXIgY3VycmVudCBpZGxlXG4gICAgLy8gc3RhdGUuICBJZiBub3QsIHdlIG5lZWQgdG8gc3dpdGNoIHRvIG91ciBsb2FkaW5nIHN0YXRlIGFuZCBsb2FkIGRhdGEsXG4gICAgLy8gcHJlc2VydmluZyBhbnkgbmV3IGFjdGlvbiBkYXRhIG9yIGV4aXN0aW5nIGFjdGlvbiBkYXRhIChpbiB0aGUgY2FzZSBvZlxuICAgIC8vIGEgcmV2YWxpZGF0aW9uIGludGVycnVwdGluZyBhbiBhY3Rpb25SZWxvYWQpXG4gICAgLy8gSWYgd2UgaGF2ZSBwYXJ0aWFsSHlkcmF0aW9uIGVuYWJsZWQsIHRoZW4gZG9uJ3QgdXBkYXRlIHRoZSBzdGF0ZSBmb3IgdGhlXG4gICAgLy8gaW5pdGlhbCBkYXRhIGxvYWQgc2luY2UgaXQncyBub3QgYSBcIm5hdmlnYXRpb25cIlxuICAgIGxldCBzaG91bGRVcGRhdGVOYXZpZ2F0aW9uU3RhdGUgPSAhaXNVbmludGVycnVwdGVkUmV2YWxpZGF0aW9uICYmICghZnV0dXJlLnY3X3BhcnRpYWxIeWRyYXRpb24gfHwgIWluaXRpYWxIeWRyYXRpb24pO1xuICAgIC8vIFdoZW4gZm9nIG9mIHdhciBpcyBlbmFibGVkLCB3ZSBlbnRlciBvdXIgYGxvYWRpbmdgIHN0YXRlIGVhcmxpZXIgc28gd2VcbiAgICAvLyBjYW4gZGlzY292ZXIgbmV3IHJvdXRlcyBkdXJpbmcgdGhlIGBsb2FkaW5nYCBzdGF0ZS4gIFdlIHNraXAgdGhpcyBpZlxuICAgIC8vIHdlJ3ZlIGFscmVhZHkgcnVuIGFjdGlvbnMgc2luY2Ugd2Ugd291bGQgaGF2ZSBkb25lIG91ciBtYXRjaGluZyBhbHJlYWR5LlxuICAgIC8vIElmIHRoZSBjaGlsZHJlbigpIGZ1bmN0aW9uIHRocmV3IHRoZW4sIHdlIHdhbnQgdG8gcHJvY2VlZCB3aXRoIHRoZVxuICAgIC8vIHBhcnRpYWwgbWF0Y2hlcyBpdCBkaXNjb3ZlcmVkLlxuICAgIGlmIChpc0ZvZ09mV2FyKSB7XG4gICAgICBpZiAoc2hvdWxkVXBkYXRlTmF2aWdhdGlvblN0YXRlKSB7XG4gICAgICAgIGxldCBhY3Rpb25EYXRhID0gZ2V0VXBkYXRlZEFjdGlvbkRhdGEocGVuZGluZ0FjdGlvblJlc3VsdCk7XG4gICAgICAgIHVwZGF0ZVN0YXRlKF9leHRlbmRzKHtcbiAgICAgICAgICBuYXZpZ2F0aW9uOiBsb2FkaW5nTmF2aWdhdGlvblxuICAgICAgICB9LCBhY3Rpb25EYXRhICE9PSB1bmRlZmluZWQgPyB7XG4gICAgICAgICAgYWN0aW9uRGF0YVxuICAgICAgICB9IDoge30pLCB7XG4gICAgICAgICAgZmx1c2hTeW5jXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbGV0IGRpc2NvdmVyUmVzdWx0ID0gYXdhaXQgZGlzY292ZXJSb3V0ZXMobWF0Y2hlcywgbG9jYXRpb24ucGF0aG5hbWUsIHJlcXVlc3Quc2lnbmFsKTtcbiAgICAgIGlmIChkaXNjb3ZlclJlc3VsdC50eXBlID09PSBcImFib3J0ZWRcIikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNob3J0Q2lyY3VpdGVkOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKGRpc2NvdmVyUmVzdWx0LnR5cGUgPT09IFwiZXJyb3JcIikge1xuICAgICAgICBsZXQgYm91bmRhcnlJZCA9IGZpbmROZWFyZXN0Qm91bmRhcnkoZGlzY292ZXJSZXN1bHQucGFydGlhbE1hdGNoZXMpLnJvdXRlLmlkO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1hdGNoZXM6IGRpc2NvdmVyUmVzdWx0LnBhcnRpYWxNYXRjaGVzLFxuICAgICAgICAgIGxvYWRlckRhdGE6IHt9LFxuICAgICAgICAgIGVycm9yczoge1xuICAgICAgICAgICAgW2JvdW5kYXJ5SWRdOiBkaXNjb3ZlclJlc3VsdC5lcnJvclxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoIWRpc2NvdmVyUmVzdWx0Lm1hdGNoZXMpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBub3RGb3VuZE1hdGNoZXMsXG4gICAgICAgICAgcm91dGVcbiAgICAgICAgfSA9IGhhbmRsZU5hdmlnYXRpb25hbDQwNChsb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWF0Y2hlczogbm90Rm91bmRNYXRjaGVzLFxuICAgICAgICAgIGxvYWRlckRhdGE6IHt9LFxuICAgICAgICAgIGVycm9yczoge1xuICAgICAgICAgICAgW3JvdXRlLmlkXTogZXJyb3JcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXRjaGVzID0gZGlzY292ZXJSZXN1bHQubWF0Y2hlcztcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHJvdXRlc1RvVXNlID0gaW5GbGlnaHREYXRhUm91dGVzIHx8IGRhdGFSb3V0ZXM7XG4gICAgbGV0IFttYXRjaGVzVG9Mb2FkLCByZXZhbGlkYXRpbmdGZXRjaGVyc10gPSBnZXRNYXRjaGVzVG9Mb2FkKGluaXQuaGlzdG9yeSwgc3RhdGUsIG1hdGNoZXMsIGFjdGl2ZVN1Ym1pc3Npb24sIGxvY2F0aW9uLCBmdXR1cmUudjdfcGFydGlhbEh5ZHJhdGlvbiAmJiBpbml0aWFsSHlkcmF0aW9uID09PSB0cnVlLCBmdXR1cmUudjdfc2tpcEFjdGlvbkVycm9yUmV2YWxpZGF0aW9uLCBpc1JldmFsaWRhdGlvblJlcXVpcmVkLCBjYW5jZWxsZWREZWZlcnJlZFJvdXRlcywgY2FuY2VsbGVkRmV0Y2hlckxvYWRzLCBkZWxldGVkRmV0Y2hlcnMsIGZldGNoTG9hZE1hdGNoZXMsIGZldGNoUmVkaXJlY3RJZHMsIHJvdXRlc1RvVXNlLCBiYXNlbmFtZSwgcGVuZGluZ0FjdGlvblJlc3VsdCk7XG4gICAgLy8gQ2FuY2VsIHBlbmRpbmcgZGVmZXJyZWRzIGZvciBuby1sb25nZXItbWF0Y2hlZCByb3V0ZXMgb3Igcm91dGVzIHdlJ3JlXG4gICAgLy8gYWJvdXQgdG8gcmVsb2FkLiAgTm90ZSB0aGF0IGlmIHRoaXMgaXMgYW4gYWN0aW9uIHJlbG9hZCB3ZSB3b3VsZCBoYXZlXG4gICAgLy8gYWxyZWFkeSBjYW5jZWxsZWQgYWxsIHBlbmRpbmcgZGVmZXJyZWRzIHNvIHRoaXMgd291bGQgYmUgYSBuby1vcFxuICAgIGNhbmNlbEFjdGl2ZURlZmVycmVkcyhyb3V0ZUlkID0+ICEobWF0Y2hlcyAmJiBtYXRjaGVzLnNvbWUobSA9PiBtLnJvdXRlLmlkID09PSByb3V0ZUlkKSkgfHwgbWF0Y2hlc1RvTG9hZCAmJiBtYXRjaGVzVG9Mb2FkLnNvbWUobSA9PiBtLnJvdXRlLmlkID09PSByb3V0ZUlkKSk7XG4gICAgcGVuZGluZ05hdmlnYXRpb25Mb2FkSWQgPSArK2luY3JlbWVudGluZ0xvYWRJZDtcbiAgICAvLyBTaG9ydCBjaXJjdWl0IGlmIHdlIGhhdmUgbm8gbG9hZGVycyB0byBydW5cbiAgICBpZiAobWF0Y2hlc1RvTG9hZC5sZW5ndGggPT09IDAgJiYgcmV2YWxpZGF0aW5nRmV0Y2hlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBsZXQgdXBkYXRlZEZldGNoZXJzID0gbWFya0ZldGNoUmVkaXJlY3RzRG9uZSgpO1xuICAgICAgY29tcGxldGVOYXZpZ2F0aW9uKGxvY2F0aW9uLCBfZXh0ZW5kcyh7XG4gICAgICAgIG1hdGNoZXMsXG4gICAgICAgIGxvYWRlckRhdGE6IHt9LFxuICAgICAgICAvLyBDb21taXQgcGVuZGluZyBlcnJvciBpZiB3ZSdyZSBzaG9ydCBjaXJjdWl0aW5nXG4gICAgICAgIGVycm9yczogcGVuZGluZ0FjdGlvblJlc3VsdCAmJiBpc0Vycm9yUmVzdWx0KHBlbmRpbmdBY3Rpb25SZXN1bHRbMV0pID8ge1xuICAgICAgICAgIFtwZW5kaW5nQWN0aW9uUmVzdWx0WzBdXTogcGVuZGluZ0FjdGlvblJlc3VsdFsxXS5lcnJvclxuICAgICAgICB9IDogbnVsbFxuICAgICAgfSwgZ2V0QWN0aW9uRGF0YUZvckNvbW1pdChwZW5kaW5nQWN0aW9uUmVzdWx0KSwgdXBkYXRlZEZldGNoZXJzID8ge1xuICAgICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICAgIH0gOiB7fSksIHtcbiAgICAgICAgZmx1c2hTeW5jXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNob3J0Q2lyY3VpdGVkOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoc2hvdWxkVXBkYXRlTmF2aWdhdGlvblN0YXRlKSB7XG4gICAgICBsZXQgdXBkYXRlcyA9IHt9O1xuICAgICAgaWYgKCFpc0ZvZ09mV2FyKSB7XG4gICAgICAgIC8vIE9ubHkgdXBkYXRlIG5hdmlnYXRpb24vYWN0aW9uTkRhdGEgaWYgd2UgZGlkbid0IGFscmVhZHkgZG8gaXQgYWJvdmVcbiAgICAgICAgdXBkYXRlcy5uYXZpZ2F0aW9uID0gbG9hZGluZ05hdmlnYXRpb247XG4gICAgICAgIGxldCBhY3Rpb25EYXRhID0gZ2V0VXBkYXRlZEFjdGlvbkRhdGEocGVuZGluZ0FjdGlvblJlc3VsdCk7XG4gICAgICAgIGlmIChhY3Rpb25EYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB1cGRhdGVzLmFjdGlvbkRhdGEgPSBhY3Rpb25EYXRhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocmV2YWxpZGF0aW5nRmV0Y2hlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICB1cGRhdGVzLmZldGNoZXJzID0gZ2V0VXBkYXRlZFJldmFsaWRhdGluZ0ZldGNoZXJzKHJldmFsaWRhdGluZ0ZldGNoZXJzKTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZVN0YXRlKHVwZGF0ZXMsIHtcbiAgICAgICAgZmx1c2hTeW5jXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV2YWxpZGF0aW5nRmV0Y2hlcnMuZm9yRWFjaChyZiA9PiB7XG4gICAgICBhYm9ydEZldGNoZXIocmYua2V5KTtcbiAgICAgIGlmIChyZi5jb250cm9sbGVyKSB7XG4gICAgICAgIC8vIEZldGNoZXJzIHVzZSBhbiBpbmRlcGVuZGVudCBBYm9ydENvbnRyb2xsZXIgc28gdGhhdCBhYm9ydGluZyBhIGZldGNoZXJcbiAgICAgICAgLy8gKHZpYSBkZWxldGVGZXRjaGVyKSBkb2VzIG5vdCBhYm9ydCB0aGUgdHJpZ2dlcmluZyBuYXZpZ2F0aW9uIHRoYXRcbiAgICAgICAgLy8gdHJpZ2dlcmVkIHRoZSByZXZhbGlkYXRpb25cbiAgICAgICAgZmV0Y2hDb250cm9sbGVycy5zZXQocmYua2V5LCByZi5jb250cm9sbGVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBQcm94eSBuYXZpZ2F0aW9uIGFib3J0IHRocm91Z2ggdG8gcmV2YWxpZGF0aW9uIGZldGNoZXJzXG4gICAgbGV0IGFib3J0UGVuZGluZ0ZldGNoUmV2YWxpZGF0aW9ucyA9ICgpID0+IHJldmFsaWRhdGluZ0ZldGNoZXJzLmZvckVhY2goZiA9PiBhYm9ydEZldGNoZXIoZi5rZXkpKTtcbiAgICBpZiAocGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyKSB7XG4gICAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBhYm9ydFBlbmRpbmdGZXRjaFJldmFsaWRhdGlvbnMpO1xuICAgIH1cbiAgICBsZXQge1xuICAgICAgbG9hZGVyUmVzdWx0cyxcbiAgICAgIGZldGNoZXJSZXN1bHRzXG4gICAgfSA9IGF3YWl0IGNhbGxMb2FkZXJzQW5kTWF5YmVSZXNvbHZlRGF0YShzdGF0ZSwgbWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMsIHJlcXVlc3QpO1xuICAgIGlmIChyZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaG9ydENpcmN1aXRlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gQ2xlYW4gdXAgX2FmdGVyXyBsb2FkZXJzIGhhdmUgY29tcGxldGVkLiAgRG9uJ3QgY2xlYW4gdXAgaWYgd2Ugc2hvcnRcbiAgICAvLyBjaXJjdWl0ZWQgYmVjYXVzZSBmZXRjaENvbnRyb2xsZXJzIHdvdWxkIGhhdmUgYmVlbiBhYm9ydGVkIGFuZFxuICAgIC8vIHJlYXNzaWduZWQgdG8gbmV3IGNvbnRyb2xsZXJzIGZvciB0aGUgbmV4dCBuYXZpZ2F0aW9uXG4gICAgaWYgKHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlcikge1xuICAgICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgYWJvcnRQZW5kaW5nRmV0Y2hSZXZhbGlkYXRpb25zKTtcbiAgICB9XG4gICAgcmV2YWxpZGF0aW5nRmV0Y2hlcnMuZm9yRWFjaChyZiA9PiBmZXRjaENvbnRyb2xsZXJzLmRlbGV0ZShyZi5rZXkpKTtcbiAgICAvLyBJZiBhbnkgbG9hZGVycyByZXR1cm5lZCBhIHJlZGlyZWN0IFJlc3BvbnNlLCBzdGFydCBhIG5ldyBSRVBMQUNFIG5hdmlnYXRpb25cbiAgICBsZXQgcmVkaXJlY3QgPSBmaW5kUmVkaXJlY3QobG9hZGVyUmVzdWx0cyk7XG4gICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICBhd2FpdCBzdGFydFJlZGlyZWN0TmF2aWdhdGlvbihyZXF1ZXN0LCByZWRpcmVjdC5yZXN1bHQsIHRydWUsIHtcbiAgICAgICAgcmVwbGFjZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaG9ydENpcmN1aXRlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gICAgcmVkaXJlY3QgPSBmaW5kUmVkaXJlY3QoZmV0Y2hlclJlc3VsdHMpO1xuICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgLy8gSWYgdGhpcyByZWRpcmVjdCBjYW1lIGZyb20gYSBmZXRjaGVyIG1ha2Ugc3VyZSB3ZSBtYXJrIGl0IGluXG4gICAgICAvLyBmZXRjaFJlZGlyZWN0SWRzIHNvIGl0IGRvZXNuJ3QgZ2V0IHJldmFsaWRhdGVkIG9uIHRoZSBuZXh0IHNldCBvZlxuICAgICAgLy8gbG9hZGVyIGV4ZWN1dGlvbnNcbiAgICAgIGZldGNoUmVkaXJlY3RJZHMuYWRkKHJlZGlyZWN0LmtleSk7XG4gICAgICBhd2FpdCBzdGFydFJlZGlyZWN0TmF2aWdhdGlvbihyZXF1ZXN0LCByZWRpcmVjdC5yZXN1bHQsIHRydWUsIHtcbiAgICAgICAgcmVwbGFjZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaG9ydENpcmN1aXRlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gUHJvY2VzcyBhbmQgY29tbWl0IG91dHB1dCBmcm9tIGxvYWRlcnNcbiAgICBsZXQge1xuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0gPSBwcm9jZXNzTG9hZGVyRGF0YShzdGF0ZSwgbWF0Y2hlcywgbG9hZGVyUmVzdWx0cywgcGVuZGluZ0FjdGlvblJlc3VsdCwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMsIGZldGNoZXJSZXN1bHRzLCBhY3RpdmVEZWZlcnJlZHMpO1xuICAgIC8vIFdpcmUgdXAgc3Vic2NyaWJlcnMgdG8gdXBkYXRlIGxvYWRlckRhdGEgYXMgcHJvbWlzZXMgc2V0dGxlXG4gICAgYWN0aXZlRGVmZXJyZWRzLmZvckVhY2goKGRlZmVycmVkRGF0YSwgcm91dGVJZCkgPT4ge1xuICAgICAgZGVmZXJyZWREYXRhLnN1YnNjcmliZShhYm9ydGVkID0+IHtcbiAgICAgICAgLy8gTm90ZTogTm8gbmVlZCB0byB1cGRhdGVTdGF0ZSBoZXJlIHNpbmNlIHRoZSBUcmFja2VkUHJvbWlzZSBvblxuICAgICAgICAvLyBsb2FkZXJEYXRhIGlzIHN0YWJsZSBhY3Jvc3MgcmVzb2x2ZS9yZWplY3RcbiAgICAgICAgLy8gUmVtb3ZlIHRoaXMgaW5zdGFuY2UgaWYgd2Ugd2VyZSBhYm9ydGVkIG9yIGlmIHByb21pc2VzIGhhdmUgc2V0dGxlZFxuICAgICAgICBpZiAoYWJvcnRlZCB8fCBkZWZlcnJlZERhdGEuZG9uZSkge1xuICAgICAgICAgIGFjdGl2ZURlZmVycmVkcy5kZWxldGUocm91dGVJZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIFByZXNlcnZlIFNTUiBlcnJvcnMgZHVyaW5nIHBhcnRpYWwgaHlkcmF0aW9uXG4gICAgaWYgKGZ1dHVyZS52N19wYXJ0aWFsSHlkcmF0aW9uICYmIGluaXRpYWxIeWRyYXRpb24gJiYgc3RhdGUuZXJyb3JzKSB7XG4gICAgICBlcnJvcnMgPSBfZXh0ZW5kcyh7fSwgc3RhdGUuZXJyb3JzLCBlcnJvcnMpO1xuICAgIH1cbiAgICBsZXQgdXBkYXRlZEZldGNoZXJzID0gbWFya0ZldGNoUmVkaXJlY3RzRG9uZSgpO1xuICAgIGxldCBkaWRBYm9ydEZldGNoTG9hZHMgPSBhYm9ydFN0YWxlRmV0Y2hMb2FkcyhwZW5kaW5nTmF2aWdhdGlvbkxvYWRJZCk7XG4gICAgbGV0IHNob3VsZFVwZGF0ZUZldGNoZXJzID0gdXBkYXRlZEZldGNoZXJzIHx8IGRpZEFib3J0RmV0Y2hMb2FkcyB8fCByZXZhbGlkYXRpbmdGZXRjaGVycy5sZW5ndGggPiAwO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBtYXRjaGVzLFxuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0sIHNob3VsZFVwZGF0ZUZldGNoZXJzID8ge1xuICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgfSA6IHt9KTtcbiAgfVxuICBmdW5jdGlvbiBnZXRVcGRhdGVkQWN0aW9uRGF0YShwZW5kaW5nQWN0aW9uUmVzdWx0KSB7XG4gICAgaWYgKHBlbmRpbmdBY3Rpb25SZXN1bHQgJiYgIWlzRXJyb3JSZXN1bHQocGVuZGluZ0FjdGlvblJlc3VsdFsxXSkpIHtcbiAgICAgIC8vIFRoaXMgaXMgY2FzdCB0byBgYW55YCBjdXJyZW50bHkgYmVjYXVzZSBgUm91dGVEYXRhYHVzZXMgYW55IGFuZCBpdFxuICAgICAgLy8gd291bGQgYmUgYSBicmVha2luZyBjaGFuZ2UgdG8gdXNlIGFueS5cbiAgICAgIC8vIFRPRE86IHY3IC0gY2hhbmdlIGBSb3V0ZURhdGFgIHRvIHVzZSBgdW5rbm93bmAgaW5zdGVhZCBvZiBgYW55YFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW3BlbmRpbmdBY3Rpb25SZXN1bHRbMF1dOiBwZW5kaW5nQWN0aW9uUmVzdWx0WzFdLmRhdGFcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChzdGF0ZS5hY3Rpb25EYXRhKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoc3RhdGUuYWN0aW9uRGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLmFjdGlvbkRhdGE7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGdldFVwZGF0ZWRSZXZhbGlkYXRpbmdGZXRjaGVycyhyZXZhbGlkYXRpbmdGZXRjaGVycykge1xuICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLmZvckVhY2gocmYgPT4ge1xuICAgICAgbGV0IGZldGNoZXIgPSBzdGF0ZS5mZXRjaGVycy5nZXQocmYua2V5KTtcbiAgICAgIGxldCByZXZhbGlkYXRpbmdGZXRjaGVyID0gZ2V0TG9hZGluZ0ZldGNoZXIodW5kZWZpbmVkLCBmZXRjaGVyID8gZmV0Y2hlci5kYXRhIDogdW5kZWZpbmVkKTtcbiAgICAgIHN0YXRlLmZldGNoZXJzLnNldChyZi5rZXksIHJldmFsaWRhdGluZ0ZldGNoZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKTtcbiAgfVxuICAvLyBUcmlnZ2VyIGEgZmV0Y2hlciBsb2FkL3N1Ym1pdCBmb3IgdGhlIGdpdmVuIGZldGNoZXIga2V5XG4gIGZ1bmN0aW9uIGZldGNoKGtleSwgcm91dGVJZCwgaHJlZiwgb3B0cykge1xuICAgIGlmIChpc1NlcnZlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwicm91dGVyLmZldGNoKCkgd2FzIGNhbGxlZCBkdXJpbmcgdGhlIHNlcnZlciByZW5kZXIsIGJ1dCBpdCBzaG91bGRuJ3QgYmUuIFwiICsgXCJZb3UgYXJlIGxpa2VseSBjYWxsaW5nIGEgdXNlRmV0Y2hlcigpIG1ldGhvZCBpbiB0aGUgYm9keSBvZiB5b3VyIGNvbXBvbmVudC4gXCIgKyBcIlRyeSBtb3ZpbmcgaXQgdG8gYSB1c2VFZmZlY3Qgb3IgYSBjYWxsYmFjay5cIik7XG4gICAgfVxuICAgIGFib3J0RmV0Y2hlcihrZXkpO1xuICAgIGxldCBmbHVzaFN5bmMgPSAob3B0cyAmJiBvcHRzLmZsdXNoU3luYykgPT09IHRydWU7XG4gICAgbGV0IHJvdXRlc1RvVXNlID0gaW5GbGlnaHREYXRhUm91dGVzIHx8IGRhdGFSb3V0ZXM7XG4gICAgbGV0IG5vcm1hbGl6ZWRQYXRoID0gbm9ybWFsaXplVG8oc3RhdGUubG9jYXRpb24sIHN0YXRlLm1hdGNoZXMsIGJhc2VuYW1lLCBmdXR1cmUudjdfcHJlcGVuZEJhc2VuYW1lLCBocmVmLCBmdXR1cmUudjdfcmVsYXRpdmVTcGxhdFBhdGgsIHJvdXRlSWQsIG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMucmVsYXRpdmUpO1xuICAgIGxldCBtYXRjaGVzID0gbWF0Y2hSb3V0ZXMocm91dGVzVG9Vc2UsIG5vcm1hbGl6ZWRQYXRoLCBiYXNlbmFtZSk7XG4gICAgbGV0IGZvZ09mV2FyID0gY2hlY2tGb2dPZldhcihtYXRjaGVzLCByb3V0ZXNUb1VzZSwgbm9ybWFsaXplZFBhdGgpO1xuICAgIGlmIChmb2dPZldhci5hY3RpdmUgJiYgZm9nT2ZXYXIubWF0Y2hlcykge1xuICAgICAgbWF0Y2hlcyA9IGZvZ09mV2FyLm1hdGNoZXM7XG4gICAgfVxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgc2V0RmV0Y2hlckVycm9yKGtleSwgcm91dGVJZCwgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHtcbiAgICAgICAgcGF0aG5hbWU6IG5vcm1hbGl6ZWRQYXRoXG4gICAgICB9KSwge1xuICAgICAgICBmbHVzaFN5bmNcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQge1xuICAgICAgcGF0aCxcbiAgICAgIHN1Ym1pc3Npb24sXG4gICAgICBlcnJvclxuICAgIH0gPSBub3JtYWxpemVOYXZpZ2F0ZU9wdGlvbnMoZnV0dXJlLnY3X25vcm1hbGl6ZUZvcm1NZXRob2QsIHRydWUsIG5vcm1hbGl6ZWRQYXRoLCBvcHRzKTtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHNldEZldGNoZXJFcnJvcihrZXksIHJvdXRlSWQsIGVycm9yLCB7XG4gICAgICAgIGZsdXNoU3luY1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBtYXRjaCA9IGdldFRhcmdldE1hdGNoKG1hdGNoZXMsIHBhdGgpO1xuICAgIGxldCBwcmV2ZW50U2Nyb2xsUmVzZXQgPSAob3B0cyAmJiBvcHRzLnByZXZlbnRTY3JvbGxSZXNldCkgPT09IHRydWU7XG4gICAgaWYgKHN1Ym1pc3Npb24gJiYgaXNNdXRhdGlvbk1ldGhvZChzdWJtaXNzaW9uLmZvcm1NZXRob2QpKSB7XG4gICAgICBoYW5kbGVGZXRjaGVyQWN0aW9uKGtleSwgcm91dGVJZCwgcGF0aCwgbWF0Y2gsIG1hdGNoZXMsIGZvZ09mV2FyLmFjdGl2ZSwgZmx1c2hTeW5jLCBwcmV2ZW50U2Nyb2xsUmVzZXQsIHN1Ym1pc3Npb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTdG9yZSBvZmYgdGhlIG1hdGNoIHNvIHdlIGNhbiBjYWxsIGl0J3Mgc2hvdWxkUmV2YWxpZGF0ZSBvbiBzdWJzZXF1ZW50XG4gICAgLy8gcmV2YWxpZGF0aW9uc1xuICAgIGZldGNoTG9hZE1hdGNoZXMuc2V0KGtleSwge1xuICAgICAgcm91dGVJZCxcbiAgICAgIHBhdGhcbiAgICB9KTtcbiAgICBoYW5kbGVGZXRjaGVyTG9hZGVyKGtleSwgcm91dGVJZCwgcGF0aCwgbWF0Y2gsIG1hdGNoZXMsIGZvZ09mV2FyLmFjdGl2ZSwgZmx1c2hTeW5jLCBwcmV2ZW50U2Nyb2xsUmVzZXQsIHN1Ym1pc3Npb24pO1xuICB9XG4gIC8vIENhbGwgdGhlIGFjdGlvbiBmb3IgdGhlIG1hdGNoZWQgZmV0Y2hlci5zdWJtaXQoKSwgYW5kIHRoZW4gaGFuZGxlIHJlZGlyZWN0cyxcbiAgLy8gZXJyb3JzLCBhbmQgcmV2YWxpZGF0aW9uXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUZldGNoZXJBY3Rpb24oa2V5LCByb3V0ZUlkLCBwYXRoLCBtYXRjaCwgcmVxdWVzdE1hdGNoZXMsIGlzRm9nT2ZXYXIsIGZsdXNoU3luYywgcHJldmVudFNjcm9sbFJlc2V0LCBzdWJtaXNzaW9uKSB7XG4gICAgaW50ZXJydXB0QWN0aXZlTG9hZHMoKTtcbiAgICBmZXRjaExvYWRNYXRjaGVzLmRlbGV0ZShrZXkpO1xuICAgIGZ1bmN0aW9uIGRldGVjdEFuZEhhbmRsZTQwNUVycm9yKG0pIHtcbiAgICAgIGlmICghbS5yb3V0ZS5hY3Rpb24gJiYgIW0ucm91dGUubGF6eSkge1xuICAgICAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNSwge1xuICAgICAgICAgIG1ldGhvZDogc3VibWlzc2lvbi5mb3JtTWV0aG9kLFxuICAgICAgICAgIHBhdGhuYW1lOiBwYXRoLFxuICAgICAgICAgIHJvdXRlSWQ6IHJvdXRlSWRcbiAgICAgICAgfSk7XG4gICAgICAgIHNldEZldGNoZXJFcnJvcihrZXksIHJvdXRlSWQsIGVycm9yLCB7XG4gICAgICAgICAgZmx1c2hTeW5jXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFpc0ZvZ09mV2FyICYmIGRldGVjdEFuZEhhbmRsZTQwNUVycm9yKG1hdGNoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBQdXQgdGhpcyBmZXRjaGVyIGludG8gaXQncyBzdWJtaXR0aW5nIHN0YXRlXG4gICAgbGV0IGV4aXN0aW5nRmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChrZXkpO1xuICAgIHVwZGF0ZUZldGNoZXJTdGF0ZShrZXksIGdldFN1Ym1pdHRpbmdGZXRjaGVyKHN1Ym1pc3Npb24sIGV4aXN0aW5nRmV0Y2hlciksIHtcbiAgICAgIGZsdXNoU3luY1xuICAgIH0pO1xuICAgIGxldCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgbGV0IGZldGNoUmVxdWVzdCA9IGNyZWF0ZUNsaWVudFNpZGVSZXF1ZXN0KGluaXQuaGlzdG9yeSwgcGF0aCwgYWJvcnRDb250cm9sbGVyLnNpZ25hbCwgc3VibWlzc2lvbik7XG4gICAgaWYgKGlzRm9nT2ZXYXIpIHtcbiAgICAgIGxldCBkaXNjb3ZlclJlc3VsdCA9IGF3YWl0IGRpc2NvdmVyUm91dGVzKHJlcXVlc3RNYXRjaGVzLCBuZXcgVVJMKGZldGNoUmVxdWVzdC51cmwpLnBhdGhuYW1lLCBmZXRjaFJlcXVlc3Quc2lnbmFsLCBrZXkpO1xuICAgICAgaWYgKGRpc2NvdmVyUmVzdWx0LnR5cGUgPT09IFwiYWJvcnRlZFwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoZGlzY292ZXJSZXN1bHQudHlwZSA9PT0gXCJlcnJvclwiKSB7XG4gICAgICAgIHNldEZldGNoZXJFcnJvcihrZXksIHJvdXRlSWQsIGRpc2NvdmVyUmVzdWx0LmVycm9yLCB7XG4gICAgICAgICAgZmx1c2hTeW5jXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKCFkaXNjb3ZlclJlc3VsdC5tYXRjaGVzKSB7XG4gICAgICAgIHNldEZldGNoZXJFcnJvcihrZXksIHJvdXRlSWQsIGdldEludGVybmFsUm91dGVyRXJyb3IoNDA0LCB7XG4gICAgICAgICAgcGF0aG5hbWU6IHBhdGhcbiAgICAgICAgfSksIHtcbiAgICAgICAgICBmbHVzaFN5bmNcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcXVlc3RNYXRjaGVzID0gZGlzY292ZXJSZXN1bHQubWF0Y2hlcztcbiAgICAgICAgbWF0Y2ggPSBnZXRUYXJnZXRNYXRjaChyZXF1ZXN0TWF0Y2hlcywgcGF0aCk7XG4gICAgICAgIGlmIChkZXRlY3RBbmRIYW5kbGU0MDVFcnJvcihtYXRjaCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQ2FsbCB0aGUgYWN0aW9uIGZvciB0aGUgZmV0Y2hlclxuICAgIGZldGNoQ29udHJvbGxlcnMuc2V0KGtleSwgYWJvcnRDb250cm9sbGVyKTtcbiAgICBsZXQgb3JpZ2luYXRpbmdMb2FkSWQgPSBpbmNyZW1lbnRpbmdMb2FkSWQ7XG4gICAgbGV0IGFjdGlvblJlc3VsdHMgPSBhd2FpdCBjYWxsRGF0YVN0cmF0ZWd5KFwiYWN0aW9uXCIsIHN0YXRlLCBmZXRjaFJlcXVlc3QsIFttYXRjaF0sIHJlcXVlc3RNYXRjaGVzLCBrZXkpO1xuICAgIGxldCBhY3Rpb25SZXN1bHQgPSBhY3Rpb25SZXN1bHRzW21hdGNoLnJvdXRlLmlkXTtcbiAgICBpZiAoZmV0Y2hSZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAvLyBXZSBjYW4gZGVsZXRlIHRoaXMgc28gbG9uZyBhcyB3ZSB3ZXJlbid0IGFib3J0ZWQgYnkgb3VyIG93biBmZXRjaGVyXG4gICAgICAvLyByZS1zdWJtaXQgd2hpY2ggd291bGQgaGF2ZSBwdXQgX25ld18gY29udHJvbGxlciBpcyBpbiBmZXRjaENvbnRyb2xsZXJzXG4gICAgICBpZiAoZmV0Y2hDb250cm9sbGVycy5nZXQoa2V5KSA9PT0gYWJvcnRDb250cm9sbGVyKSB7XG4gICAgICAgIGZldGNoQ29udHJvbGxlcnMuZGVsZXRlKGtleSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFdoZW4gdXNpbmcgdjdfZmV0Y2hlclBlcnNpc3QsIHdlIGRvbid0IHdhbnQgZXJyb3JzIGJ1YmJsaW5nIHVwIHRvIHRoZSBVSVxuICAgIC8vIG9yIHJlZGlyZWN0cyBwcm9jZXNzZWQgZm9yIHVubW91bnRlZCBmZXRjaGVycyBzbyB3ZSBqdXN0IHJldmVydCB0aGVtIHRvXG4gICAgLy8gaWRsZVxuICAgIGlmIChmdXR1cmUudjdfZmV0Y2hlclBlcnNpc3QgJiYgZGVsZXRlZEZldGNoZXJzLmhhcyhrZXkpKSB7XG4gICAgICBpZiAoaXNSZWRpcmVjdFJlc3VsdChhY3Rpb25SZXN1bHQpIHx8IGlzRXJyb3JSZXN1bHQoYWN0aW9uUmVzdWx0KSkge1xuICAgICAgICB1cGRhdGVGZXRjaGVyU3RhdGUoa2V5LCBnZXREb25lRmV0Y2hlcih1bmRlZmluZWQpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gTGV0IFN1Y2Nlc3NSZXN1bHQncyBmYWxsIHRocm91Z2ggZm9yIHJldmFsaWRhdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNSZWRpcmVjdFJlc3VsdChhY3Rpb25SZXN1bHQpKSB7XG4gICAgICAgIGZldGNoQ29udHJvbGxlcnMuZGVsZXRlKGtleSk7XG4gICAgICAgIGlmIChwZW5kaW5nTmF2aWdhdGlvbkxvYWRJZCA+IG9yaWdpbmF0aW5nTG9hZElkKSB7XG4gICAgICAgICAgLy8gQSBuZXcgbmF2aWdhdGlvbiB3YXMga2lja2VkIG9mZiBhZnRlciBvdXIgYWN0aW9uIHN0YXJ0ZWQsIHNvIHRoYXRcbiAgICAgICAgICAvLyBzaG91bGQgdGFrZSBwcmVjZWRlbmNlIG92ZXIgdGhpcyByZWRpcmVjdCBuYXZpZ2F0aW9uLiAgV2UgYWxyZWFkeVxuICAgICAgICAgIC8vIHNldCBpc1JldmFsaWRhdGlvblJlcXVpcmVkIHNvIGFsbCBsb2FkZXJzIGZvciB0aGUgbmV3IHJvdXRlIHNob3VsZFxuICAgICAgICAgIC8vIGZpcmUgdW5sZXNzIG9wdGVkIG91dCB2aWEgc2hvdWxkUmV2YWxpZGF0ZVxuICAgICAgICAgIHVwZGF0ZUZldGNoZXJTdGF0ZShrZXksIGdldERvbmVGZXRjaGVyKHVuZGVmaW5lZCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmZXRjaFJlZGlyZWN0SWRzLmFkZChrZXkpO1xuICAgICAgICAgIHVwZGF0ZUZldGNoZXJTdGF0ZShrZXksIGdldExvYWRpbmdGZXRjaGVyKHN1Ym1pc3Npb24pKTtcbiAgICAgICAgICByZXR1cm4gc3RhcnRSZWRpcmVjdE5hdmlnYXRpb24oZmV0Y2hSZXF1ZXN0LCBhY3Rpb25SZXN1bHQsIGZhbHNlLCB7XG4gICAgICAgICAgICBmZXRjaGVyU3VibWlzc2lvbjogc3VibWlzc2lvbixcbiAgICAgICAgICAgIHByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBQcm9jZXNzIGFueSBub24tcmVkaXJlY3QgZXJyb3JzIHRocm93blxuICAgICAgaWYgKGlzRXJyb3JSZXN1bHQoYWN0aW9uUmVzdWx0KSkge1xuICAgICAgICBzZXRGZXRjaGVyRXJyb3Ioa2V5LCByb3V0ZUlkLCBhY3Rpb25SZXN1bHQuZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0RlZmVycmVkUmVzdWx0KGFjdGlvblJlc3VsdCkpIHtcbiAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDAwLCB7XG4gICAgICAgIHR5cGU6IFwiZGVmZXItYWN0aW9uXCJcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBTdGFydCB0aGUgZGF0YSBsb2FkIGZvciBjdXJyZW50IG1hdGNoZXMsIG9yIHRoZSBuZXh0IGxvY2F0aW9uIGlmIHdlJ3JlXG4gICAgLy8gaW4gdGhlIG1pZGRsZSBvZiBhIG5hdmlnYXRpb25cbiAgICBsZXQgbmV4dExvY2F0aW9uID0gc3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbiB8fCBzdGF0ZS5sb2NhdGlvbjtcbiAgICBsZXQgcmV2YWxpZGF0aW9uUmVxdWVzdCA9IGNyZWF0ZUNsaWVudFNpZGVSZXF1ZXN0KGluaXQuaGlzdG9yeSwgbmV4dExvY2F0aW9uLCBhYm9ydENvbnRyb2xsZXIuc2lnbmFsKTtcbiAgICBsZXQgcm91dGVzVG9Vc2UgPSBpbkZsaWdodERhdGFSb3V0ZXMgfHwgZGF0YVJvdXRlcztcbiAgICBsZXQgbWF0Y2hlcyA9IHN0YXRlLm5hdmlnYXRpb24uc3RhdGUgIT09IFwiaWRsZVwiID8gbWF0Y2hSb3V0ZXMocm91dGVzVG9Vc2UsIHN0YXRlLm5hdmlnYXRpb24ubG9jYXRpb24sIGJhc2VuYW1lKSA6IHN0YXRlLm1hdGNoZXM7XG4gICAgaW52YXJpYW50KG1hdGNoZXMsIFwiRGlkbid0IGZpbmQgYW55IG1hdGNoZXMgYWZ0ZXIgZmV0Y2hlciBhY3Rpb25cIik7XG4gICAgbGV0IGxvYWRJZCA9ICsraW5jcmVtZW50aW5nTG9hZElkO1xuICAgIGZldGNoUmVsb2FkSWRzLnNldChrZXksIGxvYWRJZCk7XG4gICAgbGV0IGxvYWRGZXRjaGVyID0gZ2V0TG9hZGluZ0ZldGNoZXIoc3VibWlzc2lvbiwgYWN0aW9uUmVzdWx0LmRhdGEpO1xuICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGxvYWRGZXRjaGVyKTtcbiAgICBsZXQgW21hdGNoZXNUb0xvYWQsIHJldmFsaWRhdGluZ0ZldGNoZXJzXSA9IGdldE1hdGNoZXNUb0xvYWQoaW5pdC5oaXN0b3J5LCBzdGF0ZSwgbWF0Y2hlcywgc3VibWlzc2lvbiwgbmV4dExvY2F0aW9uLCBmYWxzZSwgZnV0dXJlLnY3X3NraXBBY3Rpb25FcnJvclJldmFsaWRhdGlvbiwgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCwgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMsIGNhbmNlbGxlZEZldGNoZXJMb2FkcywgZGVsZXRlZEZldGNoZXJzLCBmZXRjaExvYWRNYXRjaGVzLCBmZXRjaFJlZGlyZWN0SWRzLCByb3V0ZXNUb1VzZSwgYmFzZW5hbWUsIFttYXRjaC5yb3V0ZS5pZCwgYWN0aW9uUmVzdWx0XSk7XG4gICAgLy8gUHV0IGFsbCByZXZhbGlkYXRpbmcgZmV0Y2hlcnMgaW50byB0aGUgbG9hZGluZyBzdGF0ZSwgZXhjZXB0IGZvciB0aGVcbiAgICAvLyBjdXJyZW50IGZldGNoZXIgd2hpY2ggd2Ugd2FudCB0byBrZWVwIGluIGl0J3MgY3VycmVudCBsb2FkaW5nIHN0YXRlIHdoaWNoXG4gICAgLy8gY29udGFpbnMgaXQncyBhY3Rpb24gc3VibWlzc2lvbiBpbmZvICsgYWN0aW9uIGRhdGFcbiAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5maWx0ZXIocmYgPT4gcmYua2V5ICE9PSBrZXkpLmZvckVhY2gocmYgPT4ge1xuICAgICAgbGV0IHN0YWxlS2V5ID0gcmYua2V5O1xuICAgICAgbGV0IGV4aXN0aW5nRmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChzdGFsZUtleSk7XG4gICAgICBsZXQgcmV2YWxpZGF0aW5nRmV0Y2hlciA9IGdldExvYWRpbmdGZXRjaGVyKHVuZGVmaW5lZCwgZXhpc3RpbmdGZXRjaGVyID8gZXhpc3RpbmdGZXRjaGVyLmRhdGEgOiB1bmRlZmluZWQpO1xuICAgICAgc3RhdGUuZmV0Y2hlcnMuc2V0KHN0YWxlS2V5LCByZXZhbGlkYXRpbmdGZXRjaGVyKTtcbiAgICAgIGFib3J0RmV0Y2hlcihzdGFsZUtleSk7XG4gICAgICBpZiAocmYuY29udHJvbGxlcikge1xuICAgICAgICBmZXRjaENvbnRyb2xsZXJzLnNldChzdGFsZUtleSwgcmYuY29udHJvbGxlcik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdXBkYXRlU3RhdGUoe1xuICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgfSk7XG4gICAgbGV0IGFib3J0UGVuZGluZ0ZldGNoUmV2YWxpZGF0aW9ucyA9ICgpID0+IHJldmFsaWRhdGluZ0ZldGNoZXJzLmZvckVhY2gocmYgPT4gYWJvcnRGZXRjaGVyKHJmLmtleSkpO1xuICAgIGFib3J0Q29udHJvbGxlci5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGFib3J0UGVuZGluZ0ZldGNoUmV2YWxpZGF0aW9ucyk7XG4gICAgbGV0IHtcbiAgICAgIGxvYWRlclJlc3VsdHMsXG4gICAgICBmZXRjaGVyUmVzdWx0c1xuICAgIH0gPSBhd2FpdCBjYWxsTG9hZGVyc0FuZE1heWJlUmVzb2x2ZURhdGEoc3RhdGUsIG1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIHJldmFsaWRhdGluZ0ZldGNoZXJzLCByZXZhbGlkYXRpb25SZXF1ZXN0KTtcbiAgICBpZiAoYWJvcnRDb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFib3J0Q29udHJvbGxlci5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGFib3J0UGVuZGluZ0ZldGNoUmV2YWxpZGF0aW9ucyk7XG4gICAgZmV0Y2hSZWxvYWRJZHMuZGVsZXRlKGtleSk7XG4gICAgZmV0Y2hDb250cm9sbGVycy5kZWxldGUoa2V5KTtcbiAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5mb3JFYWNoKHIgPT4gZmV0Y2hDb250cm9sbGVycy5kZWxldGUoci5rZXkpKTtcbiAgICBsZXQgcmVkaXJlY3QgPSBmaW5kUmVkaXJlY3QobG9hZGVyUmVzdWx0cyk7XG4gICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICByZXR1cm4gc3RhcnRSZWRpcmVjdE5hdmlnYXRpb24ocmV2YWxpZGF0aW9uUmVxdWVzdCwgcmVkaXJlY3QucmVzdWx0LCBmYWxzZSwge1xuICAgICAgICBwcmV2ZW50U2Nyb2xsUmVzZXRcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZWRpcmVjdCA9IGZpbmRSZWRpcmVjdChmZXRjaGVyUmVzdWx0cyk7XG4gICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAvLyBJZiB0aGlzIHJlZGlyZWN0IGNhbWUgZnJvbSBhIGZldGNoZXIgbWFrZSBzdXJlIHdlIG1hcmsgaXQgaW5cbiAgICAgIC8vIGZldGNoUmVkaXJlY3RJZHMgc28gaXQgZG9lc24ndCBnZXQgcmV2YWxpZGF0ZWQgb24gdGhlIG5leHQgc2V0IG9mXG4gICAgICAvLyBsb2FkZXIgZXhlY3V0aW9uc1xuICAgICAgZmV0Y2hSZWRpcmVjdElkcy5hZGQocmVkaXJlY3Qua2V5KTtcbiAgICAgIHJldHVybiBzdGFydFJlZGlyZWN0TmF2aWdhdGlvbihyZXZhbGlkYXRpb25SZXF1ZXN0LCByZWRpcmVjdC5yZXN1bHQsIGZhbHNlLCB7XG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFByb2Nlc3MgYW5kIGNvbW1pdCBvdXRwdXQgZnJvbSBsb2FkZXJzXG4gICAgbGV0IHtcbiAgICAgIGxvYWRlckRhdGEsXG4gICAgICBlcnJvcnNcbiAgICB9ID0gcHJvY2Vzc0xvYWRlckRhdGEoc3RhdGUsIG1hdGNoZXMsIGxvYWRlclJlc3VsdHMsIHVuZGVmaW5lZCwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMsIGZldGNoZXJSZXN1bHRzLCBhY3RpdmVEZWZlcnJlZHMpO1xuICAgIC8vIFNpbmNlIHdlIGxldCByZXZhbGlkYXRpb25zIGNvbXBsZXRlIGV2ZW4gaWYgdGhlIHN1Ym1pdHRpbmcgZmV0Y2hlciB3YXNcbiAgICAvLyBkZWxldGVkLCBvbmx5IHB1dCBpdCBiYWNrIHRvIGlkbGUgaWYgaXQgaGFzbid0IGJlZW4gZGVsZXRlZFxuICAgIGlmIChzdGF0ZS5mZXRjaGVycy5oYXMoa2V5KSkge1xuICAgICAgbGV0IGRvbmVGZXRjaGVyID0gZ2V0RG9uZUZldGNoZXIoYWN0aW9uUmVzdWx0LmRhdGEpO1xuICAgICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgZG9uZUZldGNoZXIpO1xuICAgIH1cbiAgICBhYm9ydFN0YWxlRmV0Y2hMb2Fkcyhsb2FkSWQpO1xuICAgIC8vIElmIHdlIGFyZSBjdXJyZW50bHkgaW4gYSBuYXZpZ2F0aW9uIGxvYWRpbmcgc3RhdGUgYW5kIHRoaXMgZmV0Y2hlciBpc1xuICAgIC8vIG1vcmUgcmVjZW50IHRoYW4gdGhlIG5hdmlnYXRpb24sIHdlIHdhbnQgdGhlIG5ld2VyIGRhdGEgc28gYWJvcnQgdGhlXG4gICAgLy8gbmF2aWdhdGlvbiBhbmQgY29tcGxldGUgaXQgd2l0aCB0aGUgZmV0Y2hlciBkYXRhXG4gICAgaWYgKHN0YXRlLm5hdmlnYXRpb24uc3RhdGUgPT09IFwibG9hZGluZ1wiICYmIGxvYWRJZCA+IHBlbmRpbmdOYXZpZ2F0aW9uTG9hZElkKSB7XG4gICAgICBpbnZhcmlhbnQocGVuZGluZ0FjdGlvbiwgXCJFeHBlY3RlZCBwZW5kaW5nIGFjdGlvblwiKTtcbiAgICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciAmJiBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgIGNvbXBsZXRlTmF2aWdhdGlvbihzdGF0ZS5uYXZpZ2F0aW9uLmxvY2F0aW9uLCB7XG4gICAgICAgIG1hdGNoZXMsXG4gICAgICAgIGxvYWRlckRhdGEsXG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb3RoZXJ3aXNlIGp1c3QgdXBkYXRlIHdpdGggdGhlIGZldGNoZXIgZGF0YSwgcHJlc2VydmluZyBhbnkgZXhpc3RpbmdcbiAgICAgIC8vIGxvYWRlckRhdGEgZm9yIGxvYWRlcnMgdGhhdCBkaWQgbm90IG5lZWQgdG8gcmVsb2FkLiAgV2UgaGF2ZSB0b1xuICAgICAgLy8gbWFudWFsbHkgbWVyZ2UgaGVyZSBzaW5jZSB3ZSBhcmVuJ3QgZ29pbmcgdGhyb3VnaCBjb21wbGV0ZU5hdmlnYXRpb25cbiAgICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBsb2FkZXJEYXRhOiBtZXJnZUxvYWRlckRhdGEoc3RhdGUubG9hZGVyRGF0YSwgbG9hZGVyRGF0YSwgbWF0Y2hlcywgZXJyb3JzKSxcbiAgICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgICB9KTtcbiAgICAgIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQ2FsbCB0aGUgbWF0Y2hlZCBsb2FkZXIgZm9yIGZldGNoZXIubG9hZCgpLCBoYW5kbGluZyByZWRpcmVjdHMsIGVycm9ycywgZXRjLlxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGZXRjaGVyTG9hZGVyKGtleSwgcm91dGVJZCwgcGF0aCwgbWF0Y2gsIG1hdGNoZXMsIGlzRm9nT2ZXYXIsIGZsdXNoU3luYywgcHJldmVudFNjcm9sbFJlc2V0LCBzdWJtaXNzaW9uKSB7XG4gICAgbGV0IGV4aXN0aW5nRmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChrZXkpO1xuICAgIHVwZGF0ZUZldGNoZXJTdGF0ZShrZXksIGdldExvYWRpbmdGZXRjaGVyKHN1Ym1pc3Npb24sIGV4aXN0aW5nRmV0Y2hlciA/IGV4aXN0aW5nRmV0Y2hlci5kYXRhIDogdW5kZWZpbmVkKSwge1xuICAgICAgZmx1c2hTeW5jXG4gICAgfSk7XG4gICAgbGV0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICBsZXQgZmV0Y2hSZXF1ZXN0ID0gY3JlYXRlQ2xpZW50U2lkZVJlcXVlc3QoaW5pdC5oaXN0b3J5LCBwYXRoLCBhYm9ydENvbnRyb2xsZXIuc2lnbmFsKTtcbiAgICBpZiAoaXNGb2dPZldhcikge1xuICAgICAgbGV0IGRpc2NvdmVyUmVzdWx0ID0gYXdhaXQgZGlzY292ZXJSb3V0ZXMobWF0Y2hlcywgbmV3IFVSTChmZXRjaFJlcXVlc3QudXJsKS5wYXRobmFtZSwgZmV0Y2hSZXF1ZXN0LnNpZ25hbCwga2V5KTtcbiAgICAgIGlmIChkaXNjb3ZlclJlc3VsdC50eXBlID09PSBcImFib3J0ZWRcIikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGRpc2NvdmVyUmVzdWx0LnR5cGUgPT09IFwiZXJyb3JcIikge1xuICAgICAgICBzZXRGZXRjaGVyRXJyb3Ioa2V5LCByb3V0ZUlkLCBkaXNjb3ZlclJlc3VsdC5lcnJvciwge1xuICAgICAgICAgIGZsdXNoU3luY1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmICghZGlzY292ZXJSZXN1bHQubWF0Y2hlcykge1xuICAgICAgICBzZXRGZXRjaGVyRXJyb3Ioa2V5LCByb3V0ZUlkLCBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgICAgIHBhdGhuYW1lOiBwYXRoXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgZmx1c2hTeW5jXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXRjaGVzID0gZGlzY292ZXJSZXN1bHQubWF0Y2hlcztcbiAgICAgICAgbWF0Y2ggPSBnZXRUYXJnZXRNYXRjaChtYXRjaGVzLCBwYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQ2FsbCB0aGUgbG9hZGVyIGZvciB0aGlzIGZldGNoZXIgcm91dGUgbWF0Y2hcbiAgICBmZXRjaENvbnRyb2xsZXJzLnNldChrZXksIGFib3J0Q29udHJvbGxlcik7XG4gICAgbGV0IG9yaWdpbmF0aW5nTG9hZElkID0gaW5jcmVtZW50aW5nTG9hZElkO1xuICAgIGxldCByZXN1bHRzID0gYXdhaXQgY2FsbERhdGFTdHJhdGVneShcImxvYWRlclwiLCBzdGF0ZSwgZmV0Y2hSZXF1ZXN0LCBbbWF0Y2hdLCBtYXRjaGVzLCBrZXkpO1xuICAgIGxldCByZXN1bHQgPSByZXN1bHRzW21hdGNoLnJvdXRlLmlkXTtcbiAgICAvLyBEZWZlcnJlZCBpc24ndCBzdXBwb3J0ZWQgZm9yIGZldGNoZXIgbG9hZHMsIGF3YWl0IGV2ZXJ5dGhpbmcgYW5kIHRyZWF0IGl0XG4gICAgLy8gYXMgYSBub3JtYWwgbG9hZC4gIHJlc29sdmVEZWZlcnJlZERhdGEgd2lsbCByZXR1cm4gdW5kZWZpbmVkIGlmIHRoaXNcbiAgICAvLyBmZXRjaGVyIGdldHMgYWJvcnRlZCwgc28gd2UganVzdCBsZWF2ZSByZXN1bHQgdW50b3VjaGVkIGFuZCBzaG9ydCBjaXJjdWl0XG4gICAgLy8gYmVsb3cgaWYgdGhhdCBoYXBwZW5zXG4gICAgaWYgKGlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSkge1xuICAgICAgcmVzdWx0ID0gKGF3YWl0IHJlc29sdmVEZWZlcnJlZERhdGEocmVzdWx0LCBmZXRjaFJlcXVlc3Quc2lnbmFsLCB0cnVlKSkgfHwgcmVzdWx0O1xuICAgIH1cbiAgICAvLyBXZSBjYW4gZGVsZXRlIHRoaXMgc28gbG9uZyBhcyB3ZSB3ZXJlbid0IGFib3J0ZWQgYnkgb3VyIG91ciBvd24gZmV0Y2hlclxuICAgIC8vIHJlLWxvYWQgd2hpY2ggd291bGQgaGF2ZSBwdXQgX25ld18gY29udHJvbGxlciBpcyBpbiBmZXRjaENvbnRyb2xsZXJzXG4gICAgaWYgKGZldGNoQ29udHJvbGxlcnMuZ2V0KGtleSkgPT09IGFib3J0Q29udHJvbGxlcikge1xuICAgICAgZmV0Y2hDb250cm9sbGVycy5kZWxldGUoa2V5KTtcbiAgICB9XG4gICAgaWYgKGZldGNoUmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBXZSBkb24ndCB3YW50IGVycm9ycyBidWJibGluZyB1cCBvciByZWRpcmVjdHMgZm9sbG93ZWQgZm9yIHVubW91bnRlZFxuICAgIC8vIGZldGNoZXJzLCBzbyBzaG9ydCBjaXJjdWl0IGhlcmUgaWYgaXQgd2FzIHJlbW92ZWQgZnJvbSB0aGUgVUlcbiAgICBpZiAoZGVsZXRlZEZldGNoZXJzLmhhcyhrZXkpKSB7XG4gICAgICB1cGRhdGVGZXRjaGVyU3RhdGUoa2V5LCBnZXREb25lRmV0Y2hlcih1bmRlZmluZWQpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gSWYgdGhlIGxvYWRlciB0aHJldyBhIHJlZGlyZWN0IFJlc3BvbnNlLCBzdGFydCBhIG5ldyBSRVBMQUNFIG5hdmlnYXRpb25cbiAgICBpZiAoaXNSZWRpcmVjdFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICBpZiAocGVuZGluZ05hdmlnYXRpb25Mb2FkSWQgPiBvcmlnaW5hdGluZ0xvYWRJZCkge1xuICAgICAgICAvLyBBIG5ldyBuYXZpZ2F0aW9uIHdhcyBraWNrZWQgb2ZmIGFmdGVyIG91ciBsb2FkZXIgc3RhcnRlZCwgc28gdGhhdFxuICAgICAgICAvLyBzaG91bGQgdGFrZSBwcmVjZWRlbmNlIG92ZXIgdGhpcyByZWRpcmVjdCBuYXZpZ2F0aW9uXG4gICAgICAgIHVwZGF0ZUZldGNoZXJTdGF0ZShrZXksIGdldERvbmVGZXRjaGVyKHVuZGVmaW5lZCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmZXRjaFJlZGlyZWN0SWRzLmFkZChrZXkpO1xuICAgICAgICBhd2FpdCBzdGFydFJlZGlyZWN0TmF2aWdhdGlvbihmZXRjaFJlcXVlc3QsIHJlc3VsdCwgZmFsc2UsIHtcbiAgICAgICAgICBwcmV2ZW50U2Nyb2xsUmVzZXRcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUHJvY2VzcyBhbnkgbm9uLXJlZGlyZWN0IGVycm9ycyB0aHJvd25cbiAgICBpZiAoaXNFcnJvclJlc3VsdChyZXN1bHQpKSB7XG4gICAgICBzZXRGZXRjaGVyRXJyb3Ioa2V5LCByb3V0ZUlkLCByZXN1bHQuZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoIWlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSwgXCJVbmhhbmRsZWQgZmV0Y2hlciBkZWZlcnJlZCBkYXRhXCIpO1xuICAgIC8vIFB1dCB0aGUgZmV0Y2hlciBiYWNrIGludG8gYW4gaWRsZSBzdGF0ZVxuICAgIHVwZGF0ZUZldGNoZXJTdGF0ZShrZXksIGdldERvbmVGZXRjaGVyKHJlc3VsdC5kYXRhKSk7XG4gIH1cbiAgLyoqXG4gICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gaGFuZGxlIHJlZGlyZWN0cyByZXR1cm5lZCBmcm9tIGFuIGFjdGlvbiBvciBsb2FkZXIuXG4gICAqIE5vcm1hbGx5LCBhIHJlZGlyZWN0IFwicmVwbGFjZXNcIiB0aGUgbmF2aWdhdGlvbiB0aGF0IHRyaWdnZXJlZCBpdC4gIFNvLCBmb3JcbiAgICogZXhhbXBsZTpcbiAgICpcbiAgICogIC0gdXNlciBpcyBvbiAvYVxuICAgKiAgLSB1c2VyIGNsaWNrcyBhIGxpbmsgdG8gL2JcbiAgICogIC0gbG9hZGVyIGZvciAvYiByZWRpcmVjdHMgdG8gL2NcbiAgICpcbiAgICogSW4gYSBub24tSlMgYXBwIHRoZSBicm93c2VyIHdvdWxkIHRyYWNrIHRoZSBpbi1mbGlnaHQgbmF2aWdhdGlvbiB0byAvYiBhbmRcbiAgICogdGhlbiByZXBsYWNlIGl0IHdpdGggL2Mgd2hlbiBpdCBlbmNvdW50ZXJlZCB0aGUgcmVkaXJlY3QgcmVzcG9uc2UuICBJblxuICAgKiB0aGUgZW5kIGl0IHdvdWxkIG9ubHkgZXZlciB1cGRhdGUgdGhlIFVSTCBiYXIgd2l0aCAvYy5cbiAgICpcbiAgICogSW4gY2xpZW50LXNpZGUgcm91dGluZyB1c2luZyBwdXNoU3RhdGUvcmVwbGFjZVN0YXRlLCB3ZSBhaW0gdG8gZW11bGF0ZVxuICAgKiB0aGlzIGJlaGF2aW9yIGFuZCB3ZSBhbHNvIGRvIG5vdCB1cGRhdGUgaGlzdG9yeSB1bnRpbCB0aGUgZW5kIG9mIHRoZVxuICAgKiBuYXZpZ2F0aW9uIChpbmNsdWRpbmcgcHJvY2Vzc2VkIHJlZGlyZWN0cykuICBUaGlzIG1lYW5zIHRoYXQgd2UgbmV2ZXJcbiAgICogYWN0dWFsbHkgdG91Y2ggaGlzdG9yeSB1bnRpbCB3ZSd2ZSBwcm9jZXNzZWQgcmVkaXJlY3RzLCBzbyB3ZSBqdXN0IHVzZVxuICAgKiB0aGUgaGlzdG9yeSBhY3Rpb24gZnJvbSB0aGUgb3JpZ2luYWwgbmF2aWdhdGlvbiAoUFVTSCBvciBSRVBMQUNFKS5cbiAgICovXG4gIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKHJlcXVlc3QsIHJlZGlyZWN0LCBpc05hdmlnYXRpb24sIF90ZW1wMikge1xuICAgIGxldCB7XG4gICAgICBzdWJtaXNzaW9uLFxuICAgICAgZmV0Y2hlclN1Ym1pc3Npb24sXG4gICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICByZXBsYWNlXG4gICAgfSA9IF90ZW1wMiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDI7XG4gICAgaWYgKHJlZGlyZWN0LnJlc3BvbnNlLmhlYWRlcnMuaGFzKFwiWC1SZW1peC1SZXZhbGlkYXRlXCIpKSB7XG4gICAgICBpc1JldmFsaWRhdGlvblJlcXVpcmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgbGV0IGxvY2F0aW9uID0gcmVkaXJlY3QucmVzcG9uc2UuaGVhZGVycy5nZXQoXCJMb2NhdGlvblwiKTtcbiAgICBpbnZhcmlhbnQobG9jYXRpb24sIFwiRXhwZWN0ZWQgYSBMb2NhdGlvbiBoZWFkZXIgb24gdGhlIHJlZGlyZWN0IFJlc3BvbnNlXCIpO1xuICAgIGxvY2F0aW9uID0gbm9ybWFsaXplUmVkaXJlY3RMb2NhdGlvbihsb2NhdGlvbiwgbmV3IFVSTChyZXF1ZXN0LnVybCksIGJhc2VuYW1lKTtcbiAgICBsZXQgcmVkaXJlY3RMb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHN0YXRlLmxvY2F0aW9uLCBsb2NhdGlvbiwge1xuICAgICAgX2lzUmVkaXJlY3Q6IHRydWVcbiAgICB9KTtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBsZXQgaXNEb2N1bWVudFJlbG9hZCA9IGZhbHNlO1xuICAgICAgaWYgKHJlZGlyZWN0LnJlc3BvbnNlLmhlYWRlcnMuaGFzKFwiWC1SZW1peC1SZWxvYWQtRG9jdW1lbnRcIikpIHtcbiAgICAgICAgLy8gSGFyZCByZWxvYWQgaWYgdGhlIHJlc3BvbnNlIGNvbnRhaW5lZCBYLVJlbWl4LVJlbG9hZC1Eb2N1bWVudFxuICAgICAgICBpc0RvY3VtZW50UmVsb2FkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoQUJTT0xVVEVfVVJMX1JFR0VYLnRlc3QobG9jYXRpb24pKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IGluaXQuaGlzdG9yeS5jcmVhdGVVUkwobG9jYXRpb24pO1xuICAgICAgICBpc0RvY3VtZW50UmVsb2FkID1cbiAgICAgICAgLy8gSGFyZCByZWxvYWQgaWYgaXQncyBhbiBhYnNvbHV0ZSBVUkwgdG8gYSBuZXcgb3JpZ2luXG4gICAgICAgIHVybC5vcmlnaW4gIT09IHJvdXRlcldpbmRvdy5sb2NhdGlvbi5vcmlnaW4gfHxcbiAgICAgICAgLy8gSGFyZCByZWxvYWQgaWYgaXQncyBhbiBhYnNvbHV0ZSBVUkwgdGhhdCBkb2VzIG5vdCBtYXRjaCBvdXIgYmFzZW5hbWVcbiAgICAgICAgc3RyaXBCYXNlbmFtZSh1cmwucGF0aG5hbWUsIGJhc2VuYW1lKSA9PSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKGlzRG9jdW1lbnRSZWxvYWQpIHtcbiAgICAgICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgICAgICByb3V0ZXJXaW5kb3cubG9jYXRpb24ucmVwbGFjZShsb2NhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm91dGVyV2luZG93LmxvY2F0aW9uLmFzc2lnbihsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBUaGVyZSdzIG5vIG5lZWQgdG8gYWJvcnQgb24gcmVkaXJlY3RzLCBzaW5jZSB3ZSBkb24ndCBkZXRlY3QgdGhlXG4gICAgLy8gcmVkaXJlY3QgdW50aWwgdGhlIGFjdGlvbi9sb2FkZXJzIGhhdmUgc2V0dGxlZFxuICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciA9IG51bGw7XG4gICAgbGV0IHJlZGlyZWN0SGlzdG9yeUFjdGlvbiA9IHJlcGxhY2UgPT09IHRydWUgfHwgcmVkaXJlY3QucmVzcG9uc2UuaGVhZGVycy5oYXMoXCJYLVJlbWl4LVJlcGxhY2VcIikgPyBBY3Rpb24uUmVwbGFjZSA6IEFjdGlvbi5QdXNoO1xuICAgIC8vIFVzZSB0aGUgaW5jb21pbmcgc3VibWlzc2lvbiBpZiBwcm92aWRlZCwgZmFsbGJhY2sgb24gdGhlIGFjdGl2ZSBvbmUgaW5cbiAgICAvLyBzdGF0ZS5uYXZpZ2F0aW9uXG4gICAgbGV0IHtcbiAgICAgIGZvcm1NZXRob2QsXG4gICAgICBmb3JtQWN0aW9uLFxuICAgICAgZm9ybUVuY1R5cGVcbiAgICB9ID0gc3RhdGUubmF2aWdhdGlvbjtcbiAgICBpZiAoIXN1Ym1pc3Npb24gJiYgIWZldGNoZXJTdWJtaXNzaW9uICYmIGZvcm1NZXRob2QgJiYgZm9ybUFjdGlvbiAmJiBmb3JtRW5jVHlwZSkge1xuICAgICAgc3VibWlzc2lvbiA9IGdldFN1Ym1pc3Npb25Gcm9tTmF2aWdhdGlvbihzdGF0ZS5uYXZpZ2F0aW9uKTtcbiAgICB9XG4gICAgLy8gSWYgdGhpcyB3YXMgYSAzMDcvMzA4IHN1Ym1pc3Npb24gd2Ugd2FudCB0byBwcmVzZXJ2ZSB0aGUgSFRUUCBtZXRob2QgYW5kXG4gICAgLy8gcmUtc3VibWl0IHRoZSBHRVQvUE9TVC9QVVQvUEFUQ0gvREVMRVRFIGFzIGEgc3VibWlzc2lvbiBuYXZpZ2F0aW9uIHRvIHRoZVxuICAgIC8vIHJlZGlyZWN0ZWQgbG9jYXRpb25cbiAgICBsZXQgYWN0aXZlU3VibWlzc2lvbiA9IHN1Ym1pc3Npb24gfHwgZmV0Y2hlclN1Ym1pc3Npb247XG4gICAgaWYgKHJlZGlyZWN0UHJlc2VydmVNZXRob2RTdGF0dXNDb2Rlcy5oYXMocmVkaXJlY3QucmVzcG9uc2Uuc3RhdHVzKSAmJiBhY3RpdmVTdWJtaXNzaW9uICYmIGlzTXV0YXRpb25NZXRob2QoYWN0aXZlU3VibWlzc2lvbi5mb3JtTWV0aG9kKSkge1xuICAgICAgYXdhaXQgc3RhcnROYXZpZ2F0aW9uKHJlZGlyZWN0SGlzdG9yeUFjdGlvbiwgcmVkaXJlY3RMb2NhdGlvbiwge1xuICAgICAgICBzdWJtaXNzaW9uOiBfZXh0ZW5kcyh7fSwgYWN0aXZlU3VibWlzc2lvbiwge1xuICAgICAgICAgIGZvcm1BY3Rpb246IGxvY2F0aW9uXG4gICAgICAgIH0pLFxuICAgICAgICAvLyBQcmVzZXJ2ZSB0aGVzZSBmbGFncyBhY3Jvc3MgcmVkaXJlY3RzXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogcHJldmVudFNjcm9sbFJlc2V0IHx8IHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICAgIGVuYWJsZVZpZXdUcmFuc2l0aW9uOiBpc05hdmlnYXRpb24gPyBwZW5kaW5nVmlld1RyYW5zaXRpb25FbmFibGVkIDogdW5kZWZpbmVkXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgd2UgaGF2ZSBhIG5hdmlnYXRpb24gc3VibWlzc2lvbiwgd2Ugd2lsbCBwcmVzZXJ2ZSBpdCB0aHJvdWdoIHRoZVxuICAgICAgLy8gcmVkaXJlY3QgbmF2aWdhdGlvblxuICAgICAgbGV0IG92ZXJyaWRlTmF2aWdhdGlvbiA9IGdldExvYWRpbmdOYXZpZ2F0aW9uKHJlZGlyZWN0TG9jYXRpb24sIHN1Ym1pc3Npb24pO1xuICAgICAgYXdhaXQgc3RhcnROYXZpZ2F0aW9uKHJlZGlyZWN0SGlzdG9yeUFjdGlvbiwgcmVkaXJlY3RMb2NhdGlvbiwge1xuICAgICAgICBvdmVycmlkZU5hdmlnYXRpb24sXG4gICAgICAgIC8vIFNlbmQgZmV0Y2hlciBzdWJtaXNzaW9ucyB0aHJvdWdoIGZvciBzaG91bGRSZXZhbGlkYXRlXG4gICAgICAgIGZldGNoZXJTdWJtaXNzaW9uLFxuICAgICAgICAvLyBQcmVzZXJ2ZSB0aGVzZSBmbGFncyBhY3Jvc3MgcmVkaXJlY3RzXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogcHJldmVudFNjcm9sbFJlc2V0IHx8IHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICAgIGVuYWJsZVZpZXdUcmFuc2l0aW9uOiBpc05hdmlnYXRpb24gPyBwZW5kaW5nVmlld1RyYW5zaXRpb25FbmFibGVkIDogdW5kZWZpbmVkXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLy8gVXRpbGl0eSB3cmFwcGVyIGZvciBjYWxsaW5nIGRhdGFTdHJhdGVneSBjbGllbnQtc2lkZSB3aXRob3V0IGhhdmluZyB0b1xuICAvLyBwYXNzIGFyb3VuZCB0aGUgbWFuaWZlc3QsIG1hcFJvdXRlUHJvcGVydGllcywgZXRjLlxuICBhc3luYyBmdW5jdGlvbiBjYWxsRGF0YVN0cmF0ZWd5KHR5cGUsIHN0YXRlLCByZXF1ZXN0LCBtYXRjaGVzVG9Mb2FkLCBtYXRjaGVzLCBmZXRjaGVyS2V5KSB7XG4gICAgbGV0IHJlc3VsdHM7XG4gICAgbGV0IGRhdGFSZXN1bHRzID0ge307XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdHMgPSBhd2FpdCBjYWxsRGF0YVN0cmF0ZWd5SW1wbChkYXRhU3RyYXRlZ3lJbXBsLCB0eXBlLCBzdGF0ZSwgcmVxdWVzdCwgbWF0Y2hlc1RvTG9hZCwgbWF0Y2hlcywgZmV0Y2hlcktleSwgbWFuaWZlc3QsIG1hcFJvdXRlUHJvcGVydGllcyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gSWYgdGhlIG91dGVyIGRhdGFTdHJhdGVneSBtZXRob2QgdGhyb3dzLCBqdXN0IHJldHVybiB0aGUgZXJyb3IgZm9yIGFsbFxuICAgICAgLy8gbWF0Y2hlcyAtIGFuZCBpdCdsbCBuYXR1cmFsbHkgYnViYmxlIHRvIHRoZSByb290XG4gICAgICBtYXRjaGVzVG9Mb2FkLmZvckVhY2gobSA9PiB7XG4gICAgICAgIGRhdGFSZXN1bHRzW20ucm91dGUuaWRdID0ge1xuICAgICAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZXJyb3IsXG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRhdGFSZXN1bHRzO1xuICAgIH1cbiAgICBmb3IgKGxldCBbcm91dGVJZCwgcmVzdWx0XSBvZiBPYmplY3QuZW50cmllcyhyZXN1bHRzKSkge1xuICAgICAgaWYgKGlzUmVkaXJlY3REYXRhU3RyYXRlZ3lSZXN1bHRSZXN1bHQocmVzdWx0KSkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXN1bHQucmVzdWx0O1xuICAgICAgICBkYXRhUmVzdWx0c1tyb3V0ZUlkXSA9IHtcbiAgICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLnJlZGlyZWN0LFxuICAgICAgICAgIHJlc3BvbnNlOiBub3JtYWxpemVSZWxhdGl2ZVJvdXRpbmdSZWRpcmVjdFJlc3BvbnNlKHJlc3BvbnNlLCByZXF1ZXN0LCByb3V0ZUlkLCBtYXRjaGVzLCBiYXNlbmFtZSwgZnV0dXJlLnY3X3JlbGF0aXZlU3BsYXRQYXRoKVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YVJlc3VsdHNbcm91dGVJZF0gPSBhd2FpdCBjb252ZXJ0RGF0YVN0cmF0ZWd5UmVzdWx0VG9EYXRhUmVzdWx0KHJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhUmVzdWx0cztcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBjYWxsTG9hZGVyc0FuZE1heWJlUmVzb2x2ZURhdGEoc3RhdGUsIG1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIGZldGNoZXJzVG9Mb2FkLCByZXF1ZXN0KSB7XG4gICAgbGV0IGN1cnJlbnRNYXRjaGVzID0gc3RhdGUubWF0Y2hlcztcbiAgICAvLyBLaWNrIG9mZiBsb2FkZXJzIGFuZCBmZXRjaGVycyBpbiBwYXJhbGxlbFxuICAgIGxldCBsb2FkZXJSZXN1bHRzUHJvbWlzZSA9IGNhbGxEYXRhU3RyYXRlZ3koXCJsb2FkZXJcIiwgc3RhdGUsIHJlcXVlc3QsIG1hdGNoZXNUb0xvYWQsIG1hdGNoZXMsIG51bGwpO1xuICAgIGxldCBmZXRjaGVyUmVzdWx0c1Byb21pc2UgPSBQcm9taXNlLmFsbChmZXRjaGVyc1RvTG9hZC5tYXAoYXN5bmMgZiA9PiB7XG4gICAgICBpZiAoZi5tYXRjaGVzICYmIGYubWF0Y2ggJiYgZi5jb250cm9sbGVyKSB7XG4gICAgICAgIGxldCByZXN1bHRzID0gYXdhaXQgY2FsbERhdGFTdHJhdGVneShcImxvYWRlclwiLCBzdGF0ZSwgY3JlYXRlQ2xpZW50U2lkZVJlcXVlc3QoaW5pdC5oaXN0b3J5LCBmLnBhdGgsIGYuY29udHJvbGxlci5zaWduYWwpLCBbZi5tYXRjaF0sIGYubWF0Y2hlcywgZi5rZXkpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1tmLm1hdGNoLnJvdXRlLmlkXTtcbiAgICAgICAgLy8gRmV0Y2hlciByZXN1bHRzIGFyZSBrZXllZCBieSBmZXRjaGVyIGtleSBmcm9tIGhlcmUgb24gb3V0LCBub3Qgcm91dGVJZFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtmLmtleV06IHJlc3VsdFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgW2Yua2V5XToge1xuICAgICAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5lcnJvcixcbiAgICAgICAgICAgIGVycm9yOiBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgICAgICAgICBwYXRobmFtZTogZi5wYXRoXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkpO1xuICAgIGxldCBsb2FkZXJSZXN1bHRzID0gYXdhaXQgbG9hZGVyUmVzdWx0c1Byb21pc2U7XG4gICAgbGV0IGZldGNoZXJSZXN1bHRzID0gKGF3YWl0IGZldGNoZXJSZXN1bHRzUHJvbWlzZSkucmVkdWNlKChhY2MsIHIpID0+IE9iamVjdC5hc3NpZ24oYWNjLCByKSwge30pO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFtyZXNvbHZlTmF2aWdhdGlvbkRlZmVycmVkUmVzdWx0cyhtYXRjaGVzLCBsb2FkZXJSZXN1bHRzLCByZXF1ZXN0LnNpZ25hbCwgY3VycmVudE1hdGNoZXMsIHN0YXRlLmxvYWRlckRhdGEpLCByZXNvbHZlRmV0Y2hlckRlZmVycmVkUmVzdWx0cyhtYXRjaGVzLCBmZXRjaGVyUmVzdWx0cywgZmV0Y2hlcnNUb0xvYWQpXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvYWRlclJlc3VsdHMsXG4gICAgICBmZXRjaGVyUmVzdWx0c1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gaW50ZXJydXB0QWN0aXZlTG9hZHMoKSB7XG4gICAgLy8gRXZlcnkgaW50ZXJydXB0aW9uIHRyaWdnZXJzIGEgcmV2YWxpZGF0aW9uXG4gICAgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCA9IHRydWU7XG4gICAgLy8gQ2FuY2VsIHBlbmRpbmcgcm91dGUtbGV2ZWwgZGVmZXJyZWRzIGFuZCBtYXJrIGNhbmNlbGxlZCByb3V0ZXMgZm9yXG4gICAgLy8gcmV2YWxpZGF0aW9uXG4gICAgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMucHVzaCguLi5jYW5jZWxBY3RpdmVEZWZlcnJlZHMoKSk7XG4gICAgLy8gQWJvcnQgaW4tZmxpZ2h0IGZldGNoZXIgbG9hZHNcbiAgICBmZXRjaExvYWRNYXRjaGVzLmZvckVhY2goKF8sIGtleSkgPT4ge1xuICAgICAgaWYgKGZldGNoQ29udHJvbGxlcnMuaGFzKGtleSkpIHtcbiAgICAgICAgY2FuY2VsbGVkRmV0Y2hlckxvYWRzLmFkZChrZXkpO1xuICAgICAgfVxuICAgICAgYWJvcnRGZXRjaGVyKGtleSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlRmV0Y2hlclN0YXRlKGtleSwgZmV0Y2hlciwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgZmV0Y2hlcik7XG4gICAgdXBkYXRlU3RhdGUoe1xuICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgfSwge1xuICAgICAgZmx1c2hTeW5jOiAob3B0cyAmJiBvcHRzLmZsdXNoU3luYykgPT09IHRydWVcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBzZXRGZXRjaGVyRXJyb3Ioa2V5LCByb3V0ZUlkLCBlcnJvciwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgbGV0IGJvdW5kYXJ5TWF0Y2ggPSBmaW5kTmVhcmVzdEJvdW5kYXJ5KHN0YXRlLm1hdGNoZXMsIHJvdXRlSWQpO1xuICAgIGRlbGV0ZUZldGNoZXIoa2V5KTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdOiBlcnJvclxuICAgICAgfSxcbiAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgIH0sIHtcbiAgICAgIGZsdXNoU3luYzogKG9wdHMgJiYgb3B0cy5mbHVzaFN5bmMpID09PSB0cnVlXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0RmV0Y2hlcihrZXkpIHtcbiAgICBhY3RpdmVGZXRjaGVycy5zZXQoa2V5LCAoYWN0aXZlRmV0Y2hlcnMuZ2V0KGtleSkgfHwgMCkgKyAxKTtcbiAgICAvLyBJZiB0aGlzIGZldGNoZXIgd2FzIHByZXZpb3VzbHkgbWFya2VkIGZvciBkZWxldGlvbiwgdW5tYXJrIGl0IHNpbmNlIHdlXG4gICAgLy8gaGF2ZSBhIG5ldyBpbnN0YW5jZVxuICAgIGlmIChkZWxldGVkRmV0Y2hlcnMuaGFzKGtleSkpIHtcbiAgICAgIGRlbGV0ZWRGZXRjaGVycy5kZWxldGUoa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlLmZldGNoZXJzLmdldChrZXkpIHx8IElETEVfRkVUQ0hFUjtcbiAgfVxuICBmdW5jdGlvbiBkZWxldGVGZXRjaGVyKGtleSkge1xuICAgIGxldCBmZXRjaGVyID0gc3RhdGUuZmV0Y2hlcnMuZ2V0KGtleSk7XG4gICAgLy8gRG9uJ3QgYWJvcnQgdGhlIGNvbnRyb2xsZXIgaWYgdGhpcyBpcyBhIGRlbGV0aW9uIG9mIGEgZmV0Y2hlci5zdWJtaXQoKVxuICAgIC8vIGluIGl0J3MgbG9hZGluZyBwaGFzZSBzaW5jZSAtIHdlIGRvbid0IHdhbnQgdG8gYWJvcnQgdGhlIGNvcnJlc3BvbmRpbmdcbiAgICAvLyByZXZhbGlkYXRpb24gYW5kIHdhbnQgdGhlbSB0byBjb21wbGV0ZSBhbmQgbGFuZFxuICAgIGlmIChmZXRjaENvbnRyb2xsZXJzLmhhcyhrZXkpICYmICEoZmV0Y2hlciAmJiBmZXRjaGVyLnN0YXRlID09PSBcImxvYWRpbmdcIiAmJiBmZXRjaFJlbG9hZElkcy5oYXMoa2V5KSkpIHtcbiAgICAgIGFib3J0RmV0Y2hlcihrZXkpO1xuICAgIH1cbiAgICBmZXRjaExvYWRNYXRjaGVzLmRlbGV0ZShrZXkpO1xuICAgIGZldGNoUmVsb2FkSWRzLmRlbGV0ZShrZXkpO1xuICAgIGZldGNoUmVkaXJlY3RJZHMuZGVsZXRlKGtleSk7XG4gICAgLy8gSWYgd2Ugb3B0ZWQgaW50byB0aGUgZmxhZyB3ZSBjYW4gY2xlYXIgdGhpcyBub3cgc2luY2Ugd2UncmUgY2FsbGluZ1xuICAgIC8vIGRlbGV0ZUZldGNoZXIoKSBhdCB0aGUgZW5kIG9mIHVwZGF0ZVN0YXRlKCkgYW5kIHdlJ3ZlIGFscmVhZHkgaGFuZGVkIHRoZVxuICAgIC8vIGRlbGV0ZWQgZmV0Y2hlciBrZXlzIG9mZiB0byB0aGUgZGF0YSBsYXllci5cbiAgICAvLyBJZiBub3QsIHdlJ3JlIGVhZ2VybHkgY2FsbGluZyBkZWxldGVGZXRjaGVyKCkgYW5kIHdlIG5lZWQgdG8ga2VlcCB0aGlzXG4gICAgLy8gU2V0IHBvcHVsYXRlZCB1bnRpbCB0aGUgbmV4dCB1cGRhdGVTdGF0ZSBjYWxsLCBhbmQgd2UnbGwgY2xlYXJcbiAgICAvLyBgZGVsZXRlZEZldGNoZXJzYCB0aGVuXG4gICAgaWYgKGZ1dHVyZS52N19mZXRjaGVyUGVyc2lzdCkge1xuICAgICAgZGVsZXRlZEZldGNoZXJzLmRlbGV0ZShrZXkpO1xuICAgIH1cbiAgICBjYW5jZWxsZWRGZXRjaGVyTG9hZHMuZGVsZXRlKGtleSk7XG4gICAgc3RhdGUuZmV0Y2hlcnMuZGVsZXRlKGtleSk7XG4gIH1cbiAgZnVuY3Rpb24gZGVsZXRlRmV0Y2hlckFuZFVwZGF0ZVN0YXRlKGtleSkge1xuICAgIGxldCBjb3VudCA9IChhY3RpdmVGZXRjaGVycy5nZXQoa2V5KSB8fCAwKSAtIDE7XG4gICAgaWYgKGNvdW50IDw9IDApIHtcbiAgICAgIGFjdGl2ZUZldGNoZXJzLmRlbGV0ZShrZXkpO1xuICAgICAgZGVsZXRlZEZldGNoZXJzLmFkZChrZXkpO1xuICAgICAgaWYgKCFmdXR1cmUudjdfZmV0Y2hlclBlcnNpc3QpIHtcbiAgICAgICAgZGVsZXRlRmV0Y2hlcihrZXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmVGZXRjaGVycy5zZXQoa2V5LCBjb3VudCk7XG4gICAgfVxuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGFib3J0RmV0Y2hlcihrZXkpIHtcbiAgICBsZXQgY29udHJvbGxlciA9IGZldGNoQ29udHJvbGxlcnMuZ2V0KGtleSk7XG4gICAgaWYgKGNvbnRyb2xsZXIpIHtcbiAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgIGZldGNoQ29udHJvbGxlcnMuZGVsZXRlKGtleSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1hcmtGZXRjaGVyc0RvbmUoa2V5cykge1xuICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XG4gICAgICBsZXQgZmV0Y2hlciA9IGdldEZldGNoZXIoa2V5KTtcbiAgICAgIGxldCBkb25lRmV0Y2hlciA9IGdldERvbmVGZXRjaGVyKGZldGNoZXIuZGF0YSk7XG4gICAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBkb25lRmV0Y2hlcik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1hcmtGZXRjaFJlZGlyZWN0c0RvbmUoKSB7XG4gICAgbGV0IGRvbmVLZXlzID0gW107XG4gICAgbGV0IHVwZGF0ZWRGZXRjaGVycyA9IGZhbHNlO1xuICAgIGZvciAobGV0IGtleSBvZiBmZXRjaFJlZGlyZWN0SWRzKSB7XG4gICAgICBsZXQgZmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChrZXkpO1xuICAgICAgaW52YXJpYW50KGZldGNoZXIsIFwiRXhwZWN0ZWQgZmV0Y2hlcjogXCIgKyBrZXkpO1xuICAgICAgaWYgKGZldGNoZXIuc3RhdGUgPT09IFwibG9hZGluZ1wiKSB7XG4gICAgICAgIGZldGNoUmVkaXJlY3RJZHMuZGVsZXRlKGtleSk7XG4gICAgICAgIGRvbmVLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgdXBkYXRlZEZldGNoZXJzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgbWFya0ZldGNoZXJzRG9uZShkb25lS2V5cyk7XG4gICAgcmV0dXJuIHVwZGF0ZWRGZXRjaGVycztcbiAgfVxuICBmdW5jdGlvbiBhYm9ydFN0YWxlRmV0Y2hMb2FkcyhsYW5kZWRJZCkge1xuICAgIGxldCB5ZWV0ZWRLZXlzID0gW107XG4gICAgZm9yIChsZXQgW2tleSwgaWRdIG9mIGZldGNoUmVsb2FkSWRzKSB7XG4gICAgICBpZiAoaWQgPCBsYW5kZWRJZCkge1xuICAgICAgICBsZXQgZmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChrZXkpO1xuICAgICAgICBpbnZhcmlhbnQoZmV0Y2hlciwgXCJFeHBlY3RlZCBmZXRjaGVyOiBcIiArIGtleSk7XG4gICAgICAgIGlmIChmZXRjaGVyLnN0YXRlID09PSBcImxvYWRpbmdcIikge1xuICAgICAgICAgIGFib3J0RmV0Y2hlcihrZXkpO1xuICAgICAgICAgIGZldGNoUmVsb2FkSWRzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgIHllZXRlZEtleXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG1hcmtGZXRjaGVyc0RvbmUoeWVldGVkS2V5cyk7XG4gICAgcmV0dXJuIHllZXRlZEtleXMubGVuZ3RoID4gMDtcbiAgfVxuICBmdW5jdGlvbiBnZXRCbG9ja2VyKGtleSwgZm4pIHtcbiAgICBsZXQgYmxvY2tlciA9IHN0YXRlLmJsb2NrZXJzLmdldChrZXkpIHx8IElETEVfQkxPQ0tFUjtcbiAgICBpZiAoYmxvY2tlckZ1bmN0aW9ucy5nZXQoa2V5KSAhPT0gZm4pIHtcbiAgICAgIGJsb2NrZXJGdW5jdGlvbnMuc2V0KGtleSwgZm4pO1xuICAgIH1cbiAgICByZXR1cm4gYmxvY2tlcjtcbiAgfVxuICBmdW5jdGlvbiBkZWxldGVCbG9ja2VyKGtleSkge1xuICAgIHN0YXRlLmJsb2NrZXJzLmRlbGV0ZShrZXkpO1xuICAgIGJsb2NrZXJGdW5jdGlvbnMuZGVsZXRlKGtleSk7XG4gIH1cbiAgLy8gVXRpbGl0eSBmdW5jdGlvbiB0byB1cGRhdGUgYmxvY2tlcnMsIGVuc3VyaW5nIHZhbGlkIHN0YXRlIHRyYW5zaXRpb25zXG4gIGZ1bmN0aW9uIHVwZGF0ZUJsb2NrZXIoa2V5LCBuZXdCbG9ja2VyKSB7XG4gICAgbGV0IGJsb2NrZXIgPSBzdGF0ZS5ibG9ja2Vycy5nZXQoa2V5KSB8fCBJRExFX0JMT0NLRVI7XG4gICAgLy8gUG9vciBtYW5zIHN0YXRlIG1hY2hpbmUgOilcbiAgICAvLyBodHRwczovL21lcm1haWQubGl2ZS9lZGl0I3Bha286ZU5xVmtjOU93ekFNeGw4bDhubmpBWXJFdERJT0hFQklnd3ZLSlRSZUd5M19sRHBJcU8yN2s2YXdNRzBYY3JMbG56ODdud2RvbkVTb2dLWFhCdUU3OXJxNzVYWk8zLXlIZHMwUkpWdXY3MFlyUGxVckNFZTJIZnJPUlMzcnVicVpmdWh0cGc1Qzl3azV0WjRWS2NSVXE4OHE5WjhSUzAtNDhjRTFpSEprTDB1Z2JIdUZMdXM5TDZzcFp5OG5YOU1QMkNOZG9tVmFwb3NxdTNmR2F5VDhUOC1qSlF3aGVwb19VdHBnQlFhREVVb20wNGRaaEFOMWFKQkRsVUtKQnhFMWNlQjJTbWowTWxuLUlCVzVBRlUyZHdVaWt0dF8yUWFxMmRCZmFLZEV1cDg1VVY3WWQtZEtqbG5rYWJsMlB2cjBEVGtUcmVNXG4gICAgaW52YXJpYW50KGJsb2NrZXIuc3RhdGUgPT09IFwidW5ibG9ja2VkXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgfHwgYmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgfHwgYmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJwcm9jZWVkaW5nXCIgfHwgYmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJ1bmJsb2NrZWRcIiB8fCBibG9ja2VyLnN0YXRlID09PSBcInByb2NlZWRpbmdcIiAmJiBuZXdCbG9ja2VyLnN0YXRlID09PSBcInVuYmxvY2tlZFwiLCBcIkludmFsaWQgYmxvY2tlciBzdGF0ZSB0cmFuc2l0aW9uOiBcIiArIGJsb2NrZXIuc3RhdGUgKyBcIiAtPiBcIiArIG5ld0Jsb2NrZXIuc3RhdGUpO1xuICAgIGxldCBibG9ja2VycyA9IG5ldyBNYXAoc3RhdGUuYmxvY2tlcnMpO1xuICAgIGJsb2NrZXJzLnNldChrZXksIG5ld0Jsb2NrZXIpO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIGJsb2NrZXJzXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gc2hvdWxkQmxvY2tOYXZpZ2F0aW9uKF9yZWYyKSB7XG4gICAgbGV0IHtcbiAgICAgIGN1cnJlbnRMb2NhdGlvbixcbiAgICAgIG5leHRMb2NhdGlvbixcbiAgICAgIGhpc3RvcnlBY3Rpb25cbiAgICB9ID0gX3JlZjI7XG4gICAgaWYgKGJsb2NrZXJGdW5jdGlvbnMuc2l6ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBXZSBvbnkgc3VwcG9ydCBhIHNpbmdsZSBhY3RpdmUgYmxvY2tlciBhdCB0aGUgbW9tZW50IHNpbmNlIHdlIGRvbid0IGhhdmVcbiAgICAvLyBhbnkgY29tcGVsbGluZyB1c2UgY2FzZXMgZm9yIG11bHRpLWJsb2NrZXIgeWV0XG4gICAgaWYgKGJsb2NrZXJGdW5jdGlvbnMuc2l6ZSA+IDEpIHtcbiAgICAgIHdhcm5pbmcoZmFsc2UsIFwiQSByb3V0ZXIgb25seSBzdXBwb3J0cyBvbmUgYmxvY2tlciBhdCBhIHRpbWVcIik7XG4gICAgfVxuICAgIGxldCBlbnRyaWVzID0gQXJyYXkuZnJvbShibG9ja2VyRnVuY3Rpb25zLmVudHJpZXMoKSk7XG4gICAgbGV0IFtibG9ja2VyS2V5LCBibG9ja2VyRnVuY3Rpb25dID0gZW50cmllc1tlbnRyaWVzLmxlbmd0aCAtIDFdO1xuICAgIGxldCBibG9ja2VyID0gc3RhdGUuYmxvY2tlcnMuZ2V0KGJsb2NrZXJLZXkpO1xuICAgIGlmIChibG9ja2VyICYmIGJsb2NrZXIuc3RhdGUgPT09IFwicHJvY2VlZGluZ1wiKSB7XG4gICAgICAvLyBJZiB0aGUgYmxvY2tlciBpcyBjdXJyZW50bHkgcHJvY2VlZGluZywgd2UgZG9uJ3QgbmVlZCB0byByZS1jaGVja1xuICAgICAgLy8gaXQgYW5kIGNhbiBsZXQgdGhpcyBuYXZpZ2F0aW9uIGNvbnRpbnVlXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEF0IHRoaXMgcG9pbnQsIHdlIGtub3cgd2UncmUgdW5ibG9ja2VkL2Jsb2NrZWQgc28gd2UgbmVlZCB0byBjaGVjayB0aGVcbiAgICAvLyB1c2VyLXByb3ZpZGVkIGJsb2NrZXIgZnVuY3Rpb25cbiAgICBpZiAoYmxvY2tlckZ1bmN0aW9uKHtcbiAgICAgIGN1cnJlbnRMb2NhdGlvbixcbiAgICAgIG5leHRMb2NhdGlvbixcbiAgICAgIGhpc3RvcnlBY3Rpb25cbiAgICB9KSkge1xuICAgICAgcmV0dXJuIGJsb2NrZXJLZXk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU5hdmlnYXRpb25hbDQwNChwYXRobmFtZSkge1xuICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA0LCB7XG4gICAgICBwYXRobmFtZVxuICAgIH0pO1xuICAgIGxldCByb3V0ZXNUb1VzZSA9IGluRmxpZ2h0RGF0YVJvdXRlcyB8fCBkYXRhUm91dGVzO1xuICAgIGxldCB7XG4gICAgICBtYXRjaGVzLFxuICAgICAgcm91dGVcbiAgICB9ID0gZ2V0U2hvcnRDaXJjdWl0TWF0Y2hlcyhyb3V0ZXNUb1VzZSk7XG4gICAgLy8gQ2FuY2VsIGFsbCBwZW5kaW5nIGRlZmVycmVkIG9uIDQwNHMgc2luY2Ugd2UgZG9uJ3Qga2VlcCBhbnkgcm91dGVzXG4gICAgY2FuY2VsQWN0aXZlRGVmZXJyZWRzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdEZvdW5kTWF0Y2hlczogbWF0Y2hlcyxcbiAgICAgIHJvdXRlLFxuICAgICAgZXJyb3JcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGNhbmNlbEFjdGl2ZURlZmVycmVkcyhwcmVkaWNhdGUpIHtcbiAgICBsZXQgY2FuY2VsbGVkUm91dGVJZHMgPSBbXTtcbiAgICBhY3RpdmVEZWZlcnJlZHMuZm9yRWFjaCgoZGZkLCByb3V0ZUlkKSA9PiB7XG4gICAgICBpZiAoIXByZWRpY2F0ZSB8fCBwcmVkaWNhdGUocm91dGVJZCkpIHtcbiAgICAgICAgLy8gQ2FuY2VsIHRoZSBkZWZlcnJlZCAtIGJ1dCBkbyBub3QgcmVtb3ZlIGZyb20gYWN0aXZlRGVmZXJyZWRzIGhlcmUgLVxuICAgICAgICAvLyB3ZSByZWx5IG9uIHRoZSBzdWJzY3JpYmVycyB0byBkbyB0aGF0IHNvIG91ciB0ZXN0cyBjYW4gYXNzZXJ0IHByb3BlclxuICAgICAgICAvLyBjbGVhbnVwIHZpYSBfaW50ZXJuYWxBY3RpdmVEZWZlcnJlZHNcbiAgICAgICAgZGZkLmNhbmNlbCgpO1xuICAgICAgICBjYW5jZWxsZWRSb3V0ZUlkcy5wdXNoKHJvdXRlSWQpO1xuICAgICAgICBhY3RpdmVEZWZlcnJlZHMuZGVsZXRlKHJvdXRlSWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjYW5jZWxsZWRSb3V0ZUlkcztcbiAgfVxuICAvLyBPcHQgaW4gdG8gY2FwdHVyaW5nIGFuZCByZXBvcnRpbmcgc2Nyb2xsIHBvc2l0aW9ucyBkdXJpbmcgbmF2aWdhdGlvbnMsXG4gIC8vIHVzZWQgYnkgdGhlIDxTY3JvbGxSZXN0b3JhdGlvbj4gY29tcG9uZW50XG4gIGZ1bmN0aW9uIGVuYWJsZVNjcm9sbFJlc3RvcmF0aW9uKHBvc2l0aW9ucywgZ2V0UG9zaXRpb24sIGdldEtleSkge1xuICAgIHNhdmVkU2Nyb2xsUG9zaXRpb25zID0gcG9zaXRpb25zO1xuICAgIGdldFNjcm9sbFBvc2l0aW9uID0gZ2V0UG9zaXRpb247XG4gICAgZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkgPSBnZXRLZXkgfHwgbnVsbDtcbiAgICAvLyBQZXJmb3JtIGluaXRpYWwgaHlkcmF0aW9uIHNjcm9sbCByZXN0b3JhdGlvbiwgc2luY2Ugd2UgbWlzcyB0aGUgYm9hdCBvblxuICAgIC8vIHRoZSBpbml0aWFsIHVwZGF0ZVN0YXRlKCkgYmVjYXVzZSB3ZSd2ZSBub3QgeWV0IHJlbmRlcmVkIDxTY3JvbGxSZXN0b3JhdGlvbi8+XG4gICAgLy8gYW5kIHRoZXJlZm9yZSBoYXZlIG5vIHNhdmVkU2Nyb2xsUG9zaXRpb25zIGF2YWlsYWJsZVxuICAgIGlmICghaW5pdGlhbFNjcm9sbFJlc3RvcmVkICYmIHN0YXRlLm5hdmlnYXRpb24gPT09IElETEVfTkFWSUdBVElPTikge1xuICAgICAgaW5pdGlhbFNjcm9sbFJlc3RvcmVkID0gdHJ1ZTtcbiAgICAgIGxldCB5ID0gZ2V0U2F2ZWRTY3JvbGxQb3NpdGlvbihzdGF0ZS5sb2NhdGlvbiwgc3RhdGUubWF0Y2hlcyk7XG4gICAgICBpZiAoeSAhPSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICByZXN0b3JlU2Nyb2xsUG9zaXRpb246IHlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzYXZlZFNjcm9sbFBvc2l0aW9ucyA9IG51bGw7XG4gICAgICBnZXRTY3JvbGxQb3NpdGlvbiA9IG51bGw7XG4gICAgICBnZXRTY3JvbGxSZXN0b3JhdGlvbktleSA9IG51bGw7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBnZXRTY3JvbGxLZXkobG9jYXRpb24sIG1hdGNoZXMpIHtcbiAgICBpZiAoZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkpIHtcbiAgICAgIGxldCBrZXkgPSBnZXRTY3JvbGxSZXN0b3JhdGlvbktleShsb2NhdGlvbiwgbWF0Y2hlcy5tYXAobSA9PiBjb252ZXJ0Um91dGVNYXRjaFRvVWlNYXRjaChtLCBzdGF0ZS5sb2FkZXJEYXRhKSkpO1xuICAgICAgcmV0dXJuIGtleSB8fCBsb2NhdGlvbi5rZXk7XG4gICAgfVxuICAgIHJldHVybiBsb2NhdGlvbi5rZXk7XG4gIH1cbiAgZnVuY3Rpb24gc2F2ZVNjcm9sbFBvc2l0aW9uKGxvY2F0aW9uLCBtYXRjaGVzKSB7XG4gICAgaWYgKHNhdmVkU2Nyb2xsUG9zaXRpb25zICYmIGdldFNjcm9sbFBvc2l0aW9uKSB7XG4gICAgICBsZXQga2V5ID0gZ2V0U2Nyb2xsS2V5KGxvY2F0aW9uLCBtYXRjaGVzKTtcbiAgICAgIHNhdmVkU2Nyb2xsUG9zaXRpb25zW2tleV0gPSBnZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZXRTYXZlZFNjcm9sbFBvc2l0aW9uKGxvY2F0aW9uLCBtYXRjaGVzKSB7XG4gICAgaWYgKHNhdmVkU2Nyb2xsUG9zaXRpb25zKSB7XG4gICAgICBsZXQga2V5ID0gZ2V0U2Nyb2xsS2V5KGxvY2F0aW9uLCBtYXRjaGVzKTtcbiAgICAgIGxldCB5ID0gc2F2ZWRTY3JvbGxQb3NpdGlvbnNba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgeSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4geTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tGb2dPZldhcihtYXRjaGVzLCByb3V0ZXNUb1VzZSwgcGF0aG5hbWUpIHtcbiAgICBpZiAocGF0Y2hSb3V0ZXNPbk5hdmlnYXRpb25JbXBsKSB7XG4gICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgbGV0IGZvZ01hdGNoZXMgPSBtYXRjaFJvdXRlc0ltcGwocm91dGVzVG9Vc2UsIHBhdGhuYW1lLCBiYXNlbmFtZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgIG1hdGNoZXM6IGZvZ01hdGNoZXMgfHwgW11cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhtYXRjaGVzWzBdLnBhcmFtcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIElmIHdlIG1hdGNoZWQgYSBkeW5hbWljIHBhcmFtIG9yIGEgc3BsYXQsIGl0IG1pZ2h0IG9ubHkgYmUgYmVjYXVzZVxuICAgICAgICAgIC8vIHdlIGhhdmVuJ3QgeWV0IGRpc2NvdmVyZWQgb3RoZXIgcm91dGVzIHRoYXQgd291bGQgbWF0Y2ggd2l0aCBhXG4gICAgICAgICAgLy8gaGlnaGVyIHNjb3JlLiAgQ2FsbCBwYXRjaFJvdXRlc09uTmF2aWdhdGlvbiBqdXN0IHRvIGJlIHN1cmVcbiAgICAgICAgICBsZXQgcGFydGlhbE1hdGNoZXMgPSBtYXRjaFJvdXRlc0ltcGwocm91dGVzVG9Vc2UsIHBhdGhuYW1lLCBiYXNlbmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1hdGNoZXM6IHBhcnRpYWxNYXRjaGVzXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIG1hdGNoZXM6IG51bGxcbiAgICB9O1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGRpc2NvdmVyUm91dGVzKG1hdGNoZXMsIHBhdGhuYW1lLCBzaWduYWwsIGZldGNoZXJLZXkpIHtcbiAgICBpZiAoIXBhdGNoUm91dGVzT25OYXZpZ2F0aW9uSW1wbCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXG4gICAgICAgIG1hdGNoZXNcbiAgICAgIH07XG4gICAgfVxuICAgIGxldCBwYXJ0aWFsTWF0Y2hlcyA9IG1hdGNoZXM7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGxldCBpc05vbkhNUiA9IGluRmxpZ2h0RGF0YVJvdXRlcyA9PSBudWxsO1xuICAgICAgbGV0IHJvdXRlc1RvVXNlID0gaW5GbGlnaHREYXRhUm91dGVzIHx8IGRhdGFSb3V0ZXM7XG4gICAgICBsZXQgbG9jYWxNYW5pZmVzdCA9IG1hbmlmZXN0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgcGF0Y2hSb3V0ZXNPbk5hdmlnYXRpb25JbXBsKHtcbiAgICAgICAgICBzaWduYWwsXG4gICAgICAgICAgcGF0aDogcGF0aG5hbWUsXG4gICAgICAgICAgbWF0Y2hlczogcGFydGlhbE1hdGNoZXMsXG4gICAgICAgICAgZmV0Y2hlcktleSxcbiAgICAgICAgICBwYXRjaDogKHJvdXRlSWQsIGNoaWxkcmVuKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHJldHVybjtcbiAgICAgICAgICAgIHBhdGNoUm91dGVzSW1wbChyb3V0ZUlkLCBjaGlsZHJlbiwgcm91dGVzVG9Vc2UsIGxvY2FsTWFuaWZlc3QsIG1hcFJvdXRlUHJvcGVydGllcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICAgICAgZXJyb3I6IGUsXG4gICAgICAgICAgcGFydGlhbE1hdGNoZXNcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIC8vIElmIHdlIGFyZSBub3QgaW4gdGhlIG1pZGRsZSBvZiBhbiBITVIgcmV2YWxpZGF0aW9uIGFuZCB3ZSBjaGFuZ2VkIHRoZVxuICAgICAgICAvLyByb3V0ZXMsIHByb3ZpZGUgYSBuZXcgaWRlbnRpdHkgc28gd2hlbiB3ZSBgdXBkYXRlU3RhdGVgIGF0IHRoZSBlbmQgb2ZcbiAgICAgICAgLy8gdGhpcyBuYXZpZ2F0aW9uL2ZldGNoIGByb3V0ZXIucm91dGVzYCB3aWxsIGJlIGEgbmV3IGlkZW50aXR5IGFuZFxuICAgICAgICAvLyB0cmlnZ2VyIGEgcmUtcnVuIG9mIG1lbW9pemVkIGByb3V0ZXIucm91dGVzYCBkZXBlbmRlbmNpZXMuXG4gICAgICAgIC8vIEhNUiB3aWxsIGFscmVhZHkgdXBkYXRlIHRoZSBpZGVudGl0eSBhbmQgcmVmbG93IHdoZW4gaXQgbGFuZHNcbiAgICAgICAgLy8gYGluRmxpZ2h0RGF0YVJvdXRlc2AgaW4gYGNvbXBsZXRlTmF2aWdhdGlvbmBcbiAgICAgICAgaWYgKGlzTm9uSE1SICYmICFzaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgIGRhdGFSb3V0ZXMgPSBbLi4uZGF0YVJvdXRlc107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzaWduYWwuYWJvcnRlZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6IFwiYWJvcnRlZFwiXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBsZXQgbmV3TWF0Y2hlcyA9IG1hdGNoUm91dGVzKHJvdXRlc1RvVXNlLCBwYXRobmFtZSwgYmFzZW5hbWUpO1xuICAgICAgaWYgKG5ld01hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICBtYXRjaGVzOiBuZXdNYXRjaGVzXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBsZXQgbmV3UGFydGlhbE1hdGNoZXMgPSBtYXRjaFJvdXRlc0ltcGwocm91dGVzVG9Vc2UsIHBhdGhuYW1lLCBiYXNlbmFtZSwgdHJ1ZSk7XG4gICAgICAvLyBBdm9pZCBsb29wcyBpZiB0aGUgc2Vjb25kIHBhc3MgcmVzdWx0cyBpbiB0aGUgc2FtZSBwYXJ0aWFsIG1hdGNoZXNcbiAgICAgIGlmICghbmV3UGFydGlhbE1hdGNoZXMgfHwgcGFydGlhbE1hdGNoZXMubGVuZ3RoID09PSBuZXdQYXJ0aWFsTWF0Y2hlcy5sZW5ndGggJiYgcGFydGlhbE1hdGNoZXMuZXZlcnkoKG0sIGkpID0+IG0ucm91dGUuaWQgPT09IG5ld1BhcnRpYWxNYXRjaGVzW2ldLnJvdXRlLmlkKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgIG1hdGNoZXM6IG51bGxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHBhcnRpYWxNYXRjaGVzID0gbmV3UGFydGlhbE1hdGNoZXM7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIF9pbnRlcm5hbFNldFJvdXRlcyhuZXdSb3V0ZXMpIHtcbiAgICBtYW5pZmVzdCA9IHt9O1xuICAgIGluRmxpZ2h0RGF0YVJvdXRlcyA9IGNvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMobmV3Um91dGVzLCBtYXBSb3V0ZVByb3BlcnRpZXMsIHVuZGVmaW5lZCwgbWFuaWZlc3QpO1xuICB9XG4gIGZ1bmN0aW9uIHBhdGNoUm91dGVzKHJvdXRlSWQsIGNoaWxkcmVuKSB7XG4gICAgbGV0IGlzTm9uSE1SID0gaW5GbGlnaHREYXRhUm91dGVzID09IG51bGw7XG4gICAgbGV0IHJvdXRlc1RvVXNlID0gaW5GbGlnaHREYXRhUm91dGVzIHx8IGRhdGFSb3V0ZXM7XG4gICAgcGF0Y2hSb3V0ZXNJbXBsKHJvdXRlSWQsIGNoaWxkcmVuLCByb3V0ZXNUb1VzZSwgbWFuaWZlc3QsIG1hcFJvdXRlUHJvcGVydGllcyk7XG4gICAgLy8gSWYgd2UgYXJlIG5vdCBpbiB0aGUgbWlkZGxlIG9mIGFuIEhNUiByZXZhbGlkYXRpb24gYW5kIHdlIGNoYW5nZWQgdGhlXG4gICAgLy8gcm91dGVzLCBwcm92aWRlIGEgbmV3IGlkZW50aXR5IGFuZCB0cmlnZ2VyIGEgcmVmbG93IHZpYSBgdXBkYXRlU3RhdGVgXG4gICAgLy8gdG8gcmUtcnVuIG1lbW9pemVkIGByb3V0ZXIucm91dGVzYCBkZXBlbmRlbmNpZXMuXG4gICAgLy8gSE1SIHdpbGwgYWxyZWFkeSB1cGRhdGUgdGhlIGlkZW50aXR5IGFuZCByZWZsb3cgd2hlbiBpdCBsYW5kc1xuICAgIC8vIGBpbkZsaWdodERhdGFSb3V0ZXNgIGluIGBjb21wbGV0ZU5hdmlnYXRpb25gXG4gICAgaWYgKGlzTm9uSE1SKSB7XG4gICAgICBkYXRhUm91dGVzID0gWy4uLmRhdGFSb3V0ZXNdO1xuICAgICAgdXBkYXRlU3RhdGUoe30pO1xuICAgIH1cbiAgfVxuICByb3V0ZXIgPSB7XG4gICAgZ2V0IGJhc2VuYW1lKCkge1xuICAgICAgcmV0dXJuIGJhc2VuYW1lO1xuICAgIH0sXG4gICAgZ2V0IGZ1dHVyZSgpIHtcbiAgICAgIHJldHVybiBmdXR1cmU7XG4gICAgfSxcbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSxcbiAgICBnZXQgcm91dGVzKCkge1xuICAgICAgcmV0dXJuIGRhdGFSb3V0ZXM7XG4gICAgfSxcbiAgICBnZXQgd2luZG93KCkge1xuICAgICAgcmV0dXJuIHJvdXRlcldpbmRvdztcbiAgICB9LFxuICAgIGluaXRpYWxpemUsXG4gICAgc3Vic2NyaWJlLFxuICAgIGVuYWJsZVNjcm9sbFJlc3RvcmF0aW9uLFxuICAgIG5hdmlnYXRlLFxuICAgIGZldGNoLFxuICAgIHJldmFsaWRhdGUsXG4gICAgLy8gUGFzc3Rocm91Z2ggdG8gaGlzdG9yeS1hd2FyZSBjcmVhdGVIcmVmIHVzZWQgYnkgdXNlSHJlZiBzbyB3ZSBnZXQgcHJvcGVyXG4gICAgLy8gaGFzaC1hd2FyZSBVUkxzIGluIERPTSBwYXRoc1xuICAgIGNyZWF0ZUhyZWY6IHRvID0+IGluaXQuaGlzdG9yeS5jcmVhdGVIcmVmKHRvKSxcbiAgICBlbmNvZGVMb2NhdGlvbjogdG8gPT4gaW5pdC5oaXN0b3J5LmVuY29kZUxvY2F0aW9uKHRvKSxcbiAgICBnZXRGZXRjaGVyLFxuICAgIGRlbGV0ZUZldGNoZXI6IGRlbGV0ZUZldGNoZXJBbmRVcGRhdGVTdGF0ZSxcbiAgICBkaXNwb3NlLFxuICAgIGdldEJsb2NrZXIsXG4gICAgZGVsZXRlQmxvY2tlcixcbiAgICBwYXRjaFJvdXRlcyxcbiAgICBfaW50ZXJuYWxGZXRjaENvbnRyb2xsZXJzOiBmZXRjaENvbnRyb2xsZXJzLFxuICAgIF9pbnRlcm5hbEFjdGl2ZURlZmVycmVkczogYWN0aXZlRGVmZXJyZWRzLFxuICAgIC8vIFRPRE86IFJlbW92ZSBzZXRSb3V0ZXMsIGl0J3MgdGVtcG9yYXJ5IHRvIGF2b2lkIGRlYWxpbmcgd2l0aFxuICAgIC8vIHVwZGF0aW5nIHRoZSB0cmVlIHdoaWxlIHZhbGlkYXRpbmcgdGhlIHVwZGF0ZSBhbGdvcml0aG0uXG4gICAgX2ludGVybmFsU2V0Um91dGVzXG4gIH07XG4gIHJldHVybiByb3V0ZXI7XG59XG4vLyNlbmRyZWdpb25cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyNyZWdpb24gY3JlYXRlU3RhdGljSGFuZGxlclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmNvbnN0IFVOU0FGRV9ERUZFUlJFRF9TWU1CT0wgPSBTeW1ib2woXCJkZWZlcnJlZFwiKTtcbmZ1bmN0aW9uIGNyZWF0ZVN0YXRpY0hhbmRsZXIocm91dGVzLCBvcHRzKSB7XG4gIGludmFyaWFudChyb3V0ZXMubGVuZ3RoID4gMCwgXCJZb3UgbXVzdCBwcm92aWRlIGEgbm9uLWVtcHR5IHJvdXRlcyBhcnJheSB0byBjcmVhdGVTdGF0aWNIYW5kbGVyXCIpO1xuICBsZXQgbWFuaWZlc3QgPSB7fTtcbiAgbGV0IGJhc2VuYW1lID0gKG9wdHMgPyBvcHRzLmJhc2VuYW1lIDogbnVsbCkgfHwgXCIvXCI7XG4gIGxldCBtYXBSb3V0ZVByb3BlcnRpZXM7XG4gIGlmIChvcHRzICE9IG51bGwgJiYgb3B0cy5tYXBSb3V0ZVByb3BlcnRpZXMpIHtcbiAgICBtYXBSb3V0ZVByb3BlcnRpZXMgPSBvcHRzLm1hcFJvdXRlUHJvcGVydGllcztcbiAgfSBlbHNlIGlmIChvcHRzICE9IG51bGwgJiYgb3B0cy5kZXRlY3RFcnJvckJvdW5kYXJ5KSB7XG4gICAgLy8gSWYgdGhleSBhcmUgc3RpbGwgdXNpbmcgdGhlIGRlcHJlY2F0ZWQgdmVyc2lvbiwgd3JhcCBpdCB3aXRoIHRoZSBuZXcgQVBJXG4gICAgbGV0IGRldGVjdEVycm9yQm91bmRhcnkgPSBvcHRzLmRldGVjdEVycm9yQm91bmRhcnk7XG4gICAgbWFwUm91dGVQcm9wZXJ0aWVzID0gcm91dGUgPT4gKHtcbiAgICAgIGhhc0Vycm9yQm91bmRhcnk6IGRldGVjdEVycm9yQm91bmRhcnkocm91dGUpXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgbWFwUm91dGVQcm9wZXJ0aWVzID0gZGVmYXVsdE1hcFJvdXRlUHJvcGVydGllcztcbiAgfVxuICAvLyBDb25maWcgZHJpdmVuIGJlaGF2aW9yIGZsYWdzXG4gIGxldCBmdXR1cmUgPSBfZXh0ZW5kcyh7XG4gICAgdjdfcmVsYXRpdmVTcGxhdFBhdGg6IGZhbHNlLFxuICAgIHY3X3Rocm93QWJvcnRSZWFzb246IGZhbHNlXG4gIH0sIG9wdHMgPyBvcHRzLmZ1dHVyZSA6IG51bGwpO1xuICBsZXQgZGF0YVJvdXRlcyA9IGNvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMocm91dGVzLCBtYXBSb3V0ZVByb3BlcnRpZXMsIHVuZGVmaW5lZCwgbWFuaWZlc3QpO1xuICAvKipcbiAgICogVGhlIHF1ZXJ5KCkgbWV0aG9kIGlzIGludGVuZGVkIGZvciBkb2N1bWVudCByZXF1ZXN0cywgaW4gd2hpY2ggd2Ugd2FudCB0b1xuICAgKiBjYWxsIGFuIG9wdGlvbmFsIGFjdGlvbiBhbmQgcG90ZW50aWFsbHkgbXVsdGlwbGUgbG9hZGVycyBmb3IgYWxsIG5lc3RlZFxuICAgKiByb3V0ZXMuICBJdCByZXR1cm5zIGEgU3RhdGljSGFuZGxlckNvbnRleHQgb2JqZWN0LCB3aGljaCBpcyB2ZXJ5IHNpbWlsYXJcbiAgICogdG8gdGhlIHJvdXRlciBzdGF0ZSAobG9jYXRpb24sIGxvYWRlckRhdGEsIGFjdGlvbkRhdGEsIGVycm9ycywgZXRjLikgYW5kXG4gICAqIGFsc28gYWRkcyBTU1Itc3BlY2lmaWMgaW5mb3JtYXRpb24gc3VjaCBhcyB0aGUgc3RhdHVzQ29kZSBhbmQgaGVhZGVyc1xuICAgKiBmcm9tIGFjdGlvbi9sb2FkZXJzIFJlc3BvbnNlcy5cbiAgICpcbiAgICogSXQgX3Nob3VsZF8gbmV2ZXIgdGhyb3cgYW5kIHNob3VsZCByZXBvcnQgYWxsIGVycm9ycyB0aHJvdWdoIHRoZVxuICAgKiByZXR1cm5lZCBjb250ZXh0LmVycm9ycyBvYmplY3QsIHByb3Blcmx5IGFzc29jaWF0aW5nIGVycm9ycyB0byB0aGVpciBlcnJvclxuICAgKiBib3VuZGFyeS4gIEFkZGl0aW9uYWxseSwgaXQgdHJhY2tzIF9kZWVwZXN0UmVuZGVyZWRCb3VuZGFyeUlkIHdoaWNoIGNhbiBiZVxuICAgKiB1c2VkIHRvIGVtdWxhdGUgUmVhY3QgZXJyb3IgYm91bmRhcmllcyBkdXJpbmcgU1NyIGJ5IHBlcmZvcm1pbmcgYSBzZWNvbmRcbiAgICogcGFzcyBvbmx5IGRvd24gdG8gdGhlIGJvdW5kYXJ5SWQuXG4gICAqXG4gICAqIFRoZSBvbmUgZXhjZXB0aW9uIHdoZXJlIHdlIGRvIG5vdCByZXR1cm4gYSBTdGF0aWNIYW5kbGVyQ29udGV4dCBpcyB3aGVuIGFcbiAgICogcmVkaXJlY3QgcmVzcG9uc2UgaXMgcmV0dXJuZWQgb3IgdGhyb3duIGZyb20gYW55IGFjdGlvbi9sb2FkZXIuICBXZVxuICAgKiBwcm9wYWdhdGUgdGhhdCBvdXQgYW5kIHJldHVybiB0aGUgcmF3IFJlc3BvbnNlIHNvIHRoZSBIVFRQIHNlcnZlciBjYW5cbiAgICogcmV0dXJuIGl0IGRpcmVjdGx5LlxuICAgKlxuICAgKiAtIGBvcHRzLnJlcXVlc3RDb250ZXh0YCBpcyBhbiBvcHRpb25hbCBzZXJ2ZXIgY29udGV4dCB0aGF0IHdpbGwgYmUgcGFzc2VkXG4gICAqICAgdG8gYWN0aW9ucy9sb2FkZXJzIGluIHRoZSBgY29udGV4dGAgcGFyYW1ldGVyXG4gICAqIC0gYG9wdHMuc2tpcExvYWRlckVycm9yQnViYmxpbmdgIGlzIGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IHdpbGwgcHJldmVudFxuICAgKiAgIHRoZSBidWJibGluZyBvZiBlcnJvcnMgd2hpY2ggYWxsb3dzIHNpbmdsZS1mZXRjaC10eXBlIGltcGxlbWVudGF0aW9uc1xuICAgKiAgIHdoZXJlIHRoZSBjbGllbnQgd2lsbCBoYW5kbGUgdGhlIGJ1YmJsaW5nIGFuZCB3ZSBtYXkgbmVlZCB0byByZXR1cm4gZGF0YVxuICAgKiAgIGZvciB0aGUgaGFuZGxpbmcgcm91dGVcbiAgICovXG4gIGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5KHJlcXVlc3QsIF90ZW1wMykge1xuICAgIGxldCB7XG4gICAgICByZXF1ZXN0Q29udGV4dCxcbiAgICAgIHNraXBMb2FkZXJFcnJvckJ1YmJsaW5nLFxuICAgICAgZGF0YVN0cmF0ZWd5XG4gICAgfSA9IF90ZW1wMyA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDM7XG4gICAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgIGxldCBtZXRob2QgPSByZXF1ZXN0Lm1ldGhvZDtcbiAgICBsZXQgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihcIlwiLCBjcmVhdGVQYXRoKHVybCksIG51bGwsIFwiZGVmYXVsdFwiKTtcbiAgICBsZXQgbWF0Y2hlcyA9IG1hdGNoUm91dGVzKGRhdGFSb3V0ZXMsIGxvY2F0aW9uLCBiYXNlbmFtZSk7XG4gICAgLy8gU1NSIHN1cHBvcnRzIEhFQUQgcmVxdWVzdHMgd2hpbGUgU1BBIGRvZXNuJ3RcbiAgICBpZiAoIWlzVmFsaWRNZXRob2QobWV0aG9kKSAmJiBtZXRob2QgIT09IFwiSEVBRFwiKSB7XG4gICAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNSwge1xuICAgICAgICBtZXRob2RcbiAgICAgIH0pO1xuICAgICAgbGV0IHtcbiAgICAgICAgbWF0Y2hlczogbWV0aG9kTm90QWxsb3dlZE1hdGNoZXMsXG4gICAgICAgIHJvdXRlXG4gICAgICB9ID0gZ2V0U2hvcnRDaXJjdWl0TWF0Y2hlcyhkYXRhUm91dGVzKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJhc2VuYW1lLFxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgbWF0Y2hlczogbWV0aG9kTm90QWxsb3dlZE1hdGNoZXMsXG4gICAgICAgIGxvYWRlckRhdGE6IHt9LFxuICAgICAgICBhY3Rpb25EYXRhOiBudWxsLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBbcm91dGUuaWRdOiBlcnJvclxuICAgICAgICB9LFxuICAgICAgICBzdGF0dXNDb2RlOiBlcnJvci5zdGF0dXMsXG4gICAgICAgIGxvYWRlckhlYWRlcnM6IHt9LFxuICAgICAgICBhY3Rpb25IZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aXZlRGVmZXJyZWRzOiBudWxsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA0LCB7XG4gICAgICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZVxuICAgICAgfSk7XG4gICAgICBsZXQge1xuICAgICAgICBtYXRjaGVzOiBub3RGb3VuZE1hdGNoZXMsXG4gICAgICAgIHJvdXRlXG4gICAgICB9ID0gZ2V0U2hvcnRDaXJjdWl0TWF0Y2hlcyhkYXRhUm91dGVzKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJhc2VuYW1lLFxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgbWF0Y2hlczogbm90Rm91bmRNYXRjaGVzLFxuICAgICAgICBsb2FkZXJEYXRhOiB7fSxcbiAgICAgICAgYWN0aW9uRGF0YTogbnVsbCxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgW3JvdXRlLmlkXTogZXJyb3JcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdHVzQ29kZTogZXJyb3Iuc3RhdHVzLFxuICAgICAgICBsb2FkZXJIZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aW9uSGVhZGVyczoge30sXG4gICAgICAgIGFjdGl2ZURlZmVycmVkczogbnVsbFxuICAgICAgfTtcbiAgICB9XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5SW1wbChyZXF1ZXN0LCBsb2NhdGlvbiwgbWF0Y2hlcywgcmVxdWVzdENvbnRleHQsIGRhdGFTdHJhdGVneSB8fCBudWxsLCBza2lwTG9hZGVyRXJyb3JCdWJibGluZyA9PT0gdHJ1ZSwgbnVsbCk7XG4gICAgaWYgKGlzUmVzcG9uc2UocmVzdWx0KSkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gV2hlbiByZXR1cm5pbmcgU3RhdGljSGFuZGxlckNvbnRleHQsIHdlIHBhdGNoIGJhY2sgaW4gdGhlIGxvY2F0aW9uIGhlcmVcbiAgICAvLyBzaW5jZSB3ZSBuZWVkIGl0IGZvciBSZWFjdCBDb250ZXh0LiAgQnV0IHRoaXMgaGVscHMga2VlcCBvdXIgc3VibWl0IGFuZFxuICAgIC8vIGxvYWRSb3V0ZURhdGEgb3BlcmF0aW5nIG9uIGEgUmVxdWVzdCBpbnN0ZWFkIG9mIGEgTG9jYXRpb25cbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgbG9jYXRpb24sXG4gICAgICBiYXNlbmFtZVxuICAgIH0sIHJlc3VsdCk7XG4gIH1cbiAgLyoqXG4gICAqIFRoZSBxdWVyeVJvdXRlKCkgbWV0aG9kIGlzIGludGVuZGVkIGZvciB0YXJnZXRlZCByb3V0ZSByZXF1ZXN0cywgZWl0aGVyXG4gICAqIGZvciBmZXRjaCA/X2RhdGEgcmVxdWVzdHMgb3IgcmVzb3VyY2Ugcm91dGUgcmVxdWVzdHMuICBJbiB0aGlzIGNhc2UsIHdlXG4gICAqIGFyZSBvbmx5IGV2ZXIgY2FsbGluZyBhIHNpbmdsZSBhY3Rpb24gb3IgbG9hZGVyLCBhbmQgd2UgYXJlIHJldHVybmluZyB0aGVcbiAgICogcmV0dXJuZWQgdmFsdWUgZGlyZWN0bHkuICBJbiBtb3N0IGNhc2VzLCB0aGlzIHdpbGwgYmUgYSBSZXNwb25zZSByZXR1cm5lZFxuICAgKiBmcm9tIHRoZSBhY3Rpb24vbG9hZGVyLCBidXQgaXQgbWF5IGJlIGEgcHJpbWl0aXZlIG9yIG90aGVyIHZhbHVlIGFzIHdlbGwgLVxuICAgKiBhbmQgaW4gc3VjaCBjYXNlcyB0aGUgY2FsbGluZyBjb250ZXh0IHNob3VsZCBoYW5kbGUgdGhhdCBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogV2UgZG8gcmVzcGVjdCB0aGUgdGhyb3cvcmV0dXJuIGRpZmZlcmVudGlhdGlvbiwgc28gaWYgYW4gYWN0aW9uL2xvYWRlclxuICAgKiB0aHJvd3MsIHRoZW4gdGhpcyBtZXRob2Qgd2lsbCB0aHJvdyB0aGUgdmFsdWUuICBUaGlzIGlzIGltcG9ydGFudCBzbyB3ZVxuICAgKiBjYW4gZG8gcHJvcGVyIGJvdW5kYXJ5IGlkZW50aWZpY2F0aW9uIGluIFJlbWl4IHdoZXJlIGEgdGhyb3duIFJlc3BvbnNlXG4gICAqIG11c3QgZ28gdG8gdGhlIENhdGNoIEJvdW5kYXJ5IGJ1dCBhIHJldHVybmVkIFJlc3BvbnNlIGlzIGhhcHB5LXBhdGguXG4gICAqXG4gICAqIE9uZSB0aGluZyB0byBub3RlIGlzIHRoYXQgYW55IFJvdXRlci1pbml0aWF0ZWQgRXJyb3JzIHRoYXQgbWFrZSBzZW5zZVxuICAgKiB0byBhc3NvY2lhdGUgd2l0aCBhIHN0YXR1cyBjb2RlIHdpbGwgYmUgdGhyb3duIGFzIGFuIEVycm9yUmVzcG9uc2VcbiAgICogaW5zdGFuY2Ugd2hpY2ggaW5jbHVkZSB0aGUgcmF3IEVycm9yLCBzdWNoIHRoYXQgdGhlIGNhbGxpbmcgY29udGV4dCBjYW5cbiAgICogc2VyaWFsaXplIHRoZSBlcnJvciBhcyB0aGV5IHNlZSBmaXQgd2hpbGUgaW5jbHVkaW5nIHRoZSBwcm9wZXIgcmVzcG9uc2VcbiAgICogY29kZS4gIEV4YW1wbGVzIGhlcmUgYXJlIDQwNCBhbmQgNDA1IGVycm9ycyB0aGF0IG9jY3VyIHByaW9yIHRvIHJlYWNoaW5nXG4gICAqIGFueSB1c2VyLWRlZmluZWQgbG9hZGVycy5cbiAgICpcbiAgICogLSBgb3B0cy5yb3V0ZUlkYCBhbGxvd3MgeW91IHRvIHNwZWNpZnkgdGhlIHNwZWNpZmljIHJvdXRlIGhhbmRsZXIgdG8gY2FsbC5cbiAgICogICBJZiBub3QgcHJvdmlkZWQgdGhlIGhhbmRsZXIgd2lsbCBkZXRlcm1pbmUgdGhlIHByb3BlciByb3V0ZSBieSBtYXRjaGluZ1xuICAgKiAgIGFnYWluc3QgYHJlcXVlc3QudXJsYFxuICAgKiAtIGBvcHRzLnJlcXVlc3RDb250ZXh0YCBpcyBhbiBvcHRpb25hbCBzZXJ2ZXIgY29udGV4dCB0aGF0IHdpbGwgYmUgcGFzc2VkXG4gICAqICAgIHRvIGFjdGlvbnMvbG9hZGVycyBpbiB0aGUgYGNvbnRleHRgIHBhcmFtZXRlclxuICAgKi9cbiAgYXN5bmMgZnVuY3Rpb24gcXVlcnlSb3V0ZShyZXF1ZXN0LCBfdGVtcDQpIHtcbiAgICBsZXQge1xuICAgICAgcm91dGVJZCxcbiAgICAgIHJlcXVlc3RDb250ZXh0LFxuICAgICAgZGF0YVN0cmF0ZWd5XG4gICAgfSA9IF90ZW1wNCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDQ7XG4gICAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgIGxldCBtZXRob2QgPSByZXF1ZXN0Lm1ldGhvZDtcbiAgICBsZXQgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihcIlwiLCBjcmVhdGVQYXRoKHVybCksIG51bGwsIFwiZGVmYXVsdFwiKTtcbiAgICBsZXQgbWF0Y2hlcyA9IG1hdGNoUm91dGVzKGRhdGFSb3V0ZXMsIGxvY2F0aW9uLCBiYXNlbmFtZSk7XG4gICAgLy8gU1NSIHN1cHBvcnRzIEhFQUQgcmVxdWVzdHMgd2hpbGUgU1BBIGRvZXNuJ3RcbiAgICBpZiAoIWlzVmFsaWRNZXRob2QobWV0aG9kKSAmJiBtZXRob2QgIT09IFwiSEVBRFwiICYmIG1ldGhvZCAhPT0gXCJPUFRJT05TXCIpIHtcbiAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgIG1ldGhvZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghbWF0Y2hlcykge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHtcbiAgICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICB9KTtcbiAgICB9XG4gICAgbGV0IG1hdGNoID0gcm91dGVJZCA/IG1hdGNoZXMuZmluZChtID0+IG0ucm91dGUuaWQgPT09IHJvdXRlSWQpIDogZ2V0VGFyZ2V0TWF0Y2gobWF0Y2hlcywgbG9jYXRpb24pO1xuICAgIGlmIChyb3V0ZUlkICYmICFtYXRjaCkge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDMsIHtcbiAgICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICByb3V0ZUlkXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCFtYXRjaCkge1xuICAgICAgLy8gVGhpcyBzaG91bGQgbmV2ZXIgaGl0IEkgZG9uJ3QgdGhpbms/XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcXVlcnlJbXBsKHJlcXVlc3QsIGxvY2F0aW9uLCBtYXRjaGVzLCByZXF1ZXN0Q29udGV4dCwgZGF0YVN0cmF0ZWd5IHx8IG51bGwsIGZhbHNlLCBtYXRjaCk7XG4gICAgaWYgKGlzUmVzcG9uc2UocmVzdWx0KSkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgbGV0IGVycm9yID0gcmVzdWx0LmVycm9ycyA/IE9iamVjdC52YWx1ZXMocmVzdWx0LmVycm9ycylbMF0gOiB1bmRlZmluZWQ7XG4gICAgaWYgKGVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIElmIHdlIGdvdCBiYWNrIHJlc3VsdC5lcnJvcnMsIHRoYXQgbWVhbnMgdGhlIGxvYWRlci9hY3Rpb24gdGhyZXdcbiAgICAgIC8vIF9zb21ldGhpbmdfIHRoYXQgd2Fzbid0IGEgUmVzcG9uc2UsIGJ1dCBpdCdzIG5vdCBndWFyYW50ZWVkL3JlcXVpcmVkXG4gICAgICAvLyB0byBiZSBhbiBgaW5zdGFuY2VvZiBFcnJvcmAgZWl0aGVyLCBzbyB3ZSBoYXZlIHRvIHVzZSB0aHJvdyBoZXJlIHRvXG4gICAgICAvLyBwcmVzZXJ2ZSB0aGUgXCJlcnJvclwiIHN0YXRlIG91dHNpZGUgb2YgcXVlcnlJbXBsLlxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIC8vIFBpY2sgb2ZmIHRoZSByaWdodCBzdGF0ZSB2YWx1ZSB0byByZXR1cm5cbiAgICBpZiAocmVzdWx0LmFjdGlvbkRhdGEpIHtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHJlc3VsdC5hY3Rpb25EYXRhKVswXTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC5sb2FkZXJEYXRhKSB7XG4gICAgICB2YXIgX3Jlc3VsdCRhY3RpdmVEZWZlcnJlO1xuICAgICAgbGV0IGRhdGEgPSBPYmplY3QudmFsdWVzKHJlc3VsdC5sb2FkZXJEYXRhKVswXTtcbiAgICAgIGlmICgoX3Jlc3VsdCRhY3RpdmVEZWZlcnJlID0gcmVzdWx0LmFjdGl2ZURlZmVycmVkcykgIT0gbnVsbCAmJiBfcmVzdWx0JGFjdGl2ZURlZmVycmVbbWF0Y2gucm91dGUuaWRdKSB7XG4gICAgICAgIGRhdGFbVU5TQUZFX0RFRkVSUkVEX1NZTUJPTF0gPSByZXN1bHQuYWN0aXZlRGVmZXJyZWRzW21hdGNoLnJvdXRlLmlkXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5SW1wbChyZXF1ZXN0LCBsb2NhdGlvbiwgbWF0Y2hlcywgcmVxdWVzdENvbnRleHQsIGRhdGFTdHJhdGVneSwgc2tpcExvYWRlckVycm9yQnViYmxpbmcsIHJvdXRlTWF0Y2gpIHtcbiAgICBpbnZhcmlhbnQocmVxdWVzdC5zaWduYWwsIFwicXVlcnkoKS9xdWVyeVJvdXRlKCkgcmVxdWVzdHMgbXVzdCBjb250YWluIGFuIEFib3J0Q29udHJvbGxlciBzaWduYWxcIik7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChpc011dGF0aW9uTWV0aG9kKHJlcXVlc3QubWV0aG9kLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBzdWJtaXQocmVxdWVzdCwgbWF0Y2hlcywgcm91dGVNYXRjaCB8fCBnZXRUYXJnZXRNYXRjaChtYXRjaGVzLCBsb2NhdGlvbiksIHJlcXVlc3RDb250ZXh0LCBkYXRhU3RyYXRlZ3ksIHNraXBMb2FkZXJFcnJvckJ1YmJsaW5nLCByb3V0ZU1hdGNoICE9IG51bGwpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGxvYWRSb3V0ZURhdGEocmVxdWVzdCwgbWF0Y2hlcywgcmVxdWVzdENvbnRleHQsIGRhdGFTdHJhdGVneSwgc2tpcExvYWRlckVycm9yQnViYmxpbmcsIHJvdXRlTWF0Y2gpO1xuICAgICAgcmV0dXJuIGlzUmVzcG9uc2UocmVzdWx0KSA/IHJlc3VsdCA6IF9leHRlbmRzKHt9LCByZXN1bHQsIHtcbiAgICAgICAgYWN0aW9uRGF0YTogbnVsbCxcbiAgICAgICAgYWN0aW9uSGVhZGVyczoge31cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElmIHRoZSB1c2VyIHRocmV3L3JldHVybmVkIGEgUmVzcG9uc2UgaW4gY2FsbExvYWRlck9yQWN0aW9uIGZvciBhXG4gICAgICAvLyBgcXVlcnlSb3V0ZWAgY2FsbCwgd2UgdGhyb3cgdGhlIGBEYXRhU3RyYXRlZ3lSZXN1bHRgIHRvIGJhaWwgb3V0IGVhcmx5XG4gICAgICAvLyBhbmQgdGhlbiByZXR1cm4gb3IgdGhyb3cgdGhlIHJhdyBSZXNwb25zZSBoZXJlIGFjY29yZGluZ2x5XG4gICAgICBpZiAoaXNEYXRhU3RyYXRlZ3lSZXN1bHQoZSkgJiYgaXNSZXNwb25zZShlLnJlc3VsdCkpIHtcbiAgICAgICAgaWYgKGUudHlwZSA9PT0gUmVzdWx0VHlwZS5lcnJvcikge1xuICAgICAgICAgIHRocm93IGUucmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlLnJlc3VsdDtcbiAgICAgIH1cbiAgICAgIC8vIFJlZGlyZWN0cyBhcmUgYWx3YXlzIHJldHVybmVkIHNpbmNlIHRoZXkgZG9uJ3QgcHJvcGFnYXRlIHRvIGNhdGNoXG4gICAgICAvLyBib3VuZGFyaWVzXG4gICAgICBpZiAoaXNSZWRpcmVjdFJlc3BvbnNlKGUpKSB7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfVxuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0KHJlcXVlc3QsIG1hdGNoZXMsIGFjdGlvbk1hdGNoLCByZXF1ZXN0Q29udGV4dCwgZGF0YVN0cmF0ZWd5LCBza2lwTG9hZGVyRXJyb3JCdWJibGluZywgaXNSb3V0ZVJlcXVlc3QpIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmICghYWN0aW9uTWF0Y2gucm91dGUuYWN0aW9uICYmICFhY3Rpb25NYXRjaC5yb3V0ZS5sYXp5KSB7XG4gICAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNSwge1xuICAgICAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuICAgICAgICBwYXRobmFtZTogbmV3IFVSTChyZXF1ZXN0LnVybCkucGF0aG5hbWUsXG4gICAgICAgIHJvdXRlSWQ6IGFjdGlvbk1hdGNoLnJvdXRlLmlkXG4gICAgICB9KTtcbiAgICAgIGlmIChpc1JvdXRlUmVxdWVzdCkge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5lcnJvcixcbiAgICAgICAgZXJyb3JcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByZXN1bHRzID0gYXdhaXQgY2FsbERhdGFTdHJhdGVneShcImFjdGlvblwiLCByZXF1ZXN0LCBbYWN0aW9uTWF0Y2hdLCBtYXRjaGVzLCBpc1JvdXRlUmVxdWVzdCwgcmVxdWVzdENvbnRleHQsIGRhdGFTdHJhdGVneSk7XG4gICAgICByZXN1bHQgPSByZXN1bHRzW2FjdGlvbk1hdGNoLnJvdXRlLmlkXTtcbiAgICAgIGlmIChyZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgIHRocm93U3RhdGljSGFuZGxlckFib3J0ZWRFcnJvcihyZXF1ZXN0LCBpc1JvdXRlUmVxdWVzdCwgZnV0dXJlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSkge1xuICAgICAgLy8gVWhoaGggLSB0aGlzIHNob3VsZCBuZXZlciBoYXBwZW4sIHdlIHNob3VsZCBhbHdheXMgdGhyb3cgdGhlc2UgZnJvbVxuICAgICAgLy8gY2FsbExvYWRlck9yQWN0aW9uLCBidXQgdGhlIHR5cGUgbmFycm93aW5nIGhlcmUga2VlcHMgVFMgaGFwcHkgYW5kIHdlXG4gICAgICAvLyBjYW4gZ2V0IGJhY2sgb24gdGhlIFwidGhyb3cgYWxsIHJlZGlyZWN0IHJlc3BvbnNlc1wiIHRyYWluIGhlcmUgc2hvdWxkXG4gICAgICAvLyB0aGlzIGV2ZXIgaGFwcGVuIDovXG4gICAgICB0aHJvdyBuZXcgUmVzcG9uc2UobnVsbCwge1xuICAgICAgICBzdGF0dXM6IHJlc3VsdC5yZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBMb2NhdGlvbjogcmVzdWx0LnJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiTG9jYXRpb25cIilcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpc0RlZmVycmVkUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDAwLCB7XG4gICAgICAgIHR5cGU6IFwiZGVmZXItYWN0aW9uXCJcbiAgICAgIH0pO1xuICAgICAgaWYgKGlzUm91dGVSZXF1ZXN0KSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLmVycm9yLFxuICAgICAgICBlcnJvclxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGlzUm91dGVSZXF1ZXN0KSB7XG4gICAgICAvLyBOb3RlOiBUaGlzIHNob3VsZCBvbmx5IGJlIG5vbi1SZXNwb25zZSB2YWx1ZXMgaWYgd2UgZ2V0IGhlcmUsIHNpbmNlXG4gICAgICAvLyBpc1JvdXRlUmVxdWVzdCBzaG91bGQgdGhyb3cgYW55IFJlc3BvbnNlIHJlY2VpdmVkIGluIGNhbGxMb2FkZXJPckFjdGlvblxuICAgICAgaWYgKGlzRXJyb3JSZXN1bHQocmVzdWx0KSkge1xuICAgICAgICB0aHJvdyByZXN1bHQuZXJyb3I7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXRjaGVzOiBbYWN0aW9uTWF0Y2hdLFxuICAgICAgICBsb2FkZXJEYXRhOiB7fSxcbiAgICAgICAgYWN0aW9uRGF0YToge1xuICAgICAgICAgIFthY3Rpb25NYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5kYXRhXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yczogbnVsbCxcbiAgICAgICAgLy8gTm90ZTogc3RhdHVzQ29kZSArIGhlYWRlcnMgYXJlIHVudXNlZCBoZXJlIHNpbmNlIHF1ZXJ5Um91dGUgd2lsbFxuICAgICAgICAvLyByZXR1cm4gdGhlIHJhdyBSZXNwb25zZSBvciB2YWx1ZVxuICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgIGxvYWRlckhlYWRlcnM6IHt9LFxuICAgICAgICBhY3Rpb25IZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aXZlRGVmZXJyZWRzOiBudWxsXG4gICAgICB9O1xuICAgIH1cbiAgICAvLyBDcmVhdGUgYSBHRVQgcmVxdWVzdCBmb3IgdGhlIGxvYWRlcnNcbiAgICBsZXQgbG9hZGVyUmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHJlcXVlc3QudXJsLCB7XG4gICAgICBoZWFkZXJzOiByZXF1ZXN0LmhlYWRlcnMsXG4gICAgICByZWRpcmVjdDogcmVxdWVzdC5yZWRpcmVjdCxcbiAgICAgIHNpZ25hbDogcmVxdWVzdC5zaWduYWxcbiAgICB9KTtcbiAgICBpZiAoaXNFcnJvclJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAvLyBTdG9yZSBvZmYgdGhlIHBlbmRpbmcgZXJyb3IgLSB3ZSB1c2UgaXQgdG8gZGV0ZXJtaW5lIHdoaWNoIGxvYWRlcnNcbiAgICAgIC8vIHRvIGNhbGwgYW5kIHdpbGwgY29tbWl0IGl0IHdoZW4gd2UgY29tcGxldGUgdGhlIG5hdmlnYXRpb25cbiAgICAgIGxldCBib3VuZGFyeU1hdGNoID0gc2tpcExvYWRlckVycm9yQnViYmxpbmcgPyBhY3Rpb25NYXRjaCA6IGZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcywgYWN0aW9uTWF0Y2gucm91dGUuaWQpO1xuICAgICAgbGV0IGNvbnRleHQgPSBhd2FpdCBsb2FkUm91dGVEYXRhKGxvYWRlclJlcXVlc3QsIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0LCBkYXRhU3RyYXRlZ3ksIHNraXBMb2FkZXJFcnJvckJ1YmJsaW5nLCBudWxsLCBbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZCwgcmVzdWx0XSk7XG4gICAgICAvLyBhY3Rpb24gc3RhdHVzIGNvZGVzIHRha2UgcHJlY2VkZW5jZSBvdmVyIGxvYWRlciBzdGF0dXMgY29kZXNcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgY29udGV4dCwge1xuICAgICAgICBzdGF0dXNDb2RlOiBpc1JvdXRlRXJyb3JSZXNwb25zZShyZXN1bHQuZXJyb3IpID8gcmVzdWx0LmVycm9yLnN0YXR1cyA6IHJlc3VsdC5zdGF0dXNDb2RlICE9IG51bGwgPyByZXN1bHQuc3RhdHVzQ29kZSA6IDUwMCxcbiAgICAgICAgYWN0aW9uRGF0YTogbnVsbCxcbiAgICAgICAgYWN0aW9uSGVhZGVyczogX2V4dGVuZHMoe30sIHJlc3VsdC5oZWFkZXJzID8ge1xuICAgICAgICAgIFthY3Rpb25NYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5oZWFkZXJzXG4gICAgICAgIH0gOiB7fSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgY29udGV4dCA9IGF3YWl0IGxvYWRSb3V0ZURhdGEobG9hZGVyUmVxdWVzdCwgbWF0Y2hlcywgcmVxdWVzdENvbnRleHQsIGRhdGFTdHJhdGVneSwgc2tpcExvYWRlckVycm9yQnViYmxpbmcsIG51bGwpO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgY29udGV4dCwge1xuICAgICAgYWN0aW9uRGF0YToge1xuICAgICAgICBbYWN0aW9uTWF0Y2gucm91dGUuaWRdOiByZXN1bHQuZGF0YVxuICAgICAgfVxuICAgIH0sIHJlc3VsdC5zdGF0dXNDb2RlID8ge1xuICAgICAgc3RhdHVzQ29kZTogcmVzdWx0LnN0YXR1c0NvZGVcbiAgICB9IDoge30sIHtcbiAgICAgIGFjdGlvbkhlYWRlcnM6IHJlc3VsdC5oZWFkZXJzID8ge1xuICAgICAgICBbYWN0aW9uTWF0Y2gucm91dGUuaWRdOiByZXN1bHQuaGVhZGVyc1xuICAgICAgfSA6IHt9XG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gbG9hZFJvdXRlRGF0YShyZXF1ZXN0LCBtYXRjaGVzLCByZXF1ZXN0Q29udGV4dCwgZGF0YVN0cmF0ZWd5LCBza2lwTG9hZGVyRXJyb3JCdWJibGluZywgcm91dGVNYXRjaCwgcGVuZGluZ0FjdGlvblJlc3VsdCkge1xuICAgIGxldCBpc1JvdXRlUmVxdWVzdCA9IHJvdXRlTWF0Y2ggIT0gbnVsbDtcbiAgICAvLyBTaG9ydCBjaXJjdWl0IGlmIHdlIGhhdmUgbm8gbG9hZGVycyB0byBydW4gKHF1ZXJ5Um91dGUoKSlcbiAgICBpZiAoaXNSb3V0ZVJlcXVlc3QgJiYgIShyb3V0ZU1hdGNoICE9IG51bGwgJiYgcm91dGVNYXRjaC5yb3V0ZS5sb2FkZXIpICYmICEocm91dGVNYXRjaCAhPSBudWxsICYmIHJvdXRlTWF0Y2gucm91dGUubGF6eSkpIHtcbiAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDAwLCB7XG4gICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG4gICAgICAgIHBhdGhuYW1lOiBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZSxcbiAgICAgICAgcm91dGVJZDogcm91dGVNYXRjaCA9PSBudWxsID8gdm9pZCAwIDogcm91dGVNYXRjaC5yb3V0ZS5pZFxuICAgICAgfSk7XG4gICAgfVxuICAgIGxldCByZXF1ZXN0TWF0Y2hlcyA9IHJvdXRlTWF0Y2ggPyBbcm91dGVNYXRjaF0gOiBwZW5kaW5nQWN0aW9uUmVzdWx0ICYmIGlzRXJyb3JSZXN1bHQocGVuZGluZ0FjdGlvblJlc3VsdFsxXSkgPyBnZXRMb2FkZXJNYXRjaGVzVW50aWxCb3VuZGFyeShtYXRjaGVzLCBwZW5kaW5nQWN0aW9uUmVzdWx0WzBdKSA6IG1hdGNoZXM7XG4gICAgbGV0IG1hdGNoZXNUb0xvYWQgPSByZXF1ZXN0TWF0Y2hlcy5maWx0ZXIobSA9PiBtLnJvdXRlLmxvYWRlciB8fCBtLnJvdXRlLmxhenkpO1xuICAgIC8vIFNob3J0IGNpcmN1aXQgaWYgd2UgaGF2ZSBubyBsb2FkZXJzIHRvIHJ1biAocXVlcnkoKSlcbiAgICBpZiAobWF0Y2hlc1RvTG9hZC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1hdGNoZXMsXG4gICAgICAgIC8vIEFkZCBhIG51bGwgZm9yIGFsbCBtYXRjaGVkIHJvdXRlcyBmb3IgcHJvcGVyIHJldmFsaWRhdGlvbiBvbiB0aGUgY2xpZW50XG4gICAgICAgIGxvYWRlckRhdGE6IG1hdGNoZXMucmVkdWNlKChhY2MsIG0pID0+IE9iamVjdC5hc3NpZ24oYWNjLCB7XG4gICAgICAgICAgW20ucm91dGUuaWRdOiBudWxsXG4gICAgICAgIH0pLCB7fSksXG4gICAgICAgIGVycm9yczogcGVuZGluZ0FjdGlvblJlc3VsdCAmJiBpc0Vycm9yUmVzdWx0KHBlbmRpbmdBY3Rpb25SZXN1bHRbMV0pID8ge1xuICAgICAgICAgIFtwZW5kaW5nQWN0aW9uUmVzdWx0WzBdXTogcGVuZGluZ0FjdGlvblJlc3VsdFsxXS5lcnJvclxuICAgICAgICB9IDogbnVsbCxcbiAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICBsb2FkZXJIZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aXZlRGVmZXJyZWRzOiBudWxsXG4gICAgICB9O1xuICAgIH1cbiAgICBsZXQgcmVzdWx0cyA9IGF3YWl0IGNhbGxEYXRhU3RyYXRlZ3koXCJsb2FkZXJcIiwgcmVxdWVzdCwgbWF0Y2hlc1RvTG9hZCwgbWF0Y2hlcywgaXNSb3V0ZVJlcXVlc3QsIHJlcXVlc3RDb250ZXh0LCBkYXRhU3RyYXRlZ3kpO1xuICAgIGlmIChyZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICB0aHJvd1N0YXRpY0hhbmRsZXJBYm9ydGVkRXJyb3IocmVxdWVzdCwgaXNSb3V0ZVJlcXVlc3QsIGZ1dHVyZSk7XG4gICAgfVxuICAgIC8vIFByb2Nlc3MgYW5kIGNvbW1pdCBvdXRwdXQgZnJvbSBsb2FkZXJzXG4gICAgbGV0IGFjdGl2ZURlZmVycmVkcyA9IG5ldyBNYXAoKTtcbiAgICBsZXQgY29udGV4dCA9IHByb2Nlc3NSb3V0ZUxvYWRlckRhdGEobWF0Y2hlcywgcmVzdWx0cywgcGVuZGluZ0FjdGlvblJlc3VsdCwgYWN0aXZlRGVmZXJyZWRzLCBza2lwTG9hZGVyRXJyb3JCdWJibGluZyk7XG4gICAgLy8gQWRkIGEgbnVsbCBmb3IgYW55IG5vbi1sb2FkZXIgbWF0Y2hlcyBmb3IgcHJvcGVyIHJldmFsaWRhdGlvbiBvbiB0aGUgY2xpZW50XG4gICAgbGV0IGV4ZWN1dGVkTG9hZGVycyA9IG5ldyBTZXQobWF0Y2hlc1RvTG9hZC5tYXAobWF0Y2ggPT4gbWF0Y2gucm91dGUuaWQpKTtcbiAgICBtYXRjaGVzLmZvckVhY2gobWF0Y2ggPT4ge1xuICAgICAgaWYgKCFleGVjdXRlZExvYWRlcnMuaGFzKG1hdGNoLnJvdXRlLmlkKSkge1xuICAgICAgICBjb250ZXh0LmxvYWRlckRhdGFbbWF0Y2gucm91dGUuaWRdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGNvbnRleHQsIHtcbiAgICAgIG1hdGNoZXMsXG4gICAgICBhY3RpdmVEZWZlcnJlZHM6IGFjdGl2ZURlZmVycmVkcy5zaXplID4gMCA/IE9iamVjdC5mcm9tRW50cmllcyhhY3RpdmVEZWZlcnJlZHMuZW50cmllcygpKSA6IG51bGxcbiAgICB9KTtcbiAgfVxuICAvLyBVdGlsaXR5IHdyYXBwZXIgZm9yIGNhbGxpbmcgZGF0YVN0cmF0ZWd5IHNlcnZlci1zaWRlIHdpdGhvdXQgaGF2aW5nIHRvXG4gIC8vIHBhc3MgYXJvdW5kIHRoZSBtYW5pZmVzdCwgbWFwUm91dGVQcm9wZXJ0aWVzLCBldGMuXG4gIGFzeW5jIGZ1bmN0aW9uIGNhbGxEYXRhU3RyYXRlZ3kodHlwZSwgcmVxdWVzdCwgbWF0Y2hlc1RvTG9hZCwgbWF0Y2hlcywgaXNSb3V0ZVJlcXVlc3QsIHJlcXVlc3RDb250ZXh0LCBkYXRhU3RyYXRlZ3kpIHtcbiAgICBsZXQgcmVzdWx0cyA9IGF3YWl0IGNhbGxEYXRhU3RyYXRlZ3lJbXBsKGRhdGFTdHJhdGVneSB8fCBkZWZhdWx0RGF0YVN0cmF0ZWd5LCB0eXBlLCBudWxsLCByZXF1ZXN0LCBtYXRjaGVzVG9Mb2FkLCBtYXRjaGVzLCBudWxsLCBtYW5pZmVzdCwgbWFwUm91dGVQcm9wZXJ0aWVzLCByZXF1ZXN0Q29udGV4dCk7XG4gICAgbGV0IGRhdGFSZXN1bHRzID0ge307XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwobWF0Y2hlcy5tYXAoYXN5bmMgbWF0Y2ggPT4ge1xuICAgICAgaWYgKCEobWF0Y2gucm91dGUuaWQgaW4gcmVzdWx0cykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdHNbbWF0Y2gucm91dGUuaWRdO1xuICAgICAgaWYgKGlzUmVkaXJlY3REYXRhU3RyYXRlZ3lSZXN1bHRSZXN1bHQocmVzdWx0KSkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXN1bHQucmVzdWx0O1xuICAgICAgICAvLyBUaHJvdyByZWRpcmVjdHMgYW5kIGxldCB0aGUgc2VydmVyIGhhbmRsZSB0aGVtIHdpdGggYW4gSFRUUCByZWRpcmVjdFxuICAgICAgICB0aHJvdyBub3JtYWxpemVSZWxhdGl2ZVJvdXRpbmdSZWRpcmVjdFJlc3BvbnNlKHJlc3BvbnNlLCByZXF1ZXN0LCBtYXRjaC5yb3V0ZS5pZCwgbWF0Y2hlcywgYmFzZW5hbWUsIGZ1dHVyZS52N19yZWxhdGl2ZVNwbGF0UGF0aCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNSZXNwb25zZShyZXN1bHQucmVzdWx0KSAmJiBpc1JvdXRlUmVxdWVzdCkge1xuICAgICAgICAvLyBGb3IgU1NSIHNpbmdsZS1yb3V0ZSByZXF1ZXN0cywgd2Ugd2FudCB0byBoYW5kIFJlc3BvbnNlcyBiYWNrXG4gICAgICAgIC8vIGRpcmVjdGx5IHdpdGhvdXQgdW53cmFwcGluZ1xuICAgICAgICB0aHJvdyByZXN1bHQ7XG4gICAgICB9XG4gICAgICBkYXRhUmVzdWx0c1ttYXRjaC5yb3V0ZS5pZF0gPSBhd2FpdCBjb252ZXJ0RGF0YVN0cmF0ZWd5UmVzdWx0VG9EYXRhUmVzdWx0KHJlc3VsdCk7XG4gICAgfSkpO1xuICAgIHJldHVybiBkYXRhUmVzdWx0cztcbiAgfVxuICByZXR1cm4ge1xuICAgIGRhdGFSb3V0ZXMsXG4gICAgcXVlcnksXG4gICAgcXVlcnlSb3V0ZVxuICB9O1xufVxuLy8jZW5kcmVnaW9uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8jcmVnaW9uIEhlbHBlcnNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vKipcbiAqIEdpdmVuIGFuIGV4aXN0aW5nIFN0YXRpY0hhbmRsZXJDb250ZXh0IGFuZCBhbiBlcnJvciB0aHJvd24gYXQgcmVuZGVyIHRpbWUsXG4gKiBwcm92aWRlIGFuIHVwZGF0ZWQgU3RhdGljSGFuZGxlckNvbnRleHQgc3VpdGFibGUgZm9yIGEgc2Vjb25kIFNTUiByZW5kZXJcbiAqL1xuZnVuY3Rpb24gZ2V0U3RhdGljQ29udGV4dEZyb21FcnJvcihyb3V0ZXMsIGNvbnRleHQsIGVycm9yKSB7XG4gIGxldCBuZXdDb250ZXh0ID0gX2V4dGVuZHMoe30sIGNvbnRleHQsIHtcbiAgICBzdGF0dXNDb2RlOiBpc1JvdXRlRXJyb3JSZXNwb25zZShlcnJvcikgPyBlcnJvci5zdGF0dXMgOiA1MDAsXG4gICAgZXJyb3JzOiB7XG4gICAgICBbY29udGV4dC5fZGVlcGVzdFJlbmRlcmVkQm91bmRhcnlJZCB8fCByb3V0ZXNbMF0uaWRdOiBlcnJvclxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBuZXdDb250ZXh0O1xufVxuZnVuY3Rpb24gdGhyb3dTdGF0aWNIYW5kbGVyQWJvcnRlZEVycm9yKHJlcXVlc3QsIGlzUm91dGVSZXF1ZXN0LCBmdXR1cmUpIHtcbiAgaWYgKGZ1dHVyZS52N190aHJvd0Fib3J0UmVhc29uICYmIHJlcXVlc3Quc2lnbmFsLnJlYXNvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgcmVxdWVzdC5zaWduYWwucmVhc29uO1xuICB9XG4gIGxldCBtZXRob2QgPSBpc1JvdXRlUmVxdWVzdCA/IFwicXVlcnlSb3V0ZVwiIDogXCJxdWVyeVwiO1xuICB0aHJvdyBuZXcgRXJyb3IobWV0aG9kICsgXCIoKSBjYWxsIGFib3J0ZWQ6IFwiICsgcmVxdWVzdC5tZXRob2QgKyBcIiBcIiArIHJlcXVlc3QudXJsKTtcbn1cbmZ1bmN0aW9uIGlzU3VibWlzc2lvbk5hdmlnYXRpb24ob3B0cykge1xuICByZXR1cm4gb3B0cyAhPSBudWxsICYmIChcImZvcm1EYXRhXCIgaW4gb3B0cyAmJiBvcHRzLmZvcm1EYXRhICE9IG51bGwgfHwgXCJib2R5XCIgaW4gb3B0cyAmJiBvcHRzLmJvZHkgIT09IHVuZGVmaW5lZCk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVUbyhsb2NhdGlvbiwgbWF0Y2hlcywgYmFzZW5hbWUsIHByZXBlbmRCYXNlbmFtZSwgdG8sIHY3X3JlbGF0aXZlU3BsYXRQYXRoLCBmcm9tUm91dGVJZCwgcmVsYXRpdmUpIHtcbiAgbGV0IGNvbnRleHR1YWxNYXRjaGVzO1xuICBsZXQgYWN0aXZlUm91dGVNYXRjaDtcbiAgaWYgKGZyb21Sb3V0ZUlkKSB7XG4gICAgLy8gR3JhYiBtYXRjaGVzIHVwIHRvIHRoZSBjYWxsaW5nIHJvdXRlIHNvIG91ciByb3V0ZS1yZWxhdGl2ZSBsb2dpYyBpc1xuICAgIC8vIHJlbGF0aXZlIHRvIHRoZSBjb3JyZWN0IHNvdXJjZSByb3V0ZVxuICAgIGNvbnRleHR1YWxNYXRjaGVzID0gW107XG4gICAgZm9yIChsZXQgbWF0Y2ggb2YgbWF0Y2hlcykge1xuICAgICAgY29udGV4dHVhbE1hdGNoZXMucHVzaChtYXRjaCk7XG4gICAgICBpZiAobWF0Y2gucm91dGUuaWQgPT09IGZyb21Sb3V0ZUlkKSB7XG4gICAgICAgIGFjdGl2ZVJvdXRlTWF0Y2ggPSBtYXRjaDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnRleHR1YWxNYXRjaGVzID0gbWF0Y2hlcztcbiAgICBhY3RpdmVSb3V0ZU1hdGNoID0gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdO1xuICB9XG4gIC8vIFJlc29sdmUgdGhlIHJlbGF0aXZlIHBhdGhcbiAgbGV0IHBhdGggPSByZXNvbHZlVG8odG8gPyB0byA6IFwiLlwiLCBnZXRSZXNvbHZlVG9NYXRjaGVzKGNvbnRleHR1YWxNYXRjaGVzLCB2N19yZWxhdGl2ZVNwbGF0UGF0aCksIHN0cmlwQmFzZW5hbWUobG9jYXRpb24ucGF0aG5hbWUsIGJhc2VuYW1lKSB8fCBsb2NhdGlvbi5wYXRobmFtZSwgcmVsYXRpdmUgPT09IFwicGF0aFwiKTtcbiAgLy8gV2hlbiBgdG9gIGlzIG5vdCBzcGVjaWZpZWQgd2UgaW5oZXJpdCBzZWFyY2gvaGFzaCBmcm9tIHRoZSBjdXJyZW50XG4gIC8vIGxvY2F0aW9uLCB1bmxpa2Ugd2hlbiB0bz1cIi5cIiBhbmQgd2UganVzdCBpbmhlcml0IHRoZSBwYXRoLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3JlbWl4LXJ1bi9yZW1peC9pc3N1ZXMvOTI3XG4gIGlmICh0byA9PSBudWxsKSB7XG4gICAgcGF0aC5zZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2g7XG4gICAgcGF0aC5oYXNoID0gbG9jYXRpb24uaGFzaDtcbiAgfVxuICAvLyBBY2NvdW50IGZvciBgP2luZGV4YCBwYXJhbXMgd2hlbiByb3V0aW5nIHRvIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gIGlmICgodG8gPT0gbnVsbCB8fCB0byA9PT0gXCJcIiB8fCB0byA9PT0gXCIuXCIpICYmIGFjdGl2ZVJvdXRlTWF0Y2gpIHtcbiAgICBsZXQgbmFrZWRJbmRleCA9IGhhc05ha2VkSW5kZXhRdWVyeShwYXRoLnNlYXJjaCk7XG4gICAgaWYgKGFjdGl2ZVJvdXRlTWF0Y2gucm91dGUuaW5kZXggJiYgIW5ha2VkSW5kZXgpIHtcbiAgICAgIC8vIEFkZCBvbmUgd2hlbiB3ZSdyZSB0YXJnZXRpbmcgYW4gaW5kZXggcm91dGVcbiAgICAgIHBhdGguc2VhcmNoID0gcGF0aC5zZWFyY2ggPyBwYXRoLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgXCI/aW5kZXgmXCIpIDogXCI/aW5kZXhcIjtcbiAgICB9IGVsc2UgaWYgKCFhY3RpdmVSb3V0ZU1hdGNoLnJvdXRlLmluZGV4ICYmIG5ha2VkSW5kZXgpIHtcbiAgICAgIC8vIFJlbW92ZSBleGlzdGluZyBvbmVzIHdoZW4gd2UncmUgbm90XG4gICAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXRoLnNlYXJjaCk7XG4gICAgICBsZXQgaW5kZXhWYWx1ZXMgPSBwYXJhbXMuZ2V0QWxsKFwiaW5kZXhcIik7XG4gICAgICBwYXJhbXMuZGVsZXRlKFwiaW5kZXhcIik7XG4gICAgICBpbmRleFZhbHVlcy5maWx0ZXIodiA9PiB2KS5mb3JFYWNoKHYgPT4gcGFyYW1zLmFwcGVuZChcImluZGV4XCIsIHYpKTtcbiAgICAgIGxldCBxcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgcGF0aC5zZWFyY2ggPSBxcyA/IFwiP1wiICsgcXMgOiBcIlwiO1xuICAgIH1cbiAgfVxuICAvLyBJZiB3ZSdyZSBvcGVyYXRpbmcgd2l0aGluIGEgYmFzZW5hbWUsIHByZXBlbmQgaXQgdG8gdGhlIHBhdGhuYW1lLiAgSWZcbiAgLy8gdGhpcyBpcyBhIHJvb3QgbmF2aWdhdGlvbiwgdGhlbiBqdXN0IHVzZSB0aGUgcmF3IGJhc2VuYW1lIHdoaWNoIGFsbG93c1xuICAvLyB0aGUgYmFzZW5hbWUgdG8gaGF2ZSBmdWxsIGNvbnRyb2wgb3ZlciB0aGUgcHJlc2VuY2Ugb2YgYSB0cmFpbGluZyBzbGFzaFxuICAvLyBvbiByb290IGFjdGlvbnNcbiAgaWYgKHByZXBlbmRCYXNlbmFtZSAmJiBiYXNlbmFtZSAhPT0gXCIvXCIpIHtcbiAgICBwYXRoLnBhdGhuYW1lID0gcGF0aC5wYXRobmFtZSA9PT0gXCIvXCIgPyBiYXNlbmFtZSA6IGpvaW5QYXRocyhbYmFzZW5hbWUsIHBhdGgucGF0aG5hbWVdKTtcbiAgfVxuICByZXR1cm4gY3JlYXRlUGF0aChwYXRoKTtcbn1cbi8vIE5vcm1hbGl6ZSBuYXZpZ2F0aW9uIG9wdGlvbnMgYnkgY29udmVydGluZyBmb3JtTWV0aG9kPUdFVCBmb3JtRGF0YSBvYmplY3RzIHRvXG4vLyBVUkxTZWFyY2hQYXJhbXMgc28gdGhleSBiZWhhdmUgaWRlbnRpY2FsbHkgdG8gbGlua3Mgd2l0aCBxdWVyeSBwYXJhbXNcbmZ1bmN0aW9uIG5vcm1hbGl6ZU5hdmlnYXRlT3B0aW9ucyhub3JtYWxpemVGb3JtTWV0aG9kLCBpc0ZldGNoZXIsIHBhdGgsIG9wdHMpIHtcbiAgLy8gUmV0dXJuIGxvY2F0aW9uIHZlcmJhdGltIG9uIG5vbi1zdWJtaXNzaW9uIG5hdmlnYXRpb25zXG4gIGlmICghb3B0cyB8fCAhaXNTdWJtaXNzaW9uTmF2aWdhdGlvbihvcHRzKSkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoXG4gICAgfTtcbiAgfVxuICBpZiAob3B0cy5mb3JtTWV0aG9kICYmICFpc1ZhbGlkTWV0aG9kKG9wdHMuZm9ybU1ldGhvZCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aCxcbiAgICAgIGVycm9yOiBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNSwge1xuICAgICAgICBtZXRob2Q6IG9wdHMuZm9ybU1ldGhvZFxuICAgICAgfSlcbiAgICB9O1xuICB9XG4gIGxldCBnZXRJbnZhbGlkQm9keUVycm9yID0gKCkgPT4gKHtcbiAgICBwYXRoLFxuICAgIGVycm9yOiBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwMCwge1xuICAgICAgdHlwZTogXCJpbnZhbGlkLWJvZHlcIlxuICAgIH0pXG4gIH0pO1xuICAvLyBDcmVhdGUgYSBTdWJtaXNzaW9uIG9uIG5vbi1HRVQgbmF2aWdhdGlvbnNcbiAgbGV0IHJhd0Zvcm1NZXRob2QgPSBvcHRzLmZvcm1NZXRob2QgfHwgXCJnZXRcIjtcbiAgbGV0IGZvcm1NZXRob2QgPSBub3JtYWxpemVGb3JtTWV0aG9kID8gcmF3Rm9ybU1ldGhvZC50b1VwcGVyQ2FzZSgpIDogcmF3Rm9ybU1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICBsZXQgZm9ybUFjdGlvbiA9IHN0cmlwSGFzaEZyb21QYXRoKHBhdGgpO1xuICBpZiAob3B0cy5ib2R5ICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAob3B0cy5mb3JtRW5jVHlwZSA9PT0gXCJ0ZXh0L3BsYWluXCIpIHtcbiAgICAgIC8vIHRleHQgb25seSBzdXBwb3J0IFBPU1QvUFVUL1BBVENIL0RFTEVURSBzdWJtaXNzaW9uc1xuICAgICAgaWYgKCFpc011dGF0aW9uTWV0aG9kKGZvcm1NZXRob2QpKSB7XG4gICAgICAgIHJldHVybiBnZXRJbnZhbGlkQm9keUVycm9yKCk7XG4gICAgICB9XG4gICAgICBsZXQgdGV4dCA9IHR5cGVvZiBvcHRzLmJvZHkgPT09IFwic3RyaW5nXCIgPyBvcHRzLmJvZHkgOiBvcHRzLmJvZHkgaW5zdGFuY2VvZiBGb3JtRGF0YSB8fCBvcHRzLmJvZHkgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXMgP1xuICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybS1jb250cm9sLWluZnJhc3RydWN0dXJlLmh0bWwjcGxhaW4tdGV4dC1mb3JtLWRhdGFcbiAgICAgIEFycmF5LmZyb20ob3B0cy5ib2R5LmVudHJpZXMoKSkucmVkdWNlKChhY2MsIF9yZWYzKSA9PiB7XG4gICAgICAgIGxldCBbbmFtZSwgdmFsdWVdID0gX3JlZjM7XG4gICAgICAgIHJldHVybiBcIlwiICsgYWNjICsgbmFtZSArIFwiPVwiICsgdmFsdWUgKyBcIlxcblwiO1xuICAgICAgfSwgXCJcIikgOiBTdHJpbmcob3B0cy5ib2R5KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIHN1Ym1pc3Npb246IHtcbiAgICAgICAgICBmb3JtTWV0aG9kLFxuICAgICAgICAgIGZvcm1BY3Rpb24sXG4gICAgICAgICAgZm9ybUVuY1R5cGU6IG9wdHMuZm9ybUVuY1R5cGUsXG4gICAgICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgICBqc29uOiB1bmRlZmluZWQsXG4gICAgICAgICAgdGV4dFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAob3B0cy5mb3JtRW5jVHlwZSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIHtcbiAgICAgIC8vIGpzb24gb25seSBzdXBwb3J0cyBQT1NUL1BVVC9QQVRDSC9ERUxFVEUgc3VibWlzc2lvbnNcbiAgICAgIGlmICghaXNNdXRhdGlvbk1ldGhvZChmb3JtTWV0aG9kKSkge1xuICAgICAgICByZXR1cm4gZ2V0SW52YWxpZEJvZHlFcnJvcigpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGpzb24gPSB0eXBlb2Ygb3B0cy5ib2R5ID09PSBcInN0cmluZ1wiID8gSlNPTi5wYXJzZShvcHRzLmJvZHkpIDogb3B0cy5ib2R5O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgc3VibWlzc2lvbjoge1xuICAgICAgICAgICAgZm9ybU1ldGhvZCxcbiAgICAgICAgICAgIGZvcm1BY3Rpb24sXG4gICAgICAgICAgICBmb3JtRW5jVHlwZTogb3B0cy5mb3JtRW5jVHlwZSxcbiAgICAgICAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBqc29uLFxuICAgICAgICAgICAgdGV4dDogdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZ2V0SW52YWxpZEJvZHlFcnJvcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpbnZhcmlhbnQodHlwZW9mIEZvcm1EYXRhID09PSBcImZ1bmN0aW9uXCIsIFwiRm9ybURhdGEgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50XCIpO1xuICBsZXQgc2VhcmNoUGFyYW1zO1xuICBsZXQgZm9ybURhdGE7XG4gIGlmIChvcHRzLmZvcm1EYXRhKSB7XG4gICAgc2VhcmNoUGFyYW1zID0gY29udmVydEZvcm1EYXRhVG9TZWFyY2hQYXJhbXMob3B0cy5mb3JtRGF0YSk7XG4gICAgZm9ybURhdGEgPSBvcHRzLmZvcm1EYXRhO1xuICB9IGVsc2UgaWYgKG9wdHMuYm9keSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgc2VhcmNoUGFyYW1zID0gY29udmVydEZvcm1EYXRhVG9TZWFyY2hQYXJhbXMob3B0cy5ib2R5KTtcbiAgICBmb3JtRGF0YSA9IG9wdHMuYm9keTtcbiAgfSBlbHNlIGlmIChvcHRzLmJvZHkgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXMpIHtcbiAgICBzZWFyY2hQYXJhbXMgPSBvcHRzLmJvZHk7XG4gICAgZm9ybURhdGEgPSBjb252ZXJ0U2VhcmNoUGFyYW1zVG9Gb3JtRGF0YShzZWFyY2hQYXJhbXMpO1xuICB9IGVsc2UgaWYgKG9wdHMuYm9keSA9PSBudWxsKSB7XG4gICAgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMob3B0cy5ib2R5KTtcbiAgICAgIGZvcm1EYXRhID0gY29udmVydFNlYXJjaFBhcmFtc1RvRm9ybURhdGEoc2VhcmNoUGFyYW1zKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZ2V0SW52YWxpZEJvZHlFcnJvcigpO1xuICAgIH1cbiAgfVxuICBsZXQgc3VibWlzc2lvbiA9IHtcbiAgICBmb3JtTWV0aG9kLFxuICAgIGZvcm1BY3Rpb24sXG4gICAgZm9ybUVuY1R5cGU6IG9wdHMgJiYgb3B0cy5mb3JtRW5jVHlwZSB8fCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgIGZvcm1EYXRhLFxuICAgIGpzb246IHVuZGVmaW5lZCxcbiAgICB0ZXh0OiB1bmRlZmluZWRcbiAgfTtcbiAgaWYgKGlzTXV0YXRpb25NZXRob2Qoc3VibWlzc2lvbi5mb3JtTWV0aG9kKSkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoLFxuICAgICAgc3VibWlzc2lvblxuICAgIH07XG4gIH1cbiAgLy8gRmxhdHRlbiBzdWJtaXNzaW9uIG9udG8gVVJMU2VhcmNoUGFyYW1zIGZvciBHRVQgc3VibWlzc2lvbnNcbiAgbGV0IHBhcnNlZFBhdGggPSBwYXJzZVBhdGgocGF0aCk7XG4gIC8vIE9uIEdFVCBuYXZpZ2F0aW9uIHN1Ym1pc3Npb25zIHdlIGNhbiBkcm9wIHRoZSA/aW5kZXggcGFyYW0gZnJvbSB0aGVcbiAgLy8gcmVzdWx0aW5nIGxvY2F0aW9uIHNpbmNlIGFsbCBsb2FkZXJzIHdpbGwgcnVuLiAgQnV0IGZldGNoZXIgR0VUIHN1Ym1pc3Npb25zXG4gIC8vIG9ubHkgcnVuIGEgc2luZ2xlIGxvYWRlciBzbyB3ZSBuZWVkIHRvIHByZXNlcnZlIGFueSBpbmNvbWluZyA/aW5kZXggcGFyYW1zXG4gIGlmIChpc0ZldGNoZXIgJiYgcGFyc2VkUGF0aC5zZWFyY2ggJiYgaGFzTmFrZWRJbmRleFF1ZXJ5KHBhcnNlZFBhdGguc2VhcmNoKSkge1xuICAgIHNlYXJjaFBhcmFtcy5hcHBlbmQoXCJpbmRleFwiLCBcIlwiKTtcbiAgfVxuICBwYXJzZWRQYXRoLnNlYXJjaCA9IFwiP1wiICsgc2VhcmNoUGFyYW1zO1xuICByZXR1cm4ge1xuICAgIHBhdGg6IGNyZWF0ZVBhdGgocGFyc2VkUGF0aCksXG4gICAgc3VibWlzc2lvblxuICB9O1xufVxuLy8gRmlsdGVyIG91dCBhbGwgcm91dGVzIGF0L2JlbG93IGFueSBjYXVnaHQgZXJyb3IgYXMgdGhleSBhcmVuJ3QgZ29pbmcgdG9cbi8vIHJlbmRlciBzbyB3ZSBkb24ndCBuZWVkIHRvIGxvYWQgdGhlbVxuZnVuY3Rpb24gZ2V0TG9hZGVyTWF0Y2hlc1VudGlsQm91bmRhcnkobWF0Y2hlcywgYm91bmRhcnlJZCwgaW5jbHVkZUJvdW5kYXJ5KSB7XG4gIGlmIChpbmNsdWRlQm91bmRhcnkgPT09IHZvaWQgMCkge1xuICAgIGluY2x1ZGVCb3VuZGFyeSA9IGZhbHNlO1xuICB9XG4gIGxldCBpbmRleCA9IG1hdGNoZXMuZmluZEluZGV4KG0gPT4gbS5yb3V0ZS5pZCA9PT0gYm91bmRhcnlJZCk7XG4gIGlmIChpbmRleCA+PSAwKSB7XG4gICAgcmV0dXJuIG1hdGNoZXMuc2xpY2UoMCwgaW5jbHVkZUJvdW5kYXJ5ID8gaW5kZXggKyAxIDogaW5kZXgpO1xuICB9XG4gIHJldHVybiBtYXRjaGVzO1xufVxuZnVuY3Rpb24gZ2V0TWF0Y2hlc1RvTG9hZChoaXN0b3J5LCBzdGF0ZSwgbWF0Y2hlcywgc3VibWlzc2lvbiwgbG9jYXRpb24sIGluaXRpYWxIeWRyYXRpb24sIHNraXBBY3Rpb25FcnJvclJldmFsaWRhdGlvbiwgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCwgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMsIGNhbmNlbGxlZEZldGNoZXJMb2FkcywgZGVsZXRlZEZldGNoZXJzLCBmZXRjaExvYWRNYXRjaGVzLCBmZXRjaFJlZGlyZWN0SWRzLCByb3V0ZXNUb1VzZSwgYmFzZW5hbWUsIHBlbmRpbmdBY3Rpb25SZXN1bHQpIHtcbiAgbGV0IGFjdGlvblJlc3VsdCA9IHBlbmRpbmdBY3Rpb25SZXN1bHQgPyBpc0Vycm9yUmVzdWx0KHBlbmRpbmdBY3Rpb25SZXN1bHRbMV0pID8gcGVuZGluZ0FjdGlvblJlc3VsdFsxXS5lcnJvciA6IHBlbmRpbmdBY3Rpb25SZXN1bHRbMV0uZGF0YSA6IHVuZGVmaW5lZDtcbiAgbGV0IGN1cnJlbnRVcmwgPSBoaXN0b3J5LmNyZWF0ZVVSTChzdGF0ZS5sb2NhdGlvbik7XG4gIGxldCBuZXh0VXJsID0gaGlzdG9yeS5jcmVhdGVVUkwobG9jYXRpb24pO1xuICAvLyBQaWNrIG5hdmlnYXRpb24gbWF0Y2hlcyB0aGF0IGFyZSBuZXQtbmV3IG9yIHF1YWxpZnkgZm9yIHJldmFsaWRhdGlvblxuICBsZXQgYm91bmRhcnlNYXRjaGVzID0gbWF0Y2hlcztcbiAgaWYgKGluaXRpYWxIeWRyYXRpb24gJiYgc3RhdGUuZXJyb3JzKSB7XG4gICAgLy8gT24gaW5pdGlhbCBoeWRyYXRpb24sIG9ubHkgY29uc2lkZXIgbWF0Y2hlcyB1cCB0byBfYW5kIGluY2x1ZGluZ18gdGhlIGJvdW5kYXJ5LlxuICAgIC8vIFRoaXMgaXMgaW5jbHVzaXZlIHRvIGhhbmRsZSBjYXNlcyB3aGVyZSBhIHNlcnZlciBsb2FkZXIgcmFuIHN1Y2Nlc3NmdWxseSxcbiAgICAvLyBhIGNoaWxkIHNlcnZlciBsb2FkZXIgYnViYmxlZCB1cCB0byB0aGlzIHJvdXRlLCBidXQgdGhpcyByb3V0ZSBoYXNcbiAgICAvLyBgY2xpZW50TG9hZGVyLmh5ZHJhdGVgIHNvIHdlIHdhbnQgdG8gc3RpbGwgcnVuIHRoZSBgY2xpZW50TG9hZGVyYCBzbyB0aGF0XG4gICAgLy8gd2UgaGF2ZSBhIGNvbXBsZXRlIHZlcnNpb24gb2YgYGxvYWRlckRhdGFgXG4gICAgYm91bmRhcnlNYXRjaGVzID0gZ2V0TG9hZGVyTWF0Y2hlc1VudGlsQm91bmRhcnkobWF0Y2hlcywgT2JqZWN0LmtleXMoc3RhdGUuZXJyb3JzKVswXSwgdHJ1ZSk7XG4gIH0gZWxzZSBpZiAocGVuZGluZ0FjdGlvblJlc3VsdCAmJiBpc0Vycm9yUmVzdWx0KHBlbmRpbmdBY3Rpb25SZXN1bHRbMV0pKSB7XG4gICAgLy8gSWYgYW4gYWN0aW9uIHRocmV3IGFuIGVycm9yLCB3ZSBjYWxsIGxvYWRlcnMgdXAgdG8sIGJ1dCBub3QgaW5jbHVkaW5nIHRoZVxuICAgIC8vIGJvdW5kYXJ5XG4gICAgYm91bmRhcnlNYXRjaGVzID0gZ2V0TG9hZGVyTWF0Y2hlc1VudGlsQm91bmRhcnkobWF0Y2hlcywgcGVuZGluZ0FjdGlvblJlc3VsdFswXSk7XG4gIH1cbiAgLy8gRG9uJ3QgcmV2YWxpZGF0ZSBsb2FkZXJzIGJ5IGRlZmF1bHQgYWZ0ZXIgYWN0aW9uIDR4eC81eHggcmVzcG9uc2VzXG4gIC8vIHdoZW4gdGhlIGZsYWcgaXMgZW5hYmxlZC4gIFRoZXkgY2FuIHN0aWxsIG9wdC1pbnRvIHJldmFsaWRhdGlvbiB2aWFcbiAgLy8gYHNob3VsZFJldmFsaWRhdGVgIHZpYSBgYWN0aW9uUmVzdWx0YFxuICBsZXQgYWN0aW9uU3RhdHVzID0gcGVuZGluZ0FjdGlvblJlc3VsdCA/IHBlbmRpbmdBY3Rpb25SZXN1bHRbMV0uc3RhdHVzQ29kZSA6IHVuZGVmaW5lZDtcbiAgbGV0IHNob3VsZFNraXBSZXZhbGlkYXRpb24gPSBza2lwQWN0aW9uRXJyb3JSZXZhbGlkYXRpb24gJiYgYWN0aW9uU3RhdHVzICYmIGFjdGlvblN0YXR1cyA+PSA0MDA7XG4gIGxldCBuYXZpZ2F0aW9uTWF0Y2hlcyA9IGJvdW5kYXJ5TWF0Y2hlcy5maWx0ZXIoKG1hdGNoLCBpbmRleCkgPT4ge1xuICAgIGxldCB7XG4gICAgICByb3V0ZVxuICAgIH0gPSBtYXRjaDtcbiAgICBpZiAocm91dGUubGF6eSkge1xuICAgICAgLy8gV2UgaGF2ZW4ndCBsb2FkZWQgdGhpcyByb3V0ZSB5ZXQgc28gd2UgZG9uJ3Qga25vdyBpZiBpdCdzIGdvdCBhIGxvYWRlciFcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAocm91dGUubG9hZGVyID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGluaXRpYWxIeWRyYXRpb24pIHtcbiAgICAgIHJldHVybiBzaG91bGRMb2FkUm91dGVPbkh5ZHJhdGlvbihyb3V0ZSwgc3RhdGUubG9hZGVyRGF0YSwgc3RhdGUuZXJyb3JzKTtcbiAgICB9XG4gICAgLy8gQWx3YXlzIGNhbGwgdGhlIGxvYWRlciBvbiBuZXcgcm91dGUgaW5zdGFuY2VzIGFuZCBwZW5kaW5nIGRlZmVyIGNhbmNlbGxhdGlvbnNcbiAgICBpZiAoaXNOZXdMb2FkZXIoc3RhdGUubG9hZGVyRGF0YSwgc3RhdGUubWF0Y2hlc1tpbmRleF0sIG1hdGNoKSB8fCBjYW5jZWxsZWREZWZlcnJlZFJvdXRlcy5zb21lKGlkID0+IGlkID09PSBtYXRjaC5yb3V0ZS5pZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBUaGlzIGlzIHRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIGZvciB3aGVuIHdlIHJldmFsaWRhdGUuICBJZiB0aGUgcm91dGVcbiAgICAvLyBwcm92aWRlcyBpdCdzIG93biBpbXBsZW1lbnRhdGlvbiwgdGhlbiB3ZSBnaXZlIHRoZW0gZnVsbCBjb250cm9sIGJ1dFxuICAgIC8vIHByb3ZpZGUgdGhpcyB2YWx1ZSBzbyB0aGV5IGNhbiBsZXZlcmFnZSBpdCBpZiBuZWVkZWQgYWZ0ZXIgdGhleSBjaGVja1xuICAgIC8vIHRoZWlyIG93biBzcGVjaWZpYyB1c2UgY2FzZXNcbiAgICBsZXQgY3VycmVudFJvdXRlTWF0Y2ggPSBzdGF0ZS5tYXRjaGVzW2luZGV4XTtcbiAgICBsZXQgbmV4dFJvdXRlTWF0Y2ggPSBtYXRjaDtcbiAgICByZXR1cm4gc2hvdWxkUmV2YWxpZGF0ZUxvYWRlcihtYXRjaCwgX2V4dGVuZHMoe1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIGN1cnJlbnRQYXJhbXM6IGN1cnJlbnRSb3V0ZU1hdGNoLnBhcmFtcyxcbiAgICAgIG5leHRVcmwsXG4gICAgICBuZXh0UGFyYW1zOiBuZXh0Um91dGVNYXRjaC5wYXJhbXNcbiAgICB9LCBzdWJtaXNzaW9uLCB7XG4gICAgICBhY3Rpb25SZXN1bHQsXG4gICAgICBhY3Rpb25TdGF0dXMsXG4gICAgICBkZWZhdWx0U2hvdWxkUmV2YWxpZGF0ZTogc2hvdWxkU2tpcFJldmFsaWRhdGlvbiA/IGZhbHNlIDpcbiAgICAgIC8vIEZvcmNlZCByZXZhbGlkYXRpb24gZHVlIHRvIHN1Ym1pc3Npb24sIHVzZVJldmFsaWRhdG9yLCBvciBYLVJlbWl4LVJldmFsaWRhdGVcbiAgICAgIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQgfHwgY3VycmVudFVybC5wYXRobmFtZSArIGN1cnJlbnRVcmwuc2VhcmNoID09PSBuZXh0VXJsLnBhdGhuYW1lICsgbmV4dFVybC5zZWFyY2ggfHxcbiAgICAgIC8vIFNlYXJjaCBwYXJhbXMgYWZmZWN0IGFsbCBsb2FkZXJzXG4gICAgICBjdXJyZW50VXJsLnNlYXJjaCAhPT0gbmV4dFVybC5zZWFyY2ggfHwgaXNOZXdSb3V0ZUluc3RhbmNlKGN1cnJlbnRSb3V0ZU1hdGNoLCBuZXh0Um91dGVNYXRjaClcbiAgICB9KSk7XG4gIH0pO1xuICAvLyBQaWNrIGZldGNoZXIubG9hZHMgdGhhdCBuZWVkIHRvIGJlIHJldmFsaWRhdGVkXG4gIGxldCByZXZhbGlkYXRpbmdGZXRjaGVycyA9IFtdO1xuICBmZXRjaExvYWRNYXRjaGVzLmZvckVhY2goKGYsIGtleSkgPT4ge1xuICAgIC8vIERvbid0IHJldmFsaWRhdGU6XG4gICAgLy8gIC0gb24gaW5pdGlhbCBoeWRyYXRpb24gKHNob3VsZG4ndCBiZSBhbnkgZmV0Y2hlcnMgdGhlbiBhbnl3YXkpXG4gICAgLy8gIC0gaWYgZmV0Y2hlciB3b24ndCBiZSBwcmVzZW50IGluIHRoZSBzdWJzZXF1ZW50IHJlbmRlclxuICAgIC8vICAgIC0gbm8gbG9uZ2VyIG1hdGNoZXMgdGhlIFVSTCAodjdfZmV0Y2hlclBlcnNpc3Q9ZmFsc2UpXG4gICAgLy8gICAgLSB3YXMgdW5tb3VudGVkIGJ1dCBwZXJzaXN0ZWQgZHVlIHRvIHY3X2ZldGNoZXJQZXJzaXN0PXRydWVcbiAgICBpZiAoaW5pdGlhbEh5ZHJhdGlvbiB8fCAhbWF0Y2hlcy5zb21lKG0gPT4gbS5yb3V0ZS5pZCA9PT0gZi5yb3V0ZUlkKSB8fCBkZWxldGVkRmV0Y2hlcnMuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGZldGNoZXJNYXRjaGVzID0gbWF0Y2hSb3V0ZXMocm91dGVzVG9Vc2UsIGYucGF0aCwgYmFzZW5hbWUpO1xuICAgIC8vIElmIHRoZSBmZXRjaGVyIHBhdGggbm8gbG9uZ2VyIG1hdGNoZXMsIHB1c2ggaXQgaW4gd2l0aCBudWxsIG1hdGNoZXMgc29cbiAgICAvLyB3ZSBjYW4gdHJpZ2dlciBhIDQwNCBpbiBjYWxsTG9hZGVyc0FuZE1heWJlUmVzb2x2ZURhdGEuICBOb3RlIHRoaXMgaXNcbiAgICAvLyBjdXJyZW50bHkgb25seSBhIHVzZS1jYXNlIGZvciBSZW1peCBITVIgd2hlcmUgdGhlIHJvdXRlIHRyZWUgY2FuIGNoYW5nZVxuICAgIC8vIGF0IHJ1bnRpbWUgYW5kIHJlbW92ZSBhIHJvdXRlIHByZXZpb3VzbHkgbG9hZGVkIHZpYSBhIGZldGNoZXJcbiAgICBpZiAoIWZldGNoZXJNYXRjaGVzKSB7XG4gICAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5wdXNoKHtcbiAgICAgICAga2V5LFxuICAgICAgICByb3V0ZUlkOiBmLnJvdXRlSWQsXG4gICAgICAgIHBhdGg6IGYucGF0aCxcbiAgICAgICAgbWF0Y2hlczogbnVsbCxcbiAgICAgICAgbWF0Y2g6IG51bGwsXG4gICAgICAgIGNvbnRyb2xsZXI6IG51bGxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBSZXZhbGlkYXRpbmcgZmV0Y2hlcnMgYXJlIGRlY291cGxlZCBmcm9tIHRoZSByb3V0ZSBtYXRjaGVzIHNpbmNlIHRoZXlcbiAgICAvLyBsb2FkIGZyb20gYSBzdGF0aWMgaHJlZi4gIFRoZXkgcmV2YWxpZGF0ZSBiYXNlZCBvbiBleHBsaWNpdCByZXZhbGlkYXRpb25cbiAgICAvLyAoc3VibWlzc2lvbiwgdXNlUmV2YWxpZGF0b3IsIG9yIFgtUmVtaXgtUmV2YWxpZGF0ZSlcbiAgICBsZXQgZmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChrZXkpO1xuICAgIGxldCBmZXRjaGVyTWF0Y2ggPSBnZXRUYXJnZXRNYXRjaChmZXRjaGVyTWF0Y2hlcywgZi5wYXRoKTtcbiAgICBsZXQgc2hvdWxkUmV2YWxpZGF0ZSA9IGZhbHNlO1xuICAgIGlmIChmZXRjaFJlZGlyZWN0SWRzLmhhcyhrZXkpKSB7XG4gICAgICAvLyBOZXZlciB0cmlnZ2VyIGEgcmV2YWxpZGF0aW9uIG9mIGFuIGFjdGl2ZWx5IHJlZGlyZWN0aW5nIGZldGNoZXJcbiAgICAgIHNob3VsZFJldmFsaWRhdGUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGNhbmNlbGxlZEZldGNoZXJMb2Fkcy5oYXMoa2V5KSkge1xuICAgICAgLy8gQWx3YXlzIG1hcmsgZm9yIHJldmFsaWRhdGlvbiBpZiB0aGUgZmV0Y2hlciB3YXMgY2FuY2VsbGVkXG4gICAgICBjYW5jZWxsZWRGZXRjaGVyTG9hZHMuZGVsZXRlKGtleSk7XG4gICAgICBzaG91bGRSZXZhbGlkYXRlID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGZldGNoZXIgJiYgZmV0Y2hlci5zdGF0ZSAhPT0gXCJpZGxlXCIgJiYgZmV0Y2hlci5kYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIElmIHRoZSBmZXRjaGVyIGhhc24ndCBldmVyIGNvbXBsZXRlZCBsb2FkaW5nIHlldCwgdGhlbiB0aGlzIGlzbid0IGFcbiAgICAgIC8vIHJldmFsaWRhdGlvbiwgaXQgd291bGQganVzdCBiZSBhIGJyYW5kIG5ldyBsb2FkIGlmIGFuIGV4cGxpY2l0XG4gICAgICAvLyByZXZhbGlkYXRpb24gaXMgcmVxdWlyZWRcbiAgICAgIHNob3VsZFJldmFsaWRhdGUgPSBpc1JldmFsaWRhdGlvblJlcXVpcmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdGhlcndpc2UgZmFsbCBiYWNrIG9uIGFueSB1c2VyLWRlZmluZWQgc2hvdWxkUmV2YWxpZGF0ZSwgZGVmYXVsdGluZ1xuICAgICAgLy8gdG8gZXhwbGljaXQgcmV2YWxpZGF0aW9ucyBvbmx5XG4gICAgICBzaG91bGRSZXZhbGlkYXRlID0gc2hvdWxkUmV2YWxpZGF0ZUxvYWRlcihmZXRjaGVyTWF0Y2gsIF9leHRlbmRzKHtcbiAgICAgICAgY3VycmVudFVybCxcbiAgICAgICAgY3VycmVudFBhcmFtczogc3RhdGUubWF0Y2hlc1tzdGF0ZS5tYXRjaGVzLmxlbmd0aCAtIDFdLnBhcmFtcyxcbiAgICAgICAgbmV4dFVybCxcbiAgICAgICAgbmV4dFBhcmFtczogbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdLnBhcmFtc1xuICAgICAgfSwgc3VibWlzc2lvbiwge1xuICAgICAgICBhY3Rpb25SZXN1bHQsXG4gICAgICAgIGFjdGlvblN0YXR1cyxcbiAgICAgICAgZGVmYXVsdFNob3VsZFJldmFsaWRhdGU6IHNob3VsZFNraXBSZXZhbGlkYXRpb24gPyBmYWxzZSA6IGlzUmV2YWxpZGF0aW9uUmVxdWlyZWRcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYgKHNob3VsZFJldmFsaWRhdGUpIHtcbiAgICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLnB1c2goe1xuICAgICAgICBrZXksXG4gICAgICAgIHJvdXRlSWQ6IGYucm91dGVJZCxcbiAgICAgICAgcGF0aDogZi5wYXRoLFxuICAgICAgICBtYXRjaGVzOiBmZXRjaGVyTWF0Y2hlcyxcbiAgICAgICAgbWF0Y2g6IGZldGNoZXJNYXRjaCxcbiAgICAgICAgY29udHJvbGxlcjogbmV3IEFib3J0Q29udHJvbGxlcigpXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gW25hdmlnYXRpb25NYXRjaGVzLCByZXZhbGlkYXRpbmdGZXRjaGVyc107XG59XG5mdW5jdGlvbiBzaG91bGRMb2FkUm91dGVPbkh5ZHJhdGlvbihyb3V0ZSwgbG9hZGVyRGF0YSwgZXJyb3JzKSB7XG4gIC8vIFdlIGR1bm5vIGlmIHdlIGhhdmUgYSBsb2FkZXIgLSBnb3R0YSBmaW5kIG91dCFcbiAgaWYgKHJvdXRlLmxhenkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBObyBsb2FkZXIsIG5vdGhpbmcgdG8gaW5pdGlhbGl6ZVxuICBpZiAoIXJvdXRlLmxvYWRlcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBsZXQgaGFzRGF0YSA9IGxvYWRlckRhdGEgIT0gbnVsbCAmJiBsb2FkZXJEYXRhW3JvdXRlLmlkXSAhPT0gdW5kZWZpbmVkO1xuICBsZXQgaGFzRXJyb3IgPSBlcnJvcnMgIT0gbnVsbCAmJiBlcnJvcnNbcm91dGUuaWRdICE9PSB1bmRlZmluZWQ7XG4gIC8vIERvbid0IHJ1biBpZiB3ZSBlcnJvcidkIGR1cmluZyBTU1JcbiAgaWYgKCFoYXNEYXRhICYmIGhhc0Vycm9yKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEV4cGxpY2l0bHkgb3B0aW5nLWluIHRvIHJ1bm5pbmcgb24gaHlkcmF0aW9uXG4gIGlmICh0eXBlb2Ygcm91dGUubG9hZGVyID09PSBcImZ1bmN0aW9uXCIgJiYgcm91dGUubG9hZGVyLmh5ZHJhdGUgPT09IHRydWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBPdGhlcndpc2UsIHJ1biBpZiB3ZSdyZSBub3QgeWV0IGluaXRpYWxpemVkIHdpdGggYW55dGhpbmdcbiAgcmV0dXJuICFoYXNEYXRhICYmICFoYXNFcnJvcjtcbn1cbmZ1bmN0aW9uIGlzTmV3TG9hZGVyKGN1cnJlbnRMb2FkZXJEYXRhLCBjdXJyZW50TWF0Y2gsIG1hdGNoKSB7XG4gIGxldCBpc05ldyA9XG4gIC8vIFthXSAtPiBbYSwgYl1cbiAgIWN1cnJlbnRNYXRjaCB8fFxuICAvLyBbYSwgYl0gLT4gW2EsIGNdXG4gIG1hdGNoLnJvdXRlLmlkICE9PSBjdXJyZW50TWF0Y2gucm91dGUuaWQ7XG4gIC8vIEhhbmRsZSB0aGUgY2FzZSB0aGF0IHdlIGRvbid0IGhhdmUgZGF0YSBmb3IgYSByZS11c2VkIHJvdXRlLCBwb3RlbnRpYWxseVxuICAvLyBmcm9tIGEgcHJpb3IgZXJyb3Igb3IgZnJvbSBhIGNhbmNlbGxlZCBwZW5kaW5nIGRlZmVycmVkXG4gIGxldCBpc01pc3NpbmdEYXRhID0gY3VycmVudExvYWRlckRhdGFbbWF0Y2gucm91dGUuaWRdID09PSB1bmRlZmluZWQ7XG4gIC8vIEFsd2F5cyBsb2FkIGlmIHRoaXMgaXMgYSBuZXQtbmV3IHJvdXRlIG9yIHdlIGRvbid0IHlldCBoYXZlIGRhdGFcbiAgcmV0dXJuIGlzTmV3IHx8IGlzTWlzc2luZ0RhdGE7XG59XG5mdW5jdGlvbiBpc05ld1JvdXRlSW5zdGFuY2UoY3VycmVudE1hdGNoLCBtYXRjaCkge1xuICBsZXQgY3VycmVudFBhdGggPSBjdXJyZW50TWF0Y2gucm91dGUucGF0aDtcbiAgcmV0dXJuIChcbiAgICAvLyBwYXJhbSBjaGFuZ2UgZm9yIHRoaXMgbWF0Y2gsIC91c2Vycy8xMjMgLT4gL3VzZXJzLzQ1NlxuICAgIGN1cnJlbnRNYXRjaC5wYXRobmFtZSAhPT0gbWF0Y2gucGF0aG5hbWUgfHxcbiAgICAvLyBzcGxhdCBwYXJhbSBjaGFuZ2VkLCB3aGljaCBpcyBub3QgcHJlc2VudCBpbiBtYXRjaC5wYXRoXG4gICAgLy8gZS5nLiAvZmlsZXMvaW1hZ2VzL2F2YXRhci5qcGcgLT4gZmlsZXMvZmluYW5jZXMueGxzXG4gICAgY3VycmVudFBhdGggIT0gbnVsbCAmJiBjdXJyZW50UGF0aC5lbmRzV2l0aChcIipcIikgJiYgY3VycmVudE1hdGNoLnBhcmFtc1tcIipcIl0gIT09IG1hdGNoLnBhcmFtc1tcIipcIl1cbiAgKTtcbn1cbmZ1bmN0aW9uIHNob3VsZFJldmFsaWRhdGVMb2FkZXIobG9hZGVyTWF0Y2gsIGFyZykge1xuICBpZiAobG9hZGVyTWF0Y2gucm91dGUuc2hvdWxkUmV2YWxpZGF0ZSkge1xuICAgIGxldCByb3V0ZUNob2ljZSA9IGxvYWRlck1hdGNoLnJvdXRlLnNob3VsZFJldmFsaWRhdGUoYXJnKTtcbiAgICBpZiAodHlwZW9mIHJvdXRlQ2hvaWNlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgcmV0dXJuIHJvdXRlQ2hvaWNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJnLmRlZmF1bHRTaG91bGRSZXZhbGlkYXRlO1xufVxuZnVuY3Rpb24gcGF0Y2hSb3V0ZXNJbXBsKHJvdXRlSWQsIGNoaWxkcmVuLCByb3V0ZXNUb1VzZSwgbWFuaWZlc3QsIG1hcFJvdXRlUHJvcGVydGllcykge1xuICB2YXIgX2NoaWxkcmVuVG9QYXRjaDtcbiAgbGV0IGNoaWxkcmVuVG9QYXRjaDtcbiAgaWYgKHJvdXRlSWQpIHtcbiAgICBsZXQgcm91dGUgPSBtYW5pZmVzdFtyb3V0ZUlkXTtcbiAgICBpbnZhcmlhbnQocm91dGUsIFwiTm8gcm91dGUgZm91bmQgdG8gcGF0Y2ggY2hpbGRyZW4gaW50bzogcm91dGVJZCA9IFwiICsgcm91dGVJZCk7XG4gICAgaWYgKCFyb3V0ZS5jaGlsZHJlbikge1xuICAgICAgcm91dGUuY2hpbGRyZW4gPSBbXTtcbiAgICB9XG4gICAgY2hpbGRyZW5Ub1BhdGNoID0gcm91dGUuY2hpbGRyZW47XG4gIH0gZWxzZSB7XG4gICAgY2hpbGRyZW5Ub1BhdGNoID0gcm91dGVzVG9Vc2U7XG4gIH1cbiAgLy8gRG9uJ3QgcGF0Y2ggaW4gcm91dGVzIHdlIGFscmVhZHkga25vdyBhYm91dCBzbyB0aGF0IGBwYXRjaGAgaXMgaWRlbXBvdGVudFxuICAvLyB0byBzaW1wbGlmeSB1c2VyLWxhbmQgY29kZS4gVGhpcyBpcyB1c2VmdWwgYmVjYXVzZSB3ZSByZS1jYWxsIHRoZVxuICAvLyBgcGF0Y2hSb3V0ZXNPbk5hdmlnYXRpb25gIGZ1bmN0aW9uIGZvciBtYXRjaGVkIHJvdXRlcyB3aXRoIHBhcmFtcy5cbiAgbGV0IHVuaXF1ZUNoaWxkcmVuID0gY2hpbGRyZW4uZmlsdGVyKG5ld1JvdXRlID0+ICFjaGlsZHJlblRvUGF0Y2guc29tZShleGlzdGluZ1JvdXRlID0+IGlzU2FtZVJvdXRlKG5ld1JvdXRlLCBleGlzdGluZ1JvdXRlKSkpO1xuICBsZXQgbmV3Um91dGVzID0gY29udmVydFJvdXRlc1RvRGF0YVJvdXRlcyh1bmlxdWVDaGlsZHJlbiwgbWFwUm91dGVQcm9wZXJ0aWVzLCBbcm91dGVJZCB8fCBcIl9cIiwgXCJwYXRjaFwiLCBTdHJpbmcoKChfY2hpbGRyZW5Ub1BhdGNoID0gY2hpbGRyZW5Ub1BhdGNoKSA9PSBudWxsID8gdm9pZCAwIDogX2NoaWxkcmVuVG9QYXRjaC5sZW5ndGgpIHx8IFwiMFwiKV0sIG1hbmlmZXN0KTtcbiAgY2hpbGRyZW5Ub1BhdGNoLnB1c2goLi4ubmV3Um91dGVzKTtcbn1cbmZ1bmN0aW9uIGlzU2FtZVJvdXRlKG5ld1JvdXRlLCBleGlzdGluZ1JvdXRlKSB7XG4gIC8vIE1vc3Qgb3B0aW1hbCBjaGVjayBpcyBieSBpZFxuICBpZiAoXCJpZFwiIGluIG5ld1JvdXRlICYmIFwiaWRcIiBpbiBleGlzdGluZ1JvdXRlICYmIG5ld1JvdXRlLmlkID09PSBleGlzdGluZ1JvdXRlLmlkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8gU2Vjb25kIGlzIGJ5IHBhdGhpbmcgZGlmZmVyZW5jZXNcbiAgaWYgKCEobmV3Um91dGUuaW5kZXggPT09IGV4aXN0aW5nUm91dGUuaW5kZXggJiYgbmV3Um91dGUucGF0aCA9PT0gZXhpc3RpbmdSb3V0ZS5wYXRoICYmIG5ld1JvdXRlLmNhc2VTZW5zaXRpdmUgPT09IGV4aXN0aW5nUm91dGUuY2FzZVNlbnNpdGl2ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gUGF0aGxlc3MgbGF5b3V0IHJvdXRlcyBhcmUgdHJpY2tpZXIgc2luY2Ugd2UgbmVlZCB0byBjaGVjayBjaGlsZHJlbi5cbiAgLy8gSWYgdGhleSBoYXZlIG5vIGNoaWxkcmVuIHRoZW4gdGhleSdyZSB0aGUgc2FtZSBhcyBmYXIgYXMgd2UgY2FuIHRlbGxcbiAgaWYgKCghbmV3Um91dGUuY2hpbGRyZW4gfHwgbmV3Um91dGUuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSAmJiAoIWV4aXN0aW5nUm91dGUuY2hpbGRyZW4gfHwgZXhpc3RpbmdSb3V0ZS5jaGlsZHJlbi5sZW5ndGggPT09IDApKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8gT3RoZXJ3aXNlLCB3ZSBsb29rIHRvIHNlZSBpZiBldmVyeSBjaGlsZCBpbiB0aGUgbmV3IHJvdXRlIGlzIGFscmVhZHlcbiAgLy8gcmVwcmVzZW50ZWQgaW4gdGhlIGV4aXN0aW5nIHJvdXRlJ3MgY2hpbGRyZW5cbiAgcmV0dXJuIG5ld1JvdXRlLmNoaWxkcmVuLmV2ZXJ5KChhQ2hpbGQsIGkpID0+IHtcbiAgICB2YXIgX2V4aXN0aW5nUm91dGUkY2hpbGRyO1xuICAgIHJldHVybiAoX2V4aXN0aW5nUm91dGUkY2hpbGRyID0gZXhpc3RpbmdSb3V0ZS5jaGlsZHJlbikgPT0gbnVsbCA/IHZvaWQgMCA6IF9leGlzdGluZ1JvdXRlJGNoaWxkci5zb21lKGJDaGlsZCA9PiBpc1NhbWVSb3V0ZShhQ2hpbGQsIGJDaGlsZCkpO1xuICB9KTtcbn1cbi8qKlxuICogRXhlY3V0ZSByb3V0ZS5sYXp5KCkgbWV0aG9kcyB0byBsYXppbHkgbG9hZCByb3V0ZSBtb2R1bGVzIChsb2FkZXIsIGFjdGlvbixcbiAqIHNob3VsZFJldmFsaWRhdGUpIGFuZCB1cGRhdGUgdGhlIHJvdXRlTWFuaWZlc3QgaW4gcGxhY2Ugd2hpY2ggc2hhcmVzIG9iamVjdHNcbiAqIHdpdGggZGF0YVJvdXRlcyBzbyB0aG9zZSBnZXQgdXBkYXRlZCBhcyB3ZWxsLlxuICovXG5hc3luYyBmdW5jdGlvbiBsb2FkTGF6eVJvdXRlTW9kdWxlKHJvdXRlLCBtYXBSb3V0ZVByb3BlcnRpZXMsIG1hbmlmZXN0KSB7XG4gIGlmICghcm91dGUubGF6eSkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgbGF6eVJvdXRlID0gYXdhaXQgcm91dGUubGF6eSgpO1xuICAvLyBJZiB0aGUgbGF6eSByb3V0ZSBmdW5jdGlvbiB3YXMgZXhlY3V0ZWQgYW5kIHJlbW92ZWQgYnkgYW5vdGhlciBwYXJhbGxlbFxuICAvLyBjYWxsIHRoZW4gd2UgY2FuIHJldHVybiAtIGZpcnN0IGxhenkoKSB0byBmaW5pc2ggd2lucyBiZWNhdXNlIHRoZSByZXR1cm5cbiAgLy8gdmFsdWUgb2YgbGF6eSBpcyBleHBlY3RlZCB0byBiZSBzdGF0aWNcbiAgaWYgKCFyb3V0ZS5sYXp5KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCByb3V0ZVRvVXBkYXRlID0gbWFuaWZlc3Rbcm91dGUuaWRdO1xuICBpbnZhcmlhbnQocm91dGVUb1VwZGF0ZSwgXCJObyByb3V0ZSBmb3VuZCBpbiBtYW5pZmVzdFwiKTtcbiAgLy8gVXBkYXRlIHRoZSByb3V0ZSBpbiBwbGFjZS4gIFRoaXMgc2hvdWxkIGJlIHNhZmUgYmVjYXVzZSB0aGVyZSdzIG5vIHdheVxuICAvLyB3ZSBjb3VsZCB5ZXQgYmUgc2l0dGluZyBvbiB0aGlzIHJvdXRlIGFzIHdlIGNhbid0IGdldCB0aGVyZSB3aXRob3V0XG4gIC8vIHJlc29sdmluZyBsYXp5KCkgZmlyc3QuXG4gIC8vXG4gIC8vIFRoaXMgaXMgZGlmZmVyZW50IHRoYW4gdGhlIEhNUiBcInVwZGF0ZVwiIHVzZS1jYXNlIHdoZXJlIHdlIG1heSBhY3RpdmVseSBiZVxuICAvLyBvbiB0aGUgcm91dGUgYmVpbmcgdXBkYXRlZC4gIFRoZSBtYWluIGNvbmNlcm4gYm9pbHMgZG93biB0byBcImRvZXMgdGhpc1xuICAvLyBtdXRhdGlvbiBhZmZlY3QgYW55IG9uZ29pbmcgbmF2aWdhdGlvbnMgb3IgYW55IGN1cnJlbnQgc3RhdGUubWF0Y2hlc1xuICAvLyB2YWx1ZXM/XCIuICBJZiBub3QsIGl0IHNob3VsZCBiZSBzYWZlIHRvIHVwZGF0ZSBpbiBwbGFjZS5cbiAgbGV0IHJvdXRlVXBkYXRlcyA9IHt9O1xuICBmb3IgKGxldCBsYXp5Um91dGVQcm9wZXJ0eSBpbiBsYXp5Um91dGUpIHtcbiAgICBsZXQgc3RhdGljUm91dGVWYWx1ZSA9IHJvdXRlVG9VcGRhdGVbbGF6eVJvdXRlUHJvcGVydHldO1xuICAgIGxldCBpc1Byb3BlcnR5U3RhdGljYWxseURlZmluZWQgPSBzdGF0aWNSb3V0ZVZhbHVlICE9PSB1bmRlZmluZWQgJiZcbiAgICAvLyBUaGlzIHByb3BlcnR5IGlzbid0IHN0YXRpYyBzaW5jZSBpdCBzaG91bGQgYWx3YXlzIGJlIHVwZGF0ZWQgYmFzZWRcbiAgICAvLyBvbiB0aGUgcm91dGUgdXBkYXRlc1xuICAgIGxhenlSb3V0ZVByb3BlcnR5ICE9PSBcImhhc0Vycm9yQm91bmRhcnlcIjtcbiAgICB3YXJuaW5nKCFpc1Byb3BlcnR5U3RhdGljYWxseURlZmluZWQsIFwiUm91dGUgXFxcIlwiICsgcm91dGVUb1VwZGF0ZS5pZCArIFwiXFxcIiBoYXMgYSBzdGF0aWMgcHJvcGVydHkgXFxcIlwiICsgbGF6eVJvdXRlUHJvcGVydHkgKyBcIlxcXCIgXCIgKyBcImRlZmluZWQgYnV0IGl0cyBsYXp5IGZ1bmN0aW9uIGlzIGFsc28gcmV0dXJuaW5nIGEgdmFsdWUgZm9yIHRoaXMgcHJvcGVydHkuIFwiICsgKFwiVGhlIGxhenkgcm91dGUgcHJvcGVydHkgXFxcIlwiICsgbGF6eVJvdXRlUHJvcGVydHkgKyBcIlxcXCIgd2lsbCBiZSBpZ25vcmVkLlwiKSk7XG4gICAgaWYgKCFpc1Byb3BlcnR5U3RhdGljYWxseURlZmluZWQgJiYgIWltbXV0YWJsZVJvdXRlS2V5cy5oYXMobGF6eVJvdXRlUHJvcGVydHkpKSB7XG4gICAgICByb3V0ZVVwZGF0ZXNbbGF6eVJvdXRlUHJvcGVydHldID0gbGF6eVJvdXRlW2xhenlSb3V0ZVByb3BlcnR5XTtcbiAgICB9XG4gIH1cbiAgLy8gTXV0YXRlIHRoZSByb3V0ZSB3aXRoIHRoZSBwcm92aWRlZCB1cGRhdGVzLiAgRG8gdGhpcyBmaXJzdCBzbyB3ZSBwYXNzXG4gIC8vIHRoZSB1cGRhdGVkIHZlcnNpb24gdG8gbWFwUm91dGVQcm9wZXJ0aWVzXG4gIE9iamVjdC5hc3NpZ24ocm91dGVUb1VwZGF0ZSwgcm91dGVVcGRhdGVzKTtcbiAgLy8gTXV0YXRlIHRoZSBgaGFzRXJyb3JCb3VuZGFyeWAgcHJvcGVydHkgb24gdGhlIHJvdXRlIGJhc2VkIG9uIHRoZSByb3V0ZVxuICAvLyB1cGRhdGVzIGFuZCByZW1vdmUgdGhlIGBsYXp5YCBmdW5jdGlvbiBzbyB3ZSBkb24ndCByZXNvbHZlIHRoZSBsYXp5XG4gIC8vIHJvdXRlIGFnYWluLlxuICBPYmplY3QuYXNzaWduKHJvdXRlVG9VcGRhdGUsIF9leHRlbmRzKHt9LCBtYXBSb3V0ZVByb3BlcnRpZXMocm91dGVUb1VwZGF0ZSksIHtcbiAgICBsYXp5OiB1bmRlZmluZWRcbiAgfSkpO1xufVxuLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiBgZGF0YVN0cmF0ZWd5YCB3aGljaCBmZXRjaGVzIGFsbCBsb2FkZXJzIGluIHBhcmFsbGVsXG5hc3luYyBmdW5jdGlvbiBkZWZhdWx0RGF0YVN0cmF0ZWd5KF9yZWY0KSB7XG4gIGxldCB7XG4gICAgbWF0Y2hlc1xuICB9ID0gX3JlZjQ7XG4gIGxldCBtYXRjaGVzVG9Mb2FkID0gbWF0Y2hlcy5maWx0ZXIobSA9PiBtLnNob3VsZExvYWQpO1xuICBsZXQgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKG1hdGNoZXNUb0xvYWQubWFwKG0gPT4gbS5yZXNvbHZlKCkpKTtcbiAgcmV0dXJuIHJlc3VsdHMucmVkdWNlKChhY2MsIHJlc3VsdCwgaSkgPT4gT2JqZWN0LmFzc2lnbihhY2MsIHtcbiAgICBbbWF0Y2hlc1RvTG9hZFtpXS5yb3V0ZS5pZF06IHJlc3VsdFxuICB9KSwge30pO1xufVxuYXN5bmMgZnVuY3Rpb24gY2FsbERhdGFTdHJhdGVneUltcGwoZGF0YVN0cmF0ZWd5SW1wbCwgdHlwZSwgc3RhdGUsIHJlcXVlc3QsIG1hdGNoZXNUb0xvYWQsIG1hdGNoZXMsIGZldGNoZXJLZXksIG1hbmlmZXN0LCBtYXBSb3V0ZVByb3BlcnRpZXMsIHJlcXVlc3RDb250ZXh0KSB7XG4gIGxldCBsb2FkUm91dGVEZWZpbml0aW9uc1Byb21pc2VzID0gbWF0Y2hlcy5tYXAobSA9PiBtLnJvdXRlLmxhenkgPyBsb2FkTGF6eVJvdXRlTW9kdWxlKG0ucm91dGUsIG1hcFJvdXRlUHJvcGVydGllcywgbWFuaWZlc3QpIDogdW5kZWZpbmVkKTtcbiAgbGV0IGRzTWF0Y2hlcyA9IG1hdGNoZXMubWFwKChtYXRjaCwgaSkgPT4ge1xuICAgIGxldCBsb2FkUm91dGVQcm9taXNlID0gbG9hZFJvdXRlRGVmaW5pdGlvbnNQcm9taXNlc1tpXTtcbiAgICBsZXQgc2hvdWxkTG9hZCA9IG1hdGNoZXNUb0xvYWQuc29tZShtID0+IG0ucm91dGUuaWQgPT09IG1hdGNoLnJvdXRlLmlkKTtcbiAgICAvLyBgcmVzb2x2ZWAgZW5jYXBzdWxhdGVzIHJvdXRlLmxhenkoKSwgZXhlY3V0aW5nIHRoZSBsb2FkZXIvYWN0aW9uLFxuICAgIC8vIGFuZCBtYXBwaW5nIHJldHVybiB2YWx1ZXMvdGhyb3duIGVycm9ycyB0byBhIGBEYXRhU3RyYXRlZ3lSZXN1bHRgLiAgVXNlcnNcbiAgICAvLyBjYW4gcGFzcyBhIGNhbGxiYWNrIHRvIHRha2UgZmluZS1ncmFpbmVkIGNvbnRyb2wgb3ZlciB0aGUgZXhlY3V0aW9uXG4gICAgLy8gb2YgdGhlIGxvYWRlci9hY3Rpb25cbiAgICBsZXQgcmVzb2x2ZSA9IGFzeW5jIGhhbmRsZXJPdmVycmlkZSA9PiB7XG4gICAgICBpZiAoaGFuZGxlck92ZXJyaWRlICYmIHJlcXVlc3QubWV0aG9kID09PSBcIkdFVFwiICYmIChtYXRjaC5yb3V0ZS5sYXp5IHx8IG1hdGNoLnJvdXRlLmxvYWRlcikpIHtcbiAgICAgICAgc2hvdWxkTG9hZCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2hvdWxkTG9hZCA/IGNhbGxMb2FkZXJPckFjdGlvbih0eXBlLCByZXF1ZXN0LCBtYXRjaCwgbG9hZFJvdXRlUHJvbWlzZSwgaGFuZGxlck92ZXJyaWRlLCByZXF1ZXN0Q29udGV4dCkgOiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLmRhdGEsXG4gICAgICAgIHJlc3VsdDogdW5kZWZpbmVkXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgbWF0Y2gsIHtcbiAgICAgIHNob3VsZExvYWQsXG4gICAgICByZXNvbHZlXG4gICAgfSk7XG4gIH0pO1xuICAvLyBTZW5kIGFsbCBtYXRjaGVzIGhlcmUgdG8gYWxsb3cgZm9yIGEgbWlkZGxld2FyZS10eXBlIGltcGxlbWVudGF0aW9uLlxuICAvLyBoYW5kbGVyIHdpbGwgYmUgYSBuby1vcCBmb3IgdW5uZWVkZWQgcm91dGVzIGFuZCB3ZSBmaWx0ZXIgdGhvc2UgcmVzdWx0c1xuICAvLyBiYWNrIG91dCBiZWxvdy5cbiAgbGV0IHJlc3VsdHMgPSBhd2FpdCBkYXRhU3RyYXRlZ3lJbXBsKHtcbiAgICBtYXRjaGVzOiBkc01hdGNoZXMsXG4gICAgcmVxdWVzdCxcbiAgICBwYXJhbXM6IG1hdGNoZXNbMF0ucGFyYW1zLFxuICAgIGZldGNoZXJLZXksXG4gICAgY29udGV4dDogcmVxdWVzdENvbnRleHRcbiAgfSk7XG4gIC8vIFdhaXQgZm9yIGFsbCByb3V0ZXMgdG8gbG9hZCBoZXJlIGJ1dCAnc3dhbGxvdyB0aGUgZXJyb3Igc2luY2Ugd2Ugd2FudFxuICAvLyBpdCB0byBidWJibGUgdXAgZnJvbSB0aGUgYGF3YWl0IGxvYWRSb3V0ZVByb21pc2VgIGluIGBjYWxsTG9hZGVyT3JBY3Rpb25gIC1cbiAgLy8gY2FsbGVkIGZyb20gYG1hdGNoLnJlc29sdmUoKWBcbiAgdHJ5IHtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChsb2FkUm91dGVEZWZpbml0aW9uc1Byb21pc2VzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIE5vLW9wXG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG4vLyBEZWZhdWx0IGxvZ2ljIGZvciBjYWxsaW5nIGEgbG9hZGVyL2FjdGlvbiBpcyB0aGUgdXNlciBoYXMgbm8gc3BlY2lmaWVkIGEgZGF0YVN0cmF0ZWd5XG5hc3luYyBmdW5jdGlvbiBjYWxsTG9hZGVyT3JBY3Rpb24odHlwZSwgcmVxdWVzdCwgbWF0Y2gsIGxvYWRSb3V0ZVByb21pc2UsIGhhbmRsZXJPdmVycmlkZSwgc3RhdGljQ29udGV4dCkge1xuICBsZXQgcmVzdWx0O1xuICBsZXQgb25SZWplY3Q7XG4gIGxldCBydW5IYW5kbGVyID0gaGFuZGxlciA9PiB7XG4gICAgLy8gU2V0dXAgYSBwcm9taXNlIHdlIGNhbiByYWNlIGFnYWluc3Qgc28gdGhhdCBhYm9ydCBzaWduYWxzIHNob3J0IGNpcmN1aXRcbiAgICBsZXQgcmVqZWN0O1xuICAgIC8vIFRoaXMgd2lsbCBuZXZlciByZXNvbHZlIHNvIHNhZmUgdG8gdHlwZSBpdCBhcyBQcm9taXNlPERhdGFTdHJhdGVneVJlc3VsdD4gdG9cbiAgICAvLyBzYXRpc2Z5IHRoZSBmdW5jdGlvbiByZXR1cm4gdmFsdWVcbiAgICBsZXQgYWJvcnRQcm9taXNlID0gbmV3IFByb21pc2UoKF8sIHIpID0+IHJlamVjdCA9IHIpO1xuICAgIG9uUmVqZWN0ID0gKCkgPT4gcmVqZWN0KCk7XG4gICAgcmVxdWVzdC5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uUmVqZWN0KTtcbiAgICBsZXQgYWN0dWFsSGFuZGxlciA9IGN0eCA9PiB7XG4gICAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiWW91IGNhbm5vdCBjYWxsIHRoZSBoYW5kbGVyIGZvciBhIHJvdXRlIHdoaWNoIGRlZmluZXMgYSBib29sZWFuIFwiICsgKFwiXFxcIlwiICsgdHlwZSArIFwiXFxcIiBbcm91dGVJZDogXCIgKyBtYXRjaC5yb3V0ZS5pZCArIFwiXVwiKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhbmRsZXIoe1xuICAgICAgICByZXF1ZXN0LFxuICAgICAgICBwYXJhbXM6IG1hdGNoLnBhcmFtcyxcbiAgICAgICAgY29udGV4dDogc3RhdGljQ29udGV4dFxuICAgICAgfSwgLi4uKGN0eCAhPT0gdW5kZWZpbmVkID8gW2N0eF0gOiBbXSkpO1xuICAgIH07XG4gICAgbGV0IGhhbmRsZXJQcm9taXNlID0gKGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCB2YWwgPSBhd2FpdCAoaGFuZGxlck92ZXJyaWRlID8gaGFuZGxlck92ZXJyaWRlKGN0eCA9PiBhY3R1YWxIYW5kbGVyKGN0eCkpIDogYWN0dWFsSGFuZGxlcigpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiBcImRhdGFcIixcbiAgICAgICAgICByZXN1bHQ6IHZhbFxuICAgICAgICB9O1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICByZXN1bHQ6IGVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICAgIHJldHVybiBQcm9taXNlLnJhY2UoW2hhbmRsZXJQcm9taXNlLCBhYm9ydFByb21pc2VdKTtcbiAgfTtcbiAgdHJ5IHtcbiAgICBsZXQgaGFuZGxlciA9IG1hdGNoLnJvdXRlW3R5cGVdO1xuICAgIC8vIElmIHdlIGhhdmUgYSByb3V0ZS5sYXp5IHByb21pc2UsIGF3YWl0IHRoYXQgZmlyc3RcbiAgICBpZiAobG9hZFJvdXRlUHJvbWlzZSkge1xuICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgLy8gUnVuIHN0YXRpY2FsbHkgZGVmaW5lZCBoYW5kbGVyIGluIHBhcmFsbGVsIHdpdGggbGF6eSgpXG4gICAgICAgIGxldCBoYW5kbGVyRXJyb3I7XG4gICAgICAgIGxldCBbdmFsdWVdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAvLyBJZiB0aGUgaGFuZGxlciB0aHJvd3MsIGRvbid0IGxldCBpdCBpbW1lZGlhdGVseSBidWJibGUgb3V0LFxuICAgICAgICAvLyBzaW5jZSB3ZSBuZWVkIHRvIGxldCB0aGUgbGF6eSgpIGV4ZWN1dGlvbiBmaW5pc2ggc28gd2Uga25vdyBpZiB0aGlzXG4gICAgICAgIC8vIHJvdXRlIGhhcyBhIGJvdW5kYXJ5IHRoYXQgY2FuIGhhbmRsZSB0aGUgZXJyb3JcbiAgICAgICAgcnVuSGFuZGxlcihoYW5kbGVyKS5jYXRjaChlID0+IHtcbiAgICAgICAgICBoYW5kbGVyRXJyb3IgPSBlO1xuICAgICAgICB9KSwgbG9hZFJvdXRlUHJvbWlzZV0pO1xuICAgICAgICBpZiAoaGFuZGxlckVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aHJvdyBoYW5kbGVyRXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBMb2FkIGxhenkgcm91dGUgbW9kdWxlLCB0aGVuIHJ1biBhbnkgcmV0dXJuZWQgaGFuZGxlclxuICAgICAgICBhd2FpdCBsb2FkUm91dGVQcm9taXNlO1xuICAgICAgICBoYW5kbGVyID0gbWF0Y2gucm91dGVbdHlwZV07XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgLy8gSGFuZGxlciBzdGlsbCBydW5zIGV2ZW4gaWYgd2UgZ290IGludGVycnVwdGVkIHRvIG1haW50YWluIGNvbnNpc3RlbmN5XG4gICAgICAgICAgLy8gd2l0aCB1bi1hYm9ydGFibGUgYmVoYXZpb3Igb2YgaGFuZGxlciBleGVjdXRpb24gb24gbm9uLWxhenkgb3JcbiAgICAgICAgICAvLyBwcmV2aW91c2x5LWxhenktbG9hZGVkIHJvdXRlc1xuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHJ1bkhhbmRsZXIoaGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJhY3Rpb25cIikge1xuICAgICAgICAgIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICAgICAgICBsZXQgcGF0aG5hbWUgPSB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoO1xuICAgICAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgICAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICByb3V0ZUlkOiBtYXRjaC5yb3V0ZS5pZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGxhenkoKSByb3V0ZSBoYXMgbm8gbG9hZGVyIHRvIHJ1bi4gIFNob3J0IGNpcmN1aXQgaGVyZSBzbyB3ZSBkb24ndFxuICAgICAgICAgIC8vIGhpdCB0aGUgaW52YXJpYW50IGJlbG93IHRoYXQgZXJyb3JzIG9uIHJldHVybmluZyB1bmRlZmluZWQuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZGF0YSxcbiAgICAgICAgICAgIHJlc3VsdDogdW5kZWZpbmVkXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWhhbmRsZXIpIHtcbiAgICAgIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICAgIGxldCBwYXRobmFtZSA9IHVybC5wYXRobmFtZSArIHVybC5zZWFyY2g7XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgICBwYXRobmFtZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IHJ1bkhhbmRsZXIoaGFuZGxlcik7XG4gICAgfVxuICAgIGludmFyaWFudChyZXN1bHQucmVzdWx0ICE9PSB1bmRlZmluZWQsIFwiWW91IGRlZmluZWQgXCIgKyAodHlwZSA9PT0gXCJhY3Rpb25cIiA/IFwiYW4gYWN0aW9uXCIgOiBcImEgbG9hZGVyXCIpICsgXCIgZm9yIHJvdXRlIFwiICsgKFwiXFxcIlwiICsgbWF0Y2gucm91dGUuaWQgKyBcIlxcXCIgYnV0IGRpZG4ndCByZXR1cm4gYW55dGhpbmcgZnJvbSB5b3VyIGBcIiArIHR5cGUgKyBcImAgXCIpICsgXCJmdW5jdGlvbi4gUGxlYXNlIHJldHVybiBhIHZhbHVlIG9yIGBudWxsYC5cIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBXZSBzaG91bGQgYWxyZWFkeSBiZSBjYXRjaGluZyBhbmQgY29udmVydGluZyBub3JtYWwgaGFuZGxlciBleGVjdXRpb25zIHRvXG4gICAgLy8gRGF0YVN0cmF0ZWd5UmVzdWx0cyBhbmQgcmV0dXJuaW5nIHRoZW0sIHNvIGFueXRoaW5nIHRoYXQgdGhyb3dzIGhlcmUgaXMgYW5cbiAgICAvLyB1bmV4cGVjdGVkIGVycm9yIHdlIHN0aWxsIG5lZWQgdG8gd3JhcFxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBSZXN1bHRUeXBlLmVycm9yLFxuICAgICAgcmVzdWx0OiBlXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAob25SZWplY3QpIHtcbiAgICAgIHJlcXVlc3Quc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvblJlamVjdCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5hc3luYyBmdW5jdGlvbiBjb252ZXJ0RGF0YVN0cmF0ZWd5UmVzdWx0VG9EYXRhUmVzdWx0KGRhdGFTdHJhdGVneVJlc3VsdCkge1xuICBsZXQge1xuICAgIHJlc3VsdCxcbiAgICB0eXBlXG4gIH0gPSBkYXRhU3RyYXRlZ3lSZXN1bHQ7XG4gIGlmIChpc1Jlc3BvbnNlKHJlc3VsdCkpIHtcbiAgICBsZXQgZGF0YTtcbiAgICB0cnkge1xuICAgICAgbGV0IGNvbnRlbnRUeXBlID0gcmVzdWx0LmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpO1xuICAgICAgLy8gQ2hlY2sgYmV0d2VlbiB3b3JkIGJvdW5kYXJpZXMgaW5zdGVhZCBvZiBzdGFydHNXaXRoKCkgZHVlIHRvIHRoZSBsYXN0XG4gICAgICAvLyBwYXJhZ3JhcGggb2YgaHR0cHM6Ly9odHRwd2cub3JnL3NwZWNzL3JmYzkxMTAuaHRtbCNmaWVsZC5jb250ZW50LXR5cGVcbiAgICAgIGlmIChjb250ZW50VHlwZSAmJiAvXFxiYXBwbGljYXRpb25cXC9qc29uXFxiLy50ZXN0KGNvbnRlbnRUeXBlKSkge1xuICAgICAgICBpZiAocmVzdWx0LmJvZHkgPT0gbnVsbCkge1xuICAgICAgICAgIGRhdGEgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0gYXdhaXQgcmVzdWx0LnRleHQoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLmVycm9yLFxuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IFJlc3VsdFR5cGUuZXJyb3IpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZXJyb3IsXG4gICAgICAgIGVycm9yOiBuZXcgRXJyb3JSZXNwb25zZUltcGwocmVzdWx0LnN0YXR1cywgcmVzdWx0LnN0YXR1c1RleHQsIGRhdGEpLFxuICAgICAgICBzdGF0dXNDb2RlOiByZXN1bHQuc3RhdHVzLFxuICAgICAgICBoZWFkZXJzOiByZXN1bHQuaGVhZGVyc1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZGF0YSxcbiAgICAgIGRhdGEsXG4gICAgICBzdGF0dXNDb2RlOiByZXN1bHQuc3RhdHVzLFxuICAgICAgaGVhZGVyczogcmVzdWx0LmhlYWRlcnNcbiAgICB9O1xuICB9XG4gIGlmICh0eXBlID09PSBSZXN1bHRUeXBlLmVycm9yKSB7XG4gICAgaWYgKGlzRGF0YVdpdGhSZXNwb25zZUluaXQocmVzdWx0KSkge1xuICAgICAgdmFyIF9yZXN1bHQkaW5pdDMsIF9yZXN1bHQkaW5pdDQ7XG4gICAgICBpZiAocmVzdWx0LmRhdGEgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB2YXIgX3Jlc3VsdCRpbml0LCBfcmVzdWx0JGluaXQyO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZXJyb3IsXG4gICAgICAgICAgZXJyb3I6IHJlc3VsdC5kYXRhLFxuICAgICAgICAgIHN0YXR1c0NvZGU6IChfcmVzdWx0JGluaXQgPSByZXN1bHQuaW5pdCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9yZXN1bHQkaW5pdC5zdGF0dXMsXG4gICAgICAgICAgaGVhZGVyczogKF9yZXN1bHQkaW5pdDIgPSByZXN1bHQuaW5pdCkgIT0gbnVsbCAmJiBfcmVzdWx0JGluaXQyLmhlYWRlcnMgPyBuZXcgSGVhZGVycyhyZXN1bHQuaW5pdC5oZWFkZXJzKSA6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gQ29udmVydCB0aHJvd24gZGF0YSgpIHRvIEVycm9yUmVzcG9uc2UgaW5zdGFuY2VzXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLmVycm9yLFxuICAgICAgICBlcnJvcjogbmV3IEVycm9yUmVzcG9uc2VJbXBsKCgoX3Jlc3VsdCRpbml0MyA9IHJlc3VsdC5pbml0KSA9PSBudWxsID8gdm9pZCAwIDogX3Jlc3VsdCRpbml0My5zdGF0dXMpIHx8IDUwMCwgdW5kZWZpbmVkLCByZXN1bHQuZGF0YSksXG4gICAgICAgIHN0YXR1c0NvZGU6IGlzUm91dGVFcnJvclJlc3BvbnNlKHJlc3VsdCkgPyByZXN1bHQuc3RhdHVzIDogdW5kZWZpbmVkLFxuICAgICAgICBoZWFkZXJzOiAoX3Jlc3VsdCRpbml0NCA9IHJlc3VsdC5pbml0KSAhPSBudWxsICYmIF9yZXN1bHQkaW5pdDQuaGVhZGVycyA/IG5ldyBIZWFkZXJzKHJlc3VsdC5pbml0LmhlYWRlcnMpIDogdW5kZWZpbmVkXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogUmVzdWx0VHlwZS5lcnJvcixcbiAgICAgIGVycm9yOiByZXN1bHQsXG4gICAgICBzdGF0dXNDb2RlOiBpc1JvdXRlRXJyb3JSZXNwb25zZShyZXN1bHQpID8gcmVzdWx0LnN0YXR1cyA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cbiAgaWYgKGlzRGVmZXJyZWREYXRhKHJlc3VsdCkpIHtcbiAgICB2YXIgX3Jlc3VsdCRpbml0NSwgX3Jlc3VsdCRpbml0NjtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogUmVzdWx0VHlwZS5kZWZlcnJlZCxcbiAgICAgIGRlZmVycmVkRGF0YTogcmVzdWx0LFxuICAgICAgc3RhdHVzQ29kZTogKF9yZXN1bHQkaW5pdDUgPSByZXN1bHQuaW5pdCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9yZXN1bHQkaW5pdDUuc3RhdHVzLFxuICAgICAgaGVhZGVyczogKChfcmVzdWx0JGluaXQ2ID0gcmVzdWx0LmluaXQpID09IG51bGwgPyB2b2lkIDAgOiBfcmVzdWx0JGluaXQ2LmhlYWRlcnMpICYmIG5ldyBIZWFkZXJzKHJlc3VsdC5pbml0LmhlYWRlcnMpXG4gICAgfTtcbiAgfVxuICBpZiAoaXNEYXRhV2l0aFJlc3BvbnNlSW5pdChyZXN1bHQpKSB7XG4gICAgdmFyIF9yZXN1bHQkaW5pdDcsIF9yZXN1bHQkaW5pdDg7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZGF0YSxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgICAgc3RhdHVzQ29kZTogKF9yZXN1bHQkaW5pdDcgPSByZXN1bHQuaW5pdCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9yZXN1bHQkaW5pdDcuc3RhdHVzLFxuICAgICAgaGVhZGVyczogKF9yZXN1bHQkaW5pdDggPSByZXN1bHQuaW5pdCkgIT0gbnVsbCAmJiBfcmVzdWx0JGluaXQ4LmhlYWRlcnMgPyBuZXcgSGVhZGVycyhyZXN1bHQuaW5pdC5oZWFkZXJzKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSZXN1bHRUeXBlLmRhdGEsXG4gICAgZGF0YTogcmVzdWx0XG4gIH07XG59XG4vLyBTdXBwb3J0IHJlbGF0aXZlIHJvdXRpbmcgaW4gaW50ZXJuYWwgcmVkaXJlY3RzXG5mdW5jdGlvbiBub3JtYWxpemVSZWxhdGl2ZVJvdXRpbmdSZWRpcmVjdFJlc3BvbnNlKHJlc3BvbnNlLCByZXF1ZXN0LCByb3V0ZUlkLCBtYXRjaGVzLCBiYXNlbmFtZSwgdjdfcmVsYXRpdmVTcGxhdFBhdGgpIHtcbiAgbGV0IGxvY2F0aW9uID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJMb2NhdGlvblwiKTtcbiAgaW52YXJpYW50KGxvY2F0aW9uLCBcIlJlZGlyZWN0cyByZXR1cm5lZC90aHJvd24gZnJvbSBsb2FkZXJzL2FjdGlvbnMgbXVzdCBoYXZlIGEgTG9jYXRpb24gaGVhZGVyXCIpO1xuICBpZiAoIUFCU09MVVRFX1VSTF9SRUdFWC50ZXN0KGxvY2F0aW9uKSkge1xuICAgIGxldCB0cmltbWVkTWF0Y2hlcyA9IG1hdGNoZXMuc2xpY2UoMCwgbWF0Y2hlcy5maW5kSW5kZXgobSA9PiBtLnJvdXRlLmlkID09PSByb3V0ZUlkKSArIDEpO1xuICAgIGxvY2F0aW9uID0gbm9ybWFsaXplVG8obmV3IFVSTChyZXF1ZXN0LnVybCksIHRyaW1tZWRNYXRjaGVzLCBiYXNlbmFtZSwgdHJ1ZSwgbG9jYXRpb24sIHY3X3JlbGF0aXZlU3BsYXRQYXRoKTtcbiAgICByZXNwb25zZS5oZWFkZXJzLnNldChcIkxvY2F0aW9uXCIsIGxvY2F0aW9uKTtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2U7XG59XG5mdW5jdGlvbiBub3JtYWxpemVSZWRpcmVjdExvY2F0aW9uKGxvY2F0aW9uLCBjdXJyZW50VXJsLCBiYXNlbmFtZSkge1xuICBpZiAoQUJTT0xVVEVfVVJMX1JFR0VYLnRlc3QobG9jYXRpb24pKSB7XG4gICAgLy8gU3RyaXAgb2ZmIHRoZSBwcm90b2NvbCtvcmlnaW4gZm9yIHNhbWUtb3JpZ2luICsgc2FtZS1iYXNlbmFtZSBhYnNvbHV0ZSByZWRpcmVjdHNcbiAgICBsZXQgbm9ybWFsaXplZExvY2F0aW9uID0gbG9jYXRpb247XG4gICAgbGV0IHVybCA9IG5vcm1hbGl6ZWRMb2NhdGlvbi5zdGFydHNXaXRoKFwiLy9cIikgPyBuZXcgVVJMKGN1cnJlbnRVcmwucHJvdG9jb2wgKyBub3JtYWxpemVkTG9jYXRpb24pIDogbmV3IFVSTChub3JtYWxpemVkTG9jYXRpb24pO1xuICAgIGxldCBpc1NhbWVCYXNlbmFtZSA9IHN0cmlwQmFzZW5hbWUodXJsLnBhdGhuYW1lLCBiYXNlbmFtZSkgIT0gbnVsbDtcbiAgICBpZiAodXJsLm9yaWdpbiA9PT0gY3VycmVudFVybC5vcmlnaW4gJiYgaXNTYW1lQmFzZW5hbWUpIHtcbiAgICAgIHJldHVybiB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoICsgdXJsLmhhc2g7XG4gICAgfVxuICB9XG4gIHJldHVybiBsb2NhdGlvbjtcbn1cbi8vIFV0aWxpdHkgbWV0aG9kIGZvciBjcmVhdGluZyB0aGUgUmVxdWVzdCBpbnN0YW5jZXMgZm9yIGxvYWRlcnMvYWN0aW9ucyBkdXJpbmdcbi8vIGNsaWVudC1zaWRlIG5hdmlnYXRpb25zIGFuZCBmZXRjaGVzLiAgRHVyaW5nIFNTUiB3ZSB3aWxsIGFsd2F5cyBoYXZlIGFcbi8vIFJlcXVlc3QgaW5zdGFuY2UgZnJvbSB0aGUgc3RhdGljIGhhbmRsZXIgKHF1ZXJ5L3F1ZXJ5Um91dGUpXG5mdW5jdGlvbiBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChoaXN0b3J5LCBsb2NhdGlvbiwgc2lnbmFsLCBzdWJtaXNzaW9uKSB7XG4gIGxldCB1cmwgPSBoaXN0b3J5LmNyZWF0ZVVSTChzdHJpcEhhc2hGcm9tUGF0aChsb2NhdGlvbikpLnRvU3RyaW5nKCk7XG4gIGxldCBpbml0ID0ge1xuICAgIHNpZ25hbFxuICB9O1xuICBpZiAoc3VibWlzc2lvbiAmJiBpc011dGF0aW9uTWV0aG9kKHN1Ym1pc3Npb24uZm9ybU1ldGhvZCkpIHtcbiAgICBsZXQge1xuICAgICAgZm9ybU1ldGhvZCxcbiAgICAgIGZvcm1FbmNUeXBlXG4gICAgfSA9IHN1Ym1pc3Npb247XG4gICAgLy8gRGlkbid0IHRoaW5rIHdlIG5lZWRlZCB0aGlzIGJ1dCBpdCB0dXJucyBvdXQgdW5saWtlIG90aGVyIG1ldGhvZHMsIHBhdGNoXG4gICAgLy8gd29uJ3QgYmUgcHJvcGVybHkgbm9ybWFsaXplZCB0byB1cHBlcmNhc2UgYW5kIHJlc3VsdHMgaW4gYSA0MDUgZXJyb3IuXG4gICAgLy8gU2VlOiBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1tZXRob2RcbiAgICBpbml0Lm1ldGhvZCA9IGZvcm1NZXRob2QudG9VcHBlckNhc2UoKTtcbiAgICBpZiAoZm9ybUVuY1R5cGUgPT09IFwiYXBwbGljYXRpb24vanNvblwiKSB7XG4gICAgICBpbml0LmhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IGZvcm1FbmNUeXBlXG4gICAgICB9KTtcbiAgICAgIGluaXQuYm9keSA9IEpTT04uc3RyaW5naWZ5KHN1Ym1pc3Npb24uanNvbik7XG4gICAgfSBlbHNlIGlmIChmb3JtRW5jVHlwZSA9PT0gXCJ0ZXh0L3BsYWluXCIpIHtcbiAgICAgIC8vIENvbnRlbnQtVHlwZSBpcyBpbmZlcnJlZCAoaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2RvbS1yZXF1ZXN0KVxuICAgICAgaW5pdC5ib2R5ID0gc3VibWlzc2lvbi50ZXh0O1xuICAgIH0gZWxzZSBpZiAoZm9ybUVuY1R5cGUgPT09IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgJiYgc3VibWlzc2lvbi5mb3JtRGF0YSkge1xuICAgICAgLy8gQ29udGVudC1UeXBlIGlzIGluZmVycmVkIChodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jZG9tLXJlcXVlc3QpXG4gICAgICBpbml0LmJvZHkgPSBjb252ZXJ0Rm9ybURhdGFUb1NlYXJjaFBhcmFtcyhzdWJtaXNzaW9uLmZvcm1EYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ29udGVudC1UeXBlIGlzIGluZmVycmVkIChodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jZG9tLXJlcXVlc3QpXG4gICAgICBpbml0LmJvZHkgPSBzdWJtaXNzaW9uLmZvcm1EYXRhO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IFJlcXVlc3QodXJsLCBpbml0KTtcbn1cbmZ1bmN0aW9uIGNvbnZlcnRGb3JtRGF0YVRvU2VhcmNoUGFyYW1zKGZvcm1EYXRhKSB7XG4gIGxldCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3JtLWNvbnRyb2wtaW5mcmFzdHJ1Y3R1cmUuaHRtbCNjb252ZXJ0aW5nLWFuLWVudHJ5LWxpc3QtdG8tYS1saXN0LW9mLW5hbWUtdmFsdWUtcGFpcnNcbiAgICBzZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiID8gdmFsdWUgOiB2YWx1ZS5uYW1lKTtcbiAgfVxuICByZXR1cm4gc2VhcmNoUGFyYW1zO1xufVxuZnVuY3Rpb24gY29udmVydFNlYXJjaFBhcmFtc1RvRm9ybURhdGEoc2VhcmNoUGFyYW1zKSB7XG4gIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2Ygc2VhcmNoUGFyYW1zLmVudHJpZXMoKSkge1xuICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZm9ybURhdGE7XG59XG5mdW5jdGlvbiBwcm9jZXNzUm91dGVMb2FkZXJEYXRhKG1hdGNoZXMsIHJlc3VsdHMsIHBlbmRpbmdBY3Rpb25SZXN1bHQsIGFjdGl2ZURlZmVycmVkcywgc2tpcExvYWRlckVycm9yQnViYmxpbmcpIHtcbiAgLy8gRmlsbCBpbiBsb2FkZXJEYXRhL2Vycm9ycyBmcm9tIG91ciBsb2FkZXJzXG4gIGxldCBsb2FkZXJEYXRhID0ge307XG4gIGxldCBlcnJvcnMgPSBudWxsO1xuICBsZXQgc3RhdHVzQ29kZTtcbiAgbGV0IGZvdW5kRXJyb3IgPSBmYWxzZTtcbiAgbGV0IGxvYWRlckhlYWRlcnMgPSB7fTtcbiAgbGV0IHBlbmRpbmdFcnJvciA9IHBlbmRpbmdBY3Rpb25SZXN1bHQgJiYgaXNFcnJvclJlc3VsdChwZW5kaW5nQWN0aW9uUmVzdWx0WzFdKSA/IHBlbmRpbmdBY3Rpb25SZXN1bHRbMV0uZXJyb3IgOiB1bmRlZmluZWQ7XG4gIC8vIFByb2Nlc3MgbG9hZGVyIHJlc3VsdHMgaW50byBzdGF0ZS5sb2FkZXJEYXRhL3N0YXRlLmVycm9yc1xuICBtYXRjaGVzLmZvckVhY2gobWF0Y2ggPT4ge1xuICAgIGlmICghKG1hdGNoLnJvdXRlLmlkIGluIHJlc3VsdHMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBpZCA9IG1hdGNoLnJvdXRlLmlkO1xuICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2lkXTtcbiAgICBpbnZhcmlhbnQoIWlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSwgXCJDYW5ub3QgaGFuZGxlIHJlZGlyZWN0IHJlc3VsdHMgaW4gcHJvY2Vzc0xvYWRlckRhdGFcIik7XG4gICAgaWYgKGlzRXJyb3JSZXN1bHQocmVzdWx0KSkge1xuICAgICAgbGV0IGVycm9yID0gcmVzdWx0LmVycm9yO1xuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHBlbmRpbmcgYWN0aW9uIGVycm9yLCB3ZSByZXBvcnQgaXQgYXQgdGhlIGhpZ2hlc3Qtcm91dGVcbiAgICAgIC8vIHRoYXQgdGhyb3dzIGEgbG9hZGVyIGVycm9yLCBhbmQgdGhlbiBjbGVhciBpdCBvdXQgdG8gaW5kaWNhdGUgdGhhdFxuICAgICAgLy8gaXQgd2FzIGNvbnN1bWVkXG4gICAgICBpZiAocGVuZGluZ0Vycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZXJyb3IgPSBwZW5kaW5nRXJyb3I7XG4gICAgICAgIHBlbmRpbmdFcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGVycm9ycyA9IGVycm9ycyB8fCB7fTtcbiAgICAgIGlmIChza2lwTG9hZGVyRXJyb3JCdWJibGluZykge1xuICAgICAgICBlcnJvcnNbaWRdID0gZXJyb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBMb29rIHVwd2FyZHMgZnJvbSB0aGUgbWF0Y2hlZCByb3V0ZSBmb3IgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgZXJyb3JcbiAgICAgICAgLy8gYm91bmRhcnksIGRlZmF1bHRpbmcgdG8gdGhlIHJvb3QgbWF0Y2guICBQcmVmZXIgaGlnaGVyIGVycm9yIHZhbHVlc1xuICAgICAgICAvLyBpZiBsb3dlciBlcnJvcnMgYnViYmxlIHRvIHRoZSBzYW1lIGJvdW5kYXJ5XG4gICAgICAgIGxldCBib3VuZGFyeU1hdGNoID0gZmluZE5lYXJlc3RCb3VuZGFyeShtYXRjaGVzLCBpZCk7XG4gICAgICAgIGlmIChlcnJvcnNbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF0gPT0gbnVsbCkge1xuICAgICAgICAgIGVycm9yc1tib3VuZGFyeU1hdGNoLnJvdXRlLmlkXSA9IGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBDbGVhciBvdXIgYW55IHByaW9yIGxvYWRlckRhdGEgZm9yIHRoZSB0aHJvd2luZyByb3V0ZVxuICAgICAgbG9hZGVyRGF0YVtpZF0gPSB1bmRlZmluZWQ7XG4gICAgICAvLyBPbmNlIHdlIGZpbmQgb3VyIGZpcnN0IChoaWdoZXN0KSBlcnJvciwgd2Ugc2V0IHRoZSBzdGF0dXMgY29kZSBhbmRcbiAgICAgIC8vIHByZXZlbnQgZGVlcGVyIHN0YXR1cyBjb2RlcyBmcm9tIG92ZXJyaWRpbmdcbiAgICAgIGlmICghZm91bmRFcnJvcikge1xuICAgICAgICBmb3VuZEVycm9yID0gdHJ1ZTtcbiAgICAgICAgc3RhdHVzQ29kZSA9IGlzUm91dGVFcnJvclJlc3BvbnNlKHJlc3VsdC5lcnJvcikgPyByZXN1bHQuZXJyb3Iuc3RhdHVzIDogNTAwO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5oZWFkZXJzKSB7XG4gICAgICAgIGxvYWRlckhlYWRlcnNbaWRdID0gcmVzdWx0LmhlYWRlcnM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc0RlZmVycmVkUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgICAgYWN0aXZlRGVmZXJyZWRzLnNldChpZCwgcmVzdWx0LmRlZmVycmVkRGF0YSk7XG4gICAgICAgIGxvYWRlckRhdGFbaWRdID0gcmVzdWx0LmRlZmVycmVkRGF0YS5kYXRhO1xuICAgICAgICAvLyBFcnJvciBzdGF0dXMgY29kZXMgYWx3YXlzIG92ZXJyaWRlIHN1Y2Nlc3Mgc3RhdHVzIGNvZGVzLCBidXQgaWYgYWxsXG4gICAgICAgIC8vIGxvYWRlcnMgYXJlIHN1Y2Nlc3NmdWwgd2UgdGFrZSB0aGUgZGVlcGVzdCBzdGF0dXMgY29kZS5cbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXNDb2RlICE9IG51bGwgJiYgcmVzdWx0LnN0YXR1c0NvZGUgIT09IDIwMCAmJiAhZm91bmRFcnJvcikge1xuICAgICAgICAgIHN0YXR1c0NvZGUgPSByZXN1bHQuc3RhdHVzQ29kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0LmhlYWRlcnMpIHtcbiAgICAgICAgICBsb2FkZXJIZWFkZXJzW2lkXSA9IHJlc3VsdC5oZWFkZXJzO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2FkZXJEYXRhW2lkXSA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAvLyBFcnJvciBzdGF0dXMgY29kZXMgYWx3YXlzIG92ZXJyaWRlIHN1Y2Nlc3Mgc3RhdHVzIGNvZGVzLCBidXQgaWYgYWxsXG4gICAgICAgIC8vIGxvYWRlcnMgYXJlIHN1Y2Nlc3NmdWwgd2UgdGFrZSB0aGUgZGVlcGVzdCBzdGF0dXMgY29kZS5cbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXNDb2RlICYmIHJlc3VsdC5zdGF0dXNDb2RlICE9PSAyMDAgJiYgIWZvdW5kRXJyb3IpIHtcbiAgICAgICAgICBzdGF0dXNDb2RlID0gcmVzdWx0LnN0YXR1c0NvZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5oZWFkZXJzKSB7XG4gICAgICAgICAgbG9hZGVySGVhZGVyc1tpZF0gPSByZXN1bHQuaGVhZGVycztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIC8vIElmIHdlIGRpZG4ndCBjb25zdW1lIHRoZSBwZW5kaW5nIGFjdGlvbiBlcnJvciAoaS5lLiwgYWxsIGxvYWRlcnNcbiAgLy8gcmVzb2x2ZWQpLCB0aGVuIGNvbnN1bWUgaXQgaGVyZS4gIEFsc28gY2xlYXIgb3V0IGFueSBsb2FkZXJEYXRhIGZvciB0aGVcbiAgLy8gdGhyb3dpbmcgcm91dGVcbiAgaWYgKHBlbmRpbmdFcnJvciAhPT0gdW5kZWZpbmVkICYmIHBlbmRpbmdBY3Rpb25SZXN1bHQpIHtcbiAgICBlcnJvcnMgPSB7XG4gICAgICBbcGVuZGluZ0FjdGlvblJlc3VsdFswXV06IHBlbmRpbmdFcnJvclxuICAgIH07XG4gICAgbG9hZGVyRGF0YVtwZW5kaW5nQWN0aW9uUmVzdWx0WzBdXSA9IHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4ge1xuICAgIGxvYWRlckRhdGEsXG4gICAgZXJyb3JzLFxuICAgIHN0YXR1c0NvZGU6IHN0YXR1c0NvZGUgfHwgMjAwLFxuICAgIGxvYWRlckhlYWRlcnNcbiAgfTtcbn1cbmZ1bmN0aW9uIHByb2Nlc3NMb2FkZXJEYXRhKHN0YXRlLCBtYXRjaGVzLCByZXN1bHRzLCBwZW5kaW5nQWN0aW9uUmVzdWx0LCByZXZhbGlkYXRpbmdGZXRjaGVycywgZmV0Y2hlclJlc3VsdHMsIGFjdGl2ZURlZmVycmVkcykge1xuICBsZXQge1xuICAgIGxvYWRlckRhdGEsXG4gICAgZXJyb3JzXG4gIH0gPSBwcm9jZXNzUm91dGVMb2FkZXJEYXRhKG1hdGNoZXMsIHJlc3VsdHMsIHBlbmRpbmdBY3Rpb25SZXN1bHQsIGFjdGl2ZURlZmVycmVkcywgZmFsc2UgLy8gVGhpcyBtZXRob2QgaXMgb25seSBjYWxsZWQgY2xpZW50IHNpZGUgc28gd2UgYWx3YXlzIHdhbnQgdG8gYnViYmxlXG4gICk7XG4gIC8vIFByb2Nlc3MgcmVzdWx0cyBmcm9tIG91ciByZXZhbGlkYXRpbmcgZmV0Y2hlcnNcbiAgcmV2YWxpZGF0aW5nRmV0Y2hlcnMuZm9yRWFjaChyZiA9PiB7XG4gICAgbGV0IHtcbiAgICAgIGtleSxcbiAgICAgIG1hdGNoLFxuICAgICAgY29udHJvbGxlclxuICAgIH0gPSByZjtcbiAgICBsZXQgcmVzdWx0ID0gZmV0Y2hlclJlc3VsdHNba2V5XTtcbiAgICBpbnZhcmlhbnQocmVzdWx0LCBcIkRpZCBub3QgZmluZCBjb3JyZXNwb25kaW5nIGZldGNoZXIgcmVzdWx0XCIpO1xuICAgIC8vIFByb2Nlc3MgZmV0Y2hlciBub24tcmVkaXJlY3QgZXJyb3JzXG4gICAgaWYgKGNvbnRyb2xsZXIgJiYgY29udHJvbGxlci5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgLy8gTm90aGluZyB0byBkbyBmb3IgYWJvcnRlZCBmZXRjaGVyc1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoaXNFcnJvclJlc3VsdChyZXN1bHQpKSB7XG4gICAgICBsZXQgYm91bmRhcnlNYXRjaCA9IGZpbmROZWFyZXN0Qm91bmRhcnkoc3RhdGUubWF0Y2hlcywgbWF0Y2ggPT0gbnVsbCA/IHZvaWQgMCA6IG1hdGNoLnJvdXRlLmlkKTtcbiAgICAgIGlmICghKGVycm9ycyAmJiBlcnJvcnNbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF0pKSB7XG4gICAgICAgIGVycm9ycyA9IF9leHRlbmRzKHt9LCBlcnJvcnMsIHtcbiAgICAgICAgICBbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5lcnJvclxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHN0YXRlLmZldGNoZXJzLmRlbGV0ZShrZXkpO1xuICAgIH0gZWxzZSBpZiAoaXNSZWRpcmVjdFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAvLyBTaG91bGQgbmV2ZXIgZ2V0IGhlcmUsIHJlZGlyZWN0cyBzaG91bGQgZ2V0IHByb2Nlc3NlZCBhYm92ZSwgYnV0IHdlXG4gICAgICAvLyBrZWVwIHRoaXMgdG8gdHlwZSBuYXJyb3cgdG8gYSBzdWNjZXNzIHJlc3VsdCBpbiB0aGUgZWxzZVxuICAgICAgaW52YXJpYW50KGZhbHNlLCBcIlVuaGFuZGxlZCBmZXRjaGVyIHJldmFsaWRhdGlvbiByZWRpcmVjdFwiKTtcbiAgICB9IGVsc2UgaWYgKGlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSkge1xuICAgICAgLy8gU2hvdWxkIG5ldmVyIGdldCBoZXJlLCBkZWZlcnJlZCBkYXRhIHNob3VsZCBiZSBhd2FpdGVkIGZvciBmZXRjaGVyc1xuICAgICAgLy8gaW4gcmVzb2x2ZURlZmVycmVkUmVzdWx0c1xuICAgICAgaW52YXJpYW50KGZhbHNlLCBcIlVuaGFuZGxlZCBmZXRjaGVyIGRlZmVycmVkIGRhdGFcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBkb25lRmV0Y2hlciA9IGdldERvbmVGZXRjaGVyKHJlc3VsdC5kYXRhKTtcbiAgICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGRvbmVGZXRjaGVyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGxvYWRlckRhdGEsXG4gICAgZXJyb3JzXG4gIH07XG59XG5mdW5jdGlvbiBtZXJnZUxvYWRlckRhdGEobG9hZGVyRGF0YSwgbmV3TG9hZGVyRGF0YSwgbWF0Y2hlcywgZXJyb3JzKSB7XG4gIGxldCBtZXJnZWRMb2FkZXJEYXRhID0gX2V4dGVuZHMoe30sIG5ld0xvYWRlckRhdGEpO1xuICBmb3IgKGxldCBtYXRjaCBvZiBtYXRjaGVzKSB7XG4gICAgbGV0IGlkID0gbWF0Y2gucm91dGUuaWQ7XG4gICAgaWYgKG5ld0xvYWRlckRhdGEuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICBpZiAobmV3TG9hZGVyRGF0YVtpZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtZXJnZWRMb2FkZXJEYXRhW2lkXSA9IG5ld0xvYWRlckRhdGFbaWRdO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobG9hZGVyRGF0YVtpZF0gIT09IHVuZGVmaW5lZCAmJiBtYXRjaC5yb3V0ZS5sb2FkZXIpIHtcbiAgICAgIC8vIFByZXNlcnZlIGV4aXN0aW5nIGtleXMgbm90IGluY2x1ZGVkIGluIG5ld0xvYWRlckRhdGEgYW5kIHdoZXJlIGEgbG9hZGVyXG4gICAgICAvLyB3YXNuJ3QgcmVtb3ZlZCBieSBITVJcbiAgICAgIG1lcmdlZExvYWRlckRhdGFbaWRdID0gbG9hZGVyRGF0YVtpZF07XG4gICAgfVxuICAgIGlmIChlcnJvcnMgJiYgZXJyb3JzLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgLy8gRG9uJ3Qga2VlcCBhbnkgbG9hZGVyIGRhdGEgYmVsb3cgdGhlIGJvdW5kYXJ5XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1lcmdlZExvYWRlckRhdGE7XG59XG5mdW5jdGlvbiBnZXRBY3Rpb25EYXRhRm9yQ29tbWl0KHBlbmRpbmdBY3Rpb25SZXN1bHQpIHtcbiAgaWYgKCFwZW5kaW5nQWN0aW9uUmVzdWx0KSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIHJldHVybiBpc0Vycm9yUmVzdWx0KHBlbmRpbmdBY3Rpb25SZXN1bHRbMV0pID8ge1xuICAgIC8vIENsZWFyIG91dCBwcmlvciBhY3Rpb25EYXRhIG9uIGVycm9yc1xuICAgIGFjdGlvbkRhdGE6IHt9XG4gIH0gOiB7XG4gICAgYWN0aW9uRGF0YToge1xuICAgICAgW3BlbmRpbmdBY3Rpb25SZXN1bHRbMF1dOiBwZW5kaW5nQWN0aW9uUmVzdWx0WzFdLmRhdGFcbiAgICB9XG4gIH07XG59XG4vLyBGaW5kIHRoZSBuZWFyZXN0IGVycm9yIGJvdW5kYXJ5LCBsb29raW5nIHVwd2FyZHMgZnJvbSB0aGUgbGVhZiByb3V0ZSAob3IgdGhlXG4vLyByb3V0ZSBzcGVjaWZpZWQgYnkgcm91dGVJZCkgZm9yIHRoZSBjbG9zZXN0IGFuY2VzdG9yIGVycm9yIGJvdW5kYXJ5LFxuLy8gZGVmYXVsdGluZyB0byB0aGUgcm9vdCBtYXRjaFxuZnVuY3Rpb24gZmluZE5lYXJlc3RCb3VuZGFyeShtYXRjaGVzLCByb3V0ZUlkKSB7XG4gIGxldCBlbGlnaWJsZU1hdGNoZXMgPSByb3V0ZUlkID8gbWF0Y2hlcy5zbGljZSgwLCBtYXRjaGVzLmZpbmRJbmRleChtID0+IG0ucm91dGUuaWQgPT09IHJvdXRlSWQpICsgMSkgOiBbLi4ubWF0Y2hlc107XG4gIHJldHVybiBlbGlnaWJsZU1hdGNoZXMucmV2ZXJzZSgpLmZpbmQobSA9PiBtLnJvdXRlLmhhc0Vycm9yQm91bmRhcnkgPT09IHRydWUpIHx8IG1hdGNoZXNbMF07XG59XG5mdW5jdGlvbiBnZXRTaG9ydENpcmN1aXRNYXRjaGVzKHJvdXRlcykge1xuICAvLyBQcmVmZXIgYSByb290IGxheW91dCByb3V0ZSBpZiBwcmVzZW50LCBvdGhlcndpc2Ugc2hpbSBpbiBhIHJvdXRlIG9iamVjdFxuICBsZXQgcm91dGUgPSByb3V0ZXMubGVuZ3RoID09PSAxID8gcm91dGVzWzBdIDogcm91dGVzLmZpbmQociA9PiByLmluZGV4IHx8ICFyLnBhdGggfHwgci5wYXRoID09PSBcIi9cIikgfHwge1xuICAgIGlkOiBcIl9fc2hpbS1lcnJvci1yb3V0ZV9fXCJcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBtYXRjaGVzOiBbe1xuICAgICAgcGFyYW1zOiB7fSxcbiAgICAgIHBhdGhuYW1lOiBcIlwiLFxuICAgICAgcGF0aG5hbWVCYXNlOiBcIlwiLFxuICAgICAgcm91dGVcbiAgICB9XSxcbiAgICByb3V0ZVxuICB9O1xufVxuZnVuY3Rpb24gZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcihzdGF0dXMsIF90ZW1wNSkge1xuICBsZXQge1xuICAgIHBhdGhuYW1lLFxuICAgIHJvdXRlSWQsXG4gICAgbWV0aG9kLFxuICAgIHR5cGUsXG4gICAgbWVzc2FnZVxuICB9ID0gX3RlbXA1ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNTtcbiAgbGV0IHN0YXR1c1RleHQgPSBcIlVua25vd24gU2VydmVyIEVycm9yXCI7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBcIlVua25vd24gQHJlbWl4LXJ1bi9yb3V0ZXIgZXJyb3JcIjtcbiAgaWYgKHN0YXR1cyA9PT0gNDAwKSB7XG4gICAgc3RhdHVzVGV4dCA9IFwiQmFkIFJlcXVlc3RcIjtcbiAgICBpZiAobWV0aG9kICYmIHBhdGhuYW1lICYmIHJvdXRlSWQpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9IFwiWW91IG1hZGUgYSBcIiArIG1ldGhvZCArIFwiIHJlcXVlc3QgdG8gXFxcIlwiICsgcGF0aG5hbWUgKyBcIlxcXCIgYnV0IFwiICsgKFwiZGlkIG5vdCBwcm92aWRlIGEgYGxvYWRlcmAgZm9yIHJvdXRlIFxcXCJcIiArIHJvdXRlSWQgKyBcIlxcXCIsIFwiKSArIFwic28gdGhlcmUgaXMgbm8gd2F5IHRvIGhhbmRsZSB0aGUgcmVxdWVzdC5cIjtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZGVmZXItYWN0aW9uXCIpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9IFwiZGVmZXIoKSBpcyBub3Qgc3VwcG9ydGVkIGluIGFjdGlvbnNcIjtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiaW52YWxpZC1ib2R5XCIpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9IFwiVW5hYmxlIHRvIGVuY29kZSBzdWJtaXNzaW9uIGJvZHlcIjtcbiAgICB9XG4gIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcbiAgICBzdGF0dXNUZXh0ID0gXCJGb3JiaWRkZW5cIjtcbiAgICBlcnJvck1lc3NhZ2UgPSBcIlJvdXRlIFxcXCJcIiArIHJvdXRlSWQgKyBcIlxcXCIgZG9lcyBub3QgbWF0Y2ggVVJMIFxcXCJcIiArIHBhdGhuYW1lICsgXCJcXFwiXCI7XG4gIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDQpIHtcbiAgICBzdGF0dXNUZXh0ID0gXCJOb3QgRm91bmRcIjtcbiAgICBlcnJvck1lc3NhZ2UgPSBcIk5vIHJvdXRlIG1hdGNoZXMgVVJMIFxcXCJcIiArIHBhdGhuYW1lICsgXCJcXFwiXCI7XG4gIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDUpIHtcbiAgICBzdGF0dXNUZXh0ID0gXCJNZXRob2QgTm90IEFsbG93ZWRcIjtcbiAgICBpZiAobWV0aG9kICYmIHBhdGhuYW1lICYmIHJvdXRlSWQpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9IFwiWW91IG1hZGUgYSBcIiArIG1ldGhvZC50b1VwcGVyQ2FzZSgpICsgXCIgcmVxdWVzdCB0byBcXFwiXCIgKyBwYXRobmFtZSArIFwiXFxcIiBidXQgXCIgKyAoXCJkaWQgbm90IHByb3ZpZGUgYW4gYGFjdGlvbmAgZm9yIHJvdXRlIFxcXCJcIiArIHJvdXRlSWQgKyBcIlxcXCIsIFwiKSArIFwic28gdGhlcmUgaXMgbm8gd2F5IHRvIGhhbmRsZSB0aGUgcmVxdWVzdC5cIjtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCkge1xuICAgICAgZXJyb3JNZXNzYWdlID0gXCJJbnZhbGlkIHJlcXVlc3QgbWV0aG9kIFxcXCJcIiArIG1ldGhvZC50b1VwcGVyQ2FzZSgpICsgXCJcXFwiXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgRXJyb3JSZXNwb25zZUltcGwoc3RhdHVzIHx8IDUwMCwgc3RhdHVzVGV4dCwgbmV3IEVycm9yKGVycm9yTWVzc2FnZSksIHRydWUpO1xufVxuLy8gRmluZCBhbnkgcmV0dXJuZWQgcmVkaXJlY3QgZXJyb3JzLCBzdGFydGluZyBmcm9tIHRoZSBsb3dlc3QgbWF0Y2hcbmZ1bmN0aW9uIGZpbmRSZWRpcmVjdChyZXN1bHRzKSB7XG4gIGxldCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMocmVzdWx0cyk7XG4gIGZvciAobGV0IGkgPSBlbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGV0IFtrZXksIHJlc3VsdF0gPSBlbnRyaWVzW2ldO1xuICAgIGlmIChpc1JlZGlyZWN0UmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtleSxcbiAgICAgICAgcmVzdWx0XG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gc3RyaXBIYXNoRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGFyc2VkUGF0aCA9IHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKHBhdGgpIDogcGF0aDtcbiAgcmV0dXJuIGNyZWF0ZVBhdGgoX2V4dGVuZHMoe30sIHBhcnNlZFBhdGgsIHtcbiAgICBoYXNoOiBcIlwiXG4gIH0pKTtcbn1cbmZ1bmN0aW9uIGlzSGFzaENoYW5nZU9ubHkoYSwgYikge1xuICBpZiAoYS5wYXRobmFtZSAhPT0gYi5wYXRobmFtZSB8fCBhLnNlYXJjaCAhPT0gYi5zZWFyY2gpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGEuaGFzaCA9PT0gXCJcIikge1xuICAgIC8vIC9wYWdlIC0+IC9wYWdlI2hhc2hcbiAgICByZXR1cm4gYi5oYXNoICE9PSBcIlwiO1xuICB9IGVsc2UgaWYgKGEuaGFzaCA9PT0gYi5oYXNoKSB7XG4gICAgLy8gL3BhZ2UjaGFzaCAtPiAvcGFnZSNoYXNoXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoYi5oYXNoICE9PSBcIlwiKSB7XG4gICAgLy8gL3BhZ2UjaGFzaCAtPiAvcGFnZSNvdGhlclxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8vIElmIHRoZSBoYXNoIGlzIHJlbW92ZWQgdGhlIGJyb3dzZXIgd2lsbCByZS1wZXJmb3JtIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyXG4gIC8vIC9wYWdlI2hhc2ggLT4gL3BhZ2VcbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNEYXRhU3RyYXRlZ3lSZXN1bHQocmVzdWx0KSB7XG4gIHJldHVybiByZXN1bHQgIT0gbnVsbCAmJiB0eXBlb2YgcmVzdWx0ID09PSBcIm9iamVjdFwiICYmIFwidHlwZVwiIGluIHJlc3VsdCAmJiBcInJlc3VsdFwiIGluIHJlc3VsdCAmJiAocmVzdWx0LnR5cGUgPT09IFJlc3VsdFR5cGUuZGF0YSB8fCByZXN1bHQudHlwZSA9PT0gUmVzdWx0VHlwZS5lcnJvcik7XG59XG5mdW5jdGlvbiBpc1JlZGlyZWN0RGF0YVN0cmF0ZWd5UmVzdWx0UmVzdWx0KHJlc3VsdCkge1xuICByZXR1cm4gaXNSZXNwb25zZShyZXN1bHQucmVzdWx0KSAmJiByZWRpcmVjdFN0YXR1c0NvZGVzLmhhcyhyZXN1bHQucmVzdWx0LnN0YXR1cyk7XG59XG5mdW5jdGlvbiBpc0RlZmVycmVkUmVzdWx0KHJlc3VsdCkge1xuICByZXR1cm4gcmVzdWx0LnR5cGUgPT09IFJlc3VsdFR5cGUuZGVmZXJyZWQ7XG59XG5mdW5jdGlvbiBpc0Vycm9yUmVzdWx0KHJlc3VsdCkge1xuICByZXR1cm4gcmVzdWx0LnR5cGUgPT09IFJlc3VsdFR5cGUuZXJyb3I7XG59XG5mdW5jdGlvbiBpc1JlZGlyZWN0UmVzdWx0KHJlc3VsdCkge1xuICByZXR1cm4gKHJlc3VsdCAmJiByZXN1bHQudHlwZSkgPT09IFJlc3VsdFR5cGUucmVkaXJlY3Q7XG59XG5mdW5jdGlvbiBpc0RhdGFXaXRoUmVzcG9uc2VJbml0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT0gbnVsbCAmJiBcInR5cGVcIiBpbiB2YWx1ZSAmJiBcImRhdGFcIiBpbiB2YWx1ZSAmJiBcImluaXRcIiBpbiB2YWx1ZSAmJiB2YWx1ZS50eXBlID09PSBcIkRhdGFXaXRoUmVzcG9uc2VJbml0XCI7XG59XG5mdW5jdGlvbiBpc0RlZmVycmVkRGF0YSh2YWx1ZSkge1xuICBsZXQgZGVmZXJyZWQgPSB2YWx1ZTtcbiAgcmV0dXJuIGRlZmVycmVkICYmIHR5cGVvZiBkZWZlcnJlZCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZGVmZXJyZWQuZGF0YSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZGVmZXJyZWQuc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGRlZmVycmVkLmNhbmNlbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBkZWZlcnJlZC5yZXNvbHZlRGF0YSA9PT0gXCJmdW5jdGlvblwiO1xufVxuZnVuY3Rpb24gaXNSZXNwb25zZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUuc3RhdHVzID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB2YWx1ZS5zdGF0dXNUZXh0ID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2YWx1ZS5oZWFkZXJzID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS5ib2R5ICE9PSBcInVuZGVmaW5lZFwiO1xufVxuZnVuY3Rpb24gaXNSZWRpcmVjdFJlc3BvbnNlKHJlc3VsdCkge1xuICBpZiAoIWlzUmVzcG9uc2UocmVzdWx0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBsZXQgc3RhdHVzID0gcmVzdWx0LnN0YXR1cztcbiAgbGV0IGxvY2F0aW9uID0gcmVzdWx0LmhlYWRlcnMuZ2V0KFwiTG9jYXRpb25cIik7XG4gIHJldHVybiBzdGF0dXMgPj0gMzAwICYmIHN0YXR1cyA8PSAzOTkgJiYgbG9jYXRpb24gIT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGlzVmFsaWRNZXRob2QobWV0aG9kKSB7XG4gIHJldHVybiB2YWxpZFJlcXVlc3RNZXRob2RzLmhhcyhtZXRob2QudG9Mb3dlckNhc2UoKSk7XG59XG5mdW5jdGlvbiBpc011dGF0aW9uTWV0aG9kKG1ldGhvZCkge1xuICByZXR1cm4gdmFsaWRNdXRhdGlvbk1ldGhvZHMuaGFzKG1ldGhvZC50b0xvd2VyQ2FzZSgpKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHJlc29sdmVOYXZpZ2F0aW9uRGVmZXJyZWRSZXN1bHRzKG1hdGNoZXMsIHJlc3VsdHMsIHNpZ25hbCwgY3VycmVudE1hdGNoZXMsIGN1cnJlbnRMb2FkZXJEYXRhKSB7XG4gIGxldCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMocmVzdWx0cyk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbnRyaWVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGxldCBbcm91dGVJZCwgcmVzdWx0XSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIGxldCBtYXRjaCA9IG1hdGNoZXMuZmluZChtID0+IChtID09IG51bGwgPyB2b2lkIDAgOiBtLnJvdXRlLmlkKSA9PT0gcm91dGVJZCk7XG4gICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIG1hdGNoLCB0aGVuIHdlIGNhbiBoYXZlIGEgZGVmZXJyZWQgcmVzdWx0IHRvIGRvXG4gICAgLy8gYW55dGhpbmcgd2l0aC4gIFRoaXMgaXMgZm9yIHJldmFsaWRhdGluZyBmZXRjaGVycyB3aGVyZSB0aGUgcm91dGUgd2FzXG4gICAgLy8gcmVtb3ZlZCBkdXJpbmcgSE1SXG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGxldCBjdXJyZW50TWF0Y2ggPSBjdXJyZW50TWF0Y2hlcy5maW5kKG0gPT4gbS5yb3V0ZS5pZCA9PT0gbWF0Y2gucm91dGUuaWQpO1xuICAgIGxldCBpc1JldmFsaWRhdGluZ0xvYWRlciA9IGN1cnJlbnRNYXRjaCAhPSBudWxsICYmICFpc05ld1JvdXRlSW5zdGFuY2UoY3VycmVudE1hdGNoLCBtYXRjaCkgJiYgKGN1cnJlbnRMb2FkZXJEYXRhICYmIGN1cnJlbnRMb2FkZXJEYXRhW21hdGNoLnJvdXRlLmlkXSkgIT09IHVuZGVmaW5lZDtcbiAgICBpZiAoaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpICYmIGlzUmV2YWxpZGF0aW5nTG9hZGVyKSB7XG4gICAgICAvLyBOb3RlOiB3ZSBkbyBub3QgaGF2ZSB0byB0b3VjaCBhY3RpdmVEZWZlcnJlZHMgaGVyZSBzaW5jZSB3ZSByYWNlIHRoZW1cbiAgICAgIC8vIGFnYWluc3QgdGhlIHNpZ25hbCBpbiByZXNvbHZlRGVmZXJyZWREYXRhIGFuZCB0aGV5J2xsIGdldCBhYm9ydGVkXG4gICAgICAvLyB0aGVyZSBpZiBuZWVkZWRcbiAgICAgIGF3YWl0IHJlc29sdmVEZWZlcnJlZERhdGEocmVzdWx0LCBzaWduYWwsIGZhbHNlKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHRzW3JvdXRlSWRdID0gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIHJlc29sdmVGZXRjaGVyRGVmZXJyZWRSZXN1bHRzKG1hdGNoZXMsIHJlc3VsdHMsIHJldmFsaWRhdGluZ0ZldGNoZXJzKSB7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCByZXZhbGlkYXRpbmdGZXRjaGVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBsZXQge1xuICAgICAga2V5LFxuICAgICAgcm91dGVJZCxcbiAgICAgIGNvbnRyb2xsZXJcbiAgICB9ID0gcmV2YWxpZGF0aW5nRmV0Y2hlcnNbaW5kZXhdO1xuICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2tleV07XG4gICAgbGV0IG1hdGNoID0gbWF0Y2hlcy5maW5kKG0gPT4gKG0gPT0gbnVsbCA/IHZvaWQgMCA6IG0ucm91dGUuaWQpID09PSByb3V0ZUlkKTtcbiAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgbWF0Y2gsIHRoZW4gd2UgY2FuIGhhdmUgYSBkZWZlcnJlZCByZXN1bHQgdG8gZG9cbiAgICAvLyBhbnl0aGluZyB3aXRoLiAgVGhpcyBpcyBmb3IgcmV2YWxpZGF0aW5nIGZldGNoZXJzIHdoZXJlIHRoZSByb3V0ZSB3YXNcbiAgICAvLyByZW1vdmVkIGR1cmluZyBITVJcbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSkge1xuICAgICAgLy8gTm90ZTogd2UgZG8gbm90IGhhdmUgdG8gdG91Y2ggYWN0aXZlRGVmZXJyZWRzIGhlcmUgc2luY2Ugd2UgcmFjZSB0aGVtXG4gICAgICAvLyBhZ2FpbnN0IHRoZSBzaWduYWwgaW4gcmVzb2x2ZURlZmVycmVkRGF0YSBhbmQgdGhleSdsbCBnZXQgYWJvcnRlZFxuICAgICAgLy8gdGhlcmUgaWYgbmVlZGVkXG4gICAgICBpbnZhcmlhbnQoY29udHJvbGxlciwgXCJFeHBlY3RlZCBhbiBBYm9ydENvbnRyb2xsZXIgZm9yIHJldmFsaWRhdGluZyBmZXRjaGVyIGRlZmVycmVkIHJlc3VsdFwiKTtcbiAgICAgIGF3YWl0IHJlc29sdmVEZWZlcnJlZERhdGEocmVzdWx0LCBjb250cm9sbGVyLnNpZ25hbCwgdHJ1ZSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0c1trZXldID0gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIHJlc29sdmVEZWZlcnJlZERhdGEocmVzdWx0LCBzaWduYWwsIHVud3JhcCkge1xuICBpZiAodW53cmFwID09PSB2b2lkIDApIHtcbiAgICB1bndyYXAgPSBmYWxzZTtcbiAgfVxuICBsZXQgYWJvcnRlZCA9IGF3YWl0IHJlc3VsdC5kZWZlcnJlZERhdGEucmVzb2x2ZURhdGEoc2lnbmFsKTtcbiAgaWYgKGFib3J0ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHVud3JhcCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLmRhdGEsXG4gICAgICAgIGRhdGE6IHJlc3VsdC5kZWZlcnJlZERhdGEudW53cmFwcGVkRGF0YVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBIYW5kbGUgYW55IFRyYWNrZWRQcm9taXNlLl9lcnJvciB2YWx1ZXMgZW5jb3VudGVyZWQgd2hpbGUgdW53cmFwcGluZ1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5lcnJvcixcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogUmVzdWx0VHlwZS5kYXRhLFxuICAgIGRhdGE6IHJlc3VsdC5kZWZlcnJlZERhdGEuZGF0YVxuICB9O1xufVxuZnVuY3Rpb24gaGFzTmFrZWRJbmRleFF1ZXJ5KHNlYXJjaCkge1xuICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2gpLmdldEFsbChcImluZGV4XCIpLnNvbWUodiA9PiB2ID09PSBcIlwiKTtcbn1cbmZ1bmN0aW9uIGdldFRhcmdldE1hdGNoKG1hdGNoZXMsIGxvY2F0aW9uKSB7XG4gIGxldCBzZWFyY2ggPSB0eXBlb2YgbG9jYXRpb24gPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgobG9jYXRpb24pLnNlYXJjaCA6IGxvY2F0aW9uLnNlYXJjaDtcbiAgaWYgKG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5yb3V0ZS5pbmRleCAmJiBoYXNOYWtlZEluZGV4UXVlcnkoc2VhcmNoIHx8IFwiXCIpKSB7XG4gICAgLy8gUmV0dXJuIHRoZSBsZWFmIGluZGV4IHJvdXRlIHdoZW4gaW5kZXggaXMgcHJlc2VudFxuICAgIHJldHVybiBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV07XG4gIH1cbiAgLy8gT3RoZXJ3aXNlIGdyYWIgdGhlIGRlZXBlc3QgXCJwYXRoIGNvbnRyaWJ1dGluZ1wiIG1hdGNoIChpZ25vcmluZyBpbmRleCBhbmRcbiAgLy8gcGF0aGxlc3MgbGF5b3V0IHJvdXRlcylcbiAgbGV0IHBhdGhNYXRjaGVzID0gZ2V0UGF0aENvbnRyaWJ1dGluZ01hdGNoZXMobWF0Y2hlcyk7XG4gIHJldHVybiBwYXRoTWF0Y2hlc1twYXRoTWF0Y2hlcy5sZW5ndGggLSAxXTtcbn1cbmZ1bmN0aW9uIGdldFN1Ym1pc3Npb25Gcm9tTmF2aWdhdGlvbihuYXZpZ2F0aW9uKSB7XG4gIGxldCB7XG4gICAgZm9ybU1ldGhvZCxcbiAgICBmb3JtQWN0aW9uLFxuICAgIGZvcm1FbmNUeXBlLFxuICAgIHRleHQsXG4gICAgZm9ybURhdGEsXG4gICAganNvblxuICB9ID0gbmF2aWdhdGlvbjtcbiAgaWYgKCFmb3JtTWV0aG9kIHx8ICFmb3JtQWN0aW9uIHx8ICFmb3JtRW5jVHlwZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodGV4dCAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvcm1NZXRob2QsXG4gICAgICBmb3JtQWN0aW9uLFxuICAgICAgZm9ybUVuY1R5cGUsXG4gICAgICBmb3JtRGF0YTogdW5kZWZpbmVkLFxuICAgICAganNvbjogdW5kZWZpbmVkLFxuICAgICAgdGV4dFxuICAgIH07XG4gIH0gZWxzZSBpZiAoZm9ybURhdGEgIT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb3JtTWV0aG9kLFxuICAgICAgZm9ybUFjdGlvbixcbiAgICAgIGZvcm1FbmNUeXBlLFxuICAgICAgZm9ybURhdGEsXG4gICAgICBqc29uOiB1bmRlZmluZWQsXG4gICAgICB0ZXh0OiB1bmRlZmluZWRcbiAgICB9O1xuICB9IGVsc2UgaWYgKGpzb24gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb3JtTWV0aG9kLFxuICAgICAgZm9ybUFjdGlvbixcbiAgICAgIGZvcm1FbmNUeXBlLFxuICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZCxcbiAgICAgIGpzb24sXG4gICAgICB0ZXh0OiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiBnZXRMb2FkaW5nTmF2aWdhdGlvbihsb2NhdGlvbiwgc3VibWlzc2lvbikge1xuICBpZiAoc3VibWlzc2lvbikge1xuICAgIGxldCBuYXZpZ2F0aW9uID0ge1xuICAgICAgc3RhdGU6IFwibG9hZGluZ1wiLFxuICAgICAgbG9jYXRpb24sXG4gICAgICBmb3JtTWV0aG9kOiBzdWJtaXNzaW9uLmZvcm1NZXRob2QsXG4gICAgICBmb3JtQWN0aW9uOiBzdWJtaXNzaW9uLmZvcm1BY3Rpb24sXG4gICAgICBmb3JtRW5jVHlwZTogc3VibWlzc2lvbi5mb3JtRW5jVHlwZSxcbiAgICAgIGZvcm1EYXRhOiBzdWJtaXNzaW9uLmZvcm1EYXRhLFxuICAgICAganNvbjogc3VibWlzc2lvbi5qc29uLFxuICAgICAgdGV4dDogc3VibWlzc2lvbi50ZXh0XG4gICAgfTtcbiAgICByZXR1cm4gbmF2aWdhdGlvbjtcbiAgfSBlbHNlIHtcbiAgICBsZXQgbmF2aWdhdGlvbiA9IHtcbiAgICAgIHN0YXRlOiBcImxvYWRpbmdcIixcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gICAgICBqc29uOiB1bmRlZmluZWQsXG4gICAgICB0ZXh0OiB1bmRlZmluZWRcbiAgICB9O1xuICAgIHJldHVybiBuYXZpZ2F0aW9uO1xuICB9XG59XG5mdW5jdGlvbiBnZXRTdWJtaXR0aW5nTmF2aWdhdGlvbihsb2NhdGlvbiwgc3VibWlzc2lvbikge1xuICBsZXQgbmF2aWdhdGlvbiA9IHtcbiAgICBzdGF0ZTogXCJzdWJtaXR0aW5nXCIsXG4gICAgbG9jYXRpb24sXG4gICAgZm9ybU1ldGhvZDogc3VibWlzc2lvbi5mb3JtTWV0aG9kLFxuICAgIGZvcm1BY3Rpb246IHN1Ym1pc3Npb24uZm9ybUFjdGlvbixcbiAgICBmb3JtRW5jVHlwZTogc3VibWlzc2lvbi5mb3JtRW5jVHlwZSxcbiAgICBmb3JtRGF0YTogc3VibWlzc2lvbi5mb3JtRGF0YSxcbiAgICBqc29uOiBzdWJtaXNzaW9uLmpzb24sXG4gICAgdGV4dDogc3VibWlzc2lvbi50ZXh0XG4gIH07XG4gIHJldHVybiBuYXZpZ2F0aW9uO1xufVxuZnVuY3Rpb24gZ2V0TG9hZGluZ0ZldGNoZXIoc3VibWlzc2lvbiwgZGF0YSkge1xuICBpZiAoc3VibWlzc2lvbikge1xuICAgIGxldCBmZXRjaGVyID0ge1xuICAgICAgc3RhdGU6IFwibG9hZGluZ1wiLFxuICAgICAgZm9ybU1ldGhvZDogc3VibWlzc2lvbi5mb3JtTWV0aG9kLFxuICAgICAgZm9ybUFjdGlvbjogc3VibWlzc2lvbi5mb3JtQWN0aW9uLFxuICAgICAgZm9ybUVuY1R5cGU6IHN1Ym1pc3Npb24uZm9ybUVuY1R5cGUsXG4gICAgICBmb3JtRGF0YTogc3VibWlzc2lvbi5mb3JtRGF0YSxcbiAgICAgIGpzb246IHN1Ym1pc3Npb24uanNvbixcbiAgICAgIHRleHQ6IHN1Ym1pc3Npb24udGV4dCxcbiAgICAgIGRhdGFcbiAgICB9O1xuICAgIHJldHVybiBmZXRjaGVyO1xuICB9IGVsc2Uge1xuICAgIGxldCBmZXRjaGVyID0ge1xuICAgICAgc3RhdGU6IFwibG9hZGluZ1wiLFxuICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gICAgICBqc29uOiB1bmRlZmluZWQsXG4gICAgICB0ZXh0OiB1bmRlZmluZWQsXG4gICAgICBkYXRhXG4gICAgfTtcbiAgICByZXR1cm4gZmV0Y2hlcjtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0U3VibWl0dGluZ0ZldGNoZXIoc3VibWlzc2lvbiwgZXhpc3RpbmdGZXRjaGVyKSB7XG4gIGxldCBmZXRjaGVyID0ge1xuICAgIHN0YXRlOiBcInN1Ym1pdHRpbmdcIixcbiAgICBmb3JtTWV0aG9kOiBzdWJtaXNzaW9uLmZvcm1NZXRob2QsXG4gICAgZm9ybUFjdGlvbjogc3VibWlzc2lvbi5mb3JtQWN0aW9uLFxuICAgIGZvcm1FbmNUeXBlOiBzdWJtaXNzaW9uLmZvcm1FbmNUeXBlLFxuICAgIGZvcm1EYXRhOiBzdWJtaXNzaW9uLmZvcm1EYXRhLFxuICAgIGpzb246IHN1Ym1pc3Npb24uanNvbixcbiAgICB0ZXh0OiBzdWJtaXNzaW9uLnRleHQsXG4gICAgZGF0YTogZXhpc3RpbmdGZXRjaGVyID8gZXhpc3RpbmdGZXRjaGVyLmRhdGEgOiB1bmRlZmluZWRcbiAgfTtcbiAgcmV0dXJuIGZldGNoZXI7XG59XG5mdW5jdGlvbiBnZXREb25lRmV0Y2hlcihkYXRhKSB7XG4gIGxldCBmZXRjaGVyID0ge1xuICAgIHN0YXRlOiBcImlkbGVcIixcbiAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICAgIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gICAgZm9ybURhdGE6IHVuZGVmaW5lZCxcbiAgICBqc29uOiB1bmRlZmluZWQsXG4gICAgdGV4dDogdW5kZWZpbmVkLFxuICAgIGRhdGFcbiAgfTtcbiAgcmV0dXJuIGZldGNoZXI7XG59XG5mdW5jdGlvbiByZXN0b3JlQXBwbGllZFRyYW5zaXRpb25zKF93aW5kb3csIHRyYW5zaXRpb25zKSB7XG4gIHRyeSB7XG4gICAgbGV0IHNlc3Npb25Qb3NpdGlvbnMgPSBfd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oVFJBTlNJVElPTlNfU1RPUkFHRV9LRVkpO1xuICAgIGlmIChzZXNzaW9uUG9zaXRpb25zKSB7XG4gICAgICBsZXQganNvbiA9IEpTT04ucGFyc2Uoc2Vzc2lvblBvc2l0aW9ucyk7XG4gICAgICBmb3IgKGxldCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoanNvbiB8fCB7fSkpIHtcbiAgICAgICAgaWYgKHYgJiYgQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgICAgIHRyYW5zaXRpb25zLnNldChrLCBuZXcgU2V0KHYgfHwgW10pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIG5vLW9wLCB1c2UgZGVmYXVsdCBlbXB0eSBvYmplY3RcbiAgfVxufVxuZnVuY3Rpb24gcGVyc2lzdEFwcGxpZWRUcmFuc2l0aW9ucyhfd2luZG93LCB0cmFuc2l0aW9ucykge1xuICBpZiAodHJhbnNpdGlvbnMuc2l6ZSA+IDApIHtcbiAgICBsZXQganNvbiA9IHt9O1xuICAgIGZvciAobGV0IFtrLCB2XSBvZiB0cmFuc2l0aW9ucykge1xuICAgICAganNvbltrXSA9IFsuLi52XTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIF93aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShUUkFOU0lUSU9OU19TVE9SQUdFX0tFWSwgSlNPTi5zdHJpbmdpZnkoanNvbikpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB3YXJuaW5nKGZhbHNlLCBcIkZhaWxlZCB0byBzYXZlIGFwcGxpZWQgdmlldyB0cmFuc2l0aW9ucyBpbiBzZXNzaW9uU3RvcmFnZSAoXCIgKyBlcnJvciArIFwiKS5cIik7XG4gICAgfVxuICB9XG59XG4vLyNlbmRyZWdpb25cblxuZXhwb3J0IHsgQWJvcnRlZERlZmVycmVkRXJyb3IsIEFjdGlvbiwgSURMRV9CTE9DS0VSLCBJRExFX0ZFVENIRVIsIElETEVfTkFWSUdBVElPTiwgVU5TQUZFX0RFRkVSUkVEX1NZTUJPTCwgRGVmZXJyZWREYXRhIGFzIFVOU0FGRV9EZWZlcnJlZERhdGEsIEVycm9yUmVzcG9uc2VJbXBsIGFzIFVOU0FGRV9FcnJvclJlc3BvbnNlSW1wbCwgY29udmVydFJvdXRlTWF0Y2hUb1VpTWF0Y2ggYXMgVU5TQUZFX2NvbnZlcnRSb3V0ZU1hdGNoVG9VaU1hdGNoLCBjb252ZXJ0Um91dGVzVG9EYXRhUm91dGVzIGFzIFVOU0FGRV9jb252ZXJ0Um91dGVzVG9EYXRhUm91dGVzLCBkZWNvZGVQYXRoIGFzIFVOU0FGRV9kZWNvZGVQYXRoLCBnZXRSZXNvbHZlVG9NYXRjaGVzIGFzIFVOU0FGRV9nZXRSZXNvbHZlVG9NYXRjaGVzLCBpbnZhcmlhbnQgYXMgVU5TQUZFX2ludmFyaWFudCwgd2FybmluZyBhcyBVTlNBRkVfd2FybmluZywgY3JlYXRlQnJvd3Nlckhpc3RvcnksIGNyZWF0ZUhhc2hIaXN0b3J5LCBjcmVhdGVNZW1vcnlIaXN0b3J5LCBjcmVhdGVQYXRoLCBjcmVhdGVSb3V0ZXIsIGNyZWF0ZVN0YXRpY0hhbmRsZXIsIGRhdGEsIGRlZmVyLCBnZW5lcmF0ZVBhdGgsIGdldFN0YXRpY0NvbnRleHRGcm9tRXJyb3IsIGdldFRvUGF0aG5hbWUsIGlzRGF0YVdpdGhSZXNwb25zZUluaXQsIGlzRGVmZXJyZWREYXRhLCBpc1JvdXRlRXJyb3JSZXNwb25zZSwgam9pblBhdGhzLCBqc29uLCBtYXRjaFBhdGgsIG1hdGNoUm91dGVzLCBub3JtYWxpemVQYXRobmFtZSwgcGFyc2VQYXRoLCByZWRpcmVjdCwgcmVkaXJlY3REb2N1bWVudCwgcmVwbGFjZSwgcmVzb2x2ZVBhdGgsIHJlc29sdmVUbywgc3RyaXBCYXNlbmFtZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgTmF2aWdhY2UgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZpZ2FjZVwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vcGFnZXMvSG9tZVwiO1xuaW1wb3J0IFBvcnRmb2xpbyBmcm9tIFwiLi9wYWdlcy9Qb3J0Zm9saW9cIjtcbmltcG9ydCBEZW5payBmcm9tIFwiLi9wYWdlcy9EZW5pa1wiO1xuaW1wb3J0IFNlYXJjaEFQSSBmcm9tIFwiLi9wYWdlcy9TZWFyY2hBUElcIjtcbmltcG9ydCBBYm91dCBmcm9tIFwiLi9wYWdlcy9BYm91dFwiO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gXCIuL3BhZ2VzL05vdEZvdW5kXCI7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW3ByaXNwZXZreSwgc2V0UHJpc3Bldmt5XSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBwcmlkZWpQcmlzcGV2ZWsgPSAodGlja2VyKSA9PiB7XG4gICAgaWYgKCF0aWNrZXIudHJpbSgpKSB7XG4gICAgICBhbGVydChcIlByb3PDrW0gdnlwbMWIIG7DoXpldiBha2NpZSFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFByaXNwZXZreShbLi4ucHJpc3Bldmt5LCB7IHRpY2tlcjogdGlja2VyLCBvcGVyYWNlOiBbXSB9XSk7XG4gIH07XG5cbiAgY29uc3Qgc21helByaXNwZXZlayA9IChpbmRleCkgPT4ge1xuICAgIHNldFByaXNwZXZreShwcmlzcGV2a3kuZmlsdGVyKChfLCBpbmRleFApID0+IGluZGV4UCAhPT0gaW5kZXgpKTtcbiAgfTtcblxuICBjb25zdCBwcmlkZWpPcGVyYWNpID0gKGluZGV4UHJpc3Bldmt1LCBub3ZhT3BlcmFjZSkgPT4ge1xuICAgIHNldFByaXNwZXZreSgocHJldlByaXNwZXZreSkgPT5cbiAgICAgIHByZXZQcmlzcGV2a3kubWFwKChwcmlzcGV2ZWssIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gaW5kZXhQcmlzcGV2a3UpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucHJpc3BldmVrLFxuICAgICAgICAgICAgb3BlcmFjZTogWy4uLnByaXNwZXZlay5vcGVyYWNlLCBub3ZhT3BlcmFjZV0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJpc3BldmVrO1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHNtYXpPcGVyYWNpID0gKGluZGV4UHJpc3Bldmt1LCBpbmRleE9wZXJhY2UpID0+IHtcbiAgICBzZXRQcmlzcGV2a3koXG4gICAgICBwcmlzcGV2a3kubWFwKChwcmlzcGV2ZWssIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gaW5kZXhQcmlzcGV2a3UpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucHJpc3BldmVrLFxuICAgICAgICAgICAgb3BlcmFjZTogcHJpc3BldmVrLm9wZXJhY2UuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleE9wZXJhY2UpLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByaXNwZXZlaztcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgPE5hdmlnYWNlIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC00XCI+XG4gICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICBwYXRoPVwiL3BvcnRmb2xpb1wiXG4gICAgICAgICAgICBlbGVtZW50PXs8UG9ydGZvbGlvIHByaXNwZXZreT17cHJpc3Bldmt5fSAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgcGF0aD1cIi9kZW5pa1wiXG4gICAgICAgICAgICBlbGVtZW50PXtcbiAgICAgICAgICAgICAgPERlbmlrXG4gICAgICAgICAgICAgICAgcHJpc3Bldmt5PXtwcmlzcGV2a3l9XG4gICAgICAgICAgICAgICAgcHJpZGVqUHJpc3BldmVrPXtwcmlkZWpQcmlzcGV2ZWt9XG4gICAgICAgICAgICAgICAgc21helByaXNwZXZlaz17c21helByaXNwZXZla31cbiAgICAgICAgICAgICAgICBwcmlkZWpPcGVyYWNpPXtwcmlkZWpPcGVyYWNpfVxuICAgICAgICAgICAgICAgIHNtYXpPcGVyYWNpPXtzbWF6T3BlcmFjaX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Z5aGxlZGF2YW5pXCIgZWxlbWVudD17PFNlYXJjaEFQSSAvPn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hYm91dFwiIGVsZW1lbnQ9ezxBYm91dCAvPn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBlbGVtZW50PXs8Tm90Rm91bmQgLz59IC8+XG4gICAgICAgIDwvUm91dGVzPlxuICAgICAgPC9kaXY+XG4gICAgPC9Ccm93c2VyUm91dGVyPlxuICApO1xufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5mdW5jdGlvbiBOYXZpZ2FjZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLXByaW1hcnlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxuICAgICAgICAgIFN0b2NrIE5vdGVcbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIHsvKiBUbGHEjcOtdGtvIHBybyBzYmFsZW7DrSAoaGFtYnVyZ2VyKSAqL31cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJOYXZcIlxuICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZcIlxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJOYXZcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtcy1hdXRvXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvcG9ydGZvbGlvXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICBQb3J0Zm9saW9cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9kZW5pa1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgRGVuw61rXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvdnlobGVkYXZhbmlcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgIFZ5aGxlZMOhdsOhbsOtXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvYWJvdXRcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgIE8gYXBsaWthY2lcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2FjZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgQnV0dG9uU21hemF0T3BlcmFjaSBuZXBvdcW+w612w6FtIHphdMOtbVxuXG5mdW5jdGlvbiBPcGVyYXRpb25zKHtcbiAgb3BlcmFjZSxcbiAgaW5kZXhQcmlzcGV2a3UsXG4gIG9uQWRkT3BlcmFjZSxcbiAgb25EZWxldGVPcGVyYWNlLFxufSkge1xuICAvLyBPZHN1ZCBwb8SNw610w6FtIHByxa9txJtyIGEgdnl0dsOhxZnDrSBzZSBtaSBqZWRub3RsaXbDqSDFmcOhZGt5IHRyYW5zYWtjw61cbiAgY29uc3QgW25vdmFPcGVyYWNlLCBzZXROb3ZhT3BlcmFjZV0gPSB1c2VTdGF0ZSh7XG4gICAgY2VuYTogXCJcIixcbiAgICBrdXN5OiBcIlwiLFxuICAgIHBvcGxhdGVrOiBcIlwiLFxuICAgIGRhdHVtOiBcIlwiLFxuICB9KTtcblxuICAvLyBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgLy8gICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG5cbiAgLy8gICBzZXROb3ZhT3BlcmFjZSh7IC4uLm5vdmFPcGVyYWNlLCBbbmFtZV06IHZhbHVlIH0pO1xuICAvLyB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcblxuICAgIHNldE5vdmFPcGVyYWNlKChwcmV2KSA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIFtuYW1lXTpcbiAgICAgICAgbmFtZSA9PT0gXCJjZW5hXCIgfHwgbmFtZSA9PT0gXCJrdXN5XCIgfHwgbmFtZSA9PT0gXCJwb3BsYXRla1wiXG4gICAgICAgICAgPyBwYXJzZUZsb2F0KHZhbHVlKVxuICAgICAgICAgIDogdmFsdWUsXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IHByaWRlak5vdm91T3BlcmFjaSA9ICgpID0+IHtcbiAgICBpZiAoIW5vdmFPcGVyYWNlLmNlbmEgfHwgIW5vdmFPcGVyYWNlLmt1c3kpIHtcbiAgICAgIGFsZXJ0KFwiVnlwbMWIIGNlbnUgYSBwb8SNZXQga3Vzxa8hXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9uQWRkT3BlcmFjZShpbmRleFByaXNwZXZrdSwge1xuICAgICAgY2VuYTogbm92YU9wZXJhY2UuY2VuYSwgLy9wxZllZCB0w61tIGpzZW0gdHUgbcSbbCBjZW5hOiBwYXJzZUZsb2F0KG5vdmFPcGVyYWNlLmNlbmEpLFxuICAgICAga3VzeTogbm92YU9wZXJhY2Uua3VzeSxcbiAgICAgIHBvcGxhdGVrOiBub3ZhT3BlcmFjZS5wb3BsYXRlayB8fCAwLFxuICAgICAgZGF0dW06IG5vdmFPcGVyYWNlLmRhdHVtIHx8IFwiLVwiLFxuICAgIH0pO1xuXG4gICAgc2V0Tm92YU9wZXJhY2UoeyBjZW5hOiBcIlwiLCBrdXN5OiBcIlwiLCBwb3BsYXRlazogXCJcIiwgZGF0dW06IFwiXCIgfSk7XG4gIH07XG5cbiAgY29uc3Qgdnlwb2NpdGVqUHJ1bWVyID0gKCkgPT4ge1xuICAgIGxldCBuYWt1cG5pQ2VuYSA9IDA7IC8vIGNlbGtvdsOpIG7DoWtsYWR5IG5hIG7DoWt1cHlcbiAgICBsZXQgY2Vsa2VtS3VzdSA9IDA7IC8vIGFrdHXDoWxuw60gcG/EjWV0IGt1c8WvXG4gICAgbGV0IGNlbGtlbVBvcGxhdGt1ID0gMDsgLy8gc291xI1ldCB2xaFlY2ggcG9wbGF0a8WvXG5cbiAgICBvcGVyYWNlLmZvckVhY2goKHsgY2VuYSwga3VzeSwgcG9wbGF0ZWsgfSkgPT4ge1xuICAgICAgaWYgKGt1c3kgPiAwKSB7XG4gICAgICAgIC8vIE7DoWt1cDogemFwb8SNw610w6FtZSBjZW51IGkgcG9wbGF0ZWtcbiAgICAgICAgbmFrdXBuaUNlbmEgKz0gY2VuYSAqIGt1c3kgKyBwb3BsYXRlaztcbiAgICAgICAgY2Vsa2VtS3VzdSArPSBrdXN5O1xuICAgICAgICBjZWxrZW1Qb3BsYXRrdSArPSBwb3BsYXRlaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFByb2RlalxuICAgICAgICBjZWxrZW1LdXN1ICs9IGt1c3k7XG4gICAgICAgIG5ha3VwbmlDZW5hICs9IHBvcGxhdGVrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVsO9cG/EjWV0IHByxa9txJtybsOpIGNlbnk6IGNlbGtvdsOpIG7DoWtsYWR5IGTEm2xlbm8gcG/EjWV0IGt1c8WvXG4gICAgY29uc3QgcHJ1bWVybmFDZW5hID1cbiAgICAgIGNlbGtlbUt1c3UgPiAwID8gKG5ha3VwbmlDZW5hIC8gY2Vsa2VtS3VzdSkudG9GaXhlZCgyKSA6IFwiLVwiO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBydW1lcm5hQ2VuYSxcbiAgICAgIGNlbGtlbUt1c3UsXG4gICAgICBjZWxrZW1Qb3BsYXRrdSxcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICBQcsWvbcSbcm7DoSBuw6FrdXBuw60gY2VuYToge3Z5cG9jaXRlalBydW1lcigpLnBydW1lcm5hQ2VuYX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0zXCI+UG/EjWV0IGt1c8WvOiB7dnlwb2NpdGVqUHJ1bWVyKCkuY2Vsa2VtS3VzdX0gPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgU291xI1ldCBwb3BsYXRrxa86IHt2eXBvY2l0ZWpQcnVtZXIoKS5jZWxrZW1Qb3BsYXRrdX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxoNj5Ob3bDoSBvcGVyYWNlPC9oNj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGctMiBhbGlnbi1pdGVtcy1jZW50ZXIgbWItM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPVwiY2VuYVwiXG4gICAgICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2UuY2VuYX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNlbmEgemEga3VzXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJrdXN5XCJcbiAgICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5rdXN5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG/EjWV0IGt1c8WvXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJwb3BsYXRla1wiXG4gICAgICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2UucG9wbGF0ZWt9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb3BsYXRla1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgbmFtZT1cImRhdHVtXCJcbiAgICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5kYXR1bX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtwcmlkZWpOb3ZvdU9wZXJhY2l9PlxuICAgICAgICAgICAgUMWZaWRhdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5EYXR1bTwvdGg+XG4gICAgICAgICAgICA8dGg+VHlwPC90aD5cbiAgICAgICAgICAgIDx0aD5LdXN5PC90aD5cbiAgICAgICAgICAgIDx0aD5DZW5hPC90aD5cbiAgICAgICAgICAgIDx0aD5Qb3BsYXRlazwvdGg+XG4gICAgICAgICAgICA8dGg+QWtjZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtvcGVyYWNlLm1hcCgob3AsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDx0ZD57b3AuZGF0dW0gfHwgXCLigJRcIn08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e29wLmt1c3kgPiAwID8gXCJOw6FrdXBcIiA6IFwiUHJvZGVqXCJ9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntvcC5rdXN5fTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57b3AuY2VuYX0gS8SNPC90ZD5cbiAgICAgICAgICAgICAgPHRkPntvcC5wb3BsYXRla30gS8SNPC90ZD5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlT3BlcmFjZShpbmRleFByaXNwZXZrdSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTbWF6YXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBPcGVyYXRpb25zO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBPcGVyYXRpb25zIGZyb20gXCIuL09wZXJhdGlvbnNcIjtcblxuZnVuY3Rpb24gUHJpc3BldmVrQWtjaWUoe1xuICBwcmlzcGV2ZWssXG4gIGluZGV4UHJpc3Bldmt1LFxuICBvbkRlbGV0ZSxcbiAgb25BZGRPcGVyYWNlLFxuICBvbkRlbGV0ZU9wZXJhY2UsXG59KSB7XG4gIC8vIHRhZHkgYnVkdSBtw610IHByw6F6ZG7DvSBwb2xlIGFrYSBbXSBhIHNlbSBidWR1IHB1c2hvdmF0IHBvIGtsaWtudXTDrSBuYSB6YWTDoW7DrSBha2NpZSwgemFkw6Fuw60gcMWZw61zcMSbdsSba3UsIHNlbSB0byBwb3TFmWVidWp1IG9kZXNsYXQgYSB0byBzZSBwYWsgb2RlxaFsZSBkbyBhcHAuanMgY2Vsw6EgdGF0byBmdW5rY2UgLS0tIE5BIEtPTVVOSUtBQ0kgTUVaSSBLT01QT05FTlRBTUkgUE9Vxb3DjVbDgU0gYFBST1BTYCAtIFBST1BTICBuZW11c8OtbSBwb3XFmcOtdmF0IGplbiBqYWtvIGF0cmlidXR5IHTEm2NoIGh0bWwgem5hxI1laywgYWxlIG3Fr8W+dSBqZSBwb3XFvsOtdCBpIHZlIGZ1bmtjw61jaFxuXG4gIC8vIEvDs2QgcHJvIHDFmWlkw6Fuw60gamVkbm90bGl2w6kgb3BlcmFjZSBOw6FrdXAvUHJvZGVqIHBybyBha2NpaVxuXG4gIC8vIDEuIHBhcmFtZXRyIC0gY2FsbGJhY2tcbiAgLy8gMi4gcGFyYW10ZXIgLSBkZXBlbmRlbmNpZXMgLSB6w6F2aXNsb3N0aVxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIC8vIG1vdW50IGtvbXBvbmVudHVcbiAgLy8gICBjb25zb2xlLmxvZyhcIlByaXNwZXZlayB6YcSNYWwgY2VzdHVcIik7XG5cbiAgLy8gICAvLyB1bm1vdW50IGtvbXBvbmVudHVcbiAgLy8gICByZXR1cm4gKCkgPT4ge1xuICAvLyAgICAgYWxlcnQoXCJQcmlzcGV2xJtrIHNlIHZ5bWHFvmVcIik7XG4gIC8vICAgICBjb25zb2xlLmxvZyhcInByaXNwZXZlayB6YW5pa2xcIik7XG4gIC8vICAgfTtcbiAgLy8gfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG0tM1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxoNT57cHJpc3BldmVrLnRpY2tlcn08L2g1PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiIG9uQ2xpY2s9e29uRGVsZXRlfT5cbiAgICAgICAgICBWeW1hemF0IGFrY2lpXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8T3BlcmF0aW9uc1xuICAgICAgICAgIG9wZXJhY2U9e3ByaXNwZXZlay5vcGVyYWNlfVxuICAgICAgICAgIGluZGV4UHJpc3Bldmt1PXtpbmRleFByaXNwZXZrdX1cbiAgICAgICAgICBvbkFkZE9wZXJhY2U9e29uQWRkT3BlcmFjZX1cbiAgICAgICAgICBvbkRlbGV0ZU9wZXJhY2U9e29uRGVsZXRlT3BlcmFjZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcmlzcGV2ZWtBa2NpZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQWJvdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5PIGFwbGlrYWNpPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBTdG9jayBOb3RlIGplIGplZG5vZHVjaMO9IGludmVzdGnEjW7DrSB6w6FwaXNuw61rIHZ5dmludXTDvSBqYWtvIHByb2pla3QgdlxuICAgICAgICBSZWFjdHUuIFVtb8W+xYh1amUgc2xlZG92YXQgbsOha3VweSBhIHByb2RlamUgYWtjacOtIGEgRVRGLlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtdWxhckFrY2llIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm11bGFyQWtjaWVcIjtcbmltcG9ydCBQcmlzcGV2ZWtBa2NpZSBmcm9tIFwiLi4vY29tcG9uZW50cy9QcmlzcGV2ZWtBa2NpZVwiO1xuXG5mdW5jdGlvbiBEZW5payh7XG4gIHByaXNwZXZreSxcbiAgcHJpZGVqUHJpc3BldmVrLFxuICBzbWF6UHJpc3BldmVrLFxuICBwcmlkZWpPcGVyYWNpLFxuICBzbWF6T3BlcmFjaSxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPkRlbsOtazwvaDI+XG4gICAgICA8Rm9ybXVsYXJBa2NpZSBvblN1Ym1pdEZvcm09e3ByaWRlalByaXNwZXZla30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICB7cHJpc3Bldmt5Lm1hcCgocHJpc3BldmVrLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxQcmlzcGV2ZWtBa2NpZVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHByaXNwZXZlaz17cHJpc3BldmVrfVxuICAgICAgICAgICAgaW5kZXhQcmlzcGV2a3U9e2luZGV4fVxuICAgICAgICAgICAgb25EZWxldGU9eygpID0+IHNtYXpQcmlzcGV2ZWsoaW5kZXgpfVxuICAgICAgICAgICAgb25BZGRPcGVyYWNlPXtwcmlkZWpPcGVyYWNpfVxuICAgICAgICAgICAgb25EZWxldGVPcGVyYWNlPXtzbWF6T3BlcmFjaX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZW5paztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgIDxoMT5Ww610ZWp0ZSB2ZSBTdG9jayBOb3RlIPCfk4g8L2gxPlxuICAgICAgPGg1IGNsYXNzTmFtZT1cImxlYWRcIj5cbiAgICAgICAgSW52ZXN0acSNbsOtIHrDoXBpc27DrWsgcHJvIHNwcsOhdnUgdmHFoWljaCBha2Npw60gYSBFVEYuXG4gICAgICA8L2g1PlxuICAgICAgPHA+XG4gICAgICAgIDxMaW5rIHRvPVwiL3BvcnRmb2xpb1wiIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBtLTJcIj5cbiAgICAgICAgICBQxZllasOtdCBkbyBQb3J0Zm9saWFcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayB0bz1cIi9kZW5pa1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtLTJcIj5cbiAgICAgICAgICBQxZllasOtdCBkbyBEZW7DrWt1XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gTm90Rm91bmQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgPGgxPjQwNDwvaDE+XG4gICAgICA8cD5TdHLDoW5rYSBuZWJ5bGEgbmFsZXplbmEuPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gUG9ydGZvbGlvKHsgcHJpc3Bldmt5IH0pIHtcbiAgLy8gU3BvxI3DrXRhdCBwcsWvbcSbcm5vdSBjZW51XG4gIGNvbnN0IHNwb2NpdGVqUHJ1bWVyID0gKHByaXNwZXZlaykgPT4ge1xuICAgIGNvbnN0IG9wZXJhY2UgPSBwcmlzcGV2ZWsub3BlcmFjZTtcbiAgICBsZXQgdG90YWxOYWtsYWR5ID0gMDtcbiAgICBsZXQgY2Vsa2VtS3VzdSA9IDA7XG5cbiAgICBvcGVyYWNlLmZvckVhY2goKHsgY2VuYSwga3VzeSwgcG9wbGF0ZWsgfSkgPT4ge1xuICAgICAgaWYgKGt1c3kgPiAwKSB7XG4gICAgICAgIHRvdGFsTmFrbGFkeSArPSBjZW5hICoga3VzeSArIHBvcGxhdGVrO1xuICAgICAgICBjZWxrZW1LdXN1ICs9IGt1c3k7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2Vsa2VtS3VzdSA+IDAgPyAodG90YWxOYWtsYWR5IC8gY2Vsa2VtS3VzdSkudG9GaXhlZCgyKSA6IFwiLVwiO1xuICB9O1xuXG4gIC8vIFNwb8SNw610YXQgY2Vsa292w70gcG/EjWV0IGt1c8WvIChwb8SNw610w6EgaSBwcm9kZWplLCB0ZWR5IHrDoXBvcm7DqSBrdXN5KVxuICBjb25zdCBzcG9jaXRlalRvdGFsS3VzeSA9IChwcmlzcGV2ZWspID0+IHtcbiAgICByZXR1cm4gcHJpc3BldmVrLm9wZXJhY2UucmVkdWNlKChzdW0sIG9wKSA9PiBzdW0gKyBvcC5rdXN5LCAwKTtcbiAgfTtcblxuICAvLyBTcG/EjcOtdGF0IHNvdcSNZXQgdsWhZWNoIHBvcGxhdGvFryAobsOha2xhZHkpXG4gIGNvbnN0IHNwb2NpdGVqUG9wbGF0a3kgPSAocHJpc3BldmVrKSA9PiB7XG4gICAgcmV0dXJuIHByaXNwZXZlay5vcGVyYWNlLnJlZHVjZSgoc3VtLCBvcCkgPT4gc3VtICsgb3AucG9wbGF0ZWssIDApO1xuICB9O1xuXG4gIC8vIFNwb8SNw610YXQgY2Vsa292xJsgemFpbnZlc3RvdmFuw6kgcGVuw616ZSAoamVuIG7DoWt1cHkpXG4gIGNvbnN0IHNwb2NpdGVqVG90YWxJbnZlc3RvdmFubyA9IChwcmlzcGV2ZWspID0+IHtcbiAgICByZXR1cm4gcHJpc3BldmVrLm9wZXJhY2VcbiAgICAgIC5maWx0ZXIoKG9wKSA9PiBvcC5rdXN5ID4gMCkgLy8gamVuIG7DoWt1cHlcbiAgICAgIC5yZWR1Y2UoKHN1bSwgb3ApID0+IHN1bSArIG9wLmNlbmEgKiBvcC5rdXN5ICsgb3AucG9wbGF0ZWssIDApXG4gICAgICAudG9GaXhlZCgyKTtcbiAgfTtcblxuICAvLyAoVk9MSVRFTE7DiSkgQWxva2FjaSBkb3BvxI3DrXTDoW1lIGHFviBidWRlbWUgbcOtdCB0b3RhbCBwb3J0Zm9saW8gdmFsdWVcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTRcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi00XCI+UG9ydGZvbGlvPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZFwiPlxuICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0YWJsZS1wcmltYXJ5XCI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5UaWNrZXI8L3RoPlxuICAgICAgICAgICAgICA8dGg+UHLFr23Em3Juw6EgY2VuYSBbS8SNXTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Qb8SNZXQga3Vzxa88L3RoPlxuICAgICAgICAgICAgICA8dGg+U291xI1ldCBwb3BsYXRrxa8gW0vEjV08L3RoPlxuICAgICAgICAgICAgICA8dGg+Q2Vsa2VtIGludmVzdG92w6FubyBbS8SNXTwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3ByaXNwZXZreS5tYXAoKHByaXNwZXZlaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDx0ZD57cHJpc3BldmVrLnRpY2tlcn08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57c3BvY2l0ZWpQcnVtZXIocHJpc3BldmVrKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57c3BvY2l0ZWpUb3RhbEt1c3kocHJpc3BldmVrKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57c3BvY2l0ZWpQb3BsYXRreShwcmlzcGV2ZWspfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntzcG9jaXRlalRvdGFsSW52ZXN0b3Zhbm8ocHJpc3BldmVrKX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW87XG5cbi8vIGZ1bmN0aW9uIFBvcnRmb2xpbyh7IHByaXNwZXZreSB9KSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNVwiPlxuLy8gICAgICAgPGgyPlBvcnRmb2xpbzwvaDI+XG4vLyAgICAgICB7cHJpc3Bldmt5Lmxlbmd0aCA9PT0gMCA/IChcbi8vICAgICAgICAgPHA+TmVtw6F0ZSDFvsOhZG7DqSBwxZlpZGFuw6kgYWtjaWU8L3A+XG4vLyAgICAgICApIDogKFxuLy8gICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuLy8gICAgICAgICAgIHtwcmlzcGV2a3kubWFwKChwcmlzcGV2ZWssIGluZGV4KSA9PiAoXG4vLyAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XG4vLyAgICAgICAgICAgICAgIHtwcmlzcGV2ZWsudGlja2VyfSAtIHBvxI1ldCBvcGVyYWPDrSA6IHtwcmlzcGV2ZWsub3BlcmFjZS5sZW5ndGh9XG4vLyAgICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgICkpfVxuLy8gICAgICAgICA8L3VsPlxuLy8gICAgICAgKX1cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH1cbiIsIi8vIHNyYy9wYWdlcy9TZWFyY2guanNcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTZWFyY2goKSB7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFxdWVyeS50cmltKCkpIHJldHVybjtcblxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLnBvbHlnb24uaW8vdjMvcmVmZXJlbmNlL3RpY2tlcnM/c2VhcmNoPSR7cXVlcnl9JmFjdGl2ZT10cnVlJmFwaUtleT1HMGhZeVRhUXFGR3NYeEQ5OTRPV0pPelA0X3M1dGxWZGBcbiAgICAgICk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0UmVzdWx0cyhkYXRhLnJlc3VsdHMuc2xpY2UoMCwgNSkpOyAvLyBvbWV6w61tZSBuYSA1IHbDvXNsZWRrxa9cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkNoeWJhIHDFmWkgbmHEjcOtdMOhbsOtIGRhdDpcIiwgZXJyb3IpO1xuICAgIH1cbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGFuZGxlU2VhcmNoKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC00XCI+XG4gICAgICA8aDI+VnlobGVkw6F2w6Fuw60gYWtjacOtPC9oMj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWmFkZWogdGlja2VyLi4uXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgVnlobGVkYXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgIDxkaXY+TmHEjcOtdMOhbSBkYXRhLi4uPC9kaXY+XG4gICAgICApIDogcmVzdWx0cy5sZW5ndGggPiAwID8gKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgIHtyZXN1bHRzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS50aWNrZXJ9IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWItMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntpdGVtLnRpY2tlcn08L2g1PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e2l0ZW0ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwPk5lYnlseSBuYWxlemVueSDFvsOhZG7DqSB2w71zbGVka3kuPC9wPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIiwiLyoqXG4gKiBSZWFjdCBSb3V0ZXIgRE9NIHY2LjMwLjBcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFVOU0FGRV9tYXBSb3V0ZVByb3BlcnRpZXMsIFVOU0FGRV9sb2dWNkRlcHJlY2F0aW9uV2FybmluZ3MsIFVOU0FGRV9EYXRhUm91dGVyQ29udGV4dCwgVU5TQUZFX0RhdGFSb3V0ZXJTdGF0ZUNvbnRleHQsIFJvdXRlciwgVU5TQUZFX3VzZVJvdXRlc0ltcGwsIFVOU0FGRV9OYXZpZ2F0aW9uQ29udGV4dCwgdXNlSHJlZiwgdXNlUmVzb2x2ZWRQYXRoLCB1c2VMb2NhdGlvbiwgdXNlTmF2aWdhdGUsIGNyZWF0ZVBhdGgsIFVOU0FGRV91c2VSb3V0ZUlkLCBVTlNBRkVfUm91dGVDb250ZXh0LCB1c2VNYXRjaGVzLCB1c2VOYXZpZ2F0aW9uLCB1c2VCbG9ja2VyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmV4cG9ydCB7IEFib3J0ZWREZWZlcnJlZEVycm9yLCBBd2FpdCwgTWVtb3J5Um91dGVyLCBOYXZpZ2F0ZSwgTmF2aWdhdGlvblR5cGUsIE91dGxldCwgUm91dGUsIFJvdXRlciwgUm91dGVzLCBVTlNBRkVfRGF0YVJvdXRlckNvbnRleHQsIFVOU0FGRV9EYXRhUm91dGVyU3RhdGVDb250ZXh0LCBVTlNBRkVfTG9jYXRpb25Db250ZXh0LCBVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQsIFVOU0FGRV9Sb3V0ZUNvbnRleHQsIFVOU0FGRV91c2VSb3V0ZUlkLCBjcmVhdGVNZW1vcnlSb3V0ZXIsIGNyZWF0ZVBhdGgsIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiwgY3JlYXRlUm91dGVzRnJvbUVsZW1lbnRzLCBkZWZlciwgZ2VuZXJhdGVQYXRoLCBpc1JvdXRlRXJyb3JSZXNwb25zZSwganNvbiwgbWF0Y2hQYXRoLCBtYXRjaFJvdXRlcywgcGFyc2VQYXRoLCByZWRpcmVjdCwgcmVkaXJlY3REb2N1bWVudCwgcmVuZGVyTWF0Y2hlcywgcmVwbGFjZSwgcmVzb2x2ZVBhdGgsIHVzZUFjdGlvbkRhdGEsIHVzZUFzeW5jRXJyb3IsIHVzZUFzeW5jVmFsdWUsIHVzZUJsb2NrZXIsIHVzZUhyZWYsIHVzZUluUm91dGVyQ29udGV4dCwgdXNlTG9hZGVyRGF0YSwgdXNlTG9jYXRpb24sIHVzZU1hdGNoLCB1c2VNYXRjaGVzLCB1c2VOYXZpZ2F0ZSwgdXNlTmF2aWdhdGlvbiwgdXNlTmF2aWdhdGlvblR5cGUsIHVzZU91dGxldCwgdXNlT3V0bGV0Q29udGV4dCwgdXNlUGFyYW1zLCB1c2VSZXNvbHZlZFBhdGgsIHVzZVJldmFsaWRhdG9yLCB1c2VSb3V0ZUVycm9yLCB1c2VSb3V0ZUxvYWRlckRhdGEsIHVzZVJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBzdHJpcEJhc2VuYW1lLCBVTlNBRkVfd2FybmluZywgY3JlYXRlUm91dGVyLCBjcmVhdGVCcm93c2VySGlzdG9yeSwgY3JlYXRlSGFzaEhpc3RvcnksIFVOU0FGRV9FcnJvclJlc3BvbnNlSW1wbCwgVU5TQUZFX2ludmFyaWFudCwgam9pblBhdGhzLCBJRExFX0ZFVENIRVIsIG1hdGNoUGF0aCB9IGZyb20gJ0ByZW1peC1ydW4vcm91dGVyJztcbmV4cG9ydCB7IFVOU0FGRV9FcnJvclJlc3BvbnNlSW1wbCB9IGZyb20gJ0ByZW1peC1ydW4vcm91dGVyJztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5jb25zdCBkZWZhdWx0TWV0aG9kID0gXCJnZXRcIjtcbmNvbnN0IGRlZmF1bHRFbmNUeXBlID0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIjtcbmZ1bmN0aW9uIGlzSHRtbEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0LnRhZ05hbWUgPT09IFwic3RyaW5nXCI7XG59XG5mdW5jdGlvbiBpc0J1dHRvbkVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiBpc0h0bWxFbGVtZW50KG9iamVjdCkgJiYgb2JqZWN0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJidXR0b25cIjtcbn1cbmZ1bmN0aW9uIGlzRm9ybUVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiBpc0h0bWxFbGVtZW50KG9iamVjdCkgJiYgb2JqZWN0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJmb3JtXCI7XG59XG5mdW5jdGlvbiBpc0lucHV0RWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIGlzSHRtbEVsZW1lbnQob2JqZWN0KSAmJiBvYmplY3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCI7XG59XG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuZnVuY3Rpb24gc2hvdWxkUHJvY2Vzc0xpbmtDbGljayhldmVudCwgdGFyZ2V0KSB7XG4gIHJldHVybiBldmVudC5idXR0b24gPT09IDAgJiYgKFxuICAvLyBJZ25vcmUgZXZlcnl0aGluZyBidXQgbGVmdCBjbGlja3NcbiAgIXRhcmdldCB8fCB0YXJnZXQgPT09IFwiX3NlbGZcIikgJiZcbiAgLy8gTGV0IGJyb3dzZXIgaGFuZGxlIFwidGFyZ2V0PV9ibGFua1wiIGV0Yy5cbiAgIWlzTW9kaWZpZWRFdmVudChldmVudCkgLy8gSWdub3JlIGNsaWNrcyB3aXRoIG1vZGlmaWVyIGtleXNcbiAgO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCB1c2luZyB0aGUgZ2l2ZW4gaW5pdGlhbGl6ZXIuXG4gKlxuICogVGhpcyBpcyBpZGVudGljYWwgdG8gYG5ldyBVUkxTZWFyY2hQYXJhbXMoaW5pdClgIGV4Y2VwdCBpdCBhbHNvXG4gKiBzdXBwb3J0cyBhcnJheXMgYXMgdmFsdWVzIGluIHRoZSBvYmplY3QgZm9ybSBvZiB0aGUgaW5pdGlhbGl6ZXJcbiAqIGluc3RlYWQgb2YganVzdCBzdHJpbmdzLiBUaGlzIGlzIGNvbnZlbmllbnQgd2hlbiB5b3UgbmVlZCBtdWx0aXBsZVxuICogdmFsdWVzIGZvciBhIGdpdmVuIGtleSwgYnV0IGRvbid0IHdhbnQgdG8gdXNlIGFuIGFycmF5IGluaXRpYWxpemVyLlxuICpcbiAqIEZvciBleGFtcGxlLCBpbnN0ZWFkIG9mOlxuICpcbiAqICAgbGV0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1xuICogICAgIFsnc29ydCcsICduYW1lJ10sXG4gKiAgICAgWydzb3J0JywgJ3ByaWNlJ11cbiAqICAgXSk7XG4gKlxuICogeW91IGNhbiBkbzpcbiAqXG4gKiAgIGxldCBzZWFyY2hQYXJhbXMgPSBjcmVhdGVTZWFyY2hQYXJhbXMoe1xuICogICAgIHNvcnQ6IFsnbmFtZScsICdwcmljZSddXG4gKiAgIH0pO1xuICovXG5mdW5jdGlvbiBjcmVhdGVTZWFyY2hQYXJhbXMoaW5pdCkge1xuICBpZiAoaW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgaW5pdCA9IFwiXCI7XG4gIH1cbiAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXModHlwZW9mIGluaXQgPT09IFwic3RyaW5nXCIgfHwgQXJyYXkuaXNBcnJheShpbml0KSB8fCBpbml0IGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zID8gaW5pdCA6IE9iamVjdC5rZXlzKGluaXQpLnJlZHVjZSgobWVtbywga2V5KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gaW5pdFtrZXldO1xuICAgIHJldHVybiBtZW1vLmNvbmNhdChBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLm1hcCh2ID0+IFtrZXksIHZdKSA6IFtba2V5LCB2YWx1ZV1dKTtcbiAgfSwgW10pKTtcbn1cbmZ1bmN0aW9uIGdldFNlYXJjaFBhcmFtc0ZvckxvY2F0aW9uKGxvY2F0aW9uU2VhcmNoLCBkZWZhdWx0U2VhcmNoUGFyYW1zKSB7XG4gIGxldCBzZWFyY2hQYXJhbXMgPSBjcmVhdGVTZWFyY2hQYXJhbXMobG9jYXRpb25TZWFyY2gpO1xuICBpZiAoZGVmYXVsdFNlYXJjaFBhcmFtcykge1xuICAgIC8vIFVzZSBgZGVmYXVsdFNlYXJjaFBhcmFtcy5mb3JFYWNoKC4uLilgIGhlcmUgaW5zdGVhZCBvZiBpdGVyYXRpbmcgb2ZcbiAgICAvLyBgZGVmYXVsdFNlYXJjaFBhcmFtcy5rZXlzKClgIHRvIHdvcmstYXJvdW5kIGEgYnVnIGluIEZpcmVmb3ggcmVsYXRlZCB0b1xuICAgIC8vIHdlYiBleHRlbnNpb25zLiBSZWxldmFudCBCdWd6aWxsYSB0aWNrZXRzOlxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE0MTQ2MDJcbiAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMDIzOTg0XG4gICAgZGVmYXVsdFNlYXJjaFBhcmFtcy5mb3JFYWNoKChfLCBrZXkpID0+IHtcbiAgICAgIGlmICghc2VhcmNoUGFyYW1zLmhhcyhrZXkpKSB7XG4gICAgICAgIGRlZmF1bHRTZWFyY2hQYXJhbXMuZ2V0QWxsKGtleSkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHNlYXJjaFBhcmFtcztcbn1cbi8vIE9uZS10aW1lIGNoZWNrIGZvciBzdWJtaXR0ZXIgc3VwcG9ydFxubGV0IF9mb3JtRGF0YVN1cHBvcnRzU3VibWl0dGVyID0gbnVsbDtcbmZ1bmN0aW9uIGlzRm9ybURhdGFTdWJtaXR0ZXJTdXBwb3J0ZWQoKSB7XG4gIGlmIChfZm9ybURhdGFTdXBwb3J0c1N1Ym1pdHRlciA9PT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICBuZXcgRm9ybURhdGEoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIiksXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGlmIEZvcm1EYXRhIHN1cHBvcnRzIHRoZSBzdWJtaXR0ZXIgcGFyYW1ldGVyLCB0aGlzIHdpbGwgdGhyb3dcbiAgICAgIDApO1xuICAgICAgX2Zvcm1EYXRhU3VwcG9ydHNTdWJtaXR0ZXIgPSBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBfZm9ybURhdGFTdXBwb3J0c1N1Ym1pdHRlciA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBfZm9ybURhdGFTdXBwb3J0c1N1Ym1pdHRlcjtcbn1cbmNvbnN0IHN1cHBvcnRlZEZvcm1FbmNUeXBlcyA9IG5ldyBTZXQoW1wiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLCBcInRleHQvcGxhaW5cIl0pO1xuZnVuY3Rpb24gZ2V0Rm9ybUVuY1R5cGUoZW5jVHlwZSkge1xuICBpZiAoZW5jVHlwZSAhPSBudWxsICYmICFzdXBwb3J0ZWRGb3JtRW5jVHlwZXMuaGFzKGVuY1R5cGUpKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcoZmFsc2UsIFwiXFxcIlwiICsgZW5jVHlwZSArIFwiXFxcIiBpcyBub3QgYSB2YWxpZCBgZW5jVHlwZWAgZm9yIGA8Rm9ybT5gL2A8ZmV0Y2hlci5Gb3JtPmAgXCIgKyAoXCJhbmQgd2lsbCBkZWZhdWx0IHRvIFxcXCJcIiArIGRlZmF1bHRFbmNUeXBlICsgXCJcXFwiXCIpKSA6IHZvaWQgMDtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gZW5jVHlwZTtcbn1cbmZ1bmN0aW9uIGdldEZvcm1TdWJtaXNzaW9uSW5mbyh0YXJnZXQsIGJhc2VuYW1lKSB7XG4gIGxldCBtZXRob2Q7XG4gIGxldCBhY3Rpb247XG4gIGxldCBlbmNUeXBlO1xuICBsZXQgZm9ybURhdGE7XG4gIGxldCBib2R5O1xuICBpZiAoaXNGb3JtRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgLy8gV2hlbiBncmFiYmluZyB0aGUgYWN0aW9uIGZyb20gdGhlIGVsZW1lbnQsIGl0IHdpbGwgaGF2ZSBoYWQgdGhlIGJhc2VuYW1lXG4gICAgLy8gcHJlZml4ZWQgdG8gZW5zdXJlIG5vbi1KUyBzY2VuYXJpb3Mgd29yaywgc28gc3RyaXAgaXQgc2luY2Ugd2UnbGxcbiAgICAvLyByZS1wcmVmaXggaW4gdGhlIHJvdXRlclxuICAgIGxldCBhdHRyID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImFjdGlvblwiKTtcbiAgICBhY3Rpb24gPSBhdHRyID8gc3RyaXBCYXNlbmFtZShhdHRyLCBiYXNlbmFtZSkgOiBudWxsO1xuICAgIG1ldGhvZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJtZXRob2RcIikgfHwgZGVmYXVsdE1ldGhvZDtcbiAgICBlbmNUeXBlID0gZ2V0Rm9ybUVuY1R5cGUodGFyZ2V0LmdldEF0dHJpYnV0ZShcImVuY3R5cGVcIikpIHx8IGRlZmF1bHRFbmNUeXBlO1xuICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRhcmdldCk7XG4gIH0gZWxzZSBpZiAoaXNCdXR0b25FbGVtZW50KHRhcmdldCkgfHwgaXNJbnB1dEVsZW1lbnQodGFyZ2V0KSAmJiAodGFyZ2V0LnR5cGUgPT09IFwic3VibWl0XCIgfHwgdGFyZ2V0LnR5cGUgPT09IFwiaW1hZ2VcIikpIHtcbiAgICBsZXQgZm9ybSA9IHRhcmdldC5mb3JtO1xuICAgIGlmIChmb3JtID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzdWJtaXQgYSA8YnV0dG9uPiBvciA8aW5wdXQgdHlwZT1cXFwic3VibWl0XFxcIj4gd2l0aG91dCBhIDxmb3JtPlwiKTtcbiAgICB9XG4gICAgLy8gPGJ1dHRvbj4vPGlucHV0IHR5cGU9XCJzdWJtaXRcIj4gbWF5IG92ZXJyaWRlIGF0dHJpYnV0ZXMgb2YgPGZvcm0+XG4gICAgLy8gV2hlbiBncmFiYmluZyB0aGUgYWN0aW9uIGZyb20gdGhlIGVsZW1lbnQsIGl0IHdpbGwgaGF2ZSBoYWQgdGhlIGJhc2VuYW1lXG4gICAgLy8gcHJlZml4ZWQgdG8gZW5zdXJlIG5vbi1KUyBzY2VuYXJpb3Mgd29yaywgc28gc3RyaXAgaXQgc2luY2Ugd2UnbGxcbiAgICAvLyByZS1wcmVmaXggaW4gdGhlIHJvdXRlclxuICAgIGxldCBhdHRyID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImZvcm1hY3Rpb25cIikgfHwgZm9ybS5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIik7XG4gICAgYWN0aW9uID0gYXR0ciA/IHN0cmlwQmFzZW5hbWUoYXR0ciwgYmFzZW5hbWUpIDogbnVsbDtcbiAgICBtZXRob2QgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZm9ybW1ldGhvZFwiKSB8fCBmb3JtLmdldEF0dHJpYnV0ZShcIm1ldGhvZFwiKSB8fCBkZWZhdWx0TWV0aG9kO1xuICAgIGVuY1R5cGUgPSBnZXRGb3JtRW5jVHlwZSh0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZm9ybWVuY3R5cGVcIikpIHx8IGdldEZvcm1FbmNUeXBlKGZvcm0uZ2V0QXR0cmlidXRlKFwiZW5jdHlwZVwiKSkgfHwgZGVmYXVsdEVuY1R5cGU7XG4gICAgLy8gQnVpbGQgYSBGb3JtRGF0YSBvYmplY3QgcG9wdWxhdGVkIGZyb20gYSBmb3JtIGFuZCBzdWJtaXR0ZXJcbiAgICBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtLCB0YXJnZXQpO1xuICAgIC8vIElmIHRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgdGhlIGBGb3JtRGF0YShlbCwgc3VibWl0dGVyKWAgZm9ybWF0LFxuICAgIC8vIHRoZW4gdGFjayBvbiB0aGUgc3VibWl0dGVyIHZhbHVlIGF0IHRoZSBlbmQuICBUaGlzIGlzIGEgbGlnaHR3ZWlnaHRcbiAgICAvLyBzb2x1dGlvbiB0aGF0IGlzIG5vdCAxMDAlIHNwZWMgY29tcGxpYW50LiAgRm9yIGNvbXBsZXRlIHN1cHBvcnQgaW4gb2xkZXJcbiAgICAvLyBicm93c2VycywgY29uc2lkZXIgdXNpbmcgdGhlIGBmb3JtZGF0YS1zdWJtaXR0ZXItcG9seWZpbGxgIHBhY2thZ2VcbiAgICBpZiAoIWlzRm9ybURhdGFTdWJtaXR0ZXJTdXBwb3J0ZWQoKSkge1xuICAgICAgbGV0IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0gPSB0YXJnZXQ7XG4gICAgICBpZiAodHlwZSA9PT0gXCJpbWFnZVwiKSB7XG4gICAgICAgIGxldCBwcmVmaXggPSBuYW1lID8gbmFtZSArIFwiLlwiIDogXCJcIjtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHByZWZpeCArIFwieFwiLCBcIjBcIik7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChwcmVmaXggKyBcInlcIiwgXCIwXCIpO1xuICAgICAgfSBlbHNlIGlmIChuYW1lKSB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzSHRtbEVsZW1lbnQodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzdWJtaXQgZWxlbWVudCB0aGF0IGlzIG5vdCA8Zm9ybT4sIDxidXR0b24+LCBvciBcIiArIFwiPGlucHV0IHR5cGU9XFxcInN1Ym1pdHxpbWFnZVxcXCI+XCIpO1xuICB9IGVsc2Uge1xuICAgIG1ldGhvZCA9IGRlZmF1bHRNZXRob2Q7XG4gICAgYWN0aW9uID0gbnVsbDtcbiAgICBlbmNUeXBlID0gZGVmYXVsdEVuY1R5cGU7XG4gICAgYm9keSA9IHRhcmdldDtcbiAgfVxuICAvLyBTZW5kIGJvZHkgZm9yIDxGb3JtIGVuY1R5cGU9XCJ0ZXh0L3BsYWluXCIgc28gd2UgZW5jb2RlIGl0IGludG8gdGV4dFxuICBpZiAoZm9ybURhdGEgJiYgZW5jVHlwZSA9PT0gXCJ0ZXh0L3BsYWluXCIpIHtcbiAgICBib2R5ID0gZm9ybURhdGE7XG4gICAgZm9ybURhdGEgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY3Rpb24sXG4gICAgbWV0aG9kOiBtZXRob2QudG9Mb3dlckNhc2UoKSxcbiAgICBlbmNUeXBlLFxuICAgIGZvcm1EYXRhLFxuICAgIGJvZHlcbiAgfTtcbn1cblxuY29uc3QgX2V4Y2x1ZGVkID0gW1wib25DbGlja1wiLCBcInJlbGF0aXZlXCIsIFwicmVsb2FkRG9jdW1lbnRcIiwgXCJyZXBsYWNlXCIsIFwic3RhdGVcIiwgXCJ0YXJnZXRcIiwgXCJ0b1wiLCBcInByZXZlbnRTY3JvbGxSZXNldFwiLCBcInZpZXdUcmFuc2l0aW9uXCJdLFxuICBfZXhjbHVkZWQyID0gW1wiYXJpYS1jdXJyZW50XCIsIFwiY2FzZVNlbnNpdGl2ZVwiLCBcImNsYXNzTmFtZVwiLCBcImVuZFwiLCBcInN0eWxlXCIsIFwidG9cIiwgXCJ2aWV3VHJhbnNpdGlvblwiLCBcImNoaWxkcmVuXCJdLFxuICBfZXhjbHVkZWQzID0gW1wiZmV0Y2hlcktleVwiLCBcIm5hdmlnYXRlXCIsIFwicmVsb2FkRG9jdW1lbnRcIiwgXCJyZXBsYWNlXCIsIFwic3RhdGVcIiwgXCJtZXRob2RcIiwgXCJhY3Rpb25cIiwgXCJvblN1Ym1pdFwiLCBcInJlbGF0aXZlXCIsIFwicHJldmVudFNjcm9sbFJlc2V0XCIsIFwidmlld1RyYW5zaXRpb25cIl07XG4vLyBIRVkgWU9VISBET04nVCBUT1VDSCBUSElTIFZBUklBQkxFIVxuLy9cbi8vIEl0IGlzIHJlcGxhY2VkIHdpdGggdGhlIHByb3BlciB2ZXJzaW9uIGF0IGJ1aWxkIHRpbWUgdmlhIGEgYmFiZWwgcGx1Z2luIGluXG4vLyB0aGUgcm9sbHVwIGNvbmZpZy5cbi8vXG4vLyBFeHBvcnQgYSBnbG9iYWwgcHJvcGVydHkgb250byB0aGUgd2luZG93IGZvciBSZWFjdCBSb3V0ZXIgZGV0ZWN0aW9uIGJ5IHRoZVxuLy8gQ29yZSBXZWIgVml0YWxzIFRlY2hub2xvZ3kgUmVwb3J0LiAgVGhpcyB3YXkgdGhleSBjYW4gY29uZmlndXJlIHRoZSBgd2FwcGFseXplcmBcbi8vIHRvIGRldGVjdCBhbmQgcHJvcGVybHkgY2xhc3NpZnkgbGl2ZSB3ZWJzaXRlcyBhcyBiZWluZyBidWlsdCB3aXRoIFJlYWN0IFJvdXRlcjpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9IVFRQQXJjaGl2ZS93YXBwYWx5emVyL2Jsb2IvbWFpbi9zcmMvdGVjaG5vbG9naWVzL3IuanNvblxuY29uc3QgUkVBQ1RfUk9VVEVSX1ZFUlNJT04gPSBcIjZcIjtcbnRyeSB7XG4gIHdpbmRvdy5fX3JlYWN0Um91dGVyVmVyc2lvbiA9IFJFQUNUX1JPVVRFUl9WRVJTSU9OO1xufSBjYXRjaCAoZSkge1xuICAvLyBuby1vcFxufVxuZnVuY3Rpb24gY3JlYXRlQnJvd3NlclJvdXRlcihyb3V0ZXMsIG9wdHMpIHtcbiAgcmV0dXJuIGNyZWF0ZVJvdXRlcih7XG4gICAgYmFzZW5hbWU6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuYmFzZW5hbWUsXG4gICAgZnV0dXJlOiBfZXh0ZW5kcyh7fSwgb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5mdXR1cmUsIHtcbiAgICAgIHY3X3ByZXBlbmRCYXNlbmFtZTogdHJ1ZVxuICAgIH0pLFxuICAgIGhpc3Rvcnk6IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KHtcbiAgICAgIHdpbmRvdzogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy53aW5kb3dcbiAgICB9KSxcbiAgICBoeWRyYXRpb25EYXRhOiAob3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5oeWRyYXRpb25EYXRhKSB8fCBwYXJzZUh5ZHJhdGlvbkRhdGEoKSxcbiAgICByb3V0ZXMsXG4gICAgbWFwUm91dGVQcm9wZXJ0aWVzOiBVTlNBRkVfbWFwUm91dGVQcm9wZXJ0aWVzLFxuICAgIGRhdGFTdHJhdGVneTogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5kYXRhU3RyYXRlZ3ksXG4gICAgcGF0Y2hSb3V0ZXNPbk5hdmlnYXRpb246IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMucGF0Y2hSb3V0ZXNPbk5hdmlnYXRpb24sXG4gICAgd2luZG93OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLndpbmRvd1xuICB9KS5pbml0aWFsaXplKCk7XG59XG5mdW5jdGlvbiBjcmVhdGVIYXNoUm91dGVyKHJvdXRlcywgb3B0cykge1xuICByZXR1cm4gY3JlYXRlUm91dGVyKHtcbiAgICBiYXNlbmFtZTogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5iYXNlbmFtZSxcbiAgICBmdXR1cmU6IF9leHRlbmRzKHt9LCBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmZ1dHVyZSwge1xuICAgICAgdjdfcHJlcGVuZEJhc2VuYW1lOiB0cnVlXG4gICAgfSksXG4gICAgaGlzdG9yeTogY3JlYXRlSGFzaEhpc3Rvcnkoe1xuICAgICAgd2luZG93OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLndpbmRvd1xuICAgIH0pLFxuICAgIGh5ZHJhdGlvbkRhdGE6IChvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmh5ZHJhdGlvbkRhdGEpIHx8IHBhcnNlSHlkcmF0aW9uRGF0YSgpLFxuICAgIHJvdXRlcyxcbiAgICBtYXBSb3V0ZVByb3BlcnRpZXM6IFVOU0FGRV9tYXBSb3V0ZVByb3BlcnRpZXMsXG4gICAgZGF0YVN0cmF0ZWd5OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmRhdGFTdHJhdGVneSxcbiAgICBwYXRjaFJvdXRlc09uTmF2aWdhdGlvbjogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5wYXRjaFJvdXRlc09uTmF2aWdhdGlvbixcbiAgICB3aW5kb3c6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMud2luZG93XG4gIH0pLmluaXRpYWxpemUoKTtcbn1cbmZ1bmN0aW9uIHBhcnNlSHlkcmF0aW9uRGF0YSgpIHtcbiAgdmFyIF93aW5kb3c7XG4gIGxldCBzdGF0ZSA9IChfd2luZG93ID0gd2luZG93KSA9PSBudWxsID8gdm9pZCAwIDogX3dpbmRvdy5fX3N0YXRpY1JvdXRlckh5ZHJhdGlvbkRhdGE7XG4gIGlmIChzdGF0ZSAmJiBzdGF0ZS5lcnJvcnMpIHtcbiAgICBzdGF0ZSA9IF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgZXJyb3JzOiBkZXNlcmlhbGl6ZUVycm9ycyhzdGF0ZS5lcnJvcnMpXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuZnVuY3Rpb24gZGVzZXJpYWxpemVFcnJvcnMoZXJyb3JzKSB7XG4gIGlmICghZXJyb3JzKSByZXR1cm4gbnVsbDtcbiAgbGV0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhlcnJvcnMpO1xuICBsZXQgc2VyaWFsaXplZCA9IHt9O1xuICBmb3IgKGxldCBba2V5LCB2YWxdIG9mIGVudHJpZXMpIHtcbiAgICAvLyBIZXkgeW91ISAgSWYgeW91IGNoYW5nZSB0aGlzLCBwbGVhc2UgY2hhbmdlIHRoZSBjb3JyZXNwb25kaW5nIGxvZ2ljIGluXG4gICAgLy8gc2VyaWFsaXplRXJyb3JzIGluIHJlYWN0LXJvdXRlci1kb20vc2VydmVyLnRzeCA6KVxuICAgIGlmICh2YWwgJiYgdmFsLl9fdHlwZSA9PT0gXCJSb3V0ZUVycm9yUmVzcG9uc2VcIikge1xuICAgICAgc2VyaWFsaXplZFtrZXldID0gbmV3IFVOU0FGRV9FcnJvclJlc3BvbnNlSW1wbCh2YWwuc3RhdHVzLCB2YWwuc3RhdHVzVGV4dCwgdmFsLmRhdGEsIHZhbC5pbnRlcm5hbCA9PT0gdHJ1ZSk7XG4gICAgfSBlbHNlIGlmICh2YWwgJiYgdmFsLl9fdHlwZSA9PT0gXCJFcnJvclwiKSB7XG4gICAgICAvLyBBdHRlbXB0IHRvIHJlY29uc3RydWN0IHRoZSByaWdodCB0eXBlIG9mIEVycm9yIChpLmUuLCBSZWZlcmVuY2VFcnJvcilcbiAgICAgIGlmICh2YWwuX19zdWJUeXBlKSB7XG4gICAgICAgIGxldCBFcnJvckNvbnN0cnVjdG9yID0gd2luZG93W3ZhbC5fX3N1YlR5cGVdO1xuICAgICAgICBpZiAodHlwZW9mIEVycm9yQ29uc3RydWN0b3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3JDb25zdHJ1Y3Rvcih2YWwubWVzc2FnZSk7XG4gICAgICAgICAgICAvLyBXaXBlIGF3YXkgdGhlIGNsaWVudC1zaWRlIHN0YWNrIHRyYWNlLiAgTm90aGluZyB0byBmaWxsIGl0IGluIHdpdGhcbiAgICAgICAgICAgIC8vIGJlY2F1c2Ugd2UgZG9uJ3Qgc2VyaWFsaXplIFNTUiBzdGFjayB0cmFjZXMgZm9yIHNlY3VyaXR5IHJlYXNvbnNcbiAgICAgICAgICAgIGVycm9yLnN0YWNrID0gXCJcIjtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IGVycm9yO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIG5vLW9wIC0gZmFsbCB0aHJvdWdoIGFuZCBjcmVhdGUgYSBub3JtYWwgRXJyb3JcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzZXJpYWxpemVkW2tleV0gPT0gbnVsbCkge1xuICAgICAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IodmFsLm1lc3NhZ2UpO1xuICAgICAgICAvLyBXaXBlIGF3YXkgdGhlIGNsaWVudC1zaWRlIHN0YWNrIHRyYWNlLiAgTm90aGluZyB0byBmaWxsIGl0IGluIHdpdGhcbiAgICAgICAgLy8gYmVjYXVzZSB3ZSBkb24ndCBzZXJpYWxpemUgU1NSIHN0YWNrIHRyYWNlcyBmb3Igc2VjdXJpdHkgcmVhc29uc1xuICAgICAgICBlcnJvci5zdGFjayA9IFwiXCI7XG4gICAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IGVycm9yO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXJpYWxpemVkW2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG4gIHJldHVybiBzZXJpYWxpemVkO1xufVxuY29uc3QgVmlld1RyYW5zaXRpb25Db250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBpc1RyYW5zaXRpb25pbmc6IGZhbHNlXG59KTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgVmlld1RyYW5zaXRpb25Db250ZXh0LmRpc3BsYXlOYW1lID0gXCJWaWV3VHJhbnNpdGlvblwiO1xufVxuY29uc3QgRmV0Y2hlcnNDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobmV3IE1hcCgpKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgRmV0Y2hlcnNDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJGZXRjaGVyc1wiO1xufVxuLy8jZW5kcmVnaW9uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8jcmVnaW9uIENvbXBvbmVudHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vKipcbiAgV2VicGFjayArIFJlYWN0IDE3IGZhaWxzIHRvIGNvbXBpbGUgb24gYW55IG9mIHRoZSBmb2xsb3dpbmcgYmVjYXVzZSB3ZWJwYWNrXG4gIGNvbXBsYWlucyB0aGF0IGBzdGFydFRyYW5zaXRpb25gIGRvZXNuJ3QgZXhpc3QgaW4gYFJlYWN0YDpcbiAgKiBpbXBvcnQgeyBzdGFydFRyYW5zaXRpb24gfSBmcm9tIFwicmVhY3RcIlxuICAqIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gZnJvbSBcInJlYWN0XCI7XG4gICAgXCJzdGFydFRyYW5zaXRpb25cIiBpbiBSZWFjdCA/IFJlYWN0LnN0YXJ0VHJhbnNpdGlvbigoKSA9PiBzZXRTdGF0ZSgpKSA6IHNldFN0YXRlKClcbiAgKiBpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIGZyb20gXCJyZWFjdFwiO1xuICAgIFwic3RhcnRUcmFuc2l0aW9uXCIgaW4gUmVhY3QgPyBSZWFjdFtcInN0YXJ0VHJhbnNpdGlvblwiXSgoKSA9PiBzZXRTdGF0ZSgpKSA6IHNldFN0YXRlKClcblxuICBNb3ZpbmcgaXQgdG8gYSBjb25zdGFudCBzdWNoIGFzIHRoZSBmb2xsb3dpbmcgc29sdmVzIHRoZSBXZWJwYWNrL1JlYWN0IDE3IGlzc3VlOlxuICAqIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gZnJvbSBcInJlYWN0XCI7XG4gICAgY29uc3QgU1RBUlRfVFJBTlNJVElPTiA9IFwic3RhcnRUcmFuc2l0aW9uXCI7XG4gICAgU1RBUlRfVFJBTlNJVElPTiBpbiBSZWFjdCA/IFJlYWN0W1NUQVJUX1RSQU5TSVRJT05dKCgpID0+IHNldFN0YXRlKCkpIDogc2V0U3RhdGUoKVxuXG4gIEhvd2V2ZXIsIHRoYXQgaW50cm9kdWNlcyB3ZWJwYWNrL3RlcnNlciBtaW5pZmljYXRpb24gaXNzdWVzIGluIHByb2R1Y3Rpb24gYnVpbGRzXG4gIGluIFJlYWN0IDE4IHdoZXJlIG1pbmlmaWNhdGlvbi9vYmZ1c2NhdGlvbiBlbmRzIHVwIHJlbW92aW5nIHRoZSBjYWxsIG9mXG4gIFJlYWN0LnN0YXJ0VHJhbnNpdGlvbiBlbnRpcmVseSBmcm9tIHRoZSBmaXJzdCBoYWxmIG9mIHRoZSB0ZXJuYXJ5LiAgR3JhYmJpbmdcbiAgdGhpcyBleHBvcnRlZCByZWZlcmVuY2Ugb25jZSB1cCBmcm9udCByZXNvbHZlcyB0aGF0IGlzc3VlLlxuXG4gIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVtaXgtcnVuL3JlYWN0LXJvdXRlci9pc3N1ZXMvMTA1NzlcbiovXG5jb25zdCBTVEFSVF9UUkFOU0lUSU9OID0gXCJzdGFydFRyYW5zaXRpb25cIjtcbmNvbnN0IHN0YXJ0VHJhbnNpdGlvbkltcGwgPSBSZWFjdFtTVEFSVF9UUkFOU0lUSU9OXTtcbmNvbnN0IEZMVVNIX1NZTkMgPSBcImZsdXNoU3luY1wiO1xuY29uc3QgZmx1c2hTeW5jSW1wbCA9IFJlYWN0RE9NW0ZMVVNIX1NZTkNdO1xuY29uc3QgVVNFX0lEID0gXCJ1c2VJZFwiO1xuY29uc3QgdXNlSWRJbXBsID0gUmVhY3RbVVNFX0lEXTtcbmZ1bmN0aW9uIHN0YXJ0VHJhbnNpdGlvblNhZmUoY2IpIHtcbiAgaWYgKHN0YXJ0VHJhbnNpdGlvbkltcGwpIHtcbiAgICBzdGFydFRyYW5zaXRpb25JbXBsKGNiKTtcbiAgfSBlbHNlIHtcbiAgICBjYigpO1xuICB9XG59XG5mdW5jdGlvbiBmbHVzaFN5bmNTYWZlKGNiKSB7XG4gIGlmIChmbHVzaFN5bmNJbXBsKSB7XG4gICAgZmx1c2hTeW5jSW1wbChjYik7XG4gIH0gZWxzZSB7XG4gICAgY2IoKTtcbiAgfVxufVxuY2xhc3MgRGVmZXJyZWQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN0YXR1cyA9IFwicGVuZGluZ1wiO1xuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMucmVzb2x2ZSA9IHZhbHVlID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSBcInBlbmRpbmdcIikge1xuICAgICAgICAgIHRoaXMuc3RhdHVzID0gXCJyZXNvbHZlZFwiO1xuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGhpcy5yZWplY3QgPSByZWFzb24gPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IFwicGVuZGluZ1wiKSB7XG4gICAgICAgICAgdGhpcy5zdGF0dXMgPSBcInJlamVjdGVkXCI7XG4gICAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBSZW1peCBSb3V0ZXIgaW5zdGFuY2UsIHJlbmRlciB0aGUgYXBwcm9wcmlhdGUgVUlcbiAqL1xuZnVuY3Rpb24gUm91dGVyUHJvdmlkZXIoX3JlZikge1xuICBsZXQge1xuICAgIGZhbGxiYWNrRWxlbWVudCxcbiAgICByb3V0ZXIsXG4gICAgZnV0dXJlXG4gIH0gPSBfcmVmO1xuICBsZXQgW3N0YXRlLCBzZXRTdGF0ZUltcGxdID0gUmVhY3QudXNlU3RhdGUocm91dGVyLnN0YXRlKTtcbiAgbGV0IFtwZW5kaW5nU3RhdGUsIHNldFBlbmRpbmdTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSgpO1xuICBsZXQgW3Z0Q29udGV4dCwgc2V0VnRDb250ZXh0XSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBpc1RyYW5zaXRpb25pbmc6IGZhbHNlXG4gIH0pO1xuICBsZXQgW3JlbmRlckRmZCwgc2V0UmVuZGVyRGZkXSA9IFJlYWN0LnVzZVN0YXRlKCk7XG4gIGxldCBbdHJhbnNpdGlvbiwgc2V0VHJhbnNpdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSgpO1xuICBsZXQgW2ludGVycnVwdGlvbiwgc2V0SW50ZXJydXB0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKCk7XG4gIGxldCBmZXRjaGVyRGF0YSA9IFJlYWN0LnVzZVJlZihuZXcgTWFwKCkpO1xuICBsZXQge1xuICAgIHY3X3N0YXJ0VHJhbnNpdGlvblxuICB9ID0gZnV0dXJlIHx8IHt9O1xuICBsZXQgb3B0SW5TdGFydFRyYW5zaXRpb24gPSBSZWFjdC51c2VDYWxsYmFjayhjYiA9PiB7XG4gICAgaWYgKHY3X3N0YXJ0VHJhbnNpdGlvbikge1xuICAgICAgc3RhcnRUcmFuc2l0aW9uU2FmZShjYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICB9LCBbdjdfc3RhcnRUcmFuc2l0aW9uXSk7XG4gIGxldCBzZXRTdGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKChuZXdTdGF0ZSwgX3JlZjIpID0+IHtcbiAgICBsZXQge1xuICAgICAgZGVsZXRlZEZldGNoZXJzLFxuICAgICAgZmx1c2hTeW5jOiBmbHVzaFN5bmMsXG4gICAgICB2aWV3VHJhbnNpdGlvbk9wdHM6IHZpZXdUcmFuc2l0aW9uT3B0c1xuICAgIH0gPSBfcmVmMjtcbiAgICBuZXdTdGF0ZS5mZXRjaGVycy5mb3JFYWNoKChmZXRjaGVyLCBrZXkpID0+IHtcbiAgICAgIGlmIChmZXRjaGVyLmRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmZXRjaGVyRGF0YS5jdXJyZW50LnNldChrZXksIGZldGNoZXIuZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZGVsZXRlZEZldGNoZXJzLmZvckVhY2goa2V5ID0+IGZldGNoZXJEYXRhLmN1cnJlbnQuZGVsZXRlKGtleSkpO1xuICAgIGxldCBpc1ZpZXdUcmFuc2l0aW9uVW5hdmFpbGFibGUgPSByb3V0ZXIud2luZG93ID09IG51bGwgfHwgcm91dGVyLndpbmRvdy5kb2N1bWVudCA9PSBudWxsIHx8IHR5cGVvZiByb3V0ZXIud2luZG93LmRvY3VtZW50LnN0YXJ0Vmlld1RyYW5zaXRpb24gIT09IFwiZnVuY3Rpb25cIjtcbiAgICAvLyBJZiB0aGlzIGlzbid0IGEgdmlldyB0cmFuc2l0aW9uIG9yIGl0J3Mgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGJyb3dzZXIsXG4gICAgLy8ganVzdCB1cGRhdGUgYW5kIGJlIGRvbmUgd2l0aCBpdFxuICAgIGlmICghdmlld1RyYW5zaXRpb25PcHRzIHx8IGlzVmlld1RyYW5zaXRpb25VbmF2YWlsYWJsZSkge1xuICAgICAgaWYgKGZsdXNoU3luYykge1xuICAgICAgICBmbHVzaFN5bmNTYWZlKCgpID0+IHNldFN0YXRlSW1wbChuZXdTdGF0ZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0SW5TdGFydFRyYW5zaXRpb24oKCkgPT4gc2V0U3RhdGVJbXBsKG5ld1N0YXRlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGZsdXNoU3luYyArIHN0YXJ0Vmlld1RyYW5zaXRpb25cbiAgICBpZiAoZmx1c2hTeW5jKSB7XG4gICAgICAvLyBGbHVzaCB0aHJvdWdoIHRoZSBjb250ZXh0IHRvIG1hcmsgRE9NIGVsZW1lbnRzIGFzIHRyYW5zaXRpb249aW5nXG4gICAgICBmbHVzaFN5bmNTYWZlKCgpID0+IHtcbiAgICAgICAgLy8gQ2FuY2VsIGFueSBwZW5kaW5nIHRyYW5zaXRpb25zXG4gICAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgICAgcmVuZGVyRGZkICYmIHJlbmRlckRmZC5yZXNvbHZlKCk7XG4gICAgICAgICAgdHJhbnNpdGlvbi5za2lwVHJhbnNpdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIHNldFZ0Q29udGV4dCh7XG4gICAgICAgICAgaXNUcmFuc2l0aW9uaW5nOiB0cnVlLFxuICAgICAgICAgIGZsdXNoU3luYzogdHJ1ZSxcbiAgICAgICAgICBjdXJyZW50TG9jYXRpb246IHZpZXdUcmFuc2l0aW9uT3B0cy5jdXJyZW50TG9jYXRpb24sXG4gICAgICAgICAgbmV4dExvY2F0aW9uOiB2aWV3VHJhbnNpdGlvbk9wdHMubmV4dExvY2F0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICAvLyBVcGRhdGUgdGhlIERPTVxuICAgICAgbGV0IHQgPSByb3V0ZXIud2luZG93LmRvY3VtZW50LnN0YXJ0Vmlld1RyYW5zaXRpb24oKCkgPT4ge1xuICAgICAgICBmbHVzaFN5bmNTYWZlKCgpID0+IHNldFN0YXRlSW1wbChuZXdTdGF0ZSkpO1xuICAgICAgfSk7XG4gICAgICAvLyBDbGVhbiB1cCBhZnRlciB0aGUgYW5pbWF0aW9uIGNvbXBsZXRlc1xuICAgICAgdC5maW5pc2hlZC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgZmx1c2hTeW5jU2FmZSgoKSA9PiB7XG4gICAgICAgICAgc2V0UmVuZGVyRGZkKHVuZGVmaW5lZCk7XG4gICAgICAgICAgc2V0VHJhbnNpdGlvbih1bmRlZmluZWQpO1xuICAgICAgICAgIHNldFBlbmRpbmdTdGF0ZSh1bmRlZmluZWQpO1xuICAgICAgICAgIHNldFZ0Q29udGV4dCh7XG4gICAgICAgICAgICBpc1RyYW5zaXRpb25pbmc6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBmbHVzaFN5bmNTYWZlKCgpID0+IHNldFRyYW5zaXRpb24odCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBzdGFydFRyYW5zaXRpb24gKyBzdGFydFZpZXdUcmFuc2l0aW9uXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIC8vIEludGVycnVwdGluZyBhbiBpbi1wcm9ncmVzcyB0cmFuc2l0aW9uLCBjYW5jZWwgYW5kIGxldCBldmVyeXRoaW5nIGZsdXNoXG4gICAgICAvLyBvdXQsIGFuZCB0aGVuIGtpY2sgb2ZmIGEgbmV3IHRyYW5zaXRpb24gZnJvbSB0aGUgaW50ZXJydXB0aW9uIHN0YXRlXG4gICAgICByZW5kZXJEZmQgJiYgcmVuZGVyRGZkLnJlc29sdmUoKTtcbiAgICAgIHRyYW5zaXRpb24uc2tpcFRyYW5zaXRpb24oKTtcbiAgICAgIHNldEludGVycnVwdGlvbih7XG4gICAgICAgIHN0YXRlOiBuZXdTdGF0ZSxcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiB2aWV3VHJhbnNpdGlvbk9wdHMuY3VycmVudExvY2F0aW9uLFxuICAgICAgICBuZXh0TG9jYXRpb246IHZpZXdUcmFuc2l0aW9uT3B0cy5uZXh0TG9jYXRpb25cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDb21wbGV0ZWQgbmF2aWdhdGlvbiB1cGRhdGUgd2l0aCBvcHRlZC1pbiB2aWV3IHRyYW5zaXRpb25zLCBsZXQgJ2VyIHJpcFxuICAgICAgc2V0UGVuZGluZ1N0YXRlKG5ld1N0YXRlKTtcbiAgICAgIHNldFZ0Q29udGV4dCh7XG4gICAgICAgIGlzVHJhbnNpdGlvbmluZzogdHJ1ZSxcbiAgICAgICAgZmx1c2hTeW5jOiBmYWxzZSxcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiB2aWV3VHJhbnNpdGlvbk9wdHMuY3VycmVudExvY2F0aW9uLFxuICAgICAgICBuZXh0TG9jYXRpb246IHZpZXdUcmFuc2l0aW9uT3B0cy5uZXh0TG9jYXRpb25cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3JvdXRlci53aW5kb3csIHRyYW5zaXRpb24sIHJlbmRlckRmZCwgZmV0Y2hlckRhdGEsIG9wdEluU3RhcnRUcmFuc2l0aW9uXSk7XG4gIC8vIE5lZWQgdG8gdXNlIGEgbGF5b3V0IGVmZmVjdCBoZXJlIHNvIHdlIGFyZSBzdWJzY3JpYmVkIGVhcmx5IGVub3VnaCB0b1xuICAvLyBwaWNrIHVwIG9uIGFueSByZW5kZXItZHJpdmVuIHJlZGlyZWN0cy9uYXZpZ2F0aW9ucyAodXNlRWZmZWN0LzxOYXZpZ2F0ZT4pXG4gIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiByb3V0ZXIuc3Vic2NyaWJlKHNldFN0YXRlKSwgW3JvdXRlciwgc2V0U3RhdGVdKTtcbiAgLy8gV2hlbiB3ZSBzdGFydCBhIHZpZXcgdHJhbnNpdGlvbiwgY3JlYXRlIGEgRGVmZXJyZWQgd2UgY2FuIHVzZSBmb3IgdGhlXG4gIC8vIGV2ZW50dWFsIFwiY29tcGxldGVkXCIgcmVuZGVyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZ0Q29udGV4dC5pc1RyYW5zaXRpb25pbmcgJiYgIXZ0Q29udGV4dC5mbHVzaFN5bmMpIHtcbiAgICAgIHNldFJlbmRlckRmZChuZXcgRGVmZXJyZWQoKSk7XG4gICAgfVxuICB9LCBbdnRDb250ZXh0XSk7XG4gIC8vIE9uY2UgdGhlIGRlZmVycmVkIGlzIGNyZWF0ZWQsIGtpY2sgb2ZmIHN0YXJ0Vmlld1RyYW5zaXRpb24oKSB0byB1cGRhdGUgdGhlXG4gIC8vIERPTSBhbmQgdGhlbiB3YWl0IG9uIHRoZSBEZWZlcnJlZCB0byByZXNvbHZlIChpbmRpY2F0aW5nIHRoZSBET00gdXBkYXRlIGhhc1xuICAvLyBoYXBwZW5lZClcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVuZGVyRGZkICYmIHBlbmRpbmdTdGF0ZSAmJiByb3V0ZXIud2luZG93KSB7XG4gICAgICBsZXQgbmV3U3RhdGUgPSBwZW5kaW5nU3RhdGU7XG4gICAgICBsZXQgcmVuZGVyUHJvbWlzZSA9IHJlbmRlckRmZC5wcm9taXNlO1xuICAgICAgbGV0IHRyYW5zaXRpb24gPSByb3V0ZXIud2luZG93LmRvY3VtZW50LnN0YXJ0Vmlld1RyYW5zaXRpb24oYXN5bmMgKCkgPT4ge1xuICAgICAgICBvcHRJblN0YXJ0VHJhbnNpdGlvbigoKSA9PiBzZXRTdGF0ZUltcGwobmV3U3RhdGUpKTtcbiAgICAgICAgYXdhaXQgcmVuZGVyUHJvbWlzZTtcbiAgICAgIH0pO1xuICAgICAgdHJhbnNpdGlvbi5maW5pc2hlZC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgc2V0UmVuZGVyRGZkKHVuZGVmaW5lZCk7XG4gICAgICAgIHNldFRyYW5zaXRpb24odW5kZWZpbmVkKTtcbiAgICAgICAgc2V0UGVuZGluZ1N0YXRlKHVuZGVmaW5lZCk7XG4gICAgICAgIHNldFZ0Q29udGV4dCh7XG4gICAgICAgICAgaXNUcmFuc2l0aW9uaW5nOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKTtcbiAgICB9XG4gIH0sIFtvcHRJblN0YXJ0VHJhbnNpdGlvbiwgcGVuZGluZ1N0YXRlLCByZW5kZXJEZmQsIHJvdXRlci53aW5kb3ddKTtcbiAgLy8gV2hlbiB0aGUgbmV3IGxvY2F0aW9uIGZpbmFsbHkgcmVuZGVycyBhbmQgaXMgY29tbWl0dGVkIHRvIHRoZSBET00sIHRoaXNcbiAgLy8gZWZmZWN0IHdpbGwgcnVuIHRvIHJlc29sdmUgdGhlIHRyYW5zaXRpb25cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVuZGVyRGZkICYmIHBlbmRpbmdTdGF0ZSAmJiBzdGF0ZS5sb2NhdGlvbi5rZXkgPT09IHBlbmRpbmdTdGF0ZS5sb2NhdGlvbi5rZXkpIHtcbiAgICAgIHJlbmRlckRmZC5yZXNvbHZlKCk7XG4gICAgfVxuICB9LCBbcmVuZGVyRGZkLCB0cmFuc2l0aW9uLCBzdGF0ZS5sb2NhdGlvbiwgcGVuZGluZ1N0YXRlXSk7XG4gIC8vIElmIHdlIGdldCBpbnRlcnJ1cHRlZCB3aXRoIGEgbmV3IG5hdmlnYXRpb24gZHVyaW5nIGEgdHJhbnNpdGlvbiwgd2Ugc2tpcFxuICAvLyB0aGUgYWN0aXZlIHRyYW5zaXRpb24sIGxldCBpdCBjbGVhbnVwLCB0aGVuIGtpY2sgaXQgb2ZmIGFnYWluIGhlcmVcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXZ0Q29udGV4dC5pc1RyYW5zaXRpb25pbmcgJiYgaW50ZXJydXB0aW9uKSB7XG4gICAgICBzZXRQZW5kaW5nU3RhdGUoaW50ZXJydXB0aW9uLnN0YXRlKTtcbiAgICAgIHNldFZ0Q29udGV4dCh7XG4gICAgICAgIGlzVHJhbnNpdGlvbmluZzogdHJ1ZSxcbiAgICAgICAgZmx1c2hTeW5jOiBmYWxzZSxcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiBpbnRlcnJ1cHRpb24uY3VycmVudExvY2F0aW9uLFxuICAgICAgICBuZXh0TG9jYXRpb246IGludGVycnVwdGlvbi5uZXh0TG9jYXRpb25cbiAgICAgIH0pO1xuICAgICAgc2V0SW50ZXJydXB0aW9uKHVuZGVmaW5lZCk7XG4gICAgfVxuICB9LCBbdnRDb250ZXh0LmlzVHJhbnNpdGlvbmluZywgaW50ZXJydXB0aW9uXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcoZmFsbGJhY2tFbGVtZW50ID09IG51bGwgfHwgIXJvdXRlci5mdXR1cmUudjdfcGFydGlhbEh5ZHJhdGlvbiwgXCJgPFJvdXRlclByb3ZpZGVyIGZhbGxiYWNrRWxlbWVudD5gIGlzIGRlcHJlY2F0ZWQgd2hlbiB1c2luZyBcIiArIFwiYHY3X3BhcnRpYWxIeWRyYXRpb25gLCB1c2UgYSBgSHlkcmF0ZUZhbGxiYWNrYCBjb21wb25lbnQgaW5zdGVhZFwiKSA6IHZvaWQgMDtcbiAgICAvLyBPbmx5IGxvZyB0aGlzIG9uY2Ugb24gaW5pdGlhbCBtb3VudFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW10pO1xuICBsZXQgbmF2aWdhdG9yID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZUhyZWY6IHJvdXRlci5jcmVhdGVIcmVmLFxuICAgICAgZW5jb2RlTG9jYXRpb246IHJvdXRlci5lbmNvZGVMb2NhdGlvbixcbiAgICAgIGdvOiBuID0+IHJvdXRlci5uYXZpZ2F0ZShuKSxcbiAgICAgIHB1c2g6ICh0bywgc3RhdGUsIG9wdHMpID0+IHJvdXRlci5uYXZpZ2F0ZSh0bywge1xuICAgICAgICBzdGF0ZSxcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLnByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgfSksXG4gICAgICByZXBsYWNlOiAodG8sIHN0YXRlLCBvcHRzKSA9PiByb3V0ZXIubmF2aWdhdGUodG8sIHtcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5wcmV2ZW50U2Nyb2xsUmVzZXRcbiAgICAgIH0pXG4gICAgfTtcbiAgfSwgW3JvdXRlcl0pO1xuICBsZXQgYmFzZW5hbWUgPSByb3V0ZXIuYmFzZW5hbWUgfHwgXCIvXCI7XG4gIGxldCBkYXRhUm91dGVyQ29udGV4dCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICByb3V0ZXIsXG4gICAgbmF2aWdhdG9yLFxuICAgIHN0YXRpYzogZmFsc2UsXG4gICAgYmFzZW5hbWVcbiAgfSksIFtyb3V0ZXIsIG5hdmlnYXRvciwgYmFzZW5hbWVdKTtcbiAgbGV0IHJvdXRlckZ1dHVyZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICB2N19yZWxhdGl2ZVNwbGF0UGF0aDogcm91dGVyLmZ1dHVyZS52N19yZWxhdGl2ZVNwbGF0UGF0aFxuICB9KSwgW3JvdXRlci5mdXR1cmUudjdfcmVsYXRpdmVTcGxhdFBhdGhdKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IFVOU0FGRV9sb2dWNkRlcHJlY2F0aW9uV2FybmluZ3MoZnV0dXJlLCByb3V0ZXIuZnV0dXJlKSwgW2Z1dHVyZSwgcm91dGVyLmZ1dHVyZV0pO1xuICAvLyBUaGUgZnJhZ21lbnQgYW5kIHtudWxsfSBoZXJlIGFyZSBpbXBvcnRhbnQhICBXZSBuZWVkIHRoZW0gdG8ga2VlcCBSZWFjdCAxOCdzXG4gIC8vIHVzZUlkIGhhcHB5IHdoZW4gd2UgYXJlIHNlcnZlci1yZW5kZXJpbmcgc2luY2Ugd2UgbWF5IGhhdmUgYSA8c2NyaXB0PiBoZXJlXG4gIC8vIGNvbnRhaW5pbmcgdGhlIGh5ZHJhdGVkIHNlcnZlci1zaWRlIHN0YXRpY0NvbnRleHQgKGZyb20gU3RhdGljUm91dGVyUHJvdmlkZXIpLlxuICAvLyB1c2VJZCByZWxpZXMgb24gdGhlIGNvbXBvbmVudCB0cmVlIHN0cnVjdHVyZSB0byBnZW5lcmF0ZSBkZXRlcm1pbmlzdGljIGlkJ3NcbiAgLy8gc28gd2UgbmVlZCB0byBlbnN1cmUgaXQgcmVtYWlucyB0aGUgc2FtZSBvbiB0aGUgY2xpZW50IGV2ZW4gdGhvdWdoXG4gIC8vIHdlIGRvbid0IG5lZWQgdGhlIDxzY3JpcHQ+IHRhZ1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFVOU0FGRV9EYXRhUm91dGVyQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBkYXRhUm91dGVyQ29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChVTlNBRkVfRGF0YVJvdXRlclN0YXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBzdGF0ZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGZXRjaGVyc0NvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogZmV0Y2hlckRhdGEuY3VycmVudFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChWaWV3VHJhbnNpdGlvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdnRDb250ZXh0XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgbmF2aWdhdGlvblR5cGU6IHN0YXRlLmhpc3RvcnlBY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBuYXZpZ2F0b3IsXG4gICAgZnV0dXJlOiByb3V0ZXJGdXR1cmVcbiAgfSwgc3RhdGUuaW5pdGlhbGl6ZWQgfHwgcm91dGVyLmZ1dHVyZS52N19wYXJ0aWFsSHlkcmF0aW9uID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVtb2l6ZWREYXRhUm91dGVzLCB7XG4gICAgcm91dGVzOiByb3V0ZXIucm91dGVzLFxuICAgIGZ1dHVyZTogcm91dGVyLmZ1dHVyZSxcbiAgICBzdGF0ZTogc3RhdGVcbiAgfSkgOiBmYWxsYmFja0VsZW1lbnQpKSkpKSwgbnVsbCk7XG59XG4vLyBNZW1vaXplIHRvIGF2b2lkIHJlLXJlbmRlcnMgd2hlbiB1cGRhdGluZyBgVmlld1RyYW5zaXRpb25Db250ZXh0YFxuY29uc3QgTWVtb2l6ZWREYXRhUm91dGVzID0gLyojX19QVVJFX18qL1JlYWN0Lm1lbW8oRGF0YVJvdXRlcyk7XG5mdW5jdGlvbiBEYXRhUm91dGVzKF9yZWYzKSB7XG4gIGxldCB7XG4gICAgcm91dGVzLFxuICAgIGZ1dHVyZSxcbiAgICBzdGF0ZVxuICB9ID0gX3JlZjM7XG4gIHJldHVybiBVTlNBRkVfdXNlUm91dGVzSW1wbChyb3V0ZXMsIHVuZGVmaW5lZCwgc3RhdGUsIGZ1dHVyZSk7XG59XG4vKipcbiAqIEEgYDxSb3V0ZXI+YCBmb3IgdXNlIGluIHdlYiBicm93c2Vycy4gUHJvdmlkZXMgdGhlIGNsZWFuZXN0IFVSTHMuXG4gKi9cbmZ1bmN0aW9uIEJyb3dzZXJSb3V0ZXIoX3JlZjQpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBmdXR1cmUsXG4gICAgd2luZG93XG4gIH0gPSBfcmVmNDtcbiAgbGV0IGhpc3RvcnlSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgaWYgKGhpc3RvcnlSZWYuY3VycmVudCA9PSBudWxsKSB7XG4gICAgaGlzdG9yeVJlZi5jdXJyZW50ID0gY3JlYXRlQnJvd3Nlckhpc3Rvcnkoe1xuICAgICAgd2luZG93LFxuICAgICAgdjVDb21wYXQ6IHRydWVcbiAgICB9KTtcbiAgfVxuICBsZXQgaGlzdG9yeSA9IGhpc3RvcnlSZWYuY3VycmVudDtcbiAgbGV0IFtzdGF0ZSwgc2V0U3RhdGVJbXBsXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICBsZXQge1xuICAgIHY3X3N0YXJ0VHJhbnNpdGlvblxuICB9ID0gZnV0dXJlIHx8IHt9O1xuICBsZXQgc2V0U3RhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhuZXdTdGF0ZSA9PiB7XG4gICAgdjdfc3RhcnRUcmFuc2l0aW9uICYmIHN0YXJ0VHJhbnNpdGlvbkltcGwgPyBzdGFydFRyYW5zaXRpb25JbXBsKCgpID0+IHNldFN0YXRlSW1wbChuZXdTdGF0ZSkpIDogc2V0U3RhdGVJbXBsKG5ld1N0YXRlKTtcbiAgfSwgW3NldFN0YXRlSW1wbCwgdjdfc3RhcnRUcmFuc2l0aW9uXSk7XG4gIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiBoaXN0b3J5Lmxpc3RlbihzZXRTdGF0ZSksIFtoaXN0b3J5LCBzZXRTdGF0ZV0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gVU5TQUZFX2xvZ1Y2RGVwcmVjYXRpb25XYXJuaW5ncyhmdXR1cmUpLCBbZnV0dXJlXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICBiYXNlbmFtZTogYmFzZW5hbWUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICBuYXZpZ2F0aW9uVHlwZTogc3RhdGUuYWN0aW9uLFxuICAgIG5hdmlnYXRvcjogaGlzdG9yeSxcbiAgICBmdXR1cmU6IGZ1dHVyZVxuICB9KTtcbn1cbi8qKlxuICogQSBgPFJvdXRlcj5gIGZvciB1c2UgaW4gd2ViIGJyb3dzZXJzLiBTdG9yZXMgdGhlIGxvY2F0aW9uIGluIHRoZSBoYXNoXG4gKiBwb3J0aW9uIG9mIHRoZSBVUkwgc28gaXQgaXMgbm90IHNlbnQgdG8gdGhlIHNlcnZlci5cbiAqL1xuZnVuY3Rpb24gSGFzaFJvdXRlcihfcmVmNSkge1xuICBsZXQge1xuICAgIGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIGZ1dHVyZSxcbiAgICB3aW5kb3dcbiAgfSA9IF9yZWY1O1xuICBsZXQgaGlzdG9yeVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICBpZiAoaGlzdG9yeVJlZi5jdXJyZW50ID09IG51bGwpIHtcbiAgICBoaXN0b3J5UmVmLmN1cnJlbnQgPSBjcmVhdGVIYXNoSGlzdG9yeSh7XG4gICAgICB3aW5kb3csXG4gICAgICB2NUNvbXBhdDogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIGxldCBoaXN0b3J5ID0gaGlzdG9yeVJlZi5jdXJyZW50O1xuICBsZXQgW3N0YXRlLCBzZXRTdGF0ZUltcGxdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIGFjdGlvbjogaGlzdG9yeS5hY3Rpb24sXG4gICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb25cbiAgfSk7XG4gIGxldCB7XG4gICAgdjdfc3RhcnRUcmFuc2l0aW9uXG4gIH0gPSBmdXR1cmUgfHwge307XG4gIGxldCBzZXRTdGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKG5ld1N0YXRlID0+IHtcbiAgICB2N19zdGFydFRyYW5zaXRpb24gJiYgc3RhcnRUcmFuc2l0aW9uSW1wbCA/IHN0YXJ0VHJhbnNpdGlvbkltcGwoKCkgPT4gc2V0U3RhdGVJbXBsKG5ld1N0YXRlKSkgOiBzZXRTdGF0ZUltcGwobmV3U3RhdGUpO1xuICB9LCBbc2V0U3RhdGVJbXBsLCB2N19zdGFydFRyYW5zaXRpb25dKTtcbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKHNldFN0YXRlKSwgW2hpc3RvcnksIHNldFN0YXRlXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBVTlNBRkVfbG9nVjZEZXByZWNhdGlvbldhcm5pbmdzKGZ1dHVyZSksIFtmdXR1cmVdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBoaXN0b3J5LFxuICAgIGZ1dHVyZTogZnV0dXJlXG4gIH0pO1xufVxuLyoqXG4gKiBBIGA8Um91dGVyPmAgdGhhdCBhY2NlcHRzIGEgcHJlLWluc3RhbnRpYXRlZCBoaXN0b3J5IG9iamVjdC4gSXQncyBpbXBvcnRhbnRcbiAqIHRvIG5vdGUgdGhhdCB1c2luZyB5b3VyIG93biBoaXN0b3J5IG9iamVjdCBpcyBoaWdobHkgZGlzY291cmFnZWQgYW5kIG1heSBhZGRcbiAqIHR3byB2ZXJzaW9ucyBvZiB0aGUgaGlzdG9yeSBsaWJyYXJ5IHRvIHlvdXIgYnVuZGxlcyB1bmxlc3MgeW91IHVzZSB0aGUgc2FtZVxuICogdmVyc2lvbiBvZiB0aGUgaGlzdG9yeSBsaWJyYXJ5IHRoYXQgUmVhY3QgUm91dGVyIHVzZXMgaW50ZXJuYWxseS5cbiAqL1xuZnVuY3Rpb24gSGlzdG9yeVJvdXRlcihfcmVmNikge1xuICBsZXQge1xuICAgIGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIGZ1dHVyZSxcbiAgICBoaXN0b3J5XG4gIH0gPSBfcmVmNjtcbiAgbGV0IFtzdGF0ZSwgc2V0U3RhdGVJbXBsXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICBsZXQge1xuICAgIHY3X3N0YXJ0VHJhbnNpdGlvblxuICB9ID0gZnV0dXJlIHx8IHt9O1xuICBsZXQgc2V0U3RhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhuZXdTdGF0ZSA9PiB7XG4gICAgdjdfc3RhcnRUcmFuc2l0aW9uICYmIHN0YXJ0VHJhbnNpdGlvbkltcGwgPyBzdGFydFRyYW5zaXRpb25JbXBsKCgpID0+IHNldFN0YXRlSW1wbChuZXdTdGF0ZSkpIDogc2V0U3RhdGVJbXBsKG5ld1N0YXRlKTtcbiAgfSwgW3NldFN0YXRlSW1wbCwgdjdfc3RhcnRUcmFuc2l0aW9uXSk7XG4gIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiBoaXN0b3J5Lmxpc3RlbihzZXRTdGF0ZSksIFtoaXN0b3J5LCBzZXRTdGF0ZV0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gVU5TQUZFX2xvZ1Y2RGVwcmVjYXRpb25XYXJuaW5ncyhmdXR1cmUpLCBbZnV0dXJlXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICBiYXNlbmFtZTogYmFzZW5hbWUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICBuYXZpZ2F0aW9uVHlwZTogc3RhdGUuYWN0aW9uLFxuICAgIG5hdmlnYXRvcjogaGlzdG9yeSxcbiAgICBmdXR1cmU6IGZ1dHVyZVxuICB9KTtcbn1cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgSGlzdG9yeVJvdXRlci5kaXNwbGF5TmFtZSA9IFwidW5zdGFibGVfSGlzdG9yeVJvdXRlclwiO1xufVxuY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIjtcbmNvbnN0IEFCU09MVVRFX1VSTF9SRUdFWCA9IC9eKD86W2Etel1bYS16MC05Ky4tXSo6fFxcL1xcLykvaTtcbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHJlbmRlcmluZyBhIGhpc3RvcnktYXdhcmUgYDxhPmAuXG4gKi9cbmNvbnN0IExpbmsgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBMaW5rV2l0aFJlZihfcmVmNywgcmVmKSB7XG4gIGxldCB7XG4gICAgICBvbkNsaWNrLFxuICAgICAgcmVsYXRpdmUsXG4gICAgICByZWxvYWREb2N1bWVudCxcbiAgICAgIHJlcGxhY2UsXG4gICAgICBzdGF0ZSxcbiAgICAgIHRhcmdldCxcbiAgICAgIHRvLFxuICAgICAgcHJldmVudFNjcm9sbFJlc2V0LFxuICAgICAgdmlld1RyYW5zaXRpb25cbiAgICB9ID0gX3JlZjcsXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY3LCBfZXhjbHVkZWQpO1xuICBsZXQge1xuICAgIGJhc2VuYW1lXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KFVOU0FGRV9OYXZpZ2F0aW9uQ29udGV4dCk7XG4gIC8vIFJlbmRlcmVkIGludG8gPGEgaHJlZj4gZm9yIGFic29sdXRlIFVSTHNcbiAgbGV0IGFic29sdXRlSHJlZjtcbiAgbGV0IGlzRXh0ZXJuYWwgPSBmYWxzZTtcbiAgaWYgKHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiAmJiBBQlNPTFVURV9VUkxfUkVHRVgudGVzdCh0bykpIHtcbiAgICAvLyBSZW5kZXIgdGhlIGFic29sdXRlIGhyZWYgc2VydmVyLSBhbmQgY2xpZW50LXNpZGVcbiAgICBhYnNvbHV0ZUhyZWYgPSB0bztcbiAgICAvLyBPbmx5IGNoZWNrIGZvciBleHRlcm5hbCBvcmlnaW5zIGNsaWVudC1zaWRlXG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGN1cnJlbnRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgbGV0IHRhcmdldFVybCA9IHRvLnN0YXJ0c1dpdGgoXCIvL1wiKSA/IG5ldyBVUkwoY3VycmVudFVybC5wcm90b2NvbCArIHRvKSA6IG5ldyBVUkwodG8pO1xuICAgICAgICBsZXQgcGF0aCA9IHN0cmlwQmFzZW5hbWUodGFyZ2V0VXJsLnBhdGhuYW1lLCBiYXNlbmFtZSk7XG4gICAgICAgIGlmICh0YXJnZXRVcmwub3JpZ2luID09PSBjdXJyZW50VXJsLm9yaWdpbiAmJiBwYXRoICE9IG51bGwpIHtcbiAgICAgICAgICAvLyBTdHJpcCB0aGUgcHJvdG9jb2wvb3JpZ2luL2Jhc2VuYW1lIGZvciBzYW1lLW9yaWdpbiBhYnNvbHV0ZSBVUkxzXG4gICAgICAgICAgdG8gPSBwYXRoICsgdGFyZ2V0VXJsLnNlYXJjaCArIHRhcmdldFVybC5oYXNoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlzRXh0ZXJuYWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIFdlIGNhbid0IGRvIGV4dGVybmFsIFVSTCBkZXRlY3Rpb24gd2l0aG91dCBhIHZhbGlkIFVSTFxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhmYWxzZSwgXCI8TGluayB0bz1cXFwiXCIgKyB0byArIFwiXFxcIj4gY29udGFpbnMgYW4gaW52YWxpZCBVUkwgd2hpY2ggd2lsbCBwcm9iYWJseSBicmVhayBcIiArIFwid2hlbiBjbGlja2VkIC0gcGxlYXNlIHVwZGF0ZSB0byBhIHZhbGlkIFVSTCBwYXRoLlwiKSA6IHZvaWQgMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gUmVuZGVyZWQgaW50byA8YSBocmVmPiBmb3IgcmVsYXRpdmUgVVJMc1xuICBsZXQgaHJlZiA9IHVzZUhyZWYodG8sIHtcbiAgICByZWxhdGl2ZVxuICB9KTtcbiAgbGV0IGludGVybmFsT25DbGljayA9IHVzZUxpbmtDbGlja0hhbmRsZXIodG8sIHtcbiAgICByZXBsYWNlLFxuICAgIHN0YXRlLFxuICAgIHRhcmdldCxcbiAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgcmVsYXRpdmUsXG4gICAgdmlld1RyYW5zaXRpb25cbiAgfSk7XG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKG9uQ2xpY2spIG9uQ2xpY2soZXZlbnQpO1xuICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgaW50ZXJuYWxPbkNsaWNrKGV2ZW50KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2FuY2hvci1oYXMtY29udGVudFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICBocmVmOiBhYnNvbHV0ZUhyZWYgfHwgaHJlZixcbiAgICAgIG9uQ2xpY2s6IGlzRXh0ZXJuYWwgfHwgcmVsb2FkRG9jdW1lbnQgPyBvbkNsaWNrIDogaGFuZGxlQ2xpY2ssXG4gICAgICByZWY6IHJlZixcbiAgICAgIHRhcmdldDogdGFyZ2V0XG4gICAgfSkpXG4gICk7XG59KTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTGluay5kaXNwbGF5TmFtZSA9IFwiTGlua1wiO1xufVxuLyoqXG4gKiBBIGA8TGluaz5gIHdyYXBwZXIgdGhhdCBrbm93cyBpZiBpdCdzIFwiYWN0aXZlXCIgb3Igbm90LlxuICovXG5jb25zdCBOYXZMaW5rID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTmF2TGlua1dpdGhSZWYoX3JlZjgsIHJlZikge1xuICBsZXQge1xuICAgICAgXCJhcmlhLWN1cnJlbnRcIjogYXJpYUN1cnJlbnRQcm9wID0gXCJwYWdlXCIsXG4gICAgICBjYXNlU2Vuc2l0aXZlID0gZmFsc2UsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVByb3AgPSBcIlwiLFxuICAgICAgZW5kID0gZmFsc2UsXG4gICAgICBzdHlsZTogc3R5bGVQcm9wLFxuICAgICAgdG8sXG4gICAgICB2aWV3VHJhbnNpdGlvbixcbiAgICAgIGNoaWxkcmVuXG4gICAgfSA9IF9yZWY4LFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmOCwgX2V4Y2x1ZGVkMik7XG4gIGxldCBwYXRoID0gdXNlUmVzb2x2ZWRQYXRoKHRvLCB7XG4gICAgcmVsYXRpdmU6IHJlc3QucmVsYXRpdmVcbiAgfSk7XG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCByb3V0ZXJTdGF0ZSA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX0RhdGFSb3V0ZXJTdGF0ZUNvbnRleHQpO1xuICBsZXQge1xuICAgIG5hdmlnYXRvcixcbiAgICBiYXNlbmFtZVxuICB9ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgaXNUcmFuc2l0aW9uaW5nID0gcm91dGVyU3RhdGUgIT0gbnVsbCAmJlxuICAvLyBDb25kaXRpb25hbCB1c2FnZSBpcyBPSyBoZXJlIGJlY2F1c2UgdGhlIHVzYWdlIG9mIGEgZGF0YSByb3V0ZXIgaXMgc3RhdGljXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICB1c2VWaWV3VHJhbnNpdGlvblN0YXRlKHBhdGgpICYmIHZpZXdUcmFuc2l0aW9uID09PSB0cnVlO1xuICBsZXQgdG9QYXRobmFtZSA9IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbiA/IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbihwYXRoKS5wYXRobmFtZSA6IHBhdGgucGF0aG5hbWU7XG4gIGxldCBsb2NhdGlvblBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gIGxldCBuZXh0TG9jYXRpb25QYXRobmFtZSA9IHJvdXRlclN0YXRlICYmIHJvdXRlclN0YXRlLm5hdmlnYXRpb24gJiYgcm91dGVyU3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbiA/IHJvdXRlclN0YXRlLm5hdmlnYXRpb24ubG9jYXRpb24ucGF0aG5hbWUgOiBudWxsO1xuICBpZiAoIWNhc2VTZW5zaXRpdmUpIHtcbiAgICBsb2NhdGlvblBhdGhuYW1lID0gbG9jYXRpb25QYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIG5leHRMb2NhdGlvblBhdGhuYW1lID0gbmV4dExvY2F0aW9uUGF0aG5hbWUgPyBuZXh0TG9jYXRpb25QYXRobmFtZS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbiAgICB0b1BhdGhuYW1lID0gdG9QYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIGlmIChuZXh0TG9jYXRpb25QYXRobmFtZSAmJiBiYXNlbmFtZSkge1xuICAgIG5leHRMb2NhdGlvblBhdGhuYW1lID0gc3RyaXBCYXNlbmFtZShuZXh0TG9jYXRpb25QYXRobmFtZSwgYmFzZW5hbWUpIHx8IG5leHRMb2NhdGlvblBhdGhuYW1lO1xuICB9XG4gIC8vIElmIHRoZSBgdG9gIGhhcyBhIHRyYWlsaW5nIHNsYXNoLCBsb29rIGF0IHRoYXQgZXhhY3Qgc3BvdC4gIE90aGVyd2lzZSxcbiAgLy8gd2UncmUgbG9va2luZyBmb3IgYSBzbGFzaCBfYWZ0ZXJfIHdoYXQncyBpbiBgdG9gLiAgRm9yIGV4YW1wbGU6XG4gIC8vXG4gIC8vIDxOYXZMaW5rIHRvPVwiL3VzZXJzXCI+IGFuZCA8TmF2TGluayB0bz1cIi91c2Vycy9cIj5cbiAgLy8gYm90aCB3YW50IHRvIGxvb2sgZm9yIGEgLyBhdCBpbmRleCA2IHRvIG1hdGNoIFVSTCBgL3VzZXJzL21hdHRgXG4gIGNvbnN0IGVuZFNsYXNoUG9zaXRpb24gPSB0b1BhdGhuYW1lICE9PSBcIi9cIiAmJiB0b1BhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKSA/IHRvUGF0aG5hbWUubGVuZ3RoIC0gMSA6IHRvUGF0aG5hbWUubGVuZ3RoO1xuICBsZXQgaXNBY3RpdmUgPSBsb2NhdGlvblBhdGhuYW1lID09PSB0b1BhdGhuYW1lIHx8ICFlbmQgJiYgbG9jYXRpb25QYXRobmFtZS5zdGFydHNXaXRoKHRvUGF0aG5hbWUpICYmIGxvY2F0aW9uUGF0aG5hbWUuY2hhckF0KGVuZFNsYXNoUG9zaXRpb24pID09PSBcIi9cIjtcbiAgbGV0IGlzUGVuZGluZyA9IG5leHRMb2NhdGlvblBhdGhuYW1lICE9IG51bGwgJiYgKG5leHRMb2NhdGlvblBhdGhuYW1lID09PSB0b1BhdGhuYW1lIHx8ICFlbmQgJiYgbmV4dExvY2F0aW9uUGF0aG5hbWUuc3RhcnRzV2l0aCh0b1BhdGhuYW1lKSAmJiBuZXh0TG9jYXRpb25QYXRobmFtZS5jaGFyQXQodG9QYXRobmFtZS5sZW5ndGgpID09PSBcIi9cIik7XG4gIGxldCByZW5kZXJQcm9wcyA9IHtcbiAgICBpc0FjdGl2ZSxcbiAgICBpc1BlbmRpbmcsXG4gICAgaXNUcmFuc2l0aW9uaW5nXG4gIH07XG4gIGxldCBhcmlhQ3VycmVudCA9IGlzQWN0aXZlID8gYXJpYUN1cnJlbnRQcm9wIDogdW5kZWZpbmVkO1xuICBsZXQgY2xhc3NOYW1lO1xuICBpZiAodHlwZW9mIGNsYXNzTmFtZVByb3AgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZVByb3AocmVuZGVyUHJvcHMpO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIHRoZSBjbGFzc05hbWUgcHJvcCBpcyBub3QgYSBmdW5jdGlvbiwgd2UgdXNlIGEgZGVmYXVsdCBgYWN0aXZlYFxuICAgIC8vIGNsYXNzIGZvciA8TmF2TGluayAvPnMgdGhhdCBhcmUgYWN0aXZlLiBJbiB2NSBgYWN0aXZlYCB3YXMgdGhlIGRlZmF1bHRcbiAgICAvLyB2YWx1ZSBmb3IgYGFjdGl2ZUNsYXNzTmFtZWAsIGJ1dCB3ZSBhcmUgcmVtb3ZpbmcgdGhhdCBBUEkgYW5kIGNhbiBzdGlsbFxuICAgIC8vIHVzZSB0aGUgb2xkIGRlZmF1bHQgYmVoYXZpb3IgZm9yIGEgY2xlYW5lciB1cGdyYWRlIHBhdGggYW5kIGtlZXAgdGhlXG4gICAgLy8gc2ltcGxlIHN0eWxpbmcgcnVsZXMgd29ya2luZyBhcyB0aGV5IGN1cnJlbnRseSBkby5cbiAgICBjbGFzc05hbWUgPSBbY2xhc3NOYW1lUHJvcCwgaXNBY3RpdmUgPyBcImFjdGl2ZVwiIDogbnVsbCwgaXNQZW5kaW5nID8gXCJwZW5kaW5nXCIgOiBudWxsLCBpc1RyYW5zaXRpb25pbmcgPyBcInRyYW5zaXRpb25pbmdcIiA6IG51bGxdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKTtcbiAgfVxuICBsZXQgc3R5bGUgPSB0eXBlb2Ygc3R5bGVQcm9wID09PSBcImZ1bmN0aW9uXCIgPyBzdHlsZVByb3AocmVuZGVyUHJvcHMpIDogc3R5bGVQcm9wO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBcImFyaWEtY3VycmVudFwiOiBhcmlhQ3VycmVudCxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICByZWY6IHJlZixcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgdG86IHRvLFxuICAgIHZpZXdUcmFuc2l0aW9uOiB2aWV3VHJhbnNpdGlvblxuICB9KSwgdHlwZW9mIGNoaWxkcmVuID09PSBcImZ1bmN0aW9uXCIgPyBjaGlsZHJlbihyZW5kZXJQcm9wcykgOiBjaGlsZHJlbik7XG59KTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTmF2TGluay5kaXNwbGF5TmFtZSA9IFwiTmF2TGlua1wiO1xufVxuLyoqXG4gKiBBIGBAcmVtaXgtcnVuL3JvdXRlcmAtYXdhcmUgYDxmb3JtPmAuIEl0IGJlaGF2ZXMgbGlrZSBhIG5vcm1hbCBmb3JtIGV4Y2VwdFxuICogdGhhdCB0aGUgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2VydmVyIGlzIHdpdGggYGZldGNoYCBpbnN0ZWFkIG9mIG5ldyBkb2N1bWVudFxuICogcmVxdWVzdHMsIGFsbG93aW5nIGNvbXBvbmVudHMgdG8gYWRkIG5pY2VyIFVYIHRvIHRoZSBwYWdlIGFzIHRoZSBmb3JtIGlzXG4gKiBzdWJtaXR0ZWQgYW5kIHJldHVybnMgd2l0aCBkYXRhLlxuICovXG5jb25zdCBGb3JtID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKF9yZWY5LCBmb3J3YXJkZWRSZWYpID0+IHtcbiAgbGV0IHtcbiAgICAgIGZldGNoZXJLZXksXG4gICAgICBuYXZpZ2F0ZSxcbiAgICAgIHJlbG9hZERvY3VtZW50LFxuICAgICAgcmVwbGFjZSxcbiAgICAgIHN0YXRlLFxuICAgICAgbWV0aG9kID0gZGVmYXVsdE1ldGhvZCxcbiAgICAgIGFjdGlvbixcbiAgICAgIG9uU3VibWl0LFxuICAgICAgcmVsYXRpdmUsXG4gICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICB2aWV3VHJhbnNpdGlvblxuICAgIH0gPSBfcmVmOSxcbiAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY5LCBfZXhjbHVkZWQzKTtcbiAgbGV0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xuICBsZXQgZm9ybUFjdGlvbiA9IHVzZUZvcm1BY3Rpb24oYWN0aW9uLCB7XG4gICAgcmVsYXRpdmVcbiAgfSk7XG4gIGxldCBmb3JtTWV0aG9kID0gbWV0aG9kLnRvTG93ZXJDYXNlKCkgPT09IFwiZ2V0XCIgPyBcImdldFwiIDogXCJwb3N0XCI7XG4gIGxldCBzdWJtaXRIYW5kbGVyID0gZXZlbnQgPT4ge1xuICAgIG9uU3VibWl0ICYmIG9uU3VibWl0KGV2ZW50KTtcbiAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkgcmV0dXJuO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHN1Ym1pdHRlciA9IGV2ZW50Lm5hdGl2ZUV2ZW50LnN1Ym1pdHRlcjtcbiAgICBsZXQgc3VibWl0TWV0aG9kID0gKHN1Ym1pdHRlciA9PSBudWxsID8gdm9pZCAwIDogc3VibWl0dGVyLmdldEF0dHJpYnV0ZShcImZvcm1tZXRob2RcIikpIHx8IG1ldGhvZDtcbiAgICBzdWJtaXQoc3VibWl0dGVyIHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQsIHtcbiAgICAgIGZldGNoZXJLZXksXG4gICAgICBtZXRob2Q6IHN1Ym1pdE1ldGhvZCxcbiAgICAgIG5hdmlnYXRlLFxuICAgICAgcmVwbGFjZSxcbiAgICAgIHN0YXRlLFxuICAgICAgcmVsYXRpdmUsXG4gICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICB2aWV3VHJhbnNpdGlvblxuICAgIH0pO1xuICB9O1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIF9leHRlbmRzKHtcbiAgICByZWY6IGZvcndhcmRlZFJlZixcbiAgICBtZXRob2Q6IGZvcm1NZXRob2QsXG4gICAgYWN0aW9uOiBmb3JtQWN0aW9uLFxuICAgIG9uU3VibWl0OiByZWxvYWREb2N1bWVudCA/IG9uU3VibWl0IDogc3VibWl0SGFuZGxlclxuICB9LCBwcm9wcykpO1xufSk7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEZvcm0uZGlzcGxheU5hbWUgPSBcIkZvcm1cIjtcbn1cbi8qKlxuICogVGhpcyBjb21wb25lbnQgd2lsbCBlbXVsYXRlIHRoZSBicm93c2VyJ3Mgc2Nyb2xsIHJlc3RvcmF0aW9uIG9uIGxvY2F0aW9uXG4gKiBjaGFuZ2VzLlxuICovXG5mdW5jdGlvbiBTY3JvbGxSZXN0b3JhdGlvbihfcmVmMTApIHtcbiAgbGV0IHtcbiAgICBnZXRLZXksXG4gICAgc3RvcmFnZUtleVxuICB9ID0gX3JlZjEwO1xuICB1c2VTY3JvbGxSZXN0b3JhdGlvbih7XG4gICAgZ2V0S2V5LFxuICAgIHN0b3JhZ2VLZXlcbiAgfSk7XG4gIHJldHVybiBudWxsO1xufVxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBTY3JvbGxSZXN0b3JhdGlvbi5kaXNwbGF5TmFtZSA9IFwiU2Nyb2xsUmVzdG9yYXRpb25cIjtcbn1cbi8vI2VuZHJlZ2lvblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vI3JlZ2lvbiBIb29rc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbnZhciBEYXRhUm91dGVySG9vaztcbihmdW5jdGlvbiAoRGF0YVJvdXRlckhvb2spIHtcbiAgRGF0YVJvdXRlckhvb2tbXCJVc2VTY3JvbGxSZXN0b3JhdGlvblwiXSA9IFwidXNlU2Nyb2xsUmVzdG9yYXRpb25cIjtcbiAgRGF0YVJvdXRlckhvb2tbXCJVc2VTdWJtaXRcIl0gPSBcInVzZVN1Ym1pdFwiO1xuICBEYXRhUm91dGVySG9va1tcIlVzZVN1Ym1pdEZldGNoZXJcIl0gPSBcInVzZVN1Ym1pdEZldGNoZXJcIjtcbiAgRGF0YVJvdXRlckhvb2tbXCJVc2VGZXRjaGVyXCJdID0gXCJ1c2VGZXRjaGVyXCI7XG4gIERhdGFSb3V0ZXJIb29rW1widXNlVmlld1RyYW5zaXRpb25TdGF0ZVwiXSA9IFwidXNlVmlld1RyYW5zaXRpb25TdGF0ZVwiO1xufSkoRGF0YVJvdXRlckhvb2sgfHwgKERhdGFSb3V0ZXJIb29rID0ge30pKTtcbnZhciBEYXRhUm91dGVyU3RhdGVIb29rO1xuKGZ1bmN0aW9uIChEYXRhUm91dGVyU3RhdGVIb29rKSB7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VGZXRjaGVyXCJdID0gXCJ1c2VGZXRjaGVyXCI7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VGZXRjaGVyc1wiXSA9IFwidXNlRmV0Y2hlcnNcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZVNjcm9sbFJlc3RvcmF0aW9uXCJdID0gXCJ1c2VTY3JvbGxSZXN0b3JhdGlvblwiO1xufSkoRGF0YVJvdXRlclN0YXRlSG9vayB8fCAoRGF0YVJvdXRlclN0YXRlSG9vayA9IHt9KSk7XG4vLyBJbnRlcm5hbCBob29rc1xuZnVuY3Rpb24gZ2V0RGF0YVJvdXRlckNvbnNvbGVFcnJvcihob29rTmFtZSkge1xuICByZXR1cm4gaG9va05hbWUgKyBcIiBtdXN0IGJlIHVzZWQgd2l0aGluIGEgZGF0YSByb3V0ZXIuICBTZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vdjYvcm91dGVycy9waWNraW5nLWEtcm91dGVyLlwiO1xufVxuZnVuY3Rpb24gdXNlRGF0YVJvdXRlckNvbnRleHQoaG9va05hbWUpIHtcbiAgbGV0IGN0eCA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX0RhdGFSb3V0ZXJDb250ZXh0KTtcbiAgIWN0eCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gY3R4O1xufVxuZnVuY3Rpb24gdXNlRGF0YVJvdXRlclN0YXRlKGhvb2tOYW1lKSB7XG4gIGxldCBzdGF0ZSA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX0RhdGFSb3V0ZXJTdGF0ZUNvbnRleHQpO1xuICAhc3RhdGUgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBnZXREYXRhUm91dGVyQ29uc29sZUVycm9yKGhvb2tOYW1lKSkgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIHN0YXRlO1xufVxuLy8gRXh0ZXJuYWwgaG9va3Ncbi8qKlxuICogSGFuZGxlcyB0aGUgY2xpY2sgYmVoYXZpb3IgZm9yIHJvdXRlciBgPExpbms+YCBjb21wb25lbnRzLiBUaGlzIGlzIHVzZWZ1bCBpZlxuICogeW91IG5lZWQgdG8gY3JlYXRlIGN1c3RvbSBgPExpbms+YCBjb21wb25lbnRzIHdpdGggdGhlIHNhbWUgY2xpY2sgYmVoYXZpb3Igd2VcbiAqIHVzZSBpbiBvdXIgZXhwb3J0ZWQgYDxMaW5rPmAuXG4gKi9cbmZ1bmN0aW9uIHVzZUxpbmtDbGlja0hhbmRsZXIodG8sIF90ZW1wKSB7XG4gIGxldCB7XG4gICAgdGFyZ2V0LFxuICAgIHJlcGxhY2U6IHJlcGxhY2VQcm9wLFxuICAgIHN0YXRlLFxuICAgIHByZXZlbnRTY3JvbGxSZXNldCxcbiAgICByZWxhdGl2ZSxcbiAgICB2aWV3VHJhbnNpdGlvblxuICB9ID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA7XG4gIGxldCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCBwYXRoID0gdXNlUmVzb2x2ZWRQYXRoKHRvLCB7XG4gICAgcmVsYXRpdmVcbiAgfSk7XG4gIHJldHVybiBSZWFjdC51c2VDYWxsYmFjayhldmVudCA9PiB7XG4gICAgaWYgKHNob3VsZFByb2Nlc3NMaW5rQ2xpY2soZXZlbnQsIHRhcmdldCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyBJZiB0aGUgVVJMIGhhc24ndCBjaGFuZ2VkLCBhIHJlZ3VsYXIgPGE+IHdpbGwgZG8gYSByZXBsYWNlIGluc3RlYWQgb2ZcbiAgICAgIC8vIGEgcHVzaCwgc28gZG8gdGhlIHNhbWUgaGVyZSB1bmxlc3MgdGhlIHJlcGxhY2UgcHJvcCBpcyBleHBsaWNpdGx5IHNldFxuICAgICAgbGV0IHJlcGxhY2UgPSByZXBsYWNlUHJvcCAhPT0gdW5kZWZpbmVkID8gcmVwbGFjZVByb3AgOiBjcmVhdGVQYXRoKGxvY2F0aW9uKSA9PT0gY3JlYXRlUGF0aChwYXRoKTtcbiAgICAgIG5hdmlnYXRlKHRvLCB7XG4gICAgICAgIHJlcGxhY2UsXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICAgIHJlbGF0aXZlLFxuICAgICAgICB2aWV3VHJhbnNpdGlvblxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbbG9jYXRpb24sIG5hdmlnYXRlLCBwYXRoLCByZXBsYWNlUHJvcCwgc3RhdGUsIHRhcmdldCwgdG8sIHByZXZlbnRTY3JvbGxSZXNldCwgcmVsYXRpdmUsIHZpZXdUcmFuc2l0aW9uXSk7XG59XG4vKipcbiAqIEEgY29udmVuaWVudCB3cmFwcGVyIGZvciByZWFkaW5nIGFuZCB3cml0aW5nIHNlYXJjaCBwYXJhbWV0ZXJzIHZpYSB0aGVcbiAqIFVSTFNlYXJjaFBhcmFtcyBpbnRlcmZhY2UuXG4gKi9cbmZ1bmN0aW9uIHVzZVNlYXJjaFBhcmFtcyhkZWZhdWx0SW5pdCkge1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyh0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSBcInVuZGVmaW5lZFwiLCBcIllvdSBjYW5ub3QgdXNlIHRoZSBgdXNlU2VhcmNoUGFyYW1zYCBob29rIGluIGEgYnJvd3NlciB0aGF0IGRvZXMgbm90IFwiICsgXCJzdXBwb3J0IHRoZSBVUkxTZWFyY2hQYXJhbXMgQVBJLiBJZiB5b3UgbmVlZCB0byBzdXBwb3J0IEludGVybmV0IFwiICsgXCJFeHBsb3JlciAxMSwgd2UgcmVjb21tZW5kIHlvdSBsb2FkIGEgcG9seWZpbGwgc3VjaCBhcyBcIiArIFwiaHR0cHM6Ly9naXRodWIuY29tL3VuZ2FwL3VybC1zZWFyY2gtcGFyYW1zLlwiKSA6IHZvaWQgMDtcbiAgbGV0IGRlZmF1bHRTZWFyY2hQYXJhbXNSZWYgPSBSZWFjdC51c2VSZWYoY3JlYXRlU2VhcmNoUGFyYW1zKGRlZmF1bHRJbml0KSk7XG4gIGxldCBoYXNTZXRTZWFyY2hQYXJhbXNSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgc2VhcmNoUGFyYW1zID0gUmVhY3QudXNlTWVtbygoKSA9PlxuICAvLyBPbmx5IG1lcmdlIGluIHRoZSBkZWZhdWx0cyBpZiB3ZSBoYXZlbid0IHlldCBjYWxsZWQgc2V0U2VhcmNoUGFyYW1zLlxuICAvLyBPbmNlIHdlIGNhbGwgdGhhdCB3ZSB3YW50IHRob3NlIHRvIHRha2UgcHJlY2VkZW5jZSwgb3RoZXJ3aXNlIHlvdSBjYW4ndFxuICAvLyByZW1vdmUgYSBwYXJhbSB3aXRoIHNldFNlYXJjaFBhcmFtcyh7fSkgaWYgaXQgaGFzIGFuIGluaXRpYWwgdmFsdWVcbiAgZ2V0U2VhcmNoUGFyYW1zRm9yTG9jYXRpb24obG9jYXRpb24uc2VhcmNoLCBoYXNTZXRTZWFyY2hQYXJhbXNSZWYuY3VycmVudCA/IG51bGwgOiBkZWZhdWx0U2VhcmNoUGFyYW1zUmVmLmN1cnJlbnQpLCBbbG9jYXRpb24uc2VhcmNoXSk7XG4gIGxldCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGxldCBzZXRTZWFyY2hQYXJhbXMgPSBSZWFjdC51c2VDYWxsYmFjaygobmV4dEluaXQsIG5hdmlnYXRlT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IG5ld1NlYXJjaFBhcmFtcyA9IGNyZWF0ZVNlYXJjaFBhcmFtcyh0eXBlb2YgbmV4dEluaXQgPT09IFwiZnVuY3Rpb25cIiA/IG5leHRJbml0KHNlYXJjaFBhcmFtcykgOiBuZXh0SW5pdCk7XG4gICAgaGFzU2V0U2VhcmNoUGFyYW1zUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIG5hdmlnYXRlKFwiP1wiICsgbmV3U2VhcmNoUGFyYW1zLCBuYXZpZ2F0ZU9wdGlvbnMpO1xuICB9LCBbbmF2aWdhdGUsIHNlYXJjaFBhcmFtc10pO1xuICByZXR1cm4gW3NlYXJjaFBhcmFtcywgc2V0U2VhcmNoUGFyYW1zXTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlQ2xpZW50U2lkZVN1Ym1pc3Npb24oKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgYXJlIGNhbGxpbmcgc3VibWl0IGR1cmluZyB0aGUgc2VydmVyIHJlbmRlci4gXCIgKyBcIlRyeSBjYWxsaW5nIHN1Ym1pdCB3aXRoaW4gYSBgdXNlRWZmZWN0YCBvciBjYWxsYmFjayBpbnN0ZWFkLlwiKTtcbiAgfVxufVxubGV0IGZldGNoZXJJZCA9IDA7XG5sZXQgZ2V0VW5pcXVlRmV0Y2hlcklkID0gKCkgPT4gXCJfX1wiICsgU3RyaW5nKCsrZmV0Y2hlcklkKSArIFwiX19cIjtcbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgbWF5IGJlIHVzZWQgdG8gcHJvZ3JhbW1hdGljYWxseSBzdWJtaXQgYSBmb3JtIChvclxuICogc29tZSBhcmJpdHJhcnkgZGF0YSkgdG8gdGhlIHNlcnZlci5cbiAqL1xuZnVuY3Rpb24gdXNlU3VibWl0KCkge1xuICBsZXQge1xuICAgIHJvdXRlclxuICB9ID0gdXNlRGF0YVJvdXRlckNvbnRleHQoRGF0YVJvdXRlckhvb2suVXNlU3VibWl0KTtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZVxuICB9ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgY3VycmVudFJvdXRlSWQgPSBVTlNBRkVfdXNlUm91dGVJZCgpO1xuICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgdmFsaWRhdGVDbGllbnRTaWRlU3VibWlzc2lvbigpO1xuICAgIGxldCB7XG4gICAgICBhY3Rpb24sXG4gICAgICBtZXRob2QsXG4gICAgICBlbmNUeXBlLFxuICAgICAgZm9ybURhdGEsXG4gICAgICBib2R5XG4gICAgfSA9IGdldEZvcm1TdWJtaXNzaW9uSW5mbyh0YXJnZXQsIGJhc2VuYW1lKTtcbiAgICBpZiAob3B0aW9ucy5uYXZpZ2F0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIGxldCBrZXkgPSBvcHRpb25zLmZldGNoZXJLZXkgfHwgZ2V0VW5pcXVlRmV0Y2hlcklkKCk7XG4gICAgICByb3V0ZXIuZmV0Y2goa2V5LCBjdXJyZW50Um91dGVJZCwgb3B0aW9ucy5hY3Rpb24gfHwgYWN0aW9uLCB7XG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogb3B0aW9ucy5wcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICAgIGZvcm1EYXRhLFxuICAgICAgICBib2R5LFxuICAgICAgICBmb3JtTWV0aG9kOiBvcHRpb25zLm1ldGhvZCB8fCBtZXRob2QsXG4gICAgICAgIGZvcm1FbmNUeXBlOiBvcHRpb25zLmVuY1R5cGUgfHwgZW5jVHlwZSxcbiAgICAgICAgZmx1c2hTeW5jOiBvcHRpb25zLmZsdXNoU3luY1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5uYXZpZ2F0ZShvcHRpb25zLmFjdGlvbiB8fCBhY3Rpb24sIHtcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBvcHRpb25zLnByZXZlbnRTY3JvbGxSZXNldCxcbiAgICAgICAgZm9ybURhdGEsXG4gICAgICAgIGJvZHksXG4gICAgICAgIGZvcm1NZXRob2Q6IG9wdGlvbnMubWV0aG9kIHx8IG1ldGhvZCxcbiAgICAgICAgZm9ybUVuY1R5cGU6IG9wdGlvbnMuZW5jVHlwZSB8fCBlbmNUeXBlLFxuICAgICAgICByZXBsYWNlOiBvcHRpb25zLnJlcGxhY2UsXG4gICAgICAgIHN0YXRlOiBvcHRpb25zLnN0YXRlLFxuICAgICAgICBmcm9tUm91dGVJZDogY3VycmVudFJvdXRlSWQsXG4gICAgICAgIGZsdXNoU3luYzogb3B0aW9ucy5mbHVzaFN5bmMsXG4gICAgICAgIHZpZXdUcmFuc2l0aW9uOiBvcHRpb25zLnZpZXdUcmFuc2l0aW9uXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtyb3V0ZXIsIGJhc2VuYW1lLCBjdXJyZW50Um91dGVJZF0pO1xufVxuLy8gdjc6IEV2ZW50dWFsbHkgd2Ugc2hvdWxkIGRlcHJlY2F0ZSB0aGlzIGVudGlyZWx5IGluIGZhdm9yIG9mIHVzaW5nIHRoZVxuLy8gcm91dGVyIG1ldGhvZCBkaXJlY3RseT9cbmZ1bmN0aW9uIHVzZUZvcm1BY3Rpb24oYWN0aW9uLCBfdGVtcDIpIHtcbiAgbGV0IHtcbiAgICByZWxhdGl2ZVxuICB9ID0gX3RlbXAyID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMjtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZVxuICB9ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgcm91dGVDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfUm91dGVDb250ZXh0KTtcbiAgIXJvdXRlQ29udGV4dCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwidXNlRm9ybUFjdGlvbiBtdXN0IGJlIHVzZWQgaW5zaWRlIGEgUm91dGVDb250ZXh0XCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCBbbWF0Y2hdID0gcm91dGVDb250ZXh0Lm1hdGNoZXMuc2xpY2UoLTEpO1xuICAvLyBTaGFsbG93IGNsb25lIHBhdGggc28gd2UgY2FuIG1vZGlmeSBpdCBiZWxvdywgb3RoZXJ3aXNlIHdlIG1vZGlmeSB0aGVcbiAgLy8gb2JqZWN0IHJlZmVyZW5jZWQgYnkgdXNlTWVtbyBpbnNpZGUgdXNlUmVzb2x2ZWRQYXRoXG4gIGxldCBwYXRoID0gX2V4dGVuZHMoe30sIHVzZVJlc29sdmVkUGF0aChhY3Rpb24gPyBhY3Rpb24gOiBcIi5cIiwge1xuICAgIHJlbGF0aXZlXG4gIH0pKTtcbiAgLy8gSWYgbm8gYWN0aW9uIHdhcyBzcGVjaWZpZWQsIGJyb3dzZXJzIHdpbGwgcGVyc2lzdCBjdXJyZW50IHNlYXJjaCBwYXJhbXNcbiAgLy8gd2hlbiBkZXRlcm1pbmluZyB0aGUgcGF0aCwgc28gbWF0Y2ggdGhhdCBiZWhhdmlvclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVtaXgtcnVuL3JlbWl4L2lzc3Vlcy85MjdcbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgaWYgKGFjdGlvbiA9PSBudWxsKSB7XG4gICAgLy8gU2FmZSB0byB3cml0ZSB0byB0aGlzIGRpcmVjdGx5IGhlcmUgc2luY2UgaWYgYWN0aW9uIHdhcyB1bmRlZmluZWQsIHdlXG4gICAgLy8gd291bGQgaGF2ZSBjYWxsZWQgdXNlUmVzb2x2ZWRQYXRoKFwiLlwiKSB3aGljaCB3aWxsIG5ldmVyIGluY2x1ZGUgYSBzZWFyY2hcbiAgICBwYXRoLnNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICAvLyBXaGVuIGdyYWJiaW5nIHNlYXJjaCBwYXJhbXMgZnJvbSB0aGUgVVJMLCByZW1vdmUgYW55IGluY2x1ZGVkID9pbmRleCBwYXJhbVxuICAgIC8vIHNpbmNlIGl0IG1pZ2h0IG5vdCBhcHBseSB0byBvdXIgY29udGV4dHVhbCByb3V0ZS4gIFdlIGFkZCBpdCBiYWNrIGJhc2VkXG4gICAgLy8gb24gbWF0Y2gucm91dGUuaW5kZXggYmVsb3dcbiAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXRoLnNlYXJjaCk7XG4gICAgbGV0IGluZGV4VmFsdWVzID0gcGFyYW1zLmdldEFsbChcImluZGV4XCIpO1xuICAgIGxldCBoYXNOYWtlZEluZGV4UGFyYW0gPSBpbmRleFZhbHVlcy5zb21lKHYgPT4gdiA9PT0gXCJcIik7XG4gICAgaWYgKGhhc05ha2VkSW5kZXhQYXJhbSkge1xuICAgICAgcGFyYW1zLmRlbGV0ZShcImluZGV4XCIpO1xuICAgICAgaW5kZXhWYWx1ZXMuZmlsdGVyKHYgPT4gdikuZm9yRWFjaCh2ID0+IHBhcmFtcy5hcHBlbmQoXCJpbmRleFwiLCB2KSk7XG4gICAgICBsZXQgcXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgIHBhdGguc2VhcmNoID0gcXMgPyBcIj9cIiArIHFzIDogXCJcIjtcbiAgICB9XG4gIH1cbiAgaWYgKCghYWN0aW9uIHx8IGFjdGlvbiA9PT0gXCIuXCIpICYmIG1hdGNoLnJvdXRlLmluZGV4KSB7XG4gICAgcGF0aC5zZWFyY2ggPSBwYXRoLnNlYXJjaCA/IHBhdGguc2VhcmNoLnJlcGxhY2UoL15cXD8vLCBcIj9pbmRleCZcIikgOiBcIj9pbmRleFwiO1xuICB9XG4gIC8vIElmIHdlJ3JlIG9wZXJhdGluZyB3aXRoaW4gYSBiYXNlbmFtZSwgcHJlcGVuZCBpdCB0byB0aGUgcGF0aG5hbWUgcHJpb3JcbiAgLy8gdG8gY3JlYXRpbmcgdGhlIGZvcm0gYWN0aW9uLiAgSWYgdGhpcyBpcyBhIHJvb3QgbmF2aWdhdGlvbiwgdGhlbiBqdXN0IHVzZVxuICAvLyB0aGUgcmF3IGJhc2VuYW1lIHdoaWNoIGFsbG93cyB0aGUgYmFzZW5hbWUgdG8gaGF2ZSBmdWxsIGNvbnRyb2wgb3ZlciB0aGVcbiAgLy8gcHJlc2VuY2Ugb2YgYSB0cmFpbGluZyBzbGFzaCBvbiByb290IGFjdGlvbnNcbiAgaWYgKGJhc2VuYW1lICE9PSBcIi9cIikge1xuICAgIHBhdGgucGF0aG5hbWUgPSBwYXRoLnBhdGhuYW1lID09PSBcIi9cIiA/IGJhc2VuYW1lIDogam9pblBhdGhzKFtiYXNlbmFtZSwgcGF0aC5wYXRobmFtZV0pO1xuICB9XG4gIHJldHVybiBjcmVhdGVQYXRoKHBhdGgpO1xufVxuLy8gVE9ETzogKHY3KSBDaGFuZ2UgdGhlIHVzZUZldGNoZXIgZ2VuZXJpYyBkZWZhdWx0IGZyb20gYGFueWAgdG8gYHVua25vd25gXG4vKipcbiAqIEludGVyYWN0cyB3aXRoIHJvdXRlIGxvYWRlcnMgYW5kIGFjdGlvbnMgd2l0aG91dCBjYXVzaW5nIGEgbmF2aWdhdGlvbi4gR3JlYXRcbiAqIGZvciBhbnkgaW50ZXJhY3Rpb24gdGhhdCBzdGF5cyBvbiB0aGUgc2FtZSBwYWdlLlxuICovXG5mdW5jdGlvbiB1c2VGZXRjaGVyKF90ZW1wMykge1xuICB2YXIgX3JvdXRlJG1hdGNoZXM7XG4gIGxldCB7XG4gICAga2V5XG4gIH0gPSBfdGVtcDMgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAzO1xuICBsZXQge1xuICAgIHJvdXRlclxuICB9ID0gdXNlRGF0YVJvdXRlckNvbnRleHQoRGF0YVJvdXRlckhvb2suVXNlRmV0Y2hlcik7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZUZldGNoZXIpO1xuICBsZXQgZmV0Y2hlckRhdGEgPSBSZWFjdC51c2VDb250ZXh0KEZldGNoZXJzQ29udGV4dCk7XG4gIGxldCByb3V0ZSA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX1JvdXRlQ29udGV4dCk7XG4gIGxldCByb3V0ZUlkID0gKF9yb3V0ZSRtYXRjaGVzID0gcm91dGUubWF0Y2hlc1tyb3V0ZS5tYXRjaGVzLmxlbmd0aCAtIDFdKSA9PSBudWxsID8gdm9pZCAwIDogX3JvdXRlJG1hdGNoZXMucm91dGUuaWQ7XG4gICFmZXRjaGVyRGF0YSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwidXNlRmV0Y2hlciBtdXN0IGJlIHVzZWQgaW5zaWRlIGEgRmV0Y2hlcnNDb250ZXh0XCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICFyb3V0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwidXNlRmV0Y2hlciBtdXN0IGJlIHVzZWQgaW5zaWRlIGEgUm91dGVDb250ZXh0XCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICEocm91dGVJZCAhPSBudWxsKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwidXNlRmV0Y2hlciBjYW4gb25seSBiZSB1c2VkIG9uIHJvdXRlcyB0aGF0IGNvbnRhaW4gYSB1bmlxdWUgXFxcImlkXFxcIlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAvLyBGZXRjaGVyIGtleSBoYW5kbGluZ1xuICAvLyBPSyB0byBjYWxsIGNvbmRpdGlvbmFsbHkgdG8gZmVhdHVyZSBkZXRlY3QgYHVzZUlkYFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgbGV0IGRlZmF1bHRLZXkgPSB1c2VJZEltcGwgPyB1c2VJZEltcGwoKSA6IFwiXCI7XG4gIGxldCBbZmV0Y2hlcktleSwgc2V0RmV0Y2hlcktleV0gPSBSZWFjdC51c2VTdGF0ZShrZXkgfHwgZGVmYXVsdEtleSk7XG4gIGlmIChrZXkgJiYga2V5ICE9PSBmZXRjaGVyS2V5KSB7XG4gICAgc2V0RmV0Y2hlcktleShrZXkpO1xuICB9IGVsc2UgaWYgKCFmZXRjaGVyS2V5KSB7XG4gICAgLy8gV2Ugd2lsbCBvbmx5IGZhbGwgdGhyb3VnaCBoZXJlIHdoZW4gYHVzZUlkYCBpcyBub3QgYXZhaWxhYmxlXG4gICAgc2V0RmV0Y2hlcktleShnZXRVbmlxdWVGZXRjaGVySWQoKSk7XG4gIH1cbiAgLy8gUmVnaXN0cmF0aW9uL2NsZWFudXBcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByb3V0ZXIuZ2V0RmV0Y2hlcihmZXRjaGVyS2V5KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgLy8gVGVsbCB0aGUgcm91dGVyIHdlJ3ZlIHVubW91bnRlZCAtIGlmIHY3X2ZldGNoZXJQZXJzaXN0IGlzIGVuYWJsZWQgdGhpc1xuICAgICAgLy8gd2lsbCBub3QgZGVsZXRlIGltbWVkaWF0ZWx5IGJ1dCBpbnN0ZWFkIHF1ZXVlIHVwIGEgZGVsZXRlIGFmdGVyIHRoZVxuICAgICAgLy8gZmV0Y2hlciByZXR1cm5zIHRvIGFuIGBpZGxlYCBzdGF0ZVxuICAgICAgcm91dGVyLmRlbGV0ZUZldGNoZXIoZmV0Y2hlcktleSk7XG4gICAgfTtcbiAgfSwgW3JvdXRlciwgZmV0Y2hlcktleV0pO1xuICAvLyBGZXRjaGVyIGFkZGl0aW9uc1xuICBsZXQgbG9hZCA9IFJlYWN0LnVzZUNhbGxiYWNrKChocmVmLCBvcHRzKSA9PiB7XG4gICAgIXJvdXRlSWQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcIk5vIHJvdXRlSWQgYXZhaWxhYmxlIGZvciBmZXRjaGVyLmxvYWQoKVwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIHJvdXRlci5mZXRjaChmZXRjaGVyS2V5LCByb3V0ZUlkLCBocmVmLCBvcHRzKTtcbiAgfSwgW2ZldGNoZXJLZXksIHJvdXRlSWQsIHJvdXRlcl0pO1xuICBsZXQgc3VibWl0SW1wbCA9IHVzZVN1Ym1pdCgpO1xuICBsZXQgc3VibWl0ID0gUmVhY3QudXNlQ2FsbGJhY2soKHRhcmdldCwgb3B0cykgPT4ge1xuICAgIHN1Ym1pdEltcGwodGFyZ2V0LCBfZXh0ZW5kcyh7fSwgb3B0cywge1xuICAgICAgbmF2aWdhdGU6IGZhbHNlLFxuICAgICAgZmV0Y2hlcktleVxuICAgIH0pKTtcbiAgfSwgW2ZldGNoZXJLZXksIHN1Ym1pdEltcGxdKTtcbiAgbGV0IEZldGNoZXJGb3JtID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IEZldGNoZXJGb3JtID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgbmF2aWdhdGU6IGZhbHNlLFxuICAgICAgICBmZXRjaGVyS2V5OiBmZXRjaGVyS2V5LFxuICAgICAgICByZWY6IHJlZlxuICAgICAgfSkpO1xuICAgIH0pO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIEZldGNoZXJGb3JtLmRpc3BsYXlOYW1lID0gXCJmZXRjaGVyLkZvcm1cIjtcbiAgICB9XG4gICAgcmV0dXJuIEZldGNoZXJGb3JtO1xuICB9LCBbZmV0Y2hlcktleV0pO1xuICAvLyBFeHBvc2VkIEZldGNoZXJXaXRoQ29tcG9uZW50c1xuICBsZXQgZmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChmZXRjaGVyS2V5KSB8fCBJRExFX0ZFVENIRVI7XG4gIGxldCBkYXRhID0gZmV0Y2hlckRhdGEuZ2V0KGZldGNoZXJLZXkpO1xuICBsZXQgZmV0Y2hlcldpdGhDb21wb25lbnRzID0gUmVhY3QudXNlTWVtbygoKSA9PiBfZXh0ZW5kcyh7XG4gICAgRm9ybTogRmV0Y2hlckZvcm0sXG4gICAgc3VibWl0LFxuICAgIGxvYWRcbiAgfSwgZmV0Y2hlciwge1xuICAgIGRhdGFcbiAgfSksIFtGZXRjaGVyRm9ybSwgc3VibWl0LCBsb2FkLCBmZXRjaGVyLCBkYXRhXSk7XG4gIHJldHVybiBmZXRjaGVyV2l0aENvbXBvbmVudHM7XG59XG4vKipcbiAqIFByb3ZpZGVzIGFsbCBmZXRjaGVycyBjdXJyZW50bHkgb24gdGhlIHBhZ2UuIFVzZWZ1bCBmb3IgbGF5b3V0cyBhbmQgcGFyZW50XG4gKiByb3V0ZXMgdGhhdCBuZWVkIHRvIHByb3ZpZGUgcGVuZGluZy9vcHRpbWlzdGljIFVJIHJlZ2FyZGluZyB0aGUgZmV0Y2guXG4gKi9cbmZ1bmN0aW9uIHVzZUZldGNoZXJzKCkge1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VGZXRjaGVycyk7XG4gIHJldHVybiBBcnJheS5mcm9tKHN0YXRlLmZldGNoZXJzLmVudHJpZXMoKSkubWFwKF9yZWYxMSA9PiB7XG4gICAgbGV0IFtrZXksIGZldGNoZXJdID0gX3JlZjExO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgZmV0Y2hlciwge1xuICAgICAga2V5XG4gICAgfSk7XG4gIH0pO1xufVxuY29uc3QgU0NST0xMX1JFU1RPUkFUSU9OX1NUT1JBR0VfS0VZID0gXCJyZWFjdC1yb3V0ZXItc2Nyb2xsLXBvc2l0aW9uc1wiO1xubGV0IHNhdmVkU2Nyb2xsUG9zaXRpb25zID0ge307XG4vKipcbiAqIFdoZW4gcmVuZGVyZWQgaW5zaWRlIGEgUm91dGVyUHJvdmlkZXIsIHdpbGwgcmVzdG9yZSBzY3JvbGwgcG9zaXRpb25zIG9uIG5hdmlnYXRpb25zXG4gKi9cbmZ1bmN0aW9uIHVzZVNjcm9sbFJlc3RvcmF0aW9uKF90ZW1wNCkge1xuICBsZXQge1xuICAgIGdldEtleSxcbiAgICBzdG9yYWdlS2V5XG4gIH0gPSBfdGVtcDQgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA0O1xuICBsZXQge1xuICAgIHJvdXRlclxuICB9ID0gdXNlRGF0YVJvdXRlckNvbnRleHQoRGF0YVJvdXRlckhvb2suVXNlU2Nyb2xsUmVzdG9yYXRpb24pO1xuICBsZXQge1xuICAgIHJlc3RvcmVTY3JvbGxQb3NpdGlvbixcbiAgICBwcmV2ZW50U2Nyb2xsUmVzZXRcbiAgfSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZVNjcm9sbFJlc3RvcmF0aW9uKTtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZVxuICB9ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgbWF0Y2hlcyA9IHVzZU1hdGNoZXMoKTtcbiAgbGV0IG5hdmlnYXRpb24gPSB1c2VOYXZpZ2F0aW9uKCk7XG4gIC8vIFRyaWdnZXIgbWFudWFsIHNjcm9sbCByZXN0b3JhdGlvbiB3aGlsZSB3ZSdyZSBhY3RpdmVcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwibWFudWFsXCI7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJhdXRvXCI7XG4gICAgfTtcbiAgfSwgW10pO1xuICAvLyBTYXZlIHBvc2l0aW9ucyBvbiBwYWdlaGlkZVxuICB1c2VQYWdlSGlkZShSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKG5hdmlnYXRpb24uc3RhdGUgPT09IFwiaWRsZVwiKSB7XG4gICAgICBsZXQga2V5ID0gKGdldEtleSA/IGdldEtleShsb2NhdGlvbiwgbWF0Y2hlcykgOiBudWxsKSB8fCBsb2NhdGlvbi5rZXk7XG4gICAgICBzYXZlZFNjcm9sbFBvc2l0aW9uc1trZXldID0gd2luZG93LnNjcm9sbFk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXkgfHwgU0NST0xMX1JFU1RPUkFUSU9OX1NUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShzYXZlZFNjcm9sbFBvc2l0aW9ucykpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhmYWxzZSwgXCJGYWlsZWQgdG8gc2F2ZSBzY3JvbGwgcG9zaXRpb25zIGluIHNlc3Npb25TdG9yYWdlLCA8U2Nyb2xsUmVzdG9yYXRpb24gLz4gd2lsbCBub3Qgd29yayBwcm9wZXJseSAoXCIgKyBlcnJvciArIFwiKS5cIikgOiB2b2lkIDA7XG4gICAgfVxuICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJhdXRvXCI7XG4gIH0sIFtzdG9yYWdlS2V5LCBnZXRLZXksIG5hdmlnYXRpb24uc3RhdGUsIGxvY2F0aW9uLCBtYXRjaGVzXSkpO1xuICAvLyBSZWFkIGluIGFueSBzYXZlZCBzY3JvbGwgbG9jYXRpb25zXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHNlc3Npb25Qb3NpdGlvbnMgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkgfHwgU0NST0xMX1JFU1RPUkFUSU9OX1NUT1JBR0VfS0VZKTtcbiAgICAgICAgaWYgKHNlc3Npb25Qb3NpdGlvbnMpIHtcbiAgICAgICAgICBzYXZlZFNjcm9sbFBvc2l0aW9ucyA9IEpTT04ucGFyc2Uoc2Vzc2lvblBvc2l0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gbm8tb3AsIHVzZSBkZWZhdWx0IGVtcHR5IG9iamVjdFxuICAgICAgfVxuICAgIH0sIFtzdG9yYWdlS2V5XSk7XG4gICAgLy8gRW5hYmxlIHNjcm9sbCByZXN0b3JhdGlvbiBpbiB0aGUgcm91dGVyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgIGxldCBnZXRLZXlXaXRob3V0QmFzZW5hbWUgPSBnZXRLZXkgJiYgYmFzZW5hbWUgIT09IFwiL1wiID8gKGxvY2F0aW9uLCBtYXRjaGVzKSA9PiBnZXRLZXkoIC8vIFN0cmlwIHRoZSBiYXNlbmFtZSB0byBtYXRjaCB1c2VMb2NhdGlvbigpXG4gICAgICBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHtcbiAgICAgICAgcGF0aG5hbWU6IHN0cmlwQmFzZW5hbWUobG9jYXRpb24ucGF0aG5hbWUsIGJhc2VuYW1lKSB8fCBsb2NhdGlvbi5wYXRobmFtZVxuICAgICAgfSksIG1hdGNoZXMpIDogZ2V0S2V5O1xuICAgICAgbGV0IGRpc2FibGVTY3JvbGxSZXN0b3JhdGlvbiA9IHJvdXRlciA9PSBudWxsID8gdm9pZCAwIDogcm91dGVyLmVuYWJsZVNjcm9sbFJlc3RvcmF0aW9uKHNhdmVkU2Nyb2xsUG9zaXRpb25zLCAoKSA9PiB3aW5kb3cuc2Nyb2xsWSwgZ2V0S2V5V2l0aG91dEJhc2VuYW1lKTtcbiAgICAgIHJldHVybiAoKSA9PiBkaXNhYmxlU2Nyb2xsUmVzdG9yYXRpb24gJiYgZGlzYWJsZVNjcm9sbFJlc3RvcmF0aW9uKCk7XG4gICAgfSwgW3JvdXRlciwgYmFzZW5hbWUsIGdldEtleV0pO1xuICAgIC8vIFJlc3RvcmUgc2Nyb2xsaW5nIHdoZW4gc3RhdGUucmVzdG9yZVNjcm9sbFBvc2l0aW9uIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgLy8gRXhwbGljaXQgZmFsc2UgbWVhbnMgZG9uJ3QgZG8gYW55dGhpbmcgKHVzZWQgZm9yIHN1Ym1pc3Npb25zKVxuICAgICAgaWYgKHJlc3RvcmVTY3JvbGxQb3NpdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gYmVlbiBoZXJlIGJlZm9yZSwgc2Nyb2xsIHRvIGl0XG4gICAgICBpZiAodHlwZW9mIHJlc3RvcmVTY3JvbGxQb3NpdGlvbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcmVzdG9yZVNjcm9sbFBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gdHJ5IHRvIHNjcm9sbCB0byB0aGUgaGFzaFxuICAgICAgaWYgKGxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVjb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLmhhc2guc2xpY2UoMSkpKTtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgZWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIERvbid0IHJlc2V0IGlmIHRoaXMgbmF2aWdhdGlvbiBvcHRlZCBvdXRcbiAgICAgIGlmIChwcmV2ZW50U2Nyb2xsUmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gb3RoZXJ3aXNlIGdvIHRvIHRoZSB0b3Agb24gbmV3IGxvY2F0aW9uc1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIH0sIFtsb2NhdGlvbiwgcmVzdG9yZVNjcm9sbFBvc2l0aW9uLCBwcmV2ZW50U2Nyb2xsUmVzZXRdKTtcbiAgfVxufVxuLyoqXG4gKiBTZXR1cCBhIGNhbGxiYWNrIHRvIGJlIGZpcmVkIG9uIHRoZSB3aW5kb3cncyBgYmVmb3JldW5sb2FkYCBldmVudC4gVGhpcyBpc1xuICogdXNlZnVsIGZvciBzYXZpbmcgc29tZSBkYXRhIHRvIGB3aW5kb3cubG9jYWxTdG9yYWdlYCBqdXN0IGJlZm9yZSB0aGUgcGFnZVxuICogcmVmcmVzaGVzLlxuICpcbiAqIE5vdGU6IFRoZSBgY2FsbGJhY2tgIGFyZ3VtZW50IHNob3VsZCBiZSBhIGZ1bmN0aW9uIGNyZWF0ZWQgd2l0aFxuICogYFJlYWN0LnVzZUNhbGxiYWNrKClgLlxuICovXG5mdW5jdGlvbiB1c2VCZWZvcmVVbmxvYWQoY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgbGV0IHtcbiAgICBjYXB0dXJlXG4gIH0gPSBvcHRpb25zIHx8IHt9O1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBvcHRzID0gY2FwdHVyZSAhPSBudWxsID8ge1xuICAgICAgY2FwdHVyZVxuICAgIH0gOiB1bmRlZmluZWQ7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgY2FsbGJhY2ssIG9wdHMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBjYWxsYmFjaywgb3B0cyk7XG4gICAgfTtcbiAgfSwgW2NhbGxiYWNrLCBjYXB0dXJlXSk7XG59XG4vKipcbiAqIFNldHVwIGEgY2FsbGJhY2sgdG8gYmUgZmlyZWQgb24gdGhlIHdpbmRvdydzIGBwYWdlaGlkZWAgZXZlbnQuIFRoaXMgaXNcbiAqIHVzZWZ1bCBmb3Igc2F2aW5nIHNvbWUgZGF0YSB0byBgd2luZG93LmxvY2FsU3RvcmFnZWAganVzdCBiZWZvcmUgdGhlIHBhZ2VcbiAqIHJlZnJlc2hlcy4gIFRoaXMgZXZlbnQgaXMgYmV0dGVyIHN1cHBvcnRlZCB0aGFuIGJlZm9yZXVubG9hZCBhY3Jvc3MgYnJvd3NlcnMuXG4gKlxuICogTm90ZTogVGhlIGBjYWxsYmFja2AgYXJndW1lbnQgc2hvdWxkIGJlIGEgZnVuY3Rpb24gY3JlYXRlZCB3aXRoXG4gKiBgUmVhY3QudXNlQ2FsbGJhY2soKWAuXG4gKi9cbmZ1bmN0aW9uIHVzZVBhZ2VIaWRlKGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIGxldCB7XG4gICAgY2FwdHVyZVxuICB9ID0gb3B0aW9ucyB8fCB7fTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgb3B0cyA9IGNhcHR1cmUgIT0gbnVsbCA/IHtcbiAgICAgIGNhcHR1cmVcbiAgICB9IDogdW5kZWZpbmVkO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZWhpZGVcIiwgY2FsbGJhY2ssIG9wdHMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsIGNhbGxiYWNrLCBvcHRzKTtcbiAgICB9O1xuICB9LCBbY2FsbGJhY2ssIGNhcHR1cmVdKTtcbn1cbi8qKlxuICogV3JhcHBlciBhcm91bmQgdXNlQmxvY2tlciB0byBzaG93IGEgd2luZG93LmNvbmZpcm0gcHJvbXB0IHRvIHVzZXJzIGluc3RlYWRcbiAqIG9mIGJ1aWxkaW5nIGEgY3VzdG9tIFVJIHdpdGggdXNlQmxvY2tlci5cbiAqXG4gKiBXYXJuaW5nOiBUaGlzIGhhcyAqYSBsb3Qgb2Ygcm91Z2ggZWRnZXMqIGFuZCBiZWhhdmVzIHZlcnkgZGlmZmVyZW50bHkgKGFuZFxuICogdmVyeSBpbmNvcnJlY3RseSBpbiBzb21lIGNhc2VzKSBhY3Jvc3MgYnJvd3NlcnMgaWYgdXNlciBjbGljayBhZGRpdGlvblxuICogYmFjay9mb3J3YXJkIG5hdmlnYXRpb25zIHdoaWxlIHRoZSBjb25maXJtIGlzIG9wZW4uICBVc2UgYXQgeW91ciBvd24gcmlzay5cbiAqL1xuZnVuY3Rpb24gdXNlUHJvbXB0KF9yZWYxMikge1xuICBsZXQge1xuICAgIHdoZW4sXG4gICAgbWVzc2FnZVxuICB9ID0gX3JlZjEyO1xuICBsZXQgYmxvY2tlciA9IHVzZUJsb2NrZXIod2hlbik7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGJsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiKSB7XG4gICAgICBsZXQgcHJvY2VlZCA9IHdpbmRvdy5jb25maXJtKG1lc3NhZ2UpO1xuICAgICAgaWYgKHByb2NlZWQpIHtcbiAgICAgICAgLy8gVGhpcyB0aW1lb3V0IGlzIG5lZWRlZCB0byBhdm9pZCBhIHdlaXJkIFwicmFjZVwiIG9uIFBPUCBuYXZpZ2F0aW9uc1xuICAgICAgICAvLyBiZXR3ZWVuIHRoZSBgd2luZG93Lmhpc3RvcnlgIHJldmVydCBuYXZpZ2F0aW9uIGFuZCB0aGUgcmVzdWx0IG9mXG4gICAgICAgIC8vIGB3aW5kb3cuY29uZmlybWBcbiAgICAgICAgc2V0VGltZW91dChibG9ja2VyLnByb2NlZWQsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmxvY2tlci5yZXNldCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2Jsb2NrZXIsIG1lc3NhZ2VdKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgJiYgIXdoZW4pIHtcbiAgICAgIGJsb2NrZXIucmVzZXQoKTtcbiAgICB9XG4gIH0sIFtibG9ja2VyLCB3aGVuXSk7XG59XG4vKipcbiAqIFJldHVybiBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGVyZSBpcyBhbiBhY3RpdmUgdmlldyB0cmFuc2l0aW9uIHRvIHRoZVxuICogZ2l2ZW4gaHJlZi4gIFlvdSBjYW4gdXNlIHRoaXMgdmFsdWUgdG8gcmVuZGVyIENTUyBjbGFzc2VzIG9yIHZpZXdUcmFuc2l0aW9uTmFtZVxuICogc3R5bGVzIG9udG8geW91ciBlbGVtZW50c1xuICpcbiAqIEBwYXJhbSBocmVmIFRoZSBkZXN0aW5hdGlvbiBocmVmXG4gKiBAcGFyYW0gW29wdHMucmVsYXRpdmVdIFJlbGF0aXZlIHJvdXRpbmcgdHlwZSAoXCJyb3V0ZVwiIHwgXCJwYXRoXCIpXG4gKi9cbmZ1bmN0aW9uIHVzZVZpZXdUcmFuc2l0aW9uU3RhdGUodG8sIG9wdHMpIHtcbiAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuICBsZXQgdnRDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChWaWV3VHJhbnNpdGlvbkNvbnRleHQpO1xuICAhKHZ0Q29udGV4dCAhPSBudWxsKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiYHVzZVZpZXdUcmFuc2l0aW9uU3RhdGVgIG11c3QgYmUgdXNlZCB3aXRoaW4gYHJlYWN0LXJvdXRlci1kb21gJ3MgYFJvdXRlclByb3ZpZGVyYC4gIFwiICsgXCJEaWQgeW91IGFjY2lkZW50YWxseSBpbXBvcnQgYFJvdXRlclByb3ZpZGVyYCBmcm9tIGByZWFjdC1yb3V0ZXJgP1wiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQge1xuICAgIGJhc2VuYW1lXG4gIH0gPSB1c2VEYXRhUm91dGVyQ29udGV4dChEYXRhUm91dGVySG9vay51c2VWaWV3VHJhbnNpdGlvblN0YXRlKTtcbiAgbGV0IHBhdGggPSB1c2VSZXNvbHZlZFBhdGgodG8sIHtcbiAgICByZWxhdGl2ZTogb3B0cy5yZWxhdGl2ZVxuICB9KTtcbiAgaWYgKCF2dENvbnRleHQuaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGxldCBjdXJyZW50UGF0aCA9IHN0cmlwQmFzZW5hbWUodnRDb250ZXh0LmN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZSwgYmFzZW5hbWUpIHx8IHZ0Q29udGV4dC5jdXJyZW50TG9jYXRpb24ucGF0aG5hbWU7XG4gIGxldCBuZXh0UGF0aCA9IHN0cmlwQmFzZW5hbWUodnRDb250ZXh0Lm5leHRMb2NhdGlvbi5wYXRobmFtZSwgYmFzZW5hbWUpIHx8IHZ0Q29udGV4dC5uZXh0TG9jYXRpb24ucGF0aG5hbWU7XG4gIC8vIFRyYW5zaXRpb24gaXMgYWN0aXZlIGlmIHdlJ3JlIGdvaW5nIHRvIG9yIGNvbWluZyBmcm9tIHRoZSBpbmRpY2F0ZWRcbiAgLy8gZGVzdGluYXRpb24uICBUaGlzIGVuc3VyZXMgdGhhdCBvdGhlciBQVVNIIG5hdmlnYXRpb25zIHRoYXQgcmV2ZXJzZVxuICAvLyBhbiBpbmRpY2F0ZWQgdHJhbnNpdGlvbiBhcHBseS4gIEkuZS4sIG9uIHRoZSBsaXN0IHZpZXcgeW91IGhhdmU6XG4gIC8vXG4gIC8vICAgPE5hdkxpbmsgdG89XCIvZGV0YWlscy8xXCIgdmlld1RyYW5zaXRpb24+XG4gIC8vXG4gIC8vIElmIHlvdSBjbGljayB0aGUgYnJlYWRjcnVtYiBiYWNrIHRvIHRoZSBsaXN0IHZpZXc6XG4gIC8vXG4gIC8vICAgPE5hdkxpbmsgdG89XCIvbGlzdFwiIHZpZXdUcmFuc2l0aW9uPlxuICAvL1xuICAvLyBXZSBzaG91bGQgYXBwbHkgdGhlIHRyYW5zaXRpb24gYmVjYXVzZSBpdCdzIGluZGljYXRlZCBhcyBhY3RpdmUgZ29pbmdcbiAgLy8gZnJvbSAvbGlzdCAtPiAvZGV0YWlscy8xIGFuZCB0aGVyZWZvcmUgc2hvdWxkIGJlIGFjdGl2ZSBvbiB0aGUgcmV2ZXJzZVxuICAvLyAoZXZlbiB0aG91Z2ggdGhpcyBpc24ndCBzdHJpY3RseSBhIFBPUCByZXZlcnNlKVxuICByZXR1cm4gbWF0Y2hQYXRoKHBhdGgucGF0aG5hbWUsIG5leHRQYXRoKSAhPSBudWxsIHx8IG1hdGNoUGF0aChwYXRoLnBhdGhuYW1lLCBjdXJyZW50UGF0aCkgIT0gbnVsbDtcbn1cbi8vI2VuZHJlZ2lvblxuXG5leHBvcnQgeyBCcm93c2VyUm91dGVyLCBGb3JtLCBIYXNoUm91dGVyLCBMaW5rLCBOYXZMaW5rLCBSb3V0ZXJQcm92aWRlciwgU2Nyb2xsUmVzdG9yYXRpb24sIEZldGNoZXJzQ29udGV4dCBhcyBVTlNBRkVfRmV0Y2hlcnNDb250ZXh0LCBWaWV3VHJhbnNpdGlvbkNvbnRleHQgYXMgVU5TQUZFX1ZpZXdUcmFuc2l0aW9uQ29udGV4dCwgdXNlU2Nyb2xsUmVzdG9yYXRpb24gYXMgVU5TQUZFX3VzZVNjcm9sbFJlc3RvcmF0aW9uLCBjcmVhdGVCcm93c2VyUm91dGVyLCBjcmVhdGVIYXNoUm91dGVyLCBjcmVhdGVTZWFyY2hQYXJhbXMsIEhpc3RvcnlSb3V0ZXIgYXMgdW5zdGFibGVfSGlzdG9yeVJvdXRlciwgdXNlUHJvbXB0IGFzIHVuc3RhYmxlX3VzZVByb21wdCwgdXNlQmVmb3JlVW5sb2FkLCB1c2VGZXRjaGVyLCB1c2VGZXRjaGVycywgdXNlRm9ybUFjdGlvbiwgdXNlTGlua0NsaWNrSGFuZGxlciwgdXNlU2VhcmNoUGFyYW1zLCB1c2VTdWJtaXQsIHVzZVZpZXdUcmFuc2l0aW9uU3RhdGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiLyoqXG4gKiBSZWFjdCBSb3V0ZXIgdjYuMzAuMFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBVTlNBRkVfaW52YXJpYW50LCBqb2luUGF0aHMsIG1hdGNoUGF0aCwgVU5TQUZFX2RlY29kZVBhdGgsIFVOU0FGRV9nZXRSZXNvbHZlVG9NYXRjaGVzLCBVTlNBRkVfd2FybmluZywgcmVzb2x2ZVRvLCBwYXJzZVBhdGgsIG1hdGNoUm91dGVzLCBBY3Rpb24sIFVOU0FGRV9jb252ZXJ0Um91dGVNYXRjaFRvVWlNYXRjaCwgc3RyaXBCYXNlbmFtZSwgSURMRV9CTE9DS0VSLCBpc1JvdXRlRXJyb3JSZXNwb25zZSwgY3JlYXRlTWVtb3J5SGlzdG9yeSwgQWJvcnRlZERlZmVycmVkRXJyb3IsIGNyZWF0ZVJvdXRlciB9IGZyb20gJ0ByZW1peC1ydW4vcm91dGVyJztcbmV4cG9ydCB7IEFib3J0ZWREZWZlcnJlZEVycm9yLCBBY3Rpb24gYXMgTmF2aWdhdGlvblR5cGUsIGNyZWF0ZVBhdGgsIGRlZmVyLCBnZW5lcmF0ZVBhdGgsIGlzUm91dGVFcnJvclJlc3BvbnNlLCBqc29uLCBtYXRjaFBhdGgsIG1hdGNoUm91dGVzLCBwYXJzZVBhdGgsIHJlZGlyZWN0LCByZWRpcmVjdERvY3VtZW50LCByZXBsYWNlLCByZXNvbHZlUGF0aCB9IGZyb20gJ0ByZW1peC1ydW4vcm91dGVyJztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbi8vIENyZWF0ZSByZWFjdC1zcGVjaWZpYyB0eXBlcyBmcm9tIHRoZSBhZ25vc3RpYyB0eXBlcyBpbiBAcmVtaXgtcnVuL3JvdXRlciB0b1xuLy8gZXhwb3J0IGZyb20gcmVhY3Qtcm91dGVyXG5jb25zdCBEYXRhUm91dGVyQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBEYXRhUm91dGVyQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiRGF0YVJvdXRlclwiO1xufVxuY29uc3QgRGF0YVJvdXRlclN0YXRlQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBEYXRhUm91dGVyU3RhdGVDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJEYXRhUm91dGVyU3RhdGVcIjtcbn1cbmNvbnN0IEF3YWl0Q29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBBd2FpdENvbnRleHQuZGlzcGxheU5hbWUgPSBcIkF3YWl0XCI7XG59XG5cbi8qKlxuICogQSBOYXZpZ2F0b3IgaXMgYSBcImxvY2F0aW9uIGNoYW5nZXJcIjsgaXQncyBob3cgeW91IGdldCB0byBkaWZmZXJlbnQgbG9jYXRpb25zLlxuICpcbiAqIEV2ZXJ5IGhpc3RvcnkgaW5zdGFuY2UgY29uZm9ybXMgdG8gdGhlIE5hdmlnYXRvciBpbnRlcmZhY2UsIGJ1dCB0aGVcbiAqIGRpc3RpbmN0aW9uIGlzIHVzZWZ1bCBwcmltYXJpbHkgd2hlbiBpdCBjb21lcyB0byB0aGUgbG93LWxldmVsIGA8Um91dGVyPmAgQVBJXG4gKiB3aGVyZSBib3RoIHRoZSBsb2NhdGlvbiBhbmQgYSBuYXZpZ2F0b3IgbXVzdCBiZSBwcm92aWRlZCBzZXBhcmF0ZWx5IGluIG9yZGVyXG4gKiB0byBhdm9pZCBcInRlYXJpbmdcIiB0aGF0IG1heSBvY2N1ciBpbiBhIHN1c3BlbnNlLWVuYWJsZWQgYXBwIGlmIHRoZSBhY3Rpb25cbiAqIGFuZC9vciBsb2NhdGlvbiB3ZXJlIHRvIGJlIHJlYWQgZGlyZWN0bHkgZnJvbSB0aGUgaGlzdG9yeSBpbnN0YW5jZS5cbiAqL1xuXG5jb25zdCBOYXZpZ2F0aW9uQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBOYXZpZ2F0aW9uQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiTmF2aWdhdGlvblwiO1xufVxuY29uc3QgTG9jYXRpb25Db250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIExvY2F0aW9uQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiTG9jYXRpb25cIjtcbn1cbmNvbnN0IFJvdXRlQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgb3V0bGV0OiBudWxsLFxuICBtYXRjaGVzOiBbXSxcbiAgaXNEYXRhUm91dGU6IGZhbHNlXG59KTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgUm91dGVDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJSb3V0ZVwiO1xufVxuY29uc3QgUm91dGVFcnJvckNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgUm91dGVFcnJvckNvbnRleHQuZGlzcGxheU5hbWUgPSBcIlJvdXRlRXJyb3JcIjtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmdWxsIGhyZWYgZm9yIHRoZSBnaXZlbiBcInRvXCIgdmFsdWUuIFRoaXMgaXMgdXNlZnVsIGZvciBidWlsZGluZ1xuICogY3VzdG9tIGxpbmtzIHRoYXQgYXJlIGFsc28gYWNjZXNzaWJsZSBhbmQgcHJlc2VydmUgcmlnaHQtY2xpY2sgYmVoYXZpb3IuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS92Ni9ob29rcy91c2UtaHJlZlxuICovXG5mdW5jdGlvbiB1c2VIcmVmKHRvLCBfdGVtcCkge1xuICBsZXQge1xuICAgIHJlbGF0aXZlXG4gIH0gPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2YgdGhlXG4gIC8vIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCJ1c2VIcmVmKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBuYXZpZ2F0b3JcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQge1xuICAgIGhhc2gsXG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoXG4gIH0gPSB1c2VSZXNvbHZlZFBhdGgodG8sIHtcbiAgICByZWxhdGl2ZVxuICB9KTtcbiAgbGV0IGpvaW5lZFBhdGhuYW1lID0gcGF0aG5hbWU7XG5cbiAgLy8gSWYgd2UncmUgb3BlcmF0aW5nIHdpdGhpbiBhIGJhc2VuYW1lLCBwcmVwZW5kIGl0IHRvIHRoZSBwYXRobmFtZSBwcmlvclxuICAvLyB0byBjcmVhdGluZyB0aGUgaHJlZi4gIElmIHRoaXMgaXMgYSByb290IG5hdmlnYXRpb24sIHRoZW4ganVzdCB1c2UgdGhlIHJhd1xuICAvLyBiYXNlbmFtZSB3aGljaCBhbGxvd3MgdGhlIGJhc2VuYW1lIHRvIGhhdmUgZnVsbCBjb250cm9sIG92ZXIgdGhlIHByZXNlbmNlXG4gIC8vIG9mIGEgdHJhaWxpbmcgc2xhc2ggb24gcm9vdCBsaW5rc1xuICBpZiAoYmFzZW5hbWUgIT09IFwiL1wiKSB7XG4gICAgam9pbmVkUGF0aG5hbWUgPSBwYXRobmFtZSA9PT0gXCIvXCIgPyBiYXNlbmFtZSA6IGpvaW5QYXRocyhbYmFzZW5hbWUsIHBhdGhuYW1lXSk7XG4gIH1cbiAgcmV0dXJuIG5hdmlnYXRvci5jcmVhdGVIcmVmKHtcbiAgICBwYXRobmFtZTogam9pbmVkUGF0aG5hbWUsXG4gICAgc2VhcmNoLFxuICAgIGhhc2hcbiAgfSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoaXMgY29tcG9uZW50IGlzIGEgZGVzY2VuZGFudCBvZiBhIGA8Um91dGVyPmAuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS92Ni9ob29rcy91c2UtaW4tcm91dGVyLWNvbnRleHRcbiAqL1xuZnVuY3Rpb24gdXNlSW5Sb3V0ZXJDb250ZXh0KCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpICE9IG51bGw7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY3VycmVudCBsb2NhdGlvbiBvYmplY3QsIHdoaWNoIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgVVJMIGluIHdlYlxuICogYnJvd3NlcnMuXG4gKlxuICogTm90ZTogSWYgeW91J3JlIHVzaW5nIHRoaXMgaXQgbWF5IG1lYW4geW91J3JlIGRvaW5nIHNvbWUgb2YgeW91ciBvd25cbiAqIFwicm91dGluZ1wiIGluIHlvdXIgYXBwLCBhbmQgd2UnZCBsaWtlIHRvIGtub3cgd2hhdCB5b3VyIHVzZSBjYXNlIGlzLiBXZSBtYXlcbiAqIGJlIGFibGUgdG8gcHJvdmlkZSBzb21ldGhpbmcgaGlnaGVyLWxldmVsIHRvIGJldHRlciBzdWl0IHlvdXIgbmVlZHMuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS92Ni9ob29rcy91c2UtbG9jYXRpb25cbiAqL1xuZnVuY3Rpb24gdXNlTG9jYXRpb24oKSB7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlTG9jYXRpb24oKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpLmxvY2F0aW9uO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgbmF2aWdhdGlvbiBhY3Rpb24gd2hpY2ggZGVzY3JpYmVzIGhvdyB0aGUgcm91dGVyIGNhbWUgdG9cbiAqIHRoZSBjdXJyZW50IGxvY2F0aW9uLCBlaXRoZXIgYnkgYSBwb3AsIHB1c2gsIG9yIHJlcGxhY2Ugb24gdGhlIGhpc3Rvcnkgc3RhY2suXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS92Ni9ob29rcy91c2UtbmF2aWdhdGlvbi10eXBlXG4gKi9cbmZ1bmN0aW9uIHVzZU5hdmlnYXRpb25UeXBlKCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpLm5hdmlnYXRpb25UeXBlO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBQYXRoTWF0Y2ggb2JqZWN0IGlmIHRoZSBnaXZlbiBwYXR0ZXJuIG1hdGNoZXMgdGhlIGN1cnJlbnQgVVJMLlxuICogVGhpcyBpcyB1c2VmdWwgZm9yIGNvbXBvbmVudHMgdGhhdCBuZWVkIHRvIGtub3cgXCJhY3RpdmVcIiBzdGF0ZSwgZS5nLlxuICogYDxOYXZMaW5rPmAuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS92Ni9ob29rcy91c2UtbWF0Y2hcbiAqL1xuZnVuY3Rpb24gdXNlTWF0Y2gocGF0dGVybikge1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZU1hdGNoKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBwYXRobmFtZVxuICB9ID0gdXNlTG9jYXRpb24oKTtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gbWF0Y2hQYXRoKHBhdHRlcm4sIFVOU0FGRV9kZWNvZGVQYXRoKHBhdGhuYW1lKSksIFtwYXRobmFtZSwgcGF0dGVybl0pO1xufVxuXG4vKipcbiAqIFRoZSBpbnRlcmZhY2UgZm9yIHRoZSBuYXZpZ2F0ZSgpIGZ1bmN0aW9uIHJldHVybmVkIGZyb20gdXNlTmF2aWdhdGUoKS5cbiAqL1xuXG5jb25zdCBuYXZpZ2F0ZUVmZmVjdFdhcm5pbmcgPSBcIllvdSBzaG91bGQgY2FsbCBuYXZpZ2F0ZSgpIGluIGEgUmVhY3QudXNlRWZmZWN0KCksIG5vdCB3aGVuIFwiICsgXCJ5b3VyIGNvbXBvbmVudCBpcyBmaXJzdCByZW5kZXJlZC5cIjtcblxuLy8gTXV0ZSB3YXJuaW5ncyBmb3IgY2FsbHMgdG8gdXNlTmF2aWdhdGUgaW4gU1NSIGVudmlyb25tZW50c1xuZnVuY3Rpb24gdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChjYikge1xuICBsZXQgaXNTdGF0aWMgPSBSZWFjdC51c2VDb250ZXh0KE5hdmlnYXRpb25Db250ZXh0KS5zdGF0aWM7XG4gIGlmICghaXNTdGF0aWMpIHtcbiAgICAvLyBXZSBzaG91bGQgYmUgYWJsZSB0byBnZXQgcmlkIG9mIHRoaXMgb25jZSByZWFjdCAxOC4zIGlzIHJlbGVhc2VkXG4gICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8yNjM5NVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIFJlYWN0LnVzZUxheW91dEVmZmVjdChjYik7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGltcGVyYXRpdmUgbWV0aG9kIGZvciBjaGFuZ2luZyB0aGUgbG9jYXRpb24uIFVzZWQgYnkgYDxMaW5rPmBzLCBidXRcbiAqIG1heSBhbHNvIGJlIHVzZWQgYnkgb3RoZXIgZWxlbWVudHMgdG8gY2hhbmdlIHRoZSBsb2NhdGlvbi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3Y2L2hvb2tzL3VzZS1uYXZpZ2F0ZVxuICovXG5mdW5jdGlvbiB1c2VOYXZpZ2F0ZSgpIHtcbiAgbGV0IHtcbiAgICBpc0RhdGFSb3V0ZVxuICB9ID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICAvLyBDb25kaXRpb25hbCB1c2FnZSBpcyBPSyBoZXJlIGJlY2F1c2UgdGhlIHVzYWdlIG9mIGEgZGF0YSByb3V0ZXIgaXMgc3RhdGljXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICByZXR1cm4gaXNEYXRhUm91dGUgPyB1c2VOYXZpZ2F0ZVN0YWJsZSgpIDogdXNlTmF2aWdhdGVVbnN0YWJsZSgpO1xufVxuZnVuY3Rpb24gdXNlTmF2aWdhdGVVbnN0YWJsZSgpIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2YgdGhlXG4gIC8vIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCJ1c2VOYXZpZ2F0ZSgpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCBkYXRhUm91dGVyQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoRGF0YVJvdXRlckNvbnRleHQpO1xuICBsZXQge1xuICAgIGJhc2VuYW1lLFxuICAgIGZ1dHVyZSxcbiAgICBuYXZpZ2F0b3JcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQge1xuICAgIG1hdGNoZXNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHtcbiAgICBwYXRobmFtZTogbG9jYXRpb25QYXRobmFtZVxuICB9ID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHJvdXRlUGF0aG5hbWVzSnNvbiA9IEpTT04uc3RyaW5naWZ5KFVOU0FGRV9nZXRSZXNvbHZlVG9NYXRjaGVzKG1hdGNoZXMsIGZ1dHVyZS52N19yZWxhdGl2ZVNwbGF0UGF0aCkpO1xuICBsZXQgYWN0aXZlUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgYWN0aXZlUmVmLmN1cnJlbnQgPSB0cnVlO1xuICB9KTtcbiAgbGV0IG5hdmlnYXRlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHRvLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhhY3RpdmVSZWYuY3VycmVudCwgbmF2aWdhdGVFZmZlY3RXYXJuaW5nKSA6IHZvaWQgMDtcblxuICAgIC8vIFNob3J0IGNpcmN1aXQgaGVyZSBzaW5jZSBpZiB0aGlzIGhhcHBlbnMgb24gZmlyc3QgcmVuZGVyIHRoZSBuYXZpZ2F0ZVxuICAgIC8vIGlzIHVzZWxlc3MgYmVjYXVzZSB3ZSBoYXZlbid0IHdpcmVkIHVwIG91ciBoaXN0b3J5IGxpc3RlbmVyIHlldFxuICAgIGlmICghYWN0aXZlUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBpZiAodHlwZW9mIHRvID09PSBcIm51bWJlclwiKSB7XG4gICAgICBuYXZpZ2F0b3IuZ28odG8pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcGF0aCA9IHJlc29sdmVUbyh0bywgSlNPTi5wYXJzZShyb3V0ZVBhdGhuYW1lc0pzb24pLCBsb2NhdGlvblBhdGhuYW1lLCBvcHRpb25zLnJlbGF0aXZlID09PSBcInBhdGhcIik7XG5cbiAgICAvLyBJZiB3ZSdyZSBvcGVyYXRpbmcgd2l0aGluIGEgYmFzZW5hbWUsIHByZXBlbmQgaXQgdG8gdGhlIHBhdGhuYW1lIHByaW9yXG4gICAgLy8gdG8gaGFuZGluZyBvZmYgdG8gaGlzdG9yeSAoYnV0IG9ubHkgaWYgd2UncmUgbm90IGluIGEgZGF0YSByb3V0ZXIsXG4gICAgLy8gb3RoZXJ3aXNlIGl0J2xsIHByZXBlbmQgdGhlIGJhc2VuYW1lIGluc2lkZSBvZiB0aGUgcm91dGVyKS5cbiAgICAvLyBJZiB0aGlzIGlzIGEgcm9vdCBuYXZpZ2F0aW9uLCB0aGVuIHdlIG5hdmlnYXRlIHRvIHRoZSByYXcgYmFzZW5hbWVcbiAgICAvLyB3aGljaCBhbGxvd3MgdGhlIGJhc2VuYW1lIHRvIGhhdmUgZnVsbCBjb250cm9sIG92ZXIgdGhlIHByZXNlbmNlIG9mIGFcbiAgICAvLyB0cmFpbGluZyBzbGFzaCBvbiByb290IGxpbmtzXG4gICAgaWYgKGRhdGFSb3V0ZXJDb250ZXh0ID09IG51bGwgJiYgYmFzZW5hbWUgIT09IFwiL1wiKSB7XG4gICAgICBwYXRoLnBhdGhuYW1lID0gcGF0aC5wYXRobmFtZSA9PT0gXCIvXCIgPyBiYXNlbmFtZSA6IGpvaW5QYXRocyhbYmFzZW5hbWUsIHBhdGgucGF0aG5hbWVdKTtcbiAgICB9XG4gICAgKCEhb3B0aW9ucy5yZXBsYWNlID8gbmF2aWdhdG9yLnJlcGxhY2UgOiBuYXZpZ2F0b3IucHVzaCkocGF0aCwgb3B0aW9ucy5zdGF0ZSwgb3B0aW9ucyk7XG4gIH0sIFtiYXNlbmFtZSwgbmF2aWdhdG9yLCByb3V0ZVBhdGhuYW1lc0pzb24sIGxvY2F0aW9uUGF0aG5hbWUsIGRhdGFSb3V0ZXJDb250ZXh0XSk7XG4gIHJldHVybiBuYXZpZ2F0ZTtcbn1cbmNvbnN0IE91dGxldENvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjb250ZXh0IChpZiBwcm92aWRlZCkgZm9yIHRoZSBjaGlsZCByb3V0ZSBhdCB0aGlzIGxldmVsIG9mIHRoZSByb3V0ZVxuICogaGllcmFyY2h5LlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS92Ni9ob29rcy91c2Utb3V0bGV0LWNvbnRleHRcbiAqL1xuZnVuY3Rpb24gdXNlT3V0bGV0Q29udGV4dCgpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoT3V0bGV0Q29udGV4dCk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZWxlbWVudCBmb3IgdGhlIGNoaWxkIHJvdXRlIGF0IHRoaXMgbGV2ZWwgb2YgdGhlIHJvdXRlXG4gKiBoaWVyYXJjaHkuIFVzZWQgaW50ZXJuYWxseSBieSBgPE91dGxldD5gIHRvIHJlbmRlciBjaGlsZCByb3V0ZXMuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS92Ni9ob29rcy91c2Utb3V0bGV0XG4gKi9cbmZ1bmN0aW9uIHVzZU91dGxldChjb250ZXh0KSB7XG4gIGxldCBvdXRsZXQgPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCkub3V0bGV0O1xuICBpZiAob3V0bGV0KSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE91dGxldENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiBjb250ZXh0XG4gICAgfSwgb3V0bGV0KTtcbiAgfVxuICByZXR1cm4gb3V0bGV0O1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IG9mIGtleS92YWx1ZSBwYWlycyBvZiB0aGUgZHluYW1pYyBwYXJhbXMgZnJvbSB0aGUgY3VycmVudFxuICogVVJMIHRoYXQgd2VyZSBtYXRjaGVkIGJ5IHRoZSByb3V0ZSBwYXRoLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vdjYvaG9va3MvdXNlLXBhcmFtc1xuICovXG5mdW5jdGlvbiB1c2VQYXJhbXMoKSB7XG4gIGxldCB7XG4gICAgbWF0Y2hlc1xuICB9ID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQgcm91dGVNYXRjaCA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgcmV0dXJuIHJvdXRlTWF0Y2ggPyByb3V0ZU1hdGNoLnBhcmFtcyA6IHt9O1xufVxuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBwYXRobmFtZSBvZiB0aGUgZ2l2ZW4gYHRvYCB2YWx1ZSBhZ2FpbnN0IHRoZSBjdXJyZW50IGxvY2F0aW9uLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vdjYvaG9va3MvdXNlLXJlc29sdmVkLXBhdGhcbiAqL1xuZnVuY3Rpb24gdXNlUmVzb2x2ZWRQYXRoKHRvLCBfdGVtcDIpIHtcbiAgbGV0IHtcbiAgICByZWxhdGl2ZVxuICB9ID0gX3RlbXAyID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMjtcbiAgbGV0IHtcbiAgICBmdXR1cmVcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQge1xuICAgIG1hdGNoZXNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHtcbiAgICBwYXRobmFtZTogbG9jYXRpb25QYXRobmFtZVxuICB9ID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHJvdXRlUGF0aG5hbWVzSnNvbiA9IEpTT04uc3RyaW5naWZ5KFVOU0FGRV9nZXRSZXNvbHZlVG9NYXRjaGVzKG1hdGNoZXMsIGZ1dHVyZS52N19yZWxhdGl2ZVNwbGF0UGF0aCkpO1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiByZXNvbHZlVG8odG8sIEpTT04ucGFyc2Uocm91dGVQYXRobmFtZXNKc29uKSwgbG9jYXRpb25QYXRobmFtZSwgcmVsYXRpdmUgPT09IFwicGF0aFwiKSwgW3RvLCByb3V0ZVBhdGhuYW1lc0pzb24sIGxvY2F0aW9uUGF0aG5hbWUsIHJlbGF0aXZlXSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZWxlbWVudCBvZiB0aGUgcm91dGUgdGhhdCBtYXRjaGVkIHRoZSBjdXJyZW50IGxvY2F0aW9uLCBwcmVwYXJlZFxuICogd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0IHRvIHJlbmRlciB0aGUgcmVtYWluZGVyIG9mIHRoZSByb3V0ZSB0cmVlLiBSb3V0ZVxuICogZWxlbWVudHMgaW4gdGhlIHRyZWUgbXVzdCByZW5kZXIgYW4gYDxPdXRsZXQ+YCB0byByZW5kZXIgdGhlaXIgY2hpbGQgcm91dGUnc1xuICogZWxlbWVudC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3Y2L2hvb2tzL3VzZS1yb3V0ZXNcbiAqL1xuZnVuY3Rpb24gdXNlUm91dGVzKHJvdXRlcywgbG9jYXRpb25BcmcpIHtcbiAgcmV0dXJuIHVzZVJvdXRlc0ltcGwocm91dGVzLCBsb2NhdGlvbkFyZyk7XG59XG5cbi8vIEludGVybmFsIGltcGxlbWVudGF0aW9uIHdpdGggYWNjZXB0IG9wdGlvbmFsIHBhcmFtIGZvciBSb3V0ZXJQcm92aWRlciB1c2FnZVxuZnVuY3Rpb24gdXNlUm91dGVzSW1wbChyb3V0ZXMsIGxvY2F0aW9uQXJnLCBkYXRhUm91dGVyU3RhdGUsIGZ1dHVyZSkge1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZVJvdXRlcygpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCB7XG4gICAgbmF2aWdhdG9yLFxuICAgIHN0YXRpYzogaXNTdGF0aWNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQge1xuICAgIG1hdGNoZXM6IHBhcmVudE1hdGNoZXNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHJvdXRlTWF0Y2ggPSBwYXJlbnRNYXRjaGVzW3BhcmVudE1hdGNoZXMubGVuZ3RoIC0gMV07XG4gIGxldCBwYXJlbnRQYXJhbXMgPSByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXJhbXMgOiB7fTtcbiAgbGV0IHBhcmVudFBhdGhuYW1lID0gcm91dGVNYXRjaCA/IHJvdXRlTWF0Y2gucGF0aG5hbWUgOiBcIi9cIjtcbiAgbGV0IHBhcmVudFBhdGhuYW1lQmFzZSA9IHJvdXRlTWF0Y2ggPyByb3V0ZU1hdGNoLnBhdGhuYW1lQmFzZSA6IFwiL1wiO1xuICBsZXQgcGFyZW50Um91dGUgPSByb3V0ZU1hdGNoICYmIHJvdXRlTWF0Y2gucm91dGU7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAvLyBZb3Ugd29uJ3QgZ2V0IGEgd2FybmluZyBhYm91dCAyIGRpZmZlcmVudCA8Um91dGVzPiB1bmRlciBhIDxSb3V0ZT5cbiAgICAvLyB3aXRob3V0IGEgdHJhaWxpbmcgKiwgYnV0IHRoaXMgaXMgYSBiZXN0LWVmZm9ydCB3YXJuaW5nIGFueXdheSBzaW5jZSB3ZVxuICAgIC8vIGNhbm5vdCBldmVuIGdpdmUgdGhlIHdhcm5pbmcgdW5sZXNzIHRoZXkgbGFuZCBhdCB0aGUgcGFyZW50IHJvdXRlLlxuICAgIC8vXG4gICAgLy8gRXhhbXBsZTpcbiAgICAvL1xuICAgIC8vIDxSb3V0ZXM+XG4gICAgLy8gICB7LyogVGhpcyByb3V0ZSBwYXRoIE1VU1QgZW5kIHdpdGggLyogYmVjYXVzZSBvdGhlcndpc2VcbiAgICAvLyAgICAgICBpdCB3aWxsIG5ldmVyIG1hdGNoIC9ibG9nL3Bvc3QvMTIzICovfVxuICAgIC8vICAgPFJvdXRlIHBhdGg9XCJibG9nXCIgZWxlbWVudD17PEJsb2cgLz59IC8+XG4gICAgLy8gICA8Um91dGUgcGF0aD1cImJsb2cvZmVlZFwiIGVsZW1lbnQ9ezxCbG9nRmVlZCAvPn0gLz5cbiAgICAvLyA8L1JvdXRlcz5cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIEJsb2coKSB7XG4gICAgLy8gICByZXR1cm4gKFxuICAgIC8vICAgICA8Um91dGVzPlxuICAgIC8vICAgICAgIDxSb3V0ZSBwYXRoPVwicG9zdC86aWRcIiBlbGVtZW50PXs8UG9zdCAvPn0gLz5cbiAgICAvLyAgICAgPC9Sb3V0ZXM+XG4gICAgLy8gICApO1xuICAgIC8vIH1cbiAgICBsZXQgcGFyZW50UGF0aCA9IHBhcmVudFJvdXRlICYmIHBhcmVudFJvdXRlLnBhdGggfHwgXCJcIjtcbiAgICB3YXJuaW5nT25jZShwYXJlbnRQYXRobmFtZSwgIXBhcmVudFJvdXRlIHx8IHBhcmVudFBhdGguZW5kc1dpdGgoXCIqXCIpLCBcIllvdSByZW5kZXJlZCBkZXNjZW5kYW50IDxSb3V0ZXM+IChvciBjYWxsZWQgYHVzZVJvdXRlcygpYCkgYXQgXCIgKyAoXCJcXFwiXCIgKyBwYXJlbnRQYXRobmFtZSArIFwiXFxcIiAodW5kZXIgPFJvdXRlIHBhdGg9XFxcIlwiICsgcGFyZW50UGF0aCArIFwiXFxcIj4pIGJ1dCB0aGUgXCIpICsgXCJwYXJlbnQgcm91dGUgcGF0aCBoYXMgbm8gdHJhaWxpbmcgXFxcIipcXFwiLiBUaGlzIG1lYW5zIGlmIHlvdSBuYXZpZ2F0ZSBcIiArIFwiZGVlcGVyLCB0aGUgcGFyZW50IHdvbid0IG1hdGNoIGFueW1vcmUgYW5kIHRoZXJlZm9yZSB0aGUgY2hpbGQgXCIgKyBcInJvdXRlcyB3aWxsIG5ldmVyIHJlbmRlci5cXG5cXG5cIiArIChcIlBsZWFzZSBjaGFuZ2UgdGhlIHBhcmVudCA8Um91dGUgcGF0aD1cXFwiXCIgKyBwYXJlbnRQYXRoICsgXCJcXFwiPiB0byA8Um91dGUgXCIpICsgKFwicGF0aD1cXFwiXCIgKyAocGFyZW50UGF0aCA9PT0gXCIvXCIgPyBcIipcIiA6IHBhcmVudFBhdGggKyBcIi8qXCIpICsgXCJcXFwiPi5cIikpO1xuICB9XG4gIGxldCBsb2NhdGlvbkZyb21Db250ZXh0ID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IGxvY2F0aW9uO1xuICBpZiAobG9jYXRpb25BcmcpIHtcbiAgICB2YXIgX3BhcnNlZExvY2F0aW9uQXJnJHBhO1xuICAgIGxldCBwYXJzZWRMb2NhdGlvbkFyZyA9IHR5cGVvZiBsb2NhdGlvbkFyZyA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aChsb2NhdGlvbkFyZykgOiBsb2NhdGlvbkFyZztcbiAgICAhKHBhcmVudFBhdGhuYW1lQmFzZSA9PT0gXCIvXCIgfHwgKChfcGFyc2VkTG9jYXRpb25BcmckcGEgPSBwYXJzZWRMb2NhdGlvbkFyZy5wYXRobmFtZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9wYXJzZWRMb2NhdGlvbkFyZyRwYS5zdGFydHNXaXRoKHBhcmVudFBhdGhuYW1lQmFzZSkpKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiV2hlbiBvdmVycmlkaW5nIHRoZSBsb2NhdGlvbiB1c2luZyBgPFJvdXRlcyBsb2NhdGlvbj5gIG9yIGB1c2VSb3V0ZXMocm91dGVzLCBsb2NhdGlvbilgLCBcIiArIFwidGhlIGxvY2F0aW9uIHBhdGhuYW1lIG11c3QgYmVnaW4gd2l0aCB0aGUgcG9ydGlvbiBvZiB0aGUgVVJMIHBhdGhuYW1lIHRoYXQgd2FzIFwiICsgKFwibWF0Y2hlZCBieSBhbGwgcGFyZW50IHJvdXRlcy4gVGhlIGN1cnJlbnQgcGF0aG5hbWUgYmFzZSBpcyBcXFwiXCIgKyBwYXJlbnRQYXRobmFtZUJhc2UgKyBcIlxcXCIgXCIpICsgKFwiYnV0IHBhdGhuYW1lIFxcXCJcIiArIHBhcnNlZExvY2F0aW9uQXJnLnBhdGhuYW1lICsgXCJcXFwiIHdhcyBnaXZlbiBpbiB0aGUgYGxvY2F0aW9uYCBwcm9wLlwiKSkgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICBsb2NhdGlvbiA9IHBhcnNlZExvY2F0aW9uQXJnO1xuICB9IGVsc2Uge1xuICAgIGxvY2F0aW9uID0gbG9jYXRpb25Gcm9tQ29udGV4dDtcbiAgfVxuICBsZXQgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSB8fCBcIi9cIjtcbiAgbGV0IHJlbWFpbmluZ1BhdGhuYW1lID0gcGF0aG5hbWU7XG4gIGlmIChwYXJlbnRQYXRobmFtZUJhc2UgIT09IFwiL1wiKSB7XG4gICAgLy8gRGV0ZXJtaW5lIHRoZSByZW1haW5pbmcgcGF0aG5hbWUgYnkgcmVtb3ZpbmcgdGhlICMgb2YgVVJMIHNlZ21lbnRzIHRoZVxuICAgIC8vIHBhcmVudFBhdGhuYW1lQmFzZSBoYXMsIGluc3RlYWQgb2YgcmVtb3ZpbmcgYmFzZWQgb24gY2hhcmFjdGVyIGNvdW50LlxuICAgIC8vIFRoaXMgaXMgYmVjYXVzZSB3ZSBjYW4ndCBndWFyYW50ZWUgdGhhdCBpbmNvbWluZy9vdXRnb2luZyBlbmNvZGluZ3MvXG4gICAgLy8gZGVjb2RpbmdzIHdpbGwgbWF0Y2ggZXhhY3RseS5cbiAgICAvLyBXZSBkZWNvZGUgcGF0aHMgYmVmb3JlIG1hdGNoaW5nIG9uIGEgcGVyLXNlZ21lbnQgYmFzaXMgd2l0aFxuICAgIC8vIGRlY29kZVVSSUNvbXBvbmVudCgpLCBidXQgd2UgcmUtZW5jb2RlIHBhdGhuYW1lcyB2aWEgYG5ldyBVUkwoKWAgc28gdGhleVxuICAgIC8vIG1hdGNoIHdoYXQgYHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZWAgd291bGQgcmVmbGVjdC4gIFRob3NlIGRvbid0IDEwMCVcbiAgICAvLyBhbGlnbiB3aGVuIGl0IGNvbWVzIHRvIGVuY29kZWQgVVJJIGNoYXJhY3RlcnMgc3VjaCBhcyAlIGFuZCAmLlxuICAgIC8vXG4gICAgLy8gU28gd2UgbWF5IGVuZCB1cCB3aXRoOlxuICAgIC8vICAgcGF0aG5hbWU6ICAgICAgICAgICBcIi9kZXNjZW5kYW50L2ElMjViL21hdGNoXCJcbiAgICAvLyAgIHBhcmVudFBhdGhuYW1lQmFzZTogXCIvZGVzY2VuZGFudC9hJWJcIlxuICAgIC8vXG4gICAgLy8gQW5kIHRoZSBkaXJlY3Qgc3Vic3RyaW5nIHJlbW92YWwgYXBwcm9hY2ggd29uJ3Qgd29yayA6L1xuICAgIGxldCBwYXJlbnRTZWdtZW50cyA9IHBhcmVudFBhdGhuYW1lQmFzZS5yZXBsYWNlKC9eXFwvLywgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgIGxldCBzZWdtZW50cyA9IHBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCBcIlwiKS5zcGxpdChcIi9cIik7XG4gICAgcmVtYWluaW5nUGF0aG5hbWUgPSBcIi9cIiArIHNlZ21lbnRzLnNsaWNlKHBhcmVudFNlZ21lbnRzLmxlbmd0aCkuam9pbihcIi9cIik7XG4gIH1cbiAgbGV0IG1hdGNoZXMgPSAhaXNTdGF0aWMgJiYgZGF0YVJvdXRlclN0YXRlICYmIGRhdGFSb3V0ZXJTdGF0ZS5tYXRjaGVzICYmIGRhdGFSb3V0ZXJTdGF0ZS5tYXRjaGVzLmxlbmd0aCA+IDAgPyBkYXRhUm91dGVyU3RhdGUubWF0Y2hlcyA6IG1hdGNoUm91dGVzKHJvdXRlcywge1xuICAgIHBhdGhuYW1lOiByZW1haW5pbmdQYXRobmFtZVxuICB9KTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKHBhcmVudFJvdXRlIHx8IG1hdGNoZXMgIT0gbnVsbCwgXCJObyByb3V0ZXMgbWF0Y2hlZCBsb2NhdGlvbiBcXFwiXCIgKyBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCArIGxvY2F0aW9uLmhhc2ggKyBcIlxcXCIgXCIpIDogdm9pZCAwO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKG1hdGNoZXMgPT0gbnVsbCB8fCBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV0ucm91dGUuZWxlbWVudCAhPT0gdW5kZWZpbmVkIHx8IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5yb3V0ZS5Db21wb25lbnQgIT09IHVuZGVmaW5lZCB8fCBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV0ucm91dGUubGF6eSAhPT0gdW5kZWZpbmVkLCBcIk1hdGNoZWQgbGVhZiByb3V0ZSBhdCBsb2NhdGlvbiBcXFwiXCIgKyBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCArIGxvY2F0aW9uLmhhc2ggKyBcIlxcXCIgXCIgKyBcImRvZXMgbm90IGhhdmUgYW4gZWxlbWVudCBvciBDb21wb25lbnQuIFRoaXMgbWVhbnMgaXQgd2lsbCByZW5kZXIgYW4gPE91dGxldCAvPiB3aXRoIGEgXCIgKyBcIm51bGwgdmFsdWUgYnkgZGVmYXVsdCByZXN1bHRpbmcgaW4gYW4gXFxcImVtcHR5XFxcIiBwYWdlLlwiKSA6IHZvaWQgMDtcbiAgfVxuICBsZXQgcmVuZGVyZWRNYXRjaGVzID0gX3JlbmRlck1hdGNoZXMobWF0Y2hlcyAmJiBtYXRjaGVzLm1hcChtYXRjaCA9PiBPYmplY3QuYXNzaWduKHt9LCBtYXRjaCwge1xuICAgIHBhcmFtczogT2JqZWN0LmFzc2lnbih7fSwgcGFyZW50UGFyYW1zLCBtYXRjaC5wYXJhbXMpLFxuICAgIHBhdGhuYW1lOiBqb2luUGF0aHMoW3BhcmVudFBhdGhuYW1lQmFzZSxcbiAgICAvLyBSZS1lbmNvZGUgcGF0aG5hbWVzIHRoYXQgd2VyZSBkZWNvZGVkIGluc2lkZSBtYXRjaFJvdXRlc1xuICAgIG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbiA/IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbihtYXRjaC5wYXRobmFtZSkucGF0aG5hbWUgOiBtYXRjaC5wYXRobmFtZV0pLFxuICAgIHBhdGhuYW1lQmFzZTogbWF0Y2gucGF0aG5hbWVCYXNlID09PSBcIi9cIiA/IHBhcmVudFBhdGhuYW1lQmFzZSA6IGpvaW5QYXRocyhbcGFyZW50UGF0aG5hbWVCYXNlLFxuICAgIC8vIFJlLWVuY29kZSBwYXRobmFtZXMgdGhhdCB3ZXJlIGRlY29kZWQgaW5zaWRlIG1hdGNoUm91dGVzXG4gICAgbmF2aWdhdG9yLmVuY29kZUxvY2F0aW9uID8gbmF2aWdhdG9yLmVuY29kZUxvY2F0aW9uKG1hdGNoLnBhdGhuYW1lQmFzZSkucGF0aG5hbWUgOiBtYXRjaC5wYXRobmFtZUJhc2VdKVxuICB9KSksIHBhcmVudE1hdGNoZXMsIGRhdGFSb3V0ZXJTdGF0ZSwgZnV0dXJlKTtcblxuICAvLyBXaGVuIGEgdXNlciBwYXNzZXMgaW4gYSBgbG9jYXRpb25BcmdgLCB0aGUgYXNzb2NpYXRlZCByb3V0ZXMgbmVlZCB0b1xuICAvLyBiZSB3cmFwcGVkIGluIGEgbmV3IGBMb2NhdGlvbkNvbnRleHQuUHJvdmlkZXJgIGluIG9yZGVyIGZvciBgdXNlTG9jYXRpb25gXG4gIC8vIHRvIHVzZSB0aGUgc2NvcGVkIGxvY2F0aW9uIGluc3RlYWQgb2YgdGhlIGdsb2JhbCBsb2NhdGlvbi5cbiAgaWYgKGxvY2F0aW9uQXJnICYmIHJlbmRlcmVkTWF0Y2hlcykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMb2NhdGlvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGxvY2F0aW9uOiBfZXh0ZW5kcyh7XG4gICAgICAgICAgcGF0aG5hbWU6IFwiL1wiLFxuICAgICAgICAgIHNlYXJjaDogXCJcIixcbiAgICAgICAgICBoYXNoOiBcIlwiLFxuICAgICAgICAgIHN0YXRlOiBudWxsLFxuICAgICAgICAgIGtleTogXCJkZWZhdWx0XCJcbiAgICAgICAgfSwgbG9jYXRpb24pLFxuICAgICAgICBuYXZpZ2F0aW9uVHlwZTogQWN0aW9uLlBvcFxuICAgICAgfVxuICAgIH0sIHJlbmRlcmVkTWF0Y2hlcyk7XG4gIH1cbiAgcmV0dXJuIHJlbmRlcmVkTWF0Y2hlcztcbn1cbmZ1bmN0aW9uIERlZmF1bHRFcnJvckNvbXBvbmVudCgpIHtcbiAgbGV0IGVycm9yID0gdXNlUm91dGVFcnJvcigpO1xuICBsZXQgbWVzc2FnZSA9IGlzUm91dGVFcnJvclJlc3BvbnNlKGVycm9yKSA/IGVycm9yLnN0YXR1cyArIFwiIFwiICsgZXJyb3Iuc3RhdHVzVGV4dCA6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogSlNPTi5zdHJpbmdpZnkoZXJyb3IpO1xuICBsZXQgc3RhY2sgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3Iuc3RhY2sgOiBudWxsO1xuICBsZXQgbGlnaHRncmV5ID0gXCJyZ2JhKDIwMCwyMDAsMjAwLCAwLjUpXCI7XG4gIGxldCBwcmVTdHlsZXMgPSB7XG4gICAgcGFkZGluZzogXCIwLjVyZW1cIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGxpZ2h0Z3JleVxuICB9O1xuICBsZXQgY29kZVN0eWxlcyA9IHtcbiAgICBwYWRkaW5nOiBcIjJweCA0cHhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGxpZ2h0Z3JleVxuICB9O1xuICBsZXQgZGV2SW5mbyA9IG51bGw7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaGFuZGxlZCBieSBSZWFjdCBSb3V0ZXIgZGVmYXVsdCBFcnJvckJvdW5kYXJ5OlwiLCBlcnJvcik7XG4gICAgZGV2SW5mbyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJcXHVEODNEXFx1RENCRiBIZXkgZGV2ZWxvcGVyIFxcdUQ4M0RcXHVEQzRCXCIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJZb3UgY2FuIHByb3ZpZGUgYSB3YXkgYmV0dGVyIFVYIHRoYW4gdGhpcyB3aGVuIHlvdXIgYXBwIHRocm93cyBlcnJvcnMgYnkgcHJvdmlkaW5nIHlvdXIgb3duIFwiLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwge1xuICAgICAgc3R5bGU6IGNvZGVTdHlsZXNcbiAgICB9LCBcIkVycm9yQm91bmRhcnlcIiksIFwiIG9yXCIsIFwiIFwiLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwge1xuICAgICAgc3R5bGU6IGNvZGVTdHlsZXNcbiAgICB9LCBcImVycm9yRWxlbWVudFwiKSwgXCIgcHJvcCBvbiB5b3VyIHJvdXRlLlwiKSk7XG4gIH1cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwiVW5leHBlY3RlZCBBcHBsaWNhdGlvbiBFcnJvciFcIiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwge1xuICAgIHN0eWxlOiB7XG4gICAgICBmb250U3R5bGU6IFwiaXRhbGljXCJcbiAgICB9XG4gIH0sIG1lc3NhZ2UpLCBzdGFjayA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicHJlXCIsIHtcbiAgICBzdHlsZTogcHJlU3R5bGVzXG4gIH0sIHN0YWNrKSA6IG51bGwsIGRldkluZm8pO1xufVxuY29uc3QgZGVmYXVsdEVycm9yRWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERlZmF1bHRFcnJvckNvbXBvbmVudCwgbnVsbCk7XG5jbGFzcyBSZW5kZXJFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvY2F0aW9uOiBwcm9wcy5sb2NhdGlvbixcbiAgICAgIHJldmFsaWRhdGlvbjogcHJvcHMucmV2YWxpZGF0aW9uLFxuICAgICAgZXJyb3I6IHByb3BzLmVycm9yXG4gICAgfTtcbiAgfVxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiBlcnJvclxuICAgIH07XG4gIH1cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICAvLyBXaGVuIHdlIGdldCBpbnRvIGFuIGVycm9yIHN0YXRlLCB0aGUgdXNlciB3aWxsIGxpa2VseSBjbGljayBcImJhY2tcIiB0byB0aGVcbiAgICAvLyBwcmV2aW91cyBwYWdlIHRoYXQgZGlkbid0IGhhdmUgYW4gZXJyb3IuIEJlY2F1c2UgdGhpcyB3cmFwcyB0aGUgZW50aXJlXG4gICAgLy8gYXBwbGljYXRpb24sIHRoYXQgd2lsbCBoYXZlIG5vIGVmZmVjdC0tdGhlIGVycm9yIHBhZ2UgY29udGludWVzIHRvIGRpc3BsYXkuXG4gICAgLy8gVGhpcyBnaXZlcyB1cyBhIG1lY2hhbmlzbSB0byByZWNvdmVyIGZyb20gdGhlIGVycm9yIHdoZW4gdGhlIGxvY2F0aW9uIGNoYW5nZXMuXG4gICAgLy9cbiAgICAvLyBXaGV0aGVyIHdlJ3JlIGluIGFuIGVycm9yIHN0YXRlIG9yIG5vdCwgd2UgdXBkYXRlIHRoZSBsb2NhdGlvbiBpbiBzdGF0ZVxuICAgIC8vIHNvIHRoYXQgd2hlbiB3ZSBhcmUgaW4gYW4gZXJyb3Igc3RhdGUsIGl0IGdldHMgcmVzZXQgd2hlbiBhIG5ldyBsb2NhdGlvblxuICAgIC8vIGNvbWVzIGluIGFuZCB0aGUgdXNlciByZWNvdmVycyBmcm9tIHRoZSBlcnJvci5cbiAgICBpZiAoc3RhdGUubG9jYXRpb24gIT09IHByb3BzLmxvY2F0aW9uIHx8IHN0YXRlLnJldmFsaWRhdGlvbiAhPT0gXCJpZGxlXCIgJiYgcHJvcHMucmV2YWxpZGF0aW9uID09PSBcImlkbGVcIikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXJyb3I6IHByb3BzLmVycm9yLFxuICAgICAgICBsb2NhdGlvbjogcHJvcHMubG9jYXRpb24sXG4gICAgICAgIHJldmFsaWRhdGlvbjogcHJvcHMucmV2YWxpZGF0aW9uXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHdlJ3JlIG5vdCBjaGFuZ2luZyBsb2NhdGlvbnMsIHByZXNlcnZlIHRoZSBsb2NhdGlvbiBidXQgc3RpbGwgc3VyZmFjZVxuICAgIC8vIGFueSBuZXcgZXJyb3JzIHRoYXQgbWF5IGNvbWUgdGhyb3VnaC4gV2UgcmV0YWluIHRoZSBleGlzdGluZyBlcnJvciwgd2UgZG9cbiAgICAvLyB0aGlzIGJlY2F1c2UgdGhlIGVycm9yIHByb3ZpZGVkIGZyb20gdGhlIGFwcCBzdGF0ZSBtYXkgYmUgY2xlYXJlZCB3aXRob3V0XG4gICAgLy8gdGhlIGxvY2F0aW9uIGNoYW5naW5nLlxuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogcHJvcHMuZXJyb3IgIT09IHVuZGVmaW5lZCA/IHByb3BzLmVycm9yIDogc3RhdGUuZXJyb3IsXG4gICAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgICByZXZhbGlkYXRpb246IHByb3BzLnJldmFsaWRhdGlvbiB8fCBzdGF0ZS5yZXZhbGlkYXRpb25cbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pIHtcbiAgICBjb25zb2xlLmVycm9yKFwiUmVhY3QgUm91dGVyIGNhdWdodCB0aGUgZm9sbG93aW5nIGVycm9yIGR1cmluZyByZW5kZXJcIiwgZXJyb3IsIGVycm9ySW5mbyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmVycm9yICE9PSB1bmRlZmluZWQgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnJvdXRlQ29udGV4dFxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlRXJyb3JDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5lcnJvcixcbiAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNvbXBvbmVudFxuICAgIH0pKSA6IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cbn1cbmZ1bmN0aW9uIFJlbmRlcmVkUm91dGUoX3JlZikge1xuICBsZXQge1xuICAgIHJvdXRlQ29udGV4dCxcbiAgICBtYXRjaCxcbiAgICBjaGlsZHJlblxuICB9ID0gX3JlZjtcbiAgbGV0IGRhdGFSb3V0ZXJDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChEYXRhUm91dGVyQ29udGV4dCk7XG5cbiAgLy8gVHJhY2sgaG93IGRlZXAgd2UgZ290IGluIG91ciByZW5kZXIgcGFzcyB0byBlbXVsYXRlIFNTUiBjb21wb25lbnREaWRDYXRjaFxuICAvLyBpbiBhIERhdGFTdGF0aWNSb3V0ZXJcbiAgaWYgKGRhdGFSb3V0ZXJDb250ZXh0ICYmIGRhdGFSb3V0ZXJDb250ZXh0LnN0YXRpYyAmJiBkYXRhUm91dGVyQ29udGV4dC5zdGF0aWNDb250ZXh0ICYmIChtYXRjaC5yb3V0ZS5lcnJvckVsZW1lbnQgfHwgbWF0Y2gucm91dGUuRXJyb3JCb3VuZGFyeSkpIHtcbiAgICBkYXRhUm91dGVyQ29udGV4dC5zdGF0aWNDb250ZXh0Ll9kZWVwZXN0UmVuZGVyZWRCb3VuZGFyeUlkID0gbWF0Y2gucm91dGUuaWQ7XG4gIH1cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiByb3V0ZUNvbnRleHRcbiAgfSwgY2hpbGRyZW4pO1xufVxuZnVuY3Rpb24gX3JlbmRlck1hdGNoZXMobWF0Y2hlcywgcGFyZW50TWF0Y2hlcywgZGF0YVJvdXRlclN0YXRlLCBmdXR1cmUpIHtcbiAgdmFyIF9kYXRhUm91dGVyU3RhdGU7XG4gIGlmIChwYXJlbnRNYXRjaGVzID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnRNYXRjaGVzID0gW107XG4gIH1cbiAgaWYgKGRhdGFSb3V0ZXJTdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgZGF0YVJvdXRlclN0YXRlID0gbnVsbDtcbiAgfVxuICBpZiAoZnV0dXJlID09PSB2b2lkIDApIHtcbiAgICBmdXR1cmUgPSBudWxsO1xuICB9XG4gIGlmIChtYXRjaGVzID09IG51bGwpIHtcbiAgICB2YXIgX2Z1dHVyZTtcbiAgICBpZiAoIWRhdGFSb3V0ZXJTdGF0ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChkYXRhUm91dGVyU3RhdGUuZXJyb3JzKSB7XG4gICAgICAvLyBEb24ndCBiYWlsIGlmIHdlIGhhdmUgZGF0YSByb3V0ZXIgZXJyb3JzIHNvIHdlIGNhbiByZW5kZXIgdGhlbSBpbiB0aGVcbiAgICAgIC8vIGJvdW5kYXJ5LiAgVXNlIHRoZSBwcmUtbWF0Y2hlZCAob3Igc2hpbW1lZCkgbWF0Y2hlc1xuICAgICAgbWF0Y2hlcyA9IGRhdGFSb3V0ZXJTdGF0ZS5tYXRjaGVzO1xuICAgIH0gZWxzZSBpZiAoKF9mdXR1cmUgPSBmdXR1cmUpICE9IG51bGwgJiYgX2Z1dHVyZS52N19wYXJ0aWFsSHlkcmF0aW9uICYmIHBhcmVudE1hdGNoZXMubGVuZ3RoID09PSAwICYmICFkYXRhUm91dGVyU3RhdGUuaW5pdGlhbGl6ZWQgJiYgZGF0YVJvdXRlclN0YXRlLm1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gRG9uJ3QgYmFpbCBpZiB3ZSdyZSBpbml0aWFsaXppbmcgd2l0aCBwYXJ0aWFsIGh5ZHJhdGlvbiBhbmQgd2UgaGF2ZVxuICAgICAgLy8gcm91dGVyIG1hdGNoZXMuICBUaGF0IG1lYW5zIHdlJ3JlIGFjdGl2ZWx5IHJ1bm5pbmcgYHBhdGNoUm91dGVzT25OYXZpZ2F0aW9uYFxuICAgICAgLy8gc28gd2Ugc2hvdWxkIHJlbmRlciBkb3duIHRoZSBwYXJ0aWFsIG1hdGNoZXMgdG8gdGhlIGFwcHJvcHJpYXRlXG4gICAgICAvLyBgSHlkcmF0ZUZhbGxiYWNrYC4gIFdlIG9ubHkgZG8gdGhpcyBpZiBgcGFyZW50TWF0Y2hlc2AgaXMgZW1wdHkgc28gaXRcbiAgICAgIC8vIG9ubHkgaW1wYWN0cyB0aGUgcm9vdCBtYXRjaGVzIGZvciBgUm91dGVyUHJvdmlkZXJgIGFuZCBubyBkZXNjZW5kYW50XG4gICAgICAvLyBgPFJvdXRlcz5gXG4gICAgICBtYXRjaGVzID0gZGF0YVJvdXRlclN0YXRlLm1hdGNoZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICBsZXQgcmVuZGVyZWRNYXRjaGVzID0gbWF0Y2hlcztcblxuICAvLyBJZiB3ZSBoYXZlIGRhdGEgZXJyb3JzLCB0cmltIG1hdGNoZXMgdG8gdGhlIGhpZ2hlc3QgZXJyb3IgYm91bmRhcnlcbiAgbGV0IGVycm9ycyA9IChfZGF0YVJvdXRlclN0YXRlID0gZGF0YVJvdXRlclN0YXRlKSA9PSBudWxsID8gdm9pZCAwIDogX2RhdGFSb3V0ZXJTdGF0ZS5lcnJvcnM7XG4gIGlmIChlcnJvcnMgIT0gbnVsbCkge1xuICAgIGxldCBlcnJvckluZGV4ID0gcmVuZGVyZWRNYXRjaGVzLmZpbmRJbmRleChtID0+IG0ucm91dGUuaWQgJiYgKGVycm9ycyA9PSBudWxsID8gdm9pZCAwIDogZXJyb3JzW20ucm91dGUuaWRdKSAhPT0gdW5kZWZpbmVkKTtcbiAgICAhKGVycm9ySW5kZXggPj0gMCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcIkNvdWxkIG5vdCBmaW5kIGEgbWF0Y2hpbmcgcm91dGUgZm9yIGVycm9ycyBvbiByb3V0ZSBJRHM6IFwiICsgT2JqZWN0LmtleXMoZXJyb3JzKS5qb2luKFwiLFwiKSkgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICByZW5kZXJlZE1hdGNoZXMgPSByZW5kZXJlZE1hdGNoZXMuc2xpY2UoMCwgTWF0aC5taW4ocmVuZGVyZWRNYXRjaGVzLmxlbmd0aCwgZXJyb3JJbmRleCArIDEpKTtcbiAgfVxuXG4gIC8vIElmIHdlJ3JlIGluIGEgcGFydGlhbCBoeWRyYXRpb24gbW9kZSwgZGV0ZWN0IGlmIHdlIG5lZWQgdG8gcmVuZGVyIGRvd24gdG9cbiAgLy8gYSBnaXZlbiBIeWRyYXRlRmFsbGJhY2sgd2hpbGUgd2UgbG9hZCB0aGUgcmVzdCBvZiB0aGUgaHlkcmF0aW9uIGRhdGFcbiAgbGV0IHJlbmRlckZhbGxiYWNrID0gZmFsc2U7XG4gIGxldCBmYWxsYmFja0luZGV4ID0gLTE7XG4gIGlmIChkYXRhUm91dGVyU3RhdGUgJiYgZnV0dXJlICYmIGZ1dHVyZS52N19wYXJ0aWFsSHlkcmF0aW9uKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW5kZXJlZE1hdGNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBtYXRjaCA9IHJlbmRlcmVkTWF0Y2hlc1tpXTtcbiAgICAgIC8vIFRyYWNrIHRoZSBkZWVwZXN0IGZhbGxiYWNrIHVwIHVudGlsIHRoZSBmaXJzdCByb3V0ZSB3aXRob3V0IGRhdGFcbiAgICAgIGlmIChtYXRjaC5yb3V0ZS5IeWRyYXRlRmFsbGJhY2sgfHwgbWF0Y2gucm91dGUuaHlkcmF0ZUZhbGxiYWNrRWxlbWVudCkge1xuICAgICAgICBmYWxsYmFja0luZGV4ID0gaTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXRjaC5yb3V0ZS5pZCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgIGxvYWRlckRhdGEsXG4gICAgICAgICAgZXJyb3JzXG4gICAgICAgIH0gPSBkYXRhUm91dGVyU3RhdGU7XG4gICAgICAgIGxldCBuZWVkc1RvUnVuTG9hZGVyID0gbWF0Y2gucm91dGUubG9hZGVyICYmIGxvYWRlckRhdGFbbWF0Y2gucm91dGUuaWRdID09PSB1bmRlZmluZWQgJiYgKCFlcnJvcnMgfHwgZXJyb3JzW21hdGNoLnJvdXRlLmlkXSA9PT0gdW5kZWZpbmVkKTtcbiAgICAgICAgaWYgKG1hdGNoLnJvdXRlLmxhenkgfHwgbmVlZHNUb1J1bkxvYWRlcikge1xuICAgICAgICAgIC8vIFdlIGZvdW5kIHRoZSBmaXJzdCByb3V0ZSB0aGF0J3Mgbm90IHJlYWR5IHRvIHJlbmRlciAod2FpdGluZyBvblxuICAgICAgICAgIC8vIGxhenksIG9yIGhhcyBhIGxvYWRlciB0aGF0IGhhc24ndCBydW4geWV0KS4gIEZsYWcgdGhhdCB3ZSBuZWVkIHRvXG4gICAgICAgICAgLy8gcmVuZGVyIGEgZmFsbGJhY2sgYW5kIHJlbmRlciB1cCB1bnRpbCB0aGUgYXBwcm9wcmlhdGUgZmFsbGJhY2tcbiAgICAgICAgICByZW5kZXJGYWxsYmFjayA9IHRydWU7XG4gICAgICAgICAgaWYgKGZhbGxiYWNrSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgcmVuZGVyZWRNYXRjaGVzID0gcmVuZGVyZWRNYXRjaGVzLnNsaWNlKDAsIGZhbGxiYWNrSW5kZXggKyAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyZWRNYXRjaGVzID0gW3JlbmRlcmVkTWF0Y2hlc1swXV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZW5kZXJlZE1hdGNoZXMucmVkdWNlUmlnaHQoKG91dGxldCwgbWF0Y2gsIGluZGV4KSA9PiB7XG4gICAgLy8gT25seSBkYXRhIHJvdXRlcnMgaGFuZGxlIGVycm9ycy9mYWxsYmFja3NcbiAgICBsZXQgZXJyb3I7XG4gICAgbGV0IHNob3VsZFJlbmRlckh5ZHJhdGVGYWxsYmFjayA9IGZhbHNlO1xuICAgIGxldCBlcnJvckVsZW1lbnQgPSBudWxsO1xuICAgIGxldCBoeWRyYXRlRmFsbGJhY2tFbGVtZW50ID0gbnVsbDtcbiAgICBpZiAoZGF0YVJvdXRlclN0YXRlKSB7XG4gICAgICBlcnJvciA9IGVycm9ycyAmJiBtYXRjaC5yb3V0ZS5pZCA/IGVycm9yc1ttYXRjaC5yb3V0ZS5pZF0gOiB1bmRlZmluZWQ7XG4gICAgICBlcnJvckVsZW1lbnQgPSBtYXRjaC5yb3V0ZS5lcnJvckVsZW1lbnQgfHwgZGVmYXVsdEVycm9yRWxlbWVudDtcbiAgICAgIGlmIChyZW5kZXJGYWxsYmFjaykge1xuICAgICAgICBpZiAoZmFsbGJhY2tJbmRleCA8IDAgJiYgaW5kZXggPT09IDApIHtcbiAgICAgICAgICB3YXJuaW5nT25jZShcInJvdXRlLWZhbGxiYWNrXCIsIGZhbHNlLCBcIk5vIGBIeWRyYXRlRmFsbGJhY2tgIGVsZW1lbnQgcHJvdmlkZWQgdG8gcmVuZGVyIGR1cmluZyBpbml0aWFsIGh5ZHJhdGlvblwiKTtcbiAgICAgICAgICBzaG91bGRSZW5kZXJIeWRyYXRlRmFsbGJhY2sgPSB0cnVlO1xuICAgICAgICAgIGh5ZHJhdGVGYWxsYmFja0VsZW1lbnQgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGZhbGxiYWNrSW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgc2hvdWxkUmVuZGVySHlkcmF0ZUZhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgICBoeWRyYXRlRmFsbGJhY2tFbGVtZW50ID0gbWF0Y2gucm91dGUuaHlkcmF0ZUZhbGxiYWNrRWxlbWVudCB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBtYXRjaGVzID0gcGFyZW50TWF0Y2hlcy5jb25jYXQocmVuZGVyZWRNYXRjaGVzLnNsaWNlKDAsIGluZGV4ICsgMSkpO1xuICAgIGxldCBnZXRDaGlsZHJlbiA9ICgpID0+IHtcbiAgICAgIGxldCBjaGlsZHJlbjtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjaGlsZHJlbiA9IGVycm9yRWxlbWVudDtcbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkUmVuZGVySHlkcmF0ZUZhbGxiYWNrKSB7XG4gICAgICAgIGNoaWxkcmVuID0gaHlkcmF0ZUZhbGxiYWNrRWxlbWVudDtcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2gucm91dGUuQ29tcG9uZW50KSB7XG4gICAgICAgIC8vIE5vdGU6IFRoaXMgaXMgYSBkZS1vcHRpbWl6ZWQgcGF0aCBzaW5jZSBSZWFjdCB3b24ndCByZS11c2UgdGhlXG4gICAgICAgIC8vIFJlYWN0RWxlbWVudCBzaW5jZSBpdCdzIGlkZW50aXR5IGNoYW5nZXMgd2l0aCBlYWNoIG5ld1xuICAgICAgICAvLyBSZWFjdC5jcmVhdGVFbGVtZW50IGNhbGwuICBXZSBrZWVwIHRoaXMgc28gZm9sa3MgY2FuIHVzZVxuICAgICAgICAvLyBgPFJvdXRlIENvbXBvbmVudD17Li4ufT5gIGluIGA8Um91dGVzPmAgYnV0IGdlbmVyYWxseSBgQ29tcG9uZW50YFxuICAgICAgICAvLyB1c2FnZSBpcyBvbmx5IGFkdmlzZWQgaW4gYFJvdXRlclByb3ZpZGVyYCB3aGVuIHdlIGNhbiBjb252ZXJ0IGl0IHRvXG4gICAgICAgIC8vIGBlbGVtZW50YCBhaGVhZCBvZiB0aW1lLlxuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KG1hdGNoLnJvdXRlLkNvbXBvbmVudCwgbnVsbCk7XG4gICAgICB9IGVsc2UgaWYgKG1hdGNoLnJvdXRlLmVsZW1lbnQpIHtcbiAgICAgICAgY2hpbGRyZW4gPSBtYXRjaC5yb3V0ZS5lbGVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGRyZW4gPSBvdXRsZXQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVuZGVyZWRSb3V0ZSwge1xuICAgICAgICBtYXRjaDogbWF0Y2gsXG4gICAgICAgIHJvdXRlQ29udGV4dDoge1xuICAgICAgICAgIG91dGxldCxcbiAgICAgICAgICBtYXRjaGVzLFxuICAgICAgICAgIGlzRGF0YVJvdXRlOiBkYXRhUm91dGVyU3RhdGUgIT0gbnVsbFxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gT25seSB3cmFwIGluIGFuIGVycm9yIGJvdW5kYXJ5IHdpdGhpbiBkYXRhIHJvdXRlciB1c2FnZXMgd2hlbiB3ZSBoYXZlIGFuXG4gICAgLy8gRXJyb3JCb3VuZGFyeS9lcnJvckVsZW1lbnQgb24gdGhpcyByb3V0ZS4gIE90aGVyd2lzZSBsZXQgaXQgYnViYmxlIHVwIHRvXG4gICAgLy8gYW4gYW5jZXN0b3IgRXJyb3JCb3VuZGFyeS9lcnJvckVsZW1lbnRcbiAgICByZXR1cm4gZGF0YVJvdXRlclN0YXRlICYmIChtYXRjaC5yb3V0ZS5FcnJvckJvdW5kYXJ5IHx8IG1hdGNoLnJvdXRlLmVycm9yRWxlbWVudCB8fCBpbmRleCA9PT0gMCkgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZW5kZXJFcnJvckJvdW5kYXJ5LCB7XG4gICAgICBsb2NhdGlvbjogZGF0YVJvdXRlclN0YXRlLmxvY2F0aW9uLFxuICAgICAgcmV2YWxpZGF0aW9uOiBkYXRhUm91dGVyU3RhdGUucmV2YWxpZGF0aW9uLFxuICAgICAgY29tcG9uZW50OiBlcnJvckVsZW1lbnQsXG4gICAgICBlcnJvcjogZXJyb3IsXG4gICAgICBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oKSxcbiAgICAgIHJvdXRlQ29udGV4dDoge1xuICAgICAgICBvdXRsZXQ6IG51bGwsXG4gICAgICAgIG1hdGNoZXMsXG4gICAgICAgIGlzRGF0YVJvdXRlOiB0cnVlXG4gICAgICB9XG4gICAgfSkgOiBnZXRDaGlsZHJlbigpO1xuICB9LCBudWxsKTtcbn1cbnZhciBEYXRhUm91dGVySG9vayA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoRGF0YVJvdXRlckhvb2spIHtcbiAgRGF0YVJvdXRlckhvb2tbXCJVc2VCbG9ja2VyXCJdID0gXCJ1c2VCbG9ja2VyXCI7XG4gIERhdGFSb3V0ZXJIb29rW1wiVXNlUmV2YWxpZGF0b3JcIl0gPSBcInVzZVJldmFsaWRhdG9yXCI7XG4gIERhdGFSb3V0ZXJIb29rW1wiVXNlTmF2aWdhdGVTdGFibGVcIl0gPSBcInVzZU5hdmlnYXRlXCI7XG4gIHJldHVybiBEYXRhUm91dGVySG9vaztcbn0oRGF0YVJvdXRlckhvb2sgfHwge30pO1xudmFyIERhdGFSb3V0ZXJTdGF0ZUhvb2sgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKERhdGFSb3V0ZXJTdGF0ZUhvb2spIHtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZUJsb2NrZXJcIl0gPSBcInVzZUJsb2NrZXJcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZUxvYWRlckRhdGFcIl0gPSBcInVzZUxvYWRlckRhdGFcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZUFjdGlvbkRhdGFcIl0gPSBcInVzZUFjdGlvbkRhdGFcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZVJvdXRlRXJyb3JcIl0gPSBcInVzZVJvdXRlRXJyb3JcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZU5hdmlnYXRpb25cIl0gPSBcInVzZU5hdmlnYXRpb25cIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZVJvdXRlTG9hZGVyRGF0YVwiXSA9IFwidXNlUm91dGVMb2FkZXJEYXRhXCI7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VNYXRjaGVzXCJdID0gXCJ1c2VNYXRjaGVzXCI7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VSZXZhbGlkYXRvclwiXSA9IFwidXNlUmV2YWxpZGF0b3JcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZU5hdmlnYXRlU3RhYmxlXCJdID0gXCJ1c2VOYXZpZ2F0ZVwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlUm91dGVJZFwiXSA9IFwidXNlUm91dGVJZFwiO1xuICByZXR1cm4gRGF0YVJvdXRlclN0YXRlSG9vaztcbn0oRGF0YVJvdXRlclN0YXRlSG9vayB8fCB7fSk7XG5mdW5jdGlvbiBnZXREYXRhUm91dGVyQ29uc29sZUVycm9yKGhvb2tOYW1lKSB7XG4gIHJldHVybiBob29rTmFtZSArIFwiIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBkYXRhIHJvdXRlci4gIFNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS92Ni9yb3V0ZXJzL3BpY2tpbmctYS1yb3V0ZXIuXCI7XG59XG5mdW5jdGlvbiB1c2VEYXRhUm91dGVyQ29udGV4dChob29rTmFtZSkge1xuICBsZXQgY3R4ID0gUmVhY3QudXNlQ29udGV4dChEYXRhUm91dGVyQ29udGV4dCk7XG4gICFjdHggPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBnZXREYXRhUm91dGVyQ29uc29sZUVycm9yKGhvb2tOYW1lKSkgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIGN0eDtcbn1cbmZ1bmN0aW9uIHVzZURhdGFSb3V0ZXJTdGF0ZShob29rTmFtZSkge1xuICBsZXQgc3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQpO1xuICAhc3RhdGUgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBnZXREYXRhUm91dGVyQ29uc29sZUVycm9yKGhvb2tOYW1lKSkgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIHN0YXRlO1xufVxuZnVuY3Rpb24gdXNlUm91dGVDb250ZXh0KGhvb2tOYW1lKSB7XG4gIGxldCByb3V0ZSA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgIXJvdXRlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgZ2V0RGF0YVJvdXRlckNvbnNvbGVFcnJvcihob29rTmFtZSkpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiByb3V0ZTtcbn1cblxuLy8gSW50ZXJuYWwgdmVyc2lvbiB3aXRoIGhvb2tOYW1lLWF3YXJlIGRlYnVnZ2luZ1xuZnVuY3Rpb24gdXNlQ3VycmVudFJvdXRlSWQoaG9va05hbWUpIHtcbiAgbGV0IHJvdXRlID0gdXNlUm91dGVDb250ZXh0KGhvb2tOYW1lKTtcbiAgbGV0IHRoaXNSb3V0ZSA9IHJvdXRlLm1hdGNoZXNbcm91dGUubWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgIXRoaXNSb3V0ZS5yb3V0ZS5pZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIGhvb2tOYW1lICsgXCIgY2FuIG9ubHkgYmUgdXNlZCBvbiByb3V0ZXMgdGhhdCBjb250YWluIGEgdW5pcXVlIFxcXCJpZFxcXCJcIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIHRoaXNSb3V0ZS5yb3V0ZS5pZDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBJRCBmb3IgdGhlIG5lYXJlc3QgY29udGV4dHVhbCByb3V0ZVxuICovXG5mdW5jdGlvbiB1c2VSb3V0ZUlkKCkge1xuICByZXR1cm4gdXNlQ3VycmVudFJvdXRlSWQoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VSb3V0ZUlkKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50IG5hdmlnYXRpb24sIGRlZmF1bHRpbmcgdG8gYW4gXCJpZGxlXCIgbmF2aWdhdGlvbiB3aGVuXG4gKiBubyBuYXZpZ2F0aW9uIGlzIGluIHByb2dyZXNzXG4gKi9cbmZ1bmN0aW9uIHVzZU5hdmlnYXRpb24oKSB7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZU5hdmlnYXRpb24pO1xuICByZXR1cm4gc3RhdGUubmF2aWdhdGlvbjtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmV2YWxpZGF0ZSBmdW5jdGlvbiBmb3IgbWFudWFsbHkgdHJpZ2dlcmluZyByZXZhbGlkYXRpb24sIGFzIHdlbGxcbiAqIGFzIHRoZSBjdXJyZW50IHN0YXRlIG9mIGFueSBtYW51YWwgcmV2YWxpZGF0aW9uc1xuICovXG5mdW5jdGlvbiB1c2VSZXZhbGlkYXRvcigpIHtcbiAgbGV0IGRhdGFSb3V0ZXJDb250ZXh0ID0gdXNlRGF0YVJvdXRlckNvbnRleHQoRGF0YVJvdXRlckhvb2suVXNlUmV2YWxpZGF0b3IpO1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VSZXZhbGlkYXRvcik7XG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+ICh7XG4gICAgcmV2YWxpZGF0ZTogZGF0YVJvdXRlckNvbnRleHQucm91dGVyLnJldmFsaWRhdGUsXG4gICAgc3RhdGU6IHN0YXRlLnJldmFsaWRhdGlvblxuICB9KSwgW2RhdGFSb3V0ZXJDb250ZXh0LnJvdXRlci5yZXZhbGlkYXRlLCBzdGF0ZS5yZXZhbGlkYXRpb25dKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBhY3RpdmUgcm91dGUgbWF0Y2hlcywgdXNlZnVsIGZvciBhY2Nlc3NpbmcgbG9hZGVyRGF0YSBmb3JcbiAqIHBhcmVudC9jaGlsZCByb3V0ZXMgb3IgdGhlIHJvdXRlIFwiaGFuZGxlXCIgcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gdXNlTWF0Y2hlcygpIHtcbiAgbGV0IHtcbiAgICBtYXRjaGVzLFxuICAgIGxvYWRlckRhdGFcbiAgfSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZU1hdGNoZXMpO1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiBtYXRjaGVzLm1hcChtID0+IFVOU0FGRV9jb252ZXJ0Um91dGVNYXRjaFRvVWlNYXRjaChtLCBsb2FkZXJEYXRhKSksIFttYXRjaGVzLCBsb2FkZXJEYXRhXSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbG9hZGVyIGRhdGEgZm9yIHRoZSBuZWFyZXN0IGFuY2VzdG9yIFJvdXRlIGxvYWRlclxuICovXG5mdW5jdGlvbiB1c2VMb2FkZXJEYXRhKCkge1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VMb2FkZXJEYXRhKTtcbiAgbGV0IHJvdXRlSWQgPSB1c2VDdXJyZW50Um91dGVJZChEYXRhUm91dGVyU3RhdGVIb29rLlVzZUxvYWRlckRhdGEpO1xuICBpZiAoc3RhdGUuZXJyb3JzICYmIHN0YXRlLmVycm9yc1tyb3V0ZUlkXSAhPSBudWxsKSB7XG4gICAgY29uc29sZS5lcnJvcihcIllvdSBjYW5ub3QgYHVzZUxvYWRlckRhdGFgIGluIGFuIGVycm9yRWxlbWVudCAocm91dGVJZDogXCIgKyByb3V0ZUlkICsgXCIpXCIpO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIHN0YXRlLmxvYWRlckRhdGFbcm91dGVJZF07XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbG9hZGVyRGF0YSBmb3IgdGhlIGdpdmVuIHJvdXRlSWRcbiAqL1xuZnVuY3Rpb24gdXNlUm91dGVMb2FkZXJEYXRhKHJvdXRlSWQpIHtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlUm91dGVMb2FkZXJEYXRhKTtcbiAgcmV0dXJuIHN0YXRlLmxvYWRlckRhdGFbcm91dGVJZF07XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYWN0aW9uIGRhdGEgZm9yIHRoZSBuZWFyZXN0IGFuY2VzdG9yIFJvdXRlIGFjdGlvblxuICovXG5mdW5jdGlvbiB1c2VBY3Rpb25EYXRhKCkge1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VBY3Rpb25EYXRhKTtcbiAgbGV0IHJvdXRlSWQgPSB1c2VDdXJyZW50Um91dGVJZChEYXRhUm91dGVyU3RhdGVIb29rLlVzZUxvYWRlckRhdGEpO1xuICByZXR1cm4gc3RhdGUuYWN0aW9uRGF0YSA/IHN0YXRlLmFjdGlvbkRhdGFbcm91dGVJZF0gOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbmVhcmVzdCBhbmNlc3RvciBSb3V0ZSBlcnJvciwgd2hpY2ggY291bGQgYmUgYSBsb2FkZXIvYWN0aW9uXG4gKiBlcnJvciBvciBhIHJlbmRlciBlcnJvci4gIFRoaXMgaXMgaW50ZW5kZWQgdG8gYmUgY2FsbGVkIGZyb20geW91clxuICogRXJyb3JCb3VuZGFyeS9lcnJvckVsZW1lbnQgdG8gZGlzcGxheSBhIHByb3BlciBlcnJvciBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiB1c2VSb3V0ZUVycm9yKCkge1xuICB2YXIgX3N0YXRlJGVycm9ycztcbiAgbGV0IGVycm9yID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUVycm9yQ29udGV4dCk7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZVJvdXRlRXJyb3IpO1xuICBsZXQgcm91dGVJZCA9IHVzZUN1cnJlbnRSb3V0ZUlkKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlUm91dGVFcnJvcik7XG5cbiAgLy8gSWYgdGhpcyB3YXMgYSByZW5kZXIgZXJyb3IsIHdlIHB1dCBpdCBpbiBhIFJvdXRlRXJyb3IgY29udGV4dCBpbnNpZGVcbiAgLy8gb2YgUmVuZGVyRXJyb3JCb3VuZGFyeVxuICBpZiAoZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxuXG4gIC8vIE90aGVyd2lzZSBsb29rIGZvciBlcnJvcnMgZnJvbSBvdXIgZGF0YSByb3V0ZXIgc3RhdGVcbiAgcmV0dXJuIChfc3RhdGUkZXJyb3JzID0gc3RhdGUuZXJyb3JzKSA9PSBudWxsID8gdm9pZCAwIDogX3N0YXRlJGVycm9yc1tyb3V0ZUlkXTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBoYXBweS1wYXRoIGRhdGEgZnJvbSB0aGUgbmVhcmVzdCBhbmNlc3RvciBgPEF3YWl0IC8+YCB2YWx1ZVxuICovXG5mdW5jdGlvbiB1c2VBc3luY1ZhbHVlKCkge1xuICBsZXQgdmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KEF3YWl0Q29udGV4dCk7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gdm9pZCAwIDogdmFsdWUuX2RhdGE7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZXJyb3IgZnJvbSB0aGUgbmVhcmVzdCBhbmNlc3RvciBgPEF3YWl0IC8+YCB2YWx1ZVxuICovXG5mdW5jdGlvbiB1c2VBc3luY0Vycm9yKCkge1xuICBsZXQgdmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KEF3YWl0Q29udGV4dCk7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gdm9pZCAwIDogdmFsdWUuX2Vycm9yO1xufVxubGV0IGJsb2NrZXJJZCA9IDA7XG5cbi8qKlxuICogQWxsb3cgdGhlIGFwcGxpY2F0aW9uIHRvIGJsb2NrIG5hdmlnYXRpb25zIHdpdGhpbiB0aGUgU1BBIGFuZCBwcmVzZW50IHRoZVxuICogdXNlciBhIGNvbmZpcm1hdGlvbiBkaWFsb2cgdG8gY29uZmlybSB0aGUgbmF2aWdhdGlvbi4gIE1vc3RseSB1c2VkIHRvIGF2b2lkXG4gKiB1c2luZyBoYWxmLWZpbGxlZCBmb3JtIGRhdGEuICBUaGlzIGRvZXMgbm90IGhhbmRsZSBoYXJkLXJlbG9hZHMgb3JcbiAqIGNyb3NzLW9yaWdpbiBuYXZpZ2F0aW9ucy5cbiAqL1xuZnVuY3Rpb24gdXNlQmxvY2tlcihzaG91bGRCbG9jaykge1xuICBsZXQge1xuICAgIHJvdXRlcixcbiAgICBiYXNlbmFtZVxuICB9ID0gdXNlRGF0YVJvdXRlckNvbnRleHQoRGF0YVJvdXRlckhvb2suVXNlQmxvY2tlcik7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZUJsb2NrZXIpO1xuICBsZXQgW2Jsb2NrZXJLZXksIHNldEJsb2NrZXJLZXldID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGxldCBibG9ja2VyRnVuY3Rpb24gPSBSZWFjdC51c2VDYWxsYmFjayhhcmcgPT4ge1xuICAgIGlmICh0eXBlb2Ygc2hvdWxkQmxvY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuICEhc2hvdWxkQmxvY2s7XG4gICAgfVxuICAgIGlmIChiYXNlbmFtZSA9PT0gXCIvXCIpIHtcbiAgICAgIHJldHVybiBzaG91bGRCbG9jayhhcmcpO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXkgcHJvdmlkZWQgdXMgYSBmdW5jdGlvbiBhbmQgd2UndmUgZ290IGFuIGFjdGl2ZSBiYXNlbmFtZSwgc3RyaXBcbiAgICAvLyBpdCBmcm9tIHRoZSBsb2NhdGlvbnMgd2UgZXhwb3NlIHRvIHRoZSB1c2VyIHRvIG1hdGNoIHRoZSBiZWhhdmlvciBvZlxuICAgIC8vIHVzZUxvY2F0aW9uXG4gICAgbGV0IHtcbiAgICAgIGN1cnJlbnRMb2NhdGlvbixcbiAgICAgIG5leHRMb2NhdGlvbixcbiAgICAgIGhpc3RvcnlBY3Rpb25cbiAgICB9ID0gYXJnO1xuICAgIHJldHVybiBzaG91bGRCbG9jayh7XG4gICAgICBjdXJyZW50TG9jYXRpb246IF9leHRlbmRzKHt9LCBjdXJyZW50TG9jYXRpb24sIHtcbiAgICAgICAgcGF0aG5hbWU6IHN0cmlwQmFzZW5hbWUoY3VycmVudExvY2F0aW9uLnBhdGhuYW1lLCBiYXNlbmFtZSkgfHwgY3VycmVudExvY2F0aW9uLnBhdGhuYW1lXG4gICAgICB9KSxcbiAgICAgIG5leHRMb2NhdGlvbjogX2V4dGVuZHMoe30sIG5leHRMb2NhdGlvbiwge1xuICAgICAgICBwYXRobmFtZTogc3RyaXBCYXNlbmFtZShuZXh0TG9jYXRpb24ucGF0aG5hbWUsIGJhc2VuYW1lKSB8fCBuZXh0TG9jYXRpb24ucGF0aG5hbWVcbiAgICAgIH0pLFxuICAgICAgaGlzdG9yeUFjdGlvblxuICAgIH0pO1xuICB9LCBbYmFzZW5hbWUsIHNob3VsZEJsb2NrXSk7XG5cbiAgLy8gVGhpcyBlZmZlY3QgaXMgaW4gY2hhcmdlIG9mIGJsb2NrZXIga2V5IGFzc2lnbm1lbnQgYW5kIGRlbGV0aW9uICh3aGljaCBpc1xuICAvLyB0aWdodGx5IGNvdXBsZWQgdG8gdGhlIGtleSlcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQga2V5ID0gU3RyaW5nKCsrYmxvY2tlcklkKTtcbiAgICBzZXRCbG9ja2VyS2V5KGtleSk7XG4gICAgcmV0dXJuICgpID0+IHJvdXRlci5kZWxldGVCbG9ja2VyKGtleSk7XG4gIH0sIFtyb3V0ZXJdKTtcblxuICAvLyBUaGlzIGVmZmVjdCBoYW5kbGVzIGFzc2lnbmluZyB0aGUgYmxvY2tlckZ1bmN0aW9uLiAgVGhpcyBpcyB0byBoYW5kbGVcbiAgLy8gdW5zdGFibGUgYmxvY2tlciBmdW5jdGlvbiBpZGVudGl0aWVzLCBhbmQgaGFwcGVucyBvbmx5IGFmdGVyIHRoZSBwcmlvclxuICAvLyBlZmZlY3Qgc28gd2UgZG9uJ3QgZ2V0IGFuIG9ycGhhbmVkIGJsb2NrZXJGdW5jdGlvbiBpbiB0aGUgcm91dGVyIHdpdGggYVxuICAvLyBrZXkgb2YgXCJcIi4gIFVudGlsIHRoZW4gd2UganVzdCBoYXZlIHRoZSBJRExFX0JMT0NLRVIuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGJsb2NrZXJLZXkgIT09IFwiXCIpIHtcbiAgICAgIHJvdXRlci5nZXRCbG9ja2VyKGJsb2NrZXJLZXksIGJsb2NrZXJGdW5jdGlvbik7XG4gICAgfVxuICB9LCBbcm91dGVyLCBibG9ja2VyS2V5LCBibG9ja2VyRnVuY3Rpb25dKTtcblxuICAvLyBQcmVmZXIgdGhlIGJsb2NrZXIgZnJvbSBgc3RhdGVgIG5vdCBgcm91dGVyLnN0YXRlYCBzaW5jZSBEYXRhUm91dGVyQ29udGV4dFxuICAvLyBpcyBtZW1vaXplZCBzbyB0aGlzIGVuc3VyZXMgd2UgdXBkYXRlIG9uIGJsb2NrZXIgc3RhdGUgdXBkYXRlc1xuICByZXR1cm4gYmxvY2tlcktleSAmJiBzdGF0ZS5ibG9ja2Vycy5oYXMoYmxvY2tlcktleSkgPyBzdGF0ZS5ibG9ja2Vycy5nZXQoYmxvY2tlcktleSkgOiBJRExFX0JMT0NLRVI7XG59XG5cbi8qKlxuICogU3RhYmxlIHZlcnNpb24gb2YgdXNlTmF2aWdhdGUgdGhhdCBpcyB1c2VkIHdoZW4gd2UgYXJlIGluIHRoZSBjb250ZXh0IG9mXG4gKiBhIFJvdXRlclByb3ZpZGVyLlxuICovXG5mdW5jdGlvbiB1c2VOYXZpZ2F0ZVN0YWJsZSgpIHtcbiAgbGV0IHtcbiAgICByb3V0ZXJcbiAgfSA9IHVzZURhdGFSb3V0ZXJDb250ZXh0KERhdGFSb3V0ZXJIb29rLlVzZU5hdmlnYXRlU3RhYmxlKTtcbiAgbGV0IGlkID0gdXNlQ3VycmVudFJvdXRlSWQoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VOYXZpZ2F0ZVN0YWJsZSk7XG4gIGxldCBhY3RpdmVSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBhY3RpdmVSZWYuY3VycmVudCA9IHRydWU7XG4gIH0pO1xuICBsZXQgbmF2aWdhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodG8sIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKGFjdGl2ZVJlZi5jdXJyZW50LCBuYXZpZ2F0ZUVmZmVjdFdhcm5pbmcpIDogdm9pZCAwO1xuXG4gICAgLy8gU2hvcnQgY2lyY3VpdCBoZXJlIHNpbmNlIGlmIHRoaXMgaGFwcGVucyBvbiBmaXJzdCByZW5kZXIgdGhlIG5hdmlnYXRlXG4gICAgLy8gaXMgdXNlbGVzcyBiZWNhdXNlIHdlIGhhdmVuJ3Qgd2lyZWQgdXAgb3VyIHJvdXRlciBzdWJzY3JpYmVyIHlldFxuICAgIGlmICghYWN0aXZlUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBpZiAodHlwZW9mIHRvID09PSBcIm51bWJlclwiKSB7XG4gICAgICByb3V0ZXIubmF2aWdhdGUodG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIubmF2aWdhdGUodG8sIF9leHRlbmRzKHtcbiAgICAgICAgZnJvbVJvdXRlSWQ6IGlkXG4gICAgICB9LCBvcHRpb25zKSk7XG4gICAgfVxuICB9LCBbcm91dGVyLCBpZF0pO1xuICByZXR1cm4gbmF2aWdhdGU7XG59XG5jb25zdCBhbHJlYWR5V2FybmVkJDEgPSB7fTtcbmZ1bmN0aW9uIHdhcm5pbmdPbmNlKGtleSwgY29uZCwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmQgJiYgIWFscmVhZHlXYXJuZWQkMVtrZXldKSB7XG4gICAgYWxyZWFkeVdhcm5lZCQxW2tleV0gPSB0cnVlO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKGZhbHNlLCBtZXNzYWdlKSA6IHZvaWQgMDtcbiAgfVxufVxuXG5jb25zdCBhbHJlYWR5V2FybmVkID0ge307XG5mdW5jdGlvbiB3YXJuT25jZShrZXksIG1lc3NhZ2UpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhYWxyZWFkeVdhcm5lZFttZXNzYWdlXSkge1xuICAgIGFscmVhZHlXYXJuZWRbbWVzc2FnZV0gPSB0cnVlO1xuICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgfVxufVxuY29uc3QgbG9nRGVwcmVjYXRpb24gPSAoZmxhZywgbXNnLCBsaW5rKSA9PiB3YXJuT25jZShmbGFnLCBcIlxcdTI2QTBcXHVGRTBGIFJlYWN0IFJvdXRlciBGdXR1cmUgRmxhZyBXYXJuaW5nOiBcIiArIG1zZyArIFwiLiBcIiArIChcIllvdSBjYW4gdXNlIHRoZSBgXCIgKyBmbGFnICsgXCJgIGZ1dHVyZSBmbGFnIHRvIG9wdC1pbiBlYXJseS4gXCIpICsgKFwiRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSBcIiArIGxpbmsgKyBcIi5cIikpO1xuZnVuY3Rpb24gbG9nVjZEZXByZWNhdGlvbldhcm5pbmdzKHJlbmRlckZ1dHVyZSwgcm91dGVyRnV0dXJlKSB7XG4gIGlmICgocmVuZGVyRnV0dXJlID09IG51bGwgPyB2b2lkIDAgOiByZW5kZXJGdXR1cmUudjdfc3RhcnRUcmFuc2l0aW9uKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbG9nRGVwcmVjYXRpb24oXCJ2N19zdGFydFRyYW5zaXRpb25cIiwgXCJSZWFjdCBSb3V0ZXIgd2lsbCBiZWdpbiB3cmFwcGluZyBzdGF0ZSB1cGRhdGVzIGluIGBSZWFjdC5zdGFydFRyYW5zaXRpb25gIGluIHY3XCIsIFwiaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vdjYvdXBncmFkaW5nL2Z1dHVyZSN2N19zdGFydHRyYW5zaXRpb25cIik7XG4gIH1cbiAgaWYgKChyZW5kZXJGdXR1cmUgPT0gbnVsbCA/IHZvaWQgMCA6IHJlbmRlckZ1dHVyZS52N19yZWxhdGl2ZVNwbGF0UGF0aCkgPT09IHVuZGVmaW5lZCAmJiAoIXJvdXRlckZ1dHVyZSB8fCAhcm91dGVyRnV0dXJlLnY3X3JlbGF0aXZlU3BsYXRQYXRoKSkge1xuICAgIGxvZ0RlcHJlY2F0aW9uKFwidjdfcmVsYXRpdmVTcGxhdFBhdGhcIiwgXCJSZWxhdGl2ZSByb3V0ZSByZXNvbHV0aW9uIHdpdGhpbiBTcGxhdCByb3V0ZXMgaXMgY2hhbmdpbmcgaW4gdjdcIiwgXCJodHRwczovL3JlYWN0cm91dGVyLmNvbS92Ni91cGdyYWRpbmcvZnV0dXJlI3Y3X3JlbGF0aXZlc3BsYXRwYXRoXCIpO1xuICB9XG4gIGlmIChyb3V0ZXJGdXR1cmUpIHtcbiAgICBpZiAocm91dGVyRnV0dXJlLnY3X2ZldGNoZXJQZXJzaXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxvZ0RlcHJlY2F0aW9uKFwidjdfZmV0Y2hlclBlcnNpc3RcIiwgXCJUaGUgcGVyc2lzdGVuY2UgYmVoYXZpb3Igb2YgZmV0Y2hlcnMgaXMgY2hhbmdpbmcgaW4gdjdcIiwgXCJodHRwczovL3JlYWN0cm91dGVyLmNvbS92Ni91cGdyYWRpbmcvZnV0dXJlI3Y3X2ZldGNoZXJwZXJzaXN0XCIpO1xuICAgIH1cbiAgICBpZiAocm91dGVyRnV0dXJlLnY3X25vcm1hbGl6ZUZvcm1NZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbG9nRGVwcmVjYXRpb24oXCJ2N19ub3JtYWxpemVGb3JtTWV0aG9kXCIsIFwiQ2FzaW5nIG9mIGBmb3JtTWV0aG9kYCBmaWVsZHMgaXMgYmVpbmcgbm9ybWFsaXplZCB0byB1cHBlcmNhc2UgaW4gdjdcIiwgXCJodHRwczovL3JlYWN0cm91dGVyLmNvbS92Ni91cGdyYWRpbmcvZnV0dXJlI3Y3X25vcm1hbGl6ZWZvcm1tZXRob2RcIik7XG4gICAgfVxuICAgIGlmIChyb3V0ZXJGdXR1cmUudjdfcGFydGlhbEh5ZHJhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2dEZXByZWNhdGlvbihcInY3X3BhcnRpYWxIeWRyYXRpb25cIiwgXCJgUm91dGVyUHJvdmlkZXJgIGh5ZHJhdGlvbiBiZWhhdmlvciBpcyBjaGFuZ2luZyBpbiB2N1wiLCBcImh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3Y2L3VwZ3JhZGluZy9mdXR1cmUjdjdfcGFydGlhbGh5ZHJhdGlvblwiKTtcbiAgICB9XG4gICAgaWYgKHJvdXRlckZ1dHVyZS52N19za2lwQWN0aW9uRXJyb3JSZXZhbGlkYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgbG9nRGVwcmVjYXRpb24oXCJ2N19za2lwQWN0aW9uRXJyb3JSZXZhbGlkYXRpb25cIiwgXCJUaGUgcmV2YWxpZGF0aW9uIGJlaGF2aW9yIGFmdGVyIDR4eC81eHggYGFjdGlvbmAgcmVzcG9uc2VzIGlzIGNoYW5naW5nIGluIHY3XCIsIFwiaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vdjYvdXBncmFkaW5nL2Z1dHVyZSN2N19za2lwYWN0aW9uZXJyb3JyZXZhbGlkYXRpb25cIik7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICBXZWJwYWNrICsgUmVhY3QgMTcgZmFpbHMgdG8gY29tcGlsZSBvbiBhbnkgb2YgdGhlIGZvbGxvd2luZyBiZWNhdXNlIHdlYnBhY2tcbiAgY29tcGxhaW5zIHRoYXQgYHN0YXJ0VHJhbnNpdGlvbmAgZG9lc24ndCBleGlzdCBpbiBgUmVhY3RgOlxuICAqIGltcG9ydCB7IHN0YXJ0VHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdFwiXG4gICogaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBmcm9tIFwicmVhY3RcIjtcbiAgICBcInN0YXJ0VHJhbnNpdGlvblwiIGluIFJlYWN0ID8gUmVhY3Quc3RhcnRUcmFuc2l0aW9uKCgpID0+IHNldFN0YXRlKCkpIDogc2V0U3RhdGUoKVxuICAqIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gZnJvbSBcInJlYWN0XCI7XG4gICAgXCJzdGFydFRyYW5zaXRpb25cIiBpbiBSZWFjdCA/IFJlYWN0W1wic3RhcnRUcmFuc2l0aW9uXCJdKCgpID0+IHNldFN0YXRlKCkpIDogc2V0U3RhdGUoKVxuXG4gIE1vdmluZyBpdCB0byBhIGNvbnN0YW50IHN1Y2ggYXMgdGhlIGZvbGxvd2luZyBzb2x2ZXMgdGhlIFdlYnBhY2svUmVhY3QgMTcgaXNzdWU6XG4gICogaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBmcm9tIFwicmVhY3RcIjtcbiAgICBjb25zdCBTVEFSVF9UUkFOU0lUSU9OID0gXCJzdGFydFRyYW5zaXRpb25cIjtcbiAgICBTVEFSVF9UUkFOU0lUSU9OIGluIFJlYWN0ID8gUmVhY3RbU1RBUlRfVFJBTlNJVElPTl0oKCkgPT4gc2V0U3RhdGUoKSkgOiBzZXRTdGF0ZSgpXG5cbiAgSG93ZXZlciwgdGhhdCBpbnRyb2R1Y2VzIHdlYnBhY2svdGVyc2VyIG1pbmlmaWNhdGlvbiBpc3N1ZXMgaW4gcHJvZHVjdGlvbiBidWlsZHNcbiAgaW4gUmVhY3QgMTggd2hlcmUgbWluaWZpY2F0aW9uL29iZnVzY2F0aW9uIGVuZHMgdXAgcmVtb3ZpbmcgdGhlIGNhbGwgb2ZcbiAgUmVhY3Quc3RhcnRUcmFuc2l0aW9uIGVudGlyZWx5IGZyb20gdGhlIGZpcnN0IGhhbGYgb2YgdGhlIHRlcm5hcnkuICBHcmFiYmluZ1xuICB0aGlzIGV4cG9ydGVkIHJlZmVyZW5jZSBvbmNlIHVwIGZyb250IHJlc29sdmVzIHRoYXQgaXNzdWUuXG5cbiAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZW1peC1ydW4vcmVhY3Qtcm91dGVyL2lzc3Vlcy8xMDU3OVxuKi9cbmNvbnN0IFNUQVJUX1RSQU5TSVRJT04gPSBcInN0YXJ0VHJhbnNpdGlvblwiO1xuY29uc3Qgc3RhcnRUcmFuc2l0aW9uSW1wbCA9IFJlYWN0W1NUQVJUX1RSQU5TSVRJT05dO1xuXG4vKipcbiAqIEdpdmVuIGEgUmVtaXggUm91dGVyIGluc3RhbmNlLCByZW5kZXIgdGhlIGFwcHJvcHJpYXRlIFVJXG4gKi9cbmZ1bmN0aW9uIFJvdXRlclByb3ZpZGVyKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBmYWxsYmFja0VsZW1lbnQsXG4gICAgcm91dGVyLFxuICAgIGZ1dHVyZVxuICB9ID0gX3JlZjtcbiAgbGV0IFtzdGF0ZSwgc2V0U3RhdGVJbXBsXSA9IFJlYWN0LnVzZVN0YXRlKHJvdXRlci5zdGF0ZSk7XG4gIGxldCB7XG4gICAgdjdfc3RhcnRUcmFuc2l0aW9uXG4gIH0gPSBmdXR1cmUgfHwge307XG4gIGxldCBzZXRTdGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKG5ld1N0YXRlID0+IHtcbiAgICBpZiAodjdfc3RhcnRUcmFuc2l0aW9uICYmIHN0YXJ0VHJhbnNpdGlvbkltcGwpIHtcbiAgICAgIHN0YXJ0VHJhbnNpdGlvbkltcGwoKCkgPT4gc2V0U3RhdGVJbXBsKG5ld1N0YXRlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXRlSW1wbChuZXdTdGF0ZSk7XG4gICAgfVxuICB9LCBbc2V0U3RhdGVJbXBsLCB2N19zdGFydFRyYW5zaXRpb25dKTtcblxuICAvLyBOZWVkIHRvIHVzZSBhIGxheW91dCBlZmZlY3QgaGVyZSBzbyB3ZSBhcmUgc3Vic2NyaWJlZCBlYXJseSBlbm91Z2ggdG9cbiAgLy8gcGljayB1cCBvbiBhbnkgcmVuZGVyLWRyaXZlbiByZWRpcmVjdHMvbmF2aWdhdGlvbnMgKHVzZUVmZmVjdC88TmF2aWdhdGU+KVxuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4gcm91dGVyLnN1YnNjcmliZShzZXRTdGF0ZSksIFtyb3V0ZXIsIHNldFN0YXRlXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcoZmFsbGJhY2tFbGVtZW50ID09IG51bGwgfHwgIXJvdXRlci5mdXR1cmUudjdfcGFydGlhbEh5ZHJhdGlvbiwgXCJgPFJvdXRlclByb3ZpZGVyIGZhbGxiYWNrRWxlbWVudD5gIGlzIGRlcHJlY2F0ZWQgd2hlbiB1c2luZyBcIiArIFwiYHY3X3BhcnRpYWxIeWRyYXRpb25gLCB1c2UgYSBgSHlkcmF0ZUZhbGxiYWNrYCBjb21wb25lbnQgaW5zdGVhZFwiKSA6IHZvaWQgMDtcbiAgICAvLyBPbmx5IGxvZyB0aGlzIG9uY2Ugb24gaW5pdGlhbCBtb3VudFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW10pO1xuICBsZXQgbmF2aWdhdG9yID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZUhyZWY6IHJvdXRlci5jcmVhdGVIcmVmLFxuICAgICAgZW5jb2RlTG9jYXRpb246IHJvdXRlci5lbmNvZGVMb2NhdGlvbixcbiAgICAgIGdvOiBuID0+IHJvdXRlci5uYXZpZ2F0ZShuKSxcbiAgICAgIHB1c2g6ICh0bywgc3RhdGUsIG9wdHMpID0+IHJvdXRlci5uYXZpZ2F0ZSh0bywge1xuICAgICAgICBzdGF0ZSxcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLnByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgfSksXG4gICAgICByZXBsYWNlOiAodG8sIHN0YXRlLCBvcHRzKSA9PiByb3V0ZXIubmF2aWdhdGUodG8sIHtcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5wcmV2ZW50U2Nyb2xsUmVzZXRcbiAgICAgIH0pXG4gICAgfTtcbiAgfSwgW3JvdXRlcl0pO1xuICBsZXQgYmFzZW5hbWUgPSByb3V0ZXIuYmFzZW5hbWUgfHwgXCIvXCI7XG4gIGxldCBkYXRhUm91dGVyQ29udGV4dCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICByb3V0ZXIsXG4gICAgbmF2aWdhdG9yLFxuICAgIHN0YXRpYzogZmFsc2UsXG4gICAgYmFzZW5hbWVcbiAgfSksIFtyb3V0ZXIsIG5hdmlnYXRvciwgYmFzZW5hbWVdKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IGxvZ1Y2RGVwcmVjYXRpb25XYXJuaW5ncyhmdXR1cmUsIHJvdXRlci5mdXR1cmUpLCBbcm91dGVyLCBmdXR1cmVdKTtcblxuICAvLyBUaGUgZnJhZ21lbnQgYW5kIHtudWxsfSBoZXJlIGFyZSBpbXBvcnRhbnQhICBXZSBuZWVkIHRoZW0gdG8ga2VlcCBSZWFjdCAxOCdzXG4gIC8vIHVzZUlkIGhhcHB5IHdoZW4gd2UgYXJlIHNlcnZlci1yZW5kZXJpbmcgc2luY2Ugd2UgbWF5IGhhdmUgYSA8c2NyaXB0PiBoZXJlXG4gIC8vIGNvbnRhaW5pbmcgdGhlIGh5ZHJhdGVkIHNlcnZlci1zaWRlIHN0YXRpY0NvbnRleHQgKGZyb20gU3RhdGljUm91dGVyUHJvdmlkZXIpLlxuICAvLyB1c2VJZCByZWxpZXMgb24gdGhlIGNvbXBvbmVudCB0cmVlIHN0cnVjdHVyZSB0byBnZW5lcmF0ZSBkZXRlcm1pbmlzdGljIGlkJ3NcbiAgLy8gc28gd2UgbmVlZCB0byBlbnN1cmUgaXQgcmVtYWlucyB0aGUgc2FtZSBvbiB0aGUgY2xpZW50IGV2ZW4gdGhvdWdoXG4gIC8vIHdlIGRvbid0IG5lZWQgdGhlIDxzY3JpcHQ+IHRhZ1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERhdGFSb3V0ZXJDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGRhdGFSb3V0ZXJDb250ZXh0XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogc3RhdGVcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IGJhc2VuYW1lLFxuICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICBuYXZpZ2F0aW9uVHlwZTogc3RhdGUuaGlzdG9yeUFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IG5hdmlnYXRvcixcbiAgICBmdXR1cmU6IHtcbiAgICAgIHY3X3JlbGF0aXZlU3BsYXRQYXRoOiByb3V0ZXIuZnV0dXJlLnY3X3JlbGF0aXZlU3BsYXRQYXRoXG4gICAgfVxuICB9LCBzdGF0ZS5pbml0aWFsaXplZCB8fCByb3V0ZXIuZnV0dXJlLnY3X3BhcnRpYWxIeWRyYXRpb24gPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEYXRhUm91dGVzLCB7XG4gICAgcm91dGVzOiByb3V0ZXIucm91dGVzLFxuICAgIGZ1dHVyZTogcm91dGVyLmZ1dHVyZSxcbiAgICBzdGF0ZTogc3RhdGVcbiAgfSkgOiBmYWxsYmFja0VsZW1lbnQpKSksIG51bGwpO1xufVxuZnVuY3Rpb24gRGF0YVJvdXRlcyhfcmVmMikge1xuICBsZXQge1xuICAgIHJvdXRlcyxcbiAgICBmdXR1cmUsXG4gICAgc3RhdGVcbiAgfSA9IF9yZWYyO1xuICByZXR1cm4gdXNlUm91dGVzSW1wbChyb3V0ZXMsIHVuZGVmaW5lZCwgc3RhdGUsIGZ1dHVyZSk7XG59XG4vKipcbiAqIEEgYDxSb3V0ZXI+YCB0aGF0IHN0b3JlcyBhbGwgZW50cmllcyBpbiBtZW1vcnkuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS92Ni9yb3V0ZXItY29tcG9uZW50cy9tZW1vcnktcm91dGVyXG4gKi9cbmZ1bmN0aW9uIE1lbW9yeVJvdXRlcihfcmVmMykge1xuICBsZXQge1xuICAgIGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIGluaXRpYWxFbnRyaWVzLFxuICAgIGluaXRpYWxJbmRleCxcbiAgICBmdXR1cmVcbiAgfSA9IF9yZWYzO1xuICBsZXQgaGlzdG9yeVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICBpZiAoaGlzdG9yeVJlZi5jdXJyZW50ID09IG51bGwpIHtcbiAgICBoaXN0b3J5UmVmLmN1cnJlbnQgPSBjcmVhdGVNZW1vcnlIaXN0b3J5KHtcbiAgICAgIGluaXRpYWxFbnRyaWVzLFxuICAgICAgaW5pdGlhbEluZGV4LFxuICAgICAgdjVDb21wYXQ6IHRydWVcbiAgICB9KTtcbiAgfVxuICBsZXQgaGlzdG9yeSA9IGhpc3RvcnlSZWYuY3VycmVudDtcbiAgbGV0IFtzdGF0ZSwgc2V0U3RhdGVJbXBsXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICBsZXQge1xuICAgIHY3X3N0YXJ0VHJhbnNpdGlvblxuICB9ID0gZnV0dXJlIHx8IHt9O1xuICBsZXQgc2V0U3RhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhuZXdTdGF0ZSA9PiB7XG4gICAgdjdfc3RhcnRUcmFuc2l0aW9uICYmIHN0YXJ0VHJhbnNpdGlvbkltcGwgPyBzdGFydFRyYW5zaXRpb25JbXBsKCgpID0+IHNldFN0YXRlSW1wbChuZXdTdGF0ZSkpIDogc2V0U3RhdGVJbXBsKG5ld1N0YXRlKTtcbiAgfSwgW3NldFN0YXRlSW1wbCwgdjdfc3RhcnRUcmFuc2l0aW9uXSk7XG4gIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiBoaXN0b3J5Lmxpc3RlbihzZXRTdGF0ZSksIFtoaXN0b3J5LCBzZXRTdGF0ZV0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gbG9nVjZEZXByZWNhdGlvbldhcm5pbmdzKGZ1dHVyZSksIFtmdXR1cmVdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBoaXN0b3J5LFxuICAgIGZ1dHVyZTogZnV0dXJlXG4gIH0pO1xufVxuLyoqXG4gKiBDaGFuZ2VzIHRoZSBjdXJyZW50IGxvY2F0aW9uLlxuICpcbiAqIE5vdGU6IFRoaXMgQVBJIGlzIG1vc3RseSB1c2VmdWwgaW4gUmVhY3QuQ29tcG9uZW50IHN1YmNsYXNzZXMgdGhhdCBhcmUgbm90XG4gKiBhYmxlIHRvIHVzZSBob29rcy4gSW4gZnVuY3Rpb25hbCBjb21wb25lbnRzLCB3ZSByZWNvbW1lbmQgeW91IHVzZSB0aGVcbiAqIGB1c2VOYXZpZ2F0ZWAgaG9vayBpbnN0ZWFkLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vdjYvY29tcG9uZW50cy9uYXZpZ2F0ZVxuICovXG5mdW5jdGlvbiBOYXZpZ2F0ZShfcmVmNCkge1xuICBsZXQge1xuICAgIHRvLFxuICAgIHJlcGxhY2UsXG4gICAgc3RhdGUsXG4gICAgcmVsYXRpdmVcbiAgfSA9IF9yZWY0O1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZlxuICAvLyB0aGUgcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcIjxOYXZpZ2F0ZT4gbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBmdXR1cmUsXG4gICAgc3RhdGljOiBpc1N0YXRpY1xuICB9ID0gUmVhY3QudXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCk7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKCFpc1N0YXRpYywgXCI8TmF2aWdhdGU+IG11c3Qgbm90IGJlIHVzZWQgb24gdGhlIGluaXRpYWwgcmVuZGVyIGluIGEgPFN0YXRpY1JvdXRlcj4uIFwiICsgXCJUaGlzIGlzIGEgbm8tb3AsIGJ1dCB5b3Ugc2hvdWxkIG1vZGlmeSB5b3VyIGNvZGUgc28gdGhlIDxOYXZpZ2F0ZT4gaXMgXCIgKyBcIm9ubHkgZXZlciByZW5kZXJlZCBpbiByZXNwb25zZSB0byBzb21lIHVzZXIgaW50ZXJhY3Rpb24gb3Igc3RhdGUgY2hhbmdlLlwiKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBtYXRjaGVzXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gIGxldCB7XG4gICAgcGF0aG5hbWU6IGxvY2F0aW9uUGF0aG5hbWVcbiAgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgLy8gUmVzb2x2ZSB0aGUgcGF0aCBvdXRzaWRlIG9mIHRoZSBlZmZlY3Qgc28gdGhhdCB3aGVuIGVmZmVjdHMgcnVuIHR3aWNlIGluXG4gIC8vIFN0cmljdE1vZGUgdGhleSBuYXZpZ2F0ZSB0byB0aGUgc2FtZSBwbGFjZVxuICBsZXQgcGF0aCA9IHJlc29sdmVUbyh0bywgVU5TQUZFX2dldFJlc29sdmVUb01hdGNoZXMobWF0Y2hlcywgZnV0dXJlLnY3X3JlbGF0aXZlU3BsYXRQYXRoKSwgbG9jYXRpb25QYXRobmFtZSwgcmVsYXRpdmUgPT09IFwicGF0aFwiKTtcbiAgbGV0IGpzb25QYXRoID0gSlNPTi5zdHJpbmdpZnkocGF0aCk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBuYXZpZ2F0ZShKU09OLnBhcnNlKGpzb25QYXRoKSwge1xuICAgIHJlcGxhY2UsXG4gICAgc3RhdGUsXG4gICAgcmVsYXRpdmVcbiAgfSksIFtuYXZpZ2F0ZSwganNvblBhdGgsIHJlbGF0aXZlLCByZXBsYWNlLCBzdGF0ZV0pO1xuICByZXR1cm4gbnVsbDtcbn1cbi8qKlxuICogUmVuZGVycyB0aGUgY2hpbGQgcm91dGUncyBlbGVtZW50LCBpZiB0aGVyZSBpcyBvbmUuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS92Ni9jb21wb25lbnRzL291dGxldFxuICovXG5mdW5jdGlvbiBPdXRsZXQocHJvcHMpIHtcbiAgcmV0dXJuIHVzZU91dGxldChwcm9wcy5jb250ZXh0KTtcbn1cbi8qKlxuICogRGVjbGFyZXMgYW4gZWxlbWVudCB0aGF0IHNob3VsZCBiZSByZW5kZXJlZCBhdCBhIGNlcnRhaW4gVVJMIHBhdGguXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS92Ni9jb21wb25lbnRzL3JvdXRlXG4gKi9cbmZ1bmN0aW9uIFJvdXRlKF9wcm9wcykge1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcIkEgPFJvdXRlPiBpcyBvbmx5IGV2ZXIgdG8gYmUgdXNlZCBhcyB0aGUgY2hpbGQgb2YgPFJvdXRlcz4gZWxlbWVudCwgXCIgKyBcIm5ldmVyIHJlbmRlcmVkIGRpcmVjdGx5LiBQbGVhc2Ugd3JhcCB5b3VyIDxSb3V0ZT4gaW4gYSA8Um91dGVzPi5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA7XG59XG4vKipcbiAqIFByb3ZpZGVzIGxvY2F0aW9uIGNvbnRleHQgZm9yIHRoZSByZXN0IG9mIHRoZSBhcHAuXG4gKlxuICogTm90ZTogWW91IHVzdWFsbHkgd29uJ3QgcmVuZGVyIGEgYDxSb3V0ZXI+YCBkaXJlY3RseS4gSW5zdGVhZCwgeW91J2xsIHJlbmRlciBhXG4gKiByb3V0ZXIgdGhhdCBpcyBtb3JlIHNwZWNpZmljIHRvIHlvdXIgZW52aXJvbm1lbnQgc3VjaCBhcyBhIGA8QnJvd3NlclJvdXRlcj5gXG4gKiBpbiB3ZWIgYnJvd3NlcnMgb3IgYSBgPFN0YXRpY1JvdXRlcj5gIGZvciBzZXJ2ZXIgcmVuZGVyaW5nLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vdjYvcm91dGVyLWNvbXBvbmVudHMvcm91dGVyXG4gKi9cbmZ1bmN0aW9uIFJvdXRlcihfcmVmNSkge1xuICBsZXQge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZVByb3AgPSBcIi9cIixcbiAgICBjaGlsZHJlbiA9IG51bGwsXG4gICAgbG9jYXRpb246IGxvY2F0aW9uUHJvcCxcbiAgICBuYXZpZ2F0aW9uVHlwZSA9IEFjdGlvbi5Qb3AsXG4gICAgbmF2aWdhdG9yLFxuICAgIHN0YXRpYzogc3RhdGljUHJvcCA9IGZhbHNlLFxuICAgIGZ1dHVyZVxuICB9ID0gX3JlZjU7XG4gICEhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcIllvdSBjYW5ub3QgcmVuZGVyIGEgPFJvdXRlcj4gaW5zaWRlIGFub3RoZXIgPFJvdXRlcj4uXCIgKyBcIiBZb3Ugc2hvdWxkIG5ldmVyIGhhdmUgbW9yZSB0aGFuIG9uZSBpbiB5b3VyIGFwcC5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcblxuICAvLyBQcmVzZXJ2ZSB0cmFpbGluZyBzbGFzaGVzIG9uIGJhc2VuYW1lLCBzbyB3ZSBjYW4gbGV0IHRoZSB1c2VyIGNvbnRyb2xcbiAgLy8gdGhlIGVuZm9yY2VtZW50IG9mIHRyYWlsaW5nIHNsYXNoZXMgdGhyb3VnaG91dCB0aGUgYXBwXG4gIGxldCBiYXNlbmFtZSA9IGJhc2VuYW1lUHJvcC5yZXBsYWNlKC9eXFwvKi8sIFwiL1wiKTtcbiAgbGV0IG5hdmlnYXRpb25Db250ZXh0ID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIGJhc2VuYW1lLFxuICAgIG5hdmlnYXRvcixcbiAgICBzdGF0aWM6IHN0YXRpY1Byb3AsXG4gICAgZnV0dXJlOiBfZXh0ZW5kcyh7XG4gICAgICB2N19yZWxhdGl2ZVNwbGF0UGF0aDogZmFsc2VcbiAgICB9LCBmdXR1cmUpXG4gIH0pLCBbYmFzZW5hbWUsIGZ1dHVyZSwgbmF2aWdhdG9yLCBzdGF0aWNQcm9wXSk7XG4gIGlmICh0eXBlb2YgbG9jYXRpb25Qcm9wID09PSBcInN0cmluZ1wiKSB7XG4gICAgbG9jYXRpb25Qcm9wID0gcGFyc2VQYXRoKGxvY2F0aW9uUHJvcCk7XG4gIH1cbiAgbGV0IHtcbiAgICBwYXRobmFtZSA9IFwiL1wiLFxuICAgIHNlYXJjaCA9IFwiXCIsXG4gICAgaGFzaCA9IFwiXCIsXG4gICAgc3RhdGUgPSBudWxsLFxuICAgIGtleSA9IFwiZGVmYXVsdFwiXG4gIH0gPSBsb2NhdGlvblByb3A7XG4gIGxldCBsb2NhdGlvbkNvbnRleHQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgdHJhaWxpbmdQYXRobmFtZSA9IHN0cmlwQmFzZW5hbWUocGF0aG5hbWUsIGJhc2VuYW1lKTtcbiAgICBpZiAodHJhaWxpbmdQYXRobmFtZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIHBhdGhuYW1lOiB0cmFpbGluZ1BhdGhuYW1lLFxuICAgICAgICBzZWFyY2gsXG4gICAgICAgIGhhc2gsXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBrZXlcbiAgICAgIH0sXG4gICAgICBuYXZpZ2F0aW9uVHlwZVxuICAgIH07XG4gIH0sIFtiYXNlbmFtZSwgcGF0aG5hbWUsIHNlYXJjaCwgaGFzaCwgc3RhdGUsIGtleSwgbmF2aWdhdGlvblR5cGVdKTtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcobG9jYXRpb25Db250ZXh0ICE9IG51bGwsIFwiPFJvdXRlciBiYXNlbmFtZT1cXFwiXCIgKyBiYXNlbmFtZSArIFwiXFxcIj4gaXMgbm90IGFibGUgdG8gbWF0Y2ggdGhlIFVSTCBcIiArIChcIlxcXCJcIiArIHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaCArIFwiXFxcIiBiZWNhdXNlIGl0IGRvZXMgbm90IHN0YXJ0IHdpdGggdGhlIFwiKSArIFwiYmFzZW5hbWUsIHNvIHRoZSA8Um91dGVyPiB3b24ndCByZW5kZXIgYW55dGhpbmcuXCIpIDogdm9pZCAwO1xuICBpZiAobG9jYXRpb25Db250ZXh0ID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2aWdhdGlvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogbmF2aWdhdGlvbkNvbnRleHRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9jYXRpb25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIHZhbHVlOiBsb2NhdGlvbkNvbnRleHRcbiAgfSkpO1xufVxuLyoqXG4gKiBBIGNvbnRhaW5lciBmb3IgYSBuZXN0ZWQgdHJlZSBvZiBgPFJvdXRlPmAgZWxlbWVudHMgdGhhdCByZW5kZXJzIHRoZSBicmFuY2hcbiAqIHRoYXQgYmVzdCBtYXRjaGVzIHRoZSBjdXJyZW50IGxvY2F0aW9uLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vdjYvY29tcG9uZW50cy9yb3V0ZXNcbiAqL1xuZnVuY3Rpb24gUm91dGVzKF9yZWY2KSB7XG4gIGxldCB7XG4gICAgY2hpbGRyZW4sXG4gICAgbG9jYXRpb25cbiAgfSA9IF9yZWY2O1xuICByZXR1cm4gdXNlUm91dGVzKGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbihjaGlsZHJlbiksIGxvY2F0aW9uKTtcbn1cbi8qKlxuICogQ29tcG9uZW50IHRvIHVzZSBmb3IgcmVuZGVyaW5nIGxhemlseSBsb2FkZWQgZGF0YSBmcm9tIHJldHVybmluZyBkZWZlcigpXG4gKiBpbiBhIGxvYWRlciBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBBd2FpdChfcmVmNykge1xuICBsZXQge1xuICAgIGNoaWxkcmVuLFxuICAgIGVycm9yRWxlbWVudCxcbiAgICByZXNvbHZlXG4gIH0gPSBfcmVmNztcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEF3YWl0RXJyb3JCb3VuZGFyeSwge1xuICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgZXJyb3JFbGVtZW50OiBlcnJvckVsZW1lbnRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVzb2x2ZUF3YWl0LCBudWxsLCBjaGlsZHJlbikpO1xufVxudmFyIEF3YWl0UmVuZGVyU3RhdHVzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChBd2FpdFJlbmRlclN0YXR1cykge1xuICBBd2FpdFJlbmRlclN0YXR1c1tBd2FpdFJlbmRlclN0YXR1c1tcInBlbmRpbmdcIl0gPSAwXSA9IFwicGVuZGluZ1wiO1xuICBBd2FpdFJlbmRlclN0YXR1c1tBd2FpdFJlbmRlclN0YXR1c1tcInN1Y2Nlc3NcIl0gPSAxXSA9IFwic3VjY2Vzc1wiO1xuICBBd2FpdFJlbmRlclN0YXR1c1tBd2FpdFJlbmRlclN0YXR1c1tcImVycm9yXCJdID0gMl0gPSBcImVycm9yXCI7XG4gIHJldHVybiBBd2FpdFJlbmRlclN0YXR1cztcbn0oQXdhaXRSZW5kZXJTdGF0dXMgfHwge30pO1xuY29uc3QgbmV2ZXJTZXR0bGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKCgpID0+IHt9KTtcbmNsYXNzIEF3YWl0RXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvcjogbnVsbFxuICAgIH07XG4gIH1cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvclxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbykge1xuICAgIGNvbnNvbGUuZXJyb3IoXCI8QXdhaXQ+IGNhdWdodCB0aGUgZm9sbG93aW5nIGVycm9yIGR1cmluZyByZW5kZXJcIiwgZXJyb3IsIGVycm9ySW5mbyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGVycm9yRWxlbWVudCxcbiAgICAgIHJlc29sdmVcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgcHJvbWlzZSA9IG51bGw7XG4gICAgbGV0IHN0YXR1cyA9IEF3YWl0UmVuZGVyU3RhdHVzLnBlbmRpbmc7XG4gICAgaWYgKCEocmVzb2x2ZSBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICAvLyBEaWRuJ3QgZ2V0IGEgcHJvbWlzZSAtIHByb3ZpZGUgYXMgYSByZXNvbHZlZCBwcm9taXNlXG4gICAgICBzdGF0dXMgPSBBd2FpdFJlbmRlclN0YXR1cy5zdWNjZXNzO1xuICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX3RyYWNrZWRcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IHRydWVcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX2RhdGFcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IHJlc29sdmVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5lcnJvcikge1xuICAgICAgLy8gQ2F1Z2h0IGEgcmVuZGVyIGVycm9yLCBwcm92aWRlIGl0IGFzIGEgcmVqZWN0ZWQgcHJvbWlzZVxuICAgICAgc3RhdHVzID0gQXdhaXRSZW5kZXJTdGF0dXMuZXJyb3I7XG4gICAgICBsZXQgcmVuZGVyRXJyb3IgPSB0aGlzLnN0YXRlLmVycm9yO1xuICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVqZWN0KCkuY2F0Y2goKCkgPT4ge30pOyAvLyBBdm9pZCB1bmhhbmRsZWQgcmVqZWN0aW9uIHdhcm5pbmdzXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfdHJhY2tlZFwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gdHJ1ZVxuICAgICAgfSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfZXJyb3JcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IHJlbmRlckVycm9yXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHJlc29sdmUuX3RyYWNrZWQpIHtcbiAgICAgIC8vIEFscmVhZHkgdHJhY2tlZCBwcm9taXNlIC0gY2hlY2sgY29udGVudHNcbiAgICAgIHByb21pc2UgPSByZXNvbHZlO1xuICAgICAgc3RhdHVzID0gXCJfZXJyb3JcIiBpbiBwcm9taXNlID8gQXdhaXRSZW5kZXJTdGF0dXMuZXJyb3IgOiBcIl9kYXRhXCIgaW4gcHJvbWlzZSA/IEF3YWl0UmVuZGVyU3RhdHVzLnN1Y2Nlc3MgOiBBd2FpdFJlbmRlclN0YXR1cy5wZW5kaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSYXcgKHVudHJhY2tlZCkgcHJvbWlzZSAtIHRyYWNrIGl0XG4gICAgICBzdGF0dXMgPSBBd2FpdFJlbmRlclN0YXR1cy5wZW5kaW5nO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc29sdmUsIFwiX3RyYWNrZWRcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IHRydWVcbiAgICAgIH0pO1xuICAgICAgcHJvbWlzZSA9IHJlc29sdmUudGhlbihkYXRhID0+IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNvbHZlLCBcIl9kYXRhXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiBkYXRhXG4gICAgICB9KSwgZXJyb3IgPT4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc29sdmUsIFwiX2Vycm9yXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiBlcnJvclxuICAgICAgfSkpO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzID09PSBBd2FpdFJlbmRlclN0YXR1cy5lcnJvciAmJiBwcm9taXNlLl9lcnJvciBpbnN0YW5jZW9mIEFib3J0ZWREZWZlcnJlZEVycm9yKSB7XG4gICAgICAvLyBGcmVlemUgdGhlIFVJIGJ5IHRocm93aW5nIGEgbmV2ZXIgcmVzb2x2ZWQgcHJvbWlzZVxuICAgICAgdGhyb3cgbmV2ZXJTZXR0bGVkUHJvbWlzZTtcbiAgICB9XG4gICAgaWYgKHN0YXR1cyA9PT0gQXdhaXRSZW5kZXJTdGF0dXMuZXJyb3IgJiYgIWVycm9yRWxlbWVudCkge1xuICAgICAgLy8gTm8gZXJyb3JFbGVtZW50LCB0aHJvdyB0byB0aGUgbmVhcmVzdCByb3V0ZS1sZXZlbCBlcnJvciBib3VuZGFyeVxuICAgICAgdGhyb3cgcHJvbWlzZS5fZXJyb3I7XG4gICAgfVxuICAgIGlmIChzdGF0dXMgPT09IEF3YWl0UmVuZGVyU3RhdHVzLmVycm9yKSB7XG4gICAgICAvLyBSZW5kZXIgdmlhIG91ciBlcnJvckVsZW1lbnRcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBd2FpdENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHByb21pc2UsXG4gICAgICAgIGNoaWxkcmVuOiBlcnJvckVsZW1lbnRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzID09PSBBd2FpdFJlbmRlclN0YXR1cy5zdWNjZXNzKSB7XG4gICAgICAvLyBSZW5kZXIgY2hpbGRyZW4gd2l0aCByZXNvbHZlZCB2YWx1ZVxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEF3YWl0Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogcHJvbWlzZSxcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBUaHJvdyB0byB0aGUgc3VzcGVuc2UgYm91bmRhcnlcbiAgICB0aHJvdyBwcm9taXNlO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIEluZGlyZWN0aW9uIHRvIGxldmVyYWdlIHVzZUFzeW5jVmFsdWUgZm9yIGEgcmVuZGVyLXByb3AgQVBJIG9uIGA8QXdhaXQ+YFxuICovXG5mdW5jdGlvbiBSZXNvbHZlQXdhaXQoX3JlZjgpIHtcbiAgbGV0IHtcbiAgICBjaGlsZHJlblxuICB9ID0gX3JlZjg7XG4gIGxldCBkYXRhID0gdXNlQXN5bmNWYWx1ZSgpO1xuICBsZXQgdG9SZW5kZXIgPSB0eXBlb2YgY2hpbGRyZW4gPT09IFwiZnVuY3Rpb25cIiA/IGNoaWxkcmVuKGRhdGEpIDogY2hpbGRyZW47XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgdG9SZW5kZXIpO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBVVElMU1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKipcbiAqIENyZWF0ZXMgYSByb3V0ZSBjb25maWcgZnJvbSBhIFJlYWN0IFwiY2hpbGRyZW5cIiBvYmplY3QsIHdoaWNoIGlzIHVzdWFsbHlcbiAqIGVpdGhlciBhIGA8Um91dGU+YCBlbGVtZW50IG9yIGFuIGFycmF5IG9mIHRoZW0uIFVzZWQgaW50ZXJuYWxseSBieVxuICogYDxSb3V0ZXM+YCB0byBjcmVhdGUgYSByb3V0ZSBjb25maWcgZnJvbSBpdHMgY2hpbGRyZW4uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS92Ni91dGlscy9jcmVhdGUtcm91dGVzLWZyb20tY2hpbGRyZW5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGNoaWxkcmVuLCBwYXJlbnRQYXRoKSB7XG4gIGlmIChwYXJlbnRQYXRoID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnRQYXRoID0gW107XG4gIH1cbiAgbGV0IHJvdXRlcyA9IFtdO1xuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBpZiAoISAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgIC8vIElnbm9yZSBub24tZWxlbWVudHMuIFRoaXMgYWxsb3dzIHBlb3BsZSB0byBtb3JlIGVhc2lseSBpbmxpbmVcbiAgICAgIC8vIGNvbmRpdGlvbmFscyBpbiB0aGVpciByb3V0ZSBjb25maWcuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB0cmVlUGF0aCA9IFsuLi5wYXJlbnRQYXRoLCBpbmRleF07XG4gICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gUmVhY3QuRnJhZ21lbnQpIHtcbiAgICAgIC8vIFRyYW5zcGFyZW50bHkgc3VwcG9ydCBSZWFjdC5GcmFnbWVudCBhbmQgaXRzIGNoaWxkcmVuLlxuICAgICAgcm91dGVzLnB1c2guYXBwbHkocm91dGVzLCBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4oZWxlbWVudC5wcm9wcy5jaGlsZHJlbiwgdHJlZVBhdGgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgIShlbGVtZW50LnR5cGUgPT09IFJvdXRlKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiW1wiICsgKHR5cGVvZiBlbGVtZW50LnR5cGUgPT09IFwic3RyaW5nXCIgPyBlbGVtZW50LnR5cGUgOiBlbGVtZW50LnR5cGUubmFtZSkgKyBcIl0gaXMgbm90IGEgPFJvdXRlPiBjb21wb25lbnQuIEFsbCBjb21wb25lbnQgY2hpbGRyZW4gb2YgPFJvdXRlcz4gbXVzdCBiZSBhIDxSb3V0ZT4gb3IgPFJlYWN0LkZyYWdtZW50PlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICEoIWVsZW1lbnQucHJvcHMuaW5kZXggfHwgIWVsZW1lbnQucHJvcHMuY2hpbGRyZW4pID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJBbiBpbmRleCByb3V0ZSBjYW5ub3QgaGF2ZSBjaGlsZCByb3V0ZXMuXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgbGV0IHJvdXRlID0ge1xuICAgICAgaWQ6IGVsZW1lbnQucHJvcHMuaWQgfHwgdHJlZVBhdGguam9pbihcIi1cIiksXG4gICAgICBjYXNlU2Vuc2l0aXZlOiBlbGVtZW50LnByb3BzLmNhc2VTZW5zaXRpdmUsXG4gICAgICBlbGVtZW50OiBlbGVtZW50LnByb3BzLmVsZW1lbnQsXG4gICAgICBDb21wb25lbnQ6IGVsZW1lbnQucHJvcHMuQ29tcG9uZW50LFxuICAgICAgaW5kZXg6IGVsZW1lbnQucHJvcHMuaW5kZXgsXG4gICAgICBwYXRoOiBlbGVtZW50LnByb3BzLnBhdGgsXG4gICAgICBsb2FkZXI6IGVsZW1lbnQucHJvcHMubG9hZGVyLFxuICAgICAgYWN0aW9uOiBlbGVtZW50LnByb3BzLmFjdGlvbixcbiAgICAgIGVycm9yRWxlbWVudDogZWxlbWVudC5wcm9wcy5lcnJvckVsZW1lbnQsXG4gICAgICBFcnJvckJvdW5kYXJ5OiBlbGVtZW50LnByb3BzLkVycm9yQm91bmRhcnksXG4gICAgICBoYXNFcnJvckJvdW5kYXJ5OiBlbGVtZW50LnByb3BzLkVycm9yQm91bmRhcnkgIT0gbnVsbCB8fCBlbGVtZW50LnByb3BzLmVycm9yRWxlbWVudCAhPSBudWxsLFxuICAgICAgc2hvdWxkUmV2YWxpZGF0ZTogZWxlbWVudC5wcm9wcy5zaG91bGRSZXZhbGlkYXRlLFxuICAgICAgaGFuZGxlOiBlbGVtZW50LnByb3BzLmhhbmRsZSxcbiAgICAgIGxhenk6IGVsZW1lbnQucHJvcHMubGF6eVxuICAgIH07XG4gICAgaWYgKGVsZW1lbnQucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgIHJvdXRlLmNoaWxkcmVuID0gY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGVsZW1lbnQucHJvcHMuY2hpbGRyZW4sIHRyZWVQYXRoKTtcbiAgICB9XG4gICAgcm91dGVzLnB1c2gocm91dGUpO1xuICB9KTtcbiAgcmV0dXJuIHJvdXRlcztcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSByZXN1bHQgb2YgYG1hdGNoUm91dGVzKClgIGludG8gYSBSZWFjdCBlbGVtZW50LlxuICovXG5mdW5jdGlvbiByZW5kZXJNYXRjaGVzKG1hdGNoZXMpIHtcbiAgcmV0dXJuIF9yZW5kZXJNYXRjaGVzKG1hdGNoZXMpO1xufVxuXG5mdW5jdGlvbiBtYXBSb3V0ZVByb3BlcnRpZXMocm91dGUpIHtcbiAgbGV0IHVwZGF0ZXMgPSB7XG4gICAgLy8gTm90ZTogdGhpcyBjaGVjayBhbHNvIG9jY3VycyBpbiBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4gc28gdXBkYXRlXG4gICAgLy8gdGhlcmUgaWYgeW91IGNoYW5nZSB0aGlzIC0tIHBsZWFzZSBhbmQgdGhhbmsgeW91IVxuICAgIGhhc0Vycm9yQm91bmRhcnk6IHJvdXRlLkVycm9yQm91bmRhcnkgIT0gbnVsbCB8fCByb3V0ZS5lcnJvckVsZW1lbnQgIT0gbnVsbFxuICB9O1xuICBpZiAocm91dGUuQ29tcG9uZW50KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgaWYgKHJvdXRlLmVsZW1lbnQpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcoZmFsc2UsIFwiWW91IHNob3VsZCBub3QgaW5jbHVkZSBib3RoIGBDb21wb25lbnRgIGFuZCBgZWxlbWVudGAgb24geW91ciByb3V0ZSAtIFwiICsgXCJgQ29tcG9uZW50YCB3aWxsIGJlIHVzZWQuXCIpIDogdm9pZCAwO1xuICAgICAgfVxuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKHVwZGF0ZXMsIHtcbiAgICAgIGVsZW1lbnQ6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KHJvdXRlLkNvbXBvbmVudCksXG4gICAgICBDb21wb25lbnQ6IHVuZGVmaW5lZFxuICAgIH0pO1xuICB9XG4gIGlmIChyb3V0ZS5IeWRyYXRlRmFsbGJhY2spIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBpZiAocm91dGUuaHlkcmF0ZUZhbGxiYWNrRWxlbWVudCkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhmYWxzZSwgXCJZb3Ugc2hvdWxkIG5vdCBpbmNsdWRlIGJvdGggYEh5ZHJhdGVGYWxsYmFja2AgYW5kIGBoeWRyYXRlRmFsbGJhY2tFbGVtZW50YCBvbiB5b3VyIHJvdXRlIC0gXCIgKyBcImBIeWRyYXRlRmFsbGJhY2tgIHdpbGwgYmUgdXNlZC5cIikgOiB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5hc3NpZ24odXBkYXRlcywge1xuICAgICAgaHlkcmF0ZUZhbGxiYWNrRWxlbWVudDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQocm91dGUuSHlkcmF0ZUZhbGxiYWNrKSxcbiAgICAgIEh5ZHJhdGVGYWxsYmFjazogdW5kZWZpbmVkXG4gICAgfSk7XG4gIH1cbiAgaWYgKHJvdXRlLkVycm9yQm91bmRhcnkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBpZiAocm91dGUuZXJyb3JFbGVtZW50KSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKGZhbHNlLCBcIllvdSBzaG91bGQgbm90IGluY2x1ZGUgYm90aCBgRXJyb3JCb3VuZGFyeWAgYW5kIGBlcnJvckVsZW1lbnRgIG9uIHlvdXIgcm91dGUgLSBcIiArIFwiYEVycm9yQm91bmRhcnlgIHdpbGwgYmUgdXNlZC5cIikgOiB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5hc3NpZ24odXBkYXRlcywge1xuICAgICAgZXJyb3JFbGVtZW50OiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChyb3V0ZS5FcnJvckJvdW5kYXJ5KSxcbiAgICAgIEVycm9yQm91bmRhcnk6IHVuZGVmaW5lZFxuICAgIH0pO1xuICB9XG4gIHJldHVybiB1cGRhdGVzO1xufVxuZnVuY3Rpb24gY3JlYXRlTWVtb3J5Um91dGVyKHJvdXRlcywgb3B0cykge1xuICByZXR1cm4gY3JlYXRlUm91dGVyKHtcbiAgICBiYXNlbmFtZTogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5iYXNlbmFtZSxcbiAgICBmdXR1cmU6IF9leHRlbmRzKHt9LCBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmZ1dHVyZSwge1xuICAgICAgdjdfcHJlcGVuZEJhc2VuYW1lOiB0cnVlXG4gICAgfSksXG4gICAgaGlzdG9yeTogY3JlYXRlTWVtb3J5SGlzdG9yeSh7XG4gICAgICBpbml0aWFsRW50cmllczogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5pbml0aWFsRW50cmllcyxcbiAgICAgIGluaXRpYWxJbmRleDogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5pbml0aWFsSW5kZXhcbiAgICB9KSxcbiAgICBoeWRyYXRpb25EYXRhOiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmh5ZHJhdGlvbkRhdGEsXG4gICAgcm91dGVzLFxuICAgIG1hcFJvdXRlUHJvcGVydGllcyxcbiAgICBkYXRhU3RyYXRlZ3k6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuZGF0YVN0cmF0ZWd5LFxuICAgIHBhdGNoUm91dGVzT25OYXZpZ2F0aW9uOiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLnBhdGNoUm91dGVzT25OYXZpZ2F0aW9uXG4gIH0pLmluaXRpYWxpemUoKTtcbn1cblxuZXhwb3J0IHsgQXdhaXQsIE1lbW9yeVJvdXRlciwgTmF2aWdhdGUsIE91dGxldCwgUm91dGUsIFJvdXRlciwgUm91dGVyUHJvdmlkZXIsIFJvdXRlcywgRGF0YVJvdXRlckNvbnRleHQgYXMgVU5TQUZFX0RhdGFSb3V0ZXJDb250ZXh0LCBEYXRhUm91dGVyU3RhdGVDb250ZXh0IGFzIFVOU0FGRV9EYXRhUm91dGVyU3RhdGVDb250ZXh0LCBMb2NhdGlvbkNvbnRleHQgYXMgVU5TQUZFX0xvY2F0aW9uQ29udGV4dCwgTmF2aWdhdGlvbkNvbnRleHQgYXMgVU5TQUZFX05hdmlnYXRpb25Db250ZXh0LCBSb3V0ZUNvbnRleHQgYXMgVU5TQUZFX1JvdXRlQ29udGV4dCwgbG9nVjZEZXByZWNhdGlvbldhcm5pbmdzIGFzIFVOU0FGRV9sb2dWNkRlcHJlY2F0aW9uV2FybmluZ3MsIG1hcFJvdXRlUHJvcGVydGllcyBhcyBVTlNBRkVfbWFwUm91dGVQcm9wZXJ0aWVzLCB1c2VSb3V0ZUlkIGFzIFVOU0FGRV91c2VSb3V0ZUlkLCB1c2VSb3V0ZXNJbXBsIGFzIFVOU0FGRV91c2VSb3V0ZXNJbXBsLCBjcmVhdGVNZW1vcnlSb3V0ZXIsIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiwgY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuIGFzIGNyZWF0ZVJvdXRlc0Zyb21FbGVtZW50cywgcmVuZGVyTWF0Y2hlcywgdXNlQWN0aW9uRGF0YSwgdXNlQXN5bmNFcnJvciwgdXNlQXN5bmNWYWx1ZSwgdXNlQmxvY2tlciwgdXNlSHJlZiwgdXNlSW5Sb3V0ZXJDb250ZXh0LCB1c2VMb2FkZXJEYXRhLCB1c2VMb2NhdGlvbiwgdXNlTWF0Y2gsIHVzZU1hdGNoZXMsIHVzZU5hdmlnYXRlLCB1c2VOYXZpZ2F0aW9uLCB1c2VOYXZpZ2F0aW9uVHlwZSwgdXNlT3V0bGV0LCB1c2VPdXRsZXRDb250ZXh0LCB1c2VQYXJhbXMsIHVzZVJlc29sdmVkUGF0aCwgdXNlUmV2YWxpZGF0b3IsIHVzZVJvdXRlRXJyb3IsIHVzZVJvdXRlTG9hZGVyRGF0YSwgdXNlUm91dGVzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRiODlhOTRjOTU5NTc0YWIyOTY3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiTmF2aWdhY2UiLCJIb21lIiwiUG9ydGZvbGlvIiwiRGVuaWsiLCJTZWFyY2hBUEkiLCJBYm91dCIsIk5vdEZvdW5kIiwiQXBwIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicHJpc3Bldmt5Iiwic2V0UHJpc3Bldmt5IiwicHJpZGVqUHJpc3BldmVrIiwidGlja2VyIiwidHJpbSIsImFsZXJ0IiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5Iiwib3BlcmFjZSIsInNtYXpQcmlzcGV2ZWsiLCJpbmRleCIsImZpbHRlciIsIl8iLCJpbmRleFAiLCJwcmlkZWpPcGVyYWNpIiwiaW5kZXhQcmlzcGV2a3UiLCJub3ZhT3BlcmFjZSIsInByZXZQcmlzcGV2a3kiLCJtYXAiLCJwcmlzcGV2ZWsiLCJfb2JqZWN0U3ByZWFkIiwic21hek9wZXJhY2kiLCJpbmRleE9wZXJhY2UiLCJpIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInBhdGgiLCJlbGVtZW50IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJMaW5rIiwidG8iLCJ0eXBlIiwiaWQiLCJ1c2VFZmZlY3QiLCJPcGVyYXRpb25zIiwiX3JlZiIsIm9uQWRkT3BlcmFjZSIsIm9uRGVsZXRlT3BlcmFjZSIsImNlbmEiLCJrdXN5IiwicG9wbGF0ZWsiLCJkYXR1bSIsInNldE5vdmFPcGVyYWNlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJfZXZlbnQkdGFyZ2V0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJldiIsIl9kZWZpbmVQcm9wZXJ0eSIsInBhcnNlRmxvYXQiLCJwcmlkZWpOb3ZvdU9wZXJhY2kiLCJ2eXBvY2l0ZWpQcnVtZXIiLCJuYWt1cG5pQ2VuYSIsImNlbGtlbUt1c3UiLCJjZWxrZW1Qb3BsYXRrdSIsImZvckVhY2giLCJfcmVmMiIsInBydW1lcm5hQ2VuYSIsInRvRml4ZWQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwib25DbGljayIsIm9wIiwia2V5IiwiUHJpc3BldmVrQWtjaWUiLCJvbkRlbGV0ZSIsIkZvcm11bGFyQWtjaWUiLCJvblN1Ym1pdEZvcm0iLCJzcG9jaXRlalBydW1lciIsInRvdGFsTmFrbGFkeSIsInNwb2NpdGVqVG90YWxLdXN5IiwicmVkdWNlIiwic3VtIiwic3BvY2l0ZWpQb3BsYXRreSIsInNwb2NpdGVqVG90YWxJbnZlc3RvdmFubyIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImlzQXJyYXkiLCJTZWFyY2giLCJxdWVyeSIsInNldFF1ZXJ5IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlU2VhcmNoIiwiX2NhbGxlZSIsInJlc3BvbnNlIiwiZGF0YSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJmZXRjaCIsImpzb24iLCJ0MCIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJvblN1Ym1pdCIsIml0ZW0iXSwic291cmNlUm9vdCI6IiJ9