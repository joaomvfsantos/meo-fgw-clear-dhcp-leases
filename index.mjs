import { spawn } from 'node:child_process';
import 'dotenv/config';

const ls = spawn('telnet', [process.env.FGW_HOST]);

ls.stdout.on('data', (data) => {
    console.log(`${data}`);
    if (data.indexOf('Login:') !== -1) {
        ls.stdin.write(new Buffer.from(`${process.env.FGW_USERNAME}\n`, 'ascii'));
    } else if (data.indexOf('Password:') !== -1) {
        ls.stdin.write(new Buffer.from(`${process.env.FGW_PASSWORD}\n`, 'ascii'));
    } else if (data.indexOf('cli>') !== -1) {
        ls.stdin.write(new Buffer.from('/lan/dhcp/clear-leases --group-name=Default\n', 'ascii'));
        ls.stdin.write(new Buffer.from('quit\n', 'ascii'));
    }
});

ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});