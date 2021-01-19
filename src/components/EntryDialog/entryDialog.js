import { BASE_URL } from "../../shared/constants";
import DropDown from "../../shared/DropDown/dropDown";

export default function EntryDialog({
    setShowEntryDialog,
    setChosenActivity,
    activity,
    groups,
    teachers,
    classes
}) {

    const sendActivity = (todo) => {
        fetch(`${BASE_URL}/${todo}`, {
            headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
            method: "POST",
            body: JSON.stringify(activity)
        }).then(() => {
            setShowEntryDialog(false);
        })
    }

    return (
        <div className="container">   
            <div className="row">
                <button className="btn btn-dark" onClick={() => setShowEntryDialog(false)}>Back</button>
            </div>
            <form className="row">
                <div className="col">
                    <DropDown
                        options={groups}
                        defaultValue={activity.group}
                        setter={(group) => setChosenActivity({...activity, group })}
                        placeholder="Group..."
                        />
                </div>
                <div className="col">
                    <DropDown
                        options={teachers}
                        defaultValue={activity.teacher}
                        setter={(teacher) => setChosenActivity({...activity, teacher })}
                        placeholder="Teacher..."
                        />
                </div>
                <div className="col">
                    <DropDown
                        options={classes}
                        defaultValue={activity.subject}
                        setter={(subject) => setChosenActivity({...activity, subject })}
                        placeholder="Subject..."
                    />
                </div>
            </form>
            <div className="row">
                <div className="btn-group">
                    <button className="btn btn-success" onClick={() => sendActivity('save')}>Save</button>
                    <button className="btn btn-danger" onClick={() => sendActivity('delete')}>Clear</button>
                </div>
            </div>
        </div>
    )
}
