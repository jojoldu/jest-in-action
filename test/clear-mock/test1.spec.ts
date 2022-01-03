describe('test1', () => {
  const stubFn = jest.fn();

  function call(message: any): void {
    stubFn(message);
  }

  test('Test 1', () => {
    const callMessage = 'Test 1 Call';
    call(callMessage);

    expect(stubFn).toHaveBeenCalledWith(callMessage);
    expect(stubFn).toHaveBeenCalledTimes(1);
  });

  test('Test 2', () => {
    const callMessage = 'Test 2 Call';
    call(callMessage);

    expect(stubFn).toHaveBeenCalledWith(callMessage);
    expect(stubFn).toHaveBeenCalledTimes(1);
  });
});
