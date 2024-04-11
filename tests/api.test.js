import { Api } from '../src/api/index';
import mockComments from '../comments.json';

describe('Api', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getComments', () => {
    it('retrieves all comments', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockComments),
      });

      const url = 'https://localhost:3001/getComments';
      const method = 'get';

      const result = await Api.call(url, method);

      expect(fetch).toHaveBeenCalledWith(url, {
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      expect(result).toEqual(mockComments);
    });
  });
});
