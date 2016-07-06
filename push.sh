#! /bin/sh

#
# This is shell script for pushing to github
# Works on Windows git-bash and UNIX system. also GNU
#


git add . -v
echo -n "Commit message: "
read MESSAGE
# artinya read input user sebagai variabel MESSAGE
git commit -m "$MESSAGE"
echo "Pushing change to Galang23 @ branch master..."
git push Galang23 master
echo -n "Done!"
