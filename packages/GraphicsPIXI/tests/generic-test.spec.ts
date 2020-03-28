import { GraphicsPIXI } from '../src/Graphics';

describe ('POC Graphics tests', () => {
    let _graphics;

    beforeEach(() => {
        _graphics = new GraphicsPIXI();
    });

    describe('confirming API', () => {
        it('should have IModule interface functions', () => {
            expect(_graphics.hasOwnProperty('Init')).toBeTrue;
            expect(_graphics.hasOwnProperty('Shutdown')).toBeTrue;
            expect(_graphics.hasOwnProperty('LoadResourceManifest')).toBeTrue;
            expect(_graphics.hasOwnProperty('LoadResource')).toBeTrue;
        });

        it('should have IResourceModule interface functions', () => {
            expect(_graphics.hasOwnProperty('CreateObject')).toBeTrue;
            expect(_graphics.hasOwnProperty('ReplaceObject')).toBeTrue;
            expect(_graphics.hasOwnProperty('UpdateObject')).toBeTrue;
            expect(_graphics.hasOwnProperty('DestroyObject')).toBeTrue;
        });

        it('should have IGraphics interface functions', () => {
            expect(_graphics.hasOwnProperty('Resize')).toBeTrue;
            expect(_graphics.hasOwnProperty('ResizeRenderResolution')).toBeTrue;
            expect(_graphics.hasOwnProperty('ResetRenderTarget')).toBeTrue;
            expect(_graphics.hasOwnProperty('SwitchFullScreen')).toBeTrue;
            expect(_graphics.hasOwnProperty('SwitchFullWindow')).toBeTrue;
            expect(_graphics.hasOwnProperty('SwitchFramed')).toBeTrue;
            expect(_graphics.hasOwnProperty('SetRenderMode')).toBeTrue;
            expect(_graphics.hasOwnProperty('Show')).toBeTrue;
            expect(_graphics.hasOwnProperty('Hide')).toBeTrue;
            expect(_graphics.hasOwnProperty('Play')).toBeTrue;
            expect(_graphics.hasOwnProperty('PlayFrom')).toBeTrue;
            expect(_graphics.hasOwnProperty('OnComplete')).toBeTrue;
        });
    });
});