const fs = require('fs');
const path = require('path');
const fetchSchema = require('fetch-graphql-schema');

const appDirectory = fs.realpathSync(process.cwd());
const schemaJSONPath = path.resolve(appDirectory, 'config/graphql/schema.json');
const schemaClientPath = path.resolve(appDirectory, 'config/graphql/schema.graphql');

const saveSchemaFile = (data, path, fileType) => {
  fs.writeFile(path, data, 'utf8', function (err) {
    if (err) {
      throw new Error(err);
    }
    console.log(`The schema.${fileType} was updated!`);
  });
};

const handleError = (err, fileType) => {
  console.log(`schema.${fileType} fetch error: ${err || err.message}`);
  process.exit(1);
};

// Fetch schema in .json format
fetchSchema(process.env.REACT_APP_GRAPHQL_ENDPOINT)
  .then(data => saveSchemaFile(data, schemaJSONPath, 'json'))
  .catch(err => handleError(err, 'json'));

// Fetch schema in .graphql format
fetchSchema(process.env.REACT_APP_GRAPHQL_ENDPOINT, { readable: true })
  .then(data => saveSchemaFile(data, schemaClientPath, 'graphql'))
  .catch(err => handleError(err, 'graphql'));
