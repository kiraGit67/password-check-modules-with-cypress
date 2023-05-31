"use strict";

export function containsLowerCase(str) {
  return /[a-z]/.test(str);
}

export function containsUpperCase(str) {
  return /[A-Z]/.test(str);
}

export function containsNumbers(str) {
  return /\d/.test(str);
}
