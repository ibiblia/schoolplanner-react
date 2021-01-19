const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 1234;
const data = require('./data.json')

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept');
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
	next();
})
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json(data);
});

const findIfExists = (bodyActivity) => {
    const foundActivity = data.activities.find(activity => {
        if (bodyActivity.slot == activity.slot &&
            bodyActivity.dayOfWeek == activity.dayOfWeek &&
            bodyActivity.room == activity.room) return true
		return false
    })
    
    return foundActivity;
}

app.post('/save', (req, res) => {
    const found = findIfExists(req.body);
    if (found) data.activities.splice(data.activities.indexOf(found), 1, req.body)
    else data.activities.push(req.body)
    res.send("Saved")
});

app.post('/delete', (req, res) => {
    found = findIfExists(req.body)
    if (found) data.activities.splice(data.activities.indexOf(found), 1)
    res.send("Deleted")
});


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});