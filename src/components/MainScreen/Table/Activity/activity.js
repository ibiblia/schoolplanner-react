export default function Activity({ activity, setShowEntryDialog, setChosenActivity }) {
    const clickOnActivity = () => {
        setChosenActivity(activity)
        setShowEntryDialog(true)
    }
    
    return (
        <td onDoubleClick={clickOnActivity}>
            {activity.group}
        </td>
    )
}