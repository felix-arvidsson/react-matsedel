const express = require('express')
const bcrypt = require('bcryptjs');
const cors = require('cors');
const knex = require('knex')

const app = express();

const db = knex({
    client: 'pg',
    connection: {
      host : 'db',
      port : 5432,
      user : 'postgres',
      password : 'development',
      database : 'Matlistan'
    }
  });

/*
db.select('*').from('users').then(data => {
    console.log(data)
});

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors())
*/

const database = {
    users: [
        {
            id: '123',
            name: 'felix',
            email: 'felix.arvidsson@gmail.com',
            password: 'banan123',
            entries: 0,
            joined: new Date()
        },
        {
            id: '1234',
            name: 'Admin',
            email: 'admin@umea.se',
            password: 'admin',
            entries: 0,
            joined: new Date()
        }
    ],
    login : [
        {
            id: '987',
            hash: '',
            email: 'felix.arvidsson@umea.se'
        }
    ]
}


app.get('/', (req, res) => {
    res.send(database.users)
    console.log("HEJ")
})


app.get('/users/', (req, res) => {
    db.select('*').from('users').then(user => {
        if (user.length) {
            res.json(user)
        } else {
            res.status(400).json('Not found')
        }
    })
    .catch(err => res.status(400).json('Error getting user'))
})

app.post('/signin', (req, res) => {
    // Load hash from your password DB.
    bcrypt.compare("apples", "$2a$08$8af7aj2jJkVyfR6Cdh1aQe2oD5C0.KzxxuhmwgKfAe7bhHfrLUjoi", function(err, res) {
    // res === true
        console.log("first guess", res)
    });
    bcrypt.compare("not_bacon", "$2a$08$8af7aj2jJkVyfR6Cdh1aQe2oD5C0.KzxxuhmwgKfAe7bhHfrLUjoi", function(err, res) {
    // res === false
        console.log("second guess", res)
    });
    if (req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
            res.json(database.users[0]);
        } else {
            res.status(400).json('error logging in ')
        }
   // res.json('signin')
})

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    
    bcrypt.hash(password, 8, function(err, hash) {
        console.log(hash)
    });
    db('users')
    .returning('*')
    .insert({
        email: email,
        name: name,
        joined: new Date()
    }).then(user => {
        res.json(user[0]);
    })
    .catch(err => res.status(400).json('Unable to register'))
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    db.select('*').from('users').where({
        id: id
    }).then(user => {
        if (user.length) {
            res.json(user)
        } else {
            res.status(400).json('Not found')
        }
    })
    .catch(err => res.status(400).json('Error getting user'))
})

app.put('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            user.entries++
            return res.json(user.entries);
            }
        })
        if (!found) {
            res.status(400).json("not found");
    }
})



app.listen(3001, () => {
    console.log("server is running on port 3001.")
})

/*

--> res = this is working
/signin --> POST = success/fail
/register --> Post = user
/profile/:userId --> GET = user
/image --> PUT --> user

*/