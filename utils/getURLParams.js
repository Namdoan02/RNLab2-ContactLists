export default url =>{
    const paramString = url.include('?') ? url.split('?')[1].split('&'): [];
    const params ={};
    paramString.forEach(params =>{
        const paramSplit = param.split('=');
        params[paramSplit[0]]=paramSplit[1];
    });
    return params;
};