export function formatClasses(..._: string[]): string {
  if (!arguments.length) throw new Error('Added classes!')
  return Array.from(arguments).join(' ')
}
