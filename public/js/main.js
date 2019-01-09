$(document).ready(function(){
    $('.removeBook').click(function(e){
        deleteID = $(this).data('id');
        $.ajax({
            url:'/manage/books/delete/'+deleteID,
            type: 'DELETE',
            success: function(){
            }
        });
        window.location = '/manage/books';
    });
}); 
