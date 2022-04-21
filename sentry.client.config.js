// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({

  
  dsn: SENTRY_DSN || 'https://c0f194d38c734341bcb7f03c26f9db48@o1212617.ingest.sentry.io/6350817',
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps

  breadcrumbs: true,

  // Set to false if you want to disable tracking of navigation history
  trackPageChange: true,

  // Set to false if you want to disable tracking of console messages
  console: false,

  // Set to false if you want to disable tracking of unhandled promises
  unhandledPromiseRejection: true,

  // Set to false if you want to disable tracking of global error events
  errorReporting: true,

  // Set to false if you want to disable manually triggering breadcrumbs
  manualBreadcrumbManipulation: true,

  // Set to false if you want to disable manually capturing breadcrumbs
  manualBreadcrumbCapture: true,

  // Set to false if you want to disable context reporting
  context: true,

  // Set to false if you want to disable SDK reporting
  sdkReporting: true,

  // Set to false if you want to disable sourcemaps
  sourceMaps: true,

  // Set to false if you want to disable SDK sourcemap
  sdkSourceMaps: true,

  // Set to false if you want to disable SDK auto-install
  sdkInstall: true,

  // Set to false if you want to disable SDK auto-init
  sdkIntegrations: true,

  // Set to false if you want to disable SDK auto-load
  sdkAutoLoad: true,

  // Set to false if you want to disable SDK auto-capture
  sdkCaptureConsole: true,

  // Set to false if you want to disable SDK auto-capture
  sdkCaptureUnhandledRejections: true,

  
});

 