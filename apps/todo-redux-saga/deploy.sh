echo ' ..Building UI'
#npm run build:redux-saga

echo ' ..deploying'
/c/Users/tombo/Downloads/s3cmd-2.3.0/s3cmd-2.3.0/s3cmd --no-mime-magic --acl-public --delete-removed --delete-after sync dist/apps/todo-redux-saga/* s3://todo-redux-saga.tom-roberts.dev

echo 'done'
