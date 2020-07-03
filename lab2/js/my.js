$("document").ready(function () {
    var rowText;
    var content = $('#groups');
    for (var row of groups) {
        rowText =
            `<tr>
                <td>${row.number}</td>
                <td>  ${row.faculty}</td>
                <td class="right-align">
                    <a class="btn floating waves-effect waves-light blue" style="margin-right: 10px" href="group.html?number=${row.number}">
                        <i class="material-icons fa fa-fw fa-edit"></i>
                    </a>
                    <button type = "button" class="rem-row btn floating waves-effect waves-light red" rowid="${row.number}">
                        <i class="material-icons fa fa-fw fa-trash"></i>
                    </button>
                </td>  
            </tr>`;
        content.append(rowText);
    }
    $('.rem-row').click(function () {
        let number = $(this).attr('rowid');
        saveGroups(groups.filter((g)=>g.number !== number));
        location.reload();
    });




    $('#click-me').click(function () {
        var html = `<div class="text-left alert alert-success" role="alert">
          <h4 class="alert-heading"> Привіт!
      <button type="button" class="close" data-dismiss="alert" aria-label="close">
          <span aria-hidden="true"> &times; </span>
      </button>
      </h4>
      <p>Вітаємо з підключенням Twitter BootStrap</p>
      <hr>
      <p>Можна приступати до роботи</p>
      </div>`;
        $('#alert').html(html);
    });
});
