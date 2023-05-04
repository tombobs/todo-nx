export function titleCase(input: string): string {
  return input && input[0].toUpperCase() + input.toLowerCase().substring(1);
}

export function getDiff<T  extends {[key: string]: any}>(original: Partial<T>, updated: Partial<T>): Partial<T> | undefined {
  const update: any = {};
  Object.keys(updated).forEach((key: string) => {
    if ( !!original[key] && (updated[key] !== original[key])) {
      update[key] = updated[key];
    }
  })
  if (Object.keys(update).length) {
    return update;
  }
  return;
}
