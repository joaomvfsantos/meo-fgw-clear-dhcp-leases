# MEO Fibergateway Clear DHCP Leases

The MEO FiberGateway (FGW) AIO router keeps a list of DHCP leases for a long time, even for devices that are no longer connected. There is no way to clear the leases via the Web UI. This script logs-in via TELNET and 
runs `clear-leases` command to clear the list.

## Requirements

- Nodejs >=20.6 (first version that supports .env files natively)
- Telnet must be installed on your system, and runnable via a command line.
- Tested on a FGW GR241AG with software version 3RGW040C01r003.

## Usage

Create a `.env` file based on the `sample.env` and fill the required data, like the FGW Host IP, username and password.

```bash
$ npm install
$ npm start
```