import * as useShortAddress from '../src/useShortAddress';
// @ponicode
describe('useShortAddress.default', () => {
  test('0', () => {
    let result: any = useShortAddress.default('192.168.1.5', 100);
    expect(result).toMatchSnapshot();
  });

  test('1', () => {
    let result: any = useShortAddress.default('192.168.1.5', 64);
    expect(result).toMatchSnapshot();
  });

  test('2', () => {
    let result: any = useShortAddress.default('192.168.1.5', 24);
    expect(result).toMatchSnapshot();
  });

  test('3', () => {
    let result: any = useShortAddress.default('0.0.0.0', 10);
    expect(result).toMatchSnapshot();
  });

  test('4', () => {
    let result: any = useShortAddress.default('192.168.1.5', 16);
    expect(result).toMatchSnapshot();
  });

  test('5', () => {
    let result: any = useShortAddress.default('', -Infinity);
    expect(result).toMatchSnapshot();
  });
});
