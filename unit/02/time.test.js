import Time from './time';

describe('Class Time', ()=> {
    beforeEach(() => {
    });
    test('#name' , () => {
        const time = new Time("São Paulo");
        const name = time.name();
        expect(name).toMatch(/São Paulo FC/);
    });
});
