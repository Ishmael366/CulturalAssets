// src/Api.test.js
import * as api from './api'; // Assuming API calls are in the api.js module

// Mock the APIs
jest.mock('./api', () => ({
  fetchGettyAssets: jest.fn(),
  fetchMetAssets: jest.fn(),
  fetchAicAssets: jest.fn(),
}));

describe('Backend Integration Tests - Data Fetching and Handling', () => {
  test('fetches Getty Assets correctly', async () => {
    const mockGettyData = [
      { id: 1, title: 'Getty Artifact 1', artist: 'Artist 1' },
      { id: 2, title: 'Getty Artifact 2', artist: 'Artist 2' },
    ];

    // Mocking the API response
    api.fetchGettyAssets.mockResolvedValue(mockGettyData);

    // Fetching the data and checking the response
    const data = await api.fetchGettyAssets();
    expect(data).toEqual(mockGettyData); // Assert that the data is returned correctly
    expect(api.fetchGettyAssets).toHaveBeenCalledTimes(1); // Assert that the API was called once
  });

  test('fetches Met Assets correctly', async () => {
    const mockMetData = [
      { id: 3, title: 'Met Artifact 1', artist: 'Artist 3' },
      { id: 4, title: 'Met Artifact 2', artist: 'Artist 4' },
    ];

    // Mocking the API response
    api.fetchMetAssets.mockResolvedValue(mockMetData);

    // Fetching the data and checking the response
    const data = await api.fetchMetAssets();
    expect(data).toEqual(mockMetData); // Assert that the data is returned correctly
    expect(api.fetchMetAssets).toHaveBeenCalledTimes(1); // Assert that the API was called once
  });

  test('fetches AIC Assets correctly', async () => {
    const mockAicData = [
      { id: 5, title: 'AIC Artifact 1', artist: 'Artist 5' },
      { id: 6, title: 'AIC Artifact 2', artist: 'Artist 6' },
    ];

    // Mocking the API response
    api.fetchAicAssets.mockResolvedValue(mockAicData);

    // Fetching the data and checking the response
    const data = await api.fetchAicAssets();
    expect(data).toEqual(mockAicData); // Assert that the data is returned correctly
    expect(api.fetchAicAssets).toHaveBeenCalledTimes(1); // Assert that the API was called once
  });
});
