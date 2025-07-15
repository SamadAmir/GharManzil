import { register } from "../../../api/controllers/auth.controller";

describe('signup', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('should send user data and return response', async () => {
    const mockUserData = { username: 'samad', password: 'password123' };
    const mockResponse = { success: true, userId: 1 };

    fetch.mockResolvedValueOnce({
      json: async () => mockResponse,
    });

    const result = await signup(mockUserData);

    expect(fetch).toHaveBeenCalledWith('/api/signup', expect.objectContaining({
      method: 'POST',
    }));
    expect(result).toEqual(mockResponse);
  });
});
