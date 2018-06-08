class Ball{
    runsScored:number;
    isOut:boolean;
    isExtra:boolean;
    extraType:string;
    extraInfo:{ 
        runsOffered:number;
    }
    dismissalType: string;
    dismissalInfo: {
        fielderName: string;
        hasBatsmanCrossed: boolean;
        batsmanOut: string;
    };
    batsmanName: string;
    bowlerName: string;
    
}
