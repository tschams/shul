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
    Schema::create("users", function (Blueprint $table) {
      $table->id();
      $table->boolean("admin");
      $table->boolean("active");
      $table->enum("person_type", ["Head of Household", "Child", "Other"]);
      $table->enum("gender", ["Male", "Female"])->nullable();
      $table->string("email")->unique();
      $table->timestamp("email_verified_at")->nullable();
      $table->string('provider');
      $table->string('provider_id');
      $table->string("password")->nullable();
      $table->rememberToken();
      $table->date("date_of_birth")->nullable();
      $table->date("hebrew_date_of_birth")->nullable();
      $table->enum("tribe", ["Cohen", "Levi", "Yisroel"])->nullable();
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
    Schema::dropIfExists("users");
  }
}
