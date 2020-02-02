import { addU } from './addU';
describe('addU', () => {
    it('returns 0, iff input is negative', () => {
        const result = addU(-1);
        expect(result).toBe(0);
    })
})    