import { renderHook } from '@testing-library/react-hooks';
import useNfd from '../src/useNfd';

describe('useNfd', () => {
  it('should be defined', () => {
    expect(useNfd).toBeDefined();
  });

  it('should update document title', () => {
    let hook = null;

    renderHook((props) => useNfd(props), {
      initialProps: 'NRLA7VZ2YV6WOS2LBS3UK25DB463XRSNG63BYNQI6CSGGROFWVQ2EKBQSI',
    });

    expect(hook).toBeDefined();
  });
});
