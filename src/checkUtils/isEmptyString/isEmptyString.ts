export function isEmptyString(param: string): boolean {
  if (param === "" || param.length === 0) {
    return true;
  }

  return false;
}
