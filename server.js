import { createLogger, format, transports } from 'winston';
import express from 'express';
import { config } from 'dotenv';
import { handler } from './build/handler.js';
import expressWinston from 'express-winston';

config();

const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp, meta }) => {
  const { remoteIp, protocol } = meta.httpRequest || { remoteIp: 'Unknown', protocol: 'Unknown' };
  return `${remoteIp} - - [${timestamp}] "${message} ${protocol}"`;
});

const logger = createLogger({
  format: combine(
    label({ label: 'SvelteKit' }),
    timestamp(),
    myFormat
  ),
  transports: [
      new transports.Console(),
      new transports.File({ filename: 'error.log', level: 'error' }),
      new transports.File({ filename: 'combined.log' }),
  ],
});

const app = express();

// Define a custom logger for Express using Winston
const expressLogger = expressWinston.logger({
  winstonInstance: logger,
  msg: 'HTTP {{req.method}} {{req.url}}',
  expressFormat: true,
  colorize: false,
  ignoreRoute: (req, res) => false,
  dynamicMeta: (req, res) => {
    const httpRequest = {
      remoteIp: req.headers['cf-connecting-ip'] || req.ip || 'Unknown',
      protocol: `HTTP/${req.httpVersion}`,
    };
    return { httpRequest };
  },
  ignoreRoute: (req, res) => {
    return false
  }
});


// Access the environment variables
const { WEBSITE_HOST, WEBSITE_PORT, WEBSITE_ORIGIN, WEBSITE_ADDRESS_HEADER, XFF_DEPTH } = process.env;

app.use(expressLogger);
app.use(handler);

app.listen(WEBSITE_PORT, WEBSITE_HOST, () => {
  console.log(`Running on host ${WEBSITE_HOST} and port ${WEBSITE_PORT}`);
});
