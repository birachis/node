import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://07b41f454b1ac393a02ccc9a60c299b6@o4511092668039168.ingest.de.sentry.io/4511092689535056",
  integrations: [
    // In v10, most integrations like Http and Express are 
    // included by default, so you don't need to add them manually.
  ],
  tracesSampleRate: 1.0, // Adjust for production
});
