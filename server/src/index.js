const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const responseHandler = require('./handler/responseHandler');
const errorHandler = require('./handler/errorHandler');
const experienceRoutes = require('./routes/experienceRoutes');
const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = new Koa();
const PORT = process.env.PORT || 3000;


app.use(errorHandler); 
app.use(responseHandler()); 
app.use(bodyParser());


app.use(experienceRoutes);
app.use(projectRoutes);
app.use(contactRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
