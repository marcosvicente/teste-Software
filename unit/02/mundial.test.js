import Time from './time';
import Mundial from './mundial';

jest.mock('./time');

beforeEach(() => {
    Time.mockClear();
});

describe('Class Mundial', () => {
    test('should be return have a mundial', ()=> {
        const time = new Time();
        const mundial = new Mundial();
        const haveMundial =  mundial.temMundial();
        expect(haveMundial).toBe(true);
    });
    test('should be called the class with a constructor', ()=> {
        const mundial = new Mundial();
        expect(Time).toHaveBeenCalledTimes(1);
    });
    test('should be called a method on the class with instance', ()=> {
        expect(Time).not.toHaveBeenCalled();

        const mundial = new Mundial();

        expect(Time).toHaveBeenCalledTimes(1);

        const haveMundial =  mundial.temMundial();

        expect(haveMundial).toBe(true);
    });
});

