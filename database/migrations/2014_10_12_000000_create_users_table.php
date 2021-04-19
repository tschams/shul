<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('users', function (Blueprint $table) {
      $table->id();
      $table->string('name');
      $table->string('title')->nullable();
      $table->string('hebrew_name')->nullable();
      $table->string('mother_hebrew_name')->nullable();
      $table->string('father_hebrew_name')->nullable();
      $table->enum('tribe', ['Cohen', 'Levi', 'Yisroel'])->nullable();
      $table->enum('gender', ['Male', 'Female'])->nullable();
      $table->string('phone_number')->nullable();
      $table->string('email')->unique();
      $table->timestamp('email_verified_at')->nullable();
      $table->string('password');
      $table->rememberToken();
      $table->date('date_of_birth')->nullable();
      $table->date('hebrew_date_of_birth')->nullable();
      $table->boolean('admin');
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
    Schema::dropIfExists('users');
  }
}
