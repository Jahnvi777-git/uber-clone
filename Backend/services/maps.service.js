const axios = require('axios')

module.exports.getAddressCoordinate = async (address) => {
    if (!address || typeof address !== 'string' || address.trim().length < 3) {
        throw new Error('Address must be at least 3 characters long')
    }

    const apiKey = process.env.GOOGLE_MAPS_API
    const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`

    try {
        const response = await axios.get(googleUrl, { timeout: 10000 })
        if (response.data?.status === 'OK' && response.data.results?.length) {
            const location = response.data.results[0].geometry.location
            return {
                lat: location.lat,
                lng: location.lng
            }
        }
    } catch (err) {
        console.warn('Google geocoding failed, trying OpenStreetMap fallback:', err.message)
    }

    try {
        const response = await axios.get('https://nominatim.openstreetmap.org/search', {
            params: {
                q: address,
                format: 'jsonv2',
                limit: 1
            },
            headers: {
                'User-Agent': 'uber-clone/1.0'
            },
            timeout: 10000
        })

        const firstResult = response.data?.[0]
        if (firstResult) {
            return {
                lat: parseFloat(firstResult.lat),
                lng: parseFloat(firstResult.lon)
            }
        }

        throw new Error('No coordinates found for the provided address')
    } catch (err) {
        console.error('Geocoding failed:', err.message)
        throw new Error(err.message || 'Unable to fetch coordinates')
    }
}

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('origin and destination are required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`

    try {
        const response = await axios.get(url, { timeout: 10000 });
        if (response.data?.status === 'OK' && response.data.rows?.[0]?.elements?.[0]) {
            return response.data.rows[0].elements[0];
        }

        throw new Error(response.data?.error_message || 'unable to fetch distance and time');
    } catch (err) {
        console.warn('Distance matrix request failed:', err.message);

        return {
            status: 'OK',
            duration: { text: '10 mins', value: 600 },
            distance: { text: '5 km', value: 5000 },
            fallback: true,
            note: 'Using fallback mock distance/time because the Maps API request failed.'
        };
    }
}

module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input || typeof input !== 'string' || input.trim().length < 2) {
        throw new Error('Address is required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    const uri = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try {
        const response = await axios.get(uri, { timeout: 10000 });
        if (response.data?.status === 'OK') {
            return response.data.predictions || [];
        }

        throw new Error(response.data?.error_message || 'Unable to fetch suggestions');
    } catch (err) {
        console.warn('Autocomplete request failed:', err.message);
        return [
            {
                description: input,
                place_id: 'fallback',
                structured_formatting: {
                    main_text: input,
                    secondary_text: 'Fallback suggestion'
                },
                fallback: true,
                error: err.message
            }
        ];
    }
}