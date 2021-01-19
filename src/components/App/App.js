import { useState } from 'react';

import EntryDialog from '../EntryDialog/entryDialog';
import MainScreen from '../MainScreen/mainScreen';
import { emptyActivity, initialData } from '../../shared/constants';

import './App.css';

function App() {
	const [showEntryDialog, setShowEntryDialog] = useState(false)
	const [chosenActivity, setChosenActivity] = useState(emptyActivity)
	const [data, setData] = useState(initialData)
    const [roomToShow, setRoomToShow] = useState(110);

	if (showEntryDialog) {
		return (
			<EntryDialog
				setShowEntryDialog={setShowEntryDialog}
				activity={chosenActivity}
				setChosenActivity={setChosenActivity}
				groups={data.groups}
				teachers={data.teachers}
				classes={data.classes}
			/>
		)
	} else {
		return (
			<MainScreen
				setShowEntryDialog={setShowEntryDialog}
				setChosenActivity={setChosenActivity}
				data={data}
				setData={setData}
				roomToShow={roomToShow}
				setRoomToShow={setRoomToShow}
			/>
		)
	}
}

export default App;
