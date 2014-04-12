$(function () {
    function addResponsiveTable() {
        var oldTable = $('#pricings'),
            newTable,
            numOfTables = oldTable.find('th').length,
            numOfRows = $('#pricings').find('tr').length,
            i, j;

        for (i = 0; i < numOfTables; i++) {
            // create a new table
            newTable = $('<table></table>', {
                    class: 'smallTable',
                });

            // assign thead & tbody
            newTable.append($('<thead></thead>'))
                    .append($('<tbody></tbody>'));

            // create tr in thead
            var thead = newTable.find('thead');
            thead.append($('<tr></tr>'));

            // add th from oldTable
            oldTable.find('th').eq(i)
                    .clone()
                    .appendTo(thead.find('tr'));

            //create tr's in tbody and add td's from oldTable
            var newTbody = newTable.find('tbody');

            for (j = 0; j < numOfRows - 1; j++) {
                // creates new table row
                newTbody.append($('<tr></tr>'));

                // gets td & clones it to new table
                oldTable.find('tbody').find('tr').eq(j).find('td').eq(i)
                    .clone()
                    .appendTo(newTbody.find('tr').eq(j));
            }
            newTable.insertBefore(oldTable);
        }

        $('#pricings').addClass('hidden')
    }

    function removeResponsiveTable() {
        $('.smallTable').remove();
        $('#pricings').removeClass('hidden');
    }


    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 768 - 17) {
            if ($('.smallTable').length) return;
            addResponsiveTable();
        }
        else {
            removeResponsiveTable();
        }
    }

    // Execute on load
    checkWidth();

    // Bind event listener
    $(window).on('resize', checkWidth);
});