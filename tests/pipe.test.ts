import {
    failedRealityCar,
    frcReturn,
    myCar,
    myCarReturn,
    twitchViewerCar, 
    twitchReturn,
    carl,
    carlReturn,
    sophie,
    sophieReturn,
    jesse,
    jesseReturn,
} from './data/pipe.data';

describe('I want to pass data through a custom related function stream', () => {
    test("I'm building a car", () => {
        expect(failedRealityCar).toStrictEqual(frcReturn);
        expect(myCar).toStrictEqual(myCarReturn);
        expect(twitchViewerCar).toStrictEqual(twitchReturn);
    });
    test("I'm creating characters", () => {
        expect(carl.toString()).toEqual(carlReturn.toString());
        expect(sophie.toString()).toEqual(sophieReturn.toString());
        expect(jesse.toString()).toEqual(jesseReturn.toString());
    });
});