export function isNull<T>(param: T): boolean {
  if (param === null) {
    return true;
  }

  return false;
}
