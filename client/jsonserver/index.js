const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(__dirname + '/db.json');
const middlewares = jsonServer.defaults();
/*
const multer  = require('multer');
const storage = multer.diskStorage({
    destination: 'public/uploads/',
    filename: (req, file, cb) => cb(null, file.originalname)
});
const upload = multer({ storage: storage });
//add multer upload file
server.use(upload.single('file'));
*/

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

server.use(jsonServer.rewriter({
  //'/api/*': '/$1',
  '/movies': '/movies',
}));

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

// Use default router
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running!');
  console.log('Source:', router.db.source);
});