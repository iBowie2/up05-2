var numberbox = document.getElementById('numberbox');
var total = document.getElementById('total');
var singleBuyCost = document.getElementById('singleBuyCost');
var regularBuyCost = document.getElementById('regularBuyCost');

var costPerKg = 250;
var discountRegular = -100;
var deliveryCost = 250;

function addAmount(amount)
{
    numberbox.value = Math.max(1, Number(numberbox.value) + amount);
    recalculate();
    return false;
}

function recalculate()
{
    var selectedVolume = document.querySelector('input[name="volume"]:checked').value;
    var selectedSubType = document.querySelector('input[name="subtype"]:checked').value;
    var count = Number(numberbox.value);

    singleBuyCost.innerHTML = (costPerKg * selectedVolume * count + deliveryCost) + " ₽";
    regularBuyCost.innerHTML = (costPerKg * selectedVolume * count + discountRegular) + " ₽";

    if (selectedSubType == 'once')
    {
        total.innerHTML = singleBuyCost.innerHTML;
    }
    else
    {
        total.innerHTML = regularBuyCost.innerHTML;
    }

    return false;
}

recalculate();