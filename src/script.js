"use strict";

import {
  containsLowerCase,
  containsUpperCase,
  containsNumbers,
} from "./string-utils.js";

import { atLeast10charsLong } from "./password-utils.js";
import { isEqual } from "./is-equal.js";

const inputPW1 = document.querySelector("#pw1");
const inputPW2 = document.querySelector("#pw2");

const equal = document.querySelector("#equal");
const lowerCase = document.querySelector("#lowercase");
const upperCase = document.querySelector("#uppercase");
const numbers = document.querySelector("#numbers");
const length = document.querySelector("#length");

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  if (inputPW1.getAttribute("type") === "password") {
    inputPW1.setAttribute("type", "text");
    inputPW2.setAttribute("type", "text");
    btn.innerText = "Hide Passwords";
  } else {
    inputPW1.setAttribute("type", "password");
    inputPW2.setAttribute("type", "password");
    btn.innerText = "Show Passwords";
  }
});

inputPW1.addEventListener("keyup", checkPasswords);
inputPW2.addEventListener("keyup", checkPasswords);

function checkPasswords() {
  const pw1 = inputPW1.value;
  const pw2 = inputPW2.value;

  if (pw1 !== pw2 || pw1.length === 0 || pw2.length === 0) {
    setCheckStatus(equal, false);
    setCheckStatus(lowerCase, false);
    setCheckStatus(upperCase, false);
    setCheckStatus(numbers, false);
    setCheckStatus(length, false);
    return;
  }

  setCheckStatus(equal, isEqual(pw1, pw2));
  setCheckStatus(numbers, containsNumbers(pw1));
  setCheckStatus(lowerCase, containsLowerCase(pw1));
  setCheckStatus(upperCase, containsUpperCase(pw1));
  setCheckStatus(length, atLeast10charsLong(pw1));
}

function setCheckStatus(check, success) {
  if (success) {
    check.classList.add("checks__check--success");
    check.classList.remove("checks__check--failed");
  } else {
    check.classList.add("checks__check--failed");
    check.classList.remove("checks__check--success");
  }
}

checkPasswords();
