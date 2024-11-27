import {describe, expect, it} from "vitest";
import {HealthChecker} from "./healthChecker";

describe('Health Checker service', () => {
    describe('When the service is health', () => {
        it('should return true', () => {
            const h = new HealthChecker();

            expect(h.isHealth()).toBeTruthy()
        });
    });
});