const express = require('express');
const cors = require('cors');
const Item = require('./config');

const app = express();
app.use(express.json());
app.use(cors());

//apis

app.get("/", (req, res) => {
  res.send("Tree House Api!");
  res.end();
});

app.get("/all", async (req, res) => {
  const snapshot = await Item.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

app.post('/create', async (req, res) => {
    const data = req.body;
    await Item.add(data)
    res.send({msg: 'item added'})
})

app.post('/update', async (req, res) => {
    const id = req.body.id;
    delete req.body.id;
    const data = req.body;
    await Item.doc(id).update(data)
    res.send({msg: 'item updated'})
})

app.post('/delete', async (req, res) => {
    const id = req.body.id;
    await Item.doc(id).delete(id)
    res.send({msg: 'item deleted'})
})

app.listen(4000, () => {
  console.log("app is runnning on port 4000");
});
