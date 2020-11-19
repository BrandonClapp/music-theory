import { KeyOf, ScaleType } from '../src/models/Note';
import { getMajorPentatonicScale, getScale, getNoteSequence, getIntendedLetterOrder, getEnharmonicEquivalent } from "../src/scale-calculations";

describe('calculate natural minor scales', () => {

    it('should calculate G Natural Minor Scale', () => {
        const gNatMinorScale = getScale(KeyOf.G, ScaleType.NaturalMinor);
        expect(gNatMinorScale).toStrictEqual(['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F', 'G']);
        expect(gNatMinorScale).toHaveLength(8);
    });

    it('should calculate B Natural Minor Scale', () => {
        const bNatMinorScale = getScale(KeyOf.B, ScaleType.NaturalMinor);
        expect(bNatMinorScale).toStrictEqual(['B', 'C#', 'D', 'E', 'F#', 'G', 'A', 'B']);
        expect(bNatMinorScale).toHaveLength(8);
    });
});
