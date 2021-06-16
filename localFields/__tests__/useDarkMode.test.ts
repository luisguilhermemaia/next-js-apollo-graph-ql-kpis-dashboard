jest.mock('@apollo/client', () => ({
  makeVar: jest.fn().mockReturnValue(jest.fn()),
  useReactiveVar: jest.fn(),
}));
import { makeVar, useReactiveVar } from '@apollo/client';
import { useToggletheme } from '../useDarkMode';

describe('useToggletheme', () => {
  let useTogglethemeMock: boolean;
  beforeAll(() => {
      useTogglethemeMock = false;
      (useReactiveVar as jest.Mock).mockReturnValue(useTogglethemeMock);
  });

  it('correctly initializes selected theme mode', () => {
      const field = useToggletheme();

      expect(makeVar).toHaveBeenCalledWith(false);
      expect(field).toEqual([useTogglethemeMock, expect.any(Function)]);
  });
});
