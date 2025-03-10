import {describe, expect, it} from "vitest";
import { isHealthy } from "./healthChecker";

describe('Health Checker service', () => {
    describe('When the service is health', () => {
        it('should return true', () => {
            expect(isHealthy()).toBeTruthy()
        });
    });
});