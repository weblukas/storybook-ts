import { foo } from './helpers';

describe('helpers', () => {

    it('foo returns proper value', () => {
        expect(foo()).toEqual(1);
    });

});
