import { Store } from '../../src/Storage/LocalStore';

describe('The Observable object', () => {
    const testPropName = 'testProp';
    const testPropValue = 1234;
    const testPropName2 = 'testProp2';
    const testPropValue2 = 'testing as text';

    it('should add a new observable with calling add', () => {
        const _observable = new Store();

        expect(_observable.hasOwnProperty(testPropName)).toBeFalsy();

        _observable.add(testPropName, testPropValue);

        expect(_observable.hasOwnProperty(testPropName)).toBeTruthy();
        expect(_observable[testPropName].get()).toEqual(testPropValue);
    });

    it('should not change other observables when adding more than 1', () => {
        const _observable = new Store();

        expect(_observable.hasOwnProperty(testPropName)).toBeFalsy();

        _observable.add(testPropName, testPropValue);
        _observable.add(testPropName2, testPropValue2);

        expect(_observable.hasOwnProperty(testPropName)).toBeTruthy();
        expect(_observable[testPropName].get()).toEqual(testPropValue);
        expect(_observable[testPropName2].get()).not.toEqual(testPropValue);
        expect(_observable[testPropName2].get()).toEqual(testPropValue2);
    });

    it('should register a listener', () => {
        const _observable = new Store();
        const listener = jasmine.createSpy('spy');
        _observable.add(testPropName, testPropValue);

        expect(_observable[testPropName]._observableListeners.indexOf(listener)).toEqual(-1);

        _observable[testPropName].listen(listener);

        expect(_observable[testPropName]._observableListeners.indexOf(listener)).toEqual(0);
    });

    it('should unsubscribe a listener when calling its unsubscriber function', () => {
        const _observable = new Store();
        const listener = jasmine.createSpy('spy');
        _observable.add(testPropName, testPropValue);

        expect(_observable[testPropName]._observableListeners.indexOf(listener)).toEqual(-1);

        const unsubscriber = _observable[testPropName].listen(listener);

        expect(_observable[testPropName]._observableListeners.indexOf(listener)).toEqual(0);

        unsubscriber();

        expect(_observable[testPropName]._observableListeners.indexOf(listener)).toEqual(-1);
    });
    
    it('should call the listener when the prop changes value', () => {
        const _observable = new Store();
        _observable.add(testPropName, testPropValue);
        spyOn(_observable[testPropName], "listen").and.callThrough();
        spyOn(_observable[testPropName], "unsubscribe").and.callThrough();
        
        const listener = jasmine.createSpy('spy');

        expect(_observable[testPropName]._observableListeners.indexOf(listener)).toEqual(-1);

        _observable[testPropName].listen(listener);

        expect(_observable[testPropName]._observableListeners.indexOf(listener)).toEqual(0);

        expect(listener).not.toHaveBeenCalled();
        _observable[testPropName].set(54321);

        expect(listener).toHaveBeenCalledTimes(1);
    });
});