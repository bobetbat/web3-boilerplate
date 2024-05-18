import type { Hash } from '../types';

export interface TGetNumberOfProperties {
  owner: Hash
}

export interface TChainContracts {
  name: string;
  address: Hash,
}

export interface TContracts {
  [id: string]: TChainContracts
}

export const contracts: TContracts = {
  534353: {
    name: 'scrollAlfaTestnet',
    address: '0x',
  },
  420: {
    name: 'OptimismTestnet',
    address: '0x',
  },
  5001: {
    name: 'mantleTestnet',
    address: '0x',
  },
  10200: {
    name: 'chiadoGnosisTestnet',
    address: '0x',
  },
  167005: {
    name: 'taikoTestnet',
    address: '0x',
  },
}
