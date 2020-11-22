import { EMPTY_BYTES32, BIGINT_ZERO } from './constants'
import { get } from 'svelte/store'
import { user } from '../stores/main'
import {
	getAddress,
	encodeMethodSignature, 
	encodeBytes32, 
	encodeAddress, 
	encodeUint
} from './utils'

import ethSend from './ethSend'

export default async function submitOrderUpdate(params) {

	let {
		margin,
		isBuy,
		positionId
	} = params;

	return ethSend({
		address: getAddress('TRADING'),
		gas: '0x249f0', // 150K
		method: 'submitOrderUpdate(uint256,bool,uint256)',
		data: encodeUint(positionId) + 
			encodeUint(isBuy ? 1 : 0) +
			encodeUint(margin)
	});

}