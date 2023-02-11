async function GetHello(name) {
    const response = await fetch(`https://allinoneendpoints.azurewebsites.net/minichallenge/sayhello/${name}`);
    const data = await response.text();
    console.log(data);
    return data;
}

async function GetAddTwo(num1, num2) {
    let data = "Please fill out both fields";
    if (num1 && num2) {
        const response = await fetch(`https://allinoneendpoints.azurewebsites.net/minichallenge/addnumbers/${num1}/${num2}`)
        data = response.text();
    }
    return data;
}

async function GetAskQuestions(name, time) {
    let data = "Please fill out both fields";
    if (name && time) {
        const response = await fetch(`https://allinoneendpoints.azurewebsites.net/minichallenge/askquestions/${name}/${time}/`);
        data = response.text();
    }
    return data;
}   

async function GetGreaterThan(num1, num2) {
    let data = "Please fill out both fields";
    if (num1 && num2) {
        const response = await fetch(`https://allinoneendpoints.azurewebsites.net/minichallenge/greaterthan/${num1}/${num2}`)
        data = response.text();
    }
    return data;
}

export { GetHello, GetAddTwo, GetAskQuestions, GetGreaterThan };