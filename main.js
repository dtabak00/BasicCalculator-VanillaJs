var operationCounter = 0, equalsCounter = 0;
var a = "", b = "", result = 0.0, operation = "";
var mainScreen = document.getElementById('mainScreen');
var operationScreen = document.getElementById('operationScreen');

function GetButtonValue(entry)
{
    if(operationCounter == 0 && entry != "=" && entry != "C" && !(entry == "+" || entry == "-" || entry == "*" || entry == "/" || entry == "%"))
    {
        if(equalsCounter != 0)
        {
            a = entry;
            mainScreen.innerText = a;
            equalsCounter = 0;
        }
        else
        {
            a += entry;
            mainScreen.innerText = a;
        }
    }
    else if(operationCounter != 0 && entry != "=" && entry != "C" && !(entry == "+" || entry == "-" || entry == "*" || entry == "/" || entry == "%"))
    {
        b += entry;
        mainScreen.innerText = b;
    }

    if(entry == "+" || entry == "-" || entry == "*" || entry == "/" || entry == "%")
    {
        if(operationCounter == 1)
        {
            SelectOperation(parseFloat(a), parseFloat(b));
            a = result.toString();
            b = "";
        }

        if(operationCounter > 1)
        {
            if(b != "")
            {
                SelectOperation(parseFloat(a), parseFloat(b));
                a = result.toString();
                b = "";
            }
        }

        operation = entry;
        operationScreen.innerText = operation;
        operationCounter++;
    }

    if(entry === "C")
    {
        a = "";
        b = "";
        operation = "";
        result = 0.0;
        operationCounter = 0;
        mainScreen.innerText = "0";
        operationScreen.innerText = "";
    }

    if(entry == "=" && a != "" && b != "")
    {
        equalsCounter++;
        SelectOperation(parseFloat(a), parseFloat(b));
        operationScreen.innerText = "";
        a = result.toString();
        b = "";
        operationCounter = 0;
    }
}

function SelectOperation(x, y)
{
    if(operation == '+')
    {
        result = Add(x, y);
    }
    else if(operation == '-')
    {
        result = Subtract(x, y);
    }
    else if(operation == '*')
    {
        result = Multiply(x, y);
    }
    else if(operation == '/')
    {
        result = Divide(x, y);
    }
    else if(operation == '%')
    {
        result = Percentage(x, y);
    }
    mainScreen.innerText = result.toString();
}

function Divide(p, q)
{
    if(q === 0)
    {
        return Infinity;
    }
    else
    {
        return (p / q);
    }
}

function Multiply(p, q)
{
    return (p * q);
}

function Subtract(p, q)
{
    return (p - q);
}

function Add(p, q)
{
    return (p + q);
}

function Percentage(p, q)
{
    return (q * p / 100);
}

$("#appearanceButton").click(function()
{
    if(document.getElementById("appearanceButton").innerHTML === "Light")
    {
        $("body").css("background", "white");
        $("#calculatorContainer").css("background", "white");
        $("#mainScreen").css("color", "black");
        $("#operationScreen").css("color", "black");

        document.getElementById("appearanceButton").innerHTML = "Dark";
        $("appearanceButton").css("background", "rgb(88, 87, 88)");
        $("appearanceButton").css("color", "rgb(0, 0, 0)");
    }
    else if(document.getElementById("appearanceButton").innerHTML === "Dark")
    {
        $("body").css("background", "rgb(88, 87, 88)");
        $("#calculatorContainer").css("background", "rgb(88, 87, 88)");
        $("#mainScreen").css("color", "rgb(180, 179, 179)");
        $("#operationScreen").css("color", "rgb(180, 179, 179)");

        document.getElementById("appearanceButton").innerHTML = "Light";
        $("appearanceButton").css("background", "rgb(88, 87, 88)");
        $("appearanceButton").css("color", "rgb(180, 179, 179)");
    }
    

});