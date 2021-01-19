import Activity from './Activity/activity';
import { emptyActivity } from '../../../shared/constants';
import './table.css';

export default function Table({ activities, slots, room, setShowEntryDialog, setChosenActivity }) {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

    const findActivity = (slot, dayOfWeek) => {
        const activity = activities.filter(activity => activity.room == room).find(activity => {
            return activity.slot === slot &&
                   activity.dayOfWeek === dayOfWeek.toLowerCase()
        })
        return activity ? activity : { ...emptyActivity, slot, dayOfWeek: dayOfWeek.toLowerCase(), room };
    }

    return (
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>time</th>
                    {
                        daysOfWeek.map(day => (
                            <th key={day}>{day}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    slots.map(slot => (
                        <tr key={`slot_${slot.value}`}>
                            <th>{slot.displayValue}</th>
                            {
                                daysOfWeek.map(day => (
                                    <Activity
                                        key={`slot_day_${day}`}
                                        setShowEntryDialog={setShowEntryDialog}
                                        setChosenActivity={setChosenActivity}
                                        activity={findActivity(slot.value, day)}
                                    />
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

