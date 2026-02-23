function cs50Info(name)
{
    // Deal with the situation when nothing is chosen
    if (name == "")
        return;

    // Create a new AJAX object
    var ajax = new XMLHttpRequest();

    // When the page is loaded, have a callback function pre-fill our div
    ajax.onreadystatechange = function()
        {
            if (ajax.readyState == 4 && ajax.status == 200)
                $('#infodiv').html(ajax.responseText);
        };

    // Open the requested file and transmit the data
    ajax.open('GET', name + '.html', true);
    ajax.send();
};
