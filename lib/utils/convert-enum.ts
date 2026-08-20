export function convertEnum<T extends object>(
    target: T,
    value: keyof T
): T[keyof T] {
    return target[value]
}