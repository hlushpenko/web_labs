$("document").ready(function () {
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

    var rowText;
    var content = $('#groups');
    for (var row of groups) {
        rowText =
            `<tr>
            <td>${row.number}</td>
            <td class="text-right">
            <a class="btn btn-outline-secondary" href="group.html?number=${row.number}">
            <i class="fa fa-fw fa-edit"></i>
            </a>
            <button type = "button" class="btn btn-outline-danger rem-row" rowid="${row.number}">
            <i class="fa fa-fw fa-trash"></i>
            </button>
            </td>  
            </tr>`;
        content.append(rowText);
    }
})
