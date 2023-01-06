import { ChainRecord, Wallet } from '@cosmos-kit/core';
import { ChainWCV1 } from '@cosmos-kit/walletconnect-v1';
export declare class ChainCosmostationMobile extends ChainWCV1 {
    constructor(walletInfo: Wallet, chainInfo: ChainRecord);
}
