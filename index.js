const express = require('express');
const PostgresClient = require('./src/db/PostgresClient');
const ItemsRepository = require('./src/repositories/items');
const ItemsService = require('./src/services/items');
const ItemsController = require('./src/controllers/items');
const createItemsRoutes = require('./src/routes/items');
const PurchasesRepository = require('./src/repositories/purchases');
const PurchasesService = require('./src/services/purchases');
const PurchasesController = require('./src/controllers/purchases');
const createPurchasesRoutes = require('./src/routes/purchases');

const app = express();
app.use(express.json());

const db = new PostgresClient({
  user: 'postgres',
  password: 'qwerty',
  host: 'localhost',
  port: '5432',
  database: 'purchases',
});

const itemsRepository = new ItemsRepository(db);
const itemsService = new ItemsService(itemsRepository);
const itemsController = new ItemsController(itemsService);

app.use('/items', createItemsRoutes(itemsController));

const purchasesRepository = new PurchasesRepository(db);
const purchasesService = new PurchasesService(purchasesRepository);
const purchasesController = new PurchasesController(purchasesService);

app.use('/purchases', createPurchasesRoutes(purchasesController));

app.listen(3000, () => console.log('✅ Server started on port 3000'));
