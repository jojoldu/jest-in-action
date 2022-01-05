describe('test1', () => {
  const fetch = jest.fn();

  async function data() {
    const data = await fetch('/endpoint-1');
    await fetch(`/endpoint-2/${data.id}`, {
      method: 'POST',
    });
  }

  test('Test 1', async () => {
    fetch.mockImplementationOnce(async () => ({ id: 'my-id' }));
    fetch.mockImplementationOnce(async () => {});
    await data();
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith('/endpoint-1');
    expect(fetch).toHaveBeenCalledWith('/endpoint-2/my-id', {
      method: 'POST',
    });
  });

});
