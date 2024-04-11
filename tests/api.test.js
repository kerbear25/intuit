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

  describe('createComment', () => {
    it('creates a comment', async () => {
      const mockResponse = { success: true };

      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const url = 'https://localhost:3001/createComment';
      const method = 'post';
      const comment = { name: 'Keri', message: 'Hello!' };

      const result = await Api.post(url, comment);

      expect(fetch).toHaveBeenCalledWith(url, {
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment),
      });
      expect(result).toEqual(mockResponse);
    });
  });
});
