const express = require('express');
const app = express();

const teamRouter = require('./routes/team.js');
const peopleRouter = require('./routes/people.js');
const roleRouter = require('./routes/role.js');
const softwareRouter = require('./routes/software.js');
const equipmentRouter = require('./routes/equipment.js');
const supplyRouter = require('./routes/supply.js');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

// RestAPI의 한계 Overfetching: 네트워크 비용과 시간 등이 불필요하게 늘어난다. 원하지 않는 데이터까지 받아와 데이터 낭비가 발생
app.use('/api/team', teamRouter);
app.use('/api/people', peopleRouter);
app.use('/api/role', roleRouter);
app.use('/api/software', softwareRouter);
app.use('/api/equipment', equipmentRouter);
app.use('/api/supply', supplyRouter);

app.listen(port, () => {
  console.log(`REST API listening at http://localhost:${port}`);
});
