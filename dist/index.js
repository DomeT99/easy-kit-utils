// src/checkUtils/isBlankArray/isBlankArray.ts
function isBlankArray(param) {
  if (param.length === 0) {
    return true;
  }
  return false;
}

// src/checkUtils/isArray/isArray.ts
function isArray(param) {
  if (Array.isArray(param)) {
    return true;
  }
  return false;
}

// src/checkUtils/isNull/isNull.ts
function isNull(param) {
  if (param === null) {
    return true;
  }
  return false;
}

// src/checkUtils/isUndefined/isUndefined.ts
function isUndefined(param) {
  if (param === undefined) {
    return true;
  }
  return false;
}

// src/checkUtils/isEmptyString/isEmptyString.ts
function isEmptyString(param) {
  if (param === "" || param.length === 0) {
    return true;
  }
  return false;
}

// src/checkUtils/isTrue/isTrue.ts
function isTrue(param) {
  if (param) {
    return true;
  }
  return false;
}

// src/checkUtils/isMajorNumber/isMajorNumber.ts
function isMajorNumber(paramFirst, paramSecond) {
  if (paramFirst > paramSecond) {
    return true;
  }
  return false;
}

// src/checkUtils/isMajorSameNumber/isMajorSameNumber.ts
function isMajorSameNumber(paramFirst, paramSecond) {
  if (paramFirst >= paramSecond) {
    return true;
  }
  return false;
}

// src/checkUtils/isMinorNumber/isMinorNumber.ts
function isMinorNumber(paramFirst, paramSecond) {
  if (paramFirst < paramSecond) {
    return true;
  }
  return false;
}

// src/checkUtils/isMinorSameNumber/isMinorSameNumber.ts
function isMinorSameNumber(paramFirst, paramSecond) {
  if (paramFirst <= paramSecond) {
    return true;
  }
  return false;
}
export {
  isUndefined,
  isTrue,
  isNull,
  isMinorSameNumber,
  isMinorNumber,
  isMajorSameNumber,
  isMajorNumber,
  isEmptyString,
  isBlankArray,
  isArray
};
