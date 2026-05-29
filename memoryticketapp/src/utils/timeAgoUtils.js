export default function timeAgoUtils(stubData){
    let now = new Date();
    let post_time = stubData.time;
    let seconds = Math.floor((now - post_time) / 1000)
    if(seconds < 60) return "Just now";
    else if(seconds < 3600) return `${Math.floor(seconds/60)}m ago`;
    else if(seconds < 84600) return `${Math.floor(seconds/3600)}h ago`;
    else if(seconds < 604800) return `${Math.floor(seconds/84600)}d ago`;
    else if(seconds < 2419200) return `${Math.floor(seconds/604800)}w ago`;
    else if(seconds < 31557600) return `${Math.floor(seconds/2419200)}m ago`;
}