export function titleCase(input: string): string {
  return input && input[0].toUpperCase() + input.toLowerCase().substring(1);
}

