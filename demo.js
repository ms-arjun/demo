

const fetchWatches = async()=>{
    let response = await fetch('https://proud-barracuda.cyclic.app/api/watches/all');
    let finalResponse = await response.json();
    console.log(finalResponse)
    return finalResponse;
}

