import Raven from "raven-js";

const sentry_key = "8a80954d0079445c8c73d57960f7f860";

const sentry_app = "1193443";

export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });

  window && window.console && console.error && console.error(ex);
}
