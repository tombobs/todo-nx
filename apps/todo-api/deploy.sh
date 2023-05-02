echo ' ..building API'
#npm run build:todo-api

echo ' ..deploying'
scp -r /c/Users/tombo/code/todo-nx/dist/apps/todo-api tom@213.52.130.161:~

echo 'done'
