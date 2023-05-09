export SERVER='tom@213.52.130.161'
export APP_NAME='email'

cd ../../

echo '  Building'
nx build $APP_NAME'-api' --prod

echo '  copying build to server'
scp -r 'dist/apps/'$APP_NAME'-api' $SERVER':~'

echo '  Installing dependencies'
ssh $SERVER 'cd ~/'$APP_NAME'-api && npm install'

echo '  Restarting app'
#ssh $SERVER 'pm2 restart '$APP_NAME' && pm2 logs '$APP_NAME
