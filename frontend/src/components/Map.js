// Using leaflet to display map of Idaho, not sure how we'll use this with the data yet
import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

function Map() {
    // const [censusTractData, setCensusTractData] = useState(null);
    //
    // useEffect(() => {
    //     // Fetch census tract data from CDC website or any other source
    //     // Parse the data into GeoJSON format
    //     // Example:
    //     // const fetchedData = await fetchData();
    //     // const parsedData = parseData(fetchedData);
    //     // setCensusTractData(parsedData);
    // }, []);

    return (
        <MapContainer center={[44.0682, -114.7420]} zoom={6} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/*{censusTractData && (*/}
            {/*    <GeoJSON data={censusTractData} style={() => ({*/}
            {/*        fillColor: 'green', // Example styling, customize as needed*/}
            {/*        fillOpacity: 0.5,*/}
            {/*        color: 'black',*/}
            {/*        weight: 1*/}
            {/*    })} />*/}
            {/*)}*/}
        </MapContainer>
    );
}

export default Map;
