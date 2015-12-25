/**
 * Created by marc on 09.12.15.
 */

module.exports = function ($cookies, $log) {

  // TODO move into constant
  var cookiePrefix = "ldvowl_";

  var self = this;

  self.init = function () {
    var loopCookie = cookiePrefix + "include_loops";
    var includeLoops = self.getIncludeLoops() || true;
    $cookies.put(loopCookie, includeLoops);

    var literalCookie = cookiePrefix + "include_literals";
    var includeLiterals = self.getIncludeLiterals() || true;
    $cookies.put(literalCookie, includeLiterals);
  };

  self.getIncludeLoops = function () {
    return ($cookies.get(cookiePrefix + "include_loops") === 'true');
  };

  self.toggleLoops = function () {
    var cookieName = cookiePrefix + "include_loops";
    if (self.getIncludeLoops()) {
      $cookies.put(cookieName, "false");
      $log.debug("[Filters] Disable loops.");
      return false;
    } else {
      $cookies.put(cookieName, "true");
      $log.debug("[Filters] Enable loops");
      return true;
    }
  };

  self.getIncludeLiterals = function () {
    return ($cookies.get(cookiePrefix + "include_literals") === 'true');
  };

  self.toggleLiterals = function () {
    var cookieName = cookiePrefix + "include_literals";
    if (self.getIncludeLiterals()) {
      $log.debug("[Filters] Disable Literals.");
      $cookies.put(cookieName, "false");
      return false;
    } else {
      $cookies.put(cookieName, "true");
      $log.debug("[Filters] Enable Literals");
      return true;
    }
  };

  self.init();

};
