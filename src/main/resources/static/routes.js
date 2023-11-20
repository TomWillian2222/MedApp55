function controleRotasGet(url){
    switch(url){
        case "/logout":
            gerarSwal(url);
            break;
             case "/edit/usuario":
                                        $.get(url,function(data){
                                            $(".container").html(data);
                                            $("#salvar").click(salvarPerfil);
                                        });
                                        break;

                case "/Usuario/calendario":
                                                      $.get(url,function(data){
                                                          $(".container").html(data);
                                                          $("#next-month").click(dataCalendario);
                                                      });
                                                      break;

        default:
            $.get(url,function(data){
                $(".container").html(data);
            });
    }
}