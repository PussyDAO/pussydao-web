import { ConnectButton } from '@rainbow-me/rainbowkit';

const ConnectWalletButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,

        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    className='bg-pink-200 text-black font-bold px-3 py-2 mx-2 rounded-lg h-10 flex justify-center items-center'
                    type='button'
                  >
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    className='bg-pink-200 text-black font-bold px-3 py-2 mx-2 rounded-lg h-10 flex justify-center items-center'
                    type='button'
                  >
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: 'flex' }}>
                  <button
                    onClick={openChainModal}
                    className='bg-pink-200 text-black font-bold px-3 py-2 mx-2 rounded-lg h-10 flex justify-center items-center'
                    type='button'
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 18,
                          height: 18,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 7,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 18, height: 18 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button
                    onClick={openAccountModal}
                    className='bg-pink-200 text-black font-bold px-3 py-2 mx-2 rounded-lg h-10 flex justify-center items-center'
                    type='button'
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ConnectWalletButton;
