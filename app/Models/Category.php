<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
   protected $fillable = ['title', 'description', 'content', 'status', 'news_id'];

   public function news()
   {
      return $this->belongsTo(News::class, 'news_id');
   }
}
