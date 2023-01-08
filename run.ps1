./build.ps1

cd App

python3 -m pip install -r requirements.txt
python3 __main__.py

exit $LASTEXITCODE