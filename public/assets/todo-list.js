$(document).ready(function(){

    $('form').on('submit', function(event){
        event.preventDefault();
        var item = $('form input');
        var todo = {item: item.val().trim()};

        $.ajax({
            type: 'post',
            url: '/todo',
            data: todo,
            success: function(data){
                location.reload();
            }
        });
        return false;
    });

    $('li').on('click', function(){
        var item = $(this).text().trim().replace(/ /g, "-");
        $.ajax({
            type: 'DELETE',
            url: '/todo/' + item,
            success: function(data){
                location.reload();
            }
        })
    })
});
