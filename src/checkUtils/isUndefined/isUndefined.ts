export function isUndefined<T>(param?: T): boolean {
  if (param === undefined) {
    return true;
  }

  return false;
}
