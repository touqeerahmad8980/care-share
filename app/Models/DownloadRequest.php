<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DownloadRequest extends Model
{
   protected $fillable = ['name', 'email', 'phone_code', 'phone_no', 'cancer_type', 'cancer_stage', 'treatment_received'];

}
