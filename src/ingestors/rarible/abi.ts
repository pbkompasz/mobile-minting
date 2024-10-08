export const RARIBLE_ABI = [
    {
        inputs:[],
        name:"claimCondition",
        outputs: [
            {
                internalType: "uint256",
                name: "currentStartId",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "count",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type:"function"
        },
    {
        inputs: [
            {
                internalType:"uint256",
                name:"_conditionId",
                type:"uint256"
            }
        ],
        name: "getClaimConditionById",
        outputs: [
            {
                components:[
                    {
                        internalType: "uint256",
                        name: "startTimestamp",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256", 
                        name: "maxClaimableSupply", 
                        type: "uint256"
                    },
                    {
                        internalType: "uint256", 
                        name: "supplyClaimed",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "quantityLimitPerWallet",
                        type: "uint256"
                    },
                    {
                        internalType:"bytes32",
                        name: "merkleRoot",
                        type: "bytes32"
                    },
                    { 
                        internalType: "uint256",
                        name: "pricePerToken",
                        type: "uint256"
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address"
                    },
                    { 
                        internalType: "string",
                        name: "metadata",
                        type: "string"
                    }
                ],
                internalType: "struct IClaimCondition.ClaimCondition",
                name: "condition",
                type:"tuple"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "contractURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs:[],
        name: "getActiveClaimConditionId",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_receiver",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_quantity",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "_currency",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_pricePerToken",
                type: "uint256"
            },
            {
                components: [
                    { 
                        internalType: "bytes32[]",
                        name: "proof",
                        type: "bytes32[]"
                    },
                    {   internalType: "uint256",
                        name: "quantityLimitPerWallet",
                        type: "uint256"
                    },
                    {   internalType: "uint256",
                        name: "pricePerToken",
                        type: "uint256"
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address"
                    }
                ],
                internalType: "struct IDrop.AllowlistProof",
                name: "_allowlistProof",
                type: "tuple"
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            }
        ],
        name: "claim",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    }
]

