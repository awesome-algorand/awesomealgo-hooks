import { Renderer, renderHook, RenderHookResult } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import { NFD } from '../src/misc/interfaces';
import useNfdLookup from '../src/useNfdLookup';

describe('useNfdLookup', () => {
  it('should be defined', () => {
    expect(useNfdLookup).toBeDefined();
  });

  it('should be defined 2', () => {
    act(() => {
      let hook: RenderHookResult<
        string,
        [NFD | null, NFD[] | null, any, () => void],
        Renderer<string>
      > | null = null;
      hook = renderHook((props) => useNfdLookup(props), {
        initialProps: 'NRLA7VZ2YV6WOS2LBS3UK25DB463XRSNG63BYNQI6CSGGROFWVQ2EKBQSI',
      });

      act(() => {
        expect(hook).toBeDefined();
      });
    });
  });
});
