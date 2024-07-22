export function isBlankArray<T>(array: T[]): boolean {
  if (array.length === 0) {
    return true;
  }

  return false;
}
