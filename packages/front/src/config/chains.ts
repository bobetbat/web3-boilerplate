import type { Chain } from 'wagmi/chains'


export const chiadoGnosisTestnet: Chain = {
  id: 10200,
  name: 'Chiado Testnet (XDAI)',
  nativeCurrency: {
    name: 'XDAI',
    symbol: 'XDAI',
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.chiadochain.net']
    },
    public: {
      http: ['https://rpc.chiadochain.net']
    }
  },
  blockExplorers: {
    default: {
      name: 'blockscout',
      url: 'https://blockscout.com/gnosis/chiado'
    }
  }
}

export const mantleTestnet: Chain = {
  id: 5001,
  name: 'Mantle Testnet',
  nativeCurrency: {
    name: 'MNT',
    symbol: 'MNT',
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.testnet.mantle.xyz']
    },
    public: {
      http: ['https://rpc.testnet.mantle.xyz']
    }
  },
  blockExplorers: {
    default: {
      name: 'blockscout',
      url: 'https://explorer.testnet.mantle.xyz'
    }
  }
}

export const scrollAlfaTestnet: Chain = {
  id: 534353,
  name: 'Scroll Alfa Testnet',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ['https://alpha-rpc.scroll.io/l2']
    },
    public: {
      http: ['https://alpha-rpc.scroll.io/l2']
    }
  },
  blockExplorers: {
    default: {
      name: 'blockscout',
      url: 'https://blockscout.scroll.io/'
    }
  }
}

export const taikoTestnet: Chain = {
  id: 167005,
  name: 'Taiko',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.test.taiko.xyz']
    },
    public: {
      http: ['https://rpc.test.taiko.xyz']
    }
  },
  blockExplorers: {
    default: {
      name: 'blockscout',
      url: 'https://explorer.test.taiko.xyz'
    }
  }
}
