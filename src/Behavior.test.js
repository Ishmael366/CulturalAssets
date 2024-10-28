import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Cultural Asset Tracker Behavior Tests', () => {
    test('filters assets correctly by selected status', () => {
        render(<App />);

        // Select "missing" from the status filter dropdown
        fireEvent.change(screen.getByLabelText(/Filter by Status/i), {
            target: { value: 'missing' }
        });

        // Check that only assets with "missing" status are displayed
        const missingAsset = screen.getByText(/Elgin Marbles/i);
        expect(missingAsset).toBeInTheDocument();

        // Ensure assets with other statuses are not displayed
        expect(screen.queryByText(/The Rosetta Stone/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Nefertiti Bust/i)).not.toBeInTheDocument();
    });

    test('displays detailed information when an asset is selected', () => {
        render(<App />);

        // Click on an asset to view its details
        fireEvent.click(screen.getByText(/The Rosetta Stone/i));

        // Check that asset details are displayed
        expect(screen.getByText(/Status: recovered/i)).toBeInTheDocument();
        expect(screen.getByText(/Location: Lat 51.5194, Lng -0.1270/i)).toBeInTheDocument();
    });

    test('displays all assets when filter is set to "all"', () => {
        render(<App />);

        // Set filter to "all" to display all assets
        fireEvent.change(screen.getByLabelText(/Filter by Status/i), {
            target: { value: 'all' }
        });

        // Check that all assets are displayed
        expect(screen.getByText(/The Rosetta Stone/i)).toBeInTheDocument();
        expect(screen.getByText(/Elgin Marbles/i)).toBeInTheDocument();
        expect(screen.getByText(/Nefertiti Bust/i)).toBeInTheDocument();
    });

    test('handles empty result when filtering with non-matching status', () => {
        render(<App />);

        // Set filter to a non-matching status (e.g., "archived")
        fireEvent.change(screen.getByLabelText(/Filter by Status/i), {
            target: { value: 'archived' }
        });

        // Check that no assets are displayed
        expect(screen.queryByText(/The Rosetta Stone/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Elgin Marbles/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Nefertiti Bust/i)).not.toBeInTheDocument();
        expect(screen.getByText(/No assets found/i)).toBeInTheDocument();
    });
});
