require('colors');

/**
 * Converts characters into yellow/gold N'ko, a modern unifier of the Manding languages spoken by mansas throughout medieval North Africa.
 * @param  String
 * @return String
 */
function GoldMansaChs(text) {
  for(var i in chs) {
    var regex = new RegExp(i, 'gi')
    text = text.replace(regex, chs[i]);
  }
  return text.yellow;
};

var chs = {
  "ny": "ߢ",
  "ch": "ߗ",
  "ɔ": "ߐ",
  "o": "ߏ",
  "u": "ߎ",
  "ɛ": "ߍ",
  "i": "ߌ",
  "e": "ߋ",
  "a": "ߊ",
  "r": "ߙ",
  "d": "ߘ",
  "j": "ߖ",
  "t": "ߕ",
  "p": "ߔ",
  "b": "ߓ",
  "m": "ߡ",
  "l": "ߟ",
  "k": "ߞ",
  "f": "ߝ",
  "gb": "ߜ",
  "s": "ߛ",
  "rr": "ߚ",
  "n": "ߒ",
  "y": "ߦ",
  "w": "ߥ",
  "h": "ߤ",
  "n": "ߣ",
  
};

module.exports = GoldMansaChs;