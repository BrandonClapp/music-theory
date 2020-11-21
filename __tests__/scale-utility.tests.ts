import { KeyOf } from '../src/models/Note';
import { getNoteSequence, getIntendedLetterOrder, getEnharmonicEquivalent } from "../src/scale-calculations";

describe('note calculation functions', () => {
  
  it('calculates the next 12 notes for keys', () => {
    const notesA = getNoteSequence('A');
    expect(notesA).toStrictEqual(['A', 'A#', 'B', 'C', 'C#', 'D', 'D#','E', 'F', 'F#', 'G', 'G#']);

    const notesB = getNoteSequence('B');
    expect(notesB).toStrictEqual(['B', 'C', 'C#', 'D', 'D#','E', 'F', 'F#', 'G', 'G#', 'A', 'A#']);

    const notesC = getNoteSequence('C');
    expect(notesC).toStrictEqual(['C', 'C#', 'D', 'D#','E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B',]);

    const notesFSharp = getNoteSequence('F#');
    expect(notesFSharp).toStrictEqual(['F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#','E', 'F']);

    expect(notesA).toHaveLength(12);
    expect(notesB).toHaveLength(12);
    expect(notesC).toHaveLength(12);
    expect(notesFSharp).toHaveLength(12);
  });

  it('Should return expected scale letters', () => {
    const letters = getIntendedLetterOrder(KeyOf.CSharp);
    expect(letters).toStrictEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']);
    expect(letters).toHaveLength(8);
  });

  it('Should convert to enharmonic equivalent', () => {
    const note = getEnharmonicEquivalent('B#');
    expect(note).toBe('C');
  });
  
});
