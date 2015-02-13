@echo off

echo Starting release and deploy operation.
git status

echo Updating the version and creating tag.
npm version %1

echo Pushing all the stuff to Github.
git push origin master
git push origin v%1

echo Deploying...
git checkout deploy
git merge master deploy
git push origin deploy
git checkout master
