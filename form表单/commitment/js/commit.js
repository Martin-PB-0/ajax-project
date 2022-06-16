$(function() {
    function getCmtList() {
        $.ajax({
            type: 'GET',
            url: 'http://www.liulongbin.top:3006/api/cmtlist',
            success: function(res) {
                if (res.status !== 200) return alert(res.msg)
                $('#cmtlist').empty();
                $.each(res.data, function(i, item) {
                    $('#cmtlist').append('<li class="list-group-item">' + item.content + '<span class="badge">评论时间：' + item.time + '</span> <span class="badge">评论人：' + item.username + '</span></li>')
                })
            }
        })
    }
    getCmtList();

    $('#btnCmt').on('click', function(e) {
        e.preventDefault();
        let data = $('#formAddCmt').serialize();
        $.ajax({
            type: 'POST',
            url: 'http://www.liulongbin.top:3006/api/addcmt',
            data: data,
            success: function(res) {
                if (res.status !== 201) return alert(res.meg)
                getCmtList();
                $('#formAddCmt')[0].reset();
            }
        })
    })
})