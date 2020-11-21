import { KeyOf, ScaleType } from '../src/models/Note';
import { getPentatonicScale } from "../src/scale-calculations";

describe('note calculation functions', () => {
  
  it('Should calculate C Major Pentatonic Scale', () => {
    const majorPentaScale = getPentatonicScale(KeyOf.C, ScaleType.Major);
    expect(majorPentaScale).toStrictEqual(['C', 'D', 'E', 'G', 'A']);
    expect(majorPentaScale).toHaveLength(5);
  });

  it('Should calculate B Major Pentatonic Scale', () => {
    const majorPentaScale = getPentatonicScale(KeyOf.B, ScaleType.Major);
    expect(majorPentaScale).toStrictEqual(['B', 'C#', 'D#', 'F#', 'G#']);
    expect(majorPentaScale).toHaveLength(5);
  });

  it('Should calculate E Major Pentatonic Scale', () => {
    const majorPentaScale = getPentatonicScale(KeyOf.E, ScaleType.Major);
    expect(majorPentaScale).toStrictEqual(['E', 'F#', 'G#', 'B', 'C#']);
    expect(majorPentaScale).toHaveLength(5);
  });

  it('Should calculate C# Major Pentatonic Scale', () => {
    const majorPentaScale = getPentatonicScale(KeyOf.CSharp, ScaleType.Major);
    expect(majorPentaScale).toStrictEqual(['C#', 'D#', 'E#', 'G#', 'A#']);
    expect(majorPentaScale).toHaveLength(5);
  });
  
});
