@extends('backend.layouts.master')
@section('title', ' All Request')
@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="box box-success">
                <div class="box-header with-border">
                    <p class="panel-title"> All Download Requests</p>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 table-responsive">
                            <table id="manage_all" class="table table-collapse table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone Code</th>
                                    <th>Phone Number</th>
                                    <th>Cancer Type</th>
                                    <th>Cancer Stage</th>
                                    <th>Treatment Received</th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        @media screen and (min-width: 768px) {
            #myModal .modal-dialog {
                width: 70%;
                border-radius: 5px;
            }
        }
    </style>
    <script>
        $(function () {
            table = $('#manage_all').DataTable({
                processing: true,
                serverSide: true,
                ajax: '{!! route('admin.allRequest.requests') !!}',
                columns: [
                    {data: 'rownum', name: 'rownum'},
                    {data: 'name', name: 'name'},
                    {data: 'email', name: 'email'},
                    {data: 'phone_code', name: 'phone_code'},
                    {data: 'phone_no', name: 'phone_no'},
                    {data: 'cancer_type', name: 'cancer_type'},
                    {data: 'cancer_stage', name: 'cancer_stage'},
                    {data: 'treatment_received', name: 'treatment_received'}
                ],
                "columnDefs": [
                    {"className": "text-center", "targets": "_all"}
                ],
                "autoWidth": false,
            });
            $('.dataTables_filter input[type="search"]').attr('placeholder', 'Type here to search...').css({
                'width': '220px',
                'height': '30px'
            });
        });
    </script>

@stop
