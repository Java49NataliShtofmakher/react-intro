import React from "react";
import timeZones from "../time-zones";

type TimerProps = {
    cityOrCountry: string;

}
const getCountryIndex = (country: string) => {
    return timeZones.findIndex(zone => zone.countryName === country);
}
const getTimeZone = (country: string) => {
    let index: number = getCountryIndex(country);
    if (index === -1) {
        index = getCountryIndex("Israel");
    }
    return timeZones[index];
}

export const Timer: React.FC<TimerProps> = (props) => {
    const { cityOrCountry } = props

    const timeZoneData = getTimeZone(cityOrCountry)
    const { name: timeZone, countryName } = timeZoneData;

    const [time, setTime] = React.useState(new Date());

    const tick = () => {
        console.log("tick");
        setTime(new Date());
    }
    React.useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, [])

    return (
        <div style={{ maxWidth: '200px', width: '200px', textAlign: 'center' }}>
            <h3 style={{ fontSize: "1em" }}>Time in  {countryName}</h3>
            <label style={{ display: "block", textAlign: "center", fontSize: "1em" }}>
                Time: {time.toLocaleTimeString(undefined, { timeZone })}</label>
        </div>
    )
}