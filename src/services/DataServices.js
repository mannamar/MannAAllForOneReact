async function GetHello(name) {
    let data = 'Please enter your name';
    if (name) {
        const response = await fetch(`https://allinoneendpoints.azurewebsites.net/minichallenge/sayhello/${name}`);
        data = await response.text();
    }
    return data;
}

async function GetAddTwo(num1, num2) {
    let data = "Please fill out both fields";
    if (num1 && num2) {
        const response = await fetch(`https://allinoneendpoints.azurewebsites.net/minichallenge/addnumbers/${num1}/${num2}`)
        data = await response.text();
    }
    return data;
}

async function GetAskQuestions(name, time) {
    let data = "Please fill out both fields";
    if (name && time) {
        const response = await fetch(`https://allinoneendpoints.azurewebsites.net/minichallenge/askquestions/${name}/${time}/`);
        data = await response.text();
    }
    return data;
}   

async function GetGreaterThan(num1, num2) {
    let data = "Please fill out both fields";
    if (num1 && num2) {
        const response = await fetch(`https://allinoneendpoints.azurewebsites.net/minichallenge/greaterthan/${num1}/${num2}`)
        data = await response.text();
    }
    return data;
}

async function GetOddOrEven(num) {
    let data = "Please enter a valid number";
    if (num) {
        const response = await fetch(`https://allinoneendpoints.azurewebsites.net/minichallenge/oddoreven/${num}`)
        data = await response.text();
    }
    return data;
}

async function GetReverseIt(words) {
    let data = "Please enter some text";
    if (words) {
        const response = await fetch(`https://allinoneendpoints.azurewebsites.net/minichallenge/reverseit/${words}`)
        data = await response.text();
    }
    return data;
}

async function GetRestaurantPicker(type) {
    const response = await fetch(`https://allinoneendpoints.azurewebsites.net/minichallenge/restaurantpicker/${type}`);
    const data = await response.text();
    return data;
}

async function GetMadLib(input1, input2, input3, input4, input5, input6, input7, input8, input9, input10) {
    let data = 'Please fill out all text fields';
    if (input1 && input2 && input3 && input4 && input5 && input6 && input7 && input8 && input9 && input10) {
        const response = await fetch(`https://allinoneendpoints.azurewebsites.net/minichallenge/madlib/${input1}/${input2}/${input3}/${input4}/${input5}/${input6}/${input7}/${input8}/${input9}/${input10}`);
        data = await response.text();
    }
    return data;
}

async function GetDirectory(type, input) {

    if (!input) {
        input = 'notapplicable'
    }
    const response = await fetch(`https://allinoneendpoints.azurewebsites.net/studentdirectory/${type}/${input}`);
    const data = await response.json();
    return data;
}

export { GetHello, GetAddTwo, GetAskQuestions, GetGreaterThan, GetOddOrEven, GetReverseIt, GetRestaurantPicker, GetMadLib, GetDirectory };