<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateYahrzeitsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('yahrzeits', function (Blueprint $table) {
      $table->id();
      $table->foreignId('user_id')->constrained();
      $table->string("relation_to_user")->nullable();
      $table->string("hebrew_deceased_name")->nullable();
      $table->string("father_Deceased_hebrew_name")->nullable();
      $table->date("hebrew_date")->nullable();
      $table->enum("gender", ["Male", "Female"])->nullable();
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
    Schema::dropIfExists('yahrzeits');
  }
}
