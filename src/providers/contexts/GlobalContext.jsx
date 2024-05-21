import React from 'react'

const GlobalContext = React.createContext(null);

// eslint-disable-next-line react/prop-types
const GlobalProvider = ({ children }) => {
    const [location, setLocation] = React.useState([])
	GlobalContext.displayName = 'Global Context';
    
    React.useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    setLocation([latitude, longitude]);
                },
                (err) => {
                    console.error("Error getting location: ", err);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, []);
    const data = {
        location,
        setLocation
    };

    return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
}
const useContextGlobal = () => React.useContext(GlobalContext);

// eslint-disable-next-line react-refresh/only-export-components
export { GlobalProvider, useContextGlobal }
