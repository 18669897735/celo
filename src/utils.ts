import { ethers } from "ethers";

export class CeloJsonRpcProvider extends ethers.providers.JsonRpcProvider {
  constructor(
    url?: ethers.utils.ConnectionInfo | string,
    network?: ethers.providers.Networkish
  ) {
    super(url, network);

    this.formatter._block = (value: any, format: any) => {
      return value;
    }
  }
}

export class CeloWebSocketProvider extends ethers.providers.WebSocketProvider {
  constructor(
    url: string,
    network?: ethers.providers.Networkish
  ) {
    super(url, network);

    this.formatter._block = (value: any, format: any) => {
      return value;
    }
  }
}
