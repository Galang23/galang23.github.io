#! /bin/sh

#
# This is shell script for pushing to github
#


git add . -v
echo -n "Commit message:"
read MESSAGE
git commit -m "$MESSAGE"
echo -n "Pushing change to Galang23 @ branch master..."
git push Galang23 master
echo -n "Done!"
