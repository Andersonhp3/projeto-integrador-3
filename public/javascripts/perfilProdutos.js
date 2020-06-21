let numberOfItems = $('#t-produtos .table-items').length;
let limitPerPage = 10;
let totalPages = Math.ceil(numberOfItems / limitPerPage);


$("#t-produtos .table-items").slice(limitPerPage).hide();
$(".pagination").append("<li class='page-item current-page active'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>");

for (let i = 2; i <= totalPages; i++) {
    $(".pagination").append("<li class='page-item current-page'><a class='page-link' href='javascript:void(0)'>" + i + "</a></li>");
}

$(".pagination").append("<li id='next-page' class='page-item'><a class='page-link' href='javascript:void(0)' aria-label='Next'><span aria-hidden='true'>&raquo;</span><span class='sr-only'>Next</span></a></li>");



$(".pagination li.current-page").on("click", function () {
    if ($(this).hasClass("active")) {
        return false
    } else {
        let currentPage = $(this).index();
        $(".pagination li").removeClass("active");
        $(this).addClass("active");
        $("#t-produtos .table-items").hide();

        hidePagination();

        let grandTotal = limitPerPage * currentPage;

        for (let i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#t-produtos .table-items:eq(" + i + ")").show();
        };
    };
});


hidePagination();


$("#next-page").on("click", function () {
    let currentPage = $(".pagination li.active").index();
    
    if (currentPage === totalPages) {
        return false;
    } else {
        currentPage++;
        $(".pagination li").removeClass("active");
        $("#t-produtos .table-items").hide();
        let grandTotal = limitPerPage * currentPage;
        for (let i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#t-produtos .table-items:eq(" + i + ")").show();
        }
        $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
        hidePagination();
    };
});

$("#previous-page").on("click", function () {
    let currentPage = $(".pagination li.active").index();
    $(".pagination li.current-page").slice((currentPage - 2), (currentPage + 2) ).show();
    
    if (currentPage === 1) {
        return false;
    } else {
        currentPage--;
        $(".pagination li").removeClass("active");
        $("#t-produtos .table-items").hide();
        let grandTotal = limitPerPage * currentPage;
        for (let i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#t-produtos .table-items:eq(" + i + ")").show();
        }
        $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
        hidePagination();
    };
});


function hidePagination() {
    let currentPage = $(".pagination li.active").index();
    let minLength = currentPage - 2;
    let maxLength = currentPage + 1;
    if(currentPage == 1){
        minLength = 0;
        maxLength = currentPage + 3;
    }
    if(currentPage == 2){
        minLength = 1;
        maxLength = currentPage + 2;
    }
    if(currentPage == ($(".pagination li.current-page").length)){
        minLength = currentPage - 4;
        maxLength = currentPage + 0;
    }
    if(currentPage == ($(".pagination li.current-page").length - 1)){
        minLength = currentPage - 3;
        maxLength = currentPage + 1;
    }

    $(".pagination li.current-page").hide()
    $(".pagination li.current-page").eq(0).show();
    $(".pagination li.current-page").eq(($(".pagination li.current-page").length - 1)).show();
    $(".pagination li.current-page").slice(minLength, maxLength).show();
}