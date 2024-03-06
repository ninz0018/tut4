$(document).on('submit','#name',function(e){
    e.preventDefault();
    fn = $("#fnames").val();
    ln = $("#snames").val();
    ed = $("#edad").val();

    edad = parseInt(ed);

    $("#resF").val(fn);
    $("#resL").val(ln);
    $("#redA").val(edad);

    n = fn[0];
    n = n.toUpperCase();
    fn = n + fn.slice(1);

    l = ln[0];
    l = l.toUpperCase();
    ln = l + ln.slice(1);

    if (edad >= 18){
        $("#info").html(`<div>
        <div class="fs-3 fw-bold">Firstname: ${fn}</div>
        <div class="fs-3 fw-bold">Lastname: ${ln}</div> 
        <div class="fs-3 fw-bold">Age: ${edad}</div>
        </div>`);   
    }else if(edad <=0){
        alert("Invalid Age");
    }else {
        alert("Minor Age");
    }

})
$(document).on('click','#clr',function(e){
    e.preventDefault();
    $("#fnames").val("");
    $("#snames").val("");
    $("#edad").val("");
})
$(document).on('click','#clrdt',function(e){
    e.preventDefault();
    $("#info").html("");

})