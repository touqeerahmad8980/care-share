<form id='edit' action="" enctype="multipart/form-data" method="post" accept-charset="utf-8">
    <div id="status"></div>
    {{method_field('PATCH')}}
    <div class="form-group col-md-12 col-sm-12">
        <label for=""> Title </label>
        <input type="text" class="form-control" id="title" name="title" value="{{ $news->title }}"
               placeholder="" required>
        <span id="error_title" class="has-error"></span>
    </div>
    <div class="clearfix"></div>
    <div class="form-group col-md-12 col-sm-12">
        <label for=""> Description </label>
        <textarea type="text" class="form-control" id="description" name="description"
                  placeholder="">{{ $news->description }}</textarea>
        <span id="error_description" class="has-error"></span>
    </div>
    <div class="clearfix"></div>
    <div class="form-group col-md-2 col-sm-12">
        <label for=""> Category </label>
        <select name="category" id="category" class="form-control" required>
            <option value="{{ $news->category }}">{{ $news->category }}</option>
            <option value="all">All</option>
            <option value="cancer">Cancer</option>
        </select>
        <span id="error_category" class="has-error"></span>
    </div>
    <div class="form-group col-md-3">
        <label for=""> Status </label><br/>
        <input type="radio" name="status" class="flat-green"
               value="1" {{ ( $news->status == 1 ) ? 'checked' : '' }} /> Active
        <input type="radio" name="status" class="flat-green"
               value="0" {{ ( $news->status == 0 ) ? 'checked' : '' }}/> In Active
    </div>
    <div class="col-md-7">
        <label for="photo">Upload Image</label>
        <input id="photo" type="file" name="photo" style="display:none">
        <div class="input-group">
            <div class="input-group-btn">
                <a class="btn btn-success" onclick="$('input[id=photo]').click();">Browse</a>
            </div><!-- /btn-group -->
            <input type="text" name="SelectedFileName" class="form-control" id="SelectedFileName"
                   value="{{ $news->file_path  }}" readonly>
        </div>
        <div class="clearfix"></div>
        <p class="help-block">File must be jpg, jpeg, png. Slider width 1920px and heigth 760px and less than 2mb</p>
        <script type="text/javascript">
            $('input[id=photo]').change(function () {
                $('#SelectedFileName').val($(this).val());
            });
        </script>
        <span id="error_photo" class="has-error"></span>
    </div>
    <table class="table table-hover">
        <thead>
          <tr>
            <th>Category Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            @foreach($category as $cat)
                <tr>
                    <td>{{$cat->title}}</td>
                    <td>{{$cat->description}}</td>
                    <td>
                        <a data-toggle='tooltip' class='btn btn-primary btn-xs' href="category/edit/{{$cat->id}}" title='Edit'> <i
                                class='fa fa-pencil-square-o'></i></a>
                        <a data-toggle='tooltip' class='btn btn-danger btn-xs delete cat_delete' id='{{$cat->id}}' title='Delete'> <i
                                class='fa fa-trash'></i></a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    <div class="form-group col-md-12">
        <a href="/admin/category/{{$news->id}}" class="btn btn-success button-submit"
                data-loading-text="Loading..."><span class="fa fa-plus fa-fw"></span> Add Category
        </a>
    </div>
    <div class="clearfix"></div>
    <div class="form-group col-md-12">
        <button type="submit" class="btn btn-success button-submit"
                data-loading-text="Loading..."><span class="fa fa-save fa-fw"></span> Save
        </button>
        <button type="button" class="btn btn-default" data-dismiss="modal"><span
                class="fa fa-times-circle fa-fw"></span> Cancel
        </button>
    </div>
    <div class="clearfix"></div>
</form>

<script>
    $('input[type="radio"].flat-green').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green'
    });
    $(document).ready(function () {

        $('#loader').hide();

        $('#edit').validate({// <- attach '.validate()' to your form
            // Rules for form validation
            rules: {
                title: {
                    required: true
                }
            },
            // Messages for form validation
            messages: {
                name: {
                    required: 'Enter title'
                }
            },
            submitHandler: function (form) {

                var myData = new FormData($("#edit")[0]);
                var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
                myData.append('_token', CSRF_TOKEN);

                $.ajax({
                    url: 'news/' + '{{ $news->id }}',
                    type: 'POST',
                    data: myData,
                    dataType: 'json',
                    cache: false,
                    processData: false,
                    contentType: false,
                    beforeSend: function () {
                        $('#loader').show();
                        $(".button-submit").prop('disabled', false); // disable button
                    },
                    success: function (data) {
                        if (data.type === 'success') {
                            notify_view(data.type, data.message);
                            reload_table();
                            $('#loader').hide();
                            $(".button-submit").prop('disabled', false); // disable button
                            $("html, body").animate({scrollTop: 0}, "slow");
                            $('#myModal').modal('hide'); // hide bootstrap modal

                        } else if (data.type === 'error') {
                            if (data.errors) {
                                $.each(data.errors, function (key, val) {
                                    $('#error_' + key).html(val);
                                });
                            }
                            $("#status").html(data.message);
                            $('#loader').hide();
                            $(".button-submit").prop('disabled', false); // disable button

                        }
                    }
                });
            }
            // <- end 'submitHandler' callback
        });                    // <- end '.validate()'

    });

    $(document).ready(function () {
        $(document).on("click", ".cat_delete", function () {
            var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
            var id = $(this).attr('id');
            setTimeout(() => {
                window.location.reload(true);
            }, 3000);
            swal({
                title: "Are you sure?",
                text: "Deleted data cannot be recovered!!",
                type: "warning",
                showCancelButton: true,
                closeOnConfirm: false,
                showLoaderOnCosnfirm: true,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Delete",
                cancelButtonText: "Cancel"
            }, function () {
                $.ajax({
                    url: 'category/' + id,
                    data: {"_token": CSRF_TOKEN},
                    type: 'DELETE',
                    dataType: 'json',
                    success: function (data) {

                        if (data.type === 'success') {

                            swal("Done!", "Successfully Deleted", "success");
                            reload_table();

                        } else if (data.type === 'danger') {

                            swal("Error deleting!", "Try again", "error");

                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        swal("Error deleting!", "Try again", "error");
                    }
                });
            });
        });
    });

</script>
