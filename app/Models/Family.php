<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Family extends Model
{
  protected $fillable = [
    'relatives->gender', 'relatives->relation', 'relatives->age', 'relatives->name'
  ];
}
