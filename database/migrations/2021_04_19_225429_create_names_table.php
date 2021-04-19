<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNamesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('names', function (Blueprint $table) {
      $table->id();
      $table->foreignId('user_id')->constrained();
      $table->string("title")->nullable();
      $table->string("first_name");
      $table->string("middle_name")->nullable();
      $table->string("last_name");
      $table->string("nickname")->nullable();
      $table->string("maiden_name")->nullable();
      $table->string("hebrew_name")->nullable();
      $table->string("mother_hebrew_name")->nullable();
      $table->string("father_hebrew_name")->nullable();
      $table->timestamps();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('users_names');
  }
}
