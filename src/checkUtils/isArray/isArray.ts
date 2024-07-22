export function isArray<T>(param: T): boolean {
  if (Array.isArray(param)) {
    return true;
  }

  return false;
}
