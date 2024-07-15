export function isArray<T>(notArray: T): boolean {
  if (!Array.isArray(notArray)) {
    return false;
  }

  return true;
}
