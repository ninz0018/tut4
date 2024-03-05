$(document).on('submit','#name',function(e){
    e.preventDefault();
    fn = $("#fnames").val();
    ln = $("#snames").val();
    ed = $("#edad").val();

    edad = parseInt(ed);

    $("#resF").val(fn);
    $("#resL").val(ln);
    $("#redA").val(edad);

    $("#info").html(`<div class="mb-5">
                        <div class="fs-3 fw-bold">Firstname: ${fn}</div>
                        <div class="fs-3 fw-bold">Lastname: ${ln}</div> 
                        <div class="fs-3 fw-bold">Age: ${edad}</div>
                     </div>`);   

})
$(document).on('click','#clr',function(e){
    e.preventDefault();
    $("#fnames").val("");
    $("#snames").val("");
    $("#edad").val("");
})