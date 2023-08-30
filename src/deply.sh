set -e

npm run build


cd dist

git init 
git checkout -b master
git add -A
git commit -m "deploy"
