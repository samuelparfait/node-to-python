import { spawn } from 'child_process';

export async function processor(path: string, data: object): Promise<any> {
  return new Promise((resolve, reject) => {
    const python = spawn('python3', [path]);

    let output = '';
    let error = '';

    python.stdin.write(JSON.stringify(data));
    python.stdin.end();

    python.stdout.on('data', (data) => {
      output += data.toString();
    });

    python.stderr.on('data', (data) => {
      error += data.toString();
    });

    python.on('close', (code) => {
      if (code === 0) {
        try {
          resolve(JSON.parse(output.trim()));
        } catch (err) {
          reject(
            new Error(
              `Failed to parse Python script output: ${
                err instanceof Error ? err.message : err
              }`
            )
          );
        }
      } else {
        reject(new Error(`Python script failed with code ${code}: ${error}`));
      }
    });
  });
}
