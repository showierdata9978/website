if [ "$1" == "--build" ]
then
    npm run build
fi

WEBSITE_HOST="127.0.0.1" \
WEBSITE_PORT=4000 \
WEBSITE_ORIGIN="https://showierdata.xyz" \
WEBSITE_ADDRESS_HEADER=X-Forwarded-For \
XFF_DEPTH=1 \
node server.js