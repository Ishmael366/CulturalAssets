import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Cultural Asset Tracker App', () => {
  test('renders the main heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Cultural Asset Tracker/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the map component', () => {
    render(<App />);
    const mapElement = screen.getByRole('region', { name: /map/i });
    expect(mapElement).toBeInTheDocument();
  });

  test('renders the DataBox component', () => {
    render(<App />);
    const filterLabel = screen.getByText(/Filter by Status/i);
    expect(filterLabel).toBeInTheDocument();
  });

  test('filter assets by status', () => {
    render(<App />);

    // Open filter dropdown and select 'Recovered'
    fireEvent.change(screen.getByLabelText(/Filter by Status/i), {
      target: { value: 'recovered' }
    });

    // Check if assets are filtered based on 'recovered' status
    const recoveredAsset = screen.getByText(/The Rosetta Stone/i);
    expect(recoveredAsset).toBeInTheDocument();
  });

  test('displays asset details when asset is selected', () => {
    render(<App />);

    // Simulate selecting an asset
    fireEvent.click(screen.getByText(/The Rosetta Stone/i));

    // Check if details are displayed
    const detailElement = screen.getByText(/Status: recovered/i);
    expect(detailElement).toBeInTheDocument();
  });
});
