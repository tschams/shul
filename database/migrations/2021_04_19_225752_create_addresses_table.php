<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddressesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('addresses', function (Blueprint $table) {
      $table->id();
      $table->foreignId('user_id')->constrained();
      $table->string("address_number")->nullable();
      $table->string("street")->nullable();
      $table->string("city")->nullable();
      $table->string("state")->nullable();
      $table->string("country")->nullable();
      $table->string("zip")->nullable();
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
    Schema::dropIfExists('users_addresses');
  }
}
