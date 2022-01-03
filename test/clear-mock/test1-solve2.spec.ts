describe('test1-solve2', () => {
  const stubFn = jest.fn();

  function call(message: any): void {
    stubFn(message);
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Test 1', () => {
    // given
    const callMessage = 'Test 1 Call';

    // when
    call(callMessage);

    // then
    expect(stubFn).toHaveBeenCalledWith(callMessage);
    expect(stubFn).toHaveBeenCalledTimes(1);
  });

  test('Test 2', () => {
    // given
    const callMessage = 'Test 2 Call';

    // when
    call(callMessage);

    // then
    expect(stubFn).toHaveBeenCalledWith(callMessage);
    expect(stubFn).toHaveBeenCalledTimes(1);
  });
});
