import { Renderer, renderHook, RenderHookResult } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import { NFD } from '../src/misc/interfaces';
import useNfd from '../src/useNfd';

describe('useNfd', () => {
  it('should be defined', () => {
    expect(useNfd).toBeDefined();
  });

  it('should be defined 2', () => {
    let hook: RenderHookResult<
      string,
      [NFD | null, NFD[] | null, any, () => void],
      Renderer<string>
    > | null = null;

    act(() => {
      hook = renderHook((props) => useNfd(props), {
        initialProps: 'NRLA7VZ2YV6WOS2LBS3UK25DB463XRSNG63BYNQI6CSGGROFWVQ2EKBQSI',
      });
    });

    expect(hook).toBeDefined();
  });
});
