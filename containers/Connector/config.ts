import { init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import trezorModule from '@web3-onboard/trezor'
import ledgerModule from '@web3-onboard/ledger'
import walletConnectModule from '@web3-onboard/walletconnect'
import walletLinkModule from '@web3-onboard/walletlink'
import gnosisModule from '@web3-onboard/gnosis'

const base64CraneIcon =
  'data:image/png;base64,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'

const injected = injectedModule()
const walletLink = walletLinkModule({ darkMode: true })
const walletConnect = walletConnectModule()
const gnosis = gnosisModule()
const ledger = ledgerModule()

const trezorOptions = {
  email: '',
  appUrl: 'https://www.v3gm.synthetix.io',
}
const trezor = trezorModule(trezorOptions)

const initWeb3Onboard = () =>
  init({
    wallets: [injected, ledger, walletLink, trezor, walletConnect, gnosis],
    chains: [
      {
        id: '0x10',
        token: 'ETH',
        label: 'Optimism Mainnet',
        rpcUrl: `https://optimism-mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`,
      },
    ],
    appMetadata: {
      name: 'V3GM',
      // @TODO: Change to synthetix icon
      icon: base64CraneIcon,
      description: 'Synthetix Governance dApp',
      recommendedInjectedWallets: [
        { name: 'MetaMask', url: 'https://metamask.io' },
        { name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
      ],
      agreement: {
        version: '1.0.0',
        termsUrl: 'https://www.blocknative.com/terms-conditions',
        privacyUrl: 'https://www.blocknative.com/privacy-policy',
      },
    },
  })

export default initWeb3Onboard
