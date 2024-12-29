import path from 'path';

export const getAbsolutePath = (relativePath: string): string => {
  const rootPath = process.cwd();
  return path.resolve(rootPath, relativePath);
};
