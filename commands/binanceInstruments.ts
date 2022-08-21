import register from "../register";

// transform a string in alts to for example alias arpa instrument arpausdt
const instruments = [
'1000shib',
'1000xec',
'1inch',
'aave',
'ada',
'algo',
'alice',
'alpha',
'ankr',
'ant',
'ape',
'api3',
'arpa',
'ar',
'ata',
'atom',
'audio',
'avax',
'axs',
'bake',
'bal',
'band',
'bat',
'bch',
'bel',
'blz',
'bnb',
'bnx',
'btcdom',
'btc',
'c98',
'celo',
'celr',
'chr',
'chz',
'comp',
'coti',
'crv',
'ctk',
'ctsi',
'cvc',
'dar',
'dash',
'defi',
'dent',
'dgb',
'doge',
'dot',
'dusk',
'dydx',
'egld',
'enj',
'ens',
'eos',
'etc',
'eth',
'fil',
'flm',
'flow',
'ftm',
'ftt',
'gala',
'gal',
'gmt',
'grt',
'gtc',
'hbar',
'hnt',
'hot',
'icx',
'imx',
'inj',
'iost',
'iota',
'iotx',
'jasmy',
'kava',
'klay',
'knc',
'ksm',
'lina',
'link',
'lit',
'lpt',
'lrc',
'ltc',
'mana',
'mask',
'matic',
'mkr',
'mtl',
'near',
'neo',
'nkn',
'ocean',
'ogn',
'omg',
'one',
'ont',
'op',
'people',
'qtum',
'ray',
'reef',
'ren',
'rlc',
'rose',
'rsr',
'rune',
'rvn',
'sand',
'sfp',
'skl',
'snx',
'sol',
'srm',
'stmx',
'storj',
'sushi',
'sxp',
'theta',
'tomo',
'trb',
'trx',
'unfi',
'uni',
'vet',
'waves',
'woo',
'xem',
'xlm',
'xmr',
'xrp',
'xtz',
'yfi',
'zec',
'zen',
'zil',
'zrx',
];

// global
register.alias('*', 'instrument *');
// instruments
instruments.forEach((instr) => register.alias(instr, `instrument ${instr}usdt`));
