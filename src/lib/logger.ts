const log = (
  level: string,
  message: string,
  context: string,
  meta: object = {}
): void => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    level,
    context,
    message,
    ...meta,
  };
  console.log(JSON.stringify(logEntry), '\n');
};

export const logError = (
  err: unknown,
  context: string = '',
  meta: object = {}
): void => {
  const message = err instanceof Error ? err.message : String(err);
  const stack = err instanceof Error && err.stack ? err.stack : undefined;
  log('error', message, context, { stack, ...meta });
};

export const logInfo = (
  message: string,
  context: string = '',
  meta: object = {}
): void => {
  log('info', message, context, meta);
};

export const logWarn = (
  message: string,
  context: string = '',
  meta: object = {}
): void => {
  log('warn', message, context, meta);
};

export const logDebug = (
  message: string,
  context: string = '',
  meta: object = {}
): void => {
  log('debug', message, context, meta);
};
