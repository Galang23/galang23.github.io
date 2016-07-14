@echo off
echo Do you want to pull file from remote repo?
ping 127.0.0.1 -n 5 > git
echo Press [ENTER] to continue or [CTRL + C] to abort
pause > git
echo.
echo You pressed [ENTER] button.
echo You choose to pull files from remote repo.
ping 127.0.0.1 -n 5 > git
set /P branch=Please specify branch to pull [master, gh-pages]: 
echo Pulling files from remote repo
git pull Galang23 %branch%
echo.
echo Done pulling from server!
