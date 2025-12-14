function Calculate(){

    const price = GetValue("price");
    const qty = GetValue("qty");
    const prots = GetValue("prots");
    const serving = GetValue("serving");
    const lbs_to_g = 453.59237
    const oz_to_g = 28.3495231

    const units = document.getElementById("units").value;

    let serving_gramms;
    switch(units){
        case "lbs":
            serving_gramms = serving*lbs_to_g;
        case "oz":
            serving_gramms = serving*oz_to_g;
        case "kg":
            serving_gramms = serving*1000;
        case "g":
            serving_gramms = serving;
    }
    const prots_tot = (prots/serving) * qty

    const Prix100g = (price/prots_tot) * 100

    document.getElementById('result').innerText = Prix100g + " $/100 g de prots";

    
}

function GetValue(ElementID){
    return parseFloat(document.getElementById(ElementID).value);
}
