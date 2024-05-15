import { ethers } from 'ethers';
import ContractJson from '@/lib/contracts/contract.json';
import { Contract } from '@/lib/constant'

export const getIDByAddress = async (address: string) => {
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(Contract, ContractJson.abi, signer);

        const nft = await contract.getTokenIdByAddress(address);
        console.log("getNFTByAddress result:", nft);
        return nft;
    } catch (error) {
        console.error("getNFTByAddress error", error);
    }
}
