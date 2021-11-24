<p align="center">
  <a href="https://kyve.network">
    <img src="https://user-images.githubusercontent.com/62398724/137493477-63868209-a19b-4efa-9413-f06d41197d6d.png" style="border-radius: 50%" height="96">
  </a>
  <h3 align="center"><code>@kyve/celo</code></h3>
  <p align="center">✅ The official KYVE Celo integration.</p>
</p>

## How to run a node

### Requirements

- Ethereum Wallet
- You need $DEV and $KYVE (You can get some for free [here](https://app.kyve.network/faucet))
- Any device with a good internet connection

### Docker

You can run the Celo integration directly from Docker.

To pull the latest Docker image, run:

```
docker pull kyve/celo:latest
```

And to start your node, run the following (don't forget to pass in [options](#options)):

```
docker run --rm --name kyve-celo-node kyve/celo:latest --pool {POOL_ADDRESS} --private-key {PRIVATE_KEY} --stake 100
```

### Prebuilt Binaries

We also provide prebuilt binaries for you to run.

We currently support Linux, MacOS, and Windows binaries - which you can download from [here](https://github.com/KYVENetwork/celo/releases).

To run a binary, all you need to do is specify your [options](#options).

### Options

#### `-p, --pool <string>`

The address of the pool you want to run on.

#### `-s, --stake <string>`

The amount of tokens you want to stake.

#### `-pk, --private-key <string>`

Your Ethereum private key that holds $KYVE.

#### `-k, --keyfile <string>` _optional_

The path to your Arweave keyfile.

#### `-n, --name <string>` _optional, default is a random name_

The identifier name of the node.

#### `-e, --endpoint <string>` _optional_

A custom Moonbase Alpha endpoint.

#### `-g, --gas-multiplier <string>` _optional_

The amount that you want to multiply the default gas price by.

#### `-st, --send-statistics <boolean>` _optional, default is true_

Send statistics.

### Run on linux

```
./kyve-celo-linux --pool {POOL_ADDRESS} --private-key {PRIVATE_KEY} --stake 100
```

### Run on macos

```
./kyve-celo-macos --pool {POOL_ADDRESS} --private-key {PRIVATE_KEY} --stake 100
```

### Run on windows

```
.\kyve-celo-win.exe --pool {POOL_ADDRESS} --private-key {PRIVATE_KEY} --stake 100
```

## Verify a node is running correctly

### Uploader

When you run as an uploader you should see something like:

```
2021-11-24 09:41:00.000  INFO 🚀 Starting node ...
    Name          = kyve-celo-uploader
    Address       = 0x...
    Pool          = 0x...
    Desired Stake = 100 $KYVE
    Version       = v0.0.0
2021-11-24 09:41:00.000  DEBUG [Metadata] Attempting to fetch the metadata.
2021-11-24 09:41:00.000  DEBUG [Metadata] Successfully fetched the metadata.
2021-11-24 09:41:00.000  DEBUG [Settings] Attempting to fetch the settings.
2021-11-24 09:41:00.000  DEBUG [Settings] Successfully fetched the settings.
2021-11-24 09:41:00.000  DEBUG [Config] Attempting to fetch the config.
2021-11-24 09:41:00.000  DEBUG [Config] Successfully fetched the config.
2021-11-24 09:41:00.000  INFO 💻 Running node on runtime @kyve/celo.
2021-11-24 09:41:00.000  DEBUG [Stake] Attempting to stake 100 $KYVE.
2021-11-24 09:41:00.000  DEBUG [Stake] Approving 100 $KYVE to be spent. Transaction = 0x...
2021-11-24 09:41:00.000  INFO [Stake] 👍 Successfully approved.
2021-11-24 09:41:00.000  DEBUG [Stake] Staking 100 $KYVE. Transaction = 0x...
2021-11-24 09:41:00.000  INFO [Stake] 📈 Successfully staked.
2021-11-24 09:41:00.000  INFO [Celo] ✅ Connection created. Endpoint = wss://forno.celo.org/ws
```

### Validator

When you run as a validator you should see something like:

```
2021-11-24 09:41:00.000  INFO 🚀 Starting node ...
    Name          = kyve-celo-validator
    Address       = 0x...
    Pool          = 0x...
    Desired Stake = 100 $KYVE
    Version       = v0.0.0
2021-11-24 09:41:00.000  DEBUG [Metadata] Attempting to fetch the metadata.
2021-11-24 09:41:00.000  DEBUG [Metadata] Successfully fetched the metadata.
2021-11-24 09:41:00.000  DEBUG [Settings] Attempting to fetch the settings.
2021-11-24 09:41:00.000  DEBUG [Settings] Successfully fetched the settings.
2021-11-24 09:41:00.000  DEBUG [Config] Attempting to fetch the config.
2021-11-24 09:41:00.000  DEBUG [Config] Successfully fetched the config.
2021-11-24 09:41:00.000  INFO 💻 Running node on runtime @kyve/celo.
2021-11-24 09:41:00.000  DEBUG [Stake] Attempting to stake 100 $KYVE.
2021-11-24 09:41:00.000  DEBUG [Stake] Approving 100 $KYVE to be spent. Transaction = 0x...
2021-11-24 09:41:00.000  INFO [Stake] 👍 Successfully approved.
2021-11-24 09:41:00.000  DEBUG [Stake] Staking 100 $KYVE. Transaction = 0x...
2021-11-24 09:41:00.000  INFO [Stake] 📈 Successfully staked.
2021-11-24 09:41:00.000  INFO [Celo] ✅ Connection created. Endpoint = https://forno.celo.org
```
