import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        typecheck: { enabled: true },
        include: ["**/*.{test,spec,integration}.?(c|m)[jt]s?(x)"],
    },
})