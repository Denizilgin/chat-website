// İstemci tarafında AJAX kullanarak sunucuya yeni mesaj isteği gönderme
function yeniMesajGonder(yazi, sohbet_key, gonderen, alici) {
    $.ajax({
        type: "POST",
        url: "/mesaj-at",
        data: { yazi: yazi, sohbet_key: sohbet_key, gonderen: gonderen, alici: alici },
        success: function(response) {
            // Başarıyla yeni mesaj eklendiğinde, ekrana yeni mesajı ekleyin
            // Örneğin, ekrana yeni mesajı append() metoduyla ekleyebilirsiniz
            $('#mesajlar').append('<div>' + response.yazi + '</div>');
        },
        error: function(error) {
            console.log(error);
        }
    });
}
