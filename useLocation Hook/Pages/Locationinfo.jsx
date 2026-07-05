import { useLocation } from "react-router";

const LocationInfo = () => {
    const location = useLocation();
    console.log("Current location",location)
    return(
        <div>
            <h1>Location Information</h1>
            <p><strong>Pathname:</strong>{location.pathname}</p>
            <p><strong>Search:</strong>{location.search}</p>
            <p><strong>Hash:</strong>{location.hash}</p>
            <p><strong>state:</strong>{JSON.stringify(location.state)}</p>
            <p><strong>key:</strong>{location.key}</p>
            <p><strong>Location Object:</strong>{JSON.stringify(location)}</p>
        </div>
    );
}
export default LocationInfo;