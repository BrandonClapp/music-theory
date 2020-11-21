import { KeyOf, ScaleType } from '../src/models/Note';
import { getScale } from "../src/scale-calculations";

describe('calculate natural minor scales', () => {

    it('Should calculate B Natural Minor Scale', () => {
        const natMinorScale = getScale(KeyOf.B, ScaleType.NaturalMinor);
        expect(natMinorScale).toStrictEqual(['B', 'C#', 'D', 'E', 'F#', 'G', 'A', 'B']);
        expect(natMinorScale).toHaveLength(8);
    });

    it('Should calculate C Natural Minor Scale', () => {
        const natMinorScale = getScale(KeyOf.C, ScaleType.NaturalMinor);
        expect(natMinorScale).toStrictEqual(['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb', 'C']);
        expect(natMinorScale).toHaveLength(8);
    });

    it('Should calculate F Natural Minor Scale', () => {
        const natMinorScale = getScale(KeyOf.F, ScaleType.NaturalMinor);
        expect(natMinorScale).toStrictEqual(['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb', 'F']);
        expect(natMinorScale).toHaveLength(8);
    });

    it('Should calculate G Natural Minor Scale', () => {
        const natMinorScale = getScale(KeyOf.G, ScaleType.NaturalMinor);
        expect(natMinorScale).toStrictEqual(['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F', 'G']);
        expect(natMinorScale).toHaveLength(8);
    });

    
});
