import React from "react";
import { Input } from '../components/Input'
import timeZones from "../time-zones";

type TimerProps = {
    inputId: string
}
const getTimeZoneIndex = (nameOfCityCountry: string): number => {
    return timeZones.findIndex(tz => JSON.stringify(tz).includes(nameOfCityCountry))
}

export const Timer: React.FC<TimerProps> = ({ inputId }) => {
    const [cityOrCountry, setCityOrCountry] = React.useState('');
    const [timeZone, setTimeZone] = React.useState('');
    const [time, setTime] = React.useState(new Date());

    const processInput = (value: string): string => {
        let errorText: string = '';
        let timeZoneIndex: number = getTimeZoneIndex(value);

        if (timeZoneIndex === -1) {
            errorText = "Wrong country or city, try again";
            setCityOrCountry('')
        } else {
            setCityOrCountry(value);
        }
        return errorText;
    }

    const tick = () => {
        console.log("tick");
        setTime(new Date());
    }

    React.useEffect(() => {
        let interval: number;
        if (cityOrCountry) {
            const timeZoneIndex: number = getTimeZoneIndex(cityOrCountry);
            const timeZone: string = timeZones[timeZoneIndex]?.name;
            setTimeZone(timeZone)

            interval = window.setInterval(tick, 1000);
        }
        return () => clearInterval(interval);
    }, [cityOrCountry])

    return <>
        <Input inputId={inputId} inputProcess={processInput} placeholder={'Enter country or city'} />

        {cityOrCountry && (<div>
            <h2 className='logo'>Time in {cityOrCountry}</h2>

            {timeZone && (
                <label style={{
                    display: "block",
                    textAlign: "center", fontSize: "2em"
                }}>{time.toLocaleTimeString(undefined, { timeZone })}</label>
            )}
        </div>)}
    </>
}