var app = {
    bindPaginate: function () {
        $(document).on("click", "[data-page-btn]", function (e) {
            e.preventDefault();
            let url = $(this).data("pageBtn").split("?");
            let type = $(this).data("type") || "append";
            let block = $(document).find("[data-more-content]");
            let btn = $(this);
            $.ajax({
                url: url[0],
                data: url[1],
                type: "get",
                beforeSend: function () {
                    block.css({'opacity': '0.5'});
                    btn.css({'opacity': '0.5'});
                    btn.prop('disabled', true);
                },
                success: function (msg) {
                    block.css({'opacity': '1'});
                    btn.css({'opacity': '1'});
                    btn.prop('disabled', false);
                    /*console.log(msg);*/
                    let html = $(msg).find("[data-more-content]").html() || '';
                    let new_btn = $(msg).find("[data-page-btn]");
                    if (type == 'append') {
                        block.append(html);
                    } else {
                        block.html(html);
                    }
                    if (new_btn.length < 1) {
                        btn.hide();
                        btn.parent("div").hide();
                    } else {
                        btn.data("pageBtn", new_btn.data("pageBtn"));
                        btn.show();
                    }
                }
            })
        })
    },
    bindObjectsFilter: function(){
        let pageBtn = $(document).find("[data-objects-page]");
        if(pageBtn.length < 1) return;

        $(document).on("change", "[data-filter] select", function(e){
            e.preventDefault();
            pageBtn = $(document).find("[data-objects-page]");
            pageBtn.data("objectsPage", 1);
            pageBtn.data("paginateType", "replace");
            pageBtn.trigger("click");
        });

        $(document).on("click", "[data-search-btn]", function(e){
            e.preventDefault();
            if($(this).parents(".search-button-cont").find(".search-button__ico_toggle").hasClass('active')) {
                pageBtn = $(document).find("[data-objects-page]");
                pageBtn.data("objectsPage", 1);
                pageBtn.data("paginateType", "replace");
                pageBtn.trigger("click");
            }
        })
    },
    bindObjectsClickPages: function(){

        let pageBtn = $(document).find("[data-objects-page]");
        if(pageBtn.length < 1) return;

        const countBlock = $(document).find("[data-objects-count]");
        const listingBlock = $(document).find("[data-objects-list]");
        const emptyBlock = $(document).find("[data-objects-empty]");
        const pagesBlock = $(document).find("[data-objects-pages]");
        let type = "append";

        $(document).on("click", "[data-objects-page]", function(e){
            e.preventDefault();
            let btn = $(this);
            const data = 'page=' + btn.data("objectsPage") +
                '&isRestored=' + $(document).find("[data-filter] select[name='isRestored']").val() +
                '&district=' + $(document).find("[data-filter] select[name='district']").val() +
                '&search=' + $(document).find("[data-filter] input[name='query']").val();
            $.ajax({
                url: document.location,
                data: data,
                type: 'get',
                cache: false,
                beforeSend: function () {

                },
                success: function (msg) {
                    type = $(document).find("[data-objects-page]").data("paginateType") || "append";
                    countBlock.html($(msg).find("[data-objects-count]").html());
                    if(type == 'append') {
                        listingBlock.append($(msg).find("[data-objects-list]").html());
                    } else {
                        listingBlock.html($(msg).find("[data-objects-list]").html());
                    }
                    emptyBlock.html($(msg).find("[data-objects-empty]").html());
                    pagesBlock.html($(msg).find("[data-objects-pages]").html());
                    pageBtn.data("paginateType", "append");
                }
            });
        })
    },
    init: function(){
        this.bindPaginate();
        this.bindObjectsClickPages();
        this.bindObjectsFilter();
    }
};

$(document).ready(function(){
    app.init();

    $(document).on("evocms-user-send-form-success", function(e, actionUser, actionId, element, msg){
        formSuccess(element[0]);
    })

    $(document).on("evocms-user-send-form-error", function(e, actionUser, actionId, element, msg){
        if(typeof msg.errors.fail != "undefined" && msg.errors.fail.length > 0) {
            openModal(errorModal);
        }
        let errors = msg.errors.customErrors || {};
        for(k in errors) {
            element.find("[name='" + k + "']").addClass("error");
        }

    })

    $(document).on("keyup change", "input.error, textarea.error", function(){
        $(this).removeClass('error');
    })

})
