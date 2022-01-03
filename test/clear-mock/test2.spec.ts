describe('test2', () => {
  const stubFn = jest.fn();

  function fnUnderTest(message: any): boolean {
    return !!stubFn(message);
  }

  test('It should return correct output on true response from stubFn', () => {
    stubFn.mockImplementation(() => true);
    expect(fnUnderTest('will-it-work')).toEqual('Truth');
  });

  test('It should return correct output on false response from stubFn', () => {
    stubFn.mockImplementation(() => false);
    expect(fnUnderTest('will-it-work')).toEqual('Falsehood');
  });
});
