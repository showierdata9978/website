#check if the user does not want to build the app
if [ "$1" != "--no-build" ]; then
    # Build the app
    bash ./build.sh
    python3 -m pip install -r App/requirements.txt
fi

cd App

# check if  Public folder exists
if [ ! -d "Public" ]; then
    echo "Build failed: Public folder not found"
    exit 1
fi


python3 __main__.py

# exit with the exit code of the last command
exit $?
