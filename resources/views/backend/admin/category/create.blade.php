@extends('backend.layouts.master')
@section('title', ' Create Category')
@section('content')
    <style>
        .ck-editor__editable{
            min-height: 200px;
        }
    </style>
    <form id='create' action="" enctype="multipart/form-data" method="post" accept-charset="utf-8">
        <div id="status"></div>
        <input id="news_id" type="hidden" name="news_id" value="{{$news_id}}" />
        <div class="form-group col-md-12 col-sm-12">
            <label for=""> Title </label>
            <input type="text" class="form-control" id="title" name="title" value=""
                placeholder="" required>
            <span id="error_title" class="has-error"></span>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-md-12 col-sm-12">
            <label for=""> Description </label>
            <textarea type="text" class="form-control" id="description" name="description" value=""
                    placeholder=""></textarea>
            <span id="error_description" class="has-error"></span>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-md-12 col-sm-12">
            <label for=""> Content </label>
            <div id="toolbar-container"></div>
            <div name="content" id="content" style="background-color:#fff;">
                <p>This is the initial editor content.</p>
            </div>
            {{-- <textarea name="content" id="content" ></textarea> --}}
            <span id="error_content" class="has-error"></span>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-md-12">
            <button id="createSubmitForm" type="submit" class="btn btn-success button-submit"
                    data-loading-text="Loading..."><span class="fa fa-save fa-fw"></span> Save
            </button>
            <a href="/admin/news" class="btn btn-default" data-dismiss="modal"><span
                    class="fa fa-times-circle fa-fw"></span> Cancel
            </a>
        </div>
        <div class="clearfix"></div>
    </form>
    <script src="https://cdn.ckeditor.com/ckeditor5/31.1.0/decoupled-document/ckeditor.js"></script>
    <script>

        let myeditor;
        DecoupledEditor
        .create( document.querySelector( '#content' ), {
                ckfinder: {
                    uploadUrl: '{{route('ckeditor.upload').'?_token='.csrf_token()}}'
                },
                toolbar: [
                    'heading', '|',
                    'fontfamily', 'fontsize', '|',
                    'alignment', '|',
                    'fontColor', 'fontBackgroundColor', '|',
                    'bold', 'italic', "strikethrough", 'underline', 'subscript', 'superscript', '|',
                    'link', '|',
                    'outdent', 'indent', '|',
                    'bulletedList', 'numberedList', 'todoList', '|',
                    'code', 'codeBlock', '|',
                    'insertTable', '|',
                    'uploadImage', 'mediaEmbed', 'blockQuote', '|',
                    'undo', 'redo'
                ],
                mediaEmbed: {previewsInData: true}
            } )
            .then( editor => {
                    const toolbarContainer = document.querySelector( '#toolbar-container' );
                    toolbarContainer.appendChild( editor.ui.view.toolbar.element );
                    myeditor = editor;
                } )
            .catch( error => {
                console.log( error );
            } );

        $(document).ready(function () {

            $('#create').validate({// <- attach '.validate()' to your form
                // Rules for form validation
                rules: {
                    title: {
                        required: true
                    },
                    // description: {
                    //     required: true
                    // }
                },
                // Messages for form validation
                // messages: {
                //     name: {
                //         required: 'Enter slider name'
                //     }
                // },
                submitHandler: function (form) {
                    var myData = new FormData($("#create")[0]);
                    var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
                    var news_id = $("#news_id").val();
                    myData.append('_token', CSRF_TOKEN);
                    myData.append('content', myeditor.getData());
                    console.log("myData", myData)
                    $.ajax({
                        url: this.news_id,
                        type: 'POST',
                        data: myData,
                        dataType: 'json',
                        cache: false,
                        processData: false,
                        contentType: false,
                        // beforeSend: function () {
                        //     $('#loader').show();
                        //     $(".button-submit").prop('disabled', false); // disable button
                        // },
                        success: function (data) {
                            console.log(data)
                            notify_view("success", data.message);
                            setTimeout(() => {
                                window.location.href = "/admin/news";
                            }, 1500);
                            // if (data.type === 'success') {
                            //     notify_view(data.type, data.message);
                            //     reload_table();
                            //     $('#loader').hide();
                            //     $(".button-submit").prop('disabled', false); // disable button
                            //     $("html, body").animate({scrollTop: 0}, "slow");
                            //     $('#myModal').modal('hide'); // hide bootstrap modal

                            // } else if (data.type === 'error') {
                            //     if (data.errors) {
                            //         $.each(data.errors, function (key, val) {
                            //             $('#error_' + key).html(val);
                            //         });
                            //     }
                            //     $("#status").html(data.message);
                            //     $('#loader').hide();
                            //     $(".button-submit").prop('disabled', false); // disable button

                            // }
                        }
                    });
                }
                // <- end 'submitHandler' callback
            });                    // <- end '.validate()'

        });
    </script>
@stop


