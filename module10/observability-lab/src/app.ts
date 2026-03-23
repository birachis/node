import express from 'express';
import * as Sentry from '@sentry/node';
import routes from './routes';
import { requestLogger } from './middleware/requestLogger';

// import "./instrument";

const app = express();

// Parse JSON body
app.use(express.json());

// Sentry request handler (must be first)
// app.use(Sentry.Handlers.requestHandler());
// Captures request context for errors

// Custom request logger
app.use(requestLogger);

// Application routes
app.use(routes);

Sentry.setupExpressErrorHandler(app);

// Sentry error handler (must be before custom error handler)
// app.use(Sentry.Handlers.errorHandler());
// Sends errors to Sentry dashboard

// Custom error handler
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err); // log locally

  res.status(500).json({
    message: 'Internal Server Error'
  });
});

export default app;
