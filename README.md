# Simple Todo App 2 (Web Development Using React)

## Start JSON Server

```
npm install -g json-server
```

## Create db.json

- Create a `db.json` file and put in some dummy data

```
{
"todos": [
    { "id": 1, "value": "Complete Exercise 1" },
    { "id": 2, "value": "Complete Exercise 2" }
  ]
}
```

### Start JSON Server

```
json-server --watch db.json --port 3001
```
