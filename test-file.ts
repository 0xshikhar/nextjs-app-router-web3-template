"use client";
// import { getProjectByUser, getUserProfile } from '@/lib/contract'
// import ProfilePage from '@/components/ProfilePage'
// import { UserProfile, ChainIdType } from '@/common.types';
import { useProvider, useAccount } from 'wagmi';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import MaskProfile from '@/components/MaskProfile'

// type Props = {
//     params: {
//         id: string,
//     },
// }

const MaskProfile = ({ profile }) => {
    console.log("profile", profile)
    return (

        <div className="bg-white shadow-lg p-4 mb-4 rounded-lg flex items-center">
            <Image src={profile.avatar} alt="Avatar" className="w-20 h-20 rounded-full mr-4" />
            <div>
                <h2 className="text-xl font-semibold mb-2">{profile.identity}</h2>
                <p>Display Name: {profile.displayName}</p>
                <p>Platform: {profile.platform}</p>
                {/* Display other profile information as needed */}
            </div>
        </div>
    );
};

const UserProfilePage = ({ params }) => {
    const provider = useProvider();
    const { address, isConnected } = useAccount()
    // const [user, setUser] = useState()
    // const [userProfile, setUserProfile] = useState()
    // console.log("user", user, "params", params)
    // console.log("userProfile", user?.[0].imageUrl)

    const [identity, setIdentity] = useState('');
    const [profiles, setProfiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            if (isConnected) {
                setIdentity(address);
                try {
                    // Make an API request to fetch user profiles based on the entered identity.
                    // You can use libraries like axios for this.
                    // Replace 'your_api_endpoint' with the actual API endpoint.
                    const response = await fetch(`https://api.web3.bio/profile/${address}`);
                    const data = await response.json();
                    setProfiles(data);
                } catch (error) {
                    console.error('Error fetching profiles:', error);
                } finally {
                    setIsLoading(false);
                }
            }
        }

        fetchData();
    }, []);

    async function fetchData() {
        try {
            // Make an API request to fetch user profiles based on the entered identity.
            // You can use libraries like axios for this.
            // Replace 'your_api_endpoint' with the actual API endpoint.
            const response = await fetch(`https://api.web3.bio/profile/${address}`);
            const data = await response.json();
            setProfiles(data);
        } catch (error) {
            console.error('Error fetching profiles:', error);
        } finally {
            setIsLoading(false);
        }
    }

    // useEffect(() => {
    //     async function check = () => {
    //         if (isConnected) {
    //             fetchData();
    //         }
    //     }
    // }, [])





    // useEffect(() => {
    //     async function fetchData() {
    //         const result = await getProjectByUser(params.id, provider._network.chainId as ChainIdType)
    //         const data = await getUserProfile(params.id, provider._network.chainId as ChainIdType)
    //         console.log("result", result)
    //         console.log("data", data)
    //         setUser(result)
    //         setUserProfile(data)
    //     }
    //     fetchData()
    // }, [provider._network.chainId, params.id])

    // if (isConnected) return (
    //     <p className="no-result-text">Fetching User info from the blockchain : {address}</p>
    // )

    return (
        <div className="bg-black shadow-lg p-4 mb-4 rounded-lg flex items-center min-h-screen">
            {isLoading && <p className="mt-4 align-middle text-center justify-center">Loading profiles...</p>}

            {profiles.map((profile, index) => ( 
                < key={index} profile={profile} />
            ))}
        </div>
    )
}


export default UserProfilePage
