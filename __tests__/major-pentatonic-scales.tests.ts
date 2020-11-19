import { KeyOf, ScaleType } from '../src/models/Note';
import { getMajorPentatonicScale, getScale, getNoteSequence, getIntendedLetterOrder, getEnharmonicEquivalent } from "../src/scale-calculations";

describe('note calculation functions', () => {
  
  it('should calculate C Major Pentatonic Scale', () => {
    const cMajorPentaScale = getMajorPentatonicScale(KeyOf.C);
    expect(cMajorPentaScale).toStrictEqual(['C', 'D', 'E', 'G', 'A']);
    expect(cMajorPentaScale).toHaveLength(5);
  });

  it('should calculate B Major Pentatonic Scale', () => {
    const bMajorPentaScale = getMajorPentatonicScale(KeyOf.B);
    expect(bMajorPentaScale).toStrictEqual(['B', 'C#', 'D#', 'F#', 'G#']);
    expect(bMajorPentaScale).toHaveLength(5);
  });

  it('should calculate E Major Pentatonic Scale', () => {
    const eSharpMajorPentaScale = getMajorPentatonicScale(KeyOf.E);
    expect(eSharpMajorPentaScale).toStrictEqual(['E', 'F#', 'G#', 'B', 'C#']);
    expect(eSharpMajorPentaScale).toHaveLength(5);
  });

  it('should calculate C# Major Pentatonic Scale', () => {
    const cSharpMajorPentaScale = getMajorPentatonicScale(KeyOf.CSharp);
    expect(cSharpMajorPentaScale).toStrictEqual(['C#', 'D#', 'E#', 'G#', 'A#']);
    expect(cSharpMajorPentaScale).toHaveLength(5);
  });
  
});
