import { useState, useEffect } from 'react';

import DropDown from "../../shared/DropDown/dropDown";
import Table from "./Table/table";

import { BASE_URL } from '../../shared/constants';

export default function MainScreen({
    setShowEntryDialog,
    setChosenActivity,
    data,
    setData,
    setRoomToShow,
    roomToShow}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        fetch(`${BASE_URL}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="container">
                <div className="row">
                    <h4>Activities in room:</h4>
                </div>
                <div className="row">
                    <div className="col-6">
                        <DropDown
                            options={data.rooms}
                            setter={setRoomToShow}
                            defaultValue={roomToShow}
                            placeholder="Room..."
                        />
                    </div>
                </div>
                <div className="row">
                    <Table
                        activities={data.activities}
                        slots={data.slots}
                        room={roomToShow}
                        setShowEntryDialog={setShowEntryDialog}
                        setChosenActivity={setChosenActivity}
                    />
                </div>
            </div>
        )
    }
}