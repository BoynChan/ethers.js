'use strict';

// This is empty in node, and used by browserify to inject extra goodies
import {} from './utils/shims';


import { Contract, Interface } from './contracts';
import * as providers from './providers';
import * as utils from './utils';
import { HDNode, SigningKey, Wallet } from './wallet';
import * as wordlists from './wordlists';

import * as types from './utils/types';

import * as errors from './utils/errors';

import { version } from './_version';

const constants = utils.constants;

export {
    Wallet,

    HDNode,
    SigningKey,

    Contract,
    Interface,

    providers,

    types,

    errors,
    constants,
    utils,

    wordlists,

    version
};

export const ethers = {
    Wallet,

    HDNode,
    SigningKey,

    Contract,
    Interface,

    providers,

    types,

    errors,
    constants,
    utils,

    wordlists,

    version
}