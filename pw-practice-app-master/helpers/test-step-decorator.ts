import { test } from '@playwright/test'

export function step(
    target: object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
): void {
    const originalMethod = descriptor.value

    descriptor.value = async function (this: unknown, ...args: unknown[]) {
        return test.step(String(propertyKey), async () => {
            return originalMethod.apply(this, args)
        })
    }
}