## Sample Node Application

#### Running the app locally
In the terminal, go into your project folder and clone the repo. Replace \<fork\> with the name of fork.
```
$ git clone https://github.com/<fork>/sampleNodeProject
```

Cd into sampleNodeProject/ and install the dependencies.
```
$ npm install
```

Add a mongo URI to line 9 of index.js.
```
const url = 'mongodb://<username>:<password>@<database>.mlab.com:37882/demo';
```

Start the server.
```
$ npm start
```

Open a browser to [http://localhost:8081](http://localhost:8081).
