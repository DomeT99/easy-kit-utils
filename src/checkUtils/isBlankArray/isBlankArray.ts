export function isBlankArray<T>(param: T[]): boolean {
  if (param.length === 0) {
    return true;
  }

  return false;
}
