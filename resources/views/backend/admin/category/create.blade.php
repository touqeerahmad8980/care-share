@extends('backend.layouts.master')
@section('title', ' Create Category')
@section('content')
    <form id='create' action="" enctype="multipart/form-data" method="post" accept-charset="utf-8">
        <div id="status"></div>
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
            <textarea name="editor1"></textarea>
            <span id="error_description" class="has-error"></span>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-md-12">
            <button type="submit" class="btn btn-success button-submit"
                    data-loading-text="Loading..."><span class="fa fa-save fa-fw"></span> Save
            </button>
            <a href="/admin/news" class="btn btn-default" data-dismiss="modal"><span
                    class="fa fa-times-circle fa-fw"></span> Cancel
            </a>
        </div>
        <div class="clearfix"></div>
    </form>
    <script src="https://cdn.ckeditor.com/4.17.1/standard/ckeditor.js"></script>
    <script>
        CKEDITOR.replace( 'editor1' );
    </script>
@stop


