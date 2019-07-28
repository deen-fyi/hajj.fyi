function toggleIcon(e) {
    $(e.target)
    	.prev(".faqHeader")
        .find(".openerThing")
        .toggleClass('fa-plus fa-minus');
}

$('.collapse').on('hidden.bs.collapse', toggleIcon);
$('.collapse').on('shown.bs.collapse', toggleIcon);